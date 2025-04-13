---
title: Parça Tasarım Taslak
---
|  |
| --- |
| Taslak |
| Menü konumu |
| Parça Tasarım → Taslak |
| Tezgahlar |
| [Parça tasarım](/PartDesign_Workbench/tr "PartDesign Workbench/tr") |
| Varsayılan kısayol |
| None |
| Versiyonda tanıtıldı |
| - |
| Ayrıca bkz |
| None |
|  |

## Description

### Tanım

|  |  |
| --- | --- |
| Select one or more faces of the object before starting the tool. Here, 2 faces have been selected.    Showing Draft Parameters in TaskPanel.    2 faces have been added, and a 10 deg. draft applied. The bottom plane has remained dimensionally stable, while the draft has made the top plane smaller.    The Neutral Plane has been changed to the top. Now, the top plane has stayed dimensionally stable, while the draft has made the bottom plane larger.    Pull direction is set to the lower right edge, resulting in the draft pulling to the left.    Checking the Reverse Direction box has applied an inward draft rather than outward. |  |

## Usage

### Add a draft

|  |  |
| --- | --- |
| Aracı çalıştırmadan önce nesnede bir veya daha fazla yüz seçin. Burada, 2 yüz seçildi.    TaskPanel'de Taslak Parametrelerini Gösterme.     2 yüzey ve 10 derece eklendi. taslak uygulandı. Alt düzlem boyutsal olarak sabit kalırken, taslak üst düzlemi daha küçük hale getirdi.    Neutral Plane Üst Yüzey olarak değiştirildi. Şimdi, üst düzlem boyutsal olarak sabit kalırken, taslak alt düzlemi daha büyük hale getirdi.    Çekme yönü sağ alt kenara ayarlanmış, taslakla sonuçlanmıştır sola doğru çekerek.    Ters Yön kutusunun işaretlenmesi dışarıdan ziyade içe doğru bir taslak uyguladı. | === Kullanım ===  * Bir nesnede bir veya daha fazla yüz seçin, ardından simgeyi tıklatarak veya menüye girerek aracı başlatın. * Görev Panosundaki Taslak Parametreleri'nde, gerekli parametreleri ve / veya seçenekleri aşağıda açıklandığı şekilde ayarlayın. * Doğrulamak için Tamam'ı tıklayın. * İşlev doğrulandıktan sonra taslağı düzenlemek için, Proje ağacındaki Taslak etiketine çift tıklayın veya sağ tıklayın ve **Taslağı Düzenle** seçeneğini seçin.  Parametreler ve Seçenekler= Yüz Ekle / Yüz Çıkar = Yüz Ekle veya Yüz Kaldır seçeneğine tıklayın, ardından yüzlerin listesini güncellemek için tek bir yüz seçin. Gerektiği kadar tekrarlayın. Taslak Açısı Bir değer girerek veya yukarı / aşağı oklarına tıklayarak Taslak Açısını ayarlayın. Uygulanan çekim açısı gerçek zamanlı olarak gösterilir.   ``` ==== Nötr Düzlem ====   ```   Nötr Düzlem'i tıklayın, sonra boyutsal olarak değişmemesi gereken düzlemi seçin. Değişim gerçek zamanlı olarak yapılır. Çekme Yönü Çekme Yönünü tıklayın, ardından bir kenar seçin. Çekme Yönü, yalnızca Nötr Düzlem ayarlanmışsa etkilidir. Sonuçlar tahmin edilemez olabilir.   ``` ==== Geri Çekme Yönünün Kontrolü ====   ```   Geri Çekme Yönünün Kontrolü, taslağı pozitif ve negatif açılar arasında değiştirir. Özel Durumlar Taslak aracı yalnızca birbirlerine normal olan yüzlerde çalışır. Taslak uygulamak istediğiniz yüze bağlı herhangi bir teğet yüz varsa, başarısız olur. Yaygın bir başarısızlık nedeni, zaten bir fileto veya pah uygulanmış yüze taslak uygulama girişiminde bulunmaktır. Bu durumda teğetsel yüzeyi çıkarın, taslağı gereken şekilde uygulayın, ardından tekrar fileto veya pahı uygulayın. |

:   *Remember*:

    * Since there must be at least one face for the feature, the last remaining face in the list cannot be removed.

### Edit a draft

1. Do one of the following:
   * Double-click the Draft object in the [Tree view](/Tree_view "Tree view").
   * Right-click the Draft object in the [Tree view](/Tree_view "Tree view") and select **Edit Draft** from the context menu.
2. The **Draft parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
3. Press the OK button to finish.

## Options

* **Add face**: Add faces to the selection by pressing the Add face button and selecting more faces.
* **Remove face**: Choose a way to remove faces from the selection:
  + Select one or more faces in the list and press the Del key or right-click the list and select **Remove** from the context menu.
  + Press the Remove face button. All previously selected faces are highlighted in purple. Select each face to be removed.
* **Draft angle**: Set the Draft angle either by entering a value or by clicking the up/down arrows.
* **Neutral plane**: Set the the neutral plane by pressing the Neutral plane button and selecting the plane that must not change dimensionally.
* **Pull direction**: Set the the pull direction by pressing the Pull direction button, then select an edge. Pull Direction is only effective if the Neutral Plane has been set. Results can be unpredictable.
* **Reverse pull direction**: Invert the pull direction by checking the **Reverse pull direction** checkbox. This will toggle the draft between positive and negative angles.

## Notes

* The Draft tool will only work on faces that are not tangentially connected to other faces. A common mistake is to attempt to apply draft to a face that already has a fillet applied to it. To solve this, remove the fillet, apply the draft as needed, then re-apply the fillet.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A PartDesign Draft object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* Veri**Angle** (`Angle`): Cannot be negative. Default: `1.5 °`.
* Veri**Reversed** (`Bool`): Default: `false`.
* Veri**Base** (`LinkSub`): Sub-link to the parent feature's list of selected edges and faces.
* Veri**Support Transform** (`Bool`): Include the base additive/subtractive shape when used in pattern features. If disabled, only the dressed part of the shape is used for patterning. Default: `false`.
* Veri (hidden)**Add Sub Shape** (`PartShape`)
* Veri (hidden)**Base Feature** (`Link`): Link to the parent feature.
* Veri (hidden)**\_ Body** (`LinkHidden`): Link to the parent body.

Draft

* Veri**Neutral Plane** (`LinkSub`): Sub-link to the parent feature's list containing the neutral plane.
* Veri**Pull Direction** (`LinkSub`)

Part Design

* Veri**Refine** (`Bool`): Refine shape (clean up redundant edges) after adding/subtracting. The default value is determined by the **Automatically refine model after sketch-based operation** preference. See [PartDesign Preferences](/PartDesign_Preferences#General "PartDesign Preferences").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Draft/tr&oldid=1335715>"