---
title: PartDesign Balayage additif
---
|  |
| --- |
| PartDesign Balayage additif |
| Emplacement du menu |
| PartDesign → Créer une fonction additive → Balayage additif |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Lissage additif](/PartDesign_AdditiveLoft/fr "PartDesign AdditiveLoft/fr"), [PartDesign Balayage soustractif](/PartDesign_SubtractivePipe/fr "PartDesign SubtractivePipe/fr") |
|  |

## Description

Le **Balayage additif** crée un solide dans le corps actif en balayant une ou plusieurs esquisses (également appelées sections transversales) le long d'une trajectoire ouverte ou fermée. Si le corps contient déjà des éléments, le balayage additif sera fusionné à eux.

![](/images/PartDesign_AdditivePipe_example.svg)

À gauche, les sections (A) et (B) seront balayées le long de la trajectoire (C), le résultat est visible à droite.

## Utilisation

L'image ci-dessus montre deux formes de section transversale différentes. Le texte ci-dessous décrit la procédure avec une seule forme. Cela permettra d'obtenir une pièce avec la même section transversale le long de la trajectoire.

1. Créez deux esquisses distinctes :
   * Une pour la trajectoire, par exemple deux lignes reliées par une courbe comme dans l'image ci-dessus,
   * Une pour la forme de la section transversale, par exemple un cercle comme la première forme dans l'image ci-dessus. Au lieu d'une esquisse, il est également possible d'utiliser la face d'un objet 3D. ([introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr"))
2. **Arrangez** correctement les deux formes en 3D. Il est recommandé de placer l'origine de la section transversale sur la ligne de la trajectoire. Les deux esquisses doivent dans la plupart des cas être **orthogonales**. Cela peut être fait avec la fonction "Map Mode" (rendre les deux esquisses visibles avec Espace). Sélectionnez l'esquisse de la section transversale. Sélectionnez Properties/DataTab/MapMode. Cliquez sur le bouton ... qui apparaît à droite. Dans la fenêtre de dialogue, sélectionnez un sommet de l'esquisse de trajectoire et sélectionnez le mode approprié pour aligner correctement les deux esquisses.
3. Il existe plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/PartDesign_AdditivePipe.svg) Balayage additif.
   * Sélectionnez l'option **PartDesign → Créer une fonction additive → ![](/images/PartDesign_AdditivePipe.svg) Balayage additif** du menu.
4. Dans **Paramètres de balayage**, sous **Trajectoire à balayer tout le long**, appuyez sur le bouton Objet.
5. Sélectionnez l'esquisse à utiliser comme trajectoire dans la vue 3D. Dans ce cas, l'esquisse entière sera utilisée comme trajectoire.
   * Il est également possible de sélectionner chaque arête de l'esquisse en appuyant sur le bouton Ajouter une arête et en sélectionnant des arêtes dans la vue 3D. Notez que vous devez appuyer à nouveau sur le bouton Ajouter une arête pour chaque arête. Vous devez sélectionner une ligne continue sans *branches*.
6. Les autres paramètres devraient fonctionner avec les paramètres par défaut dans la plupart des cas.
7. Cliquez sur OK.

Pour utiliser plusieurs sections, commencez par la section comme décrit ci-dessus. Ensuite, sous **Transformation de section**, définissez le mode de transformation à *Sections multiples*, appuyez sur Ajouter une section puis sélectionnez une esquisse dans la [vue 3D](/3D_view/fr "3D view/fr"). Répétez l'opération pour chaque section supplémentaire.

## Options

**Transformation de la section** :

* Sélectionnez **Constant** pour utiliser un seul profil
* Sélectionnez **Sections multiples** pour utiliser plusieurs profils

**Orientation de la section** :

* Standard
  + Cela maintient la forme de la section perpendiculaire à la trajectoire. Ce sont les paramètres par défauts.
* Constante
  + Orientation définie par le premier profil et constante tout au long. Cela désactive l'alignement sur le vecteur normal de trajectoire. Cela signifie que la forme de la section transversale ne tournera pas avec la trajectoire. Balayez le long d'un cercle pour voir l'effet.
* Frenet
  + Créez le minimum de torsion possible du profil. Pour plus d'informations, voir les [formules de Frenet-Serret](https://fr.wikipedia.org/wiki/Rep%C3%A8re_de_Frenet#Formules_de_Frenet)
* Auxiliaire
  + Spécifiez la trajectoire secondaire pour guider le balayage.
  + Pour chaque point *P* le long de la trajectoire de balayage, il y aura un point correspondant *Q* sur la trajectoire auxiliaire.
  + Au fur et à mesure que le profil est balayé, il sera transformé de telle sorte que la ligne *PQ* soit la normale de la trajectoire de balayage.
  + Si *Équivalence curviligne* est choisie, les points *Q* sont mis à l'échelle proportionnellement le long de la trajectoire de balayage, quelle que soit sa longueur.
* Binormal
  + Spécifiez le vecteur de la binormale en X, Y et Z

**Transition d'angle**

* Transformé
* Angle droit
* Angle arrondi

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Part Balayage additif est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Base

* Données (Hidden)**Add Sub Shape** (`PartShape`) :
* Données (Hidden)**Base Feature** (`Link`) :
* Données (Hidden)**\_Body** (`LinkHidden`) :

Part Design

* Données**Refine** : true ou false. Si la valeur est à true, le solide est nettoyé des arêtes résiduelles laissées par les éléments. Voir [Part Affiner la forme](/Part_RefineShape/fr "Part RefineShape/fr") pour plus de détails.

Sketch Based

* Données**Profile** (`LinkSub`) : référence à l'esquisse.
* Données**Midplane** (`Bool`) : extrusion symétrique par rapport à la face de l'esquisse.
* Données**Reversed** (`Bool`) : inverse le sens de l'extrusion.
* Données**Up To Face** (`LinkSub`) : face sur laquelle l'élément se termine.
* Données**Allow Multi Face** (`Bool`) : autorise plusieurs faces dans le profil.

Sweep

* Données**Sections** (`LinkSubList`) : liste les sections utilisées.
* Données**Spine** (`LinkSub`) : trajectoire à suivre.
* Données**Spine Tangent** (`Bool`) : true ou false (par défaut). True étend la trajectoire pour inclure les arêtes tangentes.
* Données (Hidden)**Auxiliary Spine** (`LinkSub`) : trajectoire secondaire permettant d'orienter le balayage.
* Données**Auxiliary Spine Tangent** (`Bool`) : true ou false (par défaut). True étend la trajectoire auxiliaire pour inclure les arêtes tangentes.
* Données**Auxiliary Curvelinear** (`Bool`) : true ou false (par défaut). True calcule la normale entre des points équidistants sur les deux trajectoires.
* Données**Mode** (`Enumeration`) : mode de profil. Les options sont *Fixed*, *Frenet*, *Auxiliary* ou *Binormal*. Voir [Options](#Options).
* Données**Binormal** (`Vector`) : vecteur binormal pour le mode d'orientation correspondant.
* Données**Transition** (`Enumeration`) : mode de transition. Les options sont *Transformed*, *Right Corner* ou *Round Corner* (corner pour angle).
* Données**Transformation** (`Enumeration`) : *Constant* utilise une seule section transversale. *Multisection* utilise deux sections transversales ou plus. *Linear*, *S-shape* et *Interpolation* ne sont actuellement pas fonctionnels.

## Remarques

* Pour mieux contrôler la forme du balayage, il est recommandé que toutes les sections transversales aient le même nombre de segments. Par exemple, pour un balayage entre un rectangle et un cercle, le cercle doit être décomposé en 4 arcs connectés.
* Vous pouvez créer un balayage à partir ou en direction d'un seul [vertex (ou point)](/Glossary/fr#V "Glossary/fr") d'une esquisse ou du corps. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")
* Lorsque vous sélectionnez un [vertex](/Glossary/fr#V "Glossary/fr") comme section, il doit s'agir de la dernière section du balayage. Dans ce cas, le corps du balayage serait constitué de deux solides reliés en un seul point. Cela violerait la définition d'un objet 3D du noyau de CAO. Vous pouvez modifier l'ordre des sections en les faisant glisser dans la liste.
* La trajectoire ne peut provenir que d'une seule esquisse, d'une seule caractéristique ou d'un seul ShapeBinder. Si vous souhaitez balayer plusieurs arêtes provenant de différentes esquisses, utilisez une [PartDesign Sous-forme liée](/PartDesign_SubShapeBinder/fr "PartDesign SubShapeBinder/fr").
* La trajectoire ne doit pas avoir ni embranchements ni jonctions en T, etc. Les boucles sont autorisées.
* Il peut y avoir des problèmes si la section transversale n'est pas perpendiculaire à la trajectoire en 3D.
* Une section transversale ne peut pas se trouver sur le même plan que celle qui la précède immédiatement.
* Les sections transversales ne doivent pas contenir de boucles disjointes ou croisées.
* Si l'esquisse possède une géométrie intérieure, l'ordre dans lequel la géométrie de l'esquisse est créée doit être le même pour toutes les sections. Commencez toutes les sections par la géométrie intérieure, ou commencez-les toutes par la géométrie extérieure. Sinon, un tuyau non valide sera créé à l'endroit où les murs intérieurs et extérieurs se croisent.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditivePipe/fr&oldid=1565985>"