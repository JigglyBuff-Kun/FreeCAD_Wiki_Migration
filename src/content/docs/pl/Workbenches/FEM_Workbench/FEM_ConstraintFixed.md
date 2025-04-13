---
title: MES Warunek brzegowy utwierdzenia
---

|                                                                                   |
| --------------------------------------------------------------------------------- |
| MES: Warunek brzegowy utwierdzenia                                                |
| Lokalizacja w menu                                                                |
| Model → Warunki brzegowe i obciążenia mechaniczne → Warunek brzegowy utwierdzenia |
| Środowisko pracy                                                                  |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                       |
| Domyślny skrót                                                                    |
| _brak_                                                                            |
| Wprowadzono w wersji                                                              |
| -                                                                                 |
| Zobacz także                                                                      |
| [MES Wiązanie kontaktu](/FEM_ConstraintContact/pl "FEM ConstraintContact/pl")     |
|                                                                                   |

| Solvery   |
| --------- |
| Wszystkie |

## Opis

Tworzy warunek brzegowy MES dla utwierdzonego obiektu geometrycznego poprzez zablokowanie wszystkich dostępnych stopni swobody węzłów leżących u podstaw wybranego obiektu geometrycznego _(6 stopni swobody dla elementów belkowych i powłokowych, 3 dla elementów bryłowych)_.

## Użycie

1. Jest kilka sposobów wywołania tej komendy:
   - Wciśnij przycisk ![](/images/FEM_ConstraintFixed.svg) Warunek brzegowy utwierdzenia.
   - Wybierz opcję **Model → Warunki brzegowe i obciążenia mechaniczne → ![](/images/FEM_ConstraintFixed.svg) Warunek brzegowy utwierdzenia** z menu.
2. Wciśnij przycisk Dodaj.
3. W [widoku 3D](/3D_view/pl "3D view/pl") wybierz obiekt, do którego ma być przypisany warunek brzegowy. Może to być wierzchołek, krawędź lub ściana (ale wszystkie obiekty muszą być tego samego typu). Aby usunąć obiekty z zaznaczenia, wciśnij przycisk Usuń i kliknij na nich.

## Ograniczenia

Nie możesz mieszać typów obiektów geometrycznych w obrębie tego samego warunku brzegowego. Użyj osobnego warunku utwierdzenia do każdego typu obiektu.

## Uwagi

- To narzędzie korzysta ze [słowa kluczowego \*BOUNDARY w CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node163.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintFixed/pl&oldid=1543449>"
