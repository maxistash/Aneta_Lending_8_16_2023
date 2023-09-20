# Generated by Django 4.2.4 on 2023-08-24 18:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('banks', '0002_rename_bank_logo_bank_name_remove_bank_bank_id_and_more'),
        ('loans', '0006_remove_loan_bank'),
    ]

    operations = [
        migrations.AddField(
            model_name='loan',
            name='bank_id',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='banks.bank'),
        ),
    ]