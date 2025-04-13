---
title: Installer des ateliers supplémentaires
---
## Introduction

Depuis la v0.17, il est facile d'ajouter des [ateliers externes](/External_workbenches/fr "External workbenches/fr") en utilisant le [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"). Un utilisateur régulier n'a pas besoin de faire plus que d'utiliser cet outil.

Lire la suite pour plus d'informations concernant l'installation des ateliers.

## Description globale

Les ateliers ne sont rien de plus que des collections de fichiers placés dans un dossier. Ce dossier est généralement compressé dans une archive zip. Lors de l'installation, ce dossier est simplement décompressé et copié dans

```
$ROOT_DIR/Mod/

```

où `$ROOT_DIR` est un des premiers répertoires recherché par FreeCAD au démarrage. C'est essentiellement ce que fait le [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

Les répertoires `Mod /` sont analysés à chaque démarrage de FreeCAD et les ateliers disponibles sont automatiquement ajoutés.

## Installation à l'échelle du système

Les ateliers installés de cette manière seront disponibles pour tous les utilisateurs. Selon votre système, vous pourriez avoir besoin de privilèges d'administrateur pour accéder au répertoire d'installation.

Copiez le répertoire de l'atelier dans `$INSTALL_DIR/Mod/` où `$INSTALL_DIR` correspond au répertoire d'installation de FreeCAD.

* Pour Linux, c'est généralement `/usr/share/freecad/Mod/`
* Pour Windows, c'est généralement `C:\Program Files\FreeCAD\Mod\`
* Pour macOS, c'est généralement `/Applications/FreeCAD/Mod/`

## Installation pour un seul utilisateur

Les ateliers installés de cette manière ne seront disponibles que pour un seul utilisateur mais ne nécessiteront aucun privilège d'administrateur.

Copiez le dossier de l'atelier dans `$USER_DIR/Mod/` où `$USER_DIR` est le répertoire FreeCAD d'un `nom d'utilisateur` spécifique. (vous pouvez trouver ce dernier en tapant `App.getUserAppDataDir()` dans la [console Python](/Python_console/fr "Python console/fr")).

* Sous Linux, il s'agit généralement de /home/<username>/.local/share/FreeCAD/Mod/
* Sous Windows, c'est `%APPDATA%\FreeCAD\Mod\`, lequel est généralement `C:\Users\username\Appdata\Roaming\FreeCAD\Mod\`
* Sous macOS, c'est généralement `/Users/username/Library/Application Support/FreeCAD/Mod/`.

## Informations supplémentaires

Pour plus d'informations pour créer votre propre atelier, allez sur [Documentation pour utilisateurs avancés](/Power_users_hub/fr "Power users hub/fr") et sur [Documentation pour développeurs](/Power_users_hub/fr "Power users hub/fr").

Voir aussi une description détaillée sur la page [Comment installer un atelier supplémentaire](/How_to_install_additional_workbenches/fr "How to install additional workbenches/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Installing_more_workbenches/fr&oldid=1526302>"