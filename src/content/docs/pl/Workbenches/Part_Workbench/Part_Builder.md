---
title: Część Konstruktor kształtu
---
|  |
| --- |
| Część: Konstruktor |
| Lokalizacja w menu |
| Część → Konstruktor kształtu ... |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Utwórz geometrie pierwotne](/Part_CreatePrimitives/pl "Part CreatePrimitives/pl") |
|  |

## Opis

Narzędzie to służy do tworzenia bardziej złożonych kształtów z różnych geometrycznych prymitywów parametrycznych.

## Użycie

Narzędzie to może tworzyć następujące obiekty:

### Krawędź z dwóch wierzchołków

1. Wybierz dwa wierzchołki
2. Kliknij na przycisk Utwórz

![](/images/Edge_from_verts-1.gif)

### Polilinia z krawędzi

1. Wybierz zestaw sąsiadujących krawędzi w oknie [widoku 3D](/3D_view/pl "3D view/pl").
2. kliknij na przycisk Utwórz

![](/images/Wire_from_edges-1.gif)

### Ściana z wierzchołków

1. Wybierz wierzchołki wyznaczające granice ściany w oknie [widoku 3D](/3D_view/pl "3D view/pl").
2. Wybierz czy ściana ma być planarna
3. Kliknij na przycisk Utwórz
4. Obiekt zostanie utworzony w oknie [widoku 3D](/3D_view/pl "3D view/pl") i zostanie umieszczony na liście [widoku drzewa](/Tree_view/pl "Tree view/pl").

### Ściana z krawędzi

1. Wybierz zamknięty zbiór krawędzi wyznaczających granice ściany oknie [widoku 3D](/3D_view/pl "3D view/pl").
2. Wybierz czy ściana ma być planarna
3. Kliknij na przycisk Utwórz
4. Obiekt zostanie utworzony w oknie [widoku 3D](/3D_view/pl "3D view/pl") i zostanie umieszczony na liście [widoku drzewa](/Tree_view/pl "Tree view/pl").

### Powłoka ze ściany

1. Wybierz ściany w oknie [widoku 3D](/3D_view/pl "3D view/pl"),
2. Wybierz czy kształt powinien być udoskonalony,
3. Wybierz czy wszystkie ściany mają być zawarte w powłoce,
4. Kliknij na przycisk Utwórz,
5. Obiekt zostanie utworzony w oknie [widoku 3D](/3D_view/pl "3D view/pl") i zostanie umieszczony w [widoku drzewa](/Tree_view/pl "Tree view/pl").

### Bryła z powłoki

1. Wybierz czy kształt ma być udoskonalony.
2. Kliknij na przycisk Utwórz,
3. Obiekt zostanie utworzony w oknie [widoku 3D](/3D_view/pl "3D view/pl") i zostanie umieszczony w [widoku drzewa](/Tree_view/pl "Tree view/pl").

## Uwagi

Jednym z możliwych rozwiązań może być przepływ pracy:

* Narysuj szkielet modelu o wybranym kształcie za pomocą narzędzi ![](/images/Workbench_Draft.svg) [Środowiska pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") *(np. linii i linii łamanej)*.
* Utwórz wszystkie powierzchnie z powierzchnią od krawędzi.
* Utwórz powłokę na powierzchni.
* Utwórz bryłę z powłoki.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Builder/pl&oldid=1281381>"