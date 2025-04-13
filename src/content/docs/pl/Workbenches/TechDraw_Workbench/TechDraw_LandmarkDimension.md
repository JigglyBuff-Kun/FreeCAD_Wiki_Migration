---
title: Rysunek Techniczny Wstaw wymiar przestrzenny
---
|  |
| --- |
| Rysunek Techniczny: Wstaw wymiar przestrzenny |
| Lokalizacja w menu |
| Rysunek Techniczny → Wymiary → Wstaw wymiar przestrzenny - EXPERYMENTALNE |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Wstaw wymiar poziomy](/TechDraw_HorizontalDimension/pl "TechDraw HorizontalDimension/pl"), [Wstaw wymiar pionowy](/TechDraw_VerticalDimension/pl "TechDraw VerticalDimension/pl") |
|  |

## Opis

Narzędzie **Wstaw wymiar przestrzenny** dodaje wymiar liniowy do widoku.
Wymiar jest oparty na dwóch obiektach punktowych ([Punkt](/Draft_Point/pl "Draft Point/pl") środowiska Rysunek Roboczy lub [Punkt](/Part_Point/pl "Part Point/pl") środowiska Część lub [Punkt](/PartDesign_Point/pl "PartDesign Point/pl")) *środowiska pracy Projekt Części z modelu 3D.*

Celem tego narzędzia jest zapewnienie obejścia problemu uszkodzenia wymiarów spowodowanego przez "[Problem nazewnictwa topologicznego](/Topological_naming_problem/pl "Topological naming problem/pl")". Punkty źródłowe powinny używać [Wyrażeń](/Expressions/pl "Expressions/pl") lub innego mechanizmu wiążącego, aby ustalić ich położenie. Ponieważ punkty są [Obiektami dokumentu](/App_DocumentObject/pl "App DocumentObject/pl"), a nie komponentami kształtu, ich nazwa nie zmienia się przy ponownych obliczeniach, a więc łatwo je znaleźć.

Zobacz stronę [Wstaw wymiar długości](/TechDraw_LengthDimension/pl#Ograniczenia "TechDraw LengthDimension/pl") , aby dowiedzieć się więcej na temat wymiarów i nazewnictwa topologicznego.

## Użycie

1. Wybierz dwa obiekty punktowe w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub [Widoku drzewa](/Tree_view/pl "Tree view/pl").
2. Dodaj właściwy widok Rysunku Technicznego do zaznaczenia, wybierając go w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_LandmarkDimension.svg) **Wstaw wymiar przestrzenny**.
   * Wybierz z menu opcję **Rysunek Techniczny → Wymiary → ![](/images/TechDraw_LandmarkDimension.svg) Wstaw wymiar przestrzenny**.
4. Wymiar zostanie dodany do widoku.
5. Wymiar można przeciągnąć do żądanej pozycji.
6. W razie potrzeby dodaj tolerancje zgodnie z opisem na stronie [Wymiatrowanie i tolerancja](/TechDraw_Geometric_dimensioning_and_tolerancing/pl#Tolerancja "TechDraw Geometric dimensioning and tolerancing/pl").

### Zmiana właściwości

Aby zmienić właściwości obiektu wymiaru, kliknij dwukrotnie na niego w rysunku lub w [widoku drzewa](/Tree_view/pl "Tree view/pl"). Spowoduje to otwarcie okna [dialogowego wymiaru](/TechDraw_LengthDimension/pl#Okno_dialogowe "TechDraw LengthDimension/pl").

## Ograniczenia

Narzędzie W**Wstaw wymiar przestrzenny** jest początkowo zawężone do wymiarów "Odległość". Inne typy mogą być dodane, jeśli zapotrzebowanie na nie będzie uzasadnione.

## Uwagi

Zapoznaj się również informacjami na stroni e[Wymiar długości](/TechDraw_LengthDimension/pl#Uwagi "TechDraw LengthDimension/pl").

## Właściwości

Zobacz stronę [Wymiar długości](/TechDraw_LengthDimension/pl#W.C5.82a.C5.9Bciwo.C5.9Bci "TechDraw LengthDimension/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Wstaw wymiar przestrzenny** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
dim1 = FreeCAD.ActiveDocument.addObject("TechDraw::LandmarkDimension", "Landmark")
dim1.Type = "Distance"
dim1.References2D = [(TDView, "Vertex1")]
dim1.References3D = [(Point3d1, "Vertex1")]
dim1.References3D = [(Point3d2, "Vertex1")]
page.addView(dim1)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_LandmarkDimension/pl&oldid=1342837>"