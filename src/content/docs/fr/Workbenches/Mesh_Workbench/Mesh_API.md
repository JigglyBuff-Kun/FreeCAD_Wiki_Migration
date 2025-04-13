---
title: API de l'atelier Mesh
---
:::caution
(Novembre 2018) Ces informations peuvent être incomplètes et obsolètes. Pour la dernière API, voir l'auto-génération de la documentation de l'API.
:::

Les objets maillés peuvent être manipulés par l'ajout de nouvelles facettes, suppression de facettes, l'importation d'un fichier STL, transformant le maillage et bien plus encore. Pour un aperçu complet de ce qui peut être fait voir aussi la documentation de l'[atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr"). Un objet maillé ne peut pas être ajouté à un document existant directement. Par conséquent, le document doit créer un objet avec une classe propriété qui soutient les mailles. Exemple:

```
m = Mesh.Mesh()
... # Manipule le maillage
d = FreeCAD.activeDocument() # Obtenir une référence au document actif
f = d.addObject("Mesh::Feature", "Mesh") # Créer une fonction maillage 
f.Mesh = m # affecter l'objet maillage à la propriété interne
d.recompute()

```

![](/images/Method.png) **addFacet(***Facet***)**

**Description**: Ajoute une facette à la maille

**Returns**:

![](/images/Method.png) **addFacets(***liste***)**

**Description**: Ajoute une liste de facettes à la maille

**Returns**:

![](/images/Method.png) **addMesh(***Mesh***)**

**Description**: Combine ce maillage avec un autre maillage

**Returns**: .

![](/images/Method.png) **clear(****)**

**Description**: Efface la maille

**Returns**:

![](/images/Method.png) **coarsen(****)**

**Description**: Grossit la maille

**Returns**:

![](/images/Method.png) **collapseEdge(***Bordure***)**

**Description**: Supprime une arête et deux facettes qui partagent cette arête

**Returns**:

![](/images/Method.png) **collapseFacet(***Facet***)**

**Description**: Supprime une facette

**Returns**:

![](/images/Method.png) **collapseFacets(***liste***)**

**Description**: Supprime une liste de facettes

**Returns**:

![](/images/Method.png) **copy(****)**

**Description**: Crée une copie de ce maillage

**Returns**: un objet Mesh

![](/images/Method.png) **countComponents(****)**

**Description**: Obtenir le nombre de zones topologiques indépendantes

**Returns**: un entier

![](/images/Method.png) **countNonUniformOrientedFacets(****)**

**Description**: Obtenir le nombre de facettes de mal orientées

**Returns**: un entier

![](/images/Method.png) **countSegments(****)**

**Description**: Obtenir le nombre de segments qui peut également être 0

**Returns**: un entier

![](/images/Method.png) **crossSections(****)**

**Description**: Obtenir les sections du maillage à travers plusieurs plans

**Returns**:

![](/images/Method.png) **difference(***Mesh***)**

**Description**: Différence de cela et l'objet de maillage donné

**Returns**: .

![](/images/Method.png) **fillupHoles(****)**

**Description**: trous pleins

**Returns**:

![](/images/Method.png) **fixDeformations(****)**

**Description**: réparation de facettes déformées

**Returns**:

![](/images/Method.png) **fixDegenerations(****)**

**Description**: Retirer facettes dégénérées

**Returns**:

![](/images/Method.png) **fixIndices(****)**

**Description**: Réparation des indices invalides

**Returns**:

![](/images/Method.png) **fixSelfIntersections(****)**

**Description**: réparation auto-intersections

**Returns**:

![](/images/Method.png) **flipNormals(****)**

**Description**: inverser les normales de maillage

**Returns**:

![](/images/Method.png) **foraminate(****)**

**Description**: Obtenir une liste des indices de facettes et les points d'intersection

**Returns**:

![](/images/Method.png) **getPlanes(****)**

**Description**: Obtenir tous les plans de la maille comme segment. Dans le pire des cas, chaque triangle peut être considéré comme un seul plan si aucun de ses voisins n'est coplanaires

**Returns**: .

![](/images/Method.png) **getSegment(***entier***)**

**Description**: Obtenir une liste des indices de facettes qui décrit un segment

**Returns**:

![](/images/Method.png) **getSeparateComponents(****)**

**Description**: Retourne une liste contenant les différents composants (zones séparées) de la maille comme maillages séparés

**Returns**: liste

![](/images/Method.png) **harmonizeNormals(****)**

**Description**: Régler les facettes mal orientées

**Returns**:

![](/images/Method.png) **hasNonManifolds(****)**

**Description**: Vérifiez si le maillage a des non-mutiples

**Returns**: un booléen

![](/images/Method.png) **hasNonUniformOrientedFacets(****)**

**Description**: Vérifie si le maillage a des facettes avec une orientation incompatible

**Returns**:

![](/images/Method.png) **hasSelfIntersections(****)**

**Description**: Vérifier si le maillage se croise

**Returns**:

![](/images/Method.png) **inner(****)**

**Description**: Obtenir la partie intérieure de l'intersection

**Returns**:

![](/images/Method.png) **insertVertex(***Vertex***)**

**Description**: Insère un sommet dans une facette

**Returns**:

![](/images/Method.png) **intersect(***Mesh***)**

**Description**: Intersection de cela et l'objet maillage donné.

**Returns**:

![](/images/Method.png) **isSolid(****)**

**Description**: Vérifiez si le maillage est un solide

**Returns**:

![](/images/Method.png) **meshFromSegment(****)**

**Description**: Créer un maillage à partir d'un segment

**Returns**:

![](/images/Method.png) **nearestFacetOnRay(***tuple, tuple***)**

**Description**: Retourne l'index et le pont d'intersection de la facette la plus proche d'un rayon. Le premier paramètre est un tuple de trois flotteurs le point du rayon de base et le second paramètre est un uplet de trois flotteurs pour la direction. Le résultat est un dictionnaire avec un index et le point d'intersection ou un dictionnaire vide s'il n'y a pas d'intersection

**Returns**: . Un dictionnaire

![](/images/Method.png) **offset(***float***)**

**Description**: Déplacez le point le long de leurs normales

**Returns**:

![](/images/Method.png) **offsetSpecial(***flotter***)**

**Description**: Déplacez le point le long de leurs normales

**Returns**:

![](/images/Method.png) **optimizeEdges(****)**

**Description**: Optimiser les bords pour obtenir des facettes plus agréable

**Returns**:

![](/images/Method.png) **optimizeTopology(****)**

**Description**: Optimiser les bords pour obtenir facettes plus agréable

**Returns**:

![](/images/Method.png) **outer(****)**

**Description**: Obtenez la partie extérieure de l'intersection

**Returns**:

![](/images/Method.png) **printInfo(****)**

**Description**: Obtenez des informations détaillées sur la maille

**Returns**:

![](/images/Method.png) **read(****)**

**Description**: Lire dans un maillage à partir du fichier

**Returns**: .

![](/images/Method.png) **refine(****)**

**Description**:

**Returns**: Affiner le maillage

![](/images/Method.png) **removeComponents(***entier***)**

**Description**: Suppression de composants avec moins ou égal au nombre de facettes donnés

**Returns**:

![](/images/Method.png) **removeDuplicatedFacets(****)**

**Description**: Suppression facettes doubles

**Returns**:

![](/images/Method.png) **removeDuplicatedPoints(****)**

**Description**: supprimer des points doubles

**Returns**:

![](/images/Method.png) **removeFacets(***liste***)**

**Description**: supprimer une liste d'indices de facettes du maillage

**Returns**:

![](/images/Method.png) **removeFoldsOnSurface(****)**

**Description**: Supprimer plis sur des surfaces

**Returns**:

![](/images/Method.png) **removeNonManifolds(****)**

**Description**: Retirer non collecteurs

**Returns**:

![](/images/Method.png) **rotate(****)**

**Description**: Appliquer une rotation à la maille

**Returns**:

![](/images/Method.png) **setPoint(***int, Vector***)**

**Description**: Règle le point à l'index

**Returns**: .

![](/images/Method.png) **smooth(****)**

**Description**: Lisser la maille

**Returns**:

![](/images/Method.png) **snapVertex(****)**

**Description**: Insérer une nouvelle facette à la frontière

**Returns**:

![](/images/Method.png) **splitEdge(****)**

**Description**: diviser les bords

**Returns**:

![](/images/Method.png) **splitEdges(****)**

**Description**: diviser les bords

**Returns**:

![](/images/Method.png) **splitFacet(****)**

**Description**: Diviser la facette

**Returns**:

![](/images/Method.png) **swapEdge(****)**

**Description**: Remplacez le bord commun avec le voisin

**Returns**:

![](/images/Method.png) **transform(****)**

**Description**: Appliquer une transformation à la maille

**Returns**:

![](/images/Method.png) **transformToEigen(****)**

**Description**: Transforme le maillage pour son eigenbase

**Returns**:

![](/images/Method.png) **translate(***Vecteur***)**

**Description**: Appliquer une translation à la maille

**Returns**:

![](/images/Method.png) **unite(***Mesh***)**

**Description**: Union de ceci avec l'objet de maillage donné

**Returns**: .

![](/images/Method.png) **write(***chaîne***)**

**Description**: Ecrire l'objet maillage dans le fichier

**Returns**: .

![](/images/Method.png) **writeInventor(****)**

**Description**: Ecrire le maillage au format OpenInventor dans une chaine

**Returns**: . une chaîne

![](/images/Property.png) **Area**

**Returns**: la surface de l'objet maillé.

![](/images/Property.png) **CountEdges**

**Returns**: Le nombre de sommets de l'objet maillé.

![](/images/Property.png) **CountFacets**

**Returns**: Le nombre de facettes de l'objet mesh.

![](/images/Property.png) **CountPoints**

**Returns**: Le nombre de points de l'objet maillé.

![](/images/Property.png) **Facets**

**Returns**: Une collection de facettes..; Avec cet attribut, il est possible d’avoir accès aux facettes du maillage: pour f dans mesh.Facets: print f. Facet.Points est une liste de tupels de coordonnées pour les sommets. Facet.PointIndices est une liste d'indices pour les sommets de la facette. ATTENTION! stocker les facettes dans une variable locale telle qu’elle est générée à la volée, chaque fois qu’on y accède.

![](/images/Property.png) **Points**

**Returns**: Une collection de points du maillage; Avec cet attribut, il est possible d'avoir accès à des points du maillage: pour p dans mesh.Points: Print p.x, p.y, p.z, p.Index.WARNING! stocke des points dans une variable locale, telle qu'elle est générée à la volée, à chaque accès.

![](/images/Property.png) **Topology**

**Returns**: Les points et les indices de face comme tuple Topology[0] est une liste de tous les sommets. Chacun étant un tuple de 3 coordonnées. Topology[1] est une liste de tous les polygones. Chacune étant une liste d'indices de sommet dans Topology[0] AVERTISSEMENT! stocker la topologie dans une variable locale telle qu'elle est générée à la volée, à chaque accès.

![](/images/Property.png) **Volume**

**Returns**: Le volume de l'objet mesh

![](/images/Property.png) **BoundBox**

**Returns**: La boîte englobante de l'objet

![](/images/Property.png) **Matrix**

**Returns**: La transformation actuelle de l'objet comme matrice

![](/images/Property.png) **Placement**

**Returns**: La transformation actuelle de l'objet comme placement

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_API/fr&oldid=1356259>"