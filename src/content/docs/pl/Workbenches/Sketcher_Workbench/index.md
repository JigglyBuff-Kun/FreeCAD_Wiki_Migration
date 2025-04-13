---
title: Środowisko pracy Szkicownik
---

![](/images/Workbench_Sketcher.svg)

Ikonka FreeCAD dla Środowiska pracy Szkicownik

## Wprowadzenie

Dzięki środowisku pracy ![](/images/Workbench_Sketcher.svg) **Szkicownik** można tworzyć szkice 2D przeznaczone do wykorzystania w innych środowiskach pracy. Szkice 2D są punktem wyjścia dla wielu modeli CAD. Zazwyczaj definiują one kształt i ścieżkę dla operacji tworzenia kształtów 3D. Ostateczny kształt modelu może zależeć od kilku szkiców.

Wraz z operacjami logicznymi zdefiniowanymi w środowisku pracy ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl"), środowisko pracy Szkicownik, lub w skrócie "Szkicownik", stanowi podstawę [konstrukcyjnej geometrii brył](/Constructive_solid_geometry/pl "Constructive solid geometry/pl") _(CSG)_ metody budowania brył. Wraz z operacjami środowiska pracy ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"), stanowi również podstawę [edycji cech](/Feature_editing/pl "Feature editing/pl") metodologii tworzenia brył. Jednak wiele innych środowisk pracy również korzysta ze szkiców.

Środowisko pracy Szkicownik posiada **[wiązania](#Wiązania)**, dzięki czemu kształty 2D mogą podążać za precyzyjnymi definicjami geometrycznymi pod względem długości, kątów i relacji _(poziomość, pionowość, prostopadłość itp.)_.
Narzędzie do tworzenia wiązań oblicza wymagany zakres geometrii 2D i umożliwia przeprowadzenie interaktywnej eksploracji stopni swobody szkicu.

Szkicownik nie jest przeznaczony do tworzenia planów 2D. Po użyciu szkiców do wygenerowania bryły są one automatycznie ukrywane, a wiązania są widoczne tylko w trybie edycji szkicu. Jeśli potrzebujesz tworzyć tylko widoki 2D do druku i nie chcesz tworzyć modeli 3D, wypróbuj środowisko pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl").

![](/images/FC_ConstrainedSketch.png)

W pełni związany szkic.

## Wiązania

Zamiast wymiarów, wiązania są stosowane w celu ograniczenia stopnia swobody obiektu. Na przykład, linia bez wiązań ma 4 [stopnie swobody](#Degrees_Of_Freedom/pl) _(w skrócie "DoF")_: można ją przesuwać w poziomie lub w pionie, można ją rozciągać i obracać.

Wykorzystanie wiązania poziomego lub pionowego, lub wiązania kąta _(względem innej linii lub jednej z osi)_, ograniczy jej zdolność do obracania pozostawiając ją z 3 stopniami swobody. Zablokowanie jednego z punktów w relacji do układu współrzędnych usunie kolejne dwa stopnie. W końcu zastosowanie wiązania wymiaru usunie ostatni stopień swobody. Linia jest w wtedy uznawana za **w pełni ograniczoną więzami**.

Obiekty mogą być ze sobą związane. Dwie linie mogą być połączone przez jeden z ich punktów za pomocą wiązania punktu zbieżnego. Można ustawić kąt między nimi lub określić ich prostopadłość. Linia może być styczna do łuku lub okręgu itd. Złożony szkic z wieloma obiektami może mieć wiele różnych rozwiązań, a uczynienie go **w pełni związanym** może oznaczać, że tylko jedno z tych możliwych rozwiązań zostało osiągnięte na podstawie zastosowanych wiązań.

Są dwa typy wiązań: geometryczne i wymiarowe. Są one opisane dokładnej w poniższej sekcji [Narzędzia](#Narzędzia).

### Edycja wiązań

Gdy utworzone jest [wiązanie konstrukcyjne](/Sketcher_ToggleDrivingConstraint/pl "Sketcher ToggleDrivingConstraint/pl") i gdy wybrana jest opcja **Spytaj o wartość po stworzeniu wiązania wymiaru** w [preferencjach](/Sketcher_Preferences/pl#Wyświetlanie "Sketcher Preferences/pl") _(domyślnie)_, otworzy się okno dialogowe do edycji jej wartości.

![Sketcher_Edit_Constraint.png](/images/Sketcher_Edit_Constraint.png)

Można wprowadzić wartość liczbową lub [wyrażenie](/Expressions/pl "Expressions/pl"), a także można nazwać wiązanie, aby ułatwić jego użycie w innych wyrażeniach. Można również zaznaczyć pole wyboru **Odniesienie**, aby przełączyć wiązanie w [tryb odniesienia](/Sketcher_ToggleDrivingConstraint/pl "Sketcher ToggleDrivingConstraint/pl").

Aby edytować wartość istniejącego wiązania wymiarowego, wykonaj jedną z poniższych czynności:

- Kliknij dwukrotnie wartość wiązania w [Widoku 3D](/3D_view/pl "3D view/pl").
- Kliknij dwukrotnie wiązanie w [oknie dialogowym szkicownika](/Sketcher_Dialog/pl "Sketcher Dialog/pl").
- Kliknij prawym przyciskiem myszy wiązanie w oknie dialogowym szkicownika i wybierz opcję **Zmień wartość** z menu kontekstowego.

### Zmiana położenia wiązań

Ograniczenia wymiarowe można zmieniać w widoku 3D poprzez przeciąganie. Przytrzymaj lewy przycisk myszy nad wartością ograniczenia i przesuń kursor myszki. Symbole ograniczeń geometrycznych są pozycjonowane automatycznie i nie można ich przesuwać.

## Szkice profilowe

Aby utworzyć szkic, który może być użyty jako profil do generowania brył, należy przestrzegać pewnych zasad:

- Szkic musi zawierać tylko zamknięte kontury. Odstępy między punktami końcowymi, nawet najmniejsze, są niedozwolone.
- Kontury mogą być zagnieżdżane, aby tworzyć puste przestrzenie, ale nie powinny przecinać się ani przecinać innych konturów.
- Kontury nie mogą współdzielić krawędzi z innymi konturami. Należy unikać zduplikowanych krawędzi.
- Połączenia T, czyli więcej niż dwie krawędzie dzielące wspólny punkt lub punkt dotykający krawędzi, są niedozwolone.

Reguły te nie mają zastosowania do geometrii konstrukcyjnej _(domyślny kolor niebieski)_, która nie jest wyświetlana poza trybem edycji lub jeśli szkic jest używany do innego celu. W zależności od środowiska pracy i narzędzia, które będzie używać szkicu profilu, mogą obowiązywać dodatkowe restrykcje.

## Pomoce kreślarskie

Środowisko pracy Szkicownik ma kilka pomocy rysunkowych i innych funkcji, które mogą pomóc podczas tworzenia geometrii i stosowania wiązań.

### Tryby kontynuacji

W [konfiguracji](/Sketcher_Preferences/pl#Wyświetlanie "Sketcher Preferences/pl") istnieją dwa tryby kontynuacji: **Tworzenie geometrii "Tryb kontynuacji"** i **Tworzenie wiązań "Tryb kontynuacji"**. Jeśli są one zaznaczone _(domyślnie)_, powiązane narzędzia uruchomią się ponownie po zakończeniu. Aby wyjść z narzędzia ciągłego, należy nacisnąć Esc lub prawy przycisk myszy. Czynność tę należy powtórzyć, jeśli narzędzie geometrii ciągłej zostało już wprowadzone. Narzędzie ciągłe można również zamknąć, uruchamiając inne narzędzie do tworzenia geometrii lub wiązań. Należy pamiętać, że naciśnięcie Esc, gdy żadne narzędzie nie jest aktywne, spowoduje wyjście z trybu edycji szkicu. Odznacz opcję **Klawisz Esc umożliwia wyjście z trybu edycji szkicu** w [konfiguracji](/Sketcher_Preferences/pl#Ogólne "Sketcher Preferences/pl"), jeśli często nieumyślnie naciskasz Esc zbyt wiele razy.

### Wiązania automatyczne

W szkicach z zaznaczoną opcją **Automatyczne wiązania** _(domyślnie)_ kilka wiązań jest nakładanych automatycznie. Ikona proponowanego wiązania automatycznego jest wyświetlana obok kursora, gdy jest on prawidłowo umieszczony. Kliknięcie lewym przyciskiem myszy spowoduje zastosowanie tego wiązania. Jest to ustawienie dla każdego szkicu, które można zmienić w [oknie dialogowym](/Sketcher_Dialog/pl#Wiązania "Sketcher Dialog/pl") lub zmieniając [właściwość](/Property_editor/pl "Property editor/pl") szkicu WIDOK**Wiązania automatyczne**.

Następujące wiązania są stosowane automatycznie:

- [wiązanie zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl"),
- [punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl"),
- [poziomo](/Sketcher_ConstrainHorizontal/pl "Sketcher ConstrainHorizontal/pl"),
- [pionowo](/Sketcher_ConstrainVertical/pl "Sketcher ConstrainVertical/pl"),
- [stycznie](/Sketcher_ConstrainTangent/pl "Sketcher ConstrainTangent/pl"),
- [dostępne w wersji 0.22](/Release_notes_0.22/pl "Release notes 0.22/pl"): [wiązanie symetrii](/Sketcher_ConstrainSymmetric/pl "Sketcher ConstrainSymmetric/pl") _(punkt środkowy linii)_.

### Przyciąganie

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

Możliwe jest [przyciągnięcie](/Sketcher_Snap/pl "Sketcher Snap/pl") do linii siatki i przecięć siatki, do krawędzi geometrii i punktów środkowych linii i łuków oraz do pewnych kątów. Należy pamiętać, że przyciąganie samo w sobie nie tworzy wiązań. Na przykład, tylko jeśli włączono [wiązania automatyczne](#Wiązania_automatyczne), przyciąganie do krawędzi utworzy wiązanie [punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl"). Ale samo wybranie punktu na krawędzi dałoby ten sam rezultat.

### Parametry wyświetlane na ekranie

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

W zależności od wybranej opcji w [ustawieniach](/Sketcher_Preferences/pl#Ogólne "Sketcher Preferences/pl") można włączyć tylko wymiarowe parametry widoku lub zarówno wymiarowe, jak i pozycyjne parametry widoku. Parametry pozycyjne umożliwiają wprowadzenie dokładnych współrzędnych, na przykład środka okręgu lub punktu początkowego linii. Parametry wymiarowe umożliwiają wprowadzenie dokładnych wymiarów, na przykład promienia okręgu lub długości i kąta linii. Parametry w widoku nie są dostępne dla wszystkich narzędzi.

![](/images/Sketcher_On_view_parameters_positional.png)

Określanie punktu środkowego okręgu z włączonymi parametrami pozycji.

![](/images/Sketcher_On_view_parameters_dimensional.png)

Wyznaczanie promienia okręgu z włączonymi parametrami wymiarowymi.

Jeśli wartości zostaną wprowadzone i potwierdzone przez naciśnięcie Enter lub Tab, powiązane wiązania zostaną dodane automatycznie. Jeśli jednocześnie wyświetlane są dwa parametry, na przykład współrzędne X i Y punktu, możliwe jest wprowadzenie jednej wartości i wybranie punktu w celu zdefiniowania drugiej. W zależności od obiektu mogą być wymagane dodatkowe wiązania, aby w pełni go ograniczyć. Wiązania wynikające z parametrów w widoku mają pierwszeństwo przed tymi, które mogą wynikać z [wiązań automatycznych](/Sketcher_Dialog/pl#Wiązania "Sketcher Dialog/pl").

![](/images/Sketcher_ArcExample3.png)

Łuk utworzony przez wprowadzenie wszystkich parametrów w widoku z automatycznie utworzonymi wiązaniami.

### Wyświetlanie współrzędnych

Jeśli opcja **Pokaż współrzędne obok kursora myszki podczas edycji** [preferencji](/Sketcher_Preferences/pl#Wyświetlanie "Sketcher Preferences/pl") jest zaznaczona _(domyślnie)_, parametry bieżącego narzędzia geometrii _(współrzędne, promień lub długość i kąt)_ są wyświetlane obok kursora. Ta opcja jest wyłączona, gdy wyświetlane są parametry w widoku.

## Metody zaznaczenia

Gdy szkic znajduje się w trybie edycji, można użyć następujących metod wyboru:

### Wybór elementu w widoku 3D

Podobnie jak w innych obszarach FreeCAD, element można wybrać w oknie [widoku 3D](/3D_view/pl "3D view/pl") za pomocą jednego kliknięcia lewym przyciskiem myszy. Nie ma jednak potrzeby przytrzymywania klawisza Ctrl podczas wybierania wielu elementów. Przytrzymanie tego klawisza jest jednak możliwe i ma tę zaletę, że można błędnie kliknąć bez utraty zaznaczenia. W ten sposób można zaznaczać krawędzie, punkty i wiązania.

### Zaznaczanie obszarem w widoku 3D

Zaznaczenie ramką w widoku 3D działa bez użycia narzędzia [Zaznacz obszar](/Std_BoxSelection/pl "Std BoxSelection/pl") lub [Wybór elementów ramką zaznaczenia](/Std_BoxElementSelection/pl "Std BoxElementSelection/pl"):

1. Upewnij się, że żadne narzędzie nie jest aktywne.
2. Wykonaj jedną z następujących czynności:
   - Kliknij w pustym obszarze i przeciągnij prostokąt od lewej do prawej, aby zaznaczyć elementy leżące całkowicie wewnątrz prostokąta.
   - Kliknij w pustym obszarze i przeciągnij prostokąt od prawej do lewej, aby zaznaczyć również elementy, które dotykają lub przecinają prostokąt.

Można zaznaczać krawędzie i punkty w ramkach, ale nie można zaznaczać wiązań.

### Zaznaczanie połączonej geometrii w widoku 3D

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

Dwukrotne kliknięcie krawędzi w widoku 3D spowoduje zaznaczenie wszystkich krawędzi bezpośrednio i pośrednio połączonych z tą krawędzią poprzez punkty końcowe. Nie ma potrzeby, aby krawędzie były połączone [więzem zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl"), punkty końcowe muszą mieć tylko te same współrzędne.

### Zaznaczanie w oknie dialogowym szkicownika

Krawędzie i punkty można również wybierać z sekcji Elementy [okna dialogowego](/Sketcher_Dialog/pl "Sketcher Dialog/pl"), a wiązania z sekcji Wiązania tego okna dialogowego.

## Kopiowanie, wycinanie i wklejanie

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

Standardowe skróty klawiaturowe Ctrl + C, wycinania, Ctrl + X, Ctrl + V mogą być używane do kopiowania, wycinania i wklejania wybranej geometrii Szkicownika wraz z powiązanymi ograniczeniami. Narzędzia te są również dostępne w menu **Szkic → Narzędzia szkicownika**. Można ich używać w ramach tego samego szkicu, ale także między różnymi szkicami lub oddzielnymi instancjami FreeCAD. Ponieważ dane są kopiowane do schowka w postaci kodu Python, mogą być również wykorzystywane w inny sposób _(np. udostępniane na forum)_.

## Przybory

Narzędzia środowiska pracy szkicownika znajdują się w menu Szkic i/lub na kilku paskach narzędziowych. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"): Prawie wszystkie paski narzędzi szkicownika są wyświetlane tylko wtedy, gdy szkic jest w trybie edycji. Jedynym wyjątkiem jest pasek narzędzi [szkicownika](#Pasek_narzędzi_szkicownika), który jest wyświetlany tylko wtedy, gdy żaden szkic nie jest w trybie edycji.

Niektóre narzędzia są również dostępne z menu kontekstowego [Widoku 3D](/3D_view/pl "3D view/pl"), gdy szkic jest w trybie edycji, lub z menu kontekstowego [okna dialogowego szkicownika](/Sketcher_Dialog/pl "Sketcher Dialog/pl").

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"): Jeśli szkic jest w trybie edycji, pasek narzędzi **Konstrukcja** jest ukryty, ponieważ żadne z jego narzędzi nie może być wtedy użyte.

### Informacje ogólne

#### Pasek narzędzi szkicownika

- ![](/images/Sketcher_NewSketch.svg) [Utwórz szkic](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl"): Tworzy nowy szkic i otwiera [okno dialogowe szkicownika](/Sketcher_Dialog/pl "Sketcher Dialog/pl"), aby go edytować.

- ![](/images/Sketcher_EditSketch.svg) [Edycja szkicu](/Sketcher_EditSketch/pl "Sketcher EditSketch/pl"): Edytuj wybrany szkic. Otwiera [Okna dialogowego Szkicownika](/Sketcher_Dialog/pl "Sketcher Dialog/pl") do edycji istniejącego szkicu.

- ![](/images/Sketcher_MapSketch.svg) [Mapuj szkic na płaszczyznę](/Sketcher_MapSketch/pl "Sketcher MapSketch/pl"): Dołącza szkic do wybranej geometrii.

- ![](/images/Sketcher_ReorientSketch.svg) [Zmień orientacje szkicu](/Sketcher_ReorientSketch/pl "Sketcher ReorientSketch/pl"): Umieszcza szkic na jednej z głównych płaszczyzn z opcjonalnym przesunięciem. Może być również używane do odłączania szkicu.

- ![](/images/Sketcher_ValidateSketch.svg) [Sprawdź poprawność szkicu](/Sketcher_ValidateSketch/pl "Sketcher ValidateSketch/pl"): Potrafi analizować i naprawiać szkic, którego nie można już edytować lub który zawiera nieprawidłowe wiązania, a także dodawać brakujące wiązania zbieżne.

- ![](/images/Sketcher_MergeSketch.svg) [Połącz szkice](/Sketcher_MergeSketches "Sketcher MergeSketches"): Łączy ze sobą dwa lub więcej szkiców.

- ![](/images/Sketcher_MirrorSketch.svg) [Odbicie lustrzane](/Sketcher_MirrorSketch "Sketcher MirrorSketch"): Odbicie szkicu w poprzek ich osi X, osi Y, lub punktu początku układu współrzędnych.

#### Pasek narzędzi trybu edycji szkicownika

- ![](/images/Sketcher_LeaveSketch.svg) [Opuść szkic](/Sketcher_LeaveSketch/pl "Sketcher LeaveSketch/pl"): Kończy tryb edycji szkicu i zamyka [okno dialogowe](/Sketcher_Dialog/pl "Sketcher Dialog/pl") Szkicownka.

- ![](/images/Sketcher_ViewSketch.svg) [Widok szkicu](/Sketcher_ViewSketch/pl "Sketcher ViewSketch/pl"): Wyrównuje [widok 3D](/3D_view/pl "3D view/pl") ze szkicem.

- ![](/images/Sketcher_ViewSection.svg) [Zobacz przekrój](/Sketcher_ViewSection/pl "Sketcher ViewSection/pl"): Uaktywnia tymczasową płaszczyznę przekroju, która ukrywa wszelkie obiekty i części obiektów znajdujące się przed płaszczyzną szkicu.

#### Pasek narzędzi edycji szkicownika

- ![](/images/Sketcher_Grid.svg) [Przełącz widoczność siatki](/Sketcher_Grid/pl "Sketcher Grid/pl"): Włącza lub wyłącza siatkę w aktualnie edytowanym szkicu. Ustawienia można zmienić w powiązanym menu. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

- ![](/images/Sketcher_Snap.svg) [Przełącz przyciąganie](/Sketcher_Snap/pl "Sketcher Snap/pl"): Włącza lub wyłącza przyciąganie we wszystkich szkicach. Ustawienia można zmienić w powiązanym menu. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

- ![](/images/Sketcher_RenderingOrder.svg) [Konfiguruj kolejność renderowania](/Sketcher_RenderingOrder/pl "Sketcher RenderingOrder/pl"): Kolejność renderowania wszystkich szkiców można zmienić w powiązanym menu. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl").

#### Pozostałe

- ![](/images/Sketcher_StopOperation.svg) [Przerwij operację](/Sketcher_StopOperation/pl "Sketcher StopOperation/pl"): Zatrzymuje aktualnie uruchomione narzędzie do tworzenia geometrii lub wiązań.

### Geometria w szkicowniku

Poniżej znajdują się narzędzia do tworzenia obiektów.

- ![](/images/Sketcher_CreatePoint.svg) [Utwórz punkt na szkicu](/Sketcher_CreatePoint/pl "Sketcher CreatePoint/pl"): Twotrzy punkt.

- ![](/images/Sketcher_CreatePolyline.svg) [Utwórz polilinię](/Sketcher_CreatePolyline/pl "Sketcher CreatePolyline/pl"): Tworzy serię segmentów linii i łuków połączonych punktami końcowymi. Narzędzie ma kilka trybów.

- ![](/images/Sketcher_CreateLine.svg) [Utwórz linię na szkicu](/Sketcher_CreateLine/pl "Sketcher CreateLine/pl"): Tworzy linię. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Narzędzie ma trzy tryby.

- ![](/images/Sketcher_CreateArc.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Utwórz łuk:

- ![](/images/Sketcher_CreateArc.svg) [Utwórz łuk przez środek](/Sketcher_CreateArc/pl "Sketcher CreateArc/pl"): Tworzy łuk na podstawie jego środka i punktów końcowych. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Lub przez punkty końcowe i punkt wzdłuż łuku.

- ![](/images/Sketcher_Create3PointArc.svg) [Utwórz łuk przez trzy punkty na obwodzie](/Sketcher_Create3PointArc "Sketcher Create3PointArc"): Tworzy łuk na podstawie jego punktów końcowych i punktu wzdłuż łuku. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Jest to to samo narzędzie co [Utwórz łuk przez środek](/Sketcher_CreateArc/pl "Sketcher CreateArc/pl"), ale z innym trybem początkowym.

- ![](/images/Sketcher_CreateArcOfEllipse.svg) [Utwórz łuk na podstawie elipsy](/Sketcher_CreateArcOfEllipse/pl "Sketcher CreateArcOfEllipse/pl"): Tworzy łuk elipsy według punktu środkowego, głównego promienia, punktu początkowego i końcowego.

- ![](/images/Sketcher_CreateArcOfHyperbola.svg) [Utwórz łuk na podstawie hiperboli](/Sketcher_CreateArcOfHyperbola/pl "Sketcher CreateArcOfHyperbola/pl"): Twotzy łuk hiperboli.

- ![](/images/Sketcher_CreateArcOfParabola.svg) [Utwórz łuk na podstawie paraboli](/Sketcher_CreateArcOfParabola/pl "Sketcher CreateArcOfParabola/pl"): Twotzy łuk paraboli.

- ![](/images/Sketcher_CreateCircle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Tworzy okrąg / elipsę:

- ![](/images/Sketcher_CreateCircle.svg) [Utwórz okrąg przez środek](/Sketcher_CreateCircle/pl "Sketcher CreateCircle/pl"): Tworzy okrąg przez jego środek i punkt wzdłuż okręgu. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Lub przez trzy punkty wzdłuż okręgu.

- ![](/images/Sketcher_Create3PointCircle.svg) [Utwórz okrąg przez trzy punkty](/Sketcher_Create3PointCircle "Sketcher Create3PointCircle"): Tworzy okrąg przez trzy punkty wzdłuż okręgu. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Jest to to samo narzędzie co [Utwórz okrąg przez środek](/Sketcher_CreateCircle/pl "Sketcher CreateCircle/pl"), ale z innym trybem początkowym.

- ![](/images/Sketcher_CreateEllipseByCenter.svg) [Utwórz elipsę przez środek](/Sketcher_CreateEllipseByCenter/pl "Sketcher CreateEllipseByCenter/pl"): Tworzy elipsę według jej środka, punktu końcowego jednej z jej osi i punktu wzdłuż elipsy. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Lub przez oba punkty końcowe jednej z jej osi i punkt wzdłuż elipsy.

- ![](/images/Sketcher_CreateEllipseBy3Points.svg) [Utwórz elipsę przez trzy punkty](/Sketcher_CreateEllipseBy3Points/pl "Sketcher CreateEllipseBy3Points/pl"): Tworzy elipsę przez punkty końcowe jednej z jej osi i punkt wzdłuż elipsy. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Jest to to samo narzędzie co [Utwórz elipsę przez środek](/Sketcher_CreateEllipseByCenter/pl "Sketcher CreateEllipseByCenter/pl"), ale z innym trybem początkowym.

- ![](/images/Sketcher_CreateRectangle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Utwórz prostokąt:

- ![](/images/Sketcher_CreateRectangle.svg) [Utwórz prostokąt](/Sketcher_CreateRectangle/pl "Sketcher CreateRectangle/pl"): Tworzy prostokąt. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Narzędzie ma cztery tryby. Zaokrąglone rogi i tworzenie kopii z przesunięciem są funkcjami opcjonalnymi.

- ![](/images/Sketcher_CreateRectangle_Center.svg) [Prostokąt wyśrodkowany](/Sketcher_CreateRectangle_Center/pl "Sketcher CreateRectangle Center/pl"): Tworzy wyśrodkowany prostokąt. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Jest to to samo narzędzie co [Utwórz prostokąt](/Sketcher_CreateRectangle/pl "Sketcher CreateRectangle/pl"), ale z innym trybem początkowym.

- ![](/images/Sketcher_CreateOblong.svg) [Prostokąt zaokrąglony](/Sketcher_CreateOblong/pl "Sketcher CreateOblong/pl"): Tworzy zaokrąglony prostokąt. Analogicznie.

- ![](/images/Sketcher_CreateHexagon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Utwórz wielokąt foremny:

- ![](/images/Sketcher_CreateTriangle.svg) [Trójkąt](/Sketcher_CreateTriangle/pl "Sketcher CreateTriangle/pl"): tworzy trójkąt równoboczny. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Jest to to samo narzędzie co [Utwórz wielokąt foremny](/Sketcher_CreateRegularPolygon/pl "Sketcher CreateRegularPolygon/pl"), ale z liczbą boków ustawioną na określoną wartość.

- ![](/images/Sketcher_CreateSquare.svg) [Kwadrat](/Sketcher_CreateSquare/pl "Sketcher CreateSquare/pl"): Tworzy kwadrat. Analogicznie.

- ![](/images/Sketcher_CreatePentagon.svg) [Pięciokąt](/Sketcher_CreatePentagon/pl "Sketcher CreatePentagon/pl"): Tworzy pięciokąt foremny. Analogicznie.

- ![](/images/Sketcher_CreateHexagon.svg) [Sześciokąt](/Sketcher_CreateHexagon/pl "Sketcher CreateHexagon/pl"): Tworzy sześciokąt foremny. Analogicznie.

- ![](/images/Sketcher_CreateHeptagon.svg) [Siedmiokąt](/Sketcher_CreateHeptagon/pl "Sketcher CreateHeptagon/pl"): Tworzy siedmiokąt foremny. Analogicznie.

- ![](/images/Sketcher_CreateOctagon.svg) [Ośmiokąt](/Sketcher_CreateOctagon "Sketcher CreateOctagon"): Tworzy ośmiokąt foremny. Analogicznie.

- ![](/images/Sketcher_CreateRegularPolygon.svg) [Wielokąt foremny](/Sketcher_CreateRegularPolygon/pl "Sketcher CreateRegularPolygon/pl"): Tworzy wielokąt foremny. Można określić liczbę boków.

- ![](/images/Sketcher_CreateSlot.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Utwórz owal:

- ![](/images/Sketcher_CreateSlot.svg) [Utwórz szczelinę](/Sketcher_CreateSlot/pl "Sketcher CreateSlot/pl"): Rysuje owal.

- ![](/images/Sketcher_CreateArcSlot.svg) [Utwórz szczelinę łukową](/Sketcher_CreateArcSlot/pl "Sketcher CreateArcSlot/pl"): Rysuje owal na łuku. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/Sketcher_CreateBSpline.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Tworzy krzywą złozoną:

- ![](/images/Sketcher_CreateBSpline.svg) [Krzywa złożona przez punkty kontrolne](/Sketcher_CreateBSpline/pl "Sketcher CreateBSpline/pl"): Tworzy krzywą złożoną za pomocą punktów kontrolnych. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Lub za pomocą węzłów.

- ![](/images/Sketcher_CreatePeriodicBSpline.svg) [Okresowa krzywa złożona przez punkty kontrolne](/Sketcher_CreatePeriodicBSpline/pl "Sketcher CreatePeriodicBSpline/pl"): Tworzy okresową _(zamkniętą)_ krzywą złożoną za pomocą punktów kontrolnych. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): To jest to samo narzędzie co [Krzywa złożona przez punkty kontrolne](/Sketcher_CreateBSpline/pl "Sketcher CreateBSpline/pl"), ale z innym trybem początkowym.

- ![](/images/Sketcher_CreateBSplineByInterpolation.svg) [Krzywa złozona przez węzły](/Sketcher_CreateBSplineByInterpolation/pl "Sketcher CreateBSplineByInterpolation/pl"): Tworzy krzywą złożoną przez węzły.

- ![](/images/Sketcher_CreatePeriodicBSplineByInterpolation.svg) [Okresowa krzywa złożona przez węzły](/Sketcher_CreatePeriodicBSplineByInterpolation/pl "Sketcher CreatePeriodicBSplineByInterpolation/pl"): Tworzy okresową krzywą złożoną przez węzły.

- ![](/images/Sketcher_ToggleConstruction.svg) [Przełącz tryb konstrukcji](/Sketcher_ToggleConstruction/pl "Sketcher ToggleConstruction/pl"): Przełącza narzędzia do tworzenia geometrii do / z trybu konstrukcyjnego lub przełącza wybraną geometrię do / z geometrii konstrukcyjnej.

### Wiązania w szkicowniku

Są to narzędzia do tworzenia [wiązań](#Wiązania).
Niektóre z nich wymagają użycia [wiązań pomocniczych](/Sketcher_helper_constraint/pl "Sketcher helper constraint/pl").

- ![](/images/Sketcher_Dimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Wiązanie wymiaru:

- ![](/images/Sketcher_Dimension.svg) [Wiązanie odległości](/Sketcher_Dimension/pl "Sketcher Dimension/pl"): Jest kontekstowym narzędziem wiązań w środowisku pracy Szkicownika. Na podstawie bieżącego wyboru oferuje odpowiednie wiązania wymiarowe, ale także wiązania geometryczne. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/Sketcher_ConstrainDistanceX.svg) [Zwiąż odległość poziomą](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl"): Określa odległość poziomą między dwoma punktami lub punktami końcowymi linii. Jeśli wstępnie wybrano pojedynczy punkt, odległość jest określana względem początku szkicu.

- ![](/images/Sketcher_ConstrainDistanceY.svg) [Zwiąż odległość pionową](/Sketcher_ConstrainDistanceY/pl "Sketcher ConstrainDistanceY/pl"): Określa odległość pionową między dwoma punktami lub punktami końcowymi linii. Jeśli wstępnie wybrano pojedynczy punkt, odległość jest określana względem początku szkicu.

- ![](/images/Sketcher_ConstrainDistance.svg) [Wiązanie odległości](/Sketcher_ConstrainDistance/pl "Sketcher ConstrainDistance/pl"): Określa długość prostej, odległość między dwoma punktami, odległość prostopadłą między punktem a prostą, lub [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21"), odległość między krawędziami dwóch okręgów lub łuków, lub między krawędzią okręgu lub łuku a prostą lub [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"), odległość między krawędziami dwóch łuków.

- ![](/images/Sketcher_ConstrainRadiam.svg) [Zwiąż automatycznie promień / średnicę](/Sketcher_ConstrainRadiam/pl "Sketcher ConstrainRadiam/pl"): Określa promień łuków i okręgów z wagą krzywej złożonej oraz średnicę okręgów. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl").

- ![](/images/Sketcher_ConstrainRadius.svg) [Wiązanie promienia](/Sketcher_ConstrainRadius/pl "Sketcher ConstrainRadius/pl"): Określa promień okręgów i łuków oraz okręgów z wagą krzywej złożonej.

- ![](/images/Sketcher_ConstrainDiameter.svg) [Wiązanie średnicy](/Sketcher_ConstrainDiameter/pl "Sketcher ConstrainDiameter/pl"): Określa średnicę okręgów i łuków.

- ![](/images/Sketcher_ConstrainAngle.svg) [Wiązanie kąta](/Sketcher_ConstrainAngle/pl "Sketcher ConstrainAngle/pl"): Określa kąt między dwiema krawędziami, kąt linii z poziomą osią szkicu lub kąt apertury łuku kołowego.

- ![](/images/Sketcher_ConstrainLock.svg) [Wiązanie blokady odległości](/Sketcher_ConstrainLock/pl "Sketcher ConstrainLock/pl"): Stosuje więzy [Zwiąż odległość poziomą](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl") i [Zwiąż odległość pionową](/Sketcher_ConstrainDistanceY/pl "Sketcher ConstrainDistanceY/pl") do punktów. Jeśli wybrany jest pojedynczy punkt, wiązania odnoszą się do początku szkicu. Jeśli wybrano dwa lub więcej punktów, wiązania odnoszą się do ostatnio wybranego punktu.

- ![](/images/Sketcher_ConstrainCoincidentUnified.svg) [Wiązanie zbieżności punktów (ujednolicone)](/Sketcher_ConstrainCoincidentUnified/pl "Sketcher ConstrainCoincidentUnified/pl"): Tworzy wiązanie zbieżności między punktami, ustala punkty na krawędziach lub osiach lub tworzy wiązanie koncentryczności. Łączy w sobie narzędzia wiązań [zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl") i [punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/Sketcher_ConstrainCoincident.svg) [Wiązanie zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl"): Tworzy wiązanie zbieżne między punktami lub wiązanie współosiowe.

- ![](/images/Sketcher_ConstrainPointOnObject.svg) [Zwiąż punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl"): Mocuje punkty na krawędziach lub osiach.

- ![](/images/Sketcher_ConstrainHorVer.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Wiązanie poziomo / pionowo:

- ![](/images/Sketcher_ConstrainHorVer.svg) [Wiązanie poziomo / pionowo](/Sketcher_ConstrainHorVer/pl "Sketcher ConstrainHorVer/pl"): Wiąże linie lub pary punktów, aby były poziome lub pionowe, w zależności od tego, co jest najbliższe bieżącemu wyrównaniu. Łączy narzędzia [poziomo](/Sketcher_ConstrainHorizontal/pl "Sketcher ConstrainHorizontal/pl") i [pionowo](/Sketcher_ConstrainVertical/pl "Sketcher ConstrainVertical/pl"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/Sketcher_ConstrainHorizontal.svg) [Wiązanie poziome](/Sketcher_ConstrainHorizontal/pl "Sketcher ConstrainHorizontal/pl"): Ustawia linie lub pary punktów jako poziome.

- ![](/images/Sketcher_ConstrainVertical.svg) [Wiązanie pionowe](/Sketcher_ConstrainVertical/pl "Sketcher ConstrainVertical/pl"): Ogranicza linie lub pary punktów do pionu.

- ![](/images/Sketcher_ConstrainParallel.svg) [Wiązanie równoległości](/Sketcher_ConstrainParallel/pl "Sketcher ConstrainParallel/pl"): Wymusza, aby linie były równoległe.

- ![](/images/Sketcher_ConstrainPerpendicular.svg) [Wiązanie prostopadłości](/Sketcher_ConstrainPerpendicular/pl "Sketcher ConstrainPerpendicular/pl"): Wymusza, aby dwie linie były prostopadłe, dwie krawędzie lub krawędź i oś były prostopadłe na ich przecięciu. Wiązanie może również łączyć dwie krawędzie, wymuszając ich prostopadłość w miejscu połączenia.

- ![](/images/Sketcher_ConstrainTangent.svg) [Wiązanie styczności](/Sketcher_ConstrainTangent/pl "Sketcher ConstrainTangent/pl"): Wymusza, aby dwie krawędzie lub krawędź i oś były styczne. Wiązanie może również łączyć dwie krawędzie, wymuszając ich styczność w miejscu połączenia. Jeśli wybrane zostaną dwie linie, staną się one współliniowe.

- ![](/images/Sketcher_ConstrainEqual.svg) [Wiązanie równości](/Sketcher_ConstrainEqual/pl "Sketcher ConstrainEqual/pl"): Narzuca, aby krawędzie _(linie)_ lub krzywizny miały jednakową długość _(krawędzie z wyjątkiem krzywych złożonych)_.

- ![](/images/Sketcher_ConstrainSymmetric.svg) [Wiązanie symetrii](/Sketcher_ConstrainSymmetric/pl "Sketcher ConstrainSymmetric/pl"): Wymusza symetrię dwóch punktów wokół prostej, osi lub wokół trzeciego punktu.

- ![](/images/Sketcher_ConstrainBlock.svg) [Wiązanie zablokowania](/Sketcher_ConstrainBlock/pl "Sketcher ConstrainBlock/pl"): Blokuje krawędzie w miejscu za pomocą pojedynczego wiązania. Jest przeznaczony głównie dla krzywych złożonych.

- ![](/images/Sketcher_ConstrainSnellsLaw.svg) [[Sketcher\_ConstrainSnellsLaw/pl|Wiązanie refrakcji] (prawo Snell'a)]: Wiąże dwie linie zgodnie z prawem załamania światła, aby symulować światło przechodzące przez interfejs.

- ![](/images/Sketcher_ToggleDrivingConstraint.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Przełącz wiązania:

- ![](/images/Sketcher_ToggleDrivingConstraint.svg) [Przełącz kontrolę wiązania](/Sketcher_ToggleDrivingConstraint/pl "Sketcher ToggleDrivingConstraint/pl"): Przełącza narzędzia do tworzenia wiązań wymiarowych między trybem konstrukcyjnym a trybem informacyjnym lub przełącza wybrane wiązania wymiarowe między tymi trybami.

- ![](/images/Sketcher_ToggleActiveConstraint.svg) [Aktywuj / dezaktywuj wiązanie](/Sketcher_ToggleActiveConstraint "Sketcher ToggleActiveConstraint"): Włącza lub dezaktywuje istniejące wiązania.

### Narzędzia szkicownika

- ![](/images/Sketcher_CreateFillet.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Tworzy zaokrąglenie / sfazowanie:

- ![](/images/Sketcher_CreateFillet.svg) [Utwórz zaokrąglenie](/Sketcher_CreateFillet/pl "Sketcher CreateFillet/pl"): Tworzy zaokrąglenie między dwiema krawędziami, które nie są równoległe. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") Narzędzie może również tworzyć fazki.

- ![](/images/Sketcher_CreateChamfer.svg) [Utwórz sfazowanie](/Sketcher_CreateChamfer/pl "Sketcher CreateChamfer/pl"): Tworzy fazę między dwiema nierównoległymi krawędziami. Jest to to samo narzędzie co [Zaokrąglenie](/Sketcher_CreateFillet/pl "Sketcher CreateFillet/pl"), ale z innym trybem początkowym. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/Sketcher_Trimming.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Edytuj krawędź:

- ![](/images/Sketcher_Trimming.svg) [Przytnij krawędź](/Sketcher_Trimming/pl "Sketcher Trimming/pl"): Przycina krawędź na najbliższych przecięciach z innymi krawędziami.

- ![](/images/Sketcher_Split.svg) [Podziel](/Sketcher_Split/pl "Sketcher Split/pl"): Dzieli krawędź na dwie części z zachowaniem większości więzów.

- ![](/images/Sketcher_Extend.svg) [Rozszerz krawędź ...](/Sketcher_Extend "Sketcher Extend"): Wydłuża lub skraca linię lub łuk do dowolnego miejsca lub do docelowej krawędzi lub punktu.

- ![](/images/Sketcher_External.svg) [Geometria zewnętrzna](/Sketcher_External/pl "Sketcher External/pl"): Rzutuje krawędzie i / lub wierzchołki należące do obiektów spoza szkicu na płaszczyznę szkicu. wersja 1.0 i poniżej

- ![](/images/Sketcher_Projection.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Geometria zewnętrzna:

- ![](/images/Sketcher_Projection.svg) [Utwórz geometrię zewnętrzną rzutowania](/Sketcher_Projection/pl "Sketcher Projection/pl"): Tworzy krawędzie rzutowania geometrii zewnętrznej. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")

- ![](/images/Sketcher_Intersection.svg) [Utwórz geometrię zewnętrzną przecięcia](/Sketcher_Intersection "Sketcher Intersection"): Tworzy krawędzie przecięcia geometrii zewnętrznej z płaszczyzną szkicu. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")

- ![](/images/Sketcher_CarbonCopy.svg) [Kalka techniczna](/Sketcher_CarbonCopy/pl "Sketcher CarbonCopy/pl"): Kopiuje całą geometrię i wiązania z innego szkicu do aktywnego szkicu.

- ![](/images/Sketcher_SelectOrigin.svg) [Wybierz odniesienie położenia](/Sketcher_SelectOrigin/pl "Sketcher SelectOrigin/pl"): Wybiera punkt początkowy szkicu.

- ![](/images/Sketcher_SelectHorizontalAxis.svg) [Wybierz oś poziomą](/Sketcher_SelectHorizontalAxis/pl "Sketcher SelectHorizontalAxis/pl"): Zaznacza poziomą oś szkicu.

- ![](/images/Sketcher_SelectVerticalAxis.svg) [Wybierz oś pionową](/Sketcher_SelectVerticalAxis/pl "Sketcher SelectVerticalAxis/pl"): Wybór osi pionowej szkicu.

- ![](/images/Sketcher_Translate.svg) [Przekształcanie w szyku](/Sketcher_Translate/pl "Sketcher Translate/pl"): Przekształca lub opcjonalnie kopiuje wybrane geometrie. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/Sketcher_Rotate.svg) [Przemieszczenie biegunowe](/Sketcher_Rotate/pl "Sketcher Rotate/pl"): Obraca lub opcjonalnie tworzy obrócone kopie wybranych elementów. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/Sketcher_Scale.svg) [Przekształcenie skali](/Sketcher_Scale/pl "Sketcher Scale/pl"): Skaluje lub opcjonalnie tworzy skalowane kopie wybranych elementów. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/Sketcher_Offset.svg) [Geometria odsunięcia](/Sketcher_Offset/pl "Sketcher Offset/pl"): Tworzy równoodległe krawędzie wokół wybranych krawędzi. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/Sketcher_Symmetry.svg) [Tworzy symetryczna geometrię ...](/Sketcher_Symmetry/pl "Sketcher Symmetry/pl"): Tworzy kopię wybranego elementu szkicu, symetrycznie względem wybranej linii.

- ![](/images/Sketcher_RemoveAxesAlignment.svg) [Usuń wyrównanie osi](/Sketcher_RemoveAxesAlignment/pl "Sketcher RemoveAxesAlignment/pl"): Usuwa wyrównanie osi wybranych krawędzi, zastępując wiązania [Poziomo](/Sketcher_ConstrainHorizontal/pl "Sketcher ConstrainHorizontal/pl") i [Pionowo](/Sketcher_ConstrainVertical/pl "Sketcher ConstrainVertical/pl") wiązaniami [Równolegle](/Sketcher_ConstrainParallel/pl "Sketcher ConstrainParallel/pl") i [Prostopadle](/Sketcher_ConstrainPerpendicular/pl "Sketcher ConstrainPerpendicular/pl").

- ![](/images/Sketcher_DeleteAllGeometry.svg) [Usuń wszystkie geometrie](/Sketcher_DeleteAllGeometry/pl "Sketcher DeleteAllGeometry/pl"): Usuwa całą geometrię i wszystkie wiązania ze szkicu.

- ![](/images/Sketcher_DeleteAllConstraints.svg) [Usuń wszystkie wiązania](/Sketcher_DeleteAllConstraints/pl "Sketcher DeleteAllConstraints/pl"): Usuwa wszystkie wiązania ze szkicu.

- ![](/images/Edit-copy.svg) Kopiowanie w Szkicowniku: Zobacz akapit [Kopiuj, wycinaj i wklejaj](#Kopiowanie,_wycinanie_i_wklejanie).

- ![](/images/Edit-cut.svg) Wycinanie w Szkicowniku: Zobacz akapit [Kopiuj, wycinaj i wklejaj](#Kopiowanie,_wycinanie_i_wklejanie).

- ![](/images/Edit-paste.svg) Wklej w Szkicowniku: Zobacz [Kopiuj, wytnij i wklej](#Kopiowanie,_wycinanie_i_wklejanie).

### Narzędzia szkicownika dla krzywych złożonych

- ![](/images/Sketcher_BSplineConvertToNURBS.svg) [Konwertuj geometrie na krzywą złożoną](/Sketcher_BSplineConvertToNURBS/pl "Sketcher BSplineConvertToNURBS/pl") Konwertuje krawędzie na krzywą złożoną.

- ![](/images/Sketcher_BSplineIncreaseDegree.svg) [Zwiększ stopień krzywej złożonej](/Sketcher_BSplineIncreaseDegree/pl "Sketcher BSplineIncreaseDegree/pl") Zwiększa stopień _(kolejność)_ krzywej złożonej.

- ![](/images/Sketcher_BSplineDecreaseDegree.svg) [Zmniejsz stopień krzywej złożonej](/Sketcher_BSplineDecreaseDegree/pl "Sketcher BSplineDecreaseDegree/pl") Zmniejsza stopień _(krotność)_ krzywej złożonej.

- ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) [Zwiększyć liczebność węzłów](/Sketcher_BSplineIncreaseKnotMultiplicity/pl "Sketcher BSplineIncreaseKnotMultiplicity/pl") Zwiększa krotność węzła krzywej złożonej.

- ![](/images/Sketcher_BSplineDecreaseKnotMultiplicity.svg) [Zmniejsz liczbę węzłów](/Sketcher_BSplineDecreaseKnotMultiplicity/pl "Sketcher BSplineDecreaseKnotMultiplicity/pl") Zmniejsza krotność węzła krzywej złożonej.

- ![](/images/Sketcher_BSplineInsertKnot.svg) [Wstaw węzeł](/Sketcher_BSplineInsertKnot/pl "Sketcher BSplineInsertKnot/pl") Wstawia węzeł do krzywej złożonej lub zwiększa krotność istniejącego węzła.

- ![](/images/Sketcher_JoinCurves.svg) [Połącz krzywe](/Sketcher_JoinCurves/pl "Sketcher JoinCurves/pl") Tworzy krzywą złożoną poprzez połączenie dwóch istniejących krzywych złożonych lub innych krawędzi. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

### Widok szkicu

- ![](/images/Sketcher_SelectElementsWithDoFs.svg) [Wybierz nie związane stopnie swobody](/Sketcher_SelectElementsWithDoFs/pl "Sketcher SelectElementsWithDoFs/pl"): Zaznacza w szkicu nie w pełni związane elementy.

- ![](/images/Sketcher_SelectConstraints.svg) [Wybierz powiązane wiązania](/Sketcher_SelectConstraints/pl "Sketcher SelectConstraints/pl"): Wybiera wiązania powiązane z elementami szkicu.

- ![](/images/Sketcher_SelectElementsAssociatedWithConstraints.svg) [Zaznacz powiązaną geometrię](/Sketcher_SelectElementsAssociatedWithConstraints/pl "Sketcher SelectElementsAssociatedWithConstraints/pl"): Wybiera elementy szkicu powiązane z wiązaniami.

- ![](/images/Sketcher_SelectRedundantConstraints.svg) [Wybierz zbędne wiązania](/Sketcher_SelectRedundantConstraints/pl "Sketcher SelectRedundantConstraints/pl"): Wybiera zbędne wiązania w szkicu.

- ![](/images/Sketcher_SelectConflictingConstraints.svg) [Wybierz wiązania konfliktowe](/Sketcher_SelectConflictingConstraints/pl "Sketcher SelectConflictingConstraints/pl"): Wybiera kolidujące ze sobą wiązania szkicu.

- ![](/images/Sketcher_ArcOverlay.svg) [Pokaż / ukryj okrąg pomocniczy dla łuków](/Sketcher_ArcOverlay/pl "Sketcher ArcOverlay/pl"): Pokazuje lub ukrywa okrągłe elementy pomocnicze _(wirtualne okręgi)_ dla łuków we wszystkich szkicach. [dostępne w wersji 0.22](/Release_notes_0.22/pl "Release notes 0.22/pl")

- ![](/images/Sketcher_BSplinePolygon.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Pokaż / ukryj warstwę informacyjną krzywej złożonej:

- ![](/images/Sketcher_BSplineDegree.svg) [Pokaż / ukryj stopnie krzywej złożonej](/Sketcher_BSplineDegree/pl "Sketcher BSplineDegree/pl") Pokazuje lub ukrywa wyświetlanie stopnia krzywej złożonej we wszystkich szkicach.

- ![](/images/Sketcher_BSplinePolygon.svg) [Pokaż / ukryj ramkę kontrolną krzywej złożonej](/Sketcher_BSplinePolygon/pl "Sketcher BSplinePolygon/pl") Pokazuje lub ukrywa wyświetlanie wielokąta kontrolnego krzywej złożonej we wszystkich szkicach.

- ![](/images/Sketcher_BSplineComb.svg) [Pokaż / ukryj grzebień krzywizny krzywej złożonej](/Sketcher_BSplineComb/pl "Sketcher BSplineComb/pl") Pokazuje lub ukrywa wyświetlanie grzebienia krzywizny krzywej złożonej we wszystkich szkicach.

- ![](/images/Sketcher_BSplineKnotMultiplicity.svg) [Zwiększ / zmniejsz wielokrotność węzłów krzywej złożonej](/Sketcher_BSplineKnotMultiplicity/pl "Sketcher BSplineKnotMultiplicity/pl") Pokazuje lub ukrywa wyświetlanie krotności węzła krzywej złożonej we wszystkich szkicach.

- ![](/images/Sketcher_BSplinePoleWeight.svg) [Wyświetl / ukryj wagę punktu kontrolnego krzywej złożonej](/Sketcher_BSplinePoleWeight/pl "Sketcher BSplinePoleWeight/pl") Pokazuje lub ukrywa wyświetlanie wag punktów kontrolnych krzywej złożonej we wszystkich szkicach.

- ![](/images/Sketcher_RestoreInternalAlignmentGeometry.svg) [Pokaż / ukryj geometrię wewnętrzną](/Sketcher_RestoreInternalAlignmentGeometry/pl "Sketcher RestoreInternalAlignmentGeometry/pl"): Usuwa wewnętrzną geometrię elementów lub odtwarza brakującą geometrię wewnętrzną.

- ![](/images/Sketcher_SwitchVirtualSpace.svg) [Przełącz przestrzeń wirtualną](/Sketcher_SwitchVirtualSpace/pl "Sketcher SwitchVirtualSpace/pl"): Umożliwia ukrycie wszystkich wiązań szkicu i ponowne ich wyeksponowanie lub przełącza widoczną przestrzeń wirtualną.

### Narzędzia przestarzałe

- ![](/images/Sketcher_Clone.svg) [Tworzy proste kopie elementu ...](/Sketcher_Clone/pl "Sketcher Clone/pl"): Klonuje wybrany element w szkicowniku. Nie dostępne dla wersja 1.0 i powyżej.

- ![](/images/Sketcher_CloseShape.svg) [Zamknij kształt](/Sketcher_CloseShape/pl "Sketcher CloseShape/pl"): Tworzy zamknięty kształt, stosując wiązania zgodności względem punktów końcowych.

To narzędzie jest przestarzałe, nie będzie dostępne od (wersja 0.21 i powyżej)

- ![](/images/Sketcher_CreatePointFillet.svg) [Utwórz zaokrąglenie z zachowaniem wiązań](/Sketcher_CreatePointFillet/pl "Sketcher CreatePointFillet/pl"): Tworzy zaokrąglenie między dwiema nierównoległymi liniami, zachowując ich punkt narożny. Niedostępne w wersja 1.0 i powyżej

- ![](/images/Sketcher_ConnectLines.svg) [Połącz krawędzie](/Sketcher_ConnectLines/pl "Sketcher ConnectLines/pl"): Połącz elementy szkicu poprzez zastosowanie zbieżnych ograniczeń do punktów końcowych.

To narzędzie jest przestarzałe, nie będzie dostępne od (wersja 0.21 i powyżej)

- ![](/images/Sketcher_Copy.svg) [Kopia](/Sketcher_Copy/pl "Sketcher Copy/pl"): Kopiuje element szkicu. Nie dostępne dla wersja 1.0 i powyżej.

- ![](/images/Sketcher_Move.svg) [Przesuń](/Sketcher_Move "Sketcher Move"): Przesuwa wybraną geometrię, biorąc za punkt odniesienia ostatni wybrany punkt. Nie dostępne dla wersja 1.0 i powyżej.

- ![](/images/Sketcher_RectangularArray.svg) [Szyk prostokątny](/Sketcher_RectangularArray/pl "Sketcher RectangularArray/pl"): Tworzy tablicę wybranych elementów szkicownika. Nie dostępne dla wersja 1.0 i powyżej

## Ustawienia

- ![](/images/Workbench_Sketcher.svg) [Ustawienia](/Sketcher_Preferences "Sketcher Preferences"): Konfiguracja Środowiska pracy Szkicownik.

## Dobre praktyki

Każdy użytkownik CAD z biegiem czasu rozwija swój własny sposób pracy, ale istnieją pewne przydatne ogólne zasady, którymi należy się kierować.

- Seria prostych szkiców jest łatwiejsza do wykonania niż jeden złożony szkic. Na przykład, pierwszy szkic może być utworzony dla podstawowej cechy 3D _(wyciągnięcie, albo wyciągniecie przez obrót)_, podczas gdy drugi może zawierać otwory lub wycięcia _(kieszenie)_. Niektóre szczegóły mogą zostać pominięte, które zostaną zrealizowane później jako cechy 3D. Możesz wybrać unikanie zaokrągleń w szkicu, jeśli jest ich zbyt wiele, i dodać je jako cechy 3D.
- Zawsze twórz profil zamknięty, inaczej Twój szkic nie stworzy bryły, ale raczej zestaw otwartych ścian. Jeśli nie chcesz, aby niektóre obiekty zostały włączone do bryły, przekształć je w elementy konstrukcyjne za pomocą narzędzia **Tryb konstrukcji**.
- Użyj funkcji automatycznych wiązań, aby ograniczyć liczbę wiązań, które musisz dodać ręcznie.
- Z reguły najpierw należy zastosować ograniczenia geometryczne, potem ograniczenia wymiarowe, a następnie zablokować szkic jako ostatni. Ale pamiętaj: reguły są tworzone po to, aby je łamać. Jeśli masz problemy z manipulowaniem szkicem, przydatne może być związanie najpierw kilku obiektów przed ukończeniem profilu.
- Jeśli to możliwe, wyśrodkuj szkic do punktu początkowego _(0,0)_ z wiązaniem blokady. Jeśli Twój szkic nie jest symetryczny, zlokalizuj jeden z jego punktów w punkcie początkowym lub wybierz ładne okrągłe liczby dla odległości blokady.
- Jeśli masz możliwość wyboru między wiązaniem długości a wiązaniem poziomym lub pionowym, preferowane są te ostatnie. Ograniczenia odległości poziomej i pionowej są mniej obciążające obliczeniowo.
- Ogólnie rzecz biorąc, najlepsze ograniczenia, których należy użyć, to:  
  Wiązania poziome i pionowe; Wiązania poziome i pionowe długości, styczność punkt-punkt.  
  Jeśli to możliwe, należy ograniczyć użycie następujących wiązań:  
  ogólne wiązanie długości, styczność krawędzi do krawędzi, ustalenie punktu do związania linii, wiązanie symetrii.
- Jeśli masz wątpliwości co do poprawności szkicu po jego ukończeniu _(elementy zmieniają kolor na zielony)_, zamknij okno dialogowe Szkicownika, i użyj narzędzia ![](/images/Sketcher_ValidateSketch.svg). [sprawdź poprawność szkicu](/Sketcher_ValidateSketch/pl "Sketcher ValidateSketch/pl").

## Poradniki

- [Poradnik dla szkicownika](https://forum.freecadweb.org/viewtopic.php?f=36&t=30104) według chrisb. Jest to ponad 80-cio stronicowy dokument PDF, który służy za szczegółową instrukcję obsługi szkicownika. Wyjaśniono w nim podstawy użytkowania środowiska pracy Szkicownik i omówiono wiele szczegółów dotyczących tworzenia kształtów geometrycznych i każdego z ograniczeń.
- [Podstawy Środowiska pracy Szkicownik](/Basic_Sketcher_Tutorial/pl "Basic Sketcher Tutorial/pl") dla początkujących.
- [Szkicownik Mikro poradnik - Praktyki dotyczące wiązań](/Sketcher_Micro_Tutorial_-_Constraint_Practices/pl "Sketcher Micro Tutorial - Constraint Practices/pl")
- [Szkicownik: wymagania wobec szkicu](/Sketcher_requirement_for_a_sketch/pl "Sketcher requirement for a sketch/pl") Minimalne wymagania dotyczące szkicu i kompletne określenie szkicu.

## Tworzenie skryptów

Strona [skrypty szkicownika](/Sketcher_scripting "Sketcher scripting") zawiera przykłady tworzenia wiązań przez skrypty środowiska Python.

## Przykłady

Aby uzyskać kilka pomysłów na to, co można osiągnąć za pomocą narzędzi środowiska Szkicownik, zajrzyj do: [przykładów](/Sketcher_Examples/pl "Sketcher Examples/pl").

![](/images/Sketcher_ExampleHinge-01.gif)
![](/images/Sketcher_ExampleHinge-15.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Workbench/pl&oldid=1511583>"
