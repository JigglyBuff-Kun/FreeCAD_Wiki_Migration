---
title: CAM Poche
---
|  |
| --- |
| CAM Poche |
| Emplacement du menu |
| CAM → Créer une poche |
| Ateliers |
| [CAM](/CAM_Workbench/fr "CAM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/CAM_Pocket_Shape.svg) Poche crée une opération de poche à partir de faces inférieures sélectionnées, de parois, d'une ou de plusieurs poches de l'objet de base des tâches.

L'objet CAM Poche est conçu pour faire partie d'une ![](/images/CAM_Job.svg) [CAM Tâche](/CAM_Job/fr "CAM Job/fr").

![](/images/Path_Pocket_Shape_example.png)

## Utilisation

1. Sélectionnez le fond ou une/des face(s) d'une poche. Alors qu'il est généralement plus facile de sélectionner le fond, les faces doivent être sélectionnées lorsqu'une poche est traversante.
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/CAM_Pocket_Shape.svg) Créer une poche.
   * Sélectionnez l'option **CAM → ![](/images/CAM_Pocket_Shape.svg) Créer une poche** du menu.
3. Ajustez les propriétés souhaitées.

## Propriétés

***Remarque*** : toutes ces propriétés ne sont pas disponibles dans l'éditeur de fenêtre de tâches. Certaines ne sont accessibles que dans l'onglet Données du panneau Vue de propriétés pour cette opération.

Base

Remarque : il est conseillé de ne pas modifier la propriété Placement des opérations de parcours. Il convient plutôt de déplacer ou de faire pivoter le modèle de la Tâche de CAM selon les besoins.

* Données**Placement** : emplacement global [position et rotation] de l'objet - par rapport à l'origine (ou à l'origine du conteneur de l'objet parent).
  + Données**Angle** : angle en degrés appliqué à la rotation de l'objet autour de la valeur de la propriété Axis.
  + Données**Axis** : axe (un ou plusieurs) autour duquel faire pivoter l'objet, défini dans les sous-propriétés: X, Y, Z.
    - Données**X** : valeur de l'axe X.
    - Données**Y** : valeur de l'axe Y.
    - Données**Z** : valeur de l'axe Z.
  + Données**Position** : position de l'objet, définie dans les sous-propriétés : X, Y, Z - par rapport à l'origine (ou à l'origine du conteneur de l'objet parent).
    - Données**X** : valeur de distance X.
    - Données**Y** : valeur de distance Y.
    - Données**Z** : valeur de distance Z.
* Données**Label** : nom de l'objet fourni par l'utilisateur (UTF-8).

Depth

* Données**Clearance Height** : hauteur nécessaire pour supprimer les pinces et les obstructions.
* Données**Final Depth** : profondeur finale de l'outil - valeur la plus basse de Z.
* Données**Finish Depth** : le maximum de matériau retiré lors du passage final. La hauteur (épaisseur) du dernier niveau de coupe - *pour une meilleure finition*.
* Données**Safe Height** : hauteur au-dessus de laquelle les mouvements rapides sont autorisés. (Hauteur de sécurité rapide entre les sites).
* Données**Start Depth** : profondeur de départ de l'outil - *Profondeur de la première coupe en Z*.
* Données**Step Down** : abaissement incrémental de l'outil pendant l'opération.

![](/images/Path-DepthsAndHeights.gif)

Référence visuelle pour les propriétés de profondeur (paramètres)

Extension

* Données**Extension Corners** : lorsque cette option est activée, les bords d'extension connectés sont combinés à des polylignes.
* Données**Extension Length Default** : longueur par défaut des extensions.

Face

* Données**Offset Pattern** : motif de détourage à utiliser. (Sélectionnez la manière dont les mouvements horizontaux doivent être effectués.)

Path

* Données**Active** : mis à False, pour empêcher l'opération de générer du code.
* Données**Comment** : commentaire facultatif pour cette opération.
* Données**User Label** : étiquette attribuée par l'utilisateur.
* Données**Tool Controller** : définit le contrôleur d'outil utilisé dans l'opération.

Pocket

* Données**Cut Mode** : spécifie un déplacement sens horaire ou anti-horaire pour la coupe.
* Données**Extra Offset** : décalage supplémentaire à appliquer à l'opération. La direction dépend du fonctionnement. (Valeur supplémentaire pour rester loin du profil final- *bon pour dégrossir le parcours*).
* Données**Keep Tool** : tente d'éviter les retraits inutiles.
* Données**Min Travel** : utilise le tri 3D de Path (lorsque plusieurs géométries de base sont utilisées).
* Données**Start At** : commence à effectuer la poche par le centre ou pare le bord.
* Données**Step Over** : sélectionne le pas horizontal (**Pourcentage** du diamètre de l'outil : 100% = diamètre de l'outil).
* Données**Use Outline** : utilise le contour de la géométrie de base.
* Données**Zig Zag Angle** : angle du motif en zigzag. (Sélectionnez l’angle de trajectoire par rapport à l’axe X).

Rotation

* Données**Attempt Inverse Angle** : tente automatiquement l'angle inverse si la rotation initiale est incorrecte.
* ~~Données**B\_Axis Error Override** : oriente visuellement les rotations B(y) vers le modèle (erreur dans le rendu FreeCAD).~~
* Données**Enable Rotation** : active la rotation pour accéder aux trous non normaux sur l'axe Z.
* Données**Angle Inverse** : inverse l'angle de la rotation.  ***Exemple :** change une rotation de -22,5 à 22,5 degrés.*
* Données**Reverse Direction** : inverse l'orientation de l'opération de 180 degrés.

Start Point

* Données**Start Point** : point de départ de ce parcours.
* Données**Use Start Point** : si vous spécifiez manuellement un point de départ, mettre à True, puis saisir les points de départ dans le champ Start Point des propriétes des données.

## Disposition de l'éditeur de la fenêtre des tâches

*Les descriptions des paramètres sont fournies dans la liste des propriétés ci-dessus.*

Cette section est simplement une représentation des paramètres de l’éditeur de fenêtres pour l’opération.

### Géométrie de base

* **Ajouter** : ajoute le(s) élément(s) sélectionné(s) qui doit(vent) être la(les) base(s) pour le(s) trajectoire(s).
* **Enlever** : supprime le ou les éléments sélectionnés dans la liste de la géométrie de base.
* **Réinitialiser** : efface tous les éléments de la liste de la géométrie de base.

### Extensions

* Données**Show All** : si cette option est sélectionnée, toutes les extensions potentielles sont visualisées. Les extensions activées sont en violet, les extensions désactivées en jaune.
* Données**Extension Corners**
* Données**Extension Length Default**
* **Enable**
* **Disable**
* **Clear**

### Profondeurs

* Données**Start Depth**
* Données**Final Depth**
* Données**Step Down**

### Hauteurs

* Données**Safe Height**
* Données**Clearance Height**

### Opération

* Données**Tool Controller**
* Données**Cut Mode**
* Données**Pattern** (motif de décalage)
* Données**Angle** (angle de zig zag)
* Données**Step Over Percent** (pas à pas)
* Données**Pass Extension** : distance à laquelle l'opération de parement s'étendra au-delà de la forme de la bordure (géométrie de base).

## Script

*Voir aussi :* [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Pocket_Shape/fr&oldid=1481297>"