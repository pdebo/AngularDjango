# Generated by Django 2.2.2 on 2019-06-19 07:45

from django.db import migrations, models
import unixtimestampfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20190619_0705'),
    ]

    operations = [
        migrations.CreateModel(
            name='File',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to='')),
            ],
        ),
        migrations.AlterField(
            model_name='tips',
            name='date',
            field=unixtimestampfield.fields.UnixTimeStampField(auto_now_add=True),
        ),
    ]
