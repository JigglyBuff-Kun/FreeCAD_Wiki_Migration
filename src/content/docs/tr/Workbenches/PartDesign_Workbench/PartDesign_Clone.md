---
title: Parça Tasarım Tezgahı - Klon oluştur
---
|  |
| --- |
| Klon oluştur |
| Menü konumu |
| Parça tasarım → Klon oluştur |
| Tezgahlar |
| [Parça tasarım](/PartDesign_Workbench/tr "PartDesign Workbench/tr") |
| Varsayılan kısayol |
| *Hiçbiri* |
| Versiyonda tanıtıldı |
| 0.17 |
| Ayrıca bkz |
| [Taslak Klon](/Draft_Clone "Draft Clone") |
|  |

## Tanım

**Klon oluştur**,seçilen bir nesnenin bağlantılı bir kopyasını oluşturur. Katı olduğu sürece çoğu nesne türü kabul edilir. Klon oluştur'un ana kullanımı, bir [Boolean](/PartDesign_Boolean/tr "PartDesign Boolean/tr") özelliği için başka bir tezgahta oluşturulan nesneyi kullanmaktır. Ayrıca bağlantılı kopyalar oluşturmak için de kullanılabilir.

![Clone of the inner gear while being translated in 3D space as an independent object](/images/Clone.png)

Clone of the inner gear while being translated in 3D space as an independent object

## Nasıl Kullanılır

1. Model ağacında klonlanacak nesneyi seçin.
2. ![](/images/PartDesign_Clone.png) **Klon Oluştur** tuşuna basın.

## Özellikler

* Veri**Base Feature**: klonun dayandığı orijinal nesneyi ayarlar. ... basarak değiştirilebilir nesnelerin bir listesini görebilirsiniz.
* Veri**Placement**: 3D alanda Klonun yönünü ve konumunu tanımlar. [Yerleşim](/Placement "Placement") bkz.
* Veri**Label**: Klon nesnesinin etiketidir. Gerekirse değiştirebilirsiniz.

## Sınırlamalar

* **Klon oluştur** ile yalnızca tek bir nesne kullanılabilir.
* Sadece katı olan nesneler desteklenir. Bu nedenle, [Part container](/Std_Part "Std Part"), [Part Compound](/Part_MakeCompound "Part MakeCompound") veya [Draft Array](/Draft_Array "Draft Array") gibi [bileşikler](/Glossary#Compound "Glossary") desteklenmez.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Clone/tr&oldid=1424787>"