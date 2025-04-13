---
title: Rysunek Techniczny Dodaj wierzchołki kwadrantu
---
|  |
| --- |
| Rysunek Techniczny: Dodaj wierzchołki kwadrantu |
| Lokalizacja w menu |
| Rysunek Techniczny → Dodaj wierzchołki → Dodaj wierzchołki kwadrantu |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Wstaw wierzchołek kosmetyczny](/TechDraw_CosmeticVertex/pl "TechDraw CosmeticVertex/pl"), [Dodaj wierzchołek punktu środkowego](/TechDraw_Midpoints/pl "TechDraw Midpoints/pl") |
|  |

## Opis

Narzędzie **Dodaj wierzchołki kwadrantu** dodaje trzy [wierzchołki kosmetyczne](/TechDraw_CosmeticVertex/pl "TechDraw CosmeticVertex/pl") wzdłuż jednej lub więcej wybranych krawędzi. Wierzchołki są umieszczane na 25%, 50% i 75% długości krawędzi. Dla okrągłej krawędzi daje to kosmetyczne wierzchołki pod kątem 90°, 180° i 270°, oprócz geometrycznego wierzchołka pod kątem 0°.

![](/images/TechDraw_CosmeticQuadrant_Sample.png)

Wierzchołki pomocnicze w punktach ćwiartki okręgu.

## Użycie

1. Wybierz jedną lub więcej krawędzi w widoku. Można wybrać dowolną krawędź, nie tylko okręgi.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_Quadrants.svg) **Dodaj wierzchołki kwadrantu**.
   * Wybierz opcję z menu **Rysunek Techniczny → Dodaj wierzchołki → ![](/images/TechDraw_Quadrants.svg) Dodaj wierzchołki kwadrantu**.

## Uwagi

* Utworzone wierzchołki kosmetyczne nie są parametrycznie powiązane z wybranymi krawędziami.
* Aby usunąć wierzchołek kosmetyczny należy zaznaczyć ją i nacisnąć Delete. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

## Właściwości

Wierzchołki jako geometrie pomocnicze nie mają własnych właściwości, ponieważ nie są obiektami dokumentu. Współdzielą ustawienia koloru i rozmiaru ze zwykłymi wierzchołkami geometrii.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Funkcja **Kosmetyczne wierzchołki kwadrantu** nie są obecnie dostępne dla [makrodefinicji](/Macros/pl "Macros/pl") lub z konsoli [Python](/Python/pl "Python/pl"). Poniższy fragment kodu usunie wszystkie wierzchołki kosmetyczne z widoku.

```
v = App.ActiveDocument.View
v.clearCV()
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Quadrants/pl&oldid=1403331>"