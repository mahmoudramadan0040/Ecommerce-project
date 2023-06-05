from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.contrib.auth.models import User
from .serializers import UserSerializer

from rest_framework import status
from rest_framework.authtoken.models import Token

@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data = request.data)
    if(serializer.is_valid()):
        serializer.save()
        user = User.objects.get(username=request.data['username'])
        user.set_password(request.data['password'])
        user.save()
        token = Token.objects.create(user = user)
        return Response({"token": token.key, "user":serializer.data })
    return Response(serializer.errors)


@api_view(['POST'])
def login(request):
    user = User.objects.get(username=request.data['username'])
    if(user):
        if (user.check_password(request.data['password'])):
            token, created = Token.objects.get_or_create(user = user)
            serializer = UserSerializer(user)
            return Response({"token": token.key, "user": serializer.data})
        
    
    return Response("Error, User Doesn’T")

