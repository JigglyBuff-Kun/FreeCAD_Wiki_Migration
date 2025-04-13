---
title: Taslak Nokta
---
|  |
| --- |
| Nokta |
| Menü konumu |
| Taslak → Nokta |
| Tezgahlar |
| [Taslak](/Draft_Workbench/tr "Draft Workbench/tr"), [Yapı](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| P T |
| Versiyonda tanıtıldı |
| 0.17 |
| Ayrıca bkz |
| [Çizgi](/Draft_Line/tr "Draft Line/tr"), [Tel](/Draft_Wire/tr "Draft Wire/tr") |
|  |

## Tanım

Nokta aracı, geçerli [Çalışma düzlemi](/Draft_SelectPlane/tr "Draft SelectPlane/tr") içinde basit bir nokta yaratır, daha sonra başka nesnelerin yerleştirilmesi için referans olarak kullanılmaya elverişlidir. [Taslak Tepsi](/index.php?title=Draft_Tray/tr&action=edit&redlink=1 "Draft Tray/tr (page does not exist)") 'de ayarlanan [Çizgi stili](/Draft_Linestyle/tr "Draft Linestyle/tr") ayarlarını alır.

![](/images/Draft_point_example.jpg)

## Nasıl Kullanılır

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. ![](/images/Draft_Point.png) Nokta tuşuna veya P basın ardından T basın.
2. 3D görünümünde bir noktaya tıklayın veya bir koordinat yazın ve ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basın.

## Seçenekler

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Koordinatları manuel olarak girmek için sayıları girin, ardından her bir X, Y ve Z bileşeni arasında Enter tuşuna basın. Noktayı yerleştirmek istediğiniz değerleri aldığınızda ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basabilirsiniz.
* **Devam** moduna geçmek için T tuşuna basın veya onay kutusunu tıklayın. Devam modu açıksa, nokta aracı siz bir noktaya yerleştirdikten sonra yeniden başlatılır ve araç düğmesine tekrar basmadan bir tane daha yerleştirmenizi sağlar.
* Geçerli komutu iptal etmek için Esc veya Close düğmesine basınız.

## Notes

* Use ![](/images/Draft_Snap_Endpoint.svg) [Draft Snap Endpoint](/Draft_Snap_Endpoint "Draft Snap Endpoint") to snap to Draft points.

## Özellikler

See also: [Property editor](/Property_editor "Property editor").

A Draft Point object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Draft

* VERİ**X**: Noktanın X koordinatı
* VERİ**Y**: Noktanın Y koordinatı
* VERİ**Z**: Noktanın Z koordinatı

### View

Draft

* Görünüm**Pattern** (`Enumeration`): not used.
* Görünüm**Pattern Size** (`Float`): not used.

## Scripting

## Betik

*Ayrıca bkz.:* [Taslak API](/Draft_API/tr "Draft API/tr") ve [FreeCAD Betik esasları](/FreeCAD_Scripting_Basics/tr "FreeCAD Scripting Basics/tr").

Nokta aracı, aşağıdaki işlevi kullanarak [makrolar](/Macros/tr "Macros/tr") ve [Python](/Python/tr "Python/tr") konsolundan kullanılabilir:

```
point = make_point(X=0, Y=0, Z=0, color=None, name="Point", point_size=5)
point = make_point(point, Y=0, Z=0, color=None, name="Point", point_size=5)

```

* Belirtilen `X`, `Y` ve `Z` koordinatlarında, birimler milimetre cinsinden bir `Point` nesnesi oluşturur. Eğer koordinat verilmezse, başlangıç noktasında nokta oluşturulur (0,0,0). \*
* Eğer `X` bir `FreeCAD.Vector` tarafından tanımlanan bir `point` ise, kullanılır.
* `color`, `(R, G, B)` bir skaladır; nokta, RGB ölçeğindeki noktanın rengini gösterir; Bağlantıdaki her değer, `0` ila `1` aralığında olmalıdır.
* `name`, nesnenin adıdır.
* `point_size`, grafiksel kullanıcı arayüzü yüklendiğinde nesnenin piksel cinsinden boyutudur.

Example:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

point1 = Draft.make_point(1600, 1400, 0)

p2 = App.Vector(-3200, 1800, 0)
point2 = Draft.make_point(p2, color=(0.5, 0.3, 0.6), point_size=10)

doc.recompute()

```

Örnek:

This code creates `N` random points within a square of side `2L`. It makes a loop creating `N` points, that may appear anywhere from `-L` to `+L` on both X and Y. It also chooses a random color and size for each point. Change `N` to change the number of points, and change `L` to change the area covered by the points.

```
import random
import FreeCAD as App
import Draft

doc = App.newDocument()

L = 1000
centered = App.Placement(App.Vector(-L, -L, 0), App.Rotation())
rectangle = Draft.make_rectangle(2*L, 2*L, placement=centered)

N = 10
for i in range(N):
    x = 2*L*random.random() - L
    y = 2*L*random.random() - L
    z = 0
    r = random.random()
    g = random.random()
    b = random.random()
    size = 15*random.random() + 5
    Draft.make_point(x, y, z, color=(r, g, b), point_size=size)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Point/tr&oldid=1513394>"