---
title: Std Pieza
---
|  |
| --- |
| Std Pieza |
| Ubicación en el Menú |
| Ninguna |
| Entornos de trabajo |
| Todos |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.17 |
| Ver también |
| [Std Grupo](/Std_Group/es "Std Group/es"), [Cuerpo PartDesign](/PartDesign_Body/es "PartDesign Body/es") |
|  |

## Descripción

![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") (internamente llamado [App Part](/App_Part "App Part")) es un contenedor de propósito general que mantiene juntos un grupo de objetos para que puedan moverse juntos como una unidad en la [vista 3D](/3D_view/es "3D view/es").

El elemento Std Part se desarrolló para ser el bloque de construcción básico para crear [[[assembly|ensambles]] mecánicos. En particular, está destinado a organizar objetos que tengan un [Part TopoShape](/Part_TopoShape "Part TopoShape"), como [Part Primitives](/Part_Primitives "Part Primitives"), [PartDesign Bodies](/PartDesign_Body "PartDesign Body") y otras [Part Features](/Part_Feature "Part Feature") . El Std Part proporciona un [Origen de objeto](#Origin) con ejes locales X, Y y Z, y planos estándar, que pueden ser usados como referencia a la posición de los objetos contenidos. Además, Std Parts pueden anidarse dentro de otras partes de Std Parts para crear ensambles grandes a partir de sub-ensambles más pequeños.

Although it is primarily intended for solid bodies, the Std Part can be used to manage any object that has a [Placement](/Placement "Placement") property, so it can also contain [Mesh Features](/Mesh_Feature "Mesh Feature"), [sketches](/Sketch "Sketch"), and other objects derived from the [App GeoFeature](/App_GeoFeature "App GeoFeature") class.

Part se encuentra en la barra de herramientas Estructura que se muestra en todos los ambientes de trabajo.

The ![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") tool is not defined by a particular workbench, but by the base system, thus it is found in the **structure toolbar** that is available in all [workbenches](/Workbenches "Workbenches"). To group objects arbitrarily without considering their position, use ![](/images/Std_Group.svg) [Std Group](/Std_Group "Std Group"); this object does not affect the placements of the elements that it contains, it is essentially just a folder that is used to keep the [Tree view](/Tree_view "Tree view") organized.

![](/images/Std_Part-tree.png)![](/images/Std_Part_example.png)

Left: elements inside a Std Part in the [Tree view](/Tree_view "Tree view"). Right: objects positioned in space, referred to the Origin of the Std Part.

## Como utilizar

* Presione el botón  ![](/images/Std_Part.png) **Create part** en la barra de herramientas. La Part se activa automáticamente.
* Haga doble clic en la Part en el árbol del Modelo para activarlo o desactivarlo.
* Para agregar objetos a una Part, arrástrelos y suéltelos sobre la Part en el árbol del Modelo.
* Para eliminar objetos de una Part, arrástrelos y suéltelos de la Part y en la etiqueta del documento en la parte superior del árbol del modelo.

## Notes

* An object can only belong to a single Part.
* 3D operations like [Part Boolean](/Part_Boolean "Part Boolean") cannot be applied to Parts. For example, you cannot select two Parts, and perform a [Part Fuse](/Part_Fuse "Part Fuse") or [Part Cut](/Part_Cut "Part Cut").

## Propiedades

The [Std Part](/Std_Part "Std Part"), internally called [App Part](/App_Part "App Part") (`App::Part` class), is derived from the [App GeoFeature](/App_GeoFeature "App GeoFeature") (`App::GeoFeature` class) and inherits all its properties. It also has several additional properties. Notably properties that help it manage information in the context of an assembly, for example, Datos**Type**, Datos**Id**, Datos**License**, Datos**LicenseURL** and Datos**Group**.

These are the properties available in the [property editor](/Property_editor "Property editor"). Hidden properties can be shown by using the **Show hidden** command in the context menu of the [property editor](/Property_editor "Property editor").

### Data

Base

* Datos **Id**: ID (Número de pieza) del artículo. Este campo es opcional.
* Datos **License**: la licencia bajo la cual se lanza la Part.
* Datos **License URL**: la dirección web donde se pueden encontrar los términos de licencia.
* Datos **Placement**: especifica la orientación y la posición de la Part en el espacio 3D. Ver [Placement](/Placement "Placement").
* Datos **Label**: la label/etiqueta es el nombre dado a la operación. Este nombre se puede cambiar a su conveniencia.
* Datos **Group**: enumera los objetos a los que se hace referencia.

### View

Display Options

* Vista**Display Mode** (`Enumeration`): `Group`.
* Vista**Show In Tree** (`Bool`): if it is `true`, the object appears in the [Tree view](/Tree_view "Tree view"). Otherwise, it is set as invisible.
* Vista**Visibility** (`Bool`): if it is `true`, the object appears in the [3D view](/3D_view "3D view"); otherwise it is invisible. By default this property can be toggled on and off by pressing the Space bar in the keyboard.

Selection

* Vista**On Top When Selected** (`Enumeration`): `Disabled` (default), `Enabled`, `Object`, `Element`.
* Vista**Selection Style** (`Enumeration`): `Shape` (default), `BoundBox`. If the option is `Shape`, the entire shape (vertices, edges, and faces) will be highlighted in the [3D view](/3D_view "3D view"); if it is `BoundBox` only the bounding box will be highlighted.

## Detailed explanation

### Estado activo

Un documento de FreeCAD puede contener varias Part. Solo una Part puede estar activa a la vez. Una Part activa se mostrará en el árbol con un color de fondo azul claro.

An open document can contain multiple Parts. But only one Part can be active. The active Part is displayed in the [tree view](/Tree_view "Tree view") with the background color specified by the **Active container** value in the [preferences editor](/Preferences_Editor#Colors "Preferences Editor") (by default, light blue). It will also be shown with bold text.

To activate or de-activate a Part:

* Double click on it on the [Tree view](/Tree_view "Tree view"), or
* Open the context menu (right click) and select **Active object**.

![](/images/Std_Part_active.png)

Document with two Std Parts, of which the second one is active.

### Origen

The Origin consta de los tres ejes estándar (X, Y, Z) y tres planos estándar (XY, XZ y YZ). Sketches se pueden unir a estos planos. Todos los elementos dentro de la Part están referenciados al Origen de la Part; lo que significa que la Part se puede mover y rotar en referencia al sistema de coordenadas global sin afectar la ubicación de los elementos en su interior.

The Origin consists of the three standard axes (X, Y, Z) and three standard planes (XY, XZ and YZ). [Sketches](/Sketch "Sketch") and other objects can be attached to these elements when creating them.

![](/images/Part_Origin_tree.png) ![](/images/Part_Origin_view.png)

Left: Part Origin in the [Tree view](/Tree_view "Tree view"). Right: representation of the Origin elements in the [3D view](/3D_view "3D view").

*Note:* the Origin is an [App Origin](/App_OriginGroupExtension "App OriginGroupExtension") object (`App::Origin` class), while the axes and planes are objects of type `App::Line` and `App::Plane` respectively. Each of these elements can be hidden and unhidden individually with the Space bar; this is useful to choose the correct reference when creating other objects.

*Note 2:* all elements inside the Part are referenced to the Part's Origin which means that the Part can be moved and rotated in reference to the global coordinate system without affecting the placement of the elements inside.

### Gestión de visibilidad

La visibilidad de la Part reemplaza la visibilidad de cualquier objeto que contenga. Si la Part está oculta, los objetos que contiene también estarán ocultos, incluso si su visibilidad está establecida en verdadero. Múltiples objetos dentro de una Part pueden ser visibles a la vez.

The Part's visibility supersedes the visibility of any object it contains. If the Part is hidden, the objects it contains will be hidden as well, even if their individual Vista**Visibility** property is set to `true`. If the Part is visible, then each object's Vista**Visibility** determines whether the object is shown or not.

![](/images/Part_Visibility_off.png) ![](/images/Part_Visibility_on.png)

The visibility of the Std Part determines whether the objects grouped under it are shown in the [3D view](/3D_view "3D view") or not. Left: the Part is hidden, so none of the objects will be shown in the [3D view](/3D_view "3D view"). Right: the Part is visible, so each object controls its own visibility.

## Scripting

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics") and [scripted objects](/Scripted_objects "Scripted objects").

See [Part Feature](/Part_Feature "Part Feature") for the general information on adding objects to the document.

A Std Part ([App Part](/App_Part "App Part")) is created with the `addObject()` method of the document. Once a Part exists, other objects can be added to it with the `addObject()` or `addObjects()` methods.

```
import FreeCAD as App

doc = App.newDocument()
part = App.ActiveDocument.addObject("App::Part", "Part")

obj1 = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj2 = App.ActiveDocument.addObject("Part::Box", "Box")

part.addObjects([obj1, obj2])
App.ActiveDocument.recompute()

```

You cannot create a scripted `App::Part`. However, you can add `App::Part` behavior to a scripted `Part::FeaturePython` object by using the following code:

```
class MyGroup(object):
    def __init__(self, obj=None):
        self.Object = obj
        if obj:
            self.attach(obj)

    def dumps(self):
        return

    def loads(self, _state):
        return

    def attach(self, obj):
        obj.addExtension("App::OriginGroupExtensionPython")
        obj.Origin = FreeCAD.ActiveDocument.addObject("App::Origin", "Origin")

    def onDocumentRestored(self, obj):
        self.Object = obj

class ViewProviderMyGroup(object):
    def __init__(self, vobj=None):
        if vobj:
            vobj.Proxy = self
            self.attach(vobj)
        else:
            self.ViewObject = None

    def attach(self, vobj):
        vobj.addExtension("Gui::ViewProviderOriginGroupExtensionPython")
        self.ViewObject = vobj

    def dumps(self):
        return None

    def loads(self, _state):
        return None

App.ActiveDocument.addObject("Part::FeaturePython",
                             "Group",
                             MyGroup(),
                             ViewProviderMyGroup(),
                             True)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Part/es&oldid=1560687>"