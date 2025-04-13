---
title: Customize Toolbars/hr
---
|  |
| --- |
| Tutorial |
| Topic |
| SampleTopic |
| Level |
| Beginner |
| Time to complete |
| 5 minutes |
| Authors |
| [Mario52](/User:Mario52 "User:Mario52") |
| FreeCAD version |
| All |
| Example files |
| *None* |
| See also |
| *None* |
|  |

## Synopsis

This tutorial shows how to add a button for a [macro](/Macro "Macro") to a custom toolbar.

For more general information see [Interface Customization](/Interface_Customization "Interface Customization").

## Usage

**1.** Find the Customize Menu

* Click **Main Menu → Tools → Customize**,

![Customize](/images/CustomizeToolBar_01.png)

Customize

* or right click on any toolbar.

![Right mouse click](/images/CustomizeToolBar_02.png)

Right mouse click

* The Customize window appears.

![The Customize window appears](/images/CustomizeToolBar_03.png)

The Customize window appears

**2.** Make a Macro to a Macro-Tool

* Select the "Macro" tab.

* To add an icon for the provided macro click the Pixmap button (labelled ... ).

![Select a toolbar](/images/CustomizeToolBar_04.png)

Select a toolbar

* Search for an appropriate icon from amongst FreeCAD's existing icons,

[or add your own icon by clicking Add icons...].                  (expand for an example)

![Add icon](/images/CustomizeToolBar_05.png)

Add icon

     [You will get a file selection window, select your custom image file (PNG format, 64x64 pixels)]

![Get a file](/images/CustomizeToolBar_06.png)

Get a file

* Select your icon and click OK.

![Select your icon](/images/CustomizeToolBar_07.png)

Select your icon

* The icon you selected is now displayed next to the Pixmap button labelled ....

![Your icon is displayed](/images/CustomizeToolBar_08.png)

Your icon is displayed

* Select the provided macro in line **Macro:' *and specify a*** *Menu text**: (which will appear as the text label in the menu); also fill in the** Tool Tip':* (which is the text that will appear when a mouse is over the button on the toolbar); further lines are optional.

* Click the button Add.

![Click the button](/images/CustomizeToolBar_09.png)

Click the button

* The button of the macro-tool is now created.

![Your button is created](/images/CustomizeToolBar_10.png)

Your button is created

**3.** Create a toolbar outside the workbench **Macro** which contains the created **Macro-tool**

* Select the **Toolbars** tab and choose the workbench (for which the toolbar is provided) in the drop down on the right (**Part** in this example).

     [Since version 0.15 there is a  ![](/images/Freecad.svg) Global  toolbar. If this is selected, the provided toolbar will be in each workbench.]

![Toolbars tab](/images/CustomizeToolBar_11.png)

Toolbars tab

* In the dropdown on the left select **Macros**.

![Macros](/images/CustomizeToolBar_12.png)

Macros

* The macro-tool with its icon appears in the list.

![Your icon is listed](/images/CustomizeToolBar_13.png)

Your icon is listed

* Click the button New...

![Click on "New"](/images/CustomizeToolBar_14.png)

Click on "New"

* In the window "New Toolbar" enter the name of the provided extra toolbar for the **Part** Workbench and click OK

![Enter the name for your toolbar](/images/CustomizeToolBar_15.png)

Enter the name for your toolbar

* The toolbar is now created.

* To add the created macro-tool to this toolbar, select it in the left window and then click the Button with the arrow pointing right.

![Select your macro](/images/CustomizeToolBar_16.png)

Select your macro

* You have created now a toolbar called "Camera" (with the Macro-tool **Camera** in it)

* Click the Close button.

![Close](/images/CustomizeToolBar_17.png)

Close

* Your new toolbar is now contained in the toolbars' right-click menu. Its Icons (in our example only the camera) are visible, if the toolbar is activated (blue checkmark).

![New Toolbar](/images/CustomizeToolBar_18.png)

New Toolbar

Retrieved from "<http://wiki.freecad.org/index.php?title=Customize_Toolbars/hr&oldid=1467305>"