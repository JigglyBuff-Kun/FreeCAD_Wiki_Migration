---
title: FreeCAD Docker mode CLI
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

## Présentation

Image Docker de FreeCAD compilée sans GUI. Cette image Docker est spécialement destinée aux développeurs qui ne souhaitent utiliser FreeCAD que en mode interface de ligne de commande (CLI).

### Avantages

Toutes les dépendances de FreeCAD sont déjà installées, compatibles les unes avec les autres et configurées de manière appropriée, ce qui vous permet de commencer à développer très rapidement.

* Facile à utiliser et léger.
* Meilleures performances en termes de vitesse.
* Pas besoin d'ajouter des chemins FreeCAD pour l'importer dans Python.

## Dépôt Docker

* Docker Hub : <https://hub.docker.com/r/amrit3701/freecad-cli>
* Dépôt Github : <https://github.com/amrit3701/docker-freecad-cli>

## Prérequis

* 3 GB de mémoire libre
* Docker

## Installation

1. Récupérez l'image Docker.

   ```
   docker pull amrit3701/freecad-cli:latest

   ```
2. Quand vous avez réussi à extraire l'image Docker, vous pouvez maintenant lancer l'image.

   ```
   docker run -it amrit3701/freecad-cli:lastest bash

   ```

## Informations supplémentaires

### Extension de l'image Docker

Vous pouvez également étendre ces images Docker pour ajouter des dépendances supplémentaires pour votre projet. Par exemple

```
# Dockerfile

FROM amrit3701/freecad-cli:lastest

# Add additional dependencies

# pip3.8 install <some_package>

```

### Importer FreeCAD en Python

Après avoir exécuté l'image Docker, il suffit de lancer `Python`.

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

### Lancer FreeCADCmd

Pour lancer FreeCAD dans l'image Docker, exécutez simplement la commande `FreeCADCmd` .

## Discussion

* Fil du forum FreeCAD : <https://forum.freecadweb.org/viewtopic.php?f=8&t=45877>

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_Docker_CLI_mode/fr&oldid=1093733>"