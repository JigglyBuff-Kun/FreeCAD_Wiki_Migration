---
title: TechDraw AktiveAnsicht
---

|                                                                        |
| ---------------------------------------------------------------------- |
| TechDraw AktiveAnsicht                                                 |
| Menüeintrag                                                            |
| TechDraw → Views From Other Workbenches → Aktive (3D-)Ansicht einfügen |
| Arbeitsbereich                                                         |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")             |
| Standardtastenkürzel                                                   |
| _Keiner_                                                               |
| Eingeführt in Version                                                  |
| 0.19                                                                   |
| Siehe auch                                                             |
| [TechDraw Bild](/TechDraw_Image/de "TechDraw Image/de")                |
|                                                                        |

## Beschreibung

Das Werkzeug **TechDraw AktiveAnsicht** fügt eine Bitmap-Abbildung des aktiven 3D-Fensters in ein Zeichnungsblatt ein.

![](/images/TechDraw_ActiveView_example.png)

Eine einfache Ansicht aus dem 3D-Modell.

## Anwendung

1. Zur richtigen [3D-Ansicht](/3D_view/de "3D view/de") wechseln.
2. Wenn sich mehrere Zeichnungsblätter im Dokument befinden, kann man das gewünschte Blatt in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen.
3. Es gibt mehrere Möglichkeiten das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/images/TechDraw_ActiveView.svg) Aktive (3D-)Ansicht einfügen drücken.
   - Den Menüeintrag **TechDraw → Views From Other Workbenches → ![](/images/TechDraw_ActiveView.svg) Aktive (3D-)Ansicht einfügen** auswählen.
4. Wenn sich mehrere Zeichnungsblätter im Dokument befinden und noch kein Blatt ausgewählt wurde, öffnet sich der Dialog **Blattauswahl**:
   1. Das gewünschte Zeichnungsblatt auswählen.
   2. Die Schaltfläche OK drücken.
5. Der Aufgabenbereich **Aktive Ansicht wird TD-Ansicht** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
6. Die Schaltfläche OK drücken.

## Optionen

Folgendes kann eingestellt werden:

- **Crop**: Wenn aktiviert, wird die erstellte Abbildung beschnitten.
- **Width**: Die Beschnittbreite (in mm) für die Abbildung.
- **Height**: Die Beschnitthöhe (in mm) für die Abbildung.
- **No Background**: Wenn aktiviert, erhält die Abbildung einen transparenten Hintergrund.
- **Solid Background**: Wenn aktiviert, erhält die Abbildung einen einfarbigen Hintergrund in der ausgwählten Farbe.
- **Use 3d Background**: Wenn aktiviert, erhält die Abbildung den Hintergrund der 3D-Ansicht.

## Hinweise

- Aktive Ansichten sind statisch; nach der Erzeugung werden sie nicht mehr aktualisiert, wenn sich das 3D-Modell ändert.
- Eine aktive Ansicht ist im Grunde ein [Bild](/TechDraw_Image/de "TechDraw Image/de"). Seine Daten-Eigenschaft**Scale Type** wird daher immer als `Custom` (benutzerdefiniert) voreingestellt.
- In 0.20 und davor war AktiveAnsicht ein [Symbol](/TechDraw_Symbol/de "TechDraw Symbol/de").

## Eigenschaften

Siehe [TechDraw Bild](/TechDraw_Image/de#Eigenschaften "TechDraw Image/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ActiveView/de&oldid=1487637>"
