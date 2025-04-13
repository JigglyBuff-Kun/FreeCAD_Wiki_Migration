---
title: Assembly Bascule du blocage
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly Bascule du blocage |
| Emplacement du menu |
| Assemblage → Activer/désactiver le blocage |
| Ateliers |
| [Assembly](/Assembly_Workbench/fr "Assembly Workbench/fr") |
| Raccourci par défaut |
| G |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Assembly_ToggleGrounded.svg) Assembly Bascule du blocage fixe la position et l'orientation d'une forme par rapport au système de coordonnées de l'assemblage auquel elle appartient.

## Utilisation

1. Sélectionnez une ou plusieurs pièces.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Assembly_ToggleGrounded.svg) Activer/désactiver le blocage.
   * Sélectionnez l'option **Assemblage → ![](/images/Assembly_ToggleGrounded.svg) Activer/désactiver le blocage** du menu.
   * Utiliser le raccourci clavier : G.
3. Une liaison de blocage est ajoutée pour chaque pièce sélectionnée.

## Remarques

* Une liaison de blocage affiche une icône de verrou rouge dans la vue 3D, autour du centre de masse du composant mis à la terre. Pour masquer le verrouillage, basculez la propriété Vue**Visibility** de la liaison à `false`.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **GroundedJoint** est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Ground

* Données**Object To Ground** (`Link`) : objet à bloquer.
* Données**Placement** (`Placement`) : endroit où la pièce est bloquée. Voir [Placement](/Placement/fr "Placement/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_ToggleGrounded/fr&oldid=1549868>"