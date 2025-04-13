---
title: Curves Surface de continuité
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Curves Surface de continuité |
| Emplacement du menu |
| Surfaces → BlendSurface |
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

L'outil ![](/images/Curves_BlendSurf2.svg) **Curves Surface de continuité** crée une surface entre deux arêtes avec une certaine continuité avec leurs faces de support.

## Utilisation

1. Sélectionnez quatre sous-formes :
   * La **première arête** et la **première face** associée
   * La **deuxième arête** et la **deuxième face** associée
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Curves_BlendSurf2.svg) BlendSurface.
   * Sélectionnez l'option **Surfaces → ![](/images/Curves_BlendSurf2.svg) BlendSurface** du menu.
3. Un objet **Blend\_Surface** est créé.
4. Vous pouvez modifier les valeurs dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") pour choisir une mise à l'échelle automatique différente et ajustez les propriétés correspondantes (voir Propriétés ci-dessous).

## Remarques

Il semble que cet outil ne dispose pas pour le moment d'options permettant d'inverser les directions des tangentes de début et de fin de la surface de transtion.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **Blend\_Surface** est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Base

* Données**Samples** (`Integer`) : nombre d'échantillons pour générer la surface.
* Données**Sources** (`LinkSubList`) : arêtes et faces de support.

Continuity

* Données**Continuity1** (`Integer`) : niveau de continuité avec la face de l'arête 1.
* Données**Continuity2** (`Integer`) : niveau de continuité avec la face de l'arête 2.

Scale

* Données**Auto Scale** (`Enumeration`) : calcule les valeurs d'échelle pour obtenir des pôles réguliers ou une courbure minimale.
  + `RegularPoles` (par défaut) : ...
  + `MinimizeCurvature` : ...
  + `Manual` : ...
* Données**Scale1** (`FloatList`) : valeurs de l'échelle le long de l'arête 1.
* Données**Scale2** (`FloatList`) : valeurs de l'échelle le long de l'arête 2.
* Données**Scale Samples** (`Integer`) : nombre d'échantillons pour la mise à l'échelle automatique.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_BlendSurf2/fr&oldid=1568203>"