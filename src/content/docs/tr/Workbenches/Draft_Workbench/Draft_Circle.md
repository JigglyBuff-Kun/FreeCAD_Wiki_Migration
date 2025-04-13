---
title: Taslak Çember
---
|  |
| --- |
| Çember |
| Menü konumu |
| Taslak → Çember |
| Tezgahlar |
| [Çember](/Draft_Workbench/tr "Draft Workbench/tr"), [Yapı](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| C I |
| Versiyonda tanıtıldı |
| 0.7 |
| Ayrıca bkz |
| [Yay](/Draft_Arc/tr "Draft Arc/tr"), [Elips](/Draft_Ellipse/tr "Draft Ellipse/tr") |
|  |

## Description

## Açıklama

Çember aracı, geçerli [Çalışma düzlemi](/Draft_SelectPlane/tr "Draft SelectPlane/tr") içinde iki nokta girerek, merkez ve yarıçapı girerek veya teğetleri veya bunların herhangi bir kombinasyonunu alarak bir çember oluşturur. [Tepsi](/index.php?title=Draft_Tray/tr&action=edit&redlink=1 "Draft Tray/tr (page does not exist)") de önceden ayarlanmış olan [Çizgi stili](/Draft_Linestyle/tr "Draft Linestyle/tr") alır.

Bu araç, tam bir yay oluşturması dışında, [Yay](/Draft_Arc/tr "Draft Arc/tr") aracıyla aynı şekilde çalışır. Bir elips çizmek için [Elips](/Draft_Ellipse/tr "Draft Ellipse/tr") kullanın.

![](/images/Draft_Circle_example.jpg)

Çember, iki noktayla tanımlanır

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Nasıl kullanılır

1. ![](/images/Draft_Circle.png) Çember düğmesine basın veya C ardından I tuşlarına basın .
2. 3D görünümde bir ilk noktaya tıklayın veya bir koordinat yazın ve ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basın.
3. 3D görünümünde ikinci bir noktaya tıklayın veya bir yarıçap değeri girin.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Seçenekler

* Daire aletinin birincil kullanımı, merkez ve çevre üzerindeki bir nokta olmak üzere iki nokta seçmektir.
  + Alt tuşuna basarak, bir nokta seçmek yerine bir teğet seçebilirsiniz. Bu nedenle, bir, iki veya üç teğet seçerek birkaç daire tipi oluşturabilirsiniz.
* Koordinatları manuel olarak girmek için sayıları girin, ardından her bir X, Y ve Z bileşeni arasında Enter tuşuna basın. Noktayı yerleştirmek istediğiniz değerleri aldığınızda ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basabilirsiniz.
* **Devam** moduna geçmek için T tuşuna basın veya onay kutusunu tıklayın. Devam modu açıksa, daireyi tamamladıktan sonra Daire aracı yeniden başlatılır ve araç düğmesine tekrar basmadan bir tane daha çizmenize olanak sağlar.
* **Dolgu** moduna geçmek için L tuşuna basın veya onay kutusunu tıklayın. Dolgu modu açıksa, daire dolgulu bir yüz oluşturur (VERİ**Make Face** `true`); değilse, daire bir yüz oluşturmaz (VERİ**Make Face** `false`).
* [snapping](/Draft_Snap/tr "Draft Snap/tr") noktanızı mesafeden bağımsız olarak, en yakın çeki konumuna yönlendirmek için çizim yaparken Ctrl tuşunu basılı tutun.
* İlk noktanıza göre ikinci noktanızı yatay veya dikey olarak [constrain](/Draft_Constrain/tr "Draft Constrain/tr") çizerken Shift tuşunu basılı tutun.
* Geçerli komutu iptal etmek için Esc veya Kapat düğmesine basınız.

## Notes

Ağaç görünümündeki öğeye çift tıklayarak veya ![](/images/Draft_Edit.svg) [Düzenle](/Draft_Edit/tr "Draft Edit/tr") düğmesine basılarak daire düzenlenebilir. Ardından merkez ve yarıçap noktalarını yeni bir konuma getirebilirsiniz.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Circle](/Part_Circle "Part Circle") instead of a Draft Circle.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft Circle object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

### Veri

* VERİ**Başlangıç açısı**: Çemberin başlangıç açısını belirtir; normalde 0 °.
* VERİ**Bitiş açısı**: Çemberin bitiş açısını belirtir; normalde 0 °.
* VERİ**Yarıçap**: Çemberin yarıçapını belirtir.
* VERİ**Yüzey oluştur**: Çemberin bir yüzey yapıp yapmayacağını belirtir. `true` ise bir yüz yaratılır, aksi takdirde sadece çevre nesnenin bir parçası olarak kabul edilir. Bu özellik yalnızca şekil tam bir çevre ise işe yarar.
* VERİ**Başlangıç açısı**: ve tam daire olması için VERİ**Bitiş açısı** aynı değere sahip olmalıdır; Aksi takdirde, bir [Yay](/Draft_Arc/tr "Draft Arc/tr") görüntülenir. 0 ° ve 360 ° değerleri aynı sayılmaz, bu nedenle bu iki değer kullanılırsa, daire bir yüzey oluşturmaz.

### View

Draft

### Görünüm

* GÖRÜNÜM**Desen**: Çemberin yüzünü doldurmak için bir [Desen](/Draft_Pattern/tr "Draft Pattern/tr") belirtir. Bu özellik yalnızca VERİ**Yüzey oluştur** `true` ise ve GÖRÜNÜM**Görüntüle modu** "Düz Çizgiler" ise çalışır.
* GÖRÜNÜM**Desen**: [Desen](/Draft_Pattern/tr "Draft Pattern/tr") 'nin boyutunu belirtir.

## Scripting

## Betik

*Ayrıca bkz.:* [Taslak API](/Draft_API/tr "Draft API/tr") ve [FreeCAD Betik esasları](/FreeCAD_Scripting_Basics/tr "FreeCAD Scripting Basics/tr").

Çember aracı, aşağıdaki işlevi kullanarak [makrolar](/Macros/tr "Macros/tr") ve [Python](/Python/tr "Python/tr") konsolundan kullanılabilir:

```
circle = make_circle(radius, placement=None, face=None, startangle=None, endangle=None, support=None)
circle = make_circle(Part.Edge, placement=None, face=None, startangle=None, endangle=None, support=None)

```

* Milimetre cinsinden `radius` verilen bir `Circle` nesnesi oluşturur.
  + `radius` ayrıca `Curve` özniteliğinin bir `Part.Circle` olması gereken bir `Part.Edge` de olabilir.
* Bir `placement` verilirse kullanılır; Aksi halde, şekil başlangıçta oluşturulur.
* `face` `True` ise, daire bir yüz yapacaktır, yani dolu görünecektir.
* Eğer `startangle` ve `endangle` derece cinsinden verilirse ve farklı değerler varsa, bunlar kullanılır ve nesne [Draft Arc](/Draft_Arc/tr "Draft Arc/tr") olarak görünür.

Örnek:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

circle1 = Draft.make_circle(200)

zaxis = App.Vector(0, 0, 1)
p2 = App.Vector(1000, 1000, 0)
place2 = App.Placement(p2, App.Rotation(zaxis, 0))
circle2 = Draft.make_circle(500, placement=place2)

p3 = App.Vector(-1000, -1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 0))
circle3 = Draft.make_circle(750, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Circle/tr&oldid=1472927>"