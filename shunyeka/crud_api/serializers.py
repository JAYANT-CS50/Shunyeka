from rest_framework import serializers
from .models import Userdata

class UserdataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userdata
        fields = '__all__'
