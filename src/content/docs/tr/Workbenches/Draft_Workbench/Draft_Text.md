---
title: Taslak Metin
---
|  |
| --- |
| Metin |
| Menü konumu |
| Taslak → Metin |
| Tezgahlar |
| [Taslak](/Draft_Workbench/tr "Draft Workbench/tr"), [Mimari](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| T E |
| Versiyonda tanıtıldı |
| - |
| Ayrıca bkz |
| [Etiket](/Draft_Label/tr "Draft Label/tr"), [Şekil dizesi](/Draft_ShapeString/tr "Draft ShapeString/tr") |
|  |

## Description

## Açıklama

Metin aracı, geçerli belgede belirli bir noktaya bir metin parçası ekler. Taslak araç çubuğunda [Çizgi stili](/Draft_Linestyle/tr "Draft Linestyle/tr") setini kullanır.

Bir başlık ve ok içeren bir metin etiketi oluşturmak için [Etiket](/Draft_Label/tr "Draft Label/tr") öğesini kullanın. Düz metin veya 3D harfler oluşturmak için [Şekil dizesi](/Draft_ShapeString/tr "Draft ShapeString/tr") ile [Parça Çıkar](/Part_Extrude/tr "Part Extrude/tr") kullanın.

![](/images/Draft_Text_example.png)

Metin kutusunu konumlandırmak için tek nokta gerekli

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray") and [Draft Snap](/Draft_Snap "Draft Snap").

## Nasıl kullanılır

1. ![](/images/Draft_Text.png) Metin düğmesine basın veya T ardından E tuşları.
2. 3D görünümünde bir noktaya tıklayın veya bir koordinat yazın ve ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basın.
3. İstediğiniz metni girin, her satırda Enter tuşuna basın.
4. İşlemi tamamlamak için Enter tuşuna iki kez basın.

## Seçenekler

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Koordinatları manuel olarak girmek için sayıları girin, ardından her bir X, Y ve Z bileşeni arasında Enter tuşuna basın. Noktayı yerleştirmek istediğiniz değerleri aldığınızda ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basabilirsiniz.
* Metni yerleştirirken, [Yakalama](/Draft_Snap/tr "Draft Snap/tr") noktanızı mesafeden bağımsız olarak en yakın çıtçıt konumuna zorlamak için Ctrl tuşunu basılı tutun.
* Yeni bir metin satırı girmek için Enter veya ↓ Down arrow tuşuna basınız.
* Önceki metin satırını düzenlemek için ↑ Yukarı ok tuşuna basınız.
* Metni düzenlemeyi bitirmek için Enter veya ↓ Aşağı ok tuşuna iki kez basın.
* Geçerli komutu iptal etmek için Esc veya Close düğmesine basınız.

## Notes

* A Draft Text can be edited by double-clicking it in the [Tree view](/Tree_view "Tree view").
* Draft Texts created or saved with [FreeCAD version 0.21](/Release_notes_0.21 "Release notes 0.21") are not backward compatible.

## Özellikler

See also: [Property editor](/Property_editor "Property editor").

A Draft Text object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. The following properties are additional unless otherwise stated.

### Data

Base

### Veri

* VERİ**Text**: Metin bloğunun içeriğini dizelerin bir listesi olarak belirtir; listedeki her öğe, virgülle ayrılmış olarak, yeni bir satır belirtir.
* VERİ**Position**: metin bloğunun ilk satırının taban noktasını belirtir.
* VERİ**Angle**: metin bloğunun ilk satırının taban çizgisinin dönüşünü belirtir.
* VERİ**Axis**: döndürme için kullanılacak ekseni belirtir.

### View

Annotation

* Görünüm**Annotation Style** (`Enumeration`): specifies the annotation style applied to the text. See [Draft AnnotationStyleEditor](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor").
* Görünüm**Scale Multiplier** (`Float`): specifies the general scaling factor applied to the text.

Display Options

* Görünüm**Display Mode** (`Enumeration`): specifies how the text is displayed. If it is `World` the text will be displayed on a plane defined by its Veri**Placement**. If it is `Screen` the text will always face the screen. This is an inherited property. The mentioned options are the renamed options ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")).

Graphics

* Görünüm**Line Color** (`Color`): not used.
* Görünüm**Line Width** (`Float`): not used.

Text

### Görünüm

* GÖRÜNÜM**Display Mode**: "3D metin" ise, metin başlangıçta XY düzleminde olacak şekilde sahne eksenlerine hizalanır; "2D metin" ise, metin her zaman kameraya dönük olacaktır.
* GÖRÜNÜM**Font Name**: metni çizmek için kullanılacak fontu belirtir. "Arial" gibi bir font adı, "sans", "serif" veya "mono" gibi bir varsayılan stil, "Arial, Helvetica, sans" gibi bir aile veya "gibi bir stil içeren bir ad olabilir. Arial: "Kalın. Belirtilen font sistemde bulunmuyorsa, bunun yerine genel olan kullanılır.
* GÖRÜNÜM**Font Size**: harflerin boyutunu belirtir. Metin nesnesi ağaç görünümünde oluşturulmuşsa, ancak hiçbir metin görünmüyorsa, görünene kadar metnin boyutunu artırın.
* GÖRÜNÜM**Justification**: metnin sola, sağa veya taban noktasının ortasına hizalanıp hizalanmayacağını belirtir.
* GÖRÜNÜM**Line Spacing**: metnin satırları arasındaki boşluğu belirtir.

## Scripting

## Betik

*Ayrıca bkz.:* [Taslak API](/Draft_API/tr "Draft API/tr") ve [FreeCAD Betik esasları](/FreeCAD_Scripting_Basics/tr "FreeCAD Scripting Basics/tr").

Metin aracı, aşağıdaki işlevi kullanarak [makrolar](/Macros/tr "Macros/tr") ve [Python](/Python/tr "Python/tr") konsolundan kullanılabilir:

```
text = make_text(string, placement=None, screen=False)

```

* Bir `Text` nesnesini, bir `FreeCAD.Vector` ile tanımlanmış bir `point` nesnesinde oluşturur.
* `stringlist` bir dizedir veya bir dize listesidir; eğer bir liste ise, her eleman kendi satırında görüntülenir.
* `screen` `True` ise, metin her zaman kamera görüntüleme yönüne bakar, aksi takdirde sahne eksenleriyle aynı hizada olur ve XY düzleminde uzanır.

`Text` 'in görünüm özellikleri, niteliklerinin üzerine yazılarak değiştirilebilir; örneğin, `ViewObject.FontSize` üzerine, yeni boyutun milimetre cinsinden üzerine yazın.

Örnek:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

t1 = "This is a sample text"
p1 = App.Vector(0, 0, 0)

t2 = ["First line", "second line"]
p2 = App.Vector(1000, 1000, 0)

text1 = Draft.make_text(t1, p1)
text2 = Draft.make_text(t2, p2)
text1.ViewObject.FontSize = 200
text2.ViewObject.FontSize = 200

zaxis = App.Vector(0, 0, 1)

t3 = ["Upside", "down"]
p3 = App.Vector(-1000, -500, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 180))
text3 = Draft.make_text(t3, place3)
text3.ViewObject.FontSize = 200

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Text/tr&oldid=1513476>"