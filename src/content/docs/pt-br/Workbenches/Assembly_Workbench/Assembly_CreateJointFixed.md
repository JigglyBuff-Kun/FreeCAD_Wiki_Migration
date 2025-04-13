---
title: Assembly CreateJointFixed/pt-br
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| Assembly CreateJointFixed |
| Menu location |
| Assembly → Create Fixed Joint |
| Workbenches |
| [Assembly](/Assembly_Workbench "Assembly Workbench") |
| Default shortcut |
| F |
| Introduced in version |
| 1.0 |
| See also |
| *None* |
|  |

## Descrição

The ![](/images/Assembly_CreateJointFixed.svg) [Assembly CreateJointFixed](/Assembly_CreateJointFixed "Assembly CreateJointFixed") tool creates a joint locking two assembly parts together, preventing any movement or rotation.

## Utilização

1. Optionally select two geometric entities of two different parts. Other selections will be rejected.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Assembly_CreateJointFixed.svg) [Create Fixed Joint](/Assembly_CreateJointFixed "Assembly CreateJointFixed") button.
   * Select the **Assembly → ![](/images/Assembly_CreateJointFixed.svg) Create Fixed Joint** option from the menu.
   * Use the keyboard shortcut: F.
3. Pre-selected parts are moved to meet at their selected entities.
4. The **Create Joint** dialog opens in the [Task panel](/Task_panel "Task panel") listing the pre-selected entities.
5. Optionally change the joint type in the dropdown list:
   * Select **Fixed**.
     1. If the selection list is empty: select two geometric entities.
     2. The parts are moved to meet at their selected entities.
     3. Optionally enter an *Offset* value.
     4. Optionally enter a *Rotation* value.
     5. Optionally press ![](/images/Button_sort.svg) to change the direction of the joint.
   * Select **Revolute**.
     1. If the selection list is empty: select two geometric entities.
     2. The parts are moved to meet at their selected entities.
     3. Optionally enter an *Offset* value.
     4. Optionally press ![](/images/Button_sort.svg) to change the direction of the joint.
     5. Optionally check the **Min angle** option and enter a value.
     6. Optionally check the **Max angle** option and enter a value.
   * Select **Cylindrical**.
     1. If the selection list is empty: select two geometric entities.
     2. Optionally press ![](/images/Button_sort.svg) to change the direction of the joint.
     3. Optionally check the **Min length** option and enter a value.
     4. Optionally check the **Max length** option and enter a value.
     5. Optionally check the **Min angle** option and enter a value.
     6. Optionally check the **Max angle** option and enter a value.
   * Select **Slider**.
     1. If the selection list is empty: select two geometric entities.
     2. Optionally enter a *Rotation* value.
     3. Optionally press ![](/images/Button_sort.svg) to change the direction of the joint.
     4. Optionally check the **Min length** option and enter a value.
     5. Optionally check the **Max length** option and enter a value.
   * Select **Ball**.
     1. If the selection list is empty: select two geometric entities.
   * Select **Distance**.
     1. If the selection list is empty: select two geometric entities.
     2. Optionally enter a *Distance* value.
     3. Optionally press ![](/images/Button_sort.svg) to change the direction of the joint.
   * Select **Parallel**.
     1. If the selection list is empty: select two geometric entities.
     2. Optionally press ![](/images/Button_sort.svg) to change the direction of the joint.
   * Select **Perpendicular**.
     1. If the selection list is empty: select two geometric entities.
   * Select **Angle**.
     1. If the selection list is empty: select two geometric entities.
     2. Optionally enter an *Angle* value.
   * Select **RackPinion**.
     1. If the selection list is empty: select two geometric entities of two different parts that have previously been used to define a Slider joint and a Revolute joint. (Slider direction and rotation axis must be perpendicular)
     2. Optionally enter a *Pitch radius* value.
   * Select **Screw**.
     1. If the selection list is empty: select two geometric entities of two different parts that have previously been used to define a Slider joint and a Revolute joint. (Slider direction and rotation axis must be parallel)
     2. Optionally enter a *Pitch radius* value.
   * Select **Gears**.
     1. If the selection list is empty: select two geometric entities of two different parts that have previously been used to define two different Revolute joints.
     2. Optionally enter a *Radius 1* value.
     3. Optionally enter a *Radius 2* value.
     4. Optionally check/uncheck the **Reverse rotation** option. (unchecking selects the **Belt** option) - not working for 1.0 RC so far
   * Select **Belt**.
     1. If the selection list is empty: select two geometric entities of two different parts that have previously been used to define two different Revolute joints.
     2. Optionally enter a *Radius 1* value.
     3. Optionally enter a *Radius 2* value.
     4. Optionally check/uncheck the **Reverse rotation** option. (checking selects the **Gears** option) - not working for 1.0 RC so far
6. The Parts are moved to meet at their selected entities.
7. Press OK to finish the tool.

## Notas

* A fixed joint can be used as an actuator to control the motion of a kinematic simulation. Mouse wheel action in the Task panel immediately rearranges the connected parts.
  + Offset translates along its local Z axis, negative offsets are accepted.
  + Rotation revolves around its local Z axis, angles > 360° and even negative angles are accepted.

## Propriedades

See also: [Property editor](/Property_editor "Property editor").

A **Fixed** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

### Data

Joint

* Dados**Activated** (`Bool`): This indicates if the joint is active.
* Dados**Distance** (`Float`): This stores the **Distance** of the Distance joint. It is also used by the RackPinion and Screw joints to store the **Pitch radius**, and by the Gear, and Belt joints to store **Radius1**.
* Dados**Distance2** (`Float`): This is the second distance of the joint. It is used only by the Gear and Belt joints to store **Radius2**.
* Dados**Joint Type** (`Ennumeration`): The type of the joint. (`Fixed`, `Revolute`, `Cylindrical`, `Slider`, `Ball`, `Distance`, `Parallel`, `Perpendicular`, `Angle`, `RackPinion`, `Screw`, `Gears`, `Belt`)

Removed properties (v.1.0.0-RC-38728) These were the properties that could be used to animate:

* Dados**Offset** (`Vector`): This is the offset vector of the joint.
* Dados**Rotation** (`Float`): This is the rotation of the joint.

Joint Connector 1

* Dados**Detach1** (`Bool`): This prevents placement1 from recomputing, enabling custom positioning of the placement.
* Dados**Offset1** (`Placement`): This is the attachment offset of the first connector of the joint. (added with v.1.0.0-RC-38728)
* Dados**Placement1** (`Placement`): This is the local coordinate system within reference1's object that will be used for the joint.
* Dados**Reference1** (`XlinkSubHidden`): The first reference of the joint.

Removed properties:

* Dados**Element1** (`String`): The selected element of the first object.
* Dados**Object1** (`String`): The first object of the joint.
* Dados**Part1** (`Link`): The first Part of the joint.
* Dados**Vertex1** (`String`): The selected Vertex of the first object.

Joint Connector 2

* Dados**Detach2** (`Bool`): This prevents placement2 from recomputing, enabling custom positioning of the placement.
* Dados**Offset2** (`Placement`): This is the attachment offset of the second connector of the joint. (added with v.1.0.0-RC-38728)
* Dados**Placement2** (`Placement`): This is the local coordinate system within reference2's object that will be used for the joint.
* Dados**Reference2** (`XlinkSubHidden`): The second reference of the joint.

Removed properties:

* Dados**Element2** (`String`): The selected element of the second object.
* Dados**Object2** (`String`): The second object of the joint.
* Dados**Part2** (`Link`): The second Part of the joint.
* Dados**Vertex2** (`String`): The selected Vertex of the second object.

Limits

* Dados**Angle Max** (`Float`): This is the maximum limit for the angle between both coordinate systems (between their X axes).
* Dados**Angle Min** (`Float`): This is the minimum limit for the angle between both coordinate systems (between their X axes).
* Dados**Enable Angle Max** (`Bool`): Enable the maximum angle limit of the joint.
* Dados**Enable Angle Min** (`Bool`): Enable the minimum angle limit of the joint.
* Dados**Enable Length Max** (`Bool`): Enable the maximum length limit of the joint.
* Dados**Enable Length Min** (`Bool`): Enable the minimum length limit of the joint.
* Dados**Length Max** (`Float`): This is the maximum limit for the distance between both coordinate systems (along their Z axis).
* Dados**Length Min** (`Float`): This is the minimum limit for the distance between both coordinate systems (along their Z axis).

Removed property:

* Dados**Enable Limits** (`Bool`): Is this joint using limits?

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointFixed/pt-br&oldid=1550158>"