---
title: Strumentiː Misurare
---
|  |
| --- |
| Misurare |
| Posizione nel menu |
| Strumenti → Misurare |
| Ambiente |
| Tutti |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 1.0 |
| Vedere anche |
| [Draft Quotatura](/Draft_Dimension/it "Draft Dimension/it") |
|  |

## Descrizione

Il comando **Misurare** dà accesso al Unified Measurement Facility. Esso ha sostituito alcuni precedenti comandi di misurazione, fornendo una funzionalità di misurazione versatile.

## Utilizzo

1. Opzionalmente preselezionare le entità da misurare.
2. Esistono diversi modi per richiamare il comando:
   * Premere il pulsante ![](/images/Std_Measure.svg) Misurare.
   * Selezionare l'opzione **Strumenti → ![](/images/Std_Measure.svg) Misurare** dal menu.
3. Si apre il pannello delle attività **Misurazione**. Vedere [Opzioni](#Opzioni) per ulteriori informazioni.
4. Se non è stata preselezionata alcuna entità geometrica, eseguire una delle seguenti operazioni:
   * Selezionare le entità geometriche lasciando la *Modalità* su *Auto* in modo che la modalità venga determinata automaticamente in base alla selezione.
   * Scegliere una *Modalità* diversa da *Auto* e poi seleziona le entità geometriche (cliccando nuovamente su di esse saranno deselezionate):
     + *Distanza* - la distanza più breve tra le entità selezionate, se vengono selezionati bordi circolari viene misurata la distanza tra i centri dei cerchi,
     + *Distanza libera* - distanza tra due punti liberamente selezionati (appartenenti a entità diverse - bordi, facce),
     + *Angolo* - angolo tra le entità selezionate,
     + *Lunghezza* - lunghezza del bordo selezionato,
     + *Posizione* - coordinate del vertice selezionato,
     + *Area* - area del volto selezionato,
     + *Raggio* - raggio del bordo circolare selezionato,
     + *Centro di massa* - CdM del bordo, faccia o solido selezionato (solo se preselezionato nell'albero).
5. Il risultato della misurazione verrà mostrato nel campo *Risultato* e su un'etichetta visualizzata nella [Vista 3D](/3D_view/it "3D view/it"). Tale etichetta includerà anche un'icona che indica il tipo di misurazione. Le etichette possono essere personalizzate nell'[Editor Preferenze](/Preferences_Editor/it "Preferences Editor/it"). Possono essere spostate nella vista 3D trascinandole con un cursore.
6. Premere il pulsante Reset per eliminare la misurazione o il pulsante Salva per conservarla. Le misurazioni salvate vengono inserite in un [gruppo](/Std_Group/it "Std Group/it") di misurazioni nella [Vista ad albero](/Tree_view/it "Tree view/it").
7. Premere Esc o il pulsante Close per terminare il comando.

## Opzioni

* [disponibile dalla versione 1.1](/Release_notes_1.1/it "Release notes 1.1/it") Premere il pulsante ![](/images/Preferences-system.svg) ![](/images/Toolbar_flyout_arrow.svg) per modificare le impostazioni:
  + *Salvataggio automatico* - se selezionato, l'ultima misurazione viene salvata quando si avvia una nuova misurazione (tenendo premuto Shift è possibile disattivare temporaneamente questo comportamento),
  + *Selezione additiva* - se selezionato, cliccando sulle entità geometriche successive le aggiunge come selezioni per la stessa misura, altrimenti è necessario premere Ctrl per farlo.
* Per le modalità *Distanza* e *Distanza libera* viene visualizzata la casella di controllo **Mostra Delta**. Se questa casella di controllo è selezionata, la proprietà Vista**Mostra Delta** della misurazione è impostata su `true` e 3 misurazioni proiettate aggiuntive vengono mostrate nella [Vista 3D](/3D_view/it "3D view/it").

## Proprietà

### Dati

Measurement

* Dati**Element1** (`LinkSub`): Primo elemento della misurazione.
* Dati**Element2** (`LinkSub`): Secondo elemento della misurazione.
* Dati**Distance** (`Distance`): Distanza tra i due elementi.
* Dati**Distance X** (`Distance`): Distanza nella direzione X (solo per misurazioni *Distanza* e *Distanza libera*).
* Dati**Distance Y** (`Distance`): Distanza nella direzione Y (stessa).
* Dati**Distance Z** (`Distance`): Distanza nella direzione Z (stessa).
* Dati (Hidden)**Position1** (`Vector`): Posizione del primo punto misurato (sola lettura).
* Dati (Hidden)**Position2** (`Vector`): Posizione del secondo punto misurato (sola lettura).

### Vista

Appearance

* Vista**Font Size** (`Integer`): Definisce la dimensione del carattere per l'etichetta della dimensione salvata.
* Vista**Line Color** (`Color`): Definisce il colore delle linee di quota visualizzate nella vista 3D.
* Vista**Show Delta** (`Bool`): Se `true`, le misurazioni della distanza proiettata vengono visualizzate nella vista 3D (solo per le misurazioni *Distanza* e *Distanza libera*).
* Vista**Text Background Color** (`Color`): Definisce il colore di sfondo dell'etichetta della dimensione.
* Vista**Text Color** (`Color`): Definisce il colore del testo e del simbolo dell'etichetta della quota.

## Note

* Questo comando è il risultato di un [Progetto GSoC 2023](/Unified_Measurement_Facility "Unified Measurement Facility").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Measure/it&oldid=1530779>"