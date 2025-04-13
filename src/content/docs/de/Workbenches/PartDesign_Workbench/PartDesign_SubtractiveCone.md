---
title: PartDesign KegelAbziehen
---
|  |
| --- |
| PartDesign KegelAbziehen |
| Menüeintrag |
| Part Design → Grundkörper abziehen → Kegel |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [PartDesign AuswahlGrundkörperAbziehen](/PartDesign_CompPrimitiveSubtractive/de "PartDesign CompPrimitiveSubtractive/de"), [PartDesign KegelHinzufügen](/PartDesign_AdditiveCone/de "PartDesign AdditiveCone/de") |
|  |

## Beschreibung

Fügt einen Kegel-Grundkörper in den aktiven Körper (Body-Objekt) ein. Seine Form wird von dem vorhandenen Volumenkörper abgezogen.

![](/images/PartDesign_SubtractiveCone_example.png)

*Auf der linken Seite ist der aktive Körper (A) in Grau und der abzuziehender Kegel (B) in durchscheinendem Rot gezeigt. Auf der rechten Seite ist das Resultat zu sehen.*

## Anwendung

1. Die Schaltfläche ![](/images/PartDesign_SubtractiveCone.svg) **Kegel** drücken. **Hinweis**: Der Kegel ist Teil eines Symbolmenüs mit der Bezeichnung *Grundkörper abziehen*. Nach dem Start von FreeCAD wird der Quader in der Werkzeugleiste angezeigt. Um zur Schaltfläche Kegel zu gelangen, den Abwärtspfeil neben dem sichtbaren Symbol anklicken und Kegel im Menü auswählen.
2. Parameter des Grundkörpers (für einen spitzen Kegel wird einer der Radien auf Null gesetzt) und [Befestigung](/Part_EditAttachment/de "Part EditAttachment/de") festlegen.
3. OK klicken.
4. Ein Cone-Objekt (Formelement) erscheint unter dem aktiven Körper (in der Baumansicht).

## Optionen

Der Kegel kann nach der Erstellung auf zwei Arten bearbeitet werden:

* Durch Doppelklick in der Baumstruktur oder durch Rechtsklick und Auswahl von **Grundkörper bearbeiten** im Kontextmenü. Dies öffnet den Dialog „Parameter des Grundkörpers“ im Aufgabenbereich.
* Mit Hilfe des [Eigenschafteneditors](/Property_editor/de "Property editor/de").

## Eigenschaften

* Daten-Eigenschaft**Attachment**: Bestimmt den Befestigungsmodus und den Befestigungsversatz. Siehe [Part Befestigung](/Part_EditAttachment/de "Part EditAttachment/de").
* Daten-Eigenschaft**Label**: Die vom Benutzer vergebene Bezeichung für den Kegel (Cone-Objekt). Dies kann nach Bedarf geändert werden.
* Daten-Eigenschaft**Radius1**: Der Wert des Radius an der Kegelbasis.
* Daten-Eigenschaft**Radius2**: Der Wert des Radius an der Kegeloberseite. Ein anderer Wert als Null erzeugt einen Kegelstumpf.
* Daten-Eigenschaft**Height**: Die Höhe des Kegels entlang seiner Achse.
* Daten-Eigenschaft**Angle**: Der Rotationswinkel des (halben) Querschnitts (360° ergeben einen ganzen Kegel).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveCone/de&oldid=1218754>"