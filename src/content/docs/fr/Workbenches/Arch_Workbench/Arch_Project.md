---
title: Arch Projet
---
:::caution
Cette commande est obsolète.Elle n'est plus disponible depuisversion 1.0 et suivantes. Utilisez plutôtBIM Projet.
:::

|  |
| --- |
| Arch Projet |
| Emplacement du menu |
| Arch → Projet |
| Ateliers |
| [Arch](/Arch_Workbench/fr "Arch Workbench/fr") |
| Raccourci par défaut |
| P O |
| Introduit dans la version |
| - |
| Voir aussi |
| [Arch Site](/Arch_Site/fr "Arch Site/fr"), [Arch Bâtiment](/Arch_Building/fr "Arch Building/fr") |
|  |

## Description

Le Arch Projet est un objet spécial permettant d’améliorer la compatibilité avec les fichiers [IFC](/Arch_IFC/fr "Arch IFC/fr"). Chaque fichier IFC doit contenir une entité [IfcProject](https://standards.buildingsmart.org/IFC/RELEASE/IFC4_1/FINAL/HTML/schema/ifckernel/lexical/ifcproject.htm). IfcProject est principalement utilisé pour définir les paramètres généraux du projet tels que les systèmes de projection, pour la compatibilité GIS, ou les systèmes d'unités.

Lors de l'exportation d'un modèle FreeCAD au format de fichier IFC, si votre modèle ne contient aucun objet Projet, un objet par défaut sera automatiquement créé, ce qui dans la plupart des cas sera suffisant. Toutefois, vous souhaiterez peut-être ajuster les paramètres du projet. Dans ce cas, l'ajout d'un objet Projet peut être utile. Lors de l'importation d'un fichier IFC, un objet Projet sera toujours créé. Cependant, si vous ne l'utilisez pas spécifiquement, vous pouvez simplement le supprimer après l'importation.

Remarquez que, bien que tout autre objet BIM puisse être ajouté à un projet, ce que la norme IFC n'interdit pas, la façon courante de procéder consiste toujours à n'avoir que des [Sites](/Arch_Site/fr "Arch Site/fr") ou des [Bâtiments](/Arch_Building/fr "Arch Building/fr") comme enfants directs d'un projet. Tous les autres objets BIM doivent être à l'intérieur de ces sites ou bâtiments. Le projet lui-même doit toujours figurer en haut de la structure de votre modèle, c'est-à-dire qu'il ne doit pas être inclus dans un autre objet.

## Utilisation

1. Appuyez sur le bouton ![](/images/Arch_Project.svg) Projet ou appuyez sur les touches P puis O.
2. Ajoutez n'importe quel objet à votre projet en les faisant glisser sur la [Vue en arborescence](/Tree_view/fr "Tree view/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Project/fr&oldid=1437545>"