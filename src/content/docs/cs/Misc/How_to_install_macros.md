---
title: How to install macros/cs
---

|                                         |
| --------------------------------------- |
| Tutorial                                |
| Topic                                   |
| Programming                             |
| Level                                   |
| Medium programmer                       |
| Time to complete                        |
| 15 minutes                              |
| Authors                                 |
| [Mario52](/User:Mario52 "User:Mario52") |
| FreeCAD version                         |
| All                                     |
| Example files                           |
| _None_                                  |
| See also                                |
| _None_                                  |
|                                         |

## Description

Since v0.17 it is easy to add macros by using the [Addon Manager](/Std_AddonMgr "Std AddonMgr"). A regular user doesn't need to do more than use this tool. Keep reading for more information regarding installation of [macros](/Macros "Macros").

Macros are sequences of commands which are used to perform a complex drawing operation. Macros are [Python](/Python "Python") scripts, which means they are text files that can be written and edited with a text editor.

While Python scripts normally have the `.py` extension, FreeCAD macros should have the `.FCMacro` extension. A collection of macros written by experienced users is found in the [macros recipes](/Macros_recipes "Macros recipes") page.

See [Introduction to Python](/Introduction_to_Python "Introduction to Python") to learn about the Python programming language, and then [Python scripting tutorial](/Python_scripting_tutorial "Python scripting tutorial") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics") to learn about writing macros.

Here is a video on [installing FreeCAD macros in Ubuntu](https://wiki.opensourceecology.org/wiki/Installing_Macros_in_FreeCAD).

## The Macro menu and toolbar

### Toolbar

- ![](/images/Std_DlgMacroRecord.svg) [Macro recording...](/Std_DlgMacroRecord "Std DlgMacroRecord")
- ![](/images/Std_MacroStopRecord.svg) [Stop macro recording](/Std_MacroStopRecord "Std MacroStopRecord")
- ![](/images/Std_DlgMacroExecute.svg) [Macros...](/Std_DlgMacroExecute "Std DlgMacroExecute")
- ![](/images/Std_DlgMacroExecuteDirect.svg) [Execute macro](/Std_DlgMacroExecuteDirect "Std DlgMacroExecuteDirect")

### Menu

Besides the tools in the toolbar, the following functions are also available in the **Macro** menu.

- [Attach to remote debugger](/Std_MacroAttachDebugger "Std MacroAttachDebugger")

* ![](/images/Std_MacroStartDebug.svg) [Debug macro](/Std_MacroStartDebug "Std MacroStartDebug")
* ![](/images/Std_MacroStopDebug.svg) [Stop debugging](/Std_MacroStopDebug "Std MacroStopDebug")

- [Step over](/Std_MacroStepOver "Std MacroStepOver")
- [Step into](/Std_MacroStepInto "Std MacroStepInto")
- [Toggle breakpoint](/Std_ToggleBreakpoint "Std ToggleBreakpoint")

## Macros directory

Macros are created in a specific folder under the user's FreeCAD directory. This directory can be configured in the [Execute macro dialog](/Std_DlgMacroExecute "Std DlgMacroExecute"), or in the [Preferences Editor](/Preferences_Editor "Preferences Editor"), through the menu **Edit → Preferences → Python → Macro → Macro recording settings**.

Downloaded macros should also be placed in this directory.

### Default directory

Macros can be simply copied into

```
$ROOT_DIR/

```

where `$ROOT_DIR` is a top level directory searched by FreeCAD on startup.

The `$ROOT_DIR` could be a system wide directory, in which case the macro is installed for all users.

- On Linux it is usually `/usr/share/freecad/`
- On Windows it is usually `C:\Program Files\FreeCAD\`
- On Mac OSX it is usually `/Applications/FreeCAD/`

The `$ROOT_DIR` could be a particular user's directory.

- On Linux it is usually `/home/username/.local/share/FreeCAD/` (0.20 and above) or `/home/username/.FreeCAD/` (0.19 and below).
- On Windows it is usually `C:\Users\username\AppData\FreeCAD\`
- On Mac OSX it is usually `/Users/username/Library/Preferences/FreeCAD/`

### Configuring the user directory

1. Open the menu **Macro → ![](/images/Std_DlgMacroExecute.svg) [Macros...](/Std_DlgMacroExecute "Std DlgMacroExecute")** to open the [Execute macro dialog](/Std_DlgMacroExecute "Std DlgMacroExecute").

![](/images/Dxf_Importer_Install_01.png)

Opening the Execute macro dialog

2. Set the appropriate `User macros location`.

- Linux: usually `/home/username/.local/share/FreeCAD/` (0.20 and above) or `/home/username/.FreeCAD/` (0.19 and below)
- Windows: usually `C:\Users\username\AppData\Roaming\FreeCAD\`
- MacOS: usually `/Users/username/Library/Preferences/FreeCAD/`

![](/images/Dxf_Importer_Install_02.png)

Setting of the macros directory

3. Navigate to that directory in your computer.

- Linux: paste the address into your file manager, "Nautilus" or other. You may have to press Ctrl+H to make the hidden directory `.FreeCAD/` visible.
- Windows: paste the address into your "File explorer" and confirm.
- MacOS: locate the folder in the "Finder" or paste the address into a "File explorer"; remember the `file:///` prefix in the "File explorer" for a file on disk.

![](/images/Dxf_Importer_Install_03.png)

Accessing the macros directory in the operating system

4. Add macro files to this directory.

- Linux: leave the file manager open, and bookmark the location for faster access.
- Windows: leave open the file explorer.
- MacOS: either leave a "Finder" window open, or bookmark the location in your "File explorer", or set up an "Alias" to point to it, or drag the folder into the "SideBar" of the "Finder" so it is there to use from other programs such as text editors.

![](/images/Dxf_Importer_Install_04.png)

Macros directory

## Installing macros

### Automatic method

Starting with FreeCAD 0.17, use the [Addon Manager](/Std_AddonMgr "Std AddonMgr") in **Tools → Addon manager** to install a macro that has been included in the [FreeCAD-macros](https://github.com/FreeCAD/FreeCAD-macros) repository.

In past versions of FreeCAD you could use two automated ways to install macros and other addons:

- [addons_installer.FCMacro](https://github.com/FreeCAD/FreeCAD-addons): itself a macro, this was the precursor to the Addon Manager, and is hosted in the [FreeCAD-addons](https://github.com/FreeCAD/FreeCAD-addons) repository. You don't need to use this tool in new installations of FreeCAD.
- [freecad-pluginloader](https://github.com/microelly2/freecad-pluginloader): also a macro, it could be used to install new components to FreeCAD. It is no longer developed.

The recommended way to install addons, that is, [external workbenches](/External_workbenches "External workbenches") and macros, is the [Addon Manager](/Std_AddonMgr "Std AddonMgr"). However, you can still add macros to your system with the manual methods described in the following sections; this is useful if you are developing and testing your own code.

### Manual method 1. Copy the code to the macro editor

For macros that are relatively small, 300 lines or less, the code can be copied and pasted directly into the FreeCAD macro editor.

We will use ![](/images/Part_Prism_Apothem.svg) [Macro Apothem Based Prism GUI](/Macro_Apothem_Based_Prism_GUI "Macro Apothem Based Prism GUI") as an example.

1. Go to the macro wiki page, which should be listed in [Macros recipes](/Macros_recipes "Macros recipes").

If there is a custom icon download it; click on it with the right mouse button and select `Save image as...`; place the icon in the macros directory. This icon can be used as a shortcut for the macro in a [custom toolbar](/Customize_Toolbars "Customize Toolbars"). The default icon is ![](/images/Text-x-python.png).

![](/images/Macro_Install_HowTo_28.png)

Downloading the icon from the macro page

2. In the macro page, select the code inside the _Script_ or _Macro_ sections, and copy it.

3. In FreeCAD, open the menu **Macro → ![](/images/Std_DlgMacroExecute.svg) [Macros...](/Std_DlgMacroExecute "Std DlgMacroExecute")** to open the [Execute macro dialog](/Std_DlgMacroExecute "Std DlgMacroExecute").

![](/images/Dxf_Importer_Install_01.png)

Opening the Execute macro dialog

4. Click Create.

![](/images/Macro_Install_HowTo_17.png)

Creating a new macro

5. Enter the macro name, here `Macro_Apothem_Based_Prism_GUI`, and press OK.

![](/images/Macro_Install_HowTo_18.png)

Entering the macro name

6. The macro editor opens, showing the full path of the new macro.

![](/images/Macro_Install_HowTo_19.png)

The macro editor

7. Paste the code in the editor window, and then click the cross on the tab to close the window.

![](/images/Macro_Install_HowTo_20.png)

Closing the macro editor

8. A window appears asking for confirmation to save the code; click on Yes. You can also use Ctrl+S to save the file.

Restart FreeCAD to correctly register the new macro.

![](/images/Macro_Install_HowTo_27.png)

Asking for confirmation to save the code

9. Open the menu again, **Macro → ![](/images/Std_DlgMacroExecute.svg) [Macros...](/Std_DlgMacroExecute "Std DlgMacroExecute")**, select the new macro and press Execute.

![](/images/Macro_Install_HowTo_21.png)

Selecting the macro to run it

10. The macro now runs. Fill in the fields with your values and click the OK button.

![](/images/Macro_Install_HowTo_22.png)

The macro in action; fill in the information and press OK when ready

11. This macro should return an error if no document is active; other macros open a new document if none exists.

Create a new document with **File → ![](/images/Std_New.svg) [New](/Std_New "Std New")**, and then repeat the previous steps to execute the macro.

![](/images/Macro_Install_HowTo_23.png)

The macro returning an error if no document is active

12. Once an active document is available, the macro runs and creates an object.

![](/images/Macro_Install_HowTo_24.png)

Object created by the macro

13. You can open the macro in the editor again to run it or modify it. Go to **Macro → ![](/images/Std_DlgMacroExecute.svg) [Macros...](/Std_DlgMacroExecute "Std DlgMacroExecute")**, select the macro and press Edit.

![](/images/Macro_Install_HowTo_25.png)

Opening the macro in the editor

14. The macro can now be run with **Macro → ![](/images/Std_DlgMacroExecuteDirect.svg) [Execute macro](/Std_DlgMacroExecuteDirect "Std DlgMacroExecuteDirect")**, or by clicking on the ![](/images/Std_DlgMacroExecuteDirect.svg) [Std DlgMacroExecuteDirect](/Std_DlgMacroExecuteDirect "Std DlgMacroExecuteDirect") button in the toolbar.

![](/images/Macro_Install_HowTo_26.png)

Running the macro that is loaded in the editor

### Manual method 2. Add a macro file from a compressed .zip file

Some macros are too big that it's inconvenient to copy and paste them into the macro editor, or they cannot be hosted in the wiki. In this case, the code may be hosted somewhere else, in a Github repository, or in the [FreeCAD forum](https://forum.freecadweb.org/). The code may also be compressed into a `.zip` file, tarball `.tar.xz`, or other type of archive if it contains several files. If the code is distributed in this way, the archive should be extracted and the files placed in the macros directory.

We will use ![](/images/Text-x-python.png) [Macro screw maker](/Macro_screw_maker1_2 "Macro screw maker1 2") as an example.

1. Download the compressed code from the forum, [Screw Maker](http://forum.freecadweb.org/viewtopic.php?f=22&t=6558#p52887).

You need to use a decompressor to get the internal files.

- For Windows you can use an application like [7-zip](http://www.7-zip.org/) or [L-Zarc](http://www.kanmandet.dk/?p=37) or [quickzip](http://www.quickzip.org/quickzip51.html).
- For Linux you can use a command from the terminal

```
unzip your_file.zip -d your_directory

```

2. Download the compressed archive with the macro code to a local folder.

![](/images/Macro_Install_HowTo_01.png)

Downloading the compressed archive to a local directory

3. Decompress the file in the folder.

![](/images/Macro_Install_HowTo_02.png)

Decompressing the file in the folder

4. The decompressor creates a new directory with the unpacked files.

![](/images/Macro_Install_HowTo_03.png)

New directory created after unpacking the archive

5. Go inside the new directory, and copy or cut the macro file.

![](/images/Macro_Install_HowTo_04.png)

Entering the newly created directory with the decompressed macro file

6. Go to the macro directory and paste the file there.

![](/images/Macro_Install_HowTo_05.png)

Placing the macro file in the macro directory

7. In FreeCAD, open the menu **Macro → ![](/images/Std_DlgMacroExecute.svg) [Macros...](/Std_DlgMacroExecute "Std DlgMacroExecute")** to open the [Execute macro dialog](/Std_DlgMacroExecute "Std DlgMacroExecute").

![](/images/Macro_Install_HowTo_06.png)

Opening the Execute macro dialog

8. Select the new macro and press Execute.

![](/images/Macro_Install_HowTo_07.png)

Selecting the macro to run it

9. The macro now runs. Select the desired options, and click the Create button.

![](/images/Macro_Install_HowTo_08.png)

The macro in action; select the desired options, and press Create when ready

![](/images/Macro_Install_HowTo_30.png)

Object created by the macro

## Execute a macro in command line

Command line execute a macro (.FCMacro or .py)

on Windows

```
"C:\Program Files\FreeCAD\bin\FreeCAD.exe" "C:\Users\userName\AppData\Roaming\FreeCAD\Mod\WorkFeature\start_WF.FCMacro"

```

on Linux

```
todo

```

## Errors in macros

### Indentation errors

The white space at the beginning of the lines (indentation) in the [Python](/Python "Python") programming language is very important, and an integral part of the code. An inappropriate space may cause the code to not run or present errors.

This section describes some errors that may be encountered when copying and pasting, and writing macro code.

A typical indentation error looks like this:

```
<unknown exception traceback><type 'exceptions.IndentationError'>: ('expected an indented block', ('C:/Users/d/AppData/Roaming/FreeCAD/Macro_Apothem_Based_Prism_GUI.FCMacro', 21, 3, 'def priSm(self):\n'))

```

#### Example 1

If the code lacks any indentation, the code won't work. Class (`class`) and function definitions (`def()`), as well as control structures (`if`, `while`, `for`) should be followed by a block of indented code.

This error is possible if the user doesn't copy the code correctly, and all spaces are accidentally removed.

![](/images/Macro_Install_HowTo_09.png)

Python code that lacks any indentation; it will cause an error when it's run

Indentation problem fixed.

![](/images/Macro_Install_HowTo_10.png)

Python code with the correct indentation

If the code is selected, all lines should be highlighted all the way to the left edge, indicating that the lines are aligned.

![](/images/Macro_Install_HowTo_11.png)

Python code highlighted, showing that all lines start at the left edge

#### Example 2

If an additional space is introduced at the beginning of all lines, the Python interpreter will fail and complain about unnecessary indentation. In this case, all lines need the initial space removed.

![](/images/Macro_Install_HowTo_12.png)

Python code with additional space on each line

#### Example 3

Here the code has been copied from a forum thread by using the Select all button. Apparently the selection is good.

![](/images/Macro_Install_HowTo_14.png)

Python code copied from a forum

However, when the selection is pasted into the macro editor, undesirable indentation seems to appear.

![](/images/Macro_Install_HowTo_15.png)

Python code copied from a forum into the macro editor; unnecessary indentation is added

In this case, the initial spaces need to be removed. This can be done with a specialized text editor to quickly decrease the indentation of the lines.

In Windows, [Notepad++](http://notepad-plus-plus.org/) can perform selection with Alt + Mouse dragging, and then use **Edit → Indent → Decrease the indentation**.

![](/images/Macro_Install_HowTo_16.png)

Python code with the correct indentation

#### Example 4

Here the selection also selects the line numbers in the code example. If this selection is pasted into the macro editor, it won't work. All line numbers need to be removed, and the spaces adjusted so that the Python code has the proper indentation.

![](/images/Macro_Install_HowTo_29.png)

Selection that also selects the line numbers; if this code is pasted into the macro editor, it won't work

#### Good code

![](/images/Macro_Install_HowTo_13.png)

Python code with the correct indentation

### No text output from macros

Macros may output information to the report view to detail what the code is doing when it is running.

If no information is displayed, make sure the report view and [Python](/Python "Python") console are visible, and that the output is directed tot he report view.

#### Printing information

FreeCAD macros have two methods to print information to the report view.

The FreeCAD functions

```
FreeCAD.Console.PrintMessage("Hello World! \n")
FreeCAD.Console.PrintError("Hello World! \n")
FreeCAD.Console.PrintWarning("Hello World! \n")

```

The simple Python function

```
print("Hello World!")

```

#### Enabling the report view

To see the information displayed in the console you should:

1. Go to the menu **View → Panels**.

![](/images/Macro_Install_HowTo_31.png)

![](/images/Macro_Install_HowTo_32.png)

Making the panels visible in the menu View → Panels

2. Enable the `Report view` and the `Python console`.

![](/images/Macro_Install_HowTo_33.png)

Enabling the report view and the Python console

3. The panels are now visible, and commands like `FreeCAD.Console.PrintMessage()` now print information that appears in the `Report view`.

![](/images/Macro_Install_HowTo_34.png)

FreeCAD main window with the Report view and the Python console

#### Enabling the print() command

FreeCAD may need to be configured so the `print()` function of [Python](/Python "Python") redirects its output correctly to the report view.

1. Go into the [Preferences Editor](/Preferences_Editor "Preferences Editor") with the menu **Edit → Preferences**.

![](/images/Macro_Install_HowTo_35.png)

Going into the preferences editor

2. Go to **Python** section, and then **Output window → Python interpreter**.

![](/images/Macro_Install_HowTo_36.png)

Output window preferences

3. Check both boxes:

- ![](/images/Case_a_cocher_O.png) Redirect internal Python output to report view

- ![](/images/Case_a_cocher_O.png) Redirect internal Python errors to report view

and then press the OK button.

![](/images/Macro_Install_HowTo_37.png)

Redirecting the Python output to the report view

![](/images/Macro_Install_HowTo_38.png)

Python commands printing information to the report view

Retrieved from "<http://wiki.freecad.org/index.php?title=How_to_install_macros/cs&oldid=1296816>"
