# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.core.validators


class Migration(migrations.Migration):

    dependencies = [
        ('provider', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('name', models.CharField(max_length=20, unique=True)),
                ('price', models.PositiveIntegerField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(500)])),
                ('images', models.CharField(blank=True, max_length=200)),
                ('description', models.TextField(blank=True)),
                ('days', models.PositiveIntegerField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(31)])),
                ('created_at', models.DateTimeField(db_index=True, auto_now_add=True)),
                ('event_provider', models.ForeignKey(related_name='events', to='provider.EventProvider')),
            ],
        ),
    ]
