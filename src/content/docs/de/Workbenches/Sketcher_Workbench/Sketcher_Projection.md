---
title: Sketcher Projektion
---

|                                                                                                       |
| ----------------------------------------------------------------------------------------------------- |
| Sketcher Projektion                                                                                   |
| Menüeintrag                                                                                           |
| Skizze → Sketcher-Werkzeuge → Externe Geometrie projizieren                                           |
| Arbeitsbereich                                                                                        |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                            |
| Standardtastenkürzel                                                                                  |
| G X                                                                                                   |
| Eingeführt in Version                                                                                 |
| 1.1                                                                                                   |
| Siehe auch                                                                                            |
| [Sketcher HilfsgeometrieUmschalten](/Sketcher_ToggleConstruction/de "Sketcher ToggleConstruction/de") |
|                                                                                                       |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_Projection.svg) Sketcher Projektion ([eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")) projiziert Kanten und/oder Knoten, die zu Objekten außerhalb der Skizze gehören, auf die Skizzenebene. Die projizierte Geometrie wird "externe Geometrie" genannt. Sie bleibt parametrisch mit ihrem Quellobjekt verbunden. Externe Geometrie wird mit einer eigenen [Farbe](/Sketcher_Preferences/de#Darstellung "Sketcher Preferences/de") (standardmäßig Magenta) gekennzeichnet. Sie kann beschreibende Geometrie sein, die außerhalb der Skizze sichtbar ist oder Hilfsgeometrie, die außerhalb der Skizze nicht sichtbar ist.

## Anwendung

1. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Sketcher_Projection.svg) Externe Geometrie projizieren drücken.
   - Den Menüeintrag **Skizze → Sketcher-Werkzeuge → ![](/src/assets/images/Sketcher_Projection.svg) Externe Geometrie projizieren** auswählen.
   - Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/src/assets/images/Sketcher_Projection.svg) Externe Geometrie projizieren** im Kontextmenü auswählen.
   - Das Tastaturkürzel G then X.
2. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
3. Eine oder mehrere Flächen, Kanten und/oder Knoten auswählen. Siehe [Hiweise](#Hinweise).
4. Externe Geometrie wird erstellt.
5. Dieses Werkzeug läuft immer im Fortsetzen-Modus: Wahlweise weitere externe Flächen, Kanten und/oder Knoten auswählen.
6. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

## Hinweise

- Alle Kanten einer Fläche werden auf die Skizzenebene projiziert.
- Externe Geometrie wird als beschreibende Geometrie oder als Hilfsgeometrie erstellt, je nach Zustand des Werkzeugs [HilfsgeometrieUmschalten](/Sketcher_ToggleConstruction/de "Sketcher ToggleConstruction/de"). Dieses Werkzeug kann auch zum Umschalten des Modus individueller Kanten verwendet werden. Die Option **Bearbeiten → Einstellungen... → Sketcher → Allgemein → Externe Geometrie immer als Referenz hinzufügen** aktivieren, un den Zustand dieses Werkzeuges zu ignorieren und externe Geometrie immer als Hilfsgeometrie hinzuzufügen.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Projection/de&oldid=1560501>"
