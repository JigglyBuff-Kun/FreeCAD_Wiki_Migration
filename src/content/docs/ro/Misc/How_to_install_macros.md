---
title: Cum se instalează macrocomenzile
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

## Descriere

Acest tutorial scurt vă va arăta cum să instalați și să utilizați macrocomenzile FreeCAD.

Since v0.17 it is easy to add macros by using the [Addon Manager](/Std_AddonMgr "Std AddonMgr"). A regular user doesn't need to do more than use this tool. Keep reading for more information regarding installation of [macros](/Macros "Macros").

Macros are sequences of commands which are used to perform a complex drawing operation. Macros are [Python](/Python "Python") scripts, which means they are text files that can be written and edited with a text editor.

While Python scripts normally have the `.py` extension, FreeCAD macros should have the `.FCMacro` extension. A collection of macros written by experienced users is found in the [macros recipes](/Macros_recipes "Macros recipes") page.

See [Introduction to Python](/Introduction_to_Python "Introduction to Python") to learn about the Python programming language, and then [Python scripting tutorial](/Python_scripting_tutorial "Python scripting tutorial") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics") to learn about writing macros.

Here is a video on [installing FreeCAD macros in Ubuntu](https://wiki.opensourceecology.org/wiki/Installing_Macros_in_FreeCAD).

## Meniul Macro Menu și Iconițele Instrumentelor

### Toolbar

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

## Locația și destinația mcrocomanzilor

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

**1 :** click **Menu > Macro > Macros** (which has the icon ![](/images/Std_DlgMacroExecuteDirect.svg) and the tool tip "Open a dialog to let you execute a recorded macro")

![](/images/Dxf_Importer_Install_01.png)

**3 :** The address of "Macro destination" (\*\*C:\Users\your_user_name\AppData\Roaming\FreeCAD\*\* in the screen snapshot below)

- Windows: the form is usually \*\*drive:\Users\your_user_name\AppData\Roaming\FreeCAD\*\*
- Ubuntu: the form is usually **/home/your_user_name/.FreeCAD**
- Macintosh: the form is usually "/Users/your_user_name/Library/Preferences/FreeCAD"

![](/images/Dxf_Importer_Install_02.png)

**5 :** View the macro folder by:

- Windows: paste the address into your File explorer and confirm
- Macintosh: locate the folder in the Finder or paste the address into a File explorer (remember the "file:///" prefix in the File explorer for a file on disk)

![](/images/Dxf_Importer_Install_03.png)

**6 :** Access the files by:

- Windows: leave open the file explorer
- Macintosh: either leave a Finder window open, or bookmark the location in your File explorer, or set up an Alias to point to it, or drag the folder into the SideBar of the Finder so it is there to use from other programs such as text editors etc. (Note: version 0.14 of FreeCAD does not support Aliases but does support the SideBar)

![](/images/Dxf_Importer_Install_04.png)

## Installing macros

### Automatic method

Starting with FreeCAD 0.17, use the [Addon Manager](/Std_AddonMgr "Std AddonMgr") in **Tools → Addon manager** to install a macro that has been included in the [FreeCAD-macros](https://github.com/FreeCAD/FreeCAD-macros) repository.

In past versions of FreeCAD you could use two automated ways to install macros and other addons:

- [addons_installer.FCMacro](https://github.com/FreeCAD/FreeCAD-addons): itself a macro, this was the precursor to the Addon Manager, and is hosted in the [FreeCAD-addons](https://github.com/FreeCAD/FreeCAD-addons) repository. You don't need to use this tool in new installations of FreeCAD.
- [freecad-pluginloader](https://github.com/microelly2/freecad-pluginloader): also a macro, it could be used to install new components to FreeCAD. It is no longer developed.

The recommended way to install addons, that is, [external workbenches](/External_workbenches "External workbenches") and macros, is the [Addon Manager](/Std_AddonMgr "Std AddonMgr"). However, you can still add macros to your system with the manual methods described in the following sections; this is useful if you are developing and testing your own code.

## Method copy the code in one window and paste in the FreeCAD editor

For macros that are relatively small, 300 lines or less, the code can be copied and pasted directly into the FreeCAD macro editor.

We will use ![](/images/Part_Prism_Apothem.svg) [Macro Apothem Based Prism GUI](/Macro_Apothem_Based_Prism_GUI "Macro Apothem Based Prism GUI") as an example.

If there are one or more icon (s) download also position your mouse over the icon, click the right mouse button and click "Save image as ..." the icon or icons are placed in the macro directory and one of these icons serve as a shortcut icon to place on the [toolbar.](/Customize_Toolbars "Customize Toolbars")

If there is a custom icon download it; click on it with the right mouse button and select `Save image as...`; place the icon in the macros directory. This icon can be used as a shortcut for the macro in a [custom toolbar](/Customize_Toolbars "Customize Toolbars"). The default icon is ![](/images/Text-x-python.png).

![Download icon](/images/Macro_Install_HowTo_28.png)

Download icon

After copying your code we will paste the code in FreeCAD editor.

**1 :** Open FreeCAD and open the editor in FreeCAD

![](/images/Dxf_Importer_Install_01.png)

**2 :** The window macros file opens, click Create button

![The window macros file opens](/images/Macro_Install_HowTo_17.png)

The window macros file opens

**3 :** A new window opens, enter the macro name (here "**Macro_Apothem_Based_Prism_GUI**")and click the create Ok button

![enter the macro name](/images/Macro_Install_HowTo_18.png)

enter the macro name

**4 :** The editing window FreeCAD macros is now available and has the name of our future macro.

![The editing window FreeCAD macros](/images/Macro_Install_HowTo_19.png)

The editing window FreeCAD macros

**5 :** Paste your code in the macro editor window and click the little **cross** to close the window.

![close the window](/images/Macro_Install_HowTo_20.png)

close the window

**6 :** A warning window appears asking for confirmation of save code, click on Yes

Restart FreeCAD to correctly register the new macro.

![A warning window appears asking for confirmation of save code](/images/Macro_Install_HowTo_27.png)

A warning window appears asking for confirmation of save code

**7 :** Repeat the number **1 :** , Click on your new macro and button Execute

![Click on your new macro and button Execute](/images/Macro_Install_HowTo_21.png)

Click on your new macro and button Execute

**8 :** The macro runs, complete the fields with your values and click the OK button

![The macro runs, complete the fields](/images/Macro_Install_HowTo_22.png)

The macro runs, complete the fields

9 : The macro returns an error ! we do not have to open document, open a document ![](/images/Document-new.svg) and repeat the operation **7** and **8**. Some macros open a new document if it does not find one.

Create a new document with **File → ![](/images/Std_New.svg) [New](/Std_New "Std New")**, and then repeat the previous steps to execute the macro.

![The macro returns an error!](/images/Macro_Install_HowTo_23.png)

The macro returns an error!

10 : Here is your prism

![your prism](/images/Macro_Install_HowTo_24.png)

your prism

11 : You can also open your macro in the editor to run or modify, click the Edit button

![You can also open your macro in the editor](/images/Macro_Install_HowTo_25.png)

You can also open your macro in the editor

12: The macro is now in the FreeCAD editor you can run through the menu "Macro Run Macro" or by clicking on the triangle ![](/images/Std_DlgMacroExecuteDirect.svg) green in the macros toolsbar

![The macro is now in the FreeCAD editor](/images/Macro_Install_HowTo_26.png)

The macro is now in the FreeCAD editor

## Method macro in a compressed .ZIP file

Download the file compressed here (example) [Macro_screw_maker 1.7](http://forum.freecadweb.org/viewtopic.php?f=22&t=6558#p52887). (the page [Macro_screw_maker](/Macro_screw_maker1_2 "Macro screw maker1 2"))

We will use ![](/images/Text-x-python.png) [Macro screw maker](/Macro_screw_maker1_2 "Macro screw maker1 2") as an example.

1. Download the compressed code from the forum, [Screw Maker](http://forum.freecadweb.org/viewtopic.php?f=22&t=6558#p52887).

Free for Windows [7-zip](http://www.7-zip.org/) ou [L-Zarc](http://www.kanmandet.dk/?p=37) ou [quickzip](http://www.quickzip.org/quickzip51.html)

```
unzip your_file.zip -d your_directory

```

**1 :** Download your file in your local folder here the folder **Temp**

![Download your file in your local folder here the folder Temp](/images/Macro_Install_HowTo_01.png)

Download your file in your local folder here the folder Temp

**2 :** Unzip your file in the folder.

![Unzip your file in the folder.](/images/Macro_Install_HowTo_02.png)

Unzip your file in the folder.

**3 :** The decompressor finished his work and created a new folder with the unpacked file

![The decompressor finished his work and created a new folder with the unpacked file](/images/Macro_Install_HowTo_03.png)

The decompressor finished his work and created a new folder with the unpacked file

**4 :** Enter in the newly created directory, move about the file, click the right mouse button and click on **Cut**.

![Enter in the newly created directory](/images/Macro_Install_HowTo_04.png)

Enter in the newly created directory

**5 :** Return to your File explorer remained open in the macro location (here \*\*C:\Users\your_user_name\AppData\Roaming\FreeCAD\*\*) and close the File explorer.

![Return to your File explorer remained open](/images/Macro_Install_HowTo_05.png)

Return to your File explorer remained open

**6 :** Open FreeCAD click **Menu > Macro > Macros** or the click the bottom ![](/images/Std_DlgMacroExecuteDirect.svg) "Open a dialog to let you execute a macro Recorded"

![Open FreeCAD](/images/Macro_Install_HowTo_06.png)

Open FreeCAD

**7 :** The macros window open , select your macro and click the button Execute

![The macros window open](/images/Macro_Install_HowTo_07.png)

The macros window open

**8 :** Your macro is executed enter the data and click the Create button

![Your macro is executed](/images/Macro_Install_HowTo_08.png)

Your macro is executed

![Whaouu](/images/Macro_Install_HowTo_30.png)

Whaouu

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

## The indentation errors examples wrong code

Indentarea în programarea python este foarte importantă și este parte integrantă a codului, un spațiu sau o schimbare necorespunzătoare provoacă o eroare de indentare de ex,:

This section describes some errors that may be encountered when copying and pasting, and writing macro code.

**<unknown exception traceback><type 'exceptions.IndentationError'>: ('expected an indented block', ('C:/Users/d/AppData/Roaming/FreeCAD/Macro_Apothem_Based_Prism_GUI.FCMacro', 21, 3, 'def priSm(self):\n'))**

```
<unknown exception traceback><type 'exceptions.IndentationError'>: ('expected an indented block', ('C:/Users/d/AppData/Roaming/FreeCAD/Macro_Apothem_Based_Prism_GUI.FCMacro', 21, 3, 'def priSm(self):\n'))

```

**1 :** In this example, the code was stuck without any indentation and of course does not work! here definitely a programmer error when pasting the code on the page as it would have never known it to work.

If the code lacks any indentation, the code won't work. Class (`class`) and function definitions (`def()`), as well as control structures (`if`, `while`, `for`) should be followed by a block of indented code.

This error is possible if the user doesn't copy the code correctly, and all spaces are accidentally removed.

![the code was stuck without any indentation](/images/Macro_Install_HowTo_09.png)

the code was stuck without any indentation

**2 :** the code was correct indentations in the right place.

![the code was correct indentations in the right place](/images/Macro_Install_HowTo_10.png)

the code was correct indentations in the right place

**3 :** we select the code, and we see that the selection is at the edge of the code, the macro must works so good

![the macro must works so good](/images/Macro_Install_HowTo_11.png)

the macro must works so good

**4 :** Here additional space is selected (it can happen) then you need to copy the code into a word processor to remove **one space all lines**

If an additional space is introduced at the beginning of all lines, the Python interpreter will fail and complain about unnecessary indentation. In this case, all lines need the initial space removed.

![remove one space all lines](/images/Macro_Install_HowTo_12.png)

remove one space all lines

**5 :** Here the code has been copied in a forum window with the Select all button apparently the selection is good

Here the code has been copied from a forum thread by using the Select all button. Apparently the selection is good.

![Here the code has been copied in a forum](/images/Macro_Install_HowTo_14.png)

Here the code has been copied in a forum

**6 :** But the selection pasted into the FreeCAD editor gives a surprise, an indent of four spaces has been added by the system ? the code is not good

![But the selection pasted into the FreeCAD editor gives a surprise](/images/Macro_Install_HowTo_15.png)

But the selection pasted into the FreeCAD editor gives a surprise

**7 :** You must delete all the extra space that is four spaces on each line, for Windows word processing [notepad-plus-plus](http://notepad-plus-plus.org/) enables vertical selection with a combination of buttons Alt + Mouse dragging or Menu> Edit> Indent> Decrease the indentation

In Windows, [Notepad++](http://notepad-plus-plus.org/) can perform selection with Alt + Mouse dragging, and then use **Edit → Indent → Decrease the indentation**.

![You must delete all the extra space](/images/Macro_Install_HowTo_16.png)

You must delete all the extra space

**8 :** Here the selection also take the column numbers which will also give an error

Here the selection also selects the line numbers in the code example. If this selection is pasted into the macro editor, it won't work. All line numbers need to be removed, and the spaces adjusted so that the Python code has the proper indentation.

![Here the selection also take the column numbers](/images/Macro_Install_HowTo_29.png)

Here the selection also take the column numbers

**9 :** Perfect code.

![Perfect code](/images/Macro_Install_HowTo_13.png)

Perfect code

## For those who see no information is displayed.

Some macros display information on the screen in general they are displayed in the report view.

Macros may output information to the report view to detail what the code is doing when it is running.

If no information is displayed, make sure the report view and [Python](/Python "Python") console are visible, and that the output is directed tot he report view.

#### Printing information

FreeCAD macros have two methods to print information to the report view.

**1 : Commands**

```
FreeCAD.Console.PrintMessage("Hello World! \n")
FreeCAD.Console.PrintError("Hello World! \n")
FreeCAD.Console.PrintWarning("Hello World! \n")

```

or

```
print("Hello World!")

```

#### Enabling the report view

To see the information displayed in the console you should:

**1 :** Open FreeCAD

![Open FreeCAD](/images/Macro_Install_HowTo_31.png)

Open FreeCAD

![Click the View menu and Views](/images/Macro_Install_HowTo_32.png)

Click the View menu and Views

**3 :** Check **Report View** and **Python Console**

![Check Report View and Python Console](/images/Macro_Install_HowTo_33.png)

Check Report View and Python Console

**4 :** the windows are enabled and available commands like "**App.Console.PrintMessage**" is configured to the "Report View"

![Hello World!](/images/Macro_Install_HowTo_34.png)

Hello World!

#### Enabling the print() command

**2 : command "print" which is a Python command.**

**1 :** Click the **Edit menu** and then **Preferences**

![Edit menu](/images/Macro_Install_HowTo_35.png)

Edit menu

**2 :** In the new window, click **General**, and select the **Output window** tab

![General](/images/Macro_Install_HowTo_36.png)

General

**3 :** check both boxes:

![](/images/Case_a_cocher_O.png) Redirect internal Python output to Report view

![](/images/Case_a_cocher_O.png) Redirect internal Python errors to Report view

and click the OK button

![Redirect internal](/images/Macro_Install_HowTo_37.png)

Redirect internal

![the setup is complete](/images/Macro_Install_HowTo_38.png)

the setup is complete

Retrieved from "<http://wiki.freecad.org/index.php?title=How_to_install_macros/ro&oldid=1296814>"
