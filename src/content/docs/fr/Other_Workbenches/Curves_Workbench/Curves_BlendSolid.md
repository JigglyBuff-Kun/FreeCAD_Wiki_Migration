---
title: Curves Solide de continuité
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Curves Solide de continuité |
| Emplacement du menu |
| Surfaces → BlendSolid |
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

L'outil ![](/images/Curves_BlendSolid.svg) **Curves Solide de continuité** crée un solide entre deux arêtes avec une certaine continuité avec leurs faces de support.

## Utilisation

1. Sélectionnez deux faces de solides différents.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Curves_BlendSolid.svg) BlendSolid.
   * Sélectionnez l'option **Surfaces → ![](/images/Curves_BlendSolid.svg) BlendSolid** du menu.
3. Un objet **Blend\_Solid** est créé.
4. Vous pouvez modifier les valeurs dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") pour choisir une échelle automatique différente et ajustez les propriétés correspondantes (voir Propriétés ci-dessous).

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **Blend\_Solid** est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Base

* Données**Sources** (`LinkSubList`) : faces à joindre.

Continuity

* Données**Continuity1** (`Integer`) : ordre de continuité G... avec la forme 1.
* Données**Continuity2** (`Integer`) : ordre de continuité G... avec la forme 2.

Scale

* Données**Auto Scale** (`Enumeration`) : calcule les valeurs d'échelle pour obtenir des pôles réguliers ou une courbure minimale.
  + `RegularPoles` (par défaut) : ...
  + `MinimizeCurvature` : ...
  + `Manual` : ...
* Données**Scale1** (`FloatList`) : valeurs de l'échelle le long de l'arête 1.
* Données**Scale2** (`FloatList`) : valeurs de l'échelle le long de l'arête 2.
* Données**Scale Samples** (`Integer`) : nombre d'échantillons pour la mise à l'échelle automatique.

Settings

* Données**Fuse** (`Bool`) : fusionne les 3 solides ensemble.
* Données**Samples** (`Integer`) : nombre d'échantillons pour générer chaque surface.

Status

* Données**Shape Type** (`String`) : statut de la forme créée.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_BlendSolid/fr&oldid=1568205>"