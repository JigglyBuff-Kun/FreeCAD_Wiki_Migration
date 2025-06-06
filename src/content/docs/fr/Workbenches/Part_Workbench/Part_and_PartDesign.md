---
title: Part et PartDesign
---
## Présentation

Il y a eu beaucoup de discussions au cours des années sur les différences et les conséquences de l'utilisation des ateliers ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/fr "Part Workbench/fr") et ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").

Il est bon d'utiliser l'un ou l'autre jusqu'à ce que l'utilisateur soit à l'aise avec l'un, puis d'apprendre l'autre. Il est aussi généralement recommandé aux nouveaux utilisateurs de ne pas les mélanger avant d'avoir compris les tenants et aboutissants.

Parlons de ces implications.

## Concepts de l'atelier Part

L'atelier Part est essentiellement une [modélisation de type CSG](/Constructive_solid_geometry/fr "Constructive solid geometry/fr"). L'opérateur combine différentes primitives pour aboutir à une représentation de la forme souhaitée.
(En fait, l'atelier Part va plus loin que les simples primitives et permet à l'utilisateur d'utiliser une opération esquisse+extrusion pour créer également des formes particulières). Lorsque chaque primitive ou forme est créée, elle n'a aucune relation avec les autres objets créés (à l'exception des esquisses et de leurs attachements), c'est un solide unique et solitaire.

![](/images/Part_CSG_Prims.png)

Solides isolés

Cette condition demeure jusqu'à ce que l'utilisateur utilise une opération pour les combiner (généralement une opération booléenne qui les additionne ou les soustrait).
Chaque solide d'origine reste accessible séparément et l'opération crée un nouvel objet (solide).

Le point à retenir est la partie solide et solitaire et la partie qui les combine.

## Concepts de l'atelier PartDesign

Dans l'atelier PartDesign, l'objet Corps (Body) représente un solide unique et cumulatif.

La 1ère étape d'un corps (body) doit être un bloc de matière, soit à partir d'une primitive additive, soit d'une extrusion à partir d'une esquisse, soit d'une forme importée (alors appelée fonction de base (Base Feature)).

Ce bloc initial de matière sera modifié séquentiellement jusqu'à ce que la forme finale souhaitée (solide) soit obtenue.

Elle est cumulative dans le sens où chaque opération ajoute ou enlève de la matière.

Par défaut, la "pointe" ou partie résultante du corps - à moins qu'il n'y ait un changement volontaire dans la visualisation d'une fonctionnalité particulière - est la dernière opération effectuée sur le corps. Il s'agit de l'état actuel et visible du corps, prêt à être modifié à nouveau par une nouvelle fonctionnalité.

Toute fonction sous le corps représente la forme cumulée du solide depuis la 1ère fonction jusqu'à la fonction considérée.

Donc **pour avoir le solide complet**, d'une part la fonction résultante (Tip) doit être la dernière étape de la construction de ce solide, et d'autre part **c'est le corps qui doit être sélectionné** et non une étape de sa construction.

Cela permettra, en cas de modification, **d'avoir toujours la dernière version du solide représenté.**

**Remarque et compléments :** à chaque instant de la construction, la dernière fonction utilisée est la "Tip", qui peut être définie aussi comme "étape active dans la construction de l'objet" ou "étape précédant l'action suivante dans la construction de l'objet". Lorsque le dessin de l'objet est terminé, Tip est naturellement la dernière étape ou fonction de la construction. Mais si vous le souhaitez, en cas d'oubli, toute fonction de la construction peut être provisoirement déclarée comme Tip : elle devient alors l'étape précédant l'action suivante dans la construction de l'objet, ce qui signifie que de nouvelles fonctions peuvent être insérées n'importe où dans la construction, **à condition qu'aucune incompatibilité ne soit créée avec la suite**.

Lorsque tout est terminé, vous devez redéclarer la dernière fonction comme Tip, ce qui correspond à l'objet fini.

![](/images/Part_Design_Cumulativ.png)

Corps solide cumulé

Cette image montre un Corps. Il s'agit d'un solide cumulatif composé d'une esquisse extrudée et d'une primitive de cône. Il s'agit d'un seul solide.

Si Tip est sur **Pad**, le Pad peut exister séparément, mais si Tip est sur **Cone**, le cône ne peut pas exister séparément (Tip sur Cone = Pad + Cone).

(Une autre chose souvent mentionnée est qu'un Corps ***DOIT*** être un solide unique et contigu. Cela signifie que toute géométrie créée par une fonction dans le Corps *doit* toucher son prédécesseur).

## Les implications

Bien que non recommandé pour les nouveaux arrivants, il est possible de combiner les outils de l'atelier Part et de l'atelier PartDesign, à condition de savoir ce que vous faites. Par exemple :

Les gens se font prendre lorsqu'ils tentent d'utiliser une fonction sous le corps (plutôt que le corps lui-même) comme sélection d'une opération booléenne Part Workbench. Ceci pose un problème, car la fonction sélectionnée ne représente pas «LE» solide complet.

En un sens, du point de vue de l'atelier Part, le Corps représente une autre primitive. Aussi, l'utilisation d'un Corps (Body) (rappelez-vous qu'il s'agit d'un proxy pour la fonction résultante) et d'un objet de l'atelier Part pour faire un booléen est valide. L'objet résultant est un objet de l'atelier Part, et par conséquent, les outils de l'atelier PartDesign ne peuvent plus être utilisés sur cet objet.

Et, cela peut devenir encore plus compliqué. Si vous créez un nouveau Corps et que vous y faites glisser le résultat du paragraphe précédent, un BaseObject est créé. Vous pouvez alors utiliser les outils de l'atelier PartDesign.

## Les avertissements

Il y a un problème avec la fonction résultante (Tip) et sa représentation du solide unique dans le Corps. *Si* la fonction résultante est une fonction soustractive et est utilisée dans une opération de transformation, par exemple une symétrie, la symétrie opère sur la fonction sous-jacente (une cavité par exemple). Ainsi, le solide cumulé n'est pas symétrisé, mais la fonction soustractive l'est. Le résultat de cette opération doit créer un solide unique.

Dans cet exemple, une symétrie de la fonction résultante (ici la cavité de la fente) autour de l'un des plans de base, ou même d'une face du solide, ne produira pas un solide symétrique du modèle entier. (En fait, cela produira une fonction Symétrie dans l'arborescence qui est essentiellement vide).

![](/images/PhantomMirror.png)

Solides isolés

Dans cet exemple, une symétrie de la fonction résultante (ici la cavité de la fente) est effectuée autour du plan de référence et produit une fente symétrique :

![](/images/MirroredSlot.png)

Solides isolés

Voir la page wiki de l'outil ![](/images/PartDesign_Mirrored.svg) [PartDesign Symétrie](/PartDesign_Mirrored/fr "PartDesign Mirrored/fr") pour plus d'informations.

## Comparaison

Vous pouvez voir ci-dessous le même exemple construit avec chacun des deux ateliers. Bien sûr, il existe toujours plusieurs chronologies de construction possibles avec chaque atelier.

![](/images/PartWBvsPartDesignWBexample.jpg)

Comparaison des constructions avec l'atelier Part et l'atelier PartDesign

| Dans  l'atelier PartDesign | Dans  l'atelier Part |
| --- | --- |
| 01-  Corps (Body) +  Esquisse dans plan XZ | 01-  Atelier Sketcher >  Esquisse dans plan XZ |
|  |  |

|  |  |
| --- | --- |
| 02-  Révolution / Z | 02-  Révolution / Z |
|  |  |

|  |  |
| --- | --- |
| 03-  Esquisse dans plan XY | 03-  Atelier Sketcher >  Esquisse dans plan XY |
|  |  |

|  |  |
| --- | --- |
| 04-  Poche | 04a-  Extrusion |
|  |  |

|  |  |
| --- | --- |
|  | 04b-  Soustraction |
|  |  |

|  |  |
| --- | --- |
| 05-  Esquisse dans plan XZ | 05-  Atelier Sketcher >  Esquisse dans plan XZ |
|  |  |

|  |  |
| --- | --- |
| 06-  Extrusion sym/XZ | 06a-  Extrusion sym/XZ |
|  |  |

|  |  |
| --- | --- |
|  | 06b-  Draft WB  Répétition circulaire |
|  |  |

|  |  |
| --- | --- |
|  | 06c-  Fusion |
|  |  |

|  |  |
| --- | --- |
| 07-  Esquisse sur face plane de la base | 07-  Atelier Sketcher >  Esquisse dans plan XZ |
|  |  |

|  |  |
| --- | --- |
| 08-  Trou lamé | 08a-  Révolution |
|  |  |

|  |  |
| --- | --- |
|  | 08b-  Draft WB  Répétition circulaire |
|  |  |

|  |  |
| --- | --- |
| 09-  Répétition circulaire de Perçage + Extrusion | 09-  Soustraction |
|  |  |

Comparez les arbres de construction dans les deux ateliers ainsi que leur organisation et leur chronologie de lecture :

|  |  |
| --- | --- |
| 10- Arbre de construction dans l'atelier PartDesign | 10- Arbre de construction dans l'atelier Part |
|  |  |

## Conclusion

Les ateliers Part et PartDesign peuvent être utilisés ensemble, avec un peu de précaution, pour créer des modèles assez complexes.

[Haut](#Top/fr)

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_and_PartDesign/fr&oldid=1447609>"