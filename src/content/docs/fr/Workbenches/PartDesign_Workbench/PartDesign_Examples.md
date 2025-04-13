---
title: PartDesign Exemples
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

## Introduction

Parfois, vous avez besoin d'un indice de la puissance d'un outil, sans trop d'explications.

Il s'agit d'une série d'exemples qui peuvent être réalisés avec certains outils. Pour des explications détaillées, consultez les descriptions des outils et cherchez des tutoriels sur le web.

## Protrusion

![](/images/PartDesign_Pad.svg) [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr") est un outil permettant de créer des objets Protrusion, qui sont des objets prismatiques tels que des objets d'extrusion, des cylindres, des cônes, des cubes, des coins ...

Chaque objet est basé sur un contour (jaune), qui définit la forme de la section transversale (de préférence réalisé avec l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr")).

Le contour est tiré le long d'une direction (extrudé) pour donner à l'objet une épaisseur ou une longueur.  
Par défaut, il s'agit de la direction normale du plan contenant le contour (plan d'esquisse). Il est possible, en option, de modifier la direction en éditant les paramètres dans le panneau des propriétés ou en sélectionnant une ligne droite séparée (blanche).

**Galerie**

### Primitives prismatiques

|  |  |  |
| --- | --- | --- |
| **Cylindre** | Cylinder/fr | * Contour : **cercle**. |
| **Cube** | Cube/fr | * Contour : **carré**. * Longueur d'extrusion : égale à la longueur des bords carrés. |
| **Cuboïde** | Cuboid/fr | * Contour : **rectangle**. |
| **Prisme régulier** | Regular Prism/fr | * Contour : **hexagone**. |
| **‎Pyramide tronquée** | Wedge/fr | * Contour : **triangle**. |

### Profils prismatiques

|  |  |  |
| --- | --- | --- |
| **Profil en L** | Profil en L | * Contour : forme en **L**. |
| **Profil en C** | Profil en C | * Contour : forme en **C**. |
| **Profil en Z** | Profil en Z | * Contour : forme en **Z**. |
| **Profil en T** | Profil en T | * Contour : forme en **T**. |
| **Profil en I** | Profil en I | * Contour : forme en **I**, avec la largeur de la semelle < l'âme. |
| **Profil en H** | Profil en H | * Contour : forme en **H**, avec la largeur = la hauteur. |

## Balayage additif

![](/images/PartDesign_AdditivePipe.svg) [PartDesign Balayage additif](/PartDesign_AdditivePipe/fr "PartDesign AdditivePipe/fr") est un outil permettant de créer des objets AdditivePipe tels que des objets de balayage, des objets d'extrusion, des objets de rotation, des cylindres, des cônes, des cubes, des pyramides, des sphères...

Chaque objet est basé sur au moins deux lignes (réalisées de préférence avec l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr")) :

* Un contour (jaune), pour définir la forme de la section transversale.
* Un chemin (blanc), pour le balayer.

Il n'est pas difficile de réaliser que certains objets peuvent également être créés avec d'autres outils, mais auriez-vous deviné la polyvalence de cet outil sans ces exemples ?

**Galerie**

### Objets à balayage circulaire

|  |  |  |
| --- | --- | --- |
| **Sphère** | Sphère | * Contour : un **arc de 180°** et une **ligne** reliant les points d'extrémité. * Trajectoire : **cercle** complet. |
| **Partie de sphère** | Partie de sphère de 240° | * Contour : un **arc de 180°** et une **ligne** reliant les points d'extrémité. * Trajectoire : un **arc de cercle de 240°**.   Cette fonction peut créer des segments de n'importe quel angle sauf 180° exactement, car elle a un problème avec le plan de départ et le plan d'arrivée qui sont coplanaires. |
| **Hémisphère** | Hémisphère | * Contour : un **arc de 90°** et deux **lignes** perpendiculaires reliant les points d'extrémité. * Trajectoire : un **cercle** complet. |
| **Tore** | Tore | * Contour : **cercle** complet. * Trajectoire : **cercle** complet. |
| **Cône** | Cône | * Contour : **triangle** dont une arête est située sur la ligne médiane. * Trajectoire : **cercle** complet. |
| **Cylindre** | Cylindre | * Contour : **rectangle** avec un bord situé sur la ligne médiane. * Trajectoire : **cercle** complet. |
| **Balayage** Cylindre creux | Balayage (Cylindre creux) | * Contour : **rectangle**. * Trajectoire : **cercle** complet |

### Objets prismatiques

Objets à balayage droit

|  |  |  |
| --- | --- | --- |
| **Cylindre** | Cylindre | * Contour : **cercle**. * Chemin : **ligne** droite. |
| **Cube** | Cube | * Contour : **carré**. * Trajectoire : **ligne** droite, de la même longueur que les bords du carré. |
| **Cuboïde** | Cuboïde | * Contour : **rectangle**. * Trajectoire : **ligne** droite. |
| **Pyramide tronquée** | Pyramide tronquée | * Contour : **triangle**. * Trajectoire : **ligne** droite. |
| **Prisme** régulier | Prisme régulier | * Contour : **hexagone** régulier. * Trajectoire : **ligne** droite. |
| Prisme en forme d'étoile | Prisme en forme d'étoile | * Contour : **forme régulière d'étoile**. * Trajectoire : **ligne** droite. |
| Poutre en I | Poutre en I | * Contour : **section de poutre** * Trajectoire : **ligne** droite. |

### Objets coniques

|  |  |  |
| --- | --- | --- |
| **Cône** | Cône | * Contours : la base : **cercle** complet, le sommet : **point**. * Trajectoire : **ligne** droite.   (Le point d'extrémité est un point final d'une ligne auxiliaire) |
| **Pyramide** | Pyramide | * Contours : la base : **carré**, le dessus : **point**. * Trajectoire : **ligne** droite.   (Le point d'extrémité est un point final d'une ligne auxiliaire) |
| Pyramide inclinée | Pyramide inclinée | * Contours : la base : **carré**, le dessus : **point**. * Trajectoire : **ligne** droite.   (Le point d'extrémité est le point final de la trajectoire) |

### Objets à balayage courbe

|  |  |  |
| --- | --- | --- |
| **Tuyau** (Tube) | Tuyau | * Contour : 2 **cercles** concentriques. * Trajectoire : une **ligne** courbe. |
| **Tuyau** carré | Tuyau carré | * Contour : 2 **carrés** concentriques. * Trajectoire : une **ligne** courbe. |
| **Ligne** | Ligne | * Contour : **cercle**. * Trajectoire : une **ligne** courbe. |
| Cornet | Cornet | * Contours : la base : **cercle**, le dessus : **cercle** (plus petit). * Trajectoire : une **ligne** courbe. |
| Légendaire **clé Allen** | Clé Allen | * Contours : **hexagone**. * Trajectoire : une **ligne** courbe. |

### Objets spiralés et hélicoïdaux

|  |  |  |
| --- | --- | --- |
| Ressort hélicoïdal | Ressort | * Contour : **cercle**. * Trajectoire :  [Part Hélice](/Part_Helix/fr "Part Helix/fr"). |
| Spirale Ressort de balancier | Ressort de balancier | * Contour : **rectangle**. * Trajectoire :  [Part Spirale](/Part_Spiral/fr "Part Spiral/fr"). |
| **Ressort de volute**, Ressort conique | Ressort de volute | * Contour : **rectangle**. * Trajectoire :  [Part Hélice](/Part_Helix/fr "Part Helix/fr") avec un angle. |

### Objets de transition

|  |  |  |
| --- | --- | --- |
| De carré à cercle en passant par la trajectoire | Objet de transition incurvé | * Contours : la base : **carré**, le dessus : **cercle**. * Trajectoire : **ligne** courbée. |
| De carré à cercle directement | Objet de transition droit | * Contours : la base : **carré**, le dessus : **cercle**. * Trajectoire : **ligne** droite. |
| De polygone à étoile | De polygone à étoile | * Contours : la base : **pentagone**, le dessus : **étoile**. * Trajectoire : **ligne** droite. |

### Options

#### Transition d'angle

Une polyligne peut être utilisée comme chemin, et la propriété **Transition** influence la forme des coins.

La transformation nécessite une attention particulière car elle peut produire des zones plates où l'épaisseur est de 0.

| Paramètre | Vue iso | Vue de dessus |
| --- | --- | --- |
| **Transformé** | Vue iso de la transformée Les coins intérieurs et extérieurs sont des bords. | Vue de dessus de la transformée La forme de base ne suit pas l'orientation de la ligne. |
| **Angle droit** | Vue iso de l'angle droit Les coins intérieurs et extérieurs sont des bords. | Vue de dessus de l'angle droit La forme de base suit l'orientation de la ligne. |
| **Angle arrondi** | Vue iso de l'angle arrondi Les coins situés en dehors de la trajectoire sont arrondis. | Vue de dessus de l'angle arrondi La forme de base suit l'orientation de la ligne. |

#### Mode d'orientation

| Paramètre | Vue iso | Vue de dessus |
| --- | --- | --- |
| **Standard** | Vue iso standard L'emplacement et l'orientation suivent la trajectoire. | Vue de dessus standard (Si l'objet est tordu d'une manière inattendue, essayez Frenet) |
| **Figé** | Vue iso figée L'emplacement suit la trajectoire et l'orientation reste la même que la forme de base. | Vue de dessus figée Cela a tendance à provoquer des auto-intersections qui entraînent d'autres erreurs : une face fantôme dans ce cas. |
| **Frenet** | Vue iso de Frenet L'emplacement et l'orientation suivent la trajectoire, sur la base d'un algorithme différent du standard. | Vue de dessus de Frenet La forme de base suit l'orientation de la ligne. |
| **Auxiliaire** | Auxiliary iso view L'emplacement suit la trajectoire avec une torsion autour de celle-ci qui est contrôlée par une courbe auxiliaire (en bleue). | Auxiliary top view (Il est difficile à reconnaître, mais il y a un angle entre les plans de la courbe auxiliaire et la trajectoire qui est responsable de la torsion.) |
| **Binormale** |  |  |

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Examples/fr&oldid=1340440>"