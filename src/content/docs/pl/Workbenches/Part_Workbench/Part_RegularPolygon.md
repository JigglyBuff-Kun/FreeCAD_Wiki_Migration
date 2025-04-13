---
title: Część Wielokąt foremny
---
|  |
| --- |
| Część: Wielokąt foremny |
| Lokalizacja w menu |
| Część → Utwórz geometrie pierwotne ... → Wielokąt foremny |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl"), [OpenSCAD](/OpenSCAD_Workbench/pl "OpenSCAD Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.14 |
| Zobacz także |
| [Utwórz geometrie pierwotne](/Part_Primitives/pl "Part Primitives/pl") |
|  |

## Opis

![](/images/Part_RegularPolygon.svg) **Wielokąt foremny** to parametryczny obiekt kształtu, który można utworzyć za pomocą ![](/images/Part_Primitives.svg) polecenia [Part Primitives](/Part_Primitives "Part Primitives") [Utwórz geometrie pierwotne ...](/Part_Primitives/pl "Part Primitives/pl"). W układzie współrzędnych zdefiniowanym przez właściwość DANE**Umiejscowienie**, wielokąt leży na płaszczyźnie XY ze środkiem w punkcie początkowym i jednym z wierzchołków na osi X.

![](/images/Part_RegularPolygon_Example.png)

## Użycie

Zobacz stronę [Geometrie pierwotne](/Part_Primitives/pl#Użycie "Part Primitives/pl").

## Przykład

![](/images/Part_RegularPolygon_Scripting_Example.png)

Wielokąt foremny środowiska pracy Część na przykładzie skryptu

Poniżej pokazano obiekt Wielokąt foremny utworzony za pomocą [przykładowego skryptu](#Tworzenie_skryptów).

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Wielokąt foremny wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Dołączenie

Obiekt ten ma takie same właściwości dołączania jak [Part: Part2DObject](/Part_Part2DObject/pl#Dane "Part Part2DObject/pl").

Wielokąt foremny

* DANE**Wielokąt** (`IntegerConstraint`): Liczba boków wielokąta. Domyślną wartością jest `6`.
* DANE**Circumradius** (`Length`): Promień okręgu opisującego wielokąt, odległość od środka wielokąta do jednego z jego wierzchołków. Domyślną wartością jest `2mm`.

## Tworzenie skryptów

Zobacz również: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Skrypty w środowisku Część](/Part_scripting/pl "Part scripting/pl") i [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Wielokąt foremny środowiska pracy Część jest tworzony za pomocą metody dokumentu `addObject()`.

```
poly = FreeCAD.ActiveDocument.addObject("Part::RegularPolygon", "myPolygon")

```

* Gdzie parametr `"myPolygon"` jest etykietą dla obiektu.
* Funkcja zwraca nowo utworzony obiekt.

Przykład:

```
import FreeCAD as App

doc = App.activeDocument()

poly = doc.addObject("Part::RegularPolygon", "myPolygon")
poly.Polygon = 5
poly.Circumradius = 8
poly.Placement = App.Placement(App.Vector(1, 2, 3), App.Rotation(60, 30, 15))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_RegularPolygon/pl&oldid=1302476>"