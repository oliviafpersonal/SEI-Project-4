from rest_framework import serializers 
from ..models import Mp

class MpSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Mp
        fields = '__all__'
