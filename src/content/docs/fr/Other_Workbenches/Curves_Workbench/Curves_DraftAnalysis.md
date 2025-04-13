---
title: Curves Analyse de dépouilles
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Curves Analyse de dépouilles |
| Emplacement du menu |
| Surfaces → Draft Analysis |
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

L'outil ![](/images/Curves_DraftAnalysis.svg) **Curves Analyse de dépouilles** crée une superposition colorée sur un objet pour visualiser les angles de dépouille.

![](/images/Curves_DraftAnalysis01.png)

Une sphère avec une [ligne de réflexion](/Curves_ReflectLines/fr "Curves ReflectLines/fr") à son équateur (à gauche) et l'objet DraftAnalysis correspondant (à droite)

## Utilisation

1. Sélectionnez une ou plusieurs formes.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Curves_DraftAnalysis.svg) Draft Analysis.
   * Sélectionnez l'option **Surfaces → ![](/images/Curves_DraftAnalysis.svg) Draft Analysis** du menu.
3. Un objet **DraftAnalysis** est créé pour chaque forme sélectionnée.

## Remarques

* Avec cet outil, vous pouvez vérifier si un objet peut être moulé. Grâce aux lignes de réflexion, le plan de jointure est déterminé pour les cavités du moule, comme avec l'image ci-dessus. La direction de l'outil passe par les pôles de la sphère. Son équateur est le plan de jointure. Dans ce cas, les gammes de couleurs au-dessus et au-dessous de la ligne de jointure peuvent être considérés comme des analyses distinctes des deux moitiés.
* Si cet outil est appliqué à un objet représentant un moule, une gamme de couleurs montre dans quelle mesure un objet moulé se détache du moule, tandis que l'autre gamme de couleurs met en évidence les régions qui entravent l'éjection de l'objet (contre-dépouilles).
* Les angles doivent être définis en fonction du processus de fabrication et du matériau choisi pour l'objet sélectionné. Les angles doivent être définis en fonction du processus de fabrication et du matériau choisi pour l'objet :
  + Vue**Draft Angle1+2** : angle minimum requis pour obtenir des pièces correctes si les autres paramètres du processus de fabrication sont affinés et contrôlés.
  + Vue**Draft Tol1+2** : ajouté à l'angle requis, il donne l'angle minimum recommandé qui permettra d'obtenir des pièces correctes et un processus de fabrication stable en toutes circonstances, sans autre mesure.
* Les couleurs :
  + Vue**Color In Draft1+2** : marque les zones dont l'angle de dépouille est supérieur à l'angle recommandé.
  + Vue**Color In Tolerance1+2** : marque les zones dont les angles de dépouille sont compris entre l'angle requis et l'angle minimum recommandé.
  + Vue**Color Out Of Draft1+2** : marque les zones dont les angles de dépouille sont inférieurs à l'angle requis et peuvent être interprétés comme n'ayant pas de dépouille du tout.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet **DraftAnalysis** est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Vue

Analysis Options

* Vue**Direction** (`Vector`) : direction de l'analyse
* Vue**Draft Angle1** (`FloatConstraint`) : angle de dépouille positif
* Vue**Draft Angle2** (`FloatConstraint`) : angle de dépouille négatif
* Vue**Draft Tol1** (`FloatConstraint`) : tolérance de dépouille positive
* Vue**Draft Tol2** (`FloatConstraint`) : tolérance de dépouille négative
* Vue**Shading** (`FloatConstraint`) : valeur de l'ombrage sur la superposition d'analyse

Colors1 Positive Draft

* Vue**Color In Draft1** (`Color`) : couleur de la zone positive sur la depouille
* Vue**Color In Tolerance1** (`Color`) : couleur de la zone de tolérance positive
* Vue**Color Out Of Draft1** (`Color`) : couleur de la zone positive hors de la depouille

Colors2 Negative Draft

* Vue**Color In Draft2** (`Color`) : couleur de la zone négative sur la depouille
* Vue**Color In Tolerance2** (`Color`) : couleur de la zone de tolérance négative
* Vue**Color Out Of Draft2** (`Color`) : couleur de la zone négative hors de la depouille

### Données

Analysis Options

* Données**Source** (`Link`) : objet sur lequel l'analyse est effectuée

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_DraftAnalysis/fr&oldid=1568201>"