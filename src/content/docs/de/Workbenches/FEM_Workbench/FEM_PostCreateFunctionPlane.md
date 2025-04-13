---
title: FEM NachbereitungFunktionEbene
---
|  |
| --- |
| FEM NachbereitungFunktionEbene |
| Menüeintrag |
| Ergebnisse → Filterfunktionen → Ebene |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM-Anleitung](/FEM_tutorial/de "FEM tutorial/de") |
|  |

## Beschreibung

Die Funktion ![](/images/FEM_PostCreateFunctionPlane.svg) **FEM NachbereitungFunktionEbene** legt die Geometrie fest, mit der ein Netzobjekt geschnitten wird. Sie wird von den Werkzeugen ![](/images/FEM_PostFilterCutFunction.svg) [Funktion Schnitt-Filter](/FEM_PostFilterCutFunction/de "FEM PostFilterCutFunction/de") und ![](/images/FEM_PostFilterClipRegion.svg) [Region Ausschnitt-Filter](/FEM_PostFilterClipRegion/de "FEM PostFilterClipRegion/de") verwendet.

## Anwendung

### Ebenenfunktion erstellen

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_PostCreateFunctionPlane.svg) Ebene drücken.
   * Den Menüeintrag **Ergebnisse → Filterfunktionen → ![](/images/FEM_PostCreateFunctionPlane.svg) Ebene** auswählen.
2. Das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") wird geöffnet.
3. Wahlweise Werte für den Ursprung und die Ausrichtung der Schnittebene eingeben.
4. Zum Beenden die Schaltfläche OK drücken.

### Ebenenfunktion bearbeiten

Wenn das Plane-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") ausgeblendet ist, wählt man das ![](/images/FEM_PostCreateFunctionPlane.svg) Plane-Objekt in der [3D-Ansicht](/3D_view/de "3D view/de") aus und drückt die Leertaste, um es anzuzeigen, so wie in diesem Beispiel:

![](/images/FEM_Plane-Cut-Function-Example.png)

#### Die Ebene bewegen

* Den großen weißen Quader anklicken und ziehen um die Ebene entlang ihres Normalenvektors zu verschieben. Mit dem Mauszeiger über dem Anfasser schweben (ohne zu klicken) und Ctrl bzw. Strg drücken, um die Ausrichtung des Verschiebewerkzeugs zu ändern.
* Das weiße Gitter anklicken und ziehen.

#### Die Ebene drehen und neigen

* Eine der Linien die die kleinen Würfel mit dem großen weißen Quader verbinden anklicken, um die Ebene um ihren Ursprung herum zu drehen und zu kippen.

#### Die Ebenengröße anpassen

* Einen der 6 kleinen Würfel anklicken und ziehen, um die Ebene zu skalieren. Die Größe spielt allerdings keine Rolle, da das Objekt eine unendliche Ebene ist.

## Hinweise

* Vorhandene Funktionen können für unterschiedliche Filter und für unterschiedliche ![](/images/FEM_PostPipelineFromResult.svg) [Ergebnis-Pipelines](/FEM_PostPipelineFromResult/de "FEM PostPipelineFromResult/de") genutzt werden. Es wird allerdings dazu geraten, für jede Pipeline einen separaten Satz von Funktionen zu verwenden, um den Überblick über die Elemente in der [Baumansicht](/Tree_view/de "Tree view/de") zu behalten.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostCreateFunctionPlane/de&oldid=1570194>"