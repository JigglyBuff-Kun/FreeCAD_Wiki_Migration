---
title: TechDraw Flächeninhalt
---

|                                                                                                               |
| ------------------------------------------------------------------------------------------------------------- |
| TechDraw Flächeninhalt                                                                                        |
| Menüeintrag                                                                                                   |
| TechDraw → Maßeinträge → Flächeninhalt einfügen                                                               |
| Arbeitsbereich                                                                                                |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                    |
| Standardtastenkürzel                                                                                          |
| _Keiner_                                                                                                      |
| Eingeführt in Version                                                                                         |
| 1.0                                                                                                           |
| Siehe auch                                                                                                    |
| [TechDraw ErgänzungFlächenangabe](/TechDraw_ExtensionAreaAnnotation/de "TechDraw ExtensionAreaAnnotation/de") |
|                                                                                                               |

## Beschreibung

Das Werkzeug **TechDraw Flächeninhalt** fügt einen Hinweis mit dem Flächeninhalt zu einer Fläche in einer Bauteilansicht hinzu.

![](/src/assets/images/TechDraw_AreaDimension_Example.png)

Flächenangabe einer Fläche mit einem Loch. Siehe [Einschränkungen](#Einschränkungen).

## Anwendung

1. Eine Fläche auswählen. Die Geometrie kann in der [3D-Ansicht](/3D_view/de "3D view/de") oder in der Zeichnung ausgewählt werden.
2. Wenn die Geometrie in der 3D-Ansicht ausgewählt wurde: Die richtige TechDraw-Ansicht zur Auswahl hinzufügen, indem sie in der [Baumansicht](/Tree_view/de "Tree view/de") ausgewählt wird.
3. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Wenn die [Einstellung](/TechDraw_Preferences/de#Maßeinträge "TechDraw Preferences/de") **Maß-Werkzeuge** auf `Einzelnes Werkzeug` (Standardwert) gesetzt ist: Den Nach-unten-Pfeil rechts neben der Schaltfläche ![](/src/assets/images/TechDraw_Dimension.svg)![](/src/assets/images/Toolbar_flyout_arrow.svg) drücken und die Option **![](/src/assets/images/TechDraw_AreaDimension.svg) Flächeninhalt einfügen** im Ausklappen auswählen.
   - Wenn diese Einstellung einen anderen Wert besitzt: die Schaltfläche ![](/src/assets/images/TechDraw_AreaDimension.svg) Flächeninhalt einfügen drücken.
   - Den Menüeintrag **TechDraw → Maßeinträge → ![](/src/assets/images/TechDraw_AreaDimension.svg) Flächeninhalt einfügen** auswählen.
4. Ein Maß wird zur Ansicht hinzugefügt.
5. Das Maß kann an die gewünschte Position gezogen werden.
6. Wenn erforderlich, die Toleranz hinzufügen, wie auf [dieser Seite](/TechDraw_Geometric_dimensioning_and_tolerancing/de#Toleranzen "TechDraw Geometric dimensioning and tolerancing/de") beschrieben.

## Einschränkungen

- 1.0 und davor: Das Werkzeug kann nur Löcher in Flächen erkennen, die in der 3D-Ansicht ausgewählt wurden. Um den richtigen Flächeninhalt für so eine Fläche zu erhalten, die in der Zeichnung ausgewählt wurde, gibt es folgende Möglichkeit:
  1. Die richtige Daten-Eigenschaft**References 3D** mit ![](/src/assets/images/TechDraw_DimensionRepair.svg) [TechDraw Maßreparatur](/TechDraw_DimensionRepair/de "TechDraw DimensionRepair/de") einstellen.
  2. Die Daten-Eigenschaft**Measure Type** auf `True` ändern.
  3. ![](/src/assets/images/Std_Refresh.svg) [Std Aktualisieren](/Std_Refresh/de "Std Refresh/de") aufrufen. falls erforderlich.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_AreaDimension/de&oldid=1525806>"
