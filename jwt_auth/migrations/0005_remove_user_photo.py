# Generated by Django 3.2 on 2021-04-21 09:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0004_alter_user_photo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='photo',
        ),
    ]