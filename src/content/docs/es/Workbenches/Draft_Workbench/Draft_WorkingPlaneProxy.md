---
title: Borrador PlanoTrabajoProxy
---
|  |
| --- |
| Borrador PlanoTrabajoProxy |
| Ubicación en el Menú |
| Borrador → Utilidades → Crear proxy del plano trabajo |
| Entornos de trabajo |
| [Borrador](/Draft_Workbench/es "Draft Workbench/es"), [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [Borrador SeleccionarPlano](/Draft_SelectPlane/es "Draft SelectPlane/es") |
|  |

## Descripción

Este comando colocará un objeto Proxy de Plano alineado con el actual [Plano trabajo](/Draft_SelectPlane/es "Draft SelectPlane/es").

![](/images/Draft_WPProxy_example.png)

Tres proxies de planos de trabajo que muestran diferentes orientaciones y rellenos

## Utilización

1. Asegúrate de que el [Plano trabajo](/Draft_SelectPlane/es "Draft SelectPlane/es") está configurado como quieres.
2. A continuación, vaya al menú **Borrador → Utilidades → ![](/images/Draft_WorkingPlaneProxy.svg) Crear proxy de plano trabajo**.

## Context menu

For a Draft WorkingPlaneProxy these additional options are available in the [Tree view](/Tree_view "Tree view") context menu:

* **![](/images/Draft_SelectPlane.svg) Write camera position**: updates the Vista**View Data** property of the working plane proxy with the current [3D view](/3D_view "3D view") camera settings.
* **![](/images/Draft_SelectPlane.svg) Write objects state**: updates the Vista**Visibility Map** property of the working plane proxy with the current visibility state of objects in the document.

## Notes

## Notas

* El plano de trabajo almacenado en el objeto Proxy puede restaurarse haciendo doble clic en el objeto en la vista de árbol, o seleccionando el objeto Proxy y utilizando el ![](/images/Draft_SelectPlane.svg) [Borrador SeleccionarPlano](/Draft_SelectPlane/es "Draft SelectPlane/es")..
* La posición de la cámara se almacena en el objeto Proxy en el momento de su creación. Esta posición puede actualizarse en cualquier momento: haz zoom, panorámica y rotación de la vista como desees, luego haz clic con el botón derecho en el objeto Proxy en la vista de árbol y selecciona ![](/images/Draft_SelectPlane.svg). Escribir posición de la cámara.
* El estado de visibilidad de todos los objetos también se almacena en el objeto Proxy en el momento de su creación. Este estado puede actualizarse en cualquier momento: establezca la propiedad Vista**Visibility** de los objetos a `true` o `false` según desee, luego haga clic con el botón derecho en el objeto Proxy en la vista de árbol, y seleccione ![](/images/Draft_SelectPlane.svg) Escribir estado de los objetos.
* Los proxies de plano pueden moverse y girarse como cualquier otro objeto para que definan el plano de trabajo deseado. Su apariencia visual también se puede cambiar en el [Editor de propiedades](/Property_editor/es "Property editor/es").

## Propiedades

See also: [Property editor](/Property_editor "Property editor").

A Draft WorkingPlaneProxy object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* Datos**Placement** (`Placement`): specifies the position of the working plane proxy in the [3D view](/3D_view "3D view"). See [Placement](/Placement "Placement").
* Datos (Hidden)**Shape** (`Shape`): specifies the shape of the working plane proxy.

### View

Base

* Vista**Line Color** (`Color`): specifies the color of all elements of the working plane proxy.
* Vista**Line Width** (`Float`): specifies the line width of the axes and arrow symbols.
* Vista**Restore State** (`Bool`): specifies if the Vista**Visibility Map** is restored when the [working plane](/Draft_SelectPlane "Draft SelectPlane") is aligned with the working plane proxy.
* Vista**Restore View** (`Bool`): specifies if the Vista**View Data** is restored when the [working plane](/Draft_SelectPlane "Draft SelectPlane") is aligned with the working plane proxy.
* Vista**Transparency** (`Percent`): specifies the transparency of the face of the working plane proxy.
* Vista**View Data** (`FloatList`): specifies the camera position and settings.
* Vista (Hidden)**Visibility Map** (`Map`): specifies the visibility state of objects.

Draft

* Vista**Arrow Size** (`Length`): specifies the size of the arrow symbols displayed at the tip of the three axes.
* Vista**Display Size** (`Length`): specifies the length and width of the working plane proxy.

## Guión

*Ver también:* [Borrador API](/Draft_API/es "Draft API/es") y [FreeCAD Fundamentos de Guión](/FreeCAD_Scripting_Basics/es "FreeCAD Scripting Basics/es").

Los objetos proxy del plano de trabajo se pueden utilizar en [macros](/Macros/es "Macros/es") y desde la consola de [Python](/Python/es "Python/es") utilizando la siguiente función:

If the [Draft Workbench](/Draft_Workbench "Draft Workbench") is active the FreeCAD application object has a `DraftWorkingPlane` property which stores the current working plane. The `Placement` from the `getPlacement` method of the `DraftWorkingPlane` object can be used to create an aligned working plane proxy. The `Placement` of a working plane proxy in turn can be used to realign the working plane.

```
# This code only works if the Draft Workbench is active!

import FreeCAD as App
import FreeCADGui as Gui
import Draft

doc = App.newDocument()

workplane = App.DraftWorkingPlane
place = workplane.getPlacement()

proxy = Draft.make_workingplaneproxy(place)
proxy.ViewObject.DisplaySize = 3000
proxy.ViewObject.ArrowSize = 200

axis2 = App.Vector(1, 1, 1)
point2 = App.Vector(3000, 0, 0)
place2 = App.Placement(point2, App.Rotation(axis2, 90))

proxy2 = Draft.make_workingplaneproxy(place2)
proxy2.ViewObject.DisplaySize = 3000
proxy2.ViewObject.ArrowSize = 200

workplane.setFromPlacement(proxy2.Placement, rebase=True)
Gui.Snapper.setGrid()

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_WorkingPlaneProxy/es&oldid=1338278>"