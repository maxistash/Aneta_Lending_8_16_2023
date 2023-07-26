import requests

endpoint = "http://localhost:8000/api/"

#using post because we are going to send data
get_response = requests.post(endpoint, json={'bank_id':'1', 'loan_requirement':'TBD'})
# can add a json attribute to the get() method 
# params are what you can pass to the url
print(get_response.json())
