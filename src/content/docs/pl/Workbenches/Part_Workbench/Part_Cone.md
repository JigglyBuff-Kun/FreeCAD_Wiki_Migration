---
title: Część Stożek
---
|  |
| --- |
| Część: Stożek |
| Lokalizacja w menu |
| Część → Bryła pierwotna → Stożek |
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

Polecenie ![](/images/Part_Cone.svg) **Stożek** środowiska pracy Część tworzy parametryczną bryłę stożka. W układzie współrzędnych zdefiniowanym przez właściwość DANE**Umiejscowienie** dolna ściana stożka leży na płaszczyźnie XY, a jej środek jest w punkcie początkowym.

Domyślnie stożek środowiska Części jest ścięty. Można go przekształcić w pełny, nieobcięty stożek, zmieniając jego właściwość DANE**Promień1** lub DANE**Promień2** na zero. Można go przekształcić w fragment stożka, zmieniając jego właściwość DANE**Kąt**.

![](/images/Part_Cone_Example.png)

## Użycie

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Part_Cone.svg) Stożek.
   * Wybierz z menu opcję **Część → Bryła pierwotna → ![](/images/Part_Cone.svg) Stożek**.
2. Tworzony jest stożek.
3. Opcjonalnie zmień wymiary i DANE**Umiejscowienie** stożka, wykonując jedną z poniższych czynności:
   * Kliknij dwukrotnie obiekt w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl"):
     1. Otworzy się panel zadań **Pierwotne bryły parametryczne**.
     2. Zmień jedną lub więcej właściwości.
     3. Obiekt jest dynamicznie aktualizowany w oknie [widoku 3D](/3D_view/pl "3D view/pl").
     4. Naciśnij przycisk OK.
   * Zmień właściwości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").
   * Zmień DANE**Umiejscowienie** za pomocą narzędzia ![](/images/Std_TransformManip.svg) [Std: Przemieszczenie](/Std_TransformManip/pl "Std TransformManip/pl").

## Przykład

![](/images/Part_Cone_Scripting_Example.png)

Stożek środowiska pracy Część na przykładzie skryptu

Poniżej pokazano obiekt Stożka utworzony za pomocą [przykładowego skryptu](#Tworzenie_skrypt.C3.B3w).

## Uwagi

* Stożek środowiska pracy Część można również utworzyć za pomocą narzędzia ![](/images/Part_Primitives.svg) [Utwórz geometrie pierwotne](/Part_Primitives/pl "Part Primitives/pl"). Za jego pomocą można określić wymiary i umiejscowienie w czasie tworzenia.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Stożek wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Dołączenie

Obiekt ten ma takie same właściwości dołączania jak [Part: Part2DObject](/Part_Part2DObject/pl#Dane "Part Part2DObject/pl").

Stożek

* DANE**Promień1** (`długość`): Promień dolnej powierzchni stożka. Może mieć wartość `0mm`, jeśli parametr DANE**Promień2** jest większy niż `0mm`. Wartość domyślna to `2mm`.
* DANE**Promień2** (`długość`): Promień górnej powierzchni stożka. Może mieć wartość `0mm`, jeśli DANE**Promień1** jest większy niż `0mm`. Wartość domyślna to `4mm`.
* DANE**Wysokość** (`długość`): Wysokość stożka. Wartość domyślna to `10mm`.
* DANE**Kąt** (`kąt`): Kąt łuku okręgu, który definiuje górną i dolną ścianę stożka. Poprawny zakres: `0° < wartość <= 360°`. Domyślnie jest to `360°`. Jeśli wartość jest mniejsza niż `360°`, to bryła wynikowa będzie segmentem stożka.

## Tworzenie skryptów

Zobacz również: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Skrypty w środowisku Część](/Part_scripting/pl "Part scripting/pl") i [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Stożek środowiska pracy Część jest tworzony za pomocą metody `addObject()`.

```
cone = FreeCAD.ActiveDocument.addObject("Part::Cone", "myCone")

```

* Gdzie parametr `"myCone"` jest etykietą dla obiektu.
* Funkcja zwraca nowo utworzony obiekt.

Przykład:

```
import FreeCAD as App

doc = App.activeDocument()

cone = doc.addObject("Part::Cone", "myCone")
cone.Radius1 = 5
cone.Radius2 = 10
cone.Height = 50
cone.Angle = 270
cone.Placement = App.Placement(App.Vector(1, 2, 3), App.Rotation(30, 60, 15))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Cone/pl&oldid=1467988>"