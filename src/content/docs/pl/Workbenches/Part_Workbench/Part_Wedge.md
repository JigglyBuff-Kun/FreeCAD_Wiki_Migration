---
title: Część Klin
---
|  |
| --- |
| Część: Klin |
| Lokalizacja w menu |
| Część → Utwórz geometrie pierwotne ... → Klin |
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

![](/images/Part_Wedge.svg) **Klin** środowiska praczy Część to parametryczna bryła, którą można utworzyć za pomocą polecenia ![](/images/Part_Primitives.svg) [Utwórz geometrie pierwotne ...](/Part_Primitives/pl "Part Primitives/pl"). Ma od czterech do sześciu płaskich ścian. Jest on definiowany przez wirtualne przednie i tylne płaszczyzny główne, na których tworzona jest prostokątna ściana *(domyślnie)*, pojedyncza prosta krawędź lub pojedynczy wierzchołek. Te kształty bazowe definiują cztery czworoboczne lub trójkątne ściany, które je łączą. Wynikowa bryła jest prawdziwym klinem tylko wtedy, gdy jeden z kształtów bazowych jest ścianą prostokątną, a drugi krawędzią prostą. W układzie współrzędnych zdefiniowanym przez właściwość DANE**Umiejscowienie**, wirtualne przednie i tylne główne płaszczyzny klina są równoległe do płaszczyzny XZ, a krawędzie kształtów bazowych są równoległe do osi X lub Z. Wszystkie jego współrzędne odnoszą się do tego układu współrzędnych.

![](/images/Part_Wedge_Example.png)

## Użycie

Zobacz stronę [Geometrie pierwotne](/Part_Primitives/pl#Użycie "Part Primitives/pl").

## Przykład

![](/images/Part_Plane_Scripting_Example.png)

Klin środowiska pracy Część na przykładzie skryptu

Poniżej pokazano obiekt Klina utworzony za pomocą [przykładowego skryptu](#Tworzenie_skryptów).

## Uwagi

* Wartości współrzędnych klina muszą być takie, aby można było utworzyć prawidłową bryłę. Oznacza to, że przednie i tylne kształty bazowe mogą być pojedynczymi krawędziami, ale nie mogą być równoległe. A jeśli jeden z kształtów bazowych jest wierzchołkiem, drugi kształt musi być ścianą prostokątną.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Klina wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Dołączenie

Obiekt ten ma takie same właściwości dołączania jak [Part: Part2DObject](/Part_Part2DObject/pl#Dane "Part Part2DObject/pl").

Klin

* DANE**Xmin** (`Distance`): Najmniejsza współrzędna X ściany czołowej klina. Domyślnie `0mm`.
* DANE**Ymin** (`Distance`): Współrzędna Y przedniej ściany klina. Domyślnie `0mm`.
* DANE**Zmin** (`Distance`): Najmniejsza współrzędna Z przedniej ściany klina. Domyślnie `0mm`.
* DANE**X2min** (`Distance`): Najmniejsza współrzędna X tylnej ściany klina. Domyślnie `2mm`.
* DANE**Z2min** (`Distance`): Najmniejsza współrzędna Z tylnej ściany klina. Domyślnie `2mm`.
* DANE**Xmax** (`Distance`): Największa współrzędna X przedniej ściany klina. Domyślnie `10mm`.
* DANE**Ymax** (`Distance`): Współrzędna Y tylnej ściany klina. Domyślnie `10mm`.
* DANE**Zmax** (`Distance`): Największa współrzędna Z przedniej ściany klina. Domyślnie `10mm`.
* DANE**X2max** (`Distance`): Największa współrzędna X tylnej ściany klina. Domyślnie `8mm`.
* DANE**Z2max** (`Distance`): Największa współrzędna Z tylnej ściany klina. Domyślnie `8mm`.

## Tworzenie skryptów

Zobacz również: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Skrypty w środowisku Część](/Part_scripting/pl "Part scripting/pl") i [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Klin środowiska pracy Część jest tworzony za pomocą metody `addObject()`.

```
wedge = FreeCAD.ActiveDocument.addObject("Part::Wedge", "myWedge")

```

* Gdzie parametr `"myWedge"` jest etykietą dla obiektu.
* Funkcja zwraca nowo utworzony obiekt.

Przykład:

```
import FreeCAD as App

doc = App.activeDocument()

wedge = doc.addObject("Part::Wedge", "myWedge")
wedge.Xmin = 1
wedge.Ymin = 2
wedge.Zmin = 3
wedge.X2min = 4
wedge.Z2min = 6
wedge.Xmax = 15
wedge.Ymax = 20
wedge.Zmax = 55
wedge.X2max = 10
wedge.Z2max = 12
wedge.Placement = App.Placement(App.Vector(1, 2, 3), App.Rotation(75, 60, 30))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Wedge/pl&oldid=1302488>"