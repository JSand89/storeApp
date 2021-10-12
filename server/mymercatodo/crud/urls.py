from django.urls import path
from .views import ProductView
from . import views


urlpatterns = [
    path('product/', ProductView.as_view(), name='products'),
    path('product/<int:id>', ProductView.as_view(), name='product'),
    path('', views.index, name='index'),
]
