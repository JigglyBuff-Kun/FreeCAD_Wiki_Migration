---
title: Arch Nido
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                           |
| --------------------------------------------------------------------------------------------------------- |
| Nido                                                                                                      |
| Posizione nel menu                                                                                        |
| Arch → Strumenti pannello → Nido                                                                          |
| Ambiente                                                                                                  |
| [Arch](/Arch_Workbench/it "Arch Workbench/it")                                                            |
| Avvio veloce                                                                                              |
| _Nessuno_                                                                                                 |
| Introdotto nella versione                                                                                 |
| -                                                                                                         |
| Vedere anche                                                                                              |
| [Pannello](/Arch_Panel/it "Arch Panel/it"), [Foglio pannello](/Arch_Panel_Sheet/it "Arch Panel Sheet/it") |
|                                                                                                           |

## Descrizione

Lo strumento ![](/images/Arch_Nest.svg) Nido consente di selezionare una forma piatta destinata ad essere un contenitore e una serie di altre forme piatte da organizzare all'interno dello spazio definito dalla forma del contenitore. Tipicamente questo è necessario per le operazioni CNC, in cui si desidera tagliare una serie di pezzi da un pannello di base e si devono organizzare tali pezzi nel modo più compatto possibile in modo che occupino meno spazio sul pannello.

L'algoritmo sottostante allo strumento Nido è in continua evoluzione e al momento non è completamente ottimizzato. In futuro le prestazioni di questo strumento dovrebbero migliorare molto.

![](/images/Arch_Nest_example.jpg)

_L'immagine sopra mostra una serie di forme prima e dopo l'operazione di annidamento._

## Utilizzo

1. Premere il pulsante ![](/images/Arch_Nest.svg) Nido.
2. Selezionare un oggetto destinato ad essere il contenitore. Questo oggetto deve essere piatto e, al momento, rettangolare.
3. Cliccare sul pulsante Usa selezionata per usare l'oggetto come contenitore.
4. Selezionare una serie di altri oggetti piatti che desidera posizionare all'interno del contenitore. Questi oggetti devono essere tutti piatti e nello stesso piano del contenitore.
5. Regolare le opzioni desiderate.
6. Avviare il processo di calcolo.
7. Alla fine del calcolo, fare clic sul pulsante Anteprima per creare un'anteprima temporanea del risultato.
8. Se si desidera applicare il risultato (spostare e ruotare effettivamente le forme nella posizione), fare clic su OK.

![](/images/Arch_Nest_panel.jpg)

Il pannello Azioni per lo strumento Nido

## Note

- Tutti gli oggetti devono avere una faccia
- Al momento lo strumento funziona solo con oggetti piatti che hanno tutti lo stesso orientamento.
- Al momento, il contenitore deve essere rettangolare.
- Al momento, il margine o la spaziatura tra i pezzi non sono ancora implementati
- Se ci sono tanti oggetti il calcolo può richiedere molto tempo. Questo sarà ottimizzato in futuro

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Nest/it&oldid=1435525>"
