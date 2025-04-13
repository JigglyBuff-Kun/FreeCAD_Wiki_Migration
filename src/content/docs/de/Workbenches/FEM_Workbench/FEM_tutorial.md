---
title: FEM Tutorial
---
|  |
| --- |
| Tutorium |
| Thema |
| Finite-Elemente-Analyse |
| Niveau |
| Anfänger |
| Zeit zum Abschluss |
| 10 Minuten + Löserzeit |
| Autoren |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) |
| FreeCAD-Version |
| 0.17 oder höher |
| Beispieldateien |
| *None* |
| Siehe auch |
| *None* |
|  |

## Einleitung

Dieses Tutorium soll dem Leser den grundlegenden Arbeitsablauf des Arbeitsbereichs FEM sowie die meisten Werkzeuge vorstellen, die zur Durchführung einer statischen Analyse zur Verfügung stehen.

![](/images/FEM_tutorial_result.png)

## Voraussetzungen

* FreeCAD Version 0.17 oder höher.
* [Netgen](http://sourceforge.net/projects/netgen-mesher/) und/oder [GMSH](http://geuz.org/gmsh/) ist auf dem System installiert (in der FreeCAD-Installation enthalten).
* [Calculix](http://www.calculix.de/) ist auf dem System installiert (in der FreeCAD-Installation enthalten).
* Der Leser verfügt über Grundkenntnisse in der Anwendung der Arbeitsbereiche [Part](/Part_Workbench/de "Part Workbench/de") und [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de").

## Ablauf

### Modellieren

In diesem Beispiel wird ein Würfel als Studienobjekt verwendet, aber stattdessen kann auch jedes andere Modell verwendet werden, das in den Arbeitsbereichen Part oder PartDesign erstellt wurde.

1. Die Schaltfläche ![](/images/Std_New.svg) [Std Neu](/Std_New/de "Std New/de") drücken, um ein neues Dokument zu erstellen.
2. Den Arbeitsbereich ![](/images/Workbench_Part.svg) [Part](/Part_Workbench "Part Workbench") aktivieren.
3. Einen Würfel erstellen.
4. Seine **Abmessungen** wie folgt ändern:
   1. Länge: 8.000 m.
   2. Breite: 1.000 m.
   3. Höhe: 1.000 m.

Wir haben nun ein Modell, mit dem wir arbeiten können.

### Analyse erstellen

1. Den Arbeitsbereich ![](/images/Workbench_FEM.svg) [FEM](/FEM_Workbench "FEM Workbench") aktivieren.
2. Den Menüeintrag **Modell → ![](/images/FEM_Analysis.svg) Analyse-Container‏‎** auswählen.

### Randbedingungen und Kräfte

1. Das Netz in der Baumansicht ausblenden.
2. Das Originalmodell anzeigen.
3. ![](/images/FEM_ConstraintFixed.svg) [Randbedingung Festsetzen](/FEM_ConstraintFixed/de "FEM ConstraintFixed/de") auswählen.
4. Auf die Schaltfläche Hinzufügen klicken, die Rückseite des Würfelobjekts (die Fläche auf der YZ-Ebene) auswählen und OK drücken.
5. ![](/images/FEM_ConstraintForce.svg) [Randbedingung Krafteinwirkung](/FEM_ConstraintForce/de "FEM ConstraintForce/de") auswählen.
6. Auf die Schaltfläche Hinzufügen klicken, die Vorderseite des Würfelobjekts (die zur Rückseite parallel liegende Fläche) und den Wert für **Force [N]** (Flächenlast in N) auf 9000000 setzen.
7. **Direction** (Richtung) auf **-Z** setzen durch Auswahl einer der Flächenkanten, die parallel zu dieser Richtung liegen.
8. Auf OK klicken.

Wir haben jetzt die Lagerstellen und Kräfte für unsere statische Studie festgelegt.

### Material

1. ![](/images/FEM_MaterialSolid.svg) [Material für Feststoffe](/FEM_MaterialSolid/de "FEM MaterialSolid/de") auswählen und Calculix-Steel als Material auswählen.
2. Auf OK klicken.

### Netzerstellung

Es wird empfohlen, das Erstellen eines Netzes als letzten Schritt der Analysevorbereitung auszuführen, da dies im Zusammenhang mit einer Geometrie in FreeCAD steht.
Abhängig von der FreeCAD-Installation, können Die Vernetzugswerkzeuge Netgen oder GMSH vorhanden sein; beide können verwendet werden.

#### Netgen

1. Model auswählen.
2. ![](/images/FEM_MeshNetgenFromShape.svg) [FEM mesh from shape by Netgen](/FEM_MeshNetgenFromShape/de "FEM MeshNetgenFromShape/de"): Erstellt mit Hlfe von Netge ein Finite-Elemente-Netz eines Modells.
3. Im Vernetzungsdialog klickt man auf Anwenden und anschließend auf OK.

Man kann auch ein Netz auf eine mechanische Anylyse ziehen und ablegen, die noch kein Netz in der [Baumansicht](/Tree_view/de "Tree view/de") enthält.

#### GMSH

1. Model auswählen.
2. ![](/images/FEM_MeshGmshFromShape.svg) [FEMGmsh from shape by Gmsh](/FEM_MeshGmshFromShape/de "FEM MeshGmshFromShape/de"): Erstellt mit Hlfe von Gmsh ein Finite-Elemente-Netz eines Modells.
3. Im Vernetzungsdialog klickt man auf Anwenden und anschließend auf OK.

Wir haben unser Objekt nun vernetzt und sind bereit, Randbedingungen und Kräfte hinzuzufügen.

### Berechnung

#### Standardablauf

1. Das imAnalyse-Container enthaltene Löser-Objekt ![](/images/FEM_SolverCalculixCxxtools.svg) auswählen.
2. Den Menüeintrag ![](/images/FEM_SolverControl.svg) [Solver job control](/FEM_SolverControl/de "FEM SolverControl/de") auswählen.
3. **.inp Datei schreiben** auswählen.
4. **CalculiX ausführen** auswählen.
5. Die Schaltfläche Schließen drücken.

#### Schneller Ablauf

1. Das Löserobjekt ![](/images/FEM_SolverCalculixCxxtools.svg) auswählen, das sich im **Analysis**-Container befindet.
2. Auf ![](/images/FEM_SolverRun.svg) [Run solver calculations](/FEM_SolverRun/de "FEM SolverRun/de") klicken.

### Ergebnisse analysieren

1. Das **CCX\_Results**-Objekt im **Objektbaum** auswählen.
2. ![](/images/FEM_ResultShow.svg) [Ergebnis anzeigen](/FEM_ResultShow/de "FEM ResultShow/de") auswählen.
3. Einen der verschiedenen Ergebnistypen auswählen, um die Ergebnisse anzuzeigen.
4. Der Schieberegler am unteren Rand kann verwendet werden, um die Darstellung des Netzes zu ändern. Auf diese Weise können wir die Verformung, die das Objekt erfährt, visualisieren, wobei zu beachten ist, dass es sich hierbei um eine Annäherung handelt.
5. Um die Ergebnisse zu entfernen, wähle ![](/images/FEM_ResultsPurge.svg) [Purge results](/FEM_ResultsPurge/de "FEM ResultsPurge/de")

**Vergleich zur vorherigen Beispieldatei**

Wird der Ergebnistyp **Verschiebung Z** gewählt, kann man sehen, dass der erhaltene Wert fast identisch mit dem von FreeCAD gelieferten Testbeispiel ist. Unterschiede können aufgrund der Qualität des Netzes und der Anzahl der Knoten, die es besitzt, auftreten.

Wir sind nun mit dem grundlegenden Arbeitsablauf für den Arbeitsbereich [FEM](/FEM_Workbench/de "FEM Workbench/de") fertig.

## Hinweise

* Eine Video-Anleitung, die auf dieser Anleitung basiert: [FEM MaterialReinforced tutorial](https://www.youtube.com/watch?v=SZTIqhfCSVc).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_tutorial/de&oldid=1392099>"