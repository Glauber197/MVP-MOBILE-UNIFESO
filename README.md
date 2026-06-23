# MVP - Mobile

## Equipe de Desenvolvimento
- **Glauber Medeiros**

# Projeto - Circuito Terê Verde
- **Aplicação web progressiva (PWA) desenvolvida para centralizar informações sobre parques, trilhas, eventos e biodiversidade da cidade de Teresópolis, permitindo consulta pública e gerenciamento através de painel administrativo.**

## 🚀 Tecnologias utilizadas

### Frontend

- React
- React Router DOM
- Axios
- CSS3
- Vite

### Backend

- Python 3
- Django
- Django REST Framework
- Django CORS Headers
- Pillow

### Banco de dados

- SQLite
  
### PWA

- vite-plugin-pwa
- Service Worker
- Web App Manifest
  
---

# Como executar o projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/Glauber197/MVP-MOBILE-UNIFESO
```

Entrar na pasta

```bash
cd MVP-MOBILE-UNIFESO
```

---

# Backend

Entrar na pasta

```bash
cd Backend
```

Criar ambiente virtual

Windows

```bash
python -m venv venv
```

Ativar ambiente virtual

```bash
venv\Scripts\activate
```

Instalar dependências

```bash
pip install -r requirements.txt
```

Caso o arquivo requirements.txt não exista

```bash
pip install django
pip install djangorestframework
pip install django-cors-headers
pip install pillow
```

Executar as migrações

```bash
python manage.py migrate
```

Criar superusuário

```bash
python manage.py createsuperuser
```

Executar o servidor

```bash
python manage.py runserver
```

Backend disponível em

```
http://127.0.0.1:8000/api/
```

Área administrativa

```
http://127.0.0.1:8000/admin/
```

---

# Frontend

Abrir outro terminal

Entrar na pasta

```bash
cd frontend
```

Instalar dependências

```bash
npm install
```

Executar

```bash
npm run dev
```

Frontend disponível em

```
http://localhost:5173/
```
---

## 📱 PWA

O projeto está preparado para funcionar como Progressive Web App (PWA), permitindo instalação diretamente pelo navegador.

Funcionalidades:

- Instalação na tela inicial
- Interface responsiva
- Cache de arquivos estáticos
- Funcionamento offline para páginas já visitadas

---
