---
title: Flatpak
---
## Installation

### Version stable

Si vous voulez installer au niveau de l'utilisateur ou si vous n'avez pas les privilèges sudo, ajoutez le drapeau `--user` aux commandes suivantes.

```
# add flathub repo just to be sure as it might not be enabled if it is your first time using flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak install flathub org.freecad.FreeCAD

```

### Versions en cours de développement

Si vous voulez installer au niveau de l'utilisateur ou si vous n'avez pas les privilèges sudo, ajoutez le drapeau `--user` aux commandes suivantes.

```
# flathub-beta repo is not enabled by default
flatpak remote-add --if-not-exists flathub-beta https://flathub.org/beta-repo/flathub-beta.flatpakrepo
flatpak install flathub-beta org.freecad.FreeCAD

```

## Lancement

Vous pouvez démarrer le flatpak en utilisant le fichier du bureau ou en utilisant la commande suivante :

```
flatpak run org.freecad.FreeCAD

```

Les différentes branches peuvent être installées en parallèle. Pour choisir laquelle exécuter, utilisez le drapeau `--branch` :

```
flatpak run --branch=beta org.freecad.FreeCAD

```

Pour exécuter un exécutable spécifique (par exemple `FreeCADCmd` pour l'exécuter sans interface graphique) à partir du flatpak, utilisez l'indicateur `--command` :

```
flatpak run --command=FreeCADCmd org.freecad.FreeCAD

```

## Dépôt

* <https://github.com/flathub/org.freecad.FreeCAD>

### Mainteneur(s)

* [adrianinsaval](https://github.com/adrianinsaval)
* [hfiguiere](https://github.com/hfiguiere)

## En relation

* Paquets [AppImage](/AppImage/fr "AppImage/fr")
* Paquets [Snap](/index.php?title=Snap/fr&action=edit&redlink=1 "Snap/fr (page does not exist)")

Retrieved from "<http://wiki.freecad.org/index.php?title=Flatpak/fr&oldid=1509953>"