---
title: PartDesign KegelHinzufügen
---
|  |
| --- |
| PartDesign KegelHinzufügen |
| Menüeintrag |
| Part Design → Grundkörper hinzufügen → Kegel |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [PartDesign AuswahlGründkörperHinzufügen](/PartDesign_CompPrimitiveAdditive/de "PartDesign CompPrimitiveAdditive/de"), [PartDesign KegelAbziehen](/PartDesign_SubtractiveCone/de "PartDesign SubtractiveCone/de") |
|  |

## Beschreibung

Fügt einen Kegel-Grundkörper in den aktiven Körper (Body-Objekt) als Basisformelement ein oder vereinigt ihn mit den bereits vorhandenen Formelementen.

![](/images/PartDesign_AdditiveCone_example.png)

## Anwendung

1. Die Schaltfläche ![](/images/PartDesign_AdditiveCone.svg) **Kegel** drücken. **Hinweis**: Der Kegel ist Teil eines Symbolmenüs mit der Bezeichnung *Grundkörper hinzufügen*. Nach dem Start von FreeCAD wird der Quader in der Werkzeugleiste angezeigt. Um zur Schaltfläche Kegel zu gelangen, den Abwärtspfeil neben dem sichtbaren Symbol anklicken und Kegel im Menü auswählen.
2. Parameter des Grundkörpers (für einen spitzen Kegel wird einer der Radien auf Null gesetzt) und [Befestigung](/Part_EditAttachment/de "Part EditAttachment/de") festlegen.
3. OK klicken.
4. Ein Cone-Objekt (Formelement) erscheint unter dem aktiven Körper (in der Baumansicht).

## Optionen

Der Kegel kann nach der Erstellung auf zwei Arten bearbeitet werden:

* Durch Doppelklick in der Baumstruktur oder durch Rechtsklick und Auswahl von **Grundkörper bearbeiten** im Kontextmenü. Dies öffnet den Dialog „Parameter des Grundkörpers“ im Aufgabenbereich.
* Mit Hilfe des [Eigenschafteneditors](/Property_editor/de "Property editor/de").

## Eigenschaften

* Daten**Attachment**: Bestimmt den Befestigungsmodus und den Befestigungsversatz. Siehe [Part Befestigung](/Part_EditAttachment/de "Part EditAttachment/de").
* Daten**Label**: Die vom Benutzer vergebene Bezeichung für den Kegel (Cone-Objekt). Dies kann nach Bedarf geändert werden.
* Daten**Radius1**: Der Wert des Radius an der Kegelbasis.
* Daten**Radius2**: Der Wert des Radius an der Kegeloberseite. Ein anderer Wert als Null erzeugt einen Kegelstumpf.
* Daten**Height**: Die Höhe des Kegels entlang seiner Achse.
* Daten**Angle**: Der Rotationswinkel des (halben) Querschnitts (360° ergeben einen ganzen Kegel).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveCone/de&oldid=1218675>"