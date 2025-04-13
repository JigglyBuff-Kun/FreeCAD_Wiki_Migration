---
title: Part Crea un composto
---
|  |
| --- |
| Part crea un composto ‏‎ |
| Posizione nel menu |
| Parte → Crea un composto |
| Ambiente |
| [Part](/Part_Workbench/it "Part Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.14 |
| Vedere anche |
| [Part Unione](/Part_Fuse/it "Part Fuse/it"), [Filtra composto](/Part_CompoundFilter/it "Part CompoundFilter/it"), [Esplodi composto](/Part_ExplodeCompound/it "Part ExplodeCompound/it") |
|  |

## Descrizione

Questo comando crea un composto di oggetti con forma topologica come oggetti solidi e altri oggetti con facce e/o bordi. Non può gestire le mesh poiché non hanno una forma topologica.

## Utilizzo

1. Contrassegnare le forme topologiche da aggiungere al composto nella [vista ad albero](/Tree_view/it "Tree view/it")
2. Scegliere la voce **Parte → Composto → Crea composto** nel menu Parte o fare clic sul pulsante ![](/images/Part_Compound.svg).

## Note

Un composto contenente pezzi che si intersecano o si toccano non è **valido** per le operazioni booleane. A causa di problemi di prestazioni, il controllo se i pezzi si intersecano non viene eseguito per impostazione predefinita. Il controllo automatico della geometria (disponibile per le operazioni booleane) è disabilitato anche per il composto di parti.

Per attivare questo controllo andare su **Strumenti → Modifica parametri → Preferences... → Mod → Part → CheckGeometry → RunBOPCheck** e impostare il parametro su `true`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Compound/it&oldid=1468260>"