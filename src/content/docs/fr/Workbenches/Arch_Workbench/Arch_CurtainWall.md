---
title: Arch Mur-rideau
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Mur-rideau |
| Emplacement du menu |
| 3D/BIM → Mur-rideau |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| C W |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **Arch Mur-rideau** crée un [Mur-rideau](https://fr.wikipedia.org/wiki/Mur-rideau) en subdivisant une face de base en faces quadrangulaires puis en créant un meneau vertical sur les bords verticaux, des meneaux horizontaux sur les bords horizontaux et remplit les espaces entre les meneaux avec des panneaux.

![](/images/Arch_CurtainWall_example.png)

Les murs-rideaux peuvent être créés à partir de n'importe quel type d'objet existant, auquel cas toutes les faces de l'objet seront subdivisées. L'outil fonctionne donc mieux s'il est utilisé avec un objet qui n'a qu'une seule face. En règle générale, vous devez d'abord créer une face, de préférence liée par exactement 4 arêtes, qui représente la zone que vous souhaitez remplir avec un mur-rideau, puis appliquer l'outil.

Les murs-rideaux peuvent également être construits à partir d'un objet linéaire, tel qu'une ligne, un arc ou une polyligne, comme l'outil [Arch Mur](/Arch_Wall/fr "Arch Wall/fr").

Les faces à double courbure ou les faces à plus de 4 arêtes fonctionneront également mais le résultat est moins prévisible.

Les faces seront divisées en facettes quadrangulaires. Si les 4 points de la facette sont coplanaires, une facette carrée est créée. Sinon, il est divisé en deux triangles et un meneau diagonal est ajouté.

Si vous avez besoin d'une subdivision non régulière, il est également possible de créer votre propre objet subdivisé, par exemple à l'aide de [Arch Grille](/Arch_Grid/fr "Arch Grid/fr") et de définir les subdivisions verticales et horizontales du mur-rideau sur 1.

Vous pouvez également utiliser l'outil de mur-rideau sans aucun objet sélectionné, auquel cas vous pourrez dessiner une ligne de base, qui sera extrudée verticalement pour former la face sur laquelle le mur-rideau sera construit.

## Utilisation

### Dessiner un mur-rideau de zéro

1. Assurez-vous que rien n'est sélectionné
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Arch_CurtainWall.svg) Mur-rideau.
   * Sélectionnez l'option **3D/BIM → ![](/images/Arch_CurtainWall.svg) Mur-rideau** du menu.
   * Utilisez le raccourci clavier : C puis W.
3. Cliquez sur un premier point de la vue 3D ou rentrez des coordonnées
4. Cliquez sur un deuxième point de la vue 3D ou rentrez des coordonnées
5. Ajustez les propriétés nécessaires

### Création d'un mur-rideau à partir d'un objet sélectionné

1. Sélectionnez un ou plusieurs objets de géométrie de base (objet Draft, esquisse, etc).
2. Lancez l'outil comme décrit ci-dessus.
3. Ajustez les propriétés nécessaires.

## Options

* Les meneaux des murs-rideaux peuvent être fabriqués à partir d'un profil carré automatique (définissez leurs propriétés **Mullion Size** Taille de meneau) ou à partir d'un profil personnalisé (définissez leur propriété **Mullion Profile** Profil de meneau). Les meneaux peuvent être centrés sur chaque arête ou placés relativement au point (0,0,0) en désactivant la propriété **Center Profile**. Par exemple, si vous voulez qu'un profil soit placé légèrement derrière les panneaux, vous dessinerez ce profil légèrement en dessous du point d'origine (0,0,0)
* Les murs-rideaux supportent [Arch Multi-matériaux](/Arch_MultiMaterial/fr "Arch MultiMaterial/fr"). A l'intérieur du multi-matériaux, la couche **Frame** sera utilisée pour les meneaux et la couche **Glass panel** pour les panneaux ou **Solid panel** si aucune couche de panneau de verre existe dans le multi-matériau.
* Les murs-rideaux peuvent être basés sur un objet linéaire tel qu'une ligne, un arc ou une polyligne. Dans ce cas, en interne, une surface de base sera construite en extrudant l'objet linéaire selon la direction donnée par la propriété **Vertical Direction** par la longueur donnée par la propriété **Height**.

## Propriétés

Un objet Arch CurtainWall partagent les propriétés et les comportements communs à tous les [Arch Composants](/Arch_Component/fr "Arch Component/fr").

* Données**Vertical Mullion Number** : nombre d'épis
* Données**Vertical Mullion Alignment** : si le profil des épis est aligné avec la surface ou non
* Données**Vertical Sections** : nombre des épis de ce mur-rideau
* Données**Vertical Mullion Height** : hauteur du profil des épis, si aucun profil n'est utilisé
* Données**Vertical Mullion Width** : largeur du profil des épis, si aucun profil n'est utilisé
* Données**Vertical Mullion Profile** : profil pour les épis (désactive la taille des épis)
* Données**Horizontal Mullion Number** : nombre de traverses
* Données**Horizontal Mullion Alignment** : si le profil des traverses est aligné avec la surface ou non
* Données**Horizontal Sections** : nombre de traverses de ce mur-rideau
* Données**Horizontal Mullion Height** : hauteur du profil des traverses, si aucun profil n'est utilisé
* Données**Horizontal Mullion Width** : largeur du profil des traverses, si aucun profil n'est utilisé
* Données**Horizontal Mullion Profile** : profil pour les traverses (désactive la taille des traverses)
* Données**Diagonal Mullion Number** : nombre de traverses de contreventement
* Données**Diagonal Mullion Size** : taille des traverses de contreventement, le cas échéant, si aucun profil n'est utilisé
* Données**Diagonal Mullion Profile** : profil pour les traverses de contreventement, le cas échéant (désactive la taille des traverses de contreventement)
* Données**Override Edges** : ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")) les saisies sont les numéros d'index des arêtes des géométries ArchSketch/Sketch de base (en mode édition). Les arêtes sélectionnées sont utilisées pour créer la forme de ce mur-rideau (au lieu d'utiliser toutes les arêtes par défaut). Ignoré si l'esquisse de base a fourni les arêtes sélectionnées. AMÉLIORATION par ArchSketch : l'outil d'interface graphique "Edit Curtain Wall" est fourni dans l'interface externe de l'![](/images/SketchArch_Workbench.svg) [extension SketchArch](https://github.com/paullee0/FreeCAD_SketchArch) pour permettre aux utilisateurs de sélectionner les bords de manière interactive. "Tolérant au problème de dénomination topologique" si ArchSketch est utilisé dans la base (et si le module complémentaire SketchArch est installé). Attention : non "Tolérant au problème de dénomination topologique" si seulement Sketch est utilisé. (Voir le fil du forum - <https://forum.freecad.org/viewtopic.php?t=73018&start=40#p756554>)
* Données**Panel Number** : nombre de panneaux
* Données**Panel Thickness** : épaisseur des panneaux
* Données**Swap Horizontal Vertical** : échange les lignes horizontales et verticales
* Données**Refine** : effectuer des soustractions entre les composants afin qu'ils ne se chevauchent pas
* Données**Center Profiles** : centre le profil sur les bords ou non
* Données**Vertical Direction** : référence de direction verticale à utiliser par cet objet pour déduire les directions verticales/horizontales. Maintenez-le proche de la direction verticale réelle de votre mur-rideau
* Données**Height** : hauteur de ce mur-rideau, au cas où elle serait basée sur un objet linéaire
* Données**Host** : hôte de ce mur-rideau. Le mur-rideau apparaîtra intégré dans son objet hôte dans l'arborescence (aucune autre action n'est effectuée)

## Faire des murs à ossature

Les murs-rideaux sont pratiques à utiliser en conjonction avec des [Arch Murs](/Arch_Wall/fr "Arch Wall/fr") pour créer des murs à ossature (murs où une couche structurelle intérieure est faite de cadres, généralement en bois ou en métal, au lieu d'un matériau homogène comme le béton ou la brique) .

![](/images/Frame_wall_example.png)

La procédure décrite ci-dessous crée un mur et un mur-rideau sur la base d'une même ligne de base, puis donne au mur un multi-matériau qui laisse un espace vide, où le mur-rideau est placé:

1. Créez un [Arch Mur](/Arch_Wall/fr "Arch Wall/fr") normal, soit en cliquant sur deux points d'un objet linéaire existant
2. Sélectionnez l'objet de base du mur d'arc nouvellement créé
3. Appuyez sur le bouton ![](/images/Arch_CurtainWall.svg) Mur-rideau ou appuyez sur les touches C puis W pour créer un mur-rideau de la même ligne de base que le mur
4. Assurez-vous que le mur et le mur-rideau ont la même **Hauteur**
5. Définissez le nombre de **horizontal sections** du mur-rideau sur zéro si vous ne souhaitez que des cadres verticaux
6. Définissez la **horizontal mullion width** (largeur horizontale du meneau) et **horizontal mullion height** (ou utilisez un profil de meneau)
7. Préparez deux (ou plus) [Arch Matériau](/Arch_SetMaterial/fr "Arch SetMaterial/fr"), un pour les panneaux, un pour le vide où le cadre sera
8. Créez un [Arch Multi-matériaux](/Arch_MultiMaterial/fr "Arch MultiMaterial/fr"), en utilisant une couche du matériau du panneau, une couche du matériau vide avec une valeur de largeur négative (ce qui le rendra non dessiné) correspondant à la hauteur verticale du meneau du mur-rideau et une autre couche de matériau de panneau
9. Attribuer le multi-matériau au mur
10. Définissez la propriété **Host** du mur-rideau sur le mur que nous avons créé au premier point

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Mur-rideau peut être utilisé à l'intérieur d'une [macro](/Macros/fr "Macros/fr"), et à partir de la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
MyCurtainWall = makeCurtainWall(baseobj)

```

Exemple :

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseface = FreeCAD.ActiveDocument.addObject('Part::Extrusion','Extrusion')
baseface.Base = baseline
baseface.DirMode = "Normal"
baseface.LengthFwd = 2000
curtainwall = Arch.makeCurtainWall(baseface)
curtainwall.VerticalSections = 6
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CurtainWall/fr&oldid=1543692>"