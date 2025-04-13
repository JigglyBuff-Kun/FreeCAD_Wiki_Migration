---
title: Modalità CLI di FreeCAD Docker
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

## Panoramica

L'immagine Docker di FreeCAD compilata senza GUI. Questa immagine Docker è specifica per gli sviluppatori che desiderano utilizzare FreeCAD solo da riga di comando (CLI).

### Vantaggi

Tutte le dipendenze di FreeCAD sono già installate, compatibili tra loro e configurate in modo appropriato, consentendo di iniziare a sviluppare molto rapidamente.

* Facile da usare e leggero.
* Offre prestazioni migliori in termini di velocità.
* Non è necessario aggiungere percorsi a FreeCAD per importarlo in Python.

## Repository Docker

* Docker Hub: <https://hub.docker.com/r/amrit3701/freecad-cli>
* Github repository: <https://github.com/amrit3701/docker-freecad-cli>

## Prerequisiti

* 3 GB di spazio libero
* Docker

## Installazione

1. Prelevare l'immagine Docker.

   ```
   docker pull amrit3701/freecad-cli:latest

   ```
2. Quando hai scaricato correttamente l'immagine Docker, si può eseguire l'immagine.

   ```
   docker run -it amrit3701/freecad-cli:lastest bash

   ```

## Informazioni aggiuntive

### Estendere l'immagine Docker

Si può anche estendere queste immagini Docker per aggiungere ulteriori dipendenze per il progetto. Per esempio:

```
# Dockerfile

FROM amrit3701/freecad-cli:lastest

# Add additional dependencies

# pip3.8 install <some_package>

```

### Importare FreeCAD in Python

Dopo aver eseguito l'immagine Docker, eseguire semplicemente `Python`.

```
$ docker run -it amrit3701/freecad-cli:lastest bash
root@f0ec904cf9b9:/# python3.8
Python 3.8.5 (default, Jul 20 2020, 19:48:14)
[GCC 7.5.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import FreeCAD
>>> import Part
>>> import Draft
>>> import Arch

```

### Avviare FreeCADCmd

Per avviare FreeCAD all'interno dell'immagine Docker, basta eseguire il comando `FreeCADCmd`.

## Discussione

FreeCAD forum thread: <https://forum.freecadweb.org/viewtopic.php?f=8&t=45877>

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_Docker_CLI_mode/it&oldid=1248825>"