---
title: Flatpak
---
## Installing

### Stable

If you want to install at the user level or don't have sudo privileges add the `--user` flag to the following commands.

```
# add flathub repo just to be sure as it might not be enabled if it is your first time using flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak install flathub org.freecad.FreeCAD

```

### Development versions

If you want to install at the user level or don't have sudo privileges add the `--user` flag to the following commands.

```
# flathub-beta repo is not enabled by default
flatpak remote-add --if-not-exists flathub-beta https://flathub.org/beta-repo/flathub-beta.flatpakrepo
flatpak install flathub-beta org.freecad.FreeCAD

```

## Running

You may start the flatpak using the desktop file or using the following command:

```
flatpak run org.freecad.FreeCAD

```

The different branches can be installed in parallel. To choose which one to run use the `--branch` flag:

```
flatpak run --branch=beta org.freecad.FreeCAD

```

To run a specific executable (for example `FreeCADCmd` to run without GUI) from the flatpak use the `--command` flag:

```
flatpak run --command=FreeCADCmd org.freecad.FreeCAD

```

## Repository

* <https://github.com/flathub/org.freecad.FreeCAD>

### Maintainer(s)

* [adrianinsaval](https://github.com/adrianinsaval)
* [hfiguiere](https://github.com/hfiguiere)

## Related

* [AppImage](/AppImage "AppImage") packages
* [Snap](/Snap "Snap") packages

Retrieved from "<http://wiki.freecad.org/index.php?title=Flatpak/de&oldid=1509954>"