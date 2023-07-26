from django.shortcuts import render
from rest_framework import generics
from loans.models import Loan
from loans.serializers import LoanSerializer
from . import client
from rest_framework.response import Response


class SearchListView(generics.GenericAPIView):
    def get(self, request, *args, **kwargs):
        user = None
        if request.user.is_authenticated:
            user = request.user.username
        query = request.GET.get('q')
        public = str(request.Get.get('public')) != 0
        tag = request.GET.get('tag') or None
        if not query:
            return Response('', status=400)
        results = client.perform_search(query, tags=tag, user=user, public=public)
        return Response(results)

class SearchListOldView(generics.ListAPIView):
    queryset = Loan.objects.all()
    serializer_class = LoanSerializer

    def get_queryset(self, *args, **kwargs):
        queryset =  super().get_queryset(*args, **kwargs)
        query = self.request.GET.get('q')
        results = Loan.objects.none()
        if query is not None:
            user = None
            if self.request.user.is_authenticated:
                user = self.request.user
            results = queryset.search(query, user=user)
        return results
# Create your views here.
