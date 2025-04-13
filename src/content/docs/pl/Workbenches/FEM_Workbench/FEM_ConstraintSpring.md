---
title: MES Sprężyna
---

|                                                              |
| ------------------------------------------------------------ |
| MES: Sprężyna                                                |
| Lokalizacja w menu                                           |
| Model → Warunki brzegowe i obciążenia mechaniczne → Sprężyna |
| Środowisko pracy                                             |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                  |
| Domyślny skrót                                               |
| _brak_                                                       |
| Wprowadzono w wersji                                         |
| 0.20                                                         |
| Zobacz także                                                 |
| _brak_                                                       |
|                                                              |

| Solvery |
| ------- |
| Elmer   |

## Opis

Definiuje warunek brzegowy sprężyny, do wykorzystania w analizach mechanicznych z użyciem ![](/images/FEM_SolverElmer.svg) [solvera Elmer](/FEM_SolverElmer/pl "FEM SolverElmer/pl").

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"): Sprężyna może być wykorzystana w równaniach ![](/images/FEM_EquationDeformation.svg) [deformacji](/FEM_EquationDeformation/pl "FEM EquationDeformation/pl") i ![](/images/FEM_EquationElasticity.svg) [elastyczności](/FEM_EquationElasticity/pl "FEM EquationElasticity/pl").

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_ConstraintSpring.svg) Sprężyna.
   - Wybierz opcję **Model → Warunki brzegowe i obciążenia mechaniczne → ![](/images/FEM_ConstraintSpring.svg) Sprężyna** z menu.
2. Wciśnij przycisk Dodaj.
3. W [widoku 3D](/3D_view/pl "3D view/pl") wybierz ściany, do których sprężyna powinna zostać przyłożona. Aby usunąć ściany z zaznaczenia, wciśnij przycisk Usuń i kliknij na nich.
4. Zdefiniuj sztywność w kierunku normalnym lub stycznym (w N/m) i wybierz, którą Elmer powinien użyć.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintSpring/pl&oldid=1569065>"
