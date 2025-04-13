---
title: Material Éditeur de matériaux
---
|  |
| --- |
| Material Éditeur de matériaux |
| Emplacement du menu |
| Matériaux → Modifier... Modèle → Matériaux → Éditeur de matériaux |
| Ateliers |
| [Material](/Material_Workbench/fr "Material Workbench/fr"), [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| [FEM Éditeur de matériaux](/FEM_MaterialEditor/fr "FEM MaterialEditor/fr") |
|  |

## Description

L'outil **Material Éditeur de matériaux** permet d'accéder à l'éditeur de matériaux qui fait partie du système des [matériaux](/index.php?title=Material/fr&action=edit&redlink=1 "Material/fr (page does not exist)") de FreeCAD. Le système des matériaux peut être utilisé par tous les ateliers. Il gère les propriétés des matériaux ainsi que les propriétés d'apparence des objets.

![](/images/Material_Edit_Dialog.png)

## Utilisation

1. Il y a plusieurs façons de lancer l'éditeur :
   * [Atelier Material](/Material_Workbench/fr "Material Workbench/fr") :
     + Appuyez sur le bouton ![](/images/Material_Edit.svg) Modifier
     + Sélectionnez l'option **Matériaux → ![](/images/Material_Edit.svg) Modifier...** du menu.
   * [Atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr") :
     + Appuyez sur le bouton ![](/images/FEM_MaterialEditor.svg) [Éditeur de matériaux](/FEM_MaterialEditor/fr "FEM MaterialEditor/fr").
     + Sélectionnez l'option **Modèle → Matériaux → ![](/images/FEM_MaterialEditor.svg) Éditeur de matériaux** du menu.
   * Tous les ateliers :
     1. Sélectionnez un objet.
     2. Faites l'une des choses suivantes :
        + Sélectionnez l'option **Affichage → ![](/images/Material_Edit.svg) Matériau...** du menu.
        + Sélectionnez l'option **![](/images/Material_Edit.svg) Matériau...** dans le menu contextuel de la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou de la [vue 3D](/3D_view/fr "3D view/fr").
     3. Le panneau de tâches **Gérer les matériaux** s'ouvre.
     4. Appuyez sur le Button Lancer l'éditeur.
2. Sélectionnez un matériau dans la liste à plusieurs niveaux du panneau de gauche. Les catégories suivantes sont disponibles :
   * Favoris
   * Récent
   * Système
   * Apparence
     + Fluide
     + Usinage
     + Motifs
     + Standard
     + Test
   * Utilisateur
3. Utilisez les trois onglets du panneau droit de l'éditeur pour modifier les propriétés du matériau sélectionné :
   * Général :
     + Nom
     + Auteur
     + Licence
     + Parent
     + URL de la source
     + Référence de la source
     + Mots-clés
     + Description
   * Physique : diverses propriétés physiques
   * Apparence :
     + Rendu de base :
       - Couleur ambiante
       - Couleur diffuse
       - Couleur émissive
       - Brillance
       - Couleur spéculaire
       - Transparence
4. Vous pouvez utiliser les boutons de l'onglet Général :
   * Cliquez sur le bouton Nouveau pour créer un nouveau matériau avec des propriétés vides.
   * Cliquez sur le bouton Hériter pour créer un nouveau matériau avec des propriétés copiées à partir du matériau sélectionné.
   * Cliquez sur le bouton \* pour ajouter le matériau sélectionné aux favoris.
5. Si les propriétés du matériau ont été modifiées : appuyez sur le bouton Enregistrer pour les sauvegarder.
6. Faites l'une des choses suivantes :
   * Appuyez sur le bouton OK pour confirmer la sélection du matériau et fermer l'éditeur.
   * Appuyez sur le bouton Annuler pour annuler la sélection du matériau et fermer l'éditeur. Cela n'annulera pas les modifications des propriétés du matériau qui ont déjà été sauvegardées.
7. Si le panneau de tâches **Matériau** est ouvert : cliquez sur le bouton Fermer pour le fermer.

Retrieved from "<http://wiki.freecad.org/index.php?title=Material_Edit/fr&oldid=1541136>"