# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='EventProvider',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('name', models.CharField(unique=True, max_length=20)),
                ('description', models.TextField(blank=True)),
                ('location', models.CharField(max_length=40, blank=True)),
                ('contact_no', models.IntegerField(null=True, blank=True)),
                ('created_at', models.DateTimeField(db_index=True, auto_now_add=True)),
                ('slug', models.SlugField(unique=True, max_length=20)),
            ],
        ),
    ]
