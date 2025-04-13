---
title: FEM ElementFluid1D
---
|  |
| --- |
| FEM ElementFluid1D |
| Menüeintrag |
| Model → Element Geometry → Fluid section for 1D flow |
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
| CalculiX |

## Beschreibung

Erstellt einen FEM-Strömungsabschnitt für pneumatische oder hydraulische Anlagen, die mit CalculiX berechnet werden.

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_ElementFluid1D.svg) Fluid-Abschnitt für 1D-Strömung drücken.
   * Den Menüeintrag **Model → Element-Geometrie → ![](/images/FEM_ElementFluid1D.svg) Fluid-Abschnitt für 1D-Strömung** auswählen.
2. Art des Fluids auswählen: Flüssigkeit, Gas oder Open Channel (offenes Gerinne?)
3. Art des Abschnitts auswählen: Pipe Manning, Einlassrohr usw.
4. Parameter der Abschnittsarten eingeben.
5. Eine Kante auswählen und hinzufügen.

## Einschränkungen

1. The card only works with a 3 noded network element type. Information can be found here: <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node54.html>

## Hinweise

1. An example of the set up of a hydraulic network can be found here: <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node13.html>
2. The [\*FLUID SECTION card](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node205.html) is used to model fluid elements for 1D flow.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElementFluid1D/de&oldid=1463976>"