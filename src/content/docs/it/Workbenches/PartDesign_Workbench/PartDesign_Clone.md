---
title: PartDesign Crea un clone
---
|  |
| --- |
| Crea un clone |
| Posizione nel menu |
| Part Design → Crea un clone |
| Ambiente |
| [PartDesign](/PartDesign_Workbench/it "PartDesign Workbench/it") |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Draft: Clona](/Draft_Clone/it "Draft Clone/it") |
|  |

## Descrizione

**PartDesign Clone** crea una copia collegata di un oggetto selezionato che seguirà eventuali modifiche future all'oggetto originale (tranne il posizionamento). Ad esempio, un caso d'uso è quando si desidera eseguire una [operazione booleana](/PartDesign_Boolean/it "PartDesign Boolean/it") su un oggetto creato in un altro ambiente. Sono accettati la maggior parte di tipi di oggetti, purché siano solidi singoli. Se si devono clonare più oggetti (ad es. dei Corpi) o un [Contenitore di Part](/Std_Part/it "Std Part/it"), si può usare il [Clone di Draft](/Draft_Clone/it "Draft Clone/it"). Notare che Part Design imposta il posizionamento del clone su zero (sia la traslazione cartesiana che gli orientamenti spaziali), mentre Draft calcola e imposta i valori numerici del posizionamento e dell'orientamento correnti degli oggetti clonati rispetto al contenitore degli oggetti clonati.

![Clone of the inner gear while being translated in 3D space as an independent object](/images/Clone.png)

Clone dell'ingranaggio interno mentre viene traslato nello spazio 3D come oggetto indipendente

## Utilizzo

1. Nell'albero del modello, selezionare l'oggetto da clonare.
2. Premere il pulsante ![](/images/PartDesign_Clone.svg) **Crea un clone**.

## Proprietà

* Dati**Base Feature**: imposta l'oggetto originale su cui si basa il clone. Per sostituirlo, premere il pulsante ... per ottenere l'elenco degli oggetti disponibili.
* Dati**Placement**: definisce l'orientamento e la posizione del Clone nello spazio 3D. Vedere [Posizionamento](/Placement/it "Placement/it").
* Dati**Label**: etichetta data all'oggetto Clone. Modificabile a piacere.

## Limitazioni

* Per un clone di PartDesign può essere usato solo un singolo oggetto.
* Sono supportati solo gli oggetti costituiti da un singolo solido. Quindi, i [composti](/Glossary#Compound "Glossary") come i [Contenitori di Part](/Std_Part/it "Std Part/it"), i [Compound di Part](/Part_Compound/it "Part Compound/it") o le [Serie di Draft](/Draft_OrthoArray/it "Draft OrthoArray/it") non sono supportati.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Clone/it&oldid=1561338>"