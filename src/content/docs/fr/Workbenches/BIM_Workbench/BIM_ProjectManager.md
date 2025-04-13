---
title: BIM Gestion de projet
---
|  |
| --- |
| BIM Gestion de projet |
| Emplacement du menu |
| Gestion → Gérer un projet... |
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

La boîte de dialogue **BIM Configuration du projet** vous permet de créer un ensemble d'objets guides de guidage dans le document en cours ou dans un nouveau document, ce qui vous aidera à démarrer la modélisation d’un projet BIM.

![](/images/BIM_project_screenshot.png)

Configuration d'un projet BIM

## Utilisation

La fenêtre de dialogue de configuration de projet peut créer :

* Un nouveau [document](/Document_structure/fr "Document structure/fr"). Les autres objets seront créés dans le document couramment ouvert.
* Un [Site](/Arch_Site/fr "Arch Site/fr"). L'objet Site représente un terrain sur lequel votre projet sera situé. Vous pouvez lui attribuer un certain nombre de propriétés utiles, telles que l'adresse postale et les coordonnées de la terre. Lors de la création, le site est simplement un conteneur vide pour d'autres objets BIM, mais un objet 3D représentant le terrain réel peut être associé ultérieurement.
* Un [Bâtiment](/Arch_Building/fr "Arch Building/fr"). L'objet Bâtiment est un conteneur pour tous les objets BIM qui appartiendront à un même bâtiment. Vous pouvez définir un type de bâtiment et lui attribuer des dimensions rectangulaires brutes qui seront représentées par un rectangle dessiné sur le plan du sol (X, Y).
* Un ensemble d'[Axes](/Arch_Axis/fr "Arch Axis/fr"), en définissant leur nombre et leur espacement. Les axes servent de lignes directrices pour aligner des objets 2D et 3D. Ces axes peuvent être modifiés ou de nouveaux axes introduits ultérieurement.
* Un ensemble de [Parties de bâtiment](/Arch_BuildingPart/fr "Arch BuildingPart/fr") pour représenter les niveaux. Les Parties de bâtiment sont des objets conteneurs BIM génériques qui peuvent être utilisés pour regrouper d'autres objets BIM de plusieurs manières significatives, telles que des composants répétables ou des niveaux de construction.
* Un ensemble de [Groupes](/Std_Group/fr "Std Group/fr") par défaut à l'intérieur de chaque niveau. Les Groupes peuvent être utilisés pour organiser vos objets BIM dans des catégories plus explicites, telles que "Murs" ou "Colonnes". Ils n'ont aucun impact sur le modèle lui-même mais aident souvent à rendre la structure de votre modèle plus lisible lorsqu'elle contient beaucoup d'objets.

## Modèles

L'outil Projet prend en charge deux types de modèles :

* Une fois que vous avez rempli les différentes options, le contenu de l'assistant de configuration du projet BIM peut être **sauvegardé** en tant que modèle. Ces modèles peuvent être **restaurés** et adaptés ultérieurement. Les modèles de projet sont stockés sous forme de fichiers texte dans votre dossier utilisateur FreeCAD.
* Vous pouvez également enregistrer le contenu du document actuel en tant que modèle. Cela permettra d'enregistrer le document ouvert comme un fichier *.FCStd* standard, mais aussi d'inclure des paramètres BIM supplémentaires comme le plan de travail actuel ou les unités actuelles. En utilisant l'option *restaurer* à tout moment, le contenu de ce fichier modèle sera fusionné dans le document actif et tous les paramètres qu'il contient seront appliqués.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_ProjectManager/fr&oldid=1495665>"