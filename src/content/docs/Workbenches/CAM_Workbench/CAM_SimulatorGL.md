---
title: CAM SimulatorGL
---

|                                                 |
| ----------------------------------------------- |
| CAM SimulatorGL                                 |
| Menu location                                   |
| CAM → New CAM Simulator                         |
| Workbenches                                     |
| [CAM](/CAM_Workbench "CAM Workbench")           |
| Default shortcut                                |
| P N                                             |
| Introduced in version                           |
| 1.0                                             |
| See also                                        |
| [CAM Simulator](/CAM_Simulator "CAM Simulator") |
|                                                 |

## Description

The ![](/src/assets/images/CAM_SimulatorGL.svg) [SimulatorGL](/CAM_SimulatorGL "CAM SimulatorGL") tool is a new alternative to [CAM Simulator](/CAM_Simulator "CAM Simulator"). It's based on low-level OpenGL functions. To eliminate interference with the 3D view of FreeCAD, it works in a separate window with a separate OpenGL context. It's meant to be faster and more precise than the old simulator.

![](/src/assets/images/CAM_new_simulator.PNG)

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/src/assets/images/CAM_SimulatorGL.svg) [CAM SimulatorGL](/CAM_SimulatorGL "CAM SimulatorGL") button.
   - Select the **CAM → ![](/src/assets/images/CAM_Simulator.svg) New CAM Simulator** option from the menu.
   - Use the keyboard shortcut: P then N.
2. De-select any **Operations** that are not to be simulated
3. Tune the **Accuracy** setting.
4. Select the **Job** for simulation from the drop menu.
5. Press the ![](/src/assets/images/CAM_BPlay.svg) (Activate / resume simulation) button
   - A separate window with the simulator will open.
   - Use the left-side buttons: Play, Single-Step and Fast Forward and the slider to control the animation.
   - Use the right-side buttons to: Show/hide overlay of base model, Orbit the model, Display the path and Enable/disable Ambient Occlusion.
   - Control the 3D view with the current FreeCAD mouse controls.

## Properties

- Data**Accuracy**: The accuracy of the simulation expressed as a percentage indicating the simulations deviation from the Job. For interactive simulation, reducing accuracy to 0.3 works much faster.
- Data**Job**: The Job used as the basis of the simulation
- Data**Operation List**: The list of Operations selected for inclusion in the simulation.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_SimulatorGL/en&oldid=1487187>"
