---
title: EM FHPort
---

|                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| EM FHPort                                                                                                                                                                                              |
| Menu location                                                                                                                                                                                          |
| EM → FHPort                                                                                                                                                                                            |
| Workbenches                                                                                                                                                                                            |
| [EM](/EM_Workbench "EM Workbench")                                                                                                                                                                     |
| Default shortcut                                                                                                                                                                                       |
| E P                                                                                                                                                                                                    |
| Introduced in version                                                                                                                                                                                  |
| 0.17                                                                                                                                                                                                   |
| See also                                                                                                                                                                                               |
| [EM FHNode](/EM_FHNode "EM FHNode"), [EM FHSegment](/EM_FHSegment "EM FHSegment"), [EM FHPath](/EM_FHPath "EM FHPath"), [EM FHPlane](/EM_FHPlane "EM FHPlane"), [EM FHEquiv](/EM_FHEquiv "EM FHEquiv") |
|                                                                                                                                                                                                        |

## Description

The FHPort tool creates a FastHenry port between two FHNode objects.

![](/images/EM_FHPort_Example.png)

FastHenry FHPort

## Usage

The FHPort object is based on the two existing FHNodes between which it will create a FastHenry port.

1. Select two ![](/images/EM_FHNode.svg) [FHNode](/EM_FHNode "EM FHNode") objects
2. Press the ![](/images/EM_FHPort.svg) [EM FHPort](/EM_FHPort "EM FHPort") button, or press E then P keys.

### Remarks

- The first node you select is the positive node of the port, and the arrow that is the shape of the FHPort object will point in this direction.

## Properties

- Data**NodePos**: the positive [FHNode](/EM_FHNode "EM FHNode") of the FastHenry port
- Data**NodeNeg**: the negative [FHNode](/EM_FHNode "EM FHNode") of the FastHenry port

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The FHPort object can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
port = makeFHPort(nodePos=None,nodeNeg=None,name='FHPort')

```

- Creates a `FHPort` object.
- `nodePos` is the positive node [FHNode](/EM_FHNode "EM FHNode") object of the FastHenry port.
- `nodeNeg` is the negative node [FHNode](/EM_FHNode "EM FHNode") object of the FastHenry port.
- `name` is the name of the object

Example:

```
import FreeCAD, EM

fhnode_p = EM.makeFHNode(X=1.0,Y=0,Z=0)
fhnode_n = EM.makeFHNode(X=0,Y=1.0,Z=0)

fhport = EM.makeFHPort(fhnode_p, fhnode_n)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_FHPort/en&oldid=1080007>"
