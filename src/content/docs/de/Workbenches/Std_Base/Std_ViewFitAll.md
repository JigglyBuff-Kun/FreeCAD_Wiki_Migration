---
title: Std AnsichtAllesEinpassen
---

|                                                                                   |
| --------------------------------------------------------------------------------- |
| Std AnsichtAllesEinpassen                                                         |
| Menüeintrag                                                                       |
| Ansicht → Standardansichten‏‎ → Einpassen                                         |
| Arbeitsbereich                                                                    |
| Alle                                                                              |
| Standardtastenkürzel                                                              |
| V F                                                                               |
| Eingeführt in Version                                                             |
| -                                                                                 |
| Siehe auch                                                                        |
| [Std AnsichtAuswahlEinpassen](/Std_ViewFitSelection/de "Std ViewFitSelection/de") |
|                                                                                   |

## Beschreibung

Der Befehl **Std AnsichtAllesEinpassen** zoomt und schwenkt die Kamera, bis alle sichtbaren Objekte in die aktive [3D-Ansicht](/3D_view/de "3D view/de") passen.

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Std_ViewFitAll.svg) Einpassen drücken.
   - Den Menüeintrag **Ansicht → Standardansichten → ![](/src/assets/images/Std_ViewFitAll.svg) Einpassen** auswählen.
   - Die Menüoption **![](/src/assets/images/Std_ViewFitAll.svg) Einpassen** im Kontextmenü der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
   - Die Menüoption **![](/src/assets/images/Std_ViewFitAll.svg) Einpassen** im Miniwürfelmenü des [Navigationswürfels](/Navigation_Cube/de "Navigation Cube/de") auswählen.
   - Das Tastaturkürzel V dann F.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Die Methode `fitAll` des View-Objekts wird verwendet, um den Zoomfaktor so zu ändern, dass alles in die Ansicht passt.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.fitAll()

```

Für die aktive Ansicht kann auch die Methode `SendMsgToActiveView` des FreeCADGui-Objekts verwendet werden.

```
import FreeCADGui

FreeCADGui.SendMsgToActiveView("ViewFit")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewFitAll/de&oldid=1500138>"
