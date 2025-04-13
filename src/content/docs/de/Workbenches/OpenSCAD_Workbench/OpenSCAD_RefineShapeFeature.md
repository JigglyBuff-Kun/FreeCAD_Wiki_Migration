---
title: OpenSCAD FormelementAufbereiten
---
|  |
| --- |
| OpenSCAD FormelementAufbereiten |
| Menüeintrag |
| OpenSCAD → Formelement aufbereiten |
| Arbeitsbereich |
| [OpenSCAD](/OpenSCAD_Workbench/de "OpenSCAD Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Entfernt unnötige Linien. Nach einer Booleschen Operation bleiben einige Linien sichtbar, die zu den vorherigen Formen gehören. Dieses Werkzeug erstellt eine Kopie des Aufbereiteten Körpers.

![](/images/PartRefineShape_it.png)

## Anwendung

1. Die zu bereinigende Form auswählen.
2. Den Menüeintrag OpenSCAD → Formelement aufbereiten auswählen.

* Ein Eltern-Objekt wird erstellt und komplett aufbereitet, das Original-Objekt wird ausgeblendet gerendert.

## Einschränkungen

* Der Aufbereitungsalgorithmus arbeitet nur mit Hüllflächen. Dazu iteriert er über die Hüllflächen der Eingangsform und erstellt für jede Hüllfläche eine neue Hüllfläche mit verbundenen Flächen, wo immer es möglich ist. Das bedeutet, wenn das ausgewählte Objekt nur eine Fläche, ein Kantenzug, eine Kante oder ein Punkt ist, macht der Algorithmus nichts.
* Im Gegensatz zum ![](/images/Part_RefineShape.svg) [Part FormAufbereiten](/Part_RefineShape/de "Part RefineShape/de") im Arbeitsbereich ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/de "Part Workbench/de") **wird** dieses Element aktualisiert, wenn sich die zugrundeliegenden Formen ändern.

## Hinweise

* Die Funktion wird nicht die vorhandene Form verändern, sondern eine neue Form erstellen.
* Die Funktion wird normalerweise als letzter Schritt im Modellierungsablauf verwendet.
* Die Funktion kann helfen, schwierige Rundungen zu erstellen.
* Die Funktion ist dafür gedacht, bei 3D-Druckern das Drucken unerwünschte Kanten zu vermeiden.

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_RefineShapeFeature/de&oldid=1248281>"