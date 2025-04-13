---
title: Rysunek Techniczny Napraw odniesienia do wymiarów
---
|  |
| --- |
| Rysunek Techniczny: Napraw odniesienia do wymiarów |
| Lokalizacja w menu |
| Rysunek Techniczny → Wymiary → Napraw odniesienia do wymiarów |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.21 |
| Zobacz także |
| [Wstaw wymiar długości](/TechDraw_LengthDimension/pl "TechDraw LengthDimension/pl") |
|  |

## Opis

Narzędzie **Napraw odniesienia do wymiarów** może dostosować odniesienia geometrii 2D lub 3D wymiaru. Odniesienia te mogą stać się nieprawidłowe z powodu "[problemu nazewnictwa topologicznego](/Topological_naming_problem/pl "Topological naming problem/pl")" lub usuwania ukrytych linii.

Zobacz stronę [Wstaw wymiar długości](/TechDraw_LengthDimension/pl#Ograniczenia "TechDraw LengthDimension/pl"), aby dowiedzieć się więcej na temat wymiarów i nazewnictwa topologicznego.

## Użycie

1. Wybierz wymiar do skorygowania i opcjonalnie nowe odniesienia do geometrii, punktu lub krawędzi w widoku Rysunku Technicznego lub w [widoku 3D](/3D_view/pl "3D view/pl").
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_DimensionRepair.svg) **Napraw odniesienia do wymiarów**.
   * Wybierz z menu opcję **Rysunek Techniczny → Wymiary → ![](/images/TechDraw_DimensionRepair.svg) Napraw odniesienia do wymiarów**.
3. Otworzy się panel zadań **Naprawa wymiaru** pokazujący wybrany wymiar i bieżące odniesienia do geometrii.
4. Wybierz nowe odniesienia do geometrii, jeśli jeszcze tego nie zrobiłeś.
5. Naciśnij przycisk Zamień odwołania na aktualnie wybrane.
6. Naciśnij przycisk OK, aby zaktualizować wymiar.
7. Jeśli wybrano odniesienia 3D: opcjonalnie zmień wartość właściwości DANE**Tyo pomiaru** na `Prawda`.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie TechDraw DimensionRepair nie może być używane w [makroinstrukcjach](/Macros/pl "Macros/pl") lub z konsoli [Python](/Python/pl "Python/pl"). Właściwości odniesienia wymiaru mogą być aktualizowane przy użyciu języka Python.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_DimensionRepair/pl&oldid=1486434>"