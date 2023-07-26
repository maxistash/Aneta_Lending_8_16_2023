import requests

endpoint = "http://localhost:8000/api/loans/1098098/"

#using get because we are going to lookup data
get_response = requests.get(endpoint)
print(get_response.json())
