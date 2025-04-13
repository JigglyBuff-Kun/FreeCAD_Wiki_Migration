---
title: Arch Recinzione
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                |
| ---------------------------------------------- |
| Recinzione                                     |
| Posizione nel menu                             |
| Arch → Recinzione                              |
| Ambiente                                       |
| [Arch](/Arch_Workbench/it "Arch Workbench/it") |
| Avvio veloce                                   |
| _Nessuno_                                      |
| Introdotto nella versione                      |
| 0.19                                           |
| Vedere anche                                   |
| _Nessuno_                                      |
|                                                |

## Descrizione

Recinzione è un oggetto che costruisce una recinzione ripetendo un piantone e una campata della recinzione lungo un determinato percorso.

![](/images/Arch_Fence_description_example.png)

## Utilizzo

### Creare dall'inizio

1. Usare un ambiente a scelta per creare un piantone e una campata.
2. Creare il percorso della recinzione usando [Sketcher](/Sketcher_Workbench/it "Sketcher Workbench/it") o [Draft](/Draft_Workbench/it "Draft Workbench/it").
3. Passare nell'ambiente [Arch](/Arch_Workbench/it "Arch Workbench/it").
4. Selezionare la campata, il piantone e il percorso esattamente nell'ordine indicato.
5. Premere il pulsante ![](/images/Arch_Fence.svg) Recinzione.

## Opzioni

Per ora lo strumento assume quanto segue.

1. Il percorso è disegnato sul piano XY.
2. La campata e il piantone sono disegnati nell'origine in modo che siano in posizione verticale nella vista frontale.

## Proprietà

### Dati

- Dati**Path**: il percorso che la recinzione deve seguire
- Dati**Post**: un singolo piantone della recinzione da ripetere
- Dati**Section**: una singola campata da ripetere
- Dati**Number Of Posts**: il numero totale dei piantoni utilizzati per costruire la recinzione. Questo è calcolato automaticamente.
- Dati**Number Of Sections**: il numero totale di campate utilizzate per costruire la recinzione. Questo è calcolato automaticamente.

### Vista

- Vista**Use Original Colors**: Quando impostata su `true` la recinzione utilizza i colori della sezione e del piantone originale. Altrimenti utilizza il ShapeColor della recinzione.

## Note

- Arch Fence è stato introdotto in FC v0.19 dall'utente furti.
- [Discussione del forum](https://forum.freecadweb.org/viewtopic.php?t=36149) dove si discute della funzionalità di Arch Fence

## Script

Lo strumento Recinzione può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

```
Fence = buildFence(section, post, path)

```

Esempio:

```
import FreeCAD
import Part
import Arch

parts = []

parts.append(Part.makeBox(2000, 50, 30, FreeCAD.Vector(0, 0, 1000 - 30)))
parts.append(Part.makeBox(2000, 50, 30))
parts.append(Part.makeBox(20, 20, 1000 - 60, FreeCAD.Vector(0, 15, 30)))
parts.append(Part.makeBox(20, 20, 1000 - 60, FreeCAD.Vector(1980, 15, 30)))

for i in range(8):
    parts.append(Part.makeBox(20, 20, 1000 - 60, FreeCAD.Vector((2000 / 9 * (i + 1)) - 10, 15, 30)))

Part.show(Part.makeCompound(parts), "Fence_section")
fence_section = FreeCAD.ActiveDocument.Fence_section

sketch = FreeCAD.ActiveDocument.addObject("Sketcher::SketchObject", "Path")
sketch.Placement = FreeCAD.Placement(FreeCAD.Vector(0, 0, 0), FreeCAD.Rotation(0, 0, 0, 1))
sketch.addGeometry(Part.LineSegment(FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(20000, 0, 0)), False)
sketch.addGeometry(Part.LineSegment(FreeCAD.Vector(20000, 0, 0), FreeCAD.Vector(20000, 20000, 0)), False)

post = Part.makeBox(100, 100, 1000, FreeCAD.Vector(0, 0, 0))
Part.show(post, "Post")
post = FreeCAD.ActiveDocument.Post

Fence = Arch.buildFence(fence_section, post, sketch)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Fence/it&oldid=1435418>"
