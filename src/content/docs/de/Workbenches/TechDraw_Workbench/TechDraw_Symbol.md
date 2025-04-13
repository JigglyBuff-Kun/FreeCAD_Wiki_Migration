---
title: TechDraw Zeichnungselement
---

|                                                                                                                |
| -------------------------------------------------------------------------------------------------------------- |
| TechDraw Zeichnungselement                                                                                     |
| Menüeintrag                                                                                                    |
| TechDraw → TechDraw Views → SVG-Zeichnungselement einfügen                                                     |
| Arbeitsbereich                                                                                                 |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                     |
| Standardtastenkürzel                                                                                           |
| _Keiner_                                                                                                       |
| Eingeführt in Version                                                                                          |
| -                                                                                                              |
| Siehe auch                                                                                                     |
| [TechDraw Vorlagen](/TechDraw_Templates/de "TechDraw Templates/de"), [Draft SVG](/Draft_SVG/de "Draft SVG/de") |
|                                                                                                                |

## Beschreibung

Das Werkzeug **TechDraw Zeichnungselement** fügt ein Symbol-Objekt ein. Ein Zeichnungselement ist eine abgespeckte Ansicht, die nur eine einzige [SVG](/SVG/de "SVG/de")-Datei enthält, die der Spezifikation svg-tiny entspricht (siehe [TechDraw Vorlagen](/TechDraw_Templates/de#Hinweise "TechDraw Templates/de")).
(Das Zeichnungselement wird an anderen Stellen auch noch mit Symbol bezeichnet. Bitte nicht mit den hier ebenfalls Symbol genannten [Icons](/Artwork_Guidelines/de "Artwork Guidelines/de") verwechseln)

Ein Zeichnungselement kann alles sein, das beim Beschriften einer Zeichnung hilft und das nicht weiter verändert werden muss; trotzdem darf es [editierbare Texte](/Svg_Namespace/de#freecad:editable "Svg Namespace/de") enthalten.

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Auch das Werkzeug [TechDraw Ansicht](/TechDraw_View/de "TechDraw View/de") kann ein Zeichnungselement erstellen.

![](/src/assets/images/TechDraw_SymbolSVG_sample.png)

Kompassrose zum Zeichnungsblatt hinzugefügt; dieses Zeichnungselement erhält man durch Installation der Erweiterung "symbols_library" mit dem [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de")

## Anwendung

1. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind: Wahlweise das gewünschte Zeichnungsblatt durch Auswahl in der [Baumansicht](/Tree_view/de "Tree view/de") aktivieren.
2. Den Menüeintrag **TechDraw → TechDraw Views → ![](/src/assets/images/TechDraw_Symbol.svg) SVG-Zeichnungselement einfügen** auswählen.
3. Wenn mehrere Zeichnungsblätter im Dokument vorhanden sind und noch kein Blatt aktiviert wurde, wird das Dialogfenster **Blattauswahl** geöffnet:
   1. Das gewünschte Blatt auswählen.
   2. Die Schaltfläche OK drücken.
4. Ein Datei-Browser wird geöffnet.
5. Eine SVG-Datei auswählen.
6. Ein Zeichnungselement wird eingefügt.
7. Wahlweise seine Daten-Eigenschaft**Scale** ändern, um seine Größe anzupassen.

## Hinweise

- Daten**Scale Type** für Zeichnungselemente ist bei der Erstellung immer _Custom_ (benutzerdefiniert) eingestellt. Dies dient der Bequemlichkeit, da Zeichnungselemente fast immer anders skaliert werden als der Rest der Objekte auf dem Blatt.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Eine Zeichnungselement, oder formal ein `TechDraw::DrawViewSymbol`-Objekt, besitzt die gemeinsamen [Eigenschaften](/TechDraw_View/de#Eigenschaften_der_Bauteilansicht "TechDraw View/de") aller Ansichtsarten. Sie enthält außerdem die folgenden Eigenschaften:

### Daten

Drawing view

- Daten-Eigenschaft (versteckt)**Symbol** (`String`): Der SVG-Code, der dieses Zeichnungselement definiert.
- Daten-Eigenschaft (versteckt)**Editable Texts** (`StringList`): Ersatzwerte für bearbeitbare Zeichenfolgen in diesem Zeichnungselement.
- Daten-Eigenschaft**Owner** (`Link`): Element dem dieses Zeichnungselement zugeordnet ist. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Zeichnungselement (Symbol) kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen verwendet werden:

```
sym = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewSymbol','TestSymbol')
rc = page.addView(anno)
f = open(unicode(symbolFileSpec,'utf-8'),'r')
svg = f.read()
f.close()
sym.Symbol = svg
rc = page.addView(sym)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Symbol/de&oldid=1500221>"
