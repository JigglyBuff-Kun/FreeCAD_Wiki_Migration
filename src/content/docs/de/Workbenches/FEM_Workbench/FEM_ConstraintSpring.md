---
title: FEM RandbedingungFeder
---
|  |
| --- |
| FEM RandbedingungFeder |
| Menüeintrag |
| Modell → Mechanische Randbedingungen und Lasten → Feder |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.20 |
| Siehe auch |
| *Keiner* |
|  |

| Gleichungslöser |
| --- |
| Elmer |

## Beschreibung

Legt eine Randbedingung Feder fest, die für mechanische Analysen mit dem Löser ![](/images/FEM_SolverElmer.svg) [Elmer](/FEM_SolverElmer/de "FEM SolverElmer/de") verwendet wird.

[eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de"): Die Randbedingung Feder kann für die Gleichungen ![](/images/FEM_EquationDeformation.svg) [Verformung](/FEM_EquationDeformation/de "FEM EquationDeformation/de") und ![](/images/FEM_EquationElasticity.svg) [Elastizität](/FEM_EquationElasticity/de "FEM EquationElasticity/de") verwendet werden.

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_ConstraintSpring.svg) Feder drücken.
   * Den Menüeintrag **Modell → Mechanische Randbedingungen und Belastungen → ![](/images/FEM_ConstraintSpring.svg) Feder** auswählen.
2. Die Schaltfläche Hinzufügen Drücken.
3. In der [3D-Ansicht](/3D_view/de "3D view/de") die Flächen auswählen, auf die die Feder angewendet werden soll. Wahlweise die Schaltfläche Remove drücken und auf die Objekte klicken, die aus der Auswahl entfernt werden sollen.
4. Werte für normale oder tangentiale Steifigkeit (in N/m) eingeben und auswählen, welche Elmer verwenden soll.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintSpring/de&oldid=1570661>"