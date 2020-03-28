from PIL import Image
from .objects import Wall, Start

def load_level(filename):
    level_file = Image.open('{}.bmp'.format(filename))
    width, height = level_file.size

    cell_width = 50
    cell_height = 50
    #cell_width = round(1/width,2)
    #cell_height = round(1/height,2)

    print(level_file.getcolors())

    wall_list = []

    level_map = level_file.getdata()
    for i_height in range(0, height):
        cell_pos_y = i_height * cell_height
        for i_width in range(0,width):
            cell_pos_x = i_width * cell_width
            try:
                value = level_map[i_height*width+i_width]
                if value == (255):
                    wall_list.append(Wall(cell_pos_x,cell_pos_y))
            except:
                continue

    return {
        'start':[Start(100,100)],
        'walls':wall_list
            }



