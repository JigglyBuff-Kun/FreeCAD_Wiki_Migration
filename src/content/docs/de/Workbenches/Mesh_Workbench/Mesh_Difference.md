---
title: Mesh Differenz
---

|                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------- |
| Mesh Differenz                                                                                                   |
| Menüeintrag                                                                                                      |
| Netze → Boolesche Verknüpfung → Differenz                                                                        |
| Arbeitsbereich                                                                                                   |
| [Mesh](/Mesh_Workbench/de "Mesh Workbench/de")                                                                   |
| Standardtastenkürzel                                                                                             |
| _Keiner_                                                                                                         |
| Eingeführt in Version                                                                                            |
| -                                                                                                                |
| Siehe auch                                                                                                       |
| [Mesh Vereinigung](/Mesh_Union/de "Mesh Union/de"), [Mesh Schnitt](/Mesh_Intersection/de "Mesh Intersection/de") |
|                                                                                                                  |

## Beschreibung

Der Befehl **Mesh Differenz** erstellt ein neues, nicht parametrisches Netzobjekt, ein [Mesh Formelement](/Mesh_Feature/de "Mesh Feature/de"), das die Differenz zweier Netzobjekte darstellt: ein Netzobjekt wird aus dem anderen herausgeschnitten.

[OpenSCAD](http://www.openscad.org/) muss installiert sein, um diesen Befehl zu verwenden und der Pfad zu seiner ausführbaren Datei muss in den Einstellungen von [OpenSCAD](/OpenSCAD_Preferences/de "OpenSCAD Preferences/de") eingetragen sein.

![](/src/assets/images/Mesh_Difference_example.png)

Links: zwei Netzobjekte. Rechts: das Differenzobjekt beider Objekte; der Würfel ist hier als Hauptobjekt ausgewählt, aus dem der Zylinder (das als zweites ausgewählte Abzugsobjekt) herausgeschnitten wird

## Anwendung

1. Das Haupt-Netzobjekt auswählen.
2. Das vom Hauptobjekt abzuziehende Netzobjekt zur Auswahl hinzufügen. Die Netzobjekte müssen sich überlappen.
3. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Mesh_Difference.svg) Differenz drücken.
   - Den Menüeintrag **Netze → Boolesche Verknüpfung → ![](/src/assets/images/Mesh_Difference.svg) Differenz** auswählen.

## Eigenschaften

Siehe: [Mesh Formelement](/Mesh_Feature/de "Mesh Feature/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Difference/de&oldid=1350635>"
