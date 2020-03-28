class Wall():
    def __init__(self, x,y):
        self.x = x
        self.y = y

class Start():
    def __init__(self, x,y):
        self.x = x
        self.y = y

class Actor():
    def __init__(self, x,y, behaviour = {}):
        self.x = x
        self.y = y
        self.behaviour = behaviour