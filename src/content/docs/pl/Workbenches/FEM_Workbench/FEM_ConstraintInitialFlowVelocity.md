---
title: MES Warunek początkowy prędkości przepływu
---

|                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MES: Warunek początkowy prędkości przepływu                                                                                                                                                                  |
| Lokalizacja w menu                                                                                                                                                                                           |
| Model → Warunki brzegowe dla płynu → Warunek początkowy prędkości przepływu                                                                                                                                  |
| Środowisko pracy                                                                                                                                                                                             |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                                                                                                                                                  |
| Domyślny skrót                                                                                                                                                                                               |
| _brak_                                                                                                                                                                                                       |
| Wprowadzono w wersji                                                                                                                                                                                         |
| -                                                                                                                                                                                                            |
| Zobacz także                                                                                                                                                                                                 |
| [Warunek brzegowy prędkości przepływu](/FEM_ConstraintFlowVelocity/pl "FEM ConstraintFlowVelocity/pl"), [Warunek początkowy ciśnienia](/FEM_ConstraintInitialPressure/pl "FEM ConstraintInitialPressure/pl") |
|                                                                                                                                                                                                              |

| Solvery |
| ------- |
| Elmer   |

## Opis

Tworzy warunek początkowy prędkości do analizy przepływu płynu.

![](/images/FEM_InitialFlowVelocity_dialog.png)

Panel zadań warunku początkowego prędkości przepływu

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_ConstraintInitialFlowVelocity.svg) Warunek początkowy prędkości przepływu.
   - Wybierz opcję **Model → Warunki brzegowe dla płynu → ![](/images/FEM_ConstraintInitialFlowVelocity.svg) Warunek początkowy prędkości przepływu** z menu.
2. Wprowadź wartość początkowej prędkości przepływu dla analizy. Wartość jest wprowadzana jako kombinacja 3 wektorów w kartezjańskim układzie (X,Y,Z).
3. Do analizy 3D wybierz bryłę z modelu, do analizy 2D wybierz powierzchnię. Jest też jednak możliwe wskazanie powierzchni (np. wlotu rury) w 3D lub krawędzi w 2D.

## Równania

Opis wprowadzania równań jest zawarty w sekcji _Równania_ na stronie [warunku brzegowego prędkości przepływu](/FEM_ConstraintFlowVelocity#Formulas/pl "FEM ConstraintFlowVelocity").

## Uwagi

W przypadku prostych analiz nie jest konieczne wprowadzania początkowej prędkości przepływu, ale jest to zalecane.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintInitialFlowVelocity/pl&oldid=1569036>"
