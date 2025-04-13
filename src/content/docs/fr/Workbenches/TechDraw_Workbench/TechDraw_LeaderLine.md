---
title: TechDraw Ligne de repère
---
|  |
| --- |
| TechDraw Ligne de repère |
| Emplacement du menu |
| TechDraw → Ajouter des lignes → Insérer une ligne de repère à la vue |
| Ateliers |
| [TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [TechDraw Annotation en texte enrichi](/TechDraw_RichTextAnnotation/fr "TechDraw RichTextAnnotation/fr"), [TechDraw Symbole de soudure](/TechDraw_WeldSymbol/fr "TechDraw WeldSymbol/fr") |
|  |

## Description

L'outil **TechDraw Ligne de repère** ajoute une ligne à une vue. D'autres objets d'annotation (tels que [Annotation par texte enrichi](/TechDraw_RichTextAnnotation/fr "TechDraw RichTextAnnotation/fr")) peuvent être connectés à une ligne de repère pour former des annotations complexes.

![](/images/TechDraw_LeaderLine_sample.png)

Ligne de repère ajoutée à un vue

## Utilisation

1. Sélectionnez une vue.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/TechDraw_LeaderLine.svg) Insérer une ligne de repère à la vue.
   * Sélectionnez l'option **TechDraw → Ajouter des lignes → ![](/images/TechDraw_LeaderLine.svg) Insérer une ligne de repère à la vue** du menu.
3. Un panneau de tâches s'ouvre.
4. Appuyez sur le bouton Choisir des points.
5. Choisissez le premier point de la page pour définir le point de départ de la ligne.
6. Choisissez le point suivant sur la page. Maintenez Ctrl enfoncée pour cliquer sur des multiples d'angles de 22,5°. Vous pouvez utiliser un double-clic au lieu d'un simple-clic pour terminer la saisie des points.
7. Vous pouvez ajouter d'autres points.
8. Si vous n'avez pas double-cliqué sur un point : appuyez sur le bouton Enregistrer les points.
9. Vous pouvez modifier le **Symbole de début**, le **Symbole de fin**, la **Couleur**, la **Largeur** et le **Style** de la ligne de repère. Voir [Propriétés](#Propriétés) pour plus d'informations.
10. Appuyez sur le bouton OK.

## Édition

1. Double-cliquez sur une ligne de repère dans l'arborescence.
2. Un panneau de tâches s'ouvre.
3. Pour modifier les points :
   1. Appuyez sur le bouton Modifier les points.
   2. La ligne de repère est marquée par des nœuds temporaires.
   3. Faites glisser un ou plusieurs nœuds vers une nouvelle position.
   4. Appuyez sur le bouton Enregistrer les modifications.
4. Vous pouvez modifier le **Symbole de début**, le **Symbole de fin**, la **Couleur**, la **Largeur** et le **Style** du repère. Voir [Propriétés](#Propriétés) pour plus d'informations.
5. Appuyez sur le bouton OK.

## Remarques

* Il n'est pas possible d'ajouter ou de supprimer des points d'une ligne de repère existante.
* Si aucun point n'a été spécifié lors de la création, une courte ligne est placée au centre de la vue. Il n'y a aucun moyen de fixer une telle ligne, elle doit être supprimée.
* Par défaut, **Ligne de repère horizontale automatique** des [préférences](/TechDraw_Preferences/fr#Annotation "TechDraw Preferences/fr") est cochée. Cela signifie que le dernier segment de ligne des nouvelles lignes de guidage est dessiné horizontalement. S'il n'y a qu'un seul segment, le résultat est une simple ligne horizontale.
* Vous pouvez désactiver cette fonction d'horizontalité automatique pour les lignes de repère existantes en modifiant la propriété Données**Auto Horizontal**.

## Propriétés

### Données

Base

* Données**Start Symbol** (`Enumeration`) : symbole au début de la ligne de repère. Options : ![](/images/Arrowfilled.svg) Flèche remplie, ![](/images/Arrowopen.svg) Flèche ouverte, ![](/images/Arrowtick.svg) Coche, ![](/images/Arrowdot.svg) Point, ![](/images/Arrowopendot.svg) Cercle ouvert, ![](/images/Arrowfork.svg) Fourche, ![](/images/Arrowpyramid.svg) Triangle rempli, Rien.
* Données**End Symbol** (`Enumeration`) : symbole à la fin de la ligne de repère. Idem.
* Données**X** (`Distance`) : coordonnée X de la ligne de repère par rapport à la vue.
* Données**Y** (`Distance`) : coordonnée Y de la ligne de repère par rapport à la vue.

Leader

* Données**Leader Parent** (`Link`) : vue à laquelle la ligne de repère est attachée.
* Données**Way Points** (`VectorList`) : points de la ligne de repère.
* Données**Scalable** (`Bool`) : indique si la ligne de repère s'adapte à Données**Leader Parent**.
* Données**Auto Horizontal** (`Bool`) : indique si le dernier segment de la ligne de repère doit être horizontal.

### Vue

Base

* Vue**Keep Label** (`Bool`) : non utilisé.
* Vue**Stack Order** (`Integer`) : chevauchement ou sous-chevauchement par rapport à d'autres objets du dessin. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

Line Format

* Vue**Color** (`Color`) : couleur de la ligne de repère.
* Vue**Line Style** (`Enumeration`) : style de la ligne de repère. Options : Rien, ![](/images/Continuous-line.svg) Continu, ![](/images/Dash-line.svg) Tiret, ![](/images/Dot-line.svg) Point, ![](/images/DashDot-line.svg) Tiret Point, ![Length](/images/DashDotDot-line.svg) Tiret Point Point.
* Vue**Line Width** (`Length`) : largeur de la ligne de repère.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Ligne de repère peut être utilisée dans une [macro](/Macros/fr "Macros/fr") et dans la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante:

```
myPage = FreeCAD.ActiveDocument().Page
myBase = FreeCAD.ActiveDocument().View
leaderObj = FreeCAD.ActiveDocument.addObject('TechDraw::DrawLeaderLine','DrawLeaderLine')
FreeCAD.activeDocument().myPage.addView(leaderObj)
FreeCAD.activeDocument().leaderObj.LeaderParent = myBase
#first waypoint is always (0,0,0)  
#rest of waypoints are positions relative to (0,0,0)
leaderObj.WayPoints = [p0,p1,p2]
leaderObj.X = 5
leaderObj.Y = 5

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_LeaderLine/fr&oldid=1423056>"