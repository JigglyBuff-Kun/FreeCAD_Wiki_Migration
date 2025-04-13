---
title: SheetMetal Déplier sans assistance
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| SheetMetal Déplier sans assistance |
| Emplacement du menu |
| SheetMetal → Déplier sans assistance |
| Ateliers |
| [SheetMetal](/SheetMetal_Workbench/fr "SheetMetal Workbench/fr") |
| Raccourci par défaut |
| U |
| Introduit dans la version |
| - |
| Voir aussi |
| [SheetMetal Déplier](/SheetMetal_Unfold/fr "SheetMetal Unfold/fr") |
|  |

## Description

La commande ![](/images/SheetMetal_UnattendedUnfold.svg) SheetMetal Déplier sans assistance déplie un objet en tôle.

Cette commande n'est pas disponible par défaut, voir [Remarques](#Remarques).

Si le corps parent d'une face planaire sélectionnée a déjà fait l'objet d'un dépliage, cet outil ignorera le menu du panneau des tâches. Sinon, il affichera un message d'erreur demandant soit de "définir un facteur K manuel", soit d'"utiliser une feuille de définition de matériau".

Avec l'outil ![](/images/SheetMetal_Unfold.svg) [Déplier](/SheetMetal_Unfold/fr "SheetMetal Unfold/fr"), l'étiquette du corps parent reçoit un suffixe (tel que *\_material\_0.5din*), après cela, il est prêt à être utilisé avec cet outil.

## Utilisation

1. Sélectionnez une face plane d'une pièce de tôle.
2. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/SheetMetal_UnattendedUnfold.svg) Déplier sans assistance.
   * Sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_UnattendedUnfold.svg) Déplier sans assistance** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **SheetMetal → ![](/images/SheetMetal_UnattendedUnfold.svg) Déplier sans assistance** dans le menu contextuel.
   * Utilisez le raccourci clavier : U.
3. Un objet **Unfold** sera créé.
4. Vous pouvez ajuster les paramètres dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

## Remarques

Pour rendre cette commande disponible, activez d'abord le mode ingénierie dans les préférences. Allez dans **Édition → Préférences → SheetMetal → Paramètres généraux** et réglez **Mode expérimenté** sur `Activer`. La modification de cette préférence nécessite un redémarrage de FreeCAD.

## Propriétés

Voir aussi: [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet SheetMetal Unfold est dérivé d'un objet [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il n'a pas de propriétés supplémentaires.

## Limitations

Voir ![](/images/SheetMetal_Unfold.svg) [Déplier](/SheetMetal_Unfold/fr "SheetMetal Unfold/fr") pour les limitations.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_UnattendedUnfold/fr&oldid=1544999>"