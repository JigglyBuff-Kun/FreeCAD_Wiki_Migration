---
title: Команда "Запись макроса..."
---
|  |
| --- |
| Запись макроса... |
| Расположение в меню |
| Макросы → Запись макроса... |
| Верстаки |
| Все |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Остановить запись макроса](/Std_MacroStopRecord/ru "Std MacroStopRecord/ru") |
|  |

## Описание

The **Std DlgMacroRecord** command starts a [macro](/Macros "Macros") recording session during which user actions are stored in a FreeCAD macro, a file with the .FCMacro extension. A macro can later be replayed, executed, to repeat the recorded actions.

![](/images/Std_DlgMacroRecord_dialog.png)

The Macro recording dialog box

## Применение

1. There are several ways to invoke the command:
   * Press the ![](/images/Std_DlgMacroRecord.svg) [Macro recording...](/Std_DlgMacroRecord "Std DlgMacroRecord") button.
   * Select the **Macro → ![](/images/Std_DlgMacroRecord.svg) Macro recording...** option from the menu.
2. The **Macro recording** dialog box opens.
3. Enter a name for the macro in the **Macro name** input box.
4. Optionally change the **Macro path** by pressing the ... button.
5. The Stop button does not work at this time.
6. Press the Record button to close the dialog box and start the recording session.
7. The button image of the command changes to ![](/images/Std_MacroStopRecord.svg) and the menu text changes to **Stop macro recording**.
8. Perform the actions you want to record.
9. To end the recording session do one of the following:
   * Press the ![](/images/Std_MacroStopRecord.svg) [Stop macro recording](/Std_DlgMacroRecord "Std DlgMacroRecord") button.
   * Select the **Macro → ![](/images/Std_MacroStopRecord.svg) Stop macro recording** option from the menu.

## Опции

* При отображении диалогового окна записи макросов: нажмите Esc или кнопку Отмена, чтобы прервать выполнение команды.

## Примечания

* To execute the recorded macro use the [Std DlgMacroExecute](/Std_DlgMacroExecute "Std DlgMacroExecute") command.
* To learn more about macros see the [Macros](/Macros "Macros") page.

## Настройки

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor").

* The macro path can also be changed in the preferences: **Edit → Preferences... → Python → Macro → Macro path**.
* In most cases it is undesirable to record actions that do not change the model: under **Edit → Preferences... → Python → Macro → GUI commands** do one of the following:
  + To exclude these actions uncheck the **Record GUI commands** checkbox.
  + To include them as comments only, check both the **Record GUI commands** and **Record as comment** checkboxes.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_DlgMacroRecord/ru&oldid=1454508>"