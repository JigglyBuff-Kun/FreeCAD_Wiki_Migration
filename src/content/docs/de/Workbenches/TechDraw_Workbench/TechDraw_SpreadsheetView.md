---
title: TechDraw Tabellenansicht
---

|                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw Tabellenansicht                                                                                                        |
| Menüeintrag                                                                                                                     |
| TechDraw → Views From Other Workbenches → Tabellenansicht einfügen                                                              |
| Arbeitsbereich                                                                                                                  |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de"), [Spreadsheet](/Spreadsheet_Workbench/de "Spreadsheet Workbench/de") |
| Standardtastenkürzel                                                                                                            |
| _Keiner_                                                                                                                        |
| Eingeführt in Version                                                                                                           |
| -                                                                                                                               |
| Siehe auch                                                                                                                      |
| _Keiner_                                                                                                                        |
|                                                                                                                                 |

## Beschreibung

Das Werkzeug **TechDraw Tabellenansicht** ermöglicht es, eine ausgewählte [Kalkulationstabelle](/Spreadsheet_Workbench/de "Spreadsheet Workbench/de") in einer Tabellenansicht auf einem [Zeichnungsblatt](/TechDraw_Workbench/de "TechDraw Workbench/de") darzustellen.

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Auch das Werkzeug [TechDraw Ansicht](/TechDraw_View/de "TechDraw View/de") kann eine Tabellenansicht erstellen.

![](/src/assets/images/TechDraw_Spreadsheetview.png)

Darstellung einer eingefügten Kalkulationstabelle (Spreadsheet-Objekt) als Tabellenansicht (Sheet-Objekt) auf einem TechDraw-Zeichnungsblatt

## Anwendung

1. Ein Tabellenblatt in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen.
2. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind: Wahlweise das gewünschte Zeichnungsblatt durch Auswählen in der [Baumansicht](/Tree_view/de "Tree view/de") zur Auswahl hinzufügen.
3. Den Menüeintrag **TechDraw → Ansichten von anderen Arbeitsbereichen → ![](/src/assets/images/TechDraw_SpreadsheetView.svg) Tabellenansicht einfügen** auswählen.
4. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind und kein Blatt im [Hauptansichtsbereich](/Main_view_area/de "Main view area/de") angezeigt wird und außerdem noch kein Blatt aktiviert wurde, wird das Dialogfeld **Blattauswahl** geöffnet:
   1. Das gewünschte Blatt auswählen.
   2. Die Schaltfläche OK drücken.
5. Eine Tabellenansicht wird eingefügt
6. Den Zellenbereich anpassen, indem die Daten-Eigenschaft**Cell Start** und die Daten-Eigenschaft**Cell End** geändert werden.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Eine Tabellenansicht, oder formal ein `TechDraw::DrawViewSpreadsheet`-Objekt, besitzt die gemeinsamen [Eigenschaften](/TechDraw_View/de#Eigenschaften_der_Bauteilansicht "TechDraw View/de") aller Ansichtsarten. Sie enthält außerdem die folgenden Eigenschaften:

### Daten

Drawing view

- Daten-Eigenschaft (versteckt)**Symbol** (`String`): Der SVG-Code, der dieses Symbol definiert.
- Daten-Eigenschaft (versteckt)**Editable Texts** (`StringList`): Ersatzwert für bearbeitbare Zeichenfolgen in diesem Symbol. Nicht in Verwendung.
- Daten-Eigenschaft**Owner** (`Link`): Formelement dem das Symbol zugeordnet ist. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

Spreadsheet

- Daten-Eigenschaft**Source** (`Link`) (Quelle): Das zum Zeichungsblatt hinzuzufügende Tabellenblatt.
- Daten-Eigenschaft**Cell Start** (`String`) (Zellanfang): Die linke obere Zelle des Zellbereichs, der dieser Ansicht hinzugefügt werden soll.
- Daten-Eigenschaft**Cell End** (`String`) (Zellenende): Die rechte untere Zelle des Zellbereichs, der in diese Ansicht aufgenommen werden soll.
- Daten-Eigenschaft**Font** (`Font`) (Schriftart): Der Name der für Texte verwendeten Schriftart.
- Daten-Eigenschaft**Text Color** (`Color`) (Farbe): Die Farbe von Linien und Texten, denen in der Kalkulationstabelle kein Farbe zugewiesen wurde.
- Daten-Eigenschaft**Text Size** (`Float`) (Schriftgröße): Die Schriftgröße von Texten.
- Daten-Eigenschaft**Line Width** (`Float`) (Strichstärke): Die Breite der Zellränder.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_SpreadsheetView/de&oldid=1491132>"
