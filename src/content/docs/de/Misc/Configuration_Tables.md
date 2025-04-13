---
title: Configuration Tables/de
---
|  |
| --- |
| Tutorial |
| Topic |
| Using Configuration Tables |
| Level |
| Beginner |
| Time to complete |
| 30 minutes |
| Authors |
| Gbroques |
| FreeCAD version |
| 0.20 |
| Example files |
| [ConfigurationTableExample.FCStd](https://forum.freecad.org/download/file.php?id=270593) |
| See also |
| *None* |
|  |

## Einleitung

Mit der Veröffentlichung von [FreeCAD V0.20](/Release_notes_0.20#Spreadsheet_Workbench "Release notes 0.20") wurden zwei leistungsstarke neue Funktionen eingeführt: *Varianten-[Links](/Std_LinkMake/de "Std LinkMake/de")* und *[Konfigurationstabellen](https://forum.freecadweb.org/viewtopic.php?f=17&t=42183)*. Konfigurationstabellen sind eine spezielle Art von Variantenlink. Sie ermöglichen es, Sätze vordefinierter Parameter für ein bestimmtes Objekt zu variieren.

Zuvor konntest du Objekte mit Techniken wie Tabellenkalkulationen parametrisieren, aber mehrere verschiedene Instanzen dieses Objekts konnten nicht gleichzeitig existieren, es sei denn, du verwendest Techniken wie das Kopieren von Dateien oder Objekten, was zu Wartungsproblemen führt. Konfigurationstabellen erleichtern die Wartung solcher Varianten und das Umschalten zwischen ihnen.

Dieses Tutorial setzt voraus, dass du mit dem [PartDesign Arbeitsbereich](/PartDesign_Workbench/de "PartDesign Workbench/de") und dem [Sketcher Arbeitsbereich](/Sketcher_Workbench/de "Sketcher Workbench/de") vertraut bist. Du solltest auch mit der [Baumansicht](/Tree_view/de "Tree view/de") und dem [Eigenschafteneditor](/Property_editor/de "Property editor/de") vertraut sein.

Es gibt auch eine [Videoversion dieses Tutorials](https://www.youtube.com/watch?v=m9C_ahIVKOI).

## Beispiel

Um eine bessere Vorstellung von Konfigurationstabellen zu bekommen, betrachte das folgende Beispiel.

Stell dir eine einfache Sechskantmutter mit einem „Nenndurchmesser“ von 10 mm (M10) vor.

Wir können dasselbe Design wiederverwenden, eine Verbindung herstellen und dann bestimmte Parameter variieren, um eine M12-Sechskantmutter zu erstellen.

Für unser Beispiel beschreiben wir die Unterschiede zwischen diesen beiden Varianten anhand von 3 Parametern:

1. Durchmesser des Mittellochs
2. Breite über die Ecken
3. und Dicke.

Die einzelnen Parameterwerte für unsere Varianten sind in dieser Tabelle beschrieben:

| Variante | Nenndurchmesser | Eckmaß | Dicke |
| --- | --- | --- | --- |
| M10 | 10 | 18.48 | 8.4 |
| M12 | 12 | 20.78 | 10.8 |

## Anleitung

1. Erstelle eine neue [Tabelle](/Spreadsheet_CreateSheet/de "Spreadsheet CreateSheet/de") mit einer Überschriftenzeile. Lasse die zweite Zeile leer. Diese Zeile enthält die aktuelle Konfiguration und wird später automatisch ausgefüllt. Füge Parameter für M10 und M12 in den Zeilen 3 und 4 hinzu:

   ![](/images/Variant-link-spreadsheet-table-example-before-configuration-table.png)
2. Verwende den [Arbeitsbereich PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de"), um einen [Körper](/PartDesign_Body/de "PartDesign Body/de") und eine [Skizze](/PartDesign_NewSketch/de "PartDesign NewSketch/de") für die Sechskantmutter zu erstellen. Die Maßbeschränkung wird in einem späteren Schritt hinzugefügt.

   ![](/images/Variant-link-example-hex-nut-sketch-unconstrained.png)
3. [Aufpolsterung](/PartDesign_Pad/de "PartDesign Pad/de") der Skizze. Akzeptiere den Standardlängenwert.
4. Klicke mit der rechten Maustaste auf Zelle A2 in der Tabelle und wähle **Konfigurationstabelle...** aus dem Kontextmenü.
5. Das Dialogfeld **Konfigurationstabelle einrichten** wird geöffnet.
6. Gebe Folgendes ein:

   ![](/images/Variant-link-example-setup-configuration-table.png)

   Dadurch wird die zweite Zeile in der Tabelle ausgefüllt, dem Body eine neue Daten**Configuration**-Eigenschaft hinzugefügt und die Konfigurationstabelle daran gebunden.
7. Drücke die OK-Taste.
8. Wenn Zelle A2 `#PENDING` anzeigt, kannst du mit der rechten Maustaste auf die Tabelle in der [Baumansicht](/Tree_view/de "Tree view/de") klicken und **Objekt neu berechnen** auswählen, um den richtigen Wert anzuzeigen.
9. Lege einen Alias ​​für die 3 Zellen in Zeile 2 unter Durchmesser, Eckmaß und Dicke fest. Jeder Alias ​​sollte mit der Spaltenüberschrift der Zelle übereinstimmen.

   ![](/images/Variant-link-spreadsheet-table-example.png)
10. Beschränke die Skizze mit zwei Einschränkungen und binde die [Ausdrücke](/Expressions/de "Expressions/de") `Spreadsheet.Durchmesser` und `Spreadsheet.Breite über Ecken` an sie:

    ![](/images/Variant-link-example-hex-nut-sketch.png)
11. Binde `Spreadsheet.Dicke` an die Daten**Länge** des Pads.
12. Erstelle einen [PartDesign TeilFormBinder](/PartDesign_SubShapeBinder/de "PartDesign SubShapeBinder/de").
13. Ziehe in der [Baumansicht](/Tree_view/de "Tree view/de") den Binder aus dem Body und lege ihn auf dem Dokumentknoten ab.
14. Lege den Body auf dem Binder ab, um seine Daten**Support**-Eigenschaft auf den Body zu setzen. Das Ablegen ist erforderlich, da diese Eigenschaft standardmäßig schreibgeschützt ist.
15. Setze Daten**Bind Copy on Change** auf dem Binder auf `Enabled`.
16. Wähle `M12` für die Daten**Configuration**-Eigenschaft des Binders.
17. Setze Ansicht**Use Binder Style** auf `false` auf dem Binder.
18. Ändere das Daten**Placement** des Binders, sodass er vom Body weg ist.
19. Wenn du fertig bist, solltest du etwa Folgendes haben:

    ![](/images/Variant-link-finished-example-document.png)

### Verwende Std Link anstelle von PartDesign TeilFormBinder

Für den Variantenlink kannst du auch einen [Std Link](/Std_LinkMake "Std LinkMake") anstelle eines [PartDesign TeilFormBinder](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder") verwenden:

1. Die oben genannten vorbereitenden Schritte 1-10 sind dieselben.
2. Erstelle einen Link zum Textkörper.
3. Setze die Daten**Link Copy On Change** im Link auf `Enabled`.
4. Befolge die oben genannten Schritte 16, 18 und 19.

## Wichtige Überlegungen

* Wie erwähnt, kann ein Variantenlink mit einem [Std VerknüpfungErstellen](/Std_LinkMake/de "Std LinkMake/de") oder einem [PartDesign Teilformbinder](/PartDesign_SubShapeBinder/de "PartDesign SubShapeBinder/de") erstellt werden. Realthunder erklärt den Unterschied [hier](https://forum.freecadweb.org/viewtopic.php?f=17&t=42183):
  > Anstatt das verknüpfte Objekt mit seiner gesamten Hierarchie zu duplizieren, erstellt der [Teilformbinder](/PartDesign_SubShapeBinder/de "PartDesign SubShapeBinder/de") eine abgeflachte Kopie des mutierten Objekts. Ein weiterer Unterschied zu Link besteht darin, dass der [Teilformbinder](/PartDesign_SubShapeBinder/de "PartDesign SubShapeBinder/de") alle Änderungen des Originalobjekts mit der Kopie synchronisiert, selbst wenn die Konfigurationen unterschiedlich sind, während bei Link die beiden Objekte nach dem Kopieren unabhängig werden.

* Obwohl sie auf Links aufbauen, sind Variantenlinks nicht so „billig“ wie normale Links, da sie Kopien des Originalobjekts erstellen. Anleitungen werden von Realthunder [hier](https://forum.freecadweb.org/viewtopic.php?p=532130#p532130) und [hier](https://forum.freecadweb.org/viewtopic.php?p=358582#p358582) bereitgestellt:
  > [Wenn] Du Link für alternative Konfigurationen verwendest, mußt du dir darüber im Klaren sein, dass dadurch eine Kopie des Originalobjekts erstellt wird... es wäre besser, für jede [Variante] einen einzelnen „Varianten“-Link zu erstellen, um unnötige Duplikate zu vermeiden. Oder besser noch, verwende Teilformbinder... Und erstelle wiederum einen [Teilformbinder](/PartDesign_SubShapeBinder/de "PartDesign SubShapeBinder/de") für jede Konfiguration.

Retrieved from "<http://wiki.freecad.org/index.php?title=Configuration_Tables/de&oldid=1552329>"