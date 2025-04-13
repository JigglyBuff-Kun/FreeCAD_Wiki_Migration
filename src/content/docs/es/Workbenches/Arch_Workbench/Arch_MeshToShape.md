---
title: Arch Malla a forma
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Malla a forma |
| Ubicación en el Menú |
| Arquitectura → Utilidades → Malla a forma |
| Entornos de trabajo |
| [Arquitectura](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [Arch SplitMesh/es](/Arch_SplitMesh/es "Arch SplitMesh/es"), [Eliminar forma](/Arch_RemoveShape/es "Arch RemoveShape/es") |
|  |

## Descripción

Esta herramienta convierte un objeto [Malla](/Mesh_Workbench/es "Mesh Workbench/es") seleccionado en un objeto [Forma](/Part_Workbench/es "Part Workbench/es"). Esta herramienta está optimizada para objetos con caras planas (no curvas). La herramienta correspondiente del [entorno de pieza](/Part_Workbench/es "Part Workbench/es") podría ser más adecuada para objetos que contienen superficies curvas.

This tool is optimized for objects with flat faces (no curves). The corresponding tool ![](/images/Part_ShapeFromMesh.svg) [Part ShapeFromMesh](/Part_ShapeFromMesh "Part ShapeFromMesh") from the ![](/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench") might be more suited for objects that contain curved surfaces.

## Utilización

1. Selecciona un objeto malla
2. Presiona ![](/images/Arch_MeshToShape.png) **Malla a forma** en el menú Arquitectura → Menú utilitarios

## Properties

## Limitations

## Scripting

## Programación

Esta herramienta se puede utilizar en [macros](/Macros/es "Macros/es") y desde la consola de Python por medio de las siguientes funciones:

```
new_obj = meshToShape(obj, mark=True, fast=True, tol=0.001, flat=False, cut=True)

```

:   Covierte una malla en una forma, juntando las caras coplanares.

Example:

```
import Arch, Mesh, BuildRegularGeoms

Box = FreeCAD.ActiveDocument.addObject("Mesh::Cube", "Cube")
Box.Length = 1000
Box.Width = 2000
Box.Height = 1000
FreeCAD.ActiveDocument.recompute()

new_obj = Arch.meshToShape(Box)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_MeshToShape/es&oldid=1435471>"