---
title: Std Creați un Grup
---
|  |
| --- |
| Std Group |
| Menu location |
| Tree View → Right click on the document name |
| Workbenches |
| All |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Draft SelectGroup](/Draft_SelectGroup "Draft SelectGroup"), [Draft AddToGroup](/Draft_AddToGroup "Draft AddToGroup") |
|  |

## Descriere

Această comandă vă permite să creați un grup în vizualizarea arborescentă.
  
Acesta poate fi folosit pentru organizarea structurii modelului dvs.

The Std Group tool is not defined by a particular workbench, but by the base system, thus it is found in the **structure toolbar** that is available in all [workbenches](/Workbenches "Workbenches").

To group 3D objects as a single unit, with the intention of creating assemblies, use [Std Part](/Std_Part "Std Part") instead.

![](/images/Group_with_objects.png)

Various elements inside Std Groups in the tree view.

## Utilizare

Faceți clic dreapta pe numele documentului dvs. FreeCAD în vizualizarea arborescentă și alegeți "creare grup".
  
Un grup va fi creat automat și va da pictograma unui director și a unui nume ales automat.
  
Puteți redenumi grupul făcând clic dreapta pe grup și selectând "redenumiți" sau folosind "F2" de pe tastatură.
  
Împingeți obiectele FreeCAD în grup sau scoateți-le din grup făcând clic pe obiectul dorit,
  
mențineți apăsat butonul stânga al mouse-ului și folosiți stilul drag & drop pentru a trage obiectul în noua locație dorită.
  
Atâta timp cât există un semn "cerc cu linie diagonală" - sub cursor, nu vă puteți lăsa obiectul aici.
  
De îndată ce semnul se schimbă într-un simbol "plus", este posibil să vă abandonați obiectul aici.

## Proprietăți

The [Std Group](/Std_Group "Std Group"), internally called [App DocumentObjectGroup](/App_DocumentObjectGroup "App DocumentObjectGroup") (`App::DocumentObjectGroup` class), is derived from the basic [App DocumentObject](/App_DocumentObject "App DocumentObject") (`App::DocumentObject` class) and inherits all its properties.

The Std Group has the same properties as the [App FeaturePython](/App_FeaturePython#Properties "App FeaturePython"), which is the most basic instance of an [App DocumentObject](/App_DocumentObject "App DocumentObject"). It also has the following additional properties in the [property editor](/Property_editor "Property editor"). Hidden properties can be shown by using the **Show hidden** command in the context menu of the [property editor](/Property_editor "Property editor").

### Data

Base

* Date**Label**: Numele grupului

## Script

Următaorea comandaă adugă un nou grup în documentul activ:

See [Part Feature](/Part_Feature "Part Feature") for the general information on adding objects to the document.

A Std Group ([App DocumentObjectGroup](/App_DocumentObjectGroup "App DocumentObjectGroup")) is created with the `addObject()` method of the document. Once a Group exists, other objects can be added to it with the `addObject()` or `addObjects()` methods.

```
import FreeCAD as App

doc = App.newDocument()
group = App.ActiveDocument.addObject("App::DocumentObjectGroup", "Group")

obj1 = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj2 = App.ActiveDocument.addObject("Part::Box", "Box")

group.addObjects([obj1, obj2])
App.ActiveDocument.recompute()

```

This basic `App::DocumentObjectGroup` doesn't have a Proxy object so it can't be fully used for sub-classing.

For [Python](/Python "Python") subclassing you should create a `App::DocumentObjectGroupPython` object.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::DocumentObjectGroupPython", "Name")
obj.Label = "Custom label"

```

For example, a [FEM Analysis](/FEM_Analysis "FEM Analysis") is an `App::DocumentObjectGroupPython` object with a custom icon and additional properties.

## Legături

* [Use case in Arch Tutorial](/Arch_tutorial#Organizing_your_model "Arch tutorial")
* [Document structure](/Document_structure "Document structure")
* [Organizing your model](http://www.freecadweb.org/wiki/index.php?title=Arch_tutorial#Organizing_your_model)

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Group/ro&oldid=1560707>"