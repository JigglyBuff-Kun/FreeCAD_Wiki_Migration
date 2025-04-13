---
title: Taslak Yüz Kaplama
---
|  |
| --- |
| Yüz kaplama |
| Menü konumu |
| Taslak → Yüz kaplama |
| Tezgahlar |
| [Taslak](/Draft_Workbench/tr "Draft Workbench/tr"), [Mimari](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| F F |
| Versiyonda tanıtıldı |
| 0.14 |
| Ayrıca bkz |
| [Parça Kutu](/Part_Box/tr "Part Box/tr"), [Mimari Duvar](/Arch_Wall/tr "Arch Wall/tr") |
|  |

## Açıklama

Yüz kaplama aracı, katı bir nesnenin seçilen yüzlerinden bir yüzey nesnesi oluşturur. Parametriktir, yani eğer orijinal nesneyi değiştirirseniz, Facebinder buna göre güncellenir. Facebinder'ı hareket ettirip döndürürseniz, orijinal yüzlere bağlı kalacaktır.

Başka nesnelerden gelen bir yüz koleksiyonundan bir ekstrüzyon oluşturmak için kullanılabilir. Mimari tasarımda , örneğin duvar kağıdı veya duvar kaplaması gibi çeşitli duvarları kapsayan bir nesneyi inşa etmek tipik bir kullanımdır.

![](/images/Draft_facebinder_example.jpg)

Yüz kaplama ile katı duvarların yüzlerinden oluşturulmuş

## Nasıl kullanılır

1. Bir yüz seçin veya  Ctrl tuşunu basılı tutun ve katı nesnelerden birkaç yüz seçin.
2. ![](/images/Draft_Facebinder.png) Taslak Yüz kaplama düğmesine basın veya  F ardından  F tuşlarına basın.

## Özellikler

### Veri

* Veri **Extrusion**: şeklin tüm yüzlerine uygulanacak bir ekstrüzyon kalınlığı belirtir.
* Veri **Remove Splitter**: `true` ise, Ekstrüzerin iç kavşaklarını ekstrüzyon sırasında birleştirmeye çalışır.
* Veri **Sew**: `true` ise, Ekstrüder üzerine ekstrüzyon sırasında topolojik bir dikiş işlemi gerçekleştirmeye çalışır.

See also: [Property editor](/Property_editor "Property editor").

![](/images/Draft_Facebinder_Corners.png)

On the left an extruded facebinder with closed corners (pink),  
on the right an extruded facebinder with open corners (orange).  
Closed corners are a V1.1 feature.

A Draft Facebinder object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Veri**Area** (`Area`): (read-only) specifies the total area of the linked faces of the facebinder.
* Veri**Extrusion** (`Distance`): specifies the extrusion thickness of the facebinder. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): If the facebinder has connected faces and Veri**Sew** is `true`, an attempt is made to close the corners of the extrusion. If this is not possible faces are extruded separately.
* Veri**Faces** (`LinkSubList`): specifies the linked faces of the facebinder.
* Veri**Offset** (`Distance`): specifies an offset distance to apply between the facebinder and the original faces, prior to extrusion.
* Veri**Remove Splitter** (`Bool`): Specifies whether to remove splitter lines that divide co-planar faces of the facebinder.
* Veri**Sew** (`Bool`): Specifies whether to perform a topological sewing operation on the facebinder.

### View

Draft

### Görünüm

* Görünüm **Pattern**: şeklin yüzünü doldurmak için bir [Taslak Deseni](/Draft_Pattern/tr "Draft Pattern/tr") belirtir. Bu özellik yalnızca Görünüm **Display Mode** "Düz Çizgiler" ise çalışır.
* Görünüm **Pattern Size**: [Taslak Deseni](/Draft_Pattern/tr "Draft Pattern/tr") 'nin boyutunu belirtir.

## Scripting

## Betik

*Ayrıca bkz.:* [Taslak API](/Draft_API/tr "Draft API/tr") ve [FreeCAD Betik esasları](/FreeCAD_Scripting_Basics/tr "FreeCAD Scripting Basics/tr").

Yüz kaplama aracı, aşağıdaki işlevi kullanarak [makrolar](/Macros/tr "Macros/tr") ve [Python](/Python/tr "Python/tr") konsolundan kullanılabilir:

```
facebinder = make_facebinder(selectionset)

```

* Bir  `Facebinder` nesnesini,  `FreeCADGui.Selection.getSelectionEx()` tarafından döndürülenler gibi  `SelectionObject` 'ların bir listesi olan verilen  `choiceset` nesnesinden oluşturur.
* Sadece seçilen yüzler dikkate alınır.

```
PropertyLinkSubList = [tuple1, tuple2, tuple3, ...]
PropertyLinkSubList = [(object1, list1), (object2, list2), (object3, list3), ...]
PropertyLinkSubList = [(object1, ['Face1', 'Face4', 'Face6']), ...]
PropertyLinkSubList = [(object1, ('Face1', 'Face4', 'Face6')), ...]

```

Yüz kaplama kalınlığı  `Extrusion` özniteliğinin üzerine yazılarak eklenebilir; değer milimetre cinsinden girilir.

Yüz kaplamanın yerleşimi,  `Placement` özniteliğinin üzerine yazarak veya  `Placement.Base` ve  `Placement.Rotation` özniteliklerinin üzerine yazılarak değiştirilebilir.

Örnek:

```
import FreeCAD as App
import FreeCADGui as Gui
import Draft

doc = App.newDocument()

# Insert a solid box
box = doc.addObject("Part::Box", "Box")
box.Length = 2300
box.Width = 800
box.Height = 1000

# selection = Gui.Selection.getSelectionEx()
selection = [(box, ("Face1", "Face6"))]
facebinder = Draft.make_facebinder(selection)
facebinder.Extrusion = 50

doc.recompute()

facebinder.Placement.Base = App.Vector(1000, -1000, 100)
facebinder.ViewObject.ShapeColor = (0.99, 0.99, 0.4)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Facebinder/tr&oldid=1551499>"