---
title: FEM RandbedingungElektrostatischesPotential
---
|  |
| --- |
| FEM RandbedingungElektrostatischesPotential |
| Menüeintrag |
| Modell → Elektromagnetische Randbedingungen → Randbedingung elektrostatisches Potential |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM Beispiel Kapazität Zweier Kugeln](/FEM_Example_Capacitance_Two_Balls/de "FEM Example Capacitance Two Balls/de"), [FEM Anleitung](/FEM_tutorial/de "FEM tutorial/de") |
|  |

| Gleichungslöser |
| --- |
| Elmer |

## Beschreibung

Erstellt eine FEM-Randbedingung für das elektrostatische Potential, zur Verwendung mit der [Elektrostatik-Gleichung](/FEM_EquationElectrostatic/de "FEM EquationElectrostatic/de"), der [Gleichung für die elektrische Kraft](/FEM_EquationElectricforce/de "FEM EquationElectricforce/de"), der
[Elektrodynamik-Gleichung](/FEM_EquationMagnetodynamic/de "FEM EquationMagnetodynamic/de"), der [2D-Elektrodynamik-Gleichung](/FEM_EquationMagnetodynamic2D/de "FEM EquationMagnetodynamic2D/de") oder der [Gleichstrom-Gleichung](/FEM_EquationStaticCurrent/de "FEM EquationStaticCurrent/de")

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_ConstraintElectrostaticPotential.svg) Randbedingung elektrostatisches Potential drücken
   * Den Menüeintrag **Modell → Elektromagnetische Randbedingungen → ![](/images/FEM_ConstraintElectrostaticPotential.svg) Randbedingung elektrostatisches Potential** auswählen.
2. Die Schaltfläche Hinzufügen Drücken.
3. In der [3D-Ansicht](/3D_view/de "3D view/de") das Objekt auswählen, dem die Randbedingung zugeordnet werden soll.

## Optionen

Der Dialog Eigenschaften der Analyseelemente ermöglicht die folgenden Einstellungen:

![](/images/FEM_ElectrostaticPotential_dialog.png)

* **Boundary Condition**: To choose between Dirichlet (prescribed potential) and Neumann (prescribed electric flux/surface charge density) boundary condition type. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
* **Potential**: The electric potential in V.
* **Electromagnetic Potential**: To enable the input of the components of a potential vector field.
* **x**: The real/imaginary part of the potential in x-direction in V.  
   For other coordinate systems than Cartesian 3D, this will be the first coordinate of the system instead of x.
* **y**: The real/imaginary part of the potential in y-direction in V.  
   For other coordinate systems than Cartesian 3D, this will be the second coordinate of the system instead of y.
* **z**: The real/imaginary part of the potential in z-direction in V.  
   For other coordinate systems than Cartesian 3D, this will be the third coordinate of the system instead of z. If the coordinate system has no third coordinate, this setting will be ignored.
* **x, y, z checkboxes**: To declare the corresponding potential as unknown for the solver.
* **Electric Infinity**: Option to make a spherical approximation that the volume above the face extends to infinity.
* **Potential Constant**: Option to set a constant potential.
* **Surface Charge Density**: The surface charge density (electric flux) in C/m^2. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
* **Capacitance Body**: Counter of the body (or face) with a capacitance.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintElectrostaticPotential/de&oldid=1570704>"