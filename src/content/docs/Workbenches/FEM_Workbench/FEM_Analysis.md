---
title: FEM Analysis
---

|                                              |
| -------------------------------------------- |
| FEM Analysis                                 |
| Menu location                                |
| Model → Analysis container‏‎                 |
| Workbenches                                  |
| [FEM](/FEM_Workbench "FEM Workbench")        |
| Default shortcut                             |
| S A                                          |
| Introduced in version                        |
| -                                            |
| See also                                     |
| [FEM tutorial](/FEM_tutorial "FEM tutorial") |
|                                              |

## Description

The **FEM Analysis** command creates a container to hold all objects of a Finite Element Analysis. This container is mandatory. At least one of the following objects (apart from the mesh) is necessary for a mechanical analysis:

- [solid material](/FEM_MaterialSolid "FEM MaterialSolid"),
- [fixed boundary condition](/FEM_ConstraintFixed "FEM ConstraintFixed") or [displacement boundary condition](/FEM_ConstraintDisplacement "FEM ConstraintDisplacement") or [rigid body constraint](/FEM_ConstraintRigidBody "FEM ConstraintRigidBody").

## Usage

1. There are several ways to invoke the command:
   - Press the ![](/images/FEM_Analysis.svg) [Analysis container](/FEM_Analysis "FEM Analysis") button.
   - Select the **Model → ![](/images/FEM_Analysis.svg) Analysis container‏‎** option from the menu.
   - Use the keyboard shortcut: S then A.
2. A new Analysis container is created and set to active.
3. Other objects can be added or removed from the Analysis container by drag and drop.
4. To add new FEM objects to the document the Analysis has to be active. Double-clicking on the Analysis container activates the analysis.

## Properties

- Data**OutpuDir**: Specifies the working directory of the analysis

## Scripting

most code here is deprecated in 0.17.

- new analysis

```
MechanicalAnalysis.makeMechanicalAnalysis( name )

```

- add object to the analysis

```
App.ActiveDocument.MechanicalAnalysis.Member = App.ActiveDocument.MechanicalAnalysis.Member + [ (object) ]

```

- remove object from the analysis

```
member = App.ActiveDocument.MechanicalAnalysis.Member
member.remove( documentobject )
 App.ActiveDocument.MechanicalAnalysis.Member = member

```

Examples:

```
import MechanicalAnalysis
analysis = MechanicalAnalysis.makeMechanicalAnalysis("MechanicalAnalysis")
FemGui.setActiveAnalysis(analysis)

addobj = App.ActiveDocument.getObject("MechanicalMaterial")
App.ActiveDocument.MechanicalAnalysis.Member = App.ActiveDocument.MechanicalAnalysis.Member + [addobj]

removeobj = App.ActiveDocument.getObject("MechanicalMaterial")
member = App.ActiveDocument.MechanicalAnalysis.Member
member.remove(removeobj)
App.ActiveDocument.MechanicalAnalysis.Member = member

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Analysis/en&oldid=1568792>"
