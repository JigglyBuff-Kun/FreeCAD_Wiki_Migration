---
title: Gui Command
---
GuiCommand este una dintre cele mai importante funcții ale FreeCAD
în principalul punct de interacțiune al utilizatorului. De fiecare dată când utilizatorul
selectează un element de meniu sau apasă butonul unei bare de instrumente pe care îl activează a
GuiCommand. Unele dintre atributele unui GuiCommand sunt:

* Definește un nume
* Conține o pictogramă
* Definește domeniul de aplicare pentru o anulare / refacere
* Are o pagină de ajutor
* Deschide și controlează dialogurile
* Înregistrare macro
* si asa mai departe...

## Naming

### Nominalizare

The GuiCommand is named in a certain way: *ModuleName\_CommandName*
e.g "Base\_Open" this is the Open Gui Command in the Base system.
The GuiCommand in a certain module is named with the module name
in front e.g. "Part\_Cylinder".

If the docu is not finished use [Template:UnfinishedDocu](/Template:UnfinishedDocu "Template:UnfinishedDocu")

## Help page

### Pagina Help

Fiecare GuiCommand trebuie să aibă o pagină de ajutor. Pagina de ajutor este găzduită pe
FreeCAD docu wiki. Articolul are același nume ca și GuiCommand, de ex. [Draft ShapeString](/Draft_ShapeString "Draft ShapeString").

To create your own help pages you can use the template:
[GuiCommand model](/GuiCommand_model "GuiCommand model")

Exemplu:

* [Draft ShapeString](/Draft_ShapeString "Draft ShapeString")
* [Draft Line](/Draft_Line "Draft Line")

### Iconițe

![](/images/Tango-Palette.png)

![](/images/Tango-Palette.png)

Every GuiCommand has to have an icon. We use the [Tango icon set](http://tango.freedesktop.org/Tango_Desktop_Project) and its guidelines. On the right side you see
the tango color palette.

Preferable all Icons are drafted with SVG with e.g. [Inkscape](http://inkscape.org).
This makes it easier to apply changes and derive
additional Icons in the same application space.

**icons color coding chart**

![](/images/Colorchart.png)

Încercăm cât mai mult posibil să respectăm această diagramă, astfel încât culoarea icoanelor are un sens direct.

Retrieved from "<http://wiki.freecad.org/index.php?title=Gui_Command/ro&oldid=1173282>"