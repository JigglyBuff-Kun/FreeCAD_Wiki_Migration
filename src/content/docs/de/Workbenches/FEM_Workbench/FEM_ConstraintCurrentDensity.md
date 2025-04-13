---
title: FEM RandbedingungStromdichte
---
|  |
| --- |
| FEM RandbedingungStromdichte |
| Menüeintrag |
| Modell → Elektromagnetische Randbedingungen → RandbedingungStromdichte |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.21 |
| Siehe auch |
| [GleichungElektrodynamik](/FEM_EquationMagnetodynamic/de "FEM EquationMagnetodynamic/de"), [GleichungElektrodynamik2D](/FEM_EquationMagnetodynamic2D/de "FEM EquationMagnetodynamic2D/de") |
|  |

| Gleichungslöser |
| --- |
| Elmer |

## Beschreibung

Erstellt eine FEM-Randbedingung für die Stromdichte, zur Verwendung mit der [magnetodynamischen Gleichung](/FEM_EquationMagnetodynamic/de "FEM EquationMagnetodynamic/de"), der [magnetodynamischen 2D-Gleichung](/FEM_EquationMagnetodynamic2D/de "FEM EquationMagnetodynamic2D/de") und der [Gleichstromgleichung](/FEM_EquationStaticCurrent/de "FEM EquationStaticCurrent/de").

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_ConstraintCurrentDensity.svg) Randbedingung Stromdichte drücken
   * Den Menüeintrag **Modell → Elektromagnetische Randbedingungen → ![](/images/FEM_ConstraintCurrentDensity.svg) Randbedingung Stromdichte** auswählen.
2. Die Schaltfläche Hinzufügen drücken.
3. In der [3D-Ansicht](/3D_view/de "3D view/de") das Objekt auswählen, dem die Randbedingung zugeordnet werden soll.

## Optionen

Der Dialog Eigenschaften der Analyseelemente ermöglicht die folgenden Einstellungen:

![](/images/FEM_CurrentDensity_dialog.png)

* **Mode** - [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): To choose between Custom (selected directions) and Normal (normal direction) mode.
* **Current density\_\*\_1**: The real/imaginary part of the current density in x-direction in A/m².  
   For other coordinate systems than Cartesian 3D, this will be the first coordinate of the system instead of x.
* **Current density\_\*\_2**: The real/imaginary part of the current density in y-direction in A/m².  
   For other coordinate systems than Cartesian 3D, this will be the second coordinate of the system instead of y.
* **Current density\_\*\_3**: The real/imaginary part of the current density in z-direction in A/m².  
   For other coordinate systems than Cartesian 3D, this will be the third coordinate of the system instead of z. If the coordinate system has no third coordinate, this setting will be ignored.
* **Enable current density\_\***: Whether the corresponding parameter is enabled or disabled (assumed as unknown by the solver). [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
* **Normal current density\_\***: The real/imaginary part of the current density normal to boundary in A/m². [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintCurrentDensity/de&oldid=1570690>"