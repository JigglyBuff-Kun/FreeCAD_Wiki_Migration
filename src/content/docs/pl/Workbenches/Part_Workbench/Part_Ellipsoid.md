---
title: Część Elipsoida
---
|  |
| --- |
| Część Elipsoida |
| Lokalizacja w menu |
| Część → Utwórz geometrie pierwotne ... → Elipsoida |
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

![](/images/Part_Ellipsoid.svg) **Elipsoida** środowiska praczy Część to parametryczna bryła, którą można utworzyć za pomocą polecenia ![](/images/Part_Primitives.svg) [Utwórz geometrie pierwotne ...](/Part_Primitives/pl "Part Primitives/pl"). W układzie współrzędnych zdefiniowanym przez właściwość DANE**Umiejscowienie**, osie elipsoidy są wyrównane z osiami X, Y i Z, a zatem jej środek znajduje się w punkcie początkowym.

Elipsoida środowiska pracy Część może być obcięta u góry i/lub u dołu przez zmianę jej właściwości DANE**Kąt1** i/lub DANE**Kąt2**. Można ją przekształcić w segment sfery, zmieniając jej właściwość DANE**Kąt3**.

![](/images/Part_Ellipsoid_Example.png)

## Użycie

Zobacz stronę [Geometrie pierwotne](/Part_Primitives/pl#Użycie "Part Primitives/pl").

## Przykład

![](/images/Part_Ellipsoid_Scripting_Example.png)

Elipsoida środowiska pracy Część na przykładzie skryptu

Poniżej pokazano obiekt Elipsoidy utworzony za pomocą [przykładowego skryptu](#Tworzenie_skryptów).

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Elipsoida wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Dołączenie

Obiekt ten ma takie same właściwości dołączania jak [Part: Part2DObject](/Part_Part2DObject/pl#Dane "Part Part2DObject/pl").

Elipsoida

* DANE**Promień1** (`Length`): Promień elipsoidy w kierunku Z. Domyślnie `2mm`.
* DANE**Promień2** (`Length`): Promień elipsoidy w kierunku X. Domyślnie `4mm`.
* DANE**Promień3** (`Length`): Promień elipsoidy w kierunku Y. Domyślnie `4mm`.
* DANE**Kąt1** (`Angle`): Kąt początkowy eliptycznych boków elipsoidy. Prawidłowy zakres: `-90° <= value < 90°`. Musi być mniejsza niż DANE**Kąt2**. Domyślnie `-90°`.
* DANE**Kąt2** (`Angle`): Kąt końcowy eliptycznych boków elipsoidy. Prawidłowy zakres: `-90° < value <= 90°`. Wartość ta musi być większa niż DANE**Kąt1**. Wartością domyślną jest `90°`. Jeśli całkowity kąt boków elipsy jest mniejszy niż `180°`, elipsoida zostanie obcięta i będzie miała płaską ścianę na górze i/lub na dole.
* DANE**Kąt3** (`Angle`): Całkowity kąt elipsoidy w jej płaszczyźnie XY. Prawidłowy zakres: `0° < value <= 360°`. Domyślna wartość to `360°`. Jeśli wartość jest mniejsza niż `360°`, wynikowa bryła będzie segmentem elipsoidy.

## Tworzenie skryptów

Zobacz również: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Skrypty w środowisku Część](/Part_scripting/pl "Part scripting/pl") i [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Elipsoida środowiska pracy Część jest tworzony za pomocą metody dokumentu `addObject()`.

```
ellipsoid = FreeCAD.ActiveDocument.addObject("Part::Ellipsoid", "myEllipsoid")

```

* Gdzie parametr `"myEllipsoid"` jest etykietą dla obiektu.
* Funkcja zwraca nowo utworzony obiekt.

Przykład:

```
import FreeCAD as App

doc = App.activeDocument()

ellipsoid = doc.addObject("Part::Ellipsoid", "myEllipsoid")
ellipsoid.Radius1 = 2
ellipsoid.Radius2 = 4
ellipsoid.Radius3 = 6
ellipsoid.Angle1 = -90
ellipsoid.Angle2 = 50
ellipsoid.Angle3 = 300
ellipsoid.Placement = App.Placement(App.Vector(1, 2, 3), App.Rotation(15, 0, 20))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Ellipsoid/pl&oldid=1302464>"