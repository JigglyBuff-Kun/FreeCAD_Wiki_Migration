---
title: FEM Elementgeometrie2D
---
|  |
| --- |
| FEM ElementGeometrie2D |
| Menüeintrag |
| Modell → Element-Geometrie → Schalendicke |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| C S |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM Anleitungl](/FEM_tutorial/de "FEM tutorial/de") |
|  |

| Gleichungslöser |
| --- |
| Alle |

## Beschreibung

Ein **ElementGeometry2D**-Objekt wird zum Festlegen der Wandstärke von 2D-FEM-Elementen (Schalenelemente und [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): ebene Spannungs-/Belastungselemente) verwendet; für alle oder nur diejenigen, die auf der ausgewählten Oberfläche liegen.

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_ElementGeometry2D.svg) Schalendicke drücken.
   * Den Menüeintrag **Modell → Element-Geometrie → ![](/images/FEM_ElementGeometry2D.svg) Schalendicke** auswählen.
2. Die Schalendicke festlegen.
3. Wahlweise die Schaltfläche Hinzufügen im Aufgabenbereich drücken und danach auf die Fläche klicken, die eine voreingestellte Wandstärke erhalten soll. Wenn die Flächenauswahl leer ist, werden automatisch alle übrigen Flächen zugeordnet (deren Wandstärke nicht durch andere ElementGeometry2D-Objekte festgelegt ist).

## Einschränkungen

* Zurzeit werden Analysen, die Schalenelemente mit Festkörper- oder Kantenelementen (Balken) kombinieren, nicht unterstützt.

## Eigenschaften

Daten**Thickness**: Legt die Wandstärke der 2D-Elemente fest.

## Hinweise

* Zum Betrachten der Ergebnisse des Lösers CalculiX auf dem auf die vorgegebene Wandstärke erweiterten Netz muss die Eigenschaft `Beam Shell Result Output 3D` des [FEM LöserCalculixCxxtools](/FEM_SolverCalculixCxxtools/de "FEM SolverCalculixCxxtools/de")-Objekts auf `True` gesetzt werden. Soll nur die festgelegte Wandstärke vor dem Ausführen der eigentlichen Berechnung dargestellt werden, kann man eine Analyse vom Typ *check* ausführen, bei der diese Eigenschaft auf `True` gesetzt wird.
* Diese Funktion verwendet die [\*SHELL SECTION-Karte in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node238.html) für Schalenelemente und die [\*SOLID SECTION-Karte](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node239.html) für ebene Spannungs-/Belastungselemente.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElementGeometry2D/de&oldid=1544964>"