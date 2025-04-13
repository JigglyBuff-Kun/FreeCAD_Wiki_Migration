---
title: Część Graniastosłup
---
|  |
| --- |
| Część: Graniastosłup |
| Lokalizacja w menu |
| Część → Utwórz geometrie pierwotne ... → Graniastosłup |
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

![](/images/Part_Prism.svg) **Graniastosłup** środowiska praczy Część to parametryczna bryła, którą można utworzyć za pomocą polecenia ![](/images/Part_Primitives.svg) [Utwórz geometrie pierwotne ...](/Part_Primitives/pl "Part Primitives/pl"). W układzie współrzędnych zdefiniowanym przez właściwość DANE**Umiejscowienie**, osie elipsoidy są wyrównane z osiami X, Y i Z, a zatem jej środek znajduje się w punkcie początkowym.

![](/images/Part_Prism_Example.png)

## Użycie

Zobacz stronę [Geometrie pierwotne](/Part_Primitives/pl#Użycie "Part Primitives/pl").

## Przykład

![](/images/Part_Prism_Scripting_Example.png)

Graniastosłup środowiska pracy Część na przykładzie skryptu

Poniżej pokazano obiekt Graniastosłup utworzony za pomocą [przykładowego skryptu](#Tworzenie_skryptów).

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Graniastosłup wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Dołączenie

Obiekt ten ma takie same właściwości dołączania jak [Part: Part2DObject](/Part_Part2DObject/pl#Dane "Part Part2DObject/pl").

Graniastosłup

* DANE**Wielokąt** (`IntegerConstraint`): Liczba boków wielokąta. Domyślnie `6`.
* DANE**Circumradius** (`Length`): Promień okręgu opisującego wielokąt, odległość od środka wielokąta do jednego z jego wierzchołków. Domyślnie `2mm`.
* DANE**Wysokość** (`Length`): Wysokość wielokąta. Domyślnie `10mm`.
* DANE**Pierwszy Kąt** (`Angle`): Kąt między kierunkiem wyciągnięcia prostopadłościanu a jego dodatnią osią Z, mierzony wokół jego osi Y. Kąt jest dodatni w kierunku dodatniej osi X. Prawidłowy zakres: `0° <= value < 90°`. Wartość domyślna to `0°`.
* DANE**Drugi kąt** (`Angle`): Kąt między kierunkiem wyciągnięcia prostopadłościanu a jego dodatnią osią Z, mierzony wokół jego osi X. Kąt jest dodatni w kierunku dodatniej osi Y. Prawidłowy zakres: `0° <= value < 90°`. Wartość domyślna to `0°`.

## Tworzenie skryptów

Zobacz również: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Skrypty w środowisku Część](/Part_scripting/pl "Part scripting/pl") i [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Graniastosłup środowiska pracy Część jest tworzony za pomocą metody `addObject()`.

```
prism = FreeCAD.ActiveDocument.addObject("Part::Prism", "myPrism")

```

* Gdzie parametr `"myPrism"` jest etykietą dla obiektu.
* Funkcja zwraca nowo utworzony obiekt.

Przykład:

```
import FreeCAD as App

doc = App.activeDocument()

prism = doc.addObject("Part::Prism", "myPrism")
prism.Polygon = 5
prism.Circumradius = 10
prism.Height = 50
prism.FirstAngle = 22.5
prism.SecondAngle = 45
prism.Placement = App.Placement(App.Vector(1, 2, 3), App.Rotation(60, 75, 30))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Prism/pl&oldid=1302474>"