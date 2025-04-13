---
title: Grup Oluştur
---
|  |
| --- |
| Grup Oluştur |
| Menü konumu |
| Ağaç görünüm → Belge üzerine sağ tıkla |
| Tezgahlar |
| Hepsi |
| Varsayılan kısayol |
| *Hiçbiri* |
| Versiyonda tanıtıldı |
| - |
| Ayrıca bkz |
| [Taslak grup seçme](/Draft_SelectGroup "Draft SelectGroup"), [Taslak gruba ekle](/Draft_AddToGroup "Draft AddToGroup") |
|  |

## Tanım

Bu komut, ağaç görünümünde bir grup oluşturmanıza olanak sağlar.
  
Modelinizin yapısını düzenlemek için kullanılabilir.

The Std Group tool is not defined by a particular workbench, but by the base system, thus it is found in the **structure toolbar** that is available in all [workbenches](/Workbenches "Workbenches").

To group 3D objects as a single unit, with the intention of creating assemblies, use [Std Part](/Std_Part "Std Part") instead.

![](/images/Group_with_objects.png)

Various elements inside Std Groups in the tree view.

## Kullanım

Ağaç görünümünde FreeCAD belgenizin adına sağ tıklayın ve "grup" seçeneğini seçin.
  
Bir grup otomatik olarak oluşturulacak ve bir dizin simgesi ve otomatik olarak seçilen bir isim verilecektir.
  
Grubu sağ tıklayıp "yeniden adlandır" ı seçerek veya klavyenizdeki "F2" yi kullanarak grubu yeniden adlandırabilirsiniz.
  
FreeCAD nesnelerini grubun içine itin veya istediğiniz nesneyi tıklatarak gruptan çıkarın,
  
farenin sol düğmesini basılı tutun ve nesneyi istediğiniz yeni konuma sürüklemek için sürükle ve bırak stilini kullanın.
  
İmlecin altına bir "köşegen çizgisi olan bir daire" olduğu sürece, nesnenizi buraya bırakamazsınız.
  
İşaret bir "artı" sembolüne döndüğü anda nesneyi buraya bırakmak mümkündür.

## Özellikler

The [Std Group](/Std_Group "Std Group"), internally called [App DocumentObjectGroup](/App_DocumentObjectGroup "App DocumentObjectGroup") (`App::DocumentObjectGroup` class), is derived from the basic [App DocumentObject](/App_DocumentObject "App DocumentObject") (`App::DocumentObject` class) and inherits all its properties.

The Std Group has the same properties as the [App FeaturePython](/App_FeaturePython#Properties "App FeaturePython"), which is the most basic instance of an [App DocumentObject](/App_DocumentObject "App DocumentObject"). It also has the following additional properties in the [property editor](/Property_editor "Property editor"). Hidden properties can be shown by using the **Show hidden** command in the context menu of the [property editor](/Property_editor "Property editor").

### Data

Base

* Veri**Label**: Grubun ismi

## Betik

Aşağıdaki komut aktif belgeye yeni grup ekler:

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

## Linkler

* [Use case in Arch Tutorial](/Arch_tutorial#Organizing_your_model/tr "Arch tutorial")
* [Belge Yapısı](/Document_structure/tr "Document structure/tr")
* [Modelinizi düzenleyin](http://www.freecadweb.org/wiki/index.php?title=Arch_tutorial#Organizing_your_model)

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Group/tr&oldid=1560710>"