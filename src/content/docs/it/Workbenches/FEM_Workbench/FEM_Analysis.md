---
title: Analisi FEM
---
|  |
| --- |
| Analisi FEM |
| Posizione nel menu |
| Modello → Contenitore analisi |
| Ambiente |
| [FEM](/FEM_Workbench/it "FEM Workbench/it") |
| Avvio veloce |
| S A |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Tutorial FEM](/FEM_tutorial/it "FEM tutorial/it") |
|  |

## Descrizione

Analisi FEM può essere visto come il contenitore di tutti gli oggetti di una Analisi agli elementi finiti. È obbligatorio avere un contenitore Analisi che contenga tutti gli oggetti necessari. Per poter eseguire un'analisi meccanica serve almeno uno dei seguenti oggetti:

* [materiale](/FEM_MaterialSolid/it "FEM MaterialSolid/it")
* [vincolo fissaggio](/FEM_ConstraintFixed/it "FEM ConstraintFixed/it")
* [vincolo forza](/FEM_ConstraintForce/it "FEM ConstraintForce/it") oppure  [vincolo pressione](/FEM_ConstraintPressure/it "FEM ConstraintPressure/it")

## Utilizzo

1. Premere il pulsante ![](/images/FEM_Analysis.png) Analisi, oppure i tasti N e A. Viene creata e attivata una nuova Analisi.
2. Nel contenitore Analisi si possono aggiungere o rimuovere gli oggetti con azioni drag and drop.
3. Per aggiungere nuovi oggetti FEM al documento l'analisi deve essere attiva. Fare doppio clic sull'analisi per attivarla.

## Proprietà

* Dati**OutpuDir**: Specifica la directory di lavoro di Analisi

## Script

La maggior parte di questo codice è deprecato nella versione 0.17.

* nuova analisi

```
MechanicalAnalysis.makeMechanicalAnalysis( name )

```

* aggiungere un oggetto all'analisi

```
App.ActiveDocument.MechanicalAnalysis.Member = App.ActiveDocument.MechanicalAnalysis.Member + [ (object) ]

```

* rimuovere un oggetto dall'analisi

```
member = App.ActiveDocument.MechanicalAnalysis.Member
member.remove( documentobject )
 App.ActiveDocument.MechanicalAnalysis.Member = member

```

Esempio:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Analysis/it&oldid=1568790>"