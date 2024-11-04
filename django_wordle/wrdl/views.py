from django.shortcuts import render
from django.http import HttpRequest, HttpResponse

def index(request: HttpRequest) -> HttpResponse:
    return HttpResponse("Hello, world. You're at the wordle landing page.")