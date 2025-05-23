---
title: PartDesign KugelAbziehen
---
|  |
| --- |
| PartDesign KugelAbziehen |
| Menüeintrag |
| Part Design → Grundkörper abziehen → Kugel |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [PartDesign AuswahlGrundkörperAbziehen](/PartDesign_CompPrimitiveSubtractive/de "PartDesign CompPrimitiveSubtractive/de"), [PartDesign KugelHinzufügen](/PartDesign_AdditiveSphere/de "PartDesign AdditiveSphere/de") |
|  |

## Beschreibung

Fügt einen Kugel-Grundkörper in den aktiven Körper (Body-Objekt) ein. Seine Form wird von dem vorhandenen Volumenkörper abgezogen.

![](/images/PartDesign_SubtractiveSphere_example.svg)

*Auf der linken Seite ist der aktive Körper (A) in Grau und die abzuziehende Kugel (B) in durchscheinenden Rot gezeigt. Auf der rechten Seite ist das Resultat zu sehen.*

## Anwendung

1. Die Schaltfläche ![](/images/PartDesign_SubtractiveSphere.svg) **Kugel** drücken. **Hinweis**: Die Kugel ist Teil eines Symbolmenüs mit der Bezeichnung Grundkörper abziehen. Nach dem Start von FreeCAD wird der Quader in der Werkzeugleiste angezeigt. Um zur Schaltfläche Kugel zu gelangen, den Abwärtspfeil neben dem sichtbaren Symbol anklicken und Kugel im Menü auswählen.
2. Parameter des Grundkörpers und [Befestigung](/Part_EditAttachment/de "Part EditAttachment/de") festlegen.
3. OK klicken.
4. Ein Sphere-Objekt (Formelement) erscheint unter dem aktiven Körper (in der Baumansicht).

## Optionen

Die Kugel kann nach der Erstellung auf zwei Arten bearbeitet werden:

* Durch Doppelklick in der Baumstruktur oder durch Rechtsklick und Auswahl von **Grundkörper bearbeiten** im Kontextmenü. Dies öffnet den Dialog „Parameter des Grundkörpers“ im Aufgabenbereich.
* Mit Hilfe des [Eigenschafteneditors](/Property_editor/de "Property editor/de").

## Eigenschaften

* Daten-Eigenschaft**Attachment**: Bestimmt den Befestigungsmodus und den Befestigungsversatz. Siehe [Part Befestigung](/Part_EditAttachment/de "Part EditAttachment/de").
* Daten-Eigenschaft**Label**: Die vom Benutzer vergebene Bezeichung für Die Kugel (Sphere-Objekt). Dies kann nach Bedarf geändert werden.
* Daten-Eigenschaft**Radius**: Kugelradius.
* Daten-Eigenschaft**Angle1**: (mit *V-Parameter* im Dialog Parameter des Grundkörpers bezeichnet) Die untere Verkürzung der Kugel, normal zur Z-Achse (-90° für eine ganze Kugel)
* Daten-Eigenschaft**Angle2**: (ohne Beschriftung im Dialog Parameter des Grundkörpers) Die obere Verkürzung der Kugel, normal zur Z-Achse (90° für eine ganze Kugel).
* Daten-Eigenschaft**Angle3**: (mit *U-Parameter* im Dialog Parameter des Grundkörpers bezeichnet) Rotationswinkel des (halben) Kugelquerschnitts (360° für eine ganze Kugel).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveSphere/de&oldid=1218732>"