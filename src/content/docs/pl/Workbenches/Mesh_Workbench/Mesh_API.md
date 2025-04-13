---
title: Skrypty siatek
---
:::caution
(listopad 2018 r.)Informacje te mogą być niekompletne i nieaktualne. Najnowsze API - patrzdokumentacja API generowana automatycznie.
:::

Obiektami Siatek można manipulować poprzez dodawanie nowych elementów, usuwanie elementów, importowanie z pliku STL, przekształcanie siatki i wiele więcej. Dla pełnego przeglądu tego, co można zrobić zobacz także dokumentację środowiska pracy [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl"). Obiekt siatki nie może być dodany bezpośrednio do istniejącego dokumentu. Dlatego dokument musi tworzyć obiekt z klasą właściwości, która obsługuje siatki. Przykład:

```
m = Mesh.Mesh()
... # Operowanie siatką
d = FreeCAD.activeDocument() # Uzyskaj dostęp do aktywnego dokumentu
f = d.addObject("Mesh::Feature", "Mesh") # Utwórz cechę siatki
f.Mesh = m # Przypisanie obiektu siatki do właściwości wewnętrznej
d.recompute()

```

![](/images/Method.png) **addFacet(***Facet***)**

**Description**: Dodaje wielokąt do siatki

**Returns**:

![](/images/Method.png) **addFacets(***list***)**

**Description**: Dodaje listę wielokątów do siatki

**Returns**:

![](/images/Method.png) **addMesh(***Mesh***)**

**Description**: Łączy tą siatkę z inną siatką.

**Returns**:

![](/images/Method.png) **clear(****)**

**Description**: Oczyszcza siatkę

**Returns**:

![](/images/Method.png) **coarsen(****)**

**Description**: Zmniejsza gęstość siatki

**Returns**:

![](/images/Method.png) **collapseEdge(***Edge***)**

**Description**: Usuwa krawędź i oba wielokąt, które dzielą tę krawędź

**Returns**:

![](/images/Method.png) **collapseFacet(***Facet***)**

**Description**: Usuwa wielokąt z siatki

**Returns**:

![](/images/Method.png) **collapseFacets(***list***)**

**Description**: Usuwa listę wielokątów z siatki

**Returns**:

![](/images/Method.png) **copy(****)**

**Description**: Tworzy kopię siatki

**Returns**: obiekt siatki

![](/images/Method.png) **countComponents(****)**

**Description**: Uzyskaj liczbę obszarów niezależnych topologicznie

**Returns**: integer

![](/images/Method.png) **countNonUniformOrientedFacets(****)**

**Description**: Uzyskaj liczbę nieprawidłowo zorientowanych elementów.

**Returns**: integer

![](/images/Method.png) **countSegments(****)**

**Description**: Podaj liczbę segmentów, która może być również równa 0

**Returns**: integer

![](/images/Method.png) **crossSections(****)**

**Description**: Uzyskaj przekroje siatki poprzez różne płaszczyzny

**Returns**:

![](/images/Method.png) **difference(***Mesh***)**

**Description**: Różnica pomiędzy bieżącym a podanym obiektem siatki.

**Returns**:

![](/images/Method.png) **fillupHoles(****)**

**Description**: Otwory do wypełniania

**Returns**:

![](/images/Method.png) **fixDeformations(****)**

**Description**: Napraw zdeformowane wielokąty

**Returns**:

![](/images/Method.png) **fixDegenerations(****)**

**Description**: Usuń zniekształcone wielokąty

**Returns**:

![](/images/Method.png) **fixIndices(****)**

**Description**: Napraw wszystkie nieprawidłowe indeksy

**Returns**:

![](/images/Method.png) **fixSelfIntersections(****)**

**Description**: Napraw samoprzecięcia

**Returns**:

![](/images/Method.png) **flipNormals(****)**

**Description**: Odwróć wektory normalne

**Returns**:

![](/images/Method.png) **foraminate(****)**

**Description**: Uzyskaj listę indeksów wielokątów i punktów przecięcia

**Returns**:

![](/images/Method.png) **getPlanes(****)**

**Description**: Pobierz wszystkie płaszczyzny siatki jako segmenty. W najgorszym przypadku każdy trójkąt może być traktowany jako pojedyncza płaszczyzna, jeśli żaden z jego sąsiadów nie jest współpłaszczyznowy.

**Returns**:

![](/images/Method.png) **getSegment(***Uzyskaj listę indeksów wielokątów opisujących dany segment***)**

**Description**:

**Returns**: {{{4}}}

![](/images/Method.png) **getSeparateComponents(****)**

**Description**: Zwraca listę zawierającą różne komponenty (wydzielone obszary) siatki jako oddzielne siatki.

**Returns**: lista

![](/images/Method.png) **harmonizeNormals(****)**

**Description**: Dostosuj niewłaściwie zorientowane wielokąty

**Returns**:

![](/images/Method.png) **hasNonManifolds(****)**

**Description**: Sprawdź, czy siatka ma elementy typu non-manifolds

**Returns**: boolean

![](/images/Method.png) **hasNonUniformOrientedFacets(****)**

**Description**: Sprawdza czy siatka ma wielokąty o niespójnej orientacji

**Returns**:

![](/images/Method.png) **hasSelfIntersections(****)**

**Description**: Sprawdź, czy siatka przecina samą siebie

**Returns**:

![](/images/Method.png) **inner(****)**

**Description**: Pobierz część wewnątrz przecięcia

**Returns**:

![](/images/Method.png) **insertVertex(***Vertex***)**

**Description**: Wstawia wierzchołek do wielokąta

**Returns**:

![](/images/Method.png) **intersect(***Mesh***)**

**Description**: Przecięcie tego i podanego obiektu siatki

**Returns**:

![](/images/Method.png) **isSolid(****)**

**Description**: Sprawdź, czy siatka jest bryłą

**Returns**:

![](/images/Method.png) **meshFromSegment(****)**

**Description**: Tworzenie siatki z segmentu

**Returns**:

![](/images/Method.png) **nearestFacetOnRay(***tuple, tuple***)**

**Description**: Uzyskaj indeks i punkt przecięcia najbliższej półprostej. Pierwszym parametrem jest krotka trzech zmiennych określająca punkt bazowy półprostej, drugim parametrem jest krotka trzech zmiennych określająca kierunek. Wynikiem jest słownik z indeksem i punktem przecięcia lub pusty słownik, jeśli nie ma przecięcia

**Returns**: dictionary

![](/images/Method.png) **offset(***float***)**

**Description**: Przesuń punkt wzdłuż ich normalnych

**Returns**:

![](/images/Method.png) **offsetSpecial(***float***)**

**Description**: Przesuń punkt wzdłuż ich normalnych

**Returns**:

![](/images/Method.png) **optimizeEdges(****)**

**Description**: Zoptymalizuj krawędzie, aby uzyskać ładniejsze wielokąty

**Returns**:

![](/images/Method.png) **optimizeTopology(****)**

**Description**: Zoptymalizuj krawędzie, aby uzyskać ładniejsze wielokąty

**Returns**:

![](/images/Method.png) **outer(****)**

**Description**: Pobierz część poza przecięciem

**Returns**:

![](/images/Method.png) **printInfo(****)**

**Description**: Uzyskaj szczegółowe informacje na temat siatki

**Returns**:

![](/images/Method.png) **read(****)**

**Description**: Wczytaj obiekt siatki z pliku.

**Returns**:

![](/images/Method.png) **refine(****)**

**Description**: Dopracuj siatkę

**Returns**:

![](/images/Method.png) **removeComponents(***integer***)**

**Description**: Usuń elementy o liczbie wielokątów mniejszej lub równej podanej liczbie

**Returns**:

![](/images/Method.png) **removeDuplicatedFacets(****)**

**Description**: Usuń zduplikowane wielokąty

**Returns**:

![](/images/Method.png) **removeDuplicatedPoints(****)**

**Description**: Usuń zduplikowane punkty

**Returns**:

![](/images/Method.png) **removeFacets(***list***)**

**Description**: Usuń listę indeksów wielokątów z siatki

**Returns**:

![](/images/Method.png) **removeFoldsOnSurface(****)**

**Description**: Usunąć fałdy na powierzchniach

**Returns**:

![](/images/Method.png) **removeNonManifolds(****)**

**Description**: Usuń elementy typu non-manifolds

**Returns**:

![](/images/Method.png) **rotate(****)**

**Description**: Zastosuj obrót do siatki

**Returns**:

![](/images/Method.png) **setPoint(***int, Vector***)**

**Description**: Ustawia punkt o indeksie

**Returns**:

![](/images/Method.png) **smooth(****)**

**Description**: Wygładzić siatkę

**Returns**:

![](/images/Method.png) **snapVertex(****)**

**Description**: Wstaw nowy wielokąt na granicy

**Returns**:

![](/images/Method.png) **splitEdge(****)**

**Description**: Podział krawędzi

**Returns**:

![](/images/Method.png) **splitEdges(****)**

**Description**: Podział wszystkich krawędzi

**Returns**:

![](/images/Method.png) **splitFacet(****)**

**Description**: Podział wielokątów

**Returns**:

![](/images/Method.png) **swapEdge(****)**

**Description**: Zamień wspólną krawędź z sąsiadem

**Returns**:

![](/images/Method.png) **transform(****)**

**Description**: Zastosuj transformację do siatki

**Returns**:

![](/images/Method.png) **transformToEigen(****)**

**Description**: Przekształć siatkę w jej bazę własną

**Returns**:

![](/images/Method.png) **translate(***Vector***)**

**Description**: Zastosuj przesunięcie do siatki

**Returns**:

![](/images/Method.png) **unite(***Mesh***)**

**Description**: Połączenie pomiędzy obecnym a podanym obiektem siatki

**Returns**:

![](/images/Method.png) **write(***string***)**

**Description**: Zapisz obiekt siatki do pliku

**Returns**:

![](/images/Method.png) **writeInventor(****)**

**Description**: Zapisz siatkę w formacie OpenInventor do łańcucha znaków

**Returns**: a string

![](/images/Property.png) **Area**

**Returns**: Obszar obiektu siatki

![](/images/Property.png) **CountEdges**

**Returns**: Liczba wierzchołków obiektu siatki

![](/images/Property.png) **CountFacets**

**Returns**: Liczba wielokątów obiektu siatki

![](/images/Property.png) **CountPoints**

**Returns**: Liczba punktów obiektu siatki

![](/images/Property.png) **Facets**

**Returns**: Zbiór wielokątów. Za pomocą tego atrybutu można uzyskać dostęp do wielokątów siatki: for f in mesh.Facets: print f. Facet.Points jest listą krotek współrzędnych dla wierzchołków. Facet.PointIndices jest listą indeksów dla wierzchołków wielokątów. UWAGA! Przechowuj Wielokąty w zmiennej lokalnej, ponieważ jest ona generowana w locie, za każdym razem gdy jest dostępna

![](/images/Property.png) **Points**

**Returns**: Kolekcja punktów siatki; Dzięki temu atrybutowi można uzyskać dostęp do punktów siatki: for p in mesh.Points: print p.x, p.y, p.z,p.Index.UWAGA! przechowuj Punkty w zmiennej lokalnej, ponieważ jest ona generowana w locie, przy każdym dostępie

![](/images/Property.png) **Topology**

**Returns**: Punkty i indeksy wierzchołków jako krotki. Topology[0] jest listą wszystkich wierzchołków. Każdy z nich jest krotką 3 współrzędnych. Topology[1] jest listą wszystkich wielokątów. Każdy z nich jest listą indeksów wierzchołków w Topology[0] UWAGA! przechowuj Topology w zmiennej lokalnej, ponieważ jest ona generowana w locie, za każdym razem, gdy jest dostępna.

![](/images/Property.png) **Volume**

**Returns**: objętość obiektu siatki

![](/images/Property.png) **BoundBox**

**Returns**: Ramka ograniczająca obiektu

![](/images/Property.png) **Matrix**

**Returns**: Aktualna transformacja obiektu jako macierz

![](/images/Property.png) **Placement**

**Returns**: Aktualne przekształcenie obiektu jako umieszczenie

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_API/pl&oldid=1092365>"