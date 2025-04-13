---
title: Poradnik dla środowiska pracy Rysunek Roboczy
---
|  |
| --- |
| Ćwiczenie |
| Temat |
| Drafting |
| Poziom trudności |
| początkujący |
| Czas wykonania |
| 30 minut |
| Autorzy |
| [Drei and vocx](http://freecadweb.org/wiki/index.php?title=User:Drei) |
| Wersja FreeCAD |
| 0.19 |
| Pliki z przykładami |
| [Zaktualizowany projekt samouczka](https://forum.freecadweb.org/viewtopic.php?f=36&t=43651) |
| Zobacz również |
| *-* |
|  |

## Wprowadzenie

Ten poradnik został pierwotnie napisany przez Drei i został zaktualizowany i odnowiony przez vocx.

Ten poradnik ma na celu zapoznanie czytelnika z podstawowym przepływem pracy środowiska pracy ![](/images/Workbench_Draft.svg) [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl").

Czytelnik przećwiczy:

* tworzenie linii, łuków i wielokątów,
* korzystanie z płaszczyzn roboczych,
* tworzenie wymiarów, tekstu i ciągów kształtów,
* tworzenie rysunków technicznych.

Ten samouczek używa notacji `(x, y, z)` do oznaczania współrzędnych wymaganych do zdefiniowania punktów w obiekcie. Domyślną jednostką są milimetry `mm`.

![](/images/00_Dr01_Draft_Tutorial_final.png)

Rysunek końcowy zawierający różne obiekty środowiska Rysunek Roboczy.

## Sposób postępowania

1. Uruchom FreeCAD, utwórz nowy pusty dokument za pomocą opcji z menu **Plik → ![](/images/Std_New.svg) [Nowy](/Std_New/pl "Std New/pl")**.

:   1.1. Przełącz się do środowiska pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") z [selektora środowisk pracy](/Std_Workbench "Std Workbench"), lub menu **Widok → Środowiska pracy → ![](/images/Workbench_Draft.svg) Rysunek Roboczy**.
:   1.2. Upewnij się, że rozumiesz jak używać [edytora właściwości](/Property_editor/pl "Property editor/pl"), w szczególności zakładek **Dane** i **Widok** do zmiany właściwości. Podczas zmiany właściwości może być konieczne wykonanie ![](/images/Std_Refresh.svg) [odświeżenia](/Std_Refresh/pl "Std Refresh/pl"), aby zobaczyć rezultat w oknie [widoku 3D](/3D_view/pl "3D view/pl").
:   1.3. Ponieważ obiekty środowiska Rysunek Roboczy są płaskimi kształtami, lepiej oglądać je od góry. Użyj ![](/images/Std_ViewTop.svg) [widoku od góry](/Std_ViewTop/pl "Std ViewTop/pl"), aby ustawić [widok 3D](/3D_view/pl "3D view/pl").
:   1.4. Chociaż siatka nie jest używana w tym samouczku, jest pomocna w pozycjonowaniu elementów geometrycznych. Użyj narzędzia ![](/images/Draft_SelectPlane.svg) [Wybór płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl"), aby ustawić zarówno płaszczyznę roboczą, jak i siatkę, a następnie pokazać i ukryć siatkę za pomocą narzędzia ![](/images/Draft_ToggleGrid.svg) [Przełącz widoczność siatki](/Draft_ToggleGrid/pl "Draft ToggleGrid/pl").

## Pasek narzędzi przyciągania

2. Pasek narzędzi [przyciągania](/Draft_Snap/pl "Draft Snap/pl") jest zwykle aktywowany po przejściu do środowiska pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl").

:   2.1. Aby upewnić się, że zawsze tam jest, przejdź do [ustawień](/Draft_Preferences/pl "Draft Preferences/pl"), **Edycja → Preferencje → Rysunek Roboczy → Zakładka Siatka i przyciąganie**.
:   2.2. Sprawdź, czy pasek narzędzi **Pokaż narzędzia przyciągania** jest aktywny.

W tym samym oknie można również zmienić widoczność i właściwości siatki środowiska Rysunek Roboczy.

## Płaszczyzny robocze

Większość obiektów środowiska Rysunek Roboczy to płaskie kształty, więc są one naturalnie oparte na *płaszczyźnie roboczej*. Płaszczyzna robocza może być jedną z głównych globalnych płaszczyzn współrzędnych XY, XZ i YZ lub może być płaszczyzną równoległą do nich z dodatnim lub ujemnym przesunięciem, lub może być płaszczyzną zdefiniowaną przez powierzchnię obiektu bryłowego.

3. Naciśnij przycisk ![](/images/Draft_SelectPlane.svg) [Wybierz płaszczyznę](/Draft_SelectPlane/pl "Draft SelectPlane/pl"), lub przejdź do menu **Narzędzia → ![](/images/Draft_SelectPlane.svg) [Wybierz płaszczyznę](/Draft_SelectPlane/pl "Draft SelectPlane/pl")**, aby otworzyć [panel zadań](/Task_panel/pl "Task panel/pl") płaszczyzny roboczej.

:   3.1. Naciśnij ![](/images/Std_ViewTop.svg) Góra (XY).

Przed naciśnięciem przycisku można również zmienić wartość odsunięcia w milimetrach, a także odstępy siatki, linie główne i promień przyciągania.

## Linie i łuki

4. Będziemy tworzyć łuki i linie.

:   4.1. Naciśnij ![](/images/Draft_Arc.svg) [Łuk](/Draft_Arc "Draft Arc").
:   4.2. Ustaw **Środek** na `(0, 0, 0)` i naciśnij klawisz Enter.
:   4.3. Ustaw **Promień** na `30 mm` i naciśnij Enter.
:   4.4. Ustaw **Kąt początkowy** na `60.0°` i naciśnij Enter.
:   4.5. Ustaw **Kąt otwarcia** na `60.0°` i naciśnij Enter.
:   4.6. Powtórz tę samą procedurę dla drugiego łuku o promieniu `25 mm`, pozostałe właściwości są takie same.

5. Utworzymy teraz profil zamknięty, wiążąc łuki liniami.

:   5.1. Naciśnij ![](/images/Draft_Line.svg) [Linia](/Draft_Line/pl "Draft Line/pl").
:   5.2. Na pasku narzędzi [przyciągania](/Draft_Snap/pl "Draft Snap/pl") upewnij się, że aktywna jest tylko opcja ![](/images/Draft_Snap_Lock.svg) [Przełącz przyciąganie](/Draft_Snap_Lock/pl "Draft Snap Lock/pl") oraz tylko ![](/images/Draft_Snap_Endpoint.svg) [Przyciągnij do punktu końcowego](/Draft_Snap_Endpoint/pl "Draft Snap Endpoint/pl"). Po przesunięciu kursora na łuk i zbliżeniu do jednego z jego punktów końcowych, powinna pojawić się ikona ![](/images/Draft_Snap_Endpoint.svg) [24px](/index.php?title=Draft_Snap_Endpoint.svg&action=edit&redlink=1 "Draft Snap Endpoint.svg (page does not exist)") [Przyciągnij do punktu końcowego](/Draft_Snap_Endpoint/pl "Draft Snap Endpoint/pl"). Ponadto punkt docelowy jest wyróżniony dużą białą kropką. Kliknij, aby wybrać ten punkt.
:   5.3. Przesuń kursor do najbliższego punktu końcowego drugiego łuku, aby połączyć oba łuki.
:   5.4. Powtórz proces dla drugiej strony łuku, aby zamknąć profil.

![](/images/01_Dr01_Draft_Arc_profile.png)

Profil zamknięty utworzony przez dwa łuki i dwie linie.

## Łączenie lub montaż

Mamy teraz kilka obiektów w [widoku drzewa](/Tree_view/pl "Tree view/pl"), które tworzą zamknięty profil. Jednak profil ten nadal składa się z rozłącznych obiektów. Każdy z nich może być edytowany i przenoszony niezależnie od pozostałych. Możliwe jest kontynuowanie pracy z elementami w ten sposób, ale możliwe jest również połączenie ich w jeden obiekt.

6a. Należy pamiętać, że połączenie obiektów w jeden obiekt spowoduje utworzenie obiektu, który nie jest już parametryczny, więc ich właściwości nie mogą być dalej modyfikowane.
6a.1. Zaznacz wszystkie cztery obiekty w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") lub przytrzymując Ctrl i wybierając je w oknie [widoku 3D](/3D_view/pl "3D view/pl").

:   6a.2. Po zaznaczeniu tych obiektów kliknij ![](/images/Draft_Upgrade.svg) [Ulepsz](/Draft_Upgrade/pl "Draft Upgrade/pl").

Ulepszy to cztery obiekty w jeden `polilinię`.

6b. Jeśli chcesz zachować parametryczną naturę obiektów, możesz zamiast tego utworzyć złożenie.

:   6b.1. Przejdź do środowiska pracy ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl").
:   6b.2. Po zaznaczeniu tych obiektów, kliknij na ![](/images/Part_Compound.svg) [Utwórz kształt złożony](/Part_Compound/pl "Part Compound/pl").

## Prostokąty, okręgi i wielokąty

7. Narysujemy prostokątną ramkę. *(Przełącz się z powrotem do środowiska ![](/images/Workbench_Draft.svg) [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"))*.

:   7.1. Utwórz ![](/images/Draft_Rectangle.svg) [Prostokąt](/Draft_Rectangle/pl "Draft Rectangle/pl").
:   7.2. Wprowadź wartości pierwszego punktu `(-100, -60, 0)` i naciśnij Enter.
:   7.3. Upewnij się, że opcja **Relatywnie** jest odznaczona, ponieważ będziemy używać jednostek bezwzględnych. Możesz nacisnąć R na klawiaturze, aby szybko włączyć lub wyłączyć tę opcję.
:   7.4. Wprowadź wartości dla drugiego punktu `(140, 90, 0)` i naciśnij Enter.

Utworzony zostanie prostokąt. Przejdź do [edytora właściwości](/Property_editor "Property editor"), aby zmienić jego właściwości. Jeśli nie chcesz, aby prostokąt tworzył ścianę, ustaw właściwość DANE**Utwórz ścianę** na wartość `FAŁSZ`. Jeśli chcesz utworzyć ścianę, ale widzieć tylko przewody tego obiektu, ustaw DANE**Utwórz ścianę** na `PRAWDA`, ale ustaw WIDOK**Tryb wyświetlania** na `Szkieletowy`.

8. Narysujemy okrąg.

:   8.1. Naciśnij przycisk ![](/images/Draft_Circle.svg) [Okrąg](/Draft_Circle/pl "Draft Circle/pl").
:   8.2. Wprowadź wartości środka `(0, 0, 0)` i naciśnij Enter.
:   8.3. Ustaw promień na `15 mm` i naciśnij Enter.

9. Narysujemy wielokąt foremny.

:   9.1. Naciśnij ![](/images/Draft_Polygon.svg) [Wielokąt](/Draft_Polygon/pl "Draft Polygon/pl").
:   9.2. Wprowadź wartości położenia środka `(0, 0, 0)` i naciśnij Enter.
:   9.3. Ustaw liczbę boków na `6` i naciśnij Enter.
:   9.4. Ustaw promień na `50 mm` i naciśnij Enter.

Ponownie, jeśli chcesz, możesz zmienić właściwości DANE**Utwórz ścianę** i WIDOK**Tryb wyświetlania** w [edytorze właściwości](/Property_editor/pl "Property editor/pl").

Prostokąt, okrąg, wielokąt i większość innych obiektów utworzonych za pomocą środowiska pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") współdzielą wiele danych i właściwości widoku, ponieważ wywodzą się z tej samej klasy bazowej, [Część: Część na obiekt 2D](/Part_Part2DObject/pl "Part Part2DObject/pl").

![](/images/02_Dr01_Draft_Rectangle_circle_polygon.png)

Dodano prostokąt, okrąg i wielokąt.

## Szyki

Szyki są używane do powielania obiektu kilka razy w kierunku prostopadłym *(X, Y, Z)*, wokół osi obrotu lub wzdłuż ścieżki.

10. Utworzymy szyk biegunowy.

:   10.1. Wybierz obiekt `Polilinia`, który został wcześniej utworzony za pomocą narzędzia ![](/images/Draft_Upgrade.svg) [Ulepsz](/Draft_Upgrade/pl "Draft Upgrade/pl") lub obiekt `Kształt złożony` utworzony za pomocą narzędzia ![](/images/Part_Compound.svg) [Utwórz kształt złożony](/Part_Compound "Part Compound") środowiska Część.
:   10.2. Naciśnij przycisk ![](/images/Draft_PolarArray.svg) [Szyk biegunowy](/Draft_PolarArray/pl "Draft PolarArray/pl").
:   10.3. Ustaw kąt biegunowy na `360°`.
:   10.4. Ustaw liczbę elementów na `4`.
:   10.5. Wprowadź wartości środka obrotu `(0, 0, 0)` i naciśnij Enter.

Obiekt tablicy pokazuje kopie obiektu wokół punktu odniesienia położenia.

![](/images/03_Dr01_Draft_PolarArray.png)

Szyk biegunowy małego profilu wyśrodkowanego wokół punktu odniesienia położenia.

## Wymiary

Wymiary liniowe działają najlepiej przy użyciu odpowiednich metod [przyciągania](/Draft_Snap/pl "Draft Snap/pl") do wybierania punktów i krawędzi do pomiaru. Można je jednak również utworzyć, określając współrzędne bezwzględne.

11. Tworzenie wymiarów dla różnych obiektów.

:   11.1. Naciśnij ![](/images/Draft_Dimension.svg) [Dimension](/Draft_Dimension/pl "Draft Dimension/pl").
:   11.2. Wybierz pierwszy punkt. W tym poradniku pierwszym punktem będzie zawsze początek `(0, 0, 0)`.
:   11.3. Na pasku narzędzi [przyciągania](/Draft_Snap/pl "Draft Snap/pl") upewnij się, że narzędzie ![](/images/Draft_Snap_Lock.svg) [Przełącz przyciąganie](/Draft_Snap_Lock/pl "Draft Snap Lock/pl") jest aktywne i wybrano tylko funkcję ![](/images/Draft_Snap_Midpoint.svg) [Przyciągnij do punktu środkowego](/Draft_Snap_Midpoint/pl "Draft Snap Midpoint/pl"). Gdy przesuniesz wskaźnik do górnej krawędzi wielokąta, ![](/images/Draft_Snap_Midpoint.svg) powinna pojawić się ikona [Punkt środkowy](/Draft_Snap_Midpoint/pl "Draft Snap Midpoint/pl"). Kliknij, aby wybrać ten punkt.
:   11.4. Przesuń kursor w prawo, aby określić położenie wymiaru, a następnie kliknij, aby ustawić ostateczne położenie, około `(100, 20, 0)`. Wymiar automatycznie wyświetli wartość długości zmierzoną między dwoma punktami.
:   11.5. Wybierz obiekt wymiaru w [widoku drzewa](/Tree_view/pl "Tree view/pl"), a następnie w [edytorze właściwości](/Property_editor "Property editor") zmień WIDOK**Rozmiar czcionki** na `6 mm`, ustaw WIDOK**Linie pomocnicze** na `45 mm`, a WIDOK**Wyświetlaj jednostki** na `FAŁSZ`.

12. Powtórz ten proces dla dwóch łuków profilu zamkniętego. Pierwszy punkt pomiaru nadal będzie początkiem, dla drugiego punktu użyj ![](/images/Draft_Snap_Midpoint.svg) [Przyciągnij do punktu środkowego](/Draft_Snap_Midpoint/pl "Draft Snap Midpoint/pl") łuku.

13. Powtórz ten proces dla okręgu znajdującego się w środku. Pierwszy punkt pomiaru nadal będzie punktem początkowym. Aby wybrać drugi punkt, upewnij się, że narzędzie ![](/images/Draft_Snap_Lock.svg) [Włącz / wyłącz przyciąganie](/Draft_Snap_Lock/pl "Draft Snap Lock/pl") jest aktywne, i wybrano tylko funkcję ![](/images/Draft_Snap_Angle.svg) [Przyciągnij do kąta](/Draft_Snap_Angle/pl "Draft Snap Angle/pl"). Gdy przesuniesz kursor do górnej części okręgu, powinna pojawić się ikona ![](/images/Draft_Snap_Angle.svg) [Przyciągnij do kąta](/Draft_Snap_Angle/pl "Draft Snap Angle/pl"). Kliknij, aby zaznaczyć ten punkt. Następnie przesuń kursor w prawo i kliknij, aby ustalić wymiar.

Pamiętaj, aby dostosować WIDOK**Rozmiar czcionki** i inne właściwości, aby poprawnie zobaczyć wymiar.

![](/images/04_Dr01_Draft_Dimension.png)

Wymiary mierzące pionową odległość od punktu odniesienia położenia do górnej krawędzi okręgu, łuku i wielokąta.

## Adnotacje wieloliniowe i kształt z tekstu

14. Obiekty tekstowe są prostymi figurami płaskimi, które są tworzone w oknie [widoku 3D](/3D_view/pl "3D view/pl"), ale nie mają pod spodem rzeczywistego "[kształtu](/Shape/pl "Shape/pl")". Oznacza to, że nie mogą być używane w złożonych operacjach z kształtami, takich jak wyciągnięcia lub operacje logiczne.

:   14.1. Naciśnij przycisk ![](/images/Draft_Text.svg) [Adnotacja wieloliniowa](/Draft_Text/pl "Draft Text/pl").
:   14.2. Wybierz punkt odniesienia w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Na pasku narzędzi [przyciągania](/Draft_Snap/pl "Draft Snap/pl") upewnij się, że narzędzie ![](/images/Draft_Snap_Lock.svg) [Przełącz przyciąganie](/Draft_Snap_Lock/pl "Draft Snap Lock/pl") jest aktywne i wybrano tylko funkcję ![](/images/Draft_Snap_Midpoint.svg) [Przyciągnij do punktu środkowego](/Draft_Snap_Midpoint/pl "Draft Snap Midpoint/pl"). Przesuń kursor do górnej krawędzi najwyższego łuku, tak aby ![](/images/Draft_Snap_Midpoint.svg) pojawi się ikona [Przyciągnij do punktu środkowego](/Draft_Snap_Midpoint/pl "Draft Snap Midpoint/pl"). Kliknij, aby wybrać ten punkt.
:   14.3. Wpisz wymagany **Tekst** i naciśnij Enter raz, aby rozpocząć nową linię. W razie potrzeby dodaj więcej linii tekstu.
:   14.4. Gdy zakończysz edycję, naciśnij Enter dwa razy.
:   14.5. Zaznacz obiekt tekstowy w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl"), a następnie w oknie [edytora właściwości](/Property_editor/pl "Property editor/pl") zmień wartość własciwości WIDOK**Rozmiar czcionki** na `6 mm`, a właściwość WIDOK**Wyrównanie poziome** na `Wyśrodkowane`.

15. Obiekty **Kształt z tekstu** to kształty wykonane z pierwotnych polilini, które podążają za liniami wskazanymi przez określoną czcionkę. Oznacza to, że obiekty te mają prawdziwy "[kształt](/Shape/pl "Shape/pl")" pod spodem, a zatem mogą być używane w złożonych operacjach, takich jak wyciągnięcia i operacje logiczne.

:   15.1. Naciśnij przycisk ![](/images/Draft_ShapeString.svg) [Kształt z tekstu](/Draft_ShapeString/pl "Draft ShapeString/pl").
:   15.2. Przesuń kursor do żądanego miejsca w oknie [widoku 3D](/3D_view/pl "3D view/pl") nad regularnym wielokątem i kliknij raz. Spowoduje to ustalenie punktu bazowego dla Kształtu z tekstu. Współrzędne można również wprowadzić ręcznie, na przykład `(-20, 65, 0)`.
:   15.3. Wprowadź żądany **Ciąg znaków** i wybierz odpowiednią **Wysokość**.
:   15.4. Jeśli nie ma domyślnego pliku czcionki, należy kliknąć wielokropek ..., aby otworzyć okno dialogowe umożliwiające wybranie lokalizacji czcionki w systemie.
:   15.5. Po określeniu prawidłowego pliku czcionki można kliknąć OK lub nacisnąć Enter.

![](/images/05_Dr01_Draft_Text_ShapeString.png)

Dodano obiekty Adnotacja wieloliniowa i Kształt z tekstu.

Aby wytłaczać litery i grawerować je na bryłach, zobacz poradnik [Poradnik: Rysunek Roboczy kształt z tekstu](/Draft_ShapeString_tutorial/pl "Draft ShapeString tutorial/pl").

## Tworzenie rysunku technicznego

W obecnej formie stworzone przez nas obiekty można zapisać, wyeksportować do innych formatów, takich jak [SVG](/SVG "SVG") lub [DXF](/DXF "DXF"), lub wydrukować.

Jeśli chcesz, możesz utworzyć rysunek techniczny, aby wyświetlić te obiekty wraz z dodatkowymi informacjami, takimi jak ramka.

Zanim cokolwiek zrobisz, ukryj siatkę Rysunku Roboczego naciskając ![](/images/Draft_ToggleGrid.svg) [Przełącz widoczność siatki](/Draft_ToggleGrid/pl "Draft ToggleGrid/pl").

16. Przejdź do środowiska pracy ![](/images/Workbench_TechDraw.svg) [Rysunek Roboczy](/TechDraw_Workbench/pl "TechDraw Workbench/pl").

:   16.1. Utwórz standardową stronę naciskając ![](/images/TechDraw_PageDefault.svg) [Wstaw nową domyślną stronę rysunku](/TechDraw_PageDefault/pl "TechDraw PageDefault/pl").
:   16.2. W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") zaznacz wszystkie utworzone obiekty z wyjątkiem strony, a następnie naciśnij ![](/images/TechDraw_ActiveView.svg) [Wstaw aktywny widok](/TechDraw_ActiveView/pl "TechDraw ActiveView/pl"). Naciśnij OK z domyślnymi opcjami. Utworzenie widoku na stronie może potrwać kilka sekund.
:   16.3. Wybranie obiektu strony w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") spowoduje automatyczne wyświetlenie strony w oknie głównym. Po wybraniu strony przejdź do [edytora właściwości](/Property_editor/pl "Property editor/pl") i zmień właściwość DANE**Skala** na `0.75`.
:   16.4. Rozwiń obiekt Strona w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl"), aby wybrać obiekt AktywnyWidok. Po wybraniu tego widoku przejdź do [edytora właściwości](/Property_editor/pl "Property editor/pl") i zmień właściwość DANE**Typ skali** na `Strona`.
:   16.5. Ponownie oblicz model używając narzędzia ![](/images/Std_Refresh.svg) [Przelicz](/Std_Refresh/pl "Std Refresh/pl") lub naciskając F5.
:   16.6. Ukryj ramki obiektów naciskając ![](/images/TechDraw_ToggleFrame.svg) [Włącz / wyłącz wyświetlanie ramek](/TechDraw_ToggleFrame/pl "TechDraw ToggleFrame/pl").

Dowiedz się więcej o środowisku pracy [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") czytając poradnik [Podstawy dla środowiska pracy Rysunek Techniczny](/Basic_TechDraw_Tutorial/pl "Basic TechDraw Tutorial/pl").

![](/images/06_Dr01_Draft_TechDraw_page.png)

Strona Rysunku Technicznego z rzutem kształtów utworzonych za pomocą środowiska Rysunek Roboczy.

Rysunek Techniczny działa najlepiej z obiektami, które mają [kształt topologiczny](/Part_TopoShape/pl "Part TopoShape/pl"). Ponieważ niektóre obiekty ze środowiska Rysunek Roboczy, takie jak [Adnotacja wieloliniowa](/Draft_Text/pl "Draft Text/pl") i [Wymiary](/Draft_Dimension/pl "Draft Dimension/pl"), nie mają takich "[kształtów](/Shape/pl "Shape/pl")", niektóre operacje środowiska Rysunek Techniczny nie działają z tymi elementami.

Narzędzia takie jak ![](/images/TechDraw_ActiveView.svg) [Wstaw aktywny widok](/TechDraw_ActiveView/pl "TechDraw ActiveView/pl"), ![](/images/TechDraw_DraftView.svg) [Wstaw obiekt środowiska Rysunek Roboczy](/TechDraw_DraftView/pl "TechDraw DraftView/pl"), oraz ![](/images/TechDraw_ArchView.svg) [Wstaw obiekt środowiska Architektura](/TechDraw_ArchView/pl "TechDraw ArchView/pl") działają poprzez odbieranie wewnętrznego obrazu SVG, który jest generowany przez wewnętrzne funkcje środowiska Rysunek Roboczy. Dlatego środowisko pracy Rysunek Techniczny nie ma dużej kontroli nad sposobem wyświetlania tych widoków. Większa integracja tych dwóch środowisk pracy jest w toku.

## Uwagi końcowe

Środowisko pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") pod wieloma względami jest podobne do środowiska pracy [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), ponieważ oba są przeznaczone do tworzenia kształtów 2D. Główna różnica polega na sposobie, w jaki każde ze środowisk pracy obsługuje układy współrzędnych i sposób pozycjonowania obiektów. W Rysunku Roboczym obiekty są swobodnie pozycjonowane w globalnym układzie współrzędnych, zazwyczaj przyciągając swoje punkty do siatki lub innych obiektów. W Szkicowniku **[obiekt szkicu](/Sketch/pl "Sketch/pl")** definiuje lokalny układ współrzędnych, który służy jako odniesienie dla wszystkich elementów geometrycznych w tym szkicu. Co więcej, szkic opiera się na *wiązaniach* w celu zdefiniowania ostatecznej pozycji jego punktów.

* Środowisko pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") jest przeznaczone dla rysunków 2D, które nadają się do rysowania na siatce. Środowisko pracy [BIM](/BIM_Workbench/pl "BIM Workbench/pl") opiera się głównie na narzędziach zdefiniowanych w środowisku [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl").

* Środowisko pracy [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") jest przeznaczone do rysunków 2D, które wymagają precyzyjnych relacji między punktami. Nie opiera się ono na siatce, ale na regułach pozycjonowania *(wiązaniach)* w celu określenia, gdzie zostaną umieszczone punkty i krawędzie. [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") jest najczęściej używany razem ze środowiskiem [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") do tworzenia brył.

* Możliwe jest przekształcenie obiektu środowiska Rysunek Roboczy w [Szkic](/Sketch/pl "Sketch/pl") i na odwrót, przy użyciu narzędzia ![](/images/Draft_Draft2Sketch.svg) [Rysunek roboczy do szkicu](/Draft_Draft2Sketch/pl "Draft Draft2Sketch/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_tutorial/pl&oldid=1460859>"