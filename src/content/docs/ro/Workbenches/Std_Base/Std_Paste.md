---
title: Std Paste
---
|  |
| --- |
| Std\_Paste |
| Menu location |
| Edit → Paste |
| Workbenches |
| All |
| Default shortcut |
| Ctrl+V |
| Introduced in version |
| - |
| See also |
| [Copy](/Std_Copy "Std Copy"), [Duplicate Selection](/Std_DuplicateSelection "Std DuplicateSelection") |
|  |

## Descriere

The Paste command is involved in replicating [Document](/Document_structure "Document structure") objects. It places the current "clipboard" contents into the current document. Objects may be copy/pasted between Documents.

The **Std Paste** command pastes objects from the Clipboard into the active document.

## Cum se folosește

1. Make the target Document active by clicking on it in the Project tab or Document window.
2. Press the ![Paste](/images/Std_Paste.png) icon, ctrl + V keys or use menu choices Edit → Paste.

1. There are several ways to invoke the command:
   * Press the ![](/images/Std_Paste.svg) [Paste](/Std_Paste "Std Paste") button.
   * Select the **Edit → ![](/images/Std_Paste.svg) Paste** option from the menu.
   * Select the **![](/images/Std_Paste.svg) Paste** option from the [Tree view](/Tree_view "Tree view") context menu. Note that this option is only available when an existing object has been selected.
   * Use the keyboard shortcut: Ctrl+V.

## Notes

* FreeCAD will automatically change the internal names and, depending on the preferences, labels of objects to avoid name conflicts.
* A spreadsheet cell alias that already exists in the spreadsheet will not be pasted.
* When you are working in a FreeCAD text window, an input box or a spreadsheet, the standard keyboard shortcut Ctrl+V, in almost all cases, does not call this command but uses the Paste function from the OS instead.
* It is not possible to copy-paste native objects between FreeCAD and other applications.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor").

* To allow duplicate labels check the **Edit → Preferences... → General → Document → Allow duplicate object labels in one document** option. But this is not recommended.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Paste/ro&oldid=1448924>"