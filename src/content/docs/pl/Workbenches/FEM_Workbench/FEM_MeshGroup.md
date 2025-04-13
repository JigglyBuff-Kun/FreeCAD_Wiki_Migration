---
title: MES Grupa siatki MES
---

|                                                    |
| -------------------------------------------------- |
| MES: Grupa siatki MES                              |
| Lokalizacja w menu                                 |
| Siatka → Grupa siatki MES                          |
| Środowisko pracy                                   |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")        |
| Domyślny skrót                                     |
| _brak_                                             |
| Wprowadzono w wersji                               |
| -                                                  |
| Zobacz także                                       |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                    |

## Opis

Umożliwia tworzenie grup wierzchołków, krawędzi, powierzchni i elementów. Jest to przydatne gdy FreeCAD jest używany jako preprocessor do eksportu zorganizowanej i oznakowanej siatki. Siatka może być wtedy użyta przez zewnętrzne solvery, gdzie grupy siatki mogą być łatwiejsze w użyciu do definiowania warunków brzegowych i przypisywania właściwości związanych z solverem. Możliwe jest użycie nazwy obiektu grupy siatki lub etykiety jako nazwy grupy do eksportu siatki. Jeśli wybrana jest etykieta, należy uważać na znaki specjalne. Jeśli format eksportu ich nie wspiera, należy użyć nazwy obiektu grupy siatki.

To narzędzie umożliwia więc używanie programu FreeCAD z zewnętrznymi solverami _(lub przeglądarkami takimi jak ParaView)_, które nie są obecnie zaimplementowane we FreeCAD.

## Użycie

1. Aby skorzystać z tego polecenia, potrzebna jest ![](/images/FEM_MeshGmshFromShape.svg) [siatka wygenerowana przez Gmsh](/FEM_MeshGmshFromShape/pl "FEM MeshGmshFromShape/pl").
2. Wybierz obiekt siatki w [widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_MeshGroup.svg) **Grupa siatki MES**.
   - Wybierz opcję **Siatka → ![](/images/FEM_MeshGroup.svg) Grupa siatki MES** z menu.
4. Wybierz czy grupa ma korzystać z nazwy obiektu czy wprowadzonej etykiety
   - Jeśli zaznaczona jest **Nazwa**, podczas eksportu zostanie użyta nazwa obiektu grupy siatki.
   - Jeśli zaznaczona jest **Etykieta**, podczas eksportu zostanie użyta wprowadzona etykieta.
5. Kliknij przycisk Dodaj i wybierz obiekt geometryczny _(bryłę, ścianę, krawędź lub wierzchołek)_. Można dodać więcej takich obiektów, ale muszą one być tego samego typu. Grupa siatki będzie składać się z podstawowych elementów siatki.
6. Wciśnij przycisk OK.

   : Rezultat: Powinieneś zobaczyć nowy obiekt `FEMMeshGroup` pod obiektem `FEMMeshGMSH` w aktywnym kontenerze analizy.

7. Kliknij dwukrotnie na obiekcie `FEMMeshGMSH` w drzewie modelu i wciśnij przycisk Zastosuj aby wymusić ponowne przeliczenie/etykietowanie siatki.
8. Zamknij okno dialogowe.

## Uwagi

- Po utworzeniu siatki można zmienić etykietę przy pomocy [edytora właściwości](/Property_editor/pl "Property editor/pl").
- Po zmianie właściwości należy ponownie otworzyć okno dialogowe Gmsh i wcisnąć przycisk Zastosuj _(można pozostawić okno dialogowe otwarte podczas zmieniania właściwości)_.
- Można utworzyć tyle grup siatki, ile potrzeba.
- Domyślnie grupy siatek mogą być eksportowane tylko do formatów .med i .unv. Aby móc eksportować je do formatu .inp, należy włączyć opcję _Eksportuj dane grupy_ w [preferencjach eksportu INP](/Import_Export_Preferences/pl#INP "Import Export Preferences/pl").
  - Ustawienie preferencji _Które elementy siatki wyeksportować_ na _Najwyższe_ lub _MES_ zapewni, że elementy niższych rzędów nie używane w analizie (np. powłokowe w przypadku analizy na bryłach) nie będą eksportowane.
  - Aby wyeksportować zestawy węzłów do tego formatu, właściwość DANE**Groups Of Nodes** [obiektu siatki Gmsh](/FEM_MeshGmshFromShape/pl "FEM MeshGmshFromShape/pl") musi być ustawiona na `Prawda`.
- Aby sprawdzić czy grupa została poprawnie wyeksportowana, możesz otworzyć wygenerowany plik w dowolnym edytorze tekstu i poszukać w nim nazwy grupy.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshGroup/pl&oldid=1569468>"
