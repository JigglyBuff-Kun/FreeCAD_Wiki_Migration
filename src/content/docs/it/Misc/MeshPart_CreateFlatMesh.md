---
title: Mesh Sviluppa una mesh
---

|                                                                                 |
| ------------------------------------------------------------------------------- |
| Sviluppa una mesh                                                               |
| Posizione nel menu                                                              |
| Mesh → Sviluppa una mesh                                                        |
| Ambiente                                                                        |
| [Mesh](/Mesh_Workbench/it "Mesh Workbench/it")                                  |
| Avvio veloce                                                                    |
| _Nessuno_                                                                       |
| Introdotto nella versione                                                       |
| -                                                                               |
| Vedere anche                                                                    |
| [Sviluppa una faccia](/MeshPart_CreateFlatFace/it "MeshPart CreateFlatFace/it") |
|                                                                                 |

## Descrizione

The **MeshPart CreateFlatMesh** command creates a flat representation of a mesh object by unwrapping, unfolding, it. The created outline is a [Part Feature](/Part_Feature "Part Feature").

![](/images/MeshPart_CreateFlatMesh_example.png)

A mesh object and, in red, its flat representation

## Utilizzo

1. Select a single mesh object. The mesh must be 'unwrappable'. For example, to unwrap a cylindrical mesh it must have open ends and an open seam. Also curved surfaces must have a relatively fine mesh. Use the [Mesh RemeshGmsh](/Mesh_RemeshGmsh "Mesh RemeshGmsh") command if necessary.
2. Select the **Meshes → ![](/images/MeshPart_CreateFlatMesh.svg) Unwrap mesh** option from the menu.

## Proprietà

Vedere: [Funzioni Part](/Part_Feature/it "Part Feature/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=MeshPart_CreateFlatMesh/it&oldid=1332893>"
