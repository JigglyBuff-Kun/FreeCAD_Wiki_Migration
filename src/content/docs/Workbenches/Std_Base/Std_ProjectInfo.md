---
title: Std ProjectInfo
---

|                                |
| ------------------------------ |
| Std ProjectInfo                |
| Menu location                  |
| File → Document information... |
| Workbenches                    |
| All                            |
| Default shortcut               |
| _None_                         |
| Introduced in version          |
| -                              |
| See also                       |
| [Std New](/Std_New "Std New")  |
|                                |

## Description

The **Std ProjectInfo** command shows a dialog box with details of the active document. Some of this information can be edited.

## Usage

1. Select the **File → ![](/src/assets/images/Std_ProjectInfo.svg) Document information...** option from the menu.
2. A dialog box with the following information pops up:
   - **Name**: The name of the document. Corresponds to the Label property of the document. _Not editable._
   - **Path**: The full path of the file. Blank if the file has not been saved. _Not editable._
   - **UUID**: FreeCAD automatically enters a checksum value. _Not editable._
   - **Program version**: The FreeCAD version used to save the file. Blank if the file has not been saved. _Not editable._
   - **Unit System**: The document unit system. _Initial value depends on the [Default unit system](/Preferences_Editor#General_2 "Preferences Editor")._ [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
   - **Created by**: Enter an author name. _Can be preset._
   - **Creation date**: FreeCAD automatically enters the correct date. _Not editable._
   - **Last modified by**: Enter an author name. _Can be preset._
   - **Last modification date**: FreeCAD automatically enters the correct date. _Not editable._
   - **Company**: Enter a company name. _Can be preset._
   - **License information**: Select a license from the pulldown menu. _Can be preset._
   - **License URL**: The URL will change with the selected license, but can be overwritten. _Can be preset._
   - **Comment**: Enter any comment that may apply.
3. Enter the required information and press the OK button.

## Options

- Press Esc or the Cancel button to abort the command.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor").

- Some document properties: author name, company name and license information, can be preset: **Edit → Preferences... → General → Document → Authoring and License**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ProjectInfo/en&oldid=1403641>"
