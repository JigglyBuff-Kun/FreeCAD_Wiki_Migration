---
title: Arch Attiva/Disattiva flag Ifc Brep
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                   |
| ------------------------------------------------------------------------------------------------- |
| Attiva/Disattiva flag Ifc Brep                                                                    |
| Posizione nel menu                                                                                |
| Arch → Utilità → Attiva/Disattiva flag Ifc Brep                                                   |
| Ambiente                                                                                          |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")                                                    |
| Avvio veloce                                                                                      |
| _Nessuno_                                                                                         |
| Introdotto nella versione                                                                         |
| -                                                                                                 |
| Vedere anche                                                                                      |
| [Esplora Ifc](/Arch_IfcExplorer/it "Arch IfcExplorer/it"), [File IFC](/Arch_IFC/it "Arch IFC/it") |
|                                                                                                   |

## Descrizione

Questo strumento attiva o disattiva il contrassegno Ifc BREP di un oggetto [Arch](/Arch_Workbench/it "Arch Workbench/it") selezionato (di default è sempre disattivato). Se il contrassegno è attivo, quando esportato in IFC, l'oggetto viene esportato come un oggetto [IfcFacetedBrep](http://www.buildingsmart-tech.org/ifc/IFC4/final/html/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm), anche se è possibile un tipo di esportazione di livello superiore, come IfcExtrudedAreaSolid o IfcBooleanResult. Anche se di oggetti IfcFacetedBrep sono più pesanti e meno modificabili (perdono alcune informazioni sulla geometria, come la storia di modellazione), sono spesso meno soggetti ad errori. L'impostazione di questo contrassegno permette di risolvere alcuni casi di oggetti che non vengono esportati correttamente quando il contrassegno non è impostato.

## Utilizzo

1. Selezionare un oggetto Arch.
2. Selezionare il pulsante ![](/images/Arch_ToggleIfcBrepFlag.svg) o Arch → Utilità → ![](/images/Arch_ToggleIfcBrepFlag.svg) Attiva/Disattiva flag Ifc Brep dal menu principale.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_ToggleIfcBrepFlag/it&oldid=1438532>"
