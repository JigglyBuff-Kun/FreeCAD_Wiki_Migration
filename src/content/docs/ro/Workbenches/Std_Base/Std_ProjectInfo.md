---
title: Fișier Informații despre proiect
---
|  |
| --- |
| Informații despre proiect |
| poziția meniului |
| [File](/Std_File_Menu/ro "Std File Menu/ro") → Informații despre proiect |
| Ateliere |
| All |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| *Nici unul* |
|  |

## Descriere

Furnizează informații ausupra proiectului .

The **Std ProjectInfo** command shows a dialog box with details of the active document. Some of this information can be edited.

## Utilizare

Alegeți  File → Informații despre proiect... din meniul de sus/top
  
Apoi, următoarele informații pot fi introduse într-o fereastră:

* Name: (Inițial numele fișierului va fi inserat aici)
* Path: (Inițial calea pentru salvarea fișierului va fi introdus aici)
* UUID: o sumă de control creată de către FreeCAD va fi introdusă aici
* Created by: inițial blanc, poate fi introdus aici manual
* Creation date: Data și timpul creării fișierului va fi completat aici
* Last modified by: inițial blank, poate fi introdus manual
* Last modification date: va fi completat în FreeCAD
* Company: inițial necompletat , poate fi introdus manual
* License Information: alegeți tipul Licenței din pull-down-menu, Standard este "All rights reserved"
* License URL: Standard este un link către wikipedia-"All rights reserved"-page. Poate fi supra scris.
* Comment: inițial necompletat, poate fi introdus manual

1. Select the **File → ![](/images/Std_ProjectInfo.svg) Document information...** option from the menu.
2. A dialog box with the following information pops up:
   * **Name**: The name of the document. Corresponds to the Label property of the document. *Not editable.*
   * **Path**: The full path of the file. Blank if the file has not been saved. *Not editable.*
   * **UUID**: FreeCAD automatically enters a checksum value. *Not editable.*
   * **Program version**: The FreeCAD version used to save the file. Blank if the file has not been saved. *Not editable.*
   * **Unit System**: The document unit system. *Initial value depends on the [Default unit system](/Preferences_Editor#General_2 "Preferences Editor").* [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
   * **Created by**: Enter an author name. *Can be preset.*
   * **Creation date**: FreeCAD automatically enters the correct date. *Not editable.*
   * **Last modified by**: Enter an author name. *Can be preset.*
   * **Last modification date**: FreeCAD automatically enters the correct date. *Not editable.*
   * **Company**: Enter a company name. *Can be preset.*
   * **License information**: Select a license from the pulldown menu. *Can be preset.*
   * **License URL**: The URL will change with the selected license, but can be overwritten. *Can be preset.*
   * **Comment**: Enter any comment that may apply.
3. Enter the required information and press the OK button.

## Options

* Press Esc or the Cancel button to abort the command.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor").

* Some document properties: author name, company name and license information, can be preset: **Edit → Preferences... → General → Document → Authoring and License**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ProjectInfo/ro&oldid=1403583>"