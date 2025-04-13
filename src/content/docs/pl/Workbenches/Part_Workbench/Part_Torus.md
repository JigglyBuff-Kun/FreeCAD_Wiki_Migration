---
title: Część Torus
---
|  |
| --- |
| Część: Torus |
| Lokalizacja w menu |
| Część → Bryła pierwotna → Torus |
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

Narzędzie ![](/images/Part_Torus.svg) **Torus** środowiska Część, tworzy parametryczną bryłę torusa, kształt zbliżony do pierścienia. Powstaje ona w wyniku przeciągnięcia profilu kolistego wokół okrągłej ścieżki. W układzie współrzędnych zdefiniowanym przez właściwość DANE**Umiejscowienie** kolista ścieżka torusa leży na płaszczyźnie XY, a jej środek znajduje się w punkcie odniesienia położenia.

Torus środowiska Część można przekształcić w fragment torusa, zmieniając jego właściwość DANE**Kąt3**. Zmieniając właściwości DANE**Kąt1** i / lub DANE**Kąt2**, profil pochylony może stać się fragmentem okręgu.

![](/images/Part_Torus_Example.png)

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Part_Torus.svg) Part Torus.
   * Wybierz z menu opcję **Część → Bryła pierwotna → ![](/images/Part_Torus.svg) Torus**.
2. Tworzony jest torus.
3. Opcjonalnie zmień wymiary i DANE**Umiejscowienie** torusa, wykonując jedną z poniższych czynności:
   * Kliknij dwukrotnie obiekt w oknie [Widok drzewa](/Tree_view/pl "Tree view/pl"):
     1. Otworzy się panel zadań **Geometric Primitives**.
     2. Zmień jedną lub więcej właściwości.
     3. Obiekt jest dynamicznie aktualizowany w oknie [widoku 3D](/3D_view "3D view").
     4. Naciśnij przycisk OK.
   * Zmień właściwości w [Edytor właściwości](/Property_editor/pl "Property editor/pl").
   * Zmień DANE**Umiejscowienie** za pomocą narzędzia ![](/images/Std_TransformManip.svg) [Std: Przemieszczenie](/Std_TransformManip/pl "Std TransformManip/pl").

## Przykład

![](/images/Part_Torus_Scripting_Example.png)

Torus środowiska pracy Część na przykładzie skryptu

Poniżej pokazano obiekt Torusa utworzony za pomocą [przykładowego skryptu](#Tworzenie_skrypt.C3.B3w).

## Uwagi

* Torus środowiska pracy Część można również utworzyć za pomocą narzędzia ![](/images/Part_Primitives.svg) [Utwórz geometrie pierwotne](/Part_Primitives/pl "Part Primitives/pl"). Za jego pomocą można określić wymiary i umiejscowienie w czasie tworzenia.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Torus wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Dołączenie

Obiekt ten ma takie same właściwości dołączania jak [Part: Part2DObject](/Part_Part2DObject/pl#Dane "Part Part2DObject/pl").

Torus

* DANE**Promień1** (`długość`): Promień kolistej ścieżki torusa. Wartość domyślna to `10mm`.
* DANE**Promień2** (`długość`): Promień okrągłego profilu torusa. Wartość domyślna to `2mm`.
* DANE**Kąt 1** (`Kąt` ): Kąt rozpoczęcia profilu kołowego. Prawidłowy zakres: `-180° <= wartość <= 180°`. Wartość domyślna to `-180°`.
* DANE**Kąt 2** (`Kąt` ): Kąt zakończenia profilu kołowego. Prawidłowy zakres: `-180° <= wartość <= 180°`. Wartość domyślna to `180°`. Jeśli całkowity kąt profilu kołowego jest mniejszy niż `360°`, profil będzie miał kształt tortu.
* DANE**Kąt 3** (`Kąt` ): Kąt ścieżki kołowej torusa. Poprawny zakres: `0° < wartość <= 360°`. Domyślnie jest to `360°`. Jeśli wartość jest mniejsza niż `360°`, to bryła wynikowa będzie odcinkiem torusa.

## Tworzenie skryptów

Zobacz również: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Skrypty w środowisku Część](/Part_scripting/pl "Part scripting/pl") i [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Torus środowiska pracy Część jest tworzony za pomocą metody dokumentu `addObject()`.

```
torus = FreeCAD.ActiveDocument.addObject("Part::Torus", "myTorus")

```

* Gdzie parametr `"myTorus"` jest etykietą dla obiektu.
* Funkcja zwraca nowo utworzony obiekt.

Przykład:

```
import FreeCAD as App

doc = App.activeDocument()

torus = doc.addObject("Part::Torus", "myTorus")
torus.Radius1 = 20
torus.Radius2 = 10
torus.Angle1 = -90
torus.Angle2 = 45
torus.Angle3 = 270
torus.Placement = App.Placement(App.Vector(1, 2, 3), App.Rotation(30, 45, 10))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Torus/pl&oldid=1467986>"