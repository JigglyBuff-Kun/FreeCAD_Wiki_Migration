---
title: Część Rura
---
|  |
| --- |
| Część: Rura |
| Lokalizacja w menu |
| Część → Bryła pierwotna → Utwórz rurę |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Utwórz geometrie pierwotne](/Part_Primitives/pl "Part Primitives/pl") |
|  |

## Opis

Polecenie ![](/images/Part_Tube.svg) **Rura** środowiska pracy Część tworzy parametryczną bryłę rury. W układzie współrzędnych zdefiniowanym przez właściwość DANE**Umiejscowienie** dolna ściana stożka leży na płaszczyźnie XY, a jej środek jest w punkcie początkowym.

![](/images/Part_Tube_Example.png)

## Użycie

### Tworzenie

1. Istnieje kilka sposobów wywołania polecenia:
   * Naciśnij przycisk ![](/images/Part_Tube.svg) **Utwórz rurę**.
   * Wybierz z menu opcję **Część → Bryła pierwotna → ![](/images/Part_Tube.svg) Utwórz rurę**.
2. Otworzy się panel zadań **Rura**, a podgląd rury zostanie wyświetlony w oknie [widoku 3D](/3D_view/pl "3D view/pl").
3. Określ wymiary.
4. Podgląd jest dynamicznie aktualizowany.
5. Naciśnij przycisk OK.
6. Rura zostanie utworzona.
7. Opcjonalnie zmień DANE**Umiejscowienie** rury funkcją [Edytor właściwości](/Property_editor/pl "Property editor/pl") lub za pomocą polecenia ![](/images/Std_TransformManip.svg) [Std Przemieszczenie](/Std_TransformManip/pl "Std TransformManip/pl").

### Edycja

1. Kliknij dwukrotnie rurę w oknie [Widok Drzewa](/Tree_view/pl "Tree view/pl").
2. Otworzy się panel zadań **Rura**.
3. Zmień jeden lub więcej wymiarów.
4. Rura jest dynamicznie aktualizowana w oknie [widoku 3D](/3D_view/pl "3D view/pl").
5. Naciśnij przycisk OK.

## Przykład

![](/images/Part_Tube_Scripting_Example.png)

Rura środowiska Część z przykładu skryptu

Poniżej przedstawiono obiekt Rury utworzony za pomocą przykładu [tworzenie skryptów](#Tworzenie_skryptów).

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Rura wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Dołączenie

Obiekt ten ma takie same właściwości dołączania jak [Part: Part2DObject](/Part_Part2DObject/pl#Dane "Part Part2DObject/pl").

Rura

* DANE**Wysokość** (`Length`): Wysokość rury. Domyślnie `10mm`.
* DANE**Promień wewnętrzny** (`Length`): Wewnętrzny promień rury. Musi być mniejszy niż DANE**Promień zewnętrzny**. Może mieć wartość `0`. Domyślnie `2mm`.
* DANE**Promień zewnętrzny** (`Length`): Zewnętrzny promień rury. Musi być większy niż DANE**Promień wewnętrzny**. Domyślnie `5mm`.

## Tworzenie skryptów

Poniżej przedstawiono obiekt Part Tube utworzony za pomocą przykładu [tworzenia skryptów](#Tworzenie_skryptów).

Obiekt Rura można utworzyć za pomocą metody `addTube()` ([dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")) modułu Kształty:

```
tube = Shapes.addTube(FreeCAD.ActiveDocument, "myTube")

```

* Gdzie parametr `"myTube"` jest etykietą dla obiektu.
* Funkcja zwraca nowo utworzony obiekt.

Przykład:

```
import FreeCAD as App
from BasicShapes import Shapes

doc = App.activeDocument()

tube = Shapes.addTube(FreeCAD.ActiveDocument, "myTube")
tube.Height = 20
tube.InnerRadius = 2
tube.OuterRadius = 3
tube.Placement = App.Placement(App.Vector(2, 4, 5), App.Rotation(60, 60, 30))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Tube/pl&oldid=1467985>"