---
title: FEM tutorial/es
---
|  |
| --- |
| Tutorial |
| Tema |
| Análisis de Elemento Finito |
| Nivel |
| Principiante |
| Tiempo para completar |
| 10 minutos + tiempo del Solver |
| Autores |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) |
| Versión de FreeCAD |
| 0.16 o superior |
| Archivos de ejemplos |
|  |
| Ver también |
| *None* |
|  |

## Introduction

### Introducción

Este tutorial tiene como propósito el introducir al lector a la forma de trabajo básica del módulo FEM, así como a la mayoría de las herramientas disponibles para realizar un análisis estático.

![](/images/FEM_tutorial_result.png)

## Requirements

### Requisitos

* FreeCAD versión 0.16 superior
* [Netgen](http://sourceforge.net/projects/netgen-mesher/) y/o [GMSH](http://geuz.org/gmsh/) está instalado en el sistema
* Para el caso de GMSH, se recomienda instalar el macro de [psicofil's macro](https://github.com/psicofil/Macros_FreeCAD)
* [Calculix](http://www.calculix.de/) está instalado en el sistema
* El lector tiene el conocimiento básico para utilizar los módulo Part y PartDesign

### Procedimiento

### Modeling

#### Modelado

En este ejemplo un Cubo es utilizado como objeto de estudio, pero modelos creados en los bancos de trabajo Parte y Diseño de Parte pueden ser utilizados en su lugar.

1. Crear un nuevo documento
2. Activar el módulo Part
3. Crear un Cubo
4. Cambiar sus **Dimensiones** a las siguientes:
   1. Altura: 1.000 mm
   2. Longitud: 8.000 mm
   3. Ancho: 1.000 mm

Ahora tenemos un modelo con el que se puede trabajar.

### Creating the Analysis

1. Activate the ![](/images/Workbench_FEM.svg) [FEM Workbench](/FEM_Workbench "FEM Workbench").
2. Select the **Model → ![](/images/FEM_Analysis.svg) Analysis container‏‎** option from the menu.

### Constraints and Forces

#### Restricciones y Fuerzas

1. Oculte la malla desde la Vista de Árbol
2. Muestre el modelo original
3. Seleccione ![](/images/FEM_FixedConstraint.png) [Crear una restricción FEM fija](/index.php?title=FEM_ConstraintFixed/es&action=edit&redlink=1 "FEM ConstraintFixed/es (page does not exist)")
4. Seleccione la cara trasera del Cubo (la cara ubicada en el plano **YZ** ) y dé clic en OK
5. Seleccione ![](/images/FEM_ForceConstraint.png) [Crear una restricción FEM de fuerza](/index.php?title=FEM_ConstraintForce/es&action=edit&redlink=1 "FEM ConstraintForce/es (page does not exist)")
6. Seleccione la cara frontal del Cubo (la cara paralela a la cara trasera) y especifique el valor de **Carga Superficial** a 9000000.00
7. Fije la **Direcciónn** a **-Z** seleccionando una de las aristas paralelas a esa dirección
8. Clic OK

Hemos establecido las restricciones y fuerzas para nuestro estudio estático.

### Material

#### Preparaciones finales

1. Seleccione ![](/images/FEM_Material.png) [Material Mecánico...](/FEM_MaterialSolid/es "FEM MaterialSolid/es") y seleccione Calculix como el material
2. Clic **OK**

### Meshing

It is recommended to make a mesh as the last step in the analysis preparations due to association to a geometry in FreeCAD.
Depending on FreeCAD installation, there can be Netgen or GMSH meshers, you can use any of them.

#### Netgen

#### Creando el análisis

##### Netgen

1. Seleccione el modelo
2. Clic en ![](/images/FEM_Analysis.png) [Nuevo Análisis Mecánico](/index.php?title=FEM_Analysis/es&action=edit&redlink=1 "FEM Analysis/es (page does not exist)") desde el menú para crear un análisis con el objeto seleccionado
3. En el diálogo de mallado, dé clic en **OK**

También es posible arrastrar y depositar una malla a un Análisis Mecánico que no contenga una malla desde la vista del árbol

#### GMSH

1. Select the model
2. ![](/images/FEM_MeshGmshFromShape.svg) [FEM mesh from shape by Gmsh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape"): Generates a finite element mesh for a model using Gmsh.
3. In the meshing dialog, click Apply and OK.

Hemos mallado nuestro objeto y estamos listos para agregar restricciones y fuerzas.

### Running the Solver

#### Standard Procedure

1. Select the solver object ![](/images/FEM_SolverCalculixCxxtools.svg) contained in the **Analysis** container.
2. Select ![](/images/FEM_SolverControl.svg) [Solver job control](/FEM_SolverControl "FEM SolverControl") from the menu.
3. Select **Write .inp File**.
4. Select **Run CalculiX**.
5. Click OK.

#### Quick Procedure

1. Select the solver object ![](/images/FEM_SolverCalculixCxxtools.svg) contained in the **Analysis** container.
2. Click on ![](/images/FEM_SolverRun.svg) [Run solver calculations](/FEM_SolverRun "FEM SolverRun").

### Analyzing Results

1. From the **Object Tree**, select the **CCX\_Results** object.
2. Select ![](/images/FEM_ResultShow.svg) [Show result](/FEM_ResultShow "FEM ResultShow").
3. Choose among the different Result types to view the results.
4. The slider at the bottom can be used to alter the mesh visualization. This allows us to visualize the deformation experienced by the object, keep in mind that this is an approximation.
5. To remove the results select ![](/images/FEM_ResultsPurge.svg) [Purge results](/FEM_ResultsPurge "FEM ResultsPurge").

**Comparison to previous example file**

If you select the **Z displacement** result type, you can see that the obtained value is almost identical to the test example provided by FreeCAD. Differences may occur due to the quality of the mesh and the number of nodes it possesses.

We are now finished with the basic workflow for the [FEM Workbench](/FEM_Workbench "FEM Workbench").

## Notes

* For a video tutorial based on this written tutorial watch: [FEM MaterialReinforced tutorial](https://www.youtube.com/watch?v=SZTIqhfCSVc).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_tutorial/es&oldid=1387443>"