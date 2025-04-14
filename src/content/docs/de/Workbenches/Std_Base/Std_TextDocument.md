---
title: Std Textdokument
---

|                                                                                                              |
| ------------------------------------------------------------------------------------------------------------ |
| Std Textdokument                                                                                             |
| Menüeintrag                                                                                                  |
| Werkzeuge → Textdokument hinzufügen                                                                          |
| Arbeitsbereich                                                                                               |
| All                                                                                                          |
| Standardtastenkürzel                                                                                         |
| _Keiner_                                                                                                     |
| Eingeführt in Version                                                                                        |
| 0.19                                                                                                         |
| Siehe auch                                                                                                   |
| [Draft Textform](/Draft_ShapeString/de "Draft ShapeString/de"), [Draft Text](/Draft_Text/de "Draft Text/de") |
|                                                                                                              |

## Beschreibung

Der Befehl **Std Textdokument** erstellt ein Objekt, das beliebigen Text aufnehmen kann. Dieses Element kann verwendet werden, um allgemeine Informationen aufzuschreiben oder für die Dokumentation des Modells.

## Anwendung

1. Den Menüeintrag **Werkzeuge → ![](/images/Std_TextDocument.svg) Textdokument hinzufügen** auswählen.
2. Das neu erstellte Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") doppelklicken, um eine Registerkarte zu öffnen, in die der Text geschrieben wird.
3. Text hizufügen.
4. Registerkarte schließen und die Datei speichern, wenn danach gefragt wird.

## Eigenschaften

### Ansicht

Editor

- Ansicht-Eigenschaft**Font Name** (`Font`): Schriftname, z.B. `Ubuntu Mono`.
- Ansicht-Eigenschaft**Font Size** (`Float`): Schrifthöhe in Punkt, z.B. `11`.
- Ansicht-Eigenschaft**Read Only** (`Bool`): Standardmäßig `false`. Wenn auf `true` gesetzt, kann der Text nicht editiert werden.
- Ansicht-Eigenschaft**Syntax Highlighter** (`Enumeration`): Standardmäßig `None`. Wenn auf `Python` gesetzt, wird der Text wie in der [Python-Konsole](/Python_console/de "Python console/de") hervorgehoben.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Siehe [Part Formelement](/Part_Feature/de "Part Feature/de") für allgemeine Informationen zum Hinzufügen von Objekten zu einem Dokument.

Ein `App::TextDocument`-Objekt (Textdokument) wird mit der `addObject()`-Methode des Dokuments erstellt. Sobald ein Textdokument existiert, werden seine Textinformationen in seinem Attribut `Text` gespeichert. Dieses Attribut kann in anderen Objekten verwendet werden, z.B. als Zeichenkette in einer ![](/images/Draft_ShapeString.svg) [Draft Textform](/Draft_ShapeString/de "Draft ShapeString/de").

```
import FreeCAD as App
import Draft

doc = App.newDocument()
obj = doc.addObject("App::TextDocument", "Text_document")
obj.Text = "textual information"
doc.recompute()

obj2 = Draft.makeShapeString(obj.Text, "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 10)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_TextDocument/de&oldid=1500128>"
