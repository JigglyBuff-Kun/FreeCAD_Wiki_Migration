---
title: Arch Mur
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Mur |
| Emplacement du menu |
| 3D/BIM → Mur |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| W A |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **Arch Mur** crée un objet mur à partir de zéro ou sur la base de n'importe quel objet basé sur une [forme de Part](/Part_Workbench/fr "Part Workbench/fr") ou sur une [forme de Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr"). Un mur peut être construit sans objet de base, il se comportera alors comme un volume cubique, il sera construit à l'aide des propriétés de longueur, largeur et hauteur. Lorsque qu'il est construit sur une forme existante, le mur peut être basé sur :

* Un **objet linéaire 2D**, tel que des lignes, polylignes, arcs ou esquisses, dans ce cas, vous pouvez modifier l'épaisseur, l'alignement (droite, gauche ou centré) et la hauteur. La propriété de longueur n'a pas d'effet.
* Une **face plane**, dans ce cas, vous ne pouvez pas changer la hauteur. La propriété length (longueur) n'a pas d'effet. Si le base de la face est verticale, le mur utilisera la propriété largeur au lieu de la propriété hauteur, vous permettant de construire des murs à partir d'objets en forme d'espace ou d'étude de masse.
* Un **solide**, les propriétés de longueur, de largeur et de hauteur n'ont aucun effet. Le mur utilise simplement le solide sous-jacent comme forme.
* Un **maillage**, dans ce cas, sous-jacente doit être un solide fermé, solide manifold.

![](/images/Arch_Wall_example.jpg)

Murs construits à partir d'une ligne, d'une polyligne, d'une face, d'un solide et d'une esquisse

Les murs peuvent également avoir des ajouts ou des soustractions. Les ajouts sont d'autres objets dont les formes sont jointes dans la forme de ce mur, tandis que les soustractions sont soustraites. Des ajouts et des soustractions peuvent être ajoutés avec les outils [Ajouter](/Arch_Add/fr "Arch Add/fr") et [Supprimer](/Arch_Remove/fr "Arch Remove/fr"). Les ajouts et soustractions n'ont aucune influence sur les paramètres de mur tels que la hauteur et la largeur, qui peuvent encore être modifiés. Les murs peuvent également avoir leur hauteur automatique, s'ils sont inclus dans un objet de niveau supérieur tel que des [Niveaux](/Arch_Floor/fr "Arch Floor/fr"). La hauteur doit être maintenue à 0, puis le mur adoptera la hauteur spécifiée dans l'objet parent.

Lorsque plusieurs murs doivent se croiser, vous devez les placer sur un [niveau](/Arch_Floor/fr "Arch Floor/fr") pour avoir leurs géométries entrecoupées.

## Utilisation

### Dessiner un mur de zéro

1. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Arch_Wall.svg) Mur.
   * Sélectionnez l'option **3D/BIM → ![](/images/Arch_Wall.svg) Mur** du menu.
   * Utilisez le raccourci clavier : W puis A.
2. Cliquez sur un premier point de la vue 3D, ou tapez les coordonnées.
3. Cliquez sur un deuxième point de la vue 3D, ou tapez les coordonnées.

### Dessiner un mur sur un objet sélectionné

1. Sélectionnez un ou plusieurs objets géométriques de base (objet Draft, esquisse, etc).
2. Lancez l'outil comme décrit ci-dessus.
3. Ajustez les propriétés nécessaires telles que, la hauteur ou la largeur.

## Options

* La hauteur, la largeur et l'alignement d'un mur peuvent être définis lors du dessin, via le panneau des tâches.
* Lors de l'accrochage d'un mur à un mur existant, les deux murs seront joints en un seul. La manière dont les deux murs sont joints dépend de leurs propriétés: s'ils ont la même largeur, hauteur et alignement, et si l'option "Joindre les esquisses de base" est activée dans les préférences Arch, le mur résultant sera un objet basé sur une esquisse composé de plusieurs segments. Sinon, ce dernier mur sera ajouté au premier en tant qu'addition.
* Appuyez sur X, Y ou Z après le premier point pour contraindre le deuxième point sur l'axe donné.
* Pour entrer les coordonnées manuellement, entrez simplement les nombres, puis appuyez sur Entrée entre chaque composant X, Y et Z.
* Appuyez sur R ou cliquez sur la case à cocher pour cocher/décocher le bouton **Relatif**. Si le mode relatif est activé, les coordonnées du deuxième point sont relatives au premier. Sinon, ils sont absolus, pris à partir du point d'origine (0,0,0).
* Appuyez sur MAJ tout en dessinant sur [Contrainte](/Draft_Constrain/fr "Draft Constrain/fr") votre deuxième point horizontalement ou verticalement par rapport au premier.
* Appuyez sur Échap ou sur le bouton Annuler pour abandonner la commande en cours.
* Double-cliquer sur le mur dans l'arborescence après sa création vous permet d'entrer en mode édition et d'accéder et de modifier ses ajouts et soustractions
* Les murs multicouches peuvent être facilement créés en construisant plusieurs murs à partir de la même ligne de base. En définissant leur propriété Align sur la gauche ou la droite et en spécifiant une valeur de décalage, vous pouvez créer efficacement plusieurs couches de murs. Placer une fenêtre dans un tel calque de mur propage l'ouverture vers les autres calques de mur en fonction de la même ligne de base.
* Les murs peuvent également utiliser un [multi-matériaux](/Arch_MultiMaterial/fr "Arch MultiMaterial/fr"). Lors de l'utilisation d'un multi-matériaux, le mur deviendra multi-couche, en utilisant les épaisseurs spécifiées par le multi-matériaux. Toute couche d'épaisseur zéro verra son épaisseur définie automatiquement par l'espace restant défini par la valeur Largeur du mur, après avoir soustrait les autres couches.
* Les murs peuvent être conçus pour afficher des blocs, au lieu d'un seul solide, en activant leur propriété Données**Make Blocks**. La taille et le décalage des blocs peuvent être configurés avec différentes propriétés, et la quantité de blocs est automatiquement calculée.

## Aimantation

L'aimantation fonctionne un peu différemment avec les murs Arch par rapport aux autres objets Arch et Draft. Si un mur a un objet de ligne de base, l'aimantation s'ancrera à l'objet de base, au lieu de la géométrie de mur, permettant d'aligner facilement les murs par leur ligne de base. Si, cependant, vous souhaitez spécifiquement accrocher à la géométrie du mur, appuyez sur Ctrl pour basculer l'aimantation à l'objet mur.

![](/images/Arch_wall_snap.jpg)

Le deuxième mur s'aimante perpendiculairement au premier

## Propriétés

Un objet Arch Wall partage les propriétés communes et le comportement de tous les [Arch Composants](/Arch_Component/fr "Arch Component/fr").

### Données

Blocks

* Données**Block Height** : hauteur de chaque bloc.
* Données**Block Length** : longueur de chaque bloc.
* Données**Count Broken** : nombre de blocs coupés (lecture seule).
* Données**Count Entire** : nombre de blocs entiers (lecture seule).
* Données**Joint** : taille des joints, l'espace vide, entre les blocs.
* Données**Make Blocks** : active la génération de blocs.
* Données**Offset First** : décalage horizontal de la première ligne de blocs et de toutes les lignes inégales.
* Données**Offset Second** : décalage horizontal de la deuxième ligne de blocs et de toutes les lignes paires.

Component

Voir [Arch Composant](/Arch_Component/fr#Propriétés "Arch Component/fr").

IFC

Voir [Arch Composant](/Arch_Component/fr#Propriétés "Arch Component/fr").

IFC Attributes

Voir [Arch Composant](/Arch_Component/fr#Propriétés "Arch Component/fr").

Wall

:   ![](/images/Sketch_vs_Wall.jpg)

* Données**Align** : alignement du mur sur sa ou ses lignes de référence : Gauche, Droite ou Centre. Avec les modes Gauche et Droite, le côté où le mur est créé dépend de la direction de chaque ligne de référence. En d'autres termes, la direction de chaque arête de l'objet Base (Sketch/ArchSketch) est prise en compte, ce qui permet un contrôle plus fin de chaque segment de mur. Voir le diagramme ci-dessus pour plus de détails. Dans les esquisses, les arcs sont toujours orientés dans le sens inverse des aiguilles d'une montre. Lorsqu'un segment courbe d'un mur est aligné à gauche, l'arête intérieure du segment coïncide avec l'arc dans l'esquisse. Voir également **Override Align**.
* Données**Area**: surface du mur entier, la séparation en blocs ne fait aucune différence (en lecture seule).
* Données**Face** : index de la face de l'objet de base utilisée. Si la valeur n'est pas définie ou est 0, l'objet entier est utilisé
* Données**Height** : hauteur du mur. Ignoré si le mur est basé sur un solide. S'il vaut zéro et que le mur se trouve à l'intérieur d'un objet [Niveau](/Arch_Floor/fr "Arch Floor/fr") dont la hauteur est définie, le mur prendra automatiquement la valeur de la hauteur l'étage.
* Données**Length** : longueur du mur. La valeur peut être éditée si le mur est basé sur une esquisse non contrainte avec une seule arête, ou sur une [Draft Polyligne](/Draft_Wire/fr "Draft Wire/fr") avec une seule arête, sinon la valeur est en lecture seule. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") La valeur lorsque la propriété est en lecture seule est plus précise. Elle est basée sur le milieu du mur si les segments ont des propriétés Données**Width**, Données**Align** et/ou Données**Offset** différentes. Notez que des imprécisions peuvent subsister si le mur est complexe, par exemple s'il présente des jonctions en T ou des auto-intersections. Dans ce cas, il est conseillé d'utiliser la propriété Données**Horizontal Area** pour effectuer d'autres calculs.
* Données**Normal** : donne une direction pour l'extrusion du mur. Si la valeur est à (0,0,0), la direction d'extrusion est automatique.
* Données**Offset** : spécifie la distance entre le mur et le niveau de référence. Fonctionne uniquement si la propriété **Align** est à droite ou à gauche. La direction de chaque arête de l'objet Base (Sketch/ArchSketch) est prise en compte, ce qui permet un contrôle plus fin de chaque segment de mur. Voir aussi **Override Offset**.
* Données**Override Align** : cette propriété remplace l'attribut **Align** pour définir l'alignement de chaque segment du mur. Elle est ignorée si l'objet de base fournit des informations sur l'alignement avec la méthode getAligns() (si une valeur n'est pas "Left, Right, Center", la valeur de "Align" sera appliquée). AMÉLIORATION par ArchSketch : l'outil d'interface graphique "Edit Wall Segment Align" est fourni avec l'![](/images/SketchArch_Workbench.svg) [extension SketchArch](https://github.com/paullee0/FreeCAD_SketchArch) pour permettre aux utilisateurs de définir les valeurs de manière interactive. "Tolérant au problème de dénomination topologique" si ArchSketch est utilisé dans la base (et si le module complémentaire SketchArch est installé). Attention : non "Tolérant au problème de dénomination topologique" si seulement Sketch est utilisé.
* Données**Override Width** : cette propriété remplace la propriété **Width** et permet de définir une largeur différente pour chaque segment du mur. La saisie est une liste de largeurs numériques (sans spécification d'unité), une pour chaque segment du mur. Si une valeur de la liste est égale à 0, le segment correspondant utilisera la valeur de la propriété **Width** du mur, effaçant ainsi la priorité par segment. Cette propriété est ignorée si l'objet de base du mur fournit des informations sur les largeurs avec la méthode `getWidths()` (comme les esquisses créées avec l'![](/images/SketchArch_Workbench.svg) [extension SketchArch](https://github.com/paullee0/FreeCAD_SketchArch)). Cette extension apporte également d'autres améliorations : un outil graphique *Edit Wall Segment Width* pour permettre aux utilisateurs de définir les valeurs de largeur de manière interactive, et une tolérance au problème de dénomination topologique si un objet ArchSketch est utilisé comme objet de base du mur (et si l'extension est installée).
* Données**Override Offset** : ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")) cette propriété remplace l'attribut **Offset** pour définir le décalage de chaque segment de mur. Elle est ignorée si l'objet de base fournit des informations sur les décalages, avec la méthode getOffsets() (si une valeur est nulle, la valeur de "Offset" sera appliquée). AMÉLIORATION par ArchSketch : l'outil d'interface graphique "Edit Wall Segment Offset" est fourni avec l'![](/images/SketchArch_Workbench.svg) [extension SketchArch](https://github.com/paullee0/FreeCAD_SketchArch) pour permettre aux utilisateurs de sélectionner les bords de manière interactive. "Tolérant au problème de dénomination topologique" si ArchSketch est utilisé dans la base (et si le module complémentaire SketchArch est installé). Attention : non "Tolérant au problème de dénomination topologique" si seulement Sketch est utilisé. La propriété est ignorée si Base d'ArchSketch a fourni les arêtes sélectionnées.
* Données**Width** : largeur du mur. Ignoré si le mur est basé sur une face ou un solide. Voir aussi **Override Width**.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Mur peut servir dans une [macro](/Macros/fr "Macros/fr"), et, à partir de la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
Wall = makeWall(baseobj=None, length=None, width=None, height=None, align="Center", face=None, name="Wall")

```

* Crée un objet `Mur` à partir d'`objet` donné, qui peut être un [objet Draft](/Draft_Workbench/fr "Draft Workbench/fr"), un [objet Sketch](/Sketcher_Workbench/fr "Sketcher Workbench/fr"), une face ou un solide.
  + Si aucun `objet` n'est indiqué, vous pouvez fournir les valeurs numériques pour `longueur`, `largeur` (épaisseur) et `hauteur`.
  + Si donné, `face` peut être utilisé pour donner l'index d'une face à partir de l'objet sous-jacent, pour construire ce mur, au lieu d'utiliser tout l'objet.
* `align` peut être au `"Centre"`, à `"Gauche"` ou à `"Droite"`.
* Il renvoie `None` si l'opération échoue.

Exemple :

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Wall2 = Arch.makeWall(None, length=2000, width=200, height=1000)
Draft.move(Wall2, FreeCAD.Vector(0, -1000, 0))
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Wall/fr&oldid=1548592>"