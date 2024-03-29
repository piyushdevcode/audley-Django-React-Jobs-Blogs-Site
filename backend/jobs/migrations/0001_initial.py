# Generated by Django 3.2.9 on 2022-05-28 19:02

from django.db import migrations, models
import django.utils.timezone
import taggit.managers


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('taggit', '0005_auto_20220424_2025'),
    ]

    operations = [
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('description', models.TextField(max_length=500)),
                ('location', models.CharField(max_length=50)),
                ('location_type', models.CharField(choices=[('Remote', 'Remote'), ('Office', 'Office'), ('Remote and Office', 'Remote and Office')], max_length=30)),
                ('company_name', models.CharField(max_length=50)),
                ('salary', models.IntegerField(blank=True, default=0)),
                ('company_website', models.CharField(default='', max_length=50)),
                ('posted_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('last_date', models.DateTimeField()),
                ('type', models.CharField(choices=[('Full Time', 'Full Time'), ('Part Time', 'Part Time'), ('Intership', 'Intership')], max_length=30)),
                ('category', models.CharField(max_length=50)),
                ('tags', taggit.managers.TaggableManager(help_text='A comma-separated list of tags.', through='taggit.TaggedItem', to='taggit.Tag', verbose_name='Tags')),
            ],
            options={
                'ordering': ['last_date'],
            },
        ),
    ]
