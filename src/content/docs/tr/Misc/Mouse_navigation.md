---
title: Fare ile 3D gezinme
---
## Overview

FreeCAD fare ile modelleme , 3D alanda görsel olarak gezinmek ve görüntülenen nesnelerle etkileşimde bulunmak için kullanılan komutlardan oluşur. FreeCAD, çoklu fare modeli gezinme stillerini destekler. Varsayılan gezinme stiline "CAD Gezinme" denir ve çok basit ve pratiktir, ancak FreeCAD ayrıca tercihlerinize göre seçebileceğiniz alternatif gezinme stilleri de sunar.

For more information about selecting objects see [Selection methods](/Selection_methods "Selection methods").

For more information about manipulating objects see [Std TransformManip](/Std_TransformManip "Std TransformManip").

## Selecting a navigation style

* [Seçenekler penceresi](/Preferences_Editor "Preferences Editor") içinde 3D Görünüm → 3D Navigasyon → Ekran → Düzen → Tercihler .
* 3D görünümünde boş alana sağ tıklayarak, ardından bağlam menüsünde "Gezinme stili" seçeneğini seçerek.

## Available navigation styles

With all navigation styles, unless selecting objects from a sketch in edit mode, you must hold Ctrl to select multiple objects.

The following keyboard options are available for all styles:

* Ctrl + ![](/images/Ascii_043.svg) and Ctrl + ![](/images/Ascii_022.svg) or PgUp and PgDn to zoom in and out, respectively.
* The arrow keys, ![](/images/Ascii_017.svg)![](/images/Ascii_016.svg)![](/images/Ascii_030.svg)![](/images/Ascii_031.svg), to pan the view left/right and up/down.
* Shift + ![](/images/Ascii_017.svg) and Shift + ![](/images/Ascii_016.svg) to rotate the view by 90 degrees.

### Blender Gezinme

The Blender navigation style was modeled after [Blender](https://www.blender.org).

Blender Gezinme [Blender](http://www.blender.org)'dan sonra eklendi. Daha önce tek başına fareyle taşıma yapılamıyordu,taşıma içinSHIFT tuşu kullanılıyordu. 2016'da bu özellik yenilendi. Hem fare sağ tuşu hem de fare sol tuşu birlikte basılı tutularak taşıma yapılabilir.

| Seçme | Taşıma | Zumlama | Döndürme |
| --- | --- | --- | --- |
|  |  |  |  |
| [Seçme](/File:Select-mouse.svg "Seçme") | shift+[Taşıma](/File:Pan-mouse.svg "Taşıma") veya | [Yakınlaştırma/Uzaklaştırma](/File:Zoom-mouse.svg "Yakınlaştırma/Uzaklaştırma") | [Döndürme](/File:Pan-mouse.svg "Döndürme") |
| Seçmek istediğiniz nesnenin üzerinde farenin sol tuşuna basın. | shift tuşu ile fare orta tuşunu birlikte basılı tutun ve nesneyi taşıyın. Alternatif olarak, hem sol hem de sağ fare düğmelerini basılı tutun ve ardından imleci hareket ettirin. | Yakınlaştır/Uzaklaştır için fare tekerleğini kullanın. | Fare orta tuşunu basılı tutun ve nesneyi döndürün. |

|Shift=Shift

|Select\_text=Press the left mouse button over an object you want to select.

|Zoom\_text=Use the mouse wheel to zoom in and out.

|Rotate\_view\_text=Hold the middle mouse button, then move the pointer.

|Pan\_text=Hold Shift and the middle mouse button, then move the pointer.

Alternatively, hold both left and right mouse buttons, and then move the pointer.
}}

### CAD navigation

### CAD Gezinme (varsayılan)

Bu, varsayılan gezinme stilidir. Kullanıcıya görünümün basit bir kontrolünü sağlar ve çoklu seçim yapmak dışında klavye tuşlarının kullanılmasını gerektirmez.

| Seçme | Taşıma | Zumlama | Görünümü döndürme Birinci yöntem | Görünümü döndürme Alternatif yöntem |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
| [Seçmek için](/File:Select-mouse.svg "Seçmek için") | [Taşımak için](/File:Pan-mouse.svg "Taşımak için") | [Zumlamak için + veya -](/File:Zoom-mouse.svg "Zumlamak için + veya -") | [Döndürmek için](/File:Rotate-mouse.svg "Döndürmek için") | [Döndürmek için alternatif](/File:Rotate-mouse-MMB%2BRMB.svg "Döndürmek için alternatif") |
| Seçmek istediğiniz nesne üzerinde sol fare tuşuna basın.Ctrl tuşunu basılı tutmak birden fazla nesnenin seçimini sağlar. | Fare orta tuşunu basılı tutun ve fareyi hareket ettirin. | Nesneyi büyütmek/küçültmek için fare tekerleğini kullanın.Fare orta tuşuna tıklamak, nesneyi imlecin bulunduğu konuma getirir. | Fare orta tuşunu basılı tutun, fare sol tuşuna basın ve tutun, fareyi hareket ettirin. Orta fare düğmesine basıldığında imleç konumu, dönme merkezini belirler. Dönme, merkezinin etrafında dönen bir topun dönmesi gibi çalışır. Tuşlar, fare hareketini durdurmadan önce serbest bırakılırsa, görünüm [dönmeye](/Spinning/tr "Spinning/tr") devam eder. Farenin orta düğmesiyle çift tıklandığında yeni bir dönüş merkezi belirlenir. | Fare orta tuşunu basılı tutun, sonra fare sağ tuşunu basılı tutun, fareyi hareket ettirin. Bu yöntemle farenin sağ tuşu basılı tutulduktan sonra, orta fare tuşu serbest bırakılabilir.  Fareyi sağ elleriyle kullanan kullanıcılar, bu yöntemi ilk yöntemden daha kolay bulabilirler. |
|  | [Taşıma için](/File:Pan-mouse-CTRL.svg "Taşıma için") | [Zumlama için](/File:Zoom-mouse-CTRL-SHIFT.svg "Zumlama için") | [Döndürme için](/File:Rotate-mouse-SHIFT.svg "Döndürme için") |  |
|  | Ctrl tuşunu basılı tutun, fare sağ tuşunu tıklayın, fareyi hareket ettirin. [0.17 sürümünde kullanılabilir](/Release_notes_0.17/tr "Release notes 0.17/tr") | Ctrl ve Shift tuşlarını basılı tutun, fare sağ tuşuna tıklayın, fareyi hareket ettirin. [0.17 sürümünde kullanılabilir](/Release_notes_0.17/tr "Release notes 0.17/tr") | Döndürme Yöntemi:Shift tuşunu basılı tutun, fare sağ tuşunu tıklayın, fareyi hareket ettirin. [0.17 sürümünde kullanılabilir](/Release_notes_0.17/tr "Release notes 0.17/tr") |  |

---

| Select | Zoom | Rotate view First method | Rotate view Alternate method | Pan |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Clicking the middle mouse button re-centers the view on the location of the cursor. | Hold the middle mouse button, then press and hold the left mouse button, then move the pointer. If the buttons are released before you stop the mouse motion, the view continues spinning, if this is enabled. | Hold the middle mouse button, then press and hold the right mouse button, then move the pointer. With this method the middle mouse button may be released after the right mouse button is held pressed.  Users who use the mouse with their right hand may find this method easier than the first method. | Hold the middle mouse button, then move the pointer. |
|  | Ctrl+Shift+ | Shift+ |  | Ctrl+ |
|  | Zoom mode: hold the Ctrl and Shift keys, press the right mouse button once, then move the pointer. | Rotate mode: hold the Shift key, press the right mouse button once, then move the pointer. |  | Pan mode: hold the Ctrl key, press the right mouse button once, then move the pointer. |

### Gesture Gezinme (v0.16)

This style was tailored for use with a touchscreen and pen. Nevertheless, it can also be used with a mouse, and is recommended for use when using a Mac with a trackpad.

Bu gezinme stili dokunmatik ekran ve kalemle kullanım için uyarlandı, ancak dokunmatik fare için de kullanılabilir.

| Seçme | Taşıma | Zumlama | Döndürme | Eğme |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
| [Seçme](/File:Select-mouse.svg "Seçme") | [Taşıma](/File:Pan-mouse-Ctrl.svg "Taşıma") | [Zumlama](/File:Zoom-mouse.svg "Zumlama") | [Döndürme](/File:Select-mouse.svg "Döndürme") | [Eğme](/File:Mouse_LMB%2BRMB.svg "Eğme") |
| Seçmek istediğiniz nesnenin üzerinde farenin sol tuşuna basın.Ctrl tuşunu basılı tutmak birden fazla nesnenin seçimini sağlar. | Görünümü taşımak için farenin sağ düğmesine basın ve sürükleyin. | Yakınlaştırma/Uzaklaştırma için Fare tekerleğini kullanın. | Sol fare düğmesine basın ve görünümü döndürmek için sürükleyin. Eskiz ve diğer düzenleme modlarında bu davranış devre dışı bırakılır. Fare tuşu basılıyken Alt tuşuna basılı tutarsanız nesneyi döndürebilirsiniz.  Dönme, kameranın odak noktasının etrafındadır. Kameranın odak noktasını ayarlamak için, farenin orta tuşuyla yeni noktaya tıklayın; manzara bu noktada ortalanacak. Ayrıca fare işaretçisini istenen noktaya getirebilir ve klavyedeki H tuşuna basabilirsiniz . | Hem sol hem de sağ fare düğmelerine basın, sonra görünümü yatırmak için sola veya sağa kaydırın (ufku ayarlayın). |
|  | veya |  |  |  |
| Seçmek için dokunun. | Görünümü taşımak için iki parmağınızla sürükleyin veya dokunup basılı tutun, sonra kaydırın (sağ fare tuşuyla kaydırmayı simüle eder). | Yakınlaştırma/Uzaklaştırma için parmakları sıkıştırın (yani iki parmağınızı birbirine doğru kaydırın veya birbirinden uzağa kaydırın). | Döndürmek için parmağınızı kaydırın. Ek olarak, Eskiz'in taslak düzenleme modunda ve diğer düzenleme modlarında Alt tuşuna basın. | Görünümü yatırmak için döndürün (yani, yüzeye iki parmağınızı bastırın ve iki temas noktasından oluşan hayali çizgiyi döndürün). V0.18'de bu yöntem varsayılan olarak devre dışıdır. Etkinleştirmek için, Düzenle → Tercihler → Ekran seçeneğine gidin ve "Dokunmatik ekran eğme hareketini devre dışı bırak" onay kutusunun işaretini kaldırın. |

|Select\_text=Press the left mouse button over an object you want to select.

|Zoom\_text=Use the mouse wheel to zoom in and out.

|Rotate\_view\_text=Hold the left mouse button, then move the pointer.
In [Sketcher](/Sketcher_Workbench "Sketcher Workbench") and other edit modes, this behavior is disabled. Hold Alt when pressing the mouse button to enter rotation mode.

To set the camera's focus point for rotation, click a point with the middle mouse button. Alternatively, aim the cursor at a point and press H on the keyboard.

|Pan\_text=Hold the right mouse button, then move the pointer.

|Tilt\_view\_text=Hold both left and right mouse buttons, then move the pointer sideways.

|Select\_gesture\_text=Tap to select.

|Zoom\_gesture\_text=Drag two fingers (pinch) closer or farther apart.

|Rotate\_view\_gesture\_text=Drag with one finger to rotate.

Hold Alt when in the [Sketcher](/Sketcher_Workbench "Sketcher Workbench").

|Pan\_gesture\_text=Drag with two fingers.

Alternatively, tap and hold, then drag. This simulates the pan with the right mouse button.

|Tilt\_view\_gesture\_text=Rotate the imaginary line formed by two touch points.

This method is disabled by default. To enable, go to **Edit → Preferences → Display → Navigation**, and uncheck the "Disable touchscreen tilt gesture" checkbox.
}}

### Maya-Gesture Gezinme

In Maya-Gesture Navigation, panning, zooming, and rotating the view require the Alt key together with a mouse button; therefore, a three-button mouse is required. It's also possible to use gestures as this style was developed over the [Gesture navigation](#Gesture_navigation) style.

Maya-Gesture Gezinme,ALT tuşu ve bir fare düğmesine basarak tüm görünüm hareketleri etkinleştirilir , böylece bu gezinme modunu doğru kullanmak için 3 düğmeli bir fareye ihtiyaç duyulur. Alternatif olarak, bu mod, normal Gesture Gezinme modu üzerinde geliştirildiği için tüm Gestures hareketlerini kullanmak mümkündür.

| Seçme | Taşıma | Zumlama | Döndürme |
| --- | --- | --- | --- |
|  |  |  |  |
| [Seçme](/File:Select-mouse.svg "Seçme") | Alt+[Taşıma](/File:Pan-mouse.svg "Taşıma") | Alt+[Zumalam](/File:Pan-mouse-Ctrl.svg "Zumalam") veya [Zumlama](/File:Zoom-mouse.svg "Zumlama") | Alt+[Döndürme](/File:Select-mouse.svg "Döndürme") |
| Seçmek istediğiniz nesne üzerindeki fare sol düğmesine basın. | Alt tuşu ve fare orta tuşunu birlikte basılı tutun, imleci hareket ettirin. | Alt tuşu ve fare sağ tuşunu birlikte basılı tutun, imleci hareket ettirin. Alternatif olarak, Yakınlaştırma/Uzaklaştırma için fare tekerleğini kullanın. | Alt tuşu ve fare sol tuşunu birlikte basılı tutun, imleci hareket ettirin. |

|Alt=Alt

|Select\_text=Press the left mouse button over an object you want to select.

|Zoom\_text=Use the mouse wheel to zoom in and out.

Alternatively, hold Alt and the right mouse button, then move the pointer.

|Rotate\_view\_text=Hold Alt and the left mouse button, then move the pointer.

|Pan\_text=Hold Alt and the middle mouse button, then move the pointer.

|Tilt\_view\_text=Hold Alt and both left and right mouse buttons, and then move the pointer sideways.
}}

### OpenCascade navigation

The OpenCascade navigation style was modeled after [OpenCascade](https://www.opencascade.com/).

| Select | Zoom | | Rotate view | | Pan | |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | |  | |  | |
|  |  | Ctrl+ |  | Ctrl+ |  | Ctrl+ |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Alternatively, hold Ctrl and the left mouse button, then move the pointer. | | Hold the middle mouse button, then press and hold the right mouse button, then move the pointer. Alternatively, hold Ctrl and the right mouse button, then move the pointer. | | Hold the middle mouse button, then move the pointer. It is possible to hold Ctrl. | |

### OpenInventor navigation

### OpenInventor Gezinme

OpenInventor'de (önceden Inventor) gezinme, [Open Inventor](http://en.wikipedia.org/wiki/Open_Inventor) den sonra eklendi. (Bu mod Autodesk Inventor'a dayalı değildir.) Fare tek başına yeterli değildir. Nesneleri seçmek için,CTRL tuşunu basılı tutmanız gerekir .

| Seçme | Taşıma | Zumlama | Döndürme |
| --- | --- | --- | --- |
|  |  |  |  |
| ctrl +[Seçme](/File:Select-mouse.svg "Seçme") | [Taşıma](/File:Pan-mouse.svg "Taşıma") | [Yakınlaştırma/Uzaklaştırma](/File:Zoom-mouse.svg "Yakınlaştırma/Uzaklaştırma") veya [Yakınlaştırma/Uzaklaştırma](/File:Rotate-mouse.svg "Yakınlaştırma/Uzaklaştırma") | [Döndürme](/File:Select-mouse.svg "Döndürme") |
| Ctrl tuşunu basılı tutun ve seçmek istediğiniz nesnenin üzerinde fare sol tuşuna basın. | Fare sol düğmesine tıklayın ve nesneyi hareket ettirin. | Yakınlaştırmak ve uzaklaştırmak için fare tekerleğini kullanın veya orta fare düğmesini basılı tutun ve fare sol düğmesini tıklayın. | Sol fare düğmesini tıklayın ve döndürmek için sürükleyin. |

This style is not based on Autodesk Inventor.

| Select | Zoom | | Rotate view | Pan |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
| Shift+ |  |  |  |  |
| Hold Shift, then press the left mouse button over an object you want to select. Hold Ctrl instead to select multiple objects. | Use the mouse wheel to zoom in and out. Alternatively, hold the middle mouse button, then press and hold the left mouse button, then move the pointer. | | Hold the left mouse button, then move the pointer. | Hold the middle mouse button, then move the pointer. |

### OpenSCAD navigation

The OpenSCAD navigation style was modeled after [OpenSCAD](https://openscad.org/).

| Select | Zoom | | | Rotate view | | Pan |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | | |  | |  |
|  |  |  | Shift+ |  |  |  |
| Press the left mouse button over an object you want to select. 0.21 and below Hold Ctrl and Shift when pressing the mouse button to drag an object in a sketch in edit mode. | Use the mouse wheel to zoom in and out. Alternatively, hold the middle mouse button, then move the pointer.  Or hold Shift and the right mouse button, then move the pointer. | | | Hold the left mouse button, then move the pointer. Alternatively, and when a sketch is in edit mode, hold the middle mouse button, then press and hold the right mouse button, then move the pointer. | | Hold the right mouse button, then move the pointer. |

### Revit navigation

The Revit navigation style was modeled after [Revit](https://en.wikipedia.org/wiki/Autodesk_Revit).

| Select | Zoom | Rotate view | | Pan | |
| --- | --- | --- | --- | --- | --- |
|  |  |  | |  | |
|  |  | Shift+ |  |  |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. | Hold Shift and the middle mouse button, then move the pointer. Alternatively, hold the middle mouse button, then press and hold the right mouse button, then move the pointer. | | Hold the middle mouse button, then move the pointer. Alternatively, hold both left and right mouse buttons, then move the pointer. | |

### SolidWorks navigation

[introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

The SolidWorks navigation style was modeled after [SolidWorks](https://en.wikipedia.org/wiki/SolidWorks).

| Select | Zoom | | Rotate view | Pan |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
|  |  | Shift+ |  | Ctrl+ |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. Alternatively, hold Shift and the middle mouse button, then move the pointer.  Clicking the middle mouse button re-centers the view on the location of the cursor. | | Hold the middle mouse button, then move the pointer. | Hold Ctrl and the middle mouse button, then move the pointer. |

### TinkerCAD navigation

The TinkerCAD navigation style was modeled after [TinkerCAD](https://en.wikipedia.org/wiki/Tinkercad).

| Select | Zoom | Rotate view | Pan |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |
| Press the left mouse button over an object you want to select. | Use the mouse wheel to zoom in and out. | Press the right mouse button, then move the pointer. | Hold the middle mouse button, then move the pointer. |

### Dokunmatik fare gezinme

With the Touchpad navigation style, panning, zooming, and rotating the view require a modifier key together with the touchpad. This style can also be used with a mouse.

Dokunmatik fare gezinti de, Taşıma , zumlama ve döndürme işlemleri, yalnız fare kullanılarak (veya yalnız dokunmatik fare) yapılamaz.

| Seçme | Taşıma | Zumlama | Döndürme |
| --- | --- | --- | --- |
|  |  |  |  |
| [Seçme](/File:Select-touchpad.png "Seçme") | shift+[Taşıma](/File:Touchpad.png "Taşıma") | PgUp / PgDn | alt+[Döndürme](/File:Touchpad.png "Döndürme") |
| Seçmek istediğiniz nesnenin üzerinde farenin sol tuşuna basın. | shift tuşunu basılı tutun imleci hareket ettirin. | Yakınlaştırma/Uzaklaştırma için PgUp ve PgDn tuşlarını kullanın. | alt tuşunu basılı tutun ve imleci hareket ettirin. |
|  |  | *veya alternatif olarak* | *veya alternatif olarak* |
|  |  | shift+ctrl+[Zumlama](/File:Select-touchpad.png "Zumlama") | shift+ctrl+[Döndürme](/File:Touchpad.png "Döndürme") |
|  |  | shift+ctrl + dokunmatik fare sol tuşuna basılı tutun ve imleci hareket ettirin. | shift+ctrl birlikte basılı tutun ve imleci hareket ettirin. |

|Ctrl=Ctrl
|Shift=Shift
|Alt=Alt

|Select\_text=Press the left mouse button over an object you want to select.

|Zoom\_text=Hold Ctrl and Shift, then move the pointer.

|Rotate\_view\_text=Hold Alt, then move the pointer.

Alternatively, hold Shift and the left button, then move the pointer.

|Pan\_text=Hold Shift, then move the pointer.
}}

## Donanım desteği

FreeCAD, ayrıca bazı  [3D giriş cihazlarını](/3D_input_devices/tr "3D input devices/tr") destekler.

## Mac OS X Sorunları

Son zamanlarda Mac kullanıcılarından [forum'da](http://forum.freecadweb.org/viewtopic.php?f=3&t=3592&start=0) bu fare tuş ve klavye tuş kombinasyonunun beklendiği gibi çalışmadığı bildirildi.Maalesef, geliştiricilerin hiçbiri Mac'e sahip değil, diğer düzenli katkı yapanlar da yok. Hangi wiki düğmelerinin ve tuş kombinasyonunun işe yaradığını belirlemek için sizin yardımınıza ihtiyacımız var, böylece bu wiki'yi güncelleyebiliriz.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mouse_navigation/tr&oldid=1552147>"