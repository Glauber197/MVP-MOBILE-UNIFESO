from rest_framework.routers import DefaultRouter
from .views import ParqueViewSet, TrilhaViewSet, EventoViewSet, BiodiversidadeViewSet

router = DefaultRouter()
router.register(r'parques', ParqueViewSet)
router.register(r'trilhas', TrilhaViewSet)
router.register(r'eventos', EventoViewSet)
router.register(r'biodiversidades', BiodiversidadeViewSet)

urlpatterns = router.urls