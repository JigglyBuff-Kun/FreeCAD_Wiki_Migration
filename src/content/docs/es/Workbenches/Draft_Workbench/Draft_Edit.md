---
title: Borrador Edición
---
|  |
| --- |
| Borrador Edición |
| Ubicación en el Menú |
| Modificación → Editar Utilidades → Editar |
| Entornos de trabajo |
| [Borrador](/Draft_Workbench/es "Draft Workbench/es"), [Arquirectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| D E |
| Introducido en versión |
| - |
| Ver también |
| [Std Edición](/Std_Edit/es "Std Edit/es") |
|  |

## Descripción

El ![](/images/Draft_Edit.svg) comando **Borrador Edición** pone los objetos seleccionados en modo de Borrador Edición. En este modo las propiedades de los objetos pueden ser editadas gráficamente. Típicamente los nodos pueden ser movidos y en algunos casos las opciones del menú contextual pueden ser seleccionadas. El comando puede manejar la mayoría de los objetos de borrador, pero también algunos otros objetos. Ver [Objetos soportados](#Objetos_soportados). Los objetos de borrador soportados también pueden ponerse en modo de edición de borrador con el comando [Std Edición](/Std_Edit/es "Std Edit/es") .

![](/images/Draft_Edit_example.png)

4 objetos en el modo de Borrador Edición: un Borrador Hilo (rojo), un Borrador Arco (negro), un Borrador BSpline (verde) y un Borrador de BezCurva (magenta)

## Utilización

Ver también: [Borrador Atrapar](/Draft_Snap/es "Draft Snap/es") y [Borrador Restringir](/Draft_Constrain/es "Draft Constrain/es").

1. Opcionalmente, seleccione uno o más objetos. Tenga en cuenta que aunque varios objetos pueden estar en modo de edición de borrador, los objetos sólo pueden editarse de uno en uno.
2. Hay varias formas de invocar el comando:
   * Si aún no ha seleccionado un objeto: haga doble clic en un objeto en la [Vista de árbol](/Tree_view "Tree view"). Esto sólo funciona para los objetos de borrador compatibles.
   * Pulse el ![](/images/Draft_Edit.svg) Borrador Edición.
   * Seleccione la opción **Modificación → ![](/images/Draft_Edit.svg) Editar** del menú.
   * Seleccione la opción **Utilidades → ![](/images/Draft_Edit.svg) Editar** en el menú.
   * Utilice el atajo de teclado: D y luego E.
3. Si aún no ha seleccionado ningún objeto: seleccione un objeto en la [Vista 3D](/3D_view/es "3D view/es").
4. Los objetos seleccionados se marcan con nodos temporales, y se abre el [Panel de tareas principales](#Panel_de_tareas_principales). Ver [Opciones](#Opciones) para más información.
5. Opcionalmente utilizar un menú contextual de nodos o aristas. Estos menús contextuales sólo están disponibles para algunos objetos de borrador. Ver [Objetos soportados](#Objetos_soportados) para más información.
   * Haga una de las siguientes cosas:
     + En todos los sistemas operativos: mantenga pulsada E y haga clic en el nodo o borde. Para usar E puede que tengas que hacer clic en la [vista 3D](/3D_view/es "3D view/es") una vez para asegurarte de que tiene el foco.
     + En Windows: mantén pulsado Alt y haz clic en el nodo o borde.
     + En Linux: mantén pulsado Shift+Alt, Ctrl+Alt o Alt, y haz clic en el nodo o borde.
     + En macOS: mantén pulsado Option y haz clic en el nodo o arista.
   * Selecciona una opción del menú contextual.
   * Si la opción seleccionada requiere la introducción de puntos:
     + Se abre el [Panel\_de\_tareas\_del\_nodo](#Panel_de_tareas_del_nodo). Ver [Opciones](#Opciones) para más información.
     + Elige un punto en la [Vista 3D](/3D_view/es "3D view/es"), o escribe las coordenadas y pulsa el ![](/images/Draft_AddPoint.svg) Introducir punto botón.
6. Opcionalmente mueva un nodo:
   * Haz clic en el nodo en la [Vista 3D](/3D_view/es "3D view/es").
   * Se abre el [Panel de tareas del nodo](#Panel_de_tareas_del_nodo). Ver [Opciones](#Opciones) para más información.
   * Elige un punto en la [Vista 3D](/3D_view/es "3D view/es"), o escribe las coordenadas y pulsa el ![](/images/Draft_AddPoint.svg) Introducir punto botón.
   * El resultado depende del objeto y del nodo seleccionado.
7. Presiona Esc o el botón Close para finalizar el comando

## Opciones

Los atajos de teclado de un solo carácter mencionados aquí pueden ser cambiados. Véase [Borrador Preferencias](/Draft_Preferences/es "Draft Preferences/es").

### Panel de tareas Principal

* Pulse O o el ![](/images/Draft_CloseLine.svg) Cerrar para finalizar el comando. Si se ha seleccionado un solo [Borrador Hilo](/Draft_Wire/es "Draft Wire/es") se cierra el hilo.
* Pulse Esc o el botón Close para finalizar el comando.

### Panel de tareas Nodo

* Para introducir manualmente las coordenadas introduzca el componente X, Y y Z, y pulse Enter después de cada una. O puede pulsar el ![](/images/Draft_AddPoint.svg) Introducir punto cuando tenga los valores deseados. Es aconsejable mover el puntero fuera de la [Vista 3D](/3D_view/es "3D view/es") antes de introducir las coordenadas.
* Para utilizar coordenadas polares introduzca un valor para el **Length** y un valor para el **Angle**, y pulse Enter después de cada uno.
* Marque la casilla **Angle** para restringir el puntero al ángulo especificado.
* La casilla **Relative** no tiene sentido para este comando.
* Pulse G o haga clic en la casilla **Global** para activar el modo global. Si el modo global está activado, las coordenadas son relativas al sistema de coordenadas global, de lo contrario son relativas al sistema de coordenadas del [plano de trabajo](/Draft_SelectPlane/es "Draft SelectPlane/es"). [introducido en la versión 0.20](/Release_notes_0.20/es "Release notes 0.20/es")
* La casilla **Continue** no tiene ningún propósito para este comando.
* Pulse S para activar o desactivar el ajuste de borradores.
* El ![](/images/Draft_UndoLine.svg) Deshacer no tiene ningún propósito para este comando.

## Objetos soportados

### [Borrador Línea](/Draft_Line/es "Draft Line/es") and [Borrador Hilo](/Draft_Wire/es "Draft Wire/es")

* Si el nodo inicial o final de un cable abierto se mueve de forma que coincidan, el cable se cierra.
* Menú contextual del nodo: `borrar punto`. Deben quedar al menos dos puntos.
* Menú contextual de la arista: `añadir punto`, `invertir cable` ([introducido en la versión 0.20](/Release_notes_0.20/es "Release notes 0.20/es")).

### [Borrador Arco](/Draft_Arc/es "Draft Arc/es") y [Borrador Arco 3Puntos](/index.php?title=Draft_Arc_3Points/es&action=edit&redlink=1 "Draft Arc 3Points/es (page does not exist)")

* Menú contextual del nodo central: `mover arco`.
* Menú contextual del nodo de inicio: `poner el primer ángulo`.
* Menú contextual del nodo final: `poner el último ángulo`.
* Menú contextual del nodo medio: `poner radio`.
* Menú contextual del borde: `invertir arco`. Actualmente esto no funciona.

### [Borrador Círculo](/Draft_Circle/es "Draft Circle/es")

* No hay menús contextuales para este objeto.

### [Borrador Elipse](/Draft_Ellipse/es "Draft Ellipse/es")

* No hay menús contextuales para este objeto.

### [Borrador Rectángulo](/Draft_Rectangle/es "Draft Rectangle/es")

* No hay menús contextuales para este objeto.

### [Borrador Polígono](/Draft_Polygon/es "Draft Polygon/es")

* No hay menús contextuales para este objeto.

### [Borrador BSpline](/Draft_BSpline/es "Draft BSpline/es")

* Si el nodo inicial o final de una spline abierta se mueve de forma que coincidan, la spline se cierra.
* Menú contextual del nodo: `borrar punto`. Para una spline abierta deben quedar al menos dos puntos. Para una spline cerrada el número mínimo de puntos es de tres.
* Menú contextual de la arista: `añadir punto`.

### [Borrador CúbicaBezCurva](/Draft_CubicBezCurve/es "Draft CubicBezCurve/es") y [Borrador BezCurva](/Draft_BezCurve/es "Draft BezCurve/es")

* If the start or end node of an open curve is moved so that they coincide, the curve is closed.
* Node context menu: `Delete point`, `Make sharp`, `Make tangent` and `Make symmetric`.
* Edge context menu: `Add point`, `Open wire`/`Close wire` ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) and `Reverse curve` ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")).

### [Draft Dimension](/Draft_Dimension "Draft Dimension")

* Angular dimensions cannot be edited.
* The start and end nodes of parametric dimensions cannot be moved.
* No context menus for this object.

### [Arch Wall](/Arch_Wall "Arch Wall")

* A single node to control the height of the wall is displayed above the Datos**Placement** of the wall.
* No context menus for this object.

### [Arch Structure](/Arch_Structure "Arch Structure")

* No hay menús contextuales para este objeto.

### [Arch Window](/Arch_Window "Arch Window")

* No hay menús contextuales para este objeto.

### [Arch Space](/Arch_Space "Arch Space")

* No hay menús contextuales para este objeto.

### [Arch Panel Cut](/Arch_Panel_Cut "Arch Panel Cut")

* No hay menús contextuales para este objeto.

### [Arch Panel Sheet](/Arch_Panel_Sheet "Arch Panel Sheet")

* No hay menús contextuales para este objeto.

### [Part Box](/Part_Box "Part Box")

* No hay menús contextuales para este objeto.

### [Part Cylinder](/Part_Cylinder "Part Cylinder")

* No hay menús contextuales para este objeto.

### [Part Sphere](/Part_Sphere "Part Sphere")

* No hay menús contextuales para este objeto.

### [Part Cone](/Part_Cone "Part Cone")

* No hay menús contextuales para este objeto.

### [Part Line](/Part_Line "Part Line")

* No hay menús contextuales para este objeto.

### [Sketcher Sketch](/Sketcher_NewSketch "Sketcher NewSketch")

* Sólo se pueden editar los croquis que contengan una sola línea sin restricciones. Actualmente esto no funciona correctamente.
* No hay menús contextuales para este objeto.

## Preferencias

Ver también: [Editor de preferencias](/Preferences_Editor/es "Preferences Editor/es") y [Borrador Preferencias](/Draft_Preferences/es "Draft Preferences/es").

* El color de los nodos temporales es el mismo que el color de los símbolos atrapar. Este color se puede cambiar en las preferencias: **Edición → Preferencias... → Borrador → Ajustes visuales → Color**. Tenga en cuenta que este color no se utiliza para los nodos temporales que se muestran para [Borrador BezCurvas](/Draft_BezCurve/es "Draft BezCurve/es"). Estos nodos utilizan el Vista**Color de la línea** de la curva en su lugar.

## Guión

Ver también: [Documentación de la API autogenerada](https://freecad.github.io/SourceDoc/) y [Fundamentos de FreeCAD Guión](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es").

No hay ningún método en Python para editar borradores de objetos. Para emular los resultados del comando hay que modificar las propiedades geométricas de los objetos.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Edit/es&oldid=1353375>"