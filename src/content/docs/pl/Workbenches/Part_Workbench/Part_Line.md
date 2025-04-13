---
title: Część Linia
---
|  |
| --- |
| Część: Płaszczyzna |
| Lokalizacja w menu |
| Część → Utwórz geometrie pierwotne ... → Linia |
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

![](/images/Part_Line.svg) **Linia** jest obiektem linii parametrycznej, którą można utworzyć za pomocą polecenia ![](/images/Part_Primitives.svg) [Utwórz geometrie pierwotne ...](/Part_Primitives/pl "Part Primitives/pl"). Współrzędne jej punktu początkowego i końcowego odnoszą się do układu współrzędnych zdefiniowanego przez jej właściwość DANE**Umiejscowienie**.

![](/images/Part_Line_Example.png)

## Użycie

Zobacz stronę [Geometrie pierwotne](/Part_Primitives/pl#Użycie "Part Primitives/pl").

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Linia wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Dołączenie

Obiekt ten ma takie same właściwości dołączania jak [Part: Part2DObject](/Part_Part2DObject/pl#Dane "Part Part2DObject/pl").

Wierzchołek 1 - Początek

* DANE**X1** (`Dystans`): Współrzędna X punktu początkowego linii. Domyślną wartością jest `0mm`.
* DANE**Y1** (`Dystans`): Współrzędna Y punktu początkowego linii. Domyślną wartością jest `0mm`.
* DANE**Z1** (`Dystans`): Współrzędna Z punktu początkowego linii. Domyślną wartością jest `0mm`.

Vertex 2 - Koniec

* DANE**X2** (`Distance`): Współrzędna X punktu końcowego linii. Domyślną wartością jest `0mm`.
* DANE**Y2** (`Distance`): Współrzędna Y punktu końcowego linii. Domyślną wartością jest `0mm`.
* DANE**Z2** (`Distance`): Współrzędna Z punktu końcowego linii. Domyślną wartością jest `0mm`.

## Tworzenie skryptów

Zobacz również: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Skrypty w środowisku Część](/Part_scripting/pl "Part scripting/pl") i [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Linia środowiska pracy Część jest tworzony za pomocą metody `addObject()`.

```
line = FreeCAD.ActiveDocument.addObject("Part::Line", "myLine")

```

* Gdzie parametr `"myLine"` jest etykietą dla obiektu.
* Funkcja zwraca nowo utworzony obiekt.

Przykład:

```
import FreeCAD as App

doc = App.activeDocument()

line = doc.addObject("Part::Line", "myLine")
line.X1 = 1
line.Y1 = 3
line.Z1 = 6
line.X2 = 2
line.Y2 = 3
line.Z2 = 9

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Line/pl&oldid=1302468>"