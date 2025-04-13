---
title: PartDesign TorusHinzufügen
---
|  |
| --- |
| PartDesign TorusHinzufügen |
| Menüeintrag |
| Part Design → Grundkörper hizufügen → Torus hinzufügen |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [PartDesign AuswahlGrundkörperHinzufügen](/PartDesign_CompPrimitiveAdditive/de "PartDesign CompPrimitiveAdditive/de"), [PartDesign TorusAbziehen](/PartDesign_SubtractiveTorus/de "PartDesign SubtractiveTorus/de") |
|  |

## Beschreibung

Fügt einen Torus-Grundkörper in den aktiven Körper (Body-Objekt) als Basisformelement ein oder vereinigt ihn mit den bereits vorhandenen Formelementen.

![](/images/PartDesign_AdditiveTorus_example.png)

## Anwendung

1. Die Schaltfläche ![](/images/PartDesign_AdditiveSphere.svg) **Torus** drücken. **Hinweis**: Der Torus ist Teil eines Symbolmenüs mit der Bezeichnung *Grundkörper hinzufügen*. Nach dem Start von FreeCAD wird der Quader in der Werkzeugleiste angezeigt. Um zur Schaltfläche Torus zu gelangen, den Abwärtspfeil neben dem Symbol anklicken und Torus im Menü auswählen.
2. Parameter des Grundkörpers und [Befestigung](/Part_EditAttachment/de "Part EditAttachment/de") festlegen.
3. OK klicken.
4. Ein Torus-Objekt (Formelement) erscheint unter dem aktiven Körper (in der Baumansicht).

## Optionen

Der Torus kann nach seiner Erstellung auf zwei Arten bearbeitet werden:

* Durch Doppelklick in der Baumstruktur oder durch Rechtsklick und Auswahl von Grundkörper bearbeiten im Kontextmenü. Dies öffnet den Dialog „Parameter des Grundkörpers“ im Aufgabenbereich.
* Mit Hilfe des [Eigenschafteneditors](/Property_editor/de "Property editor/de").

## Eigenschaften

* Daten-Eigenschaft**Attachment**: Bestimmt den Befestigungsmodus und den Befestigungsversatz. Siehe [Part Befestigung](/Part_EditAttachment/de "Part EditAttachment/de").
* Daten-Eigenschaft**Label**: Die vom Benutzer vergebene Bezeichung für den Torus (Torus-Objekt). Dies kann nach Bedarf geändert werden.
* Daten-Eigenschaft**Radius1**: Der Radius des imaginären Orbits, auf dem das Querschnittsprofil den Mittelpunkt umrundet. (Der Abstand vom Mittelpunkt des Torus zum Mittelpunkt des umlaufenden Profils)
* Daten-Eigenschaft**Radius2**: Der Radius des kreisförmigen Profils, welches die Torusform bestimmt.
* Daten-Eigenschaft**Angle1**: (mit *V-Parameter* im Dialog Parameter des Grundkörpers bezeichnet) Der Winkel des unteren Halbbogens des kreisförmigen Profils (-180° in einem vollen Torus). Ein Fehler in der Programmierung verusacht unerwartete Ergebnisse bei Änderung von Angle1.
* Daten-Eigenschaft**Angle2**: (ohne Beschriftung im Dialog Parameter des Grundkörpers) Der Winkel des oberen Halbbogens des kreisförmigen Querschnittsprofils (180° in einem vollen Torus). Ein Fehler in der Programmierung verusacht unerwartete Ergebnisse bei Änderung von Angle2.
* Daten-Eigenschaft**Angle3**: (mit *U-Parameter:* im Dialog Parameter des Grundkörpers bezeichnet) Rotationswinkel des kreisförmigen Profilquerschnitts (360° in einem vollen Torus).

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveTorus/de&oldid=1218800>"