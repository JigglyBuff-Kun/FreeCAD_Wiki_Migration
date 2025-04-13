---
title: Ajouter un atelier au gestionnaire des extensions
---
## Introduction

Ces instructions expliquent, étape par étape, comment ajouter un atelier Python au [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

Conditions requises :

* Un dépôt git local.
* Un dépôt git distant. Les hôtes git pris en charge sont [GitHub](https://github.com), [GitLab](https://about.gitlab.com/), [Framagit](https://framagit.org/public/projects) et [Debian Salsa](https://salsa.debian.org/public).
* Git doit être installé.

## Activer le mode développeur

1. Ouvrez l'[Éditeur de préférences](/Preferences_Editor/fr "Preferences Editor/fr") : sélectionnez l'option **Édition → ![](/images/Std_DlgPreferences.svg) Préférences...** dans le menu.
2. Sélectionnez l'option **![](/images/Std_AddonMgr.svg) Gestionnaire des extensions** dans la barre de gauche.
3. Dans l'onglet **Options du gestionnaire des extensions**, cochez la case **Activer le mode développeur des extensions**. Cela activera le bouton Outils du développeur... dans le gestionnaire des extensions.
4. Appuyez sur le bouton OK pour fermer l'éditeur de préférences.

## Créer le fichier package.xml

1. Ouvrez le [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr") : sélectionnez l'option **Outils → ![](/images/Std_AddonMgr.svg) Gestionnaire des extensions** dans le menu.
2. Appuyez sur le bouton Outils du développeur....
3. La boîte de dialogue **Outils pour le développeur d'extensions** s'ouvre.  
   ![](/images/Addon_Manager_Addon_Developer_Tools_Dialog.png)
4. Saisissez les éléments suivants :
   * **Chemin vers l'extension** : chemin vers le dépôt git local.
   * **Nom de l’extension** : ce nom apparaîtra dans les listes du gestionnaire des extensions.
   * **Description** : idem.
   * **Version** : idem.
   * **URL du dépôt** : idem.
   * **Branche principale** : idem.
   * **URL du README** : recommandé.
   * **Icône** : l'icône doit faire partie du dépôt.
5. Appuyez sur le bouton ![](/images/List-add.svg) au bas de la boîte de dialogue.
6. La boîte de dialogue **Élément de contenu** s'ouvre.  
   ![](/images/Addon_Manager_Content_Item_Dialog.png)
7. Le **Type de contenu** doit être défini sur `Atelier`.
8. Cochez la case **C'est le seul élément de l'extension**.
9. Saisissez le nom de la classe **Atelier**. Il s'agit du nom de classe spécifié dans le fichier InitGui.py.
10. Pour le **Sous-répertoire**, entrez `./`.
11. Appuyez sur le bouton OK pour fermer le dialogue.
12. Appuyez sur le bouton Enregistrer pour fermer la boîte de dialogue **Outils pour le développeur d'extensions** et enregistrer le fichier package.xml.
13. Appuyez sur le bouton ![](/images/Process-stop.svg) Fermer pour fermer le gestionnaire des extensions.
14. Poussez le fichier créé vers votre dépôt distant.

## Ajouter l'atelier au fichier .gitmodules

1. Faites un fork <https://github.com/FreeCAD/FreeCAD-addons>.
2. Créez une nouvelle branche.
3. Modifiez le fichier .gitmodules pour inclure votre nouvelle extension, par ordre alphabétique.
4. Poussez la nouvelle branche vers GitHub.
5. Soumettez une Pull Request au dépôt FreeCAD-Addons avec le nouveau fichier .gitmodules.

## Voir aussi

* [Création d'atelier](/Workbench_creation/fr "Workbench creation/fr")
* [Métadonnées du package](/Package_Metadata "Package Metadata") : informations détaillées sur le fichier package.xml.

Retrieved from "<http://wiki.freecad.org/index.php?title=Add_Workbench_to_Addon_Manager/fr&oldid=1417646>"