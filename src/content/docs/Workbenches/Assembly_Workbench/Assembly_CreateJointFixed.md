---
title: Assembly CreateJointFixed
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                      |
| ---------------------------------------------------- |
| Assembly CreateJointFixed                            |
| Menu location                                        |
| Assembly → Create Fixed Joint                        |
| Workbenches                                          |
| [Assembly](/Assembly_Workbench "Assembly Workbench") |
| Default shortcut                                     |
| F                                                    |
| Introduced in version                                |
| 1.0                                                  |
| See also                                             |
| _None_                                               |
|                                                      |

## Description

The ![](/src/assets/images/Assembly_CreateJointFixed.svg) [Assembly CreateJointFixed](/Assembly_CreateJointFixed "Assembly CreateJointFixed") tool creates a joint locking two assembly parts together, preventing any movement or rotation.

## Usage

1. Optionally select two geometric entities of two different parts. Other selections will be rejected.
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Assembly_CreateJointFixed.svg) [Create Fixed Joint](/Assembly_CreateJointFixed "Assembly CreateJointFixed") button.
   - Select the **Assembly → ![](/src/assets/images/Assembly_CreateJointFixed.svg) Create Fixed Joint** option from the menu.
   - Use the keyboard shortcut: F.
3. Pre-selected parts are moved to meet at their selected entities.
4. The **Create Joint** dialog opens in the [Task panel](/Task_panel "Task panel") listing the pre-selected entities.
5. Optionally change the joint type in the dropdown list:
   - Select **Fixed**.
     1. If the selection list is empty: select two geometric entities.
     2. The parts are moved to meet at their selected entities.
     3. Optionally enter an _Offset_ value.
     4. Optionally enter a _Rotation_ value.
     5. Optionally press ![](/src/assets/images/Button_sort.svg) to change the direction of the joint.
   - Select **Revolute**.
     1. If the selection list is empty: select two geometric entities.
     2. The parts are moved to meet at their selected entities.
     3. Optionally enter an _Offset_ value.
     4. Optionally press ![](/src/assets/images/Button_sort.svg) to change the direction of the joint.
     5. Optionally check the **Min angle** option and enter a value.
     6. Optionally check the **Max angle** option and enter a value.
   - Select **Cylindrical**.
     1. If the selection list is empty: select two geometric entities.
     2. Optionally press ![](/src/assets/images/Button_sort.svg) to change the direction of the joint.
     3. Optionally check the **Min length** option and enter a value.
     4. Optionally check the **Max length** option and enter a value.
     5. Optionally check the **Min angle** option and enter a value.
     6. Optionally check the **Max angle** option and enter a value.
   - Select **Slider**.
     1. If the selection list is empty: select two geometric entities.
     2. Optionally enter a _Rotation_ value.
     3. Optionally press ![](/src/assets/images/Button_sort.svg) to change the direction of the joint.
     4. Optionally check the **Min length** option and enter a value.
     5. Optionally check the **Max length** option and enter a value.
   - Select **Ball**.
     1. If the selection list is empty: select two geometric entities.
   - Select **Distance**.
     1. If the selection list is empty: select two geometric entities.
     2. Optionally enter a _Distance_ value.
     3. Optionally press ![](/src/assets/images/Button_sort.svg) to change the direction of the joint.
   - Select **Parallel**.
     1. If the selection list is empty: select two geometric entities.
     2. Optionally press ![](/src/assets/images/Button_sort.svg) to change the direction of the joint.
   - Select **Perpendicular**.
     1. If the selection list is empty: select two geometric entities.
   - Select **Angle**.
     1. If the selection list is empty: select two geometric entities.
     2. Optionally enter an _Angle_ value.
   - Select **RackPinion**.
     1. If the selection list is empty: select two geometric entities of two different parts that have previously been used to define a Slider joint and a Revolute joint. (Slider direction and rotation axis must be perpendicular)
     2. Optionally enter a _Pitch radius_ value.
   - Select **Screw**.
     1. If the selection list is empty: select two geometric entities of two different parts that have previously been used to define a Slider joint and a Revolute joint. (Slider direction and rotation axis must be parallel)
     2. Optionally enter a _Pitch radius_ value.
   - Select **Gears**.
     1. If the selection list is empty: select two geometric entities of two different parts that have previously been used to define two different Revolute joints.
     2. Optionally enter a _Radius 1_ value.
     3. Optionally enter a _Radius 2_ value.
     4. Optionally check/uncheck the **Reverse rotation** option. (unchecking selects the **Belt** option) - not working for 1.0 RC so far
   - Select **Belt**.
     1. If the selection list is empty: select two geometric entities of two different parts that have previously been used to define two different Revolute joints.
     2. Optionally enter a _Radius 1_ value.
     3. Optionally enter a _Radius 2_ value.
     4. Optionally check/uncheck the **Reverse rotation** option. (checking selects the **Gears** option) - not working for 1.0 RC so far
6. The Parts are moved to meet at their selected entities.
7. Press OK to finish the tool.

## Notes

- A fixed joint can be used as an actuator to control the motion of a kinematic simulation. Mouse wheel action in the Task panel immediately rearranges the connected parts.
  - Offset translates along its local Z axis, negative offsets are accepted.
  - Rotation revolves around its local Z axis, angles > 360° and even negative angles are accepted.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **Fixed** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

### Data

Joint

- Data**Activated** (`Bool`): This indicates if the joint is active.
- Data**Distance** (`Float`): This stores the **Distance** of the Distance joint. It is also used by the RackPinion and Screw joints to store the **Pitch radius**, and by the Gear, and Belt joints to store **Radius1**.
- Data**Distance2** (`Float`): This is the second distance of the joint. It is used only by the Gear and Belt joints to store **Radius2**.
- Data**Joint Type** (`Ennumeration`): The type of the joint. (`Fixed`, `Revolute`, `Cylindrical`, `Slider`, `Ball`, `Distance`, `Parallel`, `Perpendicular`, `Angle`, `RackPinion`, `Screw`, `Gears`, `Belt`)

Removed properties (v.1.0.0-RC-38728) These were the properties that could be used to animate:

- Data**Offset** (`Vector`): This is the offset vector of the joint.
- Data**Rotation** (`Float`): This is the rotation of the joint.

Joint Connector 1

- Data**Detach1** (`Bool`): This prevents placement1 from recomputing, enabling custom positioning of the placement.
- Data**Offset1** (`Placement`): This is the attachment offset of the first connector of the joint. (added with v.1.0.0-RC-38728)
- Data**Placement1** (`Placement`): This is the local coordinate system within reference1's object that will be used for the joint.
- Data**Reference1** (`XlinkSubHidden`): The first reference of the joint.

Removed properties:

- Data**Element1** (`String`): The selected element of the first object.
- Data**Object1** (`String`): The first object of the joint.
- Data**Part1** (`Link`): The first Part of the joint.
- Data**Vertex1** (`String`): The selected Vertex of the first object.

Joint Connector 2

- Data**Detach2** (`Bool`): This prevents placement2 from recomputing, enabling custom positioning of the placement.
- Data**Offset2** (`Placement`): This is the attachment offset of the second connector of the joint. (added with v.1.0.0-RC-38728)
- Data**Placement2** (`Placement`): This is the local coordinate system within reference2's object that will be used for the joint.
- Data**Reference2** (`XlinkSubHidden`): The second reference of the joint.

Removed properties:

- Data**Element2** (`String`): The selected element of the second object.
- Data**Object2** (`String`): The second object of the joint.
- Data**Part2** (`Link`): The second Part of the joint.
- Data**Vertex2** (`String`): The selected Vertex of the second object.

Limits

- Data**Angle Max** (`Float`): This is the maximum limit for the angle between both coordinate systems (between their X axes).
- Data**Angle Min** (`Float`): This is the minimum limit for the angle between both coordinate systems (between their X axes).
- Data**Enable Angle Max** (`Bool`): Enable the maximum angle limit of the joint.
- Data**Enable Angle Min** (`Bool`): Enable the minimum angle limit of the joint.
- Data**Enable Length Max** (`Bool`): Enable the maximum length limit of the joint.
- Data**Enable Length Min** (`Bool`): Enable the minimum length limit of the joint.
- Data**Length Max** (`Float`): This is the maximum limit for the distance between both coordinate systems (along their Z axis).
- Data**Length Min** (`Float`): This is the minimum limit for the distance between both coordinate systems (along their Z axis).

Removed property:

- Data**Enable Limits** (`Bool`): Is this joint using limits?

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointFixed/en&oldid=1550157>"
