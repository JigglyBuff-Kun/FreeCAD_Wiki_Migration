---
title: PartDesign PrismaAbziehen
---
|  |
| --- |
| PartDesign PrismaAbziehen |
| Menüeintrag |
| Part Design → Grundkörper abziehen → Prisma |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [PartDesign AuswahlGrundkörperAbziehen](/PartDesign_CompPrimitiveSubtractive/de "PartDesign CompPrimitiveSubtractive/de"), [PartDesign PrismaHinzufügen](/PartDesign_AdditivePrism/de "PartDesign AdditivePrism/de") |
|  |

## Beschreibung

Fügt einen Prisma-Grundkörper in den aktiven Körper (Body-Objekt) ein. Seine Form wird von dem vorhandenen Volumenkörper abgezogen.

![](/images/PartDesign_SubtractivePrism_example.svg)

*Auf der linken Seite ist der aktive Körper (A) in Grau und das abzuziehende Prisma (B) in durchscheinendem Rot gezeigt. Auf der rechten Seite ist das Resultat zu sehen.*

## Anwendung

1. Die Schaltfläche ![](/images/PartDesign_SubtractivePrism.svg) **Prisma** drücken. **Hinweis**: Das Prisma ist Teil eines Symbolmenüs mit der Bezeichnung *Grundkörper abziehen*. Nach dem Start von FreeCAD wird der Quader in der Werkzeugleiste angezeigt. Um zur Schaltfläche Prisma zu gelangen, den Abwärtspfeil neben dem sichtbaren Symbol anklicken und Prisma im Menü auswählen.
2. Parameter des Grundkörpers und [Befestigung](/Part_EditAttachment/de "Part EditAttachment/de") festlegen.
3. OK klicken.
4. Ein Prism-Objekt (Formelement) erscheint unter dem aktiven Körper (in der Baumansicht).

## Optionen

Es ist möglich, schräge Prismen durch Angabe von Winkeln mit Bezug auf den Normalenvektor der gewählten Befestigung zu erzeugen.

Das Prisma kann nach seiner Erstellung auf zwei Arten bearbeitet werden:

* Durch Doppelklick in der Baumstruktur oder durch Rechtsklick und Auswahl von Grundkörper bearbeiten im Kontextmenü. Dies öffnet den Dialog „Parameter des Grundkörpers“ im Aufgabenbereich.
* Mit Hilfe des [Eigenschafteneditors](/Property_editor/de "Property editor/de").

## Eigenschaften

* Daten-Eigenschaft**Attachment**: Bestimmt den Befestigungsmodus und den Befestigungsversatz. Siehe [Part Befestigung](/Part_EditAttachment/de "Part EditAttachment/de").
* Daten-Eigenschaft**Label**: Die vom Benutzer vergebene Bezeichnung für das Prisma (Prism-Objekt). Dies kann nach Bedarf geändert werden.
* Daten-Eigenschaft**Polygon**: Anzahl der Seiten im Polygonquerschnitt des Prismas.
* Daten-Eigenschaft**Circumradius**: [Umkreisradius](https://de.wikipedia.org/wiki/Umkreis) des Polygonquerschnitts des Prismas.
* Daten-Eigenschaft**Height**: Höhe des Prismas.
* Daten-Eigenschaft**First Angle**: Winkel in der ersten Richtung.
* Daten-Eigenschaft**Second Angle**: Winkel in der zweiten Richtung.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractivePrism/de&oldid=1269605>"