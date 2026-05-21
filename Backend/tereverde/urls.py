from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect

admin.site.site_header = "Tere Verde Administração" 
admin.site.site_title = "Tere Verde Admin Portal" 
admin.site.index_title = "Bem-vindo ao Portal de Administração Tere Verde"

def redirect_to_admin(request):
    return redirect('/admin/')

urlpatterns = [
    path('', redirect_to_admin),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]
