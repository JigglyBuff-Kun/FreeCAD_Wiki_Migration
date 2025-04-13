---
title: FEM Vincolo fonte di calore del corpo
---

|                                                               |
| ------------------------------------------------------------- |
| Vincolo fonte di calore del corpo                             |
| Posizione nel menu                                            |
| Modello → Vincoli termici → Vincolo fonte di calore del corpo |
| Ambiente                                                      |
| [FEM](/FEM_Workbench/it "FEM Workbench/it")                   |
| Avvio veloce                                                  |
| _Nessuno_                                                     |
| Introdotto nella versione                                     |
| -                                                             |
| Vedere anche                                                  |
| [Tutorial FEM](/FEM_tutorial/it "FEM tutorial/it")            |
|                                                               |

## Descrizione

Definisce un calore generato internamente e ceduto in W/kg (non J/m³).
Per maggiori informazioni vedere <https://forum.freecadweb.org/viewtopic.php?f=18&t=44705&start=490#p422539> e seguenti e anche Elmer "Tutorial 1 - Heat equation – Temperature field of a solid object" in <https://www.nic.funet.fi/pub/sci/physics/elmer/doc/ElmerTutorials.pdf>.

1.0 and above: Can also define the heat source in W.

## Utilizzo

## Limitations

- 0.20 and below: The body heat source is applied to the whole model, meaning all bodies of the setup. It is not possible to select an individual body.
- 0.21 and below: This feature only works with the Elmer solver.

## Notes

- For more information see [this forum thread](https://forum.freecadweb.org/viewtopic.php?f=18&t=44705&start=490#p422539) and following posts. [This thread](https://forum.freecadweb.org/viewtopic.php?f=18&t=28926) may also be useful.
- Elmer examples can also be found in [Elmer GUI Tutorials](https://www.nic.funet.fi/pub/sci/physics/elmer/doc/ElmerTutorials.pdf).
- 1.0 and above: This feature uses the [\*DFLUX card in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node188.html).
- 1.0 and above: Since CalculiX expects body heat flux input in W/mm^3 while for Elmer it's W/kg, the conversion of the specified value (in W or W/kg) is done internally for each solver, using the volume of the selected solid and the density of the material assigned to it, if needed.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintBodyHeatSource/it&oldid=1435931>"
