# Generated by Django 4.2.4 on 2023-08-21 12:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('applicants', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='applicant',
            name='applicant_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
