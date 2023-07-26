import requests

headers = {
    'Authorization': 'Bearer 94c2e61202ac3303b49bb92fd2d56b87194e303a'
}
endpoint = "http://localhost:8000/api/loans/"

data = {
    'bank_id': 'GoodLeap',
    'apr': 3.99,
    'amount': 7500,
    'term': 194,
    'dealer_fee': 10.99
}
#using get because we are going to lookup data
get_response = requests.post(endpoint, json=data, headers=headers)
print(get_response.json())
