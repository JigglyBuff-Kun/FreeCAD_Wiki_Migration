---
title: Sketcher Contraintes pilotantes
---
|  |
| --- |
| Sketcher Contraintes pilotantes |
| Emplacement du menu |
| Esquisse → Contraintes d'esquisse → Activer/désactiver les contraintes pilotantes/pilotées |
| Ateliers |
| [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") |
| Raccourci par défaut |
| K X |
| Introduit dans la version |
| 0.16 |
| Voir aussi |
| [Sketcher Activer les contraintes](/Sketcher_ToggleActiveConstraint/fr "Sketcher ToggleActiveConstraint/fr") |
|  |

## Description

L'outil ![](/images/Sketcher_ToggleDrivingConstraint.svg) Sketcher Contraintes pilotantes permet de basculer les [outils de création de contraintes de dimension](/Sketcher_Workbench/fr#Sketcher_CompDimensionTools "Sketcher Workbench/fr") entre le mode pilotant et le mode référence, ou de basculer les contraintes sélectionnées de dimension entre ces deux modes.

Contrairement aux contraintes de conduite, les contraintes de référence ne contraignent pas l'esquisse, leur valeur dépend des autres contraintes, elles sont conduites. Elles peuvent être utiles pour vérifier des mesures. Elles peuvent être utilisées dans les [expressions](/Expressions/fr "Expressions/fr"), mais pas dans l'esquisse elle-même.

![](/images/Sketcher_ToggleConstraint_example.png)

Une contrainte pilotante horizontale (50 mm), une contrainte pilotante verticale (30 mm) et une contrainte pilotante d'angle (75°) ont été définies pour définir l'esquisse. Une cote dite pilotée a été ajoutée sur le segment de ligne incliné pour connaître sa longueur (31.0583 mm).

## Utilisation

### Basculer les outils

1. Assurez-vous qu'aucune contrainte dimensionnelle n'a été sélectionnée.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Sketcher_ToggleDrivingConstraint.svg) Activer/désactiver les contraintes pilotantes/pilotées.
   * Sélectionnez l'option **Esquisse → Contraintes d'esquisse → ![](/images/Sketcher_ToggleDrivingConstraint.svg) Activer/désactiver les contraintes pilotantes/pilotées** du menu.
   * Utilisez le raccourci clavier : K puis X.
3. Le mode des outils de création de contraintes de dimension est basculé :
   * En mode pilotant, les icônes de leur menu et de leur barre d'outils sont rouges et créent des contraintes pilotante (par défaut de [couleur](/Sketcher_Preferences/fr#Apparence "Sketcher Preferences/fr") rouge). L'icône de cet outil est alors : ![](/images/Sketcher_ToggleConstraint.svg).
   * En mode référence, les icônes du menu et de la barre d'outils sont bleues et créent des contraintes de référence (couleur bleue par défaut). L'icône de cet outil est alors : ![](/images/Sketcher_ToggleConstraint_Driven.svg).

### Basculer les contraintes

1. Sélectionnez une ou plusieurs contraintes dimensionnelles.
2. Lancez l'outil comme décrit ci-dessus, ou avec l'une des options supplémentaires suivantes :
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : cliquez avec le bouton droit de la souris dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez la **![](/images/Sketcher_ToggleDrivingConstraint.svg) Activer/désactiver les contraintes pilotantes/pilotées** du menu contextuel.
   * Cliquez avec le bouton droit de la souris dans la section **Contraintes** de la [fenêtre de dialogue de l'esquisse](/Sketcher_Dialog/fr "Sketcher Dialog/fr") et sélectionnez l'option **Basculer vers/à partir d'une référence** du menu contextuel.
3. Les contraintes sélectionnées passent du mode pilotant au mode référence ou vice versa. Leur apparence change en conséquence.
4. Le mode des outils de création de contraintes de dimension n'est pas modifié.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ToggleDrivingConstraint/fr&oldid=1497741>"