from django.urls import path 
from .views import MpListView, MpDetailView

urlpatterns = [
    path('', MpListView.as_view()),
    path('<int:pk>/', MpDetailView.as_view())
]