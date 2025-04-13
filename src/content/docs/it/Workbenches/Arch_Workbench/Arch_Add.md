---
title: Arch Aggiungi componente
---

:::caution
QUESTO COMANDO FA PARTE DELL'AMBIENTE BIMINTEGRATO NELLA V1.0Questa pagina è stata aggiornata per quella versione.
:::

|                                             |
| ------------------------------------------- |
| Aggiungi                                    |
| Posizione nel menu                          |
| Modifica → Aggiungi componente              |
| Ambiente                                    |
| [BIM](/BIM_Workbench/it "BIM Workbench/it") |
| Avvio veloce                                |
| _Nessuno_                                   |
| Introdotto nella versione                   |
| -                                           |
| Vedere anche                                |
| [Rimuovi](/Arch_Remove/it "Arch Remove/it") |
|                                             |

## Descrizione

Lo strumento Aggiungi permette di eseguire 4 diversi tipi di operazioni:

- Aggiungere a un componente di Architettura degli oggetti basati su [forme](/Part_Workbench/it "Part Workbench/it"), ad esempio un ![](/images/Arch_Wall.svg) [muro](/Arch_Wall/it "Arch Wall/it") o una ![](/images/Arch_Structure.svg) [struttura](/Arch_Structure/it "Arch Structure/it"). Questi oggetti vengono inseriti nell'elemento Architettura, ed è possibile modificare la loro forma, ma mantenendo le loro caratteristiche di base come la larghezza e l'altezza.
- Aggiungere componenti di Architettura, quali ![](/images/Arch_Wall.svg) [muri](/Arch_Wall/it "Arch Wall/it") o ![](/images/Arch_Structure.svg) [Strutture](/Arch_Structure/it "Arch Structure/it"), a un oggetto costituito da un gruppo base come il ![](/images/Arch_Floor.svg) [Piano](/Arch_Floor/it "Arch Floor/it").
- Aggiungere dei ![](/images/Arch_Axis.svg) [sistemi di assi](/Arch_Axis/it "Arch Axis/it") a oggetti ![](/images/Arch_Structure.svg) [struttura](/Arch_Structure/it "Arch Structure/it").
- AAggiungere degli oggetti ai ![](/images/Arch_SectionPlane.svg) [piani di sezione](/Arch_SectionPlane/it "Arch SectionPlane/it").

La controparte di questo strumento è lo strumento ![](/images/Arch_Remove.svg) [Rimuovi componente](/Arch_Remove/it "Arch Remove/it").

![](/images/Arch_Add_example.jpg)

Un box aggiunto a un muro come componente.

## Utilizzo

1. Selezionare gli oggetti da aggiungere assieme. L'ultimo oggetto selezionato sarà l'oggetto Arch ricevente.
2. Premere il pulsante ![](/images/Arch_Add.svg) Aggiungi componente, oppure usare **Modifica → ![](/images/Arch_Add.svg) Aggiungi componente** dal menu in alto.

## Scripting

_Vedere anche:_ [Arch API](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento Aggiungi può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

: ```
addComponents(objectsList, host)

    ```

: Il frammento di codice riportato sopra aggiunge gli oggetti dati in `objectsList` all'oggetto `host` specificato.
: **Nota:** `objectsList` può essere un singolo oggetto o un elenco di oggetti.

Esempio:

```
import FreeCAD, Arch, Draft, Part

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 2000, 0)

Line = Draft.makeWire([p1, p2])
Wall = Arch.makeWall(Line, width=150, height=2000)

p3 = FreeCAD.Vector(0, 2000, 0)
p4 = FreeCAD.Vector(3000, 0, 0)

Line2 = Draft.makeWire([p3, p4])
Wall2 = Arch.makeWall(Line2, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Arch.addComponents(Wall2, Wall)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Add/it&oldid=1545116>"
