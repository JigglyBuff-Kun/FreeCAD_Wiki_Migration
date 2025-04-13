---
title: Część Płaszczyzna
---
|  |
| --- |
| Część: Płaszczyzna |
| Lokalizacja w menu |
| Część → Utwórz geometrie pierwotne ... → Płaszczyzna |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl"), [OpenSCAD](/OpenSCAD_Workbench/pl "OpenSCAD Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Utwórz geometrie pierwotne](/Part_Primitives/pl "Part Primitives/pl") |
|  |

## Opis

![](/images/Part_Plane.svg) **Płaszczyzna** środowiska praczy Część to parametryczna prostokątna płaszczyzna, którą można utworzyć za pomocą polecenia ![](/images/Part_Primitives.svg) [Utwórz geometrie pierwotne ...](/Part_Primitives/pl "Part Primitives/pl"). W układzie współrzędnych zdefiniowanym przez właściwość DANE**Umiejscowienie**, płaszczyzna leży na płaszczyźnie XY, z przednim lewym narożnikiem w punkcie początkowym i przednią krawędzią równoległą do osi X.

![](/images/Part_Plane_Example.png)

## Użycie

Zobacz stronę [Geometrie pierwotne](/Part_Primitives/pl#Użycie "Part Primitives/pl").

## Przykład

![](/images/Part_Plane_Scripting_Example.png)

Płaszczyzna środowiska pracy Część na przykładzie skryptu

Poniżej pokazano obiekt Płaszczyzny utworzony za pomocą [przykładowego skryptu](#Tworzenie_skryptów).

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Płaszczyzna wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Dołączenie

Obiekt ten ma takie same właściwości dołączania jak [Part: Part2DObject](/Part_Part2DObject/pl#Dane "Part Part2DObject/pl").

Płaszczyzna

* DANE**Długość** (`Length`): Długość płaszczyzny. Jest to wymiar w kierunku X. Domyślnie `10mm`.
* DANE**Szerokość** (`Length`): Szerokość płaszczyzny. Jest to wymiar w kierunku Y. Domyślnie `10mm`.

## Tworzenie skryptów

Zobacz również: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Skrypty w środowisku Część](/Part_scripting/pl "Part scripting/pl") i [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Płaszczyzna środowiska pracy Część jest tworzony za pomocą metody `addObject()`.

```
plane = FreeCAD.ActiveDocument.addObject("Part::Plane", "myPlane")

```

* Gdzie parametr `"myPlane"` jest etykietą dla obiektu.
* Funkcja zwraca nowo utworzony obiekt.

Przykład:

```
import FreeCAD as App

doc = App.activeDocument()

plane = doc.addObject("Part::Plane", "myPlane")
plane.Length = 4
plane.Width = 8
plane.Placement = App.Placement(App.Vector(1, 2, 3), App.Rotation(20, 75, 60))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Plane/pl&oldid=1302470>"