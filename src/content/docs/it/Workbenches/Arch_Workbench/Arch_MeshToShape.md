---
title: Arch da Mesh a Forma
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------- |
| Da Mesh a Forma                                                                                                   |
| Posizione nel menu                                                                                                |
| Arch → Utilità → Da Mesh a Forma                                                                                  |
| Ambiente                                                                                                          |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")                                                                    |
| Avvio veloce                                                                                                      |
| _Nessuno_                                                                                                         |
| Introdotto nella versione                                                                                         |
| -                                                                                                                 |
| Vedere anche                                                                                                      |
| [Divid Mesh](/Arch_SplitMesh/it "Arch SplitMesh/it"), [Rimuovi Forma](/Arch_RemoveShape/it "Arch RemoveShape/it") |
|                                                                                                                   |

## Descrizione

Da Mesh a Forma converte un oggetto [Mesh](/Mesh/it "Mesh/it") ([Mesh Feature](/Mesh_Feature/it "Mesh Feature/it")) selezionato in un oggetto [Forma](/Shape/it "Shape/it") ([Part Feature](/Part_Feature/it "Part Feature/it")).

Questo strumento è ottimizzato per oggetti con facce piane (senza curve). Lo strumento corrispondente ![](/images/Part_ShapeFromMesh.svg) [Crea forma da mesh](/Part_ShapeFromMesh/it "Part ShapeFromMesh/it") dell'ambiente ![](/images/Workbench_Part.svg) [Parte](/Part_Workbench/it "Part Workbench/it") potrebbe essere più adatto per oggetti che contengono superfici curve.

## Utilizzo

1. Selezionare un oggetto mesh.
2. Premere il pulsante ![](/images/Arch_MeshToShape.svg) Da Mesh a Forma in **Arch → Utilità → Da mesh a forma**.

## Proprietà

## Limitazioni

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Questo strumento può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/Python/it "Python/it") tramite la seguente funzione:

```
new_obj = meshToShape(obj, mark=True, fast=True, tol=0.001, flat=False, cut=True)

```

- Il frammento di codice sopra riportato converte il dato `obj`, una mesh, in una forma, unendo le facce complanari.
- Se `mark` è `True`, gli oggetti non solidi saranno contrassegnati in rosso.
- Se `fast` è `True` usa un algoritmo più veloce costruendo una shell dalle faccette.
- `tol` è la tolleranza utilizzata durante la conversione dei segmenti di mesh in contorni.
- Se `flat` è `True` forza i contorni a essere perfettamente planari, per essere sicuri che possano essere convertiti in facce, ma ciò potrebbe lasciare degli spazi vuoti nella shell finale.
- Se `cut` è `True` i fori nelle facce sono fatti per sottrazione.

Esempio:

```
import Arch, Mesh, BuildRegularGeoms

Box = FreeCAD.ActiveDocument.addObject("Mesh::Cube", "Cube")
Box.Length = 1000
Box.Width = 2000
Box.Height = 1000
FreeCAD.ActiveDocument.recompute()

new_obj = Arch.meshToShape(Box)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_MeshToShape/it&oldid=1435526>"
