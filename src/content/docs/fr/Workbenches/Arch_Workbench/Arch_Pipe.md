---
title: Arch Conduite
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Conduite |
| Emplacement du menu |
| 3D/BIM → Conduite |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| P I |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **Arch Conduite** permet de créer des conduites à partir de zéro, ou à partir d'objets sélectionnés. Les objets sélectionnés doivent contenir une seule polyligne ouverte.

## Utilisation

1. Vous pouvez sélectionner une forme linéaire de [Part](/Part_Workbench/fr "Part Workbench/fr") telle qu'une [Draft Ligne](/Draft_Line/fr "Draft Line/fr"), une [Draft Polyligne](/Draft_Wire "Draft Wire") ou une [esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr") ouverte.
2. Lancez cette commande de plusieurs méthodes :
   * En appuyant sur le bouton ![](/images/Arch_Pipe.svg) Conduite de la barre d'outils.
   * En appuyant sur le raccourci clavier P puis I.
   * Depuis **3D/BIM → Conduite** dans le menu supérieur.

## Options

## Propriétés

Un objet Arch Pipe partage les propriétés et comportements communs à tous les [Arch Composants](/Arch_Component/fr "Arch Component/fr")

### Données

Component

* Données**Base** (`Link`) : polyligne de base de la conduite, si il y en a une.

Pour les autres propriétés du groupe, voir [Arch Composant](/Arch_Component/fr#Propriétés "Arch Component/fr").

Pipe

* Données**Diameter** (`Length`) : diamètre de la conduite tuyau si son Données**Profile Type** est `Circle`.
* Données**Height** (`Length`) : hauteur de la conduite, si son Données**Profile Type** est `Rectangle`.
* Données**Length** (`Length`) : longueur de la conduite s'il n'est pas basé une polyligne.
* Données**Offset End** (`Length`) : décalage par rapport à l'extrémité de la conduite. Automatiquement défini si un [Arch Raccord](/Arch_PipeConnector/fr "Arch PipeConnector/fr") est ajouté à ce point pour que la conduite s'adapte au connecteur. Voir [Processus de travail typique](#Processus_de_travail_typique) ci-dessous.
* Données**Offset Start** (`Length`) : décalage par rapport au point de départ de la conduite. Idem.
* Données**Profile** (`Link`) : profil de base de la conduite. S'il n'est pas défini, le profil de la conduite est déterminé par Données**Profile Type**.
* Données**Profile Type** (`Enumeration`) : profil de la conduite. Il n'est utilisé que si Données**Profile** n'est pas défini. Les options sont les suivantes : `Circle`, `Square` ou `Rectangle`.
* Données**Wall Thickness** (`Length`) : épaisseur de la paroi de la conduite.
* Données**Width** (`Length`) : largeur de la conduite, si Données**Profile Type** est `Square` ou `Rectangle`.

## Flux de travail typique

* Commencez par placer les sanitaires (le fichier exemple ci dessous est un fichier step importé). Vous activez ces objets en équipements d'Arch en les sélectionnant et en appuyant sur le bouton [Arch Équipement](/Arch_Equipment/fr "Arch Equipment/fr").

![](/images/Arch_pipe_example_01.jpg)

* Dans Arch Équipement vous avez maintenant une nouvelle propriété **SnapPoints** qui est une liste de vecteurs 3D. Cela vous permet d'ajouter des points d'aimantation personnalisés, auxquels vous pouvez vous aimanter lorsque le bouton d'aimantation [Draft Spécial](/Draft_Snap_Special/fr "Draft Snap Special/fr") est activé. Actuellement, cette propriété n'est cependant disponible que pour Python. Dans le cas ci-dessus, j'ai ajouté un nouveau point d'aimantation à la sortie du WC. Les vecteurs à l'intérieur des SnapPoints apparaissent sur le modèle sous forme de points blancs:

```
FreeCAD.ActiveDocument.Equipment.SnapPoints=[FreeCAD.Vector(0,0,100)]

```

![](/images/Arch_pipe_example_02.jpg)

* Avec [Draft Aimantation Spécial](/Draft_Snap_Special/fr "Draft Snap Special/fr"), vous pouvez maintenant vous aimanter sur tous ces points:

![](/images/Arch_pipe_example_03.jpg)

* Maintenant vous pouvez créer vos conduites en utilisant des Draft Lignes, des Draft Polylignes ou des esquisses. La meilleure solution est d'utiliser uniquement des Draft Lignes :

![](/images/Arch_pipe_example_04.jpg)

* L'outil [Draft Pente](/Draft_Slope/fr "Draft Slope/fr") permet de donner une pente aux lignes, par exemple 5% (0.05). Nous pouvons donc donner facilement une pente aux conduites de décharge. Seule la coordonnée Z est changée avec cet outil, il faut donner le départ et la fin, la coordonnées de départ (haut) reste inchangé.

![](/images/Arch_pipe_example_05.jpg)

* Maintenant nous n'avons qu'a sélectionner les lignes et cliquer sur le bouton Arch Conduite. Arch Conduite travaille avec n'importe quel objet ligne et seulement avec des lignes ouvertes.

![](/images/Arch_pipe_example_06.jpg)

* Vous pouvez maintenant créer des connexions avec deux ou trois conduites coïncidents en cliquant sur le bouton [Arch Raccord](/Arch_PipeConnector/fr "Arch PipeConnector/fr"). Si vous sélectionnez trois conduites, deux conduites doivent être alignées pour créer un élément de départ :

![](/images/Arch_pipe_example_07.jpg)

* Changer le rayon de courbure ne modifie pas la longueur résultante du tracé des conduites (pour changer la résultante, vous devez changer le départ et l'arrivée des conduites). Vous pouvez donc tracer votre chemin de lignes sans vous soucier des courbes et rayon des coudes.

Il est aussi possible de créer une Arch conduite sans ligne de base, dans ce cas utilisez la propriété "Length" pour définir la longueur.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Conduite peut être utilisé dans une [macro](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
pipe = makePipe(baseobj=None, diameter=0, length=0, placement=None, name="Pipe")

```

* Crée un objet `pipe` à partir de `baseobj` et `diameter`.
  + `baseobj` est une [Draft Ligne](/Draft_Line/fr "Draft Line/fr") ou un [Draft Polyligne](/Draft_Wire/fr "Draft Wire/fr").
  + Si `baseobj` est omis, une conduite droite peut être créée avec seulement `diameter` et `length` dans la direction Z.
* Si `placement` est donné, il est utilisé.

```
import Draft, Arch

p1 = FreeCAD.Vector(1000, 0, 0)
p2 = FreeCAD.Vector(2500, 200, 0)
p3 = FreeCAD.Vector(3100, 1000, 0)
p4 = FreeCAD.Vector(3500, 500, 0)
line = Draft.make_wire([p1, p2, p3, p4])

pipe = Arch.makePipe(line, 200)
FreeCAD.ActiveDocument.recompute()

pipe2 = Arch.makePipe(diameter=120, length=3000)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Pipe/fr&oldid=1540369>"