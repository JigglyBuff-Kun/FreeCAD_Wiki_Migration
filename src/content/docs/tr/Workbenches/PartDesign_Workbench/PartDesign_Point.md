---
title: Parça Tasarım Tezgahı - Referans Noktası Oluştur
---
|  |
| --- |
| Referans noktası oluştur |
| Menü konumu |
| Parça tasarım→ Referans noktası oluştur |
| Tezgahlar |
| [Parça tasarım](/PartDesign_Workbench/tr "PartDesign Workbench/tr") |
| Varsayılan kısayol |
| *Hiçbiri* |
| Versiyonda tanıtıldı |
| 0.17 |
| Ayrıca bkz |
| [Referans çizgisi oluştur](/PartDesign_Line/tr "PartDesign Line/tr"), [Referans düzlemi oluştur](/PartDesign_Plane/tr "PartDesign Plane/tr") |
|  |

## Tanım

Eskizler veya diğer referans geometri için referans olarak kullanılabilecek bir **referans noktası** oluşturur.

![](/images/DatumPoint.png)

Z = 2'de ek konumu olan bir küreye tutturulmuş bir referans noktası

## Nasıl kullanılır

1. ![](/images/PartDesign_Point.png) **Referans noktası oluştur** tuşuna basın.
2. Nokta parametrelerini tanımlayın. Kullanılabilir ek modları filtrelemek için 3D görünümünde bir ilk referans seçin.
3. Seçilen referansa bağlı olarak, listede mevcut olan bir veya daha fazla ek mod olabilir. En muhtemel olanı otomatik olarak seçilir ve listede kalın harflerle gösterilir. Metin moduyla Ekli ek modu adıyla birlikte Parametreler panelin üst kısmında yeşil renkte görünür.
4. Ek bir referans eklemek için sonraki Referans düğmesine basın . Bir kez basıldığında, etiket bir seçim yapılıncaya kadar Seçiliyor ... olarak değişir.
5. Listeden bir ek modu seçin.
6. Ek Ofset değerlerini tanımlayın.
7. Tamam a basın.

## Seçenekler

Model ağacında Referans noktası etiketine çift tıklayın veya sağ tıklayın ve parametrelerini düzenlemek için bağlam menüsünde **Referans Düzenle** seçeneğini seçin. Ek mod ve Ek ofset hakkında daha fazla bilgi için [Ek](/index.php?title=Part_EditAttachment/tr&action=edit&redlink=1 "Part EditAttachment/tr (page does not exist)") bkz.

## Preferences

See [PartDesign Plane](/PartDesign_Plane#Preferences "PartDesign Plane").

## Özellikler

* Veri**MapMode**:Kullanılan ek modunu listeler.
* Veri**Attachment Offset**: Ataşman yerleşimine atıfta bulunan bir dönüştürme (çeviri ve döndürme) uygular.
* Veri**Label**: Nesneye verilen ad, bu ad uygun şekilde değiştirilebilir.

## Sınırlamalar

* Referans noktası, Pipe ve Loft özellikleri için bölüm olarak kullanılamaz.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Point/tr&oldid=1460159>"