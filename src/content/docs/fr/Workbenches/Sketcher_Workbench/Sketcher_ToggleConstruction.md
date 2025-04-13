---
title: Sketcher Géométrie de construction
---
|  |
| --- |
| Sketcher Géométrie de construction |
| Emplacement du menu |
| Esquisse → Géométries d'esquisse → Activer/désactiver la géométrie de construction |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| G N |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Sketcher_ToggleConstruction.svg) Sketcher Géométrie de construction permet de faire basculer les outils de création de géométrie en mode construction ou de faire basculer une géométrie sélectionnée en mode construction ou de la faire basculer en mode construction.

La géométrie de construction est marquée par une [couleur](/Sketcher_Preferences/fr#Apparence "Sketcher Preferences/fr") dédiée (bleu par défaut) et un type de ligne ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")). La géométrie de construction n'est pas visible à l'extérieur de l'esquisse, elle est destinée à aider à définir les contraintes et autres géométries à l'intérieur de l'esquisse elle-même. Les lignes de construction peuvent toutefois être utilisées comme axe de rotation par [PartDesign Révolution](/PartDesign_Revolution/fr "PartDesign Revolution/fr").

![](/images/Sketcher_ConstructionMode_fr_01.png)

## Utilisation

### Basculer les outils

1. Assurez-vous qu'il n'y a pas de sélection.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_ToggleConstruction.svg) Activer/désactiver la géométrie de construction.
   * Sélectionnez l'option **Esquisse → Géométries d'esquisse → ![](/images/Sketcher_ToggleConstruction.svg) Activer/désactiver la géométrie de construction** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **![](/images/Sketcher_ToggleConstruction.svg) Activer/désactiver la géométrie de construction** du menu contextuel.
   * Utilisez le raccourci clavier : G puis N.
3. Le mode des outils de création de géométrie est basculé :
   * En mode normal, les icônes du menu et de la barre d'outils sont blanches et créent des géométries régulières (couleur blanche par défaut). L'icône de cet outil est alors : ![](/images/Sketcher_ToggleConstruction.svg).
   * En mode construction, les icônes du menu et de la barre d'outils sont bleues et créent des géométries de construction (couleur bleue par défaut). L'icône de cet outil est alors : ![](/images/Sketcher_ToggleConstruction_Constr.svg).

### Basculer la géométrie

1. Sélectionnez un ou plusieurs éléments dans l'esquisse.
2. Lancez l'outil comme décrit ci-dessus, ou avec l'option supplémentaire suivante :
   * Cliquez avec le bouton droit de la souris dans la section **Éléments** de la [fenêtre de dialogue](/Sketcher_Dialog/fr "Sketcher Dialog/fr") et sélectionnez l'option **![](/images/Sketcher_ToggleConstruction.svg) Activer/désactiver la géométrie de construction** du menu contextuel.
3. Les éléments sélectionnés passent de la géométrie normale à la géométrie de construction ou vice versa. Leur apparence change en conséquence.
4. Le mode des outils de création de géométrie n'est pas modifié.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ToggleConstruction/fr&oldid=1495957>"