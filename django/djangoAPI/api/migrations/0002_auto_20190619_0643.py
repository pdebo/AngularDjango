# Generated by Django 2.2.2 on 2019-06-19 06:43

from django.db import migrations, models
import django.utils.timezone
import unixtimestampfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tips',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=64)),
                ('desc', models.CharField(max_length=300)),
                ('content', models.CharField(max_length=3000)),
                ('Date', unixtimestampfield.fields.UnixTimeStampField(auto_now_add=True)),
                ('author', models.CharField(max_length=64)),
            ],
        ),
        migrations.CreateModel(
            name='WhoAreWe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=64)),
                ('desc', models.CharField(max_length=300)),
                ('content', models.CharField(max_length=3000)),
            ],
        ),
        migrations.RemoveField(
            model_name='article-page',
            name='date',
        ),
        migrations.AddField(
            model_name='article-page',
            name='Date',
            field=models.DateTimeField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='article-page',
            name='author',
            field=models.CharField(default='Pol Deborsu', max_length=64),
            preserve_default=False,
        ),
    ]
