from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import (
    UserViewSet,
    ProductViewSet,
    CategoryViewSet,
    OrderViewSet,
    ShoppingCartViewSet,
    UserRegistrationAPIView,
    UserLoginAPIView,
    ProductSearchAPIView,
    CategoryProductsView,
    AddToCartView,
)

# Create a router and register the viewsets
router = DefaultRouter()
router.register('users', UserViewSet, basename='users')
router.register('products', ProductViewSet, basename='products')
router.register('categories', CategoryViewSet, basename='categories')
router.register('orders', OrderViewSet, basename='orders')
router.register('shoppingcarts', ShoppingCartViewSet, basename='shoppingcarts')

urlpatterns = [
    # API endpoints
    path('api/', include(router.urls)),
    path('api/register/', UserRegistrationAPIView.as_view(), name='user-registration'),
    path('api/login/', UserLoginAPIView.as_view(), name='user-login'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/categories/<int:category_id>/products/', CategoryProductsView.as_view(), name='category-products'),
    path('api/products/search/', ProductSearchAPIView.as_view(), name='product-search'),
    path('api/cart/add/', AddToCartView.as_view(), name='add-to-cart'),
]
