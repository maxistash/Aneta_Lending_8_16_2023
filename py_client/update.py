import requests

endpoint = "http://localhost:8000/api/loans/1/update/"

data = {
    'bank_id': "Mosaic",
    'loan_requirement': 'Credit Score of at least 700'
}
#using get because we are going to lookup data
get_response = requests.put(endpoint, json=data)
print(get_response.json())
