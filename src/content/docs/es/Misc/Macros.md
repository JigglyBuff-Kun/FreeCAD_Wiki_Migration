---
title: Macros
---
## Introducción

Macros son una forma conveniente de reproducir acciones complejas en FreeCAD. Simplemente grabas las acciones mientras las realizas, luego guardas esas acciones con un nombre, y las reproduces cuando quieras. Como las macros son en realidad una lista de comandos [Python](/Python/es "Python/es"), también puedes editarlas, y crear scripts muy complejos.

Mientras que los scripts de Python normalmente tienen la extensión `.py`, las macros de FreeCAD deben tener la extensión `.FCMacro`. Una colección de macros escritas por usuarios experimentados se encuentra en la página [recipes macros](/Macros_recipes/es "Macros recipes/es").

Vea el [Centro de usuarios avanzados](/Power_users_hub/es "Power users hub/es") para aprender más sobre el lenguaje de programación [Python](/Python/es "Python/es"), y sobre la escritura de macros. En particular, deberías empezar con estas páginas:

* [Introducción a Python](/Introduction_to_Python/es "Introduction to Python/es")
* [Tutorial de Guión en Python](/Python_scripting_tutorial/es "Python scripting tutorial/es")
* [Fundamentos de Guión en FreeCAD](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es")

## ¿Cómo funciona?

Activa la salida de la consola en el menú **Edición → Preferencias → General → Macro → Mostrar comandos de scripts en la consola de python**. Verás que en FreeCAD, cada acción que realizas, como pulsar un botón, da salida a un comando de Python. Esos comandos son los que se pueden grabar en una macro. La herramienta principal para hacer macros es la barra de herramientas de macros: ![](/images/Macros_toolbar.jpg). En ella tienes 4 botones: Grabar, detener la grabación, editar y reproducir la macro actual.

Su uso es muy sencillo: Pulsa el botón de grabar, se te pedirá que des un nombre a tu macro, y luego realiza algunas acciones. Cuando hayas terminado, pulsa el botón de parar la grabación, y tus acciones se guardarán. Ahora puedes acceder al diálogo de la macro con el botón de edición.

![](/images/Macros.png)

Diálogo de macros, que enumera las macros disponibles en el sistema

Allí puedes gestionar tus macros, borrarlas, editarlas, duplicarlas, instalarlas o crear otras nuevas desde cero. Si editas una macro, se abrirá en una ventana del editor donde puedes hacer cambios en su código. Se pueden instalar nuevas macros utilizando el botón Complementos..., que enlaza con el [Gestor Complementos](/Std_AddonMgr/es "Std AddonMgr/es").

## Ejemplo

Pulsa el botón de grabar, dale un nombre, digamos "cilindro de 10x10, entonces, en el [Entorno de Pieza](/Part_Workbench/es "Part Workbench/es"), crea un cilindro con radio = 10 y altura = 10. A continuación, pulsa el botón "Detener la sesión de grabación de la macro". En el letrero de diálogo de edición macros, puedes ver el código Python que se ha registrado, y, si lo deseas, realizar modificaciones en él. Para ejecutar la macro, basta con pulsar el botón de ejecutar en la barra de herramientas mientras la macro se encuentra en el editor. Tu macro siempre se guarda en el disco, por lo que cualquier cambio que hagas, o cualquier macro nueva que crees, siempre estará disponible la próxima vez que inicies FreeCAD.

## Personalización

Por supuesto que no es práctico cargar una macro en el editor con el fin de usarla. FreeCAD proporciona formas mucho mejores de iniciar la macro, como la asignación de un atajo de teclado, o poner una entrada en el menú. Una vez que la macro se crea, todo esto se puede hacer a través de menú  **Herramientas → Personalizar**.

![](/images/Macros_config.jpg)

De esta manera puedes hacer que tu macro se convierta en una herramienta real, como cualquier herramienta estándar de FreeCAD. Esto, sumado a la potencia de los scripts de Python dentro de FreeCAD, hace posible añadir fácilmente tus propias herramientas a la interfaz. Sigue leyendo la página [Guión](/Scripting/es "Scripting/es") si quieres saber más sobre [Python](/Python/es "Python/es") scripting.

Ver [Personalizar barras de herramientas](/Customize_Toolbars/es "Customize Toolbars/es") para una descripción más detallada.

## Creación de macros sin grabar

También puedes copiar/pegar directamente código python en una macro, sin grabar acciones de la interfaz gráfica de usuario. Basta con crear una nueva macro, editarla, y pegar el código. A continuación, puedes guardar la macro del mismo modo que se guarda un documento de FreeCAD. La próxima vez que se inicie FreeCAD, la macro aparecerá bajo el apartado "Macros instaladas" del menú Macro.

Ver [Cómo instalar las macros](/How_to_install_macros/es "How to install macros/es") para obtener una descripción más detallada.

## Repositorio de Macros

Visita la página [Recetas de macros](/Macros_recipes/es "Macros recipes/es") para recoger algunas macros útiles para añadir a tu instalación de FreeCAD.

## Información adicional

* [Ejecutar automáticamente la macro al inicio](/index.php?title=Macro_at_Startup/es&action=edit&redlink=1 "Macro at Startup/es (page does not exist)")
* [Instalar más ambientes de trabajo](/Installing_more_workbenches/es "Installing more workbenches/es")

## Tutoriales

Puede instalar manualmente las extensiones, sin embargo, es mucho más sencillo utilizar el [Gestor Complementos](/Std_AddonMgr/es "Std AddonMgr/es").

* [Cómo instalar macros](/How_to_install_macros/es "How to install macros/es")
* [Cómo instalar ambientes de trabajo adicionales](/How_to_install_additional_workbenches/es "How to install additional workbenches/es")

Retrieved from "<http://wiki.freecad.org/index.php?title=Macros/es&oldid=1296737>"