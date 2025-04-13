---
title: Curves Enveloppe de tube
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Curves Enveloppe de tube |
| Emplacement du menu |
| Surfaces → Pipeshell |
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

![](/images/Curves_Pipeshell.svg) Enveloppe de tube crée un balayage pour former une enveloppe de tube. Cet outil fait partie des [ateliers externes](/External_workbenches/fr "External workbenches/fr") appelés [Curves](/Curves_Workbench/fr "Curves Workbench/fr").

## Utilisation

1. Passer à l'atelier ![](/images/Curves_workbench_icon.svg) [Curves](/Curves_Workbench/fr "Curves Workbench/fr") (à installer à partir du ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr") si ce n'est pas déjà fait)
2. Sélectionnez l'arête qui crée le chemin de balayage dans la [vue 3D](/3D_view/fr "3D view/fr")
3. Sélectionnez un ou plusieurs profils requis dans la [vue en arborescence](/Tree_view/fr "Tree view/fr")
4. Pour lancer la commande, effectuez l'une des opérations suivantes :
   * Appuyez sur le bouton ![](/images/Curves_Pipeshell.svg) Creates a Pipeshell sweep object de la barre d'outils
   * Utilisez la commande **Surfaces → Pipeshell**
5. Modifiez le paramètre `Pipeshell` aux conditions requises

## Propriétés

### Données

Base

* Données**Placement** : [Placement](/Placement/fr "Placement/fr") est l'emplacement et l'orientation d'un objet dans l'espace.
* Données**Label** : nom d'utilisateur de l'objet dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").

Main

* Données**Mode** : par défaut *Frenet*. Le mode est utilisé pour sélectionner l'algorithme de balayage. Choix : Frenet, DiscreteTrihedron, FixedTrihetron, Binormal, ShapeSupport, AuxiliarySpine.
* Données**Output** : par défaut *Surface*. La sortie détermine la forme de l'objet. Choix : Surface, Sections, Lofted Sections.
* Données**Profile** : liste des profils utilisés.
* Données**Spine** :

Mode

* Données**Auxiliary** :
* Données**Contact** :
* Données**Corrected** :
* Données**Direction** :
* Données**Equi Curvi** :
* Données**Location** :
* Données**Support** :

Settings

* Données**Max Degree** :
* Données**Max Segments** :
* Données**Samples** :
* Données**Solid** : par défaut *False*.
* Données**Tol3d** : par défaut *0.00*.
* Données**Tol Ang** : par défaut *0.00*.
* Données**Tol Bound** : par défaut *0.00*.

## Remarques

* *Pipeshell* a besoin d'une polyligne (comme chemin de balayage) et d'au moins un *Pipeshell Profile*.
* Les deux outils *Pipeshell* et *Pipeshell Profile* fonctionnent ensemble comme un outil de balayage "avancé".

## Limitations

## Script

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_Pipeshell/fr&oldid=1564716>"