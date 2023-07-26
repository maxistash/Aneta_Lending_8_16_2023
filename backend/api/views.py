
from django.forms.models import model_to_dict
from loans.models import Loan
from rest_framework.response import Response
from rest_framework.decorators import api_view
from loans.serializers import LoanSerializer


# this is talking about which methods we want to allow into our api
# aka post, get, put, delete
@api_view(['POST'])
def api_home(request, *args, **kwards):
  '''
  DRF API VIEW
  '''
  
  serializer = LoanSerializer(data=request.data)
  if serializer.is_valid(raise_exception=True):
    # instance = serializer.save()
    print(serializer.data)
    return Response(serializer.data)
  return Response({'invalid':'not good data'}, status=400)
  #instance = Loan.objects.all().order_by('?').first()
  #this^ is grabbing everything from the database and ordering it
  
    #data = model_to_dict(model_data)
    # can add 'fields' to the model_to_dict method to access specific keys in the dictionary you pass it
    

# Create your views here.
