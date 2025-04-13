---
title: CAM Rainure
---
:::caution
Il s'agit d'une fonctionnalité expérimentale inachevée.CAM Fonctions expérimentales
:::

|  |
| --- |
| CAM Rainure |
| Emplacement du menu |
| CAM → Rainurer |
| Ateliers |
| [CAM](/CAM_Workbench/fr "CAM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/CAM_Slot.svg) Rainure crée une simple opération de rainurage en utilisant différentes méthodes de saisie.

Les entrées comprennent :

* sélection d'une ou plusieurs faces ou arêtes.
* sélection de deux sommets.
* saisie de deux points personnalisés.

L'objet CAM Rainure est conçu pour faire partie d'une ![](/images/CAM_Job.svg) [CAM Tâche](/CAM_Job/fr "CAM Job/fr").

## Utilisation

1. Sélectionner la géométrie de référence sur le modèle :
   * une ou plusieurs faces ou arêtes.
   * deux sommets.
   * ***rien***  pour utiliser deux points personnalisés saisis dans la vue Propriété de l'onglet Données : Custom Point1 et Custom Point2.
2. Lancer la commande Rainure en utilisant plusieurs méthodes :
   * En appuyant sur la touche ![](/images/CAM_Slot.svg) Rainurer dans la barre d'outils.
   * En utilisant CAM → ![](/images/CAM_Slot.svg) Rainurer du menu.
3. Ajuster les propriétés souhaitées. Les descriptions des propriétés disponibles se trouvent ci-dessous.

### Remarques d'utilisation

* Toutes les rainures :
  + Le début et la fin d'un parcours de rainure peuvent être étendus ou raccourcis. Utilisez les propriétés "Extend Path Start" et "Extend Path End".
  + Utiliser la propriété "Layer Mode" pour couper la rainure en mode "Single-pass" à la profondeur finale, ou en mode "Multi-pass" en utilisant la propriété "Step Down" disponible.
  + Activer la propriété "Reverse Direction" pour inverser la direction du parcours de la coupe.

* Rainures linéaires :
  + Actuellement, il n'est pas possible de décaler latéralement (parallèlement à la trajectoire) les rainures linéaires.  ***Exemple :***  supposons que le diamètre de l'outil soit inférieur à la largeur de la zone de rainure à dégager. Le comportement actuel de cette opération est de créer un ensemble de parcours sur un plan le long de la ligne centrale de la rainure désignée, ce qui aura pour conséquence que le volume de la rainure ne sera pas entièrement détouré. Certains utilisateurs souhaiteraient que l'opération crée plusieurs parcours décalés latéralement pour dégager l'ensemble de la zone de la rainure. Cela n'est pas directement possible mais peut être réalisé en utilisant les "Points personnalisés", voir "Fraisage vertical" ci-dessous. Il est également possible d'utiliser l'opération Poche pour un tel détourage.
  + Créer une rainure linéaire personnalisée en utilisant les propriétés "Custom Point1" et "Custom Point2" sans sélection de géométrie.  ***Exemple :***  lancez une opération de rainurage depuis l'interface graphique et cliquez sur "OK" pour sauvegarder. Localisez et éditez les propriétés "Custom Point1" et "Custom Point2" dans l'onglet Données de l'opération de rainurage juste créée. Recalculez l'opération pour mettre à jour le parcours.

* Fraisage vertical :
  + La plupart des outils de CAM ne peuvent pas réaliser un parcours sur un seul plan vertical car la projection sur le plan horizontal a une surface nulle (une limitation interne). L'opération de rainurage rend cela possible en sélectionnant des "points personnalisés" qui définissent une ligne parallèle au plan vertical et des paramètres de profondeur appropriés.

* Rainures en arc/circulaire :
  + Créations de rainures en arc/circulaire
    1. Vous devez sélectionner un arc inférieur de la rainure. Cela produira un parcours directement sur le bord de l'arc que vous avez sélectionné.
    2. Vous devrez ensuite modifier la propriété "Extend Radius" dans l'onglet Données de l'opération. En utilisant l'éditeur d'expression, définissez-la à "OpToolDiameter / 2.0" ou à la version négative "OpToolDiameter / -2.0", selon que vous avez sélectionné l'arc intérieur ou extérieur de la rainure.
    3. Recalculer l'opération.
    4. Gardez à l'esprit que si le diamètre de l'outil n'est pas égal à la largeur de la rainure, le parcours ***ne sera pas*** à l'emplacement correct. Dans ce cas, ajustez la valeur de la propriété "Extend Radius" mentionnée ci-dessus.
  + Actuellement, les utilisateurs ne sont pas en mesure de créer une trajectoire en arc/circulaire personnalisée. Une troisième propriété "Custom Center" devra être ajoutée, ainsi que des modifications supplémentaires au code de base.

## Propriétés

***Remarque*** : toutes ces propriétés ne sont pas disponibles dans l'éditeur de fenêtre de tâches. Certaines ne sont accessibles que dans l'onglet Données du panneau Vue de propriétés pour cette opération.

Base

Remarque : il est conseillé de ne pas modifier la propriété Placement des opérations de parcours. Il convient plutôt de déplacer ou de faire pivoter le modèle de la Tâche de CAM selon les besoins.

* Données**Placement** : placement global [position et rotation] de l'objet - par rapport à l'origine (ou à l'origine du conteneur d'objet parent)
  + Données**Angle** : angle en degrés appliqué à la rotation de l'objet autour de la valeur de la propriété Axis
  + Données**Axis** : axe(s) autour duquel faire pivoter l'objet, défini dans les sous-propriétés : X, Y, Z
    - Données**X** : valeur de l'axe X
    - Données**Y** : valeur de l'axe Y
    - Données**Z** : valeur de l'axe Z
  + Données**Position** : position de l'objet, définie dans les sous-propriétés : X, Y, Z - par rapport à l'origine (ou à l'origine du conteneur d'objet parent)
    - Données**X** : valeur de distance en X
    - Données**Y** : valeur de distance en Y
    - Données**Z** : valeur de distance en Z
* Données**Label** : nom d'objet fourni par l'utilisateur (UTF-8)

Depth

* Données**Clearance Height** : hauteur nécessaire pour supprimer les brides et les obstructions.
* Données**Final Depth** : profondeur finale de l'outil - valeur la plus basse de Z.
* Données**Finish Depth** : le maximum de matériau retiré lors du passage final. La hauteur (épaisseur) du dernier niveau de coupe - *pour une meilleure finition*.
* Données**Safe Height** : hauteur au-dessus de laquelle les mouvements rapides sont autorisés. (hauteur de sécurité rapide entre les sites).
* Données**Start Depth** : profondeur de départ de l'outil - *Profondeur de la première coupe en Z*.
* Données**Step Down** : pas de descente incrémentale de l'outil pendant l'opération.

![](/images/Path-DepthsAndHeights.gif)

Référence visuelle pour les propriétés de profondeur (paramètres)

Path

* Données**Active** : mettre à False pour empêcher l'opération de générer du code.
* Données**Base** : géométrie de base pour cette opération.
* Données**Comment** : commentaire facultatif pour cette opération.
* Données**Coolant Mode** : mode de refroidissement pour cette opération.
* Données**Cycle Time** : estimation du temps de cycle pour cette opération.
* Données**Tool Controller** : définit le contrôleur d'outil utilisé dans l'opération.
* Données**User Label** : étiquette attribuée par l'utilisateur.

Slot

* Données**Custom Point1** : point de départ personnalisé du parcours de la rainure.
* Données**Custom Point2** : point de fin personnalisé du parcours de la rainure.
* Données**Cut Pattern** : motif de détourage géométrique à utiliser pour l'opération.
* Données**Extend Path End** : positif étend la fin du parcours, négatif raccourcit.
* Données**Extend Path Start** : positif étend le début du parcours, négatif raccourcit.
* Données**Extend Radius** : pour les arcs/arêtes circulaires, décalez le rayon du parcours.
* Données**Layer Mode** : opération en une seule passe en profondeur ou en plusieurs passes jusqu'à la profondeur finale.
* Données**Path Orientation** : orientation du parcours en fonction de la ou des entités sélectionnées.
* Données**Reference1** : point à utiliser sur la première entité sélectionnée.
* Données**Reference2** : point à utiliser sur la deuxième entité sélectionnée.
* Données**Reverse Direction** : option pour inverser la direction de coupe du parcours de la rainure.

Start Point

* Données**Start Point** : point de départ personnalisé pour le parcours de cette opération.
  + Données**X** : valeur de distance en X.
  + Données**Y** : valeur de distance en Y.
  + Données**Z** : valeur de distance en Z.
* Données**Use Start Point** : mis à True, si vous spécifiez manuellement un point de départ. Définissez le point de départ dans le champ Start Point des propriétés de données.

## Disposition de l'éditeur de la fenêtre des tâches

*Les descriptions des paramètres sont fournies dans la liste des propriétés ci-dessus.*

Cette section est simplement une représentation des paramètres de l’éditeur de fenêtres pour l’opération.

### Géométrie de base

* **Ajouter** : ajoute le(s) élément(s) sélectionné(s) qui doit(vent) être la(les) base(s) pour le(s) parcours(s).
* **Enlever** : supprime le ou les éléments sélectionnés dans la liste de la géométrie de base.
* **Réinitialiser** : efface tous les éléments de la liste de la géométrie de base.

### Profondeurs

* Données**Start Depth**
* Données**Final Depth**
* Données**Step Down**

### Hauteurs

* Données**Safe Height**
* Données**Clearance Height**

### Opération

* Données**Tool Controller** : l'outil et ses paramètres à utiliser pour cette opération
* Données**Coolant Mode** : mode de refroidissement pour cette opération.
* Données**Start Reference \*\*** : point à utiliser sur la première entité sélectionnée.
* Données**End Reference \*\*** : point à utiliser sur la deuxième entité sélectionnée.
* Données**Extend Path End** : positif étend la fin du parcours, négatif raccourcit.
* Données**Extend Path Start** : positif étend le début du parcours, négatif raccourcit.
* Données**Layer Mode** : opération en une seule passe en profondeur ou en plusieurs passes jusqu'à la profondeur finale.
* Données**Path Orientation \*\*** : orientation du parcours en fonction des entités sélectionnées.
* Données**Reverse Direction** : option pour inverser la direction de coupe du parcours de la rainure.

**\*\*** la visibilité change en fonction de la géométrie de base sélectionnée.

## Script

*Voir aussi :* [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Exemple :

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Slot/fr&oldid=1430967>"