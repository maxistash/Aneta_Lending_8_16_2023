from django import forms

class ApplicantForm(forms.Form):
    class Meta:
        model = Applicant
        fields = {
            'first_name','last_name','applicant_email',
            'phone_number','street_address','city',
            'state','zip_code','dob', 'ssn'}
        
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field in self.fields:
            new_data = {
                'placehold'
            }
    # 
    # first_name = forms.CharField(label='First Name', max_length=30)
    # last_name = forms.CharField(label='Last Name', max_length=30)
    # applicant_email = forms.EmailField(label='Email')
    # phone_number = forms.
    # street_address
    # city
    # state
    # zip_code
    # dob