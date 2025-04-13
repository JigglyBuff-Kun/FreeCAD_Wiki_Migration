---
title: Arch Taglio con una linea
---

:::caution
QUESTO COMANDO È OBSOLETONon è disponibile nellaversione 1.0 e superiori. Utilizzare inveceTaglio con piano.
:::

|                                                          |
| -------------------------------------------------------- |
| Taglio con una linea                                     |
| Posizione nel menu                                       |
| Arch → Taglio con una linea                              |
| Ambiente                                                 |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")           |
| Avvio veloce                                             |
| _Nessuno_                                                |
| Introdotto nella versione                                |
| 0.19                                                     |
| Vedere anche                                             |
| [Taglio con piano](/Arch_CutPlane/it "Arch CutPlane/it") |
|                                                          |

## Descrizione

Lo strumento **Arch CutLine** taglia un oggetto Arch solido come un [Muro](/Arch_Wall/it "Arch Wall/it") o una [Struttura](/Arch_Structure/it "Arch Structure/it") con un bordo dritto. Sulla base di quel bordo e della normale al [Piano di lavoro](/Draft_SelectPlane/it "Draft SelectPlane/it") viene generato un piano di taglio.

![](/images/Arch_CutLine_example_1.png) ![](/images/Arch_CutLine_example_2.png)

Muro tagliato da una linea. A sinistra: parallelepipedo sottrattivo che appare quando si utilizza lo strumento. A destra: parete risultante dopo il taglio.

## Utilizzo

1. Se necessario allineare il piano di lavoro:
   - Il bordo selezionato potrebbe non essere parallelo alla normale del piano di lavoro.
   - Il piano di taglio generato sarà perpendicolare al piano di lavoro.
2. Selezionare l'oggetto da tagliare nella [Vista ad albero](/Tree_view/it "Tree view/it") o nella [Vista 3D](/3D_view/it "3D view/it").
3. Seleziona un bordo dritto. Questo deve essere selezionato nella [vista 3D](/index.php?title=Vista_3D/it&action=edit&redlink=1 "Vista 3D/it (page does not exist)").
4. Premi il pulsante ![](/images/Arch_CutLine.svg) Taglio con una linea.
5. Scegliere **Behind** o **Front** per indicare su quale lato della superficie di taglio il materiale deve essere rimosso.
6. Cliccare il pulsante OK.

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CutLine/it&oldid=1432910>"
