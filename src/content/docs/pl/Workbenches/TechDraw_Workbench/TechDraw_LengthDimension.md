---
title: Rysunek Techniczny Wstaw wymiar długości
---
|  |
| --- |
| Rysunek Techniczny: Wstaw wymiar długości |
| Lokalizacja w menu |
| Rysunek Techniczny → Wymiary → Wstaw wymiar długości |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Wstaw wymiar poziomy](/TechDraw_HorizontalDimension/pl "TechDraw HorizontalDimension/pl"), [Wstaw wymiar pionowy](/TechDraw_VerticalDimension/pl "TechDraw VerticalDimension/pl") |
|  |

## Opis

Narzędzie **Wstaw wymiar długości** dodaje wymiar liniowy do widoku. Wymiar może być odległością między dwoma punktami, długością prostej krawędzi, prostopadłą odległością między dwiema krawędziami lub prostopadłą odległością między punktem a krawędzią.

![](/images/TechDraw_Dimension_Length_example.png)

Wymiar długości pobrany z dwóch punktów.

## Użycie

1. Wybierz punkty i / lub krawędzie, które definiują pomiar. Geometria może zostać wybrana w oknie [widoku 3D](/3D_view/pl "3D view/pl") *(pierwsze dwie opcje)* lub na rysunku *(wszystkie opcje)*:
   * Wybierz dwa punkty.
   * Wybierz pojedynczą krawędź prostą.
   * Wybierz dwie krawędzie. Jeśli obie krawędzie są proste, muszą być równoległe. Spowoduje to utworzenie wymiaru prostopadłego, jeśli punkt końcowy jednej z krawędzi ma rzut prostopadły na drugą krawędź *(punkt wynikowy musi leżeć na rzeczywistej krawędzi)*. Jeśli możliwych jest wiele rozwiązań, używany jest punkt końcowy najbliższy rzutowanemu punktowi. Jeśli nie ma prawidłowego rzutowania prostopadłego, wymiar będzie odległością między najbliższymi punktami końcowymi krawędzi.
   * Wybierz punkt i krawędź. #\* Wybierz punkt i krawędź. Spowoduje to utworzenie wymiaru prostopadłego. W wersja 0.21 i poniżej wymiar będzie prostopadły tylko wtedy, gdy punkt ma rzut prostopadły na rzeczywistą krawędź. W przeciwnym razie wymiar będzie odległością między punktem a najbliższym punktem końcowym krawędzi.
2. Jeśli geometria została wybrana w widoku 3D: dodaj prawidłowy widok do zaznaczenia, wybierając go w oknie [widoku 3D](/3D_view/pl "3D view/pl").
3. Istnieje kilka sposobów wywołania tego narzędzia:
   * [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Jeśli [preferencja](/TechDraw_Preferences/pl#Wymiary "TechDraw Preferences/pl") **Narzędzie wymiarowania** jest ustawiona na `Narzędzie pojedyncze` (domyślnie): kliknij na strzałce skierowanej w dół po prawej stronie od przycisku ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) i wybierz opcję **![](/images/TechDraw_LengthDimension.svg) Wstaw wymiar długości** z listy rozwijanej.
   * Jeśli ta preferencja ma inną wartość (i wersja 0.21 i poniżej): wciśnij przycisk ![](/images/TechDraw_LengthDimension.svg) Wstaw wymiar długości.
   * Wybierz z menu opcję **Rysunek Techniczny → Wymiary → ![](/images/TechDraw_LengthDimension.svg) Wstaw wymiar długości**.
4. Wymiar zostanie dodany do widoku.
5. Wymiar można przeciągnąć do wybranej pozycji.
6. W razie potrzeby dodaj tolerancje zgodnie z opisem na stronie [Wymiarowanie geometrii i tolerancja](/TechDraw_Geometric_dimensioning_and_tolerancing/pl#Tolerancja "TechDraw Geometric dimensioning and tolerancing/pl").

### Wyświetlanie pomiarów 3D

Wymiar będzie początkowo wyświetlał rzutowany pomiar *(tj. taki, jak pokazano na rysunku)*. W razie potrzeby i jeśli wymiar jest oparty na odniesieniach 3D, można go zmienić na rzeczywisty pomiar 3D, zmieniając jego właściwość DANE**Typ pomiaru** na wartość `True`. Aby oprzeć wymiar na odniesieniach 3D, wybierz geometrię z okna [widoku 3D](/3D_view/pl "3D view/pl") w czasie tworzenia lub użyj narzędzia ![](/images/TechDraw_DimensionRepair.svg). [Napraw odniesienia do wymiarów](/TechDraw_DimensionRepair/pl "TechDraw DimensionRepair/pl"), aby zaktualizować istniejące wymiary.

### Zmiana właściwości

Aby zmienić właściwości obiektu wymiaru, kliknij go dwukrotnie na rysunku lub w oknie [widoku Drzewa](/Tree_view/pl "Tree view/pl"). Spowoduje to otwarcie okna [dialogowego wymiaru](#Okno_dialogowe):

## Okno dialogowe

![](/images/TechDraw_DimensionDialog.png)

Okno dialogowe wymiaru oferuje następujące ustawienia:

### Tolerancja

* **W teorii dokładnie**: Jeśli to pole jest zaznaczone, wymiar jest określony jako teoretycznie dokładny. W związku z tym nie powinien mieć żadnych tolerancji. Wymiar będzie wyświetlany z ramką wokół wartości: ![](/images/TechDraw_theoretically_exact.png).

* **Tolerancja symetryczna**: Jeśli to pole jest zaznaczone, tolerancja nadmierna i tolerancja niedostateczna są równe, a zanegowana wartość tolerancji nadmiernej jest używana jako tolerancja niedostateczna. Wyświetlany będzie symbol ![](/images/TechDraw_equal-tolerance.png), w przeciwnym razie będzie to ![](/images/TechDraw_Non-equal-tolerance.png).

* **Powyżej tolerancji:**: Wielkość, o jaką wymiar może być większy.

* **Poniżej tolerancji:**: Wielkość, o jaką wymiar może być mniejszy.

### Formatowanie

* **Określenie formatu**: sposób formatowania wartości wymiaru. Domyślnie specyfikatorem jest `%.xf`, gdzie `x` to liczba miejsc dziesiętnych. Składnia formatowania znajduje się na stronie [tej strony Wikipedii](https://en.wikipedia.org/wiki/Printf_format_string). Istnieje również dodatkowy format `%w`, który wyświetla określoną liczbę cyfr po separatorze dziesiętnym i usuwa końcowe zera. Na przykład `%.2w` oznacza, że wypisane zostaną co najwyżej 2 cyfry po przecinku, a końcowe zera zostaną odcięte.

* **Dowolny tekst**: Jeśli to pole jest zaznaczone, wymiar jest zastępowany zawartością pola "Określenie formatu".

* **Określenie formatu górnej granicy tolerancji:**: Sposób formatowania wartości powyżej tolerancji. Domyślnie specyfikatorem jest `%.xf`, gdzie `x` to liczba miejsc po przecinku. Składnia formatowania znajduje się na stronie [tej strony Wikipedii](https://en.wikipedia.org/wiki/Printf_format_string).

* **Określenie formatu dolnej granicy tolerancji:**: Sposób formatowania wartości Poniżej tolerancji. Domyślnie specyfikatorem jest `%.xf`, gdzie `x` to liczba miejsc po przecinku. Składnia formatowania znajduje się na stronie [tej strony Wikipedii](https://en.wikipedia.org/wiki/Printf_format_string).

* **Dowolne sformułowanie tolerancji**: Jeśli opcja ta jest zaznaczona, tolerancje są zastępowane zawartością pól **Określenie formatu górnej granicy tolerancji** **Określenie formatu dolnej granicy tolerancji**.

### Styl wyświetlania

* **Odwróć groty**: Odwraca kierunek strzałek linii wymiarowej. Domyślnie znajdują się one wewnątrz linii wymiarowej / łuku i są skierowane na zewnątrz.

* **Kolor**: Barwa dla linii i tekstu.

* **Rozmiar czcionki**: Określa rozmiar tekstu.

* **Styl rysunku**: Standard *(i jego styl)*, zgodnie z którym wymiar jest rysowany. Zobacz właściwość [**Standard i styl**](#Widok), aby uzyskać szczegółowe informacje.

### Linia

* **Zastąp kąty**: Jeśli opcja jest zaznaczona, zwykłe kąty dla linii wymiarowej i linii przedłużenia zostaną zastąpione określonymi wartościami.

* **Kąt linii wymiarowej**: Zastępuje wartość kąta linii wymiarowej względem osi X widoku *(w stopniach)*.

* **Użyj wartości domyślnych**: Ustaw kąt linii wymiarowej na zwykły kąt.

* **Użyj z wyboru**: Ustaw kąt linii wymiarowej tak, aby odpowiadał kątowi wybranej krawędzi *(lub 2 wierzchołków)* w widoku.

* **Kąt linii przedłużenia**: Zastąp wartość kąta linii przedłużenia z osią X widoku *(w stopniach)*.

* **Użyj wartości domyślnych**: Ustaw kąt linii przedłużającej na zwykły kąt.

* **Użyj z wyboru**: Ustaw kąt linii rozszerzenia tak, aby odpowiadał kątowi wybranej krawędzi *(lub 2 wierzchołków)* w widoku.

## Ograniczenia

Obiekty wymiarów są podatne na "[problem z nazewnictwem topologicznym](/Topological_naming_problem/pl "Topological naming problem/pl")". Oznacza to, że jeśli zmodyfikujesz geometrię 3D, ściany i krawędzie modelu mogą zostać wewnętrznie przemianowane. Jeśli wymiar jest dołączony do krawędzi, która jest następnie modyfikowana, wymiar może zostać uszkodzony. Ogólnie rzecz biorąc, nie jest możliwe zsynchronizowanie rzutowanych wymiarów 2D z rzeczywistymi obiektami 3D.

Dlatego zaleca się dodawanie wymiarów, gdy model 3D nie jest już modyfikowany.

### Obejście

Jeśli chcesz zachować widok Rysunku Technicznego z wymiarami, które nie ulegną uszkodzeniu, musisz zwymiarować obiekt, który się nie zmieni:

* Utwórz nieparametryczną kopię obiektu, który chcesz rzutować za pomocą narzędzia ![](/images/Part_SimpleCopy.svg) [Utwórz prostą kopię](/Part_SimpleCopy/pl "Part SimpleCopy/pl").
* Wybierz tę kopię, a następnie użyj narzędzia [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl") i dodaj żądane wymiary.
* Jeśli oryginalny model 3D zostanie zmodyfikowany, modyfikacje nie wpłyną na prostą kopię, ani na wymiary w widoku rysunku technicznego.

Zobacz [Wymiar przestrzenny](/TechDraw_LandmarkDimension/pl "TechDraw LandmarkDimension/pl") aby zapoznać się z innym podejściem do ominięcia problemu nazewnictwa topologicznego.

## Uwagi

* **Wybór krawędzi**. Krawędzie mogą być trudne do zaznaczenia. Obszar zaznaczenia krawędzi można dostosować, zmieniając preferencję [Wykrywanie krawędzi](/TechDraw_Preferences/pl#Zaawansowane "TechDraw Preferences/pl").
* **Miejsca dziesiętne**. Wymiary domyślnie używają globalnego ustawienia miejsc dziesiętnych. Można to zmienić poprzez [ustawienia](/TechDraw_Preferences/pl#Wymiary "TechDraw Preferences/pl") lub zmieniając właściwość Określenie formatu.
* **Wiele obiektów**. Widoki mogą zawierać wiele obiektów 3D jako źródło. Wymiary mogą być stosowane do geometrii z dowolnych obiektów w widoku *(np. od Object1.Vertex0 do Object2.Vertex3)*.

## Właściwości

### Dane

Podstawowe

* DANE**Odniesienie 2D** (`LinkSubList`): Obiekt*(y)* widoku rysunku 2D, na którym oparty jest pomiar. Używane, jeśli parametr DANE**Typ pomiaru** ma wartość `Projekcja`.
* DANE**Odniesienie 3D** (`LinkSubList`): Obiekt(y) 3D, na których oparty jest pomiar. Używane, jeśli parametr DANE**Typ pomiaru** ma wartość `Prawda`.
* DANE**Typ** (`Enumeration`): Długość, promień, średnica itp. Zwykle nie są używane przez użytkownika końcowego.
* DANE**Typ pomiaru** (`Wyliczenie`): Sposób wykonania pomiaru.

:   :   `True` - w oparciu o geometrię 3D.
    :   `Projected` - na podstawie rysunku 2D Widok geometrii.

* DANE**W teorii dokładnie** (`Bool`): Określa teoretycznie dokładny *(lub podstawowy)* wymiar.

:   :   `FAŁSZ` - domyślnie wspólny wymiar, ewentualnie z tolerancjami.
    :   `PRAWDA` - jest to wartość teoretyczna. Jako taka, nie powinna zawierać żadnych tolerancji. Wymiar będzie wyświetlany w ramce otaczającej wartość: ![](/images/TechDraw_theoretically_exact.png)

* DANE**Tolerancja symetryczna** (`Bool`): Jeżeli tolerancja nadmiarowa i niedomiarowa są równe. Wtedy zanegowana wartość tolerancji nadmiarowej jest używana jako tolerancja niedomiarowa.

:   :   `PRAWDA` - zanegowana wartość DANE**Powyżej tolerancji:** jest używana jako DANE**Poniżej tolerancji:**. Wyświetlana wartość to ![](/images/TechDraw_equal-tolerance.png).
    :   `FAŁSZ` - the DANE**Poniżej tolerancji:** zostaje wzięty pod uwagę. Wyświetlany będzie ![](/images/TechDraw_Non-equal-tolerance.png).

* DANE**Powyżej tolerancji** (`QuantityConstraint`): Wartość, o jaką wymiar może być większy.
* DANE**Poniżej tolerancji** (`QuantityConstraint`): Wartość, o jaką wymiar może być mniejszy.
* DANE**Odwrotny** (`Bool`): Określa, czy wymiar reprezentuje wartość zwykłą czy odwróconą.

:   :   `false` - używana jest zwykła wartość. Dla długości jest to liczba dodatnia, dla kąta wartość skośna *(0° - 180°)*.
    :   `true` - używana jest wartość odwrócona. W przypadku długości jest to liczba ujemna, w przypadku kąta wartość odbicia *(180° - 360°)*.

* DANE**X** (`Distance`): Poziome położenie tekstu wymiaru względem widoku.
* DANE**Y** (`Distance`): Pionowe położenie tekstu wymiaru względem widoku.
* DANE (Ukryte)**Zablokuj pozycję** (`Bool`): Blokuje pozycję tekstu wymiaru, gdy opcja ta ma wartość `true`.
* DANE (Ukryte)**Obrót** (`Angle`): Tylko do odczytu.
* DANE (Ukryte)**Typ skali Type** (`Enumeration`): Tylko do odczytu.
* DANE (Ukryte)**Skala** (`FloatConstant`): Tylko do odczytu.
* DANE (Ukryte)**Podpis** (`String`): Nieużywane.

Format

* DANE**Określenie formatu** (`String`): Sposób formatowania wartości wymiaru. Zobacz [Formatowanie](#Formatowanie).
* DANE**Określenie formatu górnej granicy tolerancji** (`String`): Podobnie jak DANE**Określenie formatu**, ale dla przekroczenia tolerancji.
* DANE**Określenie formatu dolnej granicy tolerancji** (`String`): Jak DANE**Określenie formatu**, ale dla zaniżonych tolerancji.
* DANE**Dowolny** (`Bool`): Czy wymiar jest zastępowany zawartością pola **Określenie formatu**.

:   :   `FAŁSZ` - zawartość pola **Określenie formatu** jest używana do formatowania rzeczywistej wartości wymiaru.
    :   `PRAWDA` - zawartość pola **Określenie formatu** będzie wyświetlana jako tekst zamiast wartości wymiaru.

* DANE**Dowolne sformuowanie tolerancji** (`Bool`): Podobnie jak DANE**Dowolny**, ale dla tolerancji.

Zastąp

* DANE**Zastąp kąty** (`Bool`): Czy kierunek linii wymiarowych i przedłużających jest nadpisywany.

:   :   `false` - kierunki są obliczane jak zwykle.
    :   `true` - kierunki są nadpisywane przez wartości właściwości LineAngle i ExtensionAngle.

* DANE**Kąt linii** (`Angle`): kąt linii wymiarowej z osią X widoku *(w stopniach)*.
* DANE**Kąt linii pomocniczej** (`Angle`): kąt linii przedłużenia z osią X widoku *(w stopniach)*.

Odniesienia

* DANE (Hidden)**Zapisana geometria** (`TopoShapeList`): Geometria odniesienia. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

### Widok

Podstawa

* WIDOK**Zachowaj etykietę** (`Bool`): Nieużywane.
* WIDOK**Kolejność na stosie** (`Integer`): Nakładanie się lub niedopasowanie względem innych obiektów rysunku. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

Format wymiaru

* WIDOK**Rozmiar grotu** (`Length`): Rozmiar strzałek wymiaru. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
* WIDOK**Kolor** (`Color`): Kolor linii i tekstu.
* WIDOK**Odwróć groty** (`Bool`): Wartością domyślną jest *wewnątrz* linii wymiarowej / łuku, co oznacza strzałki skierowane *na zewnątrz*. Jeśli strzałki są umieszczone *na zewnątrz* linii wymiarowej/łuku, strzałki są skierowane *do wewnątrz* linii wymiarowej/łuku.

:   :   `FAŁSZ` - Umożliwia automatyczne wybieranie kierunku strzałek zgodnie z powyższą regułą.
    :   `PRAWDA` - Nadpisuje automatycznie wybrany kierunek i wymusza kierunek przeciwny.

* WIDOK**Czcionka** (`Font`): Nazwa czcionki używanej dla tekstu wymiaru.
* WIDOK**Rozmiar czcionki** (`Length`): Określa rozmiar tekstu.
* WIDOK**Współczynnik odstępu ASME** (`Float`): Umożliwia dostosowanie odstępu między punktami wymiaru a początkiem linii rozszerzenia. Wartość odstępu jest pomnożona przez szerokość linii. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
* WIDOK**Współczynnik odstępu ISO** (`Float`): Umożliwia dostosowanie odstępu między punktami wymiaru a początkiem linii rozszerzenia. Wartość odstępu jest pomnożona przez szerokość linii. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
* WIDOK**Współczynnik odstępu między wierszami** (`Float`): Dostosowuje odstęp między tekstem wymiaru a linią wymiaru. Odstęp jest równy tej wartości pomnożonej przez szerokość linii. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
* WIDOK**Szerokość linii** (`Length`): Określa grubość linii wymiarowej.
* WIDOK**Zakres renderowania** (`Enumeration`): Właściwość raczej uniwersalna określająca ile miejsca może zająć rysunek wymiarowy:

:   :   `None` - żadne linie ani strzałki nie są rysowane, wyświetlana jest tylko sama wartość wymiaru.
    :   `Minimal` - dla długości i kątów rysowana jest pojedyncza linia łącząca wartość wymiaru i wirtualną linię przedłużenia punktu końcowego. Sama linia pomocnicza nie jest dodawana.
    :   Średnice są renderowane w zgodnie z zakresem `Confined`, promienie następujące po `Reduced` zasięgu.
    :   `Confined` -dla długości i kątów rysowana jest dwukierunkowa linia *(lub łuk)* łącząca "wirtualne linie pomocnicze" punktu początkowego i końcowego, chociaż same linie pomocnicze nie są dodawane.

Średnice są rysowane za pomocą minimalnej pojedynczej linii od wartości wymiaru do najbliższego punktu na okręgu, promienie jak w przypadku `Reduced`.

:   :   `Reduced` - dla długości i kątów rysowana jest pojedyncza linia łącząca wartość wymiarową i linię przedłużenia punktu końcowego wraz z samą linią przedłużenia.
    :   Średnice są rysowane za pomocą linii pojedynczej od środka do najbliższego punktu na okręgu, promienie za pomocą minimalnej linii pojedynczej od wartości wymiarowej do najbliższego punktu łuku.
    :   `Normal` - jest to wartość domyślna. Dla długości i kątów rysowana jest podwójna linia *(lub łuk)* łącząca "linie przedłużające" punktu początkowego i końcowego, a także same linie przedłużające.
    :   Średnice są rysowane jako podwójne linie przechodzące przez środek i łączące najbliższe i najdalsze punkty na okręgu.
    :   Promienie są rysowane jako pojedyncza linia prowadząca od środka do najbliższego punktu łuku.
    :   `Expanded` - Tylko średnice obsługują tę wartość, renderując je w sposób podobny do długości w poziomie lub w pionie. Inne typy wymiarów są renderowane jak w przypadku zakresu `Normal`.

* WIDOK**Standard i styl** (`Enumeration`): Określa standard *(i jego styl)*, zgodnie z którym wymiar jest rysowany:

:   :   ![Różnice między obsługiwanymi standardami](/images/TechDraw_Dimension_standardization.png)
    :   `ISO Oriented` - obiekty są rysowane zgodnie z normą ISO 129-1, tekst jest obrócony tak, aby był równoległy do stycznej linii wymiarowej.
    :   `ISO Referencing` - obiekty są rysowane zgodnie z normą ISO 129-1, tekst jest zawsze poziomy, nad najkrótszą możliwą linią odniesienia.
    :   `ASME Inlined` - obiekty są rysowane zgodnie ze standardem ASME Y14.5M, tekst jest poziomy, wstawiany w przerwie w obrębie linii wymiarowej lub łuku.
    :   `ASME Referencing` - obiekty są rysowane zgodnie z ASME Y14.5M, tekst jest poziomy, krótka linia odniesienia jest dołączona do pionowego środka jednej strony.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Wymiar długości** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
dim1 = FreeCAD.ActiveDocument.addObject("TechDraw::DrawViewDimension", "Dimension")
dim1.Type = "Distance"
dim1.References2D=[(view1, "Edge1")]
page.addView(dim1)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_LengthDimension/pl&oldid=1486967>"