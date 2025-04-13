---
title: Part Dicke
---

|                                                  |
| ------------------------------------------------ |
| Part Dicke                                       |
| Menüeintrag                                      |
| Formteil → Dicke...                              |
| Arbeitsbereich                                   |
| [Part](/Part_Workbench/de "Part Workbench/de")   |
| Standardtastenkürzel                             |
| _Keiner_                                         |
| Eingeführt in Version                            |
| -                                                |
| Siehe auch                                       |
| [Part Versatz](/Part_Offset/de "Part Offset/de") |
|                                                  |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Part_Thickness.svg) Dicke bearbeitet eine Festkörper-Form und wandelt sie in ein hohles Objekt um, indem es jeder seiner Flächen eine festgelegte und konstante Wandstärke verleiht. Bei einigen Festkörpern ermöglicht es, die Arbeit erheblich zu beschleunigen und vermeidet die Erstellung von Extrusionen und Taschen.

## Anwendung

1. Erstelle einen Festkörper
2. Wähle eine oder mehrere Oberflächen
3. Klicke auf das ![](/src/assets/images/Part_Thickness.svg) **Part Dicke**-Werkzeug
4. Setze die Parameter (siehe [Optionen](#Options/de))
5. Klicke OK zur Bestätigung, führe die Operation aus und verlasse die Funktion
6. Passe die Parameter in der Eigenschaftentabelle bei Bedarf an

## Optionen

- **Dicke**: Wandstärke des resultierenden Objekts.
  - Ein positiver Wert versetzt die Oberflächen nach außen.
  - Ein negativer Wert versetzt die Oberflächen nach innen.
- **Modus**
  - **Oberfläche**: Diese Option auswählen, wenn ein Gegenstand ähnlich einer Vase entstehen soll, oben offen, aber mit einem Boden.
  - **Rohr**: Diese Option auswählen, wenn ein Objekt ähnlich einem Rohr entstehen soll, oben und unten offen. In diesem Fall kann es einfacher sein, die zu löschenden Flächen vor dem Aufruf des Werkzeugs auszuwählen. Helfen können die Buttons für die vordefinierten Ansichten oder die numerischen Tasten.
  - **Hinten-Vorne**:
- **Verknüpfungstyp**
  - **Kreisbogen**: Entfernt die äußeren Kanten und erstellt eine Verrundung mit einem Radius gleich der festgelegten Wandstärke.
  - **Tangente**:
  - **Schnitt**:
- **Schnitt**:
- **Selbstdurchdringung**: Aktiviert Selbstdurchdringung
- Flächen: Die zu entfernenden Flächen auswählen, dann Fertig anklicken.
- **Ansicht akutalisieren**: Aktualisier die Ansicht automatisch in Echtzeit.

## Hinweise

- [App-Link](/App_Link/de "App Link/de")-Objekte, die auf die richtige Objektart verweisen, können auch als Quellobjekte verwendet werden. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")
- Komplexe Formen können bizarre, schwer vorherzusagende Ergebnisse produzieren. Prüfe sorgfältig die entstandene Form und speichere Deine Arbeit vor dem Anwenden der Operation.

## Verweise

Ein gutes Beispiel zur Benutzung dieses Werkzeuges gibt es im Forum: [Re: Help designing a simple enclosure](http://forum.freecadweb.org/viewtopic.php?f=3&t=3766&p=29741&hilit=enclosure#p29547)

## Beispiele

**Hohlzylinder**

1. Einen ![](/src/assets/images/Part_Cylinder.svg) [Zylinder](/Part_Cylinder/de "Part Cylinder/de") mit 10 mm Radius und 20 mm Höhe.
2. Deckel- und Bodenfläche des Zylinders auswählen.
3. Die Schaltfläche ![](/src/assets/images/Part_Thickness.svg) Dicke drücken (es ist nicht nötig, die Voreinstellungen zu ändern) und dann OK.

Hinweise:

- Für diese Form sollte man erwägen, ![](/src/assets/images/Part_Tube.svg) [Hohlzylinder erstellen](/Part_Tube/de "Part Tube/de") zu verwenden.
- Nur die Deckfläche des Zylinders auswählen, um eine Buchse zu erstellen.

![](/src/assets/images/ThicknessEsempio1.png)

![](/src/assets/images/ThicknessEsempio2.png)

**Gehäuse**

![](/src/assets/images/ThicknessEsempio3.png)

![](/src/assets/images/ThicknessEsempio4.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Thickness/de&oldid=1541327>"
