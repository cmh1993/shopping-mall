# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-12-12 07:52
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mall', '0012_goods_goods_cnt'),
    ]

    operations = [
        migrations.CreateModel(
            name='Options',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stock', models.IntegerField(default=0)),
                ('goods_color', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Option', to='mall.Color')),
                ('goods_size', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Option', to='mall.Size')),
            ],
        ),
    ]