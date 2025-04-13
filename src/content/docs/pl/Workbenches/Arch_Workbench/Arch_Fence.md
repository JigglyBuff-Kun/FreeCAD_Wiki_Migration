---
title: Architektura Ogrodzenie
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| Architektura: Ogrodzenie |
| Lokalizacja w menu |
| 3D / BIM → Ogrodzenie |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie **Ogrodzenie** jest obiektem, który buduje ogrodzenie poprzez powtarzanie pojedynczego słupka i sekcji wzdłuż danej ścieżki.

![](/images/Arch_Fence_description_example.png)

## Użycie

### Tworzenie od podstaw

1. Użyj wybranego środowiska pracy, aby utworzyć pojedynczy słupek ogrodzenia i pojedynczą sekcję.
2. Stwórz ścieżkę, którą ma podążać ogrodzenie, używając środowiska pracy [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") lub [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl").
3. Przełącz się z powrotem do środowiska [BIM](/BIM_Workbench "BIM Workbench").
4. Wybierz sekcję, słupek i ścieżkę dokładnie w tej kolejności.
5. Naciśnij przycisk ![](/images/Arch_Fence.svg) **Ogrodzenie**.

## Opcje

Na razie narzędzie przyjmuje następujące założenia

1. Ścieżka jest rysowana na płaszczyźnie XY.
2. Przekrój i słupek są rysowane w punkcie początkowym, tak aby stały pionowo w widoku z przodu.

## Właściwości

### Dane

* DANE**Ścieżka**: Ścieżka, którą powinno podążać ogrodzenie.
* DANE**Słupek**: Pojedynczy słupek ogrodzenia do powtórzenia.
* DANE**Sekcja**: Pojedyncza sekcja do powtórzenia.
* DANE**lLiczba słupków**: Całkowita liczba słupków użytych do budowy ogrodzenia. Jest ona obliczana automatycznie.
* DANE**lLiczba sekcji**: Całkowita liczba sekcji użytych do budowy ogrodzenia. Jest ona obliczana automatycznie.

### Widok

* WIDOK**Używaj oryginalnych kolorów**: Po ustawieniu na `Prawda` ogrodzenie użyje kolorów z oryginalnej sekcji i słupka. W przeciwnym razie do pokolorowania ogrodzenia zostanie użyty Kolor Kształtu ogrodzenia.

## Uwagi

* Obiekt Ogrodzenie został wprowadzony w FC v0.19 przez użytkownika furti.
* [Wątek na forum](https://forum.freecadweb.org/viewtopic.php?t=36149) omawiający funkcjonalność Ogrodzenia.

## Tworzenie skryptów

Narzędzie **Ogrodzenie** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
Fence = buildFence(section, post, path)

```

Przykład:

```
import FreeCAD
import Part
import Arch

parts = []

parts.append(Part.makeBox(2000, 50, 30, FreeCAD.Vector(0, 0, 1000 - 30)))
parts.append(Part.makeBox(2000, 50, 30))
parts.append(Part.makeBox(20, 20, 1000 - 60, FreeCAD.Vector(0, 15, 30)))
parts.append(Part.makeBox(20, 20, 1000 - 60, FreeCAD.Vector(1980, 15, 30)))

for i in range(8):
    parts.append(Part.makeBox(20, 20, 1000 - 60, FreeCAD.Vector((2000 / 9 * (i + 1)) - 10, 15, 30)))

Part.show(Part.makeCompound(parts), "Fence_section")
fence_section = FreeCAD.ActiveDocument.Fence_section

sketch = FreeCAD.ActiveDocument.addObject("Sketcher::SketchObject", "Path")
sketch.Placement = FreeCAD.Placement(FreeCAD.Vector(0, 0, 0), FreeCAD.Rotation(0, 0, 0, 1))
sketch.addGeometry(Part.LineSegment(FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(20000, 0, 0)), False)
sketch.addGeometry(Part.LineSegment(FreeCAD.Vector(20000, 0, 0), FreeCAD.Vector(20000, 20000, 0)), False)

post = Part.makeBox(100, 100, 1000, FreeCAD.Vector(0, 0, 0))
Part.show(post, "Post")
post = FreeCAD.ActiveDocument.Post

Fence = Arch.buildFence(fence_section, post, sketch)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Fence/pl&oldid=1461059>"