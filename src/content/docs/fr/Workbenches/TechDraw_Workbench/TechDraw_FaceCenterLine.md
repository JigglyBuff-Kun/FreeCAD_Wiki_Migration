---
title: TechDraw Ligne centrale à une face
---
|  |
| --- |
| TechDraw Ligne centrale à une face |
| Emplacement du menu |
| TechDraw → Ajouter des lignes → Ajouter une ligne centrale à des faces |
| Ateliers |
| [TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [TechDraw Point cosmétique](/TechDraw_CosmeticVertex/fr "TechDraw CosmeticVertex/fr"), [TechDrawAdd Ligne centrale entre 2 lignes](/TechDraw_2LineCenterLine/fr "TechDraw 2LineCenterLine/fr"), [TechDraw Ligne centrale entre 2 sommets](/TechDraw_2PointCenterLine/fr "TechDraw 2PointCenterLine/fr"), [TechDraw Gomme](/TechDraw_CosmeticEraser/fr "TechDraw CosmeticEraser/fr") |
|  |

## Description

L'outil **TechDraw Ligne centrale à une face** ajoute une ligne médiane à une ou plusieurs faces.

![](/images/TechDraw_FaceCenterLine_Sample.png)

Ligne centrale ajoutée a une face

## Utilisation

1. Sélectionnez une ou plusieurs faces dans une vue.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/TechDraw_FaceCenterLine.svg) Ajouter une ligne centrale à des faces.
   * Sélectionnez l'option **TechDraw → Ajouter des lignes → ![](/images/TechDraw_FaceCenterLine.svg) Ajouter une ligne centrale à des faces** du menu.
3. Un panneau de tâches s'ouvre. Voir [Options](#Options) pour plus d'informations.
4. Appuyez sur le bouton OK pour confirmer.
5. Une ligne centrale est ajoutée au milieu de la boîte de délimitation de la ou des face(s) sélectionnée(s).

## Édition

N'importe quel outil de ligne centrale (![](/images/TechDraw_FaceCenterLine.svg) TechDraw Ligne centrale à une face, ![](/images/TechDraw_2LineCenterLine.svg) [TechDraw Ligne centrale entre 2 lignes](/TechDraw_2LineCenterLine/fr "TechDraw 2LineCenterLine/fr") et ![](/images/TechDraw_2PointCenterLine.svg) [TechDraw Ligne centrale entre 2 points](/TechDraw_2PointCenterLine/fr "TechDraw 2PointCenterLine/fr")) peuvent être utilisés pour éditer n'importe quelle ligne centrale.

1. Sélectionnez une ligne centrale.
2. Lancez un outil de ligne centrale.
3. Un panneau de tâches s'ouvre. Voir [Options](#Options) pour plus d'informations.
4. Appuyez sur le bouton OK pour confirmer.

## Options

* **Orientation** :
  + **Vertical** : force la ligne centrale à être verticale. Ignoré pour Ligne centrale entre 2 points.
  + **Horizontal** : force la ligne centrale à être horizontale. Ignoré pour Ligne centrale entre 2 points.
  + **Aligné** : non disponible pour Ligne centrale à une face. Force la ligne centrale à suivre la direction générale des arêtes sélectionnées pour Ligne centrale entre 2 lignes. Ignoré pour Ligne centrale entre 2 points.
* **Décalage horizontal** : déplace la ligne centrale à gauche ou à droite de sa position normale.
* **Décalage vertical** : déplace la ligne centrale vers le haut ou vers le bas par rapport à sa position normale.
* **Pivoter** : fait pivoter la ligne centrale autour de son point central (en degrés. + dans le sens inverse des aiguilles d'une montre, - dans le sens des aiguilles d'une montre).
* **Étendre de** : allonge la ligne centrale de cette valeur.
* **Couleur** : couleur de la ligne centrale.
* **Épaisseur** : largeur de la ligne centrale.
* **Style** : style de la ligne centrale. Les options sont :
  + ![](/images/Continuous-line.svg) **Continu**
  + ![](/images/Dash-line.svg) **Tiret**
  + ![](/images/Dot-line.svg) **Point**
  + ![](/images/DashDot-line.svg) **Tiret Point**
  + ![](/images/DashDotDot-line.svg) **Tiret Point Point**

## Remarques

* Pour supprimer une ligne centrale, sélectionnez-la et appuyez sur Supprimer. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
* Une ligne centrale à une face remplacera éventuellement deux propriétés d'affichage :
  + Vue**HorizCenterLine** : affiche un trait d'axe horizontal dans la vue.
  + Vue**VertCenterLine** : affiche un trait d'axe vertical dans la vue.

## Propriétés

Les lignes centrales n'ont pas de propriétés propres car elles ne sont pas des objets du document.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_FaceCenterLine/fr&oldid=1413121>"