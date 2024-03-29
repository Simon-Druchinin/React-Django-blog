from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Menu
from .serializers import *

@api_view(['GET', 'POST'])
def menu_list(request):
    if request.method == 'GET':
        data = Menu.objects.all()

        serializer = MenuSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = MenuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def menu_detail(request, pk):
    try:
        menu = Menu.objects.get(pk=pk)
    except Menu.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PUT':
        serializer = MenuSerializer(menu, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        menu.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)