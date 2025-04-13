---
title: Część Sześcian
---
|  |
| --- |
| Część: Sześcian |
| Lokalizacja w menu |
| Część → Bryła pierwotna → Sześcian |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Bryły pierwotne](/Part_Primitives/pl "Part Primitives/pl") |
|  |

## Opis

Polecenie ![](/images/Part_Box.svg) **Sześcian** środowiska pracy Część tworzy parametryczną bryłę prostopadłościanu [regularny prostopadłościan](https://en.wikipedia.org/wiki/Cuboid#Rectangular_cuboid). W układzie współrzędnych zdefiniowanym przez właściwość DANE**Umiejscowienie** dolna ściana prostopadłościanu leży na płaszczyźnie XY, jej lewy przedni narożnik znajduje się w punkcie odniesienia położenia, a przednia krawędź jest równoległa do osi X.

![](/images/Part_Box_Example.png)

## Użycie

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Part_Box.svg) **Sześcian**.
   * Wybierz z menu opcję **Część → Bryła pierwotna → ![](/images/Part_Box.svg) Sześcian**.
2. Prostopadłościan zostanie utworzony.
3. Opcjonalnie zmień wymiary i DANE**Umiejscowienie** prostopadłościanu, wykonując jedną z poniższych czynności:
   * Kliknij dwukrotnie obiekt w oknie [Widok drzewa](/Tree_view/pl "Tree view/pl"):
     1. Otworzy się panel zadań **Pierwotne bryły geometryczne**.
     2. Zmień jedną lub więcej właściwości.
     3. Obiekt jest dynamicznie aktualizowany w oknie [widoku 3D](/3D_view/pl "3D view/pl").
     4. Naciśnij przycisk OK.
   * Zmień właściwości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").
   * Zmień DANE**Umiejscowienie** za pomocą ![](/images/Std_TransformManip.svg) [Std: Przemieszczenie](/Std_TransformManip/pl "Std TransformManip/pl").

## Przykład

![](/images/Part_Box_Scripting_Example.png)

Sześcian środowiska pracy Część na przykładzie skryptu

Poniżej pokazano obiekt Sześcian utworzony za pomocą [przykładowego skryptu](#Tworzenie_skrypt.C3.B3w).

## Uwagi

* Prostopadłościan środowiska pracy Część można również utworzyć za pomocą narzędzia ![](/images/Part_Primitives.svg) [Utwórz geometrie pierwotne ...](/Part_Primitives/pl "Part Primitives/pl"). Za jego pomocą można określić wymiary i umiejscowienie w czasie tworzenia.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Prostopadłościan wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Dołączenie

Obiekt ten ma takie same właściwości dołączania jak [Part: Part2DObject](/Part_Part2DObject/pl#Dane "Part Part2DObject/pl").

Sześcian

* DANE**Długość** (`długość`): Długość sześcianu. Jest to wymiar w kierunku X. Wartość domyślna to `10mm`.
* DANE**Szerokość** (`długość`): Szerokość sześcianu. Jest to wymiar w kierunku Y. Wartość domyślna to `10mm`.
* DANE**Wysokość** (`długość`): Wysokość sześcianu. Jest to wymiar w kierunku Z. Wartość domyślna to `10mm`.

## Tworzenie skryptów

Zobacz również: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Skrypty w środowisku Część](/Part_scripting/pl "Part scripting/pl") i [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Sześcian środowiska pracy Część jest tworzony za pomocą metody `addObject()`.

```
box = FreeCAD.ActiveDocument.addObject("Part::Box", "myBox")

```

* Gdzie parametr `myBox` jest etykietą dla obiektu prostopadłościanu.
* Zwraca nowo utworzony obiekt typu prostopadłościan.

Przykład:

```
import FreeCAD as App

doc = App.activeDocument()

box = doc.addObject("Part::Box", "myBox")
box.Length = 4
box.Width = 8
box.Height = 12
box.Placement = App.Placement(App.Vector(1, 2, 3), App.Rotation(75, 60, 30))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Box/pl&oldid=1467989>"