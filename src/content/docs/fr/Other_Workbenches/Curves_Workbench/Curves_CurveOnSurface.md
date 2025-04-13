---
title: Curves Courbe sur surface
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Curves Courbe sur surface |
| Emplacement du menu |
| Curves → CurveOnSurface |
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

L'outil ![](/images/Curves_CurveOnSurface.svg) **Curves Courbe sur surface** projette une courbe sur une face et crée éventuellement une face normale ou binormale.

## Utilisation

1. Sélectionnez une courbe et une face de support.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Curves_CurveOnSurface.svg) CurveOnSurface.
   * Sélectionnez l'option **Curves → ![](/images/Curves_CurveOnSurface.svg) CurveOnSurface** du menu.
3. Un objet **CurveOnSurface** est créé.
4. Vous pouvez modifier les valeurs dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") pour ajouter une face normale ou binormale et ajuster les propriétés correspondantes (voir Propriétés ci-dessous).

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **CurveOnSurface** est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Curve On Surface

* Données**Closed** (`Bool`) : ferme la courbe.
* Données**Face** (`LinkSub`) : face de support.
* Données**Face Width** (`Distance`) : largeur de la face de sortie.
* Données**Input Edge** (`LinkSub`) : arrête d'entrée.
* Données**Output** (`Enumeration`) : type de sortie.
  + `Curve only` (par défaut) : seule une courbe projetée sur la face sélectionnée est créée
  + `Normal face` : une courbe et une face située le long de la courbe et également normale à la face sélectionnée sont créées.
  + `Binormal face` : une courbe et une face le long de la courbe et également tangente à la face sélectionnée sont créées.
* Données**Reverse** (`Bool`) : inverse l'orientation paramétrique de la courbe.
* Données**Samples** (`Integer`) : nombre d'échantillons.
* Données**Symmetric** (`Bool`) : face symétrique par rapport à la courbe.
* Données**Tolerance** (`Float`) : tolérance.

Orientation

* Données**Reverse Binormal** (`Bool`) : inverse la binormale.
* Données**Reverse Normal** (`Bool`) : inverse la normale.
* Données**Reverse Tangent** (`Bool`) : inverse la tangente.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_CurveOnSurface/fr&oldid=1566966>"