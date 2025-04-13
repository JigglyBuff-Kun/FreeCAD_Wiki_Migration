---
title: PartDesign Koordinatensystem
---
|  |
| --- |
| PartDesign Koordinatensystem |
| Menüeintrag |
| Part Design → Lokales Koordinatensystem erstellen |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.18 |
| Siehe auch |
| [PartDesign Bezugspunkt](/PartDesign_Point/de "PartDesign Point/de"), [PartDesign Bezugslinie](/PartDesign_Line/de "PartDesign Line/de"), [PartDesign Bezugsebene](/PartDesign_Plane/de "PartDesign Plane/de") |
|  |

## Beschreibung

Erzeugt ein **lokales Koordinatensystem**, welches als Referenz für andere Bezugsgeometrie verwendet werden kann. Es hilft auch, die Orientierung der referenzierten Bezugsgeometrie im 3D Raum zu ermitteln.

![](/images/PartDesign_LocalCoordinateSystem_Example.png)

Lokales Koordinatensystem, das aus dem Ursprung einer Bezugsebene entspring.

## Anwendung

1. Schaltfläche ![](/images/PartDesign_CoordinateSystem.svg) Lokales Koordinatensystem erstellen drücken.
2. Die Parameter des Koordinatensystems definieren. Eine erste Referenz in der 3D-Ansicht auswählen, um die verfügbaren Verbindungsarten zu filtern.
3. Abhängig von der ausgewählten Referenz, können eine oder mehrere Verbindungsarten in der Liste vorhanden sein. Die wahrscheinlichste wird automatisch ausgewählt und in der Liste fett dargestellt. Der Text *Angehängt im Modus:*  zusammen mit dem Namen der Verbindungsart erscheint in grün über der Liste der Referenzen.
4. Um eine weitere Referenz hinzuzufügen, drückt man die nächste Schaltfläche Referenz2. Sobald sie gerückt wurde ändert sich die Beschriftung zu *Auswählen...*, bis etwas ausgewählt wurde.
5. Einen Befestigungsmodus aus der Liste Wählen.
6. Versatzwerte für die Verbindung festlegen.
7. OK drücken.

## Optionen

Mit einem Doppelklick auf (Lokales KS) **Local\_CS** in der Baumstruktur oder durch einen Rechtsklick und Auswählen von **Bezug ändern** im Kontextmenü können die Werte geändert werden. Mehr Details zum Befestigungsmodus und dem Befestigungsversatz gibt es in [Part AnhangBearbeiten](/Part_EditAttachment/de "Part EditAttachment/de").

## Einstellungen

Siehe [PartDesign Ebene](/PartDesign_Plane/de#Preferences "PartDesign Plane/de").

## Eigenschaften

### Daten

* Daten**MapMode**: listet den verwendeten Anhängemodus auf.
* Daten**Attachment Reversed**: Gibt an, ob das Koordinatensystem in seiner Ausrichtung umgekehrt ist.
* Daten**Attachment Offset**: Wendet eine Transformation (Übersetzung und Drehung) in Bezug auf die Platzierung von Anhängen an.
* Daten**Placement**: Gibt die Koordinaten und Ausrichtung des Ursprungs des Koordinatensystems an .
* Daten**Label**: Name des Objekts. Dieser Name kann beliebig geändert werden.

## Skripten

```
lcs = App.activeDocument().addObject( 'PartDesign::CoordinateSystem', 'LCS' )

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_CoordinateSystem/de&oldid=1543595>"