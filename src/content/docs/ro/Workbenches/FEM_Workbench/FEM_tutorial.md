---
title: FEM Tutorial MEF
---

|                                                              |
| ------------------------------------------------------------ |
| Tutorial                                                     |
| Topic                                                        |
| Finite Element Analysis                                      |
| Level                                                        |
| Beginner                                                     |
| Time to complete                                             |
| 10 minutes + Solver time                                     |
| Authors                                                      |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) |
| FreeCAD version                                              |
| 0.16.6700 or above                                           |
| Example files                                                |
|                                                              |
| See also                                                     |
| _None_                                                       |
|                                                              |

## Introduction

### Introducere

Acest tutorial are rolul de a introduce cititorul în fluxul de lucru de bază al Atelierului MEF, precum și majoritatea instrumentelor disponibile pentru a efectua o analiză statică.

![](/images/FEM_tutorial_result.png)

## Requirements

### Cerințe

- FreeCAD version 0.16.6700 sau mai modernă
- [Netgen](http://sourceforge.net/projects/netgen-mesher/) and/or [GMSH](http://geuz.org/gmsh/) este instalat în sistem
- In cazul GMSH, instalarea este recomandată [psicofil's macro](https://github.com/psicofil/Macros_FreeCAD)
- [Calculix](http://www.calculix.de/) este instalat în sistem
- Cititorul are cunoștințele de bază pentru a utiliza Atelierele Piese (Part) PartDesign

### Procedură

### Modeling

#### Modelarea

În acest exemplu, un Cub este folosit ca obiect de studiu, dar modelele create în atelierele de lucru Part sau PartDesign pot fi folosite în schimb.

1. Creați un nou document
2. Activați Atelierul Part Workbench
3. Creați un Cube
4. Schimbați-i dimensiunile**Dimensions** după cum urmează:
   1. Height: 1.000 mm
   2. Length: 8.000 mm
   3. Width: 1.000 mm

Acum avem un model cu care să lucrăm.

### Creating the Analysis

1. Activate the ![](/images/Workbench_FEM.svg) [FEM Workbench](/FEM_Workbench "FEM Workbench").
2. Select the **Model → ![](/images/FEM_Analysis.svg) Analysis container‏‎** option from the menu.

### Constraints and Forces

#### Constrângeri și Forțe

1. Ascundeți plasa din vederea arorescentă Tree View.
2. Arătați modelul original
3. Selectați ![](/images/FEM_FixedConstraint.png) [Create FEM fixed constraint](/FEM_ConstraintFixed "FEM ConstraintFixed")
4. Selectați fațeta din spate a Cube (fațeta de pe planul definit de axele **YZ**) și click OK
5. Selectați ![](/images/FEM_ForceConstraint.png) [Create FEM force constraint](/FEM_ConstraintForce "FEM ConstraintForce")
6. Selectați fațeta din față a Cube (Fațeta paralelă cu fațeta din spate) și definiți **Area load** cu valoarea de 9000000.00
7. Definiți **Direction** la **-Z** prin selectarea unei adintre fațetele paralele cu această direcție.
8. Click OK

Am stabilit restricțiile și forțele pentru studiul nostru static.

### Material

#### finalul Pregătirilor

1. Select ![](/images/FEM_Material.png) [Mechanical material...](/FEM_MaterialSolid "FEM MaterialSolid") and choose Calculix as the material
2. Click **OK**

### Meshing

It is recommended to make a mesh as the last step in the analysis preparations due to association to a geometry in FreeCAD.
Depending on FreeCAD installation, there can be Netgen or GMSH meshers, you can use any of them.

#### Netgen

#### Crearea Analizei

##### Netgen

1. Selectați modelull
2. Click pe ![](/images/FEM_Analysis.png) [New mechanical analysis](/FEM_Analysis "FEM Analysis") din meniu pentru a crea o analiză a obiectului care a fost selectat
3. In caseta de dialogul pentru crearea plasei, click **OK**

Puteți, de asemenea, să glisați și să plasați o plasă într-o Analiză Mecanică care nu are o plasă în Vederea Arborescentă(Tree View).

#### GMSH

1. Select the model
2. ![](/images/FEM_MeshGmshFromShape.svg) [FEM mesh from shape by Gmsh](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape"): Generates a finite element mesh for a model using Gmsh.
3. In the meshing dialog, click Apply and OK.

Ne-am discretizat într-o plasă cu ochiuri acum obiectul și suntem gata să adăugăm constrângeri și forțe.

### Running the Solver

#### Standard Procedure

#### Rularea Rezolvitorului

##### Procedura Standard

1. Selectați obiectul rezolvitor ![](/images/FEM_Solver.png) contained in the **Mechanical Analysis**
2. Selectați ![](/images/FEM_Calculation.png) [Start calculation](/FEM_SolverControl "FEM SolverControl") din meniul
3. Selectați **Write Calculix Input File**
4. Selectați **Run Calculix**
5. Click pe **Close**

#### Quick Procedure

##### Procedură rapidă

1. Selectați obeictul rezolvitor ![](/images/FEM_Solver.png) conținut în **Mechanical Analysis**
2. Click pe ![](/images/FEM_RunCalculiXccx.png) [Quick Analysis](/FEM_SolverRun "FEM SolverRun").

### Analyzing Results

#### Analizarea Rezultatelor

1. Din arborescența obiect **Object Tree**, selectați obeictul **Results**
2. Selectați ![](/images/FEM_ShowResult.png) [Show result](/FEM_ResultShow "FEM ResultShow")
3. Alegeți printre diferite tipuri de _Result_ pentru a vedea rezultatele
4. sliderul din partea de jos poate fi utilizat pentru a modifica vizulizarea plasei. Aceasta ne permite să vizualizăm deformația suferită de obiect, rețineți că este o aproximație.
5. Pentru a șterge rezultatul selectați ![](/images/FEM_PurgeResults.png) [Purge results](/FEM_ResultsPurge "FEM ResultsPurge")

**Compararea cu exemplele de fișiere precedente**

dacă selectați **Z displacement** result type, puteți vedea că valoarea obținută este aproape identică cu exemplul test oferit de FreeCAD. Diferențele pot să apară datorită calității plasei și a numărul de noduri pe care le posedă aceata.

Am terminat acum cu fluxul de lucru de bază pentru [FEM Workbench](/FEM_Workbench "FEM Workbench").

## Notes

- For a video tutorial based on this written tutorial watch: [FEM MaterialReinforced tutorial](https://www.youtube.com/watch?v=SZTIqhfCSVc).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_tutorial/ro&oldid=1387442>"
