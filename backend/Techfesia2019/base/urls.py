from django.urls import path, include
from . import views

urlpatterns = [
    path('welcome_email/', views.email_test )
]