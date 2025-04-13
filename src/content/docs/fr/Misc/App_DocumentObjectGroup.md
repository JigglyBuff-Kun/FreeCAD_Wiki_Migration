---
title: App DocumentObjectGroup
---
## Introduction

![](/images/Folder.svg)

Un objet App DocumentObjectGroup, ou formellement un `App::DocumentObjectGroup`, est un élément simple qui permet de regrouper tout type de [App DocumentObject](/App_DocumentObject/fr "App DocumentObject/fr") dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") quel que soit son type de données.

Il a été développé pour organiser les objets dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") d'une manière logique pour l'utilisateur.

![](/images/FreeCAD_core_objects.svg)

Diagramme simplifié des relations entre les objets principaux du programme. La classe `App::DocumentObjectGroup` a une extension qui lui permet de regrouper tout type d'objet. Le groupe lui-même n'a pas beaucoup de propriétés.

## Utilisation

1. Appuyez sur le bouton ![](/images/Std_Group.svg) [Std Group](/Std_Group/fr "Std Group/fr") dans la barre d'outils de structure. Un Group vide est créé.
2. Pour ajouter des objets à un Group, sélectionnez-les dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") puis faites-les glisser et déposez-les sur le Group.
3. Pour supprimer des objets d'un Group, faites-les glisser hors du Group et sur l'étiquette du document en haut de la [vue en arborescence](/Tree_view/fr "Tree view/fr").

Voir la page [Std Group](/Std_Group/fr "Std Group/fr") pour les informations complètes, y compris son utilisation dans un [Script](/Std_Group/fr#Script "Std Group/fr").

## Propriétés

Un App DocumentObjectGroup (classe `App::DocumentObjectGroup`) est dérivé de la base [App DocumentObject](/App_DocumentObject/fr "App DocumentObject/fr") (`App::DocumentObject` class), par conséquent, il partage toutes les propriétés de ce dernier.

Voir les propriétés dans la page [Std Group](/Std_Group/fr "Std Group/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=App_DocumentObjectGroup/fr&oldid=1356680>"