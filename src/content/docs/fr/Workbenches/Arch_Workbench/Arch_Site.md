---
title: Arch Site
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Site |
| Emplacement du menu |
| 3D/BIM → Site |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| S I |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

**Arch Site** est un objet spécial qui combine les propriétés d'un objet groupe FreeCAD standard et des objets Arch. Il est particulièrement adapté pour représenter un site entier ou un terrain. Dans un travail architectural fait d'IFC, il est surtout utilisé pour organiser votre modèle qui contient des objets de [bâtiments](/Arch_Building/fr "Arch Building/fr"). Arch Site est également utilisé pour gérer et afficher un terrain physique et peut calculer le volume de terre a ajouter ou a supprimer.

## Utilisation

1. Vous pouvez sélectionner un ou plusieurs objets pour les inclure dans votre nouveau site.
2. Pressez le bouton ![](/images/Arch_Site.svg) Site ou pressez les touches S puis I.

## Options

* Après la création d'un site, vous pouvez ajouter des objets par glisser-déposer dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou en utilisant le bouton ![](/images/Arch_Add.svg) [Arch Ajouter](/Arch_Add/fr "Arch Add/fr"). Cela ne détermine que les objets qui font partie du site donné et n'a aucun effet sur le terrain.
* Vous pouvez supprimer les objets d'un site par un glisser-déposer hors du site de la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou en utilisant le bouton ![](/images/Arch_Remove.svg) [Arch Supprimer](/Arch_Remove/fr "Arch Remove/fr").
* Vous pouvez ajouter un objet terrain en modifiant la propriété Données**Terrain** du site. Le terrain peut être une coque ouverte ou ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")) un solide.
* Vous pouvez ajouter des volumes à ajouter ou à soustraire du terrain de base en double-cliquant sur le site et en ajoutant des objets à ses groupes Additions ou Soustractions. Les objets doivent être des solides.
* La propriété Données**Extrusion Vector** peut être utilisée pour résoudre certains problèmes qui peuvent apparaître lorsque le terrain est une coque ouverte et qu'il y a des additions et/ou des soustractions. Afin d'effectuer ces additions/soustractions, la coque ouverte est extrudée en un solide, qui est ensuite assemblé/soustrait de manière appropriée. Selon la topologie du terrain, cette extrusion peut échouer avec le vecteur d'extrusion par défaut. Vous pouvez alors remédier au problème en modifiant cette valeur. Cette propriété est ignorée si le terrain est un solide.

## Propriétés

### Données

Site

* Données**Addition Volume** (`Volume`) : volume de terre à ajouter à ce terrain.
* Données**Additions** (`LinkList`) : les autres formes qui sont ajoutées à cet objet.
* Données**Address** (`String`) : la rue et le numéro de rue de ce site.
* Données**City** (`String`) : la ville de ce site.
* Données**Country** (`String`) : le pays de ce site.
* Données**Declination** (`Angle`) : l'angle entre le nord réel et la direction du nord dans ce document, c'est-à-dire l'axe Y. Cela signifie que, par défaut, le nord pointe vers l'axe Y et l'Est vers l'axe X ; l'angle augmente dans le sens inverse des aiguilles d'une montre. Cette propriété était précédemment connue sous le nom de Données**North Deviation**.
* Données**EPW File** (`FileIncluded`) : permet de joindre à ce site un fichier EPW provenant du [site de données EPW de Ladybug](https://www.ladybug.tools/epwmap/). Ce fichier est nécessaire pour afficher les diagrammes de la rose des vents.
* Données**Elevation** (`Length`) : altitude du niveau 0 de ce site.
* Données**Extrusion Vector** (`Vector`) : un vecteur d'extrusion à utiliser lors d'opérations booléennes.
* Données**Latitude** (`Float`) : la latitude de ce site.
* Données**Longitude** (`Float`) : la longitude de ce site.
* Données**Origin Offset** (`Vector`) : un décalage facultatif entre l'origine du modèle (0,0,0) et le point indiqué par les coordonnées géographiques.
* Données**Perimeter** (`Length`) : la longueur du périmètre de la zone projetée.
* Données**Postal Code** (`String`) : le code postal de ce site.
* Données**Projected Area** (`Area`) : la zone de projection de cet objet sur le plan XY.
* Données**Region** (`String`) : la région, la province ou le comté de ce site.
* Données**Remove Splitter** (`Bool`) : supprime les séparateurs de la forme résultante.
* Données**Subtraction Volume** (`Volume`) : le volume de terre à retirer de ce terrain.
* Données**Subtractions** (`LinkList`) : les autres formes qui sont soustraites de cet objet.
* Données**Terrain** (`Link`) : le terrain de base de ce site.
* Données**Time Zone** (`Integer`) : représente le fuseau horaire de l'emplacement du site. Cette valeur étant un nombre entier, seuls les fuseaux horaires standard sont autorisés. Si la propriété Vue**Solar Diagram** est définie sur `true` et que le module approprié est installé, cette valeur sera utilisée pour générer des [diagrammes solaires et éoliens](#Diagrammes_solaires_et_éoliens) plus précis. Le fuseau horaire doit être compris entre -12 et +14, où 0 correspond à Greenwich, UK, (GMT+0). Les valeurs positives sont à l'est de Greenwich et les valeurs négatives sont à l'ouest.
* Données**Url** (`String`) : une url qui montre ce site dans un site web de cartographie.

### Vue

Compass

* Vue**Compass** (`Bool`) : valeur par défaut `False`. Affiche ou cache la boussole.
* Vue**Compass Position** (`Vector`) : position de la boussole par rapport à l'emplacement du site.
* Vue**Compass Rotation** (`Angle`) : rotation de la boussole par rapport au site.
* Vue**Update Declination** (`Bool`) : valeur par défaut `False`. Met à jour la valeur de la déclinaison en fonction de la rotation de la boussole.

Site

* Vue**Orientation** (`Enumeration`) : valeur par défaut `Project North`. Lorsqu'elle prend `True North`, toute la géométrie sera tournée pour correspondre au nord véritable de ce site.
* Vue**Solar Diagram** (`Bool`) : valeur par défaut `False`. Affiche ou cache le diagramme de la course du soleil. Voir [Diagrammes solaires et éoliens](#Diagrammes_solaires_et_éoliens).
* Vue**Solar Diagram Color** (`Color`) : couleur du diagramme de la course du soleil.
* Vue**Solar Diagram Position** (`Vector`) : position du diagramme de la course du soleil.
* Vue**Solar Diagram Scale** (`Float`) : échelle du diagramme de la course du soleil.
* Vue**Wind Rose** (`Bool`) : valeur par défaut `False`. Affiche ou cache le diagramme de la rose des vents (nécessite que la propriété de données **EPW File** ait une baleur, et le module Python de Ladybug installé. Voir [Diagrammes solaires et éoliens](#Diagrammes_solaires_et_éoliens)).

## Flux de travail typique

Commencez par créer un objet qui représente votre terrain. Par exemple, il est facile d'importer des données de maillage, qui peuvent être transformées en une Part Forme à partir du menu **Part → Créer une forme à partir d'un maillage**. Créez ensuite un objet Site et définissez sa propriété Données**Terrain** sur la pièce que nous venons de créer :

![](/images/Arch_site_example_01.jpg)

Créez les volumes (les volumes doivent être des solides) qui représentent les surfaces à travailler. Double cliquez sur l'objet Site dans la vue 3D, et ajoutez ou soustrayez ces volumes du groupe. Cliquez sur OK.

![](/images/Arch_site_example_02.jpg)

La géométrie du site est alors calculée, les surfaces les périmètres et volumes sont automatiquement recalculés.

![](/images/Arch_site_example_03.jpg)

## Diagrammes solaires et éoliens

Si [Ladybug](https://www.ladybug.tools/ladybug.html) est installé, Arch Site peut afficher un diagramme de la course du soleil et/ou une rose des vents. Pour cela, les propriétés Données**Longitude**, Données**Latitude** et Données**NorthDeviation** doivent être correctement définies et Vue**SolarDiagram** ou Vue**Wind Rose** mises à `true`.

### Remarques

* Le diagramme peut être mis à l'échelle, orienté et centré sur un point spécifique du modèle. Il peut également être activé ou désactivé. À ce stade, il s'agit d'une fonctionnalité visuelle plutôt que fonctionnelle, et elle n'est fournie qu'à des fins d'affichage.
* Si vous n'avez pas Ladybug, [pysolar](http://pysolar.org/) (version 0.7 et supérieure) est toujours pris en charge pour générer des diagrammes de course du soleil, mais pas des roses des vents. Cependant, Ladybug est un outil beaucoup plus puissant qui sera probablement plus utilisé à l'avenir, c'est pourquoi nous recommandons de l'utiliser à la place de pysolar. Ladybug peut être installé simplement via le gestionnaire de paquets Python [pip](https://github.com/ladybug-tools/ladybug?tab=readme-ov-file#installation).

![](/images/Freecad-solar-diagram.jpg)

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Site est utilisable dans une [macro](/Macros/fr "Macros/fr") et dans la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
Site = makeSite(objectslist=None, baseobj=None, name="Site")

```

* Crée un objet `Site` à partir de `objectlist` qui est une liste d'objets ou `baseobj` qui est un `Shape` ou `Terrain`.

Exemple :

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Building = Arch.makeBuilding([Wall])
Site = Arch.makeSite([Building])

FreeCAD.ActiveDocument.recompute()
FreeCAD.Gui.ActiveDocument.ActiveView.viewIsometric()

```

### Diagramme solaire

Tant que le module `pysolar` est présent, un diagramme de la course du soleil peut être ajouté au site. Définissez les angles de longitude, de latitude et de déclinaison selon les besoins, ainsi qu'une échelle adéquate pour la taille de votre modèle.

Pour l'instant, le diagramme n'a qu'une fonction informative et n'est là que pour l'affichage. Pour obtenir un diagramme de la course du soleil qui permette de visualiser les ombres et de modifier interactivement les dates et les heures, la meilleure option consiste à utiliser un site web externe qui permet de télécharger des modèles 3D. Certains d'entre eux prennent en charge les formats .obj et .stl, par exemple, qui peuvent être exportés vers FreeCAD.

Veuillez noter que Pysolar 0.7 ou supérieur est requis et que cette version ne fonctionne qu'avec Python 3.

```
Site.Longitude = -46.38
Site.Latitude = -23.33
Site.Declination = 30
# Uncomment if you want to show the compass
# Site.ViewObject.Compass = True

Site.ViewObject.SolarDiagram = True
Site.ViewObject.SolarDiagramScale = 10000
FreeCAD.ActiveDocument.recompute()

```

### Diagramme solaire indépendant du site

Un diagramme de la course du soleil peut être créé avec la fonction suivante, indépendamment de tout site.

```
Node = makeSolarDiagram(longitude, latitude, scale=1, complete=False)

```

* Crée un diagramme de la course du soleil en tant que nœud Pivy en utilisant `longitude` et `latitude` avec `scale` facultatif.
* Si `complete` est mis à `True`, les 12 mois sont montrés ce qui affiche l'[Analemme](https://fr.wikipedia.org/wiki/Analemme).

```
import FreeCADGui, Arch

Node = Arch.makeSolarDiagram(-46.38, -23.33, scale=10000, complete=True)
FreeCAD.Gui.ActiveDocument.ActiveView.getSceneGraph().addChild(Node)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Site/fr&oldid=1561358>"