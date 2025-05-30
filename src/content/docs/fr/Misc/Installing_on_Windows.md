---
title: Installation sous Windows
---
## Installation standard

La façon la plus simple d'installer la dernière version stable de FreeCAD est d'utiliser le programme d'installation, voir la page [Téléchargement](/Download/fr "Download/fr").

Si vous souhaitez télécharger une version de développement, qui peut être instable, consultez la page [Weekly builds download](https://github.com/FreeCAD/FreeCAD-Bundle/releases/tag/weekly-builds).

Après avoir téléchargé le programme d'installation, double-cliquez dessus pour lancer le processus d'installation.

Vous trouverez ci-dessous de plus amples informations sur certaines options techniques. Mais la plupart des utilisateurs n'ont pas besoin de plus que le programme d'installation. Rendez-vous à [Démarrer avec FreeCAD](/Getting_started/fr "Getting started/fr") une fois l'installation terminée.

## Installation pour tous les utilisateurs du système Windows

Par défaut, FreeCAD sera installé pour l'utilisateur qui exécute le programme d'installation. Si cet utilisateur n'a que des droits d'utilisateur, le chemin d'installation par défaut est :

:   C:\Users\<username>\AppData\Local\Programs\FreeCAD X.YY

Si le programme d'installation est exécuté par un utilisateur administrateur, ou si vous l'exécutez en tant qu'administrateur, vous pouvez choisir si FreeCAD doit être installé pour tous les utilisateurs du système ou seulement pour vous. La valeur par défaut est pour tous les utilisateurs.

S'il est installé pour tous les utilisateurs, le chemin d'installation par défaut est :

:   C:\Program Files\FreeCAD X.YY

## Installation en mode transparent

Pour installer FreeCAD en mode transparent, vous pouvez exécuter le programme d'installation à partir de la ligne de commande :

```
FreeCAD-~.exe /S

```

Les paramètres par défaut seront utilisés pour toutes les options. Un chemin d'installation personnalisé peut être spécifié de cette manière :

```
FreeCAD-~.exe /S /D=A path to FreeCAD with spaces

```

Par défaut, même en cas d'installation en mode transparent, une courte fenêtre contextuelle s'affiche lorsque le programme d'installation fait l'objet d'un contrôle de corruption. Cette vérification de la redondance cyclique ne prend que quelques secondes au maximum. Pour désactiver cette vérification de corruption :

```
FreeCAD-~.exe /S /NCRC

```

Notez que ce drapeau `/NCRC` n'est **pas recommandé** puisque la vérification de la corruption assure que l'installateur a été, par exemple, complètement téléchargé.

## Chocolatey

L'utilisation du gestionnaire de paquets [Chocolatey](https://chocolatey.org/install) n'est actuellement pas recommandée car ce dépôt n'est plus tenu à jour.

## Désinstallation

Pour désinstaller FreeCAD, il est préférable d'utiliser les outils Windows de désinstallation de logiciels. Vous pouvez également exécuter directement le programme de désinstallation. Voici le fichier :

:   Uninstall-FreeCAD.exe

Vous pouvez le trouver dans le dossier où FreeCAD est installé.

Le désinstalleur peut également être exécuté silencieusement en utilisant la ligne de commande :

```
Uninstall-FreeCAD.exe /S

```

Notez que la désinstallation (mode transparent) échouera s'il y a une instance de FreeCAD en cours d'exécution, même si cette instance n'est pas la version en cours de désinstallation.

Retrieved from "<http://wiki.freecad.org/index.php?title=Installing_on_Windows/fr&oldid=1358910>"