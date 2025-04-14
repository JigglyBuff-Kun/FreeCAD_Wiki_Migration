---
title: Sketcher SkizzeAusrichten
---

|                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Sketcher SkizzeAusrichten                                                                                                                        |
| Menüeintrag                                                                                                                                      |
| Skizze → Skizze neu ausrichten...                                                                                                                |
| Arbeitsbereich                                                                                                                                   |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de"), [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de")                     |
| Standardtastenkürzel                                                                                                                             |
| _Keiner_                                                                                                                                         |
| Eingeführt in Version                                                                                                                            |
| -                                                                                                                                                |
| Siehe auch                                                                                                                                       |
| [Sketcher SkizzeAnheften](/Sketcher_MapSketch/de "Sketcher MapSketch/de"), [Sketcher NeueSkizze](/Sketcher_NewSketch/de "Sketcher NewSketch/de") |
|                                                                                                                                                  |

## Beschreibung

Das Werkzeug ![](/images/Sketcher_ReorientSketch.svg) Sketcher SkizzeAusrichten verlegt eine Skizze auf eine der Hauptebenen, wahlweise mit einem Abstand. Es kann auch zum Ablösen der Skizze eingesetzt werden.

## Anwendung

1. Eine Skizze auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/Sketcher_ReorientSketch.svg) Skizze neu ausrichten... drücken (steht im Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de")) nicht zur Verfügung.
   - Den Menüeintrag **Skizze → ![](/images/Sketcher_ReorientSketch.svg) Skizze neu ausrichten...** auswählen.
3. Wenn die Skizze angeheftet ist:
   1. Ein Dialogfenster wird geöffnet.
   2. Die Schaltfläche Ja drücken, um die Skizze abzulösen.
4. Das Dialogfenster **Orientierung wählen** wird geöffnet.
5. Wahlweise die Schaltfläche Abbrechen drücken, um die Skizze nur abzulösen und das Werkzeug zu beenden.
6. Die Ebene für die Ausrichtung auswählen. Die Ebene bezieht sich auf das lokale Koordinatensystem, in dem sich die Skizze befindet:
   - Wenn die CheckBox **Richtung umkehren** nicht aktiviert ist:
     - Draufsicht: **XY-Ebene**
     - Vorderansicht: **XZ-Ebene**
     - Ansicht von rechts: **YZ-Ebene**
   - Wenn die CheckBox **Richtung umkehren** aktiviert ist:
     - Untersicht: **XY-Ebene**
     - Rückansicht: **XZ-Ebene**
     - Ansicht von links: **YZ-Ebene**
7. Wahlweise den Wert für den **Versatz** anpassen. Der Abstand wird entlang der Z-, Y- oder X-Achse des lokalen Koordinatensystems gemessen.
8. Die Schaltfläche OK drücken.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ReorientSketch/de&oldid=1394402>"
