---
title: FEM Éditeur de matériaux
---
:::caution
Cette version de commande est obsolèteElle a été modifiée dans laversion 1.0 et suivanteset permet d'accéder à l'éditeur de matériaux.
:::

|  |
| --- |
| FEM Éditeur de matériaux |
| Emplacement du menu |
| Modèle → Matériaux → Éditeur de matériaux |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr"), [Arch](/Arch_Workbench/fr "Arch Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.18 |
| Voir aussi |
| [Arch Matériau](/Arch_SetMaterial/fr "Arch SetMaterial/fr"), [Tutoriel FEM](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

| Solveurs |
| --- |
| Tous |

## Description

L'**Éditeur de matériaux** vous permet de modifier et de sauvegarder les informations contenues dans un [matériau de FreeCAD](/index.php?title=Material/fr&action=edit&redlink=1 "Material/fr (page does not exist)"). Actuellement, ces matériaux sont utilisés par les ateliers ![](/images/Workbench_FEM.svg) [FEM](/FEM_Workbench/fr "FEM Workbench/fr") et ![](/images/Workbench_BIM.svg) [BIM](/BIM_Workbench/fr "BIM Workbench/fr").

![](/images/Material_editor.png)

## Utilisation

L'éditeur de matériau est accessible soit par :

1. L'![](/images/Workbench_BIM.svg) [atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr")
   * Le bouton ![](/images/BIM_Material.svg) [Matériau](/BIM_Material/fr "BIM Material/fr").
   * L'entrée du menu **Gestion → ![](/images/BIM_Material.svg) Matériau**.
2. L'![](/images/Workbench_FEM.svg) [atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr")
   * Le bouton ![](/images/FEM_MaterialEditor.svg) Éditeur de matériaux.
   * Le menu **Modèle → Matériaux → ![](/images/FEM_MaterialEditor.svg) Éditeur de matériaux**.

## Options

* **Bouton du navigateur** : ouvre le contenu de la propriété URL dans un navigateur.
* **Jeu de paramètres du matériau** : permet de choisir un préréglage pour remplir les champs.
* Ouvrir : ouvre un fichier .FCMat.
* Enregistrer sous : enregistre le contenu de l'éditeur comme un nouveau fichier .FCMat.
* **Aperçu** : pas encore implémenté.
* **Éditeur de propriétés** : permet d'éditer le contenu des propriétés des matériaux.
* Ajouter une propriété : permet d'ajouter une nouvelle propriété personnalisée.
* Supprimer la propriété : supprime une propriété sélectionnée. Seules les propriétés personnalisées peuvent être supprimées.

## Remarques

* Les boutons OK et Annuler ont le même effet dans l'éditeur de matériaux et ne sont pas utilisés directement dans les propriétés du matériau de l'objet existant.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialEditor/fr&oldid=1541127>"