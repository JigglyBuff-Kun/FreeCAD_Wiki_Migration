---
title: Part Vérifier la géométrie
---
|  |
| --- |
| Part Vérifier la géométrie |
| Emplacement du menu |
| Part → Vérifier la géométrie |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Part_CheckGeometry.svg) Part Vérifier la géométrie exécute une vérification et indique si la géométrie est un solide valide. L'outil vérifie si la [Représentation par les Bords](https://fr.wikipedia.org/wiki/B-Rep) (BRep ou [B-rep](/Glossary/fr#B "Glossary/fr")) du modèle est valide.

## Utilisation

1. Sélectionnez une pièce (attention à sélectionner la pièce entière et pas seulement une face pour vérifier la validité du solide).
2. Lancez l'outil :
   * soit en cliquant sur le bouton ![](/images/Part_CheckGeometry.svg) Vérifier la géométrie disponible dans la barre d'outils de l'atelier Part.
   * soit en utilisant **Part → ![](/images/Part_CheckGeometry.svg) Vérifier la géométrie** du menu supérieur.
3. La fenêtre de dialogue des **Réglages** s'ouvre sauf si **Sauter cette page des paramètres** est activé. Voir [Options](#Options) pour plus d'informations. Cliquez sur Lancer la vérification.

Les résultats seront présentés dans le [panneau des tâches](/Task_panel/fr "Task panel/fr"). Si la vérification a produit des erreurs : cliquez dans le rapport sur un message d'erreur spécifique et l'objet géométrique correspondant (arête, face, etc.) sera mis en surbrillance dans la [vue 3D](/3D_view/fr "3D view/fr").

## Options

### Sauter cette page des paramètres

Si cette case est cochée, les prochaines utilisations de l'outil n'afficheront pas la fenêtre de dialogue des **Réglages**.

### Exécuter la vérification des opérations booléennes

Si cette case est cochée, une vérification supplémentaire des opérations booléennes (BOP) est effectuée.

### Journal des erreurs

Si cette case est cochée, toutes les erreurs trouvées seront également enregistrées dans la [vue rapport](/Report_view/fr "Report view/fr").

## Contenu des formes

En plus de détecter les erreurs potentielles de géométrie, cet outil affiche une série de propriétés concernant l'objet sélectionné :

* Objet vérifié
* Type de forme
* Nombre d'entités géométriques : sommets, arêtes, fils, faces, coques, solides, compsolides, composés, formes totales...
* Propriétés géométriques et de masse :
  + Aire
  + Volume
  + Masse
  + Longueur
  + Centre de masse
  + Orientation
  + Axe de symétrie
  + Point de symétrie
  + Moments
  + Premier axe d'inertie
  + Deuxième axe d'inertie
  + Troisième axe d'inertie
  + Rayon de giration
  + Placement global

## Remarques

* Les objets [App Link](/App_Link/fr "App Link/fr") liés aux types d'objets appropriés et les conteneurs [App Part](/App_Part/fr "App Part/fr") contenant les objets visibles appropriés peuvent également être vérifiés à l'aide de cet outil. Pour les [App Links](/App_Link/fr "App Link/fr"), la forme de l'objet lié est vérifiée. Pour les conteneurs [App Part](/App_Part/fr "App Part/fr"), les objets visibles qu'ils contiennent sont vérifiés en tant que composés. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")
* FreeCAD ne dispose pas de méthodes pour réparer automatiquement la géométrie. Si des défauts sont détectés, les étapes de la création du modèle doivent être examinées et réparées manuellement.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_CheckGeometry/fr&oldid=1529968>"