---
title: Assembly CreateSimulation
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                      |
| ---------------------------------------------------- |
| Assembly CreateSimulation                            |
| Menu location                                        |
| Assembly → Create Simulation                         |
| Workbenches                                          |
| [Assembly](/Assembly_Workbench "Assembly Workbench") |
| Default shortcut                                     |
| S                                                    |
| Introduced in version                                |
| 1.1                                                  |
| See also                                             |
| _None_                                               |
|                                                      |

## Description

The ![](/src/assets/images/Assembly_CreateSimulation.svg) [Assembly CreateSimulation](/Assembly_CreateSimulation "Assembly CreateSimulation") tool creates a simulation of the current assembly.

## Usage

1. Make sure that an assembly is active.
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Assembly_CreateSimulation.svg) [Create Simulation](/Assembly_CreateSimulation "Assembly CreateSimulation") button.
   - Select the **Assembly → ![](/src/assets/images/Assembly_CreateSimulation.svg) Create Simulation** option from the menu.
   - Use the keyboard shortcut: S.
3. If no Simulations object pre-exists: A Simulations container is added to the active assembly.
4. A Simulation object is added to the Simulations container.
5. The **Create Simulation** [Task panel](/Task_panel "Task panel") opens.
6. Add a Motion object:
   - Press the green plus button to open a dialog window.
   - Select one joint from the list.
   - If necessary select a Motion Type.
   - Optionally edit the Formula.
   - Press the OK button to close the dialog.
   - A new motion is added to the list.
   - Optionally repeat to create another Motion.
7. Optionally adjust the Simulation settings.
8. Press the Generate button.
9. An **Animation Player** section is added to the Task panel.
   - Use the player widgets to animate the assembly.
10. Press the OK button to finish the tool and close the Task panel.

### Task panel

When the **Create Simulation** [task panel](/Task_panel "Task panel") is opened for the first time **Motions** list is empty and the **Animation player** is hidden.

Double-click an existing Simulation object in the [Tree view](/Tree_view "Tree view") to re-open the task panel and edit the parameters.

![](/src/assets/images/Assembly_CreateSimulation-Task.png)

- **Motions**: Lists the content of the **Group** property, that is the Motion objects in the Simulations container.
  - ![](/src/assets/images/List-add.svg) button: Opens a (nameless) dialog window to add a Motion object to the **Group** property and updates the list.
  - ![](/src/assets/images/Edit-delete.svg) button: Removes a Motion object from the **Group** property and updates the list.
- **Simulation settings**: Set the properties of the Simulation object.
  - **Start**: Sets the **a Time Start** property.
  - **End**: Sets the **b Time End** property.
  - **Step**: Sets the **c Time Step Output** property.
  - **Tolerance**: Sets the **f Global Error Tolerance** property.
- Generate button: Calculates the listed motions and adds the **Animation player** section to the Task panel.
- **Animation player**: Controls the positions of the assembled items according to the current frame.

  - **Frame** slider: Sets the current frame, doesn't set any property.
  - **Frames Per Second**: Sets the **j Frames Per Second** property, that is the speed of the animation.
  - Player buttons: Control the way to change the current frame, from left to right:

    : Step backward, Play backward, Stop, Play forward, Step forward

### Motion dialog

This dialog window creates a Motion object that acts as an actuator for a single degree of freedom (DOF) of a certain joint and sets its properties.

![](/src/assets/images/Assembly_CreateSimulation-Motion.png)

The extra help text appears if the Help button is pressed.  
(Don't mind the appearance of the OK button, it is active and useable)

- **Joint**: Displays a list of all joints in the active Assembly to set the **Joint** property.
- **Motion Type**: Displays a list of available DOFs in the selected Joint to set the **Motion Type** property.

  : (For example, we can choose between `Angular`, and `Linear` for a cylindrical joint)

- **Formula**: Sets the **Formula** property.
- Help / Hide help buttons: Toggle the visibility of the help text regarding the formulas.

## Notes

- The number of frames is the difference of **Start** and **End** value divided by the **Step** value. (all entered in seconds giving a unitless integer number) For the default values it is: (1.0 s - 0.0 s) / 0.01 s = 100
- To achieve a complete revolution for an angular motion we can do either:
  - Enter `2 * pi * time` in the Formula field and set a duration (End value - Start value) of one second under Simulation settings in the Task panel.
  - Enter `1 * time` in the Formula field and set a duration (End value - Start value) of (2 \* pi =) 6.283 seconds under Simulation settings in the Task panel.

## Properties

See also: [Property editor](/Property_editor "Property editor").

### Simulations

A **Simulations** container is an `Assembly::SimulationGroup` object which is derived from an [App DocumentObjectGroup](/App_DocumentObjectGroup "App DocumentObjectGroup") object and inherits all its properties. It has no additional properties.

### Simulation

A **Simulation** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

#### Data

Base

- Data**Group** (`LinkList`): The Motion objects of the object.
- Data (hidden)**\_ Group Touched** (`Bool`):

Simulation

- Data**a Time Start** (`Time`): Default is `0.0 s`. Simulation start time.
- Data**b Time End** (`Time`): Default is `4.0 s`. Simulation end time.
- Data**c Time Step Output** (`Time`): Default is `0.01 s`. Simulation time step for output.
- Data**f Global Error Tolerance** (`Float`): Default is `1e-06`. Integration global error tolerance.
- Data**j Frames Per Second** (`Integer`): Default is `30`. Frames Per Second.

### View

Space

- View**Decimals** (`Integer`): Default is `9`. The number of decimals to use for calculated texts.

### Motion

A **Motion** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

#### Data

Motion

- Data**Formula** (`String`): The formula of the motion. For example `1.0*time`.
- Data**Joint** (`XLinkSubHidden`): The joint that is moved by the motion.
- Data**Motion Type** (`Enumeration`): The type of the motion. The options are: `Angular` and `Linear`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateSimulation/en&oldid=1559513>"
