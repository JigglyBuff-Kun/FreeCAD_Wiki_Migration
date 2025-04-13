---
title: Part Lissage
---
|  |
| --- |
| Part Lissage |
| Emplacement du menu |
| Part → Créer un lissage... |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.13 |
| Voir aussi |
| [Part Balayage](/Part_Sweep/fr "Part Sweep/fr") |
|  |

## Description

La commande ![](/images/Part_Loft.svg) Part Lissage crée une face, une coque ou une forme solide à partir de deux ou plusieurs profils (sections transversales).

![](/images/Part_Loft_solid_ruled_from3profiles_example_FreeCAD_0_13.jpg)

Lissage à partir de trois profils, deux [Part Cercles](/Part_Circle/fr "Part Circle/fr") et une [Part Ellipse](/Part_Ellipse/fr "Part Ellipse/fr"). Les paramètres Solid et Ruled sont mis à "True".

## Utilisation

1. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Part_Loft.svg) Créer un lissage....
   * Sélectionnez l'option **Part → ![](/images/Part_Loft.svg) Créer un lissage...** du menu.
2. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") du lissage s'ouvre.
3. Dans la liste *Profils disponibles* à gauche, sélectionnez le premier profil et cliquez sur la flèche droite pour le placer dans la liste *Profils sélectionnés* à droite.
4. Répétez l'opération pour le deuxième profil et plus si vous souhaitez plus de deux profils.
5. Vous pouvez également utiliser les flèches vers le haut et vers le bas pour réorganiser les profils sélectionnés.
6. Définissez les options [Solide](#Données), [Surface réglée](#Données) et [Fermé](#Données).
7. Cliquez sur OK.

### Géométrie acceptée

* **Profils :** ce peut être un point (sommet), une ligne (arête), une polyligne ou une face. Les arêtes et les polylignes peuvent être ouvertes ou fermées. Il existe plusieurs [Limitations](#Limitations), voir ci-dessous.

* Les objets [App Link](/App_Link/fr "App Link/fr") liés aux types d'objets appropriés et les conteneurs [App Part](/App_Part/fr "App Part/fr") contenant les objets visibles appropriés peuvent également être utilisés comme profils. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")

## Options

#### Solide

Si "Solide" est sélectionné, FreeCAD crée un solide, à condition que les profils soient fermésn sinon FreeCAD crée une face ou une coque pour des profils ouverts ou fermés.

#### Surface réglée

Si "Surface réglée" est sélectionné, FreeCAD crée une face, une coque ou un solide à partir de [surfaces réglées](https://fr.wikipedia.org/wiki/Surface_r%C3%A9gl%C3%A9e).

#### Fermé

Si "Fermé" est sélectionné, FreeCAD essaye de lisser le dernier profil vers le premier profil pour créer une boucle fermée.

Pour plus d'informations sur la façon dont les profils sont réunis, voir la page [Part Détails techniques du lissage](/Part_Loft_Technical_Details/fr "Part Loft Technical Details/fr").

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Part Lissage est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Loft

* Données**Sections** (`LinkList`) : liste des sections utilisées.
* Données**Solid** (`Bool`) : false par défaut. True crée un solide.
* Données**Ruled** (`Bool`) : false par défaut. True crée une surface réglée.
* Données**Closed** (`Bool`) : false par défaut. True crée un lissage fermé en reliant le dernier profil au premier profil.
* Données**Max Degree** (`IntegerConstraint`) : degré maximum.

## Limitations

Un Part Lissage a les mêmes limitations qu'un [Part Balayage](/Part_Sweep/fr#Limitations "Part Sweep/fr").

### Lissages fermés

* Les résultats d'un lissage fermé peuvent être inattendus, le lissage peut se tordre ou se plier. Le lissage est très sensible au placement des profils et à la complexité des courbes nécessaires pour relier les sommets correspondants dans tous les profils.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Loft/fr&oldid=1439955>"