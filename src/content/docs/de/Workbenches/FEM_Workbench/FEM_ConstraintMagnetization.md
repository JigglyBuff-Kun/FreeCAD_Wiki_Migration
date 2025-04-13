---
title: FEM RandbedingungMagnetisierung
---
|  |
| --- |
| FEM RandbedingungMagnetisierung |
| Menüeintrag |
| Modell → Elektromagnetische Randbedingungen → Randbedingung Magnetisierung |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.21 |
| Siehe auch |
| [MagnetodynamischeGleichung](/FEM_EquationMagnetodynamic/de "FEM EquationMagnetodynamic/de"), [Magnetodynamische2DGleichung](/FEM_EquationMagnetodynamic2D/de "FEM EquationMagnetodynamic2D/de") |
|  |

| Gleichungslöser |
| --- |
| Elmer |

## Beschreibung

Erstellt eine FEM-Randbedingung für die Magnetisierung, zur Verwendung mit der [magnetodynamischen Gleichung](/FEM_EquationMagnetodynamic/de "FEM EquationMagnetodynamic/de") und der [magnetodynamischen 2D-Gleichung](/FEM_EquationMagnetodynamic2D/de "FEM EquationMagnetodynamic2D/de").

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_ConstraintMagnetization.svg) Randbedingung Magnetisierung drücken
   * Den Menüeintrag **Modell → Elektromagnetische Randbedingungen → ![](/images/FEM_ConstraintMagnetization.svg) Randbedingung Magnetisierung** auswählen.
2. Die Schaltfläche Hinzufügen drücken.
3. In der [3D-Ansicht](/3D_view/de "3D view/de") das Objekt auswählen, dem die Randbedingung zugeordnet werden soll.

## Optionen

Der Dialog ermöglicht die folgenden Einstellungen:

![](/images/FEM_Magnetization_dialog.png)

* **Magnetization\_\*\_1**: The real/imaginary part of the magnetization in x-direction in A/m.  
   For other coordinate systems than Cartesian 3D, this will be the first coordinate of the system instead of x.
* **Magnetization\_\*\_2**: The real/imaginary part of the magnetization in y-direction in A/m.  
   For other coordinate systems than Cartesian 3D, this will be the second coordinate of the system instead of y.
* **Magnetization\_\*\_3**: The real/imaginary part of the magnetization in z-direction in A/m.  
   For other coordinate systems than Cartesian 3D, this will be the third coordinate of the system instead of z. If the coordinate system has no third coordinate, this setting will be ignored.
* **Magnetization\_\*\_\*\_Disabled**: Whether the corresponding parameter is disabled (assumed as unknown by the solver).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintMagnetization/de&oldid=1570688>"