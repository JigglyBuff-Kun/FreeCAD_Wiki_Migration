---
title: Siatka Ulepsz przez Gmsh
---
|  |
| --- |
| Siatka: Ulepsz przez Gmsh |
| Lokalizacja w menu |
| Siatki → Ulepszanie ... |
| Środowisko pracy |
| [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Siatka z kształtu](/Mesh_FromPartShape/pl "Mesh FromPartShape/pl") |
|  |

## Opis

Polecenie **Ulepsz ...** ponownie przetwarza obiekt siatkowy przy użyciu generatora siatek [Gmsh](https://gmsh.info/). Nowa siatka może być drobniejsza lub grubsza.

## Użycie

1. Wybierz pojedynczy obiekt siatki.
2. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Mesh_RemeshGmsh.svg) **Ulepsz ...**.
   * Wybierz opcję z menu **Siatki → ![](/images/Mesh_RemeshGmsh.svg) Ulepsz ...**.
3. Otwiera się panel zadań **Ponów tworzenie siatki przez Gmsh**.
4. Określ wymagane ustawienia. Zobacz strony [ustawienia Gmsh](/Mesh_FromPartShape/pl#Generator_Gmsh "Mesh FromPartShape/pl") oraz [Siatka z kształtu](/Mesh_FromPartShape/pl "Mesh FromPartShape/pl").
5. Naciśnij przycisk Zastosuj, aby przebudować obiekt siatkowy.
6. Opcjonalnie zmień jedno lub więcej ustawień i ponownie naciśnij przycisk Zastosuj, aż nowa siatka będzie ci odpowiadać.
7. Naciśnij przycisk Zamknij, aby zamknąć panel zadań i zakończyć polecenie.

## Uwagi

* W niektórych przypadkach to polecenie spowoduje powstanie siatki z odwróconymi normalnymi. Można to poprawić poleceniem [Odwróć wektory normalne](/Mesh_FlipNormals/pl "Mesh FlipNormals/pl").

## Właściwości

Zapoznaj się z informacjami na stronie: [cecha siatki](/Mesh_Feature/pl "Mesh Feature/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_RemeshGmsh/pl&oldid=1474166>"