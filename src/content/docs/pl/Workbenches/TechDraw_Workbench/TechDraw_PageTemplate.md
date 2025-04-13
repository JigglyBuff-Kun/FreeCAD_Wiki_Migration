---
title: Rysunek Techniczny Wstaw nową stronę przy użyciu szablonu
---
|  |
| --- |
| TechDraw PageTemplate |
| Menu location |
| Rysunek Techniczny → Strona → Wstaw nową stronę przy użyciu szablonu |
| Workbenches |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Wstaw nową domyślna stronę rysunku](/TechDraw_PageDefault/pl "TechDraw PageDefault/pl"), [Szablony](/TechDraw_Templates/pl "TechDraw Templates/pl") |
|  |

## Opis

Narzędzie **Wstaw nową stronę przy użyciu szablonu** tworzy nowy obiekt strony przy użyciu pliku szablonu wybranego z okna dialogowego.

Katalog startowy dla okna dialogowego można określić w [Ustawieniach](/TechDraw_Preferences/pl "TechDraw Preferences/pl").

![](/images/A4_Landscape_ISO7200_Pep.svg)

Jeden z dołączonych szablonów: A4\_Landscape\_ISO7200\_Pep.svg

## Użycie

1. Wymagany jest aktywny dokument.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_PageTemplate.svg) **Wstaw nową stronę przy użyciu szablonu**.
   * Wybierz opcję z menu **Rysunek Techniczny → Strona → ![](/images/TechDraw_PageTemplate.svg) Wstaw nową stronę przy użyciu szablonu**.

## Właściwości

Zobacz stronę [Wstaw nową domyślną stronę rysunku](/TechDraw_PageDefault/pl#Właściwości "TechDraw PageDefault/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Stronę opartą na wybranym szablonie można utworzyć za pomocą [makrodefinicji](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") przy użyciu następujących funkcji:

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

### Pola tekstowe do edycji

*Zobacz również:* [Rysunek Techniczny: Szablony](/TechDraw_Templates/pl "TechDraw Templates/pl") aby uzyskać więcej informacji na temat tworzenia szablonów.

Po utworzeniu nowej strony, jej atrybut `Template` przechowuje słownik `EditableTexts` zawierający nazwy edytowalnych pól *(klucze)* i ich wartości tekstowe. Skopiuj ten słownik do zmiennej, wprowadź zmiany, a następnie ponownie przypisz słownik do atrybutu `EditableTexts`, aby zobaczyć zmiany.

```
page = FreeCAD.ActiveDocument.Page
texts = page.Template.EditableTexts

for key, value in texts.items():
    print("{0} = {1}".format(key, value))

texts["FC-Title"] = "The title of my page"
page.Template.EditableTexts = texts

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_PageTemplate/pl&oldid=1430784>"