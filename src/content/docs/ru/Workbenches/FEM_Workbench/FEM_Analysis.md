---
title: FEM Анализ
---
|  |
| --- |
| FEM Analysis |
| Расположение в меню |
| Model → Блок анализа |
| Верстаки |
| [FEM](/FEM_Workbench/ru "FEM Workbench/ru") |
| Быстрые клавиши |
| N A |
| Представлено в версии |
| - |
| См. также |
| [FEM tutorial](/FEM_tutorial/ru "FEM tutorial/ru") |
|  |

## Описание

The **FEM Analysis** command creates a container to hold all objects of a Finite Element Analysis. This container is mandatory. At least one of the following objects (apart from the mesh) is necessary for a mechanical analysis:

* [solid material](/FEM_MaterialSolid "FEM MaterialSolid"),
* [fixed boundary condition](/FEM_ConstraintFixed "FEM ConstraintFixed") or [displacement boundary condition](/FEM_ConstraintDisplacement "FEM ConstraintDisplacement") or [rigid body constraint](/FEM_ConstraintRigidBody "FEM ConstraintRigidBody").

## Применение

1. There are several ways to invoke the command:
   * Press the ![](/images/FEM_Analysis.svg) [Analysis container](/FEM_Analysis "FEM Analysis") button.
   * Select the **Model → ![](/images/FEM_Analysis.svg) Analysis container‏‎** option from the menu.
   * Use the keyboard shortcut: S then A.
2. A new Analysis container is created and set to active.
3. Other objects can be added or removed from the Analysis container by drag and drop.
4. To add new FEM objects to the document the Analysis has to be active. Double-clicking on the Analysis container activates the analysis.

## Свойства

* Данные**OutpuDir**: Specifies the working directory of the analysis

## Программирование

most code here is deprecated in 0.17.

* new analysis

```
MechanicalAnalysis.makeMechanicalAnalysis( name )

```

* add object to the analysis

```
App.ActiveDocument.MechanicalAnalysis.Member = App.ActiveDocument.MechanicalAnalysis.Member + [ (object) ]

```

* remove object from the analysis

```
member = App.ActiveDocument.MechanicalAnalysis.Member
member.remove( documentobject )
 App.ActiveDocument.MechanicalAnalysis.Member = member

```

Примеры:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Analysis/ru&oldid=1568788>"