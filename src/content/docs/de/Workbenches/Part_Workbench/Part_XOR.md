---
title: Part XOdeR
---

|                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Part XOdeR                                                                                                                                                                                                                                                                                      |
| Menüeintrag                                                                                                                                                                                                                                                                                     |
| Formteil → Teilen → BooleanXOR                                                                                                                                                                                                                                                                  |
| Arbeitsbereich                                                                                                                                                                                                                                                                                  |
| [Part](/Part_Workbench/de "Part Workbench/de")                                                                                                                                                                                                                                                  |
| Standardtastenkürzel                                                                                                                                                                                                                                                                            |
| _Keiner_                                                                                                                                                                                                                                                                                        |
| Eingeführt in Version                                                                                                                                                                                                                                                                           |
| 0.17                                                                                                                                                                                                                                                                                            |
| Siehe auch                                                                                                                                                                                                                                                                                      |
| [Part BoolescheFragmente](/Part_BooleanFragments/de "Part BooleanFragments/de"), [Part Zerschneiden](/Part_Slice/de "Part Slice/de"), [Part AuswahlVerbindungsmethoden](/Part_CompJoinFeatures/de "Part CompJoinFeatures/de"), [Part Boolesche Operationen](/Part_Boolean/de "Part Boolean/de") |
|                                                                                                                                                                                                                                                                                                 |

## Beschreibung

Der Befehl ![](/src/assets/images/Part_XOR.svg) **Part XOdeR** entfernt Geometrie, die von einer geraden Anzahl von objekten geteilt wird und hinterlässt leeren Raum zwischen den beteiligten Objekten. Für zwei Objekte stellt dies eine symmetrische Version von [Part Differenz](/Part_Cut/de "Part Cut/de") dar.

![](/src/assets/images/Part_XOR-01.png) ![](/src/assets/images/Button_right.svg)
![](/src/assets/images/Part_XOR-02.png)

Drei überlappende Objekte → Resultierendes Objekt

## Anwendung

1. Zwei oder mehr Objekte auswählen. Es ist auch möglich einen [Part-Verbund](/Part_Compound/de "Part Compound/de") auszuwählen, der zwei oder mehr Objekte enthält.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Den Menüeintrag **Part → Teilen → ![](/src/assets/images/Part_XOR.svg) Boolesches exklusives Oder (XOR)** auswählen.
   - Die Schaltfläche ![](/src/assets/images/Part_XOR.svg) Boolean XOR drücken.

## Hinweise

- Leere Räume sind schwer zu finden, wenn die ausgewählten Objekte keine komplanaren Deckflächen haben. Das XOdeR-Ergebnis kann mit [Std Schnittebene](/Std_ToggleClipPlane/de "Std ToggleClipPlane/de") überprüft werden.

## Eigenschaften

## Skripten

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_XOR/de&oldid=1472049>"
