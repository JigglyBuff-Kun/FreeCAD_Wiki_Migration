---
title: Taslak Boyut
---
|  |
| --- |
| Boyut |
| Menü konumu |
| Taslak → Boyut |
| Tezgahlar |
| [Taslak](/Draft_Workbench/tr "Draft Workbench/tr"), [Mimari](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| D I |
| Versiyonda tanıtıldı |
| 0.18 |
| Ayrıca bkz |
| [FlipDimension](/Draft_FlipDimension/tr "Draft FlipDimension/tr"),[Teknik resim](/TechDraw_Workbench/tr "TechDraw Workbench/tr") |
|  |

## Description

## Açıklama

Boyut aracı, iki nokta arasındaki mesafeyi ölçen ve görüntüleyen bir nesne oluşturur; üçüncü bir nokta, boyut çizgisinin konumunu belirtir.

Araç, doğrudan katı gövdelere tutturulmuş kenarları veya çizgileri ölçebilir; Gövde değişirse, boyut kendini günceller. Araç ayrıca [Yay](/Draft_Arc/tr "Draft Arc/tr") veya [Doldur](/index.php?title=Part_Fillet/tr&action=edit&redlink=1 "Part Fillet/tr (page does not exist)"), [Eskiz Dolgu oluştur](/index.php?title=Sketcher_CreateFillet/tr&action=edit&redlink=1 "Sketcher CreateFillet/tr (page does not exist)") ve [Prça tasarım Dolgu](/PartDesign_Fillet/tr "PartDesign Fillet/tr") işlemleri ile üretilenler gibi eğrilik çapını veya yarıçapını da ölçebilir.

Ortaya çıkan boyut 3D görünümüne yerleştirilir ve bir Taslak nesnesi olarak kabul edilir. Bu nesne, [Teknik resim Yeni Eskiz](/index.php?title=TechDraw_DraftView/tr&action=edit&redlink=1 "TechDraw DraftView/tr (page does not exist)") veya [Teknik resim Yeni Yay](/index.php?title=TechDraw_ArchView/tr&action=edit&redlink=1 "TechDraw ArchView/tr (page does not exist)") araçlarını kullanarak [Teknik resim tezgahı](/TechDraw_Workbench/tr "TechDraw Workbench/tr") sayfasında görüntülenebilir. Bu araçlar teknik çizimler hazırlamak içindir, bu yüzden boyutları 3D çizimde değil, sadece çizim sayfasında oluştururlar.

![](/images/Screenshot_Draft_Dimension.jpg)

Üç nokta tarafından tanımlanan boyut

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

### Linear dimension

## Nasıl kullanılır

1. ![](/images/Draft_Dimension.png) Taslak Boyut düğmesine basın veya  D ardından  I tuşları.
2. 3D görünümünde bir noktaya tıklayın veya bir koordinat yazın ve  ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basın.
3. 3D görünümünde ikinci bir noktaya tıklayın veya bir koordinat yazın ve  ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basın. İlk iki nokta ölçülen mesafeyi tanımlar.
4. 3D görünümünde üçte birini tıklayın veya bir koordinat yazın ve  ![](/images/Draft_AddPoint.svg)  düğmesine basın. Son nokta, ölçüm çizgisinin konumunu tanımlar.

### Radial dimension

1. Optionally select a circular edge in the [3D view](/3D_view "3D view").
2. Invoke the command as explained above.
3. The **Dimension** task panel opens. See [Options](#Options) for more information.
4. If you have not yet selected an edge do one of the following:
   * Press E or the ![](/images/View-select.svg) Select edge button and select a circular edge in the [3D view](/3D_view "3D view").
   * Hold down the Alt key, select a circular edge in the [3D view](/3D_view "3D view") and release the Alt key.
5. To position the dimension line do one of the following:
   * For a diameter dimension:
     + Pick a point in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button.
   * For a radial dimension:
     + Hold down the Shift key and pick a point in the [3D view](/3D_view "3D view").

### Angular dimension

1. Invoke the command as explained above.
2. The **Dimension** task panel opens. See [Options](#Options) for more information.
3. Do one of the following:
   * Press E or the ![](/images/View-select.svg) Select edge button and select a first straight edge in the [3D view](/3D_view "3D view"). Repeat this to select a second straight edge.
   * Hold down the Alt key, select two straight edges in the [3D view](/3D_view "3D view") and release the Alt key.
4. To position the dimension arc pick a point in the [3D view](/3D_view "3D view").
5. The displayed angle depends on the edges and the picked point.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Seçenekler

* Verilen eksendeki bir sonraki noktayı sınırlamak için bir noktadan sonra  X,  Y veya  Z tuşlarına basın.
* Koordinatları manuel olarak girmek için sayıları girin, ardından her bir X, Y ve Z bileşeni arasında  Enter tuşuna basın. Noktayı yerleştirmek istediğiniz değerleri aldığınızda  ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basabilirsiniz.
* **Göreceli** moduna geçmek için  R tuşuna basın veya onay kutusunu tıklayın. Göreceli mod açıksa, bir sonraki noktanın koordinatları bir öncekine göredir; değilse, kesindir, Eksenden alınır (0,0,0).
* **Devam** moduna geçmek için  T tuşuna basın veya onay kutusunu tıklayın. Devam modu açıksa, son noktayı verdikten sonra Boyut aracı yeniden başlatılır ve araç düğmesine tekrar basmadan başka bir boyut çizmenize izin verilir; Aşağıdaki boyutlar önceki boyutun son noktasından başlayacak ve aynı temel çizgiyi paylaşacaktır.
* [Yakalama](/Draft_Snap/tr "Draft Snap/tr") noktanızı mesafeden bağımsız olarak, en yakın çeki konumuna yönlendirmek için çizim yaparken  Ctrl tuşunu basılı tutun.
* Bir önceki noktaya göre  [Kısıtlama](/Draft_Constrain/tr "Draft Constrain/tr") bir sonraki noktanızı yatay veya dikey olarak çizerken ve çap ve yarıçap modları arasında geçiş yapmak için  Shift tuşunu basılı tutun.
* Geçerli komutu iptal etmek için  Esc veya  Close düğmesine basın ve **devam** boyutlarını bitirin; önceden yerleştirilmiş boyutlar kalacaktır.

## Notes

Boyut, ağaç görünümündeki öğeye çift tıklayarak veya  ![](/images/Draft_Edit.svg) [Taslak Düzenle](/Draft_Edit/tr "Draft Edit/tr") düğmesine basarak düzenlenebilir. Ardından noktaları yeni bir konuma getirebilirsiniz.

## Preferences

* [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): When created, the text of dimensions is oriented automatically relative to the current [working plane](/Draft_SelectPlane "Draft SelectPlane") via their Görünüm**Flip Text** property. A [fine-tuning](/Fine-tuning#Draft_Workbench "Fine-tuning") parameter is available to disable this behavior.

## Özellikler

See also: [Property editor](/Property_editor "Property editor").

A Draft Dimension object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. The following properties are additional unless otherwise stated:

### Data linear and radial dimension

Dimension

### Veri

* Veri **Start**: ölçülecek mesafenin başlangıç noktasını belirtir.
* Veri **End**: ölçülecek mesafenin bitiş noktasını belirtir.
* Veri **Dimline**: boyut çizgisinin geçmesi gereken bir noktayı belirtir.
* Veri **Distance**: (salt okunur) ölçülen uzunluğu belirtir.
* Veri **Diameter**: `true` ise, bir çap boyutu görüntüler; aksi takdirde bir yarıçap boyutu görüntüler; Bu özellik yalnızca boyut dairesel bir yaya bağlıysa çalışır.

Linear/radial dimension

* Veri**Direction** (`Vector`): specifies the direction of the measurement.
* Veri**Distance** (`Length`): (read-only) specifies the value of the measurement.
* Veri**End** (`VectorDistance`): specifies the end point of the measurement.
* Veri**Start** (`VectorDistance`): specifies the start point of the measurement.

Radial dimension

* Veri**Diameter** (`Bool`): specifies if a radial dimension is displayed as a diameter dimension. Not used for linear dimensions.

### Data angular dimension

Angular dimension

* Veri**Angle** (`Angle`): (read-only) specifies the value of the measurement.
* Veri**Center** (`VectorDistance`): specifies the center of the measurement.
* Veri**First Angle** (`Angle`): specifies the start angle of the measurement.
* Veri**Last Angle** (`Angle`): specifies the end angle of the measurement.

Dimension

* Veri**Dimline** (`VectorDistance`): specifies the point through which the dimension arc passes.
* Veri (hidden)**Linked Geometry** (`LinkSubList`): not used.
* Veri (hidden)**Normal** (`Vector`): specifies the normal of the plane of the dimension.
* Veri (hidden)**Support** (`Link`): not used.

### View

Annotation

* Görünüm**Annotation Style** (`Enumeration`): specifies the annotation style applied to the dimension. See [Draft AnnotationStyleEditor](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor").
* Görünüm**Scale Multiplier** (`Float`): specifies the general scaling factor applied to the dimension.

Display Options

* Görünüm**Display Mode** (`Enumeration`): specifies how the text is displayed. If it is `World` the text will be displayed on a plane defined by the Veri**Normal** of the measurement. If it is `Screen` the text will always face the screen. This is an inherited property. The mentioned options are the renamed options ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")).

Graphics

### Görünüm

* Görünüm **Ext Lines**: Ölçüm noktalarından boyut çizgisine giden uzatma hatlarının maksimum uzunluğunu belirtir.
* Görünüm **Ext Overshoot**: uzantı çizgilerinin boyut çizgisinin ötesindeki ek uzunluğunu belirtir.
* Görünüm **Dim Overshoot**: boyut çizgisine eklenen ilave uzunluğu belirtir.

```
* Görünüm Arrow Size: boyut çizgisinin sonunda görüntülenen sembolün boyutunu belirtir. 

```

* Görünüm **Arrow Type**: "Çizgi", "Daire", "Ok" veya "Tik" olabilen, boyut çizgisinin sonunda görüntülenen sembolün türünü belirtir.
* Görünüm **Flip Arrows**: sembollerin boyut çizgisinin uçlarında çevrilip çevrilmeyeceğini belirtir; sadece bu semboller ok ise işe yarar.
* Görünüm **Font Name**: metni çizmek için kullanılacak fontu belirtir. "Arial" gibi bir font adı, "sans", "serif" veya "mono" gibi bir varsayılan stil, "Arial, Helvetica, sans" gibi bir aile veya "gibi bir stil içeren bir ad olabilir. Arial: "Kalın. Belirtilen font sistemde bulunmuyorsa, bunun yerine genel olan kullanılır.
* Görünüm **Font Size**: harflerin boyutunu belirtir. Boyut nesnesi ağaç görünümünde oluşturulmuşsa ancak metin görünmüyorsa, görünene kadar metnin boyutunu artırın.
* Görünüm **Flip Text**: ölçümü gösteren metnin yönünün çevrilip çevrilmeyeceğini belirtir.
* Görünüm **Text Position**: orijine (0,0,0) atıfta bulunulan metnin mutlak koordinatlardaki konumunu belirtir; metni boyut çizgisinin yanında görüntülemek için bu özelliği varsayılan değerinde (0,0,0) bırakın.
* Görünüm **Text Spacing**: Metin ve boyut çizgisi arasındaki boşluğu belirtir.
* Görünüm **Override**: gerçek ölçüm yerine görüntülenecek özel bir metin belirtir. Ölçüm değerini görüntülemek için metnin içindeki  `$ dim` dizesini kullanın.
* Görünüm **Decimals**: ölçümde görüntülenecek ondalık basamak sayısını belirtir.
* Görünüm **Show Unit**: `true` ise, birim ölçümün sayısal değerinin yanında görüntülenir.
* Görünüm **Unit Override**: ölçümü "örneğin" km "," m "," cm "," mm "," mi "," ft "," in "olarak ifade edeceği bir birim belirtir. ; varsayılan birimleri kullanmak için bu özelliği boş bırakın.  [0.17 sürümünde kullanılabilir](/Release_notes_0.17/tr "Release notes 0.17/tr")

Text

* Görünüm**Flip Text** (`Bool`): specifies whether to flip the orientation of the text.
* Görünüm**Font Name** (`Font`): specifies the font used to draw the text. It can be a font name, such as `Arial`, a default style such as `sans`, `serif` or `mono`, a family such as `Arial,Helvetica,sans`, or a name with a style such as `Arial:Bold`. If the given font is not found on the system, a default font is used instead.
* Görünüm**Font Size** (`Length`): specifies the size of the letters. The text can be invisible in the [3D view](/3D_view "3D view") if this value is very small.
* Görünüm**Override** (`String`): specifies a custom text to display instead of the actual measurement. Use the string `$dim` inside the text to include the measurement.
* Görünüm**Text Color** (`Color`): specifies the color of the text. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Görünüm**Text Position** (`VectorDistance`): specifies the position of the text in absolute coordinates. `[0, 0, 0]` will display the text in its default position near the dimension line or arc.
* Görünüm**Text Spacing** (`Length`): specifies the space between the text and the dimension line or arc.

Units

* Görünüm**Decimals** (`Integer`): specifies the number of decimal places to display for the measurement.
* Görünüm**Show Unit** (`Bool`): specifies whether to display the unit next to the numerical value of the measurement. Not used for angular dimensions.
* Görünüm**Unit Override** (`String`): specifies the unit in which to express the measurement, for example, `km`, `m`, `cm`, `mm`, `mi`, `ft`, `in` or `arch` for arch units. Leave this blank to use the default unit. Not used for angular dimensions.

## Scripting

## Betik

*Ayrıca bkz.:* [Taslak API](/Draft_API/tr "Draft API/tr") ve [FreeCAD Betik esasları](/FreeCAD_Scripting_Basics/tr "FreeCAD Scripting Basics/tr").

Boyut aracı, aşağıdaki işlevi kullanarak [makrolar](/Macros/tr "Macros/tr") ve [Python](/Python/tr "Python/tr") konsolundan kullanılabilir:

```
dimension = make_dimension(p1, p2, p3=None, p4=None)

```

Kendisine iletilen argümanlara bağlı olarak, bu işlevi çağırmanın çeşitli yolları vardır:

```
dimension = make_dimension(p1, p2, p3=None)
dimension = make_dimension(object, i1, i2, p4=None)
dimension = make_dimension(object, i1, mode, p4=None)

```

* `p1` ve  `p2` noktaları arasındaki mesafeyi ölçerek doğrusal bir  `Dimension` oluşturur.
* `object` 'a bağlı,  `i1` ve  `i2` endeksli köşeleri arasındaki mesafeyi ölçen doğrusal bir  `Dimension` oluşturur.
* `object` 'a bağlı,  `i1`, ölçülecek eğri kenarının dizini ve  `mode` ya { Boyut türünü belirtmek için {incode | "radius"}} veya  `"çap"`.
  + İlk aramada  `p3` ve diğer ikisinde de  `p4`, boyut çizgisinin geçmesi gereken isteğe bağlı bir nokta belirtin.
  + Tüm noktalar  `FreeCAD.Vector` ile tanımlanır.

Açısal bir boyut oluşturmak için aşağıdaki işlevi kullanın:

```
dimension = make_angular_dimension(center, angles, p3, normal=None)
dimension = make_angular_dimension(center, [angle1, angle2], p3, normal=None)

```

* Verilen  `center` noktasından, iki öğeli  `angles` listesinden ve arkasından gelen  `p3` noktasından açısal bir  `Dimension` oluşturur. gitmelisin.
  + Eğer  `angle1> angle2` ise, görüntülenen açı  `angle1 - angle2` farkıdır; Aksi halde, ek açı gösterilir  `360 - (angle2 - angle1)`.
  + Açıları radyan cinsinden verilmelidir;  `math.radians ()` işlevi, derece olarak verilen açıları dönüştürmek için kullanılabilir.

`Dimension` görünüm özellikleri niteliklerinin üzerine yazılarak değiştirilebilir; örneğin,  `ViewObject.FontSize` üzerine, yeni boyutun milimetre cinsinden üzerine yazın.

Örnek:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(-2500, 0, 0)
dimension1 = Draft.make_dimension(p1, p2, p3)
dimension1.ViewObject.FontSize = 200

polygon = Draft.make_polygon(3, radius=1000)
doc.recompute()

p4 = App.Vector(-2000, 1500, 0)
dimension2 = Draft.make_dimension(polygon, 1, 2, p4)
dimension2.ViewObject.FontSize = 200

center = App.Vector(2000, 0, 0)
p5 = App.Vector(3000, 1000, 0)
angle1 = 45
angle2 = 10
dimension3 = Draft.make_angular_dimension(center, [angle1, angle2], p5)
dimension3.ViewObject.FontSize = 200

dimension4 = Draft.make_angular_dimension(center, [angle2, angle1], p5*1.2)
dimension4.ViewObject.FontSize = 200

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Dimension/tr&oldid=1565036>"