---
title: PartDesign Bezugsebene erstellen
---
|  |
| --- |
| PartDesign Bezugsebene erstellen |
| Menüeintrag |
| Part Design → Bezugselement erstellen → Bezugsebene erstellen |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [PartDesign Bezugspunkt](/PartDesign_Point/de "PartDesign Point/de"), [PartDesign Bezugslinie](/PartDesign_Line/de "PartDesign Line/de") |
|  |

## Beschreibung

Erstelle eine **Bezugsebene** (DatumPlane) die als Referenz für Skizzen oder andere Bezugselemente genutzt werden kann. Skizzen können auf einer Bezugsebene erstellt werden.

![](/images/Datum_plane.png)

*Eine Bezugsebene, die drei Ecken eines Quaders schneidet mit einem Zylinder der aus einer Skizze auf dieser Bezugsebene erzeugt wurde.*

## Voraussetzungen

Eine Bezugsebene kann nur innerhalb eines ![](/images/PartDesign_Body.svg) erstellt werden. [Körper](/PartDesign_Body/de "PartDesign Body/de"). Jeder Körper hat einen Ursprung, der standardmäßig ausgeblendet ist. Um sich auf die Ursprungsebenen beziehen zu können, muss der Ursprung sichtbar gemacht werden. Sie können dies tun, bevor Sie eine Bezugsebene erstellen.

## Anwendung

1. Schaltfläche ![](/images/PartDesign_Plane.svg) Bezugsebene erstellen drücken.
2. Die Parameter der Bezugsebene definieren. Eine erste Referenz in der 3D-Ansicht auswählen, um die verfügbaren [Part Befestigungsarten](/Part_EditAttachment/de "Part EditAttachment/de") zu filtern.
3. Abhängig von der ausgewählten Referenz, können eine oder mehrere Verbindungsarten in der Liste vorhanden sein. Die wahrscheinlichste wird automatisch ausgewählt und in der Liste fett dargestellt. Der Text *Angehängt im Modus:*  zusammen mit dem Namen der Verbindungsart erscheint in grün über der Liste der Referenzen.
4. Um eine weitere Referenz hinzuzufügen, drückt man die nächste Schaltfläche Referenz2. Sobald sie gerückt wurde ändert sich die Beschriftung zu *Auswählen...*, bis etwas ausgewählt wurde.
5. Einen Befestigungsmodus aus der Liste Wählen.
6. **Versatz:** zur Festlegung von Werten für den Versatz beim Anhängen oder Referenzieren. **Hinweis**: Der X-, Y- und Z-Versatz bezieht sich auf das lokale Koordinatensystem der Bezugsebene und nicht auf das globale. Deshalb ist der Z-Versatz immer ein Versatz entlang des Normalenvektors der Bezugsebene.
7. **Drehen:** Das Ändern des Wertes "Um die X-Achse" läßt die Ebene um ihre lokale X-Achse drehen. Das Ändern des Wertes "Um die Y-Achse" läßt die Ebene um die lokale Y-Achse drehen. Das Ändern des Wertes "Around z-axis" läßt die Ebene um die lokale Z-Achse drehen.
8. OK drücken.

## Optionen

Mit einem Doppelklick auf die Beschriftung der Bezugsebene in der Baumstruktur oder durch einen Rechtsklick und Auswählen von **Bezug ändern** im Kontextmenü können die Einstellungen der Bezugsebene geändert werden. Mehr Details zum Anhängemodus und dem Positionsversatz gibt es in [Part Anhang bearbeiten](/Part_EditAttachment/de "Part EditAttachment/de").

## Einstellungen

Die Standardeinstellungen für Streufarbe und Transparenz von [PartDesign Bezugselementen](/PartDesign_CompDatums/de "PartDesign CompDatums/de") wird durch den [Feinabstummungsparameter](/Fine-tuning/de#Arbeitsbereich_PartDesign "Fine-tuning/de") **DefaultDatumColor** gesteuert.

## Geeignet für

Bezugsebenen werden genutzt:

* als beliebige Spiegelebene,
* als Befestigung mit einem gewünschten Versatz für mehrere Skizzen
* als Befestigung für eine Skizze die ein spezifischen Versatz/Winkel vom Ursprung benötigt,
* als sichtbarer Indikator (z.B. eine Fokusebene)

Als Befestigung für eine einzelne Skizze sind sie im Prinzip überflüssig. Sie sind genauso vom [Problem der topologischen Benennung (TNP)](/Topological_naming_problem/de "Topological naming problem/de") betroffen wie Skizzen.

## Eigenschaften

* Daten-Eigenschaft**Abbildungsmodus**: zeigt den verwendeten Modus zum Anhängen an.
* Daten-Eigenschaft**Anhangversatz**: fügt eine Transformation (Verschiebung und Rotation) ein, bezogen auf die Position des Anhanges.
* Daten-Eigenschaft**Ettikett**: Objektname; der Name kann zur Arbeitserleichterung geändert werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Plane/de&oldid=1544920>"