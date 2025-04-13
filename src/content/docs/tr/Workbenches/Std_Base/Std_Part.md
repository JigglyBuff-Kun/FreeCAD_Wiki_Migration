---
title: Parça Oluştur
---
|  |
| --- |
| Parça Oluştur |
| Menü konumu |
| None |
| Tezgahlar |
| Hepsi |
| Varsayılan kısayol |
| *Hiçbiri* |
| Versiyonda tanıtıldı |
| 0.17 |
| Ayrıca bkz |
| [Grup Oluştur](/Std_Group "Std Group"), [Cisim Oluştur](/PartDesign_Body "PartDesign Body") |
|  |

## Tanım

**Parça** , bir grup nesnenin, tek bir birim olarak beraber hareket ettirilebilen, bir çok nesneyi bir arada tutan genel amaçlı konteynerdir. Parça, en çok Parça tasarım gövdeleri, Parça tezgahı nesneleri, Kafes nesneleri, vb. gibi FreeCAD nesnelerini içerebilir.

Parça, eskizlerin ve diğer nesnelerin eklenebileceği yerel bir koordinat sistemi sağlar.

Although it is primarily intended for solid bodies, the Std Part can be used to manage any object that has a [Placement](/Placement "Placement") property, so it can also contain [Mesh Features](/Mesh_Feature "Mesh Feature"), [sketches](/Sketch "Sketch"), and other objects derived from the [App GeoFeature](/App_GeoFeature "App GeoFeature") class.

Parça, tüm tezgahlarda görüntülenen Yapı araç çubuğunda bulunur.

The ![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") tool is not defined by a particular workbench, but by the base system, thus it is found in the **structure toolbar** that is available in all [workbenches](/Workbenches "Workbenches"). To group objects arbitrarily without considering their position, use ![](/images/Std_Group.svg) [Std Group](/Std_Group "Std Group"); this object does not affect the placements of the elements that it contains, it is essentially just a folder that is used to keep the [Tree view](/Tree_view "Tree view") organized.

![](/images/Std_Part-tree.png)![](/images/Std_Part_example.png)

Left: elements inside a Std Part in the [Tree view](/Tree_view "Tree view"). Right: objects positioned in space, referred to the Origin of the Std Part.

## Nasıl kullanılır

Araç çubuğundaki ![](/images/Std_Part.png) **Parça** düğmesine basın. Parça otomatik olarak aktif hale gelir.

* Etkinleştirmek veya devre dışı bırakmak için Model ağacındaki Parçayı çift tıklayın.
* Parçaya nesneler eklemek için, Model ağacındaki Parçaların üzerine sürükleyip bırakın.
* Nesneleri bir Parçadan çıkarmak için, bunları Parçaların dışına ve Model ağacının üstündeki belge etiketine sürükleyip bırakın.

## Notes

* An object can only belong to a single Part.
* 3D operations like [Part Boolean](/Part_Boolean "Part Boolean") cannot be applied to Parts. For example, you cannot select two Parts, and perform a [Part Fuse](/Part_Fuse "Part Fuse") or [Part Cut](/Part_Cut "Part Cut").

## Özellikler

The [Std Part](/Std_Part "Std Part"), internally called [App Part](/App_Part "App Part") (`App::Part` class), is derived from the [App GeoFeature](/App_GeoFeature "App GeoFeature") (`App::GeoFeature` class) and inherits all its properties. It also has several additional properties. Notably properties that help it manage information in the context of an assembly, for example, Veri**Type**, Veri**Id**, Veri**License**, Veri**LicenseURL** and Veri**Group**.

These are the properties available in the [property editor](/Property_editor "Property editor"). Hidden properties can be shown by using the **Show hidden** command in the context menu of the [property editor](/Property_editor "Property editor").

### Data

Base

* Veri**Id**: Parçanın ID'si (Parça numarası). Bu alan isteğe bağlıdır.
* Veri**License**: Parçanın yayınlandığı lisans.
* Veri**License URL**:Lisans terimlerinin bulunabileceği Web adresi.
* Veri**Placement**:Parçaların 3D uzayda yönünü ve konumunu belirtir. [Yerleşim](/Placement "Placement") bölümüne bakınız.
* Veri**Label**: Etiket, yapılan işleme verilen addır. Bu ad, istediğiniz zaman değiştirilebilir.
* Veri**Group**:Referans nesneleri listeler.

### View

Display Options

* Görünüm**Display Mode** (`Enumeration`): `Group`.
* Görünüm**Show In Tree** (`Bool`): if it is `true`, the object appears in the [Tree view](/Tree_view "Tree view"). Otherwise, it is set as invisible.
* Görünüm**Visibility** (`Bool`): if it is `true`, the object appears in the [3D view](/3D_view "3D view"); otherwise it is invisible. By default this property can be toggled on and off by pressing the Space bar in the keyboard.

Selection

* Görünüm**On Top When Selected** (`Enumeration`): `Disabled` (default), `Enabled`, `Object`, `Element`.
* Görünüm**Selection Style** (`Enumeration`): `Shape` (default), `BoundBox`. If the option is `Shape`, the entire shape (vertices, edges, and faces) will be highlighted in the [3D view](/3D_view "3D view"); if it is `BoundBox` only the bounding box will be highlighted.

## Detailed explanation

### Aktif Durum

Bir FreeCAD belgesi birden fazla Parça içerebilir. Bir seferde sadece bir Parça aktif olabilir. Ağaç görünümünde açık mavi bir arka plan rengiyle etkin olan kısım görüntülenecektir.

An open document can contain multiple Parts. But only one Part can be active. The active Part is displayed in the [tree view](/Tree_view "Tree view") with the background color specified by the **Active container** value in the [preferences editor](/Preferences_Editor#Colors "Preferences Editor") (by default, light blue). It will also be shown with bold text.

To activate or de-activate a Part:

* Double click on it on the [Tree view](/Tree_view "Tree view"), or
* Open the context menu (right click) and select **Active object**.

![](/images/Std_Part_active.png)

Document with two Std Parts, of which the second one is active.

### Orijin

Orijin, üç standart eksenden (X, Y, Z) ve üç standart düzlemden (XY, XZ ve YZ) oluşur. Eskizler bu düzlemlere eklenebilir. Parça içindeki tüm unsurlar Parça'nın orijini ile ilişkilendirilir; bu, Parçanın, içerisindeki öğelerin yerleşimini etkilemeden, küresel koordinat sistemine göre hareket ettirilebileceği ve döndürülebileceği anlamına gelir.

The Origin consists of the three standard axes (X, Y, Z) and three standard planes (XY, XZ and YZ). [Sketches](/Sketch "Sketch") and other objects can be attached to these elements when creating them.

![](/images/Part_Origin_tree.png) ![](/images/Part_Origin_view.png)

Left: Part Origin in the [Tree view](/Tree_view "Tree view"). Right: representation of the Origin elements in the [3D view](/3D_view "3D view").

*Note:* the Origin is an [App Origin](/App_OriginGroupExtension "App OriginGroupExtension") object (`App::Origin` class), while the axes and planes are objects of type `App::Line` and `App::Plane` respectively. Each of these elements can be hidden and unhidden individually with the Space bar; this is useful to choose the correct reference when creating other objects.

*Note 2:* all elements inside the Part are referenced to the Part's Origin which means that the Part can be moved and rotated in reference to the global coordinate system without affecting the placement of the elements inside.

### Görünürlük Yönetimi

Parçanın görünürlüğü, içerdiği herhangi bir nesnenin görünürlüğünün yerini alır. Parça gizlenirse, görünürlüğü true olarak ayarlanmış olsa bile içerdiği nesneler de gizlenir. Bir Parçanın içinde birden fazla nesne bir anda görülebilir.

The Part's visibility supersedes the visibility of any object it contains. If the Part is hidden, the objects it contains will be hidden as well, even if their individual Görünüm**Visibility** property is set to `true`. If the Part is visible, then each object's Görünüm**Visibility** determines whether the object is shown or not.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Part/tr&oldid=1560688>"