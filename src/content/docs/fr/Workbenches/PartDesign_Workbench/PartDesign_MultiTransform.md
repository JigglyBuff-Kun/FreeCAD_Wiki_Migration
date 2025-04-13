---
title: PartDesign Transformation multiple
---
|  |
| --- |
| PartDesign Transformation multiple |
| Emplacement du menu |
| PartDesign → Appliquer une transformation → Transformation multiple |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [PartDesign Symétrie](/PartDesign_Mirrored/fr "PartDesign Mirrored/fr"), [PartDesign Répétition linéaire](/PartDesign_LinearPattern/fr "PartDesign LinearPattern/fr"), [PartDesign Répétition circulaire](/PartDesign_PolarPattern/fr "PartDesign PolarPattern/fr"), [PartDesign Mise à l'échelle](/PartDesign_Scaled/fr "PartDesign Scaled/fr") |
|  |

## Description

L'outil ![](/images/PartDesign_MultiTransform.svg) **PartDesign Transformation multiple** crée une transformation d'une ou plusieurs fonctions. La transformation peut inclure plusieurs transformations où chaque transformation suivante est appliquée au résultat de la transformation précédente.

Les transformations disponibles sont : ![lien=PartDesign_Mirrored/fr](/images/PartDesign_Mirrored.svg) [Symétrie](/PartDesign_Mirrored/fr "PartDesign Mirrored/fr"), ![](/images/PartDesign_LinearPattern.svg) [Répétition linéaire](/PartDesign_LinearPattern/fr "PartDesign LinearPattern/fr"), ![](/images/PartDesign_PolarPattern.svg) [Répétition circulaire](/PartDesign_PolarPattern/fr "PartDesign PolarPattern/fr") et ![lien=PartDesign_Scaled/fr](/images/PartDesign_Scaled.svg) [Mise à l'échelle](/PartDesign_Scaled/fr "PartDesign Scaled/fr"). Les trois premières sont également disponibles sous forme d'outils distincts.

![](/images/Multitransform_example.png)

Une transformation de trous créée à partir d'une seule fonction trou en appliquant une transformation linéaire à 2 occurrences, suivi d'une transformation circulaire à 8 occurrences.

## Utilisation

### Créer

1. [Activez](/PartDesign_Body#Active_status "PartDesign Body") le bon corps.
2. Sélectionnez une ou plusieurs fonctions dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr").
3. Il existe plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/PartDesign_MultiTransform.svg) Transformation multiple.
   * Sélectionnez l'option **PartDesign → Appliquer une transformation → ![](/images/PartDesign_MultiTransform.svg) Transformation multiple** du menu.
4. S'il n'y a pas de corps actif et qu'il y a deux corps ou plus dans le document, la fenêtre de dialogue **Corps actif requis** s'ouvrira et vous invitera à en activer un. S'il n'y a qu'un seul corps, il sera activé automatiquement.
5. Si aucune fonction n'a été sélectionnée, le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Sélectionner une fonction** s'ouvre : sélectionnez-en une ou plusieurs (en maintenant la touche Ctrl) dans la liste et appuyez sur le bouton OK.
6. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Paramètres de la transformation multiple** s'ouvre. Voir [Options](#Options) pour plus d'informations.
7. Appuyez sur le bouton OK pour terminer.

### Modifier

1. Effectuez l'une des opérations suivantes :
   * Double-cliquez sur l'objet MultiTransform dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
   * Cliquez avec le bouton droit de la souris sur l'objet MultiTransform dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et sélectionnez **Modifier la transformation multiple** dans le menu contextuel.
2. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") des **Paramètres de la transformation multiple** s'ouvre. Voir [Options](#Options) pour plus d'informations.
3. Appuyez sur le bouton OK pour terminer.

### Combiner des transformations existantes

Il est possible de créer un objet MultiTransform à partir de transformations existantes [Symétrie](/PartDesign_Mirrored/fr "PartDesign Mirrored/fr"), [Répétition linéaire](/PartDesign_LinearPattern/fr "PartDesign LinearPattern/fr") et [Répétition circulaire](/PartDesign_PolarPattern/fr "PartDesign PolarPattern/fr")

1. Vérifiez la propriété Données**Originals** des transformations existantes pour vous assurer qu'elles ont été appliquées aux mêmes fonctions.
2. Sélectionnez ces fonctions dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
3. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/PartDesign_MultiTransform.svg) Transformation multiple.
   * Sélectionnez l'option **PartDesign → Appliquer une transformation → ![](/images/PartDesign_MultiTransform.svg) Transformation multiple** du menu.
4. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") de **Paramètres de la transformation multiple** s'ouvre.
5. Appuyez sur le bouton OK en haut.
6. Modifiez la propriété Données**Tranformations** de l'objet MultiTransform créé :
   1. Cliquez dans le champ.
   2. Appuyez sur le bouton ... qui apparaît.
   3. La fenêtre de dialogue **Lien** s'ouvre.
   4. Maintenez la touche Ctrl enfoncée et sélectionnez les transformations existantes.
   5. Appuyez sur le bouton OK.
7. Vous pouvez [Modifier](#Modifier) l'objet MultiTransform, voir ci-dessus.

## Options

* Choisissez le mode :
  + **Transformer le corps** : transforme la forme de la fonction de base dans son intégralité (par défaut). [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
  + **Transformer les formes des outils** : transforme les formes de chaque outils des fonctions sélectionnées.
    - Pour ajouter des fonctions :
      1. Appuyez sur le bouton Ajouter une fonction.
      2. Sélectionnez une fonction dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr").
      3. Répétez l'opération pour ajouter d'autres fonctions.
    - Pour supprimer des fonctions :
      1. Appuyez sur le bouton Supprimer une fonction.
      2. Effectuez l'une des opérations suivantes :
         * Sélectionnez une fonction dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr").
         * Sélectionnez une fonction dans la liste et appuyez sur la touche Suppr.
         * Cliquez avec le bouton droit de la souris sur une fonction de la liste et sélectionnez **Supprimer** dans le menu contextuel.
      3. Répétez l'opération pour supprimer d'autres fonctions.
    - S'il y a plusieurs fonctions dans le modèle, leur ordre peut être important. Voir [PartDesign Répétition circulaire](/PartDesign_PolarPattern/fr#Organiser_les_fonctions "PartDesign PolarPattern/fr").
* Pour ajouter des transformations :
  1. S'il existe des transformations existantes : sélectionnez la transformation après laquelle la nouvelle transformation doit être ajoutée.
  2. Souris droite sur la liste des **Transformations**.
  3. Sélectionnez l'une des options suivantes dans le menu contextuel :
     + **Ajouter une fonction de symétrie**. Voir [PartDesign Symmétrie](/PartDesign_Mirrored/fr "PartDesign Mirrored/fr").
     + **Ajouter une répétition linéaire**. Voir [PartDesign Répétition linéaire](/PartDesign_LinearPattern/fr "PartDesign LinearPattern/fr").
     + **Ajouter une répétition circulaire**. Voir [PartDesign Répétition circulaire](/PartDesign_PolarPattern/fr "PartDesign PolarPattern/fr").
     + **Ajouter une transformation de mise à l'échelle**. Voir [PartDesign Mise à l'échelle](/PartDesign_Scaled/fr "PartDesign Scaled/fr").
  4. La transformation sélectionnée est ajoutée à la liste et les paramètres de la transformation sont affichés sous la liste.
  5. Ajustez les paramètres en fonction de vos besoins.
  6. Appuyez sur OK de la barre en bas.
  7. Répétez l'opération pour ajouter d'autres transformations.
* Pour modifier une transformation :
  1. Cliquez à droite sur la transformation dans la liste des **Transformations**.
  2. Sélectionnez **Modifier** dans le menu contextuel.
  3. Ajustez les paramètres à votre convenance.
  4. Appuyez sur OK de la barre en bas.
* Pour changer l'ordre des transformations :
  1. Cliquez à droite sur une transformation dans la liste des **Transformations**.
  2. Sélectionnez **Déplacer vers le haut** ou **Déplacer vers le bas** dans le menu contextuel.
  3. Si la case **Mettre à jour la vue** est cochée, la vue sera mise à jour en temps réel.

## Limitations

Voir [PartDesign Répétition circulaire](/PartDesign_PolarPattern/fr#Limitations "PartDesign PolarPattern/fr").

## Exemple

Vous pouvez utiliser cet outil pour créer une pièce entièrement paramétrique qui sera symétrique par rapport à deux axes à partir d'une esquisse.

Il peut s'agir d'une grande plaque de support de 150x100x10mm pour un moteur avec des trous symétriques.

![](/images/PartDesign_MultiTransform_Example2.png)

1. Créez un ![](/images/PartDesign_Body.svg) [corps](/PartDesign_Body/fr "PartDesign Body/fr") et ajoutez une ![](/images/PartDesign_NewSketch.svg) [esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr") sur l'un de ses plans de base.
2. Dans l'esquisse, créez la géométrie pour un quadrant de la pièce (ici le quadrant supérieur droit).
   * Notez que les contraintes ne doivent couvrir qu'un quart de la pièce, par exemple, au lieu de la dimension complète de `150mm`, entrez `150/2mm` ou `75mm`.
   * Assurez-vous que l'esquisse est fermée en ajoutant des lignes le long des axes vertical et horizontal.
3. Extrudez la pièce avec une ![](/images/PartDesign_Pad.svg) [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr").
4. Sélectionnez ![](/images/PartDesign_MultiTransform.svg) **Transformation multiple**.
5. La fenêtre de dialogue des tâches s'ouvre.
6. La dernière fonction du corps est déjà sélectionnée. Puisque nous voulons effectuer une symétrie de cette fonction, nous pouvons ignorer les boutons Ajouter une fonction et Supprimer une fonction.
7. Cliquez à droite dans le champ **Transformations** et sélectionnez **Ajouter une fonction de symétrie** dans le menu contextuel.
8. Pour le **Plan**, sélectionnez **Axe vertical de l'esquisse**.
9. Si la case **Mise à jour de la vue** est cochée, vous devriez maintenant voir la pièce reflétée autour d'un axe.
10. Sélectionnez à nouveau **Ajouter une fonction de symétrie** dans le menu contextuel du champ **Transformations**.
11. Maintenant, pour le **Plan**, sélectionnez **Axe horizontal de l'esquisse**.
12. Appuyez sur le bouton OK pour terminer.
13. Pour supprimer les arêtes le long des axes de symétrie dans le résultat final, définissez la propriété Données**Refine** de la nouvelle fonction sur `true` dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

Pour vérifier que la pièce est entièrement paramétrique, ouvrez l'esquisse initiale avec la pièce de quart et modifiez une dimension, par exemple le diamètre d'un trou. Après avoir fermé l'esquisse, les trois autres trous auront été modifiés en conséquence. Cela fonctionne également avec toutes les autres dimensions. Une esquisse modélisant la pièce complète avec une seule extrusion et sans miroir serait beaucoup plus complexe et toutes les modifications ultérieures seraient plus compliquées.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_MultiTransform/fr&oldid=1496210>"