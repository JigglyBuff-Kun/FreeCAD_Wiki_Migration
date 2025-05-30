---
title: Std Gérer les macros
---
|  |
| --- |
| Std Gérer les macros |
| Emplacement du menu |
| Macro → Gérer les macros... |
| Ateliers |
| Tous |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Std Exécuter une macro](/Std_DlgMacroExecuteDirect/fr "Std DlgMacroExecuteDirect/fr") |
|  |

## Description

La commande **Std Gérer les macros** ouvre la fenêtre de dialogue Gérer les macros. À partir de cette fenêtre de dialogue, des macros peuvent être exécutées, modifiées et gérées.

![](/images/Std_DlgMacroExecute_dialog.png)

La fenêtre de dialogue Gérer les macros

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Std_DlgMacroExecute.svg) Gérer les macros.
   * Sélectionnez l'option **Macro → ![](/images/Std_DlgMacroExecute.svg) Gérer les macros...** du menu.
2. La fenêtre de dialogue **Gérer les macros** s'ouvre. Voir [Options](#Options).

## Options

### Rechercher un fichier/Rechercher dans les fichiers

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

:   Ces deux champs de saisie peuvent être utilisés pour filtrer les macros de la liste des fichiers de l'onglet **Macros de l'utilisateur** ou de l'onglet **Macros du système**. Vous pouvez utiliser des expressions régulières ou simplement saisir du texte. Toutes les correspondances sont insensibles à la casse.

:   **Rechercher un fichier** filtre la liste par nom de fichier. Seuls les noms de fichiers qui correspondent au texte saisi apparaîtront dans la liste. **Rechercher dans les fichiers** filtre la liste par le contenu du fichier. Seuls les fichiers dont le contenu correspond au texte saisi apparaîtront dans la liste.

:   Supprimer tout le texte de la zone de saisie d'un filtre pour le désactiver. Si les deux champs de saisie contiennent du texte, les deux filtres sont appliqués. Le filtrage peut aboutir à une liste vide.

### Macros de l'utilisateur

:   L'onglet **Macros de l'utilisateur** liste les macros disponibles dans l'**emplacement des macros de l'utilisateur**.

1. Cliquez sur une macro dans la liste pour la sélectionner.
2. Le nom de la macro sélectionnée apparaîtra dans la case **Nom de la macro**.

### Macros du système

:   Pour utiliser l'onglet **Macros du système**, vous devez créer un dossier nommé Macro comme un dossier apparenté au dossier bin où FreeCAD est installé et y placer quelques macros.

:   Pour trouver le dossier bin, entrez ceci dans la [console Python](/Python_console/fr "Python console/fr") :

:   ```
    App.getHomePath()

    ```

1. Cliquez sur une macro dans la liste pour la sélectionner.
2. Le nom de la macro sélectionnée apparaîtra dans la case **Nom de la macro**.

### Emplacement des macros de l'utilisateur

1. Appuyez sur le bouton ... pour modifier l'emplacement des macros utilisateur.
2. Accédez à un autre dossier et sélectionnez-le.

### Exécuter

1. Pour exécuter une macro, effectuez l'une des opérations suivantes :
   * Sélectionnez la macro dans la liste et appuyez sur le bouton Exécuter.
   * Double-cliquez sur la macro dans la liste.
2. La boîte de dialogue se ferme.
3. La macro est exécutée.

### Fermer

* Appuyez sur Échap ou sur le bouton Fermer pour fermer la fenêtre de dialogue.

### Créer

1. Appuyez sur le bouton Céer pour créer un nouveau fichier de macro.
2. Entrez un nom dans la boîte de dialogue qui apparaît. Il n'est pas nécessaire d'inclure l'extension .FCMacro.
3. Appuyez sur Entrée ou sur le bouton OK.
4. Les deux fenêtres de dialogue se ferment.
5. Le nouveau fichier est ouvert dans l'éditeur de macros.

### Supprimer

1. Sélectionnez la macro que vous souhaitez supprimer dans la liste.
2. Appuyez sur le bouton Supprimer.
3. Appuyez sur le bouton Oui dans la boîte de dialogue de confirmation qui apparaît.

### Éditer

1. Sélectionnez la macro que vous souhaitez modifier dans la liste.
2. Appuyez sur le bouton Éditer.
3. La boîte de dialogue se ferme.
4. Le fichier sélectionné est ouvert dans l'éditeur de macros.

### Renommer

1. Sélectionnez la macro que vous souhaitez renommer dans la liste.
2. Appuyez sur le bouton Renommer.
3. Entrez un nouveau nom dans la fenêtre de dialogue qui apparaît. Il n'est pas nécessaire d'inclure l'extension .FCMacro.
4. Appuyez sur Entrée ou sur le bouton OK.

### Dupliquer

1. Sélectionnez la macro que vous souhaitez dupliquer dans la liste.
2. Appuyez sur le bouton Dupliquer.
3. Entrez un nouveau nom dans la fenêtre de dialogue qui apparaît. Il n'est pas nécessaire d'inclure l'extension .FCMacro.
4. Appuyez sur Entrée ou sur le bouton OK.

### Barre d'outils

1. Sélectionnez la macro que vous souhaitez ajouter à une barre d'outils personnalisée dans la liste.
2. Appuyez sur le bouton Barre d'outils.
3. Deux boîtes de dialogue pas à pas vous guideront à travers les étapes requises. Voir [Personnalisation de l'interface](/Interface_Customization/fr "Interface Customization/fr") pour plus d'informations.

### Téléchargement

1. Appuyez sur le bouton Télécharger pour lancer le ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

## Remarques

* Pour en savoir plus sur les macros, consultez la page [Macros](/Macros/fr "Macros/fr").

## Préférences

Voir aussi : [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr").

* L'emplacement des macros de l'utilisateur peut également être modifié dans les préférences : **Édition → Préférences... → Python → Macro → Chemin d'accès aux macros**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_DlgMacroExecute/fr&oldid=1533542>"