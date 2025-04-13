---
title: Std AnsichtNachLinksDrehen
---

|                                                                                 |
| ------------------------------------------------------------------------------- |
| Std AnsichtNachLinksDrehen                                                      |
| Menüeintrag                                                                     |
| Ansicht → Standardansichten → Nach links drehen                                 |
| Arbeitsbereich                                                                  |
| Alle                                                                            |
| Standardtastenkürzel                                                            |
| Umschalten + Links                                                              |
| Eingeführt in Version                                                           |
| -                                                                               |
| Siehe auch                                                                      |
| [Std AnsichtNachRechtsDrehen](/Std_ViewRotateRight/de "Std ViewRotateRight/de") |
|                                                                                 |

## Beschreibung

Der Befehl **Std AnsichtNachLinksDrehen** dreht die Kamera in der aktiven [3D-Ansicht](/3D_view/de "3D view/de") in 90-Grad Schritten nach links (gegen den Uhrzeigersinn) um die Blickrichtung.

## Anwendung

1. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   - Den Menüeintrag **Ansicht → Standardansichten → ![](/src/assets/images/Std_ViewRotateLeft.svg) Nach links drehen** auswählen.
   - Die Option **Standardansichten → ![](/src/assets/images/Std_ViewRotateLeft.svg) Nach links drehen** aus dem Kontextmenü der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
   - Das Tastaturkürzel: Shift+Links.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Die Methode `viewRotateLeft` des View-Objekts wird verwendet, um die Ansicht nach links zu drehen. Die Methode `viewRotateRight` steht ebenfalls zur Verfügung.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.viewRotateLeft()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewRotateLeft/de&oldid=1500150>"
