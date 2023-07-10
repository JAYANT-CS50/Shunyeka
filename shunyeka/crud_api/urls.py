from django.urls import path, include 
from .views import UserdataVS
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users', UserdataVS, basename='user')


urlpatterns = [
    path('', include(router.urls)),
    
    

]