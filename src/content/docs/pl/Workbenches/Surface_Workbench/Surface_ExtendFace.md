---
title: Powierzchnia 3D Rozszerz powierzchnię
---
|  |
| --- |
| Powierzchnia 3D: Rozszerz powierzchnię |
| Lokalizacja w menu |
| Surface → Extend face |
| Środowisko pracy |
| [Powierzchnia 3D](/Surface_Workbench/pl "Surface Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie ![](/images/Surface_ExtendFace.svg) **Rozszerz powierzchnię** ekstrapoluje istniejącą ścianę lub powierzchnię na jej granicach za pomocą lokalnych parametrów U i V.

![](/images/Surface_ExtendFace_base_example.png) ![](/images/Surface_ExtendFace_example.png)

Po lewej: oryginalna powierzchnia. Po prawej: powierzchnia powiększona.

## Użycie

1. Upewnij się, że masz obiekt, który ma powierzchnie. Obiekt może być utworzony w środowisku pracy ![](/images/Workbench_Surface.svg). [Powierzchnia 3D](/Surface_Workbench/pl "Surface Workbench/pl"), ale może to być również dowolny inny obiekt, na przykład utworzony za pomocą środowisk ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl") lub ![](/images/Workbench_PartDesign.svg). [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").
2. Wybierz ścianę do rozszerzenia, klikając ją w oknie [widoku 3D](/3D_view/pl "3D view/pl").
3. Naciśnij przycisk ![](/images/Surface_ExtendFace.svg). **Rozszerz powierzchnię**.

## Opcje

To polecenie nie ma żadnych opcji. Może działać z zaznaczeniem wstępnym lub jego brakiem.

## Właściwości

Obiekt **Rozszerz powierzchnię** *(klasa `Surface::Extend`)* jest pochodną podstawowej klasy [Część: Cecha](/Part_Feature/pl "Part Feature/pl") *(klasa `Part::Feature`, poprzez klasę podrzędną `Part::Spline`)*, dlatego też dzieli z nią wszystkie jej właściwości.

Oprócz właściwości opisanych na stronie [Cecha części](/Part_Feature/pl "Part Feature/pl"), obiekt Rozszerz powierzchnię, posiada następujące właściwości w [edytorze właściwości](/Property_editor/pl "Property editor/pl").

### Dane

Podstawa

* DANE**Ściana** (`LinkSub`): element podrzędny obiektu, który zostanie rozszerzony. Musi to być powierzchnia.
* DANE**Tolerancja** (`FloatConstraint`): wartość domyślna to `0.1`.

* DANE**Extend UNeg** (`FloatConstraint`): Wartość domyślna to `0.05`. Stosunek lokalnego parametru U, który zostanie rozszerzony w kierunku ujemnym.
* DANE**Extend UPos** (`FloatConstraint`): Wartość domyślna to `0.05`. Stosunek lokalnego parametru U, który zostanie rozszerzony w kierunku dodatnim.
* DANE**Extend USymetric** (`Bool`): Wartość domyślna to `PRAWDA`, w którym to przypadku DANE**Extend UNeg** i DANE**Extend UPos** będą miały tę samą wartość.

* DANE**Extend VNeg** (`FloatConstraint`): Wartość domyślna to `0.05`. Stosunek lokalnego V, który zostanie rozszerzony w kierunku ujemnym.
* DANE**Extend VPos** (`FloatConstraint`): Wartość domyślna to `0.05`. Stosunek lokalnego kierunku V, który zostanie rozszerzony w kierunku dodatnim.
* DANE**Extend VSymetric** (`Bool`): Wartość domyślna to `PRAWDA`, w którym to przypadku DANE**Extend VNeg** i DANE**Extend VPos** będą miały tę samą wartość.

* DANE**SampleU** (`IntegerConstraint`): Wartość domyślna to `32`.
* DANE**SampleV** (`IntegerConstraint`): Wartość domyślna to `32`.

### Widok

Podstawa

* WIDOK**Punkty kontrolne** (`Bool`): wartość domyślna to `FAŁSZ`, Jeśli ustawiono `PRAWDA`, wyświetlona zostanie nakładka z punktami kontrolnymi krzywej.

## Tworzenie skryptów

*Zobacz również:* [FreeCAD podstawy tworzenia skryptów](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie Surface Extend może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") poprzez dodanie obiektu `Surface::Extend`.

* Powierzchnia do rozszerzenia musi być przypisana jako struktura danych [LinkSub](/FeaturePython_Custom_Properties/pl#App::PropertyLinkSub "FeaturePython Custom Properties/pl") do właściwości `Face` obiektu. Musi ona zawierać tylko jedną powierzchnię.

```
import FreeCAD as App
import Draft

doc = App.newDocument()

a = App.Vector(-20, -20, 0)
b = App.Vector(-18, 25, 0)
c = App.Vector(60, 26, 0)
d = App.Vector(33, -20, 0)

points = [a, App.Vector(-20, -8, 0), b, c,
          App.Vector(37, 4, 0), d,
          App.Vector(-2, -18, 0), a]
obj = Draft.make_bspline(points)
doc.recompute()

if App.GuiUp:
    obj.ViewObject.Visibility = False

surf = doc.addObject("Surface::Filling", "Surface")
surf.BoundaryEdges = [(obj, "Edge1")]
doc.recompute()

# ---------------------------------------------------------
points_spl = [App.Vector(-10, 0, 2),
              App.Vector(4, 0, 7),
              App.Vector(18, 0, -5),
              App.Vector(25, 0, 0),
              App.Vector(30, 0, 0)]
aux_edge = Draft.make_bspline(points_spl)
doc.recompute()

surf.UnboundEdges = [(aux_edge, "Edge1")]
doc.recompute()

# ---------------------------------------------------------
surf_extended = doc.addObject("Surface::Extend", "Surface")
surf_extended.Face = [surf, "Face1"]
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_ExtendFace/pl&oldid=1467991>"