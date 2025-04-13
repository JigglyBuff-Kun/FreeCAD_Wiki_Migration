---
title: Vergrößern
---

|                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------- |
| Std ViewZoomIn                                                                                                               |
| Menüeintrag                                                                                                                  |
| Ansicht → Zoom‏‎ → Vergrößern                                                                                                |
| Arbeitsbereich                                                                                                               |
| Alle                                                                                                                         |
| Standardtastenkürzel                                                                                                         |
| Strg + +                                                                                                                     |
| Eingeführt in Version                                                                                                        |
| -                                                                                                                            |
| Siehe auch                                                                                                                   |
| [Szd Verkleinern](/Std_ViewZoomOut/de "Std ViewZoomOut/de"), [Zoomen mit Rechteck](/Std_ViewBoxZoom/de "Std ViewBoxZoom/de") |
|                                                                                                                              |

## Beschreibung

Der **Std Vergrößern**-Befehl vergrößert die Objekte in der aktiven [3D-Ansicht](/3D_view "3D view").

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Wähle die Option **Ansicht → Zoom‏‎ → ![](/src/assets/images/Std_ViewZoomIn.svg) Vergrößern** aus dem Menü
   - Benutze den Tastaturkurzbefehl Strg + +.

## Hinweise

- In fast allen Stilen der [Mausnavigation](/Mouse_navigation/de "Mouse navigation/de") ist es auch möglich, durch Drehen am Mausrad die Ansicht zu skalieren (zoom).

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de").

- Der Zoomfaktor kann geändert werden: **Bearbeiten → Einstellungen... → Anzeigen → Navigation → Zoom-Schritt**. Diese Einstellung beeinflusst auch den Mausrad-Zoom.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Die Methode `zoomIn` des View-Objekts wird zum Vergrößern verwendet. Die Methode `zoomOut` steht auch zur Verfügung.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.zoomIn()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewZoomIn/de&oldid=1500154>"
