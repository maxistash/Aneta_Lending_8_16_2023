from rest_framework import mixins, viewsets
from .models import Loan
from .serializers import LoanSerializer

class LoanViewSet(viewsets.ModelViewSet):
    queryset = Loan.objects.all()
    serializer_class = LoanSerializer
    lookup_field = 'pk'


class LoanGenericViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    queryset = Loan.objects.all()
    serializer_class = LoanSerializer
    lookup_field = 'pk'