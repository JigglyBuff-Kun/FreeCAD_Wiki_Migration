---
title: Report view
---

## Introduction

The [Report view](/Report_view "Report view") is a panel that shows text messages from FreeCAD processes and tools. It is available in the menu **[View](/Std_View_Menu "Std View Menu") → Panels → Report view**.

Certain properties of this panel, like color of the text and whether to display it automatically on warnings or errors, can be configured in the **General → Report view** tab of the [Preferences Editor](/Preferences_Editor#Report_view "Preferences Editor").

![](/images/FreeCAD_Report_view.png)

The report view showing messages when FreeCAD has just started.

## Messages

_See also:_ [Console API](/Console_API "Console API"), and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The report view displays messages from the internal FreeCAD `Console` class.

- `FreeCAD.Console.PrintMessage("text")`, print any sort of informative message, that doesn't imply any misbehavior; for example, print the coordinates of points, the result of a distance calculation, the number of vertices in a shape, etc. By default, in black color.
- `FreeCAD.Console.PrintWarning("text")`, print messages that are intended to warn the user about strange behavior in the application. Warnings should be shown when some functionality is missing but the software still works acceptably. By default, in yellow color.
- `FreeCAD.Console.PrintError("text")`, print messages that are intended to be error messages, that is, when a critical component is missing that makes a certain operation fail. By default, in red color.
- `FreeCAD.Console.PrintLog("text")`, print messages that are going into the logs. These messages could be anything that is valuable to troubleshoot a problem in the future by reading the logs, for example, starting or closing a workbench. By default, in blue color.

These functions can be used from the [Python console](/Python_console "Python console") directly, or from [macros](/Macros "Macros") and custom workbenches.

![](/images/FreeCAD_Report_view_example.png)

Example messages in the report view: a general message, a warning, an error, and a logged message.

## Actions

Right clicking the report view opens a context menu with the following commands:

- **Options**:
  - **Display message types**: see [Preferences Editor](/Preferences_Editor#Output_window "Preferences Editor").
  - **Show output window on**: idem.
  - **Redirect Python output**: idem.
  - **Redirect Python errors**: idem.
  - **Go to end**: if checked the report view will scroll to the bottom when a new message is added.
- **Copy**: stores the selected text in the clipboard for later pasting; it is disabled if nothing is selected.
- **Select all**: selects all text in the report view.
- **Clear**: erases all messages in the report view. This is useful if you want to troubleshoot a tool that prints messages to the report view, and want to be sure there are no old messages from previous tools.
- **Save As**: save the messages in the report view to a text file.

Retrieved from "<http://wiki.freecad.org/index.php?title=Report_view/en&oldid=1298964>"
