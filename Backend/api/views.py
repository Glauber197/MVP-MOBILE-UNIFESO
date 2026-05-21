from rest_framework import viewsets
from django.db.models import Q
from django.utils import timezone
from .models import Parque, Trilha, Evento, Biodiversidade
from .serializers import ParqueSerializer, TrilhaSerializer, EventoSerializer, BiodiversidadeSerializer


class ParqueViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Parque.objects.all()
    serializer_class = ParqueSerializer


class TrilhaViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Trilha.objects.filter(status_aberta=True)
    serializer_class = TrilhaSerializer
    filterset_fields = ['parque', 'dificuldade']


class EventoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Evento.objects.filter(
        Q(data_fim__isnull=True) | Q(data_fim__gte=timezone.now())
    )
    serializer_class = EventoSerializer
    ordering_fields = ['data_inicio']
    filterset_fields = ['parque']


class BiodiversidadeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Biodiversidade.objects.all()
    serializer_class = BiodiversidadeSerializer
    filterset_fields = ['parque','categoria','status_conservacao']
    ordering_fields = ['nome_comum']