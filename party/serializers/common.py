from rest_framework import serializers
from ..models import party

class partySerializer(serializers.ModelSerializer):

    class Meta:
        model = party
        fields = '__all__'