---
title: MES Gęstość ładunku elektrycznego
---

|                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FEM ConstraintElectricChargeDensity                                                                                                                                   |
| Lokalizacja w menu                                                                                                                                                    |
| Model → Warunki brzegowe elektromagnetyczne → Gęstość ładunku elektrycznego                                                                                           |
| Środowisko pracy                                                                                                                                                      |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                                                                                                           |
| Domyślny skrót                                                                                                                                                        |
| _brak_                                                                                                                                                                |
| Wprowadzono w wersji                                                                                                                                                  |
| 1.1                                                                                                                                                                   |
| Zobacz także                                                                                                                                                          |
| [MES: Przykład pojemność dwóch kul](/FEM_Example_Capacitance_Two_Balls/pl "FEM Example Capacitance Two Balls/pl"), [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                                                                                                                                       |

| Solvery |
| ------- |
| Elmer   |

## Opis

Tworzy obciążenie gęstością ładunku elektrycznego. Używane z równaniem [elektrostatycznym](/FEM_EquationElectrostatic/pl "FEM EquationElectrostatic/pl").

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_ConstraintElectricChargeDensity.svg) Gęstość ładunku elektrycznego.
   - Wybierz opcję **Model → Warunki brzegowe elektromagnetyczne → ![](/images/FEM_ConstraintElectricChargeDensity.svg) Gęstość ładunku elektrycznego** z menu.
2. Wciśnij przycisk Dodaj.
3. W [widoku 3D](/3D_view/pl "3D view/pl") wybierz obiekt, do którego chcesz przypisać obciążenie.

## Opcje

To okno dialogowe zawiera następujące ustawienia:

- **Interface Charge Density**: Do definiowania gęstości ładunku na powierzchni w C/m^2.
- **Mode**: Do wyboru między trybem Interface, Source, Total Interface i Total Source.
- **Source Charge Density**: Do definiowania gęstości ładunku źródła w C/m^3.
- **Total Charge**: Do definiowania całkowitego ładunku w C.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElectricChargeDensity/pl&oldid=1569041>"
