---
title: OpenSCAD Affina la forma
---

|                                                            |
| ---------------------------------------------------------- |
| Affina forma                                               |
| Posizione nel menu                                         |
| OpenSCAD → Affina forma                                    |
| Ambiente                                                   |
| [OpenSCAD](/OpenSCAD_Workbench/it "OpenSCAD Workbench/it") |
| Avvio veloce                                               |
| _Nessuno_                                                  |
| Introdotto nella versione                                  |
| -                                                          |
| Vedere anche                                               |
| _Nessuno_                                                  |
|                                                            |

## Description

## Descrizione

Elimina le linee superflue. Dopo un'operazione booleana alcune linee che definiscono le forme precedenti rimangono visibili, questo strumento crea una copia pulita del del risultato.

![](/images/PartRefineShape_it.png)

## Usage

## Utilizzo

1. Selezionare la forma da pulire
2. Avviare lo strumento dal menu OpenSCAD → Refine Shape Feature.

- Viene creato un oggetto figlio e viene nascosto l'oggetto genitore.

## Limitations

## Limitazioni

- L'algoritmo di affinamento funziona solo sui gusci. Quindi itera sui gusci della forma di ingresso e poi per ogni guscio (shell) ne crea uno nuovo con le facce unite, dove è possibile. Questo significa che se la forma di ingresso è solo una faccia, contorno, bordo o vertice l'algoritmo non fa nulla.
- Al contrario della funzione [Refine Shape di Part](/Part_RefineShape/it "Part RefineShape/it"), questa funzione si aggiorna quando le forme sottostanti vengono modificate

## Notes

## Note

- La funzione non modifica la forma esistente, ma restituisce una nuova forma.
- la funzione viene normalmente utilizzata come ultimo passo nella cronologia della modellazione
- la funzione può aiutare a ottenere raccordi difficile da produrre
- nella stampa 3D la funzione ha lo scopo di evitare la stampa di bordi indesiderati

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_RefineShapeFeature/it&oldid=1216214>"
