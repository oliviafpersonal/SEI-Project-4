# Generated by Django 3.2 on 2021-04-21 09:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0002_user_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='photo',
            field=models.CharField(default='https://toppng.com/uploads/preview/red-question-mark-png-11552242990hpigioc6g8.png', max_length=300),
        ),
    ]
