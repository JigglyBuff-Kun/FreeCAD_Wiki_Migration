---
title: FEM Vincolo velocità del flusso
---

|                                                            |
| ---------------------------------------------------------- |
| Vincolo velocità del flusso                                |
| Posizione nel menu                                         |
| Modello → Vincoli dei fluidi → Vincolo velocità del flusso |
| Ambiente                                                   |
| [FEM](/FEM_Workbench/it "FEM Workbench/it")                |
| Avvio veloce                                               |
| _Nessuno_                                                  |
| Introdotto nella versione                                  |
| -                                                          |
| Vedere anche                                               |
| [Tutorial FEM](/FEM_tutorial/it "FEM tutorial/it")         |
|                                                            |

## Descrizione

Applica una velocità del flusso come condizione al contorno a un bordo in 2D o a una faccia in 3D.

![](/images/FEM_FlowVelocity_dialog.png)

The FEM flow velocity task panel

## Utilizzo

1. Cliccare su ![](/images/Fem-constraint-flow-velocity.svg) o scegliere **Modello → Vincoli dei fluidi → ![](/images/Fem-constraint-flow-velocity.svg) Vincolo velocità del flusso** dal menu.
2. Il [pannello delle azioni](/Task_panel/it "Task panel/it") visualizzerà i menu per vincolare la velocità del flusso.

   : ![](/images/FEM-constraint-flow-velocity_task-panel.png)
   : Sopra: il menu per vincolare la velocità del flusso nella scheda azioni

3. Selezionare i bordi o le facce di destinazione.
4. Cliccare su Aggiungi
5. Deselezionare "non specificato" per attivare i campi necessari per l'edizione.
6. Immettere i valori in mm/s per i componenti cartesiani principali.

## Formulas

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

It is possible to define a velocity by specifying the velocity profile as formula. In this case the solver sets the velocities at the different positions according to the profile.

To specify for example the velocity profile

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

for

y
∈
[
1
;
2
]
{\displaystyle y\in [1;2]}
![{\displaystyle y\in [1;2]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5fdf17abdf0ea2dcb14dbb559479595d59a7d6c4) (assuming that e.g. a pipe has the wall at y = 1 m and y = 2 m)

enter this to the _Formula_ field:  
 `Variable Coordinate 2; Real MATC "6*(tx-1)*(2-tx)"`

This code has the following syntax:

- the prefix _Variable_ specifies that the velocity is not a constant but a variable
- the variable to calculate the velocity is _Coordinate 2_, meaning y
- the velocity values are returned as _Real_ (floating point value)
- _MATC_ is the prefix for the Elmer solver that the following code is a formula
- _tx_ is always the name of the variable in _MATC_ formulas, no matter that _tx_ in our case is actually _y_

That _y_ will only be in the range

y
∈
[
1
;
2
]
{\displaystyle y\in [1;2]}
![{\displaystyle y\in [1;2]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5fdf17abdf0ea2dcb14dbb559479595d59a7d6c4) is set because _MATC_ only evaluates the _tx_ range where the result is positive. This behavior is a bit special but has the advantage that one does not need to specify the range manually.

It is also possible to use more than one variable. See as example the definition of rotations in the [displacement constraint](/FEM_ConstraintDisplacement#Rotations "FEM ConstraintDisplacement").

## Notes

## Note

- I componenti del vettore contrassegnati come "non specificati" verranno interpolati dal risolutore selezionato.

  : Tutti i vettore che dovrebbero essere il risultato del risolutore devono essere contrassegnati come "non specificato".

- Se la faccia o il bordo di destinazione non è allineato con il sistema di coordinate cartesiane principale, è possibile selezionare "normale al contorno".

  : Se "normale al contorno" è spuntato, il vettore normale al bordo o alla faccia selezionati è X e sarà orientato lontano dal dominio della mesh.
  : Ad esempio, se un flusso d'aria di 20 mm/s deve entrare nel dominio, dopo aver spuntato "normale al contorno" l'utente dovrà inserire -20 mm/s nel campo "velocità X".

- Per una parete con una condizione antiscivolo, il flusso sarà (0,0,0)
- Per una condizione di simmetria, il flusso sarà (0, Non specificato, Non specificato) se "normale al contorno" è selezionato.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintFlowVelocity/it&oldid=1543399>"
