---
title: PartDesign EllipsoidHinzufügen
---
|  |
| --- |
| PartDesign EllipsoidHinzufügen |
| Menüeintrag |
| Part Design → Grundkörper hinzufügen→ Ellipsoid hinzufügen |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [PartDesign AuswahlGrundkörperHinzufügen](/PartDesign_CompPrimitiveAdditive/de "PartDesign CompPrimitiveAdditive/de"), [PartDesign EllipsoidAbziehen](/PartDesign_SubtractiveEllipsoid/de "PartDesign SubtractiveEllipsoid/de") |
|  |

## Beschreibung

Fügt einen Ellipsoid-Grundkörper in den aktiven Körper (Body-Objekt) als Basisformelement ein oder vereinigt ihn mit den bereits vorhandenen Formelementen.

![](/images/PartDesign_AdditiveEllipsoid_example.png)

## Anwendung

1. Die Schaltfläche ![](/images/PartDesign_AdditiveEllipsoid.svg) **Ellipsoid** drücken. **Hinweis**: Das Ellipsoid ist Teil eines Symbolmenüs mit der Bezeichnung *Grundkörper hinzufügen*. Nach dem Start von FreeCAD wird der Quader in der Werkzeugleiste angezeigt. Um zur Schaltfläche Ellipsoid zu gelangen, den Abwärtspfeil neben dem sichtbaren Symbol anklicken und Ellipsoid im Menü auswählen.
2. Parameter des Grundkörpers und [Befestigung](/Part_EditAttachment/de "Part EditAttachment/de") festlegen.
3. OK klicken.
4. Ein Ellipsoid-Objekt (Formelement) erscheint unter dem aktiven Körper (in der Baumansicht).

## Optionen

Das Ellipsoid kann nach der Erstellung auf zwei Arten bearbeitet werden:

* Durch Doppelklick in der Baumstruktur oder durch Rechtsklick und Auswahl von **Grundkörper bearbeiten** im Kontextmenü. Dies öffnet den Dialog „Parameter des Grundkörpers“ im Aufgabenbereich.
* Mit Hilfe des [Eigenschafteneditors](/Property_editor/de "Property editor/de").

## Eigenschaften

* Daten-Eigenschaft**Attachment**: Bestimmt den Befestigungsmodus und den Befestigungsversatz. Siehe [Part Befestigung](/Part_EditAttachment/de "Part EditAttachment/de").
* Daten-Eigenschaft**Label**: Die vom Benutzer vergebene Bezeichung für das Ellipsoid (Ellipsoid-Objekt). Dies kann nach Bedarf geändert werden.
* Daten-Eigenschaft**Radius1**: Der Wert des Radius entlang der vertikalen Achse des Ellipsoids, in der Voreinstellung parallel zur Z-Achse.
* Daten-Eigenschaft**Radius2**: Der Wert des Radius der Längsachse, in der Voreinstellung parallel zur X-Achse.
* Daten-Eigenschaft**Radius3**: Der Wert des Radius entlang der Breite, in der Voreinstellung parallel zu der Y-Achse. In der Voreinstellung mit einen Wert von Null ist das Ellipsoid ein [abgeplattetes Rotationsellipsoid](https://de.wikipedia.org/wiki/Rotationsellipsoid). Dies hat die gleiche Form, als wäre Radius 3 identisch mit Radius2.
* Daten-Eigenschaft**Angle1**: (mit *V-Parameter* im Dialog Parameter des Grundkörpers bezeichnet) Die untere Verkürzung des Ellipsoids, normal zur Z-Achse (-90° für ein ganzes Rotationsellipsoid)
* Daten-Eigenschaft**Angle2**: (ohne Beschriftung im Dialog Parameter des Grundkörpers) Die obere Verkürzung des Ellipsoids, normal zur Z-Achse (90° für ein ganzes Rotationsellipsoid).
* Daten-Eigenschaft**Angle3**: (mit *U-Parameter* im Dialog Parameter des Grundkörpers bezeichnet) Rotationswinkel des (halben) elliptischen Querschnitts (360° für ein ganzes Rotationsellipsoid).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveEllipsoid/de&oldid=1218778>"