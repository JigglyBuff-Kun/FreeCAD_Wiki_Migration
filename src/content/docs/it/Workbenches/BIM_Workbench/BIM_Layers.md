---
title: BIM Gestione degli strati
---

|                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------- |
| Strati BIM                                                                                                       |
| Posizione nel menu                                                                                               |
| Gestione → Strati                                                                                                |
| Ambienti                                                                                                         |
| [BIM](/BIM_Workbench/it "BIM Workbench/it")                                                                      |
| Avvio veloce                                                                                                     |
| Nessuno                                                                                                          |
| Vedere anche                                                                                                     |
| Nessuno                                                                                                          |
|                                                                                                                  |
| Questo comando fa parte del **Addon BIM**, che è possibile installare tramite il menu Strumenti → Addons Manager |
|                                                                                                                  |

## Descrizione

Il gestore dei layer ti permette di gestire i [layer](/Draft_Layer/it "Draft Layer/it"). I layer sono un tipo speciale di gruppo che controlla le proprietà visive degli oggetti posizionati al suo interno. Modificando le proprietà del layer, come la larghezza della linea, il colore della linea, il colore della forma e la trasparenza, le modifiche vengono propagate ai suoi oggetti figlio. I layer non interferiscono con nessun'altra struttura di FreeCAD come [gruppi](/Std_Group/it "Std Group/it") o [Parti di edificio](/Arch_BuildingPart/it "Arch BuildingPart/it"), quindi qualsiasi oggetto può essere allo stesso tempo parte di un layer e parte di un gruppo.

![](/images/BIM_layers_screenshot.png)

Layers manager

I layer vengono importati ed esportati da/a [IFC](/Arch_IFC/it "Arch IFC/it") e [DXF/DWG](/Draft_DXF/it "Draft DXF/it").

Il gestore dei layer consente di gestire i tuoi layer, aggiungerli e rimuoverli o modificare le loro proprietà visive. Per aggiungere oggetti a un layer, trascinali semplicemente nel layer nella vista ad albero. Per rimuoverli, trascinali dal layer e rilasciali nella radice del documento.

## NativeIFC

This tool is the exact same as the [Draft LayerManager](/Draft_LayerManager "Draft LayerManager") tool, and creates the same layer object. There is only one difference: It has support for [NativeIFC](/NativeIFC "NativeIFC") objects:

- An IFC icon will indicate if a layer is part of an IFC project or not
- An **Assign IFC** button allows to move a layer to an IFC project and with that turn it into an IFC layer

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Layers/it&oldid=1451346>"
