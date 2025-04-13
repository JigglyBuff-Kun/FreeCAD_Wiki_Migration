---
title: Arch 3 Viste da mesh
---

:::caution
QUESTO COMANDO È OBSOLETONon è disponibile nellaversione 1.0 e superiori.
:::

|                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------- |
| 3 Viste da mesh                                                                                                      |
| Posizione nel menu                                                                                                   |
| Arch → Utilità → 3 Viste da mesh                                                                                     |
| Ambiente                                                                                                             |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")                                                                       |
| Avvio veloce                                                                                                         |
| _Nessuno_                                                                                                            |
| Introdotto nella versione                                                                                            |
| -                                                                                                                    |
| Vedere anche                                                                                                         |
| [Dividi Mesh](/Arch_SplitMesh/it "Arch SplitMesh/it"), [Da Mesh a Forma](/Arch_MeshToShape/it "Arch MeshToShape/it") |
|                                                                                                                      |

## Descrizione

_Questo comando non è attualmente in uso._ Esso servirà a generare delle viste piatte, di un oggetto [Mesh](/Mesh_Workbench/it "Mesh Workbench/it"), da usare con lo strumento ![](/images/Arch_Equipment.svg) [Arredo](/Arch_Equipment/it "Arch Equipment/it").

## Utilizzo

1. Selezionare un oggetto Mesh
2. Selezionare il pulsante ![](/images/Arch_3Views.svg), o Arch → Utilità → ![](/images/Arch_3Views.svg) 3 viste dal menu principale.

## Script

_Vedere anche:_ [API di Arch](/Arch_API/it "Arch API/it") e [Nozioni di base sugli script di FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it").

Questo strumento può essere utilizzato nelle [macro](/Macros/it "Macros/it") e dalla console [Python](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it") tramite la seguente funzione:

```
shape = createMeshView(obj, direction=FreeCAD.Vector(0, 0, -1), outeronly=False, largestonly=False)

```

- Crea una `shape` piatta che è la proiezione nella data `direction` dell'oggetto mesh (`obj`) specificato.
- Se `outeronly` è `True` viene preso in considerazione solo il contorno esterno, scartando i fori interni.
- Se `largestonly` è `True` viene utilizzato solo il segmento più grande della mesh specificata.

Usare `Part.show()` per visualizzare la forma piatta risultante.

Esempio:

```
import FreeCAD, Draft, Arch, Mesh, MeshPart

Line = Draft.makeWire([FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(2000, 2000, 0)])
Wall = Arch.makeWall(Line, width=150, height=3000)
FreeCAD.ActiveDocument.recompute()

Shape = Wall.Shape.copy(False)
Shape.Placement = Wall.getGlobalPlacement()

mesh_obj = FreeCAD.ActiveDocument.addObject("Mesh::Feature", "Mesh")
mesh_obj.Mesh = MeshPart.meshFromShape(Shape=Shape, MaxLength=520)
mesh_obj.ViewObject.DisplayMode = "Flat Lines"
FreeCAD.ActiveDocument.recompute()

XAxis = FreeCAD.Vector(1, 0, 0)
YAxis = FreeCAD.Vector(0, 1, 0)
ZAxis = FreeCAD.Vector(0, 0, -1)

s1 = Arch.createMeshView(mesh_obj, ZAxis)
s2 = Arch.createMeshView(mesh_obj, XAxis)
s3 = Arch.createMeshView(mesh_obj, YAxis)

Part.show(s1)
Part.show(s2)
Part.show(s3)

Wall.ViewObject.Visibility = False
mesh_obj.ViewObject.Visibility = False

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_3Views/it&oldid=1440492>"
