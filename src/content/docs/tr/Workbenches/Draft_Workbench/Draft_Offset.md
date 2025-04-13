---
title: Taslak Ofsetle
---
|  |
| --- |
| Ofsetle |
| Menü konumu |
| Taslak → Ofsetle |
| Tezgahlar |
| [Taslak](/Draft_Workbench/tr "Draft Workbench/tr"), [Yapı](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| O S |
| Versiyonda tanıtıldı |
| - |
| Ayrıca bkz |
| [Parça 2D ofset](/index.php?title=Part_Offset2D/tr&action=edit&redlink=1 "Part Offset2D/tr (page does not exist)") |
|  |

## Tanım

Ofset aracı seçilen nesneyi kendisine dik verilen belirli bir mesafeye (ofset) hareket ettirir.

![](/images/Draft_Offset_example.jpg)

Bir teli kenarlarından birinden belirli bir mesafeye kaydırmak

## Nasıl Kullanılır

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Offset yapmak istediğiniz nesneyi seçin.
2. ![](/images/Draft_Offset.png) Ofset düğmesine basın veya  O ardından  S tuşlarına basın. Hiçbir nesne seçilmezse, birini seçmeye davet edilirsiniz.
3. 3D görünümde bir noktaya tıklayın veya bir mesafe yazın.

## Seçenekler

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* **Kopyalama**moduna geçmek için  P tuşuna basın veya onay kutusunu tıklayın. Kopyalama modu açıksa, Ofset aracı orijinal şekli yerinde tutar, ancak seçilen noktada ölçeklendirilmiş bir kopya oluşturur.
* Aynı zamanda geçiş modunu değiştirecek noktayı seçerken  Alt tuşunu basılı tutun.  Alt tuşuna basılı tutmak, ofset kopya yerleştirmeye devam etmenizi sağlar; İşlemi tamamlamak ve tüm ofset şekillerini görmek için  Alt tuşunu serbest bırakın.
* **OCC** moduna geçmek için "OCC stili" onay kutusunu tıklayın. Bu, segmentlerin uçlarında yuvarlatılmış kenarlarla özel olarak kapalı bir şekil üretecek olan bir çizgi parçasının her iki tarafından bir denge oluşturacaktır.

:   *Note:* Bu stilde orijinal bölümler kaldırılacak, bu nedenle orijinal kenarları korumak için kopyalama modunu kullanın.

* [snapping](/Draft_Snap/tr "Draft Snap/tr") noktanızı mesafeden bağımsız olarak en yakın çeki konumuna zorlamak için ofset yaparken  Ctrl tuşunu basılı tutun.
* Geçerli segment için belirtilen uzaklık mesafesini korumak için  Shift tuşunu basılı tutun ve başka bir referans seçmekten kaçının.
* Geçerli komutu iptal etmek için  Esc veya  Close tuşuna basınız; önceden yerleştirilmiş ofset kopyalar kalacaktır.

## Notes

* To create an offset version of a [Draft BSpline](/Draft_BSpline "Draft BSpline") its points are offset individually, and from the new points a new spline is calculated. This new spline is not parallel to the original spline. For an exact parallel offset of a [Draft BSpline](/Draft_BSpline "Draft BSpline") the [Part Offset2D](/Part_Offset2D "Part Offset2D") command should be used.
* The Draft Offset command cannot handle [Draft BezCurves](/Draft_BezCurve "Draft BezCurve"). Use the [Part Offset2D](/Part_Offset2D "Part Offset2D") command instead.

## Scripting

## Betik

*Ayrıca bkz.:* [Taslak API](/Draft_API/tr "Draft API/tr") ve [FreeCAD Betik esasları](/FreeCAD_Scripting_Basics/tr "FreeCAD Scripting Basics/tr").

Ofset aracı, aşağıdaki işlevi kullanarak [makrolar](/Macros/tr "Macros/tr") ve python konsolundan kullanılabilir:

```
offset_obj = offset(obj, delta, copy=False, bind=False, sym=False, occ=False)

```

* Vektör olarak tanımlanan verilen  `delta` verilen  `delta` telini ilk köşesine uygulayarak ofsetler.
* `copy`  `True` ise, orijinal nesneyi dengelemek yerine başka bir nesne oluşturulur.
* Eğer  `bind`  `True` ise ve tel nesnesinin açık olması şartıyla, orijinal ve ofset tel uç noktalarına bağlanarak bir yüz oluşturacaklardır.
  + Eğer  `sym`  `True` ise,  `bind` de  `True` olmalı ve ofset telin her iki tarafında da yapılmalı, toplam genişlik verilen vektörün uzunluğudur.
* `occ`  `True` ise, OCC stili ofsetini kullanacaktır: her iki taraftan ofset yapacak, sonra yeni telleri birbirine bağlayacak ve köşeleri yuvarlayacaktır.
* `Offsetobj` orijinal ofset nesnesiyle veya yeni kopyayla döndürülür.

Örnek:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1500, 2000, 0)
p3 = App.Vector(4000, 0, 0)

wire = Draft.make_wire([p1, p2, p3])
doc.recompute()

vector = App.Vector(-200, 150, 0)
offset1 = Draft.offset(wire, vector, copy=True, bind=True, sym=True)
offset2 = Draft.offset(wire, 3*vector, copy=True)
offset3 = Draft.offset(wire, 6*vector, copy=True)
offset4 = Draft.offset(wire, 9*vector, copy=True)
offset5 = Draft.offset(wire, 1.5*vector, copy=True, occ=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Offset/tr&oldid=1473147>"