---
title: CAM Profilage
---
|  |
| --- |
| CAM Profilage |
| Emplacement du menu |
| CAM → Profiler |
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

L'outil ![](/images/CAM_Profile.svg) Profilage crée une opération de profilage basée sur les fonctions sélectionnées du modèle. L'outil a été introduit dans la version 0.19. Il propose trois opérations qui étaient gérées par des outils distincts dans les versions précédentes.

Toutes les opérations créent des objets qui font partie d'une ![](/images/CAM_Job.svg) [CAM Tâche](/CAM_Job/fr "CAM Job/fr").

Voici les opérations disponibles :

### Opération Contour

Une opération Contour est la valeur par défaut. Elle crée une simple découpe de contour externe d'objets 3D complexes basés sur ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/fr "Part Workbench/fr"). Le modèle entier de la tâche sert d'entrée pour l'opération, que la géométrie du corps soit sélectionnée ou non lorsque la commande Contour est appelée.

### Opération Profilage de face

Une opération Profilage de face crée un parcours de contour simple à partir d'une ou plusieurs faces sélectionnées d'un objet.

### Opération Profilage des arêtes

Une opération Profilage des arêtes crée un parcours de contour simple à partir des arêtes sélectionnées.

![](/images/Path_profile_example.jpg)

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/CAM_Profile.svg) Profiler.
   * Sélectionnez l'option **CAM → ![](/images/CAM_Profile.svg) Profiler** du menu.
2. Activez la section Géométrie de base en cliquant sur son onglet et sélectionnez les fonctions du modèle de la tâche.
   * Si aucune fonction n'est sélectionnée, la commande passe par défaut à une opération de **Profilage**, profilant le modèle entier.
   * Si des faces sont sélectionnées, le résultat est une opération **Profiler des faces**.
   * Si des arêtes sont sélectionnées, alors le résultat est une opération **Profiler des arêtes**.

**REMARQUE** : cette opération a reçu des améliorations pour permettre la fonctionnalité sur certaines sélections d'arêtes ouvertes (non bouclées). Voir la section [Remarques d'utilisation](#Remarques_d'utilisation) ci-dessous pour des informations supplémentaires sur les meilleures pratiques pour le profilage des arêtes ouvertes.

1. Activez la section Opération en cliquant sur son onglet et ajustez les paramètres de l'opération comme vous le souhaitez.
2. Appuyez sur le bouton Appliquer pour prévisualiser l'opération avec les paramètres en cours.
3. Cliquez sur le bouton OK ou sur le bouton Annuler pour créer ou annuler l'opération.

**Remarque importante : CAM Profilage ne prend pas en charge les autres détails de l'objet. Vous devez ajuster les propriétés, en particulier la profondeur finale, avec soin, une erreur pourrait endommager votre pièce**.

Un point de départ peut être activé à partir de l'onglet Opération dans l'éditeur de fenêtre de tâches, en utilisant un emplacement défini dans **Vue de la propriété → Données → Start Point**.

Effectuez des ajustements supplémentaires à l'opération en modifiant les propriétés de l'opération dans l'onglet Données de la vue des propriétés. Les propriétés avancées se trouvent ici, le cas échéant.

## Remarques d'utilisation

* L'opération ![](/images/CAM_Profile.svg) Profilage est capable de d'effectuer le contour des **arêtes ouvertes** (une ou plusieurs arêtes continues qui ne forme une boucle vue de la *vue de dessus*)
  + Il est préférable de sélectionner les arêtes supérieures (arêtes les plus hautes) pour la sélection. Ensuite, vous devrez définir manuellement la profondeur finale de l'opération. La sélection des arêtes inférieures uniquement est imprévisible et risque de produire des trajectoires indésirables dans de nombreuses situations ; toutefois, elle produira des parcours corrects dans certaines situations.
  + Les arêtes sélectionnées doivent former une arête supérieure continue *vue de dessus*. Les arêtes supérieures sélectionnées peuvent avoir des hauteurs différentes, pour autant qu'elles soient reliées à une coordonnée (X, Y) commune - des hauteurs Z différentes sont acceptables dans *certains**\*\**** cas.  
    **\*\***Dans certains cas, l'utilisateur devra inclure dans sa sélection l'arête verticale droite reliant deux arêtes adjacentes de hauteurs différentes qui partagent une coordonnée (X, Y) commune.
  + Comme les arêtes supérieures sont sélectionnées, la profondeur finale de l'opération devra être définie manuellement.
  + Lors du profilage des arêtes ouvertes, la propriété "Side" ou "Cut Side" est désactivée en interne, même si elle sera probablement visible dans la fenêtre de l'éditeur de tâches et dans la liste des propriétés de l'onglet Données.
* Lors du profilage du modèle entier (un contour complet du modèle), la propriété "Side" ou "Cut Side" est fixée à "Outside" par défaut. L'utilisateur peut l'ajuster en fonction de la configuration de la pièce.

## Propriétés

***Remarque*** : toutes ces propriétés ne sont pas disponibles dans l'éditeur de fenêtre de tâches. Certaines ne sont accessibles que dans l'onglet Données du panneau Vue de propriétés pour cette opération.

Base

Remarque : il est conseillé de ne pas modifier la propriété Placement des opérations de parcours. Il convient plutôt de déplacer ou de faire pivoter le modèle de la Tâche de CAM selon les besoins.

* Données**Placement** : emplacement global [position et rotation] de l'objet - par rapport à l'origine (ou à l'origine du conteneur de l'objet parent).
  + Données**Angle** : angle en degrés appliqué à la rotation de l'objet autour de la valeur de la propriété Axis.
  + Données**Axis** : axe (un ou plusieurs) autour duquel faire pivoter l'objet, défini dans les sous-propriétés: x, y, z.
    - Données**X** : valeur de l'axe x.
    - Données**Y** : valeur de l'axe y.
    - Données**Z** : valeur de l'axe z.
  + Données**Position** : position de l'objet, définie dans les sous-propriétés: x, y, z - par rapport à l'origine (ou à l'origine du conteneur de l'objet parent).
    - Données**X** : valeur de distance x.
    - Données**Y** : valeur de distance y.
    - Données**Z** : valeur de distance z.
* Données**Label** : nom de l'objet fourni par l'utilisateur (UTF-8).

Depth

* Données**Clearance Height** : hauteur nécessaire pour éviter les collisions entre l'outil et les brides et autres obstacles.
* Données**Final Depth** : profondeur finale de l'outil, valeur la plus basse en Z. L'utilisateur doit la définir.
* Données**Finish Depth** : surépaisseur de finition : épaisseur du copeau pour la passe de finition, "pour une meilleure finition".
* Données**Safe Height** : hauteur au-dessus de laquelle les mouvements rapides sont autorisés. (Hauteur de sécurité rapide entre deux endroits)
* Données**Start Depth** : profondeur de départ de l'outil, *Profondeur de la première coupe en Z*. L'utilisateur doit la définir.
* Données**Step Down** : descente incrémental de l'outil pendant l'opération.

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

Profile

* Données**Direction** : direction dans laquelle la trajectoire d'outil doit faire le tour de la pièce: dans le sens horaire [CW] ou dans le sens antihoraire [CCW].
* Données**Expand Profile** : étend le détourage du profilage au-delà du décalage supplémentaire.
* Données**Expand Profile Step Over** : définit le pourcentage des recouvrements entre les passes, en fonction du diamètre de l'outil.
* Données**Handle Multiple Features** : choix de comment traiter plusieurs fonctionnalités de la géométrie de base.
* Données**OffsetExtra** : valeur supplémentaire pour rester à l'écart du contour final - bon pour l'ébauche du parcours d'outil.
* Données**Process Circles** : vérifie si vous souhaitez que cette opération de contour s'applique également aux trous cylindriques, *qui sont normalement percés*.
* Données**Process Holes** : vérifie si cette opération de contour doit également traiter les trous dans la géométrie de base. **Notez** que cela n'inclut pas les trous cylindriques.
* Données**Process Perimeter** : vérifie si cette opération de contour doit également traiter le périmètre extérieur des formes géométriques de base.
* Données**Side** : (coupe le côté) côté du bord que l'outil doit couper. Cela n'a d'importance que si *Utiliser la compensation* est coché.
* Données**Use Compensation** : si cette case est cochée, l'opération de contour est décalée du rayon de l'outil. La direction du décalage est déterminée par le côté de coupe.

Rotation

* Données**Attempt Inverse Angle** : tente automatiquement l'angle inverse si la rotation initiale est incorrecte.
* Données**Enable Rotation** : active la rotation pour accéder aux poches ou aux zones qui ne sont pas normales à l'axe Z.
* Données**Inverse Angle** : inverse l'angle de rotation.  ***Exemple :** change une rotation de -22,5 à 22,5 degrés.*
* Données**Limit Depth To Face** : applique la profondeur Z de la face sélectionnée comme valeur la plus basse pour la profondeur finale. Des valeurs utilisateur plus élevées pour la profondeur finale seront observées.
* Données**Reverse Direction** : inverse l'orientation de l'opération de 180 degrés.

Start Point

* Données**Start Point** : point de départ personnalisé pour le parcours de cette opération.
  + Données**X** : valeur de distance x.
  + Données**Y** : valeur de distance y.
  + Données**Z** : valeur de distance z.
* Données**Use Start Point** : mis à True, si vous spécifiez manuellement un point de départ. Définissez le point de départ dans le champ Start Point des propriétés de données.

## Disposition de l'éditeur de la fenêtre des tâches

*Les descriptions des paramètres sont fournies dans la liste des propriétés ci-dessus.*
Cette section est simplement une représentation des paramètres de l’éditeur de fenêtres pour l’opération.

### Géométrie de base

* **Ajouter** : ajoute le(s) élément(s) sélectionné(s) qui doit(vent) être la(les) base(s) pour le(s) trajectoire(s).
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

* Données**Tool Controller**
* Données**Coolant Mode**
* Données**Cut Side \*\***
* Données**Direction**
* Données**Extra Offset**
* Données**Enable Rotation**
* Données**Use Start Point**
* Données**Use Compensation**
* Données**Process Holes \*\***
* Données**Process Circles \*\***
* Données**Process Perimeter \*\***

**\*\*** La disponibilité change en fonction des sélections dans la section Base Geometry.

## Script

*Voir aussi:* [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Exemple :

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Profile/fr&oldid=1529599>"