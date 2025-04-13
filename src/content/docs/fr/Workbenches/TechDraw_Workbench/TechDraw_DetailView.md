---
title: TechDraw Vue détaillée
---
|  |
| --- |
| TechDraw Vue détaillée |
| Emplacement du menu |
| TechDraw → Vues de Techdraw → Insérer une vue détaillée |
| Ateliers |
| [TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [TechDraw Vue](/TechDraw_View/fr "TechDraw View/fr") |
|  |

## Description

L'outil **TechDraw Vue détaillée** crée une vue d'une petite zone d'une vue existante.

![](/images/ViewDetail.png)

Vue détaillée avec un contour circulaire

## Utilisation

1. Sélectionnez une vue de base pour la vue détaillée.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/TechDraw_DetailView.svg) Insérer une vue détaillée.
   * Sélectionnez l'option **TechDraw → Vues de Techdraw → ![](/images/TechDraw_DetailView.svg) Insérer une vue détaillée** dans le menu.
3. Un contour de surbrillance est ajouté à la vue de base, une vue détaillée est ajoutée à la page et un panneau de tâches s'ouvre.
4. Pour plus de visibilé, il est préférable de déplacer la vue détaillée de manière à ce qu'elle ne chevauche pas avec la vue de base : maintenez le bouton gauche de la souris enfoncé sur son cadre ou son étiquette et faites-la glisser vers une nouvelle position.
5. Pour modifier la position du contour de surbrillance, procédez comme suit :
   * Déplacez le contour en le faisant glisser :
     1. Appuyez sur le bouton Déplacez la sélection.
     2. Le contour est marqué sur la page et une étiquette temporaire "glisser" est ajoutée.
     3. Maintenez le bouton gauche de la souris enfoncé sur le contour lui-même ou sur cette étiquette et faites glisser le contour vers une nouvelle position.
   * Déplacez le contour par saisie de coordonnées :
     1. Modifiez les coordonnées X et Y dans le panneau des tâches. Les coordonnées sont relatives au centre de la vue de base.
6. Modifiez éventuellement le **Rayon** de la vue détaillée.
7. Modifier éventuellement le **Type d'échelle** et le **Facteur d'échelle** de la vue détaillée. Voir [TechDraw Vue](/TechDraw_View/fr#Propriétés "TechDraw View/fr") pour plus d'informations.
8. Spécifier une étiquette **Référence**. Cette étiquette sera affichée près du contour de la surbrillance.

## Remarques

* Pour modifier une vue détaillée, double-cliquez dessus dans la vue en arborescence.
* Les contours des vues détaillées peuvent être ronds ou carrés. Ceci est contrôlé par la **Forme du contour pour les vues détaillées** des [préférences](/TechDraw_Preferences/fr#Annotation "TechDraw Preferences/fr").
* [Forum avec une bonne discussion sur la détermination du point d'ancrage](https://www.forum.freecadweb.org/viewtopic.php?f=35&t=34055#p285281).

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Dans les propriétés de Données**Base View**, vous pouvez modifier l'apparence du contour détaillé.

Une vue détaillée, en fait un objet `TechDraw::DrawViewDetail`, est dérivée d'une [vue de Part](/TechDraw_View/fr#Propriétés_Vue_de_Part "TechDraw View/fr"), objet `TechDraw::DrawViewPart`, et hérite de toutes ses propriétés. Elle possède également les propriétés supplémentaires suivantes :

### Données

Appearance

* Données**Show Matting** (`Bool`) : affiche ou cache le fond autour de la vue détaillée. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
* Données**Show Highlight** (`Bool`) : affiche ou masque la mise en évidence des détails dans la vue source. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

Detail

* Données**Base View** (`Link`) : la vue sur laquelle la vue détaillée est basée.
* Données**Anchor Point** (`Vector`) : centre de la vue détaillée dans la Données**Base View**.
* Données**Radius** (`Float`) : taille de la zone de la Données**Base View** affichée dans la vue détaillée.
* Données**Reference** (`String`) : un identifiant pour la vue détaillée dans la Données**Base View**.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_DetailView/fr&oldid=1490349>"