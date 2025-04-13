---
title: Taslak Çizgi
---
|  |
| --- |
| Çizgi |
| Menü konumu |
| Taslak → Çizgi |
| Tezgahlar |
| [Taslak](/Draft_Workbench/tr "Draft Workbench/tr"), [Mimari](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| L I |
| Versiyonda tanıtıldı |
| 0.7 |
| Ayrıca bkz |
| [Tel](/Draft_Wire/tr "Draft Wire/tr"),[Nokta](/Draft_Point/tr "Draft Point/tr") |
|  |

## Description

## Tanım

Çizgi aracı, tanımlanan iki nokta arasına bir çizgi çizer. [Tepsi](/index.php?title=Draft_Tray/tr&action=edit&redlink=1 "Draft Tray/tr (page does not exist)") deki [Çizgi stili](/Draft_Linestyle/tr "Draft Linestyle/tr") setini kullanır. Çizgi aracı, iki noktadan sonra durması dışında, [Tel](/Draft_Wire/tr "Draft Wire/tr") aracı gibi davranır.

A Draft Line is in fact a [Draft Wire](/Draft_Wire "Draft Wire") with only two points.

![](/images/Draft_Line_example.jpg)

Çizgi, iki noktayla oluşturulur

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Nasıl kullanılır

1. ![](/images/Draft_Line.svg) Çizgi düğmesine basın veya L ardından I tuşları.
2. 3D görünümde bir ilk noktaya tıklayın veya bir koordinat yazın ve ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basın.
3. 3D görünümünde ikinci bir noktaya tıklayın veya bir koordinat yazın ve ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basın.

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Seçenekler

* Verilen eksendeki ikinci noktayı kısıtlamak için ilk noktadan sonra X, Y veya Z tuşlarına basın.
* Koordinatları manuel olarak girmek için sayıları girin, ardından her bir X, Y ve Z bileşeni arasında Enter tuşuna basın.
  + Noktanın kutupsal koordinatlarını "Uzunluk" ve "Açı" değerlerini vererek de tanımlayabilirsiniz. İşaretçiyi belirtilen açıyla sınırlamak için "Açı" nın yanındaki onay kutusunu tıklayın. Noktayı yerleştirmek istediğiniz değerleri aldığınızda ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basabilirsiniz.
* **Göreceli**moduna geçmek için R tuşuna basın veya onay kutusunu tıklayın. Göreceli mod açıksa, ikinci noktanın koordinatları birincisine göredir; değilse, kesindir, kökenlerinden alınır (0,0,0).
* **Devam**moduna geçmek için T tuşuna basın veya onay kutusunu tıklayın. Devam modu açıksa, ikinci nokta verdikten sonra Satır aracı yeniden başlatılır ve böylece araç düğmesine tekrar basmadan başka bir satır parçası çizmenize izin verir.
* [snapping](/Draft_Snap/tr "Draft Snap/tr") noktanızı mesafeden bağımsız olarak, en yakın çeki konumuna yönlendirmek için çizim yaparken Ctrl tuşunu basılı tutun.
* İlk noktanıza göre ikinci noktanızı yatay veya dikey olarak [constrain](/Draft_Constrain/tr "Draft Constrain/tr") çizerken Shift tuşunu basılı tutun.
* Ctrl + Z tuşuna basınız veya sonuncuyu geri almak için ![](/images/Draft_UndoLine.png) Undo düğmesine basınız. puan.
* Geçerli komutu iptal etmek için Esc veya Close düğmesine basınız.

## Notes

Ağaç görünümündeki öğeye çift tıklayarak veya ![](/images/Draft_Edit.svg) [Düzenle](/Draft_Edit/tr "Draft Edit/tr") düğmesine basılarak çizgi düzenlenebilir. Ardından noktaları yeni bir konuma getirebilirsiniz.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* To change the initial focus of the task panel to the **Length** input box: **Edit → Preferences... → Draft → General → Set focus on Length instead of X coordinate**. Note that you must move the pointer in the [3D view](/3D_view "3D view") for the change to take effect.
* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Line](/Part_Line "Part Line") instead of a Draft Line.

## Properties

## Özellikler

Bir Çizgi nesnesi [tel](/Draft_Wire/tr "Draft Wire/tr") 'deki tüm özellikleri paylaşır, ancak bu özelliklerin yalnızca bazıları Çizgi için geçerlidir.

## Scripting

## Betik

*Ayrıca bkz.:* [Taslak API](/Draft_API/tr "Draft API/tr") ve [FreeCAD Betik esasları](/FreeCAD_Scripting_Basics/tr "FreeCAD Scripting Basics/tr").

Çizgi aracı, aşağıdaki işlevi kullanarak [makrolar](/Macros/tr "Macros/tr") ve [Python](/Python/tr "Python/tr") konsolundan kullanılabilir:

```
line = make_line(p1, p2)
line = make_line(LineSegment)
line = make_line(Shape)

```

* Her biri `p1` ve `p2` noktaları arasında, her biri  `FreeCAD.Vector` ile milimetre cinsinden birimler arasında tanımlanan bir `Line` nesnesi oluşturur.
* Bir `Part.LineSegment` 'dan bir `Line` nesnesi oluşturur.
* Verilen `Shape` 'nin ilk köşesinden son köşesine kadar bir `Line` nesnesi oluşturur.

Örnek:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 500, 0)
p3 = App.Vector(-250, -500, 0)
p4 = App.Vector(500, 1000, 0)

line1 = Draft.make_line(p1, p2)
line2 = Draft.make_line(p3, p4)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Line/tr&oldid=1472852>"