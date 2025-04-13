---
title: Powierzchnia 3D Krzywa łącząca
---
|  |
| --- |
| Powierzchnia 3D: Krzywa łącząca |
| Lokalizacja w menu |
| Powierzchnia → Krzywa łącząca |
| Środowisko pracy |
| [Powierzchnia 3D](/Surface_Workbench/pl "Surface Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.21 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie **Krzywa łącząca** tworzy krzywą Bezier'a między dwiema krawędziami, z zachowaniem pożądanej ciągłości.

Geometria bazowa może należeć do krzywych utworzonych za pomocą środowiska [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") lub [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), ale może również należeć do obiektów bryłowych, takich jak te utworzone za pomocą środowiska [Część](/Part_Workbench/pl "Part Workbench/pl").

![](/images/Surface_BlendCurve_G3_example.png)
![](/images/Surface_BlendCurve_Comb.png)

Krzywa łączenia powierzchni łącząca dwie krawędzie z ciągłością G3. Pomarańczowy wielokąt reprezentuje punkty kontrolne. Grzebień krzywizny (z zewnętrznego środowiska pracy [Krzywe](/Curves_Workbench/pl "Curves Workbench/pl")) jest gładki w punktach styku.

## Użycie

1. Wybierz dwie krawędzie w oknie [widoku 3D](/3D_view/pl "3D view/pl").
2. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Surface_BlendCurve.svg) **Krzywa łącząca**.
   * Wybierz z menu opcję **Surface → ![](/images/Surface_BlendCurve.svg) Krzywa łącząca**.
3. Dostosuj kształt krzywej we właściwościach obiektu **Dane**.

## Właściwości

Krzywa łącząca jest pochodną podstawowej klasy [Część: Cecha](/Part_Feature/pl "Part Feature/pl") *(`Part::Feature`, poprzez klasę podrzędną `Part::Spline`)*, dlatego też dzieli z nią wszystkie jej właściwości.

Oprócz właściwości opisanych na stronie [Część: Cecha](/Part_Feature/pl "Part Feature/pl"), krzywa mieszania powierzchni ma następujące właściwości w [edytorze właściwości](/Property_editor/pl "Property editor/pl").

### Dane

Krzywa łącząca

* DANE**Start Edge** (`LinkSub`): Pierwsza krawędź wejściowa.
* DANE**Start Continuity** (`Integer`): Geometryczna wartość ciągłości
* DANE**Start Parameter** (`Float`): Znormalizowany parametr wzdłuż krawędzi; od `0.0` (początek krawędzi) do `1.0` *(koniec krawędzi)*.
* DANE**Start Size** (`Float`): Rozmiar stycznej.
* DANE**End Edge** (`LinkSub`): Druga krawędź wejściowa.
* DANE**End Continuity** (`Integer`): Geometryczna wartość ciągłości
* DANE**End Parameter** (`Float`): Znormalizowany parametr wzdłuż krawędzi; od `0.0` (początek krawędzi) do `1.0` '**(koniec krawędzi).**
* DANE**End Size** (`Float`): Rozmiar stycznej.

### Widok

Baza

* WIDOK**Control Points** (`Bool`): wartość domyślna to `FAŁSZ`, Jeśli ustawiono `PRAWDA`, wyświetlona zostanie nakładka z punktami kontrolnymi krzywej.

## Tworzenie skryptów

*Zobacz również:* [FreeCAD podstawy tworzenia skryptów](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie Blend Curve może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") poprzez dodanie obiektu `Surface::FeatureBlendCurve`.

* Krawędzie, które mają być użyte do zdefiniowania krzywej, muszą być przypisane jako [Struktura danych LinkSub](/FeaturePython_Custom_Properties/pl#App::PropertyLinkSub "FeaturePython Custom Properties/pl") do właściwości `StartEdge` i `EndEdge` obiektu.
* Wszystkie obiekty z krawędziami muszą zostać obliczone, zanim będą mogły zostać użyte jako dane wejściowe dla właściwości obiektu Blend Curve.

```
import FreeCAD as App
import Draft

doc = App.newDocument()

points1 = [App.Vector(-20, -20, 0), App.Vector(-20, -8, 0), App.Vector(-17, 7, 0), App.Vector(-18, 25, 0)]
obj1 = Draft.make_bspline(points1)

points2 = [App.Vector(60, 26, 0), App.Vector(37, 4, 0), App.Vector(33, -20, 0)]
obj2 = Draft.make_bspline(points2)

doc.recompute()

bcurve = doc.addObject("Surface::FeatureBlendCurve","BlendCurve")
bcurve.StartEdge = (obj1, 'Edge1')
bcurve.EndEdge = (obj2, 'Edge1')
bcurve.EndParameter = 1.00
bcurve.StartSize = -5.00
bcurve.EndSize = -5.00

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_BlendCurve/pl&oldid=1468058>"