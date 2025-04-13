---
title: Draft Matrice repetabilitate
---
:::caution
THIS COMMAND IS OBSOLETEIt is not available in0.21 and above. UseDraft OrthoArray,Draft PolarArrayorDraft CircularArrayinstead.
:::

|  |
| --- |
| Matrice repetabilitate |
| poziția meniului |
| Draft → Array |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [PolarArray](/Draft_PolarArray "Draft PolarArray"), [CircularArray](/Draft_CircularArray "Draft CircularArray"), [PathArray](/Draft_PathArray "Draft PathArray"), [PointArray](/Draft_PointArray "Draft PointArray"), [Clone](/Draft_Clone "Draft Clone") |
|  |

## Descriere

Instrumentul Array creează o matrice ortogonală (3-axe) sau polară dintr-un obiect selectat. Dacă nu este selectat niciun obiect, veți fi invitat să selectați unul.

The ![](/images/Draft_Array.svg) **Draft Array** command creates an orthogonal (3-axes) array from a selected object. The created array can be turned into a [polar array](/Draft_PolarArray "Draft PolarArray") or a [circular array](/Draft_CircularArray "Draft CircularArray") by changing its Date**Array Type** property.

The command can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [Arch Workbench](/Arch_Workbench "Arch Workbench").

This command is now obsolete. Use the [Draft OrthoArray](/Draft_OrthoArray "Draft OrthoArray"), [Draft PolarArray](/Draft_PolarArray "Draft PolarArray") or [Draft CircularArray](/Draft_CircularArray "Draft CircularArray") command instead.

## Usage

## Cum se utilizează

1. Selectați un obiect cu care doriți să faceți o matrice
2. Apăsați tasta  ![](/images/Draft_Array.svg) [Array de Proiect](/Draft_Array "Draft Array")
3. Selectați Date **Array Type**: Specifică tipul matricei, orto sau polar
4. Pentru matrice ortogonale:
   1. Date **Interval X**: Intervalul dintre fiecare copie pe prima axă
   2. Date **Interval Y**: Intervalul dintre fiecare copie pe a doua axă
   3. Date **Interval Z**: Intervalul dintre fiecare copie pe a treia axă
   4. Date **Număr X**: Numărul de copii pe prima axă
   5. Date **Număr Y**: numărul de copii pe a doua axă
   6. Date **Număr Z**: Numărul de copii pe a treia axă
5. Pentru tablouri polare:
   1. Date **Axis**: Direcția normală a cercului matricei
6. Date **Center**: Punctul central al matricei
7. Date **Angle**: Unghiul de acoperire cu copii
8. Date **Număr Polar**: Numărul de copii

## Properties

See [Draft OrthoArray](/Draft_OrthoArray#Properties "Draft OrthoArray").

## Scripting

## Script-Programre

Instrumentul Array poate fi utilizat în [macros](/Macros "Macros") și din consola Python utilizând una dintre următoarele funcții, în funcție de situația în care doriți să obțineți copii simple, independente ale obiectului de bază sau un obiect parametric, care rămâne legat de obiectul original.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Array/ro&oldid=1458115>"