---
title: Arch Équipement
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Équipement |
| Emplacement du menu |
| 3D/BIM → Équipement |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| E Q |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **Arch Équipement** vous offre un moyen simple et pratique d'insérer des éléments autonomes, non structurels tels que des meubles, des équipements sanitaire ou appareils électriques à vos projets. Les équipements sont basés sur des [objets Part](/Part_Workbench/fr "Part Workbench/fr"), ce qui leur permet de bénéficier de la solidité et des possibilités de la géométrie BRep et de générer de jolies vues lors du rendu en vue en plan et en coupe.

![](/images/Arch_equipment_example.jpg)

Objets d'ameublement dans un objet Arch Équipement. Les projections à plat peuvent être obtenues par l'outil [Draft Vue 2D d'une forme](/Draft_Shape2DView/fr "Draft Shape2DView/fr")

A partir de la version 0.17, les objets d'équipement ont aussi une propriété Données**HiRes** où un objet [Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") peut être attaché. Les objets équipement peuvent ensuite être créés pour afficher ce maillage dans la vue 3D au lieu de leur forme, ce qui permet d'utiliser des objets maillés haute résolution tels que des meubles détaillés que l'on trouve généralement sur les sites Web.

![](/images/Arch_equipment_mesh.jpg)

Objets d'ameublement dans un objet Arch Équipement avec un maillage haute résolution

Lors de l'utilisation de l'exportateur Arch OBJ, tous les équipements en mode d'affichage Mesh seront exportés en tant que maillage au lieu d'objet forme.

## Utilisation

1. Sélectionnez une forme de [Part](/Part_Workbench/fr "Part Workbench/fr") et éventuellement un objet de [Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr").
2. Appuyez sur le bouton ![](/images/Arch_Equipment.png) Équipement ou appuyez les touches E puis Q.

## Propriétés

Un objet Arch Equipment partagent les propriétés communes et les comportements de tous les [Arch Composants](/Arch_Component/fr "Arch Component/fr").

* Données**Model** : description du modèle de cet équipement.
* Données**Url** : URL de la page du produit, où plus d'informations sur cet équipement peut être trouvée.
* Données**Mesh** : représentation [maillée](/Mesh_Workbench/fr "Mesh Workbench/fr") à utiliser pour cet équipement. Lorsqu'elle est définie, le mode d'affichage **Maillage** devient disponible.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Équipement peut-être utilisé dans des [macros](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
Equipment = makeEquipment(baseobj=None, placement=None, name="Equipment")

```

* Crée un objet `Equipment` à partir d'un `baseobj` ou un objet `Part` ou `Mesh`.
* Si `placement` est donné, il sera utilisé.
* Retourne `None` si l'opération échoue.

Exemple :

```
import FreeCAD, Arch

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 500
Box.Width = 2000
Box.Height = 600

Equip = Arch.makeEquipment(Box)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Equipment/fr&oldid=1540379>"