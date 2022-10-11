from rest_framework import serializers
from .models import Menu

class MenuSerializer(serializers.ModelSerializer):

    class Meta:
        model = Menu
        fields = ('pk', 'name', 'icon', 'url_path', 'parent_id')