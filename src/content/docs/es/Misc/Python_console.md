---
title: Consola de Python
---
## Introducción

La consola de Python es un panel que es parte de la [interfaz de usuario](/Interface/es "Interface/es") de FreeCAD. Ejecuta una instancia del intérprete de [Python](/Python/es "Python/es") que puede ser utilizado para controlar los procesos de FreeCAD, y crear y modificar objetos y sus propiedades.

It can be made visible/hidden through the **View → Panels → Python console** drop-down menu.

La consola de Python en FreeCAD tiene resaltado de sintaxis básico, capaz de diferenciarse con varios estilos y colores, comentarios, cadenas, valores numéricos, funciones incorporadas, salida de texto impreso, y delimitadores como paréntesis y comas. Estas propiedades de la consola pueden ser configuradas en el [Editor de Preferencias](/Preferences_Editor/es "Preferences Editor/es").

![](/images/FreeCAD_Python_console.png)

La consola de Python mostrando mensajes cuando FreeCAD acaba de iniciarse.

## Guión

*Para principiantes absolutos, ver:* [Introducción a Python](/Introduction_to_Python/es "Introduction to Python/es"), y [Tutorial de scripting en Python](/Python_scripting_tutorial/es "Python scripting tutorial/es").

*Ver también:* [Conceptos básicos de scripting en FreeCAD](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es"), y [Objetos con scripting](/Scripted_objects/es "Scripted objects/es").

La consola de Python puede realizar un completamiento de código básico cuando se escribe un punto después de un objeto; mostrará los métodos públicos y atributos (variables) del objeto (clase) actual, por ejemplo, `obj.`

La consola también es capaz de mostrar la cadena de documentación de una función concreta cuando se escribe el paréntesis de apertura, por ejemplo, `function(`

![](/images/FreeCAD_Python_console_example.png)

Ejemplo de código Python que produce objetos en la vista 3D.

Los scripts de inicialización de FreeCAD cargan automáticamente algunos módulos, y definen algunos alias. Por lo tanto, en la consola de Python están disponibles

```
App = FreeCAD
Gui = FreeCADGui

```

Por lo tanto, estos son iguales

```
App.newDocument()
FreeCAD.newDocument()

```

*Nota:* estos módulos y alias precargados sólo están disponibles desde la consola de Python incrustada dentro del programa FreeCAD. Si utiliza FreeCAD como una biblioteca en un programa externo, debe recordar cargar los módulos `FreeCAD` y `FreeCADGui` y definir los alias necesarios si lo desea.

## Acciones

Right click on the Python console shows some commands:

* **Copy**: stores the selected text in the clipboard for later pasting; it is disabled if nothing is selected.
* **Copy command**: stores the selected command in the clipboard for later pasting; it is disabled if nothing is selected.
* **Copy history**: copy the entire history of Python commands entered in this session.
* **Save history as**: save the entire history of Python commands entered in this session to a text file.
* **Paste**: paste previously copied text in the clipboard to the Python console.
* **Select all**: selects all text in the Python console.
* **Clear console**: erases all commands entered into the Python console. This is useful if the Python console is full of messages and previously entered commands that may be distracting when testing a new function. This is merely aesthetic, as this command doesn't delete existing variables nor clears the imported modules in the session.
* **Insert file name**: opens a dialog to search for a file in the system, then it inserts the full path of the file. This is useful to test functions that process an input file, without having to write the entire name in the console, which is error prone. This command does not run the file, and does not import it as a Python module, it just returns the full path of that file.
* **Word wrap**: wrap very long lines that exceed the horizontal dimension of the Python console.

## Notas

* One has the ability to scroll the API in the Python console. Example:
  1. In the console type: `FreeCAD.`
  2. A dialog box will display with optional classes/functions to choose from
  3. Scroll through the list to read the description of each class/function
  4. By choosing a function and following it with a `.` one can repeat steps 2 and 3 to traverse deeper in to the API
* Tab/Word completion is supported using the Ctrl+Space shortcut

Retrieved from "<http://wiki.freecad.org/index.php?title=Python_console/es&oldid=1461236>"