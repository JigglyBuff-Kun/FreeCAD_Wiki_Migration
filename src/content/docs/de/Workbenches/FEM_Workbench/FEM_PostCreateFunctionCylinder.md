---
title: FEM NachbereitungFunktionZylinder
---
|  |
| --- |
| FEM NachbereitungFunktionZylinder |
| Menüeintrag |
| Ergebnisse → Filterfunktionen → Zylinder |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.21 |
| Siehe auch |
| [FEM-Anleitung](/FEM_tutorial/de "FEM tutorial/de") |
|  |

## Beschreibung

Die Funktion ![](/images/FEM_PostCreateFunctionCylinder.svg) **FEM NachbereitungFunktionZylinder** legt die Geometrie fest, mit der ein Netzobjekt geschnitten wird. Sie wird von den Werkzeugen ![](/images/FEM_PostFilterCutFunction.svg) [Funktion Schnitt-Filter](/FEM_PostFilterCutFunction/de "FEM PostFilterCutFunction/de") und ![](/images/FEM_PostFilterClipRegion.svg) [Region Ausschnitt-Filter](/FEM_PostFilterClipRegion/de "FEM PostFilterClipRegion/de") verwendet.

## Anwendung

### Zylinderfunktion erstellen

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_PostCreateFunctionCylinder.svg) Zylinder drücken.
   * Den Menüeintrag **Ergebnisse → Filterfunktionen → ![](/images/FEM_PostCreateFunctionCylinder.svg) Zylinder** auswählen.
2. Das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") wird geöffnet.
3. Wahlweise die Werte für den Mittelpunkt und den Radius des Schnittzylinders festlegen.
4. Zum Beenden die Schaltfläche OK drücken.

### Zylinderfunktion bearbeiten

Wenn das Cylinder-Objekt in der [3D-Ansicht](/3D_view/de "3D view/de") nicht sichtbar ist, wählt man das ![](/images/FEM_PostCreateFunctionCylinder.svg) Cylinder-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") aus und drückt die Leertaste, um es anzuzeigen.

![](/images/FEM_Cylinder-Cut-Function-Example.png)

#### Den Zylinder bewegen

* Klicke und ziehe den großen weißen Quader, um den Zylinder entlang seines Normalenvektors zu bewegen.
* Klicke und ziehe das weiße Gitter.

#### Den Zylinder drehen und neigen

* Klicken und ziehe die Linie, die die kleinen Würfel mit dem großen weißen Quader verbindet, um den Zylinder um seinen Ursprung zu drehen und zu kippen.

#### Die Zylindergröße anpassen

* Klicke und ziehe einenn der 6 kleinen Würfel, um den Zylinder zu skalieren.

## Hinweise

* Vorhandene Funktionen können für unterschiedliche Filter und für unterschiedliche ![](/images/FEM_PostPipelineFromResult.svg) [Ergebnis-Pipelines](/FEM_PostPipelineFromResult/de "FEM PostPipelineFromResult/de") genutzt werden. Es wird allerdings dazu geraten, für jede Pipeline einen separaten Satz von Funktionen zu verwenden, um den Überblick über die Elemente in der [Baumansicht](/Tree_view/de "Tree view/de") zu behalten.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostCreateFunctionCylinder/de&oldid=1570190>"