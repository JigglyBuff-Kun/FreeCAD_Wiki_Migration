---
title: Std Remplacer par un lien
---
|  |
| --- |
| Std Remplacer par un lien |
| Emplacement du menu |
| Aucun |
| Ateliers |
| Tous |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [Std Créer un lien](/Std_LinkMake/fr "Std LinkMake/fr"), [Std Créer un lien relatif](/Std_LinkMakeRelative/fr "Std LinkMakeRelative/fr"), [Std Délier](/Std_LinkUnlink/fr "Std LinkUnlink/fr") |
|  |

## Description

![](/images/Std_LinkReplace.svg) Std Remplacer par un lien remplace un objet qui se trouve dans un autre objet par une version [App Link](/App_Link/fr "App Link/fr") du premier.

Cette opération agit sur les "enfants" d'un objet "parent" comme vu dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"). Par exemple, soient deux objets (A et B) qui participent à une opération ![](/images/Part_Boolean.svg) [Part Booléenne](/Part_Boolean/fr "Part Boolean/fr"), disons `C = A + B`, l'objet A peut être remplacé par un Link (Lien) de sorte que `C = A_link + B`.

Cette opération peut être effectuée pour remplacer des objets imbriqués qui sont dans un [assemblage](/Assembly/fr "Assembly/fr") complexe pour un lien, ce qui peut être plus efficace si cet objet imbriqué est utilisé plusieurs fois dans différents sous-assemblages. L'opération inverse est ![](/images/Std_LinkUnlink.svg) [Std Délier](/Std_LinkUnlink/fr "Std LinkUnlink/fr"). Pour créer un lien générique voir ![](/images/Std_LinkMake.svg) [Std Créer un lien](/Std_LinkMake/fr "Std LinkMake/fr").

## Utilisation

1. Assurez-vous que vous avez un objet dans un autre. Par exemple, considérez qu'une ![](/images/Part_Fuse.svg) [Part Union](/Part_Fuse/fr "Part Fuse/fr") a été utilisée avec deux objets créés, une ![](/images/Part_Sphere.svg) [Part Sphère](/Part_Sphere/fr "Part Sphere/fr") et un ![](/images/Part_Cylinder.svg) [Part Cylindre](/Part_Cylinder/fr "Part Cylinder/fr").
2. Sélectionnez la ![](/images/Part_Sphere.svg) [sphère](/Part_Sphere/fr "Part Sphere/fr") dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
3. Appuyez sur ![](/images/Std_LinkReplace.svg) Remplacer par un lien.

La ![](/images/Part_Sphere.svg) [sphère](/Part_Sphere/fr "Part Sphere/fr") d'origine doit maintenant se trouver en dehors de la ![](/images/Part_Fuse.svg) [Part Union](/Part_Fuse/fr "Part Fuse/fr") et il doit y avoir un lien à l'intérieur à la place (une petite flèche superposée est affichée dans l'icône).

![](/images/Std_Link_tree_replace_fuse_1_example.png) ![](/images/Std_Link_tree_replace_fuse_2_example.png)

Un objet à l'intérieur d'un autre est remplacé par un lien; le lien est maintenant à l'intérieur et l'objet réel est placé à l'extérieur.

Cela peut également être fait avec des objets contenus dans des ![](/images/Std_Part.svg) [Std Parts](/Std_Part/fr "Std Part/fr") et ![](/images/Std_Group.svg) [Std Groupes](/Std_Group/fr "Std Group/fr").

![](/images/Std_Link_tree_replace_part_1_examples.png) ![](/images/Std_Link_tree_replace_part_2_examples.png)

Un objet à l'intérieur d'un conteneur est remplacé par un lien ; le lien est maintenant à l'intérieur et l'objet réel est placé à l'extérieur.

## Propriétés

Cette commande crée un nouveau [App Link](/App_Link/fr "App Link/fr"). Ses propriétés sont décrites dans ![](/images/Std_LinkMake.svg) [Std Créer un lien](/Std_LinkMake/fr "Std LinkMake/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkReplace/fr&oldid=1528582>"