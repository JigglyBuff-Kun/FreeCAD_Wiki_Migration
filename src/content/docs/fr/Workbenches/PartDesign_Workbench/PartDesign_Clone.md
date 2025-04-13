---
title: PartDesign Clone
---
|  |
| --- |
| PartDesign Clone |
| Emplacement du menu |
| PartDesign → Créer un clone |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [Draft Cloner](/Draft_Clone/fr "Draft Clone/fr") |
|  |

## Description

**PartDesign Clone** crée une copie liée d'un objet sélectionné, qui suivra toutes les modifications ultérieures apportées à l'objet d'origine (sauf le placement). Par exemple, un cas d'utilisation survient lorsque vous souhaitez effectuer une opération [PartDesign Booléenne](/PartDesign_Boolean/fr "PartDesign Boolean/fr") sur un objet créé dans un autre atelier. La plupart des types d'objets sont acceptés, à condition qu'il s'agisse de solides simples. Si vous avez besoin de cloner plusieurs objets (corps) ou un [Part](/Std_Part/fr "Std Part/fr"), vous pouvez utiliser l'outil [Draft Cloner](/Draft_Clone/fr "Draft Clone/fr"). Un inconvénient est que le clone de l'atelier PartDesign définit l'emplacement en cours du clone à zéro (translation cartésienne et orientation spatiale). Tandis que le clone de l'ateliers Draft calcule et définit les valeurs numériques du placement et de l'orientation en cours des objets clonés par rapport au conteneur de l'objet cloné.

![Clone of the inner gear while being translated in 3D space as an independent object](/images/Clone.png)

Clone de l'engrenage interne tout en étant traduit dans l'espace 3D en tant qu'objet indépendant

## Utilisation

1. Dans l'arborescence du modèle, sélectionnez l'objet à cloner.
2. Appuyez sur le bouton ![](/images/PartDesign_Clone.svg) **Créer un clone**.

## Propriétés

* Données**Base Feature** : Définit l'objet d'origine sur lequel le clone est basé. Pour le remplacer, appuyez sur le bouton ... pour obtenir la liste des objets disponibles.
* Données**Placement** : Définit l'orientation et la position du Clone dans l'espace 3D. Voir [Placement](/Placement/fr "Placement/fr").
* Données**Label** : Etiquette donnée à l'objet Clone. Changez en fonction de vos besoins.

## Limitations

* Un seul objet peut être utilisé pour un clone PartDesign.
* Seuls les objets qui consistent en un solide unique sont pris en charge. Donc, les [composés (Compound)](/Glossary/fr#Compound "Glossary/fr") comme le [Part Conteneur](/Std_Part/fr "Std Part/fr"), le [Part Composé](/Part_Compound/fr "Part Compound/fr") ou le [Draft Réseau orthogonal](/Draft_OrthoArray/fr "Draft OrthoArray/fr") ne sont pas pris en charge.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Clone/fr&oldid=1425435>"