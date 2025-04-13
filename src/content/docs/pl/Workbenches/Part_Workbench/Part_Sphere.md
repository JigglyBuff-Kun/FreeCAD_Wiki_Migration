---
title: Część Sfera
---
|  |
| --- |
| Część: Sfera |
| Lokalizacja w menu |
| Część → Bryła pierwotna → Sfera |
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

Polecenie ![](/images/Part_Sphere.svg) Polecenie **Sfera** środowiska pracy Część tworzy parametryczną bryłę sfery. Jest ona wynikiem obracania profilu łuku okręgu wokół osi. W układzie współrzędnych zdefiniowanym przez właściwość DANE**Umiejscowienie** środek kuli jest umieszczony w punkcie początkowym, a jej osią obrotu jest oś Z.

Sfera środowiska pracy Część może być obcięta u góry i/lub u dołu przez zmianę jej właściwości DANE**Kąt1** i/lub DANE**Kąt2**. Można ją przekształcić w segment sfery, zmieniając jej właściwość DANE**Kąt3**.

![](/images/Part_Sphere_Example.png)

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Part_Sphere.svg) Sfera.
   * Wybierz z menu opcję **Część → Bryła pierwotna → ![](/images/Part_Sphere.svg) Sfera**.
2. Sfera zostanie utworzona.
3. Opcjonalnie zmień wymiary i DANE**Umiejscowienie** sfery, wykonując jedną z poniższych czynności:
   * Kliknij dwukrotnie obiekt w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl"):
     1. Otworzy się panel zadań **Pierwotne bryły parametryczne**.
     2. Zmień jedną lub więcej właściwości.
     3. Obiekt jest dynamicznie aktualizowany w oknie [widoku 3D](/3D_view/pl "3D view/pl").
     4. Naciśnij przycisk OK.
   * Zmień właściwości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").
   * Zmień DANE**Umiejscowienie** za pomocą narzędzia ![](/images/Std_TransformManip.svg) [Std: Przemieszczenie](/Std_TransformManip/pl "Std TransformManip/pl").

## Przykład

![](/images/Part_Sphere_Scripting_Example.png)

Sfera środowiska pracy Część na przykładzie skryptu

Poniżej pokazano obiekt Sfera utworzony za pomocą [przykładowego skryptu](#Tworzenie_skrypt.C3.B3w).

## Uwagi

* Sferę środowiska pracy Część można również utworzyć za pomocą narzędzia ![](/images/Part_Primitives.svg) [Utwórz geometrie pierwotne](/Part_Primitives/pl "Part Primitives/pl"). Za jego pomocą można określić wymiary i umiejscowienie w czasie tworzenia.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Sfera wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Dołączenie

Obiekt ten ma takie same właściwości dołączania jak [Part: Part2DObject](/Part_Part2DObject/pl#Dane "Part Part2DObject/pl").

Kula

* DANE**Promień** (`długość`): Promień sfery. Wartość domyślna to `5mm`.
* DANE**Kąt1** (`kąt`): Kąt rozpoczęcia profilu łuku okręgu sfery. Poprawny zakres: `-90° <= wartość <= 90°`. Nie może być równy parametrowi DANE**Kąt2**. Domyślnie jest to wartość `-90°`.
* DANE**Kąt2** (`kąt`): Kąt końcowy profilu łuku kołowego sfery. Ważny zakres: `-90° <= wartość <= 90°`. Nie może być równy parametrowi DANE**Kąt1**. Wartość domyślna to `90°`. Jeśli całkowity kąt profilu łuku jest mniejszy niż `180°`, kula zostanie obcięta i będzie miała płaską powierzchnię u góry i / lub u dołu.
* DANE**Kąt3** (`kąt`): Całkowity kąt obrotu sfery. Dozwolony zakres: `0° < wartość <= 360°`. Domyślnie jest to wartość `360°`. Jeśli wartość jest mniejsza niż `360°`, to bryła wynikowa będzie fragmentem kuli.\* DANE**Promień** (`długość`): Promień sfery. Wartość domyślna to `5mm`.
* DANE**Kąt1** (`kąt`): Kąt rozpoczęcia profilu łuku okręgu sfery. Poprawny zakres: `-90° <= wartość <= 90°`. Nie może być równy parametrowi DANE**Kąt2**. Domyślnie jest to wartość `-90°`.
* DANE**Kąt2** (`kąt`): Kąt końcowy profilu łuku kołowego sfery. Ważny zakres: `-90° <= wartość <= 90°`. Nie może być równy parametrowi DANE**Kąt1**. Wartość domyślna to `90°`. Jeśli całkowity kąt profilu łuku jest mniejszy niż `180°`, kula zostanie obcięta i będzie miała płaską powierzchnię u góry i / lub u dołu.
* DANE**Kąt3** (`kąt`): Całkowity kąt obrotu sfery. Dozwolony zakres: `0° < wartość <= 360°`. Domyślnie jest to wartość `360°`. Jeśli wartość jest mniejsza niż `360°`, to bryła wynikowa będzie fragmentem kuli.

## Tworzenie skryptów

Zobacz również: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Skrypty w środowisku Część](/Part_scripting/pl "Part scripting/pl") i [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Sfera środowiska pracy Część jest tworzona za pomocą metody `addObject()`.

```
sphere = FreeCAD.ActiveDocument.addObject("Part::Sphere", "mySphere")

```

* Gdzie parametr `"mySphere"` jest etykietą dla obiektu.
* Funkcja zwraca nowo utworzony obiekt.

Przykład:

```
import FreeCAD as App

doc = App.activeDocument()

sphere = doc.addObject("Part::Sphere", "mySphere")
sphere.Radius = 20
sphere.Angle1 = -30
sphere.Angle2 = 45
sphere.Angle3 = 90
sphere.Placement = App.Placement(App.Vector(3, 9, 11), App.Rotation(75, 60, 30))

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Sphere/pl&oldid=1467987>"