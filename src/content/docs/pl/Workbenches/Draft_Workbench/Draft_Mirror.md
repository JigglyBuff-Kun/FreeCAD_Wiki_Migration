---
title: Rysunek Roboczy Odbicie lustrzane
---
|  |
| --- |
| Rysunek Roboczy: Odbicie lustrzane |
| Lokalizacja w menu |
| Modyfikacja → Mirror |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| M I |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Klonuj](/Draft_Clone/pl "Draft Clone/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_Mirror.svg) **Odbicie lustrzane** tworzy lustrzane kopie obiektów [Odbicie lustrzane](/Part_Mirror "Part Mirror") środowiska pracy Część z wybranych obiektów. Obiekt [Odbicie lustrzane](/Part_Mirror "Part Mirror") środowiska pracy Część jest parametryczny, więc będzie aktualizowany, jeśli zmieni się jego obiekt źródłowy.

Narzędzie Przesuń może być używane na obiektach 2D utworzonych za pomocą środowisk pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") lub [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), ale może być również używane dla wielu typów obiektów 3D, takich jak te utworzone za pomocą środowisk pracy [Część](/Part_Workbench/pl "Part Workbench/pl"), [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") lub [BIM](/BIM_Workbench/pl "BIM Workbench/pl").

![](/images/Draft_Mirror_example.jpg)

Tworzenie kopii lustrzanej obiektu.

## Użycie

Zobacz także strony: [Rysunek Roboczy: Przyciąganie](/Draft_Snap/pl "Draft Snap/pl") i [Rysunek Roboczy: Wiązania](/Draft_Constrain/pl "Draft Constrain/pl").

1. Opcjonalnie wybierz jeden lub więcej obiektów.
2. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Draft_Mirror.svg) [Odbicie lustrzane](/Draft_Mirror "Draft Mirror").
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz z menu opcję **Modyfikacja → ![](/images/Draft_Mirror.svg) Odbicie lustrzane**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Modyfikacja → ![](/images/Draft_Mirror.svg) Odbicie lustrzane** z menu.
   * Użyj skrótu klawiaturowego: M, a następnie I.
3. Jeśli nie wybrałeś jeszcze żadnego obiektu: wybierz obiekt w oknie [widoku 3D](/3D_view/pl "3D view/pl").
4. Otworzy się panel zadań **Odbicie lustrzane**. Więcej informacji znajduje się w sekcji [Opcje](#Opcje).
5. Wybierz pierwszy punkt płaszczyzny lustra w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.
6. Wybierz drugi punkt płaszczyzny lustra w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.
7. Płaszczyzna lustrzana jest definiowana przez wybrane punkty i normalną [Płaszczyzna robocza szkicu](/Draft_SelectPlane/pl "Draft SelectPlane/pl").

## Opcje

Skróty klawiaturowe jedno znakowe dostępne w panelu zadań można zmienić. Zobacz stronę [Preferencji](/Draft_Preferences/pl "Draft Preferences/pl"). Skróty wymienione tutaj są skrótami domyślnymi.

* Aby ręcznie wprowadzić współrzędne, wprowadź element X, Y i Z i naciśnij Enter po każdym z nich. Możesz też nacisnąć przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt, gdy uzyskasz żądane wartości. Zaleca się przesunięcie wskaźnika poza obszar okna [widoku 3D](/3D_view/pl "3D view/pl") przed wprowadzeniem współrzędnych.
* Wciśnij R lub kliknij pole wyboru **Względnie**, aby przełączyć tryb względny. Jeśli tryb względny jest włączony, współrzędne drugiego punktu są względne do pierwszego punktu, w przeciwnym razie są one względne do początku układu współrzędnych.
* Naciśnij G lub kliknij pole wyboru **Globalnie**, aby przełączyć tryb globalny. Jeśli tryb globalny jest włączony, współrzędne odnoszą się do globalnego układu współrzędnych, w przeciwnym razie odnoszą się do układu współrzędnych [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").
* Naciśnij S, aby włączyć lub wyłączyć [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl").
* Naciśnij Esc lub przycisk Zamknij, aby przerwać polecenie.

## Uwagi

* Kopie lustrzane [linii](/Draft_Line/pl "Draft Line/pl"), [polilinii](/Draft_Wire/pl "Draft Wire/pl"), [łuków](/Draft_Arc/pl "Draft Arc/pl") i [okręgów](/Draft_Circle/pl "Draft Circle/pl") mogą zostać przekształcone w niezależne edytowalne obiekty środowiska Rysunek Roboczy przy użyciu narzędzia [Rozbij kształt](/Draft_Downgrade/pl "Draft Downgrade/pl"), a następnie [Ulepsz kształt](/Draft_Upgrade/pl "Draft Upgrade/pl").
* Polecenie [Utwórz prostą kopię](/Part_SimpleCopy/pl "Part SimpleCopy/pl") może być użyte do utworzenia kopii lustrzanej obiektu, która nie jest połączona z obiektem źródłowym.

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Odbicie lustrzane** środowiska pracy Rysunek roboczy wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Podstawa

* DANE**Źródło** (`Link`): określa obiekt, który zostanie odzwierciedlony.

Płaszczyzna

* DANE**Baza** (`Vector`): określa punkt bazowy płaszczyzny lustrzanej.
* DANE**Normal** (`Vector`): określa normalny kierunek płaszczyzny lustra.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby wykonać odbicie lustrzane obiektów, użyj metody `mirror` środowiska Rysunek Roboczy.

```
mirrored_list = mirror(objlist, p1, p2)

```

* `objlist` zawiera obiekty, które mają zostać odzwierciedlone. Jest to pojedynczy obiekt lub lista obiektów.
* `p1` jest pierwszym punktem płaszczyzny lustrzanej.
* `p2` jest drugim punktem płaszczyzny lustrzanej.
* Jeśli [płaszczyzna robocza](/Draft_SelectPlane/pl "Draft SelectPlane/pl") jest dostępna, wyrównanie płaszczyzny lustrzanej jest określane przez jej normalną, w przeciwnym razie używany jest kierunek widoku kamery w aktywnym oknie [widoku 3D](/3D_view/pl "3D view/pl"). Jeśli interfejs graficzny nie jest dostępny, używana jest oś Z.
* `mirrored_list` jest zwracany z nowymi obiektami `Part::Mirroring`. Jest to pojedynczy obiekt lub lista obiektów, w zależności od `objlist`.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

place = App.Placement(FreeCAD.Vector(1000, 0, 0), App.Rotation())
polygon1 = Draft.make_polygon(3, 750)
polygon2 = Draft.make_polygon(5, 750, placement=place)

p1 = App.Vector(2000, -1000, 0)
p2 = App.Vector(2000, 1000, 0)

line1 = Draft.make_line(p1, p2)
mirrored1 = Draft.mirror(polygon1, p1, p2)

Line2 = Draft.make_line(-p1, -p2)
mirrored2 = Draft.mirror([polygon1, polygon2], -p1, -p2)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Mirror/pl&oldid=1513657>"