---
title: TechDrawː Annotazione calcolo Area
---
|  |
| --- |
| TechDraw Annotazione calcolo Area |
| Posizione nel menu |
| TechDraw → Estensioni: Attributi/Modifiche → Calcola l'area delle facce selezionate |
| Ambiente |
| [TechDraw](/TechDraw_Workbench/it "TechDraw Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.20 |
| Vedere anche |
| [TechDraw AreaDimension](/TechDraw_AreaDimension "TechDraw AreaDimension") |
|  |

## Descrizione

Lo strumento **TechDraw Annotazione calcolo Area** calcola l'area delle facce selezionate e inserisce un'annotazione dell'area.

![](/images/TechDraw_ExtensionAreaAnnotationExample.png)

A destra l'annotazione dell'area inserita

## Utilizzo

1. Selezionare uno o più facce.
2. Esistono diversi modi per richiamare lo strumento:
   * Premere il pulsante ![](/images/TechDraw_ExtensionAreaAnnotation.svg) Calcola l'area delle facce selezionate.
   * Seleziona l'opzione **TechDraw → Estensioni: Attributi/Modifiche → ![](/images/TechDraw_ExtensionAreaAnnotation.svg) Calcola l'area delle facce selezionate** dal menu.
3. Viene calcolata l'area totale delle facce e viene inserita un'annotazione dell'area.

## Limitazioni

* versione 0.21 e precedenti: lo strumento non può gestire facce con bordi curvi.
* I fori (isole) nella faccia selezionata vengono ignorati. Questo [post sul forum](https://forum.freecad.org/viewtopic.php?p=783325#p783325) mostra una soluzione alternativa. E' possibile anche utilizzare [TechDraw Quotatura Area](/TechDraw_AreaDimension/it "TechDraw AreaDimension/it") ma si deve poi impostare correttamente la proprietà Dati**References 3D** della quota creata.
* L'area calcolata non è collegata dinamicamente alla faccia. Se cambia l'area della faccia il testo non viene aggiornato.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExtensionAreaAnnotation/it&oldid=1493966>"