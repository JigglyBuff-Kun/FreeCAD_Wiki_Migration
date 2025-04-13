---
title: Taslak Çokgen
---
|  |
| --- |
| Çokgen |
| Menü konumu |
| Taslak → Çokgen |
| Tezgahlar |
| [Taslak](/Draft_Workbench/tr "Draft Workbench/tr"), [Mimari](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| P G |
| Versiyonda tanıtıldı |
| 0.7 |
| Ayrıca bkz |
| [Çember](/Draft_Circle/tr "Draft Circle/tr") |
|  |

## Description

## Açıklama

Çokgen aracı, merkez ve yarıçapı olmak üzere iki nokta toplayarak bir çevreye yerleştirilmiş düzenli bir çokgen oluşturur. [Draft Tray](/Draft_Tray "Draft Tray") 'de ayarlanan [Çizgi stili](/Draft_Linestyle/tr "Draft Linestyle/tr") alır.

Çokgen, yarıçapı belirtilen bir dairede oluşturulmuştur; çizme modu özelliğini değiştirerek oluşturulduktan sonra sınırlandırılabilir.

![](/images/Draft_polygon_example.jpg)

Merkez nokta ve yarıçap tarafından tanımlanan normal çokgen

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Nasıl kullanılır

1. ![](/images/Draft_Polygon.png) Çokgen düğmesine veya  P ve  G tuşlarına basın.
2. Seçenekler diyalog penceresinde istediğiniz kenar sayısını ayarlayın.
3. 3D görünümde bir ilk noktaya tıklayın veya bir koordinat yazın ve  ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basın.
4. 3D görünümünde başka bir noktaya tıklayın veya poligon yarıçapını tanımlamak için bir yarıçap değeri yazın.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Seçenekler

* Koordinatları manuel olarak girmek için sayıları girin, ardından her bir X, Y ve Z bileşeni arasında  Enter tuşuna basın. Noktayı yerleştirmek istediğiniz değerleri aldığınızda  ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basabilirsiniz.
* **Devam** moduna geçmek için  T tuşuna basın veya onay kutusunu tıklayın. Devam modu açıksa, Çokgen aracı işlemi tamamladıktan sonra yeniden başlatılır ve araç düğmesine tekrar basmadan bir tane daha çizmenize olanak sağlar.
* **Dolu** moduna geçmek için  L tuşuna basın veya onay kutusunu tıklayın. Dolgu modu açıksa, çokgen dolgulu bir yüz oluşturur (Veri **Make Face** `true`); değilse, çokgen bir yüz oluşturmayacak (Veri **Make Face** `false`).
* [Yakalama](/Draft_Snap/tr "Draft Snap/tr") noktanızı mesafeden bağımsız olarak, en yakın çeki konumuna yönlendirmek için çizim yaparken  Ctrl tuşunu basılı tutun.
* İlk noktanıza göre ikinci noktanızı yatay veya dikey olarak [Kısıtlama](/Draft_Constrain/tr "Draft Constrain/tr") çizerken  Shift tuşunu basılı tutun.
* Geçerli komutu iptal etmek için  Esc veya  Close düğmesine basınız.

## Notes

Çokgen, ağaç görünümündeki öğeye çift tıklayarak veya  ![](/images/Draft_Edit.svg) [Düzenle](/Draft_Edit/tr "Draft Edit/tr") düğmesine basılarak düzenlenebilir. Ardından merkez ve yarıçap noktalarını yeni bir konuma getirebilirsiniz.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part RegularPolygon](/Part_RegularPolygon "Part RegularPolygon") instead of a Draft Polygon.

## Özellikler

See also: [Property editor](/Property_editor "Property editor").

A Draft Polygon object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

### Veri

* VERİ**Radius**: Çokgeni tanımlayan dairenin yarıçapını belirtir.
* VERİ**Draw Mode**: Çokgenin bir daire içine mi yazıldığını yoksa bir daire içine mi yazıldığını belirtir.
* VERİ**Faces Number**: Çokgenin kenar sayısını belirtir.
* VERİ**Chamfer Size**: Çokgenin köşelerinde oluşturulan olukların (düz bölümler) boyutunu belirtir.
* VERİ**Fillet Radius**: Çokgenin köşelerinde oluşturulan filetoların (yay parçaları) yarıçapını belirtir.
* VERİ**Make Face**: şeklin bir yüz yapıp yapmamasını belirtir. Eğer `true` ise bir yüz yaratılır, aksi takdirde sadece çevre nesnenin bir parçası olarak kabul edilir.

### View

Draft

### Görünüm

* GÖRÜNÜM**Pattern**: Çokgenin yüzünü doldurmak için bir [Taslak Deseni](/Draft_Pattern "Draft Pattern") belirtir. Bu özellik yalnızca VERİ**Make Face** `true` ise ve GÖRÜNÜM**Display Mode** "Düz Çizgiler" ise çalışır.
* GÖRÜNÜM**Pattern Size**: [Desen](/Draft_Pattern/tr "Draft Pattern/tr") 'nin boyutunu belirtir.

## Scripting

## Betik

*Ayrıca bkz.:* [Taslak API](/Draft_API/tr "Draft API/tr") ve [FreeCAD Betik esasları](/FreeCAD_Scripting_Basics/tr "FreeCAD Scripting Basics/tr").

Çokgen aracı, aşağıdaki işlevi kullanarak [makrolar](/Macros/tr "Macros/tr") ve [Python](/Python/tr "Python/tr") konsolundan kullanılabilir:

```
polygon = make_polygon(nfaces, radius=1, inscribed=True, placement=None, face=None, support=None)

```

* Belirtilen yüz sayısıyla ( `nfaces`) bir  `Polygon` nesnesi oluşturur ve milimetre cinsinden bir  `radius` dairesine dayanır.
* Eğer  `inscribed`  `True` ise, çokgen daireye yazılır, aksi takdirde sınırlandırılır.
  + Başka bir yerleştirme yapılmazsa, çokgenin köşelerinden biri X ekseninde uzanır.
* Bir  `placement` verilirse kullanılır; Aksi halde, şekil başlangıçta oluşturulur.
* `face`  `True` ise, şekil bir yüz yapacaktır, yani dolu görünecektir.

Örnek:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(4, radius=500)
polygon2 = Draft.make_polygon(5, radius=750)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 90))

Polygon3 = Draft.make_polygon(6, radius=1450, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Polygon/tr&oldid=1472962>"