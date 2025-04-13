---
title: BIM Bibliothèque
---
|  |
| --- |
| BIM Bibliothèque |
| Emplacement du menu |
| 3D/BIM → Outils 3D génériques → Bibliothèque d'objets |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **BIM Bibliothèque** vous permet de placer dans le modèle en cours un objet de l'[extension Parts Library](/Parts_Library_Workbench/fr "Parts Library Workbench/fr"). Il doit être installé via le ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr") pour que cet outil soit disponible.

![](/images/BIM_Library_screenshot.png)

La fenêtre de dialogue **Explorateur de bibliothèques** dans le [panneau des tâches](/Task_panel/fr "Task panel/fr") à gauche

## Utilisation

1. Appuyez sur le bouton ![](/images/BIM_Library.svg) Bibliothèque d'objets

   :   Résultat : dans la [vue combinée](/Combo_view/fr "Combo view/fr") → [panneau des tâches](/Task_panel/fr "Task panel/fr"), une fenêtre de dialogue intitulée **Explorateur de bibliothèques** s'affichera.
2. Cliquez sur un fichier du Navigateur de la bibliothèque.
3. Double-cliquez dessus ou appuyez sur le bouton Insérer
4. Cliquez sur un point dans la [vue 3D](/3D_view/fr "3D view/fr") ou entrez une coordonnée manuellement pour placer l'objet.

## Options

* Les fichiers [FCStd](/File_Format_FCStd/fr "File Format FCStd/fr"), STEP et [brep](/File_Format_FCStd/fr#*.brep "File Format FCStd/fr") sont pris en charge. Seuls les fichiers STEP et BREP sont plaçables. Les fichiers FCStd ne vous permettront pas de choisir un emplacement, car ils pourraient être composés d'une série complexe d'objets avec des positions significatives. Lorsque vous choisissez un fichier FCStd, son contenu sera inséré à la position définie dans le fichier.
* Les objets STEP et BREP sont insérés en tant que ![](/images/Arch_Equipment.svg) [Équipements](/Arch_Equipment/fr "Arch Equipment/fr") sans forme de base séparée. Ajouter ensuite une forme de base à ces objets détruira leur forme actuelle.
* Lors du placement d'un objet, vous pouvez choisir leur point d'insertion entre l'original (le point (`0,0,0`) défini dans le fichier), le haut, le milieu, le bas et la gauche, le centre et la droite.
* La bibliothèque peut fonctionner hors ligne, auquel cas elle dépend du module complémentaire de bibliothèque de pièces à installer (et mettre à jour par l'utilisateur) ou en ligne, auquel cas elle pointe directement à partir du [Parts Library Git repository](https://github.com/FreeCAD/FreeCAD-library) et permet de télécharger directement à partir de là.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Library/fr&oldid=1517773>"