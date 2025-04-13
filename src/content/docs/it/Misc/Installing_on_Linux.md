---
title: Installare in Linux
---
## Descrizione

L'installazione di FreeCAD sui più noti sistemi Linux è approvata dalla comunità e FreeCAD è direttamente disponibile tramite il gestore di pacchetti su quei sistemi. Il team di FreeCAD fornisce anche alcuni:

* Pacchetti "ufficiali" quando nuove versioni vengono rese disponibili via [Snap packages](/Ubuntu_Snap/it "Ubuntu Snap/it"), [AppImages](/AppImage/it "AppImage/it"), [Flatpaks](/Flatpak/it "Flatpak/it") e [PPA](#Versione_PPA_stabile)
* Repository "sperimentali" o 'bleeding edge' disponibili via [PPA](#PPA_per_le_versioni_di_sviluppo_(Daily)) daily repository, [AppImages](/AppImage/it "AppImage/it"), [Ubuntu Snaps](/Ubuntu_Snap/it "Ubuntu Snap/it").

## Ubuntu e sistemi basati su Ubuntu

Molte distribuzioni Linux sono basate su Ubuntu e condividono i suoi repository. Per altre varianti ufficiali (Kubuntu, Xubuntu e Lubuntu), ci sono distro non ufficiali come per Linux Mint, Voyager e altri. Le opzioni di installazione riportate di seguito (Espandi) dovrebbero essere compatibili con tali sistemi.

### Versione ufficiale

FreeCAD è disponibile nel repository ufficiale di Ubuntu e può essere installato tramite **Software Center** o dal terminale:

```
sudo apt install freecad

```

*Nota:* il pacchetto del repository di Ubuntu potrebbe essere obsoleto rispetto all'ultimo codice sorgente stabile. In questo caso, si consiglia di installare il pacchetto dal PPA `-stable` sottostante. Inoltre, l'installazione del pacchetto `-daily` può essere eseguita per testare il ramo di sviluppo.

### Versione PPA stabile

**Attenzione:** il PPA di FreeCAD attualmente non è aggiornato [looking for volunteers](https://forum.freecadweb.org/viewtopic.php?f=42&t=69055&start=20). Per favore, usa un'alternativa (snap, appimage) fintanto che il problema non è risolto!

Il Personal Package Archive (PPA) per la versione stabile di FreeCAD è mantenuto dalla comunità di FreeCAD su Launchpad. Il repository Launchpad viene chiamato [FreeCAD Stable Releases](https://launchpad.net/~freecad-maintainers/+archive/freecad-stable) .

#### Interfaccia grafica

Installare il PPA stabile tramite l'interfaccia utente grafica (GUI):

:   1. Navigare verso **Software per Ubuntu → Software e Aggiornamenti → Codice sorgente → Altro Software**
:   2. Cliccare su Aggiungi, quindi copiare e incollare la riga seguente

    :   ```
        ppa:freecad-maintainers/freecad-stable

        ```

:   3. Aggiungere il sorgente, chiudere la finestra di dialogo e ricaricare i sorgenti del software, se richiesto.

Ora si può trovare e installare l'ultima versione stabile di FreeCAD da **Ubuntu Software Center**.

#### Riga di comando

Installare il PPA stabile tramite l'interfaccia della riga di comando (CLI):

:   1. Aggiungere il PPA al proprio sorgenti software:

    :   ```
        sudo add-apt-repository ppa:freecad-maintainers/freecad-stable

        ```

:   2. Recuperare gli elenchi dei pacchetti aggiornati:

    :   ```
        sudo apt update

        ```

:   3. Quindi installare FreeCAD insieme alla sua documentazione offline:

    :   ```
        sudo apt install freecad freecad-doc

        ```

*Nota:* a causa di problemi di pacchettizzazione, in alcune versioni di Ubuntu il pacchetto `freecad-doc` è entrato in conflitto con l'installazione di FreeCAD o con una delle sue dipendenze; in questo caso, rimuovere il pacchetto `freecad-doc` e installare solo il pacchetto `freecad`. Se il pacchetto `freecad-doc` non esiste, ignoralo.

#### Verificare l'installazione

:   4. Una volta che il PPA stabile è stato aggiunto ai sorgenti usando uno dei metodi sopra, il pacchetto `freecad` installerà questa versione PPA su quella fornita dal repository di Ubuntu Universe. Si può vedere le versioni disponibili con il seguente comando `apt-cache`:
:   ```
    apt-cache policy freecad

    ```

:   L'output dovrebbe essere simile al seguente (ovviamente le informazioni sulla versione varieranno):

```
freecad:
  Installed: (none)
  Candidate: 2:0.18.4+dfsg1~201911060029~ubuntu18.04.1
  Version table:
     2:0.18.4+dfsg1~201911060029~ubuntu18.04.1 500
        500 http://ppa.launchpad.net/freecad-maintainers/freecad-stable/ubuntu bionic/main amd64 Packages
     0.16.6712+dfsg1-1ubuntu2 500
        500 http://archive.ubuntu.com/ubuntu bionic/universe amd64 Packages
ubuntu@ubuntu:~$ apt-cache policy freecad-doc

```

:   5. Richiamare la versione stabile (PPA) di FreeCAD dall'interfaccia grafica (GUI) o dalla riga di comando (CLI). Quest'ultimo metodo è il seguente:
:   ```
    ./freecad

    ```

### PPA per le versioni di sviluppo (Daily)

Dato che FreeCAD è in costante sviluppo, si potrebbe voler installare il pacchetto *daily* per essere aggiornati sugli ultimi miglioramenti e correzioni di bug. Il repository è anche ospitato su Launchpad e viene chiamato [freecad-daily](https://launchpad.net/~freecad-maintainers/+archive/freecad-daily).

Questa versione viene compilata quotidianamente dal repository principale ufficiale. Tienere presente che, sebbene contenga nuove funzioni e correzioni di bug, potrebbe anche avere bug più recenti ed essere instabile.

Aggiungere il PPA daily alle sorgenti software, aggiornare gli elenchi dei pacchetti e installare il pacchetto daily:

```
sudo add-apt-repository ppa:freecad-maintainers/freecad-daily
sudo apt-get update
sudo apt-get install freecad-daily

```

È possibile aggiornare quotidianamente la versione daily:

```
sudo apt-get update
sudo apt-get install freecad-daily

```

*Nota:* in alcuni casi il nuovo codice o le dipendenze aggiunte a FreeCAD causano errori di pacchettizzazione; se ciò accade, il pacchetto daily potrebbe non essere generato fino a quando i manutentori non risolvono manualmente i problemi. Se si desidera continuare a testare il codice più recente, bisogna scaricare il codice sorgente e compilare FreeCAD direttamente; per le istruzioni vedere [compilazione](/Compiling/it "Compiling/it").

Esegui la versione daily (PPA) di FreeCAD:

:   ```
    freecad-daily

    ```

*Nota:* è possibile installare entrambi i pacchetti `-stable` e `-daily` nello stesso sistema. Ciò è utile se si desidera lavorare con una versione stabile ed essere comunque in grado di testare le ultime funzioni in fase di sviluppo. Notare che l'eseguibile per la versione giornaliera è `freecad-daily`, ma per la versione stabile è solo `freecad`.

## Debian e altri sistemi basati su Debian

A partire da Debian Lenny, FreeCAD è disponibile direttamente nei repository di software Debian e può essere installato tramite Synaptic o semplicemente con:

```
sudo apt-get install freecad

```

## OpenSUSE

FreeCAD viene in genere installato con YAST (abbr. Yet Another Setup Tool), lo strumento di installazione e configurazione del sistema operativo Linux, o in qualsiasi terminale/console (sono richiesti i diritti di root) con:

:   ```
    zypper install FreeCAD

    ```

*Note:* Questa procedura copre solo l'installazione delle versioni del programma FreeCAD **stable** ufficialmente rilasciate, a seconda dei collegamenti installati ai repository dei pacchetti del programma della versione del sistema operativo. Il pacchetto openSUSE *potrebbe essere obsoleto* in quanto il pacchetto potrebbe essere in ritardo rispetto all'ultimo codice sorgente stabile. In questo caso, si suggerisce di installare il pacchetto manualmente dai repository di sorgenti (Espandi) indicati di seguito.

Viene offerto un vasto programma di rilascio per la creazione di pacchetti di FreeCAD. Si prega di visitare per un sondaggio:

**[Survey of repositories on openSUSE](https://software.opensuse.org/search?utf8=%E2%9C%93&baseproject=ALL&q=FreeCAD)**

Generalmente per selezionare la corretta distribuzione di openSUSE desiderata è necessario fare clic sul corrispondente pulsante View.

### Stabile

La versione stabile del pacchetto: [Repository stabili su openSUSE](https://software.opensuse.org/package/FreeCAD). La versione corretta della distribuzione di openSUSE deve essere selezionata nella parte inferiore della pagina web.

Nota: openSUSE ha diverse opzioni tra cui scegliere quando si scarica FreeCAD. Per visualizzare queste opzioni, visitare [Survey of stable repository on openSUSE](https://software.opensuse.org/search?utf8=%E2%9C%93&baseproject=ALL&q=FreeCAD).

### Sviluppo

Ultime versioni di sviluppo AKA *unstable*: [Unstable repositories listings on openSUSE](https://software.opensuse.org/download.html?project=science%3Aunstable&package=FreeCAD)

Si consiglia di prendere direttamente i pacchetti binari. Quindi selezionare la distribuzione corretta per il tuo sistema operativo openSUSE installato.

## Gentoo

FreeCAD si può costruire/installare semplicemente eseguendo:

```
emerge freecad

```

## Fedora

FreeCAD è stato incluso nei pacchetti ufficiali di Fedora da Fedora 20. Può essere installato dalla riga di comando con:

```
sudo dnf install freecad

```

Nelle versioni precedenti di Fedora, questo era:

```
sudo yum install freecad

```

Possono essere utilizzati anche i gestori dei pacchetti gui. Cercare "freecad".
La versione ufficiale del pacchetto di rilascio tende ad essere molto indietro rispetto alle versioni di FreeCAD. [Pacchetto: freecad](http://rpms.remirepo.net/rpmphp/zoom.php?rpm=freecad) mostra le versioni incluse nei repository Fedora nel tempo e nelle versioni.

È possibile ottenere versioni più recenti scaricando uno dei [.AppImage](https://github.com/FreeCAD/FreeCAD/releases/)rilasci dal repository github. Questi funzionano bene su Fedora.

Se vuoi stare al passo con le ultime build giornaliere in assoluto, FreeCAD è disponibile anche su [copr](https://copr.fedorainfracloud.org/groups/g/freecad/coprs/). Per installare la build da lì, in una sessione di terminale, inserisci:

```
sudo dnf copr enable @freecad/nightly
sudo dnf install freecad

```

Che lascia il copr
repository attivo, quindi

```
sudo dnf upgrade

```

o equivalente, si aggiornerà all'ultima build di FreeCAD, insieme agli aggiornamenti da qualsiasi altro repository attivo. Se vuoi qualcosa di un po' più stabile, puoi disabilitare @freecad/nightly nuovamente dopo l'installazione iniziale. Il copr
il repository conserva solo le build delle ultime 2 settimane. Questa non è una soluzione se vuoi scegliere una versione precedente specifica.

Le istruzioni sono disponibili anche su [Compilazione in Linux](/Compile_on_Linux/it "Compile on Linux/it"), incluso uno script specifico per Fedora. Con una piccola modifica, per verificare il commit specifico da git, qualsiasi versione da circa FreeCAD 0.15 può essere costruita su qualsiasi distribuzione da Fedora 21.

## Arch

Installazione di FreeCAD su Arch Linux e derivati ​​(es. Manjaro):

```
pacman -S freecad

```

## Altri

Se scoprite che il vostro sistema è dotato di FreeCAD, ma in questa pagina non è documentato, per favore comunicatelo tramite il [forum](http://forum.freecadweb.org/viewforum.php?f=21)!

Sulla rete sono disponibili diversi pacchetti alternativi non ufficiali di FreeCAD, ad esempio per sistemi come Slackware o Fedora. Una ricerca in rete può dare rapidamente buoni risultati.

### Installazione in altri sistemi Linux/Unix

Molte comuni distribuzioni Linux ora includono un FreeCAD precompilato come parte dei pacchetti standard. Questo è spesso obsoleto, ma è un punto di partenza. Controlla i gestori di pacchetti standard per il tuo sistema. Uno dei seguenti (parziali) elenchi di comandi potrebbe installare la versione ufficiale di FreeCAD per la tua distribuzione dal terminale. Questi probabilmente richiedono i privilegi di amministratore.

```
apt-get install freecad
dnf install freecad
emerge freecad
slackpkg install freecad
yum install freecad
zypper install freecad
pacman -Sy freecad

```

Il nome del pacchetto fa distinzione tra maiuscole e minuscole, quindi prova sia "FreeCAD" che "freecad". Se ciò non funziona è perché il tuo gestore di pacchetti non ha una versione precompilata di FreeCAD disponibile o perché la versione disponibile è troppo vecchia per le tue esigenze, puoi provare a installare i pacchetti [Flatpak](/Flatpak/it "Flatpak/it") o [Snap](/Ubuntu_Snap/it "Ubuntu Snap/it") (funzionano sulla maggior parte delle distribuzioni Linux x86\_64) oppure a scaricare una delle [.AppImage](https://github.com/FreeCAD/FreeCAD/releases/)
rilasciate dal repository github. Queste tendono a funzionare anche sulla maggior parte delle distribuzioni Linux x86\_64 bit, senza alcuna installazione speciale. Assicurati che il file scaricato sia contrassegnato come eseguibile, quindi eseguilo.

Se ciò non basta, e non è possibile individuare un'altra fonte di un pacchetto precompilato per la propria situazione, è necessario [compilare FreeCAD](/Compile_on_Linux/it "Compile on Linux/it") da soli.

## Prossimi Passi

Appena terminata l'installazione di FreeCAD, è ora di [iniziare](/Getting_started/it "Getting started/it")!

Retrieved from "<http://wiki.freecad.org/index.php?title=Installing_on_Linux/it&oldid=1299898>"