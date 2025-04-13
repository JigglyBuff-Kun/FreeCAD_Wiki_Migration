---
title: Curves Courbe d'intersection en 3D
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Curves Courbe d'intersection en 3D |
| Emplacement du menu |
| Curves → Mixed curve |
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

L'outil ![](/images/Curves_MixedCurve.svg) **Curves Courbe d'intersection en 3D** crée une courbe d'intersection en 3D de deux courbes projetées.

## Utilisation

1. Sélectionnez deux courbes.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Curves_MixedCurve.svg) Mixed curve
   * Sélectionnez l'option **Curves → ![](/images/Curves_MixedCurve.svg) Mixed curve** du menu.
3. Un objet **Mixed\_Curve** est créé.
4. Dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"), éditez les propriétés Données**Direction1** et Données**Direction2** pour définir les directions de projection.  
   Ceci est facultatif si les deux courbes sélectionnées ont été faites avec l'![](/images/Workbench_Sketcher.svg) [atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr").

## Remarques

* Les directions de projection sont automatiquement détectées si possible. Dans le cas de courbes de l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"), la normale du plan de l'esquisse est utilisée.
* Les propriétés Données**Direction1** et Données**Direction2** remplacent les directions détectées automatiquement. Il est obligatoire de saisir les valeurs manuellement s'il n'est pas possible de détecter une direction automatiquement.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **Mixed\_Curve** est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Mixed Curve

* Données**Direction1** (`Vector`) : direction de la projection de la première forme. Si le vecteur est nul, le placement de la forme est utilisé.
* Données**Direction2** (`Vecteur`) : direction de la projection de la deuxième forme. Si le vecteur est nul, le placement de la forme est utilisé.
* Données**Fill Face1** (`Bool`) : construit des surfaces réglées entre la forme 1 et Mixed\_Curve qui en résulte.
* Données**Fill Face2** (`Bool`) : construit des surfaces réglées entre la forme 2 et Mixed\_Curve qui en résulte.
* Données**Shape1** (`Link`) : première forme.
* Données**Shape2** (`Link`) : deuxième forme.

Shape Approximation

* Données**Active** (`Bool`) : Utiliser l'approximation.
* Données**Approx Tolerance** (`Float`) : tolérance d'approximation.
* Données**Continuity** (`Enumeration`) : continuité souhaitée des courbes.
* Données**Degree Max** (`Integer`) : degré maximal de la courbe.
* Données**Degree Min** (`Integer`) : degré minimum de la courbe.
* Données**Extension Proxy** (`PythonObject`) : objet proxy de l'extension d'approximation.
  + `ChordLength` :
  + `Centripetal` :
  + `Uniform` :
* Données**Parametrization** (`Enumeration`) : type de paramétrage.
* Données**Samples** (`Integer`) : nombre d'échantillons.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_MixedCurve/fr&oldid=1566584>"