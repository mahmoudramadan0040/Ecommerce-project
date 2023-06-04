from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Product
from .serializers import ProductSerializer

@api_view(['GET'])
def index(request):
    return Response({"MR.MO3 IS SPEAKING: SET UP IS SUCCESSFUL"})



@api_view(['GET'])
def getAllProducts(request):
    products = Product.objects.all()
    serialized_Products = ProductSerializer(products, many=True)
    return Response(serialized_Products.data)

@api_view(['GET'])
def getProduct(request, id):
   # ProductID = #request.query_params.get('id')#request.data.get('product_id')
    try:       
        product = Product.objects.get(id=id)
        serialized_Product = ProductSerializer(product)
        return Response(serialized_Product.data, status=200)
    except:
        return Response({"Error - This Product Doesn’t Exist"}, status=400)
    
    
@api_view(['GET', 'POST'])
def createProduct(request):
    product = request.data
    serialized_Product = ProductSerializer(data=product)
    if (serialized_Product.is_valid()):
        serialized_Product.save()
        return Response(serialized_Product.data,status=201)
    else:
        return Response(serialized_Product.errors, status=400)
    
@api_view(['PUT'])
def updateProduct(request, id):
    #ProductID = request.data.get('product_id')
    newtitle = request.data.get('title')
    newdescription = request.data.get('description')
    newprice = request.data.get('price')
    newimageSRC = request.data.get('imageSRC')
    
    
    try:
        product = Product.objects.get(id=id)
        for key, value in request.POST.items():
             setattr(product, key, value)
        product.save()
    
        # product.title = newtitle
        # product.description = newdescription
        # product.price = newprice
        # product.imageSRC = newimageSRC
        # serialized_Product = ProductSerializer(product)
        # product.save()
        return Response(product, status=200)
    except:
        return Response({"Error - This Product Doesn’t Exist"}, status=400)
    

@api_view(['DELETE'])
def deleteProduct(request, id):
   # ProductID = request.data.get('product_id')
    try:
        product = Product.objects.get(id=id)
        product.delete()
        return Response('{} is deleted'.format(product))
        #return Response({`$productProduct Deleted`},status=200)
    except:
        return Response({"Error - This Product Doesn’t Exist"}, status=400)