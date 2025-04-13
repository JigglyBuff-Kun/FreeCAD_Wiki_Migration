---
title: Borrador BSpline
---
|  |
| --- |
| Borrador BSpline |
| Ubicación en el Menú |
| Borrador → B-Spline |
| Entornos de trabajo |
| [Borrador](/Draft_Workbench/es "Draft Workbench/es"), [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| B S |
| Introducido en versión |
| 0.7 |
| Ver también |
| [Borrador Hilo](/Draft_Wire/es "Draft Wire/es"), [Borrador CúbicaBezCurva](/Draft_CubicBezCurve/es "Draft CubicBezCurve/es"), [Borrador BezCurva](/Draft_BezCurve/es "Draft BezCurve/es") |
|  |

## Descripción

El ![](/images/Draft_BSpline.svg) comando **Borrador BSpline** crea una [curva B-spline](https://es.wikipedia.org/wiki/B-spline) a partir de varios puntos.

El comando Borrador BSpline especifica los *puntos exactos* por los que pasará la curva. Los comandos [Borrador BezCurva](/Draft_BezCurve/es "Draft BezCurve/es") y [Borrador CúbicaBezCurva](/Draft_CubicBezCurve/es "Draft CubicBezCurve/es"), por otro lado, utilizan *puntos de control* para definir la posición y la curvatura de la spline.

![](/images/Draft_bspline_example.jpg)

Spline definida por múltiples puntos

## Utilización

Ver también: [Bandeja Borrador](/Draft_Tray/es "Draft Tray/es"), [Borrador Atrapar](/Draft_Snap/es "Draft Snap/es") y [Borrador Restricción](/Draft_Constrain/es "Draft Constrain/es").

1. Hay varias formas de invocar el comando:
   * Pulsar el ![](/images/Draft_BSpline.svg) Borrador BSpline.
   * Seleccione la opción **Borrador → ![](/images/Draft_BSpline.svg) B-spline** en el menú.
   * Utilice el atajo de teclado: B y luego S.
2. Se abre el panel de tareas **B-spline**. Ver [Opciones](#Opciones) para más información.
3. Elige el primer punto en la [Vista 3D](/3D_view/es "3D view/es"), o escribe las coordenadas y pulsa el ![](/images/Draft_AddPoint.svg) Introducir punto botón.
4. Elige puntos adicionales en la [Vista 3D](/3D_view/es "3D view/es"), o escribe las coordenadas y pulsa el botón ![](/images/Draft_AddPoint.svg) Introducir punto botón.
5. Pulse Esc o el botón Cerrar para finalizar el comando.

## Opciones

Los atajos de teclado de un solo carácter disponibles en el panel de tareas se pueden cambiar. Ver [Preferencias de Borrador](/index.php?title=Draft_Preferences/rs&action=edit&redlink=1 "Draft Preferences/rs (page does not exist)"). Los atajos mencionados aquí son los atajos por defecto.

* Para introducir manualmente las coordenadas introduzca el componente X, Y y Z, y pulse Enter después de cada una. O puede pulsar el ![](/images/Draft_AddPoint.svg) Introducir punto cuando tenga los valores deseados. Es aconsejable mover el puntero fuera de la [Vista 3D](/3D_view/es "3D view/es") antes de introducir las coordenadas.
* Pulse R o haga clic en la casilla **Relative** para activar el modo relativo. Si el modo relativo está activado, las coordenadas son relativas al último punto, si está disponible, sino son relativas al origen del sistema de coordenadas.
* Pulse G o haga clic en la casilla **Global** para activar el modo global. Si el modo global está activado, las coordenadas son relativas al sistema de coordenadas global, sino son relativas al sistema de coordenadas del [plano de trabajo](/Draft_SelectPlane/es "Draft SelectPlane/es"). [introducido en la versión 0.20](/Release_notes_0.20/es "Release notes 0.20/es")
* Pulse L o haga clic en la casilla **Filled** para activar el modo relleno. Si el modo de relleno está activado, la spline creada tendrá Datos**Make Face** establecida en `true` y tendrá una cara rellena, siempre y cuando esté cerrada y no se auto-intersecte. Tenga en cuenta que una spline que se auto-interseque con una cara no se mostrará correctamente, para tal spline Datos**Make Face** debe establecerse en `false`.
* Pulse T o haga clic en la casilla **Continue** para activar el modo de continuación. Si el modo de continuar está activado, el comando se reiniciará después de usar ![](/images/Draft_FinishLine.svg) Terminar o ![](/images/Draft_CloseLine.svg) Cerrar, o después de crear una spline cerrada ajustándose al primer punto de la spline, permitiéndole continuar creando splines.
* Pulsar el ![](/images/Draft_UndoLine.svg) Deshacer para deshacer el último punto. El atajo de teclado Ctrl+Z actualmente no funciona.
* Pulse A o el botón ![](/images/Draft_FinishLine.svg) Finalizar para terminar el comando y dejar la spline abierta.
* Pulsar O o el botón ![](/images/Draft_CloseLine.svg) Cerrar para terminar el comando y cerrar la spline. También se puede crear una spline cerrada ajustándose al primer punto de la spline.
* Pulse W o el botón ![](/images/Draft_Wipe.svg) Limpiar para borrar los segmentos de la curva ya colocados, pero seguir trabajando desde el último punto.
* Pulsar U o el ![](/images/Draft_SelectPlane.svg) [Ajustar el plano de trabajo](/Draft_SelectPlane/es "Draft SelectPlane/es") para ajustar el plano de trabajo actual en la orientación definida por el último punto y el anterior.
* Pulsar S para activar o desactivar el [Borrador](/Draft_Snap "Draft Snap").
* Pulse Esc o el botón Close para finalizar el comando.

## Notas

* Un Borrador BSpline puede ser editado con el comando [Borrador Edición](/Draft_Edit/es "Draft Edit/es").
* Un Borrador BSpline puede convertirse en un [Borrador Hilo](/Draft_Wire/es "Draft Wire/es") con el comando [Borrador HiloABSpline](/Draft_WireToBSpline/es "Draft WireToBSpline/es").

## Propiedades

Ver también: [Editor de propiedades](/Property_editor/es "Property editor/es").

Un objeto Borrador BSpline deriva de un [Pieza2DObjeto](/index.php?title=Part_Part2DObject/es&action=edit&redlink=1 "Part Part2DObject/es (page does not exist)") y hereda todas sus propiedades. También tiene las siguientes propiedades adicionales:

### Datos

Draft

* Datos**Area** (`Area`): (read-only) specifies the area of the face of the spline. The value will be `0.0` if Datos**Make Face** if `false` or the face cannot be created.
* Datos**Closed** (`Bool`): specifies if the spline is closed or not. If the spline is initially open this value is `false`, setting it to `true` will draw a curve segment to close the spline. If the spline is initially closed this value is `true`, setting it to `false` will remove the last curve segment and make the spline open.
* Datos**Make Face** (`Bool`): specifies if the spline makes a face or not. If it is `true` a face is created, otherwise only the perimeter is considered part of the object. This property only works if Datos**Closed** is `true` and if the spline does not self-intersect.
* Datos**Parameterization** (`Float`): affects the shape of the spline.
* Datos**Points** (`VectorList`): specifies the points of the spline in its local coordinate system.

### Vista

Draft

* Vista**Arrow Size** (`Length`): specifies the size of the symbol displayed at the end of the spline.
* Vista**Arrow Type** (`Enumeration`): specifies the type of symbol displayed at the end of the spline, which can be `Dot`, `Circle`, `Arrow`, `Tick` or `Tick-2`.
* Vista**End Arrow** (`Bool`): specifies whether to show a symbol at the end of the spline, so it can be used as an annotation line.
* Vista**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the closed spline. This property only works if Datos**Make Face** is `true` and if Vista**Display Mode** is `Flat Lines`.
* Vista**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Guión

Ver también: [Documentación de la API autogenerada](https://freecad.github.io/SourceDoc/) y [Fundamentos de FreeCAD Guión](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es").

Para crear una Borrador BSpline utilice el método `make_bspline` ([introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")) del módulo Borrador. Este método sustituye al método obsoleto `makeBSpline`.

```
bspline = make_bspline(pointslist, closed=False, placement=None, face=None, support=None)
bspline = make_bspline(Part.Wire, closed=False, placement=None, face=None, support=None)

```

* Crea un objeto `bspline` con la lista de puntos dada, `pointslist`.
  + Cada punto de la lista está definido por su `FreeCAD.Vector`, con unidades en milímetros.
  + Alternativamente, la entrada puede ser un `Part.Wire`, del que se extraen los puntos.
* Si `closed` es `True`, o si el primer y el último punto son idénticos, la spline está cerrada.
* Si `placement` es `None` la spline se crea en el origen.
* Si `face` es `True`, y la spline está cerrada, la spline hará una cara, es decir, aparecerá rellena.

Ejemplo:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)

spline1 = Draft.make_bspline([p1, p2, p3], closed=False)
spline2 = Draft.make_bspline([p1, 2*p3, 1.3*p2], closed=False)
spline3 = Draft.make_bspline([1.3*p3, p1, -1.7*p2], closed=False)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_BSpline/es&oldid=1352420>"