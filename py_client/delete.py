import requests

loan_id = input("WHat is the loan id you want to use?\n")
try:
    loan_id = int(loan_id)
except:
    loan_id = None
    print(f'{loan_id} not a valid id')

if loan_id:
    endpoint = f"http://localhost:8000/api/loans/{loan_id}/delete/" 

    get_response = requests.delete(endpoint) 
    print(get_response.status_code,get_response.status_code==204 )