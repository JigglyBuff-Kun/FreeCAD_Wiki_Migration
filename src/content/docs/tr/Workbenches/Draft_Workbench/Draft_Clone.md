---
title: Taslak Klonla
---
|  |
| --- |
| Klonla |
| Menü konumu |
| Taslak → Klonla |
| Tezgahlar |
| [Taslak](/Draft_Workbench/tr "Draft Workbench/tr"), [Yapı](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| C L |
| Versiyonda tanıtıldı |
| - |
| Ayrıca bkz |
| [Taşı](/Draft_Move/tr "Draft Move/tr"), [Ölçek](/Draft_Scale/tr "Draft Scale/tr") |
|  |

## Description

## Açıklama

Taslak Klonlama aracı, seçilen bir şeklin bağlantılı kopyalarını oluşturur. Bu, eğer orijinal nesne şeklini ve özelliklerini değiştirirse, tüm klonların da değiştiği anlamına gelir. Bununla birlikte, her bir klon benzersiz konumunu, dönüşünü ve ölçeğini ve ayrıca şekil rengi, çizgi genişliği ve saydamlık gibi görünüm özelliklerini korur.

Klonla aracı, [Taslak tezgahı](/Draft_Workbench/tr "Draft Workbench/tr") ile oluşturulan 2D şekillerde kullanılabilir, ancak  [Parça tezgahı](/Part_Workbench/tr "Part Workbench/tr"), [Parça tasarım tezgahı](/PartDesign_Workbench/tr "PartDesign Workbench/tr") ile oluşturulanlar gibi birçok 3D nesne üzerinde de kullanılabilir.

![](/images/Draft_Clone_example.jpg)

Klonla Orijinal nesnenin yanındadır

## Usage

## Nasıl kullanılır

1. Klonlamak istediğiniz nesneyi seçin.
2. ![](/images/Draft_Clone.svg) Klonla düğmesine basın.

## Notes

* The scaling of a Draft Clone can be changed in the [Property editor](/Property_editor "Property editor") or, [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"), by double clicking it in the [Tree view](/Tree_view "Tree view") and entering new values in the task panel that opens. The latter option is more efficient.

## Properties

See also: [Property editor](/Property_editor "Property editor").

An object created with the Draft Clone command is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject"), a [Part Feature](/Part_Feature "Part Feature") object or, if an Arch Clone is created, from the object type of the source object. It inherits all properties from that object. A clone derived from one of the first two objects also has the following additional properties:

### Data

Draft

## Özellikleri

* Veri **Nesneler**: Klonlanan temel nesnelerin bir listesini belirtir.
* Veri **Ölçek**: Klon için her X, Y ve Z yönünde ölçeklendirme faktörünü belirtir.
* Veri **Fuse**: eğer `true` ve Veri **Nesneler** birbiriyle kesişen birçok şekil içeriyorsa, ortaya çıkan klon onları birlikte tek bir şekilde birleştirir veya bir bileşik oluşturur Bunların  [0.17 sürümünde kullanılabilir](/Release_notes_0.17/tr "Release notes 0.17/tr")

## Scripting

## Betik

*Ayrıca bkz.:* [Taslak API](/Draft_API/tr "Draft API/tr") ve [FreeCAD Betik esasları](/FreeCAD_Scripting_Basics/tr "FreeCAD Scripting Basics/tr").

Klonla aracı, aşağıdaki işlevi kullanarak [makrolar](/Macros/tr "Macros/tr") ve [Python](/Python/tr "Python/tr") konsolundan kullanılabilir:

```
cloned_object = make_clone(obj, delta=None, forcedraft=False)

```

* Tek bir nesne veya nesne listesi olabilen `obj` içinden `cloned_object` oluşturur.
* Eğer verilirse, `delta` yeni klonu temel nesnenin orijinal konumundan uzağa hareket ettiren bir `FreeCAD.Vector`.
* `forcedraft` `True` ise, elde edilen nesne, `obj` bir [Yapı tezgahı](/Arch_Workbench/tr "Arch Workbench/tr") olsa bile, bir Taslak klonu olacak ve bir Yapı klonu olmayacaktır.

Örnek:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

place = App.Placement(App.Vector(1000, 0, 0), App.Rotation())
polygon1 = Draft.make_polygon(3, 750)
polygon2 = Draft.make_polygon(5, 750, placement=place)

vector = App.Vector(2600, 500, 0)
cloned_object = Draft.clone([polygon1, polygon2], delta=vector)

cloned_object.Fuse = True

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Clone/tr&oldid=1550540>"