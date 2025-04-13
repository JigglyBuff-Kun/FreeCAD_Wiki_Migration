---
title: Parça Tasarım Tezgahı - Referans düzlemi oluştur
---
|  |
| --- |
| Referans düzlemi oluştur |
| Menü konumu |
| Parça tasarım → Referans düzlemi oluştur |
| Tezgahlar |
| [Parça tasarım](/PartDesign_Workbench/tr "PartDesign Workbench/tr") |
| Varsayılan kısayol |
| *Hiçbiri* |
| Versiyonda tanıtıldı |
| 0.17 |
| Ayrıca bkz |
| [Referans noktası oluştur](/PartDesign_Point "PartDesign Point"), [Referans çizgisi oluştur](/PartDesign_Line "PartDesign Line") |
|  |

## Tanım

Eskizler veya diğer referans geometri için referans olarak kullanılabilecek bir **referans düzlemi** oluşturur. Eskizler referans düzlemlerine eklenebilir.

![](/images/Datum_plane.png)

"Referans Düzlemi, XY Düzlemi olarak referans düzlemi kullanılarak çizilen bir Silindir ile Küpün 3 köşesini geçiyor."

## Nasıl kullanılır

A datum plane can only be created inside of a ![](/images/PartDesign_Body.svg) [Body](/PartDesign_Body "PartDesign Body"). Every body has an origin, which is hidden by default. To be able to refer to the origin base planes, make the the origin visible. You can do this before creating a datum plane.

1. ![](/images/PartDesign_Plane.png) **Referans düzlemi oluştur**'a basın.
2. Düzlem parametrelerini tanımlayın. Kullanılabilir ek modları filtrelemek için 3D görünümünde bir ilk referans seçin.
3. Seçilen referansa bağlı olarak, listede mevcut olan bir veya daha fazla ek mod olabilir. En muhtemel olanı otomatik olarak seçilir ve listede kalın harflerle gösterilir. Metin moduyla Ekli eki modu adıyla birlikte Parametreler panelin üst kısmında yeşil renkte görünür.
4. Ek bir referans eklemek için sonraki Referans düğmesine basın. Bir kez basıldığında, etiket bir seçim yapılıncaya kadar **Seçiliyor...** olarak değişir.
5. Listeden bir ek mod seçin.
6. Ek Ofset değerlerini tanımlayın.
7. Tamam'a basın.

## Seçenekler

Model ağacındaki Referans düzlemi etiketine çift tıklayın veya sağ tıklayın ve parametrelerini düzenlemek için bağlam menüsünde **Referans Düzenle** seçeneğini seçin . Ek mod ve Ek ofset hakkında daha fazla bilgi için[Ek](/Part_EditAttachment "Part EditAttachment") bkz.

## Özellikler

## Preferences

The default diffuse color and transparency of [PartDesign datums](/PartDesign_CompDatums "PartDesign CompDatums") is controlled by the **DefaultDatumColor** [fine-tuning parameter](/Fine-tuning#PartDesign_Workbench "Fine-tuning").

## Useful for

Datum planes have their uses:

* as arbitrary mirror plane,
* as support at a desired offset for multiple sketches,
* as support for a sketch that needs to be a specific offset/angle from the origin,
* as visible indicator (for example, a focal plane).

For support of a single sketch, they are basically redundant. They suffer from the [Topological naming problem](/Topological_naming_problem "Topological naming problem") as much as sketches.

* Veri**MapMode**:Kullanılan ek modu listeler.
* Veri**Attachment Offset**:Ataşman yerleşimine atıfta bulunan bir dönüştürme (çeviri ve döndürme) uygular.
* Veri**Label**: Nesneye verilen ad, bu ad uygun şekilde değiştirilebilir.

* Veri**MapMode**: lists the attachment mode used.
* Veri**Attachment Offset**: applies a transformation (translation and rotation) in reference to the attachment placement.
* Veri**Label**: name given to the object, this name can be changed at convenience.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Plane/tr&oldid=1542912>"