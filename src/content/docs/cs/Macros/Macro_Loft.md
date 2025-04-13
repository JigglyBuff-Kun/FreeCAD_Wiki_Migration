---
title: Loft
---

|                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Loft                                                                                                                                                                                                 |
| Description                                                                                                                                                                                                |
| Vytvoří vybrané dráty s loft wit. Macro version: 00.04 Last modified: 2019-07-03 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/29/FCCreaLoft.png) Author: Mario52 |
| Author                                                                                                                                                                                                     |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                    |
| Download                                                                                                                                                                                                   |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/2/29/FCCreaLoft.png)                                                                                                                                 |
| Links                                                                                                                                                                                                      |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")           |
| Macro Version                                                                                                                                                                                              |
| 00.04                                                                                                                                                                                                      |
| Date last modified                                                                                                                                                                                         |
| 2019-07-03                                                                                                                                                                                                 |
| FreeCAD Version(s)                                                                                                                                                                                         |
| All                                                                                                                                                                                                        |
| Default shortcut                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                     |
| See also                                                                                                                                                                                                   |
| [FCTexture](/File:FCTexture.png "FCTexture") [Macro_Texture](/Macro_Texture/cs "Macro Texture/cs")                                                                                                         |
|                                                                                                                                                                                                            |
|                                                                                                                                                                                                            |

## Popis

speciálně napsané pro snadné lofting s liniemi vytvořenými [Macro Texture](/Macro_Texture/cs "Macro Texture/cs") (ale mohou být vhodné a použity pro společné loft)

Specially written for easy lofting with lines generated by the [Macro Texture](/Macro_Texture "Macro Texture") (but may be suitable and used for common lofts)

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/c477f892233d6abe02df5e97af828ff4/raw/d633193c577e8257ef458b8c1824d1047c3c6613/Macro_FCCreaLoft.FCMacro)_

```

# This code is copied instead of the original macro code
# to guide the user to the online download page.
# Use it if the code of the macro is larger than 64 KB and cannot be included in the wiki
# or if the RAW code URL is somewhere else in the wiki.

from PySide import QtGui, QtCore

diag = QtGui.QMessageBox(QtGui.QMessageBox.Information,
    "Information",
    "This macro must be downloaded from this link\n"
    "\n"
    "https://gist.githubusercontent.com/mario52a/c477f892233d6abe02df5e97af828ff4/raw/d633193c577e8257ef458b8c1824d1047c3c6613/Macro_FCCreaLoft.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/c477f892233d6abe02df5e97af828ff4/raw/d633193c577e8257ef458b8c1824d1047c3c6613/Macro_FCCreaLoft.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/c477f892233d6abe02df5e97af828ff4/raw/d633193c577e8257ef458b8c1824d1047c3c6613/Macro_FCCreaLoft.FCMacro>">raw code</a>

![](/images/Texture_001_Logo.png)

Texture_001_Logo

## Použijte

Zkopírujte makro a ikonu do adresáře maker.

Copy the macro and the icon in your macro directory.

- **Sort** : Třídit položky dat.
- **Reverse**: Obrácení pořadí dat.
- **Reset / Upgrade** : Toto tlačítko tolik funkcí:
- # Je-li výběr v 3D zobrazen, zobrazí se toto tlačítko Upgrade.
  Vyberte objekt v zobrazení 3Dview nebo Combo a klepnutím na toto tlačítko aktualizujete údaje v makru, změní se tlačítko Reset.
- # Je-li vybrán jeden nebo více objektů před spuštěním makra, zobrazí se toto tlačítko Reset.
  V okně makra jsou zobrazeny všechny vybrané objekty. 'Třídit'**nebo** Obrátit _zobrazené údaje, toto tlačítko Reset se používá k návratu k původní objednávce.  
   Pokud kliknete na 3DView nebo nevyberete všechny objekty tlačítko se používá pro reset na makro.  
   Pokud přidáváte jeden nebo více objektů v seznamu, použije se toto tlačítko._
- **Select all**: Vyberte všechny objekty v dokumentu.
- **SpinBox**: Zvyšte skok x Elements (výchozí 1 všechny objekty jsou používány).
- **Quit**: Ukončete makro.
- **CheckBox** Pokud je CheckBox zaškrtnuto, zobrazí se průběh práce, pokud není pouze práce ProgressBar (tato metoda je rychlejší) (ve výchozím nastavení je zaškrtnuto).
- **Launch the Lofting**: Spusťte Lofting a resetujte makro. Zobrazí se číslo výběru a reálné číslo se zvýší, pokud se použije skok spinBoxu

### Rozhraní

![FCCreaLoft002](/images/Macro_FCCreaLoft_01.png)

FCCreaLoft002

## Skript

Ikony pro nástroj Toolbar ![](/images/FCCreaLoft.png)

Stáhněte makro na Gist [**Macro_FCCreaLoft.FCMacro**](https://gist.github.com/mario52a/c477f892233d6abe02df5e97af828ff4)

## Odkazy

Diskuse na fóru [Texture](http://forum.freecadweb.org/viewtopic.php?f=24&t=5893&start=10)

The [Macro Texture](/Macro_Texture/cs "Macro Texture/cs")

## Verze

ver 00.00 : 06/02/2016

ver 00.00 : 06/02/2016

ver 00.02 : 09/02/2016 : Add button "Select all" and little option displayed in the button Launch (number selections) and (real number loft)

ver 00.03 : 09/02/2016 : minor (display on button)

ver 00.04 : 03/07/2019 : adapt to Python 3

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Loft/cs&oldid=1345613>"
