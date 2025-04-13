---
title: FEM Vincolo peso proprio
---

|                                                    |
| -------------------------------------------------- |
| Vincolo peso proprio                               |
| Posizione nel menu                                 |
| Modello → Vincoli meccanici → Vincolo peso proprio |
| Ambiente                                           |
| [FEM](/FEM_Workbench/it "FEM Workbench/it")        |
| Avvio veloce                                       |
| C W                                                |
| Introdotto nella versione                          |
| -                                                  |
| Vedere anche                                       |
| [FEM tutorial](/FEM_tutorial/it "FEM tutorial/it") |
|                                                    |

## Descrizione

Il vincolo peso proprio definisce l'accelerazione di gravità di 9,81 m/s^2 che agisce su tutto il modello nella direzione prescritta.

0.21 and below: The acceleration has a fixed value of 9.81 m/s^2.

## Utilizzo

1. Cliccare su ![](/images/FEM_ConstraintSelfWeight.png), o scegliere Modello → **Vincoli meccanici** → ![](/images/FEM_ConstraintSelfWeight.png) Vincolo peso proprio dal menu principale, o usare i tasti C e poi W.
2. È possibile modificare la direzione della gravità, modificando le coordinate del suo vettore nelle proprietà del nuovo oggetto Vincolo peso proprio.

## Script

**Nuovo oggetto**

```
import ObjectsFem
ObjectsFem.makeConstraintSelfWeight(name)

```

**Aggiungere all'analisi un oggetto di nome Analisi**

```
App.ActiveDocument.Analysis.Member = App.ActiveDocument.Analysis.Member + [(object)]

```

**Esempio**

```
import ObjectsFem
selfweight_obj = ObjectsFem.makeConstraintSelfWeight("MySelfWeightObject")
App.ActiveDocument.Analysis.Member = App.ActiveDocument.Analysis.Member + [selfweight_obj]

```

## Solver CalculiX

### Limitations

## Solver CalculiX

### Limitazioni

- È necessario modificare il file .inp modificare l'accelerazione di gravità.
- Applicare Peso proprio all'elemento impostato Wall significa applicarlo all'intero modello.

### Editing CalculiX input file

### Editare il file di input CalculiX

La costante dell'accelerazione può essere modificata a mano dopo la generazione del file di input CalculiX.

Esempio di righenel file .inp:

```
*DLOAD
Eall,GRAV,9810,0.0,0.0,-1.0

```

dove 9810 è l'accelerazione di gravità in [mm/s^2], e 0,0,-1 è la direzione del vettore.

```
*DLOAD
Eall,GRAV,9810,0.0,0.0,-1.0

```

where 9810 is a gravity acceleration magnitude in [mm/s^2], and 0,0,-1 is the direction vector. The value can be set as a multiple of standard gravity acceleration to simulate loading of e.g. 4g.

## Solver Z88

## Solver Z88

- non implementato nel solver Z88 (Marzo 2017)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintSelfWeight/it&oldid=1357917>"
