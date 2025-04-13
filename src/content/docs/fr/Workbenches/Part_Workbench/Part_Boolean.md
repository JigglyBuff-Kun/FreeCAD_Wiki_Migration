---
title: Part Opération booléenne
---

|                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Part Opération booléenne                                                                                                                                                                         |
| Emplacement du menu                                                                                                                                                                              |
| Part → Opérations booléennes → Opération booléenne...                                                                                                                                            |
| Ateliers                                                                                                                                                                                         |
| [Part](/Part_Workbench/fr "Part Workbench/fr")                                                                                                                                                   |
| Raccourci par défaut                                                                                                                                                                             |
| _Aucun_                                                                                                                                                                                          |
| Introduit dans la version                                                                                                                                                                        |
| -                                                                                                                                                                                                |
| Voir aussi                                                                                                                                                                                       |
| [Part Soustraction](/Part_Cut "Part Cut"), [Part Union](/Part_Fuse/fr "Part Fuse/fr"), [Part Intersection](/Part_Common/fr "Part Common/fr"), [Part Section](/Part_Section/fr "Part Section/fr") |
|                                                                                                                                                                                                  |

## Description

![](/images/Part_Boolean.svg) Part Opération booléenne est un outil booléen générique tout-en-un. Il vous permet de spécifier les objets et l'opération à effectuer via une seule boîte de dialogue.

Pour des opérations booléennes plus rapides, voir aussi ![](/images/Part_Cut.svg) [Part Soustraction](/Part_Cut/fr "Part Cut/fr"), ![](/images/Part_Fuse.svg) [Part Union](/Part_Fuse/fr "Part Fuse/fr"), ![](/images/Part_Common.svg) [Part Intersection](/Part_Common/fr "Part Common/fr") et ![](/images/Part_Section.svg) [Part Section](/Part_Section/fr "Part Section/fr").

![PartBooleansDialog](/images/PartBooleansDialog.png)

Fenêtre de dialogue pour sélectionner des objets et effectuer des opérations booléennes avec eux

## Utilisation

Voir chaque commande :

- ![](/images/Part_Cut.svg) [Part Soustraction](/Part_Cut/fr "Part Cut/fr")
- ![](/images/Part_Fuse.svg) [Part Union](/Part_Fuse/fr "Part Fuse/fr")
- ![](/images/Part_Common.svg) [Part Intersection](/Part_Common/fr "Part Common/fr")
- ![](/images/Part_Section.svg) [Part Section](/Part_Section/fr "Part Section/fr")

## Problèmes coplanaires

Les opérations booléennes sont effectuées par le noyau de géométrie interne, [OpenCASCADE Technology](/OpenCASCADE/fr "OpenCASCADE/fr") (OCCT). Cette bibliothèque a parfois des problèmes pour produire des résultats booléens lorsque les objets d'entrée partagent une arête ou une face. Pour être sûr que l'opération booléenne est réussie, la recommandation est que les formes se croisent clairement. Cela signifie que dans la plupart des cas, une forme doit dépasser ou être plus grande que l'autre forme.

En cas de coplanarité, même si la première opération booléenne réussit, les opérations booléennes suivantes peuvent échouer. Dans ce cas, le problème peut ne pas être lié à la dernière opération effectuée, mais aux anciennes, c'est-à-dire aux opérations imbriquées, comme indiqué dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr"). Pour résoudre ces problèmes, il est recommandé d'utiliser l'outil ![](/images/Part_CheckGeometry.svg) [Part Vérifier la géométrie](/Part_CheckGeometry/fr "Part CheckGeometry/fr") pour inspecter tous les objets à la recherche de problèmes.

![](/images/Part_Boolean_cut_coplanar_1.png)

![](/images/Part_Boolean_cut_coplanar_2.png)

À gauche : formes qui partagent une face, une soustraction booléenne peut produire des résultats incorrects.  
À droite : les formes qui s'entrecroisent clairement, la soustraction booléenne réussira dans la plupart des cas.

![](/images/Part_Boolean_fusion_coplanar_1.png)

![](/images/Part_Boolean_fusion_coplanar_2.png)

À gauche : formes qui partagent un visage, une union booléenne peut produire des résultats incorrects.  
À droite : des formes qui se croisent clairement, l'union booléenne réussira dans la plupart des cas.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Boolean/fr&oldid=1559266>"
