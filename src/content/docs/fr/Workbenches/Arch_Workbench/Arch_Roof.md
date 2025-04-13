---
title: Arch Toit
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Toit |
| Emplacement du menu |
| 3D/BIM → Toit |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| R F |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **Arch Toit** permet de créer un toit à pentes à partir d'une polyligne sélectionnée. L'objet Toit créé est paramétrique et garde sa relation avec l'objet de base. Le principe est que chaque arête se voit attribuer un profilé de toit (pente, largeur, débord, épaisseur).

**Remarque :** cet outil est encore en développement et peut échouer avec des formes très complexes.

![](/images/RoofExample.png)

Vue d'en haut d'un modèle de bâtiment montrant le toit avec une certaine transparence

## Utilisation (base polyligne)

1. Créez une polyligne fermée dans le sens anti-horaire et sélectionnez la.

   :   ![](/images/CounterclockwiseWire.png)
2. Cliquez sur le bouton ![](/images/Arch_Roof.svg) Toit ou appuyez sur les touches R puis F.
3. L'objet Toit par défaut a l'air étrange car l'outil manque de certaines informations nécessaires.
4. Après la création du toit par défaut, double-cliquez sur l'objet dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") pour accéder à son édition et ses propriétés. Les angles doivent être compris entre 0 et 90 degrés.

   :   ![](/images/RoofTable.png)
5. Chaque ligne correspond à un pan du toit. Vous pouvez ainsi définir les propriétés que vous dédirez pour chaque pan du toit.
6. Pour vous aider, vous pouvez régler `Angle` ou `Course` à `0` et définir un `Identifiant rel.`, cela effectue un calcul automatique pour trouver les données relatives au `Identifiant rel.`.
7. Cela fonctionne ainsi :
   1. Si `Angle = 0` et `Course = 0` alors le profilé est identique au profilé relatif.
   2. Si `Angle = 0` alors `Angle` est calculé de manière à ce que la hauteur soit identique au profilé relatif.
   3. Si `Course = 0` alors `Course` est calculé de manière à ce que la hauteur soit identique à celle du profilé relatif.
   4. Enfin, fixez un angle à 90° pour faire un pignon.

   :   ![](/images/RoofProfil.png)
8. *Remarque* : pour une meilleure compréhension, veuillez consulter cette [vidéo youtube](https://www.youtube.com/watch?v=4Urwru71dVk).

## Utilisation (base solide)

Si votre toit a une forme complexe (par exemple, s'il contient des fenêtres en pente ou d'autres caractéristiques non standard), vous pouvez créer un objet solide personnalisé à l'aide d'autres ateliers de FreeCAD ([Part](/Part_Workbench/fr "Part Workbench/fr"), [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"), etc.) Puis utilisez ce solide comme objet de Données**Base** de votre toit :

1. Sélectionnez l'objet de base solide.
2. Appuyez sur le bouton ![](/images/Arch_Roof.svg) Toit, ou appuyez sur les touches R puis F.

## Soustraction d'un toit

Les toits ont un volume de soustraction généré automatiquement ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") pour les toits avec une base solide). Lorsqu'un toit est [supprimé](/Arch_Remove/fr "Arch Remove/fr") des murs d'un bâtiment, le toit lui-même ainsi que tout ce qui se trouve au-dessus est soustrait des murs.

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : il est possible de remplacer le volume de soustraction automatique en définissant la propriété Données**Subvolume** du toit à un objet solide personnalisé.

![](/images/Arch_Roof_Subtract_Default.png) ![](/images/Arch_Roof_Subtract_Subvolume.png) ![](/images/Arch_Roof_Subvolume_Example.png)

Toit à base de solides avant (1ère image) et après (2ème image) sa [suppression](/Arch_Remove/fr "Arch Remove/fr") des murs.  
La troisième image montre le volume de soustraction généré.

## Propriétés

Un objet Arch Roof partage les propriétés et comportements communs à tous les [Arch Composants](/Arch_Component/fr "Arch Component/fr").

### Données

Roof

* Données**Angles** (`FloatList`) : liste des angles des segments du toit.
* Données**Border Length** (`Length`) : longueur totale des bordures du toit.
* Données**Face** (`Integer`) : numéro de la face de l'objet de base utilisé pour construire le toit (non utilisé).
* Données**Flip** (`Bool`) : indique si la direction du toit doit être inversée.
* Données**Heights** (`FloatList`) : liste des hauteurs calculées des segments du toit.
* Données**Id Rel** (`IntegerList`) : liste des identifiants des profilés relatifs aux segments du toit.
* Données**Overhang** (`FloatList`) : liste des débords des segments du toit.
* Données**Ridge Length** (`Length`) : longueur totale des faîtages et des arêtiers du toit.
* Données**Runs** (`FloatList`) : liste des projections horizontales des segments du toit.
* Données**Subvolume** (`Link`) : volume à soustraire. S'il est spécifié, il est utilisé à la place du sous-volume généré automatiquement. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
* Données**Thickness** (`FloatList`) : liste des épaisseurs des segments du toit.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Toit peut être utilisé dans des [macros](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
Roof = makeRoof(baseobj=None, facenr=0, angles=[45.,], run=[], idrel=[0,], thickness=[50.,], overhang=[100.,], name="Roof")

```

* Crée un objet `Roof` à partir de `baseobj` donné, qui peut être une polyligne fermée ou un objet solide.
  + Si `baseobj` est une polyligne, vous pouvez fournir des listes de `angles`, `run`, `idrel`, `thickness` et `overhang` pour chaque arête de la polyligne afin de définir la forme du toit.
  + Les listes sont automatiquement complétées pour correspondre au nombre d'arêtes de la polyligne.

Exemple :

```
import FreeCAD as App
import Arch, Draft

doc = App.newDocument()

rect = Draft.makeRectangle(3000, 4000)
doc.recompute()

roof = Arch.makeRoof(rect, angles=[30.,])

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(0, 2000, 0)

wire = Draft.make_wire([p1, p2, p3], closed=True)
doc.recompute()

roof1 = Arch.makeRoof(wire)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Roof/fr&oldid=1540387>"