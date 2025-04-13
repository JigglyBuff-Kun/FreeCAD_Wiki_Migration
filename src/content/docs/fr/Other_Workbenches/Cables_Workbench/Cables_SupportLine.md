---
title: Cables Ligne
---
|  |
| --- |
| Cables Ligne |
| Emplacement du menu |
| Cable Support → Support Line |
| Ateliers |
| [Cables](/Cables_Workbench/fr "Cables Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| [Cables Câble](/Cables_Cable/fr "Cables Cable/fr"), [Cables Boîte](/Cables_CableBox/fr "Cables CableBox/fr"), [Cables Point](/Cables_SupportPoint/fr "Cables SupportPoint/fr") |
|  |

## Description

![](/images/Cables_SupportLine.svg) Ligne crée une simple [Draft Ligne](/Draft_Line/fr "Draft Line/fr") de couleurs vives et avec des sommets agrandis. Elle sert de support pour créer [WireFlex](/Cables_WireFlex/fr "Cables WireFlex/fr"). Ses propriétés **Attachment** peuvent être utilisées par exemple pour grouper des câbles autour d'une [boîte](/Cables_CableBox/fr "Cables CableBox/fr") ou d'autres objets, pour attacher des câbles aux murs ou aux plafonds, etc.

![](/images/Cables_SupportLine_Example1.png)

Ligne de construction

## Utilisation

1. Sélectionnez le sommet, le point sur la surface ou l'objet dans la [vue 3D](/3D_view/fr "3D view/fr") ou ne sélectionnez rien.
2. Créez une ligne par l'une des méthodes suivantes :
   * Appuyez sur le bouton ![](/images/Cables_SupportLine.svg) Support Line.
   * Sélectionnez l'option **Cable Support → ![](/images/Cables_SupportLine.svg) Support Line** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Cable Support → ![](/images/Cables_SupportLine.svg) Support Line** dans le menu contextuel.

Une fois créée, la ligne est placée à la position du sommet, du point ou de l'objet sélectionné dans l'espace 3D (ou au point (0,0,0) si rien n'a été sélectionné).

## Remarques

Par défaut, la propriété **Subdivisions** est égale à 1. Elle peut être augmentée pour créer plus de sommets de construction, par exemple pour un faisceau de câbles parallèles.

## Propriétés

Un objet **Support Line** possède toutes les propriétés de [Draft Ligne](/Draft_Line/fr#Propriétés "Draft Line/fr").

## Flux de travail typique

De nombreuses combinaisons d'attaches sont possibles, ce qui, avec WireFlex, offre un large éventail de possibilités pour déplacer des objets avec des câbles tendus entre eux.

Exemple :

1. Créez une **boîte** comme décrit dans [Utilisation de Boîte](/Cables_CableBox/fr#Utilisation "Cables CableBox/fr").
2. Sélectionnez **Cable Box** nouvellement créée dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et créez 4 lignes de construction comme décrit dans [Utilisation](#Utilisation).
3. Pour chacune des 4 lignes de construction, choisissez **CableBox** dans la propriété **Attachment Support**.
4. Pour chacune des 4 lignes de construction, choisissez **ObjectXY** dans la propriété **Map Mode**.
5. Définissez des valeurs x, y, z différentes pour chaque ligne de construction dans **Attachment Offset/Position** :
   * pour la 1ère ligne de construction : x=0cm, y=11cm, z=-2cm
   * pour la 2ème ligne de construction : x=-8cm, y=0cm, z=-2cm et **Attachment Offset/Angle** à 90deg
   * pour la 3ème ligne de construction : x=8cm, y=0cm, z=-2cm et **Attachment Offset/Angle** à 90deg
   * pour la 4ème ligne de construction : x=0cm, y=20cm, z=-2cm
6. Créez le premier fil **WireFlex** en sélectionnant le sommet central de la croix supérieure de la **boîte** et les sommets centraux des lignes de support 1 et 4 et en suivant [Utilisation de Wireflex](/Cables_WireFlex/fr#Utilisation "Cables WireFlex/fr").
7. Créez les deuxième et troisième **WireFlex** de la même manière.
8. Le résultat devrait être similaire à celui de l'image ci-dessous
9. L'étape suivante pourrait être de créer des câbles à partir des fils **WireFlex** (voir [Utilisation de Câble](/Cables_Cable/fr#Utilisation "Cables Cable/fr")).
10. Les lignes de construction peuvent être cachées lorsque les câbles sont créés.

![](/images/Cables_SupportLine_Example2.png)

Exemple d'utilisation de la ligne de construction : les lignes de construction sont attachées à la boîte de câble et servent de base aux fils.

C'est ainsi qu'a été créé la boîte avec les fils attachés. Cela permet de déplacer l'ensemble du jeu lors du repositionnement de la boîte à câbles uniquement. À tout moment, les sommets sélectionnés peuvent être détachés des lignes de construction (voir [Utilisation Supprimer la connexion d'un sommet](/Cables_RemoveVertexAttachment/fr#Utilisation "Cables RemoveVertexAttachment/fr")), ce qui garantit que leur position ne changera pas lorsque la boîte à câbles sera déplacée.

Un autre exemple animé utilisant des lignes de construction est présenté [ici](/Cables_Example1_Simple_workflow "Cables Example1 Simple workflow").

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_SupportLine/fr&oldid=1557680>"