---
title: ConstraintToAlias
---

|                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro ConstraintToAlias                                                                                                                                                                                                                                                |
| Description                                                                                                                                                                                                                                                            |
| Create an alias from within the Sketcher editor from a selected named constraint. Macro version: 0.2023.12.10 Last modified: 2023-12.10 FreeCAD version: 0.21 Download: [ToolBar Icon](https://wiki.freecad.org/images/3/31/ConstraintToAlias.svg) Author: TheMarkster |
| Author                                                                                                                                                                                                                                                                 |
| [TheMarkster](/index.php?title=User:TheMarkster&action=edit&redlink=1 "User:TheMarkster (page does not exist)")                                                                                                                                                        |
| Download                                                                                                                                                                                                                                                               |
| [ToolBar Icon](https://wiki.freecad.org/images/3/31/ConstraintToAlias.svg)                                                                                                                                                                                             |
| Links                                                                                                                                                                                                                                                                  |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                       |
| Macro Version                                                                                                                                                                                                                                                          |
| 0.2023.12.10                                                                                                                                                                                                                                                           |
| Date last modified                                                                                                                                                                                                                                                     |
| 2023-12.10                                                                                                                                                                                                                                                             |
| FreeCAD Version(s)                                                                                                                                                                                                                                                     |
| 0.21                                                                                                                                                                                                                                                                   |
| Default shortcut                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                 |
| See also                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                        |

## Description

Often while editing a sketch we find ourselves needing a spreadsheet alias and value to link a constraint to, but we haven't yet created this alias. In this case we must close the sketch, switch to the spreadsheet view, create the alias, return to the sketch editor, and link the constraint to the alias.

With this macro you can simply create the constraint, give it a name and a value, and then run the macro. It shows a dialog in which you can edit the label for Column A, the value and alias for Column B, and click OK to have the alias created for you and the constraint linked to it via expressions.

![](/src/assets/images/ConstraintToAlias_scr1.png)

## Usage

Create a constraint, giving it a name, and then select that constraint and run the macro. The name of the constraint will be the default for the name of the alias to be created in the spreadsheet and for the label in Column A. The dialog gives a preview of what the spreadsheet will look like once the alias is created.

The macro only uses Columns A and B for the aliases it generates, beginning with row 2 and searching down until if finds 2 empty cells in those columns. It is not possible to select a different spreadsheet row to use in the dialog, but you can edit the label, alias, and value fields here before clicking OK to create the alias. If no constraints are selected, the dialog will have some default values for Label, Alias, and Value. This feature was added in version 0.2023.11.07 for cases where outside the sketcher it could be useful to use the macro to add a new alias to the spreadsheet, such as when inputting the Length of a Pad.

If there is no spreadsheet yet in the active document, then one named "ss" will be created by the macro for you. If there is only 1 spreadsheet, then that spreadsheet will be used. If there are multiple spreadsheets, then they will be added to the Spreadsheets combobox at the top of the dialog. Select from that combobox the spreadsheet to which you wish to add the alias.

In the dialog the alias for the cell in Column B are shown in braces, e.g. `{alias_for_this_cell} 32`. When the alias is created you will not see this text in the spreadsheet, but rather only `32`, while the alias for that cell will be `alias_for_this_cell`.

In the screenshot above notice that the Alias field is in red text. This indicates the error that this alias already exists in the spreadsheet, so you should choose another name for it or cancel if you didn't realize it already existed. Note also that certain characters, like spaces, are not allowed for alias names. Spaces are automatically converted to underscores. Other special characters are also handled in this manner. You will see the alias name in its final form in the spreadsheet preview.

App::Links are supported, including links to spreadsheets in other documents.

If the selected sketch constraint is already bound by an expression, then that expression is cleared and reset to now point to the newly created spreadsheet alias. The alias value is created by value, so you will need to edit the Value cell in the dialog to recreate the expression, for example `=width * height` where width and height are aliases in the spreadsheet. You cannot link back to constraints in the sketch as that would create a cyclical redundancy.

## Limitations

- Only Columns A and B are supported
- Search for a new empty row begins at row 2, ignoring any existing contents in row 1
- Preview cells in the dialog are read-only and may not be edited within the dialog, except for the alias row to be created, which is edited via the Label, Alias, and Value fields.

## AddonManager code

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.github.com/mwganson/005765b49123d80cbb54569e081779a1/raw/556bf483802da8d756f869a4f894ba150d322305/ConstraintToAlias.FCMacro)_

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
    "https://gist.github.com/mwganson/005765b49123d80cbb54569e081779a1/raw/556bf483802da8d756f869a4f894ba150d322305/ConstraintToAlias.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.github.com/mwganson/005765b49123d80cbb54569e081779a1/raw/556bf483802da8d756f869a4f894ba150d322305/ConstraintToAlias.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.github.com/mwganson/005765b49123d80cbb54569e081779a1/raw/556bf483802da8d756f869a4f894ba150d322305/ConstraintToAlias.FCMacro>">raw code</a>

## Icon

ToolBar Icon ![](/src/assets/images/ConstraintToAlias.svg)

## Script

**Macro ConstraintToAlias.FCMacro**

[![](/src/assets/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mwganson/005765b49123d80cbb54569e081779a1)

[ConstraintToAlias.FCMacro](https://gist.github.com/mwganson/005765b49123d80cbb54569e081779a1)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_ConstraintToAlias/en&oldid=1340296>"
