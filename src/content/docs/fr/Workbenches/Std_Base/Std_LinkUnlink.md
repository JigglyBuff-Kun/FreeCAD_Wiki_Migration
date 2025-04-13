---
title: Std Délier
---
|  |
| --- |
| Std Délier |
| Emplacement du menu |
| Aucun |
| Ateliers |
| Tous |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [Std Créer un lien](/Std_LinkMake/fr "Std LinkMake/fr"), [Std Créer un lien relatif](/Std_LinkMakeRelative/fr "Std LinkMakeRelative/fr"), [Std Remplacer par un lien](/Std_LinkReplace/fr "Std LinkReplace/fr") |
|  |

## Description

![](/images/Std_LinkUnlink.svg) Std Délier est essentiellement l'opération inverse à ![](/images/Std_LinkReplace.svg) [Std Remplacer par un lien](/Std_LinkReplace/fr "Std LinkReplace/fr").

Cette opération est utilisée pour supprimer un lien d'un conteneur tel qu'un ![](/images/Std_Part.svg) [Std Part](/Std_Part/fr "Std Part/fr") et placer à la place l'objet réel à l'intérieur.

## Utilisation

1. Assurez-vous d'avoir un lien à l'intérieur d'un conteneur, par exemple, un lien vers une ![](/images/Part_Sphere.svg) [Part Sphère](/Part_Sphere/fr "Part Sphere/fr") à l'intérieur d'un ![](/images/Std_Part.svg) [Std Part](/Std_Part/fr "Std Part/fr").
2. Sélectionnez le lien interne dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
3. Appuyez sur ![](/images/Std_LinkUnlink.svg) Std Délier.

La ![](/images/Part_Sphere.svg) [sphère](/Part_Sphere/fr "Part Sphere/fr") originale doit maintenant se trouver dans le ![](/images/Std_Part.svg) [Std Part](/Std_Part/fr "Std Part/fr") et le lien doit être à l'extérieur. Maintenant, ce lien peut être supprimé s'il n'est plus nécessaire et il ne cassera pas le conteneur.

![](/images/Std_Link_tree_replace_fuse_2_example.png) ![](/images/Std_Link_tree_unlink_1_example.png)

Un lien à l'intérieur d'un autre objet est dissocié et l'objet réel est placé à l'intérieur à la place.

![](/images/Std_Link_tree_replace_part_2_examples.png) ![](/images/Std_Link_tree_unlink_2_example.png)

Un lien à l'intérieur d'un groupe est dissocié et l'objet réel est placé à l'intérieur à la place.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkUnlink/fr&oldid=1528588>"