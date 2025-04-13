---
title: Część Elipsa
---
|  |
| --- |
| Część Elipsoida |
| Lokalizacja w menu |
| Część → Utwórz geometrie pierwotne ... → Elipsa |
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

![](/images/Part_Ellipse.svg) **Elipsa** środowiska pracy Część to parametryczny kształt, który można utworzyć za pomocą polecenia ![](/images/Part_Primitives.svg) [Utwórz geometrie pierwotne ...](/Part_Primitives/pl "Part Primitives/pl"). W układzie współrzędnych zdefiniowanym przez właściwość DANE**Umiejscowienie**, elipsa leży na płaszczyźnie XY ze środkiem w punkcie początkowym. Jej oś główna jest równoległa do osi X.

Elipsa częściowy jest w rzeczywistości zamkniętym łukiem kołowym w kierunku przeciwnym do ruchu wskazówek zegara, można go przekształcić w łuk, zmieniając jego właściwości DANE**Kąt1** i / lub DANE**Kąt2**.

![](/images/Part_Ellipse_Example.png)

## Użycie

Zobacz stronę [Geometrie pierwotne](/Part_Primitives/pl#Użycie "Part Primitives/pl").

## Przykład

![](/images/Part_Ellipse_Scripting_Example.png)

Elipsa środowiska pracy Część na przykładzie skryptu

Poniżej pokazano obiekt Elipsy utworzony za pomocą [przykładowego skryptu](#Tworzenie_skryptów).

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Elipsa wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Dołączenie

Obiekt ten ma takie same właściwości dołączania jak [Part: Part2DObject](/Part_Part2DObject/pl#Dane "Part Part2DObject/pl").

Podstawa

* DANE**Główny promień** (`Length`): Główny promień elipsy lub łuku eliptycznego. Domyślnie `4mm`.
* DANE**Mniejszy promień** (`Length`): Mniejszy promień elipsy lub łuku eliptycznego. Domyślnie `2mm`.
* DANE**Kąt1** (`Angle`): Kąt początkowy łuku eliptycznego. Prawidłowy zakres: `0° < value <= 360°`. Domyślnie `0°`.
* DANE**Kąt2** (`Angle`): Kąt końcowy łuku eliptycznego. Prawidłowy zakres: `0° < wartość <= 360°`. Domyślnie `360°`. Jeśli DANE**Kąt1** i DANE**Kąt2** są równe lub jeśli jeden kąt ma wartość `0°`, a drugi `360°`, tworzona jest pełna elipsa.

## Tworzenie skryptów

Zobacz również: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Skrypty w środowisku Część](/Part_scripting/pl "Part scripting/pl") i [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Elipa środowiska pracy Część jest tworzony za pomocą metody dokumentu `addObject()`.

```
ellipse = FreeCAD.ActiveDocument.addObject("Part::Ellipse", "myEllipse")

```

* Gdzie parametr `"myEllipse"` jest etykietą dla obiektu.
* Funkcja zwraca nowo utworzony obiekt.

Przykład:

```
import FreeCAD as App

doc = App.activeDocument()

ellipse = doc.addObject("Part::Ellipse", "myEllipse")
ellipse.MajorRadius = 20
ellipse.MinorRadius = 10
ellipse.Angle1 = 45
ellipse.Angle2 = 135
ellipse.Placement = App.Placement(App.Vector(1, 2, 3), App.Rotation(30, 45, 10))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Ellipse/pl&oldid=1302462>"