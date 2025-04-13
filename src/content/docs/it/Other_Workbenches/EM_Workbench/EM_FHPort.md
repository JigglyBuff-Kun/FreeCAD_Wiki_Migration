---
title: EM FHPort
---
|  |
| --- |
| EM FHPort |
| Posizione nel menu |
| EM → FHPort |
| Ambiente |
| [EM](/EM_Workbench/it "EM Workbench/it") (add-on) |
| Avvio veloce |
| E P |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [EM FHNode](/EM_FHNode/it "EM FHNode/it"), [EM FHSegment](/EM_FHSegment/it "EM FHSegment/it"), [EM FHPath](/EM_FHPath/it "EM FHPath/it"), [EM FHPlane](/EM_FHPlane/it "EM FHPlane/it"), [EM FHEquiv](/EM_FHEquiv/it "EM FHEquiv/it"), |
|  |

## Descrizione

The FHPort tool creates a FastHenry port between two FHNode objects.

![](/images/EM_FHPort_Example.png)

FastHenry FHPort

## Usage

The FHPort object is based on the two existing FHNodes between which it will create a FastHenry port.

1. Select two ![](/images/EM_FHNode.svg) [FHNode](/EM_FHNode "EM FHNode") objects
2. Press the ![](/images/EM_FHPort.svg) [EM FHPort](/EM_FHPort "EM FHPort") button, or press E then P keys.

### Remarks

* The first node you select is the positive node of the port, and the arrow that is the shape of the FHPort object will point in this direction.

## Properties

* Dati**NodePos**: the positive [FHNode](/EM_FHNode "EM FHNode") of the FastHenry port
* Dati**NodeNeg**: the negative [FHNode](/EM_FHNode "EM FHNode") of the FastHenry port

## Scripting

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The FHPort object can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
port = makeFHPort(nodePos=None,nodeNeg=None,name='FHPort')

```

* Creates a `FHPort` object.
* `nodePos` is the positive node [FHNode](/EM_FHNode "EM FHNode") object of the FastHenry port.
* `nodeNeg` is the negative node [FHNode](/EM_FHNode "EM FHNode") object of the FastHenry port.
* `name` is the name of the object

Example:

```
import FreeCAD, EM

fhnode_p = EM.makeFHNode(X=1.0,Y=0,Z=0)
fhnode_n = EM.makeFHNode(X=0,Y=1.0,Z=0)

fhport = EM.makeFHPort(fhnode_p, fhnode_n)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_FHPort/it&oldid=1080008>"