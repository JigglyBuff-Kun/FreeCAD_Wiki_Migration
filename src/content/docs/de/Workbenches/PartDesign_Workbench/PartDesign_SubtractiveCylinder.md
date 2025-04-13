---
title: PartDesign ZylinderAbziehen
---
|  |
| --- |
| PartDesign ZylinderAbziehen |
| Menüeintrag |
| Part Design → Grundkörper abziehen → Zylinder |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [PartDesign AuswahlGrundkörperAbziehen](/PartDesign_CompPrimitiveSubtractive/de "PartDesign CompPrimitiveSubtractive/de"), [PartDesign ZylinderHinzufügen](/PartDesign_AdditiveCylinder/de "PartDesign AdditiveCylinder/de") |
|  |

## Beschreibung

Fügt einen Zylinder-Grundkörper in den aktiven Körper (Body-Objekt) ein. Seine Form wird von dem vorhandenen Volumenkörper abgezogen.

![](/images/PartDesign_SubtractiveCylinder_example.svg)

*Auf der linken Seite ist der aktive Körper (A) in Grau und der abzuziehende Zylinder (B) in durchscheinendem Rot gezeigt. Auf der rechten Seite ist das Resultat zu sehen.*

## Anwendung

1. Die Schaltfläche ![](/images/PartDesign_SubtractiveCylinder.svg) **Zylinder** drücken. Hinweis: Der Zylinder ist Teil eines Symbolmenüs mit der Bezeichnung Grundkörper abziehen. Nach dem Start von FreeCAD wird der Quader in der Werkzeugleiste angezeigt. Um zur Schaltfläche Zylinder zu gelangen, den Abwärtspfeil neben dem sichtbaren Symbol anklicken und Zylinder im Menü auswählen.
2. Parameter des Grundkörpers und [Befestigung](/Part_EditAttachment/de "Part EditAttachment/de") festlegen.
3. OK klicken.
4. Ein Cylinder-Objekt (Formelement) erscheint unter dem aktiven Körper (in der Baumansicht).

## Optionen

Es ist möglich, schräge Zylinder durch Angabe von Winkeln mit Bezug auf den Normalenvektor der gewählten Befestigung zu erzeugen. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")

Der Zylinder kann nach der Erstellung auf zwei Arten bearbeitet werden:

* Durch Doppelklick in der Baumstruktur oder durch Rechtsklick und Auswahl von **Grundkörper bearbeiten** im Kontextmenü. Dies öffnet den Dialog „Parameter des Grundkörpers“ im Aufgabenbereich.
* Mit Hilfe des [Eigenschafteneditors](/Property_editor/de "Property editor/de").

## Eigenschaften

* Daten-Eigenschaft**Attachment**: Bestimmt den Befestigungsmodus und den Befestigungsversatz. Siehe [Part Befestigung](/Part_EditAttachment/de "Part EditAttachment/de").
* Daten-Eigenschaft**Label**: Die vom Benutzer vergebene Bezeichung für das Zylinder-Objekt. Dies kann nach Bedarf geändert werden.
* Daten-Eigenschaft**Radius**: Der Wert des Radius des Zylinders.
* Daten-Eigenschaft**Angle**: Der Rotationswinkel des (halben) Querschnitts (360° ergeben einen ganzen Zylinder).
* Daten-Eigenschaft**Height**: Die Höhe des Zylinders entlang seiner Achse.
* Daten-Eigenschaft**First Angle**: Winkel in der ersten Richtung. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")
* Daten-Eigenschaft**Second Angle**: Winkel in der zweiten Richtung. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveCylinder/de&oldid=1237237>"