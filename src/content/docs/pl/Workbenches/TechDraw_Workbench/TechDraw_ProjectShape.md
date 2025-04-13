---
title: Rysunek Techniczny Rzutowanie kształtów
---
|  |
| --- |
| Rysunek Techniczny: Rzutowanie kształtów |
| Lokalizacja w menu |
| Rysunek Techniczny → Widoki → Rzutowanie kształtów ... |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.20 |
| Zobacz także |
| [Widok 2D kształtu](/Draft_Shape2DView/pl "Draft Shape2DView/pl") |
|  |

## Opis

Narzędzie **Rzutowanie kształtów** tworzy rzuty kształtów. Rzuty tworzone są w oknie [widoku 3D](/3D_view/pl "3D view/pl"), a nie na [stronie rysunku technicznego](/TechDraw_PageDefault/pl "TechDraw PageDefault/pl").

![](/images/ProjectShape1_it.png)

## Użycie

1. Opcjonalnie obróć [3D view](/3D_view/pl "3D view/pl"). Obiekty będą rzutowane na płaszczyznę równoległą do ekranu, tj. wzdłuż kierunku kamery widoku 3D, który jest używany jako domyślna właściwość DANE**kierunek**.
2. Wybierz jeden lub więcej obiektów. Dla każdego obiektu zostanie utworzona osobny rzut.
3. Istnieje kilka sposobów na wywołanie narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_ProjectShape.svg) **Rzutowanie kształtów ...**.
   * Wybierz z menu opcję **Rysunek Techniczny → Widoki → ![](/images/TechDraw_ProjectShape.svg) Rzutowanie kształtów ...**.
4. Otwiera się panel zadań **Rzutowanie kształtów**. Zobacz też sekcję [właściwości](#Właściwości).
5. Ustawić żądane opcje.
6. Wybrane opcje nie powinny skutkować pustym rzutem, ponieważ spowodują błąd. Na przykład dla obiektu posiadającego tylko ostre krawędzie, takiego jak [prostopadłościan](/Part_Box/pl "Part Box/pl"), należy zaznaczyć opcję **Widoczne ostre krawędzie** i/lub **Ukryte ostre krawędzie**.
7. Naciśnij przycisk OK.
8. Rzut zostaje umieszczony na płaszczyźnie XY.
9. Opcjonalnie zmień właściwość rzutu DANE**Umiejscowienie** i / lub DANE**Kierunek**.

## Właściwości

Obiekt **Rzutowanie kształtów** wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Rzutowanie

* DANE**Źródło** (`Link`): Kształt, który ma być rzutowany.
* DANE**Kierunek** (`Vector`): Kierunek rzutowania. Jest to wektor normalny płaszczyzny projekcji.
* DANE**VCompound** (`Bool`): Jeśli opcja ma wartość `PRAWDA`, to widoczne ostre krawędzie są pokazywane. Przykład: wszystkie krawędzie [prostopadłościanu](/Part_Box/pl "Part Box/pl").
* DANE**Rg1 Line VCompound** (`Bool`): Jeśli opcja ma wartość `PRAWDA`, widoczne gładkie krawędzie są pokazywane. Przykład: krawędzie między zaokrągleniem a sąsiednimi ścianami.
* DANE**Rg NLine VCompound** (`Bool`): Jeśli opcja ma wartość `PRAWDA`, pokazane są widoczne krawędzie szyte. Przykład: szew ściany cylindrycznej 360°.
* DANE**Out Line VCompound** (`Bool`): Jeśli opcja ma wartość `PRAWDA`, pokazywane są widoczne krawędzie konturowe *(które nie są ostre)*. Przykład: widok boczny [walca](/Part_Cylinder "Part Cylinder") ma dwie takie krawędzie.
* DANE**Iso Line VCompound** (`Bool`): Jeśli opcja ma wartość `PRAWDA`, widoczne izoparametry są wyświetlane. Obecnie nie działa.
* DANE**HCompound** (`Bool`): Jeśli opcja ma wartość `PRAWDA`, pokazywane są ukryte ostre krawędzie.
* DANE**Rg1 Line HCompound** (`Bool`): Jeśli opcja ma wartość `PRAWDA`, pokazane są ukryte gładkie krawędzie.
* DANE**Rg NLine HCompound** (`Bool`): Jeśli opcja ma wartość `PRAWDA`, pokazane są ukryte krawędzie szyte.
* DANE**Out Line HCompound** (`Bool`): Jeśli opcja ma wartość `PRAWDA`, pokazywane są ukryte krawędzie konturowe.
* DANE**Iso Line HCompound** (`Bool`): Jeśli opcja ma wartość `PRAWDA`, pokazywane są ukryte izoparametry. Obecnie nie działa.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ProjectShape/pl&oldid=1490182>"