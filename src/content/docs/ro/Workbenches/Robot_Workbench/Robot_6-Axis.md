---
title: Robot 6-Axe
---
|  |
| --- |
| Tutorial |
| Topic |
| Robot Workbench |
| Level |
| Intermediate |
| Time to complete |
| Unknown |
| Authors |
|  |
| FreeCAD version |
|  |
| Example files |
|  |
| See also |
| *None* |
|  |

## Overview

Acest articol este despre aducerea unui robot standard cu 6 axe în FreeCAD pentru simulare

Descrierea urmează [Denavit-Hartenberg Parameter](http://en.wikipedia.org/wiki/Denavit-Hartenberg_Parameters) sistemul este de asemenea descris de către John J. Craigs în cartea "Introduction to Robotics".

## Examplul Kuka

**The Kuka KR-16**

|  |  |  |
| --- | --- | --- |
|  |  |  |

### Kinematic

**3D applications**

| Segment | Parameter | Description |
| --- | --- | --- |
|  |  | Base konfiguration |
|  | θ  1 =  q  1 {\displaystyle \theta \_{1}=q\_{1}} {\displaystyle \theta _{1}=q_{1}}  d  1 = 675 m m {\displaystyle d\_{1}=675mm} {\displaystyle d_{1}=675mm}  a  1 = 260 m m {\displaystyle a\_{1}=260mm} {\displaystyle a_{1}=260mm}  α  1 = − 90 {\displaystyle \alpha \_{1}=-90} {\displaystyle \alpha _{1}=-90}° | Segment 1 |
|  | θ  2 =  q  2 − 90 {\displaystyle \theta \_{2}=q\_{2}-90} {\displaystyle \theta _{2}=q_{2}-90}°  d  2 = 0 m m {\displaystyle d\_{2}=0mm} {\displaystyle d_{2}=0mm}  a  2 = 680 m m {\displaystyle a\_{2}=680mm} {\displaystyle a_{2}=680mm}  α  2 = 0 {\displaystyle \alpha \_{2}=0} {\displaystyle \alpha _{2}=0}° | Segment 2 |
|  | θ  3 =  q  3 {\displaystyle \theta \_{3}=q\_{3}} {\displaystyle \theta _{3}=q_{3}}  d  3 = 0 m m {\displaystyle d\_{3}=0mm} {\displaystyle d_{3}=0mm}  a  3 = 0 m m {\displaystyle a\_{3}=0mm} {\displaystyle a_{3}=0mm}  α  3 = 90 {\displaystyle \alpha \_{3}=90} {\displaystyle \alpha _{3}=90}° | Segment 3 |
|  | θ  4 =  q  4 {\displaystyle \theta \_{4}=q\_{4}} {\displaystyle \theta _{4}=q_{4}}  d  4 = − 670 m m {\displaystyle d\_{4}=-670mm} {\displaystyle d_{4}=-670mm}  a  4 = 0 m m {\displaystyle a\_{4}=0mm} {\displaystyle a_{4}=0mm}  α  4 = − 90 {\displaystyle \alpha \_{4}=-90} {\displaystyle \alpha _{4}=-90}° | Segment 4 |
|  | θ  5 =  q  5 {\displaystyle \theta \_{5}=q\_{5}} {\displaystyle \theta _{5}=q_{5}}  d  5 = 0 m m {\displaystyle d\_{5}=0mm} {\displaystyle d_{5}=0mm}  a  5 = 0 m m {\displaystyle a\_{5}=0mm} {\displaystyle a_{5}=0mm}  α  5 = 90 {\displaystyle \alpha \_{5}=90} {\displaystyle \alpha _{5}=90}° | Segment 5 |
|  | θ  6 =  q  6 {\displaystyle \theta \_{6}=q\_{6}} {\displaystyle \theta _{6}=q_{6}}  d  6 = 0 m m {\displaystyle d\_{6}=0mm} {\displaystyle d_{6}=0mm}  a  6 = − 158 m m {\displaystyle a\_{6}=-158mm} {\displaystyle a_{6}=-158mm}  α  6 = 180 {\displaystyle \alpha \_{6}=180} {\displaystyle \alpha _{6}=180}° | Segment 6 |

This leads to following table:

**Kinematik table**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } |
| --- | --- | --- | --- | --- |
| 1 | q1 | 675 mm | 260 mm | -90° |
| 2 | q2 - 90° | 0 mm | 680 mm | 0° |
| 3 | q3 | 0 mm | 0 mm | 90° |
| 4 | q4 | -670 mm | 0 mm | -90° |
| 5 | q5 | 0 mm | 0 mm | 90° |
| 6 | q6 | -158 mm | 0 mm | 180° |

Since the Kuka robots do not have all axis to 0 in the drawn L-Position, we have to change
axis 2 & 3 by 90°.

**Kinematik table**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } |
| --- | --- | --- | --- | --- |
| 1 | q1 | 675 mm | 260 mm | -90° |
| 2 | q2 | 0 mm | 680 mm | 0° |
| 3 | q3 - 90° | 0 mm | 0 mm | 90° |
| 4 | q4 | -670 mm | 0 mm | -90° |
| 5 | q5 | 0 mm | 0 mm | 90° |
| 6 | q6 | -158 mm | 0 mm | 180° |

In the data sheet we find additional information about the axis:

![](/images/KukaAxisData.jpg)

That leads to this complete table:

**Kinematik table**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } | θ  m i n {\displaystyle \theta \_{min}} {\displaystyle \theta _{min}} | θ  m a x {\displaystyle \theta \_{max}} {\displaystyle \theta _{max}} | Axis Speed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 675 | 260 | -90 | -185 | 185 | 156 |
| 2 | 0 | 0 | 680 | 0 | -155 | 35 | 156 |
| 3 | - 90 | 0 | 0 | 90 | -130 | 154 | 156 |
| 4 | 0 | -670 | 0 | -90 | -350 | 350 | 330 |
| 5 | 0 | 0 | 0 | 90 | -130 | 130 | 330 |
| 6 | 0 | -158 | 0 | 180 | -350 | 350 | 615 |

### Visual representation

FreeCAD poate genera o vizualizare exagerată din tabelul cinematic. Dar dacă doriți mai aproape de realitate, puteți folosi un fișier VRML cu forma robotului pentru simulare.
De exemplu. [Kuka](http://kuka.com) furnizează pentru fișierele sale VRML.
Fișierul VRML se încarcă în timpul creării robotului specific în FreeCAD. Pentru ca FreeCAD să poată muta axa trebuie să editați fișierul VRML și să inserați noduri de transformare speciale pe care FreeCAD le poate găsi și manipula.

Again shown by the example Kuka KR 16.
Beginning from line 1:

```
#VRML V2.0 utf8
#
# This VRML97 file was exported using eM-Workplace
# (c) Tecnomatix Technologies GmbH & Co. KG
#     Heisenberg-Bogen 1
#     D-85609 Aschheim-Dornach
#     GERMANY
#
#Background
#{
#   skyColor   [0.752941 0.752941 0.752941]
#}
Transform
{
   #rotation 1 0 0 -1.5707963
   #scale .001 .001 .001
   children
   [
           DEF AOBJ_0001_000_TRAFO Transform
           {
              children
              [
...

```

Vedeți că acest fișier este exportat cu un software de simulare robot numit Tecnomatix. Eliminați această notificare și introduceți o adresă URL de unde primiți acest fișier, deoarece Tecnomatix nu are drepturi de autor asupra conținutului fișierului. Este doar un convertor! Mai întâi eliminăm nodul  *'Background'* .Then remove the **rotation** and **scale** node to get the model to mm and upright Z.

Right at the end:

```
  ] }
  ] }
  ] }
  ]
}
#ROUTE SENS_04_OBJ.rotation_changed TO AXIS_04_OBJ.rotation
#ROUTE SENS_27_OBJ.rotation_changed TO AXIS_27_OBJ.rotation
#ROUTE SENS_32_OBJ.rotation_changed TO AXIS_32_OBJ.rotation
#ROUTE SENS_44_OBJ.rotation_changed TO AXIS_44_OBJ.rotation
#ROUTE SENS_46_OBJ.rotation_changed TO AXIS_46_OBJ.rotation
#ROUTE SENS_49_OBJ.rotation_changed TO AXIS_49_OBJ.rotation
#DEF AnySIMTimer TimeSensor
#{
#   cycleInterval 1.000000
#   loop          TRUE
#}

```

Comentează  **TimeSensor** și cele 6 rute. Aceste 6 linii vă oferă un indiciu în care axa reală a robotului este! Prima căutare pentru "AXIS\_04\_OBJ" care te aduce în acel loc:

```
...
    Transform { rotation 1 0 0 1.570796 children [
        DEF SENS_04_OBJ-0001 CylinderSensor
        {
           diskAngle 1.570796
           minAngle  -3.228859
           maxAngle  3.228859
           offset    0.000000
        }
      DEF FREECAD_AXIS1 Transform { rotation 0 1 0 0 children [
      DEF AXIS_04_OBJ-0001 Transform
     {
        children
        [
        Transform { rotation 1 0 0 -1.570796 children [
           DEF AOBJ_0001_003_TRAFO Transform
           {
              rotation 1.000000 0.000000 0.000000 3.141593
              translation -600.000000 500.000000 300.000000
              children
              [
...

```

Trebuie să introduceți exact deasupra definiției acestui nod linia **"DEF FREECAD\_AXIS1 Transform { rotation 0 1 0 0 children ["** care este ancora pentru FreeCAD pentru a muta axa.

Now do the same for **FREECAD\_AXIS2**,**FREECAD\_AXIS3**,**FREECAD\_AXIS4**,**FREECAD\_AXIS5** and **FREECAD\_AXIS6**.
Don't forget the closing brackets at the end of the file and you're done!

You can load the VRML by instantiating the robot:

```
App.activeDocument().addObject("Robot::RobotObject","Robot")
App.activeDocument().Robot.RobotVrmlFile = "C:/_Projekte/FreeCAD0.9_build/mod/Robot/Lib/Kuka/kr16.wrl"

```

which should give you that result:
![](/images/KukaKR16FreeCAD.jpg)

### KR 210

[Data sheet](http://free-cad.svn.sourceforge.net/viewvc/free-cad/trunk/src/Mod/Robot/Lib/Kuka/kr_210_2.pdf)

**Kinematik table**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } | θ  m i n {\displaystyle \theta \_{min}} {\displaystyle \theta _{min}} | θ  m a x {\displaystyle \theta \_{max}} {\displaystyle \theta _{max}} | Axis Speed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 750 | 350 | -90 | -185 | 185 | 156 |
| 2 | 0 | 0 | 1250 | 0 | -155 | 35 | 156 |
| 3 | - 90 | 0 | 0 | 90 | -130 | 154 | 156 |
| 4 | 0 | -1100 | 0 | -90 | -350 | 350 | 330 |
| 5 | 0 | 0 | 0 | 90 | -130 | 130 | 330 |
| 6 | 0 | -230 | 0 | 180 | -350 | 350 | 615 |

### KR 500

[Data sheet](http://free-cad.svn.sourceforge.net/viewvc/free-cad/trunk/src/Mod/Robot/Lib/Kuka/kr_500_2.pdf)

**Kinematik table**

| i {\displaystyle i} {\displaystyle i} | θ {\displaystyle \theta } {\displaystyle \theta } | d {\displaystyle d} {\displaystyle d} | a {\displaystyle a} {\displaystyle a} | α {\displaystyle \alpha } {\displaystyle \alpha } | θ  m i n {\displaystyle \theta \_{min}} {\displaystyle \theta _{min}} | θ  m a x {\displaystyle \theta \_{max}} {\displaystyle \theta _{max}} | Axis Speed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 1045 | 500 | -90 | -185 | 185 | 156 |
| 2 | 0 | 0 | 1300 | 0 | -155 | 35 | 156 |
| 3 | - 90 | 0 | 0 | 90 | -130 | 154 | 156 |
| 4 | 0 | -1025 | 0 | -90 | -350 | 350 | 330 |
| 5 | 0 | 0 | 0 | 90 | -130 | 130 | 330 |
| 6 | 0 | -250 | 0 | 180 | -350 | 350 | 615 |

### Links

* [Springer Handbook of Robotics, section Kinematics, p 9-33](https://link.springer.com/referenceworkentry/10.1007%2F978-3-540-30301-5_2).
* [Denavit-Hartenberg Parameter 3D Video Tutorial](https://www.youtube.com/watch?v=qZB3_gKBwf8) Denavit-Hartenberg Parameter 3D Video Tutorial for a KUKA industry robot on YouTube (german).
* [Denavit-Hartenberg Reference Frame Layout](https://www.youtube.com/watch?v=rA9tm0gTln8) Denavit-Hartenberg Reference Frame Layout on YouTube.
* [RoboAnalyzer](http://www.roboanalyzer.com/) RoboAnalyzer is a 3D model based software that can be used to teach and learn the Robotics concepts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_6-Axis/ro&oldid=1251460>"