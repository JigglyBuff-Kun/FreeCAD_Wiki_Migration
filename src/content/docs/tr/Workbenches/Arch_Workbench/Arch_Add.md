---
title: Mimari Ekle
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Mimari Ekle |
| Menü konumu |
| Mimari → Ekle |
| Tezgahlar |
| [Mimari](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| *Hiçbiri* |
| Versiyonda tanıtıldı |
| - |
| Ayrıca bkz |
| [Mimari Kaldır](/Arch_Remove/tr "Arch Remove/tr") |
|  |

## Açıklama

Ekle aracı 4 tür işlem yapmanıza olanak sağlar:

* [Parça Şekil](/Part_Workbench/tr "Part Workbench/tr") tabanlı nesneler [Duvar](/Arch_Wall/tr "Arch Wall/tr") veya [Yapı](/Arch_Structure/tr "Arch Structure/tr") gibi bir Mimari bileşen ekleyin. Bu nesneler daha sonra Mimari bileşenin bir parçasını oluşturur ve şeklini değiştirmenize izin verir ancak genişlik ve yükseklik gibi temel özelliklerini korur
* [Kat](/Arch_Floor/tr "Arch Floor/tr") gibi bir grup tabanlı Mimari nesneye  [Duvar](/Arch_Wall/tr "Arch Wall/tr") veya  [Yapı](/Arch_Structure/tr "Arch Structure/tr") gibi Mimari bileşenleri ekleyin
* [Mimari Eksen](/Arch_Axis/tr "Arch Axis/tr") 'ni [Yapısal nesneler](/Arch_Structure/tr "Arch Structure/tr")' e ekleyin
* Nesneleri [Kesit Düzlemi](/Arch_SectionPlane/tr "Arch SectionPlane/tr") 'ne ekleyin.

Bu aracın karşılığı [Mimari Kaldır](/Arch_Remove/tr "Arch Remove/tr") aracıdır.

![](/images/Arch_Add_example.jpg)

Bir duvara bileşen olarak eklenen bir kutu.

## Nasıl kullanılır

1. Önce eklenecek nesneleri , ardından "Temel bileşen" nesnesini (Temel bileşen nesnesinin seçtiğiniz son öğe olması gerekir) seçin
2. ![](/images/Arch_Add.png)  **Ekle**  düğmesine basın

## Scripting

## Betik

*Ayrıca bkz.:* [Taslak API](/Arch_API/tr "Arch API/tr") ve [FreeCAD Betik esasları](/FreeCAD_Scripting_Basics/tr "FreeCAD Scripting Basics/tr").

Ekle aracı, aşağıdaki işlevi kullanarak [makrolar](/Macros/tr "Macros/tr") ve [Python](/Python/tr "Python/tr") konsolundan kullanılabilir:

:   ```
    addComponents(objectsList, host)

    ```

* `objectsList` içindeki belirli nesneleri verilen  `host` nesnesine ekler.
  + `objectsList` tek bir nesne veya bir nesne listesi olabilir.

Örnek:

```
import FreeCAD, Arch, Draft, Part

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 2000, 0)

Line = Draft.makeWire([p1, p2])
Wall = Arch.makeWall(Line, width=150, height=2000)

p3 = FreeCAD.Vector(0, 2000, 0)
p4 = FreeCAD.Vector(3000, 0, 0)

Line2 = Draft.makeWire([p3, p4])
Wall2 = Arch.makeWall(Line2, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Arch.addComponents(Wall2, Wall)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Add/tr&oldid=1432727>"