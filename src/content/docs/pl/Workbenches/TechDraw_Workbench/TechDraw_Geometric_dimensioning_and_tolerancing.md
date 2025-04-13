---
title: Rysunek Techniczny Wymiarowanie geometrii i tolerancja
---
## Idea

Głównym celem rysunku technicznego jest to, aby inni zrozumieli, co projektant stworzył z jakimi tolerancjami ORAZ jak wyprodukować konstrukcję. Ponieważ większość części musi pasować do zespołów, również geometryczne relacje z innymi częściami są ważne. Aby to osiągnąć, opracowano system [wymiarowania geometrycznego i tolerancji](https://en.wikipedia.org/wiki/Geometric_dimensioning_and_tolerancing) *(GD&T)*.

Weźmy na przykład tę część:

![](/images/TechDraw_Hole-Position-Example.png)

W projekcie oś ma być umieszczona wewnątrz 2 otworów w części. Oznacza to, że musimy określić następujące rzeczy

* Średnicę otworów i ich położenie.
* Określenie, że otwory są wzdłuż pewnej osi, która nie jest prostopadła do płaszczyzny bazowej XZ.
* Część osiowa musi mieć określoną prostoliniowość.

Prostoliniowość jest ważna, ponieważ zagięta oś nie będzie pasowała do otworów. Wyrównanie otworów jest ważne, ponieważ samo wywiercenie każdego otworu w danej pozycji, bez zwracania uwagi na oś, doprowadziłoby do powstania otworów, do których oś nie pasowałaby. Tak więc samo określenie wymiaru i położenia otworu nie jest wystarczające. Pierwszy punkt to "klasyczne" wymiarowanie, podczas gdy dwa pozostałe to informacje geometryczne, dlatego GD&T wchodzi w grę. Przykład ten pokazuje również, że GD&T jest niezbędne, aby zapewnić, że części są dobrze dopasowane do zespołów.

Jeśli nie jesteś zaznajomiony z koncepcją GD&T, gorąco polecamy zapoznanie się z nią już teraz. Na przykład, szybkie wprowadzenie znajduje się w [tym filmie](https://www.youtube.com/watch?v=P5GT9ZSRYl0). Aby dowiedzieć się więcej o koncepcji "maksymalnych warunków materiałowych", spójrz na [ten film](https://www.youtube.com/watch?v=UXZjTb3ZUQI). Aby uzyskać szczegółowe informacje na temat wszelkiego rodzaju cech GD&T, należy rozejrzeć się w Internecie. Na przykład [ten kanał YouTube](https://www.youtube.com/c/Gdandtbasics/videos) zawiera kilka dobrych wyjaśnień.

GD&T zostało uregulowane w normach [ISO 1101](http://geo-dim-tol.ir/files/iso1101.pdf) oraz [ASME Y14.5](http://www.sharifcadcam.ir/uploaded/2e22f9ef-dfc5-47bc-a126-cc51e9686c4f.pdf).

Możliwości środowisk parcy Rysunek Techniczny w zakresie spełniania wspólnych standardów GD&T są obecnie niewielkie *(od wersji FreeCAD 0.20)*, ale można już osiągnąć wiele rzeczy. Ta strona Wiki wyjaśnia co jest zaimplementowane i jakie sztuczki mogą być użyte dla niezaimplementowanych funkcji.   
**Uwaga:** ta strona Wiki nie ma na celu nauczenia GD&T!

## Wymiarowanie

Środowisko Rysunek Techniczny oferuje kilka narzędzi do tworzenia różnych typów wymiarów. Proszę spojrzeć na [różne wymiary](/TechDraw_Workbench/pl#Wymiary "TechDraw Workbench/pl"), jak je tworzyć i modyfikować.

### Formatowanie

Domyślna czcionka dla nowego wymiaru jest określana przez ustawienie w [preferencjach](/TechDraw_Preferences/pl#Etykiety "TechDraw Preferences/pl") parametru **Czcionka etykiety**. Domyślny rozmiar czcionki jest określony przez ustawienie w [preferencjach](/TechDraw_Preferences/pl#Wymiary "TechDraw Preferences/pl") parametru **Rozmiar czcionki**.
  
**Uwaga:** Zalecane jest używanie czcionki, w której znak minus ma taką samą szerokość jak znak plus, ponieważ zapewnia to, że tolerancje będą sformatowane zgodnie z normami GD&T. Taką czcionką jest np. *osifont*, który jest częścią wszystkich instalacji programu FreeCAD.

Domyślny format dla nowych wymiarów zależy od opcji w [preferencjach](/TechDraw_Preferences/pl#Wymiary_2 "TechDraw Preferences/pl") **Zastosuj wartości globalne dla liczby miejsc dziesiętnych** i **Alternatywne miejsca dziesiętne**. Określają one liczbę miejsc po przecinku, ale w każdym przypadku wymiar jest liczbą zmiennoprzecinkową. Na przykład, jeśli ustawione są 2 miejsca po przecinku, używany jest format **%.2f** *(liczba zmiennoprzecinkowa z 2 miejscami po przecinku)*.

Format liczb można zmienić:

1. Kliknij dwukrotnie na wymiar na rysunku lub na obiekt wymiaru w drzewie modelu,
2. W pojawiającym się oknie dialogowym wymiarowania w polu **Wyznacznik formatu** znajduje się definicja formatu, więc zmień ją na taką, jaka jest potrzebna.

Składnia wyznacznika formatu jest [wyjaśniona tutaj](https://www.cplusplus.com/reference/cstdio/printf/). Możesz również użyć [to narzędzie online](https://onlinetexttools.com/printf-text), aby zobaczyć, jaki wyznacznik formatowania będzie wyświetlał liczby.

**Przykłady:**

* Używasz dwóch miejsc po przecinku, ale dla kąta chcesz mieć tylko jedno miejsce po przecinku, użyj formatu **%.1f**,
* Używasz dwóch miejsc po przecinku, ale nie podoba Ci się, że wyświetlane są zera na końcu *(wolisz **4** zamiast **4.00**)*. Wtedy użyj tego wyznacznika formatu: **%g**. Paramert **g** użyje jak najkrótszego ciągu znaków, a więc pominie zera po przecinku. Ponadto w razie potrzeby automatycznie przełączy się na [notację naukową](https://en.wikipedia.org/wiki/Scientific_notation#E_notation).

Za pomocą właściwości DANE**Odwrotny** można nadać wymiarom długości wartości ujemne i przerzucić kąty z zakresu 0 - 180° do zakresu odbicia 180° - 360°.

Ustawienie opcji **Teoretycznie dokładny** w oknie dialogowym wymiarowania spowoduje oznaczenie wymiaru jako dokładnego teoretycznie poprzez dodanie wokół niego ramki.

Zamiast sformatowanej liczby można użyć własnego tekstu, ustawiając opcję **Tekst dowolny** w oknie dialogowym wymiarowania. Wówczas zawartość pola **Wyznacznik formatu** zostanie wyświetlona jako wymiar.

Za pomocą właściwości DANE**X** i DANE**Y** można zmienić poziome i pionowe położenie tekstu wymiaru względem widoku. Alternatywnie można zmienić położenie, przeciągając wartość liczbową lub tekst.

### Tolerancja

#### Tworzenie

1. Utwórz [wymiar](/TechDraw_Workbench/pl#Wymiary "TechDraw Workbench/pl") w swoim rysunku,
2. Kliknij dwukrotnie na wymiar na rysunku lub na wymiarowanym obiekt w drzewie modelu.
3. W pojawiającym się oknie dialogowym wymiaru podaj jako wartość **powyżej wymiaru**, wartość o którą wymiar może zostać przekroczony.  
   Spowoduje to tolerancję równomierną, jak ta: ![](/images/TechDraw_equal-tolerance.png)
4. Jeśli masz nierówne tolerancje, podaj jako wartość**poniżej wymiaru**, wielkość, o którą wymiar może być mniejszy i odznacz opcję *Równa tolerancja*   
   Spowoduje to nierówną tolerancję, taką jak ta: ![](/images/TechDraw_Non-equal-tolerance.png)

#### Usuwanie

Aby pozbyć się tolerancji, zmień wartości **powyżej wymiaru** i **poniżej wymiaru**, każdą na zero.

#### Formatowanie

Domyślne kroje czcionek dla nowych tolerancji są takie same jak dla wymiarów. Domyślny rozmiar czcionki jest określony przez ustawienie w [preferencjach](/TechDraw_Preferences#Wymiary_2 "TechDraw Preferences") opcji **Skala tekstu tolerancji**. Skala ta jest współczynnikiem rozmiaru czcionki użytej dla wymiaru.

Domyślny format wyświetlania liczb dla nowych tolerancji jest standardowo taki sam jak dla wymiaru. Można go zmienić w oknie dialogowym wymiaru.

Można również użyć dowolnego tekstu zamiast określenia formatu liczbowego, zaznaczając opcję **Tekst dowolny tolerancji** w oknie dialogowym wymiarowania. Wtedy zawartość pola **Wyznacznik formatu tolerancji** zostanie wyświetlona jako tekst tolerancji.

## Tolerancja geometrii

Tolerancje są tworzone poprzez użycie funkcji środowiska pracy Rysunek techniczny [Balonik](/TechDraw_Balloon "TechDraw Balloon"). Ponieważ dla większości obiektów wymagana jest ramka, pomocna jest zmiana opcji **Kształt dymka** na **Prostokąt** w [preferencjach](/TechDraw_Preferences/pl#Adnotacje "TechDraw Preferences/pl") środowiska Rysunek Techniczny.

### Wskaźnik tolerancji

![](/images/TechDraw_GD%26T-Toleranced-rod.png)

Przykład pręta objętego tolerancją. *( Wartość bicia definiuje już prostoliniowość, podano ją tylko dla przykładu)*.

Identyfikatorem tolerancji w GD&T jest ramka, zwana również "ramką kontrolną właściwości". Można ją utworzyć za pomocą funkcji [Balonik](/TechDraw_Balloon "TechDraw Balloon") środowiska pracy Rysunek techniczny:

* po dodaniu balonika, jeśli jego kształt nie jest jeszcze ramką, kliknij na nim dwukrotnie w drzewie modelu kolejnie w wyświetlonym okienku dialogowym ustaw parametr **Kształt** na wartość **Prostokąt**,
* dodaj odpowiedni znak Unicode dla właściwości, której potrzebujesz do dymku **Tekst** *(możesz skopiować je z tabel referencyjnych [poniżej](#Znaki_specjalne) lub użyć [Rozszerzenia: Dostosuj format etykiety](/TechDraw_ExtensionCustomizeFormat/pl "TechDraw ExtensionCustomizeFormat/pl"))*.
* Dodając znak "|" do **Tekstu**, rozpoczynasz nowe pole wskaźnika.

Nie ma reguły, która definiuje czy lub jak wskaźnik tolerancji musi mieć linię wiodącą czy nie, więc możesz albo:

* ustawić właściwość **Widoczność linii** na wartość `false` w oknie dialogowym balonika,
* ustawić właściwość **Symbol końca** na wartość **Strzałka wypełniona** lub **Kropka**.

Przykład po prawej stronie pokazuje dwa możliwe warianty rozmieszczenia wskaźników tolerancji.

### Dane odniesienia

Punkty odniesienia w znaczeniu GD&T oznacza powierzchnie, do których tolerancja została obliczona. Tworzy się je jako baloniki:

* po dodaniu balonika, w oknie dialogowym balonika ustaw parametr **Symbol końca** na wartość **Wypełniony trójkąt**,
* jeśli kształt balonika nie jest jeszcze ramką, ustaw wartość parametru **Kształt** na **Prostokąt**,
* przeciągnij bąbelek za pomocą myszki tak, aby trójkąt był oddalony od powierzchni odniesienia,
* ponieważ linia prosta dla punktów odniesienia jest bardzo popularna, chyba że powierzchnia punktu odniesienia nie jest prostopadła do X lub Y, upewnij się, że właściwości DANE**X** i DANE**punkt odniesienia położenia X** lub DANE**Y** i DANE**punkt odniesienia położenia Y** są równe, aby uzyskać linię prostą balonika.

![](/images/TechDraw_GD%26T-Datum.png)

Rysunek z przykładami punktów odniesienia

### Znaki specjalne

Do wstawiania symboli GD&T Rysunku Technicznego udostępniono funkcję [Rozszerzenie: dostosuj format](/TechDraw_ExtensionCustomizeFormat/pl "TechDraw ExtensionCustomizeFormat/pl").

Poniżej znajduje się lista znaków, które należy wykorzystać w oznaczeniach tolerancji geometrii:

Tabela referencyjna tolerancji geometrycznych *(zgodnie z tabelą nr 2 w [ISO 1101-2017](http://geo-dim-tol.ir/files/iso1101.pdf))*

| Zastosowanie | Cechy geometrii | Symbol | znak [Unicode](https://en.wikipedia.org/wiki/Unicode) | Konieczne dane odniesienia | Uwagi |
| --- | --- | --- | --- | --- | --- |
| Forma | Prostoliniowość |  | ⏤ U+23E4 | nie |  |
| Forma | Płaskość |  | ⏥ U+23E5 | nie |  |
| Forma | Okrągłość |  | ○ U+25CB | nie | W starszych normach nazywany również kolistością. |
| Forma | Walcowatość |  | ⌭ U+232D | nie |  |
| Forma / Orientacja / Położenie | Profil liniowy |  | ⌒ U+2312 | tak | W przypadku zastosowania do celów formalnych nie jest konieczny żaden układ odniesienia |
| Forma / Orientacja / Położenie | Profil powierzchni |  | ⌓ U+2313 | tak | W przypadku zastosowania do celów formalnych nie jest konieczny żaden układ odniesienia |
| Orientacja | Równoległość |  | ∥ U+2225 | tak |  |
| Orientacja | Prostopadłość |  | ⟂ U+27C2 | tak |  |
| Orientacja | Kątowość |  | ∠ U+2220 | tak |  |
| Położenie | Pozycja |  | ⌖ U+2316 | tak | Przy pracy z normą ISO 5458 nie jest wymagany żaden punkt odniesienia. |
| Położenie | Koncentryczność / współosiowość |  | ◎ U+25CE | tak | Nazwana koncentryczność, gdy jest stosowana dla punktów środkowych i współosiowość, gdy jest stosowana dla linii środkowych. W normie ASME Y14.5 zostało to wyeliminowane od wersji z 2018 roku. |
| Położenie | Symetria |  | ⌯ U+232F | tak | W normie ASME Y14.5 z 2018 roku symetria została wyeliminowana. |
| [Bicie](https://en.wikipedia.org/wiki/Run-out) | Bicie obwodowe |  | ↗ U+2197 | tak |  |
| [Bicie](https://en.wikipedia.org/wiki/Run-out) | Bicie ogólne |  | ⌰ U+2330 | tak |  |

Symbole używane w ramce kontrolnej elementu w celu określenia opisu elementu, tolerancji, modyfikatora i układu odniesienia

| Symbol | znak [Unicode](https://en.wikipedia.org/wiki/Unicode) | Modyfikator | Uwagi |
| --- | --- | --- | --- |
|  | Ⓕ U+24BB | Stan swobodny | Ma zastosowanie tylko wtedy, gdy część jest unieruchomiona w inny sposób |
|  | Ⓛ U+24C1 | Najmniejsza grubość materiału (LMC) | Przydatna do utrzymania minimalnej grubości ścianki |
|  | Ⓜ U+24C2 | Maksymalny stan materiału (MMC) | Zapewnia dodatkową tolerancję tylko dla cechy rozmiaru |
|  | Ⓟ U+24C5 | Przewidywany obszar tolerancji | Przydatne przy otworach gwintowanych dla długich kołków rozporowych |
|  | Ⓢ U+24C8 | Niezależnie od rozmiarów cech (RFS) | Nie wchodzi w skład wersji z 1994 r. Patrz pkt. A5, ppkt 3. Również par. D3. Także rys. 3-8. |
|  | Ⓣ U+24C9 | Płaszczyzna styczna | Przydatne w przypadku interfejsów, w których formularz nie jest wymagany |
|  | — | Funkcja ciągłości | Identyfikuje grupę cech, które powinny być traktowane geometrycznie jako pojedyncza cecha |
|  | — | Tolerancja statystyczna | Występuje w wersji normy z 1994 r., zakłada odpowiednią statystyczną kontrolę procesu |
|  | Ⓤ U+24CA | Nierówne dwustronne | Dodano w wersji normy z 2009 r. i odnosi się do nierównomiernego rozłożenia profilu. Liczba po tym symbolu oznacza tolerancję w kierunku "plus materiał". |

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Geometric_dimensioning_and_tolerancing/pl&oldid=1312341>"