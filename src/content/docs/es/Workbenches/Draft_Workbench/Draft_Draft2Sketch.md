---
title: Borrador BorradorACroquis
---
|  |
| --- |
| Boceto a Croquis |
| Ubicación en el Menú |
| Modificación → Borador a Croquis |
| Entornos de trabajo |
| [Boceto](/Draft_Workbench/es "Draft Workbench/es"), [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Descripción

El ![](/images/Draft_Draft2Sketch.svg) comando **Borrador BorradorACroquis** convierte los objetos de Borrador en [Croquizador Croquis](/Sketcher_NewSketch/es "Sketcher NewSketch/es") y viceversa.

![](/images/Draft_Draft2Sketch_example.png)

Convertir objetos de borrador en Croquizador Croquis

## Utilización

1. Opcionalmente selecciona uno o más objetos de Borrador o [Croquizador Croquis](/Sketcher_NewSketch/es "Sketcher NewSketch/es").
2. Hay varias formas de invocar el comando:
   * Pulsar el ![](/images/Draft_Draft2Sketch.svg) Borrador BorradorACroquis.
   * Seleccione la opción **Modificación → ![](/images/Draft_Draft2Sketch.svg) Borrador a Croquis** en el menú.
3. Si aún no ha seleccionado un objeto: seleccione un objeto en la [Vista 3D](/3D_view/es "3D view/es").
4. Se crea un nuevo objeto.

## Notas

* Objetos que no son de borrador que son totalmente planas también se pueden convertir.
* El comando sólo puede manejar objetos formados por **líneas rectas, arcos circulares, arcos elípticos, B-Splines y curvas de Bézier**.
* [Borrador BezCurvas](/Draft_BezCurve/es "Draft BezCurve/es") será aproximado por [Croquizador BSplines](/index.php?title=Sketcher_CreateBSpline/es&action=edit&redlink=1 "Sketcher CreateBSpline/es (page does not exist)").
* El [Ambiente de trabajo KicadStepUp](/KicadStepUp_Workbench/es "KicadStepUp Workbench/es") externo contiene un comando para convertir un [Borrador BSpline](/Draft_BSpline/es "Draft BSpline/es") en una serie de [Coquizador Arcos](/Sketcher_CreateArc/es "Sketcher CreateArc/es"). Para más información vea el tema del foro [BSplines to Shape2DView and Sketcher](https://forum.freecadweb.org/viewtopic.php?f=9&t=25082).
* [Este otro tema del foro](https://forum.freecadweb.org/viewtopic.php?f=3&t=58781#p505207) contiene una macro para dicha conversión.

## Guión

Ver también: [Documentación de la API autogenerada](https://freecad.github.io/SourceDoc/) y [Fundamentos de FreeCAD Guión](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es").

Para convertir objetos en un croquis utilice el método `make_sketch` ([introducido en la versión 0.19](/Release_notes_0.19/es "Release notes 0.19/es")) del módulo Borrador. Este método sustituye al método obsoleto `makeSketch`.

```
sketch = make_sketch(objects_list, autoconstraints=False, addTo=None, delete=False, name="Sketch", radiusPrecision=-1, tol=1e-3)

```

* `objects_list` contiene los objetos a convertir. Puede ser un solo objeto o una lista de objetos. Se admiten objetos `Draft`, objetos `Part::Feature` y objetos `Part.Shape`.
* Si `autoconstraints` es `True` se añaden restricciones coincidentes a los nodos que pertenecen al mismo objeto fuente.
* `addTo` es el objeto de coquis existente al que se añade la geometría. Si no se proporciona, se crea un nuevo croquis.
* Si `delete` es `True` se eliminan los objetos fuente.
* `name` es el nombre del nuevo croquis.
* `radiusPrecision` indica cómo deben manejarse las restricciones de radio:
  + Utilice `-1` para desactivar las restricciones de radio.
  + Utilice `0` para añadir restricciones de radio individuales.
  + Utilice un número positivo para redondear los radios según esta precisión, y para añadir restricciones iguales entre curvas con radios iguales.
* `tol` es la tolerancia utilizada para comprobar si las formas son planas y coplanares. Utilice `-1` para un análisis estricto.
* `sketch` se devuelve con el objeto de croquis.

Para convertir un coquis en objetos Borrador utiliza el método `draftify` del módulo Borrador.

```
draftify(objectslist, makeblock=False, delete=True)

```

* `objectslist` contiene los objetos a convertir. Puede ser un solo objeto o una lista de objetos.
* Si `makeblock` es `True` los objetos convertidos se agrupan en un `Part::Part2DObject`.
* Si `delete` es `True` se borran los objetos de origen.

Ejemplo:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle = Draft.make_rectangle(2000, 1000)
circle = Draft.make_circle(500)
doc.recompute()

sketch_from_draft = Draft.make_sketch([rectangle, circle], autoconstraints=True, delete=False, radiusPrecision=0)
doc.recompute()

draft_from_sketch = Draft.draftify(sketch_from_draft, delete=False)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Draft2Sketch/es&oldid=1338130>"