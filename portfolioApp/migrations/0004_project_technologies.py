# Generated by Django 3.2.4 on 2021-10-12 19:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioApp', '0003_auto_20211010_2002'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='technologies',
            field=models.CharField(blank=True, max_length=500),
        ),
    ]
