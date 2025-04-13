---
title: Ubuntu Snap
---
## Introduction

Un package Ubuntu Snap, ou simplement Snap est un format de distribution similaire à [AppImage](/AppImage/fr "AppImage/fr") en ce qu'il est destiné à être un "package installable universel" pour déployer le logiciel pour les systèmes Linux. Les snaps ont été introduits par Ubuntu mais ils sont destinés à fonctionner dans toutes les distributions Linux tant que le démon Snap, ou `snapd`, est disponible dans le système cible.

Un package Snap a deux principales caractéristiques :

* Les programmes sont mis dans un bac à sable afin de ne pas interférer avec le reste du système d'exploitation.
* Les programmes sont mis à jour automatiquement en arrière-plan afin d'obtenir la dernière version de l'application.

Pour d'autres façons d'installer le logiciel, voir [Installation sous Linux](/Installing_on_Linux/fr "Installing on Linux/fr").

## Installation

L'utilisation de Snaps est expérimentale. Les Snaps actuels sont générés et hébergés par des bénévoles.

Pour tous les systèmes où Snaps doit être installé, le démon Snap doit être installé en premier. Le package est normalement appelé `snapd`.

### Debian/Ubuntu

Pour Debian/Ubuntu et les systèmes similaires qui utilisent le gestionnaire APT, le démon est installé comme suit:

```
sudo apt install snapd

```

Pour installer la version stable de Snap, utilisez:

```
sudo snap install freecad

```

Pour installer la version de développement de Snap, utilisez:

```
sudo snap install --edge freecad

```

### Manjaro

Pour installer la version stable de Snap, utilisez:

```
snap install freecad

```

Pour installer la version de développement de Snap, utilisez:

```
snap install --edge freecad

```

## Remarques

#### Quelle est la version de FreeCAD que j'utilise ?

Pour savoir quelle version de développement est installée, tapez ce qui suit dans l'interface de ligne de commande :

```
snap info freecad

```

#### Changer entre différents snaps

A partir de la fin du cycle de la version 0.20, les mainteneurs snap de FreeCAD ont ajouté la possibilité de tester des versions expérimentales de FreeCAD. Les snaps permettent de le faire en basculant facilement entre différents snaps (la terminologie est "[channels or tracks](https://snapcraft.io/docs/channels)"). Par exemple :

Test de la branche Topological Naming ('toponaming') (créée au début du cycle de release v0.21/v1.0) :

```
snap refresh freecad --channel=latest/edge/toponaming

```

L'utilisation de la commande `refresh` permet de basculer et de mettre à jour le canal snap sur lequel vous basculez :

```
snap refresh freecad --channel=latest/edge/toponaming

```

Retour sur le "dernier" canal de développement :

```
snap refresh freecad --channel=latest/edge

```

## Mode avancé

Les commandes suivantes sont destinées aux utilisateurs qui sont familiers avec `git` et ont un dépôt cloné localement du dépôt FreeCAD en amont.

```
git clone https://github.com/FreeCAD/FreeCAD
cd FreeCAD/

```

Pour trouver le dernier numéro de révision amont (également connu sous le nom de "HEAD") :

```
git pull upstream master  # first make sure we have the most up-to-date commits
git rev-list --count HEAD # 'HEAD' refers to the current commit you are viewing (tip of the master branch)

```

Pour traduire la version de développement en cours en un numéro de révision (assurez-vous que vous êtes dans votre dépôt FreeCAD cloné comme mentionné ci-dessus) :

```
snap info freecad |\
grep -e '^\s\+latest/edge' |\
awk -F ' ' '{ print $2 }' |\
xargs -I{} git rev-list --count {}

```

**Remarque :** Le script bash 1 liner ci-dessus suppose que l'utilisateur a installé 'edge' (nightly).

La différence entre les numéros de révision de HEAD et du snap edge indique le nombre de révisions en retard sur le développement du snap edge en amont.

Pour aller plus loin, si vous voulez un bref résumé des commits entre le snap edge en cours et HEAD :

```
snap info freecad |\
grep -e '^\s\+latest/edge' |\
awk -F ' ' '{ print $2 }' |\
xargs -I{} git log --oneline --ancestry-path {}..HEAD

```

**Remarque :** La sortie indiquera les commits qui **ne sont pas** dans le "edge" en cours (mais qui le seront dans la prochaine mise à jour nightly).

## Liens

Plus d'informations sur les efforts en cours pour gérer Snaps :

* [0.19 Snap Preview a besoin de "testeurs"](https://forum.freecadweb.org/viewtopic.php?f=4&t=46044), ancien Snap de *vejmarie*. (obsolète)
* [Discussion: Discussion: état du composant logiciel Snap (Snap Packaging)](https://forum.freecadweb.org/viewtopic.php?f=42&t=46853), version plus récente du Snap par *ppd*. (obsolète)

### Dépôts

* <https://github.com/FreeCAD/FreeCAD-snap>
* <https://snapcraft.io/freecad>

### Mainteneur(s)

* ppd ([forum](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=24042), [github](https://github.com/ppd))
* luzpaz ([forum](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=12229), [github](https://github.com/luzpaz))

## En relation

* [AppImage](/AppImage/fr "AppImage/fr") - un autre format autonome de type "binaire" pour exécuter FreeCAD
* Paquets [Flatpak](/Flatpak/fr "Flatpak/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Ubuntu_Snap/fr&oldid=1202898>"