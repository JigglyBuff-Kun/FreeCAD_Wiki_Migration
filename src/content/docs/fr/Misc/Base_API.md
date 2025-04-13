---
title: API du module Base
---
:::caution
(octobre 2019) Ne pas éditer cette page. L'information est incomplète et obsolète. Pour la dernière API, voir ladocumentation de l'API générée automatiquement, ou générez la documentation vous-même, voirDocumentation du code source.
:::

Le module de Base est contenu à l'intérieur du module FreeCAD et contient les constructeurs pour différents types d'objets largement utilisés dans FreeCAD.

![](/images/Class.png) **BoundBox(***[Xmin,Ymin,Zmin,Xmax,Ymax,Zmax]***)**

![](/images/Class.png) **BoundBox(***Tuple, Tuple***)**

![](/images/Class.png) **BoundBox(***Vector, Vector***)**

**Description**: créent une boîte de englobante.
Une boîte englobante est un cube orthographique qui permet de décrire les limites extérieures. De nombreux types d'objets 3D sont dotés d'une boîte englobante. Elle est souvent utilisée pour vérifier si une entité 3D se trouve dans le champ d'action d'un autre objet. Vérifier d'abord l'existence d'une interférence englobante peut faire gagner beaucoup de temps de calcul !

![](/images/Class.png) **Matrix(****)**

**Description**: Crée une [matrice](/Matrix_API/fr "Matrix API/fr") 4x4 qui peut être utilisée pour appliquer des transformations aux objets.

![](/images/Class.png) **Vector(****)**

![](/images/Class.png) **Vector(***x, y, z***)**

**Description**: Crée un [vecteur](/Vector_API/fr "Vector API/fr") 3D de FreeCAD, représentant un point 3D ou une direction.

![](/images/Class.png) **Placement(****)**

**Description**: crée un [positionnement](/Placement_API/fr "Placement API/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Base_API/fr&oldid=1356245>"