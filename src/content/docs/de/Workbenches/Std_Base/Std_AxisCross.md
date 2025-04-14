---
title: Std Achsenkreuz
---

|                                       |
| ------------------------------------- |
| Std Achsenkreuz                       |
| Menüeintrag                           |
| Ansicht → Achsenkreuz ein-/ausblenden |
| Arbeitsbereich                        |
| Alle                                  |
| Standardtastenkürzel                  |
| A C                                   |
| Eingeführt in Version                 |
| -                                     |
| Siehe auch                            |
| _Keiner_                              |
|                                       |

## Beschreibung

Der **Std AxisCross**-Befehl schaltet das Achsenkreuz in der aktiven [3D-Ansicht](/3D_view/de "3D view/de") ein/aus.

Das Achsenkreuz besteht aus drei Pfeilen, die positiven X-, Y- und Z-Achsen des globalen Koordinatensystems darstellen. Ihr gemeinsamer Startpunkt ist der Ursprung des globalen Koordinatensystems.

![](/images/Std_AxisCross_example.svg)

Das Achsenkreuz (die Buchstaben sind nicht Teil des Achsenkreuzes)

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Wähle die Option **Ansicht → ![](/images/Std_AxisCross.svg) Achsenkreuz ein/ausblenden** aus dem Menü.
   - Verwende das Tastaturkürzel: A dann C.

## Hinweise

- FreeCAD kann einen kleineren Koordinatensystemindikator in der unteren rechten Ecke von 3D-Ansichten anzeigen: : **Bearbeiten → Einstellungen... → Anzeige → 3D Viewer → Koordinatensystem in Ecke anzeigen**. Siehe [Voreinstellungseditor](/Preferences_Editor/de#3D_View "Preferences Editor/de").
- Der [Navigationswürfel](/Navigation_Cube/de "Navigation Cube/de") enthält ebenfalls einen Koordinatensystemindikator.

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de").

- Die Standardeinstellung für das Achsenkreuz kann geändert werden: **Bearbeiten → Einstellungen... → Anzeige → 3D-Ansicht → Achsenkreuz standardmäßig anzeigen**.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Die Methode `setAxisCross` des View-Objekts wird verwendet, um das Achsenkreuz ein- bzw. auszuschalten.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.setAxisCross(True)
view.hasAxisCross()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_AxisCross/de&oldid=1500046>"
