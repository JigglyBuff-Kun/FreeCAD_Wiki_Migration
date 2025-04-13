---
title: Arch Multi-matériaux
---

:::caution
Cette commande est obsolète.Elle n'est plus disponible depuisversion 1.0 et suivantes. Utilisez plutôtBIM Matériau.
:::

|                                                                                             |
| ------------------------------------------------------------------------------------------- |
| Arch Multi-matériaux                                                                        |
| Emplacement du menu                                                                         |
| Arch → Outils pour les matériaux → Créer un multi-matériaux                                 |
| Ateliers                                                                                    |
| [Arch](/Arch_Workbench/fr "Arch Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut                                                                        |
| _Aucun_                                                                                     |
| Introduit dans la version                                                                   |
| 0.17                                                                                        |
| Voir aussi                                                                                  |
| [Arch Matériau](/Arch_SetMaterial/fr "Arch SetMaterial/fr")                                 |
|                                                                                             |

## Description

L'outil Multi-matériaux définit une liste de [materiaux](/index.php?title=Material/fr&action=edit&redlink=1 "Material/fr (page does not exist)") avec, pour chaque matériau, un nom et une valeur d'épaisseur. Cette liste multi-matériaux peut ensuite être ajoutée à un objet [Arch](/Arch_Workbench/fr "Arch Workbench/fr") à la place d'un seul [Arch Matériau](/Arch_SetMaterial/fr "Arch SetMaterial/fr").

![](/images/Arch_multimaterial_example.png)

Tous les objets Arch ne peuvent pas actuellement utiliser des multi-matériaux, et l'utilisation qu'ils en font diffère. Pour le moment :

- ![](/images/Arch_Wall.svg) [Arch Mur](/Arch_Wall/fr "Arch Wall/fr") avec un multi-matériaux utilisera les définitions de matériaux et les épaisseurs pour créer un mur multicouche.
- ![](/images/Arch_Window.svg) [Arch Fenêtre](/Arch_Window/fr "Arch Window/fr") avec un multi-matériaux va attribuer des matériaux avec un nom donné défini dans le multi-matériaux aux composants de fenêtre avec un même nom ou type (voir ci-dessous). L'épaisseur du matériau n'est pas prise en compte.
- ![](/images/Arch_Panel.svg) [Arch Panneaux](/Arch_Panel/fr "Arch Panel/fr") avec un multi-matériaux utilisera les définitions et les épaisseurs de matériaux pour créer un panneau multi-couche.

## Utilisation

1. Créez d'abord une série de ![](/images/Arch_SetMaterial.svg) [Arch Matériaux](/Arch_SetMaterial/fr "Arch SetMaterial/fr") dont vous aurez besoin dans votre multi-matériaux.
2. Sélectionnez un objet Arch que vous souhaitez attribuer au multi-matériaux.
3. Appuyez sur le bouton ![](/images/Arch_MultiMaterial.svg) Créer un multi-matériaux.
4. Définir les couches de matériaux souhaitées.

## Options

![](/images/Arch_multimaterial_panel.png)

Lors de la création ou de l'édition d'un multi-matériaux en double-cliquant dessus dans l'arborescence, les options suivantes sont disponibles :

- **Dupliquer** un autre Matériaux multiples existant du même document. Cela ne fait que copier les valeurs et ne lie en aucun cas les deux multi-matériaux.
- Le champ **Nom** définira également l'étiquette de l'objet matériau
- La liste **Composition** est la liste des différentes couches de matériaux qui composent ce multi-matériaux. Chaque couche a un nom, un matériau et une valeur d'épaisseur.
- Cliquez sur Ajouter pour ajouter un nouveau calque, Haut pour déplacer un calque sélectionné vers le haut, Bas pour déplacer un calque sélectionné vers le bas ou Sup pour supprimer un calque sélectionné.
- Double-cliquez sur le **nom** d'un calque pour le modifier. Le matériau vous proposera une liste déroulante des [Arch Matériaux](/Arch_SetMaterial/fr "Arch SetMaterial/fr") disponibles dans le même document, et l'épaisseur peut être définie à n'importe quelle valeur dans n'importe quelle unité
- Les champs Nom et Matériau sont obligatoires. L'épaisseur peut être laissée vide (elle prendra alors une valeur de 0).
- Lorsqu'un multi-matériaux contient des couches d'épaisseur nulle, cette épaisseur est considérée comme variable. Les objets Arch qui utilisent le multi-matériaux, tels que les murs et les panneaux, traiteront cela en conséquence et donneront à cette couche l'espace restant disponible compte tenu de sa propre largeur ou épaisseur.
- Si vous nommez les différents composants d'un "Cadre" multi-matériaux, "Panneau plein", "Panneau de verre" ou "Louvre" et appliquez ce matériau à une fenêtre, les matériaux donnés seront appliqués aux composants de fenêtre correspondants.

## Relation avec IFC

Cela correspond à peu près à une combinaison de [IfcMaterialLayerSet](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/link/ifcmateriallayerset.htm) et [IfcMaterialLayer](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/link/ifcmateriallayer.htm).

## Limitations

## Script

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_MultiMaterial/fr&oldid=1458504>"
