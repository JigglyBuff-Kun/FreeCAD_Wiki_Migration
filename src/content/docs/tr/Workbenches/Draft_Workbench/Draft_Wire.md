---
title: Taslak Tel
---
|  |
| --- |
| Tel |
| Menü konumu |
| Taslak → Tel |
| Tezgahlar |
| [Taslak](/Draft_Workbench/tr "Draft Workbench/tr"), [Yapı](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| P L |
| Versiyonda tanıtıldı |
| 0.17 |
| Ayrıca bkz |
| [Çizgi](/Draft_Line/tr "Draft Line/tr"), [BSpline](/Draft_BSpline/tr "Draft BSpline/tr") |
|  |

## Description

## Açıklama

Tel aracı bir çoklu çizgi (birkaç çizgi parçasının bir sırası) oluşturur. [Araç çubuğu](/index.php?title=Draft_Tray/tr&action=edit&redlink=1 "Draft Tray/tr (page does not exist)") 'nda ayarlanan [Çizgi stilini](/Draft_Linestyle/tr "Draft Linestyle/tr") kullanır. Tel aracı, tam [Çizgi](/Draft_Line/tr "Draft Line/tr") aracı gibi davranır, ancak ikiden fazla nokta girmenize izin verir.

The corners of a Draft Wire can be filleted (rounded) or chamfered by changing its Veri**Fillet Radius** or Veri**Chamfer Size** respectively. It is also possible to subdivide the edges of a Draft Wire by changing its Veri**Subdivisions** property.

![](/images/Draft_Polyline_example.jpg)

Tel birçok noktayla tanımlanır

## Create

### Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Nasıl kullanılır

1. ![](/images/Draft_Wire.svg) Tel düğmesine basın veya W ardından I tuşları.
2. 3D görünümde bir ilk noktaya tıklayın veya bir koordinat yazın ve ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basın.
3. 3D görünümünde ek noktalara tıklayın veya bir koordinat yazın ve ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basın.
4. İşlemi tamamlamak için Esc veya Kapat tuşuna basınız.

### Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Seçenekler

* Teli bitirmek için A veya ![](/images/Draft_FinishLine.png) Bitir düğmesine basarak açık bırakın.
* Teli kapatmak için O veya ![](/images/Draft_CloseLine.png) Kapat düğmesine basın, yani bir parça eklenecektir. Son noktadan ilkine bir yüz oluşturmak. Bir yüz oluşturmak için en az üç nokta gerekir.
* Önceden yerleştirilmiş çizgi parçalarını kaldırmak için W veya ![](/images/Draft_Wipe.svg) Silme düğmesine basın, ancak teli düzenlemeye devam edin
* Geçerli çalışma düzlemini en son yönde ayarlamak için U veya ![](/images/Draft_SelectPlane.svg) [Çalışma düzlemi](/Draft_SelectPlane/tr "Draft SelectPlane/tr") ayarla düğmesine basın puan.
* Verilen eksendeki bir sonraki noktayı sınırlamak için bir noktadan sonra X, Y veya Z tuşlarına basın.
* Koordinatları manuel olarak girmek için sayıları girin, ardından her bir X, Y ve Z bileşeni arasında Enter tuşuna basın. Noktayı yerleştirmek istediğiniz değerleri aldığınızda ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basabilirsiniz.
* **Göreceli** moduna geçmek için R tuşuna basın veya onay kutusunu tıklayın. Göreceli mod açıksa, bir sonraki noktanın koordinatları sonuncusuna göre değişir; değilse, kesindir, kökenlerinden alınır (0,0,0).
* **Devam**moduna geçmek için T tuşuna basın veya onay kutusunu tıklayın. Devam modu açıksa, Tel aracı teli bitirdikten sonra yeniden başlatılır ve araç düğmesine tekrar basmadan bir tane daha çizmenize olanak sağlar.
* **Dolu** moduna geçmek için L tuşuna basın veya onay kutusunu tıklayın. Dolu modu açıksa, kapalı bir tel dolgulu bir yüz oluşturur (VERİ**Make Face** `true`); değilse, kapalı tel bir yüz oluşturmaz (VERİ**Make Face** `false`).

:   *Not:* uygun bir yüz oluşturmayacağından telin kendisiyle kesiştiği takdirde doldurulmaması gerekir. Kablo dolu ancak şekli görünmüyorsa, teli görmek için VERİ**Make Face** 'i `false`' e manuel olarak ayarlayın.

* [Yakalama](/Draft_Snap/tr "Draft Snap/tr") noktanızı mesafeden bağımsız olarak, en yakın çeki konumuna yönlendirmek için çizim yaparken Ctrl tuşunu basılı tutun.
* Bir sonraki noktanızı yatay veya dikey olarak son noktaya göre [Kısıtlama](/Draft_Constrain/tr "Draft Constrain/tr") çizerken Shift tuşunu basılı tutun.
* Son noktayı geri almak için Ctrl Z tuşuna basınız veya ![](/images/Draft_UndoLine.svg) Geri al düğmesine basınız. .
* Geçerli komutu iptal etmek için Esc veya Kapat tuşuna basınız; Yerleştirilen çizgi bölümleri kalacaktır.

## Join

### Usage

1. The end points of the [Draft Lines](/Draft_Line "Draft Line") and/or Draft Wires to be joined must be exactly coincident. If required first adjust points to ensure that this is the case.
2. Select two or more [Draft Lines](/Draft_Line "Draft Line") and/or Draft Wires.
3. There are several ways to invoke the command:
   * Press the ![](/images/Draft_Wire.svg) [Draft Wire](/Draft_Wire "Draft Wire") button.
   * Select the **Drafting → ![](/images/Draft_Wire.svg) Polyline** option from the menu.
   * Use the keyboard shortcut: P then L.

## Notes

Tel, ağaç görünümündeki öğeye çift tıklayarak veya  ![](/images/Draft_Edit.svg) [Düzenle](/Draft_Edit/tr "Draft Edit/tr") düğmesine basılarak düzenlenebilir. Ardından noktaları yeni bir konuma taşıyabilir veya  ![](/images/Draft_AddPoint.svg) Nokta ekle veya  ![](/images/Draft_DelPoint.svg) Nokta kaldır ve ardından noktaları eklemek veya kaldırmak için teli tıklatın.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft Wire object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

### Veri

* VERİ**Start**: kablodaki ilk noktayı belirtir.
* VERİ**End**: kablo kapalıysa başlangıç ​​noktasını saymaz, kablodaki son noktayı belirtir.
* VERİ**Closed**: kablonun kapalı olup olmadığını belirtir. Kablo başlangıçta açıksa, bu değer `false`; `true` olarak ayarlamak, teli kapatmak için bir çizgi kesimi çizer. Kablo başlangıçta kapalıysa, bu değer `true`; `false` olarak ayarlamak, son satır parçasını kaldıracak ve teli açacaktır.
* VERİ**Chamfer Size**: telin köşelerinde oluşturulan olukların (düz segmentler) boyutunu belirtir.
* VERİ**Fillet Radius**: telin köşelerinde oluşturulan filetoların (yay parçaları) yarıçapını belirtir.
* VERİ**Make Face**: Teli bir yüz yapıp yapmamayı belirtir. `true` ise bir yüz yaratılır, aksi takdirde sadece kenarlar nesnenin bir parçası olarak kabul edilir. Bu özellik yalnızca VERİ**Closed** `true` ise çalışır.

:   *Not:*, tel uygun bir yüz oluşturmayacağından kendisiyle kesiştiğinde VERİ**Make Face** ayarını `true` olarak ayarlamayın.

* VERİ**Subdivisions**: telin her bir bölümündeki iç düğümlerin sayısını belirtir. [0.16 sürümünde kullanılabilir](/index.php?title=Release_notes_0.16/tr&action=edit&redlink=1 "Release notes 0.16/tr (page does not exist)")
* VERİ**Length**: (salt okunur) tüm kablonun uzunluğunu belirtir.

### View

Draft

### Görünüm

* GÖRÜNÜM**End Arrow**: `true` ise kablonun son noktasında bir sembol gösterecektir, böylece bir açıklama satırı olarak kullanılabilir.
* GÖRÜNÜM**Arrow Size**: telin sonunda görüntülenen sembolün boyutunu belirtir.
* GÖRÜNÜM**Arrow Type**: telin sonunda görüntülenen, "Nokta", "Daire", "Ok" veya "Tik" olabilen sembol tipini belirtir.
* GÖRÜNÜM**Pattern**: kapalı telin yüzünü doldurmak için bir [Desen](/Draft_Pattern/tr "Draft Pattern/tr") belirtir. Bu özellik yalnızca VERİ**Make Face** `true` ise ve GÖRÜNÜM**Display Mode** "Düz Çizgiler" ise çalışır.
* GÖRÜNÜM**Pattern Size**: [Desen](/Draft_Pattern/tr "Draft Pattern/tr") 'in boyutunu belirtir.

## Betik

*Ayrıca bkz.:* [Taslak API](/Draft_API/tr "Draft API/tr") ve [FreeCAD Betik esasları](/FreeCAD_Scripting_Basics/tr "FreeCAD Scripting Basics/tr").

Tel aracı, aşağıdaki işlevi kullanarak [makrolar](/Macros/tr "Macros/tr") ve [Python](/Python/tr "Python/tr") konsolundan kullanılabilir:

```
wire = make_wire(pointslist, closed=False, placement=None, face=None, support=None)
wire = make_wire(Part.Wire, closed=False, placement=None, face=None, support=None)

```

* Belirtilen nokta listesiyle `Wire` nesnesini yaratır, `pointslist`.
  + Listedeki her nokta, `FreeCAD.Vector` ile tanımlanır ve birim milimetre cinsinden tanımlanır.
  + Alternatif olarak, giriş, noktaların çıkarıldığı bir `Part.Wire` olabilir.
* `closed` `True` ise veya ilk ve son noktalar aynıysa, tel kapanır.
* Bir `placement` verilirse kullanılır; Aksi halde, şekil başlangıçta oluşturulur.
* `face` `True` ise ve tel kapalıysa, tel bir yüz yapacaktır, yani dolgulu görünecektir.

Örnek:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)

wire1 = Draft.make_wire([p1, p2, p3], closed=True)
wire2 = Draft.make_wire([p1, 2*p3, 1.3*p2], closed=True)
wire3 = Draft.make_wire([1.3*p3, p1, -1.7*p2], closed=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Wire/tr&oldid=1472871>"