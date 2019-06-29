from django.urls import path, include
from . import views

urlpatterns = [
    path('email_test/', views.email_test )
]