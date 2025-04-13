---
title: Std AnsichtKamerapositionAusgeben
---

|                                                                     |
| ------------------------------------------------------------------- |
| Std AnsichtKamerapositionAusgeben                                   |
| Menüeintrag                                                         |
| Ansicht → Stereo → Kameraposition ausgeben                          |
| Arbeitsbereich                                                      |
| Alle                                                                |
| Standardtastenkürzel                                                |
| _Keiner_                                                            |
| Eingeführt in Version                                               |
| -                                                                   |
| Siehe auch                                                          |
| [Std AnsichtenEinfrieren](/Std_FreezeViews/de "Std FreezeViews/de") |
|                                                                     |

## Beschreibung

Der Befehl **Std AnsichtKamerapositionAusgeben** gibt die Kameraeinstellungen der aktiven [3D-Ansicht](/3D_view/de "3D view/de") im [Ausgabefenster](/Report_view/de "Report view/de") und in der [Python-Konsole](/Python_console/de "Python console/de") aus.

```
OrthographicCamera {   viewportMapping ADJUST_CAMERA   position 57.73505 -57.73502 57.735027   orientation 0.74290609 0.30772209 0.59447283  1.2171158   nearDistance 81.588844   farDistance 109.60551   aspectRatio 1   focalDistance 100   height 100  }

```

Beispielausgabe: Kameraeinstellungen nach dem Umstellen der Ansicht auf [Isometrisch](/Std_ViewIsometric/de "Std ViewIsometric/de") in einem neuen Dokument

## Anwendung

1. Den Menüeintrag **Ansicht → Stereo → ![](/src/assets/images/Std_ViewIvIssueCamPos.svg) Kameraposition ausgeben** auswählen.

## Hinweise

- Die Kameraeinstellungen können verwendet werden, um eingefrorene Ansichten zu einer \*.cam-Datei hinzuzufügen. Siehe [Std AnsichtenEinfrieren](/Std_FreezeViews/de "Std FreezeViews/de").

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Die Methode `getCamera` des View-Objekts gibt dieselben Kameraeinstellungen in einer einzelnen Zeichenkette zurück.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.getCamera()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewIvIssueCamPos/de&oldid=1500146>"
