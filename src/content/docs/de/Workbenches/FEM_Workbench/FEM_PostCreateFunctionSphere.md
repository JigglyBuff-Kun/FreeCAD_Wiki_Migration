---
title: FEM NachbereitungFunktionKugel
---
|  |
| --- |
| FEM NachbereitungFunktionKugel |
| Menüeintrag |
| Ergebnisse → Filterfunktionen → Kugel |
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

Die Funktion ![](/images/FEM_PostCreateFunctionSphere.svg) **FEM NachbereitungFunktionKugel** legt die Geometrie fest, mit der ein Netzobjekt geschnitten wird. Sie wird von den Werkzeugen ![](/images/FEM_PostFilterCutFunction.svg) [Funktion Schnitt-Filter](/FEM_PostFilterCutFunction/de "FEM PostFilterCutFunction/de") und ![](/images/FEM_PostFilterClipRegion.svg) [Region Ausschnitt-Filter](/FEM_PostFilterClipRegion/de "FEM PostFilterClipRegion/de") verwendet.

## Anwendung

### Kugelfunktion erstellen

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_PostCreateFunctionSphere.svg) Kugel drücken.
   * Den Menüeintrag **Ergebnisse → Filterfunktionen → ![](/images/FEM_PostCreateFunctionSphere.svg) Kugel** auswählen.
2. Ein [Aufgaben-Fenster](/Task_panel/de "Task panel/de") wird geöffnet.
3. Wahlweise Werte für den Ursprung und den Radius der Schnittkugel eingeben.
4. Zum Beenden die Schaltfläche OK drücken.

### Kugelfunktion bearbeiten

Wenn das Sphere-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") ausgeblendet ist, wählt man das ![](/images/FEM_PostCreateFunctionSphere.svg) Sphere-Objekt in der [3D-Ansicht](/3D_view/de "3D view/de") aus und drückt die Leertaste, um es anzuzeigen, so wie in diesem Beispiel:

![](/images/FEM_Sphere-Cut-Function-Example.png)

#### Die Kugel bewegen

* Durch Klicken und Ziehen am kugelförmigen Gitter lässt sich die Kugel bewegen.

#### Die Kugelgröße anpassen

* Durch Klicken und Ziehen an einem der 8 kleinen Würfel wird die Größe der Kugel angepasst.

## Hinweise

* Vorhandene Funktionen können für unterschiedliche Filter und für unterschiedliche ![](/images/FEM_PostPipelineFromResult.svg) [Ergebnis-Pipelines](/FEM_PostPipelineFromResult/de "FEM PostPipelineFromResult/de") genutzt werden. Es wird allerdings dazu geraten, für jede Pipeline einen separaten Satz von Funktionen zu verwenden, um den Überblick über die Elemente in der [Baumansicht](/Tree_view/de "Tree view/de") zu behalten.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostCreateFunctionSphere/de&oldid=1570164>"