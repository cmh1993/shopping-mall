# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-12-15 03:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mall', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='goods',
            name='style_num',
            field=models.IntegerField(max_length=10, primary_key=True, serialize=False),
        ),
    ]