---
title: Curves Développé d'une face
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Curves Développé d'une face |
| Emplacement du menu |
| Surfaces → Flatten face |
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

L'outil ![](/images/Curves_FlattenFace.svg) **Curves Développé d'une face** crée une face plate développée à partir de faces coniques ou cylindriques.

![](/images/Curves_FlattenFace01.png)

Un cône tronqué et deux objets Flatten, l'un en place (vert), l'autre sur le plan XY (rouge)

## Utilisation

1. Sélectionnez une ou plusieurs faces coniques ou cylindriques.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Curves_FlattenFace.svg) Flatten face.
   * Sélectionnez l'option **Surfaces → ![](/images/Curves_FlattenFace.svg) Flatten face** du menu.
3. Un objet **Flatten** est créé pour chaque face sélectionnée.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **Flatten** est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Settings

* Données**InPlace** (`Bool`) : déroule la face en place.
  + `true` : la surface de sortie sera placée de manière à être tangente à la face source, au niveau de la ligne de jointure.
  + `false` : la surface de sortie sera placée dans le plan XY par défaut.
* Données (Hidden)**Size** (`Float`) : taille de la surface sous-jacente.

Source

* Données**Source** (`LinkSub`) : la face conique à aplatir.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_FlattenFace/fr&oldid=1571008>"