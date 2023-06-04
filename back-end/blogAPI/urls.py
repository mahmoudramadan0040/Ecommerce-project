from django.urls import path
from . import views
urlpatterns = [
     path('', views.index),
     path('products/', views.getAllProducts),
     path('get-product/<int:id>/', views.getProduct),
     path('create-product/', views.createProduct),
     path('update-product/<int:id>/', views.updateProduct),
     path('delete-product/<int:id>/', views.deleteProduct),
]
