---
title: MES Obciążenie ciśnieniem
---

|                                                                           |
| ------------------------------------------------------------------------- |
| MES: Obciążenie ciśnieniem                                                |
| Lokalizacja w menu                                                        |
| Model → Warunki brzegowe i obciążenia mechaniczne → Obciążenie ciśnieniem |
| Środowisko pracy                                                          |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                               |
| Domyślny skrót                                                            |
| _brak_                                                                    |
| Wprowadzono w wersji                                                      |
| -                                                                         |
| Zobacz także                                                              |
| [Obciążenie siłą](/FEM_ConstraintForce/pl "FEM ConstraintForce/pl")       |
|                                                                           |

| Solvery         |
| --------------- |
| CalculiX, Elmer |

## Opis

Nakłada na ścianę obciążenie ciśnieniem.

## Użycie

1. Jest kilka sposobów wywołania tej komendy:
   - Wciśnij przycisk ![](/images/FEM_ConstraintPressure.svg) Obciążenie ciśnieniem.
   - Wybierz opcję **Model → Warunki brzegowe i obciążenia mechaniczne → ![](/images/FEM_ConstraintPressure.svg) Obciążenie ciśnieniem** z menu.
2. Wciśnij przycisk Dodaj i wybierz ściany w [widoku 3D](/3D_view/pl "3D view/pl"). Opcjonalnie, wciśnij przycisk Usuń i kliknij na ścianach, które chcesz usunąć z zaznaczenia.
3. Edytuj odpowiednie pole aby wprowadzić wartość ciśnienia w MPa.
4. Zaznacz pole do odwrócenia kierunku działania ciśnienia, jeśli to konieczne.

![](/images/FEM_Pressure_example.PNG)

Obciążenie ciśnieniem nałożone na walec

## Uwagi

- Rozkład ciśnienia na powierzchni jest zawsze jednorodny i prostopadły do niej.

- wersja 0.21 i poniżej: Obciążenie ciśnieniem można zadawać na powłoki, ale tylko gdy siatka została utworzona przy pomocy generatora [Gmsh](/FEM_MeshGmshFromShape/pl "FEM MeshGmshFromShape/pl") a tworzenie grup siatki jest włączona. Opcja ta jest włączona na stałe, więc użytkownik nie musi się tym przejmować. Jednak, ze względu na błąd, obciążenie ciśnieniem może wymagać ponownego wygenerowania siatki żeby działało na powłokach.
- To narzędzie korzysta ze [słowa kluczowego \*DLOAD w CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node190.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintPressure/pl&oldid=1543448>"
