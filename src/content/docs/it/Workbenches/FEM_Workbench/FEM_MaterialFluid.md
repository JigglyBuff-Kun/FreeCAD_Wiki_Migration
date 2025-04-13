---
title: FEM Materiale per fluido
---

|                                                    |
| -------------------------------------------------- |
| FEM Materiale per fluido                           |
| Posizione nel menu                                 |
| Modello → Materiali → Materiale per fluido         |
| Ambiente                                           |
| [FEM](/FEM_Workbench/it "FEM Workbench/it")        |
| Avvio veloce                                       |
| _Nessuno_                                          |
| Introdotto nella versione                          |
| -                                                  |
| Vedere anche                                       |
| [FEM tutorial](/FEM_tutorial/it "FEM tutorial/it") |
|                                                    |

## Description

## Descrizione

Aggiunge le proprietà del fluido ad una parte.

![](/images/FEMMaterialFluidProperties.png)

The FEM material task panel

## Utilizzo

- Cliccare su ![](/images/Fem-material-fluid.svg) o scegliere **Modello → Materiali → ![](/images/Fem-material-fluid.svg) Materiale per fluido** dal menu.
- Fai doppio clic sull'oggetto ![](/images/Fem-material-fluid.svg) Materiale per fluido creato

![](/images/FEMMaterialFluidProperties.png)

- - Selezionare un tipo di fluido. Per la fluidodinamica computazionale (CFD), aria o acqua sono delle opzioni tipiche.
  - A condizione di applicare il fluido all'intero oggetto, non selezionare alcuna entità geometrica (lasciare vuoto l'elenco di riferimento). Il fluido verrà applicato all'intero modello. Altrimenti assegnare il fluido a particolari domini del modello manualmente selezionandone alcuni per ogni materiale inserito, in questo caso, non lasciare alcun dominio del modello senza fluido assegnato.
  - È possibile regolare le proprietà del fluido come densità, viscosità cinematica, conduttività termica, ecc. Alcuni fluidi chiave sono già assegnati nell'elenco e non necessitano di alcuna regolazione.
  - Se si apportano delle modifiche, si può salvare il materiale personalizzato.
- Cliccare su Chiudi per chiudere la finestra di dialogo e creare l'oggetto ![](/images/Fem-material-fluid.svg) Materiale per fluido.

## Notes

- To edit an existing MaterialFluid object: Double-click it in the [Tree view](/Tree_view "Tree view").

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialFluid/it&oldid=1571096>"
