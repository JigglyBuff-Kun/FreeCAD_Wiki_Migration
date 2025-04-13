---
title: Sketcher ExterneGeometrie
---

|                                                                                                     |
| --------------------------------------------------------------------------------------------------- |
| Sketcher ExterneGeometrie                                                                           |
| Menüeintrag                                                                                         |
| Skizze → Sketcher-Werkzeuge → Externe Geometrie erstellen                                           |
| Arbeitsbereich                                                                                      |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                          |
| Standardtastenkürzel                                                                                |
| G X                                                                                                 |
| Eingeführt in Version                                                                               |
| -                                                                                                   |
| Siehe auch                                                                                          |
| [Sketcher UmschalterKonstruktion](/Sketcher_ToggleConstruction/de "Sketcher ToggleConstruction/de") |
|                                                                                                     |

## Beschreibung

1.0 und davor: Das Werkzeug ![](/src/assets/images/Sketcher_External.svg) Externe Geometrie projiziert Kanten und/oder Knoten, die zu Objekten außerhalb der Skizze gehören, auf die Skizzenebene. Die projizierte Geometrie wird "externe Geometrie" genannt. Sie bleibt dauerhaft mit den zugrundeliegenden Objekten verknüpft. Kanten der externen Geometrie werden mit einer bestimmten [Farbe](/Sketcher_Preferences/de#Erscheinungsbild "Sketcher Preferences/de") (Standardfarbe Magenta) und ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")) mit einer bestimmten Linienart gekennzeichnet. Ähnlich der Hilfsgeometrie ist externe Geometrie außerhalb der Skizze nicht sichtbar. Sie ist dazu gedacht, bei der Festlegung von Randbedingungen oder anderen Geometrien innerhalb der Skizze zu helfen.

1.1 und neuer: Siehe ![](/src/assets/images/Sketcher_Projection.svg) [Sketcher Projektion](/Sketcher_Projection/de "Sketcher Projection/de")

![](/src/assets/images/Sketcher_ExternalEsempio1.png)

Die zwei magentafarbenen Linien sind externe Geometrie, die mit Kanten eines vorhandene [Blocks](/PartDesign_Pad/de "PartDesign Pad/de") verknüpft sind. Sie werden eingesetzt, um die Kreise festzulegen.

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

1. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Sketcher_External.svg) Externe Geometrie erstellen drücken.
   - Den Menüeintrag **Skizze → Sketcher-Werkzeuge → ![](/src/assets/images/Sketcher_External.svg) Externe Geometrie erstellen** auswählen.
   - Ein Rechtsklick in die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **![](/src/assets/images/Sketcher_External.svg) Externe Geometrie erstellen** im Kontextmenü auswählen.
   - Das Tastaturkürzel G then X.
2. Der Mauszeiger wandelt sich zu einem Kreuz mit Werkzeugsymbol.
3. Eine externe Kante oder einen externen Knoten auswählen. Siehe [Hinweise](#Hinweise).
4. Externe Geometrie wird erstellt.
5. Dieses Werkzeug läuft immer in Fortsetzen-Modus: Wahlweise weitere externe Kanten und/oder Knoten auswählen.
6. Zum Beenden die rechte Maustaste oder Esc drücken; oder ein anderes Werkzeug zum Erstellen von Geometrien oder Randbedingungen aufrufen.

## Hinweise

- Nur Kanten und Knoten von Objekten innerhalb desselben Koordinatensystems können ausgewählt werden. Die Skizze und das Objekt müssen sich im selben [Körper](/PartDesign_Body/de "PartDesign Body/de") oder im selben [Part](/Std_Part/de "Std Part/de") befinden; oder beide müssen sich im globalen Koordinatensystem befinden. Mit einem [Binder](/PartDesign_SubShapeBinder/de "PartDesign SubShapeBinder/de") kann eine Kopie des Objekts in das gerade aktive Koordinatensystem eingefügt werden, wenn erforderlich.
- Zirkelbezüge sind nicht erlaubt. Ein Objekt, das selbst von der Skizze abhängt, kann nicht (wieder) mit die Skizze verknüpft werden.
- Verknüpfungen zu Elementen aus anderen Skizzen sind möglich und werden empfohlen, da sie zuverlässiger sind als Verknüpfungen zu generierter (Festkörper-) Geometrie. Letztere kann unter dem [Problem der Topologischen Benennung](/Topological_naming_problem/de "Topological naming problem/de") (TNP) leiden. Siehe [Ratschläge zur Erstellung stabiler Modelle](/Feature_editing/de#Ratschläge_zur_Erstellung_stabiler_Modelle "Feature editing/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_External/de&oldid=1512790>"
