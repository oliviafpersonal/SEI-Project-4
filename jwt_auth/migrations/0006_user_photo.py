# Generated by Django 3.2 on 2021-04-21 10:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0005_remove_user_photo'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='photo',
            field=models.CharField(default='', max_length=300),
        ),
    ]
