---
title: Borrador BezCurva
---
|  |
| --- |
| Borrador BezCurva |
| Ubicación en el Menú |
| Borrador → Herramientas Bézier → Curva Bézier |
| Entornos de trabajo |
| [Borrador](/Draft_Workbench/es "Draft Workbench/es"), [Architectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.14 |
| Ver también |
| [Borrador CubicBezCurva](/Draft_CubicBezCurve/es "Draft CubicBezCurve/es"), [Borrador BSpline](/Draft_BSpline/es "Draft BSpline/es") |
|  |

## Descripción

El ![](/images/Draft_BezCurve.svg) **Borrador BezCurva** comando crea una [Curva de Bézier](https://es.wikipedia.org/wiki/Curva_de_B%C3%A9zier) a partir de varios puntos.

El comando crea una única curva de Bézier con una Datos**Degree** que es `number_of_points - 1`. Se puede transformar en una curva Bézier a trozos reduciendo esta propiedad.

Los comandos [Borrador CubicBezCurva](/Draft_CubicBezCurve/es "Draft CubicBezCurve/es") utilizan *puntos de control* para definir la posición y la curvatura de la spline. El comando [Borrador BSpline](/Draft_BSpline/es "Draft BSpline/es"), en cambio, especifica los *puntos exactos* por los que pasará la curva

![](/images/Draft_BezCurve_Example.png)

Curva de Bézier definida por múltiples puntos

## Utilización

Ver también: [Bandeja Borrador](/Draft_Tray/es "Draft Tray/es"), [Borrador Atrapar](/Draft_Snap/es "Draft Snap/es") y [Borrador Restricción](/Draft_Constrain/es "Draft Constrain/es").

1. Hay varias formas de invocar el comando:
   * Pulsar el ![](/images/Draft_BezCurve.svg) Borrador BezCurve.
   * Seleccione la opción **Borrador → Herramientas Bézier → ![](/images/Draft_BezCurve.svg) Curva Bézier** en el menú.
2. Se abre el panel de tareas **Curva Bézier**. Ver [Opciones](#Opciones) para más información.
3. Escoge el primer punto en la [Vista 3D](/3D_view/es "3D view/es"), o escribe las coordenadas y pulsa el ![](/images/Draft_AddPoint.svg) Introducir punto botón.
4. Escoge puntos adicionales en la [Vista 3D](/3D_view/es "3D view/es"), o escribe las coordenadas y pulsa el ![](/images/Draft_AddPoint.svg) Introducir punto botón.
5. Pulse Esc o el botón Cerrar para finalizar el comando.

## Opciones

Los atajos de teclado de un solo carácter disponibles en el panel de tareas se pueden cambiar. Ver [Preferencias de Borrador](/index.php?title=Draft_Preferences/rs&action=edit&redlink=1 "Draft Preferences/rs (page does not exist)"). Los atajos mencionados aquí son los atajos por defecto.

* Para introducir manualmente las coordenadas introduzca el componente X, Y y Z, y pulse Enter después de cada una. O puede pulsar el ![](/images/Draft_AddPoint.svg) Introducir punto cuando tenga los valores deseados. Es aconsejable mover el puntero fuera de la [Vista 3D](/3D_view/es "3D view/es") antes de introducir las coordenadas.
* Pulse R o haga clic en la casilla **Relative** para activar el modo relativo. Si el modo relativo está activado, las coordenadas son relativas al último punto, si está disponible, sino son relativas al origen del sistema de coordenadas.
* Pulse G o haga clic en la casilla **Global** para activar el modo global. Si el modo global está activado, las coordenadas son relativas al sistema de coordenadas global, sino son relativas al sistema de coordenadas del [Plano de trabajo](/Draft_SelectPlane/es "Draft SelectPlane/es"). [introducido en la versión 0.20](/Release_notes_0.20/es "Release notes 0.20/es")
* Pulse L o haga clic en la casilla **Relleno** para activar el modo relleno. Si el modo de relleno está activado, la curva creada tendrá Datos**Hacer Cara** establecido en `true` y tendrá una cara rellena, siempre y cuando esté cerrada y no se auto-intersecte. Tenga en cuenta que una curva que se auto-interseca con una cara no se mostrará correctamente, para tal curva Datos**Hacer Cara** debe ser ajustado a `false`.
* Pulse T o haga clic en la casilla **Continuar** para activar el modo de continuación. Si el modo de continuar está activado, el comando se reiniciará después de usar ![](/images/Draft_FinishLine.svg) Terminar o ![](/images/Draft_CloseLine.svg) Cerrar, o después de crear una curva cerrada ajustándose al primer punto de la curva, permitiéndole continuar creando curvas.
* Pulse el ![](/images/Draft_UndoLine.svg) Deshacer para deshacer el último punto. El atajo de teclado Ctrl+Z actualmente no funciona.
* Pulse A o el botón ![](/images/Draft_FinishLine.svg) Finalizar para terminar el comando y dejar la curva abierta.
* Pulse O o el botón ![](/images/Draft_CloseLine.svg) Cerrar para terminar el comando y cerrar la curva. También se puede crear una curva cerrada ajustándose al primer punto de la curva.
* Pulse W o el botón ![](/images/Draft_Wipe.svg) Limpiar para borrar los segmentos ya colocados, pero seguir trabajando desde el último punto.
* Pulsar U o el ![](/images/Draft_SelectPlane.svg) [Fijar PT](/Draft_SelectPlane/es "Draft SelectPlane/es") para ajustar el plano de trabajo actual en la orientación definida por el último punto y el anterior.
* Pulse S para activar o desactivar el [Borrador Atrapar](/Draft_Snap/es "Draft Snap/es").
* Pulse Esc o el botón Cerrar para finalizar el comando.

## Notas

* Un Borrador de Curva de Bézier puede ser editado con el comando [Borrador Edición](/Draft_Edit/es "Draft Edit/es").
* OpenCascade, y por tanto FreeCAD, no soporta curvas Bézier de grados superiores a 25. Esto no debería ser un problema en la práctica, ya que la mayoría de los usuarios suelen utilizar curvas Bézier de grados 3 a 5.

## Propiedades

Ver también: [Editor de propiedades](/Property_editor/es "Property editor/es").

Un objeto Draft BezCurva deriva de un [Pieza2DObjeto](/index.php?title=Part_Part2DObject/es&action=edit&redlink=1 "Part Part2DObject/es (page does not exist)") y hereda todas sus propiedades. También tiene las siguientes propiedades adicionales:

### Datos

Borrador

* Datos**Area** (`Area`): (read-only) specifies the area of the face of the curve. The value will be `0.0` if Datos**Make Face** if `false` or the face cannot be created.
* Datos**Closed** (`Bool`): specifies if the curve is closed or not. If the curve is initially open this value is `false`, setting it to `true` will draw a segment to close the curve. If the curve is initially closed this value is `true`, setting it to `false` will remove the last segment and make the curve open.
* Datos**Continuity** (`IntegerList`): (read-only) specifies the continuity of the curve.
* Datos**Degree** (`Integer`): specifies the degree of the curve.
* Datos**Length** (`Length`): (read-only) specifies the total length of the curve.
* Datos**Make Face** (`Bool`): specifies if the curve makes a face or not. If it is `true` a face is created, otherwise only the perimeter is considered part of the object. This property only works if Datos**Closed** is `true` and if the curve does not self-intersect.
* Datos**Points** (`VectorList`): specifies the control points of the curve in its local coordinate system.

### Vistas

Borrador

* Vista**Arrow Size** (`Length`): specifies the size of the symbol displayed at the end of the curve.
* Vista**Arrow Type** (`Enumeration`): specifies the type of symbol displayed at the end of the curve, which can be `Dot`, `Circle`, `Arrow`, `Tick` or `Tick-2`.
* Vista**End Arrow** (`Bool`): specifies whether to show a symbol at the end of the curve, so it can be used as an annotation line.
* Vista**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the closed curve. This property only works if Datos**Make Face** is `true` and if Vista**Display Mode** is `Flat Lines`.
* Vista**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Guión

Ver también: [Documentación de la API autogenerada](https://freecad.github.io/SourceDoc/) y [Fundamentos de FreeCAD Guión](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es").

Para crear una Borrador Línea utilice el método `make_bezcurve` ([introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")) del módulo Borrador. Este método sustituye al método obsoleto `makeBezCurve`.

```
bezcurve = make_bezcurve(pointslist, closed=False, placement=None, face=None, support=None, degree=None)
bezcurve = make_bezcurve(Part.Wire, closed=False, placement=None, face=None, support=None, degree=None)

```

* Crea un objeto `bezcurve` con la lista de puntos dada, `pointslist`.
  + Cada punto de la lista está definido por su `FreeCAD.Vector`, con unidades en milímetros.
  + Alternativamente, la entrada puede ser un `Part.Wire`, del que se extraen los puntos.
* Si `closed` es `True`, o si el primer y el último punto son idénticos, la curva está cerrada.
* Si `placement` es `None` la curva se crea en el origen.
* Si `face` es `True`, y la curva es cerrada, la curva formará una cara, es decir, aparecerá rellena.

Ejemplo:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)
p4 = App.Vector(1500, -2000, 0)

bezcurve1 = Draft.make_bezcurve([p1, p2, p3, p4], closed=True)
bezcurve2 = Draft.make_bezcurve([p4, 1.3*p2, p1, 4.1*p3], closed=True)
bezcurve3 = Draft.make_bezcurve([1.7*p3, 1.5*p4, 2.1*p2, p1], closed=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_BezCurve/es&oldid=1352556>"