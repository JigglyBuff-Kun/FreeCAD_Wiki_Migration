---
title: CAM Gravure
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| CAM Gravure |
| Emplacement du menu |
| CAM → Graver |
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

L'outil ![](/images/CAM_Engrave.svg) Gravure sert principalement à graver une ![](/images/Draft_ShapeString.svg)[Draft Forme à partir d'un texte](/Draft_ShapeString/fr "Draft ShapeString/fr") sur une pièce. Il peut être utile pour d'autres types de 2D.

## Utilisation

Vide

## Options

Vide

## Propriétés

### Données

Base

* Données**Placement** :
* Données**Label** : nom de l'objet (UTF-8)

Depth

* Données**Clearance Height** : hauteur nécessaire pour éviter les pinces et les obstructions.
* Données**Final Depth** : profondeur finale de l'outil - valeur la plus basse de Z.
* Données**Safe Height** : seuil supérieur duquel les mouvements rapides sont autorisés.
* Données**Start Depth** : profondeur initiale de l'outil - première profondeur de coupe en Z.
* Données**Step Down** : pas de descente incrémentale de l'outil.

Path

* Données**Active** : mettre à False pour empêcher l'opération de générer du code
* Données**Base** : géométrie de base pour cette opération
* Données**Comment** : commentaire facultatif pour cette opération
* Données**Coolant Mode** : mode de refroidissement pour cette opération
* Données**Cycle Time** : durée estimée du cycle pour cette opération
* Données**Start Vertex** : index du sommet pour commencer le parcours à partir de
* Données**Tool Controller** : contrôleur d'outil qui sera utilisé pour calculer le parcours
* Données**User Label** : étiquette attribuée par l'utilisateur

Hidden

* Données**Base Object** :
* Données**Base Shapes** :
* Données**Expression Engine** :
* Données**Label2** :
* Données**Path** :
* Données**Proxy** :
* Données**Visibility** :

### Vue

Vide

## Script

*Voir aussi :* [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Exemple :

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Engrave/fr&oldid=1389001>"