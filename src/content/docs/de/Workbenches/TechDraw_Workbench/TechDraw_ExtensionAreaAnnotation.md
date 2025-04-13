---
title: TechDraw ErgänzungFlächenangabe
---

|                                                                                                |
| ---------------------------------------------------------------------------------------------- |
| TechDraw ErgänzungFlächenangabe                                                                |
| Menüeintrag                                                                                    |
| TechDraw → Ergänzungen: Merkmale/Änderungen → Flächeninhalt der ausgewählten Flächen berechnen |
| Arbeitsbereich                                                                                 |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                     |
| Standardtastenkürzel                                                                           |
| _Keiner_                                                                                       |
| Eingeführt in Version                                                                          |
| 0.20                                                                                           |
| Siehe auch                                                                                     |
| [TechDraw AreaDimension](/TechDraw_AreaDimension/de "TechDraw AreaDimension/de")               |
|                                                                                                |

## Beschreibung

Das Werkzeug **TechDraw ErgänzungFlächenangabe** berechnet die Fläche der ausgewählten Flächenbereiche und fügt eine Flächenangabe ein.

![](/src/assets/images/TechDraw_ExtensionAreaAnnotationExample.png)

Rechts die eingefügte Flächenangabe

## Anwendung

1. Wähle einen oder mehrere Flächenbereiche.
2. Es gibt mehrere Möglichkeiten das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_ExtensionAreaAnnotation.svg) Flächeninhalt der ausgewählten Flächen berechnen drücken.
   - Den Menüeintrag **TechDraw → Ergänzungen: Merkmale/Änderungen → ![](/src/assets/images/TechDraw_ExtensionAreaAnnotation.svg) Flächeninhalt der ausgewählten Flächen berechnen** auswählen.
3. Die Gesamtfläche aller Flächenbereiche wird berechnet, und als Flächenangabe eingefügt.

## Einschränkungen

- 0.21 und davor: Das Werkzeug kann keine Flächen mit gekrümmten Kanten auswerten.
- Löcher (Inseln) in der ausgewählten Fläche werden ignoriert. Dieser [Forum-Post](https://forum.freecad.org/viewtopic.php?p=783325#p783325) zeigt eine Übergangslösung. Man kann auch [TechDraw AreaDimension](/TechDraw_AreaDimension/de "TechDraw AreaDimension/de") verwenden, aber man muss dann die Daten-Eigenschaft**References 3D** des erstellten Maßes korrekt angeben.
- Der berechnete Flächeninhalt ist nicht dynamisch mit der Fläche verknüpft. Ändert sich der Flächeninhalt der Fläche, wird der Text nicht aktualisiert.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExtensionAreaAnnotation/de&oldid=1491796>"
