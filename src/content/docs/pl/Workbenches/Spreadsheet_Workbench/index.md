---
title: Środowisko pacy Arkusz Kalkulacyjny
---

![](/images/Workbench_Spreadsheet.svg)

Ikonka FreeCAD dla Środowiska pracy Arkusz Kalkulacyjny

## Wprowadzenie

Środowisko pracy ![](/images/Workbench_Spreadsheet.svg) **Arkusz Kalkulacyjny** pozwala tworzyć i edytować arkusze kalkulacyjne, używać danych z arkusza kalkulacyjnego jako parametrów w modelu, wypełniać arkusz kalkulacyjny danymi pobranymi z modelu, wykonywać obliczenia i eksportować dane do innych aplikacji arkuszy kalkulacyjnych, takich jak LibreOffice czy Microsoft Excel.

![](/images/Spreadsheet_screenshot.jpg)

Arkusz kalkulacyjny z komórkami wypełnionymi tekstem i ilościami

## Przybory

- ![](/images/Spreadsheet_CreateSheet.svg) [Utwórz arkusz](/Spreadsheet_CreateSheet/pl "Spreadsheet CreateSheet/pl"): tworzy nowy arkusz kalkulacyjny.

- ![](/images/Spreadsheet_Import.svg) [Importuj arkusz](/Spreadsheet_Import/pl "Spreadsheet Import/pl"): wczytuje plik CSV do arkusza kalkulacyjnego.

- ![](/images/Spreadsheet_Export.svg) [Eksportuj arkusz](/Spreadsheet_Export/pl "Spreadsheet Export/pl"): zapisuje pliku CSV na podstawie arkusza kalkulacyjnego.

- ![](/images/Spreadsheet_MergeCells.svg) [Scal komórki](/Spreadsheet_MergeCells/pl "Spreadsheet MergeCells/pl"): łączy wybrane komórki.

- ![](/images/Spreadsheet_SplitCell.svg) [Podziel komórkę](/Spreadsheet_SplitCell/pl "Spreadsheet SplitCell/pl"): rozdziela poprzednio scalone komórki.

- ![](/images/Spreadsheet_AlignLeft.svg) [Wyrównaj do lewej](/Spreadsheet_AlignLeft/pl "Spreadsheet AlignLeft/pl"): wyrównuje treść wybranych komórek do lewej.

- ![](/images/Spreadsheet_AlignCenter.svg) [Wyśrodkuj w poziomie](/Spreadsheet_AlignCenter/pl "Spreadsheet AlignCenter/pl"): wyrównuje treść wybranych komórek do środka w poziomie.

- ![](/images/Spreadsheet_AlignRight.svg) [Wyrównaj do prawej](/Spreadsheet_AlignRight/pl "Spreadsheet AlignRight/pl"): wyrównuje treść wybranych komórek do prawej.

- ![](/images/Spreadsheet_AlignTop.svg) [Wyrównaj do góry](/Spreadsheet_AlignTop/pl "Spreadsheet AlignTop/pl"): wyrównanie zawartości wybranych komórek w górę.

- ![](/images/Spreadsheet_AlignVCenter.svg) [Wyśrodkuj w pionie](/Spreadsheet_AlignVCenter/pl "Spreadsheet AlignVCenter/pl"): wyrównuje treść wybranych komórek do środka w pionie.

- ![](/images/Spreadsheet_AlignBottom.svg) [Wyrównaj w dół](/Spreadsheet_AlignBottom/pl "Spreadsheet AlignBottom/pl"): wyrównuje treść wybranych komórek do dołu.

- ![](/images/Spreadsheet_StyleBold.svg) [Pogrubienie](/Spreadsheet_StyleBold/pl "Spreadsheet StyleBold/pl"): włącza/wyłącza pogrubienie zawartości wybranych komórek.

- ![](/images/Spreadsheet_StyleItalic.svg) [Kursywa](/Spreadsheet_StyleItalic/pl "Spreadsheet StyleItalic/pl"): włącza/wyłącza kursywę zawartości wybranych komórek.

- ![](/images/Spreadsheet_StyleUnderline.svg) [Podkreślenia](/Spreadsheet_StyleUnderline/pl "Spreadsheet StyleUnderline/pl"): włącza/wyłącza podkreślenie zawartości wybranych komórek.

- ![](/images/Spreadsheet_SetAlias.svg) [Ustaw alias](/Spreadsheet_SetAlias/pl "Spreadsheet SetAlias/pl"): ustawia alias dla wybranej komórki.

* Przyciski Czarny oraz Biały ustawia kolory czcionki i tła dla wybranych komórek.

## Ustawienia

- ![](/images/Preferences-spreadsheet.svg) [Ustawienia](/Spreadsheet_Preferences/pl "Spreadsheet Preferences/pl"): preferencje dla środowiska pracy Arkusz Kalkulacyjny. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

## Usuwanie komórek może być niebezpieczne

Należy pamiętać, że usunięcie lub usunięcie komórek z danymi może spowodować uszkodzenie arkusza kalkulacyjnego i modelu, jeśli opiera się on na arkuszu kalkulacyjnym. W takim przypadku użytkownik nie jest ostrzegany.

## Wstawianie i usuwanie wierszy i kolumn

Wiersze i kolumny można wstawiać i usuwać, klikając prawym przyciskiem myszy nagłówek wiersza lub kolumny i wybierając odpowiednią opcję z menu podręcznego. Możliwe jest zaznaczenie najpierw wielu wierszy lub kolumn. Można to zrobić, przytrzymując klawisz Ctrl podczas zaznaczania nagłówków lub przytrzymując lewy przycisk myszy i przeciągając.

## Edycja komórek

Zawartość komórki można edytować, zaznaczając komórkę i wprowadzając wartość w polu wprowadzania **Treści** w górnej części okna. Aby edytować komórkę na miejscu, zaznacz ją i naciśnij F2 lub kliknij dwukrotnie.

## Usuwanie komórek

Aby usunąć jedną lub więcej komórek, zaznacz je i naciśnij Del. Spowoduje to usunięcie ich zawartości, właściwości i aliasów. Aby usunąć tylko zawartość komórki, należy ją edytować.

## Wycinanie i kopiowanie-wklejanie komórek

W komórkach arkuszy kalkulacyjnych programu FreeCAD można wykonywać operacje wycinania i kopiowania-wklejania. Do tych operacji można używać standardowych skrótów klawiszowych: Ctrl + X, Ctrl + C i Ctrl + V. Aby zaznaczyć wiele komórek, przytrzymaj klawisz Ctrl podczas zaznaczania lub przytrzymaj lewy przycisk myszy i przeciągnij, aby zaznaczyć prostokątny zakres komórek.

Operacje wycinania i kopiowania zapisują zawartość, właściwości i aliasy komórek w Schowku. Operacja wklejania powoduje zapisanie danych w taki sposób, że zawartość lewej górnej komórki zapisanych danych jest umieszczana w aktywnej komórce. Pozostała przechowywana zawartość jest umieszczana względem tej komórki. Formuły są odpowiednio aktualizowane. Aliasy są wklejane tylko wtedy, gdy są unikalne.

## Właściwości komórek

Właściwości komórki arkusza kalkulacyjnego można edytować, klikając komórkę prawym przyciskiem myszy i wybierając z menu podręcznego polecenie **Właściwości ...**. Zostanie wyświetlone następujące okno dialogowe:

![](/images/SpreadsheetCellPropDialog.png)

Zgodnie z informacjami na kartach można zmieniać następujące właściwości:

- Kolor: kolor tekstu i kolor tła
- Wyrównanie: wyrównanie tekstu w poziomie i w pionie
- Styl: styl tekstu: pogrubienie, kursywa, podkreślenie
- Jednostki: Wyświetl jednostki dla tej komórki. Proszę przeczytać sekcję [Jednostki](#Jednostki) poniżej.
- Alias: Definiuje [alias](/Spreadsheet_SetAlias/pl "Spreadsheet SetAlias/pl") dla tej komórki. Można go używać w formułach komórek, a także w ogólnych [wyrażeniach](/Expressions/pl "Expressions/pl"). Więcej informacji na ten temat znajduje się w sekcji [Dane arkusza kalkulacyjnego w wyrażeniach](#Dane_arkusza_kalkulacyjnego_w_wyra.C5.BCeniach).

## Wyrażenia w komórkach

Komórka arkusza kalkulacyjnego może zawierać dowolny tekst, cyfry lub wyrażenie. Wyrażenia muszą zaczynać się od znaku równości "=".

Wyrażenia komórek mogą zawierać liczby, funkcje, odwołania do innych komórek i odwołania do właściwości modelu _(ale przeczytaj akapit [Obecne ograniczenia](#Obecne_ograniczenia) poniżej)_. Do komórek odwołujemy się za pomocą ich adresu utworzonego z indeksu kolumny _(wielka litera)_ i wiersza _(liczba)_, np B4, lub przez jej [alias](/Spreadsheet_SetAlias/pl "Spreadsheet SetAlias/pl").

**Uwaga:** Wyrażenia komórek są traktowane przez FreeCAD jak kod programowania. Dlatego podczas edycji zawartości komórki można zauważyć, że nie jest ona zgodna z ustawieniami wyświetlania:

- Separatorem miejsc dziesiętnych jest zawsze kropka. Ale przy wprowadzaniu wartości można również używać przecinków.
- Liczba wyświetlanych miejsc po przecinku może się różnić od Twoich [ustawień w preferencjach](/Preferences_Editor#Jednostki "Preferences Editor").

Odwołania do obiektów w modelu wyjaśniono w sekcji [Odniesienia do danych CAD](#Odniesienia_do_danych_CAD) poniżej. Używanie wartości komórek arkusza kalkulacyjnego do definiowania właściwości modelu wyjaśniono w sekcji [Dane arkusza kalkulacyjnego w wyrażeniach](#Dane_arkusza_kalkulacyjnego_w_wyra.C5.BCeniach) poniżej. Więcej informacji na temat wyrażeń i dostępnych funkcji można znaleźć na stronie [Wyrażenia](/Expressions/pl "Expressions/pl").

## Interakcja między arkuszami kalkulacyjnymi a modelem CAD

Dane znajdujące się w komórkach arkusza kalkulacyjnego mogą być wykorzystywane w wyrażeniach parametrów modelu CAD. W ten sposób arkusz kalkulacyjny może być używany jako źródło wartości parametrów używanych w całym modelu, efektywnie gromadząc wartości w jednym miejscu. Gdy wartości są zmieniane w arkuszu kalkulacyjnym, zostają one przekazane do całego modelu.

Podobnie, właściwości obiektów modelu CAD mogą być używane w wyrażeniach w komórkach arkusza kalkulacyjnego. Pozwala to na wykorzystanie w arkuszu kalkulacyjnym właściwości obiektu, takich jak objętość czy powierzchnia. Jeśli nazwa obiektu w modelu CAD zostanie zmieniona, zmiana ta zostanie automatycznie przeniesiona do wszystkich odwołań w wyrażeniach arkusza kalkulacyjnego używających zmienionej nazwy.

W dokumencie może być używany więcej niż jeden arkusz kalkulacyjny. Arkusz kalkulacyjny można zidentyfikować, używając jego nazwy lub etykiety.

FreeCAD automatycznie przypisuje unikalną nazwę do arkusza kalkulacyjnego podczas jego tworzenia. Nazwy te są zgodne z wzorcem `Arkusz kalkulacyjny`, `Arkusz kalkulacyjny001`, `Arkusz kalkulacyjny002` i tak dalej. Nazwy tej nie można zmienić ręcznie i nie jest ona widoczna we właściwościach arkusza kalkulacyjnego. Można jej użyć do odwołania się do arkusza kalkulacyjnego w [wyrażeniach](/Expressions/pl "Expressions/pl") _(zobacz sekcję [Dane arkusza kalkulacyjnego w wyrażeniach](#Dane_arkusza_kalkulacyjnego_w_wyra.C5.BCeniach) poniżej)_.

Etykieta arkusza kalkulacyjnego jest automatycznie ustawiana na nazwę arkusza podczas jego tworzenia. W przeciwieństwie do nazwy, etykietę można zmienić, np. w panelu właściwości lub za pomocą polecenia Zmień nazwę w menu podręcznym. Domyślnie FreeCAD nie akceptuje zduplikowanych etykiet, ale istnieje [preferencja](/Preferences_Editor/pl#Dokument "Preferences Editor/pl"), aby to zmienić. Do arkuszy kalkulacyjnych ze zduplikowanymi etykietami w tym samym dokumencie nie można odwoływać się za pomocą ich etykiety.

FreeCAD sprawdza, czy nie występują zależności cykliczne. Zobacz sekcję [obecne ograniczenia](#Obecne_ograniczenia).

### Odniesienia do danych CAD

Jak wskazano powyżej, w wyrażeniach arkusza kalkulacyjnego można odwoływać się do danych z modelu CAD.

W poniższej tabeli przedstawiono kilka przykładów przy założeniu, że model ma cechę o nazwie "MyCube":

| Dane CAD                                         | Komórka w arkuszu              | Rezultat                       |
| ------------------------------------------------ | ------------------------------ | ------------------------------ |
| Długość parametryczna sześcianu środowiska Część | `=MyCube.Length`               | Długość z jednostkami mm       |
| Objętość sześcianu                               | `=MyCube.Shape.Volume`         | Objętość w mm³ bez jednostek   |
| Typ kształtu sześcianu                           | `=MyCube.Shape.ShapeType`      | String: Solid                  |
| Etykieta sześcianu                               | `=MyCube.Label`                | String: MyCube                 |
| Współrzędna X środka masy sześcianu              | `=MyCube.Shape.CenterOfMass.x` | Współrzędna w mm bez jednostek |

### Dane arkusza kalkulacyjnego w wyrażeniach

Aby użyć danych arkusza kalkulacyjnego w innych częściach programu FreeCAD, zwykle tworzy się [Wyrażenie](/Expressions/pl "Expressions/pl"), które odnosi się do arkusza kalkulacyjnego i komórki zawierającej dane, których chcesz użyć. Arkusze kalkulacyjne można identyfikować na podstawie nazwy lub etykiety, a komórki na podstawie adresu lub aliasu. Autouzupełnianie jest dostępne dla wszystkich form odwołań.

|                       | Arkusz kalkulacyjny według nazwy | Arkusz kalkulacyjny według etykiety |
| --------------------- | -------------------------------- | ----------------------------------- |
| Komórka według adresu | `=Spreadsheet042.B5`             | `=<<MySpreadsheet>>.B5`             |
| Komórka według aliasu | `=Spreadsheet042.MyAlias`        | `=<<MySpreadsheet>>.MyAlias`        |

Zalecanym sposobem odwoływania się do danych arkusza kalkulacyjnego jest używanie etykiety arkusza i nazwy aliasu komórki. Bardziej szczegółowe omówienie zalet i wad poszczególnych trybów adresowania znajduje się w rozwiniętej sekcji poniżej.

Użycie etykiety arkusza kalkulacyjnego ma tę zaletę, że można ją dowolnie zmieniać, aby opisywała zawartość arkusza. Łatwiej jest również zidentyfikować używany arkusz kalkulacyjny, ponieważ tekst w wyrażeniu odpowiada etykiecie widocznej w widoku modelu i właściwości. Jeśli zdecydujesz się zmienić etykietę arkusza kalkulacyjnego, istniejące odwołania do zawartości arkusza zostaną zaktualizowane, więc nie zepsujesz swoich wyrażeń, zmieniając nazwę arkusza. Wewnętrzna nazwa arkusza kalkulacyjnego nie jest dostępna nigdzie poza edytorem wyrażeń, więc jeśli użyjesz wewnętrznej nazwy, a później zmienisz nazwę arkusza kalkulacyjnego, możesz mieć problem z odnalezieniem źródła danych wyrażenia.

Pamiętaj, że podczas tworzenia nowego arkusza kalkulacyjnego nazwa i etykieta są takie same, więc łatwo jest przypadkowo użyć nazwy arkusza zamiast etykiety. Prostym sposobem na uniknięcie takiej sytuacji jest nadanie arkuszowi sensownej nazwy przed rozpoczęciem używania go w wyrażeniach.

Chociaż w wyrażeniu można użyć numeru wiersza i kolumny w celu odwołania się do komórki, najlepszą praktyką jest nadanie komórce nazwy aliasu i użycie jej. Zobacz [Właściwości komórki](#Właściwości_komórki) powyżej, jak ustawić alias. Na przykład, jeśli dane w komórce B1 zawierają parametr długości obiektu, nazwa aliasu `MyObject_Length` pozwoli na odwołanie się do tej wartości jako `<<MyParams>>.MyObject_Length` zamiast `Spreadsheet.B1`. Oprócz tego, że nazwy aliasów są o wiele łatwiejsze do odczytania i zrozumienia, można je również o wiele łatwiej zmienić, jeśli zdecydujemy się na zmianę struktury arkusza kalkulacyjnego. Używanie aliasów ma również tę zaletę, że łatwiej jest sprawdzić, które komórki są używane do sterowania innymi częściami dokumentu. Zauważ, że FreeCAD automatycznie dostosowuje odniesienia do pozycji w wyrażeniach, jeśli wstawiasz lub usuwasz wiersze i kolumny w arkuszu kalkulacyjnym, więc nawet jeśli używasz numerów wierszy i kolumn w wyrażeniu, możesz wstawiać wiersze i kolumny bez naruszania odniesień do otaczających komórek.

### Modele złożone i przeliczanie

Edycja arkusza kalkulacyjnego powoduje ponowne obliczenie modelu 3D, nawet jeśli wprowadzone zmiany nie mają wpływu na model. W przypadku złożonego modelu ponowne obliczanie może trwać bardzo długo, a konieczność czekania po każdej edycji jest oczywiście dość irytująca.

Oto trzy rozwiązania, jak sobie z tym poradzić:

1. Tymczasowo pomiń ponowne przeliczenie:
   - W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") kliknij prawym przyciskiem myszy dokument ![](/images/Document.svg) zawierający arkusz kalkulacyjny.
   - Z menu podręcznego wybierz opcję **Pomiń przeliczanie**.
   - Rozwiązanie to ma dużą wadę. Nowe wartości wprowadzone w arkuszu kalkulacyjnym nie zostaną wyświetlone do czasu ponownego przeliczenia dokumentu. Zamiast tego wyświetlany jest komunikat `#OCZEKIWANIE`.
   - Możesz dokonać przeliczenia ręcznie, używając polecenia [Odświerz](/Std_Refresh/pl "Std Refresh/pl"), lub wyłączyć opcję **Pomiń przeliczanie** po zakończeniu edycji.
2. Użyj makra, aby automatycznie pomijać ponowne obliczenia podczas edycji arkusza kalkulacyjnego:
   - Pobierz i uruchom makrodefinicję [skipSheet.FCMacro](https://forum.freecadweb.org/viewtopic.php?f=8&t=48600#p419301).
   - To rozwiązanie pozwala zaoszczędzić kilka kroków w porównaniu z pierwszym rozwiązaniem, ale ma też wspomnianą wadę.
3. Umieść arkusz kalkulacyjny w osobnym pliku [FreeCAD](/File_Format_FCStd/pl "File Format FCStd/pl"):
   - Możesz odwoływać się do danych arkusza kalkulacyjnego z zewnętrznego pliku .FCStd za pomocą takiej składni: `=NameOfFile#<<MySpreadsheet>>.MyAlias`.
   - Zaletą umieszczenia arkusza kalkulacyjnego w innym pliku w stosunku do wyłączenia ponownych obliczeń jest to, że ponownie przeliczany będzie sam arkusz.
   - Wadą jest to, że model nie będzie automatycznie przeliczany po wprowadzeniu zmian w arkuszu kalkulacyjnym.
   - W sytuacji, gdy najpierw otwieramy plik arkusza kalkulacyjnego, zmieniamy jedną lub więcej wartości, a następnie otwieramy plik modelu, nie ma żadnych informacji o konieczności ponownego przeliczenia modelu. Jeśli jednak otwarte są oba pliki, po użyciu przycisku [Odświerz](/Std_Refresh/pl "Std Refresh/pl") zostanie poprawnie zaktualizowany model po zmianach w pliku arkusza kalkulacyjnego.

## Jednostki

W arkuszu kalkulacyjnym z wartościami komórek jest związane pojęcie wymiaru _(jednostki)_. Liczba wprowadzona bez przypisanej jej jednostki nie ma określonego wymiaru. Jednostka powinna być wprowadzona bezpośrednio po wartości liczby, bez odstępów. Jeśli liczba ma przypisaną jednostkę, będzie ona używana we wszystkich obliczeniach. Na przykład pomnożenie dwóch długości z jednostką mm daje pole powierzchni z jednostką mm².

Jeśli komórka zawiera wartość reprezentującą wymiar, należy ją wpisać wraz z odpowiadającą jej jednostką. Chociaż w wielu prostych przypadkach można się obejść bez podawania wartości bezwymiarowej, nie należy podawać jednostki. Jeśli wartość reprezentująca wymiar zostanie wprowadzona bez powiązanej z nią jednostki, pewne sekwencje operacji powodują, że FreeCAD zgłasza niezgodność jednostek w wyrażeniu, podczas gdy wydaje się, że wyrażenie powinno być poprawne. _(Można to lepiej zrozumieć, przeglądając [ten wątek](https://forum.freecadweb.org/viewtopic.php?f=3&t=34713&p=292455#p292438) na forum FreeCAD)_.

Jednostki wyświetlane dla wartości komórki można zmienić za pomocą okna dialogowego właściwości [zakładka jednostki](#W.C5.82a.C5.9Bciwo.C5.9Bci_kom.C3.B3rek) _(powyżej)_. Nie zmienia to wartości zawartej w komórce, a jedynie konwertuje istniejącą wartość na potrzeby wyświetlania. Wartość używana do obliczeń nie ulega zmianie, a wyniki formuł wykorzystujących tę wartość pozostają niezmienione. Na przykład komórka zawierająca wartość `5.08cm` może zostać wyświetlona jako `2cale` po zmianie wartości na karcie Jednostki na "cale".

Liczby bezwymiarowej nie można zmienić na liczbę z jednostką za pomocą okna dialogowego właściwości komórki. Można wprowadzić ciąg jednostek i zostanie on wyświetlony, ale komórka nadal będzie zawierać liczbę bezwymiarową. Aby zmienić wartość bezwymiarową na wartość z wymiarem, należy ponownie wprowadzić samą wartość wraz z przypisaną jej jednostką.

Niekiedy może być wskazane usunięcie wymiaru z wyrażenia. Można to zrobić, mnożąc przez 1 z jednostką odwrotną.

## Importowanie i eksportowanie

### Format CSV

Arkusze kalkulacyjne FreeCAD mogą być importowane i eksportowane do formatu [CSV](https://en.wikipedia.org/wiki/Comma-separated_values), który może być również odczytywany i zapisywany przez większość innych aplikacji arkuszy kalkulacyjnych, takich jak Microsoft Excel czy LibreOffice Calc. Więcej informacji na ten temat można znaleźć na stronach [Import](/Spreadsheet_Import/pl "Spreadsheet Import/pl") i [Eksport](/Spreadsheet_Export/pl "Spreadsheet Export/pl").

### Format XLSX

Arkusze kalkulacyjne w formacie Excel XLSX można importować za pomocą polecenia [Importuj](/Std_Import/pl "Std Import/pl") lub polecenia [Otwórz](/Std_Open/pl "Std Open/pl"). Obsługiwane są następujące funkcje:

- Wszystkie funkcje, które są dostępne także w arkuszu kalkulacyjnym FreeCAD. Inne funkcje powodują wystąpienie błędu w odpowiedniej komórce po zaimportowaniu.
- Nazwy aliasów dla komórek.
- Więcej niż jeden arkusz w arkuszu kalkulacyjnym Excel. W takim przypadku dla każdego arkusza Excela tworzony jest jeden arkusz kalkulacyjny FreeCAD.

Inne funkcje nie są importowane do arkusza kalkulacyjnego FreeCAD.

## Wydruki

Aby zachować ustawienia strony niezbędne do drukowania, arkusze kalkulacyjne FreeCAD można drukować, wstawiając je do obiektu [widok Arkusza Kalkulacyjnego](/TechDraw_SpreadsheetView/pl "TechDraw SpreadsheetView/pl").

## Obecne ograniczenia

FreeCAD sprawdza zależności cykliczne podczas ponownych obliczeń. Z założenia sprawdzanie to zatrzymuje się na poziomie obiektu arkusza kalkulacyjnego. W konsekwencji nie powinieneś mieć arkusza kalkulacyjnego zawierającego zarówno komórki, których wartości są używane do określania parametrów modelu, jak i komórki, których wartości wykorzystują dane wyjściowe z modelu. Na przykład nie można mieć komórek określających długość, szerokość i wysokość obiektu, a także innej komórki, która odwołuje się do całkowitej objętości wynikowego kształtu. Ograniczenie to można obejść, mając dwa arkusze kalkulacyjne: jeden używany jako źródło danych dla parametrów wejściowych do modelu, a drugi używany do obliczeń opartych na danych wynikowych geometrii.

## Powiązanie komórek

[dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

Istnieje możliwość łączenia zawartości komórek z innymi komórkami arkusza kalkulacyjnego. Może to być przydatne podczas pracy z dużymi tabelami lub w celu pobrania zawartości komórki z innego arkusza kalkulacyjnego.

### Tworzenie powiązań

Aby na przykład powiązać zakres komórek A3-C4 z zakresem komórek B1-D2:

1. Zaznacz zakres komórek A3-C4.
2. Kliknij prawym przyciskiem myszy i wybierz **Powiąż ...** z menu podręcznego.
3. Zostanie otwarte okno dialogowe **Powiąż komórki arkusza kalkulacyjnego**.
4. Ustaw zakres B1-D2 w polu **Do komórek**:
   ![](/images/Spreadsheet_binding-dialog.png)
5. Naciśnij przycisk OK.
6. Związane komórki mają niebieską obwódkę, aby wyróżnić to powiązanie.
7. Jeśli teraz wpiszesz coś w komórce C1, to to samo pojawi się natychmiast w komórce B3.

![](/images/Spreadsheet_binding-result.png)

Arkusz kalkulacyjny może teraz wyglądać następująco

### Modyfikacja powiązań

1. Kliknij prawym przyciskiem myszy powiązaną komórkę (nie trzeba zaznaczać całego powiązanego zakresu) i wybierz z menu kontekstowego polecenie **Powiąż ...**.
2. Otworzy się okno dialogowe **Powiąż komórki arkusza kalkulacyjnego**.
3. Zmień jedną lub więcej opcji. Zwróć uwagę, że nie można zmienić zakresu komórek **Powiąż komórki**, czyli powiązanego zakresu komórek.
4. Naciśnij przycisk OK.

### Usuwanie powiązań

1. Kliknij prawym przyciskiem myszy wiązaną komórkę (nie trzeba zaznaczać całego wiązanego zakresu) i wybierz z menu kontekstowego polecenie **Powiąż ...**.
2. Otworzy się okno dialogowe **Powiąż komórki arkusza kalkulacyjnego**.
3. Naciśnij przycisk Usuń powiązanie.

### Uwagi

- Opcji **Ukryj zależność powiązania** można użyć, aby uniknąć problemów z cyklicznymi zależnościami między arkuszami kalkulacyjnymi. Zaznaczenie jej jest konieczne, gdy na przykład komórki w _Arkuszu kalkulacyjnym A_ są powiązane z komórkami w _Arkuszu kalkulacyjnym B_, a komórki w _Arkuszu kalkulacyjnym B_ są powiązane z innymi komórkami w _Arkuszu kalkulacyjnym A_. Opcji tej należy używać z rozwagą:
  - Ukrywanie zależności może być niebezpieczne, ponieważ uszkodzone zależności mogą spowodować uszkodzenie pliku FreeCAD. Na przykład, gdy usuniesz arkusz kalkulacyjny, nie zostaniesz ostrzeżony o ukrytych zależnościach.
  - Gdy otworzysz dokument z arkuszem kalkulacyjnym zawierającym ukrytą zależność, arkusz zostanie oznaczony do ponownego przeliczenia. Dzieje się tak dlatego, że zależności cyklicznej nie można obliczyć ponownie w sposób automatyczny. Aby ponownie obliczyć, należy użyć narzędzia [Odśwież](/Std_Refresh/pl "Std Refresh/pl").
- Wiązanie komórek ma funkcję sprawdzania zakresu i ostrzega o niedopasowanych zakresach. Na przykład powiązanie komórek 1x3 z komórkami 3x2 nie działa, ponieważ nie wiadomo, które 3 komórki z pierwotnych 6 komórek powinny zostać użyte.
- Nie można zmienić zakresu komórek w istniejącym powiązaniu. Należy najpierw usunąć powiązanie z komórek, a następnie utworzyć nowe.
- Nie można jeszcze zmienić koloru ramki wskazującej powiązanie.

## Tabela konfiguracji

[dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

Za pomocą Arkuszy kalkulacyjnych można tworzyć tabele konfiguracyjne zawierające zestawy wstępnie zdefiniowanych parametrów modelu, a następnie dynamicznie zmieniać konfigurację, która ma być używana. Zobacz poradnik [Tabele konfiguracji](/Configuration_Tables/pl "Configuration Tables/pl"). Aby dowiedzieć się więcej na temat działania tej funkcji, zobacz [ten post na forum](https://forum.freecadweb.org/viewtopic.php?f=17&t=42183).

## Tworzenie skryptów

```
import Spreadsheet
sheet = App.ActiveDocument.addObject("Spreadsheet::Sheet", "MySpreadsheet")
sheet.Label = "Dimensions"

sheet.set("A1", "10mm")
sheet.recompute()
sheet.get("A1")

sheet.setAlias("B1", "Diameter")
sheet.set("Diameter", "20mm")
sheet.recompute()
sheet.get("Diameter")

# sheet.get() results in an error if the cell is empty.
# sheet.getContents() can be used to check the cell first.
if sheet.getContents("C1"):
    print(sheet.get("C1"))

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Spreadsheet_Workbench/pl&oldid=1507027>"
