---
title: Arch Composant
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Composant |
| Emplacement du menu |
| 3D/BIM → Outils 3D génériques → Composant |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

Crée un composant [Arch](/BIM_Workbench/fr "BIM Workbench/fr") non-paramétrique à partir de n'importe quel objet [Part](/Part_Workbench/fr "Part Workbench/fr"). Cela donne un objet de base Part avec les mêmes attributs et propriétés que les autres objets Arch et permet de préciser comment il doit être exporté au format IFC en définissant sa propriété Données**Ifc Type**.

## Utilisation

1. Sélectionnez un objet issu de l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr")
2. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Arch_Component.svg) Composant.
   * Sélectionnez l'option **3D/BIM → Outils 3D génériques → ![](/images/Arch_Component.svg) Composant** du menu.

## Propriétés

L'objet Arch Component est également une base partagée par tous les autres objets Arch ([Mur](/Arch_Wall/fr "Arch Wall/fr"), [Structure](/Arch_Structure/fr "Arch Structure/fr") etc.). Par conséquent, certaines de ses propriétés et comportements sont communs à tous les objets Arch (à l'exception des outils qui ne produisent pas d'objets solides, comme [Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr") ou [Axes](/Arch_Axis/fr "Arch Axis/fr")).

### Données

Component

* Données**Additions** (`LinkList`) : les composants Arch ont une propriété d'addition, qui peut contenir une référence à un nombre quelconque d'autres objets basés sur la [forme](/Part_Workbench/fr "Part Workbench/fr"). La forme de ces ajouts sera liée à la forme de base du composant, pour produire la forme finale. Voir [Remarques](##Remarques).

* Données**Axis** (`Link`) : un axe ou un système d'axes facultatif sur lequel cet objet doit être dupliqué.

* Données**Base** (`Link`) : les composants Arch sont toujours basés sur un objet de base de l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr"). Certains types d'objets Arch vont simplement utiliser la forme de base telle quelle, d'autres (par exemple [Arch Mur](/Arch_Wall/fr "Arch Wall/fr")) effectueront des opérations supplémentaires, comme une extrusion. Certains types, avoir un objet de base n'est pas obligatoire ([Arch Structure](/Arch_Structure/fr "Arch Structure/fr"))

* Données**Clone Of** (`Link`) : tout composant Arch peut être un clone d'un autre composant Arch du même type (un mur ne peut être qu'un clone d'un autre mur, etc.). La seule exception est le composant Arch générique (produit par cette commande), qui peut être un clone de tout autre type (mur, structure, fenêtre, etc.). Cela permet d'utiliser un composant Arch générique pour remplacer le type d'un autre composant Arch.

* Données**Hi Res** (`Link`) : les composants Arch peuvent utiliser la forme d'un autre objet avec une résolution plus élevée. Pour cela, la propriété Hi Res et le mode d'affichage Hi Res doivent être définis. Cela permet, par exemple, de créer un simple mur, puis de modéliser chaque brique qui compose le mur, par exemple avec un [Part Cube](/Part_Box/fr "Part Box/fr"). Ensuite, utilisez un composé de ces briques comme une version haute résolution du mur. La forme du mur n'est pas modifiée en ajoutant un objet Hi-Res. Seule sa représentation dans la [vue 3D](/3D_view/fr "3D view/fr") changera en adoptant la représentation de la version haute résolution à la place de la sienne.

* Données**Horizontal Area** (`Area`) : la zone de projection de cet objet sur le plan XY (en lecture seule).

* Données**Material** (`Link`) : tous les composants Arch ont un emplacement Material, qui peut contenir un [matériau](/Arch_SetMaterial/fr "Arch SetMaterial/fr") ou un [multi-matériaux](/Arch_MultiMaterial/fr "Arch MultiMaterial/fr") (tous les types d'objets Arch ne supportent pas l'utilisation d'un [multi-matériaux](/Arch_MultiMaterial/fr "Arch MultiMaterial/fr")). Les propriétés DiffuseColor et Transparency du matériau attaché définiront la couleur de la forme et la transparence du composant Arch. Le matériel sera importé et exporté vers [IFC](/Arch_IFC/fr "Arch IFC/fr"), [OBJ](/Arch_OBJ/fr "Arch OBJ/fr") et [DAE](/Arch_DAE/fr "Arch DAE/fr").

* Données**Move Base** (`Bool`) : spécifie si le déplacement de cet objet déplace sa base à la place.

* Données**Move With Host** (`Bool`) : lorsqu'un composant est incorporé dans un autre composant (par exemple une fenêtre à l'intérieur d'un mur), définir cette propriété à True fera bouger l'objet et pivoter avec son objet hôte lorsqu'il sera déplacé ou pivoté en utilisant [Draft Déplacer](/Draft_Move/fr "Draft Move/fr") ou [Draft Pivoter](/Draft_Rotate/fr "Draft Rotate/fr").

* Données**Perimeter Length** (`Length`) : longueur du périmètre de la surface horizontale (en lecture seule).

* Données**Standard Code** (`String`) : code standard optionnel (OmniClass, etc...) pour ce composant.

* Données**Subtractions** (`LinkList`) : les composants Arch ont une propriété de soustraction, qui peut contenir une référence à un nombre quelconque d'autres objets basés sur la [forme](/Part_Workbench/fr "Part Workbench/fr"). La forme de ces objets sera soustraite de la forme de base du composant pour produire la forme finale. Voir [Remarques](##Remarques).

* Données**Vertical Area** (`Area`) : surface de toutes les faces verticales de cet objet (en lecture seule).

IFC

* Données (Hidden)**Ifc Data** (`Map`) :

* Données (Hidden)**Ifc Properties** (`Map`) :

* Données**Ifc Type** (`Enumeration`) : chaque composant Arch, en plus de la fonction définie par son type (mur, fenêtre, etc.), possède également une propriété Role, qui peut définir davantage le type de fonction qu'il remplit. Par exemple, une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr") peut avoir un rôle de poutre ou de colonne. Les composants génériques d'Arch (tels que produits par cette commande) peuvent avoir n'importe quel rôle disponible dans l'ensemble de l'atelier d'Arch. Le rôle est utilisé pour définir le type d'objet IFC à exporter lorsque [exportation vers IFC](/Arch_IFC/fr "Arch IFC/fr").

IFC Attributes

* Données**Description** (`String`) : tous les composants Arch ont un champs Description, qui peut contenir n'importe quel texte. Ceci est utilisé avec [exportation vers IFC](/Arch_IFC/fr "Arch IFC/fr").

* Données**Global Id** (`String`) :

* Données**Object Type** (`String`) :

* Données**Predefined Type** (`Enumeration`) :

* Données**Tag** (`Enumeration`) : la propriété Tag est un autre champs de texte qui peut être utilisé pour donner une identité personnalisée supplémentaire aux objets.

## Remarques

* Le placement d'un composant Arch est appliqué après que les ajouts et soustractions ont été effectués, de sorte qu'ils sont effectués par rapport à l'objet de base à son emplacement de base. Ensuite, le résultat est déplacé à l'emplacement du placement.

* Les objets peuvent être ajoutés ou supprimés dans/à partir de listes Additions et Soustractions d'un composant en sélectionnant à la fois l'objet et le composant, et en utilisant les commandes [Arch Ajouter](/Arch_Add/fr "Arch Add/fr") ou [Arch Supprimer](/Arch_Remove/fr "Arch Remove/fr"), ou le panneau des tâches en double-cliquant sur le composant dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"). Le panneau de tâches permet également de vérifier quel objet fait actuellement partie de ces listes.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Component/fr&oldid=1540385>"