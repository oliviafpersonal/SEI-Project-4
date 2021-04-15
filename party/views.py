from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework import status 

from .serializers.populated import PopulatedPartySerializer
from .models import party

class partyListView(APIView):
    def get(self, _request):
        party = party.objects.all()
        serialized_party = PopulatedPartySerializer(party, many=True)
        return Response(serialized_party.data, status=status.HTTP_200_OK)


