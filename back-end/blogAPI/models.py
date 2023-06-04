from django.db import models

class Product(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    price = models.IntegerField(default=0)
    imageSRC = models.CharField(max_length = 1000)
    create_at = models.DateTimeField(auto_now_add=True)
    #updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)

    
    
    def __str__(self):
        return self.title