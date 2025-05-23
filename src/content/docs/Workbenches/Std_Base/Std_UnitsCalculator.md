---
title: Std UnitsCalculator
---

|                            |
| -------------------------- |
| Std UnitsCalculator        |
| Menu location              |
| Tools → Units converter... |
| Workbenches                |
| All                        |
| Default shortcut           |
| _None_                     |
| Introduced in version      |
| -                          |
| See also                   |
| _None_                     |
|                            |

## Description

The **Std UnitsCalculator** command opens the Units converter. The Units converter can be used to convert values from one unit system to another.

![](/images/Std_UnitsCalculator_Dialog.png)

The Units converter dialog box

## Usage

1. Select the **Tools → ![](/images/Std_UnitsCalculator.svg) Units converter...** option from the menu.
2. The **Units converter** dialog box opens. For more information see [Options](#Options).
3. The dialog box is modeless, meaning it can stay open while you continue working in FreeCAD.
4. Press the Close button to close the dialog box.

## Options

### Top row

1. Enter a value with units in the first input box. For example `10 mm`.
   - Units with exponents should be entered using the `^` notation. For example `1 m^2`.
   - If the input value cannot be recognized or if the units are unknown the **=>** box will display the 'syntax error' message.
2. Enter the target units in the **as** input box. For example `in`.
   - If the units are unknown the **=>** box will display the 'unknown unit' message.
   - If the units in the first and second input box do not match, the **=>** box will display the 'unit mismatch' message. In the example the units match as 'mm' and 'in' are both length units.
3. If there are no input errors the **=>** box will immediately show the result. For the example values the result is `0,394 in`.
4. Optionally press the Copy button to copy the content of the **=>** box to the clipboard. The value can then for example be pasted in a FreeCAD task panel or dialog box.

### Text area

1. The conversion performed in the top row can be copied to the text area by pressing Enter in the first or second input box.
2. The text area can contain multiple conversions and its content can be selected and copied to the clipboard with Ctrl+C and used in other programs.

### Quantity

1. Select an option from the **Unit system** dropdown list. This will be the target unit system. Select **Preference system** to use the unit system defined in the [Preferences](/Preferences_Editor#Units "Preferences Editor").
2. Select an option from the **Unit category** dropdown list.
3. Enter a value with units in the **Quantity** input box. The units must match the unit category.
4. Click in the **Decimals** input box and press Enter to convert the value in the **Quantity** input box.

## Notes

- See [Expressions](/Expressions#Units "Expressions") for a list of all known units.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_UnitsCalculator/en&oldid=1454117>"
