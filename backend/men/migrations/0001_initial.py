# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-20 03:39
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SweaterForMen',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mainImage', models.ImageField(upload_to='', verbose_name='MainImage')),
                ('name', models.CharField(max_length=50)),
                ('price', models.CharField(max_length=30)),
                ('styleNum', models.CharField(max_length=30)),
                ('description', models.CharField(max_length=500)),
            ],
        ),
    ]
