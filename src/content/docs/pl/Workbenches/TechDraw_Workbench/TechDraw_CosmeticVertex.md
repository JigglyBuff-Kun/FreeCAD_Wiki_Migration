---
title: Rysunek Techniczny Wstaw wierzchołek kosmetyczny
---
|  |
| --- |
| Rysunek Techniczny: Wstaw wierzchołek kosmetyczny |
| Lokalizacja w menu |
| Rysunek Techniczny → Dodaj wierzchołki → Wstaw wierzchołek kosmetyczny |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Dodaj wierzchołek punktu środkowego](/TechDraw_Midpoints/pl "TechDraw Midpoints/pl"), [Dodaj wierzchołki kwadrantu](/TechDraw_Quadrants/pl "TechDraw Quadrants/pl") |
|  |

## Opis

Narzędzie **Wstaw wierzchołek kosmetyczny** dodaje do widoku [wierzchołek](/Glossary#V "Glossary"), który nie jest częścią geometrii źródłowej. Ten wierzchołek zachowuje się jak każdy inny wierzchołek i może być używany do wymiarowania.

![](/images/TechDraw_CosmeticVertex_Sample.png)

Wierzchołek kosmetyczny użyty do stworzenia wymiaru, który w innym przypadku byłby niemożliwy do uzyskania.

## Użycie

1. Wybierz widok na rysunku.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_CosmeticVertex.svg) Wstaw wierzchołek kosmetyczny
   * Wybierz opcję z menu **Rysunek Techniczny → Dodaj wierzchołki → ![](/images/TechDraw_CosmeticVertex.svg) Wstaw wierzchołek kosmetyczny**.
3. Otworzy się panel zadań.
4. Opcjonalnie naciśnij przycisk Wybór punktów i wybierz punkt na stronie. Naciśnij przycisk Zakończ wskazywanie, aby anulować tę operację.
5. Opcjonalnie zmień lub określ współrzędne X i Y punktu. Współrzędne odnoszą się do środka widoku.
6. Naciśnij przycisk OK.

## Uwagi

* Nie można zmienić położenia istniejącego wierzchołka kosmetycznego. W tej chwili nie ma innego sposobu niż usunięcie go i utworzenie nowego.

## Właściwości

Wierzchołki kosmetyczne nie mają własnych właściwości, ponieważ nie są obiektami dokumentu. Współdzielą ustawienia koloru i rozmiaru ze zwykłymi wierzchołkami geometrii.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Funkcja **Wstaw wierzchołek kosmetyczny** jest dostępna dla [makrodefinicji](/Macros/pl "Macros/pl") lub z konsoli [Python](/Python/pl "Python/pl").

```
dvp = App.ActiveDocument.View
org = App.Vector(0.0, 0.0, 0.0)
dvp.makeCosmeticVertex(org);

#lines too!
start = FreeCAD.Vector (1.0, 5.0, 0.0)
end = FreeCAD.Vector(1.0, -5.0, 0.0)
style = 2
weight = 0.75
pyGreen = (0.0, 0.0, 1.0, 0.0)
dvp.makeCosmeticLine(start,end,style, weight, pyGreen)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_CosmeticVertex/pl&oldid=1391745>"