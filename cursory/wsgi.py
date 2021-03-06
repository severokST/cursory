"""
WSGI config for cursory project.

It exposes the WSGI callable as a module-level.py variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'cursory.settings')

application = get_wsgi_application()
