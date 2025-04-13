---
title: OpenSCAD Minkowski
---

|                                                            |
| ---------------------------------------------------------- |
| Minkowski                                                  |
| Posizione nel menu                                         |
| OpenSCAD → Minkowski‏‎                                     |
| Ambiente                                                   |
| [OpenSCAD](/OpenSCAD_Workbench/it "OpenSCAD Workbench/it") |
| Avvio veloce                                               |
| _Nessuno_                                                  |
| Introdotto nella versione                                  |
| -                                                          |
| Vedere anche                                               |
| _Nessuno_                                                  |
|                                                            |

## Descrizione

Consultare: <http://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations> oppure <http://doc.cgal.org/latest/Minkowski_sum_3/index.html>

Esegue la somma Minkowski di poliedri 3D

**Definizione Matematica:**

Per ottenere una somma Minkowski aggiungere ogni elemento del sottoinsieme A ad ogni elemento del sottoinsieme B.

**Definizione Geometrica:**

Lo sweep dell'elemento A lungo tutti i bordi dell'elemento B. La somma Minkowski è lo spazio che risulta occupato da entrambi gli elementi.

![Un esempio di somma Minkowski](/images/Minkowski_example.jpg)

Esempio di somma Minkowski applicata tra un cilindro e un cubo.

Notare che l'altezza della somma Minkowski è l'altezza del cilindro più l'altezza del cubo.

### Mathematical Definition

Add each element of subset A to each element of subset B to get Minkowski sum.

### Geometrical Definition

Sweep element A along all boundaries of element B. Resulting space which is occupied by both elements is Minkowski sum.

![An example of a Minkowski sum](/images/Minkowski_example.jpg)

Example of Minkowski sum applied to cylinder and cube.  
Note: that the height of Minkowski sum is height of cylinder plus height of cube.

## Uso

1. Selezionare le forme nella vista ad albero o nella vista 3D
2. Cliccare su ![](/images/OpenSCAD_Minkowski.png) o scegliere OpenSCAD → ![](/images/OpenSCAD_Minkowski.png) Minkowski nel menu in alto.

## Limitations

## Limitazioni

La funzione richiede che OpenSCAD sia installato e configurato nelle Modifica → Preferenze

## Note

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_Minkowski/it&oldid=1216237>"
