---
title: MEF Constrângerea Propriei Greutăți
---
|  |
| --- |
| FEM ConstraintSelfWeight |
| poziția meniului |
| Model → Mechanical Constraints → Constraint self weight |
| Ateliere |
| [FEM](/FEM_Workbench/ro "FEM Workbench/ro") |
| scurtătură |
| C,W |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [FEM tutorial](/FEM_tutorial/ro "FEM tutorial/ro") |
|  |

## Descriere

Constrângerea greutății proprii este definită de către accelerația gravitațională de 9,81 m / s ^ 2 care acționează asupra întregului model în direcția prescrisă.

0.21 and below: The acceleration has a fixed value of 9.81 m/s^2.

## Cum se folosește

1. Click pe ![](/images/FEM_ConstraintSelfWeight.png) sau alegeți Model → **Mechanical Constraints** → ![](/images/FEM_ConstraintSelfWeight.png) Constraint self weight din meniul de sus sau apăsați tastele C apoi W.
2. Puteți modifica direcția gravitației schimbând coordonatele sale vectoriale în bara de proprietăți a obiectului nou creat ConstraintSelfWeight.

## Script

* obiect nou

```
import ObjectsFem
ObjectsFem.makeConstraintSelfWeight(name)

```

* adăugați obiectul la analiza numită Analysis

```
App.ActiveDocument.Analysis.Member = App.ActiveDocument.Analysis.Member + [(object)]

```

* examplu:

```
import ObjectsFem
selfweight_obj = ObjectsFem.makeConstraintSelfWeight("MySelfWeightObject")
App.ActiveDocument.Analysis.Member = App.ActiveDocument.Analysis.Member + [selfweight_obj]

```

## Solver CalculiX

### Limitations

## Solver CalculiX

### Limite

* Trebuie să modificați fișierul .inp pentru a edita accelerația gravitațională.
* Gerutatea proprie este aplicată elemetului set Eall înseamnă întreg modelul .

### Editing CalculiX input file

### Editing CalculiX input file

Accelerarea constantă poate fi modificată prin modificarea manuală după generarea fișierului de intrare CalculiX.

Example of lines in .inp file:

```
*DLOAD
Eall,GRAV,9810,0.0,0.0,-1.0

```

where 9810 is gravity acceleration in [mm/s^2]

```
*DLOAD
Eall,GRAV,9810,0.0,0.0,-1.0

```

where 9810 is a gravity acceleration magnitude in [mm/s^2], and 0,0,-1 is the direction vector. The value can be set as a multiple of standard gravity acceleration to simulate loading of e.g. 4g.

## Solver Z88

## Rezolvitorul Z88

* nu este implementat în rezolvitorul Z88 (March 2017)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintSelfWeight/ro&oldid=1357913>"