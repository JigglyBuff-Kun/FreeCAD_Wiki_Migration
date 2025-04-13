---
title: Std AnsichtStereoRotGrün
---

|                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Std AnsichtStereoRotGrün                                                                                                                                                                                                                                                                                                                                                                                   |
| Menüeintrag                                                                                                                                                                                                                                                                                                                                                                                                |
| Ansicht → Stereo → Stereo rot/cyan                                                                                                                                                                                                                                                                                                                                                                         |
| Arbeitsbereich                                                                                                                                                                                                                                                                                                                                                                                             |
| Alle                                                                                                                                                                                                                                                                                                                                                                                                       |
| Standardtastenkürzel                                                                                                                                                                                                                                                                                                                                                                                       |
| _Keiner_                                                                                                                                                                                                                                                                                                                                                                                                   |
| Eingeführt in Version                                                                                                                                                                                                                                                                                                                                                                                      |
| -                                                                                                                                                                                                                                                                                                                                                                                                          |
| Siehe auch                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Std AnsichtStereoVierfachPuffer](/Std_ViewIvStereoQuadBuff/de "Std ViewIvStereoQuadBuff/de"), [Std AnsichtStereoVersetzteZeilen](/Std_ViewIvStereoInterleavedRows/de "Std ViewIvStereoInterleavedRows/de"), [Std AnsichtStereoVersetzteSpalten](/Std_ViewIvStereoInterleavedColumns/de "Std ViewIvStereoInterleavedColumns/de"), [Std AnsichtStereoAus](/Std_ViewIvStereoOff/de "Std ViewIvStereoOff/de") |
|                                                                                                                                                                                                                                                                                                                                                                                                            |

## Beschreibung

Der Befehl **Std AnsichtStereoRotGrün** stellt den Stereo-Modus der aktiven [3D-Ansicht](/3D_view/de "3D view/de") auf Stereo rot/cyan um,siehe [anaglyph](https://en.wikipedia.org/wiki/Anaglyph_3D) (engl.). Zur Verwendung dieses Stereo-Modus ist eine Brille mit farbigen Gläsern erforderlich.

## Anwendung

1. Den Menüeintrag **Ansicht → Stereo → ![](/src/assets/images/Std_ViewIvStereoRedGreen.svg) Stereo rot/cyan** auswählen.

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de").

- Der Augenabstand kann geändert werden: **Bearbeiten → Einstellungen... → Anzeige → 3D-Viewer → Augenabstand für Stereo-Modi**.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Die Methode `setStereoType` des View-Objekts wird verwendet, um den Stereo-Modus der Ansicht auf Stereo rot/cyan zu ändern. Die zur Verfügung stehenden Modi sind `"Anaglyph"`, `"QuadBuffer"`, `"InterleavedRows"`, `"InterleavedColumns"` und `"None"`.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.setStereoType("Anaglyph")
view.getStereoType()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewIvStereoRedGreen/de&oldid=1500148>"
