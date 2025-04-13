---
title: PartDesign KugelHinzufügen
---
|  |
| --- |
| PartDesign KugelHinzufügen |
| Menüeintrag |
| Part Design → Grundkörper hinzufügen → Kugel hinzufügen |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [PartDesign AuswahlGrundkörperHinzufügen](/PartDesign_CompPrimitiveAdditive/de "PartDesign CompPrimitiveAdditive/de"), [PartDesign KugelAbziehen](/PartDesign_SubtractiveSphere/de "PartDesign SubtractiveSphere/de") |
|  |

## Beschreibung

Fügt einen Kugel-Grundkörper in den aktiven Körper (Body-Objekt) als Basisformelement ein oder vereinigt ihn mit den bereits vorhandenen Formelementen.

![](/images/PartDesign_AdditiveSphere_example.png)

## Anwendung

1. Die Schaltfläche ![](/images/PartDesign_AdditiveSphere.svg) **Kugel** drücken. **Hinweis**: Die Kugel ist Teil eines Symbolmenüs mit der Bezeichnung *Grundkörper hinzufügen*. Nach dem Start von FreeCAD wird der Quader in der Werkzeugleiste angezeigt. Um zur Schaltfläche Kugel zu gelangen, den Abwärtspfeil neben dem Symbol anklicken und Kugel im Menü auswählen.
2. Parameter des Grundkörpers und [Befestigung](/Part_EditAttachment/de "Part EditAttachment/de") festlegen.
3. OK klicken.
4. Ein Sphere-Objekt (Formelement) erscheint unter dem aktiven Körper (in der Baumansicht).

## Optionen

Die Kugel kann auf zwei verschieden Wege bearbeitet werden:

* Durch Doppelklick in der Baumstruktur oder durch Rechtsklick und Auswahl von **Grundkörper bearbeiten** in dem Kontextmenü. Dies öffnet den Dialog „Parameter des Grundkörpers“ im Aufgabenbereich.
* Mit Hilfe des [Eigenschafteneditors](/Property_editor/de "Property editor/de").

## Eigenschaften

* Daten-Eigenschaft**Attachment**: Bestimmt den Befestigungsmodus und den Befestigungsversatz. Siehe [Part Befestigung](/Part_EditAttachment/de "Part EditAttachment/de").
* Daten-Eigenschaft**Label**: Die vom Benutzer vergebene Bezeichung für Die Kugel (Sphere-Objekt). Dies kann nach Bedarf geändert werden.
* Daten-Eigenschaft**Radius**: Kugelradius.
* Daten-Eigenschaft**Angle1**: (mit *V-Parameter* im Dialog Parameter des Grundkörpers bezeichnet) Die untere Verkürzung der Kugel, normal zur Z-Achse (-90° in einer vollen Kugel)
* Daten-Eigenschaft**Angle2**: (ohne Beschriftung im Dialog Parameter des Grundkörpers) Die obere Verkürzung der Kugel, normal zur Z-Achse (90° in einer vollen Kugel).
* Daten-Eigenschaft**Angle3**: (mit *U-Parameter* im Dialog Parameter des Grundkörpers bezeichnet) Rotationswinkel des (halben) Kugelquerschnitts (360° in einer ganzen Kugel).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveSphere/de&oldid=1218816>"