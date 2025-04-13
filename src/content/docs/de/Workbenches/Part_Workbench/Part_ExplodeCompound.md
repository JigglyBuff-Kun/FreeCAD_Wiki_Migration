---
title: Part VerbundSprengen
---

|                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------- |
| Part VerbundSprengen                                                                                                |
| Menüeintrag                                                                                                         |
| Formteil → Verbund → Verbundteile extrahieren                                                                       |
| Arbeitsbereich                                                                                                      |
| [Part](/Part_Workbench/de "Part Workbench/de")                                                                      |
| Standardtastenkürzel                                                                                                |
| _Keiner_                                                                                                            |
| Eingeführt in Version                                                                                               |
| 0.18                                                                                                                |
| Siehe auch                                                                                                          |
| [Part Verbund](/Part_Compound/de "Part Compound/de"), [Draft Herabstufen](/Draft_Downgrade/de "Draft Downgrade/de") |
|                                                                                                                     |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Part_ExplodeCompound.svg) **Part VerbundSprengen** teilt einen Verbund aus Formen auf, um jede enthaltene Form (Kind) als separates Objekt zur Verfügung zu stellen. Die Kinder werden automatisch in eine [Gruppe](/Std_Group/de "Std Group/de") aufgenommen, wenn es mehr als ein Kind gibt.

Es ist halbparametrisch: Die Formen der Kinder werden aktualisiert, wenn sich die Quellverbindung ändert, aber wenn sich die Anzahl der Kinder in der Verbindung ändert, wird in der Auflösung werden entweder einige Formen fehlen oder redundante Objekte in einem Fehlerzustand besitzen.

Die Positionierung der extrahierten Formen folgt den Positionierungen der Originale und der Positionierungseigenschaft jedes Kindes.

Das Werkzeug wird auch nicht verbundene Formen in ihre untergeordneten Bestandteile zerlegen: Mischkörper zu Festkörpern, Festkörper zu Schalen, Schalen zu Flächen, Flächen zu Drähten, Drähte zu Kanten, Kanten zu Knoten.

## Anwendung

1. Eine einzelnen Verbund auswählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Part_ExplodeCompound.svg) Verbundobjekt sprengen drücken.
   - Den Menüeintrag **Part → Verbund → Verbundobjekt sprengen** auswählen.

## Anwendungsfälle

- Die Positionen von Formen anpassen, die mit ![](/src/assets/images/Draft_OrthoArray.svg) [Draft RechtwinkligeAnordnung](/Draft_OrthoArray/de "Draft OrthoArray/de") erstellt wurden.
- Die Bestandteile aus dem Ergebnis von ![](/src/assets/images/Part_Slice.svg) [Part Zerschneiden](/Part_Slice/de "Part Slice/de") und ![](/src/assets/images/Part_Cut.svg) [Part Schneiden](/Part_Cut/de "Part Cut/de") entnehmen.
- Einzelne Konturen aus Skizzen und Flächen mit mehreren Konturen entnehmen.
- Einen reinen Festkörper aus einem Festkörper-in-Verbund erhalten, zur Verwendung im Arbeitsbereich ![](/src/assets/images/Workbench_FEM.svg) [FEM](/FEM_Workbench/de "FEM Workbench/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ExplodeCompound/de&oldid=1497155>"
