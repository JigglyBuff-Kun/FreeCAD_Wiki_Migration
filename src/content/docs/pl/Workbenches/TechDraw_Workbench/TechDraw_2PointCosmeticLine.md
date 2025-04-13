---
title: Rysunek Techniczny Dodaj linię kosmetyczną wytyczoną przez dwa punkty
---
|  |
| --- |
| Dodaj linię kosmetyczną wytyczoną przez dwa punkty |
| Lokalizacja w menu |
| Rysunek Techniczny → Dodaj Linię → Dodaj linię środkową pomiędzy dwoma punktami |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Dodaj linię środkową do ściany](/TechDraw_FaceCenterLine/pl "TechDraw FaceCenterLine/pl"), [Dodaj linię środkową pomiędzy dwoma liniami](/TechDraw_2LineCenterLine/pl "TechDraw 2LineCenterLine/pl"), [Dodaj linię środkową pomiędzy dwoma punktami](/TechDraw_2PointCenterLine/pl "TechDraw 2PointCenterLine/pl") |
|  |

## Opis

Narzędzie **Dodaj linię kosmetyczną wytyczoną przez dwa punkty** dodaje linię kosmetyczną pomiędzy dwoma punktami. Punkty mogą być rozmieszczone zarówno w przestrzeni 2D jak i 3D. Wynikowa linia może być użyta do wymiarowania.

![](/images/CosLine2PointsSample.png)

Linia kosmetyczna pomiędzy dwoma punktami

## Użycie

1. Wybierz 2 wierzchołki w widoku lub 2 wierzchołki w oknie [widoku 3D](/3D_view/pl "3D view/pl").
2. Jeśli zaznaczyłeś punkty w oknie widoku 3D: dodaj właściwy widok Rysunku Technicznego do zaznaczenia, wybierając go w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw-line2points.svg) Dodaj linię kosmetyczną wytyczoną przez dwa punkty.
   * Wybierz opcję z menu **Rysunek Techniczny → Dodaj linie → ![](/images/TechDraw_2PointCosmeticLine.svg) Dodaj linię kosmetyczną wytyczoną przez dwa punkty**.
4. Otworzy się panel zadań.
5. Opcjonalnie dostosuj współrzędne punktów.
6. Naciśnij przycisk OK.
7. Zostanie dodana geometria pomocnicza w postaci linii łączącej dwa punkty. W przypadku punktów 3D linia łączy rzuty punktów.

## Edycja

Aby zmienić punkty końcowe linii kosmetycznej:

1. Wybierz linię kosmetyczną.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw-line2points.svg) Dodaj linię kosmetyczną wytyczoną przez dwa punkty.
   * Wybierz opcję **Rysunek Techniczny → Dodaj linie → ![](/images/TechDraw_2PointCosmeticLine.svg) Dodaj linię kosmetyczną wytyczoną przez dwa punkty**.
3. Otworzy się panel zadań.
4. Dostosuj współrzędne punktów.
5. Naciśnij przycisk OK.

## Uwagi

* Aby usunąć okrąg kosmetyczny, zaznacz go i naciśnij Delete. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* Aby zmienić wygląd linii kosmetycznej użyj narzędzia ![](/images/TechDraw_DecorateLine.svg) [Zmień wygląd linii](/TechDraw_DecorateLine/pl "TechDraw DecorateLine/pl").

## Właściwości

Linie kosmetyczne nie mają własnych właściwości, ponieważ nie są obiektami dokumentu.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Linie kosmetyczne można tworzyć za pomocą metod `makeCosmeticLine(v1, v2)` lub `makeCosmeticLine3d(v1, v2)` w DrawViewPart.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_2PointCosmeticLine/pl&oldid=1403305>"