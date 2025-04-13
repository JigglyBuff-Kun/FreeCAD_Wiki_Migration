---
title: TechDraw Fenêtre de rognage
---
|  |
| --- |
| TechDraw Fenêtre de rognage |
| Emplacement du menu |
| TechDraw → Vues de TechDraw → Insérer une fenêtre de rognage |
| Ateliers |
| [TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

Cet outil **TechDraw Fenêtre de rognage** crée une fenêtre de rognage qui peut contenir des vues.

![](/images/TechDraw_Clipview.png)

Fenêtre de rognage de différentes vues existantes

## Utilisation

1. S'il y a plusieurs pages de dessin dans le document : activez la page souhaitée en la sélectionnant dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/TechDraw_ClipGroup.svg) Insérer une fenêtre de rognage.
   * Sélectionnez l'option **TechDraw → Vues de TechDraw → ![](/images/TechDraw_ClipGroup.svg) Insérer une fenêtre de rognage** du menu.
3. Si le document comporte plusieurs pages de dessin et que vous n'avez pas encore activé de page, la fenêtre de dialogue **Sélecteur de pages** s'ouvre :
   1. Sélectionnez la page désirée.
   2. Appuyez sur le bouton OK.
4. Les vues peuvent être glissées et déposées vers et depuis le groupe de rognage (Clip) dans l'arborescence. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Une fenêtre de rognage, en fait un objet `TechDraw::DrawViewClip`, possède les [propriétés](/TechDraw_View/fr#Propriétés_Vue_de_Part "TechDraw View/fr") communes à tous les types de vues. Elle possède également les propriétés supplémentaires suivantes :

### Données

Clip Group

* Données**Width** (`Length`) : largeur de la fenêtre de rognage en unités
* Données**Height** (`Length`) : hauteur de la fenêtre de rognage en unités
* Données**ShowFrame** : si vrai, affiche un cadre autour de la fenêtre de rognage
* Données**ShowLabels** (`Bool`) : si vrai, affiche un cadre autour de la fenêtre de rognage
* Données**Views** (`LinkList`) : les vues contenues dans la fenêtre de rognage

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ClipGroup/fr&oldid=1496113>"