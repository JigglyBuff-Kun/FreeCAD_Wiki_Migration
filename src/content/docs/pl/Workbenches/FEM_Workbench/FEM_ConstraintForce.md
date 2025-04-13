---
title: MES Obciążenie siłą
---

|                                                                                     |
| ----------------------------------------------------------------------------------- |
| MES: Obciążenie siłą                                                                |
| Lokalizacja w menu                                                                  |
| Model → Warunki brzegowe i obciążenia mechaniczne → Obciążenie siłą                 |
| Środowisko pracy                                                                    |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                         |
| Domyślny skrót                                                                      |
| _brak_                                                                              |
| Wprowadzono w wersji                                                                |
| -                                                                                   |
| Zobacz także                                                                        |
| [MES Obciążenie ciśnieniem](/FEM_ConstraintPressure/pl "FEM ConstraintPressure/pl") |
|                                                                                     |

| Solvery   |
| --------- |
| Wszystkie |

## Opis

Przykłada siłę o określonej wartości [N] do wskazanej geometrii.

## Użycie

1. Jest kilka sposobów wywołania tej komendy:
   - Wciśnij przycisk ![](/images/FEM_ConstraintForce.svg) Obciążenie siłą
   - Wybierz opcję **Model → Warunki brzegowe i obciążenia mechaniczne → ![](/images/FEM_ConstraintForce.svg) Obciążenie siłą** z menu.
2. Obiekt siatki zostanie automatycznie ukryty, pokazując geometrię modelu. Jeśli obiekt siatki jest nadal widoczny, wykonaj jeden z poniższych kroków aby go ukryćː
   - Wybierz obiekt siatki z [widoku drzewa](/Tree_view/pl "Tree view/pl") i wciśnij klawisz spacja.
   - Kliknij prawym przyciskiem myszy na obiekcie siatki w [widoku drzewa](/Tree_view/pl "Tree view/pl") i wybierz **Ukryj zaznaczone** z menu kontekstowego.
3. Okno dialogowe **Parametry cech analizy** w [panelu zadań](/Task_panel/pl "Task panel/pl") również zostało otwarte.
4. Wciśnij przycisk Dodaj i wybierz jeden lub więcej obiektów typu _ściany_, _krawędzie_ lub _wierzchołki_ w [widoku 3D](/3D_view/pl "3D view/pl") aby przypisać do nich siłę. Wybrane obiektu pojawią się na liście.
5. Opcjonalnie, wciśnij przycisk Usuń i odznacz jeden lub więcej obiektów w [widoku 3D](/3D_view/pl "3D view/pl"). Odznaczone obiekty zostaną usunięte z listy.
6. Wprowadź wartość **Siła** w [N].
7. Opcjonalnie, wybierz ścianę lub krawędź i wciśnij przycisk Kierunek aby zmienić kierunek działania siły. Często pole to zostaje puste aby siła działała w kierunku normalnym.
8. Opcjonalnie, zaznacz pole **Odwróć kierunek** aby zmienić wektor siły.
9. Wciśnij przycisk OK aby zakończyć.

![](/images/FEM_ConstraintForce_example.JPG)

## Uwagi

- Zdefiniowana siła jest rozkładana równomiernie na wskazanych obiektach. Przykładowo, zdefiniowanie jednego obciążenia siłą o wartości 200 N przyłożonego do dwóch ścian o tej samej powierzchni sprawi, że każda ze ścian będzie obciążona siłą 100 N.
- To narzędzie korzysta ze [słowa kluczowego \*CLOAD w CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node172.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintForce/pl&oldid=1542209>"
