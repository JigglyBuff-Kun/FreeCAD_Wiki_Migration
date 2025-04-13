---
title: Std OrthogonaleKamera
---

|                                                                              |
| ---------------------------------------------------------------------------- |
| Std OrthogonaleKamera                                                        |
| Menüeintrag                                                                  |
| Ansicht → Orthogonale Ansicht                                                |
| Arbeitsbereich                                                               |
| Alle                                                                         |
| Standardtastenkürzel                                                         |
| V O                                                                          |
| Eingeführt in Version                                                        |
| -                                                                            |
| Siehe auch                                                                   |
| [Std PerspektivKamera](/Std_PerspectiveCamera/de "Std PerspectiveCamera/de") |
|                                                                              |

## Beschreibung

Der Befehl **Std OrthogonaleKamera** schaltet die Kamera in der aktiven [3D Ansicht](/3D_view/de "3D view/de") in den orthogonalen Ansichtsmodus. In diesem Modus erscheinen Objekte, die weiter von der Kamera entfernt sind, nicht kleiner als solche, die näher sind.

![](/src/assets/images/Std_OrthographicCamera_example.svg)

Zwei Würfel mit den gleichen Abmessungen in orthogonaler Ansicht

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Den Menüeintrag **Ansicht → ![](/src/assets/images/Std_OrthographicCamera.svg) Orthogonale Ansicht** auswählen.
   - Die Menüoption **![](/src/assets/images/Std_OrthographicCamera.svg) Orthogonale Ansicht** im Miniwürfelmenü des [Navigationswürfels](/Navigation_Cube/de "Navigation Cube/de") auswählen.
   - Das Tastaturkürzel: V dann O.

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de").

- Der Kameratyp kann geändert werden: **Bearbeiten → Voreinstellungen... → Anzeige → 3D-Ansicht → Kameratyp**. Der gewählte Typ wird für alle 3D Ansichten aller geöffneten Dokumente und auch für neue Dokumente verwendet.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Die Methode `setCameraType` des View-Objekts wird verwendet, um die Ansicht auf orthogonal oder perspektivisch zu ändern.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.setCameraType("Perspective")
view.setCameraType("Orthographic")
view.getCameraType()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_OrthographicCamera/de&oldid=1500056>"
