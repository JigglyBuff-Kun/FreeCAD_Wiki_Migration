---
title: Poradnik Otwarte okna
---

|                                                                              |
| ---------------------------------------------------------------------------- |
| Ćwiczenie                                                                    |
| Temat                                                                        |
| Architektura                                                                 |
| Poziom trudności                                                             |
| Początkujący                                                                 |
| Czas wykonania                                                               |
| 60 minut                                                                     |
| Autorzy                                                                      |
| [vocx](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=21943) |
| Wersja FreeCAD                                                               |
| 0.18 lub nowszy                                                              |
| Pliki z przykładami                                                          |
| nie dołączono                                                                |
| Zobacz również                                                               |
| _-_                                                                          |
|                                                                              |

## Wprowadzenie

Ten poradnik pokazuje, jak umieszczać [okna architektoniczne](/Arch_Window/pl "Arch Window/pl") i drzwi w modelu budynku, jak wyświetlać je jako otwarte w widoku 3D oraz jak tworzyć rysunek 2D _(projekcję planu i elewacji)_ dla modelu. Wykorzystuje środowiska pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [Architektura](/Arch_Workbench/pl "Arch Workbench/pl") i [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl").

Często używanymi narzędziami są: [Siatka](/Draft_Snap_Grid/pl "Draft Snap Grid/pl"), [Przyciągnij](/Draft_Snap/pl "Draft Snap/pl"), [Polilinia](/Draft_Wire/pl "Draft Wire/pl") środowiska Rysunek roboczy, [Ściana](/Arch_Wall/pl "Arch Wall/pl"), [Okno](/Arch_Window/pl "Arch Window/pl"), [Płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl") środowiska Architektura, oraz [Widok Architektoniczny](/TechDraw_ArchView/pl "TechDraw ArchView/pl") środowiska Rysunek Techniczny.

Zobacz również poniższą stronę, aby zobaczyć kilka filmów na temat pracy z oknami i drzwiami.

- [Środowisko pracy używane do tworzenia projektów architektonicznych nosi nazwę Architektura](http://help-freecad-jpg87.fr/04_arch_ind.php).

## Konfiguracja

1. Otwórz program FreeCAD, utwórz nowy pusty dokument i przejdź do środowiska [Architektura](/Arch_Workbench/pl "Arch Workbench/pl").

2. Upewnij się, że jednostki są prawidłowo ustawione w menu **Edycja → Preferencje ... → Ogólne → Jednostki**. Na przykład `MKS (m/kg/s/stopnie)` jest dobre do radzenia sobie z odległościami w typowym budynku; co więcej, ustaw liczbę miejsc dziesiętnych na `4`, aby uwzględnić nawet najmniejsze ułamki metra.

3. Użyj przycisku [Przełącz widoczność siatki](/Draft_ToggleGrid/pl "Draft ToggleGrid/pl"), aby wyświetlić siatkę z wystarczającą rozdzielczością. Wygląd siatki można dostosować w menu **Edycja → Preferencje → Rysunek Roboczy → Siatka i przyciąganie → Siatka**. Ustaw linie co `50 mm`, z głównymi liniami co `20` linii _(co metr)_ i `1000 linii` w sumie (siatka obejmuje obszar 50 m x 50 m).

4. [Oddal](/Std_ViewZoomOut/pl "Std ViewZoomOut/pl") widok 3D, jeśli znajdujesz się zbyt blisko siatki.

Teraz jesteśmy gotowi do stworzenia prostego budynku z zamkniętymi ścianami, dwoma drzwiami i dwoma oknami.

## Umieszczenie ściany

5. Użyj narzędzia [Polilinia](/Draft_Wire/pl "Draft Wire/pl"), aby utworzyć zamkniętą linię. Idź zgodnie z ruchem wskazówek zegara.
   5.1. Pierwszy punkt w (0, 0, 0). W oknie dialogowym wprowadź 0 m Enter, 0 m Enter, 0 m Enter.
   5.2. Drugi punkt w (3, 0, 0). Naciśnij X, aby ograniczyć ruch do osi X; wprowadź wartość 3 m Enter.
   5.3. Trzeci punkt w (3, 4, 0). Naciśnij Y, aby ograniczyć ruch do osi Y; wprowadź wartość 4 m Enter.
   5.4. Czwarty punkt w (0, 4, 0). Naciśnij X, aby ograniczyć ruch do osi X. Wprowadź wartość - 3 m Enter.
   5.5. Naciśnij O, aby zamknąć linię i zakończyć narzędzie.
   5.6. Na klawiaturze numerycznej naciśnij 0, aby uzyskać [widok aksonometryczny](/Std_ViewIsometric/pl "Std ViewIsometric/pl") modelu.
   _Uwaga:_ punkty można również zdefiniować za pomocą kursora myszki, wybierając przecięcia na siatce, przy pomocy paska narzędzi [przyciągania](/Draft_Snap/pl "Draft Snap/pl") i metody [przyciągnij do siatki](/Draft_Snap_Grid/pl "Draft Snap Grid/pl").

6. Wybierz `DWire` i zmień właściwość DANE**Utwórz ścianę** na `FAŁSZ`.

7. Wybierz `DWire` i kliknij narzędzie [Ściana](/Arch_Wall/pl "Arch Wall/pl"). Ściana zostanie natychmiast utworzona z domyślną szerokością _(grubością)_ 0,2 m i wysokością 3 m.
   _Uwaga:_ jeśli właściwość DANE**Utwórz ściane** `DWire` ma wartość `PRAWDA`, ten krok utworzy bryłę, zamiast używać tylko konturu `DWire`.

![](/images/01_T01_wire_wall.png)

Podstawowa polilinia dla ściany. To zamknięta linia, która nie tworzy powierzchni.

![](/images/02_T01_just_wall.png)

Ściana utworzona z polilini

## Umieszczanie drzwi i okien

8. Kliknij narzędzie [Okno](/Arch_Window/pl "Arch Window/pl"). Jako wstępnie wybierz `Proste drzwi`, a wysokość zmień na 2 m.

: 8.1. Zmień przyciąganie na [Przyciągnij do punktu środkowego](/Draft_Snap_Midpoint/pl "Draft Snap Midpoint/pl") i spróbuj wybrać dolną krawędź ściany frontowej. W razie potrzeby ustaw [widok standardowy](/index.php?title=Standard_view&action=edit&redlink=1 "Standard view (page does not exist)"), aby wybrać krawędź, a nie lico ściany; gdy punkt środkowy jest aktywny, kliknij, aby umieścić drzwi.
: 8.2. Ponownie kliknij narzędzie [Okno architektoniczne](/Arch_Window "Arch Window"), i umieść kolejne drzwi, tym razem w środku tylnej ściany. Dostosuj [widok standardowy](/Std_View_Menu/pl "Std View Menu/pl") według potrzeb.

![](/images/03_T01_wall_place_door_rear.png)

Przyciąganie do punktu środkowego dolnej krawędzi ściany w celu umieszczenia drzwi.

9. Kliknij narzędzie [Okno](/Arch_Window/pl "Arch Window/pl"). Jako wstępnie wybierz `Otwarte jednoskrzydłowe`, a wysokość `Progu` zmień na 1 m.

: 9.1. Zachowaj przyciąganie do [punktu środkowego](/Draft_Snap_Midpoint/pl "Draft Snap Midpoint/pl"), i spróbuj wybrać dolną krawędź lewej ściany.Obróć [widok standardowy](/Std_View_Menu/pl "Std View Menu/pl") według potrzeb, aby pomóc w wybraniu krawędzi, a nie powierzchni ściany. Gdy środek odcinka jest aktywny, kliknij, aby umieścić okno.

_Uwaga:_ `Wysokość progu` to odległość od podłogi do dolnej krawędzi elementu. Dla drzwi `Wysokość progu` zazwyczaj wynosi 0 m, ponieważ drzwi zazwyczaj stykają się z podłogą. Natomiast okna zwykle mają odstęp od 0,5 m do 1,5 m od podłogi.

9.2. Kliknij ponownie narzędzie [Okno](/Arch_Window/pl "Arch Window/pl") i umieść kolejne okno, tym razem w środku prawej ściany. Obróć widok [standardowy](/Std_View_Menu/pl "Std View Menu/pl"), jeśli to konieczne. Tym razem szerokość okna _(długość)_ ustaw na 1,5 m, a `Wysokość progu` ponownie na 1 m.

![](/images/04_T01_wall_place_door_side_right.png)

Przyciąganie do punktu środkowego dolnej krawędzi ściany w celu umieszczenia okna.

: _Uwaga:_ parametr `Wysokość progu` można ustawić tylko podczas początkowego tworzenia okna z predefiniowaną konfiguracją. Po wstawieniu okna można zmienić jego położenie, edytując wektor `[x, y, z]` właściwości DANE**Pozycja** podkładającego [szkicu](/Sketcher_Workbench/pl "Sketcher Workbench/pl").

: 9.3. Przesuń okno `Window001` trochę wyżej. Wybierz podkładający `Sketch003` i zmień jego właściwość DANE**Pozycja** z `[3,1 m, 2,0 m, 1,0 m]` na `[3,1 m, 2,0 m, 1,6 m]`. Całe okno `Window001` powinno się przesunąć w górę. Ściana może wciąż pokazywać otwarcie w poprzednim miejscu. Jeśli tak się dzieje, kliknij prawym przyciskiem myszy element `Wall`, wybierz `Oznacz do przeliczenia` i następnie naciśnij klawisze Ctrl + R, aby [przeliczyć](/Std_Refresh/pl "Std Refresh/pl") model.

![](/images/04.1_T01_wall_built.png)

Ściana z drzwiami i oknami.

_Uwaga:_ Podczas umieszczania okna lub drzwi z ustawieniami wstępnymi, najedź na element nad [ścianą](/Arch_Wall "Arch Wall") i poczekaj, aż element obróci się tak, że będzie równoległy do tej ściany. Celuj w dolny brzeg ściany i użyj `Wysokość progu` do dostosowania odległości od podłogi. Jeśli to trudne, użyj trybu przyciągania [do najbliższego](/Draft_Snap_Near/pl "Draft Snap Near/pl") z paska narzędzi [przyciągania](/Draft_Snap/pl "Draft Snap/pl"), aby wstawić element w dowolnym miejscu na powierzchni ściany, a następnie dostosuj jego właściwość DANE**Pozycja** ręcznie, zgodnie z opisem powyżej. Posiadanie wielu aktywnych jednocześnie trybów [przyciągania](/Draft_Snap/pl "Draft Snap/pl") może powodować problemy z umieszczeniem elementu, więc spróbuj korzystać z jednej opcji na raz.

_Uwaga 2:_ czasami okno może być umieszczone poza [ścianą](/Arch_Wall/pl "Arch Wall/pl"). O ile element jest równoległy do tej ściany, powinieneś być w stanie ręcznie poprawić jego położenie.

## Otwieranie drzwi

10. W widoku drzewa wybierz `Sketch` leżący pod `Door` i naciśnij Space lub zmień właściwość WIDOK**Widoczność** na `PRAWDA`.

11. Kliknij dwukrotnie obiekt `Door` w widoku drzewa, aby rozpocząć edycję.

: 11.1. Wewnątrz ramy `elementów okna` znajdują się dwa panele, `Wire` i `Components`.
: _Uwaga:_ w przypadku prostego ustawienia drzwi są dwie polilinie, `Wire0` i `Wire1`, oraz dwa komponenty, `OuterFrame` i `Door`. Niestandardowo zaprojektowane [drzwi](/Arch_Door/pl "Arch Door/pl") mogą zawierać więcej polilinii i komponentów.

: 11.2. Kliknij na `Door` i kliknij przycisk Edycja. Spowoduje to wyświetlenie właściwości komponentu `Door`, takich jak `Name`, `Type`, `Wires`, `Thickness`, `Offset`, `Hinge` i `Opening mode`.
: 11.3. W widoku 3D wybierz tylko jedną pionową krawędź na widocznym szkicu drzwi, a następnie kliknij przycisk Pobierz wybraną krawędź. Przycisk powinien zmienić się na nazwę krawędzi, na przykład Edge8.
: 11.4. Zmień `Opening mode` na Arc 90 lub dowolną inną opcję.
: 11.5. Kliknij przycisk +Twórz/aktualizuj komponent, a następnie Zamknij, aby zakończyć edycję drzwi. Szkic może zostać ponownie ukryty.

![](/images/05_T01_window_edit.png)

Okno dialogowe do edycji okna lub drzwi

![](/images/06_T01_window_edit_component.png)

Okno dialogowe do edycji komponentów tworzących okno lub drzwi.

![](/images/06.1_T01_window_edit_wire_door_front.png)

Pionowa krawędź szkicu wybrana jako zawias drzwi.

12. Wybierz `Drzwi` i nadaj właściwości DANE**Otwarcie** wartość 45. Pełny panel drzwi powinien otwierać się do wewnątrz budynku.

13. Wybierz `Drzwi` i zmień właściwość DANE**Symbol Elevation** na `PRAWDA`. Końcówka utworzonej linii wskazuje, z której strony otwierają się drzwi. Jest to łatwiejsze do zauważenia, jeśli widok zostanie zmieniony na [od przodu](/Std_ViewFront/pl "Std ViewFront/pl"). Zmień właściwość DANE**Symbol Plan** na `PRAWDA`. Okrągły łuk powinien wskazywać zakres obrotu drzwi. Jest to łatwiejsze do zobaczenia, jeśli widok zostanie zmieniony na [od góry](/Std_ViewTop/pl "Std ViewTop/pl").

14. Powtórz kroki z obiektem `Drzwi001` i obiektem bazowym `Szkic001`, aby drzwi otwierały się pod kątem 75° do wnętrza budynku. Włącz także symbole elewacji i planu.

![](/images/07_T01_window_property_view.png)

Widok właściwości drzwi umożliwiający zmianę wartości otwarcia, symbolu elewacji, symbolu planu i innych opcji.

![](/images/08_T01_window_symbol_elevation.png)

Drzwi z symbolem otwarcia na rzucie elewacji, widok z przodu.

![](/images/09_T01_window_symbol_plan.png)

Drzwi z symbolem planu, widok z góry.

## Otwieranie drzwi

15. W widoku drzewa wybierz `Sketch002` leżący pod `Oknem` i naciśnij Spacja lub zmień właściwość WIDOK**Widoczność** na `PRAWDA`.

16. Kliknij dwukrotnie obiekt `Okno` w widoku drzewa, aby rozpocząć edycję.

: 16.1. Kliknij komponent `WewnętrznaRama` i kliknij przycisk Edytuj.

: 16.2. W widoku 3D zaznacz tylko jedną pionową krawędź w `Szkic002`. Linie reprezentujące `ZewnętrznaRama` i `WewnętrznaRama` są bardzo blisko siebie, więc [prybliż](/Std_ViewZoomIn "Std ViewZoomIn") widok szkicu, aby wybrać odpowiednią linię. Następnie kliknij przycisk Pobierz wybraną krawędź. Przycisk powinien zmienić się na nazwę krawędzi, na przykład Krawędź12.

_Uwaga:_ gdy na ekranie znajduje się wiele brył, że trudno jest wybrać tylko jedną krawędź, przełącz się na widok [szkieletowy](/Std_DrawStyle/pl#Szkieletowy "Std DrawStyle/pl"), aby usunąć powierzchnie tych brył i zobaczyć tylko same linie, krawędzie i kontury.

: 16.3. Zmień `Tryb otwierania` na `Łuk 90 wew`, lub dowolną inną opcję.

17. Wybierz `Okno` i nadaj właściwości DANE**Otwarcie** wartość 45. Wewnętrzna rama zawierająca przezroczyste szkło powinna otwierać się do wnętrza budynku.

18. Wybierz `Okno` i zmień właściwość DANE**Symbol Elevation** na `PRAWDA`. Końcówka utworzonej linii wskazuje, z której strony otwierają się drzwi. Jest to łatwiejsze do zauważenia, jeśli widok zostanie zmieniony na [od przodu](/Std_ViewFront/pl "Std ViewFront/pl"). Zmień właściwość DANE**Symbol Plan** na `PRAWDA`. Okrągły łuk powinien wskazywać zakres obrotu drzwi. Jest to łatwiejsze do zobaczenia, jeśli widok zostanie zmieniony na [od góry](/Std_ViewTop/pl "Std ViewTop/pl").

19. Powtórz kroki z obiektami `Okno001` i bazowym `Szkic003`, aby okno otwierało się pod kątem 75 stopni. Pokaż również symbole elewacji i planu. W tym przypadku nie wybieraj pionowej linii `WewnętrznaRama` jako zawiasu, ale wybierz górną linię poziomą. Oznacza to, że to okno będzie otwierać się inaczej niż pozostałe. Symbol elewacji będzie lepiej widoczny z [prawej strony](/Std_ViewRight/pl "Std ViewRight/pl"). Symbol planu będzie lepiej widoczny od [przodu](/Std_ViewFront/pl "Std ViewFront/pl"). Jednakże, ponieważ ściana zasłania widok, możesz zmienić jej właściwość WIDOK**Przezroczystość** na wartość taką jak 85, aby przez nią widzieć. Alternatywnie możesz także zmienić jej właściwość WIDOK**Tryb wyświetlania** na `Szkieletowy`, aby pokazać tylko jej krawędzie.

![](/images/06.2_T01_window_edit_wire_side_right.png)

Pozioma krawędź szkicu wybrana jako zawias okna.

![](/images/10_T01_window_all_symbol_axonometric.png)

Symbole elewacji i planu dla wszystkich elementów, widok aksonometryczny.

![](/images/11_T01_window_all_symbol_top.png)

Symbole elewacji i planu dla wszystkich elementów, widok z góry.

## Sporządzenie planu piętra budynku

20. Wciąż będąc w środowisku pracy [Architektura](/Arch_Workbench/pl "Arch Workbench/pl"), zaznacz wszystkie komponenty w widoku drzewa, [ściana](/Arch_Wall/pl "Arch Wall/pl"), dwa [oknas](/Arch_Window/pl "Arch Window/pl") i dwoje [drzwis](/Arch_Door/pl "Arch Door/pl"), a następnie użyj narzędzia [Płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl"), aby utworzyć obiekt `Przekroju`.

_Uwaga:_ zmień właściwość DANE**Wielkość strzałki** płaszczyzny przekroju na większą wartość, na przykład `200 mm`, aby kierunek przekroju był wyraźnie widoczny w widoku 3D.

![](/images/11.1_T01_Arch_SectionPlane_all.png)

Płaszczyzna przekroju przecinająca obiekty stałe, w tym ściany, drzwi i okna.

21. Przełącz się na środowisko pracy [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") i wstaw nową stronę za pomocą narzędzia [Wstaw nową domyślną stronę rysunku](/TechDraw_PageDefault/pl "TechDraw PageDefault/pl"). Zostanie utworzony nowy obiekt `Strona`, a widok zostanie przełączony na tę stronę. Wstawiona strona to standardowy arkusz formatu A4 w orientacji poziomej, z podstawowym obramowaniem. Użyj narzędzia [Wstaw nową stronę przy użyciu szablonu](/TechDraw_PageTemplate/pl "TechDraw PageTemplate/pl"), jeśli potrzebujesz utworzyć nową stronę przy użyciu określonego szablonu [Svg](/SVG/pl "SVG/pl").

22. Wybierz `Przekrój` i użyj narzędzia [Wstaw obiekt środowiska Architektura](/TechDraw_ArchView/pl "TechDraw ArchView/pl"), aby utworzyć obiekt `Widok architektoniczny` na stronie. Najprawdopodobniej nowy obiekt nie będzie widoczny na stronie, ponieważ ma bardzo dużą skalę `1`, czyli 1:1. Oznacza to, że każdy metr w widoku 3D jest wyświetlany jako metr w widoku strony. Ponieważ strona ma rozmiar zaledwie 0,297 m x 0,210 m, większość elementów jest zbyt duża, aby zmieścić się na tej stronie w ich naturalnej skali.

23. Wybierz obiekt `Widok architektoniczny` i zmień właściwość DANE**Skala** na `0.02`, co odpowiada skali 1:50, odpowiedniej dla typowych budynków. Oznacza to, że każdy metr w widoku 3D będzie wyświetlany jako 20 mm na stronie. Obiekt powinien pojawić się na środku strony i może zostać przesunięty w lepsze miejsce po lewej stronie. Dwoje drzwi powinno wyglądać na otwarte, ale tylko lewe okno powinno wyglądać na otwarte. Powodem, dla którego prawe okno nie pojawia się w rzucie, jest to, że płaszczyzna zdefiniowana przez `Przekrój` nie przecina tego prawego okna.

![Section view of the building, A4 sheet, scale 1:50](/images/12_T01_TechDraw_window_all_symbols.png)

Section view of the building, A4 sheet, scale 1:50

Płaszczyzna przekroju przecinająca obiekty stałe, w tym ściany, drzwi i okna.

24. Wróć do środowiska pracy [Architektura](/Arch_Workbench/pl "Arch Workbench/pl"). W widoku drzewa ponownie wybierz wszystkie komponenty i użyj narzędzia [Płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl"), aby utworzyć drugi obiekt `Przekrój001`.

: 24.1. Wybierz `Przekrój001` i zmień właściwość DANE**Pozycja** na `[1.5 m, 2.0 m, 1.8 m]`. Ta druga płaszczyzna przecina wszystkie obiekty Architektoniczne.
: 24.2. Wróć do środowiska [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl"). Wybierz `Przekrój001`, użyj narzędzia [Wstaw obiekt środowiska Architektura](/TechDraw_ArchView/pl "TechDraw ArchView/pl"), aby utworzyć `ArchView001` i ustaw właściwość DANE**Skala** na `0.02`. Nowy widok na stronie Rysunku technicznego pokazuje teraz wszystkie otwory w [ścianie](/Arch_Wall/pl "Arch Wall/pl") utworzone przez drzwi i okna.

_Uwaga:_ ustawienie właściwości DANE**All On** na `PRAWDA` dla obiektów [Wstaw obiekt środowiska Architektura](/TechDraw_ArchView/pl "TechDraw ArchView/pl") powoduje, że wszystkie elementy przecięte przez płaszczyznę są widoczne na stronie, niezależnie od ich stanu widoczności w widoku 3D. Opcję DANE**Pokaż wypełnienie** również można ustawić na `PRAWDA`, aby pokazać cień na bryłach, które zostały przecięte przez płaszczyznę przekroju.

![](/images/13_T01_TechDraw_window_all_symbols_higher.png)

Widok przekroju budynku z wyciętą drugą płaszczyzną, arkusz A4, skala 1:50

## Wykonanie rzutu elewacji budynku

25. Wróć do środowiska pracy [Architektura](/Arch_Workbench/pl "Arch Workbench/pl"). W widoku drzewa zaznacz wszystkie komponenty, [ściana](/Arch_Wall/pl "Arch Wall/pl"), dwa [okna](/Arch_Window/pl "Arch Window/pl") i dwoje [drzwis](/Arch_Door/pl "Arch Door/pl"), a następnie użyj narzędzia [Płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl"), aby utworzyć trzeci element `Przektój002`.

: 25.1. Obróć `Przektój002`, tak aby przecinał pionowo budynek. Zmień właściwości DANE**Oś** na `[1, 0, 0]` i DANE**Kąt** na `90`.
: 25.2. Zmień właściwość DANE**Pozycja** na `[1.5 m, -1 m, 1.5 m]`, aby płaszczyzna znajdowała się przed budynkiem.

![](/images/14.1_T01_Arch_SectionPlane_three.png)

Płaszczyzny przekroju, które przecinają lub patrzą na budynek i obiekty stałe.

26. Wróć do środowiska pracy [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") i użyj narzędzia [Wstaw obiekt środowiska Architektura](/TechDraw_ArchView/pl "TechDraw ArchView/pl") na obiektcie `Przekrój002`. Pamiętaj o dostosowaniu skali do `0.02` _(1:50)_. Zmień właściwość DANE**Obrót** na `-90`, aby skorygować wygląd rzutów. Ułóż `ArchView002` obok innych widoków na stronie. Ten trzeci rzut przedstawia budynek od frontu.

![](/images/14_T01_TechDraw_window_all_symbols_elevation.png)

Widok przekroju budynku, dwa widoki z góry i jeden widok elewacji, arkusz A4, skala 1:50.

## Współdziałanie środowiska Architektura i Rysunek Techniczny

Na dzień pisania tego poradnika _(FreeCAD 0.18, listopad 2018)_, środowisko pracy [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") może wyświetlać na swoich stronach tylko to, co środowisko [Architektura](/Arch_Workbench/pl "Arch Workbench/pl"), zapewnia eksport jako [SVG](/SVG/pl "SVG/pl"). Oznacza to, że wygląd elementów zawartych w narzędziu [Płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl"), i wyświetlanych przez narzędzie [Wstaw obiekt środowiska Architektura](/TechDraw_ArchView/pl "TechDraw ArchView/pl"), jest kontrolowany przez środowisko [Architektura](/Arch_Workbench/pl "Arch Workbench/pl").

Środowisko pracy [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") ma tylko minimalną kontrolę nad tym, jak wyświetla te obiekty [płaszczyzny przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl") _(`ArchView`)_. Dlatego raporty o błędach i prośby o dodanie funkcji dotyczących wyświetlania elementów Architektury powinny być zgłaszane do obu środowisk pracy.

Bliska interakcja między środowiskami pracy jest planowana na przyszłe wersje FreeCAD. W tych wersjach oczekuje się rozwiązania długotrwałych problemów, takich jak kontrola cech linii i powierzchni _(grubość linii, kolor linii, kolor powierzchni, wzory kreskowania i inne)_.

Retrieved from "<http://wiki.freecad.org/index.php?title=Tutorial_for_open_windows/pl&oldid=1433950>"
