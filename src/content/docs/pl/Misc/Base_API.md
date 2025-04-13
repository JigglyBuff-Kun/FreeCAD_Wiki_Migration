---
title: Skrypty bazowe
---
:::caution
(Październik 2019)Nie edytuj tych stron. Informacje są niekompletne i nieaktualne. Najnowsze API można znaleźć wautomatycznie generowana dokumentacja API, lub wygenerować dokumentację samodzielnie, śledząc dokumentDokumentacja źródłowa.
:::

Moduł Base jest zawarty wewnątrz modułu FreeCAD i zawiera konstruktory dla różnych typów obiektów często używanych w programie FreeCAD.

![](/images/Class.png) **BoundBox(***[Xmin,Ymin,Zmin,Xmax,Ymax,Zmax]***)**

![](/images/Class.png) **BoundBox(***Tuple, Tuple***)**

![](/images/Class.png) **BoundBox(***Vector, Vector***)**

**Description**:
Tworzy ramkę okalającą.
Ramka ograniczająca to sześcian prostokątny, który jest sposobem na zdefiniowanie zewnętrznych granic. Otrzymujesz ramkę ograniczającą z wielu typów 3D. Jest on często używany do sprawdzenia, czy obiekt 3D leży w zasięgu innego obiektu. Sprawdzanie najpierw czy nie ma żadnych przeszkód może zaoszczędzić dużo czasu obliczeniowego!

![](/images/Class.png) **Matrix(****)**

**Description**: Tworzy [Macierz](/Matrix_API/pl "Matrix API/pl") 4x4, która może być użyta do zastosowania przekształceń do obiektów.

![](/images/Class.png) **Vector(****)**

![](/images/Class.png) **Vector(***x, y, z***)**

**Description**: Tworzy [Wektor](/Vector_API/pl "Vector API/pl") 3D FreeCAD, reprezentujący punkt 3D lub kierunek.

![](/images/Class.png) **Placement(****)**

**Description**: Tworzy [Umiejscowienie](/Placement_API/pl "Placement API/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Base_API/pl&oldid=989801>"