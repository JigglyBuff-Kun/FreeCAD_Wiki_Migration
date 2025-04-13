---
title: Rysunek Techniczny Dodaj okrąg kosmetyczny
---
|  |
| --- |
| Rysunek Techniczny Okrąg kosmetyczny |
| Lokalizacja w menu |
| Rysunek Techniczny → Dodaj linie → Dodaj okrąg kosmetyczny |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 1.0 |
| Zobacz także |
| [Dodaj linię kosmetyczną wytyczoną przez dwa punkty](/TechDraw_2PointCosmeticLine/pl "TechDraw 2PointCosmeticLine/pl") |
|  |

## Opis

Narzędzie **Dodaj okrąg kosmetyczny** dodaje okrąg kosmetyczny w wybranym punkcie środka. Punkt może znajdować się w przestrzeni 2D lub 3D.

![](/images/CosmeticCircleSample.png)

Geometria okręgu pomocniczego

## Użycie

1. Wybierz punkt środkowy w widoku rysunku technicznego lub w oknie [Widoku 3D](/3D_view/pl "3D view/pl").
2. Jeśli wybrałeś punkt w widoku 3D: dodaj właściwy widok Rysunku Technicznego do zaznaczenia, wybierając go w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_CosmeticCircle.svg) **Dodaj okrąg kosmetyczny**.
   * Wybierz opcję z menu **Rysunek Techniczny → Dodaj linie → ![](/images/TechDraw_CosmeticCircle.svg) Dodaj okrąg kosmetyczny**.
4. Otworzy się panel zadań.
5. Opcjonalnie dostosuj współrzędne punktu środkowego, promień oraz kąt rozpoczęcia i zakończenia okręgu.
6. Naciśnij przycisk OK.
7. Zostanie dodana geometria okręgu pomocniczego. W przypadku punktu środkowego 3D okrąg jest umieszczany na rzucie punktu.

## Edycja

Aby zmienić atrybuty okręgu kosmetycznego:

1. Wybierz geometrię okręgu kosmetycznego.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_CosmeticCircle.svg) **Dodaj okrąg kosmetyczny**.
   * Wybierz opcję z menu **Rysunek Techniczny → Dodaj linie → ![](/images/TechDraw_CosmeticCircle.svg) Dodaj okrąg kosmetyczny.**.
3. Otworzy się panel zadań.
4. Dostosuj współrzędne punktu środkowego, promień lub kąt początkowy i końcowy okręgu.
5. Naciśnij przycisk OK.

## Uwagi

* Aby usunąć okrąg kosmetyczny, zaznacz go i naciśnij Delete.
* Aby zmienić wygląd okręgu kosmetycznego, użyj narzędzia ![](/images/TechDraw_DecorateLine.svg) [Zmień wygląd linii](/TechDraw_DecorateLine/pl "TechDraw DecorateLine/pl").

## Właściwości

Okręgi kosmetyczne nie mają własnych właściwości, ponieważ nie są obiektami dokumentu.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Okręgi kosmetyczne mogą być tworzone przy użyciu metody DrawViewPart `makeCosmeticCircle(center, radius, start angle, end angle)`.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_CosmeticCircle/pl&oldid=1403317>"