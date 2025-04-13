---
title: MES Usuń elementy
---

|                                                    |
| -------------------------------------------------- |
| MES: Usuń elementy                                 |
| Lokalizacja w menu                                 |
| Siatka → Usuń elementy                             |
| Środowisko pracy                                   |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")        |
| Domyślny skrót                                     |
| _brak_                                             |
| Wprowadzono w wersji                               |
| 1.0                                                |
| Zobacz także                                       |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                    |

## Opis

Ukrywa elementy zaznaczone wielokątem z siatki MES lub siatki wyników, umożliwiając usunięcie wybranych części siatki z widoku i zobaczenie elementów wewnątrz siatki.

## Użycie

1. Zaznacz siatkę MES (utworzoną przy pomocy generatora Netgen/Gmsh lub zaimportowaną) lub siatkę wyników w drzewie.
2. Wybierz opcję **Siatka → ![](/images/FEM_CreateElementsSet.svg) Usuń elementy** z menu.
3. Opcjonalnie, wprowadź nazwę obiektu narzędzia, który zostanie utworzony w drzewie.
4. Wciśnij przycisk Wielokąt i kliknij w kilku dowolnych miejscach w widoku 3D aby zdefiniować wielokąt zaznaczania.
5. Kliknij prawym przyciskiem myszy i wybierz _Inner_ lub _Outer_ (aby zdecydować czy usunięte zostaną elementy wewnątrz czy na zewnątrz wielokąta zaznaczania) bądź _Anuluj_ jeśli chcesz opuścić narzędzie zaznaczania wielokątem.
6. Wskazane elementy zostaną usunięte z siatki a liczba elementów usuniętych i zachowanych zostanie wyświetlona w oknie raportu.
7. Wciśnij przycisk OK. Zauważysz nowe obiekty w drzewie - jeden o nazwie takiej jak podana (domyślnie _ElementSet_) i jeden o nazwie _NewFemMesh_ lub _NewResultMesh_ w zależności od typu siatki. W przypadku siatki wyników, pojawi się również kopia oryginalnej siatki nazwana _StartResultMesh_. Obiekt _ElementSet_ może zostać użyty do ponownego skorzystania z narzędzia.
8. Aby usunąć nowe obiekty z drzewa i zachować tylko oryginalną siatkę, kliknij dwukrotnie na obiekcie _ElementSet_ i wciśnij przycisk Przywróć. Widoczność oryginalnej siatki nie zostanie przywrócona automatycznie.

## Uwagi

- Aby ukryć więcej elementów z tej samej siatki MES po początkowym użyciu narzędzia, należy ręcznie wskazać nową (zmodyfikowaną) siatkę jako cel operacji. Nie ma takiej potrzeby w przypadku siatek wyników.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_CreateElementsSet/pl&oldid=1542260>"
