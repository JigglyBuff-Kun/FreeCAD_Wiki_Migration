---
title: Comment installer des ateliers supplémentaires
---
|  |
| --- |
| Tutoriel |
| Thème |
| Programmation |
| Niveau |
| Programmeur moyen |
| Temps d'exécution estimé |
| 15 minutes |
| Auteurs |
| [r-frank](/User:R-Frank "User:R-Frank") |
| Version de FreeCAD |
| Toutes versions |
| Fichiers exemples |
| aucun |
| Voir aussi |
| *None* |
|  |

## Description

Les utilisateurs expérimentés enrichissent FreeCAD avec divers [ateliers externes](/External_workbenches/fr "External workbenches/fr") qui ne sont pas intégrés au code source de base mais qui sont faciles à installer à une distribution FreeCAD existante. Nous allons couvrir ici les méthodes d'installation pour les différents systèmes d'exploitation.

*Remarque :* à partir de la version 0.17, FreeCAD propose un ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr") dans le menu **Outils → Gestionnaire des extensions**. Il permet d'installer à la fois des macros et des ateliers. Les instructions ci-dessous ne sont nécessaires que si vous souhaitez installer manuellement un atelier. Cela peut être nécessaire si, pour une raison quelconque, le Gestionnaire des extensions ne fonctionne pas mais que vous avez accès à l'atelier téléchargé en tant que package .zip.

## Installation sous Windows

Comment installer des ateliers et des extensions supplémentaires sous Windows

### Installation manuelle

*Remarque :* cette méthode est possible mais pas nécessaire avec l'introduction du ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"). Néanmoins les informations ici peuvent encore être utiles à certains.

* Téléchargez l'atelier depuis github en cliquant sur le bouton Clone ou Download sur la page github (coin supérieur droit) et en choisissant "Download ZIP"
* Dézippez l'archive téléchargée sur votre disque dur local
* Dans FreeCAD, localisez le chemin de la macro en choisissant **Édition → Préférences → Python → Macro** et cherchez "Chemin de la macro".
* Supposons que votre connexion Windows est "*nom\_utilisateur*", le chemin par défaut de la macro est %APPDATA%\FreeCAD\ qui est couramment C:\Users\*nom\_utilisateur*\Appdata\Roaming\FreeCAD
* Dans le répertoire macro, créez (s'il n'est pas déjà présent) un dossier appelé "Mod"
* Dans le dossier Mod, créez un dossier avec le nom de l'atelier, par exemple “Curves”
* Déplacez maintenant les fichiers et sous-dossiers décompressés de l'atelier dans le dossier de l'atelier qui vient d'être créé.
* Après le redémarrage de FreeCAD, vous devriez maintenant avoir une entrée dans le [sélecteur d'atelier](/Std_Workbench/fr "Std Workbench/fr")

**Recommandation supplémentaire pour la mise à jour des ateliers**

Sous Windows, lors de la mise à jour d'un atelier déjà installé, Windows conserve les anciens fichiers .py converti en .pyc. Étant donné que cela peut entraîner des problèmes de compatibilité, il est recommandé de désinstaller l'atelier, de redémarrer FreeCAD et d'installer la nouvelle version de cet atelier.

## Installation sous Linux

Comment installer des ateliers et des extensions supplémentaires sous Linux

### Utiliser git

Ajoutez [community-ppa](https://launchpad.net/~freecad-community/+archive/ubuntu/ppa) dans le gestionnaire ppa.  
Installez les ateliers via Synaptic Packet Manager.

```
$ sudo apt-get install git python-numpy python-pyside
$ mkdir ~/.FreeCAD/Mod
$ cd ~/.FreeCAD/Mod
$ git clone  https://github.com/tomate44/CurvesWB.git

```

Dans FreeCAD, vous aurez maintenant un nouvel atelier appelé "CurvesWB". Une fois installé, utilisez git pour les mises à jour :

```
$ cd ~/.FreeCAD/Mod/CurvesWB
$ git pull
$ rm *.pyc

```

### Installation manuelle

*Remarque :* cette méthode est possible mais pas nécessaire avec l'introduction du ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"). Néanmoins les informations ici peuvent encore être utiles à certains.

* Téléchargez l'atelier à partir de github en cliquant sur le bouton Clone ou Download sur la page github (coin supérieur droit) et en choisissant "Download ZIP"
* Dézippez l'archive téléchargée sur votre disque dur local
* Dans FreeCAD, localisez le chemin de la macro en choisissant **Édition → Préférences → Python → Macro** et cherchez "Chemin de la macro"
* Par défaut, le répertoire des macros est le répertoire **./.FreeCAD/** (masqué) de votre répertoire personnel
* Dans le répertoire macro, créez (s'il n'est pas déjà présent) un dossier appelé “Mod”
* Dans le dossier Mod/, créez un dossier avec le nom de l'atelier, par exemple “Curves”
* Déplacez maintenant les fichiers et sous-dossiers décompressés du plan de travail dans le dossier de l'atelier qui vient d'être créé.
* Après le redémarrage de FreeCAD, vous devriez maintenant avoir une entrée dans le [sélecteur d'atelier](/Std_Workbench/fr "Std Workbench/fr")

## Installation sur Mac

Comment installer des ateliers et des extensions supplémentaires sous macOS

### Installation manuelle

*Remarque :* cette méthode est possible mais pas nécessaire avec l'introduction du ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"). Néanmoins les informations ici peuvent encore être utiles à certains.

Dans le cadre de cet exemple, disons que vous avez choisi l'l'[atelier Curves](/Curves_Workbench/fr "Curves Workbench/fr") comme atelier externe à installer :

* Choisissez et téléchargez le dépôt git de l'atelier externe de votre choix sous forme de fichier ZIP.
* Il existe deux emplacements possibles pour votre extension "Mods" :

1. Tous les utilisateurs : /Applications/FreeCAD.app/Contents/Resources/Mod.
2. Utilisateur en cours uniquement : /Users/myusername/Library/Application Support/FreeCAD/Mod.

* Si vous utilisez Finder pour naviguer manuellement vers l'emplacement All Users dans Applications, vous devrez
  + aller dans /Applications" et sélectionner FreeCAD.app
  + Cliquez avec le bouton droit de la souris et sélectionnez "Show Package Contents", une nouvelle fenêtre apparaîtra avec un dossier nommé "Contents".
  + Un seul clic sur le dossier "Contents" puis sur "Resources" et un double-clic pour ouvrir le dossier "Mod".
* Une fois que vous êtes dans le dossier "Mod" que vous voulez utiliser, créez un nouveau dossier nommé "Curves".
* Dézippez le dépôt téléchargé dans le dossier "Mod/Curves".

## Dysfonctionnement généralités

* N'utilisez pas de caractères spéciaux (par exemple des trémas allemands) dans votre nom d'utilisateur Windows, sinon FreeCAD ne reconnaîtra pas les fichiers et dossiers dans le chemin de la macro.
* Si vous avez déjà configuré un nom d'utilisateur avec des caractères spéciaux, créez un nouveau nom d'utilisateur ou pointez le chemin de la macro vers un répertoire n'utilisant pas de caractères spéciaux.
* Allez dans **Édition → Préférences → Ateliers** et assurez-vous que l'atelier n'est pas défini comme invisible.
* Avec les systèmes 32 bits et FreeCAD 0.16.6706, après les tentatives d'installation, les ateliers supplémentaires peuvent ne pas être disponibles. Dans ce cas
  + gardez la [vue rapport](/Report_view/fr "Report view/fr") ouverte lors du démarrage de FreeCAD et lisez l'erreur,
  + voir ce fil de discussion du forum [Assembly2 dans la version : 0.16.5602 (Git)](http://forum.freecadweb.org/viewtopic.php?t=12839#p102933)

Retrieved from "<http://wiki.freecad.org/index.php?title=How_to_install_additional_workbenches/fr&oldid=1296951>"