# Generated by Django 3.2.9 on 2021-12-02 10:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_rename_recieved_oon_feedback_recieved_on'),
    ]

    operations = [
        migrations.RenameField(
            model_name='feedback',
            old_name='recieved_on',
            new_name='received_on',
        ),
    ]