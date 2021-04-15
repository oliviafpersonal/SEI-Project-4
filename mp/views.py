from django.shortcuts import render
from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status 
from rest_framework.exceptions import NotFound

from .models import Mp 
from .serializers.common import MpSerializer
from .serializers.populated import PopulatedMpSerializer

class MpListView(APIView):

    def get(self, _request):
        mps = Mp.objects.all()
        serialized_mps = PopulatedMpSerializer(mps, many=True)
        return Response(serialized_mps.data, status=status.HTTP_200_OK)

class MpDetailView(APIView):

    def get_mp(self, pk):
        try:
            return Mp.objects.get(pk=pk)
        except Mp.DoesNotExist:
            raise NotFound(detail="Cannot find that mp")

    def get(self, _request, pk):
        mp = self.get_mp(pk=pk)
        serialized_mps = PopulatedMpSerializer(mp)
        return Response(serialized_mps.data, status=status.HTTP_200_OK)


