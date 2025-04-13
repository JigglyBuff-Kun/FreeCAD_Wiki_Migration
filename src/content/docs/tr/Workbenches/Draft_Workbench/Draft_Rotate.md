---
title: Taslak Döndür
---
|  |
| --- |
| Döndür |
| Menü konumu |
| Taslak → Döndür |
| Tezgahlar |
| [Taslak](/Draft_Workbench/tr "Draft Workbench/tr"), [Mimari](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| R O |
| Versiyonda tanıtıldı |
| 0.17 |
| Ayrıca bkz |
| [Taşı](/Draft_Move/tr "Draft Move/tr"), [Dizi](/Draft_Array/tr "Draft Array/tr") |
|  |

## Tanım

Döndürme aracı, seçilen nesneleri bir referans noktasının etrafındaki belirli bir açıyla döndürür veya kopyalar.

Döndür aracı, [Taslak tezgahı](/Draft_Workbench/tr "Draft Workbench/tr") veya [Eskiz tezgahı](/Sketcher_Workbench/tr "Sketcher Workbench/tr") ile oluşturulan 2D şekillerde kullanılabilir, ancak [Parça tezgahı](/Part_Workbench/tr "Part Workbench/tr") ve [Mimari tezgahı](/Arch_Workbench/tr "Arch Workbench/tr") ile oluşturulanlar gibi birçok 3D nesne üzerinde de kullanılabilir.

![](/images/Draft_Rotate_example.jpg)

Bir merkez referans noktası kullanarak bir nesneyi, bir referans açısından başka bir açıyla döndürme

## Nasıl kullanılır

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Taşımak veya kopyalamak istediğiniz nesneleri seçin.
2. ![](/images/Draft_Rotate.svg) Döndür düğmesine basın veya  R ardından  O tuşlarına basın. Hiçbir nesne seçilmezse, birini seçmeye davet edilirsiniz.
3. 3D görünümde bir ilk noktaya tıklayın veya bir koordinat yazın ve  ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basın. Bu, işlemin dönme ekseninin geçeceği temel noktası olarak işlev görür.
4. 3D görünümünde ikinci bir noktaya tıklayın veya taban açısını yazın. Bu, ilk nokta etrafında dönecek bir taban çizgisini tanımlar.
5. 3D görünümünde üçüncü bir noktaya tıklayın veya bir dönüş açısı yazın. Bu, taban çizgisinin ve dolayısıyla nesnelerin dönmesini gösterir.

## Seçenekler

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Verilen eksendeki bir sonraki noktayı sınırlamak için bir noktadan sonra X, Y veya Z tuşlarına basın.
* Koordinatları manuel olarak girmek için sayıları girin, ardından her bir X, Y ve Z bileşeni arasında Enter tuşuna basın. Noktayı yerleştirmek istediğiniz değerleri aldığınızda ![](/images/Draft_AddPoint.svg) add point düğmesine basabilirsiniz.
* **Devam**moduna geçmek için T tuşuna basın veya onay kutusunu tıklayın. Devam modu açıksa, işlemi tamamladıktan sonra Döndürme aracı yeniden başlatılır ve böylece araç düğmesine tekrar basmadan nesneleri döndürmenizi veya kopyalamanızı sağlar.
* **Kopyalama**moduna geçmek için P tuşuna basın veya onay kutusunu tıklayın. Kopyalama modu açıksa, Döndürme aracı orijinal şeklini yerinde tutacaktır, ancak üçüncü noktada ayarlanan açıyla bir kopya oluşturur. : Sırayla birkaç kopya yerleştirmek için hem T hem de P kullanabilirsiniz. Bu durumda, kopyalanan öğe en son yerleştirilen kopyadır.
* Kopyalama moduna geçmek için ikinci noktadan sonra Alt tuşunu basılı tutun. Üçüncü noktaya tıkladıktan sonra Alt tuşunu basılı tutmak, aynı döndürme temel noktasını ve taban çizgisini kullanarak kopya yerleştirmeye devam etmenizi sağlar; İşlemi bitirmek ve tüm kopyaları görmek için Alt tuşunu bırakın.
* [snapping](/Draft_Snap/tr "Draft Snap/tr") noktanızı mesafeden bağımsız olarak en yakın çeki konumuna zorlamak için dönerken Ctrl tuşunu basılı tutun.
* Bir sonraki noktanızı dönme baz noktasına göre yatay veya dikey olarak [constrain](/Draft_Constrain/tr "Draft Constrain/tr") konumuna döndürürken Shift tuşunu basılı tutun.
* Geçerli komutu iptal etmek için Esc veya Close tuşuna basınız; önceden yerleştirilmiş kopyalar kalacaktır.

## Notes

* An Object that is [attached](/Part_EditAttachment "Part EditAttachment") cannot be rotated with the Draft Rotate command. To rotate it either its Veri**Support** object has to be rotated, or its Veri**Attachment Offset** has to be changed.
* The base angle concept can be somewhat confusing. Especially since it works only when selecting points, not when specifying the angle using the input field. An explanation of how it works, with an example, can be found in [this forum thread](https://forum.freecad.org/viewtopic.php?p=736674#p736674).

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* To reselect the base objects after copying objects: **Edit → Preferences... → Draft → General → Select base objects after copying**.

## Scripting

## Betik

*Ayrıca bkz.:* [Taslak API](/Draft_API/tr "Draft API/tr") ve [FreeCAD Betik esasları](/FreeCAD_Scripting_Basics/tr "FreeCAD Scripting Basics/tr").

Döndür aracı, aşağıdaki işlevi kullanarak [makrolar](/Macros/tr "Macros/tr") ve python konsolundan kullanılabilir:

```
rotated_list = rotate(objectslist, angle, center=Vector(0,0,0), axis=Vector(0,0,1), copy=False)

```

* `objectlist` içindeki nesnelerin temel noktasını verilen `angle` ile döndürür.
  + `objectlist`, tek bir nesne veya bir nesne listesidir.
  + Bir dönme temel noktası (`center`) ve `axis` verilirse, bunlar kullanılır; Aksi taktirde rotasyon orijine ve Z ekseni etrafına dayanır. : Dönme açısı, nesnenin taban noktasına göredir, yani bir nesne 45 derece döndürülürse ve ardından bir başka 45 derece döndürülürse, orijinal konumundan toplam 90 derece döndürülür.
* `copy` ise `True` ise orijinal nesneleri döndürmek yerine kopyalar oluşturulur.
* `rotatedlist`, orijinal döndürülmüş nesnelerle veya yeni kopyalarla birlikte döndürülür.
  + `rotatedlist`, `objectlist` girişine bağlı olarak tek bir nesne veya nesne listesidir.

Örnek:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(3, radius=300)
Draft.move(polygon1, App.Vector(1000, 0, 0))

# Rotation around the origin
angle1 = 45
rot2 = Draft.rotate(polygon1, angle1, copy=True)
rot3 = Draft.rotate(polygon1, 2*angle1, copy=True)
rot4 = Draft.rotate(polygon1, 4*angle1, copy=True)

polygon2 = Draft.make_polygon(3, radius=1000)
polygon3 = Draft.make_polygon(5, radius=500)
Draft.move(polygon2, App.Vector(2000, 0, 0))
Draft.move(polygon3, App.Vector(2000, 0, 0))

# Rotation around another point
angle2 = 60
cen = App.Vector(3100, 0, 0)
list2 = [polygon2, polygon3]
rot_list2 = Draft.rotate(list2, angle2, center=cen, copy=True)
rot_list3 = Draft.rotate(list2, 2*angle2, center=cen, copy=True)
rot_list4 = Draft.rotate(list2, 4*angle2, center=cen, copy=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Rotate/tr&oldid=1473127>"