---
title: Atelier ModernUI
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::
![](/images/ModernUI_workbench_icon.svg)

Icône de l'atelier ModernUI

## Introduction

L'atelier ModernUI est un [Atelier externe](/External_workbenches "External workbenches") qui remplace l'interface utilisateur standard. Il possède des fonctionnalités modernes telles que :

* Chaque atelier a son onglet ruban.
* L'onglet ruban **Modern UI** remplace le menu de niveau supérieur.
* L'activation de l'onglet du ruban d'un atelier fait apparaître des groupes d'outils de l'atelier.
* Les panneaux tels que la [Vue combinée](/Combo_view/fr "Combo view/fr") sont réduits/agrandis au passage de la souris.

## Références

* Auteur : Hakan Seven
* Code source sur github : [Code source Modern-UI](https://github.com/HakanSeven12/Modern-UI)

## Limites et dépannage

* Si vous rencontrez un comportement inattendu, essayez d'abord de désinstaller puis de réinstaller l'atelier ModernUI.
* L'atelier est principalement testé en anglais et peut présenter un comportement inattendu dans d'autres langues.
* L'installation d'autres ateliers après l'installation de ModernUI peut poser des problèmes.

## Installation

Installer le avec le ![](/images/Std_AddonMgr.svg) [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

Remarque : pour désinstaller, vous devez créer une macro et l'exécuter. Si vous n'êtes pas sûr de vous, envisagez de ne pas l'installer.

### Exécution de Modern UI dans un répertoire autonome

Pour tester facilement Modern UI sans interférer avec votre configuration standard, vous pouvez le contenir dans un répertoire séparé. La désinstallation de Modern UI s'effectue alors simplement en supprimant le répertoire. [introduit dans la version 0.19](/Release_notes_0.19/fr "Release notes 0.19/fr")

#### Linux

Par exemple :

```
$ mkdir modernUI  # new directory that contains Modern UI
$ cd modernUI
$ HOME="$PWD" FREECAD_USER_HOME="$PWD" FreeCAD_0.19.AppImage

```

Lorsque vous démarrez FreeCAD comme cela pour la première fois, vous avez une nouvelle configuration par défaut. Maintenant installez (et configurez) Modern UI. Ceci est essentiellement une [version *portable* de FreeCAD](/Download/fr#Note_aux_utilisateurs_de_GNU.2FLinux "Download/fr").

Au lieu d'utiliser la ligne de commande, vous pouvez également [créer une icône de bureau dédiée](/Start_up_and_Configuration/fr#D.C3.A9marrage_de_FreeCAD_.C3.A0_partir_du_bureau "Start up and Configuration/fr").

#### Windows

Il n'y a pas encore d'instructions dédiées pour Windows, cependant, c'est très similaire à [créer une version portable de FreeCAD sur un support USB](/Start_up_and_Configuration/fr#D.C3.A9marrage_de_FreeCAD_.C3.A0_partir_d.27un_medium_USB "Start up and Configuration/fr").

## Désinstaller

Des instructions détaillées sont disponibles sur [GitHub](https://github.com/HakanSeven12/Modern-UI#uninstallation).

La séquence de désinstallation est la suivante :

1. Désinstaller avec le ![](/images/AddonManager.svg) [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").
2. Redémarrez FreeCAD.
3. Créez une macro avec ce code :

   ```
   from PySide2 import QtCore, QtGui, QtWidgets
   mw = FreeCADGui.getMainWindow()
   mw.menuBar().show()
    
   WBList = FreeCADGui.listWorkbenches()
   for WB in WBList:
       FreeCADGui.activateWorkbench(WB)
       for tb in mw.findChildren(QtWidgets.QToolBar):
           tb.show()

   ```
4. Exécuter la macro.
5. Redémarrez FreeCAD.

## Liens

* Forum FreeCAD : <https://forum.freecadweb.org/viewtopic.php?f=34&t=44937>
* Rapport de bogues : <https://github.com/HakanSeven12/Modern-UI>
* Patreon (pour soutenir l'auteur) : <https://www.patreon.com/HakanSeven12>

Retrieved from "<http://wiki.freecad.org/index.php?title=ModernUI_Workbench/fr&oldid=1210321>"