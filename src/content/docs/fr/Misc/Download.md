---
title: Téléchargement
---
## Version stable actuelle

La version 1.0 de FreeCAD a été publiée le 18 novembre 2024. Pour connaître les nouveautés, voir les [notes de la version](/Release_notes_1.0/fr "Release notes 1.0/fr").

Vous pouvez trouver les checksums SHA256 pour vérifier l'intégrité de votre téléchargement sur la [page GitHub de la release 1.0.0](https://github.com/FreeCAD/FreeCAD/releases/tag/1.0.0).

Les versions précédentes peuvent être téléchargées à partir de la page [GitHub releases](https://github.com/FreeCAD/FreeCAD/releases).

|  |  |  |
| --- | --- | --- |
| [Install instructions](/Installing_on_Windows "Installing on Windows")  [64-bit installer](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-Windows-x86_64-installer-1.exe)  [64-bit portable version (.7z)](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-Windows-x86_64-py311.7z) | [Install instructions](/Installing_on_Mac "Installing on Mac")  [ARM (M-series) disk image](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-macOS-arm64-py311.dmg)  [Intel disk image](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-macOS-x86_64-py311.dmg) | [Install instructions](/Installing_on_Linux "Installing on Linux")  [x86\_64 AppImage](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-Linux-x86_64-py311.AppImage)  [aarch64 AppImage](https://github.com/FreeCAD/FreeCAD/releases/download/1.0.0/FreeCAD_1.0.0-conda-Linux-aarch64-py311.AppImage) |

### Remarques pour les utilisateurs de Windows

* Les versions suivantes de Windows sont prises en charge : 64-bit 8/10/11.
* Le paquet peut également être installé à partir du gestionnaire [Chocolatey](https://chocolatey.org/packages/freecad). Le paquet Chocolatey n'est actuellement pas à jour.

### Remarques pour les utilisateurs de macOS

* MacOS 10.12 Sierra est la version minimale supportée.

### Remarques pour les utilisateurs de GNU/Linux

La plupart des distributions portent FreeCAD dans leurs dépôts officiels. Toutefois, si la distribution ne suit pas un modèle de version évolutive, la version fournie peut être obsolète. À la place, vous pouvez télécharger l’AppImage ci-dessus, la marquer comme exécutable et la lancer sans installation.

Veuillez consulter la page [Installation sous Unix](/Installing_on_Linux/fr "Installing on Linux/fr") pour plus d'options d'installation, y compris les paquets quotidiens pour Ubuntu et ses dérivés.

Une version portable qui n'a pas besoin d'installation peut être obtenue en démarrant FreeCAD avec ces commandes :

```
cd path/to/directory_containing_AppImage/
chmod +x ./name_of_AppImage_file.AppImage
HOME="$PWD/Settings" FREECAD_USER_HOME="$PWD/Settings" ./name_of_AppImage_file.AppImage

```

Vous pourrez trouver plus d'informations sur les variables d'environnement de FreeCAD sur [la page de configuration](/Start_up_and_Configuration/fr "Start up and Configuration/fr").

## Versions de développement

FreeCAD est en développement constant.

* Pour les versions de développement et le code source de développement, voir la page [weekly builds](https://github.com/FreeCAD/FreeCAD-Bundle/releases/tag/weekly-builds). Les versions hebdomadaires sont disponibles pour Linux, MacOS et Windows ici. Pour Linux, des compilations quotidiennes sont également disponibles : utilisez le canal Edge du [package snap](/Ubuntu_Snap/fr "Ubuntu Snap/fr") ou le [PPA hebdomadaire de FreeCAD](https://launchpad.net/~freecad-maintainers/+archive/ubuntu/freecad-daily) (ce dernier uniquement pour les distributions basées sur Debian).
* Pour compiler le dernier code source, voir [compilation](/Compiling/fr "Compiling/fr").

## Modules supplémentaires et macros

La communauté FreeCAD propose une multitude de modules supplémentaires et de macros. Ils peuvent être installés directement depuis FreeCAD à l'aide du ![](/images/Std_AddonMgr.svg) [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Download/fr&oldid=1529358>"