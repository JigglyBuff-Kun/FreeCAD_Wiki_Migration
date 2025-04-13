---
title: Std DlgMacroRecord
---

|                                                                   |
| ----------------------------------------------------------------- |
| Std DlgMacroRecord                                                |
| Menu location                                                     |
| Macro → Macro recording...                                        |
| Workbenches                                                       |
| All                                                               |
| Default shortcut                                                  |
| _None_                                                            |
| Introduced in version                                             |
| -                                                                 |
| See also                                                          |
| [Std MacroStopRecord](/Std_MacroStopRecord "Std MacroStopRecord") |
|                                                                   |

## Description

The **Std DlgMacroRecord** command starts a [macro](/Macros "Macros") recording session during which user actions are stored in a FreeCAD macro, a file with the .FCMacro extension. A macro can later be replayed, executed, to repeat the recorded actions.

![](/src/assets/images/Std_DlgMacroRecord_dialog.png)

The Macro recording dialog box

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/Std_DlgMacroRecord.svg) [Macro recording...](/Std_DlgMacroRecord "Std DlgMacroRecord") button.
   - Select the **Macro → ![](/src/assets/images/Std_DlgMacroRecord.svg) Macro recording...** option from the menu.
2. The **Macro recording** dialog box opens.
3. Enter a name for the macro in the **Macro name** input box.
4. Optionally change the **Macro path** by pressing the ... button.
5. The Stop button does not work at this time.
6. Press the Record button to close the dialog box and start the recording session.
7. The button image of the command changes to ![](/src/assets/images/Std_MacroStopRecord.svg) and the menu text changes to **Stop macro recording**.
8. Perform the actions you want to record.
9. To end the recording session do one of the following:
   - Press the ![](/src/assets/images/Std_MacroStopRecord.svg) [Stop macro recording](/Std_DlgMacroRecord "Std DlgMacroRecord") button.
   - Select the **Macro → ![](/src/assets/images/Std_MacroStopRecord.svg) Stop macro recording** option from the menu.

## Options

- When the Macro recording dialog box is displayed: press Esc or the Close button to abort the command.

## Notes

- To execute the recorded macro use the [Std DlgMacroExecute](/Std_DlgMacroExecute "Std DlgMacroExecute") command.
- To learn more about macros see the [Macros](/Macros "Macros") page.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor").

- The macro path can also be changed in the preferences: **Edit → Preferences... → Python → Macro → Macro path**.
- In most cases it is undesirable to record actions that do not change the model: under **Edit → Preferences... → Python → Macro → GUI commands** do one of the following:
  - To exclude these actions uncheck the **Record GUI commands** checkbox.
  - To include them as comments only, check both the **Record GUI commands** and **Record as comment** checkboxes.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_DlgMacroRecord/en&oldid=1454513>"
