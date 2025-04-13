---
title: Część Okrąg
---
|  |
| --- |
| Part Okrąg |
| Lokalizacja w menu |
| Część → Utwórz geometrie pierwotne ... → Okrąg |
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

![](/images/Part_Circle.svg) **Okrąg** środowiska pracy Część to parametryczny kształt, który można utworzyć za pomocą polecenia ![](/images/Part_Primitives.svg) [Utwórz geometrie pierwotne ...](/Part_Primitives/pl "Part Primitives/pl"). W układzie współrzędnych zdefiniowanym przez właściwość DANE**Umiejscowienie**, okrąg leży na płaszczyźnie XY ze środkiem w punkcie początkowym.

Okrąg częściowy jest w rzeczywistości zamkniętym łukiem kołowym w kierunku przeciwnym do ruchu wskazówek zegara, można go przekształcić w łuk, zmieniając jego właściwości DANE**Kąt1** i / lub DANE**Kąt2**.

![](/images/Part_Circle_Example.png)

## Użycie

Zobacz stronę [Geometrie pierwotne](/Part_Primitives/pl#Użycie "Part Primitives/pl").

Okrąg środowiska pracy Część można alternatywnie utworzyć, wybierając trzy punkty:

1. W panelu zadań ![](/images/Part_Primitives.svg) [Pierwotne bryły parametryczne](/Part_Primitives/pl "Part Primitives/pl") wybierz opcję **![](/images/Part_Circle.svg) Okrąg** z rozwijanej listy.
2. Naciśnij przycisk Z trzech punktów.
3. Wybierz trzy wierzchołki w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Nie ma potrzeby przytrzymywania klawisza Ctrl.
4. Zostanie utworzony okrąg.
5. Wybrane wierzchołki są używane tylko w czasie tworzenia do obliczenia parametrów dla właściwości DANE**Promień** i DANE**Umiejscowienie** okręgu.

## Przykład

![](/images/Part_Circle_Scripting_Example.png)

Okrąg środowiska pracy Część na przykładzie skryptu

Poniżej pokazano obiekt Okrąg utworzony za pomocą [przykładowego skryptu](#Tworzenie_skryptów).

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Okrąg wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Dołączenie

Obiekt ten ma takie same właściwości dołączania jak [Part: Part2DObject](/Part_Part2DObject/pl#Dane "Part Part2DObject/pl").

Podstawa

* DANE**Promień** (`Length`): Promień okręgu lub łuku kołowego. Domyślnie `2mm`.
* DANE**Kąt1** (`Angle`): Kąt początkowy łuku kołowego. Prawidłowy zakres: `0° < wartość <= 360°`. Domyślnie `0°`.
* DANE**Kąt2** (`Angle`): Kąt końcowy łuku kołowego. Prawidłowy zakres: `0° < value <= 360°`. Domyślnie `360°`. Jeśli DANE**Kąt1** i DANE**Kąt2** są równe lub jeśli jeden kąt ma wartość `0°`, a drugi `360°`, tworzony jest pełny okrąg.

## Tworzenie skryptów

Zobacz również: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Skrypty w środowisku Część](/Part_scripting/pl "Part scripting/pl") i [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Okrąg środowiska pracy Część jest tworzona za pomocą metody `addObject()`.

```
circle = FreeCAD.ActiveDocument.addObject("Part::Circle", "myCircle")

```

* Gdzie parametr `"myCircle"` jest etykietą dla obiektu.
* Funkcja zwraca nowo utworzony obiekt.

Przykład:

```
import FreeCAD as App

doc = App.activeDocument()

circle = doc.addObject("Part::Circle", "myCircle")
circle.Radius = 10
circle.Angle1 = 45
circle.Angle2 = 225
circle.Placement = App.Placement(App.Vector(1, 2, 3), App.Rotation(30, 45, 10))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Circle/pl&oldid=1302456>"