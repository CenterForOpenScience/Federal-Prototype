# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-06-30 18:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_submitted', models.DateTimeField(auto_now_add=True)),
                ('date_published', models.DateTimeField()),
                ('title', models.CharField(max_length=200)),
                ('publisher', models.CharField(max_length=100)),
                ('institution', models.CharField(max_length=100)),
                ('status', models.CharField(max_length=50)),
                ('file_link', models.CharField(max_length=200)),
                ('PI_first_name', models.CharField(max_length=50)),
                ('PI_last_name', models.CharField(max_length=50)),
                ('PI_email', models.EmailField(max_length=100)),
                ('author_list', models.CharField(max_length=500)),
            ],
            options={
                'permissions': (('view_document', 'View document'),),
            },
        ),
        migrations.AddField(
            model_name='department',
            name='documents',
            field=models.ManyToManyField(to='api.Document'),
        ),
    ]
