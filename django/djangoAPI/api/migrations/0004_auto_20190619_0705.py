# Generated by Django 2.2.2 on 2019-06-19 07:05

from django.db import migrations
import unixtimestampfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20190619_0701'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article-page',
            name='date',
            field=unixtimestampfield.fields.UnixTimeStampField(auto_now_add=True),
        ),
    ]
