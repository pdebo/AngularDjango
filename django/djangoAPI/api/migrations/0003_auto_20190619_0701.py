# Generated by Django 2.2.2 on 2019-06-19 07:01

from django.db import migrations
import unixtimestampfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20190619_0643'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article-page',
            name='Date',
        ),
        migrations.RemoveField(
            model_name='tips',
            name='Date',
        ),
        migrations.AddField(
            model_name='article-page',
            name='date',
            field=unixtimestampfield.fields.UnixTimeStampField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='tips',
            name='date',
            field=unixtimestampfield.fields.UnixTimeStampField(default=0),
            preserve_default=False,
        ),
    ]