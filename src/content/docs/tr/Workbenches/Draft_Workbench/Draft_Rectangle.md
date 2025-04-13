---
title: Taslak Dikdörtgen
---
|  |
| --- |
| Dikdörtgen |
| Menü konumu |
| Taslak → Dikdörtgen |
| Tezgahlar |
| [Taslak](/Draft_Workbench/tr "Draft Workbench/tr"), [Mimari](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| R E |
| Versiyonda tanıtıldı |
| - |
| Ayrıca bkz |
| [Elips](/Draft_Ellipse/tr "Draft Ellipse/tr"),[Parça Kutu](/Part_Box/tr "Part Box/tr") |
|  |

## Description

## Açıklama

Dikdörtgen aracı, geçerli belgede belirli bir noktaya bir dikdörtgen ekler. Taslak araç çubuğunda [Çizgi stili](/Draft_Linestyle/tr "Draft Linestyle/tr") setini kullanır.

İsteğe bağlı olarak, dikdörtgenin her köşesine 45 derecelik bir pah veya dairesel bir fileto ekleyebilir ve dikdörtgeni eşit boyutlu satır ve sütunlardan oluşan bir diziye bölebilirsiniz.

![](/images/Draft_Rectangle_example.jpg)

İki köşe noktası tarafından tanımlanan dikdörtgen

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Nasıl kullanılır

1. ![](/images/Draft_Rectangle.png) Dikdörtgen düğmesine basın veya  R ardından  E tuşları.
2. 3D görünümde bir ilk köşe noktasını tıklayın veya bir koordinat yazın ve  ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basın .
3. 3D görünümünde birincinin karşısındaki başka bir noktaya tıklayın veya bir koordinat yazın ve  ![](/images/Draft_AddPoint.svg) Nokta ekle tuşuna basın.

:   İkinci nokta, X, Y veya Z eksenleriyle sınırlandırılmamalıdır, aksi takdirde elde edilen dikdörtgen yanlış biçimlendirilir.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Seçenekler

* Koordinatları manuel olarak girmek için sayıları girin, ardından her bir X, Y ve Z bileşeni arasında  Enter tuşuna basın. Noktayı yerleştirmek istediğiniz değerleri aldığınızda  ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basabilirsiniz.
* **Göreceli** moduna geçmek için  R tuşuna basın veya onay kutusunu tıklayın. Göreceli mod açıksa, ikinci noktanın koordinatları birincisine göredir; değilse, kesindir, kökenlerinden alınır (0,0,0).
* **Devam** moduna geçmek için  T tuşuna basın veya onay kutusunu tıklayın. Devam modu açıksa, ikinci noktayı verdikten sonra Dikdörtgen aracı yeniden başlatılır, böylece araç düğmesine tekrar basmadan başka bir dikdörtgen çizebilirsiniz.
* **Dolu** moduna geçmek için  L tuşuna basın veya onay kutusunu tıklayın. Dolu modu açıksa, dikdörtgen dolgulu bir yüz oluşturur (Veri **Make Face** `true`); değilse, dikdörtgen bir yüz oluşturmaz (Veri **Make Face** `false`).
* [Yakalama](/Draft_Snap/tr "Draft Snap/tr") noktanızı mesafeden bağımsız olarak, en yakın çeki konumuna yönlendirmek için çizim yaparken  Ctrl tuşunu basılı tutun.
* Geçerli komutu iptal etmek için  Esc veya  Close düğmesine basınız.

## Notes

Ağaç görünümündeki öğeye çift tıklayarak veya  ![](/images/Draft_Edit.svg) [Düzenle](/Draft_Edit/tr "Draft Edit/tr") düğmesine basılarak dikdörtgen düzenlenebilir. Ardından noktaları yeni bir konuma getirebilirsiniz.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Plane](/Part_Plane "Part Plane") instead of a Draft Rectangle.

## Özellikler

See also: [Property editor](/Property_editor "Property editor").

A Draft Rectangle object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

### Veri

* VERİ**Length**: X ekseni yönündeki şeklin uzunluğunu belirtir.
* VERİ**Height**: Y ekseni yönündeki şeklin yüksekliğini belirtir.
* VERİ**Chamfer Size**: dikdörtgenin her bir köşesindeki 45 ° pahın diyagonal uzunluğunu belirtir.
* VERİ**Fillet Radius**: dikdörtgenin her bir köşesindeki 90 ° 'lik fileto yarıçapını belirtir.
* VERİ**Rows**: orijinal şeklin bölündüğü eşit boyutta satır sayısını belirtir; varsayılan olarak, 1 satır.
* VERİ**Columns**: orijinal şeklin bölündüğü eşit boyutlu sütunların sayısını belirtir; varsayılan olarak, 1 sütun.
* VERİ**Make Face**: şeklin bir yüz yapıp yapmamasını belirtir. Eğer `true` ise bir yüz yaratılır, aksi takdirde sadece çevre nesnenin bir parçası olarak kabul edilir.

### View

Draft

### Görünüm

* GÖRÜNÜM**Pattern**: şeklin yüzünü doldurmak için bir [Desen](/Draft_Pattern/tr "Draft Pattern/tr") belirtir. Bu özellik yalnızca VERİ**Make Face** `true` ise ve GÖRÜNÜM**Display Mode** "Düz Çizgiler" ise çalışır.
* GÖRÜNÜM**Pattern Size**: [Desen](/Draft_Pattern/tr "Draft Pattern/tr") 'in boyutunu belirtir.
* GÖRÜNÜM**Texture Image**: şeklin yüzünde eşlenecek görüntü dosyasının yolunu belirtir. Bu özelliğin boşaltılması görüntüyü kaldıracak.

:   Eşlemedeki çarpılmaları önlemek için dikdörtgen, görüntüyle aynı oranlara sahip olmalıdır.

## Scripting

## Betik

*Ayrıca bkz.:* [Taslak API](/Draft_API/tr "Draft API/tr") ve [FreeCAD Betik esasları](/FreeCAD_Scripting_Basics/tr "FreeCAD Scripting Basics/tr").

Dikdörtgen aracı, aşağıdaki işlevi kullanarak [makrolar](/Macros/tr "Macros/tr") ve python konsolundan kullanılabilir:

```
rectangle = make_rectangle(length, height, placement=None, face=None, support=None)

```

* X yönünde `length` ve Y yönünde `height`, milimetre cinsinden birimlerle `Rectangle` nesnesi oluşturur.
  + Başka bir yerleşim belirtilmemişse uzunluk X eksenine paralel olacaktır.
* Bir `placement` verilirse kullanılır; Aksi halde, şekil başlangıçta oluşturulur.
* `face` `True` ise, şekil bir yüz yapacaktır, yani dolu görünecektir.

Örnek:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle1 = Draft.make_rectangle(4000, 1000)
rectangle2 = Draft.make_rectangle(1000, 4000)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 45))

rectangle3 = Draft.make_rectangle(3500, 250, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Rectangle/tr&oldid=1472954>"