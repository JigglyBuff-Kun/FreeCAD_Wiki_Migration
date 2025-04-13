---
title: MES Wyświetl informacje o siatce MES
---

|                                                                      |
| -------------------------------------------------------------------- |
| MES: Wyświetl informacje o siatce MES                                |
| Lokalizacja w menu                                                   |
| Menu podręczne na obiekcie siatki → Wyświetl informacje o siatce MES |
| Środowisko pracy                                                     |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                          |
| Domyślny skrót                                                       |
| _brak_                                                               |
| Wprowadzono w wersji                                                 |
| -                                                                    |
| Zobacz także                                                         |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl")                   |
|                                                                      |

## Opis

Wyświetla podstawowe statystyki istniejącej siatki - liczbę węzłów i elementów każdego typu. Dokładniej, całkowite liczby następujących cech są podawane:

- Węzły,
- Krawędzie,
- Ściany,
- Wielokąty,
- Objętości,
- Wielościany,

- Krawędzie liniowe,
- Ściany liniowe,
- Objętości liniowe,

- Krawędzie kwadratowe,
- Ściany kwadratowe,
- Trójkąty kwadratowe,
- Czworoboki kwadratowe,
- Objętości kwadratowe,
- Prostopadłościany kwadratowe,
- Czworościany kwadratowe,
- Pięcościany kwadratowe,
- Piramidki kwadratowe.

## Użycie

1. Najpierw utwórz siatkę MES _(używając jednej z dostępnych technik)_.
2. Zaznacz siatkę w [widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Kliknij na niej prawym przyciskiem myszy i wybierz opcję ![](/images/FEM_MeshDisplayInfo.svg) Wyświetl informacje o siatce MES.
4. Aby zamknąć okno FEM Mesh Info, wciśnij przycisk OK.

## Skrypty

```
# setup some model with a fem mesh to print information from
from femexamples.ccx_cantilever_faceload import setup
setup()
# print the fem mesh information
print(App.ActiveDocument.Mesh.FemMesh)

```

da następujący wynikː

```
>>> print(App.ActiveDocument.Mesh.FemMesh)
========================== Dump contents of mesh ==========================

1) Total number of nodes:      	228
2) Total number of edges:      	0
3) Total number of faces:      	0
4) Total number of polygons:   	0
5) Total number of volumes:    	79
6) Total number of polyhedrons:	0

7) Total number of linear edges:	0
8) Total number of linear faces:	0
9) Total number of linear volumes:	0

10) Total number of quadratic edges:	0
11) Total number of quadratic faces:	0
12) Total number of quadratic volumes:	79
12.1) Number of quadratic hexahedrons: 	0
12.2) Number of quadratic tetrahedrons:	79
12.3) Number of quadratic prisms:      	0
12.4) Number of quadratic pyramids:    	0

===========================================================================

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshDisplayInfo/pl&oldid=1542434>"
