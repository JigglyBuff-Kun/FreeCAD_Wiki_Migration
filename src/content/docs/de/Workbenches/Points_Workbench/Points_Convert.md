---
title: Points Umwandeln
---
|  |
| --- |
| Points umwandeln |
| Menüeintrag |
| Punkte → In Punkte umwandeln... |
| Arbeitsbereich |
| [Points](/Points_Workbench/de "Points Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der Befehl **Points Umwandeln** erzeugt Punktwolken aus Formobjekten (shape objects) oder Netzobjekten (mesh objects).

Ein Formobjekt bezeichnet hier jedes Objekt mit einer Daten-Eigenschaft**Shape**. Objekte, die mit den Arbeitsbereichen [Part](/Part_Workbench/de "Part Workbench/de") und [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") erstellt wurden, sind Formobjekte. Aber auch Objekte, die mit den Arbeitsbereichen [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") und [Draft](/Draft_Workbench/de "Draft Workbench/de") erstellt wurden.

## Anwendung

1. Ein oder mehrere Objekte auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Points_Convert.svg) In Punkte umwandeln... drücken.
   * Den Menüeintrag **Points → In Punkte umwandeln...** auswählen.
3. Das Dialogfeld **Abstand** wird geöffnet.
4. Den **Maximalabstand** eingeben. Der Wert muss im Bereich `0.01` - `10.00` liegen.
5. Die Schaltfläche OK drücken, um das Dialogfeld zu schließen und den Befehl zu beenden.

## Eigenschaften

Punktwolkenobjekte sind [App GeoFeature](/App_GeoFeature/de "App GeoFeature/de")-Objekte mit den folgenden zusätzlichen Eigenschaften. Die Option **Ausgeblendete anzeigen** im Kontextmenü des [Eigenschaftseditors](/Property_editor/de "Property editor/de") auswählen, um die ausgeblendeten Eigenschaften anzuzeigen.

### Daten

Base

* Daten-Eigenschaft (versteckt)**Points** (`PointsKernel`): ein Points-Kernel, der mit diesem Objekt verknüpft ist.
* Daten-Eigenschaft (versteckt)**Normal** (`NormalList`): eine Liste von Normalen. Diese Eigenschaft ist nur für Punktwolken verfügbar, die mit dem Befehl Punkte umwandeln aus Netzobjekten oder Formobjekten mit Flächen erstellt wurden.

Strukturierte Punkte

* Daten**Höhe** (`Integer`): die Anzahl der eindeutigen Y Koordinaten in der Punktwolke. Diese Eigenschaft ist nur für Punktwolken verfügbar, die mit dem Befehl [Punkte strukturieren](/Points_Structure/de "Points Structure/de") erstellt wurden.
* Daten**Breite** (`Integer`): die Anzahl der eindeutigen X Koordinaten in der Punktwolke. Diese Eigenschaft ist nur für Punktwolken verfügbar, die mit dem Befehl [Punkte strukturieren](/Points_Structure/de "Points Structure/de") erstellt wurden.

### Ansicht

Base

* Ansicht**Point Size** (`FloatConstraint`): die Größe der Punkte in Pixeln in der [3D Ansicht](/3D_view/de "3D view/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Points_Convert/de&oldid=1560884>"