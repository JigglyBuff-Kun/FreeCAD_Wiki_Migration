---
title: Visualizza Piano di taglio
---

|                                                                        |
| ---------------------------------------------------------------------- |
| Piano di taglio                                                        |
| Posizione nel menu                                                     |
| Visualizza → Piano di taglio                                           |
| Ambiente                                                               |
| Tutti                                                                  |
| Avvio veloce                                                           |
| _Nessuno_                                                              |
| Introdotto nella versione                                              |
| -                                                                      |
| Vedere anche                                                           |
| [Taglio sezione persistente](/Part_SectionCut/it "Part SectionCut/it") |
|                                                                        |

## Descrizione

Il comando **Piano di taglio** nasconde temporaneamente oggetti e parti di oggetti su un lato di un massimo di tre piani virtuali nella [Vista 3D](/3D_view/it "3D view/it") attiva.

![](/images/Std_ToggleClipPlane_example.png)

Un oggetto cavo ritagliato

![](/images/Std_ToggleClipPlane_Dialog.png)

La finestra dialogo delle attività di ritaglio

## Utilizzo

1. Selezionare l'opzione **Visualizza → ![](/images/Std_ToggleClipPlane.svg) Piano di taglio** dal menu.
2. Si apre la finestra di dialogo **Ritaglio**.
3. Effettuare una delle seguenti operazioni:
   - Seleziona una o più caselle di controllo da **Ritaglio X** a **Ritaglio Z**.
     - Facoltativamente modificare le distanze di offset.
     - Facoltativamente, modificare la/le distanza/e di offset.
     - Facoltativamente, premere il/i pulsante/i Flip per cambiare il lato del piano di taglio su cui sono nascosti gli oggetti.
   - Selezionare la casella di controllo ![](/images/CheckBoxTrue.svg) Ritaglio in direzione personalizzata.
     - Facoltativamente, modificare la distanza di offset.
     - Effettuare una delle seguenti operazioni:
       - Premere il pulsante Visualizza per utilizzare la direzione della vista corrente.
       - Seleziona la casella di controllo **Orienta in direzione della vista** per una direzione che si adatti dinamicamente a visualizzare le modifiche.
       - Specificare la direzione inserendo le coordinate X, Y e Z di un vettore normale.
4. Facoltativamente, modificare la vista per ispezionare il modello.
5. Premere il pulsante Chiudi per chiudere il pannello delle attività e terminare il comando.

## Note

- Per distinguere chiaramente l'interno di oggetti parzialmente tagliati, cambiare la loro proprietà Vista**Lighting** in `One side`. Il colore del lato interno delle loro facce dipenderà quindi dalle impostazioni di retroilluminazione: **Modifica → Preferenze... → Visualizzazione → Vista 3D → Colore retroilluminazione - Intensità**. Vedi [Editor delle preferenze](/Preferences_Editor/it#Vista_3D "Preferences Editor/it").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ToggleClipPlane/it&oldid=1451543>"
