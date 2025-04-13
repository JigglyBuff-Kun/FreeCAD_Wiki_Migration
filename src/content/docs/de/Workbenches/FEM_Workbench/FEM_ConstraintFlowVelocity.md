---
title: FEM RandbedingungStrömungsgeschwindigkeit
---
|  |
| --- |
| FEM RandbedingungStrömungsgeschwindigkeit |
| Menüeintrag |
| Model → Fluid-Randbedingungen → Randbedingung Strömungsgeschwindigkeit |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [StartbedingungStrömungsgeschwindigkeit](/FEM_ConstraintInitialFlowVelocity/de "FEM ConstraintInitialFlowVelocity/de") |
|  |

| Gleichungslöser |
| --- |
| Elmer |

## Beschreibung

Ordnet einer Kante in 2D oder einer Fläche in 3D eine Strömungsgeschwindigkeit als Grenzbedingung zu.

![](/images/FEM_FlowVelocity_dialog.png)

The FEM flow velocity task panel

## Anwendung

1. There are several ways to invoke the command:
   * Press the ![](/images/FEM_ConstraintFlowVelocity.svg) [Flow velocity boundary condition](/FEM_ConstraintFlowVelocity "FEM ConstraintFlowVelocity") button.
   * Select the **Model → Fluid boundary conditions → ![](/images/FEM_ConstraintFlowVelocity.svg) Flow velocity boundary condition** option from the menu.
2. Press the Add button.
3. Select the target Edges or Faces.
4. Uncheck *unspecified* to activate the necessary fields for editing.
5. Set the velocity values or ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) specify a formula.

## Formeln

[eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

Es ist möglich eine Geschwindigkeit festzulegen, durch Angabe des Geschwindigkeitsprofils als Formel. In diesem Falle verwendet der Löser die Geschwindigkeiten an den unterschiedlichen Stellen dem Profil entsprechend.

Als Beispiel für die Festlegung des Geschwindigkeitsprofils

v

x
(
y
)
=
6

(

y
−
1
)

(

2
−
y
)
{\displaystyle \quad v\_{x}(y)=6\left(y-1\right)\left(2-y\right)}
![{\displaystyle \quad v_{x}(y)=6\left(y-1\right)\left(2-y\right)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2fe4cb7c84745bf581b03f0a56f6fa9d98b26efa)

für 

y
∈
[
1
;
2
]
{\displaystyle y\in [1;2]}
![{\displaystyle y\in [1;2]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5fdf17abdf0ea2dcb14dbb559479595d59a7d6c4) (unter Annahme, dass z.B. eine Leitung die Wand bei y = 1 m und y = 2 m hat)

gibt man dies in das Feld *Formula* ein:  
 `Variable Coordinate 2; Real MATC "6*(tx-1)*(2-tx)"`

Dieser Code hat die folgende Syntax :

* Das Präfix *Variable* legt fest, dass die Geschwindigkeit keine Konstante sondern eine Variable ist.
* Die Variable für die Berechnung der Geschwindigkeit ist *Coordinate 2*, also y.
* Die Geschwindigkeitswerte werden als *Real* (Fließkommazahl) zurückgegeben.
* Das Präfix *MATC* zeigt dem Löser Elmer an, dass der folgende Code eine Formel ist.
* *tx* ist immer der Name der Variable in *MATC*-Formeln, auch wenn in unserem Falle *tx* eigentlich *y* ist.

Dieses *y* gilt nur in dem Intervall 

y
∈
[
1
;
2
]
{\displaystyle y\in [1;2]}
![{\displaystyle y\in [1;2]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5fdf17abdf0ea2dcb14dbb559479595d59a7d6c4), da *MATC* nur das *tx*-Intervall auswertet, in dem das Ergebnis positiv ist. Dieses Verhalten ist etwas ungewöhnlich, hat aber den Vorteil, dass man das Intervall nicht von Hand festlegen muss.

Es ist auch möglich, mehr als eine Variable zu verwenden. Siehe z.B. die Festlegung von Drehungen unter [Randbedingung Versatz](/FEM_ConstraintDisplacement/de#Drehungen "FEM ConstraintDisplacement/de").

## Hinweise

* Any vector component that should be the result of the solver must be set as *Unspecified*.
* If the target face or edge is not aligned with the main Cartesian coordinate system, it is possible to set the option **Normal to boundary**.

  :   If **Normal to boundary** is checked, the normal vector to the selected edge or face is X and it will be oriented away from the mesh domain.
  :   For example, if a flow of 20 mm/s of air should enter the domain, then with **Normal to boundary** one must input -20 mm/s in the *Velocity x* field.

* For a wall with non-slip condition, set all velocity components to 0.
* For a symmetry condition, set the the flow to (0, Unspecified, Unspecified) if **Normal to boundary** is checked.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintFlowVelocity/de&oldid=1568955>"