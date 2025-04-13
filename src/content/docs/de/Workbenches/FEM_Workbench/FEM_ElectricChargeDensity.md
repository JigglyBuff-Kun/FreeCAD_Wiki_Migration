---
title: FEM ElektrischeLadungsdichte
---
|  |
| --- |
| FEM ElektrischeLadungsdichte |
| Menüeintrag |
| Modell → Elektromagnetische Randbedingungen → Elektrische Ladungsdichte |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 1.1 |
| Siehe auch |
| [Beispiel Kapazität](/FEM_Example_Capacitance_Two_Balls/de "FEM Example Capacitance Two Balls/de"), [FEM Anleitung](/FEM_tutorial/de "FEM tutorial/de") |
|  |

| Gleichungslöser |
| --- |
| Elmer |

## Beschreibung

Erstellt eine Belastung mit einer elektrischen Ladungsdichte. Wird zusammen mit der [Elektrostatik](/FEM_EquationElectrostatic/de "FEM EquationElectrostatic/de")-Gleichung eingesetzt.

## Anwendung

1. There are several ways to invoke the command:
   * Press the ![](/images/FEM_ConstraintElectricChargeDensity.svg) [Electric charge density](/FEM_ElectricChargeDensity "FEM ElectricChargeDensity") button.
   * Select the **Model → Electromagnetic boundary conditions → ![](/images/FEM_ConstraintElectricChargeDensity.svg) Electric charge density** option from the menu.
2. Press the Add button.
3. In the [3D view](/3D_view "3D view") select the object the load should be applied to.

## Optionen

Der Dialog ermöglicht die folgenden Einstellungen:

* **Interface Charge Density**: To specify interface charge density in C/m^2.
* **Mode**: To choose between the Interface, Source, Total Interface and Total Source modes.
* **Source Charge Density**: To specify source charge density in C/m^3.
* **Total Charge**: To specify total charge in C.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElectricChargeDensity/de&oldid=1568930>"