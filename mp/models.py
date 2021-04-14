from django.db import models

class Mp(models.Model):
    name = models.CharField(max_length=80)
    location = models.CharField(max_length=80)
    image = models.CharField(max_length=100)
    free_school_meals = models.CharField(max_length=20)
    coronavirus_face_coverings = models.CharField(max_length=20)
    testing_of_nhs_staff = models.CharField(max_length=20)
    police_crime_sentencing = models.CharField(max_length=20)
    immigration_and_social_security = models.CharField(max_length=20)
    environment_bill = models.CharField(max_length=20)
    european_union_withdrawal = models.CharField(max_length=20)
    domestic_abuse_bill = models.CharField(max_length=20)
    nhs_pay_award = models.CharField(max_length=20)
    agriculture_act = models.CharField(max_length=20)



    def __str__(self):
        return f"{self.name}, {self.location}"


