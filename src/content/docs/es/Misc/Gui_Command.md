---
title: Gui Command
---
Los comandos de la interfaz gráfica de usuario (GuiCommand) son una de las funciones más importantes de FreeCAD en el principal punto de interacción del usuario. Cada vez que el usuario selecciona un elemento del menú o presiona un botón de una barra de herramientas se activa un comando de la interfaz gráfica de usuario. Alguno de los atributos de un comandos de la interfaz gráfica de usuario (GuiCommand) son:

* Define un nombre
* Contiene un icono
* Define el alcance para deshacer/rehacer
* Tiene una página de ayuda
* Abre y controla letreros de diálogo
* Grabación de macros
* etc...

## Naming

### Denominación

Los comandos de la interfaz gráfica de usuario se denominan de cierta forma: *ModuleName\_CommandName*
Por ejemplo "Base\_Open" este es el comando Abrir de la interfaz gráfica de usuario en el sistema base.
Los comandos de la interfaz gráfica de usuario en un módulo determinado se denominan con el nombre del módulo como prefijo. Por ejemplo "Part\_Cylinder".

Si la documentación no está terminada utiliza la plantilla [Template:UnfinishedDocu](/Template:UnfinishedDocu "Template:UnfinishedDocu")

## Help page

### Página de ayuda

Todos los comandos de la interfaz gráfica de usuario deben tener una página de ayuda. La página de ayuda está alojada en la wiki de documentación de FreeCAD. El artículo tiene el mismo nombre que el comando de la interfaz gráfica de usuario. Por ejemplo [Draft ShapeString](/Draft_ShapeString/es "Draft ShapeString/es").

Para crear tus propias páginas de ayuda puedes utilizar la plantilla:
[GuiCommand model](/GuiCommand_model "GuiCommand model")

Ejemplo:

* [Draft ShapeString](/Draft_ShapeString/es "Draft ShapeString/es")
* [Draft Line](/Draft_Line/es "Draft Line/es")

### Iconos

![](/images/Tango-Palette.png)

![](/images/Tango-Palette.png)

Todos los comandos de la interfaz gráfica de usuario deben tener un icono. Utilizamos la [Colección de iconos Tango](http://tango.freedesktop.org/Tango_Desktop_Project) y sus recomendaciones. A la derecha puedes ver la paleta de colores del proyecto Tango.

Preferiblemente todos los iconos serán dibujados en formato de Gráficos Vectoriales Escalables (SVG) por ejemplo con [Inkscape](http://inkscape.org).
Esto hace que sea más sencillo aplicar cambios y crear iconos adicionales similares en el mismo espacio de la aplicación.

### Icons color coding chart

![](/images/Colorchart.png)

We try as much as possible to respect this chart, so the color of the icons has a direct meaning.

Retrieved from "<http://wiki.freecad.org/index.php?title=Gui_Command/es&oldid=1173292>"