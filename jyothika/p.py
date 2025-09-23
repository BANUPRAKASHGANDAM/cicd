class parent:
    def show(self):
        print("inside parent")
class child:
    def show(self):
        print("inside child")
        parent.show(self)
        obj=child()
        obj.show()   