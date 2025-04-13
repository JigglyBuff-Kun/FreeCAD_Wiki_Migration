---
title: Std Înregistrarea unei Macrocomenzi
---
|  |
| --- |
| Std DlgMacroRecord |
| poziția meniului |
| [Macro](/Macros/ro "Macros/ro") → Macro recording ... |
| Ateliere |
| All |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Execute macro](/Std_DlgMacroExecuteDirect/ro "Std DlgMacroExecuteDirect/ro") |
|  |

## Descriere

Această funcție înregistrează la macro, toate operațiile efectuate în spațiul 3D.

![](/images/Std_DlgMacroRecord_dialog.png)

The Macro recording dialog box

## Utilizare

Este accesibil via **Macro → Macro recording ...**, sau pe calea apăsării butonului ![](/images/Std_DlgMacroRecord.png) Macro recording în bara de instrumente Macros ![](/images/Macros_toolbar.jpg).

## Options

* When the Macro recording dialog box is displayed: press Esc or the Close button to abort the command.

## Notes

* To execute the recorded macro use the [Std DlgMacroExecute](/Std_DlgMacroExecute "Std DlgMacroExecute") command.
* To learn more about macros see the [Macros](/Macros "Macros") page.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor").

* The macro path can also be changed in the preferences: **Edit → Preferences... → Python → Macro → Macro path**.
* In most cases it is undesirable to record actions that do not change the model: under **Edit → Preferences... → Python → Macro → GUI commands** do one of the following:
  + To exclude these actions uncheck the **Record GUI commands** checkbox.
  + To include them as comments only, check both the **Record GUI commands** and **Record as comment** checkboxes.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_DlgMacroRecord/ro&oldid=1454510>"