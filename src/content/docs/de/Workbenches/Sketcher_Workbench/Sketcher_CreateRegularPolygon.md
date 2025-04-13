---
title: Sketcher RegelmäßigesVieleckErstellen
---

|                                                             |
| ----------------------------------------------------------- |
| Sketcher RegelmäßigesVieleckErstellen                       |
| Menüeintrag                                                 |
| Sketch → Skizzengeometrien → Regelmäßiges Vieleck erstellen |
| Arbeitsbereich                                              |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")  |
| Standardtastenkürzel                                        |
| G P R                                                       |
| Eingeführt in Version                                       |
| -                                                           |
| Siehe auch                                                  |
| _Keiner_                                                    |
|                                                             |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_CreateRegularPolygon.svg) Sketcher RegelmäßigesVieleckErstellen erstellt ein regelmäßiges Vieleck (Polygon) creates a regular polygon.

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

Pos-OVP = Positional [On-View-Parameters](/Sketcher_Preferences/de#Allgemein "Sketcher Preferences/de") (In-Ansicht-Parameter zur Lagebestimmung). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")  
Dim-OVP = Dimensional On-View-Parameters (In-Ansicht-Parameter zur maßlichen Festlegung). [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

1. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Sketcher_CreateRegularPolygon.svg) Regelmäßiges Vieleck drücken.
   - Den Menüeintrag **Sketcher → Sketcher geometries → ![](/src/assets/images/Sketcher_CreateRegularPolygon.svg) Regelmäßiges Vieleck erstellen** auswählen.
   - Das Tastaturkürzel G dann P dann R.
2. Die **Anzahl der Seiten** im Dialog **Regelmäßiges Vieleck erstellen** eingeben.
3. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
4. Der Abschnitt **Vieleckparameter** ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")) wird im oberen Bereich des [Sketcher-Dialogs](/Sketcher_Dialog "Sketcher Dialog") hinzugefügt.
5. Wahlweise die **Anzahl der Seiten** ändern (dies kann auch nach der Auswahl des Mittelpunktes geschehen):
   - Eine Zahl größer als zwei eingeben.
   - Die U-Taste drücken, um die Zahl zu erhöhen.
   - Die J-Taste drücken, um die Zahl zu verringern.
6. Den Mittelpunkt des Vielecks auswählen. Oder mit Pos-OVP: seine X- und/oder Y--Koordinate eingeben.
7. Den ersten Punkt des Vielecks auswählen; dies legtauch den Radius des Umkreises fest. Oder mit Dim-OVP: den Radius des Kreises und/oder den Winkel des ersten Punktes eingeben. Der Winkel bezieht sich auf die X-Achse der Skizze. Für diesen Winkel wird keine Randbedingung erstellt.
8. Das Vieleck wird erstellt, inklusive eines Hilfsgeometrie-Umkreises und der anwendbaren Pos-OVP- und Dim-OVP-basierten Randbedingungen.
9. Wenn das Werkzeug im [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de") läuft:
   1. Wahlweise weitere Vielecke erstellen.
   2. Zum Beenden die rechte Maustaste oder Esc drücken oder ein anderes Werkzeug zur Erstellung von Geometrien oder Randbedingungen aufrufen.

## Hinweise

- Der Hilfsgeometrie-Kreis ist außerhalb der Skizze nicht sichtbar. Er kann nicht entfernt werden, ohne die Geometrie des Vielecks aufzubrechen.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateRegularPolygon/de&oldid=1410183>"
