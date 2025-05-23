---
title: Part Balayage
---
|  |
| --- |
| Part Balayage |
| Emplacement du menu |
| Part → Créer un balayage... |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Part Lissage](/Part_Loft/fr "Part Loft/fr") |
|  |

## Description

L'outil ![](/images/Part_Sweep.svg) Part Balayage crée une face, une coque ou une forme solide à partir d'un ou plusieurs profils (sections transversales) répartis le long d'une trajectoire.

La commande Part Balayage est similaire à ![](/images/Part_Loft.svg) [Part Lissage](/Part_Loft/fr "Part Loft/fr") avec en plus une trajectoire.

![](/images/Part_Sweep_simple.png)

Balayage solide généré à partir d'un profil unique (A) distribué le long d'une trajectoire (B)

## Utilisation

1. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Part_Sweep.svg) Créer un balayage...
   * Sélectionnez l'option **Part → ![](/images/Part_Sweep.svg) Créer un balayage...** du menu.
2. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") du balayage s'ouvre.
3. Dans la liste *Profils disponibles* à gauche, sélectionnez un profil et cliquez sur la flèche droite pour le placer dans la liste *Profils sélectionnés* à droite.
4. Répétez l'opération si vous voulez plus d'un profil.
5. Les flèches vers le haut et vers le bas réorganisent la liste de droite. Mais cela n'a pas d'impact sur le résultat. La position des profils le long de la trajectoire détermine l'ordre dans lequel ils sont utilisés.
6. Cliquez sur le bouton Trajectoire de balayage, puis choisissez l'un ou l'autre mode de sélection :
   * *Sélection de segments* : sélectionnez une ou plusieurs arêtes contiguës dans la [vue 3D](/3D_view/fr "3D view/fr") (appuyez sur CTRL pour une sélection multiple) et cliquez sur Valider. Le balayage ne sera généré que le long des arêtes sélectionnées.
   * *Sélection complète de la trajectoire* : passez à la [vue en arborescence](/Tree_view/fr "Tree view/fr"), sélectionnez l'objet à utiliser comme trajectoire, revenez au panneau des tâches et cliquez sur Valider. Le balayage sera généré le long de toutes les arêtes contiguës de l'objet.
7. Définissez les options [Solide](#Solide) et [Frenet](#Frenet).
8. Cliquez sur OK.

### Géométrie acceptée

* **Profils :** ce peut être un point (sommet), une ligne (arête), une polyligne ou une face. Les arêtes et les polylignes peuvent être ouvertes ou fermées. Il existe plusieurs [Limitations](#Limitations), voir ci-dessous. Parfois, il ne suffit pas d'aligner correctement le profil sur la trajectoire. Pour que l'outil fonctionne correctement, il peut également être nécessaire d'[ancrer](/Part_EditAttachment/fr "Part EditAttachment/fr") le profil à la trajectoire. Si l'esquisse du profil est ancrée à la mauvaise extrémité d'une arête de la trajectoire, changez Données**Map Path Parameter** de 0 à 1.

* **Trajectoire** : ce peut être une ligne (arête) ou une série de lignes connectées, une polyligne ou divers objets des atelier Part ou Draft ou une esquisse. La trajectoire peut être ouverte ou fermée.

* Les objets [App Link](/App_Link/fr "App Link/fr") liés aux types d'objets appropriés et les conteneurs [App Part](/App_Part/fr "App Part/fr") contenant les objets visibles appropriés peuvent également être utilisés comme profils et trajectoires. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")

## Options

#### Solide

Si "Solid" est mis à "true", FreeCAD crée un solide, à condition que les profils soient fermés. S'il est mis à "false", FreeCAD crée une face ou une coque pour des profils ouverts ou fermés.

#### Frenet

![](/images/Sweep-frenet-comp.png)

La propriété "Frenet" contrôle la façon dont l'orientation du profil change quand il suit la trajectoire de balayage. Si "Frenet" est mis à "false", l'orientation du profil est maintenu cohérent point à point. La forme résultante présente le moins de torsion possible. De manière inattendue, lorsqu'un profil est balayé le long d'une hélice, l'orientation du profil se déplace lentement (rotation) au fur et à mesure qu'il suit l'hélice. Le fait d'attribuer la valeur "Frenet" à true permet d'éviter ce phénomène.

Si "Frenet" est mis à "true", l'orientation du profil est basée sur les vecteurs de courbure et de tangence locaux de la trajectoire. Cela permet de conserver une orientation cohérente du profil lors du balayage le long d'une hélice (car le vecteur de courbure d'une hélice droite pointe toujours vers son axe). Toutefois, lorsque la trajectoire n'est pas une hélice, la forme obtenue peut parfois avoir d'étranges torsions. Pour plus d'informations, voir [Repère de Frenet](https://fr.wikipedia.org/wiki/Rep%C3%A8re_de_Frenet).

#### Transition

"Transition" définit le style de transition du balayage aux joints non tangentiels de la trajectoire. La propriété n'est pas exposée dans le panneau de tâches et peut être trouvée dans les [propriétés](/Property_editor/fr "Property editor/fr") après la création du balayage.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Part Balayage est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Sweep

* Données**Sections** (`LinkList`) : liste des sections utilisées.
* Données**Spine** (`LinkSub`) : trajectoire le long de laquelle balayer.
* Données**Solid** (`Bool`) : true ou false (par défaut). True crée un solide.
* Données**Frenet** (`Bool`) : true ou false (par défaut). True utilise l'algorithme Frenet.
* Données**Transition** (`Enumeration`) : mode de transition. Les options sont *Transformed*, *Right corner* ou *Round corner*.

## Limitations

### Sommet ou point

Un sommet ou un point ne peut être utilisé que comme premier et/ou dernier profil.  
Par exemple :

* Vous ne pouvez pas balayer à partir d'un cercle vers un point, vers une ellipse.
* Vous pouvez cependant passer d'un point à un cercle, à une ellipse et à un autre point.

### Profils

Dans un balayage, tous les profils (lignes, polylignes, etc.) doivent être ouverts ou fermés.  
Par exemple :

* FreeCAD ne peut pas effectuer de balayage entre un Part Cercle et une Part Polyligne.

### Esquisses

* Le profil peut être créé avec une esquisse. Cependant, seules les esquisses valides seront disponibles pour la sélection dans le panneau de tâches.
* L'esquisse ne doit contenir qu'une seule polyligne ou ligne ouverte ou fermée (il peut s'agir de plusieurs lignes, si ces lignes sont toutes connectées, il s'agit alors d'une seule polyligne).

### Objets de l'atelier Draft

Un profil peut être un objet de l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr").
Les objets suivants peuvent être des profils valides :

* Point
* Ligne, polyligne
* B-spline, courbe de Bézier
* Cercle, ellipse
* Rectangle, polygone

### Objets de l'atelier Part

Un profil peut être un objet Part créé avec la commande [Part Primitives](/Part_Primitives/fr "Part Primitives/fr").  
Les objets suivants peuvent être des profils valides :

* Point (vertex=sommet)
* Ligne (arête)
* Hélice, spirale
* Cercle, ellipse
* Polygone régulier
* Plan (face)

## Liens

* Un balayage est souvent utilisé pour créer des filets pour les vis, voir [Tutoriel création de vis](/Thread_for_Screw_Tutorial/fr "Thread for Screw Tutorial/fr") pour plus d'informations.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Sweep/fr&oldid=1495115>"