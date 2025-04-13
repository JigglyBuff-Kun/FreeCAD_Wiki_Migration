---
title: Mesh Decimazione
---

|                                                |
| ---------------------------------------------- |
| Decimazione                                    |
| Posizione nel menu                             |
| Mesh → Decimazione...                          |
| Ambiente                                       |
| [Mesh](/Mesh_Workbench/it "Mesh Workbench/it") |
| Avvio veloce                                   |
| _Nessuno_                                      |
| Introdotto nella versione                      |
| 0.19                                           |
| Vedere anche                                   |
| _Nessuno_                                      |
|                                                |

## Descrizione

Il comando **Decimazione** riduce il numero di facce negli oggetti mesh.

## Utilizzo

1. Selezionare uno o più oggetti mesh.
2. Esistono diversi modi per invocare il comando:
   - Premere il bottone ![](/images/Mesh_Decimating.svg) Decimazione....
   - Selezionare l'opzione **Mesh → ![](/images/Mesh_Decimating.svg) Decimazione...** dal menu.
3. Si apre il pannello delle azioni **Decimazione**.
4. Specificare la **Riduzione**:
   - Se è stato selezionato un solo oggetto mesh e si sceglie l'opzione **Valore assoluto**:
     - Spostare il cursore o immettere un numero per specificare un numero assoluto di facce.
   - Negli altri casi:
     - Spostare il cursore o immettere un numero per specificare una percentuale di facce.
     - Specificare la **tolleranza**. Il parametro della tolleranza nel processo di semplificazione della mesh agisce come un'impostazione di controllo della qualità. Si consideri di cercare di semplificare una scultura dettagliata in una forma più ruvida senza perdere troppe delle sue caratteristiche importanti. Impostando una tolleranza più alta, si consentono cambiamenti più grandi e una maggiore semplificazione, e di conseguenza una forma più spigolosa. Una tolleranza inferiore comporterà che il processo di semplificazione sarà più attento e farà solo piccole modifiche, mantenendo la forma più vicina all'originale. Se la tolleranza è impostata a zero, il processo semplifica la forma il più possibile all'interno delle sue regole, cercando un equilibrio tra il ridurre la complessità e il mantenere riconoscibile la forma originale.
5. Premere il pulsante OK per terminare il comando.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Decimating/it&oldid=1549988>"
