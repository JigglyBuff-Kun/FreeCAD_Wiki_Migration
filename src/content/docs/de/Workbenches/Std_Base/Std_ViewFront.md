---
title: Std Vorderansicht
---

|                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------ |
| Std Vorderansicht                                                                                                  |
| Menüeintrag                                                                                                        |
| Ansicht → Standardansichten → Vorderseite                                                                          |
| Arbeitsbereich                                                                                                     |
| Alle                                                                                                               |
| Standardtastenkürzel                                                                                               |
| 1                                                                                                                  |
| Eingeführt in Version                                                                                              |
| -                                                                                                                  |
| Siehe auch                                                                                                         |
| [Std Draufsicht](/Std_ViewTop/de "Std ViewTop/de"), [Std Ansicht von rechts](/Std_ViewRight/de "Std ViewRight/de") |
|                                                                                                                    |

## Beschreibung

Der Befehl **Std Vorderansicht** wendet die Kamerasicht der aktiven [3D-Ansicht](/3D_view/de "3D view/de") in die Richtung der positiven Y-Achse.

![](/images/FreeCAD_views_front.svg)

Der Peil 1 zeigt in Richtung der Vorderansicht

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/Std_ViewFront.svg) Vorderansicht drücken.
   - Den Menüeintrag **Ansicht → Standardansichten → ![](/images/Std_ViewFront.svg) Vorderansicht** auswählen.
   - Die Menüoption **Standardansichten → ![](/images/Std_ViewFront.svg) Vorderansicht** im Kontextmenü der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
   - Das Tastaturkürzel 1.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Die Methode `viewFront` des View-Objekts wird verwendet, um zur Vorderansicht zu wechseln. Methoden für die anderen Hauptausrichtungen der Ansicht stehen auch zur Verfügung: `viewTop`, `viewRight`, `viewRear`, `viewBottom` und `viewRight`.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.viewFront()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewFront/de&oldid=1500142>"
