
# View = OnLoad() behind code, python that executes before Http is generated and sent to client,
# context diectionary is passed to http template and can be used to generate content dynamically

from django.shortcuts import render

from django.template import loader
from django.http import HttpResponse

from .templates import *

from .code.objects import Wall, Start

# Create your views here.




def game_view(request):

    template = loader.get_template('game.html')

    wall_list = []
    for i in range(0,20):
        wall_list.append(Wall(i*50, 200))
        wall_list.append(Wall(i * 50, 0))

    wall_list.append(Wall(0, 50))
    wall_list.append(Wall(0, 100))
    wall_list.append(Wall(0, 150))


    context = {'data': None,
               'objects':{
                   'start':[Start(100,100)],
                   'walls':wall_list
               }
               }




    return HttpResponse(template.render(context, request))
