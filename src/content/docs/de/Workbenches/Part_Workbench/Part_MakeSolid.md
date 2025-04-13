---
title: Part FestkörperErstellen
---

|                                                                    |
| ------------------------------------------------------------------ |
| Part UmwandelnFestkörper                                           |
| Menüeintrag                                                        |
| Part → In Festkörper umwandeln                                     |
| Arbeitsbereich                                                     |
| [Part](/Part_Workbench/de "Part Workbench/de")                     |
| Standardtastenkürzel                                               |
| _Keiner_                                                           |
| Eingeführt in Version                                              |
| -                                                                  |
| Siehe auch                                                         |
| [Part FormAusNetz](/Part_ShapeFromMesh/de "Part ShapeFromMesh/de") |
|                                                                    |

## Beschreibung

Der Befehl ![](/src/assets/images/Part_MakeSolid.svg) **Part FestkörperErstellen** erstellt Festkörper aus Formobjekten.

Der Befehl wird typischerweise benutzt als ein Schritt bei der Erzeugung eines Festkörpers aus einem Netz. Siehe [Part Form aus Netz](/Part_ShapeFromMesh/de#Usage "Part ShapeFromMesh/de") für mehr Informationen.

## Anwendung

1. Ein oder mehrere Formobjekte auswählen.
2. Den Menüeintrag **Part → ![](/src/assets/images/Part_MakeSolid.svg) In Festkörper umwandeln** auswählen.
3. Für jedes ausgewählte Objekt wird ein separates neues Objekt erstellt.

## Hinweise

- Die ausgewählten Formobjekte werden nicht analysiert oder validiert.
- Es wird empfohlen, vor dem Umwandeln in einen Festkörper [Part FormAufbereiten](/Part_RefineShape/de "Part RefineShape/de") einzusetzen.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Die erzeugten Objekte sind [Part Formelement](/Part_Feature/de "Part Feature/de")-Objekte ohne zusätzliche Eigenschaften.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_MakeSolid/de&oldid=1548619>"
