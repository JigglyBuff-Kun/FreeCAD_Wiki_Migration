---
title: Część Spirala
---
|  |
| --- |
| Część: Spirala |
| Lokalizacja w menu |
| Część → Utwórz geometrie pierwotne ... → Spirala |
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

![](/images/Part_Spiral.svg) **Spirala** środowiska Część to parametryczny kształt, który można utworzyć za pomocą polecenia ![](/images/Part_Primitives.svg) [Utwórz geometrie pierwotne ...](/Part_Primitives/pl "Part Primitives/pl"). W układzie współrzędnych zdefiniowanym przez właściwość DANE**Umiejscowienie**, spirala leży na płaszczyźnie XY ze środkiem w punkcie odniesienia położenia i punktem początkowym na osi X. Poszerza się, gdy obraca się w kierunku przeciwnym do ruchu wskazówek zegara.

![](/images/Part_Spiral_Example.png)

## Użycie

Zobacz stronę [Geometrie pierwotne](/Part_Primitives/pl#Użycie "Part Primitives/pl").

## Przykład

![](/images/Part_Spiral_Scripting_Example.png)

Spirala środowiska pracy Część na przykładzie skryptu

Poniżej pokazano obiekt Spirala utworzony za pomocą [przykładowego skryptu](#Tworzenie_skryptów).

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Spirala wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Dołączenie

Obiekt ten ma takie same właściwości dołączania jak [Part: Part2DObject](/Part_Part2DObject/pl#Dane "Part Part2DObject/pl").

Spirala

* DANE**Przyrost** (`Length`): Odległość między dwoma kolejnymi zwojami spirali. Domyślna wartość to `1mm`.
* DANE**Promień** (`Length`): Promień początkowy spirali, odległość między jej środkiem a punktem początkowym. Może być `0mm`. Domyślna wartość to `1mm`.
* DANE**Rotacje** (`QuantityConstraint`): Liczba obrotów spirali. Domyślnie `2`.
* DANE**Segment Length** (`QuantityConstraint`): Liczba obrotów na poddział spirali. Domyślną wartością jest `1`, co oznacza, że każdy pełny obrót spirali jest oddzielnym segmentem. Użyj wartości `0`, aby pominąć podział.

## Tworzenie skryptów

Zobacz również: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Skrypty w środowisku Część](/Part_scripting/pl "Part scripting/pl") i [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Spirala środowiska pracy Część jest tworzona za pomocą metody `addObject()`.

```
spiral = FreeCAD.ActiveDocument.addObject("Part::Spiral", "mySpiral")

```

* Gdzie parametr `"mySpiral"` jest etykietą dla obiektu.
* Funkcja zwraca nowo utworzony obiekt.

Przykład:

```
import FreeCAD as App

doc = App.activeDocument()

spiral = doc.addObject("Part::Spiral", "mySpiral")
spiral.Growth = 2
spiral.Radius = 3
spiral.Rotations = 4
spiral.Placement = App.Placement(App.Vector(1, 2, 3), App.Rotation(75, 60, 30))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Spiral/pl&oldid=1302482>"