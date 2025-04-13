---
title: Parça Tasarım Tezgahı - Eskiz Oluştur
---
|  |
| --- |
| Eskiz oluştur |
| Menü konumu |
| PartDesign → Eskiz oluştur |
| Tezgahlar |
| [PartDesign](/PartDesign_Workbench/tr "PartDesign Workbench/tr") |
| Varsayılan kısayol |
| *Hiçbiri* |
| Versiyonda tanıtıldı |
| 0.17 |
| Ayrıca bkz |
| *Hiçbiri* |
|  |

## Tanım

Bu araç yeni bir eskiz oluşturur, mevcut değilse taslak içeren yeni bir [Cisim oluşturur](/PartDesign_Body/tr "PartDesign Body/tr") ve oluşturulduktan sonra [Eskiz tezgahını](/Sketcher_Workbench/tr "Sketcher Workbench/tr") otomatik olarak açar.

[Parça tasarım tezgahını](/PartDesign_Workbench/tr "PartDesign Workbench/tr") kullanarak modeller oluştururken , bu araç Eskiz tezgahında bulunan [Eskiz Oluştur](/Sketcher_NewSketch/tr "Sketcher NewSketch/tr") aracına tercih edilmelidir .

## Nasıl kullanılır

1. Parça tasarım araç çubuğunda ![](/images/PartDesign_NewSketch.png) tuşuna basınız.
2. Görevler panelinde, **Özellik seç** diyalogu açılır. Listede veya daha iyi görünürlük için yeniden yönlendirilebilecek 3D görünümündeki düzlemlerden birini seçin.
3. Tamam tuşuna basın.
4. Arayüz otomatik olarak Eskiz tezgahına geçer ve eskiz düzenlenebilir. Eskizden çıktıktan sonra, arayüz Parça tasarım tezgahına geri getirilir ve eskizden önce 3D görünüm durumuna geri yüklenir.
5. Alternatif olarak, eskiz oluşturulmadan önce mevcut aktif yapı üzerindeki bir düzlem veya yüz seçilebilir, bu durumda eskiz anında oluşturulur.

## Seçenekler

* Mevcut bir eskiz ekini değiştirmek için *Harita Modu* özelliğini değiştirin.( [Özellikler](#Properties) bkz.)

* The *Select feature* Dialog defines the features of the new sketch

:   :   ![](/images/PartDesign.CreateSketch.SelectFeatureDialog.jpeg)
    :   *Select feature* dialog. These settings create a sketch on the XY plane and allow cross-references from other items of the same body

Dialog settings

* Coordinate system box: defines the orientation of the sketch plane
* Allow Used Features: *TBD*

:   Allow external features options

* From other bodies of the same part: any elements used in the same body can be referenced
* From different parts or free features: *TBD*
* Make independent copy: all other elements will be separate copies, i.e. they will not change when the original changes.
* Make dependent copy: the elements will be copies, but a dependency to the original elements is kept. This is basically using a [Shapebinder](/PartDesign_ShapeBinder "PartDesign ShapeBinder")
* Create cross-reference: the linked elements will not be copies, but point to the original elements, e.g. a master sketch. Any changes are reflected to this sketch

To reference any items in the [Workbench Sketcher](/Sketcher_Workbench "Sketcher Workbench") use the ![](/images/Sketcher_External.svg) [External Geometry](/Sketcher_External "Sketcher External") and ![](/images/Sketcher_CarbonCopy.svg) [CarbonCopy](/Sketcher_CarbonCopy "Sketcher CarbonCopy") tools. Generally it is recommended to use other sketches as source for references rather than faces or edges, because they are less affected by the Topological Naming Issue.

## Özellikler

* Veri**Map Mode**:Eskizin başka bir nesneye, genellikle bir düzlem veya yüze eklenme şekli, ancak başka tür nesneler olabilir. Bir ... düğmesini görmek için alana bir kez tıklayın ve [Ek](/Part_EditAttachment "Part EditAttachment") iletişim kutusunu açmak için basın. Devre dışı bırakıldıysa, Yerleşim özelliği etkindir.
* Veri**Placement**: Çizimin 3D alanda yönünü kontrol eder; [yerleşime](/index.php?title=Std_Placement/tr&action=edit&redlink=1 "Std Placement/tr (page does not exist)") bakınız. Eskiz Harita Modu özelliği üzerinden eklenmişse devre dışı bırakılır.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_NewSketch/tr&oldid=1458290>"