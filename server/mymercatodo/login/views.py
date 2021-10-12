from django.http.response import HttpResponse
from django.shortcuts import render
from .models import *
# Create your views here.

def index(request):
    return HttpResponse("login Form")
