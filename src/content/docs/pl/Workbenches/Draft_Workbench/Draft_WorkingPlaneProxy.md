---
title: Rysunek Roboczy Pośrednia płaszczyzna robocza
---
|  |
| --- |
| Rysunek Roboczy: Pośrednia płaszczyzna robocza |
| Lokalizacja w menu |
| Narzędzia → Utwórz pośrednią płaszczyznę roboczą |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Wybierz płaszczyznę](/Draft_SelectPlane/pl "Draft SelectPlane/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_WorkingPlaneProxy.svg) **Pośrednia płaszczyzna robocza** tworzy proxy płaszczyzny roboczej w celu zapisania bieżącej [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl"). Pośrednia płaszczyzna robocza może być użyta do szybkiego przywrócenia płaszczyzny roboczej. Ujęcie widoku i widoczność obiektów w oknie [widoku 3D](/3D_view/pl "3D view/pl") są również zapisywane w obiekcie pośrednim płaszczyzny roboczej i mogą, [opcjonalnie](#Właściwości), zostać przywrócone.

![](/images/Draft_WPProxy_example.png)

Trzy pośrednie płaszczyzny robocze pokazujące różne orientacje i przesunięcia.

## Użycie

1. Opcjonalnie zmień [płaszczyznę roboczą](/Draft_SelectPlane/pl "Draft SelectPlane/pl").
2. Opcjonalnie można zmienić ujęcie [widoku 3D](/3D_view/pl "3D view/pl").
3. Opcjonalnie można zmienić widoczność obiektów w dokumencie.
4. Polecenie można wywołać na kilka sposobów:
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Naciśnij przycisk ![](/images/Draft_WorkingPlaneProxy.svg) '*Utwórz pośrednią płaszczyznę roboczą*.
   * Rysunek Roboczy: Wybierz opcję **Narzędzia → ![](/images/Draft_WorkingPlaneProxy.svg) Utwórz pośrednią płaszczyznę roboczą** z menu lub menu kontekstowego [widoku drzewa](/Tree_view/pl "Tree view/pl") bądź [widoku 3D](/3D_view/pl "3D view/pl").
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Narzędzia → ![](/images/Draft_WorkingPlaneProxy.svg) Utwórz pośrednią płaszczyznę roboczą** z menu.
5. Zostanie utworzona pośrednia płaszczyzna robocza.
6. Aby wyrównać [płaszczyznę roboczą](/Draft_SelectPlane/pl "Draft SelectPlane/pl") z pośrednią płaszczyzną roboczą, kliknij dwukrotnie pośrednią płaszczyznę roboczą w [widoku drzewa](/Tree_view/pl "Tree view/pl") lub użyj polecenia [Wybór płaszczyzny](/Draft_SelectPlane/pl "Draft SelectPlane/pl").

## Menu podręczne

W przypadku Pośredniej płaszczyzny roboczej środowiska Rysunek Roboczy te dodatkowe opcje są dostępne w menu kontekstowym [widoku drzewa](/Tree_view/pl "Tree view/pl"):

* **![](/images/Draft_SelectPlane.svg) Zapisz pozycję kamery**: aktualizuje właściwość WIDOK**Wyświetlanie danych** proxy płaszczyzny roboczej z bieżącymi ustawieniami kamery [widoku 3D](/3D_view/pl "3D view/pl").
* **![](/images/Draft_SelectPlane.svg): Zapisz stan obiektów**: aktualizuje właściwość WIDOK**Mapa widoczności** proxy płaszczyzny roboczej z bieżącym stanem widoczności obiektów w dokumencie.

## Uwagi

* Pośrednie płaszczyzny robocze mogą być [przenoszone](/Draft_Move/pl "Draft Move/pl") i [obracane](/Draft_Rotate/pl "Draft Rotate/pl") jak każdy inny obiekt. Użyj ![](/images/Draft_Snap_Center.svg) [Przyciągnij do środka](/Draft_Snap_Center/pl "Draft Snap Center/pl"), aby przyciągnąć je do punktu DANE**Umiejscowienia**.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Pośrednia płaszczyznarobocza środowiska pracy Rysunek Roboczy wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Podstawa

* DANE**Umiejscowienie** (`Placement`): określa pozycję proxy płaszczyzny roboczej w [widoku 3D](/3D_view/pl "3D view/pl"). Aby dowiedzieć się więcej zapoznaj się z informacjami na stronie [Umiejscowienie](/Placement/pl "Placement/pl").
* DANE**Kształt** (`Hidden`): określa kształt pośredniej płaszczyzny roboczej.

### Widok

Podstawa

* WIDOK**Kolor linii** (`Color`): określa kolor wszystkich elementów pośredniej płaszczyzny roboczej.
* WIDOK**Szerokość linii** (`Float`): określa szerokość linii osi i symboli strzałek.
* WIDOK**Przywróć stan** (`Bool`): określa, czy WIDOK**Mapa widoczności** jest przywracana, gdy [płaszczyzna robocza](/Draft_SelectPlane/pl "Draft SelectPlane/pl") jest wyrównana z pośrednią płaszczyzną roboczą.
* WIDOK**Przywróć widok** (`Bool`): określa, czy WIDOK**Widok danych** jest przywracany, gdy [płaszczyzna robocza](/Draft_SelectPlane/pl "Draft SelectPlane/pl") jest wyrównana z pośrednią płaszczyzną roboczą.
* WIDOK**Widoczność** (`Percent`): określa przezroczystość powierzchni pośredniej płaszczyzny roboczej.
* WIDOK**Widok danych** (`FloatList`): określa pozycję i ustawienia kamery.
* WIDOK (ukryte)**Mapa widoczności** (`Map`): określa stan widoczności obiektów.

Rysunek Roboczy

* WIDOK**Rozmiar strzałki** (`Length`): określa rozmiar symboli strzałek wyświetlanych na końcu trzech osi.
* WIDOK**Wyświetlany rozmiar** (`Length`): określa długość i szerokość pośredniej płaszczyzny roboczej.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć Pośrednią płaszczyznę roboczą środowiska Rysunek Roboczy należy użyć metody `make_workingplaneproxy` modułu Rysunek Roboczy.

Jeśli środowisko pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") jest aktywne, obiekt aplikacji FreeCAD posiada właściwość `DraftWorkingPlane`, która przechowuje bieżącą płaszczyznę roboczą. Wartość `Umiejscowienie` z metody `getPlacement` obiektu `DraftWorkingPlane` może być użyta do utworzenia wyrównanej pośredniej płaszczyzny roboczej. Z kolei `Umiejscowienie` pośredniej płaszczyzny roboczej może być użyte do wyrównania płaszczyzny roboczej.

```
# This code only works if the Draft Workbench is active!

import FreeCAD as App
import FreeCADGui as Gui
import Draft

doc = App.newDocument()

workplane = App.DraftWorkingPlane
place = workplane.getPlacement()

proxy = Draft.make_workingplaneproxy(place)
proxy.ViewObject.DisplaySize = 3000
proxy.ViewObject.ArrowSize = 200

axis2 = App.Vector(1, 1, 1)
point2 = App.Vector(3000, 0, 0)
place2 = App.Placement(point2, App.Rotation(axis2, 90))

proxy2 = Draft.make_workingplaneproxy(place2)
proxy2.ViewObject.DisplaySize = 3000
proxy2.ViewObject.ArrowSize = 200

workplane.setFromPlacement(proxy2.Placement, rebase=True)
Gui.Snapper.setGrid()

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_WorkingPlaneProxy/pl&oldid=1474051>"