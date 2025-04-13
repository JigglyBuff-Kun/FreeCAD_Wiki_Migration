---
title: Taslak Yay
---
|  |
| --- |
| Yay |
| Menü konumu |
| Taslak → Yay |
| Tezgahlar |
| [Taslak](/Draft_Workbench/tr "Draft Workbench/tr"), [Mimari](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| A R |
| Versiyonda tanıtıldı |
| 0.17 |
| Ayrıca bkz |
| [Çember](/Draft_Circle/tr "Draft Circle/tr"),[Elips](/Draft_Ellipse/tr "Draft Ellipse/tr") |
|  |

## Açıklama

Yay aracı, geçerli [Çalışma düzlemi](/Draft_SelectPlane/tr "Draft SelectPlane/tr") içinde dört nokta, merkez, yarıçap, ilk nokta ve son nokta girerek ya da teğetleri toplayarak ya da bunların herhangi bir bileşimini girerek bir yay oluşturur. Görevler sekmesinde önceden ayarlanmış olan [Çizgi stili](/Draft_Linestyle/tr "Draft Linestyle/tr") alır. Bu araç, [Çember](/Draft_Circle/tr "Draft Circle/tr") aracıyla aynı şekilde çalışır, ancak başlangıç ve bitiş açılarını ekler.

A Draft Arc is in fact a [Draft Circle](/Draft_Circle "Draft Circle") with a Veri**First Angle** that is not the same as its Veri**Last Angle**.

![](/images/Draft_Arc_example.jpg)

Yay; merkez, yarıçap, ​​yay başlangıç noktası ve yay son noktasıolarak dört noktada tanımlanır.

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Nasıl kullanılır

1. ![](/images/Draft_Arc.png) Yay düğmesine basınız veya A ve R tuşlarına basınız.
2. 3D görünümünde bir ilk noktaya tıklayın veya bir Koordinat yazın ve ![](/images/Draft_AddPoint.svg) add point basın
3. 3D görünümünde ikinci bir noktaya tıklayın veya bir yarıçap değeri girin
4. 3D görünümünde üçüncü bir noktaya tıklayın veya bir başlangıç açısı girin
5. 3D Görünümünde dördüncü bir noktaya tıklayın veya bitiş sonunu girin

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

## Seçenekler

* Yay aracının birincil kullanımı dört nokta seçmektir: merkez, çevre üzerinde bir nokta, yayın başlangıcı ve bitişi.
  + Alt tuşuna basarak arkın temel çemberini tanımlamak için toplama noktası yerine bir teğet seçebilirsiniz. Bu nedenle, bir, iki veya üç teğet seçerek birkaç daire tipi oluşturabilirsiniz.
* Yay yönü, farenizle yaptığınız harekete bağlıdır. Üçüncü nokta girildikten sonra saat yönünde hareket etmeye başlarsanız, yayınız saat yönünde gider. Saat yönünün tersine gitmek için, farenizi yay diğer yöne çekmeye başlayana kadar üçüncü noktanın üzerine getirin.
* Koordinatları manuel olarak girmek için sayıları girin, ardından her bir X, Y ve Z bileşeni arasında Enter tuşuna basın. Noktayı yerleştirmek istediğiniz değerleri aldığınızda ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basabilirsiniz.
* *Devam* moduna geçmek için T tuşuna basın veya onay kutusunu tıklayın. Devam modu açıksa, yay aracı, yayı bitirdikten sonra yeniden başlatılır ve takım düğmesine tekrar basmadan bir tane daha çizmenize olanak sağlar.
* [snapping](/Draft_Snap/tr "Draft Snap/tr") noktanızı mesafeden bağımsız olarak, en yakın çeki konumuna yönlendirmek için çizim yaparken Ctrl tuşunu basılı tutun.
* Ortaya göre noktanızı yatay veya dikey olarak [constrain](/Draft_Constrain/fr "Draft Constrain/fr") öğesine çizerken Shift tuşunu basılı tutun.
* Geçerli komutu iptal etmek için Esc veya Kapat düğmesine basınız.

## Notes

Ağaç görünümündeki öğeye çift tıklayarak veya ![](/images/Draft_Edit.svg) [Düzenle](/Draft_Edit/tr "Draft Edit/tr") düğmesine basılarak ark düzenlenebilir. Ardından merkez noktasını yeni bir konuma taşıyabilirsiniz.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Circle](/Part_Circle "Part Circle") instead of a Draft Circle.

## Properties

## Özellikleri

Bir yay nesnesi [Çember](/Draft_Circle/tr "Draft Circle/tr") 'in tüm özelliklerini paylaşır, ancak bazı özellikler sadece çember için geçerlidir.

## Scripting

## Betik

*Ayrıca bkz.:* [Taslak API](/Draft_API/tr "Draft API/tr") ve [FreeCAD Betik esasları](/FreeCAD_Scripting_Basics/tr "FreeCAD Scripting Basics/tr").

Yay aracı, [makrolar](/Macros/tr "Macros/tr") ve [Python](/Python/tr "Python/tr") konsolundan ek argümanlarla çember oluşturmak için aynı işlevle kullanılabilir.
İçindeki bilgilere bakın [Daire](/Draft_Circle/tr "Draft Circle/tr").

Örnek:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

arc1 = Draft.make_circle(200, startangle=0, endangle=90)
arc2 = Draft.make_circle(500, startangle=20, endangle=160)
arc3 = Draft.make_circle(750, startangle=-30, endangle=-150)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Arc/tr&oldid=1472897>"