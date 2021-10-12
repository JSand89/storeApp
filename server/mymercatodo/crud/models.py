from django.db import models

# Create your models here.

class Product(models.Model):
    prod_id = models.AutoField(primary_key=True)
    prod_name = models.CharField(max_length=150)
    prod_provider = models.CharField(max_length=150)
    prod_existences = models.IntegerField(default=0)
    prod_date = models.DateField()
    prod_description = models.CharField(max_length=450)
    prod_category = models.CharField(max_length=50)

