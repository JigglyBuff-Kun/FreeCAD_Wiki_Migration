---
title: Parça Tasarım Tezgahı
---

![](/images/Workbench_PartDesign.svg)

PartDesign workbench icon

## Introduction

## Giriş

Parça tasarım tezgahı karmaşık katı parçaları modelleme için gelişmiş araçlar sağlar. Genel amaç olarak, üretilebilecek parçaların modellenmesi ve bu parçaların birleştirilerek ürün elde edilmesi hedeflenir. Bununla birlikte, oluşturulan katılar genel olarak [Mimari tasarım](/Arch_Workbench/tr "Arch Workbench/tr") , [FE analizi](/FEM_Workbench/tr "FEM Workbench/tr") veya 3D baskı gibi herhangi bir başka amaç için kullanılabilir .

[Parça tezgahı](/Part_Workbench/tr "Part Workbench/tr"), [Yapısal katı geometri](https://en.wikipedia.org/wiki/Constructive_solid_geometry) (CSG) şekil oluşturma metodolojisi üzerine temellendiğinden, Part tasarım tezgahı, parametrik, özellik düzenleme metodolojisi kullanır; bu, temel bir katı, nihai şekil elde edilinceye kadar üstüne özellikler ekleyerek sırayla dönüştürülür. Bu işlemin daha ayrıntılı bir açıklaması için [özellik düzenleme](/Feature_editing/tr "Feature editing/tr") sayfasına bakın ve ardından katı madde oluşturma işlemine başlamak için [Parça tasarım tezgahı ile basit bir parça](/Creating_a_simple_part_with_PartDesign/tr "Creating a simple part with PartDesign/tr") oluşturma bölümüne bakın .

See the [feature editing](/Feature_editing "Feature editing") page for a more complete explanation of this process, and then see [Creating a simple component with PartDesign](/Creating_a_simple_part_with_PartDesign "Creating a simple part with PartDesign") to get started with creating solids.

The ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench") provides an alternative [constructive solid geometry](/Constructive_solid_geometry "Constructive solid geometry") (CSG) methodology for building shapes. For a detailed discussion of the Part Workbench versus the Part Design Workbench see [Part and Part Design](/Part_and_PartDesign "Part and PartDesign").

![](/images/PartDesign_Workbench_Example.jpg)

## Araçlar

Parça Tasarım tezgahının araçlarının tümü , Parça tasarım tezgahını yüklediğinizde görünen **Parça Tasarımı** menüsünde ve Parça tasarım araç çubuğunda bulunur.

### Parça Tasarım Yardım Araçları

- ![](/images/PartDesign_Body.png) [Cisim oluştur](/PartDesign_Body/tr "PartDesign Body/tr"): Aktif belge de yeni bir cisim oluşturur veya mevcut cismi etkinleştirir.

- ![](/images/PartDesign_NewSketch.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create Sketch:

- ![](/images/PartDesign_NewSketch.png) [Eskiz oluştur](/PartDesign_NewSketch/tr "PartDesign NewSketch/tr"): Seçilen bir yüzey ya da düzlem üzerinde yeni bir eskiz oluşturur. Bu araç yürütülürken yüz seçilmezse, kullanıcıdan, Görevler panelinden bir düzlem seçmesi istenir. Arayüz daha sonra eskiz düzenleme modunda [Eskiz tezgahına](/Sketcher_Workbench/tr "Sketcher Workbench/tr") geçer.

- ![](/images/Sketcher_MapSketch.png) [Eskizi yüze eşle](/Sketcher_MapSketch/tr "Sketcher MapSketch/tr"): Eskizleri önceden seçilen bir düzleme veya aktif cismin bir yüzüne eşler.

- ![](/images/Sketcher_EditSketch.png) [Eskizi düzenle](/Sketcher_EditSketch/tr "Sketcher EditSketch/tr"): Seçili eskizi düzenler.

- ![](/images/Sketcher_ValidateSketch.svg) [Validate sketch](/Sketcher_ValidateSketch "Sketcher ValidateSketch"): verifies the tolerance of different points and adjusts them.

- ![](/images/Part_CheckGeometry.svg) [Check geometry](/Part_CheckGeometry "Part CheckGeometry"): Checks the geometry of selected objects for errors.

- ![](/images/PartDesign_ShapeBinder.svg) [Create a shape binder](/PartDesign_ShapeBinder "PartDesign ShapeBinder"): creates a shape binder referencing geometry from a single parent object.

- ![](/images/PartDesign_SubShapeBinder.svg) [Create a sub-object(s) shape binder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder"): creates a shape binder referencing geometry from one or more parent objects.

- ![](/images/PartDesign_Clone.png) [Klon oluştur](/PartDesign_Clone/tr "PartDesign Clone/tr"): Seçilen cismin bir klonunu oluşturur.

- ![](/images/PartDesign_Plane.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create a datum (1.0 and below):

- ![](/images/PartDesign_Plane.png) [Referans düzlemi oluştur](/PartDesign_Plane/tr "PartDesign Plane/tr"): Etkin gövde de bir referans düzlemi oluşturur.

- ![](/images/PartDesign_Line.png) [Referans çizgisi oluştur](/PartDesign_Line/tr "PartDesign Line/tr"): Etkin gövde de bir referans çizgisi oluşturur.

- ![](/images/PartDesign_Point.png) [Referans noktası oluştur](/PartDesign_Point/tr "PartDesign Point/tr"): Etkin gövde de bir referans noktası oluşturur.

- ![](/images/PartDesign_CoordinateSystem.png) [Yerel bir koordinat sistemi oluştur](/index.php?title=PartDesign_CoordinateSystem/tr&action=edit&redlink=1 "PartDesign CoordinateSystem/tr (page does not exist)"):: aktif gövdede referans geometrisine bağlı yerel bir koordinat sistemi oluşturur.

: [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): these tools have been replaced by new [datum tools](/Std_Base#Part_Datums "Std Base").

### Parça Tasarım modelleme araçları

#### Ekleme araçları

Bunlar, temel özellikler oluşturmak veya mevcut bir katı gövdeye malzeme eklemek için kullanılan araçlardır.

- ![](/images/PartDesign_Pad.png) [Kalınlık ver](/PartDesign_Pad/tr "PartDesign Pad/tr"): Seçilen bir eskize kalınlık vererek bir katı oluşturur.

- ![](/images/PartDesign_Revolution.png) [Döndür](/PartDesign_Revolution/tr "PartDesign Revolution/tr"): Eskizi bir eksenin etrafında döndürerek bir katı oluşturur. Eskiz kapalı bir profil olmalıdır.

- ![](/images/PartDesign_AdditiveLoft.png) [Eskizlerle katı oluştur](/PartDesign_AdditiveLoft/tr "PartDesign AdditiveLoft/tr"): İki veya daha fazla eskiz arasında geçiş yaparak sağlam bir yapı oluşturur.

- ![](/images/PartDesign_AdditivePipe.png) [Eskizi süpürerek katı oluştur](/PartDesign_AdditivePipe/tr "PartDesign AdditivePipe/tr"): Açık veya kapalı bir yol boyunca bir veya daha fazla eskiz süpürerek bir katı oluşturur.

- ![](/images/PartDesign_AdditiveHelix.svg) [Additive helix](/PartDesign_AdditiveHelix "PartDesign AdditiveHelix"): creates a solid by sweeping a sketch along a helix.

- ![](/images/PartDesign_AdditiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create an additive primitive:

: \- ![](/images/PartDesign_AdditiveBox.png) [Kutu ekle](/PartDesign_AdditiveBox/tr "PartDesign AdditiveBox/tr"): Etkin gövdeye kutu ekler.

: \- ![](/images/PartDesign_AdditiveCylinder.png) [Silindir ekle](/PartDesign_AdditiveCylinder/tr "PartDesign AdditiveCylinder/tr"): Etkin gövdeye silindir ekler.

: \- ![](/images/PartDesign_AdditiveSphere.png) [Küre ekle](/PartDesign_AdditiveSphere/tr "PartDesign AdditiveSphere/tr"): Etkin gövdeye küre ekler.

: \- ![](/images/PartDesign_AdditiveCone.png) [Koni ekle](/PartDesign_AdditiveCone/tr "PartDesign AdditiveCone/tr"): Etkin gövdeye koni ekler.

: \- ![](/images/PartDesign_AdditiveEllipsoid.png) [Elipsoit ekle](/PartDesign_AdditiveEllipsoid/tr "PartDesign AdditiveEllipsoid/tr"): Etkin gövdeye elipsoit ekler.

: \- ![](/images/PartDesign_AdditiveTorus.png) [Halka ekle](/PartDesign_AdditiveTorus/tr "PartDesign AdditiveTorus/tr"): Halka ekler.

: \- ![](/images/PartDesign_AdditivePrism.png) [Prizma ekle](/PartDesign_AdditivePrism/tr "PartDesign AdditivePrism/tr"): Etkin gövdeye prizma ekler.

: \- ![](/images/PartDesign_AdditiveWedge.png) [Kama ekle](/PartDesign_AdditiveWedge/tr "PartDesign AdditiveWedge/tr"): Kama ekler.

#### Çıkarma araçları

Bunlar, mevcut bir gövdeden materyal çıkarmak için kullanılan araçlardır.

- ![](/images/PartDesign_Pocket.png) [Oyuk](/PartDesign_Pocket/tr "PartDesign Pocket/tr"): Seçilen eskize göre cismi oyar.

- ![](/images/PartDesign_Hole.png) [Delik](/PartDesign_Hole/tr "PartDesign Hole/tr"): Seçilen eskize göre cisim üzerinde delik açar. Eskiz, bir veya daha fazla daire içermelidir.

- ![](/images/PartDesign_Groove.png) [Oluk](/PartDesign_Groove/tr "PartDesign Groove/tr"): Bir eskizi bir eksen etrafında döndürerek bir oluk oluşturur.

- ![](/images/PartDesign_SubtractiveLoft.png) [Eskizlerle çıkar](/PartDesign_SubtractiveLoft/tr "PartDesign SubtractiveLoft/tr"):İki veya daha fazla eskiz arasında geçiş yaparak katı bir şekil oluşturur ve onu aktif gövdeden çıkarır.

- ![](/images/PartDesign_SubtractivePipe.png) [Eskizi süpürerek çıkar](/PartDesign_SubtractivePipe/tr "PartDesign SubtractivePipe/tr"): Açık veya kapalı bir yol boyunca bir veya daha fazla eskizi süpürerek katı bir şekil oluşturur ve onu aktif gövdeden çıkarır.

- ![](/images/PartDesign_SubtractiveHelix.svg) [Subtractive helix](/PartDesign_SubtractiveHelix "PartDesign SubtractiveHelix"): creates a solid shape by sweeping a sketch along a helix and subtracts it from the active body.

- ![](/images/PartDesign_SubtractiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create a subtractive primitive:

: \- ![](/images/PartDesign_SubtractiveBox.png) [Kutu çıkar](/PartDesign_SubtractiveBox/tr "PartDesign SubtractiveBox/tr"): Aktif gövdeye bir çıkarıcı kutu ekler.

: \- ![](/images/PartDesign_SubtractiveCylinder.png) [Silindir çıkar](/PartDesign_SubtractiveCylinder/tr "PartDesign SubtractiveCylinder/tr"):Aktif gövdeye bir çıkarıcı silindir ekler.

: \- ![](/images/PartDesign_SubtractiveSphere.png) [Küre çıkar](/PartDesign_SubtractiveSphere/tr "PartDesign SubtractiveSphere/tr"): Aktif gövdeye bir çıkarıcı küre ekler.

: \- ![](/images/PartDesign_SubtractiveCone.png) [Koni çıkar](/PartDesign_SubtractiveCone/tr "PartDesign SubtractiveCone/tr") Aktif gövdeye bir çıkarıcı koni ekler.

: \- ![](/images/PartDesign_SubtractiveEllipsoid.png) [Elipsoit çıkar](/PartDesign_SubtractiveEllipsoid/tr "PartDesign SubtractiveEllipsoid/tr"):Aktif gövdeye bir çıkarıcı elipsoit ekler.

: \- ![](/images/PartDesign_SubtractiveTorus.png) [Halka çıkar](/PartDesign_SubtractiveTorus/tr "PartDesign SubtractiveTorus/tr"): Aktif gövdeye bir çıkarıcı halka ekler.

: \- ![](/images/PartDesign_SubtractivePrism.png) [Prizma çıkar](/PartDesign_SubtractivePrism/tr "PartDesign SubtractivePrism/tr"):Aktif vücuda bir çıkarıcı prizma ekler.

: \- ![](/images/PartDesign_SubtractiveWedge.png) ‎[Kama çıkar](/PartDesign_SubtractiveWedge/tr "PartDesign SubtractiveWedge/tr"):Aktif gövdeye bir çıkarıcı kama ekler.

#### Boolean

- ![](/images/PartDesign_Boolean.png) [Boolean işlemi](/PartDesign_Boolean/tr "PartDesign Boolean/tr"):Aktif gövdeye bir veya daha fazla cisim veya Parça tasarım kopyası alır ve bir Boolean işlemi uygular.

#### Süsleme araçları

Bu araçlar seçilen kenarlara veya yüzlere bir işlem uygular.

- ![](/images/PartDesign_Fillet.png) [Yuvarla](/PartDesign_Fillet/tr "PartDesign Fillet/tr"): Aktif gövdenin kenarlarını yuvarlar.

- ![](/images/PartDesign_Chamfer.png) [Pah kır](/PartDesign_Chamfer/tr "PartDesign Chamfer/tr"): Aktif gövdenin kenarlarına pah kırar.

- ![](/images/PartDesign_Draft.png) [Taslak](/PartDesign_Draft/tr "PartDesign Draft/tr"): Aktif gövdenin seçilen yüzlerine taslak uygular.

- ![](/images/PartDesign_Thickness.png) [Kalınlık](/PartDesign_Thickness/tr "PartDesign Thickness/tr"):Aktif gövdeden kalın bir kabuk oluşturur ve seçilen yüzleri açar.

#### Dönüştürme araçları

Bunlar mevcut özellikleri dönüştürmek için kullanılan araçlardır. Hangi özellikleri dönüştüreceğinizi seçmenize izin vereceklerdir.

- ![](/images/PartDesign_Mirrored.png) [Yansıt](/PartDesign_Mirrored/tr "PartDesign Mirrored/tr"):Düzlem veya yüze bir veya daha fazla özellik yansıtır.

- ![](/images/PartDesign_LinearPattern.png) [Doğrusal şablon](/PartDesign_LinearPattern/tr "PartDesign LinearPattern/tr"): Bir veya daha fazla özelliğe dayalı doğrusal bir şablon oluşturur.

- ![](/images/PartDesign_PolarPattern.png) [Kutupsal şablon](/PartDesign_PolarPattern/tr "PartDesign PolarPattern/tr"):Bir veya daha fazla özellikten oluşan kutupsal bir şablon oluşturur.

- ![](/images/PartDesign_MultiTransform.png) [Çoklu dönüştürme](/PartDesign_MultiTransform/tr "PartDesign MultiTransform/tr"):Diğer dönüştürmelerin kombinasyonu ile bir şablon oluşturur.

#### Ekstralar

Parça Tasarım menüsünde bulunan bazı ek işlevler:

- ![](/images/PartDesign_Sprocket.svg) [Sprocket](/PartDesign_Sprocket "PartDesign Sprocket"): creates a sprocket profile that can be padded.

- ![](/images/PartDesign_InternalExternalGear.png) [İçten Dişli Çark](/PartDesign_InvoluteGear/tr "PartDesign InvoluteGear/tr"): Bir Pad tarafından kullanılabilecek bir içten dişli çark profili oluşturur.

- ![](/images/PartDesign_WizardShaft.png) [Mil tasarım sihirbazı](/PartDesign_WizardShaft/tr "PartDesign WizardShaft/tr"): Değer tablosundan bir mil oluşturur. Mil üzerindeki kuvvetleri ve momentleri analiz etmeyi sağlar. Mil, düzenlenebilir bir döner kroki ile yapılır.

### Bağlamsal menü araçları

- [Suppressed](/index.php?title=PartDesign_Suppressed&action=edit&redlink=1 "PartDesign Suppressed (page does not exist)"): checkbox to disable a specific feature without deleting it. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/PartDesign_MoveTip.svg) [Set tip](/PartDesign_MoveTip "PartDesign MoveTip"): redefines the tip, which is the feature exposed outside of the Body.

- ![](/images/PartDesign_MoveFeature.svg) [Move object to other body](/PartDesign_MoveFeature "PartDesign MoveFeature"): moves the selected sketch, datum geometry or feature to another Body.

- ![](/images/PartDesign_MoveFeatureInTree.svg) [Move object after other object](/PartDesign_MoveFeatureInTree "PartDesign MoveFeatureInTree"): allows reordering of the Body tree by moving the selected sketch, datum geometry or feature to another position in the list of features.

- ![](/images/PartDesign_MoveTip.png) [Uç Ayarla](/PartDesign_MoveTip/tr "PartDesign MoveTip/tr"): Gövde dışında açık kalmış uç kısmı yeniden tanımlar.

- ![](/images/Std_SetAppearance.svg) [Appearance](/Std_SetAppearance "Std SetAppearance"): determines appearance of the whole part (color transparency etc.).

- ![](/images/Part_ColorPerFace.svg) [Color per face](/Part_ColorPerFace "Part ColorPerFace"): Assigns colors to individual faces of objects.

### Obsolete tools

- ![](/images/PartDesign_Migrate.svg) [Migrate](/PartDesign_Migrate "PartDesign Migrate"): migrates files from FreeCAD versions below 0.17 to version 0.17. This tool is not available in 1.0 and above.

### Seçenekler

- ![](/images/Std_DlgParameter.png)[Seçenekler...](/PartDesign_Preferences/tr "PartDesign Preferences/tr"):Seçenekler, Parça tasarım araçlarından ulaşılabilir.

## Kılavuz

- [FreeCAD nasıl kullanılır(dili ingilizce)](http://help-freecad-jpg87.fr/), Mekanik tasarım hakkında içeriği zayıf bir site.
- [Parça tasarım sürüm 0.17 ile basit bir parça tasarımı](/Creating_a_simple_part_with_PartDesign/tr "Creating a simple part with PartDesign/tr")
- [Temel parça tasarım kılavuzu 017](/Basic_Part_Design_Tutorial_017/tr "Basic Part Design Tutorial 017/tr")
- [PartDesign Bearingholder Tutorial I](/PartDesign_Bearingholder_Tutorial_I/tr "PartDesign Bearingholder Tutorial I/tr") (Güncellenmesi gerekiyor)
- [PartDesign Bearingholder Tutorial II](/PartDesign_Bearingholder_Tutorial_II/tr "PartDesign Bearingholder Tutorial II/tr") (Güncellenmesi gerekiyor)

## Examples

For some ideas of what can be achieved with Part Design tools, have a look at: [PartDesign examples](/PartDesign_Examples "PartDesign Examples").

![](/images/PartDesign_ExampleSphere-02.png)
![](/images/PartDesign_ExampleTorus-01.png)
![](/images/PartDesign_ExamplePad-09.png)
![](/images/PartDesign_ExampleSweep-02.png)
![](/images/PartDesign_ExampleSweep-05.png)
![](/images/PartDesign_ExampleSpring-04.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Workbench/tr&oldid=1529316>"
