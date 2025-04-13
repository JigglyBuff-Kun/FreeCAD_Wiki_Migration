---
title: Rysunek Techniczny Dodaj wierzchołek punktu środkowego
---
|  |
| --- |
| Rysunek Techniczny: Dodaj wierzchołek punktu środkowego |
| Lokalizacja w menu |
| Rysunek Techniczny → Dodaj wierzchołki → Dodaj wierzchołek punktu środkowego |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Wstaw wierzchołek kosmetyczny](/TechDraw_CosmeticVertex/pl "TechDraw CosmeticVertex/pl"), [Dodaj wierzchołki kwadrantu](/TechDraw_Quadrants/pl "TechDraw Quadrants/pl") |
|  |

## Opis

Narzędzie **Dodaj wierzchołek punktu środkowego** dodaje [Wierzchołek pomocniczy](/TechDraw_CosmeticVertex/pl "TechDraw CosmeticVertex/pl") w punkcie środkowym jednej lub więcej wybranych krawędzi.

![](/images/TechDraw_CosmeticMidpoint_Sample.png)

Wierzchołki pomocnicze w punktach środkowych krawędzi.

## Użycie

1. Wybierz jedną lub więcej krawędzi w widoku.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_Midpoints.svg) **Dodaj wierzchołek punktu środkowego**
   * Wybierz opcję z menu **Rysunek Techniczny → Dodaj wierzchołki → ![](/images/TechDraw_Midpoints.svg) Dodaj wierzchołek punktu środkowego**.

## Uwagi

* Utworzone wierzchołki kosmetyczne nie są parametrycznie powiązane z wybranymi krawędziami.
* Aby usunąć wierzchołek kosmetyczny należy zaznaczyć ją i nacisnąć Delete. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

## Właściwości

Wierzchołki jako geometrie pomocnicze nie mają własnych właściwości, ponieważ nie są obiektami dokumentu. Współdzielą ustawienia koloru i rozmiaru ze zwykłymi wierzchołkami geometrii.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Kosmetyczne wierzchołki nie są obecnie dostępne dla [makrodefinicji](/Macros/pl "Macros/pl") lub z konsoli [Python](/Python/pl "Python/pl"). Poniższy fragment kodu usunie wszystkie wierzchołki kosmetyczne z widoku.

```
v = App.ActiveDocument.View
v.clearCV()
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Midpoints/pl&oldid=1403327>"