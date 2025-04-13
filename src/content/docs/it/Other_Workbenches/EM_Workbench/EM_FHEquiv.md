---
title: EM FHEquiv
---
|  |
| --- |
| EM FHEquiv |
| Posizione nel menu |
| EM → FHEquiv |
| Ambiente |
| [EM](/EM_Workbench/it "EM Workbench/it") (add-on) |
| Avvio veloce |
| E E |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [EM FHNode](/EM_FHNode/it "EM FHNode/it"), [EM FHSegment](/EM_FHSegment/it "EM FHSegment/it"), [EM FHPath](/EM_FHPath/it "EM FHPath/it"), [EM FHPlane](/EM_FHPlane/it "EM FHPlane/it"), [EM FHPort](/EM_FHPort/it "EM FHPort/it"), |
|  |

## Descrizione

The FHEquiv tool short-circuits two FHNode objects.

![](/images/EM_FHEquiv_Example.png)

FastHenry FHEquiv

## Usage

The FHEquiv object is based on the two existing FHNodes that it will short-circuit.

1. Select two ![](/images/EM_FHNode.svg) [FHNode](/EM_FHNode "EM FHNode") objects
2. Press the ![](/images/EM_FHEquiv.svg) [EM FHEquiv](/EM_FHEquiv "EM FHEquiv") button, or press E then E keys.

### Remarks

* If you need to short-circuit multiple nodes, just create multiple FHEquiv nodes. You don't need a full mesh of FHEquiv nodes, as of course if node1 is shorted with node2, and node2 is shorted with node3, also node1 will result shorted with node3.

## Properties

* Dati**Node1**: the first [FHNode](/EM_FHNode "EM FHNode") to short-circuit
* Dati**Node2**: the second [FHNode](/EM_FHNode "EM FHNode") to short-circuit

## Scripting

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The FHEquiv object can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
equiv = makeFHEquiv(node1=None,node2=None,name='FHEquiv')

```

* Creates a `FHEquiv` object.
* `node1` is the first node [FHNode](/EM_FHNode "EM FHNode") object to short-circuit.
* `node2` is the second node [FHNode](/EM_FHNode "EM FHNode") object to short-circuit.
* `name` is the name of the object

Esempio:

```
import FreeCAD, EM

fhnode1 = EM.makeFHNode(X=1.0,Y=0,Z=0)
fhnode2 = EM.makeFHNode(X=0,Y=1.0,Z=0)

fhequiv = EM.makeFHEquiv(fhnode1, fhnode2)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=EM_FHEquiv/it&oldid=1079858>"