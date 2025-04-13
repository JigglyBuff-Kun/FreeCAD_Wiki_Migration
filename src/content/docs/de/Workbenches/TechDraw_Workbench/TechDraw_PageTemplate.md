---
title: TechDraw Seitenvorlage
---

|                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw Seitenvorlage                                                                                                                            |
| Menüeintrag                                                                                                                                       |
| TechDraw → Page → Neues Zeichnungsblatt aus einer Vorlage erstellen                                                                               |
| Arbeitsbereich                                                                                                                                    |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                                                        |
| Standardtastenkürzel                                                                                                                              |
| _Keiner_                                                                                                                                          |
| Eingeführt in Version                                                                                                                             |
| -                                                                                                                                                 |
| Siehe auch                                                                                                                                        |
| [TechDraw Standardseite](/TechDraw_PageDefault/de "TechDraw PageDefault/de"), [TechDraw Vorlagen](/TechDraw_Templates/de "TechDraw Templates/de") |
|                                                                                                                                                   |

## Beschreibung

Das Werkzeug **TechDraw Seitenvorlage** erstellt ein neues Page-Objekt (Zeichnungsblatt) unter Verwendung der in einem Dialogfeld ausgewählten Vorlagendatei.

Das Startverzeichnis für das Dialogfeld kann in den [TechDraw Einstellungen](/TechDraw_Preferences/de "TechDraw Preferences/de") festgelegt werden.

![](/src/assets/images/A4_Landscape_ISO7200_Pep.svg)

Eine der Vorlagen, die TechDraw mitgeliefert: A4_Landscape_ISO7200_Pep.svg

## Anwendung

1. Ein aktives Dokument muss vorhanden sein.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_PageTemplate.svg) Neues Zeichnungsblatt aus einer Vorlage erstellen drücken.
   - Den Menüeintrag **TechDraw → Page → ![](/src/assets/images/TechDraw_PageTemplate.svg) Neues Zeichnungsblatt aus einer Vorlage erstellen** auswählen.

## Eigenschaften

Siehe [TechDraw Standardseite](/TechDraw_PageDefault/de#Eigenschaften "TechDraw PageDefault/de").

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Ein Zeichnungsblatt, das auf einer ausgewählten Vorlage basiert, kann mit [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen erstellt werden:

```
import FreeCAD as App
from PySide import QtGui

doc = App.ActiveDocument
default_dir = App.getResourceDir() + "Mod/TechDraw/Templates"
param = App.ParamGet("User parameter:BaseApp/Preferences/Mod/TechDraw/Files")
template_dir = param.GetString("TemplateDir", default_dir)

template_file = QtGui.QFileDialog.getOpenFileName(QtGui.QApplication.activeWindow(),
                                                  "Select a Template File",
                                                  template_dir,
                                                  "Template (*.svg)")

page = doc.addObject("TechDraw::DrawPage", "Page")
template = doc.addObject("TechDraw::DrawSVGTemplate", "Template")
template.Template = template_file[0]
page.Template = template

doc.recompute()

```

### Editierbare Textfelder

_Siehe auch:_ [TechDraw Vorlagen](/TechDraw_Templates/de "TechDraw Templates/de") für mehr Informationen zur Erstellung von Vorlagen.

Sobald ein neues Blatt erstellt wurde, enthält sein Attribut `Template` ein Wörterbuch (Dictionary-Objekt) `EditableTexts` mit den Namen der editierbaren Felder (Keys) und ihren Textinhalten (Values). Dieses Wörterbuch kann in eine Variable kopiert, geändert und dann erneut dem Attribut `EditableTexts` zugewiesen werden, um die Änderungen darzustellen.

```
page = FreeCAD.ActiveDocument.Page
texts = page.Template.EditableTexts

for key, value in texts.items():
    print("{0} = {1}".format(key, value))

texts["FC-Title"] = "The title of my page"
page.Template.EditableTexts = texts

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_PageTemplate/de&oldid=1500205>"
