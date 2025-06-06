---
title: Vista de informe
---
## Introducción

La vista de informe es un panel que muestra los mensajes de texto de los procesos y herramientas de FreeCAD. Está disponible en el menú **[Vista](/Std_View_Menu/es "Std View Menu/es") → Paneles → Vista de informe**.

Ciertas propiedades de este panel, como el color del texto y si se muestra automáticamente en caso de advertencias o errores, se pueden configurar en la pestaña **General → Vista de informe** del [editor de preferencias](/Preferences_Editor#Report_view/es "Preferences Editor").

![](/images/FreeCAD_Report_view.png)

La vista del informe que muestra los mensajes cuando FreeCAD acaba de iniciarse.

## Mensajes

*Ver también:* [AIP de la consola](/Console_API/es "Console API/es"), y [Fundamentos de scripting de FreeCAD](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es").

La vista de informe muestra mensajes de la clase interna de FreeCAD `Console`.

* `FreeCAD.Console.PrintMessage("text")`, imprime cualquier tipo de mensaje informativo, que no implique ningún mal comportamiento; por ejemplo, imprime las coordenadas de los puntos, el resultado de un cálculo de distancia, el número de vértices de una forma, etc. Por defecto, en color negro.
* `FreeCAD.Console.PrintWarning("text")`, imprime mensajes que pretenden advertir al usuario sobre comportamientos extraños en la aplicación. Las advertencias deben mostrarse cuando falta alguna funcionalidad pero el software sigue funcionando aceptablemente. Por defecto, en color amarillo.
* `FreeCAD.Console.PrintError("text")`, imprime mensajes que pretenden ser mensajes de error, es decir, cuando falta un componente crítico que hace fallar una determinada operación. Por defecto, en color rojo.
* `FreeCAD.Console.PrintLog("text")`, imprimir los mensajes que van a los registros. Estos mensajes pueden ser cualquier cosa que sea valiosa para solucionar un problema en el futuro mediante la lectura de los registros, por ejemplo, iniciar o cerrar un banco de trabajo. Por defecto, en color azul.

Estas funciones pueden usarse desde la [consola de Python](/Python_console/es "Python console/es") directamente, o desde [macros](/Macros/es "Macros/es") y ambientes de trabajo personalizados.

![](/images/FreeCAD_Report_view_example.png)

Ejemplos de mensajes en la vista del informe: un mensaje general, una advertencia, un error y un mensaje registrado.

## Acciones

Al hacer clic con el botón derecho del ratón en la vista del informe se abre un menú contextual con los siguientes comandos:

* **Opciones**:
  + **Display message types**: see [Preferences Editor](/Preferences_Editor#Output_window "Preferences Editor").
  + **Show output window on**: idem.
  + **Redirect Python output**: idem.
  + **Redirect Python errors**: idem.
  + **Go to end**: if checked the report view will scroll to the bottom when a new message is added.
* **Copiar**: almacena el texto seleccionado en el portapapeles para su posterior pegado; se desactiva si no hay nada seleccionado.
* **Seleccionar todo**: selecciona todo el texto en la vista del informe.
* **Borrar**: borra todos los mensajes de la vista del informe. Esto es útil si quiere solucionar un problema con una herramienta que imprime mensajes en la vista del informe, y quiere estar seguro de que no hay mensajes antiguos de herramientas anteriores.
* **Guardar como**: guarda los mensajes de la vista de informe en un archivo de texto.

Retrieved from "<http://wiki.freecad.org/index.php?title=Report_view/es&oldid=1342086>"