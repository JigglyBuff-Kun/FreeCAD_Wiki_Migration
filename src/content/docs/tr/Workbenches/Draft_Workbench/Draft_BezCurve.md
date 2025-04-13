---
title: Taslak Bezier eğrisi
---
|  |
| --- |
| Bezier eğrisi |
| Menü konumu |
| Taslak → Bezier eğrisi |
| Tezgahlar |
| [Taslak](/Draft_Workbench/tr "Draft Workbench/tr"), [Yapı](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| B Z |
| Versiyonda tanıtıldı |
| 0.14 |
| Ayrıca bkz |
| *Hiçbiri* |
|  |

## Tanım

Bezier eğrisi aracı, mevcut  [Çalışma düzlemi](/Draft_SelectPlane/tr "Draft SelectPlane/tr") ile birkaç noktadan [Bezier Eğrisi](http://en.wikipedia.org/wiki/Bezier_curve) (veya parça parça Bezier Eğrisi) oluşturur. Görevler sekmesinde önceden ayarlanmış olan  [Çizgi stilini](/Draft_Linestyle/tr "Draft Linestyle/tr") alır.

Nesne, tek bir Bezier derece eğrisi olarak oluşturulur (nokta sayısı - 1). Bu, [Özellikler](/Property/tr "Property/tr") kullanılarak yaratıldıktan sonra belirli bir dereceye kadar parçalı bir Bezier Eğrisi olarak değiştirilebilir. Bezier Eğrileri,  ![](/images/Draft_Edit.png) [Düzenle](/Draft_Edit/tr "Draft Edit/tr") kullanılarak düzenlenebilir.

The Draft BezCurve and the [Draft CubicBezCurve](/Draft_CubicBezCurve "Draft CubicBezCurve") commands use *control points* to define the position and curvature of the spline. The [Draft BSpline](/Draft_BSpline "Draft BSpline") command, on the other hand, specifies the *exact points* through which the curve will pass.

![](/images/Draft_BezCurve_Example.png)

Bézier curve defined by multiple points

![](/images/Draft_BezCurve_Example.png)

## Nasıl kullanılır

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. There are several ways to invoke the command:
   * Press the ![](/images/Draft_BezCurve.svg) [Bézier curve](/Draft_BezCurve "Draft BezCurve") button.
   * [Draft](/Draft_Workbench "Draft Workbench"): Select the **Drafting → Bézier tools → ![](/images/Draft_BezCurve.svg) Bézier curve** option from the menu.
   * [BIM](/BIM_Workbench "BIM Workbench"): Select the **2D Drafting → ![](/images/Draft_BezCurve.svg) Bézier curve** option from the menu.
   * Use the keyboard shortcut: B then Z.
2. The **Bézier curve** task panel opens. See [Options](#Options) for more information.
3. Pick the first point in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button.
4. Pick additional points in the [3D view](/3D_view "3D view"), or type coordinates and press the ![](/images/Draft_AddPoint.svg) Enter point button.
5. Press Esc or the Close button to finish the command.

1. ![](/images/Draft_BezCurve.png) Bezier eğrisi düğmesine basın veya  B ardından  Z tuşlarına basın.
2. 3D görünümünde bir ilk noktaya tıklayın veya bir koordinat yazın
3. 3D görünümünde ek noktaya tıklayın veya bir koordinat yazın
4. F veya  C tuşuna basın veya son noktayı çift tıklayın veya eğriyi bitirmek ve kapatmak için ilk noktayı tıklayın.

## Seçenekler

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Spline'ı bitirmek için  F veya  ![](/images/Draft_FinishLine.png) **Bitir** düğmesine basın
* C veya  ![](/images/Draft_CloseLine.png) **Kapat** düğmesine basın veya ilk noktaya tıklayın spline'ı bitirin, ancak son nokta ile birincinin arasına son bir parça ekleyerek kapatın.
* Verilen eksendeki bir sonraki noktayı sınırlamak için bir noktadan sonra  X,  Y veya  Z tuşlarına basın.
* Koordinatları manuel olarak girmek için sayıları girin, ardından her bir X, Y ve Z bileşeni arasında  ENTER tuşuna basın.
* R tuşuna basınız veya  **Göreceli** düğmesini işaretlemek / işaretini kaldırmak için onay kutusuna tıklayınız. Göreceli mod açıksa, bir sonraki noktanın koordinatları da öncekine göredir. Olmazsa, mutlaktırlar, (0,0,0) başlangıç ​​noktasından alınırlar.
* T tuşuna basınız veya  **Devam et** düğmesini işaretlemek / işaretini kaldırmak için onay kutusuna tıklayınız. Devam modu açıksa, Bezier eğrisi aracı, bitirdikten veya kapattıktan sonra yeniden başlatılır ve Bezier eğrisi düğmesine tekrar basmadan bir tane daha çizmenize olanak sağlar.
* [snapping](/Draft_Snap/tr "Draft Snap/tr") noktasını mesafeden bağımsız olarak, noktanızı en yakın anlık konuma zorlamak için çizim yaparken  CTRL tuşuna basın.
* Bir sonraki noktanızı yatay veya dikey olarak son noktaya göre  [constrain](/Draft_Constrain/tr "Draft Constrain/tr") çizerken  SHIFT tuşuna basın.
* Mevcut segmentleri kaldırmak ve spline'ı en sondan başlatmak için  W tuşuna basınız veya  ![](/images/Draft_Wipe.png) **Uzat** tuşuna basınız. puan.
* Son noktayı geri almak için  CTRL +  Z tuşuna basın veya  ![](/images/Draft_UndoLine.png) **Geri al** tuşuna basın .
* Geçerli Bezier eğrisi komutunu iptal etmek için  ESC veya  **İptal** düğmesine basın.

## Notes

## Sınırlamalar

* Bu araç FreeCAD 0.14 versiyonundan önce kullanılamaz
* Nokta Özelliği henüz özellikler listesinde görünmüyor.
* OpenCascade, derece > 25 sahip Bezier Eğrisi'ni desteklemiyor. Bu pratikte bir sorun olmamalıdır.

## Özellikler

See also: [Property editor](/Property_editor "Property editor").

A Draft BezCurve object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Veri**Area** (`Area`): (read-only) specifies the area of the face of the curve. The value will be `0.0` if Veri**Make Face** if `false` or the face cannot be created.
* Veri**Closed** (`Bool`): specifies if the curve is closed or not. If the curve is initially open this value is `false`, setting it to `true` will draw a segment to close the curve. If the curve is initially closed this value is `true`, setting it to `false` will remove the last segment and make the curve open.
* Veri**Continuity** (`IntegerList`): (read-only) specifies the continuity of the curve.
* Veri**Degree** (`Integer`): specifies the degree of the curve.
* Veri**Length** (`Length`): (read-only) specifies the total length of the curve.
* Veri**Make Face** (`Bool`): specifies if the curve makes a face or not. If it is `true` a face is created, otherwise only the perimeter is considered part of the object. This property only works if Veri**Closed** is `true` and if the curve does not self-intersect.
* Veri**Points** (`VectorList`): specifies the control points of the curve in its local coordinate system.

### View

Draft

* Görünüm**Arrow Size** (`Length`): specifies the size of the symbol displayed at the end of the curve.
* Görünüm**Arrow Type** (`Enumeration`): specifies the type of symbol displayed at the end of the curve, which can be `Dot`, `Circle`, `Arrow`, `Tick` or `Tick-2`.
* Görünüm**End Arrow** (`Bool`): specifies whether to show a symbol at the end of the curve, so it can be used as an annotation line.
* Görünüm**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the face of the closed curve. This property only works if Veri**Make Face** is `true` and if Görünüm**Display Mode** is `Flat Lines`.
* Görünüm**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Scripting

## Betik

## Betik

Bezier eğrisi aracı, aşağıdaki işlevi kullanarak [makrolar](/Macros/tr "Macros/tr") ve python konsolundan kullanılabilir:

```
bezcurve = make_bezcurve(pointslist, closed=False, placement=None, face=None, support=None, degree=None)
bezcurve = make_bezcurve(Part.Wire, closed=False, placement=None, face=None, support=None, degree=None)

```

* Verilen vektör listesinden bir Bezier eğrisi nesnesi oluşturun. Bir nokta listesi yerine, bir Parça Teli de geçebilirsiniz.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)
p4 = App.Vector(1500, -2000, 0)

bezcurve1 = Draft.make_bezcurve([p1, p2, p3, p4], closed=True)
bezcurve2 = Draft.make_bezcurve([p4, 1.3*p2, p1, 4.1*p3], closed=True)
bezcurve3 = Draft.make_bezcurve([1.7*p3, 1.5*p4, 2.1*p2, p1], closed=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_BezCurve/tr&oldid=1513365>"