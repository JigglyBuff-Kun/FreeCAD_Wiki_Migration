---
title: SheetMetal Déplier
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| SheetMetal Déplier |
| Emplacement du menu |
| SheetMetal → Déplier |
| Ateliers |
| [SheetMetal](/SheetMetal_Workbench/fr "SheetMetal Workbench/fr") |
| Raccourci par défaut |
| U |
| Introduit dans la version |
| - |
| Voir aussi |
| [SheetMetal Déplier sans assistance](/SheetMetal_UnattendedUnfold/fr "SheetMetal UnattendedUnfold/fr") |
|  |

## Description

La commande ![](/images/SheetMetal_Unfold.svg) **SheetMetal Déplier** permet de déplier une tôle.

## Utilisation

1. Sélectionnez une face plane de tôle.
2. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/SheetMetal_Unfold.svg) Déplier.
   * Sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_Unfold.svg) Déplier** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_Unfold.svg) Déplier** dans le menu contextuel.
   * Utilisez le raccourci clavier : U.
3. Un objet **Unfold** est créé et le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Propriétés du dépliage** s'ouvre.
   * Vous pouvez également appuyer sur le bouton Face et sélectionner une face plane différente pour repositionner l'objet déplié.
   * Si vous n'utilisez pas de **Fiche de définition du matériau** (voir [Remarques](#Remarques)), définissez les **Paramètres du matériau** :
     1. Réglez l'option **Fiche de définition du matériau** sur `Facteur K manuel`.
     2. Ajustez la valeur du **Facteur K manuel** (voir [Remarques](#Remarques)).
     3. Vous pouvez activer/désactiver les boutons **ANSI** ou **DIN** (voir [Remarques](#Remarques)).
   * Si vous avez besoin d'exporter une géométrie 2D, définissez les options de **Générer une esquisse dépliée** :
     1. Cochez **Générer une esquisse dépliée**
     2. Un objet **Unfold\_Sketch** est ajouté à l'objet Unfold.
     3. Vous pouvez ajuster la couleur de l'objet Unfold\_Sketch.
     4. Pour séparer les lignes de pliage et les lignes internes des lignes de périmètre :
        + Cochez **Séparer les couches de projection**.
        + Un objet **Unfold\_Sketch\_Bends** et un objet **Unfold\_Sketch\_Interal** sont ajoutés à l'objet Unfold.
        + Vous pouvez ajuster la **Couleur des lignes de pliage** et la **Couleur des lignes internes**.
     5. Vous pouvez activer/désactiver le format de fichier d'exportation via les boutons **DXF** et **SVG**.
     6. Appuyez sur le bouton Exporter pour ouvrir la fenêtre de dialogue **Exporter l'esquisse dépliée** et enregistrer le fichier.
   * Vous pouvez pouvez ajuster la **Transparence du dépliage**.
   * Si vous préférez désactiver les mises à jour automatiques : Cochez **Mise à jour manuelle**.
     + Cliquez sur le bouton Mise à jour pour appliquer les changements effectués dans le panneau des tâches.
4. Cliquez sur le bouton OK pour terminer la commande et fermer le panneau des tâches.
5. Vous pouvez éventuellement ajuster les paramètres dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Panneau des tâches

Un [panneau des tâches](/Task_panel/fr "Task panel/fr") a été introduit dans la version 0.6.10

Double-cliquez sur un objet Unfold existant dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") pour ouvrir de nouveau le panneau des tâches et modifier les paramètres.

![](/images/SheetMetal_Unfold-Task.png)

* **Fiche de définition du matériau** : bascule la propriété **Material Sheet**.
* **Facteur K manuel** : définit la propriété **KFactor**.
* **Standard** : les boutons font basculer la propriété **KFactor Standard**.
* Case à cocher **Générer une esquisse de projection** : active/désactive la propriété **Generate Sketch** et active :
  + Le sélecteur de couleur pour l'objet **Unfold\_Sketch**.
  + Case à cocher **Séparer les couches de projection** : active/désactive la propriété **Separate Sketch Layers** et active :
    - **Couleur des lignes de pliage** : sélecteur de couleur pour l'objet **Unfold\_Sketch\_Bends**.
    - **Couleur des lignes internes** sélecteur de couleur pour l'objet **Unfold\_Sketch\_Internal**.
  + Boutons **DXF** et **SVG** : active/désactive le format du fichier d'exportation.
  + Bouton Exporter : ouvre la boîte de dialogue **Exporter l'esquisse dépliée** pour enregistrer le fichier d'exportation.
* **Transparence du dépliage** : définit la propriété de vue **Transparency** de l'objet Unfold.
* Case à cocher **Mise à jour manuelle** : active/désactive la propriété **Recalcul manuel** et active :
  + Mise à jour : permet de mettre à jour l'objet Unfold et les esquisses associées lorsque le panneau des tâches est ouvert.

## Remarques

* Voir les sections [Material Definition Sheet](https://github.com/shaise/FreeCAD_SheetMetal#material-definition-sheet) et [K-factor](https://github.com/shaise/FreeCAD_SheetMetal#physical-material-definitions) de la page du projet pour plus d'informations.
* Pour une explication des différentes plages de valeurs des facteurs K ISO et ANSI, voir le tableau sur la page [this](https://de.wikipedia.org/wiki/Biegeverkürzung#Korrektur_durch_den_sog._k-Faktor) (en allemand).
* Un nouveau outil SheetMetal Déplier a été introduit en version 0.7.0. Une préférence **Revenir à l'ancien outil Déplier** a également été ajoutée.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet SheetMetal Unfold est dérivé d'un objet [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il n'a pas de propriétés supplémentaires.

## Limites

* La tôle doit avoir une épaisseur constante.
* Les faces planes ne doivent pas contenir de lignes de séparation.
* Les faces planes doivent être réellement planes et non des approximations de B-splines.
* Les faces des angles de pliage doivent être réellement cylindriques et non des approximations de B-splines.
* Versions antérieures à 0.5.00 : la fonction de dépliage Unfold n'est pas paramétrique. Si le modèle est modifié, vous devez le déplier à nouveau.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_Unfold/fr&oldid=1545961>"