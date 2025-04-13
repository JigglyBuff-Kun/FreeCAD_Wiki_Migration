---
title: MES Wyczyść siatkę MES
---

|                                                        |
| ------------------------------------------------------ |
| MES: Wyczyść siatkę MES                                |
| Lokalizacja w menu                                     |
| Menu podręczne na obiekcie siatki → Wyczyść siatkę MES |
| Środowisko pracy                                       |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")            |
| Domyślny skrót                                         |
| _brak_                                                 |
| Wprowadzono w wersji                                   |
| -                                                      |
| Zobacz także                                           |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl")     |
|                                                        |

## Opis

Umożliwia użytkownikowi ponowną inicjalizację siatki z obiektu siatki MES FreeCAD. Siatka nadal istnieje, ale nie ma żadnych wierzchołków, krawędzi, powierzchni ani elementów.
Informacje o siatce, parametry Netgen / Gmsh, obszary siatki, grupy siatki i warstwa graniczna siatki pozostają w drzewie modelu, co oznacza, że siatkę można odtworzyć później.
Głównym zastosowaniem tej funkcji jest zmniejszenie rozmiaru pliku FreeCAD w celu zwiększenia wydajności podczas pracy w programie, zaoszczędzenia miejsca na dysku lub umożliwienia łatwego przenoszenia plików bez utraty danych o siatkach.

## Użycie

1. Kliknij prawym przyciskiem myszy na obiekcie siatki MES ![](/images/FEM_MeshNetgenFromShape.svg) [Netgen](/FEM_MeshNetgenFromShape/pl "FEM MeshNetgenFromShape/pl") lub ![](/images/FEM_MeshGmshFromShape.svg) [Gmsh](/FEM_MeshGmshFromShape/pl "FEM MeshGmshFromShape/pl") w [widoku drzewa](/Tree_view/pl "Tree view/pl").
2. Wybierz opcję **![](/images/FEM_MeshClear.svg) Wyczyść siatkę MES** z menu podręcznego.

## Uwagi

Obiekty w drzewie modelu są zachowane, ponieważ reprezentują dane siatki, ale siatka jest usunięta z pliku FreeCAD.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshClear/pl&oldid=1542429>"
