---
title: Operațiunea de Plasare
---
## Descriere

Comanda pentru a modifica **Placement**.
Aceste opțiuni afectează numai poziția și orientarea obiectului în spațiu, ele nu afectează celelalte atribute ale formei. Plasarea este stocată intern sub formă de poziție și rotație (axa de rotație și unghiul transformat în quaternion.[[1]](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation)). Deși există mai multe metode de specificare a unei rotații, de exemplu cu un centru de rotație, aceasta este utilizată doar pentru a calcula rotația și nu este stocată pentru operații ulterioare. Similar, dacă se specifică o axă de rotație de (1,1,1), aceasta poate fi normalizată atunci când este stocată în quaternion și apare ca (0.58, 0.58, 0.58) atunci când se navighează peste obiect mai târziu.

## Folosire

Funcția **Placement** poate fi accesată în mai multe feluri:

* via [script](/Python_scripting_tutorial#Vecteurs_et_Positions "Python scripting tutorial") Python in the console and its [API](/Placement_API "Placement API").

![Scripting Placement as y/p/r and Matrix](/images/PlacePyConv10.png)

* sau, îm fereastra **Combo View → Properties → Data → Placement → ...**,

![Task_Placement](/images/Tache_Placement_fr_01.png)

* sau prin meniul **Edit → Placement...**.

### Activarea Placement în fereastra de afișare

* Click pe o formă pentru a o selecta.
* Click pe **Placement** (titlul, nu mica săgeată) și un buton cu trei puncte apare: ![Tache_Placement](/images/Tache_Placement_01_fr_00.png)
* click pe acest buton, și este afișat **Placement Dialog** :

![](/images/Tache_Placement_en_02.png)

### Options

Translation

### Opțiuni

Translation:

* TASKS  **X** [![Translation in X direction (Click to enlarge)](/images/Tache_Placement_Translation_X_fr.gif)](/File:Tache_Placement_Translation_X_fr.gif  "Translation in X direction (Click to enlarge)") Moves the coordinate system of the object in the **X** direction in relation to the axis coordinates of origin 0, 0, 0.
* TASKS  **Y** [![Translation in the Y direction (Click to enlarge)](/images/Tache_Placement_Translation_Y_fr.gif)](/File:Tache_Placement_Translation_Y_fr.gif  "Translation in the Y direction (Click to enlarge)") Moves the coordinate system of the object in the **Y** direction in relation to the axis coordinates of origin 0, 0, 0.
* TASKS  **Z** [![Translation in the Z direction (Click to enlarge)](/images/Tache_Placement_Translation_Z_fr.gif)](/File:Tache_Placement_Translation_Z_fr.gif  "Translation in the Z direction (Click to enlarge)")Mută sistemul de coordonate al obiectului în direcția **Z** față de axele de origine 0, 0, 0.

Center

Center

* TASKS  **X**: Move the center of rotation in the direction **X**, from the coordinates of the selected object. (default: 0,0,0).
* TASKS  **Y**: Move the center of rotation in the direction **Y** from the coordinates of the selected object. (default: 0,0,0).
* TASKS  **Z**: Move the center of rotation in the direction **Z**, from the coordinates of the selected object. (default: 0,0,0).
* TASKS  **User Defined ...** : Allows you to change the three axes ( **X, Y, Z**) in a single operation ![User Defined](/images/Part_Revolve_fr_06.png).

Rotation

Rotation
Pentru a regla **rotation parameters** , avem două metode disponibile.

* Prima oțiune. Selectați  **Rotation axis with angle** ![Tache_Placement Option rotation axis and angle](/images/Tache_Placement_fr_05.png) (Implicit).
  + TASKS  **Axis: X**: Rotație va fi pe axa **X**.
  + TASKS  **Axis: Y**: Rotația va fi pe axa **Y**.
  + TASKS  **Axis: Z**: Rotația va fi pe axa **Z**. (Axa implicită).
  + TASKS  **Angle:** Unghiul de rotație în grade de la **-360.00 °** la **360.00 °**. (Implicit: **0.00°**).

* A doua opțiune. Selectați **Euler Angles** ![Tache_Placement Option Euler angles](/images/Tache_Placement_fr_04.png).

Această opțiune poate fi mai ușor de utilizat, cu toate acestea, chiar și în acest mod, există lucruri importante de reținut:
Rotațiile pozitive sunt în sensul **clockwise** , privind **din** origine de-a lungul axei pozitive. Sau pentru al pune în alt mod, rotațiile sunt pozitive în sensul **counterclockwise**, privind **spre** origine de-a lungul unei axe pozitive.

:   * **[Yaw](http://en.wikipedia.org/wiki/Flight_dynamics_%28fixed_wing_aircraft%29)** : este o mișcare de rotație orizontală a corpului în jurul axei Verticale. (Simbolul **ψ** este adesea utilizat pentru girație.)
    * **[Pitch](http://en.wikipedia.org/wiki/Flight_dynamics_%28fixed_wing_aircraft%29)** : este definit ca fiind o mișcare oscilatorie a navei înainte și înapoi.
    * **[Roll](http://en.wikipedia.org/wiki/Flight_dynamics_%28fixed_wing_aircraft%29)** : este o mișcare de rotație a unui corp în jurul axei sale longitudinale (axa de ruliu).

Girația, tangajul și ruliu se referă la atitudinea unui obiect într-un spațiu 3D. Acești termeni sunt frecvent utilizați în aviație.
The angles are the **Tait-Bryan angles.** If you want more information, try [Euler angles](http://en.wikipedia.org/wiki/Euler_angles).

![Option Euler angles](/images/Tache_Placement_en_03.png)

Option Euler angles

![Yaw](/images/Tache_Placement_Lacet_fr_Mini.gif)

* TASKS  **yaw axis** **Girația este rotația față de axa Z** , adică o rație de la stanga la dreapta. (Unghiul de girație este **Psi ψ**). Valoarea fiind cuprinsă între **-360.00 °** și **360, 00 °** (Valorea Implicită este , **0.00 °**).

![Pitch](/images/Tache_Placement_Tangage_fr_Mini.gif)

* TASKS  **pitch axis** **Tangajul este rotația față de axa Y** , adică botul sus și botul jos. (Unghiul de tangaj este simbolizat prin **Phi φ**). Valoarea este cuprinsă între **-360.00 °** și **360, 00 °** (Valoarea Implicită este, **0.00 °**).

![Roll](/images/Tache_Placement_Roulis_fr_Mini.gif)

* TASKS  **roll axis** **Ruliu este rotația în jurul axei X**, ca și cum aripile oscilează când sus când jos. (Unghiul de ruliu este simbolizat prin **Thêta θ**). Valoarea este cuprinsă între**-360.00 °** și **360, 00 °** (Valoarea implicită este, **0.00 °**).

* TASKS  **Apply incremental changes to the placement of the object**: Odată selectată, această opțiune **virtually** setează toți parametrii la zero, pentru a vă permite să introduceți valorile fără a fi nevoie să calculați parametrii formularului. După ce confirmați cu  OK, valorile introduse vor fi adăugate la valorile din formular.

* Apăsarea tastei  Reset aduce toate valorile la **0,0,0**.

## Legături și Exemple

Un exemplu practic de utilizare a acestei comenzi în tutorial  [Aeroplane](/Aeroplane "Aeroplane").

Altă explicație este pe [Placement](/Placement "Placement")

Retrieved from "<http://wiki.freecad.org/index.php?title=Tasks_Placement/ro&oldid=1296256>"