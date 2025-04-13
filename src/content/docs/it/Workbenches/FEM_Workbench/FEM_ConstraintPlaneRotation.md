---
title: FEM Vincolo piano di rotazione
---

|                                                          |
| -------------------------------------------------------- |
| Vincolo piano di rotazione                               |
| Posizione nel menu                                       |
| Modello → Vincoli meccanici → Vincolo piano di rotazione |
| Ambiente                                                 |
| [FEM](/FEM_Workbench/it "FEM Workbench/it")              |
| Avvio veloce                                             |
| _Nessuno_                                                |
| Introdotto nella versione                                |
| -                                                        |
| Vedere anche                                             |
| [FEM tutorial](/FEM_tutorial/it "FEM tutorial/it")       |
|                                                          |

## Descrizione

Crea un vincolo FEM per mantenere i nodi in una superficie planare nello stesso piano.

## Utilizzo

1. Cliccare su ![](/images/FEM_ConstraintPlaneRotation.png) o scegliere Modello → **Vincoli meccanici** → ![](/images/FEM_ConstraintPlaneRotation.png) Vincolo piano di rotazione dal menu principale.
2. Selezionare nella vista 3D l'oggetto a cui deve essere applicato il vincolo, che deve essere una faccia.

![](/images/FEM_plane_rotation_constraint_example.PNG)

Example of plane multi-point constraint use. Both simply-supported beams are subjected to the same force but the bottom one has plane MPC applied to the green segment of the top face. This forces the nodes there to stay on the same plane and changes the deformation (here scaled).

## Limitazioni

1. Il vincolo piano di rotazione può essere applicato solo ad una singola faccia planare.
2. Quando un vincolo piano di rotazione viene applicato alla stessa faccia che ha un vincolo di dislocamento o fissaggio, il vincolo di dislocamento o fissaggio prevale.

## Note

1. Il vincolo utilizza la \*MPC card in CalculiX. La card è spiegata in dettaglio <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node220.html>

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintPlaneRotation/it&oldid=1541607>"
