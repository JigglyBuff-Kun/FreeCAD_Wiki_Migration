---
title: Pieza Compuesto
---
|  |
| --- |
| Pieza Compuesto‏‎ |
| Ubicación en el Menú |
| Pieza → Hacer Compuesto |
| Entornos de trabajo |
| [Pieza](/Part_Workbench/es "Part Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| 0.14 |
| Ver también |
| [Pieza Unión](/Part_Union/es "Part Union/es"), [Pieza Filtro compuesto](/Part_CompoundFilter/es "Part CompoundFilter/es"), [Pieza Explotar compuesto](/Part_ExplodeCompound/es "Part ExplodeCompound/es") |
|  |

## Description

## Descripción

Este comando crea un compuesto de cualquier tipo de formas topológicas.
Pueden ser sólidos o mallas o cualquier otro tipo de formas topológicas.

## Usage

1. Mark the topological shapes to be added to the compound in the [tree view](/Tree_view "Tree view")
2. Choose **Part → Compound → Make Compound** entry in the Part menu or click on the ![](/images/Part_Compound.svg) button.

## Notes

A compound containing pieces that intersect or touch is **invalid** for Boolean operations. Because of performance issues, checking if the pieces intersect is not done by default. Automatic geometry check (available for Boolean operations) is disabled for part compound as well.

To turn this check on go to **Tools → Edit Parameters → Preferences... → Mod → Part → CheckGeometry → RunBOPCheck** and set the parameter to `true`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Compound/es&oldid=1466643>"