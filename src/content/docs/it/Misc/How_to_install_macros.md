---
title: Come installare le macro
---

|                                         |
| --------------------------------------- |
| Tutorial                                |
| Argomento                               |
| Programmazione e Configurazione         |
| Livello di difficoltà                   |
| Medio                                   |
| Tempo di esecuzione                     |
| 15 minuti                               |
| Autori                                  |
| [Mario52](/User:Mario52 "User:Mario52") |
| Versione di FreeCAD                     |
| Tutte                                   |
| Files di esempio                        |
| _Nessuno_                               |
| Vedere anche                            |
| _Nessuno_                               |
|                                         |

## Descrizione

Dalla v0.17 è facile aggiungere le macro usando [Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it"). Un utente normale non deve fare altro che utilizzare questo strumento. Continuare a leggere per ulteriori informazioni sull'installazione delle [macro](/Macros/it "Macros/it").

Le macro sono sequenze di comandi che vengono utilizzati per eseguire un'operazione complessa. Le macro sono degli script [Python](/Python/it "Python/it"), il che significa che sono file di testo che possono essere scritti e modificati con un editor di testo.

Sebbene gli script Python abbiano normalmente l'estensione `.py`, le macro di FreeCAD dovrebbero avere l'estensione `.FCMacro`. Una raccolta di macro scritte da utenti esperti si trova nella pagina [Raccolta di macro](/Macros_recipes/it "Macros recipes/it").

Vedere la pagina [Introduzione a Python](/Introduction_to_Python/it "Introduction to Python/it") per conoscere il linguaggio di programmazione Python e poi le pagine [Guida agli script Python](/Python_scripting_tutorial/it "Python scripting tutorial/it") e [Script di base per FreeCAD](/FreeCAD_Scripting_Basics/it "FreeCAD Scripting Basics/it") per imparare a scrivere delle macro.

Questo è un video su come [installare le macro in FreeCAD in Ubuntu](https://wiki.opensourceecology.org/wiki/Installing_Macros_in_FreeCAD).

## Il menu Macro e i suoi strumenti

### Barra degli strumenti

- ![](/images/Std_DlgMacroRecord.svg) [Registra una macro...](/Std_DlgMacroRecord/it "Std DlgMacroRecord/it")
- ![](/images/Std_MacroStopRecord.svg) [Interrompi la registrazione](/Std_MacroStopRecord/it "Std MacroStopRecord/it")
- ![](/images/Std_DlgMacroExecute.svg) [Macro...](/Std_DlgMacroExecute/it "Std DlgMacroExecute/it")
- ![](/images/Std_DlgMacroExecuteDirect.svg) [Esegui la macro](/Std_DlgMacroExecuteDirect/it "Std DlgMacroExecuteDirect/it")

### Menu

Oltre agli strumenti nella barra degli strumenti, nel menu **Macro** sono disponibili anche le seguenti funzioni.

- [Collega al debugger remoto](/Std_MacroAttachDebugger/it "Std MacroAttachDebugger/it")

* ![](/images/Std_MacroStartDebug.svg) [Avvia il debug](/Std_MacroStartDebug/it "Std MacroStartDebug/it")
* ![](/images/Std_MacroStopDebug.svg) [Interrompi il debug](/Std_MacroStopDebug/it "Std MacroStopDebug/it")

- [Passo succesivo](/Std_MacroStepOver/it "Std MacroStepOver/it")
- [Un passo](/Std_MacroStepInto/it "Std MacroStepInto/it")
- [Attiva/Disattiva punto di interruzione](/Std_ToggleBreakpoint/it "Std ToggleBreakpoint/it")

## Directory delle macro

Le macro vengono create in una cartella specifica nella directory di FreeCAD dell'utente. Questa directory può essere configurata nel dialogo [Esegui macro](/Std_DlgMacroExecute/it "Std DlgMacroExecute/it"), o nel [Editor delle preferenze](/Preferences_Editor/it "Preferences Editor/it"), attraverso il menu **Modifica → Preferenze → Python → Macro → Impostazioni di registrazione delle macro**.

Anche le macro scaricate dovrebbero essere collocate in questa directory.

### Directory di default

Le macro possono essere semplicemente copiate in

```
$ROOT_DIR/

```

dove `$ROOT_DIR` è una directory di primo livello ricercata da FreeCAD all'avvio.

La `$ROOT_DIR` può essere una directory di sistema, nel qual caso la macro viene installata per tutti gli utenti.

- Di solito in Linux è `/usr/share/freecad/`
- Di solito in Windows è `C:\Program Files\FreeCAD\`
- Di solito in Mac OSX è `/Applications/FreeCAD/`

La `$ROOT_DIR` può essere la directory di un utente particolare.

- Su Linux di solito è `/home/username/.local/share/FreeCAD/` (0.20 and above) or `/home/username/.FreeCAD/` (0.19 and below).
- Su Windows di solito è `C:\Users\username\AppData\FreeCAD\`
- Su Mac OSX di solito è `/Users/username/Library/Preferences/FreeCAD/`

### Configurazione della directory utente

1. Aprire il menu **Macro → ![](/images/Std_DlgMacroExecute.svg) [Macro...](/Std_DlgMacroExecute/it "Std DlgMacroExecute/it")** per aprire la finestra di dialogo [Esegui la macro](/Std_DlgMacroExecute/it "Std DlgMacroExecute/it").

![](/images/Dxf_Importer_Install_01.png)

Apertura della finestra di dialogo Esegui la macro

2. Impostare l'appropriata `Posizione delle macro utente`.

- Linux: generalmente `/home/username/.local/share/FreeCAD/` (0.20 and above) or `/home/username/.FreeCAD/` (0.19 and below)
- Windows: generalmente `C:\Users\username\AppData\Roaming\FreeCAD\`
- MacOS: generalmente `/Users/username/Library/Preferences/FreeCAD/`

![](/images/Dxf_Importer_Install_02.png)

Impostazione della directory delle macro

3. Passare a quella directory sul proprio computer.

- Linux: incollare l'indirizzo nel file manager, "Nautilus" o altro. Potrebbe essere necessario premere Ctrl + H per rendere visibile la directory nascosta `.FreeCAD/`.
- Windows: incollare l'indirizzo nel "File explorer" e confermare.
- MacOS: individuare la cartella in "Finder" o incollare l'indirizzo in un "File explorer"; ricordare il prefisso `file:///` nel "File explorer" per un file su disco.

![](/images/Dxf_Importer_Install_03.png)

Accesso alla directory delle macro nel sistema operativo

4. Aggiungere il file macro a questa directory.

- Linux: lasciare aperto il file manager e aggiungere il segnalibro alla posizione per un accesso più rapido.
- Windows: lasciare aperto il file explorer.
- MacOS: lasciare una finestra "Finder" aperta, o aggiungere un segnalibro alla posizione nel "File explorer", oppure impostare un "Alias" per puntare ad esso, o trascinare la cartella nella "SideBar" del "Finder" così è disponibile per altri programmi di editor di testo.

![](/images/Dxf_Importer_Install_04.png)

Directory delle Macro

## Installare le macro

### Metodo automatico

A partire da FreeCAD 0.17, utilizzare [Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it") in **Strumenti → Addon manager** per installare una macro che è stata inclusa nel repository [FreeCAD-macros](https://github.com/FreeCAD/FreeCAD-macros).

Nelle versioni precedenti di FreeCAD è possibile utilizzare due metodi automatici per installare macro e altri componenti aggiuntivi:

- [addons_installer.FCMacro](https://github.com/FreeCAD/FreeCAD-addons): è essa stessa una macro, è il precursore del Gestore Addon ed è ospitato nel repository [FreeCAD-addons](https://github.com/FreeCAD/FreeCAD-addons). Non è necessario utilizzare questo strumento nelle recenti versioni di FreeCAD.
- [freecad-pluginloader](https://github.com/microelly2/freecad-pluginloader): è anche una macro, potrebbe essere usata per installare nuovi componenti in FreeCAD. Non è più sviluppato.

Il metodo consigliato per installare i componenti aggiuntivi, ovvero gli [ambienti esterni](/External_workbenches/it "External workbenches/it") e le macro, è [Addon Manager](/Std_AddonMgr/it "Std AddonMgr/it"). Tuttavia, è ancora possibile aggiungere delle macro al proprio sistema con i metodi manuali descritti nelle seguenti sezioni; questo è utile per sviluppare e testare il proprio codice.

### Metodo manuale 1. Copiare il codice nell'editor delle macro

Per delle macro che sono relativamente piccole, 300 righe o meno, il codice può essere copiato e incollato direttamente nell'editor macro di FreeCAD.

Noi useremo come esempio la macro ![](/images/Part_Prism_Apothem.svg) [Prisma da apotema](/Macro_Apothem_Based_Prism_GUI/it "Macro Apothem Based Prism GUI/it").

1. Andare alla pagina wiki della macro, che dovrebbe essere elencata in [Raccolta di macro](/Macros_recipes/it "Macros recipes/it").

Se ci sono delle icone, per scaricarle, posizionare il mouse sopra l'icona, fare clic sul pulsante destro del mouse e cliccare su `Salva immagine con nome ...`. Le icone devono essere inserite nella directory delle macro e una di esse può essere usata come icona scorciatoia nella [barra degli strumenti personalizzata](/Customize_Toolbars/it "Customize Toolbars/it"). L'icona di deafault è ![](/images/Text-x-python.png).

![](/images/Macro_Install_HowTo_28.png)

Download dell'icona dalla pagina delle macro

2. Nella pagina delle macro, selezionare il codice all'interno della sezione _Script_ o _Macro_, e copiarlo.

3. In FreeCAD, aprire il menu **Macro → ![](/images/Std_DlgMacroExecute.svg) [Macro...](/Std_DlgMacroExecute/it "Std DlgMacroExecute/it")** per aprire la finestra di dialogo [Esegui la macro](/Std_DlgMacroExecute/it "Std DlgMacroExecute/it").

![](/images/Dxf_Importer_Install_01.png)

Apertura della finestra di dialogo Esegui la macro

4. Cliccare Crea.

![](/images/Macro_Install_HowTo_17.png)

Creare una nuova macro

5. Inserire il nome della macro, in questo caso `Macro_Apothem_Based_Prism_GUI`, e premere OK.

![](/images/Macro_Install_HowTo_18.png)

Inserimento del nome della macro

6. L'editor delle macro si apre e mostra il percorso completo della nuova macro.

![](/images/Macro_Install_HowTo_19.png)

L'editor delle macro

7. Incollare il codice nella finestra dell'editor delle macro e fare clic sulla croce per chiudere la finestra.

![](/images/Macro_Install_HowTo_20.png)

Chiusura dell'editor di macro

8. Viene visualizzata una finestra che richiede una conferma per salvare il codice; cliccare su Yes. Si può anche usare Ctrl+S per salvare il file.

Riavviare FreeCAD per registrare correttamente la nuova macro.

![Finestra di avviso che richiede la conferma di salvataggio del codice](/images/Macro_Install_HowTo_27.png)

Finestra di avviso che richiede la conferma di salvataggio del codice

9. Aprire di nuovo il menu, **Macro → ![](/images/Std_DlgMacroExecute.svg) [Macro...](/Std_DlgMacroExecute/it "Std DlgMacroExecute/it")**, selezionare la nuova macro e premere Esegui.

![](/images/Macro_Install_HowTo_21.png)

Selezionare la macro da eseguire

10. La macro si avvia, compilare i campi dei valori e fare clic sul pulsante OK

![](/images/Macro_Install_HowTo_22.png)

La macro in azione; inserire le informazioni e alla fine premere OK

11. Questa macro dovrebbe restituire un errore se non è attivo nessun documento; altre macro aprono un nuovo documento se non ne esiste nessuno.

Creare un nuovo documento con **File → ![](/images/Std_New.svg) [Nuovo](/Std_New/it "Std New/it")**, e quindi ripetere i passaggi precedenti per eseguire la macro.

![](/images/Macro_Install_HowTo_23.png)

La macro restituisce un errore se nessun documento è attivo

12. Quando è disponibile un documento attivo, la macro viene eseguita e crea un oggetto.

![](/images/Macro_Install_HowTo_24.png)

Oggetto creato dalla macro

13. È possibile aprire nuovamente la macro nell'editor per eseguirla o modificarla. Andare in **Macro → ![](/images/Std_DlgMacroExecute.svg) [Macro...](/Std_DlgMacroExecute "Std DlgMacroExecute")**, selezionare la macro e premere Modifica.

![](/images/Macro_Install_HowTo_25.png)

Apertura della macro nell'editor

14. Ora è possibile eseguire la macro con **Macro → ![](/images/Std_DlgMacroExecuteDirect.svg) [Esegui la macro](/Std_DlgMacroExecuteDirect/it "Std DlgMacroExecuteDirect/it")**, o facendo clic sul pulsante ![](/images/Std_DlgMacroExecuteDirect.svg) [Esegui](/Std_DlgMacroExecuteDirect/it "Std DlgMacroExecuteDirect/it") della barra degli strumenti.

![](/images/Macro_Install_HowTo_26.png)

Esecuzione della macro caricata nell'editor

### Metodo manuale 2. Aggiungere una macro compressa in un file .zip

Alcune macro sono troppo grandi per cui è scomodo copiarle e incollarle nell'editor delle macro o non possono essere ospitate nel wiki. In questo caso, il codice può essere ospitato altrove, in un repository Github o nel[forum di FreeCAD](https://forum.freecadweb.org/). Il codice può anche essere compresso in un file `.zip`, tarball `.tar.xz` o altro tipo di archivio se contiene più file. Se il codice viene distribuito in questo modo, l'archivio deve essere estratto e i file inseriti nella directory delle macro.

Come esempio useremo la ![](/images/Text-x-python.png) [Macro screw maker](/Macro_screw_maker1_2 "Macro screw maker1 2").

1. Scaricare il codice compresso dal forum, [Screw Maker](http://forum.freecadweb.org/viewtopic.php?f=22&t=6558#p52887).

È necessario utilizzare un decompressore per ottenere i file interni.

- Per Windows si può usare un'applicazione come [7-zip](http://www.7-zip.org/) o [L-Zarc](http://www.kanmandet.dk/?p=37) o [quickzip](http://www.quickzip.org/quickzip51.html).
- Per Linux è possibile utilizzare un comando dal terminale

```
unzip your_file.zip -d your_directory

```

2. Scaricare l'archivio compresso con il codice della macro in una cartella locale.

![](/images/Macro_Install_HowTo_01.png)

Download dell'archivio compresso in una directory locale

3. Decomprimere il file all'interno della cartella.

![](/images/Macro_Install_HowTo_02.png)

Decomprimere il file nella cartella

4. Il decompressore ha finito il suo lavoro e ha creato una nuova cartella contenente il file scompattato

![](/images/Macro_Install_HowTo_03.png)

Nuova directory creata dopo aver decompresso l'archivio

5. Entrare nella nuova directory e copiare o tagliare il file della macro.

![](/images/Macro_Install_HowTo_04.png)

Immettere la directory appena creata con il file macro decompresso

6. Andare alla directory macro e incollare lì il file.

![](/images/Macro_Install_HowTo_05.png)

Posizionamento del file macro nella directory macro

7. In FreeCAD, aprire il menu **Macro → ![](/images/Std_DlgMacroExecute.svg) [Macro...](/Std_DlgMacroExecute/it "Std DlgMacroExecute/it")** per aprire il dialogo [Esegui la macro](/Std_DlgMacroExecute/it "Std DlgMacroExecute/it").

![](/images/Macro_Install_HowTo_06.png)

Apertura della finestra di dialogo Esegui macro

8. Selezionare la nuova macro e premere Esegui.

![](/images/Macro_Install_HowTo_07.png)

Selezione della macro per eseguirla

9. La macro ora viene eseguita. Selezionare le opzioni desiderate e fare clic suCrea.

![](/images/Macro_Install_HowTo_08.png)

La macro in azione; selezionare le opzioni desiderate e premere Crea quando si è pronti

![](/images/Macro_Install_HowTo_30.png)

Oggetto creato dalla macro

## Eseguire una macro nella riga di comando

Riga di comando per eseguire una macro (.FCMacro o .py)

in Windows

```
"C:\Program Files\FreeCAD\bin\FreeCAD.exe" "C:\Users\userName\AppData\Roaming\FreeCAD\Mod\WorkFeature\start_WF.FCMacro"

```

in Linux

```
todo

```

## Errori nelle macro

### Errori di indentazione

Lo spazio bianco all'inizio delle righe (indentazione) nel linguaggio di programmazione [Python](/Python/it "Python/it") è molto importante e fa parte integrante del codice. Uno spazio inappropriato può causare la mancata esecuzione del codice o la presenza di errori.

Questa sezione descrive alcuni errori che possono verificarsi durante il copia e incolla o la scrittura di codice macro.

Un tipico errore di indentazione è simile al seguente:

```
<unknown exception traceback><type 'exceptions.IndentationError'>: ('expected an indented block', ('C:/Users/d/AppData/Roaming/FreeCAD/Macro_Apothem_Based_Prism_GUI.FCMacro', 21, 3, 'def priSm(self):\n'))

```

#### Esempio 1

Se il codice non presenta alcuna indentazione, il codice non funzionerà. Class (`class`) e definizioni delle funzioni (`def ()`), nonché le strutture di controllo (`if`, `while`, `for`) devono essere seguite da un blocco di codice rientrato.

Questo errore è possibile se l'utente non copia correttamente il codice e tutti gli spazi vengono rimossi accidentalmente.

![](/images/Macro_Install_HowTo_09.png)

Codice Python privo di indentazioni; causa un errore quando viene eseguito

Problema di indentazione risolto.

![](/images/Macro_Install_HowTo_10.png)

Codice Python con indentazioni corrette

Se il codice è selezionato, tutte le linee dovrebbero essere evidenziate fino al bordo sinistro, indicando che le linee sono allineate.

![](/images/Macro_Install_HowTo_11.png)

Codice Python evidenziato, che mostra che tutte le linee iniziano dal bordo sinistro

#### Esempio 2

Se viene introdotto uno spazio aggiuntivo all'inizio di tutte le righe, l'interprete Python fallisce e si lamenta delle indentazioni non necessarie. In questo caso, lo spazio iniziale deve essere rimosso da tutte le righe.

![](/images/Macro_Install_HowTo_12.png)

Codice Python con spazio aggiuntivo su ogni riga

#### Esempio 3

Qui il codice è stato copiato da un thread del forum utilizzando il pulsante Seleziona tutto. Apparentemente la selezione è buona.

![](/images/Macro_Install_HowTo_14.png)

Codice Python copiato dal forum

Tuttavia, quando la selezione viene incollata nell'editor delle macro, sembra apparire una indentazione indesiderata.

![](/images/Macro_Install_HowTo_15.png)

Codice Python copiato dal forum nell'editor macro; è stata aggiunta una indentazione non necessaria

In questo caso, è necessario rimuovere gli spazi iniziali. Questo può essere fatto con un editor di testo specializzato per ridurre rapidamente l'indentazione delle righe.

In Windows, con [Notepad++](http://notepad-plus-plus.org/) si può eseguire la selezione con Alt + trascinamento del mouse, quindi utilizzare **Modifica → Indenta → Riduci il rientro**.

![](/images/Macro_Install_HowTo_16.png)

Codice Python con l'indentazione corretta

#### Esempio 4

In questa selezione sono inclusi anche i numeri di riga. Se questa selezione viene incollata nell'editor delle macro, non funziona. Tutti i numeri di riga devono essere rimossi e gli spazi devono essere regolati in modo che il codice Python abbia l'indentazione corretta.

![](/images/Macro_Install_HowTo_29.png)

Selezione che comprende anche i numeri di riga; se questo codice viene incollato nell'editor delle macro, non funzionerà

#### Codice valido

![](/images/Macro_Install_HowTo_13.png)

Codice Python con l'indentazione corretta

### Nessun output di testo dalle macro

Le macro possono generare informazioni nella vista report per descrivere cosa sta facendo il codice quando è in esecuzione.

Se non viene visualizzata alcuna informazione, assicurarsi che la vista report e la console [Python](/Python/it "Python/it") siano visibili e che l'output sia diretto alla vista report.

#### Visualizzare le informazioni

Le macro di FreeCAD hanno due metodi per stampare le informazioni nella vista report.

Le funzioni di FreeCAD

```
FreeCAD.Console.PrintMessage("Hello World! \n")
FreeCAD.Console.PrintError("Hello World! \n")
FreeCAD.Console.PrintWarning("Hello World! \n")

```

La semplice funzione Python

```
print("Hello World!")

```

#### Abilitare la vista report

Per vedere le informazioni visualizzate nella console è necessario:

1. Andare nel menu **Visualizza → Pannelli**.

![](/images/Macro_Install_HowTo_31.png)

![](/images/Macro_Install_HowTo_32.png)

Rendere visibili i pannelli nel menu Visualizza → Pannelli

2. Abilitare la `vista Report` e la `console Python`.

![](/images/Macro_Install_HowTo_33.png)

Abilitazione della vista Report e della console Python

3. Ora i pannelli sono visibili e i comandi come `FreeCAD.Console.PrintMessage()` ora stampano le informazioni che appaiono nella `vista Report`.

![](/images/Macro_Install_HowTo_34.png)

Finestra principale di FreeCAD con la vista Report e la console Python

#### Abilitare il comando print()

Potrebbe essere necessario configurare FreeCAD in modo che la funzione `print()` di [Python](/Python/it "Python/it") reindirizzi correttamente il suo output alla vista Report.

1. Andare nell'[editor delle preferenze](/Preferences_Editor/it "Preferences Editor/it") con il menu **Modifica → Preferenze**.

![](/images/Macro_Install_HowTo_35.png)

Andare nell'editor delle preferenze

2. Andare nella sezione **Python**, e poi **Finestra di output → Interprete Python**.

![](/images/Macro_Install_HowTo_36.png)

Preferenze della finestra output

3. Attivare entrambe le caselle:

![](/images/Case_a_cocher_O.png) Reindirizzare l'output interno di Python nella vista report

![](/images/Case_a_cocher_O.png) Reindirizzare gli errori interni di Python alla finestra di report

e poi cliccare sul pulsante OK

![](/images/Macro_Install_HowTo_37.png)

Reindirizzamento dell'output di Python alla vista report

![](/images/Macro_Install_HowTo_38.png)

I comandi Python stampano le informazioni nella vista report

Retrieved from "<http://wiki.freecad.org/index.php?title=How_to_install_macros/it&oldid=1297342>"
