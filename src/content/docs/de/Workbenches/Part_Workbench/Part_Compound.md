---
title: Part Verbund
---

|                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Part Verbund                                                                                                                                                                                           |
| Menüeintrag                                                                                                                                                                                            |
| Formteil → Verbund → Erzeuge Verbund                                                                                                                                                                   |
| Arbeitsbereich                                                                                                                                                                                         |
| [Part](/Part_Workbench/de "Part Workbench/de")                                                                                                                                                         |
| Standardtastenkürzel                                                                                                                                                                                   |
| _Keiner_                                                                                                                                                                                               |
| Eingeführt in Version                                                                                                                                                                                  |
| 0.14                                                                                                                                                                                                   |
| Siehe auch                                                                                                                                                                                             |
| [Part Verschmelzen](/Part_Fuse/de "Part Fuse/de"), [Part VerbundFiltern](/Part_CompoundFilter/de "Part CompoundFilter/de"), [Part VerbundSprengen](/Part_ExplodeCompound/de "Part ExplodeCompound/de") |
|                                                                                                                                                                                                        |

## Beschreibung

Dieser Befehl erstellt einen Verbund aus Objekten mit einer topologischen Form wie Festkörper und andere Objekte mit Flächen und/oder Kanten. Er kann keine Netze verarbeiten, da sie keine topologische Form besitzen.

## Anwendung

1. Die topologischen Formen markieren, die dem Verbund in der [Baumansicht](/Tree_view/de "Tree view/de") hinzugefügt werden sollen.
2. Den Menüeintrag **Part → Verbund → Erzeuge Verbund** im Part-Menü auswählen oder die Schaltfläche ![](/src/assets/images/Part_Compound.svg) drücken.

## Hinweise

Ein Verbund, der sich berührende oder sich überschneidende Stücke enthält, ist **ungültig** für Boolesche Operationen. Aufgrund von möglichen Problemen mit der Rechenleistung wird standardmäßig nicht geprüft, ob sich die Stücke überschneiden. Eine automatische Geometrieprüfung (verfügbar für Boolesche Operationen) ist für den Part-Verbund ebenfalls deaktiviert.

Um diese Prüfung einzuschalten, gehe zu **Werkzeuge → Parameter bearbeiten → Einstellungen..... → Mod → Teil → PrüfeGeometrie→ RunBOPCheck** und setze den Parameter auf `true`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Compound/de&oldid=1471647>"
