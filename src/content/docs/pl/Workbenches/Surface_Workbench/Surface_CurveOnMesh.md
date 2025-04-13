---
title: Powierzchnia 3D Krzywa na siatce
---
|  |
| --- |
| Powierzchnia 3D: Krzywa na siatce |
| Lokalizacja w menu |
| Surface → Curve on mesh |
| Środowisko pracy |
| [Powierzchnia 3D](/Surface_Workbench/pl "Surface Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie ![](/images/Surface_CurveOnMesh.svg) **Krzywa na siatce** tworzy przybliżone segmenty linii krzywej na wybranej [siatce](/Mesh_Workbench/pl "Mesh Workbench/pl").

Jeśli obiekt nie jest [siatką](/Mesh/pl "Mesh/pl"), ale parametrycznym [kształtem](/Shape/pl "Shape/pl") lub powierzchnią, musi zostać najpierw przekonwertowany na siatkę przy użyciu ![](/images/Mesh_FromPartShape.svg) [Siatka z kształtu środowiska Część](/Mesh_FromPartShape/pl "Mesh FromPartShape/pl").

Te krawędzie utworzone na wierzchu siatki mogą być dalej używane do ponownego tworzenia powierzchni w sposób parametryczny za pomocą narzędzi takich jak ![](/images/Surface_GeomFillSurface.svg) [Wypełnianie krzywych granicznych](/Surface_GeomFillSurface/pl "Surface GeomFillSurface/pl") oraz ![](/images/Surface_Sections.svg) [Przekrój powierzchni](/Surface_Sections/pl "Surface Sections/pl").

![](/images/Surface_CurveOnMesh_mesh_example.png) ![](/images/Surface_CurveOnMesh_example.png)

![](/images/Surface_CurveOnMesh_surface_example.png)

Powyżej po lewej: obiekt siatki z wybranymi punktami na powierzchni. Powyżej po prawej: linie utworzone przez wybranie kilku punktów na siatce. Na dole po lewej: parametryczna powierzchnia zrekonstruowana z przybliżeń odcinków przy użyciu narzędzia [Przekrój powierzchni](/Surface_Sections/pl "Surface Sections/pl").

## Użycie

1. Upewnij się, że masz [obiekt siatki](/Mesh "Mesh"). Można go utworzyć za pomocą środowiska pracy ![](/images/Workbench_Mesh.svg) [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") lub importując plik siatki typu STL, [OBJ](/Arch_OBJ/pl "Arch OBJ/pl") lub [DAE](/Arch_DAE/pl "Arch DAE/pl"). Jeśli używany jest obiekt bryłowy lub typ pliku bryłowego *(STEP)*, można go przekonwertować na siatkę za pomocą narzędzia ![](/images/Mesh_FromPartShape.svg) [Siatka z kształtu środowiska Część](/Mesh_FromPartShape/pl "Mesh FromPartShape/pl").
2. Naciśnij ![](/images/Surface_CurveOnMesh.svg) Krzywa na siatce.
3. Naciśnij Start.
4. Używając wskaźnika myszy, wybierz punkty na powierzchni siatki w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Wybierz tyle punktów, ile potrzeba do narysowania gładkiej linii podglądu.
5. Po dodaniu wystarczającej liczby punktów, kliknij prawym przyciskiem myszy w oknie [widoku 3D](/3D_view/pl "3D view/pl"), aby otworzyć menu kontekstowe i wybierz **Utwórz**. W zależności od tego, jak gładka jest oryginalna siatka, w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") zostanie utworzony jeden lub wiele odcinków linii.
6. Powtórz sekwencję Start → Wskaż → **Utwórz**, aby dodać więcej aproksymowanych odcinków krzywych.
7. Nowy odcinek zostanie utworzony i pojawi się w [widoku drzewa](/Tree_view/pl "Tree view/pl"), natychmiast po wybraniu **Utwórz**. [Panel zadań](/Task_panel/pl "Task panel/pl") pozostanie aktywny.
8. Naciśnij Zamknij, aby zamknąć [panel zadań](/Task_panel/pl "Task panel/pl") i całkowicie zakończyć polecenie.

Po naciśnięciu Start, menu kontekstowe *(prawy przycisk myszy)* w oknie [widoku 3D](/3D_view/pl "3D view/pl") pokazuje różne opcje obok opcji **Utwórz**.

* **Zamknij polilinię**: jeśli wybrano co najmniej trzy punkty, opcja ta będzie dostępna, aby połączyć ostatni punkt z pierwszym za pomocą linii.
* **Wyczyść**: usunie wstępnie wybrane punkty siatki i pozwoli na wybranie nowych.
* **Anuluj**: usunie zaznaczone punkty i zatrzyma operację zaznaczania. Naciśnij Start ponownie, aby ponownie wybrać punkty.

## Opcje

*(Ta informacja musi zostać potwierdzona).*

Sekcja **Polilinia**:

* **Tolerancja przyciągania do wierzchołków**: wartość domyślna to `10 px`. Wskazuje minimalną odległość między jednym punktem a drugim podczas wybierania za pomocą kursora.
* **Próg rozdzielenia**: wartość domyślna to `45°`; wskazuje odchylenie kątowe od jednego punktu siatki do innego punktu niezbędne do utworzenia nowego odcinka krzywej zamiast przedłużania poprzedniego odcinka.

**Aproksymacja krzywych**, jeśli opcja jest zaznaczona ![](/images/CheckBoxTrue.svg) , zostaną utworzone obiekty odcinków krzywej, w przeciwnym razie zostaną utworzone obiekty prostych linii *(polilinii)*.

* **Tolerancja siatki**: wartość domyślna to `0.2`. Jest to parametr, który bierze pod uwagę niedoskonałości siatki; im mniejsza liczba, tym siatka będzie uważana za bardziej precyzyjną, szczególnie jeśli jest to bardzo drobna siatka.
* **Ciągłość**: wartość domyślna to `C2`. Określa ciągłość splajnu. Może to być `C0` *(dotykający)*, `C1` *(styczna)*, `C2` *(krzywizna)* i `C3` *(krzywizna przyspieszenia)*.
* **Maksymalny stopień zakrzywienia**: wartość domyślna to `5`. Określa maksymalny stopień splajnu do aproksymacji powierzchni. Może przyjmować wartość od `1` do `8`.

## Właściwości

Jeśli pole ![](/images/CheckBoxFalse.svg) Przybliżenie splajnu nie jest zaznaczone, narzędzie **Krzywa na siatce** tworzy podstawową [cechę](/Part_Feature/pl "Part Feature/pl") środowiska Część.

Jeśli pole ![](/images/CheckBoxTrue.svg) Przybliżenie splajnu jest zaznaczone, narzędzie **Krzywa na siatce** tworzy ![](/images/Part_Spline.svg) **Part Spline** *(klasa`Part::Spline`)*, który jest pochodną podstawowej [cechy](/Part_Feature/pl "Part Feature/pl") środowiska Część *(klasa`Part::Feature`)*, dlatego dzieli wszystkie właściwości tej ostatniej.

Oprócz właściwości opisanych na stronie [Cecha części](/Part_Feature/pl "Part Feature/pl"), krzywa pochodząca ze środowiska Projekt części posiada następujące właściwości w [edytorze właściwości](/Property_editor/pl "Property editor/pl").

### Widok

Podstawa

* WIDOK**Punkty kontrolne** (`Bool`): wartość domyślna to `FAŁSZ`, Jeśli ustawiono `PRAWDA`, wyświetlona zostanie nakładka z punktami kontrolnymi krzywej.

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_CurveOnMesh/pl&oldid=1358119>"