from django.db import models

class Mp(models.Model):
    name = models.CharField(max_length=80, default='name')
    location = models.CharField(max_length=80, default='location')
    image = models.CharField(max_length=100, default='img')
    free_school_meals = models.CharField(max_length=20, default='yes')
    coronavirus_face_coverings = models.CharField(max_length=20, default='yes')
    testing_of_nhs_staff = models.CharField(max_length=20, default='yes')
    police_crime_sentencing = models.CharField(max_length=20, default='yes')
    immigration_and_social_security = models.CharField(max_length=20, default='yes')
    environment_bill = models.CharField(max_length=20, default='yes')
    european_union_withdrawal = models.CharField(max_length=20, default='yes')
    domestic_abuse_bill = models.CharField(max_length=20, default='yes')
    nhs_pay_award = models.CharField(max_length=20, default='yes')
    agriculture = models.CharField(max_length=20, default='yes')
    offensive_weapons_report_nc26 = models.CharField(max_length=20, default='yes')
    windrush = models.CharField(max_length=20, default='yes')
    unaccompanied_children = models.CharField(max_length=20, default='yes')
    trade_bill = models.CharField(max_length=20, default='yes')
    financial_assitance_to_industry = models.CharField(max_length=20, default='yes')
    health_protection = models.CharField(max_length=20, default='yes')
    brexit_air_quality = models.CharField(max_length=20, default='yes')
    combating_violence_against_women = models.CharField(max_length=20, default='yes')
    relationships_sex_education = models.CharField(max_length=20, default='yes')
    brexit_rural_economy = models.CharField(max_length=20, default='yes')
    party = models.ManyToManyField("party.party", related_name="mp")





    def __str__(self):
        return f"{self.name}, {self.location}"


