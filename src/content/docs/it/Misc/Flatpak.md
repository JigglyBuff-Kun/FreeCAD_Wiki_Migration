---
title: Flatpak
---
## Installazione

### Stabile

Se si desidera eseguire l'installazione a livello utente o non si dispone dei privilegi sudo, aggiungere il flag `--user` ai seguenti comandi.

```
# add flathub repo just to be sure as it might not be enabled if it is your first time using flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak install flathub org.freecad.FreeCAD

```

### Versione di sviluppo

Se si desidera eseguire l'installazione a livello utente o non si dispone dei privilegi di sudo, aggiungere il flag `--user` ai seguenti comandi.

```
# flathub-beta repo is not enabled by default
flatpak remote-add --if-not-exists flathub-beta https://flathub.org/beta-repo/flathub-beta.flatpakrepo
flatpak install flathub-beta org.freecad.FreeCAD

```

## Eseguire

Si può avviare il flatpak utilizzando il file desktop o utilizzando il seguente comando:

```
flatpak run org.freecad.FreeCAD

```

I diversi branch possono essere installati in parallelo. Per scegliere quale eseguire utilizzare il flag `--branch`:

```
flatpak run --branch=beta org.freecad.FreeCAD

```

Per lanciare un eseguibile specifico (ad esempio `FreeCADCmd` per l'esecuzione senza GUI) dal flatpak utilizzare il flag `--command`:

```
flatpak run --command=FreeCADCmd org.freecad.FreeCAD

```

## Repository

* <https://github.com/flathub/org.freecad.FreeCAD>

### Manutentore(i)

* [adrianinsaval](https://github.com/adrianinsaval)
* [hfiguiere](https://github.com/hfiguiere)

## Correlati

* Pacchetti [AppImage](/AppImage/it "AppImage/it")
* Pacchetti [Snap](/Ubuntu_Snap/it "Ubuntu Snap/it") packages

Retrieved from "<http://wiki.freecad.org/index.php?title=Flatpak/it&oldid=1509950>"