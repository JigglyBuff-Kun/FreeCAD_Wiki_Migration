---
title: Kreslení Pole
---
:::caution
THIS COMMAND IS OBSOLETEIt is not available in0.21 and above. UseDraft OrthoArray,Draft PolarArrayorDraft CircularArrayinstead.
:::

|  |
| --- |
| Kreslení Pole |
| Umístění Menu |
| Draft → Array |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [PathArray](/Draft_PathArray/cs "Draft PathArray/cs") |
|  |

## Popis

Nástroj Pole vytváří ortogonální (3-osy) nebo polární pole z vybraných objektů. Není-li vybrán žádný objekt, budete vyzváni k jeho výběru.

The ![](/images/Draft_Array.svg) **Draft Array** command creates an orthogonal (3-axes) array from a selected object. The created array can be turned into a [polar array](/Draft_PolarArray "Draft PolarArray") or a [circular array](/Draft_CircularArray "Draft CircularArray") by changing its Údaje**Array Type** property.

The command can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [Arch Workbench](/Arch_Workbench "Arch Workbench").

This command is now obsolete. Use the [Draft OrthoArray](/Draft_OrthoArray "Draft OrthoArray"), [Draft PolarArray](/Draft_PolarArray "Draft PolarArray") or [Draft CircularArray](/Draft_CircularArray "Draft CircularArray") command instead.

## Usage

## Použití

1. Vyberte objekt, ze kterého chcete udělat pole
2. Stiskněte tlačítko ![](/images/Draft_Array.png) Pole.

(pozn.překl.: Pro začátečníky jako jsem já - defaultně jsou intervaly X,Y a Z nastaveny na 1. Když pracujete v mm, tak to vypadá jakoby se pole nevytvořilo, protože se elementy překrývají. Je potřeba alespoň jeden index zvýšit minimálně na rozměr základního prvku.)

## Properties

See [Draft OrthoArray](/Draft_OrthoArray#Properties "Draft OrthoArray").

## Scripting

See [Draft OrthoArray](/Draft_OrthoArray#Scripting "Draft OrthoArray").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Array/cs&oldid=1458114>"