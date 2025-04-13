---
title: Draft Neigung
---
|  |
| --- |
| Draft Neigung |
| Menüeintrag |
| Änderung → Neigung festlegen Werkzeuge → Neigung festlegen |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_Slope.svg)  **Draft Neigung** neigt ausgewählte [Draft Linien](/Draft_Line/de "Draft Line/de") oder [Draft Kantenzüge](/Draft_Wire/de "Draft Wire/de"), indem er die Z-Koordinate aller Punkte nach dem ersten Punkt vergrößert oder verringert. Er kann auch zum Abflachen von [Draft Kantenzügen](/Draft_Wire/de "Draft Wire/de") verwendet werden. Man beachte, dass die Neigung relativ zur XY-Ebene ist, die durch die Daten-Eigenschaft**Placement** der Objekte definiert ist.

![](/images/Draft_Slope_example.png)

Links eine horizontale Draft-Linie. Rechts die gleiche Linie mit einem Neigungswert von 1 (Winkel ist 45°)

## Anwendung

1. Eine oder mehrere [Draft Linien](/Draft_Line/de "Draft Line/de") und/oder [Draft Kantenzüge](/Draft_Wire/de "Draft Wire/de") auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Die Schaltfläche ![](/images/Draft_Slope.svg) Neigung festlegen drücken.
   * Draft: Den Menüeintrag **Änderung → ![](/images/Draft_Slope.svg) Neigung festlegen** auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Werkzeuge → ![](/images/Draft_Slope.svg) Neigung festlegen** auswählen.
3. Einen Wert für die **Neigung** eingeben. `0` bedeutet, dass jedes Segment horizontal ist, `0,5` bedeutet, dass der Höhenunterschied (Delta-Höhe) für jedes Segment das `0,5`-fache seiner Länge beträgt, usw. Der Wert kann auch negativ sein.
4. Enter oder die Schaltfläche OK drücken, um den Befehl zu abzuschließen.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Es gibt keine Python-Methode zum Neigen von Objekten. Um die Ergebnisse des Befehls Draft Neigung zu emulieren, muss die Eigenschaft `Points` von Drahtobjekten geändert werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Slope/de&oldid=1500026>"