---
title: CAM Perçage
---
|  |
| --- |
| CAM Perçage |
| Emplacement du menu |
| CAM → Percer |
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

L'outil ![](/images/CAM_Drilling.svg) Perçage génère une opération de perçage.

![](/images/Path_Drilling_Sample.png)

Ci-dessus : exemple d'opérations de perçage de CAM

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/CAM_Drilling.svg) Percer.
   * Sélectionnez l'option **CAM → ![](/images/CAM_Drilling.svg) Percer** du menu.
2. Dans la section **Opération** :
   * Sélectionnez un **Contrôleur d'outil**.
   * Sélectionnez un **Mode de refroidissement**.
   * En option, activez et ajustez les éléments suivants :
     + **Perçage par débourrage** définissez la **Profondeur**.
     + **Temporisation** définit le **Temps** en secondes.
     + **Profondeur étendue**.
3. Dans la section **Géométrie de base**, vérifiez que la liste correspond aux trous destinés à être traités, et ajustez l'ajout, l'activation ou la désactivation, si nécessaire. Les trous peuvent être ajoutés en sélectionnant les faces des murs des Trous.
4. Dans la section **Profondeurs**, vérifiez et ajustez si nécessaire les **Profondeur initiale** et **Profondeur finale**.
5. Dans la section **Hauteurs**, vérifiez et, si nécessaire, ajustez les **Hauteur de sécurité** et **Hauteur de dégagement**.
6. Appuyez sur le bouton OK pour générer le(s) parcours(s) de perçage.

## Remarques

* Lorsque vous utilisez des arêtes pour la géométrie de base, sélectionnez toujours le bord inférieur du trou.
* Vérifiez toujours que l'outil choisi est le bon diamètre pour le(s) trou(s) sélectionné(s).
* **Perçage par débourrage** génère des cycles de forage pré-programmés G81. **Perçage par débourrage** génère des cycles de forage pré-programmés G83.
* **Temporisation activé** n'est pas actuellement prise en charge, mais est destiné à générer des cycles de forage fixes G82.

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
  + Données**Position** : position de l'objet, définie dans les sous-propriétés: X, Y, Z - par rapport à l'origine (ou à l'origine du conteneur de l'objet parent).
    - Données**X** : valeur de distance X.
    - Données**Y** : valeur de distance Y.
    - Données**Z** : valeur de distance Z.
* Données**Label** : nom de l'objet fourni par l'utilisateur (UTF-8).
* Données**Disabled** : liste des fonctionnalités désactivées.

Depth

* Données**Clearance Height** : hauteur nécessaire pour éviter les brides et les obstructions.
* Données**Final Depth** : profondeur finale de l'outil - valeur la plus basse de Z.
* Données**Safe Height** : hauteur au-dessus de laquelle les mouvements rapides sont autorisés. (hauteur de sécurité rapide entre les sites).
* Données**Start Depth** : profondeur initiale de l'outil - *profondeur de la première coupe en Z*.

Drill

* Données**Add Tip Length** : calcule la longueur de la pointe et la soustrait de la profondeur finale.
* Données**Dwell Enabled** : active la temporisation.
* Données**Dwell Time** : le temps de pause entre les cycles de perçage par débourrage .
* Données**Peck Depth** : profondeur de perçage par débourrage incrémental avant de se rétracter pour enlever les copeaux.
* Données**Peck Enabled** : active le perçage par débourrage.
* Données**Retract Height** : hauteur à laquelle commence l'avance de l'outil et la hauteur pendant laquelle l'outil est rétracté lorsque la trajectoire est terminée.
* Données**Return Level** : contrôle le retrait de l'outil. Par défaut = G98.

Path

* Données**Active** : mis à False, pour empêcher l'opération de générer du code.
* Données**Comment** : commentaire facultatif pour cette opération.
* Données**User Label** : étiquette attribuée par l'utilisateur.
* Données**Tool Controller** : définit le contrôleur d'outil utilisé dans l'opération.

Rotation (*si disponible*)

* Données**Attempt Inverse Angle** : tente automatiquement l'angle inverse si la rotation initiale est incorrecte.
* ~~Données**B\_Axis Error Override** : oriente visuellement les rotations B(y) vers le modèle (erreur dans le rendu FreeCAD).~~
* Données**Enable Rotation** : active la rotation pour accéder aux trous non normaux sur l'axe Z.
* Données**Angle Inverse** : inverse l'angle de la rotation.  ***Exemple :** change une rotation de -22,5 à 22,5 degrés.*
* Données**Reverse Direction** : inverse l'orientation de l'opération de 180 degrés.

## Disposition de l'éditeur de la fenêtre des tâches

*Les descriptions des paramètres sont fournies dans la liste des propriétés ci-dessus.*

Cette section est simplement une représentation des paramètres de l’éditeur de fenêtres pour l’opération.

### Géométrie de base

* **Ajouter** : ajoute le(s) élément(s) sélectionné(s) qui doit(vent) être la(les) base(s) pour le(s) parcours.
* **Enlever** : supprime le ou les éléments sélectionnés dans la liste de la géométrie de base.
* **Réinitialiser** : efface tous les éléments de la liste de la géométrie de base.

### Emplacement de base

* **Ajouter** : ajoute un emplacement de coordonnées (X, Y) à l'opération de perçage en cours.
* **Enlever** : supprime le(s) élément(s) de localisation sélectionné(s) de la liste des emplacements de base.
* **Éditer** : modifie l'élément l'emplacement sélectionné.

### Profondeurs

* **Profondeur initiale** :
* **Profondeur finale** :

### Hauteurs

* **Hauteur de sécurité** :
* **Hauteur de dégagement** :

### Opération

* **Contrôleur d'outil** :
* **Hauteur de rétraction** :
* **Perçage par débourrage** :
* **Profondeur du perçage par débourrage** :
* **Temporisation** :
* **Temps de temporisation** :
* **Longueur de la pointe utilisée** :

## Script

*Voir aussi :* [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Exemple :

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Drilling/fr&oldid=1476140>"