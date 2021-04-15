from django.urls import path 
from .views import partyListView

urlpatterns = [
    path('', partyListView.as_view())
]