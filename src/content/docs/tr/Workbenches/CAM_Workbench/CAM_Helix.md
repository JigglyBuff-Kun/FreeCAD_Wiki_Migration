---
title: CNC G-Kodu Helezon
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| CNC G-Kodu Helezon |
| Menü konumu |
| CNC G-Kodu → Helezon |
| Tezgahlar |
| [CNC G-Kodu](/Path_Workbench/tr "Path Workbench/tr") |
| Varsayılan kısayol |
| *Hiçbiri* |
| Versiyonda tanıtıldı |
| - |
| Ayrıca bkz |
| *Hiçbiri* |
|  |

## Açıklama

Helezon komutu, İş'e bir sarmal enterpolasyon İşlemi ekler. Saat yönünde Helezon enterpolasyon çıkışı (G2) G Kodu komutları. Saat yönünün tersine çıkış (G3) G Kodu komutları. Aşama Yüzdesi, eşmerkezli geçişi, Alet çapının yüzdesi olarak belirtir.

## Kullanımı

* CNC G-Kodu-> menüsünden veya GUI Düğmesinden Helezon aracını seçin ve tuşuna basın.
* Açılır seçim iletişim penceresinden bir Takım denetleyicisi seçin ve OK tuşuna basarak onaylayın.
* İş Modelinde mevcut olan tüm delikler, Temel Geometri sekmesinde listelenen işlemler için uygun olacaktır. Listenin işleme yönelik deliklerle eşleştiğini doğrulayın ve gerekirse ekleme, etkinleştirme veya devre dışı bırakma ayarlarını yapın. Deliklerin duvar yüzlerini seçerek delikler eklenebilir.
* Derinliklerin, Son Derinliklerin doğru olduğundan emin olun ve değilse düzeltin.
* Yüksekliklerin, Güvenli ve Boşluk Yüksekliklerinin doğru olduğundan emin olun ve değilse ayarlayın.
* İşlem sekmesinde, Başlangıç Noktası, Yön ve Adım Üstü yüzdesini belirtin.

## Options

**Extra Offset** adds a margin of material to be left unmachined. This is typically to allow a light finishing pass as a separate operation.

**Start Radius** is not available in the *Helix* task panel but can be edited directly in the [Property editor](/Property_editor "Property editor").

This is the radius of material remaining at the center. By default it is zero, giving a path where the tool just touches the axis of the hole. This produces a central path cutting a hole twice the size of the tool diameter.

If this parameter is set to a negative value, it can allow a smaller helix radius. For example, a negative radius equal to the tool radius will produce a zero radius helix: a.k.a. plunge cut with the endmill, should the tool be suitable. This will work as a first cut in a multi-pass operation but attempting to make a helix path with a tool the same size as the hole in the model is rejected.

## Comments

* Step Down is not respected exactly. It is always rounded to give a complete number of turns from Start Depth to Final Depth.
* Similarly Step Over is not respected exactly. It is always rounded to give a number of equal steps.

The feedrate parameter is constant across all cuts and is based on the position of the tool's axis, thus actual feedrate of the cutting edge of the tool can vary considerably between the inner most cut and the outside surface. If the job dimensions produce a path diameter smaller than the tool diameter, this can lead to much faster cutting speeds than the feedrate given for the tool in the tool controller. This may need to considered when selecting "feed and speeds" in the [tool controller](/CAM_ToolController "CAM ToolController") for the job.

Also the current implementation only uses the horizontal tool speed for helix paths, even in the case where a tight spiral maybe nearly a vertical cut.

## Properties

### Data

Empty

### View

Empty

## Scripting

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Example:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Helix/tr&oldid=1559208>"