---
title: FEM MaterialFluide
---
|  |
| --- |
| FEM MaterialFluide |
| Menüeintrag |
| Modell → Materialien → Material für Fluide |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM Anleitung](/FEM_tutorial/de "FEM tutorial/de") |
|  |

| Gleichungslöser |
| --- |
| CalculiX, Elmer |

## Beschreibung

Erstellt ein Material für Fluide.

![](/images/FEMMaterialFluidProperties.png)

Der Aufgabenbereich FEM-Material

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_MaterialFluid.svg) Material für Fluide‏‎ drücken.
   * Den Menüeintrag **Modell → Materialien → ![](/images/FEM_MaterialFluid.svg) Material für Fluide‏‎** auswählen.
2. Das Aufgaben-Fenster FEM-Material wird geöffnet.
3. Eine Fluid-Material in der Ausklappliste auswählen. Übliche Arten für Computational Fluid Dynamics (CFD) sind **Air** (Luft) oder **Water** (Wasser). Wahlweise die Schaltfläche Editor aufrufen drücken, um auf den [Materialeditor](/Material_Edit/de "Material Edit/de") zuzugreifen.
4. Wahlweise die Checkbox Diesen Aufgabenbereich benutzen aktivieren, um Materialeigenschaften, wie Dichte, kinematische Viskosität, Wärmeleitfähigkeit, usw. anzupassen.
5. Soll das Fluid auf das ganze Objekt angewendet wird, dürfen keine geometrischen Elemente ausgewählt werden (die Referenfliste bleibt leer). Das Fluid wird auf das ganze Objekt angewendet. Andernfalls wird das Fluid bestimmten Bereichen des Modells von Hand zugeordnet, indem für jeden eingefügten Werkstoff einige ausgewählt werden; dabei sollte kein Bereich ohne ein zugeordnetes Fluid bleiben.
6. Die Schaltfläche OK drücken, um das Aufgaben-Fenster zu schließen.

## Hinweise

* Um ein vorhandenes MaterialFluid-Objekt zu bearbeiten, wird es in der [Baumansicht](/Tree_view/de "Tree view/de") doppelt angeklickt.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialFluid/de&oldid=1571294>"