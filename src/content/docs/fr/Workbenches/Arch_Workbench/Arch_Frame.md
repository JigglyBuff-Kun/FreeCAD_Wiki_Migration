---
title: Arch Ossature
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Ossature |
| Emplacement du menu |
| 3D/BIM → Ossature |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| F R |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **Arch Ossature** sert à construire toutes sortes d'objets structurels basés sur un profil et un schéma d'agencement. Le profil est extrudé sur les bords du modèle, qui peut être n'importe quel objet 2D comme une [esquisse](/Sketcher_Workbench/fr "Sketcher Workbench/fr") ou un [objet Draft](/Draft_Workbench/fr "Draft Workbench/fr"). Il est particulièrement utile pour créer des rampes ou des murs. Les objets Ossature peuvent alors facilement être transformés en [murs](/Arch_Wall/fr "Arch Wall/fr") ou en objets [structurels](/Arch_Structure/fr "Arch Structure/fr").

![](/images/Arch_Frame_example.jpg)

Ici l'objet Frame (structure) est créé à partir d'un [Draft Réseau orthogonal](/Draft_OrthoArray/fr "Draft OrthoArray/fr") d'une [Draft Ligne](/Draft_Line/fr "Draft Line/fr") en utilisant un [Draft Cercle](/Draft_Circle/fr "Draft Circle/fr") comme profil.

## Utilisation

1. Créez un schéma ou un objet modèle et un objet profil, par exemple avec l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") ou l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr").
2. Sélectionnez en premier l'objet modèle, puis, maintenez la touche Ctrl enfoncée et sélectionnez l'objet profil.
3. Cliquez sur le bouton ![](/images/Arch_Frame.svg) Ossature ou appuyez sur F puis R.

## Options

* L'objet Frame peut être placé à une certaine distance de l'objet modèle, en définissant sa propriété Offset.
* Le profil sera copié à la base de chaque côté de l'objet modèle, puis extrudé sur lui. Vous pouvez contrôler la façon dont le profil est placé à la base de chaque arête avec les propriétés Align et Rotation.

## Propriétés

Un objet Arch Frame partage les propriétés communes et le comportement de tous les [Arch Composants](/Arch_Component/fr "Arch Component/fr").

### Données

Component

* Données**Base** (`Link`) : la forme qui sert de base à l'ossature.

Pour les autres propriétés du groupe, voir [Arch Composant](/Arch_Component/fr#Propriétés "Arch Component/fr").

Frame

* Données**Align** (`Bool`) : spécifie si le profil doit être tourné pour que son axe normal soit aligné sur chaque arête.
* Données**Base Point** (`Integer`) : indice basé sur zéro indiquant le point de croisement de la trajectoire sur le profil :
  + `0` : la **Base** du **Placement** du profil. Ce point est également utilisé en cas d'indice invalide.
  + `1` : le milieu de la première arête du profil.
  + `2` : l'extrémité de la première arête du profil.
  + `3` : le milieu de la deuxième arête du profil.
  + `4` : l'extrémité de la deuxième arête du profil.
  + ...
  + `n*2-1` : le milieu de la nième arête du profil.
  + `n*2` : l'extrémité de la nième arête du profil.
* Données**Edges** (`Enumeration`) : le type d'arêtes à prendre en compte. Les options sont les suivantes :
  + `All edges`
  + `Vertical edges`
  + `Horizontal edges`
  + `Bottom horizontal edges` : basé sur la coordonnée globale Z du centre de masse de l'arête.
  + `Top horizontal edges` : idem.
* Données**Fuse** (`Bool`) : si true, les solides qui se chevauchent sont fusionnés.
* Données**Offset** (`VectorDistance`) : distance facultative entre l'objet de base et l'objet ossature.
* Données**Profile** (`Link`) : profil sur lequel l'ossature est basée.
* Données**Profile Placement** (`Placement`) : placement supplémentaire facultatif à ajouter au profil avant de l'extruder. Seule la **Rotation** du **Placement** est utilisée. Ignoré si Données**Align** est `true`.
* Données**Rotation** (`Angle`) : rotation du profil autour de son axe d'extrusion.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Frame peut être utilisé dans une [macro](/Macros/fr "Macros/fr") et dans la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
Frame = makeFrame(baseobj, profile)

```

* Crée un objet `Frame` d'un `baseobj` et `profile` donnés.
  + `baseobj` est n'importe quel objet contenant des filaires comme des [Draft Polylignes](/Draft_Wire/fr "Draft Wire/fr") ou un [Draft Réseau orthogonal](/Draft_OrthoArray/fr "Draft OrthoArray/fr") et leur combinaison.
  + `profile` est un objet 2D extrudable contenant des faces et des fils fermés.

Exemple :

```
import Draft, Arch

Line = Draft.makeLine(FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(0, 0, 2000))
baseobj = Draft.makeArray(Line, FreeCAD.Vector(1000, 0, 0), FreeCAD.Vector(0, 1, 0), 6, 1)

profile = Draft.makeCircle(200)
Frame = Arch.makeFrame(baseobj, profile)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Frame/fr&oldid=1540377>"