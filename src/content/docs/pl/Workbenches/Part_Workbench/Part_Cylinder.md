---
title: Część Walec
---
|  |
| --- |
| Część: Walec |
| Lokalizacja w menu |
| Część → Bryła pierwotna → Walec |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Utwórz geometrie pierwotne](/Part_CreatePrimitives/pl "Part CreatePrimitives/pl") |
|  |

## Opis

Narzędzie ![](/images/Part_Cylinder.svg) **Walec** środowiska Część, tworzy parametryczną bryłę walca. Powstaje ona w wyniku wyciągnięcia łuku koła wzdłuż prostej ścieżki. W układzie współrzędnych zdefiniowanym przez właściwość DANE**Umiejscowienie** kolista ścieżka torusa leży na płaszczyźnie XY, a jej środek znajduje się w punkcie odniesienia położenia.

Walec środowiska pracy Część można przekształcić w fragment walca, zmieniając jego właściwość DANE**Kąt**.

![](/images/Part_Cylinder_Example.png)

## Użycie

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Part_Cylinder.svg) Część: Walec.
   * Wybierz opcję **Część → Bryła pierwotna → ![](/images/Part_Cylinder.svg) Walec** z menu.
2. Zostanie utworzony walec.
3. Opcjonalnie zmień wymiary i DANE**Umiejscowienie** walca, wykonując jedną z poniższych czynności:
   * Kliknij dwukrotnie obiekt w [widoku drzewa](/Tree_view/pl "Tree view/pl"):
     1. Otworzy się panel zadań **Pierwotne bryły geometryczne**.
     2. Zmień jedną lub więcej właściwości.
     3. Obiekt jest dynamicznie aktualizowany w oknie [widoku 3D](/3D_view/pl "3D view/pl").
     4. Naciśnij przycisk OK.
   * Zmień właściwości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").
   * Zmień DANE**Umiejscowienie** za pomocą ![](/images/Std_TransformManip.svg) [Std: Przemieszczenie](/Std_TransformManip/pl "Std TransformManip/pl").

## Przykład

![](/images/Part_Cylinder_Scripting_Example.png)

Walec środowiska pracy Część na przykładzie skryptu

Poniżej pokazano obiekt Walca utworzony za pomocą [przykładowego skryptu](#Tworzenie_skrypt.C3.B3w).

## Uwagi

* Walec środowiska pracy Część można również utworzyć za pomocą narzędzia ![](/images/Part_Primitives.svg) [Utworz geometrie pierwotne](/Part_Primitives/pl "Part Primitives/pl"). Za jego pomocą można określić wymiary i umiejscowienie w czasie tworzenia.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Walec wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Dołączenie

Obiekt ten ma takie same właściwości dołączania jak [Part: Part2DObject](/Part_Part2DObject/pl#Dane "Part Part2DObject/pl").

Walec

* DANE**Promień** (`długość`): Promień łuku okręgu, który definiuje walec. Wartość domyślna to `2mm`.
* DANE**Wysokość** (`długość`): Wysokość walca. Wartość domyślna to `10mm`.
* DANE**Kąt** (`kąt`): Kąt łuku okręgu, który definiuje walec. Poprawny zakres: `0° < wartość <= 360°`. Domyślnie jest to `360°`. Jeśli jest ona mniejsza niż `360°`, bryła wynikowa będzie wycinkiem walca.

Graniastosłup

* DANE**Kąt pierwszy** (`kąt`): Kąt między kierunkiem wyciągania walca a jego dodatnią osią Z, mierzony wokół jego osi Y. Kąt jest dodatni w kierunku dodatniej osi X. Poprawny zakres: `0° <= wartość < 90°`. Wartość domyślna to `0°`. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
* DANE**Kąt drugi** (`kąt`): Kąt między kierunkiem wyciągania walca a jego dodatnią osią Z, mierzony wokół jego osi X. Kąt jest dodatni w kierunku dodatniej osi Y. Poprawny zakres: `0° <= wartość < 90°`. Wartość domyślna to `0°`. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

## Tworzenie skryptów

Zobacz również: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Skrypty w środowisku Część](/Part_scripting/pl "Part scripting/pl") i [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Walec środowiska pracy Część jest tworzony za pomocą metody dokumentu `addObject()`.

```
cylinder = FreeCAD.ActiveDocument.addObject("Part::Cylinder", "myCylinder")

```

* Gdzie parametr `"myCylinder"` jest etykietą dla obiektu.
* Funkcja zwraca nowo utworzony obiekt.

Przykład:

```
import FreeCAD as App

doc = App.activeDocument()

cylinder = doc.addObject("Part::Cylinder", "myCylinder")
cylinder.Radius = 10
cylinder.Height = 50
cylinder.Placement = App.Placement(App.Vector(5, 10, 15), App.Rotation(75, 60, 30))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Cylinder/pl&oldid=1467984>"