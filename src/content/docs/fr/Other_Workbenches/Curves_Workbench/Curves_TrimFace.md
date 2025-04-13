---
title: Curves Ajuster une face
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Curves Ajuster une face |
| Emplacement du menu |
| Surfaces → Trim face |
| Ateliers |
| [Curves](/Curves_Workbench/fr "Curves Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Curves_TrimFace.svg) **Curves Ajuster une face** ajuste une face avec une courbe projetée.

## Utilisation

1. Sélectionnez une face et une courbe.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Curves_TrimFace.svg) Trim face.
   * Sélectionnez l'option **Surfaces → ![](/images/Curves_TrimFace.svg) Trim face** du menu.
3. Un objet **TrimmedFace** est créé.

## Remarques

* Le point choisi pour sélectionner la face définit le côté de la courbe projetée qui est conservé.
* Le vecteur de projection est le vecteur de direction de la courbe sélectionnée s'il est disponible, ou sinon la direction courante de la vue active.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **TrimmedFace** est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Trim Face

* Données**Vector** (`Link`) : vecteur d'ajustement.
* Données**Direction** (`Vector`) : direction de l'ajustement.
* Données**Face** (`LinkSub`) : face d'entrée
* Données**Picked Point** (`Vector`) : point choisi dans l'espace paramétrique de la face (u,v,0).
* Données**Tool** (`LinkSubList`) : courbe d'ajustement.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_TrimFace/fr&oldid=1568162>"