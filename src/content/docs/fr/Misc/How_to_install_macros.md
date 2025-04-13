---
title: Comment installer des macros
---

|                                         |
| --------------------------------------- |
| Tutoriel                                |
| Thème                                   |
| Programmation                           |
| Niveau                                  |
| Programmeur moyen                       |
| Temps d'exécution estimé                |
| 15 minutes                              |
| Auteurs                                 |
| [Mario52](/User:Mario52 "User:Mario52") |
| Version de FreeCAD                      |
| Toutes versions                         |
| Fichiers exemples                       |
| _None_                                  |
| Voir aussi                              |
| _None_                                  |
|                                         |

## Description

Depuis la v0.17, il est facile d'ajouter des macros en utilisant le [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"). Un utilisateur régulier n'a pas besoin de faire plus que d'utiliser cet outil. Continuez à lire pour plus d'informations sur l'installation de [macros](/Macros/fr "Macros/fr").

Les macros sont des séquences de commandes utilisées pour effectuer une opération de dessin complexe. Les macros sont des scripts en [Python](/Python/fr "Python/fr"), ce qui signifie qu'il s'agit de fichiers texte pouvant être écrits et modifiés à l'aide d'un éditeur de texte.

Alors que les scripts Python ont normalement pour extension `.py`, les macros FreeCAD doivent avoir comme extension `.FCMacro`. Une collection de macros écrites par des utilisateurs expérimentés se trouve dans la page [Macros](/Macros_recipes/fr "Macros recipes/fr").

Voir [Introduction à Python](/Introduction_to_Python/fr "Introduction to Python/fr") pour en savoir plus sur le langage de programmation Python, puis sur [Tutoriel sur les scripts Python](/Python_scripting_tutorial/fr "Python scripting tutorial/fr") et sur [principes de base des scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr") pour lancer la création de scripts dans FreeCAD.

Ici une video sur l'installation [installing FreeCAD macros in Ubuntu](https://wiki.opensourceecology.org/wiki/Installing_Macros_in_FreeCAD).

## Le menu Macro et sa barre d'outils

### Barre d'outils

- ![](/images/Std_DlgMacroRecord.svg) [Enregistrer une macro](/Std_DlgMacroRecord/fr "Std DlgMacroRecord/fr")
- ![](/images/Std_MacroStopRecord.svg) [Arrêter l'enregistrement de la macro](/Std_MacroStopRecord/fr "Std MacroStopRecord/fr")
- ![](/images/Std_DlgMacroExecute.svg) [Gérer les macros](/Std_DlgMacroExecute/fr "Std DlgMacroExecute/fr")
- ![](/images/Std_DlgMacroExecuteDirect.svg) [Exécuter une macro](/Std_DlgMacroExecuteDirect/fr "Std DlgMacroExecuteDirect/fr")

### Menu

Outre les outils de la barre d'outils, les fonctions suivantes sont également disponibles dans le menu **Macro**.

- [Attacher au débogueur distant...](/Std_MacroAttachDebugger/fr "Std MacroAttachDebugger/fr")

* ![](/images/Std_MacroStartDebug.svg) [Déboguer la macro](/Std_MacroStartDebug/fr "Std MacroStartDebug/fr")
* ![](/images/Std_MacroStopDebug.svg) [Arrêter le débogage](/Std_MacroStopDebug/fr "Std MacroStopDebug/fr")

- [Passer outre](/Std_MacroStepOver/fr "Std MacroStepOver/fr")
- [Rentrer dedans](/Std_MacroStepInto/fr "Std MacroStepInto/fr")
- [Basculer le point d'arrêt](/Std_ToggleBreakpoint/fr "Std ToggleBreakpoint/fr")

## Répertoires des macros

Les macros sont créées dans un dossier spécifique du répertoire FreeCAD de l'utilisateur. Ce répertoire peut être configuré dans la [boîte d'exécution des macros](/Std_DlgMacroExecute/fr "Std DlgMacroExecute/fr") ou dans l'[éditeur de préférences](/Preferences_Editor/fr "Preferences Editor/fr"), via le menu **Édition → Préférences → Python → Macro → Paramètres d'enregistrement des macros**.

Les macros téléchargées doivent également être placées dans ce répertoire.

### Répertoire par défaut

Les macros peuvent être simplement copiées dans

```
$ROOT_DIR/

```

où `$ROOT_DIR` est un des premiers répertoire recherché par FreeCAD au démarrage.

Le `$ROOT_DIR` pourrait être un répertoire système, auquel cas la macro est installée pour tous les utilisateurs.

- Sous Linux, il s’agit généralement de `/usr/share/freecad/`.
- Sous Windows, il s’agit généralement de `C:\Program Files\FreeCAD\`.
- Sous Mac OSX, il s’agit généralement de `/Applications/FreeCAD/`.

Le `$ROOT_DIR` pourrait être le répertoire d'un utilisateur particulier.

- Sous Linux, il s’agit généralement de `/home/username/.local/share/FreeCAD/` (version 0.20 et suivantes) ou `/home/username/.FreeCAD/` (version 0.19 et précédentes).
- Sous Windows, il s’agit généralement de `C:\Users\username\AppData\FreeCAD\`
- Sous Mac OSX, il s’agit généralement de `/Users/username/Library/Preferences/FreeCAD/`.

### Configuration du répertoire utilisateur

1. Ouvrez le menu **Macro → ![](/images/Std_DlgMacroExecute.svg) [Gérer les macros...](/Std_DlgMacroExecute/fr "Std DlgMacroExecute/fr")** pour ouvrir la [fenêtre d'exécution des macros](/Std_DlgMacroExecute/fr "Std DlgMacroExecute/fr").

![](/images/Dxf_Importer_Install_01.png)

Ouverture de la boîte de dialogue de lancement des macro

2. Définissez l'emplacement `User macros location` approprié.

- Linux: généralement `/home/username/.local/share/FreeCAD/` (version 0.20 et suivantes) ou `/home/username/.FreeCAD/` (version 0.19 et précédentes)
- Windows: généralement `C:\Users\username\AppData\Roaming\FreeCAD\`.
- MacOS: généralement `/Users/username/Library/Preferences/FreeCAD/`.

![](/images/Dxf_Importer_Install_02.png)

Paramétrage du répertoire des macros

3. Accédez à ce répertoire sur votre ordinateur.

- Linux: collez l'adresse dans votre gestionnaire de fichiers, "Nautilus" ou autre. Vous devrez peut-être appuyer sur Ctrl+H pour rendre le répertoire masqué `.FreeCAD /` visible.
- Windows: collez l'adresse dans votre "Explorateur de fichiers" et confirmez.
- MacOS: localisez le dossier dans le "Finder" ou collez l'adresse dans un "Explorateur de fichiers"; rappelez-vous du préfixe `file:///` dans l'explorateur de fichiers pour un fichier sur le disque.

![](/images/Dxf_Importer_Install_03.png)

Accés au répertoire des macros dans le système d'exploitation

4. Ajoutez des fichiers de macro à ce répertoire.

- Linux: laissez le gestionnaire de fichiers ouvert et marquez l’emplacement pour un accès plus rapide.
- Windows: laissez ouvert l'explorateur de fichiers.
- MacOS: laissez une fenêtre du "Finder" ouverte ou enregistrez l'emplacement dans votre "Explorateur de fichiers", ou configurez un "Alias" pour le désigner, ou faites glisser le dossier dans la "Barre latérale" du "Finder" afin il est là pour utiliser d'autres programmes tels que des éditeurs de texte.

![](/images/Dxf_Importer_Install_04.png)

Le répertoire des macros

## Installation de macros

### Méthode automatique

À partir de FreeCAD 0.17, utilisez le ![](/images/Std_AddonMgr.svg) [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr") dans **Outils → Gestionnaire des extensions** pour installer une macro incluse dans le dépôt [FreeCAD-macros](https://github.com/FreeCAD/FreeCAD-macros).

Dans les versions précédentes de FreeCAD, vous pouviez utiliser deux méthodes automatisées pour installer des macros et d’autres extensions :

- [addons_installer.FCMacro](https://github.com/FreeCAD/FreeCAD-addons): elle-même une macro, elle était le précurseur du gestionnaire des extensions et est hébergée dans le répertoire [FreeCAD-addons](https://github.com/FreeCAD/FreeCAD-addons). Vous n'avez pas besoin d'utiliser cet outil dans les nouvelles installations de FreeCAD.
- [freecad-pluginloader](https://github.com/microelly2/freecad-pluginloader): également une macro, elle pourrait être utilisée pour installer de nouveaux composants dans FreeCAD. Ce n'est plus développé.

La méthode recommandée pour installer des extensions, c'est-à-dire des [Ateliers externes](/External_workbenches/fr "External workbenches/fr") et les macros, est le ![](/images/Std_AddonMgr.svg) [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"). Toutefois, vous pouvez toujours ajouter des macros à votre système avec les méthodes manuelles décrites dans les sections suivantes. Ceci est utile si vous développez et testez votre propre code.

### Méthode manuelle 1. Copiez le code dans l'éditeur de macro

Pour les macros relativement petites, 300 lignes ou moins, le code peut être copié et collé directement dans l'éditeur de macros FreeCAD.

Nous utiliserons ![](/images/Part_Prism_Apothem.svg) [Macro Apothem Based Prism GUI](/Macro_Apothem_Based_Prism_GUI/fr "Macro Apothem Based Prism GUI/fr") par exemple.

1. Allez sur la page wiki macro qui devrait être présente dans la liste [Macros](/Macros_recipes/fr "Macros recipes/fr").

S'il y a une icône personnalisée, téléchargez-la. Cliquez dessus avec le bouton droit de la souris et sélectionnez `Save image as...`; Placez l'icône dans le répertoire des macros. Cette icône peut être utilisée comme raccourci pour la macro dans une [Barre d'outils personnalisée](/Customize_Toolbars/fr "Customize Toolbars/fr"). L'icône par défaut est ![](/images/Text-x-python.png).

![](/images/Macro_Install_HowTo_28.png)

Téléchargement de l'icône depuis la page macro

2. Dans la page macro, sélectionnez le code dans les sections _Script_ ou _Macro_ et copiez-le.

3. Dans FreeCAD, ouvrez le menu **Macro → ![](/images/Std_DlgMacroExecute.svg) [Gérer les macros...](/Std_DlgMacroExecute/fr "Std DlgMacroExecute/fr")** pour ouvrir la [fenêtre d'exécution des macros](/Std_DlgMacroExecute/fr "Std DlgMacroExecute/fr").

![](/images/Dxf_Importer_Install_01.png)

Ouverture de la boîte de dialogue de lancement des macro

4. Cliquer Créer.

![](/images/Macro_Install_HowTo_17.png)

Création d'une nouvelle macro

5. Entrez le nom de la macro, ici `Macro_Apothem_Based_Prism_GUI`, puis appuyez sur OK.

![](/images/Macro_Install_HowTo_18.png)

Renseignement du nom de la macro

6. La fenêtre d'édition de macros de FreeCAD est maintenant disponible et porte le nom de notre future macro.

![](/images/Macro_Install_HowTo_19.png)

Fenêtre d'édition de macros

7. Collez le code dans la fenêtre de l'éditeur puis cliquez sur la croix de l'onglet pour fermer la fenêtre.

![](/images/Macro_Install_HowTo_20.png)

Fermeture de la fenêtre

8. Une fenêtre apparaît vous demandant de confirmer l'enregistrement du code. Cliquez sur Oui. Vous pouvez également utiliser Ctrl+S pour enregistrer le fichier.

Redémarrez FreeCAD pour enregistrer correctement la nouvelle macro.

![](/images/Macro_Install_HowTo_27.png)

Fenêtre pour confirmer la sauvegarde

9. Ouvrez à nouveau le menu, **Macro → ![](/images/Std_DlgMacroExecute.svg) [Gérer les macros...](/Std_DlgMacroExecute/fr "Std DlgMacroExecute/fr")**, sélectionnez la nouvelle macro et appuyez sur Exécuter.

![](/images/Macro_Install_HowTo_21.png)

Cliquez sur votre macro pour la jouer

10. La macro s'exécute. Remplissez les champs avec vos valeurs et cliquez sur le bouton OK.

![](/images/Macro_Install_HowTo_22.png)

La macro en action; remplissez les informations et appuyez sur OK lorsque vous êtes prêt

11. Cette macro doit renvoyer une erreur si aucun document n'est actif. Les autres macros ouvrent un nouveau document s'il n'en existe pas.

Créez un nouveau document avec **Fichier → ![](/images/Std_New.svg) [Nouveau](/Std_New/fr "Std New/fr")** puis répétez les étapes précédentes pour exécuter la macro.

![](/images/Macro_Install_HowTo_23.png)

La macro renvoyant une erreur si aucun document n'est actif

12. Lorsqu'un document actif est disponible, la macro s'exécute et crée un objet.

![](/images/Macro_Install_HowTo_24.png)

Objet crée par la macro

13. Vous pouvez ouvrir à nouveau la macro dans l'éditeur pour l'exécuter ou la modifier. Accédez à **Macro → ![](/images/Std_DlgMacroExecute.svg) [Gérer les macros...](/Std_DlgMacroExecute/fr "Std DlgMacroExecute/fr")**, sélectionnez la macro et appuyez sur Modifier.

![](/images/Macro_Install_HowTo_25.png)

Ouverture de la macro dans l'éditeur

14. La macro peut maintenant être exécutée avec **Macro → ![](/images/Std_DlgMacroExecuteDirect.svg) [Exécuter une macro](/Std_DlgMacroExecuteDirect/fr "Std DlgMacroExecuteDirect/fr")** ou en cliquant sur le ![](/images/Std_DlgMacroExecuteDirect.svg) [Exécuter une macro](/Std_DlgMacroExecuteDirect/fr "Std DlgMacroExecuteDirect/fr") dans la barre d'outils.

![](/images/Macro_Install_HowTo_26.png)

Exécution de la macro chargée dans l'éditeur

### Méthode manuelle 2. Ajouter un fichier de macro à partir d'un fichier .zip compressé

Certaines macros sont trop importantes pour être copier-coller dans l'éditeur de macros être hébergées sur le wiki. Dans ce cas, le code peut être hébergé ailleurs, dans un répertoir Github ou sur le [Forum FreeCAD](https://forum.freecadweb.org/). Le code peut également être compressé dans un fichier `.zip`, tarball `.tar.xz` ou dans un autre type d'archive s'il contient plusieurs fichiers. Si le code est distribué de cette manière, l'archive doit être extraite et les fichiers placés dans le répertoire macros.

Nous utiliserons ![](/images/Text-x-python.png) [Macro screw maker](/Macro_screw_maker1_2/fr "Macro screw maker1 2/fr") par exemple.

1. Téléchargez le code compressé à partir du forum,[Screw Maker](http://forum.freecadweb.org/viewtopic.php?f=22&t=6558#p52887).

Vous devez utiliser un décompresseur pour obtenir les fichiers internes.

- Pour Windows, vous pouvez utiliser une application telle que [7-zip](http://www.7-zip.org/) ou [L-Zarc](http://www.kanmandet.dk/?p=37) ou [http: //www.quickzip.org/quickzip51.html quickzip].
- Pour Linux, vous pouvez utiliser une commande du terminal

```
unzip your_file.zip -d your_directory

```

2. Téléchargez l'archive compressée avec le code de la macro dans un dossier local.

![](/images/Macro_Install_HowTo_01.png)

Téléchargement de l'archive compressée avec le code de macro dans un dossier local

3. Décompressez votre fichier dans le dossier.

![](/images/Macro_Install_HowTo_02.png)

Décompressez votre fichier dans le dossier

4. Le décompresseur crée un nouveau répertoire avec les fichiers décompressés.

![](/images/Macro_Install_HowTo_03.png)

Le nouveau répertoire créé après la décompression de l'archive

5. Accédez au nouveau répertoire et copiez ou coupez le fichier macro.

![](/images/Macro_Install_HowTo_04.png)

Saisie du nouveau répertoire créé avec le fichier de macro décompressé

6. Accédez au répertoire des macros et collez le fichier à cet endroit.

![](/images/Macro_Install_HowTo_05.png)

Placer le fichier macro dans le répertoire macro

7. Dans FreeCAD, ouvrez le menu **Macro → ![](/images/Std_DlgMacroExecute.svg) [Gérer les macros...](/Std_DlgMacroExecute/fr "Std DlgMacroExecute/fr")** pour ouvrir la [fenêtre d'exécution des macros](/Std_DlgMacroExecute/fr "Std DlgMacroExecute/fr").

![](/images/Macro_Install_HowTo_06.png)

Ouverture de la boîte de dialogue de lancement des macro

8. Sélectionnez la nouvelle macro et appuyez sur Execute.

![](/images/Macro_Install_HowTo_07.png)

Cliquez sur votre macro pour la jouer

9. La macro s'exécute maintenant. Sélectionnez les options souhaitées et cliquez sur le bouton Create.

![](/images/Macro_Install_HowTo_08.png)

La macro en action; sélectionnez les options souhaitées et appuyez sur Créer lorsque vous êtes prêt

![](/images/Macro_Install_HowTo_30.png)

Objet crée par la macro

## Exécuter une macro en ligne de commande

Ligne de commande pour exécuter une macro en (.FCMacro or .py)

sur Windows

```
"C:\Program Files\FreeCAD\bin\FreeCAD.exe" "C:\Users\userName\AppData\Roaming\FreeCAD\Mod\WorkFeature\start_WF.FCMacro"

```

sur Linux

```
todo

```

## Erreurs dans les macros

### Exemples de code erroné dû à des erreurs d'indentation

L'espace blanc au début des lignes (indentation) dans le langage de programmation [Python](/Python/fr "Python/fr") est très important et fait partie intégrante du code. Un espace inapproprié peut empêcher le code de s'exécuter ou présenter des erreurs.

Cette section décrit certaines erreurs susceptibles d’être rencontrées lors des opérations de copier-coller et d’écriture de code macro.

Une erreur d’indentation typique ressemble à ceci:

```
<unknown exception traceback><type 'exceptions.IndentationError'>: ('expected an indented block', ('C:/Users/d/AppData/Roaming/FreeCAD/Macro_Apothem_Based_Prism_GUI.FCMacro', 21, 3, 'def priSm(self):\n'))

```

#### Exemple 1

Si le code manque d'indentation, le code ne fonctionnera pas. Les définitions de classe (`class`) et de fonction (`def ()`) ainsi que les structures de contrôle (`if`, `while`, `for`) doivent être suivies d'un bloc de code en retrait.

Cette erreur est possible si l'utilisateur ne copie pas le code correctement et si tous les espaces sont supprimés par inadvertance.

![](/images/Macro_Install_HowTo_09.png)

Code Python sans indentation; cela provoquera une erreur quand il sera exécuté

Problème d'indentation résolu.

![](/images/Macro_Install_HowTo_10.png)

Code Python avec l'indentation correcte

Si le code est sélectionné, toutes les lignes doivent être mises en surbrillance jusqu'au bord gauche indiquant que les lignes sont alignées.

![](/images/Macro_Install_HowTo_11.png)

Code Python en surbrillance indiquant que toutes les lignes commencent au bord gauche

#### Exemple 2

Si un espace supplémentaire est introduit au début de toutes les lignes, l'interpréteur Python échouera et se plaindra de l'indentation inutile. Dans ce cas, toutes les lignes nécessitent la suppression de l'espace initial.

![](/images/Macro_Install_HowTo_12.png)

Code Python avec espace supplémentaire sur chaque ligne

#### Exemple 3

Ici, le code a été copié depuis un fil de forum en utilisant le bouton Select all. Apparemment, le choix est bon.

![](/images/Macro_Install_HowTo_14.png)

Code Python copié à partir d'un forum

Cependant, lorsque la sélection est collée dans l'éditeur de macro, une indentation indésirable semble apparaître.

![](/images/Macro_Install_HowTo_15.png)

Code Python copié d'un forum dans l'éditeur de macros; l'indentation inutile est ajoutée

Dans ce cas, les espaces initiaux doivent être supprimés. Cela peut être fait avec un éditeur de texte spécialisé pour réduire rapidement l'indentation des lignes.

Sous Windows, [++](http://notepad-plus-plus.org/Notepad) peut effectuer une sélection avec Alt et le déplacement de la souris, puis utiliser **Edit → Indent → Diminuer l'indentation**.

![](/images/Macro_Install_HowTo_16.png)

Code Python avec l'indentation correcte

#### Exemple 4

Ici, la sélection sélectionne également les numéros de ligne dans l'exemple de code. Si cette sélection est collée dans l'éditeur de macro, cela ne fonctionnera pas. Tous les numéros de ligne doivent être supprimés et les espaces ajustés de manière à ce que le code Python présente l'indentation appropriée.

![](/images/Macro_Install_HowTo_29.png)

Sélection qui sélectionne également les numéros de ligne; si ce code est collé dans l'éditeur de macro, cela ne fonctionnera pas

#### Bon code

![](/images/Macro_Install_HowTo_13.png)

Code Python avec l'indentation correcte

### Pour ceux qui ne voient aucune information s'afficher

Les macros peuvent générer des informations dans la vue du rapport afin de détailler l'action du code en cours d'exécution.

Si aucune information n'est affichée, assurez-vous que la vue du rapport et la console [Python](/Python/fr "Python/fr") sont visibles et que la sortie est dirigée vers la vue du rapport.

#### Informations sur l'affichage

Les macros FreeCAD ont deux méthodes pour afficher des informations dans la vue rapport.

Les fonctions FreeCAD

```
FreeCAD.Console.PrintMessage("Hello World! \n")
FreeCAD.Console.PrintError("Hello World! \n")
FreeCAD.Console.PrintWarning("Hello World! \n")

```

La simple fonction Python

```
print("Hello World!")

```

#### Activer la vue rapport

Pour voir les informations affichées dans la console, vous devez:

1. Accédez au menu **Affichage → Panneaux**.

![](/images/Macro_Install_HowTo_31.png)

![](/images/Macro_Install_HowTo_32.png)

Rendre les panneaux visibles dans le menu Affichage → Panneaux

2. Cochez `Report view` et `Python console`.

![](/images/Macro_Install_HowTo_33.png)

Activation de l'affichage du rapport et de la console Python

3. Les panneaux sont maintenant visibles et les commandes telles que `FreeCAD.Console.PrintMessage()` affichent maintenant les informations qui apparaissent dans la `Affichage du rapport`.

![](/images/Macro_Install_HowTo_34.png)

Fenêtre principale de FreeCAD avec la vue Rapport et la console Python

#### Activer la commande print()

FreeCAD devra peut-être être configuré pour que la fonction `print()` de [Python](/Python/fr "Python/fr") redirige correctement sa sortie vers la vue du rapport.

**1 :** cliquez sur le menu **Édition** puis **Préférences**

1. Allez dans [Editeur de Préférences](/Preferences_Editor/fr "Preferences Editor/fr") avec le menu **Édition → Préférences**.

![](/images/Macro_Install_HowTo_35.png)

Entrer dans l'éditeur de préférences

2. Accédez à la section **Python** puis à **Fenêtre de sortie → Interpréteur Python**.

![](/images/Macro_Install_HowTo_36.png)

Préférences de la fenêtre de sortie

3. Cochez les deux cases:

- ![](/images/Case_a_cocher_O.png) Rediriger es messages internes Python vers la vue rapport

- ![](/images/Case_a_cocher_O.png) Rediriger les erreurs internes de Python vers la vue rapport

et validez en cliquant sur le bouton OK.

![](/images/Macro_Install_HowTo_37.png)

Redirection interne

![](/images/Macro_Install_HowTo_38.png)

Commandes Python imprimant des informations dans la vue rapport

Retrieved from "<http://wiki.freecad.org/index.php?title=How_to_install_macros/fr&oldid=1533548>"
