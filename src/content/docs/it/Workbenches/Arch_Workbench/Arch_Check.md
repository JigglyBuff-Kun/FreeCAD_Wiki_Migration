---
title: Arch Controllare se tutti gli oggetti sono dei solidi
---

:::caution
QUESTO COMANDO FA PARTE DELL'AMBIENTE BIMINTEGRATO NELLA V1.0Questa pagina è stata aggiornata per quella versione.
:::

|                                                         |
| ------------------------------------------------------- |
| Controlla                                               |
| Posizione nel menu                                      |
| Arch → Utilità → Controlla                              |
| Ambiente                                                |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")          |
| Avvio veloce                                            |
| _Nessuno_                                               |
| Introdotto nella versione                               |
| -                                                       |
| Vedere anche                                            |
| [Chiudi fori](/Arch_CloseHoles/it "Arch CloseHoles/it") |
|                                                         |

## Descrizione

Questo strumento controlla il documento corrente o gli oggetti selezionati alla ricerca di oggetti ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/it "Part Workbench/it") o ![](/images/Workbench_Arch.svg) [Arch](/Arch_Workbench/it "Arch Workbench/it"), che potrebbero dare problemi, poiché la maggior parte delle operazioni del modulo Architettura richiedono oggetti solidi.

## Utilizzo

1. Premere il pulsante ![](/images/Arch_Check.svg) Controlla, o Arch → Utilità → ![](/images/Arch_Check.svg) Controlla nel menu principale.

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Lo strumento può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

```
list_bad = check(objectslist, includehidden=False)

```

- Controlla se gli oggetti dati in `objectslist` contengono solo solidi.
- Se `includehidden` è `True` include tutti gli oggetti nascosti, altrimenti li esclude dalla ricerca.
- Restituisce una `list_bad`, una lista con gli oggetti che non sono derivati da una `Part::Feature`, o componenti che non sono chiusi, non validi, non contengono solidi o che contengono facce che non fanno parte di alcun solido. Questo è usato per rilevare contorni e profili di [Arch](/Arch_Workbench/it "Arch Workbench/it") o [Draft](/Draft_Workbench/it "Draft Workbench/it") che non sono solidi.
  - Ogni elemento in `list_bad` è un'altra lista `[object, message]`, dove `object` è l'oggetto rilevato non solido, e `message` indica il motivo per cui è stato incluso in questo elenco.

Esempio:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Wall2 = Arch.makeWall(None, length=2000, width=200, height=1000)
FreeCAD.ActiveDocument.recompute()

Circle = Draft.makeCircle(450)
Wire = Draft.makeWire([FreeCAD.Vector(1000, 0, 0), FreeCAD.Vector(1500, 1000, 0), FreeCAD.Vector(2500, -1000, 0)])

list_bad = Arch.check([Wall1, Wall2, Circle, Wire], includehidden=True)
print(list_bad)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Check/it&oldid=1456054>"
