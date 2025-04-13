---
title: Część Punkt
---
|  |
| --- |
| Część: Punkt |
| Lokalizacja w menu |
| Część → Utwórz geometrie pierwotne ... → Punkt |
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

![](/images/Part_Point.svg) **Punkt** to punkt parametryczny, który można utworzyć za pomocą polecenia ![](/images/Part_Primitives.svg) [Utwórz geometrie pierwotne ...](/Part_Primitives/pl "Part Primitives/pl"). Jego współrzędne są względne w stosunku do układu współrzędnych zdefiniowanego przez jego właściwość DANE**Umiejscowienie**.

## Użycie

Zobacz stronę [Geometrie pierwotne](/Part_Primitives/pl#Użycie "Part Primitives/pl").

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Punkt wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Dołączenie

Obiekt ten ma takie same właściwości dołączania jak [Part: Part2DObject](/Part_Part2DObject/pl#Dane "Part Part2DObject/pl").

Podstawa

* DANE**X** (`Distance`): Współrzędna X punktu. Domyślną wartością jest `0mm`.
* DANE**Y** (`Distance`): Współrzędna Y punktu. Domyślną wartością jest `0mm`.
* DANE**Z** (`Distance`): Współrzędna Z punktu. Domyślną wartością jest `0mm`.

## Tworzenie skryptów

Zobacz również: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Skrypty w środowisku Część](/Part_scripting/pl "Part scripting/pl") i [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Punkt środowiska pracy Część jest tworzony za pomocą metody `addObject()`.

```
point = FreeCAD.ActiveDocument.addObject("Part::Vertex", "myPoint")

```

* Gdzie parametr `"myPoint"` jest etykietą dla obiektu.
* Funkcja zwraca nowo utworzony obiekt.

Przykład:

```
import FreeCAD as App

doc = App.activeDocument()

point = doc.addObject("Part::Vertex", "myPoint")
point.X = 1
point.Y = 2
point.Z = 3

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Point/pl&oldid=1302472>"