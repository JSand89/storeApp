from django.http.response import JsonResponse
from django.http.response import HttpResponse
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json

from .models import Product

#login required  class ProductView(LoginRequiredMixin,View):

# Create your views here.
class ProductView(LoginRequiredMixin,View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs) -> HttpResponse:
        return super().dispatch(request, *args, **kwargs)

    def get(self, request,id=0):
        if(id>0):
            products=list(Product.objects.filter(prod_id=id).values())
            if len(products)>0:
                product=products[0]
                datos={'message':"Exito","producto":product}
            else:
                datos={'message':"Productos no encontrados"}
            return JsonResponse(datos)
        else:
            products=list(Product.objects.values())
            if len(products)>0:
                datos={'message':"Exito","productos":products}
            else:
                datos={'message':"Productos no encontrados"}
            return JsonResponse(datos)
       


    def post(self, request):
        
        jd=json.loads(request.body)
       # print(jd)
        Product.objects.create( prod_name=jd['prod_name'],
        prod_provider=jd['prod_provider'],
        prod_existences=jd['prod_existences'],
        prod_date=jd['prod_date'],
        prod_description= jd['prod_description'],
        prod_category= jd['prod_category'])
        datos={'message':"Exito"}
        return JsonResponse(datos)


    def put(self,request,id):
        jd=json.loads(request.body)
        products=list(Product.objects.filter(prod_id=id).values())

        if len(products)>0:

            product=Product.objects.get(prod_id=id) 
            product.prod_name=jd['prod_name'],
            product.prod_provider=jd['prod_provider'],
            product.prod_existences=jd['prod_existences'],
            product.prod_date=jd['prod_date'],
            product.prod_description= jd['prod_description'],
            product.prod_category= jd['prod_category']
            product.save()
            datos={'message':"Exito"}


        else:
            datos={'message':"Productos no encontrados"}

        return JsonResponse(datos)


    def delete(self, request,id):
        products=list(Product.objects.filter(prod_id=id).values())
        if len(products)>0:
            Product.objects.filter(prod_id=id).delete()
            datos={'message':"Exito"}

        else:
            datos={'message':"Productos no encontrados"}

def index(request):
    return HttpResponse("crud Form")