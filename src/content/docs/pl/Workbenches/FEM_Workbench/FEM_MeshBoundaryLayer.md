---
title: MES Warstwa przyścienna siatki MES
---

|                                                    |
| -------------------------------------------------- |
| MES: Warstwa przyścienna siatki MES                |
| Lokalizacja w menu                                 |
| Siatka → Warstwa przyścienna siatki MES            |
| Środowisko pracy                                   |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")        |
| Domyślny skrót                                     |
| _brak_                                             |
| Wprowadzono w wersji                               |
| -                                                  |
| Zobacz także                                       |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                    |

| Solvery   |
| --------- |
| Wszystkie |

## Opis

Umożliwia ustawienie zlokalizowanego zestawu parametrów tworzenia siatki poprzez wskazanie zestawu obiektów _(wierzchołek, krawędź, ściana)_ i przypisanie do nich parametrów.

Jest to szczególnie przydatne do zagęszczenia siatek w pobliżu krawędzi lub powierzchni w przypadku symulacji przepływów. Przykładowo, można skorzystać z tego narzędzia do zagęszczenia siatki w pobliżu profilu skrzydła samolotu lub przeszkody w przepływie.

Warstwa przyścienna ma tę zaletę, że tworzy silnie zdefiniowane, anizotropowe siatki. Jak nazwa wskazuje, umożliwia dokładne obliczenia w pobliżu brzegów, np. ściany gdzie występuje tarcie, generując gradient prędkości.

## Użycie

1. Aby skorzystać z tego polecenia, potrzebna jest ![](/images/FEM_MeshGmshFromShape.svg) [siatka wygenerowana przez Gmsh](/FEM_MeshGmshFromShape/pl "FEM MeshGmshFromShape/pl").
2. Wybierz obiekt siatki w [widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_MeshBoundaryLayer.svg) Warstwa przyścienna siatki MES.
   - Wybierz opcję **Siatka → ![](/images/FEM_MeshBoundaryLayer.svg) Warstwa przyścienna siatki MES** z menu.
4. Edytuj początkowy rozmiar elementów, tempo wzrostu i liczbę warstw wzrostu.
5. Wybierz wierzchołek, krawędź lub ścianę.
6. Wciśnij przycisk OK.
7. Zamknij okno dialogowe.

   : Rezultat: Powinieneś zobaczyć nowy obiekt `FEMMeshBoundaryLayer` pod obiektem `FEMMeshGMSH` (zobacz przykład #3 poniżej) w aktywnym kontenerze analizy.

8. Kliknij dwukrotnie na obiekcie `FEMMeshGMSH` w drzewie modelu i wciśnij przycisk Zastosuj aby wymusić ponowne przeliczenie siatki.
9. Zamknij okno dialogowe.

Po utworzeniu siatki możesz zmienić jej właściwości przy pomocy [edytora właściwości](/Property_editor/pl "Property editor/pl"). Po zmianie właściwości należy ponownie otworzyć okno dialogowe Gmsh i wcisnąć przycisk Zastosuj. (możesz zostawić okno dialogowe otwarte podczas zmieniana właściwości).

Możesz utworzyć tyle różnych warstw przyściennych, ile potrzeba.

## Przykłady wizualne

![](/images/FEMMeshBoundaryLayer_Example1.png.png)

Przykład 1: Początkowa rzadka siatka FEMMeshGMSH dla przypadku 2D

![](/images/FEMMeshBoundaryLayer_Example2.png.png)

Przykład 2: Po zastosowaniu warstwy granicznej siatki MES

![](/images/FEMMeshBoundaryLayer_Example3.png.png)

Przykład 3: Prosty przykład rezultatu w drzewie modelu

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshBoundaryLayer/pl&oldid=1569455>"
