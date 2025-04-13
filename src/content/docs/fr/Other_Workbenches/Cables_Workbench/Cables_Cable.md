---
title: Cables Câble
---
|  |
| --- |
| Cables Câble |
| Emplacement du menu |
| Cables → Cable |
| Ateliers |
| [Cables](/Cables_Workbench/fr "Cables Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| [Cables Profil](/Cables_Profile/fr "Cables Profile/fr"), [Cables WireFlex](/Cables_WireFlex/fr "Cables WireFlex/fr") |
|  |

## Description

![](/images/Cables_Cable.svg) Câble crée un objet Cable basé sur des [Cables WireFlex](/Cables_WireFlex/fr "Cables WireFlex/fr") et [Cables Profils](/Cables_Profile "Cables Profile") sélectionnés. Le **câble** est entièrement paramétrique et est dérivé de [Arch Conduite](/Arch_Pipe/fr "Arch Pipe/fr") et hérite de toutes ses propriétés. Certaines propriétés spécifiques à **Arch Conduite** sont cachées et ne sont pas utilisées par **Câble**.

Le **câble** crée automatiquement plusieurs sous-composants sur la base d'un **profil** donné. Ces sous-composants sont les suivants :

* Deux ![](/images/Draft_Clone.svg) [clones](/Draft_Clone/fr "Draft Clone/fr") de profils (**A\_Profile** et **B\_Profile**) positionnés aux deux extrémités d'un fil de **Base** et alignés perpendiculairement aux extrémités de la polyligne **Base**.
* Plusieurs fils secondaires **WireFlex** supplémentaires attachés aux profils A et B aux points centraux des fils monoconducteurs. Les fils secondaires **WireFlex** sont nommés en fonction de la propriété **Sub Colors**.

L'objet **Cable** peut être coloré avec l'outil [Arch Multi-matériaux](/Arch_MultiMaterial/fr "Arch MultiMaterial/fr") rattaché à la propriété **Material**.

![](/images/Cables_Example1.png)

Exemple de câble plat à trois conducteurs :  
Forme d'un câble multimatériau, son fil de base, son profil et ses fils secondaires.

## Utilisation

1. Sélectionnez le [WireFlex](/Cables_WireFlex/fr "Cables WireFlex/fr") existant dans la [vue 3D](/3D_view/fr "3D view/fr").
2. Sélectionnez le [profil du câble](/Cables_Profile "Cables Profile") existant dans la [vue 3D](/3D_view/fr "3D view/fr") en maintenant la touche CTRL.
3. Créez le câble par l'une des méthodes suivantes :
   * Appuyez sur le bouton ![](/images/Cables_Cable.svg) Cable.
   * Sélectionnez l'option **Cables → ![](/images/Cables_Cable.svg) Cable** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Cables → ![](/images/Cables_Cable.svg) Cable** dans le menu contextuel.

Une fois créé, le câble est placé à l'emplacement du **WireFlex** sélectionné dans l'espace 3D.

## Remarques

Tous les sous-composants du câble (fil de base, sous-profils, sous-fils) sont visibles par défaut. Ils peuvent être facilement cachés en modifiant la propriété **Show Sub Lines** d'un **câble**.

La première arête de chaque sous-fil a toujours la longueur = 5mm (codé en dur et ne peut être modifié par l'utilisateur) et est toujours perpendiculaire au sous-profil attaché. Ceci est nécessaire pour assurer une création correcte de la forme du sous-fil.

Les éventuels congés ne sont pas appliqués par défaut. Ils peuvent être ajustés en modifiant les propriétés du câble : **Base Wire Fillet Radius** et **Sub Wires Fillet Radius**. Il est recommandé d'effectuer cette opération à la fin de l'édition d'un câble.

## Propriétés

Un objet **Cable** partage les propriétés communes et les comportements de tous les [Arch Composants](/Arch_Component/fr "Arch Component/fr").

Un **câble** est dérivé de [Arch Conduite](/Arch_Pipe/fr "Arch Pipe/fr") et hérite de toutes ses propriétés. Certaines propriétés spécifiques à **Arch Conduite** sont cachées et ne sont pas utilisées par l'objet **Cable**.

### Données

Component

* Données**Base** (`Link`) : la polyligne de base d'un câble.

Pour les autres propriétés du groupe, voir [Arch Composant](/Arch_Component/fr#Propriétés "Arch Component/fr").

Pipe

* Données**Length** (`Length`) : indique la longueur totale d'un câble ainsi que les extrémités des sous-fils.

Cache

* Données**Auto Label Sub Lines** (`Bool`) : si la valeur est *true*, les noms de tous les sous-éléments (fil de base, sous-profils, sous-fils) seront renommés automatiquement. Pour rafraîchir les noms, la propriété doit être changée en *false* et en *true* à nouveau. Les extrémités du câble sont nommées *A* et *B*. Les suffixes des noms des sous-câbles sont nommés d'après les noms de la propriété **Sub Colors**.
* Données**Base Wire Fillet Radius** (`Length`) : spécifie le rayon des congés aux coins du fil de base.
* Données**Rotation du câble** (`Angle`) : spécifie l'angle de rotation du sous-profil *A*. La rotation du sous-profil *B* est calculée automatiquement. Ce paramètre est utile pour les câbles plats.
* Données**Show Sub Lines** (`Bool`) : si la valeur est *true*, tous les sous-éléments (fil de base, profils, sous-lignes) sont visibles dans la vue 3D.
* Données**Stripped Wire Length** (`Length`) : longueur du fil conducteur dénudé à l'extrémité de chaque sous-fil. Valeur par défaut = 8 mm.
* Données**Sub Colors** (`StringList`) : utilisé comme palette de couleurs pour la propriété **Material** et comme source de noms pour la propriété **Auto Label Sub Lines**. Il contient la liste des noms avec la formule suivante : *"Label:nr"*, où *Label* indique le nom de la gaine du câble, de l'isolation du sous-fil ou du conducteur (exemples : *J, L1, N, PE, CU*) et *nr* indique le numéro du sous-fil (numéros spéciaux : *0* - gaine de câble, *-1* - tous les autres, utilisés principalement pour l'étiquette *CU*). Pour les câbles créés avec 1-5 ou 8 sous-fils, les valeurs par défaut sont placées ici. La propriété peut être modifiée en cliquant sur ... à côté du nom de la propriété.
* Données**Sub Profiles** (`LinkList`) : liste des liens vers les sous-profils A et B. Ils sont créés automatiquement en tant que clones du profil principal lors de la création du câble.
* Données**Sub Wires** (`LinkList`) : liste des liens vers tous les sous-fils aux deux extrémités d'un câble (A et B). Tous les fils secondaires sont créés automatiquement lors de la création du câble.
* Données**Sub Wires Fillet Radius** (`Length`) : spécifie le rayon des congés aux coins de tous les fils secondaires.

## Flux de travail typique

Créer un câble coloré complet nécessite quelques étapes :

1. Créez le câble comme décrit dans [Utilisation](#Utilisation).
2. Renommez le câble comme vous le souhaitez. Si la propriété **Auto Label Sub Lines** est activée, tous les sous-composants du câble seront renommés en conséquence. Les suffixes des noms des sous-câbles suivent les étiquettes de couleur dans la propriété **Sub Colors**. Ces étiquettes peuvent également être modifiées à volonté.
3. Créez un ensemble de multimatériaux par défaut comme décrit dans [Cables Matériau](/Cables_Material/fr "Cables Material/fr"). Ajustez les matériaux créés ou laissez les valeurs par défaut.
4. Attribuez le multimatériau sélectionné à la propriété **Material** d'un câble.
5. Assurez-vous que les étiquettes de couleur dans la propriété **Sub Colors** correspondent aux noms dans le multimatériau choisi. Cela permet de garantir des couleurs correctes pour le câble et tous ses sous-fils.
6. Chaque sous-câble peut être modifié comme n'importe quel [WireFlex](/Cables_WireFlex/fr "Cables WireFlex/fr") et peut être connecté à d'autres éléments, par exemple à un [connecteur](/Cables_CableConnector/fr "Cables CableConnector/fr"). Remarque : la première arête de chaque sous-fil a toujours une longueur de 5 mm (codée en dur et ne pouvant être modifiée par l'utilisateur) et est toujours perpendiculaire au sous-profil attaché. Ceci est nécessaire pour assurer une création correcte de la forme du sous-fil.

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_Cable/fr&oldid=1557672>"