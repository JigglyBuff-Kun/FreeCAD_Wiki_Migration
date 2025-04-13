---
title: PartDesign Punkt
---
|  |
| --- |
| PartDesign Bezugspunkt erstellen |
| Menüeintrag |
| Part Design → Bezugselement erstellen → Bezugspunkt erstellen |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [PartDesign Bezugslinie](/PartDesign_Line/de "PartDesign Line/de"), [PartDesign Bezugsebene](/PartDesign_Plane/de "PartDesign Plane/de") |
|  |

## Beschreibung

Erstellt einen Bezugspunkt. Dieser kann innerhalb des aktuellen Körpers referenziert werden. Dies gilt ebenfalls für weitere Referenzobjekte.

![](/images/DatumPoint.png)

Ein Referenzpunkt, der mit einem Offset von `2` in Z Richtung die Kugel am Z Scheitelpunkt referenziert.

## Anwendung

1. Schaltfläche ![](/images/PartDesign_Point.svg) **Bezugspunkt erstellent** drücken.
2. Die Parameter des Punktes definieren. Eine erste Referenz in der 3D-Ansicht auswählen, um die verfügbaren Verbindungsarten zu filtern.
3. Abhängig von der ausgewählten Referenz, können eine oder mehrere Verbindungsarten in der Liste vorhanden sein. Die wahrscheinlichste wird automatisch ausgewählt und in der Liste fett dargestellt. Der Text *Angehängt im Modus:*  zusammen mit dem Namen der Verbindungsart erscheint in grün über der Liste der Referenzen.
4. Um eine weitere Referenz hinzuzufügen, drückt man die nächste Referenz-Schaltfläche. Sobald sie gerückt wurde ändert sich die Beschriftung zu *Auswählen...*, bis etwas ausgewählt wurde.
5. Einen Befestigungsmodus aus der Liste Wählen.
6. Versatzwerte für die Verbindung festlegen.
7. OK drücken.

## Optionen

Doppel-Klicke das Referenzpunkt Label im Modellbaum oder klicke dies einfach und selektiere "Bezug ändern" oder wähle ein Referenzobjekt mit der rechten Maustaste im Kontextmenu. Details findet man bei Referenzmodus und Offsets , siehe: [Part AnhangBearbeiten](/Part_EditAttachment/de "Part EditAttachment/de").

## Einstellungen

Siehe [PartDesign Ebene](/PartDesign_Plane/de#Preferences "PartDesign Plane/de").

## Eigenschaften

* Daten-Eigenschaft**MapMode**: Listet die benutzten Referenzmodi.
* Daten-Eigenschaft**Attachment Offset**: Transformiert ( Verschiebung und Rotation ) das Objekt in Bezug auf seinen Referenzpunkt und seine Richtung.
* Daten-Eigenschaft**Label**: änderbarer Name des Objekts

## Einschränkungen

* Der Bezugspunkt kann nicht als Referenz für Rohr und Loft Features benutzt werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Point/de&oldid=1543591>"