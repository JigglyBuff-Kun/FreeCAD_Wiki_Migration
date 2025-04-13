---
title: Strumenti Addon manager
---
|  |
| --- |
| Addon manager |
| Posizione nel menu |
| Strumenti → Addon manager |
| Ambiente |
| Tutti |
| Avvio veloce |
| *Nessuno* |
| Introdotto nella versione |
| 0.17 |
| Vedere anche |
| [Macro](/Macros/it "Macros/it"), [Ambienti complementari](/External_workbenches/it "External workbenches/it") |
|  |

## Descrizione

Il comando **Addon manager** apre il gestore Addon. Con Addon Manager è possibile installare e gestire [Ambienti complementari](/External_workbenches/it "External workbenches/it"), [macro](/Macros/it "Macros/it") e [Pacchetti di Preferenze](/Preference_Packs/it "Preference Packs/it") forniti dalla community di FreeCAD. Per impostazione predefinita, i componenti aggiuntivi disponibili sono presi da due repository, [[1]](https://github.com/FreeCAD/FreeCAD-addons/FreeCAD-addons) e dalla pagina [Raccolta di macro](/Macros_recipes/it "Macros recipes/it"). Se GitPython e git sono installati sul proprio sistema, macro aggiuntive verranno caricate da [FreeCAD-macros](https://github.com/FreeCAD/FreeCAD-macros/). I repository personalizzati possono essere aggiunti nelle [Preferenze di Addon manager](/Preferences_Editor#Addon_Manager/it "Preferences Editor").

A causa delle modifiche alla piattaforma GitHub nell'anno 2020, il gestore Addon non funziona più se si utilizza FreeCAD versione 0.17 o precedente. È necessario eseguire l'aggiornamento alla versione [0.18.5](https://github.com/FreeCAD/FreeCAD/releases/tag/0.18.5) o successiva. In alternativa è possibile installare i componenti aggiuntivi manualmente, vedi [Note](#Note) di seguito.

## Utilizzo

1. Selezionare l'opzione **Strumenti → ![](/images/Std_AddonMgr.svg) Addon manager** dal menu principale.
2. La prima volta che si usa il gestore Addon si apre una finestra di dialogo che avverte che i componenti aggiuntivi nel gestore Addon non fanno ufficialmente parte di FreeCAD. Presenta inoltre diverse opzioni relative all'utilizzo dei dati da parte del gestore Addon. Regolare queste opzioni a proprio piacimento e premere il pulsante OK per confermare e continuare.
3. Viene visualizzata la finestra di dialogo Addon manager. Per ulteriori informazioni, vedere le [Opzioni](#Opzioni).
4. Se è stato installato o aggiornato un ambiente di lavoro, si aprirà una nuova finestra di dialogo per informare che si deve riavviare FreeCAD affinché le modifiche abbiano effetto.

## Opzioni

![](/images/AddonManager_Main.png)

1. Il gestore Addon fornisce due layout di visualizzazione: "Condensato" ed "Espanso". Nella vista "Condensata", ogni componente aggiuntivo occupa una singola riga e la sua descrizione viene troncata per adattarsi allo spazio disponibile. "Espanso" mostra dettagli aggiuntivi, tra cui più testo descrittivo, informazioni sul manutentore, ulteriori dettagli sull'installazione, ecc.
2. Sono supportati tre diversi tipi di componenti aggiuntivi: [Ambienti di lavoro](/External_workbenches/it "External workbenches/it"), [Macro](/Macros/it "Macros/it") e [Pacchetti Preferenze](/Preference_Packs/it "Preference Packs/it"). E' possibile scegliere di mostrare solo un tipo o tutti in un unico elenco.
3. L'elenco può essere limitato per mostrare solo i pacchetti installati, solo i pacchetti con aggiornamenti disponibili o solo i pacchetti che non sono ancora installati.
4. L'elenco può essere filtrato, cercando una parola chiave nel titolo, nella descrizione e nei tag (descrizione e tag devono essere specificati dallo sviluppatore dell'addon nei metadati dell'addon). Il filtro può anche essere un'espressione regolare, per un controllo granulare dell'esatto termine di ricerca.
5. La vista espansa mostra le informazioni sulla versione disponibili, la descrizione, le informazioni sul manutentore e le informazioni sulla versione dell'installazione, per i pacchetti che forniscono un file [Metadati pacchetto](/index.php?title=Metadati_pacchetto/it&action=edit&redlink=1 "Metadati pacchetto/it (page does not exist)") (o per macro con metadati incorporati).
6. I dati del componente aggiuntivo vengono memorizzati nella cache locale, con una frequenza di aggiornamento della cache variabile impostata nelle preferenze dell'utente.
7. In qualsiasi momento è possibile scegliere di aggiornare manualmente la propria cache locale per vedere gli ultimi aggiornamenti disponibili per ogni componente aggiuntivo.
8. I controlli degli aggiornamenti possono essere impostati per essere automatici o eseguiti manualmente tramite un clic del pulsante (configurato nelle preferenze dell'utente). Se GitPython e git sono installati sul proprio sistema, le informazioni di aggiornamento vengono recuperate utilizzando git. In caso contrario, le informazioni di aggiornamento vengono ottenute da qualsiasi file di metadati presente.

Facendo clic su un componente aggiuntivo in questa visualizzazione viene visualizzata la pagina dei dettagli del componente aggiuntivo:

![](/images/AddonManager_Details.png)

La pagina dei dettagli mostra i pulsanti che consentono di installare, disinstallare, aggiornare e disabilitare temporaneamente un componente aggiuntivo. Per i componenti aggiuntivi installati elenca la versione attualmente installata e la data di installazione e se si tratta della versione più recente disponibile. Di seguito è riportata una finestra del browser Web incorporata che mostra la pagina README dell'addon (per Ambiente di lavoro e Pacchetti di preferenze) o la pagina Wiki (per le macro).

## Preferenze

Le preferenze per Addon Manager si trovano nell'[Editor delle Preferenze](/Preferences_Editor/it#Addon_Manager "Preferences Editor/it"). [disponibile dalla versione 0.20](/Release_notes_0.20/it "Release notes 0.20/it")

## Ordinamento per punteggio

[disponibile dalla versione 1.0](/Release_notes_1.0/it "Release notes 1.0/it")

L'Addon Manager supporta l'ordinamento in base a una serie di criteri diversi. La maggior parte di questi vengono scaricati direttamente dai server di FreeCAD (che li memorizza nella cache da GitHub e FreeCAD Wiki) ma uno, "Punteggio", non è fornito da FreeCAD e appare come opzione solo se l'impostazione URL Sorgente del Punteggio è fornita nelle Preferenze.

L'URL Sorgente del Punteggio è un percorso verso un documento remoto in formato JSON che elenca componenti aggiuntivi e un "punteggio" di qualche tipo. Il punteggio può essere calcolato in qualsiasi modo piaccia al fornitore di dati, ma dovrebbe essere un valore intero, dove i punteggi più alti sono "migliori" in un certo senso. A qualsiasi componente aggiuntivo non elencato viene assegnato internamente un punteggio pari a zero. Il formato del file è un singolo dizionario JSON in cui la chiave è l'URL del componente aggiuntivo (per ambienti di lavoro e pacchetti di preferenze) o il nome della macro (per le macro). Vedere [questa fonte dati](https://gist.githubusercontent.com/chennes/e8f60e80f16e6ffbd057dd47ca36ad2a/raw/7b118cca8e84444c3379919bbd744b99e6ef6711/addon_score_for_testing.jsu) per un esempio (notare che il punteggio è semplicemente la lunghezza della descrizione del componente aggiuntivo, ed è destinato esclusivamente ai test e scopi dimostrativi).

## Note

* L'uso dei componenti aggiuntivi non è limitato alla versione di FreeCAD da cui sono stati installati. Si potrà anche usarli in qualsiasi altra versione di FreeCAD, supportata dall'addon, presente sul proprio sistema.
* I componenti aggiuntivi disponibili in Addon manager non fanno parte del programma ufficiale FreeCAD e non sono supportati dal team di sviluppo principale di FreeCAD. Bisogna leggere attentamente le informazioni fornite per assicurarsi di sapere cosa si sta installando.
* Segnalazioni di bug e richieste di funzionalità devono essere inviate direttamente al creatore del componente aggiuntivo visitando il sito Web indicato. Molti sviluppatori di componenti aggiuntivi sono utenti regolari del [FreeCAD forum](https://forum.freecadweb.org), e possono anche essere contattato lì.
* Se sul computer è installato il pacchetto [GitPython](https://github.com/gitpython-developers/GitPython), il gestore Addon lo utilizza, rendendo i download più veloci.
* È inoltre possibile installare i componenti aggiuntivi manualmente. Vedere [Come installare gli ambienti aggiuntivi](/How_to_install_additional_workbenches/it "How to install additional workbenches/it") and [Come installare le macro](/How_to_install_macros/it "How to install macros/it").

## Informazioni per gli sviluppatori di addon

Vedere [Addon](/Addon/it#Informazioni_per_sviluppatori "Addon/it").

## Script

[disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")

Alcune funzionalità del gestore Addon sono progettate per l'accesso tramite l'API Python di FreeCAD. In particolare un componente aggiuntivo può essere installato, aggiornato e rimosso tramite l'interfaccia Python. La maggior parte degli usi di questa API richiede la creazione di un oggetto con almeno tre attributi: `name`, `branch` e `url`. Per esempio:

```
class MyAddonClass:
    def __init__(self):
        self.name = "TestAddon"
        self.url = "https://github.com/Me/MyTestAddon"
        self.branch = "main"
my_addon = MyAddonClass()

```

Il proprio oggetto `my_addon` è ora pronto per essere utilizzato con l'API Addon Manager.

### Utilizzo da riga di comando (non-GUI)

Se il proprio codice deve installare o aggiornare un componente aggiuntivo in modo sincrono (ad esempio senza una GUI), il codice può essere molto semplice:

```
from addonmanager_installer import AddonInstaller
installer = AddonInstaller(my_addon)
installer.run()

```

Notare che questo codice si blocca fino al completamento, quindi non lo si dovrebbe eseguire sul thread della GUI principale. Per il gestore Addon, "install" e "update" sono la stessa chiamata: se questo addon è già installato e git è disponibile, verrà aggiornato tramite "git pull". Se non è installato o è stato installato tramite un metodo di installazione diverso da git, viene scaricato da zero (utilizzando git se disponibile).

Per disinstallare, utilizzare:

```
from addonmanager_uninstaller import AddonUninstaller
uninstaller = AddonUninstaller(my_addon)
uninstaller.run()

```

### Utilizzo con GUI

Se si prevede di eseguire il codice in una GUI o di supportare l'esecuzione nella versione completa di FreeCAD, è meglio eseguire l'installazione in un thread non GUI separato, in modo che la GUI rimanga reattiva. Per fare ciò, controllare prima se la GUI è in esecuzione e, in tal caso, generare un `QThread` (non provare a generare un `QThread` se la GUI non è attiva: richiedono un ciclo di eventi attivo per funzionare).

```
from PySide import QtCore
from addonmanager_installer import AddonInstaller

worker_thread = QtCore.QThread()
installer = AddonInstaller(my_addon)
installer.moveToThread(worker_thread)
installer.success.connect(installation_succeeded)
installer.failure.connect(installation_failed)
installer.finished.connect(worker_thread.quit)
worker_thread.started.connect(installer.run)
worker_thread.start() # Returns immediately

```

Quindi definire le funzioni `installation_succeeded` e `installation_failed` da eseguire in ciascun caso. Per la disinstallazione è possibile usare la stessa tecnica, anche se di solito è molto più veloce e non bloccherà la GUI per molto tempo, quindi in generale è sicuro usare direttamente il programma di disinstallazione, come mostrato sopra.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_AddonMgr/it&oldid=1457862>"