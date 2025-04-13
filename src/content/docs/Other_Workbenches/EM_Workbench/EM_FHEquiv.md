---
title: EM FHEquiv
---

|                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EM FHEquiv                                                                                                                                                                                          |
| Menu location                                                                                                                                                                                       |
| EM → FHEquiv                                                                                                                                                                                        |
| Workbenches                                                                                                                                                                                         |
| [EM](/EM_Workbench "EM Workbench")                                                                                                                                                                  |
| Default shortcut                                                                                                                                                                                    |
| E E                                                                                                                                                                                                 |
| Introduced in version                                                                                                                                                                               |
| 0.17                                                                                                                                                                                                |
| See also                                                                                                                                                                                            |
| [EM FHNode](/EM_FHNode "EM FHNode"), [EM FHSegment](/EM_FHSegment "EM FHSegment"), [EM FHPath](/EM_FHPath "EM FHPath"), [EM FHPlane](/EM_FHPlane "EM FHPlane"), [EM FHPort](/EM_FHPort "EM FHPort") |
|                                                                                                                                                                                                     |

## Description

The FHEquiv tool short-circuits two FHNode objects.

![](/src/assets/images/EM_FHEquiv_Example.png)

FastHenry FHEquiv

## Usage

The FHEquiv object is based on the two existing FHNodes that it will short-circuit.

1. Select two ![](/src/assets/images/EM_FHNode.svg) [FHNode](/EM_FHNode "EM FHNode") objects
2. Press the ![](/src/assets/images/EM_FHEquiv.svg) [EM FHEquiv](/EM_FHEquiv "EM FHEquiv") button, or press E then E keys.

### Remarks

- If you need to short-circuit multiple nodes, just create multiple FHEquiv nodes. You don't need a full mesh of FHEquiv nodes, as of course if node1 is shorted with node2, and node2 is shorted with node3, also node1 will result shorted with node3.

## Properties

- Data**Node1**: the first [FHNode](/EM_FHNode "EM FHNode") to short-circuit
- Data**Node2**: the second [FHNode](/EM_FHNode "EM FHNode") to short-circuit

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The FHEquiv object can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
equiv = makeFHEquiv(node1=None,node2=None,name='FHEquiv')

```

- Creates a `FHEquiv` object.
- `node1` is the first node [FHNode](/EM_FHNode "EM FHNode") object to short-circuit.
- `node2` is the second node [FHNode](/EM_FHNode "EM FHNode") object to short-circuit.
- `name` is the name of the object

Example:

```
import FreeCAD, EM

fhnode1 = EM.makeFHNode(X=1.0,Y=0,Z=0)
fhnode2 = EM.makeFHNode(X=0,Y=1.0,Z=0)

fhequiv = EM.makeFHEquiv(fhnode1, fhnode2)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_FHEquiv/en&oldid=1079859>"
