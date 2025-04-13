---
title: API di Mesh
---
:::caution
(Novembre 2018) Queste informazioni potrebbero essere incomplete e obsolete. Per l'ultima API, vedere la paginaDocumentazione API autogenerata.
:::

Gli oggetti mesh possono essere manipolati aggiungendo nuove sfaccettature, cancellando delle sfaccettature, importando da un file STL, trasformando la rete e in molti altri modi. Per una panoramica completa di ciò che si può fare vedere anche la documentazione dell'[Ambiente Mesh](/Mesh_Workbench/it "Mesh Workbench/it"). Un oggetto mesh non può essere aggiunto direttamente ad un documento esistente. Pertanto, il documento deve creare un oggetto con una classe appropriataa che supporta le mesh. Esempio:

```
m = Mesh.Mesh()
... # Manipulate the mesh
d = FreeCAD.activeDocument() # Get a reference to the actie document
f = d.addObject("Mesh::Feature", "Mesh") # Create a mesh feature
f.Mesh = m # Assign the mesh object to the internal property
d.recompute()

```

![](/images/Method.png) **addFacet(***Facet***)**

**Description**: Aggiunge una sfaccettatura alla maglia

**Returns**:

![](/images/Method.png) **addFacets(***list***)**

**Description**: Aggiunge un elenco di sfaccettature alla maglia

**Returns**:

![](/images/Method.png) **addMesh(***Mesh***)**

**Description**: Combina questa mesh con un'altra mesh.

**Returns**:

![](/images/Method.png) **clear(****)**

**Description**: Cancella la mesh

**Returns**:

![](/images/Method.png) **coarsen(****)**

**Description**: Rende grossolana la mesh

**Returns**:

![](/images/Method.png) **collapseEdge(***Edge***)**

**Description**: Rimuove un bordo e entrambe le sfaccettature che condividono questo bordo

**Returns**:

![](/images/Method.png) **collapseFacet(***Facet***)**

**Description**: Rimuove una sfaccettatura

**Returns**:

![](/images/Method.png) **collapseFacets(***list***)**

**Description**: Rimuove una seriea di sfaccettature

**Returns**:

![](/images/Method.png) **copy(****)**

**Description**: Crea una copia di questa maglia

**Returns**: un oggetto Mesh

![](/images/Method.png) **countComponents(****)**

**Description**: Ottiene il numero di aree topologiche indipendenti

**Returns**: un intero

![](/images/Method.png) **countNonUniformOrientedFacets(****)**

**Description**: Ottiene il numero di sfaccettature orientate male

**Returns**: un intero

![](/images/Method.png) **countSegments(****)**

**Description**: Ottiene il numero di segmenti che possono essere anche 0

**Returns**: un numero intero

![](/images/Method.png) **crossSections(****)**

**Description**: Ottiene sezioni trasversali della rete attraverso diversi piani

**Returns**:

![](/images/Method.png) **difference(***Mesh***)**

**Description**: Differenze tra questo oggetto e l'oggetto mesh dato.

**Returns**:

![](/images/Method.png) **fillupHoles(****)**

**Description**: Riempie i fori

**Returns**:

![](/images/Method.png) **fixDeformations(****)**

**Description**: Ripara le faccette deformate

**Returns**:

![](/images/Method.png) **fixDegenerations(****)**

**Description**: Rimuove le sfaccettature degenerate

**Returns**:

![](/images/Method.png) **fixIndices(****)**

**Description**: Ripara eventuali indici non validi

**Returns**:

![](/images/Method.png) **fixSelfIntersections(****)**

**Description**: Ripara le autointersezioni

**Returns**:

![](/images/Method.png) **flipNormals(****)**

**Description**: Inverte le normali delle mesh

**Returns**:

![](/images/Method.png) **foraminate(****)**

**Description**: Ottiene un elenco di indici delle faccette e dei punti di intersezione

**Returns**:

![](/images/Method.png) **getPlanes(****)**

**Description**: Ottiene tutti i piani della rete come segmento. Nel caso peggiore ogni triangolo può essere considerato come unico piano se nessuno dei suoi vicini è complanare.

**Returns**:

![](/images/Method.png) **getSegment(***integer***)**

**Description**: Ottiene un elenco di indici delle faccette che descrivono un segmento

**Returns**:

![](/images/Method.png) **getSeparateComponents(****)**

**Description**: Restituisce una lista contenente le diverse componenti (aree separate) della rete come mesh separate

**Returns**: una lista

![](/images/Method.png) **harmonizeNormals(****)**

**Description**: Regola le sfaccettature orientate male

**Returns**:

![](/images/Method.png) **hasNonManifolds(****)**

**Description**: Controlla se la mesh contiene non-manifolds

**Returns**: un booleano

![](/images/Method.png) **hasNonUniformOrientedFacets(****)**

**Description**: Verifica se la rete ha dellle sfaccettature con orientamento incoerente

**Returns**:

![](/images/Method.png) **hasSelfIntersections(****)**

**Description**: Controlla se la mesh si interseca

**Returns**:

![](/images/Method.png) **inner(****)**

**Description**: Ottiene la parte interna all'intersezione

**Returns**:

![](/images/Method.png) **insertVertex(***Vertex***)**

**Description**: Inserisce un vertice in una sfaccettatura

**Returns**:

![](/images/Method.png) **intersect(***Mesh***)**

**Description**: Intersezione tra questo oggetto e l'oggetto mesh dato.

**Returns**:

![](/images/Method.png) **isSolid(****)**

**Description**: Controlla se la mesh è un solido

**Returns**:

![](/images/Method.png) **meshFromSegment(****)**

**Description**: Creare una mesh da un segmento

**Returns**:

![](/images/Method.png) **nearestFacetOnRay(***tuple, tuple***)**

**Description**: Get the index and intersection point of the nearest facet to a ray. The first parameter is a tuple of three floats the base point of the ray, the second parameter is ut uple of three floats for the direction. The result is a dictionary with an index and the intersection point or an empty dictionary if there is no intersection.

**Returns**: a dictionary

![](/images/Method.png) **offset(***float***)**

**Description**: Sposta il punto lungo le sue normali

**Returns**:

![](/images/Method.png) **offsetSpecial(***float***)**

**Description**: Sposta il punto lungo le sue normali

**Returns**:

![](/images/Method.png) **optimizeEdges(****)**

**Description**: Ottimizza i bordi per ottenere delle faccette migliori

**Returns**:

![](/images/Method.png) **optimizeTopology(****)**

**Description**: Ottimizza i bordi per ottenere delle faccette migliori

**Returns**:

![](/images/Method.png) **outer(****)**

**Description**: Ottiene la parte al di fuori l'intersezione

**Returns**:

![](/images/Method.png) **printInfo(****)**

**Description**: Ottiene informazioni dettagliate sulla mesh

**Returns**:

![](/images/Method.png) **read(****)**

**Description**: Read in a mesh object from file.

**Returns**:

![](/images/Method.png) **refine(****)**

**Description**: Refine the mesh

**Returns**:

![](/images/Method.png) **removeComponents(***integer***)**

**Description**: Remove components with less or equal to number of given facets

**Returns**:

![](/images/Method.png) **removeDuplicatedFacets(****)**

**Description**: Remove duplicated facets

**Returns**:

![](/images/Method.png) **removeDuplicatedPoints(****)**

**Description**: Remove duplicated points

**Returns**:

![](/images/Method.png) **removeFacets(***list***)**

**Description**: Remove a list of facet indices from the mesh

**Returns**:

![](/images/Method.png) **removeFoldsOnSurface(****)**

**Description**: Remove folds on surfaces

**Returns**:

![](/images/Method.png) **removeNonManifolds(****)**

**Description**: Remove non-manifolds

**Returns**:

![](/images/Method.png) **rotate(****)**

**Description**: Apply a rotation to the mesh

**Returns**:

![](/images/Method.png) **setPoint(***int, Vector***)**

**Description**: Sets the point at index.

**Returns**:

![](/images/Method.png) **smooth(****)**

**Description**: Smooth the mesh

**Returns**:

![](/images/Method.png) **snapVertex(****)**

**Description**: Insert a new facet at the border

**Returns**:

![](/images/Method.png) **splitEdge(****)**

**Description**: Split edge

**Returns**:

![](/images/Method.png) **splitEdges(****)**

**Description**: Split all edges

**Returns**:

![](/images/Method.png) **splitFacet(****)**

**Description**: Split facet

**Returns**:

![](/images/Method.png) **swapEdge(****)**

**Description**: Swap the common edge with the neighbor

**Returns**:

![](/images/Method.png) **transform(****)**

**Description**: Apply a transformation to the mesh

**Returns**:

![](/images/Method.png) **transformToEigen(****)**

**Description**: Transform the mesh to its eigenbase

**Returns**:

![](/images/Method.png) **translate(***Vector***)**

**Description**: Apply a translation to the mesh

**Returns**:

![](/images/Method.png) **unite(***Mesh***)**

**Description**: Union of this and the given mesh object.

**Returns**:

![](/images/Method.png) **write(***string***)**

**Description**: Write the mesh object into file.

**Returns**:

![](/images/Method.png) **writeInventor(****)**

**Description**: Write the mesh in OpenInventor format to a string.

**Returns**: a string

![](/images/Property.png) **Area**

**Returns**: the area of the mesh object.

![](/images/Property.png) **CountEdges**

**Returns**: the number of vertices of the mesh object.

![](/images/Property.png) **CountFacets**

**Returns**: the number of facets of the mesh object.

![](/images/Property.png) **CountPoints**

**Returns**: the number of points of the mesh object.

![](/images/Property.png) **Facets**

**Returns**: A collection of facets; With this attribute it is possible to get access to the facets of the mesh: for p in mesh.Facets: print f. Facet.Points is a list of coordinate-tupels for the vertices. Facet.PointIndices is a list of indice for the vertices of the facet. WARNING! store Facets in a local variable as it is generated on the fly, each time it is accessed.

![](/images/Property.png) **Points**

**Returns**: A collection of the mesh points; With this attribute it is possible to get access to the points of the mesh: for p in mesh.Points: print p.x, p.y, p.z, p.Index.WARNING! store Points in a local variable as it is generated on the fly, each time it is accessed.

![](/images/Property.png) **Topology**

**Returns**: the points and face indices as tuple. Topology[0] is a list of all vertices. Each being a tuple of 3 coordinates. Topology[1] is a list of all polygons. Each being a list of vertex indice into Topology[0] WARNING! store Topology in a local variable as it is generated on the fly, each time it is accessed.

![](/images/Property.png) **Volume**

**Returns**: the volume of the mesh object.

![](/images/Property.png) **BoundBox**

**Returns**: the BoundBox of the object

![](/images/Property.png) **Matrix**

**Returns**: the current transformation of the object as matrix

![](/images/Property.png) **Placement**

**Returns**: the current transformation of the object as placement

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_API/it&oldid=1187595>"