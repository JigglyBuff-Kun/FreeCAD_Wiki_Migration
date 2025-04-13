---
title: FEM Analiză
---

|                                                    |
| -------------------------------------------------- |
| FEM Analysis                                       |
| poziția meniului                                   |
| Model → Analysis container‏‎                       |
| Ateliere                                           |
| [FEM](/FEM_Workbench/ro "FEM Workbench/ro")        |
| scurtătură                                         |
| N,A                                                |
| Prezentat în versiune                              |
| -                                                  |
| A se vedea, de asemenea,                           |
| [FEM tutorial](/FEM_tutorial/ro "FEM tutorial/ro") |
|                                                    |

## Descriere

Analiza MEF poate fi văzută ca un Container care cuprinde toate obiectele Finite Element Analysis. Este obligatoriu să facem o analiză a containerului care cuprinde toate obiectele necesare. Cel puțin unul dintre următoarele obeicte este necesar pentru analiza mecanică:

- [material](/FEM_MaterialSolid "FEM MaterialSolid")
- [fixed constraint](/FEM_ConstraintFixed "FEM ConstraintFixed")
- [force constraint](/FEM_ConstraintForce "FEM ConstraintForce") or [pressure constraint](/FEM_ConstraintPressure "FEM ConstraintPressure")

## Cum se folosește

1. Apăsați butonul ![](/images/FEM_Analysis.png) [Analysis container](/FEM_Analysis "FEM Analysis") , sau apăsați tasta N apoi tastaA . O nouă analiză este creată și setată ca fiind activă.
2. alte obiecte pot fi adăugate sau retrase din analiza containerului prin glisare și fixare -drag and drop.
3. Pentru a adăuga obiecte noi MEF la documentul de analizat trebuie să fie activ. Dublu click on pe analiză trebuie să activeze analiza.

## Proprietăți

- Date**OutpuDir**: Specifică directorul de lucru a analizei

## Programare-Script

cea mai mare parte a codului a fost abandonat în versiunea 0.17.

- o nouă analiză

```
MechanicalAnalysis.makeMechanicalAnalysis( name )

```

- adaugă un obiect la analiză

```
App.ActiveDocument.MechanicalAnalysis.Member = App.ActiveDocument.MechanicalAnalysis.Member + [ (object) ]

```

- suprimă un obiect din analiză

```
member = App.ActiveDocument.MechanicalAnalysis.Member
member.remove( documentobject )
 App.ActiveDocument.MechanicalAnalysis.Member = member

```

Exempluː

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

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Analysis/ro&oldid=1568786>"
