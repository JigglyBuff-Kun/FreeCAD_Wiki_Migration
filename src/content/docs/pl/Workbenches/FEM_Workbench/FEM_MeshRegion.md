---
title: MES Zagęszczenie siatki MES
---

|                                                    |
| -------------------------------------------------- |
| MES: Zagęszczenie siatki MES                       |
| Lokalizacja w menu                                 |
| Siatka → Zagęszczenie siatki MES                   |
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

Umożliwia utworzenie zlokalizowanego zestawu parametrów tworzenia siatki poprzez wskazanie obiektów _(wierzchołek, krawędź, ściana)_ i przypisanie do nich parametrów. Jest to szczególnie przydatne do zagęszczania siatek w obszarach zainteresowania lub obszarach gdzie solver generuje silne gradienty zmiennych. Przykładowo, można skorzystać z tego narzędzia do zagęszczenia siatki w miejscach koncentracji naprężeń _(ostre krawędzie, otwory, karby itd.)_ w analizie mechanicznej lub w przewężeniach w analizach przepływów.

Lokalne zagęszczanie siatki ma tę zaletę, że umożliwia dokładne obliczenia tam, gdzie są potrzebne, pozostawiając rzadszą globalną siatkę, co znacząco skraca czas obliczeń przy zachowaniu dokładności wyników.

## Użycie

1. Aby skorzystać z tego polecenia, potrzebna jest ![](/images/FEM_MeshGmshFromShape.svg) [siatka wygenerowana przez Gmsh](/FEM_MeshGmshFromShape/pl "FEM MeshGmshFromShape/pl") lub (wersja 1.1 i powyżej) ![](/images/FEM_MeshNetgenFromShape.svg) [siatka wygenerowana przez Netgen](/FEM_MeshNetgenFromShape/pl "FEM MeshNetgenFromShape/pl").
2. Zaznacz obiekt siatki w [Widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_MeshRegion.svg) Zagęszczenie siatki MES
   - Wybierz opcję **Siatka → ![](/images/FEM_MeshRegion.svg) Zagęszczenie siatki MES** z menu.
4. Wciśnij przycisk Dodaj i wybierz jeden lub więcej obiektów typu ściana, krawędź lub wierzchołek w [widoku 3D](/3D_view/pl "3D view/pl") aby zastosować na nich zagęszczenie siatki. Wybrane obiekty pojawią się na liście. Tryb wyboru można również zmienić na _Bryła_.
5. Wprowadź maksymalny rozmiar elementu dla obszaru.
6. Wciśnij przycisk OK.
7. Zamknij okno dialogowe.

   : Rezultat: Powinieneś teraz widzieć nowy obiekt `FEMMeshRegion` pod obiektem `FEMMeshGmsh` lub (wersja 1.1 i powyżej) `FEMMeshNetgen` _(zobacz przykład #3 poniżej)_ w aktywnym kontenerze analizy.

8. Dwukrotnie kliknij na obiekcie `FEMMeshGmsh` lub (wersja 1.1 i powyżej) `FEMMeshNetgen` w drzewie modelu i wciśnij przycisk Zastosuj aby wymusić ponowne przeliczenie siatki.
9. Zamknij okno dialogowe.

Po utworzeniu siatki można edytować jej właściwości przy pomocy [edytora właściwości](/Property_editor/pl "Property editor/pl"). Po zmianie właściwości należy ponownie otworzyć okno dialogowe generatora siatki i wcisnąć przycisk Zastosuj _(można zostawić okno dialogowe otwarte podczas zmieniana właściwości)_.

Możesz utworzyć tyle różnych obszarów siatki, ile potrzeba.

## Przykłady wizualne

![](/images/FEMMeshRegion_Example1.png)

Przykład 1: Początkowa rzadka siatka Gmsh.

![](/images/FEMMeshRegion_Example2.png)

Przykład 2: Po zastosowaniu zagęszczenia siatki przy pomoc dwóch obszarów siatki, większy otwór jest zagęszczony do maksymalnego rozmiaru elementu 3 mm, zaś mniejszy do rozmiaru 1 mm.

![](/images/FEMMeshRegion_Example3.png)

Przykład 3: Prosty przykład rezultatu w drzewie modelu.

## Uwagi

- Kolejność, w której obszary są pokazywane w [widoku drzewa](/Tree_view/pl "Tree view/pl") może wpłynąć na uzyskaną siatkę. Więcej informacji można znaleźć [w tym wątku na forum](https://forum.freecadweb.org/viewtopic.php?f=18&t=41955).

## Powiązane

- "Mesh Regions for a Better Analysis" - poradnik wideo autorstwa ([Joko Engineering](https://www.youtube.com/watch?v=X5RVe2SDPvw))

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshRegion/pl&oldid=1569011>"
