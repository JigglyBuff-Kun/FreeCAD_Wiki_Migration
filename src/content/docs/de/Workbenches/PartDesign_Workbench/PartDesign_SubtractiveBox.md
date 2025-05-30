---
title: PartDesign QuaderAbziehen
---
|  |
| --- |
| PartDesign QuaderAbziehen |
| Menüeintrag |
| Part Design → Grundkörper abziehen → Quader |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [PartDesign AuswahlGrundkörperAbziehen](/PartDesign_CompPrimitiveSubtractive/de "PartDesign CompPrimitiveSubtractive/de"), [PartDesign QuaderHinzufügen](/PartDesign_AdditiveBox/de "PartDesign AdditiveBox/de") |
|  |

## Beschreibung

Fügt einen Quader-Grundkörper in den aktiven Körper (Body-Objekt) ein. Seine Form wird von dem vorhandenen Volumenkörper abgezogen.

![](/images/PartDesign_SubtractiveBox_example.png)

*Auf der linken Seite ist der aktive Körper (A) in grau und der abzuziehender Quader (B) in durchscheinenden rot gezeigt. Auf der rechten Seite ist das Resultat zu sehen.*

## Anwendung

1. Die Schaltfläche ![](/images/PartDesign_SubtractiveBox.svg) **Quader** drücken **Hinweis**: Der Quader ist Teil eines Symbolmenüs mit der Bezeichnung Grundkörper abziehen. Nach dem Start von FreeCAD wird der Quader in der Werkzeugleiste angezeigt. Wenn ein anderer Grundkörper angezeigt wird, den Abwärtspfeil neben dem Symbol anklicken und Quader im Menü auswählen.
2. Parameter des Grundkörpers und [Befestigung](/Part_EditAttachment/de "Part EditAttachment/de") festlegen.
3. OK klicken.
4. Ein Box-Objekt (Formelement) erscheint unter dem aktiven Körper (in der Baumansicht).

## Optionen

Der Quader kann nach der Erstellung auf zwei Arten bearbeitet werden:

* Durch Doppelklick in der Baumstruktur oder durch Rechtsklick und Auswahl von **Grundkörper bearbeiten** im Kontextmenü. Dies öffnet den Dialog „Parameter des Grundkörpers“ im Aufgabenbereich.
* Mit Hilfe des [Eigenschafteneditors](/Property_editor/de "Property editor/de").

## Eigenschaften

* Daten-Eigenschaft**Attachment**: Bestimmt den Befestigungsmodus und den Befestigungsversatz. Siehe [Part Befestigung](/Part_EditAttachment/de "Part EditAttachment/de").
* Daten-Eigenschaft**Label**: Die vom Benutzer vergebene Bezeichung für den Quader (Box-Objekt). Dies kann nach Bedarf geändert werden.
* Daten-Eigenschaft**Length**: Die Länge des Quaders in der X-Richtung.
* Daten-Eigenschaft**Width**: Die Länge des Quaders in der Y-Richtung.
* Daten-Eigenschaft**Height**: Die Länge des Quaders in der Z-Richtung.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveBox/de&oldid=1428027>"