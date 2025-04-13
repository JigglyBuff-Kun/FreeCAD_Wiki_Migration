---
title: Taslak Taşı
---
|  |
| --- |
| Taşı |
| Menü konumu |
| Taslak → Taşı |
| Tezgahlar |
| [Taslak](/Draft_Workbench/tr "Draft Workbench/tr"), [Yapı](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| M V |
| Versiyonda tanıtıldı |
| 0.7 |
| Ayrıca bkz |
| [Dizi](/Draft_Array/tr "Draft Array/tr"), [Yol dizisi](/Draft_PathArray/tr "Draft PathArray/tr") |
|  |

## Tanım

Taşı aracı, seçilen nesneleri bir noktadan diğerine taşır veya kopyalar.

Taşı aracı, [Taslak tezgahı](/Draft_Workbench/tr "Draft Workbench/tr") veya [Eskiz tezgahı](/Sketcher_Workbench/tr "Sketcher Workbench/tr") ile oluşturulan 2D şekillerde kullanılabilir, ancak [Parça tezgahı](/Part_Workbench/tr "Part Workbench/tr") ve [Yapı tezgahı](/Arch_Workbench/tr "Arch Workbench/tr") ile oluşturulanlar gibi birçok 3D nesne üzerinde de kullanılabilir.

![](/images/Draft_Move_example.jpg)

Bir nesneyi bir noktadan diğer bir noktaya taşıma

## Nasıl kullanılır

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Taşımak veya kopyalamak istediğiniz nesneleri seçin.
2. ![](/images/Draft_Move.svg) Taşı düğmesine basın veya  M ardından  V tuşlarına basın. Hiçbir nesne seçilmezse, birini seçmeye davet edilirsiniz.
3. 3B görünümde bir ilk noktaya tıklayın veya bir koordinat yazın ve  ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basın. Bu işlemin temel noktası olarak görev yapar.
4. 3B görünümünde başka bir noktaya tıklayın veya bir koordinat yazın ve  ![](/images/Draft_AddPoint.svg) Nokta düğmesine basın. Bu, temel noktadaki yeni konumdur.

## Seçenekler

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Verilen eksendeki bir sonraki noktayı sınırlamak için bir noktadan sonra  X,  Y veya  Z tuşlarına basın.
* Koordinatları manuel olarak girmek için sayıları girin, ardından her bir X, Y ve Z bileşeni arasında  Enter tuşuna basın. Noktayı yerleştirmek istediğiniz değerleri aldığınızda  ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basabilirsiniz.
* **Göreceli**moduna geçmek için  R tuşuna basın veya onay kutusunu tıklayın. Göreceli mod açıksa, bir sonraki noktanın koordinatları sonuncusuna göre değişir; değilse, kesindir, kökenlerinden alınır (0,0,0).
* **Devam**moduna geçmek için  T tuşuna basın veya onay kutusunu tıklayın. Devam modu açıksa, işlemi tamamladıktan sonra Taşı aracı yeniden başlatılır ve böylece araç düğmesine tekrar basmadan nesneleri yeniden taşımanıza veya kopyalamanıza olanak tanır.
* **Kopyalama**moduna geçmek için  P tuşuna basın veya onay kutusunu tıklayın. Kopyalama modu açıksa, Taşıma aracı orijinal şekli yerinde tutacak ancak ikinci noktada bir kopya oluşturacaktır. : Sırayla birkaç kopya yerleştirmek için hem  T hem de  P kullanabilirsiniz. Bu durumda, kopyalanan öğe en son yerleştirilen kopyadır.
* Kopyalama moduna geçmek için ilk noktadan sonra  Alt tuşunu basılı tutun. İkinci noktaya tıkladıktan sonra  Alt tuşunun basılı tutulması kopya yerleştirmeye devam etmenizi sağlayacaktır; İşlemi bitirmek ve tüm kopyaları görmek için  Alt tuşunu bırakın.
* [snapping](/Draft_Snap/tr "Draft Snap/tr") noktanızı mesafeden bağımsız olarak,  [snapping](/Draft_Snap "Draft Snap") noktasını zorlamak için hareket ederken  Ctrl tuşunu basılı tutun.
* Bir sonraki noktanızı yatay veya dikey olarak sonuncuya göre  [constrain](/Draft_Constrain/tr "Draft Constrain/tr") konumuna getirirken  Shift tuşunu basılı tutun.
* Geçerli komutu iptal etmek için  Esc veya  Close tuşuna basınız; önceden yerleştirilmiş kopyalar kalacaktır.

## Notes

* An Object that is [attached](/Part_EditAttachment "Part EditAttachment") cannot be moved with the Draft Move command. To move it either its Veri**Support** object has to be moved, or its Veri**Attachment Offset** has to be changed.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* To change the initial focus of the task panel to the **Length** input box: **Edit → Preferences... → Draft → General → Set focus on Length instead of X coordinate**. Note that you must move the pointer in the [3D view](/3D_view "3D view") for the change to take effect.
* To reselect the base objects after copying objects: **Edit → Preferences... → Draft → General → Select base objects after copying**.

## Scripting

## Betik

*Ayrıca bkz.:* [Taslak API](/Draft_API/tr "Draft API/tr") ve [FreeCAD Betik esasları](/FreeCAD_Scripting_Basics/tr "FreeCAD Scripting Basics/tr").

Taşı aracı, aşağıdaki işlevi kullanarak [makrolar](/Macros/tr "Macros/tr") ve [Python](/Python/tr "Python/tr") konsolundan kullanılabilir:

```
moved_list = move(objectslist, vector, copy=False)

```

* `objectslist` içindeki nesnelerin temel noktasını  `vector` ile gösterilen yer değiştirme ve yönlere göre hareket ettirir.
  + `objectslist`, tek bir nesne veya bir nesne listesidir. : Yer değiştirme vektörü, nesnenin temel noktasına göredir, yani bir nesne 2 birim ve sonra başka bir 2 birim hareket ettirilirse, toplamda 4 birim orijinal konumundan hareket etmiş olur.
* `copy` ise  `True` ise orijinal nesneleri taşımak yerine kopyalar oluşturulur.
* `movedlist`, orijinal taşınan nesnelerle veya yeni kopyalarla birlikte döndürülür. \*\*  `movedlist`,  `objectslist` girişine bağlı olarak tek bir nesne veya nesne listesidir.

Örnek:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(5, radius=1000)
polygon2 = Draft.make_polygon(3, radius=500)
polygon3 = Draft.make_polygon(6, radius=220)

Draft.move(polygon1, App.Vector(500, 500, 0))
Draft.move(polygon1, App.Vector(500, 500, 0))
Draft.move(polygon2, App.Vector(1000, -1000, 0))
Draft.move(polygon3, App.Vector(-500, -500, 0))

list1 = [polygon1, polygon2, polygon3]

vector = App.Vector(-2000, -2000, 0)
list2 = Draft.move(list1, vector, copy=True)
list3 = Draft.move(list1, -2*vector, copy=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Move/tr&oldid=1473103>"