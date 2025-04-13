---
title: FEM Vincolo contatto
---

|                                                       |
| ----------------------------------------------------- |
| Vincolo contatto                                      |
| Posizione nel menu                                    |
| Modello → Vincoli meccanici → Vincolo contatto        |
| Ambiente                                              |
| [FEM](/FEM_Workbench/it "FEM Workbench/it")           |
| Avvio veloce                                          |
| _Nessuno_                                             |
| Introdotto nella versione                             |
| -                                                     |
| Vedere anche                                          |
| [Tutorial di FEM](/FEM_tutorial/it "FEM tutorial/it") |
|                                                       |

## Descrizione

Crea un vincolo FEM di contatto tra 2 superfici.

![](/images/FEM_Contact_dialog.PNG)

The FEM contact task panel

## Utilizzo

1. Cliccare su ![](/images/FEM_ConstraintContact.png) o usare Modello → **Vincoli meccanici** → ![](/images/FEM_ConstraintContact.png) Vincolo contatto dal menu a discesa.
2. Selezionare la faccia principale (master).
3. Selezionare la faccia secondaria (slave).
4. Inserire la rigidezza del contatto.
5. Inserire il coefficiente di attrito.

![](/images/FEM_contact_animation.gif)

Contact example - rigid cube pressed against and sliding on a deformable block. Without contact definition, those two parts wouldn't "see" each other.

## Limitazioni

1. Il vincolo contatto può essere applicato solo a due facce.
2. Sviluppo per più contatti contemporaneamente: <https://forum.freecadweb.org/viewtopic.php?f=18&t=15699&start=130#p303275>

## Notes

### Tips for modeling

## Note

### Alcuni consigli su come modellare

- Da <https://forum.freecadweb.org/viewtopic.php?f=18&p=340874#p340494>
- Meglio utilizzare elementi lineari altrimenti i calcoli richiedono molto tempo
- assegnazione master/slave:
  - La superfici più grande dovrebbe fungere da superficie principale.
  - Se le superfici hanno dimensioni simili, la superficie del corpo più rigido dovrebbe fungere da superficie principale.
  - Se le superfici hanno dimensioni e rigidità simili, la superficie con la maglia più grossolana dovrebbe fungere da superficie principale.

### CalculiX

### CalculiX

1. La rigidezza del contatto dovrebbe essere 10 volte il modulo di Young del materiale per avere un contatto forte. Più alto è il valore di rigidezza di contatto, più è forte il contatto tra le superfici.
2. La faccia secondaria è la faccia che penetra nella faccia principale, e subisce quindi una deformazione maggiore.
3. Il vincolo contatto utilizza la \*CONTACT PAIR card in CalculiX. Il vincolo usa il metodo Face-to-Face penalty e la formulazione del contatto è spiegata in dettaglio in <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node112.html>

- Panoramica per diversi tipi di contatto: <https://forum.freecadweb.org/viewtopic.php?f=18&t=15699&start=90#p188736>
- Ulteriori informazioni interessanti:

  - <https://forum.freecadweb.org/viewtopic.php?f=18&t=23102#p180709> and following posts !!!
  - <https://forum.freecadweb.org/viewtopic.php?f=18&t=20276>
  - <https://forum.freecadweb.org/viewtopic.php?f=18&t=21331>
  - <https://forum.freecadweb.org/viewtopic.php?f=18&t=15699> (initial contact topic)

- Un esempio molto dettagliato di contatto CalculiX. ([link](http://dip28p.web.fc2.com/calculix/netgen2calculix/index.html))

- Un esempio molto interessante nel subforum tedesco. ([link](https://forum.freecadweb.org/viewtopic.php?f=13&t=39663&start=10#p337254))

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintContact/it&oldid=1559807>"
