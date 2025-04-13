---
title: Rysunek Roboczy Przyciąganie
---

## Opis

W środowisku pracy ![](/images/Workbench_Draft.svg) [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") i ![](/images/Workbench_Arch.svg) [BIM](/BIM_Workbench/pl "BIM Workbench/pl") możesz tworzyć geometrię przez wybieranie punktów w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub przez wprowadzanie współrzędnych w poleceniach [panelu zadań](/Task_panel/pl "Task panel/pl"). Innym sposobem dokładnego wybierania punktów jest przyciąganie. Przyciąganie pozwala na wybranie dokładnych punktów geometrycznych na lub zdefiniowanych przez istniejące obiekty lub siatkę. Można na przykład przyciągnąć do punktu końcowego prostej, środka okręgu lub przecięcia dwóch krawędzi.

Przyciąganie jest dostępne z większością poleceń środowisk [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") i [BIM](/BIM_Workbench/pl "BIM Workbench/pl").

![](/images/Draft_Snap_Endpoint_example.png)

Przyciąganie do punktu końcowego krawędzi

## Narzędzia przyciągania

Narzędzia te są dostępne na pasku narzędzi _Rysunek Roboczy - Przyciąganie_ oraz w [Widżet przyciągania](/Draft_snap_widget/pl "Draft snap widget/pl") środowiska Rysunek Roboczy.

Zauważ, że koliste krawędzie nie muszą być pełnymi okręgami.

- ![](/images/Draft_Snap_Lock.svg) [Zablokuj przyciąganie](/Draft_Snap_Lock/pl "Draft Snap Lock/pl"): przełącza globalnie przyciąganie obiektów na włączone lub wyłączone.

- ![](/images/Draft_Snap_Endpoint.svg) [Przyciągnij do punktu końcowego](/Draft_Snap_Endpoint/pl "Draft Snap Endpoint/pl"): Przyciąga do punktów końcowych odcinków linii, łuku i krzywej złożonej.

- ![](/images/Draft_Snap_Midpoint.svg) [Przyciągnij do punktu środkowego](/Draft_Snap_Midpoint/pl "Draft Snap Midpoint/pl"): Przyciąga do punktu środkowego krawędzi.

- ![](/images/Draft_Snap_Center.svg) [Przyciągnij do środka](/Draft_Snap_Center/pl "Draft Snap Center/pl"): przyciąga do punktu środkowego powierzchni i krawędzi kołowych, a także do punktu DANE**Umiejscowienia** [pośredniej płaszczyzny roboczej](/Draft_WorkingPlaneProxy/pl "Draft WorkingPlaneProxy/pl") i [części budowli](/Arch_BuildingPart/pl "Arch BuildingPart/pl").

- ![](/images/Draft_Snap_Angle.svg) [Przyciągnij do kąta](/Draft_Snap_Angle/pl "Draft Snap Angle/pl"): Przyciąga do specjalnych punktów odniesienia okręgów i łuków, przy wielokrotnościach 30° i 45°.

- ![](/images/Draft_Snap_Intersection.svg) [Przyciągnij do przecięcia](/Draft_Snap_Intersection "Draft Snap Intersection"): Przyciąga do przecięcia dwóch odcinków linii lub łuku. Najedź kursorem myszki na dwa pożądane obiekty, aby aktywować przyciąganie ich przecięcia.

- ![](/images/Draft_Snap_Perpendicular.svg) [Przyciągnij prostopadle](/Draft_Snap_Perpendicular/pl "Draft Snap Perpendicular/pl"): Na odcinkach linii i łuku, przyciąga prostopadle do ostatniego punktu ściany _([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"))_ oraz krawędzi.

- ![](/images/Draft_Snap_Extension.svg) [Przyciągnij na wydłużeniu](/Draft_Snap_Extension/pl "Draft Snap Extension/pl"): Przyciąga do umownej linii, która rozciąga się poza punkty końcowe segmentów linii. Aby uaktywnić przyciąganie rozszerzenia, należy najechać myszką na żądany obiekt.

- ![](/images/Draft_Snap_Parallel.svg) [Przyciągnij równolegle](/Draft_Snap_Parallel/pl "Draft Snap Parallel/pl"): Przyciąga do umownej linii równoległej do odcinka linii. Przesuń kursor myszy nad żądanym obiektem, aby aktywować jego przyciągnięcie równoległe.

- ![](/images/Draft_Snap_Special.svg) [Przyciągnij specjalne](/Draft_Snap_Special/pl "Draft Snap Special/pl"): Przyciąga na punktach specjalnych zdefiniowanych przez obiekt. [dostępne w wersji 0.17](/Release_notes_0.17/pl "Release notes 0.17/pl")

- ![](/images/Draft_Snap_Near.svg) [Przyciągnij do najbliższego](/Draft_Snap_Near/pl "Draft Snap Near/pl"): Przyciąga do najbliższego punktu oraz krawędzi najbliższego obiektu.

- ![](/images/Draft_Snap_Ortho.svg) [Przyciągnij ortogonalnie](/Draft_Snap_Ortho/pl "Draft Snap Ortho/pl"): przyciąga na umownych liniach, które przecinają ostatni punkt pod wielokrotnością kąta 45°.

- ![](/images/Draft_Snap_Grid.svg) [Przyciągnij do siatki](/Draft_Snap_Grid/pl "Draft Snap Grid/pl"): Przyciąga na przecięciach linii siatki, jeśli siatka jest widoczna.

- ![](/images/Draft_Snap_WorkingPlane.svg) [Przyciągnij do płaszczyzny roboczej](/Draft_Snap_WorkingPlane/pl "Draft Snap WorkingPlane/pl"): zawsze umieszcza przyciągane punkty na aktualnej [płaszczyźnie roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").

- ![](/images/Draft_Snap_Dimensions.svg) [Przyciągnij do wymiaru](/Draft_Snap_Dimensions/pl "Draft Snap Dimensions/pl"): Prezentuje tymczasowe wymiary X i Y podczas przyciągania.

- ![](/images/Draft_ToggleGrid.svg) [Przełącz widoczność siatki](/Draft_ToggleGrid/pl "Draft ToggleGrid/pl"): włącza lub wyłącza widoczność siatki.

## Przyciąganie zaawansowane

- Dodatkowe punkty przyciągania można uzyskać poprzez połączenie dwóch metod przyciągania, takich jak np [Ortho](/Draft_Snap_Ortho/pl "Draft Snap Ortho/pl") i [Extension](/Draft_Snap_Extension/pl "Draft Snap Extension/pl"), które dadzą Ci punkt przyciągania na przecięciu ich umownych linii.
- Przyciąganie może być połączone z [wiązaniami](/Draft_Constrain/pl "Draft Constrain/pl").
- Naciśnij Q, aby wstawić "punkt zatrzaśnięcia" w miejscu, w którym aktualnie znajduje się kursor myszki. Możesz przyciągać do osi ortogonalnych punktów zatrzaśnięcia, oraz do przecięć tych osi. Jeśli aktywna jest opcja [przyciągnij do środkowego](/Draft_Snap_Midpoint/pl "Draft Snap Midpoint/pl"), możesz także przyciągnąć do punktu środkowego między dwoma punktami zatrzaśnięcia.
- Naciśnij ` jeden lub więcej razy, aby przyciągnąć obiekt, który jest zasłonięty przez inną geometrię. Nazywa się to "cyklicznym przyciąganiem". Zauważ, że musisz przesunąć kursor o niewielką wartość w oknie [widoku 3D](/3D_view/pl "3D view/pl") po wciśnięciu klawisza.

![](/images/Draft_Snap_example_cycling_1.png)

Przyciąganie cykliczne 1: Czerwony prostokąt został utworzony jako pierwszy, dlatego ma on pierwszeństwo przyciągania. Bez cyklicznego przyciągania nie można przyciągnąć zielonego prostokąta, który jest nakładany na czerwony prostokąt.

![](/images/Draft_Snap_example_cycling_2.png)

Przyciąganie cykliczne 2: Po jednokrotnym użyciu klawisza cyklu przyciągania zielony prostokąt otrzymuje priorytet przyciągania. Możliwe jest teraz przyciąganie do punktu środkowego nałożonej zielonej krawędzi.

## Uwagi

- Wiele opcji przyciągania może być aktywnych w tym samym czasie, ale zaleca się, aby aktywować tylko te opcje, które są naprawdę potrzebne. Aktywowanie zbyt wielu może spowolnić działanie.
- wersja 1.0 i poniżej: Nie jest dobrym pomysłem posiadanie na stałe aktywnej opcji [Przyciągnij do najbliższego](/Draft_Snap_Near/pl "Draft Snap Near/pl"), ponieważ ma ona pierwszeństwo przed wieloma innymi opcjami przyciągania.
- [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl"): Można mieć cały czas włączone [Przyciąganie do najbliższego](/Draft_Snap_Near/pl "Draft Snap Near/pl"), ale oznacza to konieczność wykonywania większej liczby ruchów myszą i ustawiania kursora bardziej dokładnie aby skorzystać z innych rodzajów przyciągania na obiekt.

## Ustawienia

Zobacz także strony: [Edytor ustawień](/Preferences_Editor/pl "Preferences Editor/pl") oraz [Rysunek Roboczy: Ustawienia](/Draft_Preferences/pl "Draft Preferences/pl").

- Gdy aktywne jest środowisko pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") lub [BIM](/BIM_Workbench/pl "BIM Workbench/pl") wymagające wprowadzenia punktu, maksymalna odległość, przy której narzędzie [przyciągnij do siatki](/Draft_Snap_Grid/pl "Draft Snap Grid/pl") wykrywa przecięcia linii siatki, może być zmieniana w locie przez naciśnięcie klawisza [ *(klawisz zwiększania)* lub klawisza ] _(klawisz zmniejszania)_. To ustawienie jest zapisywane w: **Przybory → Edycja parametrów → BaseApp → Preferences → Mod → Draft → snapRange**. Można je również zmienić w panelu zadań polecenia [Wybór płaszczyzny](/Draft_SelectPlane/pl "Draft SelectPlane/pl").
- Aby przyciągać tylko wtedy, gdy przytrzymany jest klawisz **modyfikator przyciągania**:
  - Odznacz opcję: **Edycja → Preferencje → Rysunek Roboczy → Siatka i przyciąganie → Przyciąganie → Zawsze przyciągaj _(wyłącz modyfikator przyciągania)_**.
  - Domyślny klawisz **modyfikatora przyciągania**, Ctrl, można zmienić w opcji: **Edycja → Preferencje → Rysunek Roboczy → Siatka i przyciąganie → Przyciąganie → Modyfikator ograniczania**.
- Aby wyświetlić pasek narzędzi Przyciągania tylko wtedy, gdy polecenie jest aktywne, wybierz: **Edycja → Preferencje... → Rysunek Roboczy → Interfejs → Pokaż pasek narzędzi szkicu tylko podczas poleceń**. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
- Symbole przyciągania można zmienić: **Edycja → Preferencje... → Rysunek Roboczy → Siatka i przyciąganie → Styl symboli przyciągania**.
- Kolor symboli przyciągania i wymiary [Przyciągnij do wymiaru](/Draft_Snap_Dimensions/pl "Draft Snap Dimensions/pl") można zmienić: **Edycja → Preferencje... → Rysunek Roboczy → Siatka i przyciąganie → Kolor symbolu przyciągania**.
- Rozmiar symboli przyciągania zależy od: **Edycja → Preferencje... → Wyświetlanie → Widok 3D → Rozmiar znacznika**. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
- Wymienione skróty klawiaturowe pojedynczych znaków można zmienić: **Edycja → Preferencje... → Rysunek Roboczy → Interfejs → Skróty klawiszowe**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Snap/pl&oldid=1565136>"
