---
title: Объект "App  FeaturePython"
---
## Введение

Объект ![](/images/Feature.svg) App FeaturePython, или формально `Приложение::FeaturePython`, является простым экземпляром [App DocumentObject](/App_DocumentObject/ru "App DocumentObject/ru") в [Python](/Python/ru "Python/ru").

Это простой объект, который по умолчанию не имеет многих свойств, например таких как [разположение](/Placement/ru "Placement/ru") и [топологическая форма](/Part_TopoShape/ru "Part TopoShape/ru"). Этот объект предназначен для общего использования; в зависимости от назначенных ему свойств его можно использовать для управления различными типами данных.

![](/images/FreeCAD_core_objects.svg)

Упрощенная схема взаимосвязей между основными объектами в программе. Класс `App::FeaturePython` является простой реализацией `App::DocumentObject`, который можно использовать для любых целей, так как по умолчанию в нем нет [TopoShape](/Part_TopoShape/ru "Part TopoShape/ru").

## Применение

App FeaturePython является внутренним объектом, поэтому его нельзя создать с помощью графического интерфейса. Он предназначен для подклассов классов, которые будут обрабатывать различные типы данных.

For example, the [Draft Text](/Draft_Text "Draft Text"), [Draft Dimension](/Draft_Dimension "Draft Dimension"), and [Draft WorkingPlaneProxy](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy") objects of the [Draft Workbench](/Draft_Workbench "Draft Workbench") are `App::FeaturePython` objects with a custom icon and additional properties. They hold data but not an actual [Part TopoShape](/Part_TopoShape "Part TopoShape").

If the desired object should have a placement, a shape, an attachment or other complex properties, it is better to create one of the more complex classes, for example, [App GeoFeature](/App_GeoFeature "App GeoFeature"), [Part Feature](/Part_Feature "Part Feature"), or [Part Part2DObject](/Part_Part2DObject "Part Part2DObject").

## Свойства

See [Property](/Property "Property") for all property types that scripted objects can have.

App FeaturePython (`App::FeaturePython` класс) является производным от базового [App DocumentObject](/App_DocumentObject/ru "App DocumentObject/ru") (`App::DocumentObject` класса), поэтому он разделяет все свойства последнего.

These are the properties available in the [property editor](/Property_editor "Property editor"). Hidden properties can be shown by using the **Show hidden** command in the context menu of the [property editor](/Property_editor "Property editor").

### Свойства объекта

Основные

* Данные (Hidden)**Proxy** (`PythonObject`): a custom class associated with this object.
* Данные**Label** (`String`): the user editable name of this object, it is an arbitrary UTF8 string.
* Данные (Hidden)**Label2** (`String`): a longer, user editable description of this object, it is an arbitrary UTF8 string that may include newlines. By default, it is an empty string `""`.
* Данные (Hidden)**Expression Engine** (`ExpressionEngine`): a list of expressions. By default, it is empty `[]`.
* Данные (Hidden)**Visibility** (`Bool`): whether to display the object or not.

### Свойства отображения

Основные

* Вид (Hidden)**Proxy** (`PythonObject`): a custom [viewprovider](/Viewprovider "Viewprovider") class associated with this object.

Display Options

* Вид**Display Mode** (`Enumeration`): it is empty by default.
* Вид**Show In Tree** (`Bool`): it defaults to `true`, in which case the object will appear in the [Tree view](/Tree_view "Tree view"); otherwise, the object will be hidden in the tree view. Once an object in the tree is invisible, you can see it again by opening the context menu over the name of the document (right-click), and selecting ![](/images/CheckBoxTrue.svg) Show hidden items. Then the hidden item can be chosen and Вид**Show In Tree** can be switched back to `true`.
* Вид**Visibility** (`Bool`): it defaults to `true`, in which case the object will be visible in the [3D view](/3D_view "3D view") if it has a [Shape](/Part_TopoShape "Part TopoShape"), otherwise it will be invisible. By default this property can be toggled on and off by selecting the object, and pressing the Space bar.

Selection

* Вид**On Top When Selected** (`Enumeration`): it controls the way in which the selection occurs in the [3D view](/3D_view "3D view") if the object has a [Shape](/Part_TopoShape "Part TopoShape"), and there are many objects partially covered by others. It defaults to `Disabled`, meaning that no special highlighting will occur; `Enabled` means that the object will appear on top of any other object when selected; `Object` means that the object will appear on top only if the entire object is selected in the [Tree view](/Tree_view "Tree view"); `Element` means that the object will appear on top only if a subelement (vertex, edge, face) is selected in the [3D view](/3D_view "3D view").
* Вид**Selection Style** (`Enumeration`): it controls the way the object is highlighted if it has a [Shape](/Part_TopoShape "Part TopoShape"). If it is `Shape`, the entire shape (vertices, edges, and faces) will be highlighted in the [3D view](/3D_view "3D view"); if it is `BoundBox` a bounding box will appear surrounding the object and will be highlighted.

## Составление скриптов

*Смотрите так же:* [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru"), и [скриптовые объекты](/Scripted_objects/ru "Scripted objects/ru").

Общие сведения о добавлении объектов в программу смотрите в разделе [Объект "Part::Feature"](/Part_Feature/ru "Part Feature/ru").

App FeaturePython создается с помощью метода `AddObject()` документа.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::FeaturePython", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=App_FeaturePython/ru&oldid=1560733>"