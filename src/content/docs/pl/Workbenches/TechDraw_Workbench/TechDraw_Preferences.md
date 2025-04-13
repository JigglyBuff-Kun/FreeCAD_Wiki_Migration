---
title: Rysunek Techniczny Ustawienia
---
## Wprowadzenie

Ekran preferencji środowiska pracy ![](/images/Workbench_TechDraw.svg) [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") znajduje się w [Edytorze preferencji](/Preferences_Editor/pl "Preferences Editor/pl"). W menu wybierz **Edycja → Preferencje...** a następnie **![](/images/Workbench_TechDraw.svg) Rysunek Techniczny**. Ta grupa jest dostępna tylko gdy środowisko Rysunek Roboczy zostało załadowane podczas bieżącej sesji programu FreeCAD.

Dostępnych jest siedem stron: [Ogólne](#General/pl), [Skala](#Scale/pl), [Wymiarowanie](#Dimensions/pl), [Adnotacja](#Annotation/pl), [Kolory](#Colors/pl), [HLR](#HLR/pl) and [Zaawansowane](#Advanced/pl).

Wszystkie preferencje z etykietami pisanymi *kursywą* są wartościami domyślnymi dla nowo tworzonych obiektów rysunku. Nie mają one żadnego wpływu na już istniejące obiekty.

Ta strona została zaktualizowana do wersji 1.0.

## Ogólne

![](/images/Preferences_TechDraw_Page_General.png)

Ogólne preferencje

#### Aktualizacje rysunków

* **Aktualizuj za widokiem 3D (polityka globalna)**: *Czy strony są aktualizowane przy każdej zmianie modelu 3D*.
* **Zezwalaj na zastępowanie strony (polityka globalna)**: *Czy strony [są aktualizowane](/TechDraw_PageDefault/pl#Właściwości "TechDraw PageDefault/pl") przy każdej zmianie modelu 3D*.
* **Aktualizuj stronę na bieżąco**: Utrzymuje strony rysunku w synchronizacji z modelem 3D w czasie rzeczywistym. Może to spowolnić czas odpowiedzi.
* **Automatycznie rozmieszczaj widoki dodatkowe**: Automatyczne rozprowadzenie widoków pomocniczych dla [grupy rzutów](/TechDraw_ProjectionGroup/pl "TechDraw ProjectionGroup/pl").

### Etykiety

* **Czcionka etykiety**: Nazwa domyślnej czcionki etykiet. Czcionka ta jest również używana dla nowych [wymiarów](#Wymiary), zmiana jej nie ma wpływu na wymiary już istniejące.
* **Rozmiar etykiety**: Domyślny rozmiar tekstu etykiety.

### Zasady

* **Grupa kąt projekcji**: [Grupa rzutów](/TechDraw_ProjectionGroup/pl "TechDraw ProjectionGroup/pl") będzie używać projekcji pierwszego *(standard europejski)* lub trzeciego *(standard amerykański)* kąta. Wyjaśnienie znajduje się na stronie [rzut wielu widoków](https://en.wikipedia.org/wiki/Multiview_projection#Multiviews).
* **Ukryta linia**: Styl *(ciągła, przerywana, itp.)* do zastosowania w ukrytych liniach.
* **Wybór linii przekroju**: Standard dla linii sekcji, który kontroluje pozycję strzałek i symboli ([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")). Dostępne opcje to:
  + *ANSI*
  + *ISO*

### Plik

* **Szablon domyślny**: Domyślny plik [szablonu](/TechDraw_Templates "TechDraw Templates") dla nowych stron.
* **Katalog szablonów** : Katalog startowy dla przycisku narzędzia ![](/images/TechDraw_PageTemplate.svg) [Wstaw nową stronę za pomocą szablonu](/TechDraw_PageTemplate "TechDraw PageTemplate").
* **Plik obrazka kreskowania**: Domyślnie [SVG](/SVG "SVG") lub [bitmapa](/Bitmap "Bitmap") dla pliku ![](/images/TechDraw_Hatch.svg) [Kreskowanie powierzchni za pomocą pliku graficznego](/TechDraw_Hatch "TechDraw Hatch").
* **Plik grupy linii**: Alternatywny plik dla osobistych definicji [LineGroup](/TechDraw_LineGroup "TechDraw LineGroup").
* **Katalog spawalniczy**: Domyślny katalog dla przycisku narzędzia ![](/images/TechDraw_WeldSymbol.svg) [Symboli spawalniczych](/TechDraw_WeldSymbol "TechDraw WeldSymbol").
* **Plik PAT**: Domyślny plik definicji wzoru PAT dla ![](/images/TechDraw_GeometricHatch.svg) [Kreskowanie powierzchni za pomocą pliku graficznego](/TechDraw_GeometricHatch "TechDraw GeometricHatch").
* **Nazwa wzoru**: Nazwa domyślnego wzoru PAT.
* **Katalog symboli**: Alternatywna ścieżka do poszukiwania plików symboli SCG.

### Siatka

* **Pokaż siatkę**: Domyślne ustawienie pokazywania siatki dla nowych stron. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")
* **Odstępy między liniami siatki**: Domyślna odległość między liniami siatki dla nowych stron. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

### Wybieranie

* **Włącz tryb wielokrotnego wyboru**: Jeśli funkcja ta jest włączona, kliknięcie bez Ctrl nie usuwa istniejącego zaznaczenia. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

### Widoki domyślne

* **Użycie kierunku kamery 3D**: Jeśli zaznaczone, kierunek kamery 3d (lub kierunek normalny do wskazanej ściany) zostanie użyty jako kierunek widoku. Jeśli niezaznaczone, widoki będą tworzone jako widoki od przodu. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* **Zawsze pokazuj etykietę**: Jeśli zaznaczone, etykiety widoków będą wyświetlane nawet gdy ramki są wygaszone. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

### Przyciąganie

* **Przyciąganie wyrównania widoku**: Jeśli zaznaczone, widoki będą przyciągane do wyrównania podczas ich przeciągania kursorem. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* **Współczynnik przyciągania widoków**: Tolerancja dla przyciągania widoków - jeśli widok jest w tym ułamku rozmiaru widoku do idealnego wyrównania, zostanie przyciągnięty do wyrównania. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

## Skala

![](/images/Preferences_TechDraw_Page_Scale.png)

Preferencje skali

### Skala

* **Skala strony**: Domyślna skala dla nowych stron.
* **Wyświetl typ skali**: Domyślna skala dla nowych widoków.
* **Wyświetl niestandardową skalę**: Domyślna skala dla widoków, jeśli opcja **Wyświetl typ skali** jest ustawiona na **Niestandardowa**.

### Dostosowanie rozmiaru

* **Vertex Scale**: Rozmiar punktu [wierzchołka](/Glossary#V "Glossary"). Mnożnik szerokości linii.
* **Center Mark Scale**: Rozmiar znaków środków. Mnożnik rozmiaru wierzchołka.
* **Template Edit Mark**: Rozmiar [szablonu](/TechDraw_Templates "TechDraw Templates") pola uchwytu do klikania w mm *(zielone kropki)*.
* **Skala symboli spawalniczych**: Mnożnik dla rozmiaru [symbolu spawalniczego](/TechDraw_WeldSymbol "TechDraw WeldSymbol").

## Wymiary

![](/images/Preferences_TechDraw_Page_Dimensions.png)

Preferencje wymiarów

### Wymiary

* **Standard i wygląd**: Norma stosowana dla wartości wymiarów. Różnica pomiędzy standardami przedstawiona jest na zdjęciu: ![](/images/TechDraw_Dimension_standardization.png)

  Różnice pomiędzy wspieranymi normami. *([źródło ilustracji](https://forum.freecadweb.org/viewtopic.php?f=35&t=39571#p336144))*

:   :   `ISO Oriented` - narysowany zgodnie z normą ISO 129-1, tekst jest obracany tak, aby był równoległy do stycznej linii wymiarowej.
    :   `ISO Referencing` - narysowany zgodnie z normą ISO 129-1, tekst jest zawsze poziomy, umieszczony powyżej najkrótszej możliwej linii odniesienia.
    :   `ASME Inlined` - sporządzony zgodnie z normą ASME Y14.5M, tekst jest poziomy, wstawiony w przerwę w linii wymiarowej lub łuku.
    :   `ASME Referencing` - sporządzony zgodnie z ASME Y14.5M, tekst jest poziomy, krótka linia odniesienia jest przymocowana do pionowego środka jednej strony.

* **Zastosuj wartości globalne dla liczby miejsc dziesiętnych**: użyj liczby miejsc po przecinku z opcji [preferencje ogólne](/Preferences_Editor/pl#Jednostki "Preferences Editor/pl").
* **Pokaż jednostki**: do wartości należy dołączyć specyfikację jednostek (mm, in, itp.).
* **Alternatywne miejsca dziesiętne**: Liczba miejsc dziesiętnych, jeżeli nie wybrano opcji *Użyj globalnych ustawień odnośnie liczb miejsc po przecinku* i nie określono opcji *Format wymiaru*.
* **Format wymiaru**: Format własny dla tekstu wymiarowego. Wykorzystuje specyfikację formatu [printf](https://en.wikipedia.org/wiki/Printf_format_string).
* **Rozmiar czcionki**: rozmiar tekstu dla tekstu wymiarów.
* **Skala tekstu tolerancji**: Ustawienie wielkości czcionki tolerancji. Mnożnik wymiaru **Rozmiar czcionki**.
* **Symbol średnicy**: wymiary średnicy będą poprzedzone tym symbolem.
* **Styl strzałki**: wybierz preferowany znacznik zakończenia linii wymiarowej.
* **Rozmiar strzałki**: rozmiar znacznika końcowego w mm.
* **Format Spec**: formatuje tekst wymiarowy. Używa [specyfikator formatu printf](https://en.wikipedia.org/wiki/Printf_format_string).
* **Współczynnik zwiększenia odstępu - ISO**: Odstęp między punktem wymiarowym a początkiem linii pomocniczych dla wymiarów ISO. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
* **Współczynnik zwiększenia odstępu - ASME**: Odstęp pomiędzy punktem wymiarowym a początkiem linii pomocniczych dla wymiarów ASME. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
* **Odstępy między wierszami - ISO**: Odstępy między wierszem wymiaru a tekstem wymiaru dla wymiarów ISO. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl").

### Narzędzia

* **Narzędzie wymiarowania**: Wybierz rodzaj narzędzi wymiarowania dla paska narzędzi. Niezależnie od tego wyboru, wszystkie narzędzia są zawsze dostępne w menu i poprzez skróty. Opcje: [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
  + *Narzędzie pojedyncze*: [Jedno narzędzie](/TechDraw_Dimension/pl "TechDraw Dimension/pl") dla całego wymiarowania na pasku: Odległość, Odległość X / Y, Kąt, Promień. Pozostałe na liście rozwijanej.
  + *Narzędzia oddzielne*: Pojedyncze narzędzia dla każdego typu wymiarowania.
  + *Obydwa*: Zarówno 'Narzędzie pojedyncze', jak i oddzielne narzędzia.
* **Narzędzie wymiarowania w trybie średnicy / promienia**: Używając narzędzia [Wymiar](/TechDraw_Dimension/pl "TechDraw Dimension/pl") możesz wybrać jak chcesz wymiarować okręgi i łuki: [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
  + *Automatycznie*: Narzędzie będzie wymiarować promienie dla łuków i średnice dla okręgów.
  + *Średnica*: Narzędzie będzie zawsze wymiarować średnice.
  + *Promień*: Narzędzie będzie zawsze wymiarować promienie.

## Adnotacja

![](/images/Preferences_TechDraw_Page_Annotation.png)

Preferencje adnotacji

### Adnotacja

* **Powierzchnia cięcia przekroju**: Styl dla powierzchni cięcia przekroju. Dostępne są następujące opcje:
  + *Ukryj*: Nie ma żadnej widocznej powierzchni.
  + *Barwa bryły*: Obszar otrzymuje zestaw kolorów dla **Powierzchni przekroju**.
  + *Kreskowanie SVG*: Powierzchnia jest [zakreskowana](/TechDraw_Hatch/pl "TechDraw Hatch/pl").
  + *Kreskowanie PAT*: Powierzchnia jest [zakreskowana geometrycznie](/TechDraw_GeometricHatch/pl "TechDraw GeometricHatch/pl").
* **Pokaż linię przekroju w widoku źródłowym**: Jeśli zaznaczone, adnotacje przekrojów będą rysowane na widoku źródłowym. Jeśli odznaczone, na widoku źródłowym nie będzie linii przekroju, strzałek ani symboli. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* **Uwzględnij linię cięcia w adnotacji przekroju**: Jeśli zaznaczone, linia cięcia będzie rysowana na widoku źródłowym. Jeśli odznaczone, tylko znaczniki zmian, strzałki i symbole będą wyświetlane. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* **Znaczniki linii przekroju złożonego**: Pokaż znaki przy zmianach kierunku na liniach [przekroju złożonego](/TechDraw_ComplexSection/pl "TechDraw ComplexSection/pl"). [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
* **Kształt konturu dla widoku szczegółów**: Kształt konturu dla [widoków szczegółów](/TechDraw_DetailView "TechDraw DetailView"). Dostępne opcje to:
  + *Okrąg*
  + *Kwadrat*
* **Widok szczegółów pokazuje dopasowanie**: To pole wyboru kontroluje, czy wokół widoku szczegółowego ma być wyświetlany kontur. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl").
* **Pokaż podświetlenie źródła szczegółów**: To pole wyboru określa, czy wokół obszaru szczegółu w widoku źródłowym szczegółu ma być wyświetlane podświetlenie. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl").
* **Kształt dymka**: Domyślny styl zakończenia linii prowadzącej dymka, patrz [właściwości dymka](/TechDraw_Balloon/pl#Właściwości "TechDraw Balloon/pl").
* **Koniec linii prowadzącej balonika**: Domyślny styl końców linii prowadzącej balonika.
* **Długość zagięcia linii dymka**: Długość zagięcia linii prowadzącej balon.
* **Trójkąt prostokątny balonika**: Jeśli *Zakończenie linii odniesienia balonika* ma postać *wypełnionego trójkąta*, trójkąt może uzyskać kierunek pionowy lub poziomy podczas przesuwania balonika.
* **Automatyczne poziomowanie linii wiodącej**: Wymusza, aby ostatni segment [linii wiodącej](/TechDraw_LeaderLine/pl "TechDraw LeaderLine/pl") był poziomy.
* **Typ widoku z przerwaniem**: Domyślny typ przerwania używany do oznaczania [widoków przerywanych](/TechDraw_BrokenView/pl "TechDraw BrokenView/pl"): [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
  + *Brak linii przerywanej*
  + *Linia zygzak*
  + *Linia pojedyncza*
* **Pokaż znaki środka**: Umieszczaj znaki środka łuku w widoku.
* **Drukuj znaki środka**: Umieszczaj znaki środka łuku na wydruku.

### Linie

* **Standard linii**: Standard używany do rysowania linii przekroju w [widoku przekroju](/TechDraw_SectionView/pl "TechDraw SectionView/pl").
* **Szerokość linii w grupie**: [LineGroup](/TechDraw_LineGroup/pl "TechDraw LineGroup/pl") do ustawiania domyślnych szerokości linii.
* **Styl ukrytej linii**: Styl ukrytych linii. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl").
* **Styl linii przekroju**: Styl linii sekcji.
* **Styl podświetlenia szczegółu**: Styl linii kształtu konturu dla [widoki szczegółów](/TechDraw_DetailView/pl "TechDraw DetailView/pl").
* **Styl linii środkowej**: Domyślny styl dla [linii środkowych](/TechDraw_FaceCenterLine/pl "TechDraw FaceCenterLine/pl").
* **Styl linii przerywanej**: Domyślny styl dla linii używanych do oznaczania [widoków przerwania](/TechDraw_BrokenView/pl "TechDraw BrokenView/pl"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* **Kształt elementu zakończenia linii**: Domyślny *(okrągły)* powinien być prawie zawsze właściwym wyborem. Płaskie lub kwadratowe nakładki są przydatne, jeśli planujesz użyć rysunku jako prowadnicy cięcia 1:1

## Kolory

![](/images/Preferences_TechDraw_Page_Colors.png)

Preferencje kolorów

Ustawienie domyślnych kolorów dla nowo utworzonych stron:

* **Normalny**: Standardowy kolor linii.
* **Wskazany**: Kolor wyboru wstępnego. Kolor, który jest używany do podświetlania obiektów po wskazaniu ich kursorem myszki.
* **Wybrany**: Kolor dla wybranych obiektów.
* **Tło**: Kolor tła strony.
* **Wymiary**: Kolor linii wymiarowych i tekstu.
* **Linia środka**: Kolor dla [linii środkowych](/TechDraw_FaceCenterLine/pl "TechDraw FaceCenterLine/pl").
* **Podświetlenie szczegółu**: Kolor linii dla konturów [widoku szczegółu](/TechDraw_DetailView/pl "TechDraw DetailView/pl").
* **Kolor siatki**: Kolor wszystkich siatek na stronie. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")
* **Szablon podkreślenia**: Kolor podkreślenia oznaczającego edytowalne teksty w szablonach. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0").
* **Ukryta linia**: Kolor ukrytej linii. Kolor ten będzie używany do wszystkich rodzajów [ukrytych linii](#HLR_Parameters).
* **Powierzchnia przekroju**: Kolor dla powierzchni przecięcia w [widoku przekroju](/TechDraw_SectionView/pl "TechDraw SectionView/pl"). Stosuje się tylko wtedy, gdy opcja *Section Cut Surface* jest ustawiona na *Solid Color*.
* **Linia przekroju**: Kolor dla linii ciecia w [widoku przekroju](/TechDraw_SectionView/pl "TechDraw SectionView/pl").
* **Kreskowanie**: Kolor dla linii [kreskowania](/TechDraw_Hatch "TechDraw Hatch").
* **Wypełnienie wzorem**: Kolor wypełnienia dla [wzoru wypełnienia](/TechDraw_GeometricHatch/pl "TechDraw GeometricHatch/pl").
* **Wierzchołek**: Kolor wybieranego [wierzchołka](/Glossary#V "Glossary").
* **Linia główna**: Kolor dla [linii głównych](/TechDraw_LeaderLine/pl "TechDraw LeaderLine/pl").
* **Przezroczystość ścian**: Jeśli opcja zostanie zaznaczona, powierzchnie obiektów będą przezroczyste. W przeciwnym razie ustawiony kolor zostanie użyty jako kolor powierzchni.
* **Jasne na ciemnym**: Jeśli opcja jest zaznaczona, tekst i linie będą miały jasny kolor. Używane, jeśli **Kolor strony** jest ciemny. W przypadku tej opcji zalecane są przezroczyste lub jasne ściany. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
* **Monochromatyczny**: Jeśli zaznaczone, ustawiony kolor będzie używany dla całego tekstu i linii. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
* **Kolor strony**: Kolor tła strony. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl").

## HLR

![](/images/Preferences_TechDraw_Page_HLR.png)

Ustawienia parametrów HLR

HLR oznacza "usunięcie ukrytej linii".

* **Użyj przybliżenia wielokąta**: Używa przybliżenia, aby znaleźć ukryte linie. Jest to szybkie, ale rezultatem jest zbiór krótkich linii prostych.
* **Pokaż twarde linie**: Pokazuje krawędzie twarde i kontury *(widoczne linie są zawsze pokazane)*.
* *Pokaż linie ciągłe'*: Pokazuje linie o gładkiej powierzchni. Gładka linia to linia wskazująca zmianę pomiędzy stycznymi powierzchniami, jak przy przejściu z płaskiej powierzchni na wyciągnięcie [[1]](https://en.wikipedia.org/wiki/Fillet_(mechanics)).
* **Pokaż linie szwu**: Pokazuje linie szwu. Linia szwu to granica pomiędzy powierzchniami stycznymi.
* **Pokaż linie UV ISO**: Pokazuje linie ISO. ISO oznacza *izoparametryczne*. [Oto opis](https://knowledge.autodesk.com/support/alias-products/learn-explore/caas/CloudHelp/cloudhelp/2014/ENU/Alias/files/GUID-4CCDF144-DB4F-4BEB-BA5A-E69CED27F4B9-htm.html) czym są linie izoparametryczne *(w rzeczywistości krzywe)*.
* **Licznik ISO**: Liczba linii ISO na krawędzi czołowej.

## Zaawansowane

![](/images/Preferences_TechDraw_Page_Advanced.png)

Ustawienia zaawansowane

* **Wykrywaj ściany**: Jeśli opcja jest zaznaczona, środowisko pracy Rysunek Techniczny będzie próbować budować powierzchnie przy użyciu segmentów linii zwróconych przez algorytm usuwania ukrytych linii. Powierzchnie muszą być wykrywane w celu użycia [kreskowania](/TechDraw_Hatching/pl "TechDraw Hatching/pl"), ale w złożonych modelach może wystąpić strata wydajności.
* **Raportuj postęp**: Powoduje wyświetlanie komunikatów o postępie podczas budowania geometrii widoku. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
* **Użyj nowego algorytmu wyszukiwania ścian**: Jeśli opcja jest zaznaczona, nowy algorytm wyszukiwania ścian będzie używany zamiast oryginalnego. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
* **Automatyczna korekcja odniesień wymiarów**: Jeśli opcja ta jest zaznaczona, po zmianie modelu podejmowana jest próba aktualizacji odniesień wymiarów. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
* **Pokaż krawędzie przekroju**: Zaznacza granicę przekroju wyciętego w funkcji [wygląd przekroju](/TechDraw_SectionView/pl "TechDraw SectionView/pl").
* *Operacja złączenia przed przekrojem*: Wykonuje operację złączenia na kształcie wejściowym przed przetwarzaniem widoku przekroju.
* **Przełącz środowisko pracy przy kliknięciu**: Jeśli zaznaczone, dwukrotne kliknięcie na stronie w drzewie automatycznie przełączy środowisko pracy na Rysunek Techniczny i strona zostanie uwidoczniona. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")
* **Obszar krawędzi**: Rozmiar obszaru zaznaczenia wokół krawędzi. Jednostka rozmycia wynosi około 0,1 mm, w zależności od aktualnego przybliżenia widoku.
* **Obszar zaznaczenia**: Obszar zaznaczenia wokół znaczników środków. Jednostka rozmycia wynosi około 0,1 mm, w zależności od aktualnego przybliżenia widoku. Domyślną wartością jest 10. Wartości z zakresu 20-30 znacznie ułatwiają zaznaczanie krawędzi. Duże liczby spowodują nakładanie się z innymi elementami rysunku.
* **Zezwalaj na nieprawidłowe krawędzie**: Zawiera w wynikach krawędzie o nieoczekiwanej geometrii, np. o zerowej długości.
* **Sprawdzaj kształty**: Jeśli zaznaczone, kształty wejściowe będą sprawdzane pod kątem błędów przed użyciem i nieprawidłowe kształty będą pomijane. Może to być wolniejsze, ale zapobiega crashom. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")
* **Debugowanie przekroju**: Wyświetla wyniki pośrednie podczas przetwarzania widoków przekroju*.*
* **Debudowanie błędnych kształtów**: Jeśli zaznaczone, kształty, które nie przeszły weryfikacji będą zapisywane do plików B-rep do dalszej analizy. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")
* **Debugowanie szczegółu**: Wyniki pośrednie podczas przetwarzania widoku szczegółów.
* **Przejścia narzędzia do usuwania nakładających się na siebie krawędzi**: Liczba prób usunięcia nakładających się krawędzi zwróconych przez algorytm Hidden Line Removal. Wartość 0 oznacza brak szorowania. Wartości powyżej 2 są zazwyczaj nieproduktywne. Każda próba zwiększa czas wymagany do utworzenia rysunku. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
* **Max SVG kafelki kreskowania**: Limit płytek SVG o rozmiarze 64x64 pikseli stosowany do zakreskowania pojedynczej powierzchni. Przy dużych skalach można popełnić błąd przy wielu kafelkach SVG, wtedy należy zwiększyć limit kafelków.
* *Maksymalne segmenty linii kreskowania PAT*: Maksymalna liczba segmentów linii kreskowania stosowana przy kreskowaniu powierzchni o wzorze PAT.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Preferences/pl&oldid=1516803>"