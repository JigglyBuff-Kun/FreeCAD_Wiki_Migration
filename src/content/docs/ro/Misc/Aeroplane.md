---
title: Aeroplan, poziționare și rotații
---

|                  |
| ---------------- |
| Tutorial         |
| Topic            |
| Part Workbench   |
| Level            |
| Beginner         |
| Time to complete |
| 10 minutes       |
| Authors          |
|                  |
| FreeCAD version  |
|                  |
| Example files    |
|                  |
| See also         |
| _None_           |
|                  |

## First Steps

## Primii Pași

Vom lucra în Atelierul Piese [Part Workbench](/Part_Workbench "Part Workbench") - selectați-l din meniu via View->Workbench->Part sau din selectorul de Ateliere.

- Creați un document nou vid.
- Treceți la vizualizarea axonometrică.
- Toggle axis cross ON (via View Menu).
- Asigurați-vă că aveți Combo View (via View->Views).

- Crează un cilindru făcând clic pe ![](/images/Part_Cylinder.png) [Cylinder](/Part_Cylinder "Part Cylinder") button.
- Selectați-l făcând clic pe Cilindrul din Project Viewer.
- Faceți clic pe tab-ul Data din partea de jos a ferestrei Project viewer.

Change the Height to 20mm. Leave the Radius at 2mm.

Click on [Placement](/Tasks_Placement "Tasks Placement") (note the little [+]) and a button with three dots will appear. Click on it. (You can also select: Menu->Edit->Placement.) The Tasks viewer appears.

![](/images/HTCaeroplane01.png)

If you are unfamiliar with the XYZ axes then have a play with the numbers in the Translation box. When finished playing click on the Reset button.

## Pașii Second

![](/images/HTCaeroplane02.png)

We are now going to rotate the cylinder so that it is lying along the X axis. To do this it needs to be rotated around the Y axis. The Rotation box should say 'Rotation axis with angle' so change the Axis to Y and increment the Angle until it reaches 90. Click on OK.

I like to play with rotating the view at this point (and often!) so by all means do so. You should find the 'seam' of the cylinder on the underside.

![](/images/HTCaeroplane03.png)

We are now going to add and modify a box so click on the ![](/images/Part_Box.png) [Box](/Part_Box "Part Box") button. Select it by clicking on Box in the Project viewer.
Change the Height to 1mm, the Length to 5mm and the Width to 20mm.

Click on [Placement and the three dots](/Tasks_Placement "Tasks Placement") to get the Tasks viewer. Using the Translation box enter Y: -10 and Z: -1. Click on OK

We are now going to merge these two shapes together with a Boolean Operation. Click on the ![](/images/Part_Boolean.svg) [Booleas](/Part_Boolean "Part Boolean") button and the Tasks viewer will display the Boolean Operation selector.

Make sure Union is selected, and that the Cylinder and the Box are each ticked once in the two shape lists. Click on Apply. Click on Close. You now have a single object called Fusion.

Let's add one more box to finish off our model. Create a Box, Select it and change its Height to 5mm, Length to 3mm and Width to 1mm. Change its Placement by Y: -0.5.

We now need to join our Fusion to Box001 so we'll do it the quick way. Click on Fusion in the Project viewer and CTRL-click on Box001. This selects both parts together. Now click on the ![](/images/Part_Fuse.png) [Union](/Part_Union "Part Union") button to get Fusion001.

You should now have a simple aeroplane model. Right-click on Fusion001 and Rename it 'Aeroplane'.

![](/images/HTCaeroplane04.png)

I think the wings need to be moved forward a bit but if I select Aeroplane and try changing its Placement X Translation the whole thing moves. I only want to move the wings so cancel the Placement.

Expand Aeroplane (click on the [+] beside it) and expand Fusion.

Click on Box and get its [Placement into Tasks](/Tasks_Placement "Tasks Placement"). Notice it already has Y: -10 and Z: -1 in the Translation. Change the X translation to 3 and click on Apply. That's better. Click OK.

## Rotații

Faceți clic pe Aeroplane și obțineți-l [Placement into Tasks](/Tasks_Placement "Tasks Placement") (Other explanation on [Placement](/Placement "Placement")). În schimbarea secțiunii de rotație, unde se afișează "Axa de rotație cu unghi" cu "Unghiurile Euler", pentru că sunt mult mai ușor de utilizat.

![](/images/Tache_Placement_Lacet_fr_Mini.gif)

**Yaw** is the rotation about the **Z axis**, that is to say a rotation from left to right. (The yaw angle is the **Psi ψ**).![](/images/Tache_Placement_Tangage_fr_Mini.gif)

**Pitch** is rotation about the **Y axis**, that is to say nose-up and nose-down. (The Pitch angle is the Phi φ).![](/images/Tache_Placement_Roulis_fr_Mini.gif)

**Roll** is rotation about the **X axis**, that is to say wing up and down. (The Roll angle is the Thêta θ).

However, even here there are some important things to remember:

- Positive Rotations are clockwise when viewed from the Origin outwards along a positive axis. Or to put it another way: Positive Rotations are anticlockwise when viewed from a positive axis towards the Origin.

- Although the three labels are Yaw, Pitch and Roll that's not really what they are. Yaw, Pitch and Roll are references to the _body coordinates_ of an object in 3D space. The labels should be Heading, Elevation and Bank or even Azimuth, Inclination and Bank because thay actually refer to the _space coordinates_ of the 3D system. These are the **Tait-Bryan angles**. If you want more information then try [Euler Angles](http://en.wikipedia.org/wiki/Euler_angles#Tait-Bryan_angles).

- With the Aeroplane in its present position simple rules apply. Yaw is rotation around the Z axis, ie left and right. Pitch is rotation around the Y axis, ie nose up and down. Roll is rotation around the X axis, ie wings up and down. That's fine to start with but it's not going to be true later!

Have a play with the three YPR numbers. You only need to change things by a few degrees to get the idea. Reset when you finished.

Now we're going to see why the Yaw-Pitch-Roll labels are not really suitable. Change the Roll number to 90°. Yaw should move the nose of the aeroplane up and down and Pitch should move it side to side _as viewed from outside the aeroplane_ which is where we are. Do they? No they don't! Pitch changes the yaw and Yaw changes the pitch. OK, Reset.

So, a better way of thinking about rotations is that Yaw changes your Longitude, Pitch changes your Latitude and Roll changes the direction (NSEW) that you're facing. Or you could check out [Axes conventions](http://en.wikipedia.org/wiki/Axes_conventions) for other descriptions.

Right, back to work. Change Yaw to 45° and Pitch to -30°. Click on OK to show that the operation has been completed. Now get back the [Placement Task](/Tasks_Placement "Tasks Placement") and look at the Rotation box. It has reverted to 'Rotation axis with angle' and has some wierd numbers Axis and Angle boxes. Mine had Axis: (0.219493,-0.529904,0.819161) and Angle: 53.65°. The three numbers in brackets are the XYZ components of a unit vector in the 3D space. It is the axis about which our original Aeroplane was rotated to get our final Aeroplane. The angle is how much it was rotated. Clever, huh, but not very friendly! It was Euler who showed that you could combine a series of XYZ rotations into one rotation about one axis.

Aici sunt mai mule sugestii pentru a vă juca cu Plan, poziționare și rotații:

- Change the Z Location (and Apply) then change the YPR numbers and see what the effect is. Then try changing the X and Y Locations and rotating.
- Change the X Centre (and Apply) then change the YPR numbers and see what the effect is. Then try changing the Y and Z Centres and rotating.

Sper că acest tutorial mic v-a ajutat să vă resimțiți rotațiile.

Retrieved from "<http://wiki.freecad.org/index.php?title=Aeroplane/ro&oldid=1251507>"
