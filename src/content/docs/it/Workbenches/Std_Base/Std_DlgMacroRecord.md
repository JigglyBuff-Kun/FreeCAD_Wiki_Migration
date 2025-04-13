---
title: Macroː Registra una macro
---
|  |
| --- |
| Registra una macro |
| Posizione nel menu |
| Macro → Registra una macro ... |
| Ambiente |
| Tutti |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| - |
| Vedere anche |
| [Interrompi la registrazione](/Std_MacroStopRecord/it "Std MacroStopRecord/it") |
|  |

## Descrizione

Il comando **Registra una macro** avvia una sessione di registrazione della [macro](/Macros/it "Macros/it") durante la quale le azioni dell'utente vengono memorizzate in una macro di FreeCAD, un file con estensione .FCMacro. Una macro può essere successivamente riprodotta, eseguita, per ripetere le azioni registrate.

![](/images/Std_DlgMacroRecord_dialog.png)

La finestra di dialogo Registrazione macro

## Utilizzo

1. Esistono diversi modi per invocare il comando:
   * Premere il pulsante ![](/images/Std_DlgMacroRecord.svg) Registra una macro....
   * Selezionare l'opzione **Macro → ![](/images/Std_DlgMacroRecord.svg) Registra una macro...** dal menu.
2. Si apre la finestra di dialogo **Registra macro**.
3. Immettere un nome per la macro nella casella di inserimento **Nome macro**.
4. Opzionalmente cambiare il **Percorso macro** premendo il pulsante ....
5. Il pulsante Ferma non funziona in questo momento.
6. Premere il pulsante Registra per chiudere la finestra di dialogo e avviare la sessione di registrazione.
7. L'immagine del pulsante del comando cambia in ![](/images/Std_MacroStopRecord.svg) e il testo del menu cambia in **Interrompi registrazione macro**.
8. Eseguire le azioni che si desidere registrare.
9. Per terminare la sessione di registrazione, eseguire una delle seguenti operazioni:
   * Premere il pulsante ![](/images/Std_MacroStopRecord.svg) Interrompi la registrazione.
   * Seleziona l'opzione **Macro → ![](/images/Std_MacroStopRecord.svg) Interrompi la registrazione** dal menu.

## Opzioni

* Quando viene visualizzata la finestra di dialogo Registra macro: premere Esc o il pulsante Chiudi per interrompere il comando.

## Note

* Per eseguire la macro registrata utilizzare il comando [Esegui la macro](/Std_DlgMacroExecute/it "Std DlgMacroExecute/it").
* Per ulteriori informazioni sulle macro, vedere la pagina [Macro](/Macros/it "Macros/it").

## Preferenze

Vedere anche: [Editor delle Preferenze](/Preferences_Editor/it "Preferences Editor/it").

* Il percorso della macro può essere modificato anche nelle preferenze: **Modifica → Preferenze... → Python → Macro → Percorso macro**.
* Nella maggior parte dei casi non è consigliabile registrare azioni che non modificano il modello: in **Modifica → Preferenze... → Python → Macro → Comandi GUI** eseguire una delle seguenti operazioni:
  + Per escludere queste azioni, deselezionare la casella di controllo **Registra comandi GUI**.
  + Per includerli solo come commenti selezionare entrambe le caselle di controllo **Registra comandi GUI** e **Registra come commento**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_DlgMacroRecord/it&oldid=1457695>"