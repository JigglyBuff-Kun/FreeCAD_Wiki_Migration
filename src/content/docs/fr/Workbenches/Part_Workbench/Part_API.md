---
title: API de l'atelier Part
---

:::caution
(Novembre 2018) Ces informations peuvent être incomplètes et obsolètes. Pour obtenir l'API la plus récente, consultez ladocumentation de l'API générée automatiquementou ladocumentation de l'API générée automatiquement en Python pour Part.
:::

Le module **Part\*- ![](/images/Workbench_Part.png) est une connexion directe entre **FreeCAD** et le noyau **OpenCasCade**. Il fournit principalement des [TopoShapes](/TopoShape_API/fr "TopoShape API/fr") qui sont les types d'objets principaux utilisés par OpenCascade. Le module **Part** contient également une variété de fonctions utiles pour créer et manipuler des **topoShapes\*\*. Exemple :

```
import Part
mycube = Part.makeBox(2,2,2)
Part.show(mycube)

```

![](/images/Method.png) **\_\_fromPythonOCC\_\_** ( _OCC.Object_ )

**Description** : Méthode d'assistance pour convertir un shape pythonocc en un shape interne

**Retourne** : Un Part.Shape

![](/images/Method.png) **\_\_sortEdges\_\_** ( _list of edges_ )

**Description** : Méthode d'assistance pour trier une liste d'arêtes (edges) non triée de manière à ce que les sommets de début et de fin de deux arêtes consécutives coïncident géométriquement. Il renvoie une liste unique d'arêtes et l'algorithme s'arrête après le premier ensemble d'arêtes connectées, ce qui signifie que la liste de sortie peut être plus petite que la liste d'entrée. La liste triée peut être utilisée pour créer un fil.

**Retourne** : Une liste d'arêtes (edges)

![](/images/Method.png) **\_\_toPythonOCC\_\_** ( _Part.Shape_ )

**Description** : Méthode d'assistance pour convertir une forme interne en une forme pythonocc

**Retourne** : Un OCC.Shape

![](/images/Method.png) **cast_to_shape** ( _Part.Shape_ )

**Description** : Cast du type de forme réelle

**Retourne** :

![](/images/Method.png) **export** ( _list,string_ )

**Description** : Exporte une liste d'objets dans un seul fichier.

**Retourne** :

![](/images/Method.png) **getSortedClusters** ( _list of edges_ )

**Description** : Méthode d'assistance pour trier et grouper une variété des bords

**Retourne** :

![](/images/Method.png) **insert** ( _string,string_ )

**Description** : Insère le fichier (chemin d'accès donné comme premier argument) dans le document donné (second argument).

**Retourne** :

![](/images/Method.png) **makeBox** ( _length,width,height,[pnt,dir]_ )

**Description** : Crée une zone située à ce point avec les dimensions (longueur, largeur, hauteur). Par défaut le point est au Vecteur(0,0,0) et la direction au Vecteur(0,0,1)

**Retourne** : Crée une forme

![](/images/Method.png) **makeCircle** ( _radius,[pnt,dir,angle1,angle2]_ )

**Description** : Fait un cercle d'un rayon donné. Par défaut le point est au Vecteur(0,0,0), et la direction est, Vecteur(0,0,1), angle1 est 0° et angle2 est 360°

**Retourne** : Crée une forme

![](/images/Method.png) **makeCompound** ( _list_ )

**Description** : Crée un compound parmi une liste de formes.

**Retourne** : Crée une forme

![](/images/Method.png) **makeCone** ( _radius1,radius2,height,[pnt,dir,angle]_ )

**Description** : Fait un cône avec les rayons et la hauteur. Par défaut le point est au Vecteur(0,0,0), et la direction est, Vecteur(0,0,1) et l'angle est de 360°

**Retourne** : Crée une forme

![](/images/Method.png) **makeCylinder** ( _radius,height,[pnt,dir,angle]_ )

**Description** : Crée un cylindre avec une taille et un rayon donné. Par défaut le point est au Vecteurr (0,0,0), et la direction est, Vecteur(0,0,1), et, l'angle est de 360°

**Retourne** : Crée une forme

![](/images/Method.png) **makeHelix** ( _pitch,height,radius,[angle]_ )

**Description** : Rend une hélice avec un pas donné, la hauteur et le rayon. Par défaut, une surface cylindrique est utilisée pour créer l'hélice. S'il y a un quatrième paramètre, une surface conique est utilisée à la place

**Retourne** : Crée une forme

![](/images/Method.png) **makeLine** ( _(x1,y1,z1),(x2,y2,z2)_ )

**Description** : Crée une ligne en deux points

**Retourne** : Crée une forme

![](/images/Method.png) **makeLoft** ( _shapelist<profiles>,[boolean<solid>,boolean<ruled>]_ )

**Description** : Crée une forme de loft en utilisant la liste des profils. Crée éventuellement un résultat solide (vs surface/coque) ou une surface lignée.

**Retourne** : Crée une forme de loft.

![](/images/Method.png) **makePlane** ( _length,width,[pnt,dir]_ )

**Description** : Crée un plan. Par défaut le point est au Vecteur(0,0,0) et la direction au Vector(0,0,1)

**Retourne** : Crée une forme

![](/images/Method.png) **makePolygon** ( _list_ )

**Description** : Crée un polygone avec une liste de vecteurs

**Retourne** : Crée une forme

![](/images/Method.png) **makeRevolution** ( _Curve,[vmin,vmax,angle,pnt,dir]_ )

**Description** : Crée une forme de révolution en faisant tourner la courbe, ou une partie de celle-ci autour d'un axe donné par (point, direction). Par défaut, vmin et vmax sont définis aux limites de la courbe, l'angle est de 360°, le point est au Vecteur(0,0,0) et la direction est au Vecteur(0,0,1)

**Retourne** : Crée une forme

![](/images/Method.png) **makeRuledSurface** ( _Edge or Wire,Edge or Wire_ )

**Description** : Crée une surface réglée hors de deux arêtes ou fils. Si les fils sont utilisés ils doivent avoir le même nombre d'arêtes.

**Retourne** : Crée une forme

![](/images/Method.png) **makeShell** ( _list_ )

**Description** : Crée une coquille à partir d'une liste de faces.

**Retourne** : Crée une forme

![](/images/Method.png) **makeSolid** ( _Part.Shape_ )

**Description** : Crée un solide hors du shell, à l'intérieur d'une forme.

**Retourne** : Crée une forme

![](/images/Method.png) **makeSphere** ( _radius,[pnt, dir, angle1\_Debut,angle2\_Fin,angle3]_ )

**Description** : Crée une sphère de rayon donné. Par défaut le point est au Vecteur(0,0,0), et la direction est au Vecteur(0,0,1), angle1 est -90°, angle2 est 90° et angle3 est 360°

**Retourne** : Crée une forme

![](/images/Method.png) **makeTorus** ( _radius1,radius2,[pnt,dir,angle1,angle2,angle]_ )

**Description** : Crée un tore avec une donnée de rayon d'angles. Par défaut le point est au Vecteur (0,0,0), et la direction est au vecteur (0,0,1), angle1 est 0°, angle2 est 360° et l'angle est de 360°

**Retourne** : Crée une forme

![](/images/Method.png) **makeTube** ( _edge,float_ )

**Description** : Crée un tube.

**Retourne** : Crée une forme

![](/images/Method.png) **open** ( _string_ )

**Description** : Crée un nouveau document et charge le fichier dans le document.

**Retourne** :

![](/images/Method.png) **read** ( _string_ )

**Description** : Charge le fichier et retourne un shape.

**Retourne** : Une forme

![](/images/Method.png) **show** ( _shape_ )

**Description** : Ajouter la forme du document actif ou en crée un si aucun document n'existe.

**Retourne** :

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_API/fr&oldid=1356292>"
