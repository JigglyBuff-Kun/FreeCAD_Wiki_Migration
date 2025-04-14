---
title: Standard AnsichtIsometrisch
---

|                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------- |
| Std ViewIsometric                                                                                                                           |
| Menüeintrag                                                                                                                                 |
| Ansicht → Standardansichten → Axonometrisch → Isometrisch                                                                                   |
| Arbeitsbereich                                                                                                                              |
| Alle                                                                                                                                        |
| Standardtastenkürzel                                                                                                                        |
| 0                                                                                                                                           |
| Eingeführt in Version                                                                                                                       |
| -                                                                                                                                           |
| Siehe auch                                                                                                                                  |
| [Std AnsichtDimetrisch](/Std_ViewDimetric/de "Std ViewDimetric/de"), [Std AnsichtTrimetrisch](/Std_ViewTrimetric/de "Std ViewTrimetric/de") |
|                                                                                                                                             |

## Beschreibung

Der **Std AnsichtIsometrisch**-Befehl richtet die Kamera in der aktiven [3D-Ansicht](/3D_view/de "3D view/de") neu aus, um eine [isometrisch](https://de.wikipedia.org/wiki/Axonometrie#Isometrische_Axonometrie)e Ansicht zu erreichen. Für eine wahrlich (truly) trimetrische Ansicht muss die 3D-Ansicht im [orthographischen Modus](/Std_OrthographicCamera/de "Std OrthographicCamera/de") sein, aber der Befehl funktioniert auch, wenn die Ansicht im [perspektivischen Modus](/Std_PerspectiveCamera/de "Std PerspectiveCamera/de") ist.

![](/images/Std_ViewIsometric_example.svg)

Das [Achsenkreuz](/Std_AxisCross/de "Std AxisCross/de") und ein Würfel in isometrischer Ansicht

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/Std_ViewIsometric.svg) Isometrisch drücken.
   - Den Menüeintrag **Ansicht → Standardansichten → Axonometrisch → Isometrisch** auswählen.
   - Die Menüoption **Standardansichten → Axonometrisch → Isometrisch** im Kontextmenü der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
   - Die Menüoption **![](/images/Std_ViewIsometric.svg) Isometrisch** im Miniwürfelmenü des [Navigationswürfels](/Navigation_Cube/de "Navigation Cube/de") auswählen.
   - Das Tastaturkürzel: 0.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Die Methode `viewIsometric` des View-Objekts wird verwendet, um die Ansicht auf isometrisch zu ändern. Die Methoden `viewDimetric` und `viewTrimetric` stehen auch zur Verfügung.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.viewIsometric()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewIsometric/de&oldid=1500144>"
