---
title: Entorno de trabajo Render
---
![](/images/Render_workbench_icon.svg)

Icono del entorno de trabajo Render

## Introducción

El entorno de trabajo Render le permite producir imágenes de alta calidad a partir de modelos FreeCAD, utilizando motores de renderizado externos de código abierto.

* ![Pabellón de Barcelona Captura de pantalla](/images/Pabellon_de_Barcelona.png)

  Pabellón de Barcelona   
  Captura de pantalla
* ![Pabellón de Barcelona Renderizado con Povray](/images/Pabellon_de_Barcelona_Pov_large.png)

  Pabellón de Barcelona  
  Renderizado con Povray
* ![Pabellón de Barcelona Cycles rendering](/images/Pabellon_de_Barcelona_Cycles.png)

  Pabellón de Barcelona   
  Cycles rendering
* ![Asm V4 Captura de pantalla](/images/Asm_V4.png)

  Asm V4  
  Captura de pantalla
* ![Asm V4 Renderizado con LuxCore](/images/Asm_V4_lux.png)

  Asm V4  
  Renderizado con LuxCore
* ![Asm V4 Renderizado con Ospray](/images/Asm_V4_ospray2.png)

  Asm V4  
  Renderizado con Ospray
* ![Iglesia de la luz Captura de pantalla](/images/Church_of_the_light.png)

  Iglesia de la luz  
  Captura de pantalla
* ![Iglesia de la luz LuxCore rendering](/images/Church_of_the_light_lux2.png)

  Iglesia de la luz  
  LuxCore rendering
* ![Iglesia de la luz Renderizado con Cycles](/images/Church_of_the_light_cycles.png)

  Iglesia de la luz  
  Renderizado con Cycles
* ![Carro Captura de pantalla](/images/Car.png)

  Carro  
  Captura de pantalla
* ![Carro Renderizado con Ospray](/images/Car_ospray.png)

  Carro  
  Renderizado con Ospray
* ![Carro Renderizado con LuxCore](/images/Car_lux.png)

  Carro  
  Renderizado con LuxCore
* ![Ensamblaje de ladrillos Captura de pantalla](/images/Brick_assembly.png)

  Ensamblaje de ladrillos  
  Captura de pantalla
* ![Ensamblaje de ladrillos Renderizado con Appleseed](/images/Brick_assembly_appleseed.png)

  Ensamblaje de ladrillos  
  Renderizado con Appleseed
* ![Ensamblaje de ladrillos Renderizado con Luxcore](/images/Brick_assembly_luxcore.png)

  Ensamblaje de ladrillos  
  Renderizado con Luxcore
* ![Villa Savoye Captura de pantalla](/images/VillaSavoye.png)

  Villa Savoye  
  Captura de pantalla
* ![Villa Savoye Renderizado con Appleseed](/images/VillaSavoye_appleseed.png)

  Villa Savoye  
  Renderizado con Appleseed
* ![Villa Savoye Renderizado con Cycles](/images/VillaSavoye_Cycles.png)

  Villa Savoye  
  Renderizado con Cycles

Render, un entorno de trabajo puro de Python, se integra perfectamente en FreeCAD: toda la escena de renderizado (objetos, iluminación, materiales, cámara, etc.) se puede describir con objetos de FreeCAD para exportarlos a renderizadores externos.

En comparación con otros enfoques basados ​​en aplicaciones de gráficos por computadora de terceros, Render tiene como objetivo:

* Evitar que el usuario aprenda otro software de gráficos 3D/por computadora: todo lo que necesita saber está en FreeCAD.
* Simplificar el flujo de trabajo de renderizado y liberar al usuario de cualquier manipulación de archivos intermediarios, como de importación, exportación, retoque de escenas, etc.
* Hacer que la configuración de la escena sea persistente y, especialmente, evitar el retrabajo en una herramienta externa cada vez que se modifica el modelo.

## Renderizadores soportados

Actualmente se admiten seis motores de renderizado:

* LuxCoreRender
* Appleseed
* Cycles (versión standalone)
* Pov-Ray
* Intel Ospray Studio
* Pbrt-v4 (experimental)

## Uso

En el modo de inicio rápido, una vez realizada correctamente la instalación del banco de trabajo, renderizar un modelo FreeCAD es solo un proceso de 4 pasos:

1. **Cree un proyecto de renderizado:** Presione el botón en la barra de herramientas correspondiente a su renderizador y seleccione una plantilla adecuada para su renderizador (puede comenzar con un estilo de 'estudio', como appleseed\_studio\_light.appleseed, cycles\_studio\_light.xml, luxcore\_studio\_light.cfg, povray\_studio\_light.pov, etc.).
2. **Agregue vistas de sus objetos de su proyecto de renderizado:** Seleccione tanto los objetos como el proyecto y presione el botón Agregar vista.
3. **Establece tu punto de vista:** [Navegue en la vista 3D](/Manual:Navigating_in_the_3D_view "Manual:Navigating in the 3D view") a la posición deseada y cambie al modo [perspectiva](/Std_PerspectiveCamera "Std PerspectiveCamera").
4. **Renderice:** Seleccione su proyecto y presione el botón Renderizar en la barra de herramientas (también disponible en el menú contextual del proyecto).

**Y debería obtener una primera representación de su modelo.**

Puede encontrar más instrucciones en el [repositorio de GitHub](https://github.com/FreeCAD/FreeCAD-render) o en la ayuda en línea.

## Características

Las características incluyen, entre otras:

* Iluminación: luces puntuales, áreas de luz, sol-cielo y plantillas de iluminación preestablecidas.
* Cámaras.
* Gestión de materiales (utilizando sombreadores habituales: mate, brillante, vidrio, etc.), incluyendo las texturas.
* Modo por lotes/modo UI.
* Eliminador de ruido.
* Condición de parada (muestra por píxel).
* Control de mallado: deflexiones angulares y lineales, auto-alisado.

## Enlaces

¿Desea más información? Simplemente siga el enlace: <https://github.com/FreeCAD/FreeCAD-render>

Retrieved from "<http://wiki.freecad.org/index.php?title=Render_Workbench/es&oldid=1387118>"