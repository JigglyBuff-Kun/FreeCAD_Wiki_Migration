---
title: Tasks Platzierung
---
## Beschreibung

Command for modifying **Placement**.
These options relate only to the position and orientation of the object in space, they do not affect other attributes of the shape. The placement is stored internally as a position, and a rotation (rotation axis and angle transformed into a [quaternion](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation)). While there are several methods to specify a rotation, for instance with a rotation center, this is only used to affect the rotation computation and is not stored for later operations. Similarly, if a rotation axis of (1,1,1) is specified, it may be normalized when stored in the quaternion and appear as (0.58, 0.58, 0.58) when browsing the object later.

## Anwendung

The function **Placement** can be accessed in several ways:

* via [script](/Python_scripting_tutorial#Vecteurs_et_Positions "Python scripting tutorial") Python in the console and its [API](/Placement_API "Placement API").

:   ![Scripting Placement as y/p/r and Matrix](/images/PlacePyConv10.png)

* or, in the window **Combo View → Properties → Data → Placement → ...**,

:   ![Task_Placement](/images/Tache_Placement_fr_01.png)

* or by the menu **Edit → Placement...**.

### Platzierung in der Combo-Ansicht aktivieren

* Click a shape to select it.
* Click **Placement** (the title, not the little arrow), and a button with an ellipsis ... appears: ![Tache_Placement](/images/Tache_Placement_01_fr_00.png)
* Click on the ellipsis, and the **Placement Dialog** is displayed:

:   ![](/images/Tache_Placement_en_02.png)

### Optionen

Translation

* TASKS **X** [![Translation in X direction (Click to enlarge)](/images/Tache_Placement_Translation_X_fr.gif)](/File:Tache_Placement_Translation_X_fr.gif  "Translation in X direction (Click to enlarge)") Moves the coordinate system of the object in the **X** direction in relation to the axis coordinates of origin 0, 0, 0.
* TASKS **Y** [![Translation in the Y direction (Click to enlarge)](/images/Tache_Placement_Translation_Y_fr.gif)](/File:Tache_Placement_Translation_Y_fr.gif  "Translation in the Y direction (Click to enlarge)") Moves the coordinate system of the object in the **Y** direction in relation to the axis coordinates of origin 0, 0, 0.
* TASKS **Z** [![Translation in the Z direction (Click to enlarge)](/images/Tache_Placement_Translation_Z_fr.gif)](/File:Tache_Placement_Translation_Z_fr.gif  "Translation in the Z direction (Click to enlarge)") Moves the coordinate system of the object in the **Z** direction in relation to the axis coordinates of origin 0, 0, 0.

Center

* TASKS **X**: Move the center of rotation in the direction **X**, from the coordinates of the selected object. (default: 0,0,0).
* TASKS **Y**: Move the center of rotation in the direction **Y**, from the coordinates of the selected object. (default: 0,0,0).
* TASKS **Z**: Move the center of rotation in the direction **Z**, from the coordinates of the selected object. (default: 0,0,0).
* TASKS **User Defined...**: Allows you to change the three axes (**X, Y, Z**) in a single operation ![User Defined](/images/Part_Revolve_fr_06.png).

Rotation

Die **Rotationsparameter** können auf zwei Weisen angepasst werden.

* First option. Select  **Rotation axis with angle** ![Tache_Placement Option rotation axis and angle](/images/Tache_Placement_fr_05.png) (Default).
  + TASKS **Axis: X**: The rotation will be on the **X** axis.
  + TASKS **Axis: Y**: The rotation will be on the **Y** axis.
  + TASKS **Axis: Z**: The rotation will be on the **Z** axis. (Default axis).
  + TASKS **Angle:** Angle of rotation in degrees from **-360.00 °** to **360.00 °**. (Default: **0.00°**).

* Second option. Select **Euler Angles** ![Tache_Placement Option Euler angles](/images/Tache_Placement_fr_04.png).

This option may be easier to work with, however, even in this mode, there are important things to remember: Positive rotations are in the **clockwise** direction, looking **out** from the origin along a positive axis. Or to put it differently, the rotations are positive in the **counterclockwise** direction, looking **in** to the origin along a positive axis.

:   * **[Yaw](https://en.wikipedia.org/wiki/Flight_dynamics_(fixed-wing_aircraft))** : is a horizontal rotation of a body about a vertical axis.
    * **[Pitch](https://en.wikipedia.org/wiki/Flight_dynamics_(fixed-wing_aircraft))** : is defined as an oscillating movement of a vessel fore and aft.
    * **[Roll](https://en.wikipedia.org/wiki/Flight_dynamics_(fixed-wing_aircraft))** : is a rotary movement of a body about its longitudinal axis (roll axis).

Yaw, pitch and roll refer to the **attitude** of an object in 3D space. These terms are commonly used in aviation. The angles are the **Tait-Bryan angles**. If you want more information, read [Euler angles](https://en.wikipedia.org/wiki/Euler_angles).

![Option Euler angles](/images/Tache_Placement_en_03.png)

![Yaw](/images/Tache_Placement_Lacet_fr_Mini.gif)

* TASKS **yaw axis** **Yaw is the rotation about the Z axis**, that is to say a rotation from left to right. (The Yaw angle is the **Psi ψ**). Value **-180.00 °** to **180.00 °** (Default, **0.00 °**).

![Pitch](/images/Tache_Placement_Tangage_fr_Mini.gif)

* TASKS **pitch axis** **Pitch is rotation about the Y axis**, that is to say nose-up and nose-down. (The Pitch angle is the **Phi φ**). Value **-90.00 °** to **90.00 °** (Default, **0.00 °**).

![Roll](/images/Tache_Placement_Roulis_fr_Mini.gif)

* TASKS **roll axis** **Roll is rotation about the X axis**, that is to say wing up and down. (The Roll angle is the **Thêta θ**). Value **-180.00 °** to **180.00 °** (Default, **0.00 °**).

* TASKS **Apply incremental changes** to the placement of the object: Once selected, this option **virtually** sets all parameters to zero, to allow you to enter your values ​​without having to calculate with the original parameters of the form. Once you have confirmed with OK, the entered values ​​will be added to the values ​​on the form.

* Die Taste Reset setzt alle Werte auf **0,0,0**.

## Verknüpfungen und Beispiel

Ein praktisches Beispiel, wie dieser Befehl verwendet wird, findet sich im Tutorial [Flugzeug](/Aeroplane/de "Aeroplane/de").

Eine weitere Erklärung zu [Positionierung](/Placement/de "Placement/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=Tasks_Placement/de&oldid=1551622>"