
# View = OnLoad() behind code, python that executes before Http is generated and sent to client,
# context diectionary is passed to http template and can be used to generate content dynamically

from django.shortcuts import render

from django.template import loader
from django.http import HttpResponse

from .templates import *

from .code.level import load_level

# Create your views here.






def game_view(request):

    template = loader.get_template('game.html')

    level_object_dict = load_level('static/gamedata/levels/test')

    context = {'data': None,
               'objects':level_object_dict
               }




    return HttpResponse(template.render(context, request))
