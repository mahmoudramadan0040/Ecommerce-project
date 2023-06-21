from django.contrib.auth import get_user
from rest_framework import generics, status, viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User, Product, Category, Order, ShoppingCart, CartItem
from .serializers import (
    UserSerializer,
    ProductSerializer,
    CategorySerializer,
    OrderSerializer,
    ShoppingCartSerializer,
    UserLoginSerializer,
)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


    @action(detail=False, methods=['PUT'])
    def update_profile(self, request):
        user = request.user
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_permissions(self):
        if self.action == 'update_profile':
            permission_classes = [permissions.IsAuthenticated]
        else:
            permission_classes = [permissions.AllowAny]
        return [permission() for permission in permission_classes]

class CategoryProductsView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        try:
            category = Category.objects.get(id=category_id)
            products = category.products.all()
            return products
        except Category.DoesNotExist:
            return []

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            permission_classes = [permissions.AllowAny]
        else:
            permission_classes = [permissions.IsAuthenticated]
        return [permission() for permission in permission_classes]

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            permission_classes = [permissions.AllowAny]
        else:
            permission_classes = [permissions.IsAuthenticated]
        return [permission() for permission in permission_classes]

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class ShoppingCartViewSet(viewsets.ModelViewSet):
    queryset = ShoppingCart.objects.all()
    serializer_class = ShoppingCartSerializer

class UserRegistrationAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

class UserLoginAPIView(APIView):
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']

        refresh = RefreshToken.for_user(user)
        token = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'email': user.email,
            'is_admin': user.is_staff and user.is_superuser,
        }
        return Response(token, status=status.HTTP_200_OK)

class ProductSearchAPIView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        search_query = self.request.GET.get('search')
        queryset = Product.objects.all()

        if search_query:
            queryset = queryset.filter(title__icontains=search_query)

        return queryset

class AddToCartView(APIView):
    def post(self, request):
        if request.user.is_authenticated:
            user = request.user
        else:
            user = get_user(request)
        product_id = request.data.get('productId')
        quantity = request.data.get('quantity')

        try:
            product = Product.objects.get(id=product_id)
            shopping_cart, created = ShoppingCart.objects.get_or_create(user=user)
        except (Product.DoesNotExist, ShoppingCart.DoesNotExist):
            return Response({'error': 'Invalid product or shopping cart'}, status=status.HTTP_400_BAD_REQUEST)

        cart_item, created = CartItem.objects.get_or_create(shopping_cart=shopping_cart, product=product)
        cart_item.quantity += int(quantity)
        cart_item.save()

        serializer = ShoppingCartSerializer(shopping_cart)
        return Response(serializer.data, status=status.HTTP_200_OK)
