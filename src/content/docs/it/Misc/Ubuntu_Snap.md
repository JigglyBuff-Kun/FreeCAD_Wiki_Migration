---
title: Ubuntu Snap
---
## Introduzione

Un pacchetto Ubuntu Snap, o semplicemente Snap è un formato di distribuzione simile a [AppImage](/AppImage/it "AppImage/it") in quanto è inteso come un "pacchetto installabile universale" su cui distribuire software Sistemi Linux. Gli snap sono stati introdotti da Ubuntu ma sono pensati per essere eseguiti su tutte le distribuzioni Linux purché il demone Snap, o `snapd`, sia disponibile sul sistema di destinazione.

Un pacchetto Snap ha due caratteristiche principali:

* I programmi sono sandbox in modo da non interferire con il resto del sistema operativo.
* I programmi vengono aggiornati automaticamente in background per ottenere la versione più recente dell'applicazione.

Per altri modi di installazione del software, vedere [Installazione su Linux](/Installing_on_Linux/it "Installing on Linux/it").

## Installazione

L'uso di Snaps è sperimentale. Gli Snap attuali sono generati e ospitati da volontari.

Su tutti i sistemi in cui devono essere installati gli Snap, è necessario installare prima il demone Snap. Il pacchetto normalmente si chiama `snapd`.

### Debian/Ubuntu

Per Debian/Ubuntu e sistemi simili che utilizzano il gestore APT il demone viene installato come segue:

```
sudo apt install snapd

```

Per installare la versione stabile di Snap utilizzare:

```
sudo snap install freecad

```

Per installare la versione di sviluppo di Snap utilizzare:

```
sudo snap install --edge freecad

```

### Manjaro

Per installare la versione stabile di Snap utilizzare:

```
snap install freecad

```

Per installare la versione di sviluppo di Snap utilizzare:

```
snap install --edge freecad

```

## Note

#### Quale versione di FC sto utilizzando

Per capire quale versione di sviluppo è installata, digitare quanto segue nell'interfaccia della riga di comando:

```
snap info freecad

```

#### Cambiare tra diversi Snap

A partire dalla fine del ciclo di rilascio della versione 0.20, i manutentori dello snap di FreeCAD hanno aggiunto la possibilità di testare build sperimentali di FreeCAD. Gli snap lo consentono passando facilmente tra diversi snap (la terminologia è "[channels or tracks](https://snapcraft.io/docs/channels)"). Per esempio:

Test del ramo Topological Naming ("toponaming") (creato all'inizio del ciclo di rilascio v0.21/v1.0):

```
snap refresh freecad --channel=latest/edge/toponaming

```

Usando il comando `refresh` cambierai e aggiornerai il canale snap a cui stai passando:

```
snap refresh freecad --channel=latest/edge/toponaming

```

Ritorno al canale nightly "edge":

```
snap refresh freecad --channel=latest/edge

```

## Avanzate

I seguenti comandi sono rivolti agli utenti che hanno familiarità con `git` e hanno un repository clonato localmente del repository upstream di FreeCAD.

```
git clone https://github.com/FreeCAD/FreeCAD
cd FreeCAD/

```

Per scoprire l'ultimo numero di revisione upstream (noto anche come "HEAD"):

```
git pull upstream master  # first make sure we have the most up-to-date commits
git rev-list --count HEAD # 'HEAD' refers to the current commit you are viewing (tip of the master branch)

```

Per tradurre l'attuale versione di sviluppo dello snap in un numero di revisione (assicurati di essere all'interno del tuo repository di FreeCAD clonato come menzionato sopra):

```
snap info freecad |\
grep -e '^\s\+latest/edge' |\
awk -F ' ' '{ print $2 }' |\
xargs -I{} git rev-list --count {}

```

**Nota:** l'esecuzione dello script bash 1 sopra presuppone che l'utente abbia installato 'edge' (nightly)

La differenza tra HEAD e i numeri di revisione della versione dello snap indica la quantità di revisioni che seguono a monte dello sviluppo dello snap (edge).

Facendo un ulteriore passo avanti, se si desidera un breve riepilogo dei commit tra lo snap edge corrente e HEAD:

```
snap info freecad |\
grep -e '^\s\+latest/edge' |\
awk -F ' ' '{ print $2 }' |\
xargs -I{} git log --oneline --ancestry-path {}..HEAD

```

**Nota:** L'output indicherà quali commit **non sono** nel 'edge' corrente (ma saranno presenti nel prossimo aggiornamento nightly).

## Link

Maggiori informazioni sugli sforzi attuali per gestire gli Snap:

* [0.19 Snap Preview needs "testers"](https://forum.freecadweb.org/viewtopic.php?f=4&t=46044), lo Snap più vecchio di *vejmarie*. (deprecato)
* [Discussion: State of the snap (Snap Packaging)](https://forum.freecadweb.org/viewtopic.php?f=42&t=46853), versione più recente dello Snap di *ppd*. (deprecato)

### Repository

* <https://github.com/FreeCAD/FreeCAD-snap>
* <https://snapcraft.io/freecad>

### Manutentore(i)

* ppd ([forum](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=24042), [github](https://github.com/ppd))
* luzpaz ([forum](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=12229), [github](https://github.com/luzpaz))

## Correlati

* [AppImage](/AppImage/it "AppImage/it") - un altro formato autonomo di tipo "binario" per eseguire FreeCAD
* Pacchetti [Flatpak](/Flatpak/it "Flatpak/it")

Retrieved from "<http://wiki.freecad.org/index.php?title=Ubuntu_Snap/it&oldid=1299797>"