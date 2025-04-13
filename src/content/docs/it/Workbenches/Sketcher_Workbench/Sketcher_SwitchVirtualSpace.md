---
title: Sketcher Cambia spazio virtuale
---
|  |
| --- |
| Cambia spazio virtuale |
| Posizione nel menu |
| Sketch → Spazio virtuale dello Sketcher → Cambia spazio virtuale |
| Ambiente |
| [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| *Nessuno* |
|  |

## Descrizione

Sketcher ha due spazi virtuali su cui è possibile impostare i vincoli. Di solito tutti i vincoli vengono impostati su un solo spazio virtuale. È possibile spostare alcuni vincoli nello spazio virtuale due. Questo può aiutare a ispezionare solo su alcuni vincoli alla volta.

A sketch has two virtual spaces that can contain constraints. All constraints are created in the main virtual space, but they can be hidden which moves them to the other virtual space.

## Utilizzo

### (Un)hide constraints

Per spostare i vincoli sull'altro spazio virtuale:

1. Selezionare i vincoli che si vuole spostare.
2. Premere il pulsante ![](/images/Sketcher_SwitchVirtualSpace.svg) Cambia spazio virtuale.

Per cambiare lo spazio virtuale:

1. Accertarsi di non aver selezionato nessun vincolo.
2. Premere il pulsante ![](/images/Sketcher_SwitchVirtualSpace.svg) Cambia spazio virtuale.

### Switch virtual space

1. Make sure no constraints have been selected.
2. Invoke the tool as described above.
3. Hidden constraints are made visible and unhidden constraints invisible, or vice versa.

## Notes

* Constraints can also be (un)hidden from the [Sketcher Dialog](/Sketcher_Dialog#Constraints "Sketcher Dialog").
* The virtual space setting of a sketch is only used in the current session, it is not stored in the FreeCAD file.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_SwitchVirtualSpace/it&oldid=1404330>"