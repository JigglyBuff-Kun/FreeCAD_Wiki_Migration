---
title: PartDesign Bezugslinie erstellen
---
|  |
| --- |
| PartDesign Bezugslinie erstellen |
| Menüeintrag |
| PartDesign → Bezugselement erstellen → Bezugslinie erstellen |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [PartDesign Bezugspunkt erstellen](/PartDesign_Point/de "PartDesign Point/de"), [PartDesign Bezugsebene erstellen](/PartDesign_Plane/de "PartDesign Plane/de") |
|  |

## Beschreibung

Erstellt eine **Bezugslinie** (DatumLine), die als Referenz für Skizzen, weitere Referenzobjekte oder Formelemente (Features) genutzt werden kann. Zum Beispiel kann die Bezugslinie als Drehachse für Dreh- oder Nut-Werkzeug genutzt werden.

![](/images/Datum_line.png)

Zwei Bezugslinien durch gegenüberliegende Ecken von einem Quader treffen sich im Schwerpunkt des Quaders.

## Anwendung

1. Klicke die Schaltfläche ![](/images/PartDesign_Line.svg) **Bezugslinie erstellen**.
2. Definiere die Parameter der Bezugslinie. Wähle eine erste Referenz in der 3D-Ansicht, um die verfügbaren Zuordunungsmodi einzugrenzen.
3. Abhängig von dem ausgewählten Bezugselement können eine oder mehrere Befestigungsmodi in der Liste zur Verfügung stehen. Der am wahrscheinlichsten scheinende Modus wird automatisch ausgewählt und erscheint fettgedruckt in der Liste. Der Text *Angehängt im Modus:* zusammen mit dem Befestigungsmodus erscheint in grüner Schrift im oberen Bereich des Parameterdialogs.
4. Weitere Referenzen können durch Klicken auf die nächste Referenz Schaltfläche hinzugefügt werden. Eine angeklickte Schaltfläche wechselt die Beschriftung zu *Auswählen...* bis eine Auswahl getroffen wurde.
5. Aus der Liste wird der gewünschte Befestigungsmodus ausgewählt.
6. Zusätzlich können Befestigungsversätze eingetragen werden.
7. Klicke OK.

## Optionen

Mittels Doppelklick auf den Eintrag DatumLine in der Baumstruktur oder einen Rechtsklick mit der Auswahl **Bezug ändern** können die Eigenschaften der Bezugslinie editiert werden. Mehr Details zum Befestigungsmodus und dem Befestigungsversatz gibt es in [AnhangBearbeiten](/Part_EditAttachment/de "Part EditAttachment/de").

## Einstellungen

Siehe [PartDesign Ebene](/PartDesign_Plane/de#Preferences "PartDesign Plane/de").

## Eigenschaften

* Daten-Eigenschaft**MapMode**: führt den aktuellen Befestigungsmodus auf.
* Daten-Eigenschaft**Attachment Offset**: Definiert eine Transformation (Verschiebung und Rotation) in Bezug auf die Platzierung des Bezugs.
* Daten-Eigenschaft**Label**: Eine Bezeichnung für das Objekt. Diese Bezeichnung kann bei Bedarf geändert werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Line/de&oldid=1543587>"