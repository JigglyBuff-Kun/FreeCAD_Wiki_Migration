---
title: Draft BSpline
---
|  |
| --- |
| BSpline |
| Menü konumu |
| Taslak → BSpline |
| Tezgahlar |
| [Taslak](/Draft_Workbench/tr "Draft Workbench/tr"), [Yapı](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| B S |
| Versiyonda tanıtıldı |
| 0.7 |
| Ayrıca bkz |
| [Tel](/Draft_Wire/tr "Draft Wire/tr"),[Bezier eğrisi](/Draft_BezCurve/tr "Draft BezCurve/tr") |
|  |

## Description

## Açıklama

BSpline aracı, mevcut  [Çalışma düzleminde](/Draft_SelectPlane/tr "Draft SelectPlane/tr") birçok noktadan [B-Spline eğrisi](http://en.wikipedia.org/wiki/B-spline) oluşturur.[Tepsi](/index.php?title=Draft_Tray/tr&action=edit&redlink=1 "Draft Tray/tr (page does not exist)") 'de ayarlanan [Çizgi stili](/Draft_Linestyle/tr "Draft Linestyle/tr") alır.

BSpline aracı, eğrinin geçeceği noktaları belirtir; Öte yandan, [Bezier eğrisi](/Draft_BezCurve/tr "Draft BezCurve/tr") aracı, eğrinin yönünü tanımlamak için  *control points* kullanır. Tam dairesel veya eliptik eğriler oluşturmak için, [Yay](/Draft_Arc/tr "Draft Arc/tr") ve [Elips](/Draft_Ellipse/tr "Draft Ellipse/tr") kullanın.

![](/images/Draft_bspline_example.jpg)

Spline birçok noktayla tanımlanır

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Nasıl kullanılır

1. ![](/images/Draft_BSpline.png) BSpline düğmesine basın veya  B ardından  S tuşuna basın
2. 3D görünümde bir ilk noktaya tıklayın veya bir koordinat yazın ve  ![](/images/Draft_AddPoint.svg) Nokta ekle tuşuna basın.
3. 3D görünümünde ek noktalara tıklayın veya bir koordinate yazın ve  ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basın.
4. Basımı tamamlamak için  Esc veya  Kapat tuşuna basınız.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Seçenekler

* Spline'ı açık bırakmak için A veya ![](/images/Draft_FinishLine.png) Çizgiyi bitir düğmesine basın.
* Oya veya ![](/images/Draft_CloseLine.png) Çizgiyi kapat Spline kapatmak için düğmelerine basın. Bir yüz oluşturmak için son noktadan ilkine bir eğri eklenecektir. Bir yüz oluşturmak için en az üç nokta gerekir.
* Önceden yerleştirilmiş eğri parçalarını kaldırmak için W veya ![](/images/Draft_Wipe.svg) Kaldır düğmesine basın, ancak spline'ı son noktadan düzenlemeye devam edin.
* Geçerli çalışma düzlemini en son yönde ayarlamak için U veya ![](/images/Draft_SelectPlane.svg) [Set WP](/Draft_SelectPlane/tr "Draft SelectPlane/tr") düğmesine basın puan.
* Verilen eksendeki bir sonraki noktayı sınırlamak için bir noktadan sonra X, Y veya Z tuşlarına basın.
* Koordinatları manuel olarak girmek için sayıları girin, ardından her bir X, Y ve Z bileşeni arasında Enter tuşuna basın. Noktayı yerleştirmek istediğiniz değerleri aldığınızda ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basabilirsiniz.
* **Göreceli**moduna geçmek için R tuşuna basın veya onay kutusunu tıklayın. Göreceli mod açıksa, bir sonraki noktanın koordinatları sonuncusuna göre değişir; değilse, kesindir, kökenlerinden alınır (0,0,0).
* **Devam** moduna geçmek için T tuşuna basın veya onay kutusunu tıklayın. Devam modu açıksa, spline'ı bitirdikten sonra BSpline aracı yeniden başlatılır ve alet düğmesine tekrar basmadan bir tane daha çizmenize olanak sağlar.
* **Dolu** moduna geçmek için L tuşuna basın veya onay kutusunu tıklayın. Dolu mod açıksa, kapalı bir eğri dolu bir yüz oluşturur (VERİ**Yüz yapmak** `true`); Aksi halde, kapalı spline bir surat yapmaz (VERİ**Yüz yapmak** `false`).

:   *Note:* Spline uygun bir yüz oluşturmayacağından kendisiyle kesiştiği takdirde doldurulmamalıdır. Spline doldurulur ancak şekli görünmüyorsa, spline'ı görmek için VERİ**Yüz yapmak** 'i `false`' e manuel olarak ayarlayın.

* [snapping](/Draft_Snap/tr "Draft Snap/tr") noktanızı mesafeden bağımsız olarak, en yakın çeki konumuna yönlendirmek için çizim yaparken Ctrl tuşunu basılı tutun.
* Bir sonraki noktanızı yatay veya dikey olarak son noktaya göre [sınırlamak](/Draft_Constrain/tr "Draft Constrain/tr") çizerken Shift tuşunu basılı tutun.
* Son noktayı geri almak için Ctrl Z tuşuna basınız veya ![](/images/Draft_UndoLine.png) Geri alma düğmesine basınız. .
* Geçerli komutu iptal etmek için Esc veya Close tuşuna basınız; Önceden yerleştirilmiş eğri parçaları kalacaktır.

## Notes

BSpline aracı [Tel](/Draft_Wire/tr "Draft Wire/tr") aracı gibi davranır, ancak bölümlerinin her biri düz bir çizgi yerine eğridir. Birini diğerine dönüştürmek için [Telden BSpline çevir](/Draft_WireToBSpline/tr "Draft WireToBSpline/tr") kullanın.

## Özellikler

See also: [Property editor](/Property_editor "Property editor").

A Draft BSpline object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

### Veri

* VERİ**Closed**: Spline'ın kapalı olup olmadığını belirtir. Spline başlangıçta açıksa, bu değer `false`; `true` olarak ayarlamak, spline'ı kapatmak için bir eğri parçası çizecektir. Spline başlangıçta kapatılırsa, bu değer `true`; `false` olarak ayarlamak, son eğri parçasını kaldıracak ve spline'ı açacaktır.
* VERİ**Make Face**: Spline'ın bir surat yapıp yapmayacağını belirtir. Eğer `true` ise bir yüz yaratılır, aksi takdirde sadece çevre nesnenin bir parçası olarak kabul edilir. Bu özellik yalnızca VERİ**Closed** `true` ise çalışır. : *Not:*, eğer spline uygun bir yüz oluşturmayacağından kendisiyle kesiştiğinde VERİ**Make Face** ayarını `true` olarak ayarlamayın.
* VERİ**Parameterization**: BSpline'ın şeklini etkiler.

### View

Draft

### Görünüm

* GÖRÜNÜM**Arrow Size**: spline sonunda görüntülenen sembolün boyutunu belirtir.
* GÖRÜNÜM**Arrow Type**: spline sonunda "Dot", "Circle", "Arrow" veya "Tick" olabilen sembol tipini belirtir.
* GÖRÜNÜM**End Arrow**: Spline'ın son noktasında bir sembol gösterilip gösterilmeyeceğini belirtir, böylece bir açıklama satırı olarak kullanılabilir.
* GÖRÜNÜM**Pattern**: kapalı bir spline'ın yüzünü doldurmak için bir [Draft Pattern](/Draft_Pattern "Draft Pattern") belirtir. Bu özellik yalnızca VERİ**Make Face** `true` ise ve GÖRÜNÜM**Display Mode** "Düz Çizgiler" ise çalışır.
* GÖRÜNÜM**Pattern Size**: [Taslak Deseni](/Draft_Pattern/tr "Draft Pattern/tr") 'nin boyutunu belirtir.

## Scripting

## Betik

*Ayrıca bkz.:* [Taslak API](/Draft_API/tr "Draft API/tr") ve [FreeCAD Betik esasları](/FreeCAD_Scripting_Basics/tr "FreeCAD Scripting Basics/tr").

BSpline aracı, aşağıdaki işlevi kullanarak [makrolar](/Macros/tr "Macros/tr") ve [Python](/Python/tr "Python/tr") konsolundan kullanılabilir:

```
bspline = make_bspline(pointslist, closed=False, placement=None, face=None, support=None)
bspline = make_bspline(Part.Wire, closed=False, placement=None, face=None, support=None)

```

* Belirtilen nokta listesinden bir `BSpline` nesnesi oluşturur, `pointslist`.
  + Listedeki her nokta, `FreeCAD.Vector` ile tanımlanır ve birim milimetre cinsinden tanımlanır.
  + Alternatif olarak, giriş, noktaların çıkarıldığı bir `Part.Wire` olabilir.
* `closed` `True` ise veya ilk ve son noktalar aynıysa, tel kapanır.
* Bir `placement` verilirse kullanılır; Aksi halde, şekil başlangıçta oluşturulur.
* Eğer `face` `True` ise ve spline kapalıysa, spline bir yüz çizer, yani dolu görünür.

Örnek:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)

spline1 = Draft.make_bspline([p1, p2, p3], closed=False)
spline2 = Draft.make_bspline([p1, 2*p3, 1.3*p2], closed=False)
spline3 = Draft.make_bspline([1.3*p3, p1, -1.7*p2], closed=False)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_BSpline/tr&oldid=1472984>"