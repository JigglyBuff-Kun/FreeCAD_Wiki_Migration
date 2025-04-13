---
title: Edytor ustawień
---
## Wprowadzenie

Aby uruchomić **Edytor ustawień** wybierz w menu **Edycja → Preferencje** lub ([dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")) użyj skrótu klawiaturowego Ctrl+,. W systemie MacOS opcja **Preferencje ...** pojawia się w menu **FreeCAD** *(jest to domyślne miejsce preferencji na Macu)*.

FreeCAD wykorzystuje koncepcję środowiska pracy, gdzie każde z nich jest odpowiedzialne za konkretne zadania i funkcje. Każde z nich może mieć swoje własne preferencje. Pojawią się one w edytorze Preferencji, zwykle w dedykowanej grupie, tylko wtedy, gdy dane środowisko pracy zostało załadowane w bieżącej sesji FreeCAD. Niektóre środowiska pracy dodają wsparcie dla określonych formatów importu i eksportu. Jeśli istnieją jakieś powiązane preferencje, pojawią się one w jednej lub kilku dodatkowych stronach w grupy [Import-Eksport](#Import_Eksport) edytora Preferencji.

Aby oszczędzać zasoby, FreeCAD nie ładuje automatycznie wszystkich dostępnych środowisk pracy. Zobacz sekcję [Środowiska pracy](#Środowiska_pracy) aby uzyskać więcej informacji. Lista preferencji związanych z każdym środowiskiem pracy, które znajduje się w sekcji [Preferencje środowisk pracy](#Preferencje_środowisk_pracy).

Jeśli nie jest załadowane żadne środowisko pracy, w edytorze Preferencji pojawi się siedem pozycji: [Ogólne](#Ogólne_2), [Wyświetlanie](#Wyświetlanie), [Środowiska pracy](#Środowiska_pracy), [Python](#Python), [Menadżer dodatków](#Menadżer_dodatków), [Import Eksport](#Import_Eksport) i [Pomiary](#Pomiary). Pod nimi pojawią się wszystkie wczytane te środowiska, które mają swoje własne preferencje.

Naciśnięcie przycisku Zresetuj ... w lewym dolnym rogu okna dialogowego Preferencje otwiera menu ([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")) z opcjami resetowania preferencji do ich wartości domyślnych. Można zresetować bieżącą stronę, bieżącą grupę lub całość preferencji. W wersja 0.21 i poniżej kliknięcie przycisku ustawi **wszystkie** z opcji FreeCAD na ich wartości domyślne.

Niektóre zaawansowane preferencje mogą być zmienione tylko w [Edytorze parametrów](/Std_DlgParameter/pl "Std DlgParameter/pl"). Na stronie [Dostrajanie parametrów](/Fine-tuning/pl "Fine-tuning/pl") znajduje się lista niektórych z nich.

Ta strona została zaktualizowana do wersji 1.0.

## Ogólne

Ta grupa menu konfiguracji zawiera siedem stron: Ogólne, Dokument, Zaznaczenie, Pamięć podręczna, Obszar powiadomień, Widok raportu i Pomoc.

W wersja 0.21 i poniżej siódma strona, Pomoc, jest dostępna tylko wtedy, gdy dodatek [Pomoc](https://github.com/FreeCAD/FreeCAD-Help) został [zainstalowany](/Std_AddonMgr/pl "Std AddonMgr/pl").

### Ogólne

![](/images/Preferences_General_Page_General.png)

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Język** | Określa język interfejsu użytkownika programu FreeCAD. |
| **Domyślny system jednostek** | System jednostek dla wszystkich części aplikacji. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Używany jako domyślny [system jednostek dokumentu](/Std_ProjectInfo/pl "Std ProjectInfo/pl") dla nowych dokumentów. System jednostek aktywnego dokumentu zastępuje domyślny system jednostek, chyba że zaznaczona jest następna opcja. |
| **Ignoruj układ jednostki z projektu i użyj domyślnego** [dostępne w wersji 0.22](/Release_notes_0.22/pl "Release notes 0.22/pl") | Jeśli opcja ta jest zaznaczona, układy jednostek projektu są ignorowane i nie zastępują domyślnego systemu jednostek. |
| **Liczba cyfr po przecinku** | Liczba miejsc po przecinku, która powinna być pokazana dla liczb i wymiarów. |
| **Najmniejszy ułamek cala** [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") | Minimalny ułamek cala, który powinien być wyświetlany dla liczb i wymiarów. Dostępne tylko dla systemów jednostek z ułamkowymi calami. | Jeśli opcja jest zaznaczona, układ jednostek projektu jest ignorowany. |
| **Format liczb** [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl") | Określa format liczby. Dostępne są następujące opcje:  * **System operacyjny**: Używany jest separator dziesiętny zdefiniowany przez system operacyjny. * **Wybrany język**: Używany jest separator dziesiętny wybranego języka interfejsu FreeCAD. * **C/POSIX**: Jako separator dziesiętny używana jest kropka. |
| **Zastąp separator dziesiętny** [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl") | Jeśli opcja jest zaznaczona, separator dziesiętny klawiatury numerycznej zostanie zastąpiony separatorem zdefiniowanym w ustawieniu **Format liczb**. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"): Zauważ, że jeśli ta preferencja jest włączona, użycie separatora dziesiętnego klawiatury numerycznej zawsze będzie powodowało wyświetlenie kropki w [Konsoli Python](/Python_console/pl "Python console/pl") i [Edytorze Makrodefinicji](/Std_DlgMacroExecute/pl#Edycja "Std DlgMacroExecute/pl"). |
| **Motywy** [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl") | Określa [motyw](/Interface_Customization/pl#Motywy "Interface Customization/pl") w celu dostosowania wyglądu interfejsu użytkownika. |
| **Rozmiar ikon paska narzędzi** | Określa rozmiar ikon paska narzędzi. Dostępne są następujące warianty:  * **Małe (16px)** * **Średnie (24px)** * **Duże (32px)** * **Bardzo duże (48px)** |
| **Tryb widoku drzewa i widoku właściwości** | Określa sposób wyświetlania widoku drzewa w interfejsie użytkownika *(wymagany restart)*. Dostępne warianty to:  * **Połączony**: Łączy [Widok drzewa](/Tree_view/pl "Tree view/pl") i [Widok właściwości](/Property_editor/pl "Property editor/pl") w jeden [panel](/Combo_view/pl "Combo view/pl"). * **Niezależny**: Rozdziela widok drzewa i widok właściwości na osobne panele. |
| **Rozmiar listy ostatnio używanych plików** | Określa, ile plików powinno znajdować się na liście ostatnio używanych plików. Opcjonalnie, zaimportowane pliki mogą zostać wykluczone z tej listy, a wyeksportowane pliki mogą zostać uwzględnione. Zobacz [Dostrajanie parametrów](/Fine-tuning/pl "Fine-tuning/pl"). |
| **Aktywuj kafle w tle** | Jeśli opcja jest zaznaczona, tło głównego okna FreeCAD będzie domyślnie składać się z tych obrazów:  Ta opcja działa tylko wtedy, gdy nie zaznaczono opcji **Styl arkusza**.  Obraz można zmienić poprzez dodanie folderów Gui/Images do lokalizacji:  [%APPDATA%](https://www.howtogeek.com/318177/what-is-the-appdata-folder-in-windows/)/FreeCAD *(na Windows)*,  $HOME/.FreeCAD *(dla Linux)* lub  $HOME/Library/Preferences/FreeCAD *(dla MacOS)*.  Umieść plik o nazwie background.png w folderze Images i odznacz / zaznacz tę opcję, aby zobaczyć zmieniony plik. |
| **Włącz ekran powitalny przy uruchamianiu** | Gdy to pole wyboru jest zaznaczone, podczas uruchamiania wyświetlany jest ekran powitalny programu FreeCAD. Obraz ekranu powitalnego można zmienić poprzez umieszczenie pliku o nazwie splash\_image.png w folderze Images wspomnianym już przy opisie opcji **Aktywuj kafle w tle**. |
| **Włącz miganie kursora** | Jeśli opcja jest zaznaczona, kursor tekstowy w [konsoli Python](/Python_console/pl "Python console/pl") i w [edytorze makrodefinicji](/Std_DlgMacroExecute/pl#Edycja "Std DlgMacroExecute/pl") będzie migał. |
| **Aktywuj obsługę nakładek**. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") | Jeśli opcja jest zaznaczona, zadokowane okna mogą być obsługiwane jako przezroczyste nakładki. |
| **Pakiety preferencji** [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl") | Listuje dostępne [pakiety preferencji](/Preference_Packs/pl "Preference Packs/pl"), a także pozwala na ich importowanie, zapisywanie, zarządzanie i przywracanie. |

### Dokument

![](/images/Preferences_General_Page_Document.png)

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Utwórz nowy dokument w trakcie uruchamiania** | Jeśli opcja jest zaznaczona, FreeCAD utworzy nowy dokument po uruchomieniu. |
| **Poziom kompresji podczas zapisu** | Specyfikacja poziomu kompresji dla plików {FCStd. Pliki FCStd} są plikami skompresowanymi w formacie ZIP. Dlatego możesz zmienić ich rozszerzenie {.FCStd na .zip} i otworzyć je za pomocą programu do archiwizacji ZIP. |
| **Użyj cofnij / ponów w dokumentach** | Jeśli to pole jest zaznaczone, wszystkie zmiany w dokumentach są zapisywane tak, aby można je było cofnąć/odtworzyć. |
| **Maksymalna ilość kroków cofnij / ponów** | Określa, ile kroków Cofnij/Zmień powinno zostać zarejestrowanych *(0-99)*. |
| **Zezwolenie na przerwanie przeliczania.** | Zezwolenie na przerwanie przeliczania dokumentu przez naciśnięcie klawisza Esc. Może to nieznacznie wydłużyć czas ponownego przeliczania. |
| **Uruchomienie automatycznego odzyskiwania przy starcie** | Jeśli jest dostępny plik odzyskiwania, FreeCAD automatycznie uruchomi funkcję odzyskiwania pliku w momencie jego uruchomienia. W ten sposób pliki mogą zostać odtworzone, jeśli wystąpi awaria. |
| **Zapisz informacje automatycznego odzyskiwania co:** | Określ, jak często będzie zapisywany plik odzyskiwania. |
| **Podczas zapisywania dokumentu dołącz miniaturkę do pliku projektu** | Jeśli to pole jest zaznaczone, po zapisaniu dokumentu zostanie również zapisana miniaturka. Miniaturka będzie wyświetlana na przykład na liście ostatnio zapisanych plików na stronie startowej. Możliwe jest wybranie **Rozmiaru** między 128 × 128 a 512 × 512 pikseli dla miniatury. Typowe rozmiary to potęgi liczby dwa: 128, 256, 512. |
| **Dodaj logo programu do wygenerowanej miniatury** | Jeśli to pole jest zaznaczone, logo programu FreeCAD  zostanie dodane do miniaturki. Ta opcja działa tylko wtedy, gdy opcja **Podczas zapisywania dokumentu dołącz miniaturkę do pliku projektu** jest aktywna. |
| **Maksymalna liczba plików kopii zapasowych podczas zapisywania dokumentu** | Jeśli to pole jest zaznaczone, pliki kopii zapasowej będą zapisywane podczas zapisywania dokumentu. Można określić, ile plików kopii zapasowych będzie przechowywanych. Zawierają one wcześniej zapisaną wersję dokumentu. |
| **Użyj daty i rozszerzenie FCBak** | Jeśli to pole jest zaznaczone, pliki kopii zapasowych otrzymają rozszerzenie *.FCbak*, a ich nazwy plików otrzymają przyrostek daty zgodnie z określonym **Formatem daty**. Opis formatu daty znajduje się na stronie [Arkusz informacyjny dotyczący formatów daty i czasu](https://devhints.io/datetime). Przy domyślnych ustawieniach plik kopii zapasowej otrzyma np. nazwę TD-Cube.20200315-215654.FCBak *(oryginalna nazwa pliku to **TD-Cube.FCStd**)*. |
| **Zezwalaj na umieszczenie duplikatów etykiet obiektów w obrębie jednego dokumentu** | Jeśli to pole jest zaznaczone, obiekty mogą mieć tę samą etykietę / nazwę. Na przykład różne części lub elementy mogą mieć wtedy identyczną nazwę w obrębie tego samego dokumentu. |
| **Wyłącz częściowe ładowanie połączonych obiektów zewnętrznych** | Jeśli opcja częściowego wczytywania zewnętrznych obiektów połączonych jest włączona, podczas automatycznego otwierania połączonego dokumentu wraz z dokumentem głównym wczytywane są tylko obiekty połączone i ich zależności. Takiego częściowo wczytanego dokumentu nie można edytować. Aby wczytać go w całości, należy dwukrotnie kliknąć ikonę dokumentu w widoku drzewa. Bardziej szczegółowe wyjaśnienie tej funkcji można znaleźć na stronie [dokumentacja środowiska Złożenie 3](https://github.com/realthunder/FreeCAD_assembly3/wiki/Core-Changes#partial-document-loading). |
| **Nazwa autora** | Wszystkie powstające dokumenty otrzymają określoną nazwę autora. Pole autora należy pozostawić puste na wypadek gdy autor ma pozostać anonimowy. Jeżeli zaznaczona jest opcja **Ustaw przy zapisywaniu**, pole **Last modified by** zostanie ustawione na określonego autora w trakcie zapisywania pliku. Informacje te można wyświetlić za pomocą menu **Plik → Informacje o projekcie**. |
| **Nazwa firmy** | Wszystkie utworzone dokumenty otrzymają podaną nazwę firmy. |
| **Licencja domyślna** | Wybór domyślnej licencji dla nowych dokumentów. W przypadku wstępnie zdefiniowanej licencji link **Adres URL licencji** zostanie automatycznie ustawiony. Wybierz **Inne**, aby uzyskać licencję własną lub specjalną. |
| **Adres URL licencji** | Wskazanie adresu URL opisującego licencję wybraną w polu **Licencja domyślna** |

### Zaznaczenie

![](/images/Preferences_General_Page_Selection.png)

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Włącz wskazanie obiektu** | Jeśli opcja jest zaznaczona, preselekcja jest włączona w [Widoku 3D](/3D_view/pl "3D view/pl") i zostanie dla niej użyty określony kolor. Preselekcja oznacza, że na przykład krawędzie obiektów zostaną podświetlone po wskazaniu ich kursorem myszki, aby wskazać, że można je wybrać. |
| **Włącz zaznaczenie** | Jeśli opcja jest zaznaczona, zaznaczanie w widoku 3D jest włączone i używany jest określony kolor. Jeśli nie jest zaznaczone, obiekty mogą być zaznaczane tylko w [Widoku drzewa](/Tree_view/pl "Tree view/pl"). Należy pamiętać, że obiekty utworzone, gdy ta opcja nie jest zaznaczona, będą miały właściwość WIDOK**Wybierlny** ustawioną na `FAŁSZ`. Z tą wartością nie można ich wybrać w widoku 3D, nawet jeśli opcja ta zostanie ponownie zaznaczona. |
| **Promień kliknięcia — wybrania (px)** | Ustawia obszar wybierania elementów w [widoku 3D](/3D_view/pl "3D view/pl"). Większa wartość ułatwia wybieranie elementów, ale może uniemożliwić wybranie niektórych małych elementów. |
| **Przełącz automatycznie do widoku 3D zawierającego wybrany element** | Włącza tryb [Synchronizuj widok drzewa](/Std_TreeSyncView/pl "Std TreeSyncView/pl"). |
| **Automatycznie rozwiń drzewko, gdy odpowiedni obiekt jest zaznaczony w oknie widoku 3D** | Włącza tryb [Synchronizuj wybrane w widoku drzewa](/Std_TreeSyncSelection/pl "Std TreeSyncSelection/pl"). |
| **Wstępny wybór obiektu w widoku 3D po wskazaniu elementu drzewa kursorem myski** | Włącza [Wybór wstępny w widoku drzewa](/Std_TreePreSelection/pl "Std TreePreSelection/pl"). |
| **Zapisz wybór w widoku drzewa, aby przejść do tyłu/do przodu za pomocą przycisku nawigacji**. | Włącza tryb [Zapisz zaznaczenie z widoku drzewa](/Std_TreeRecordSelection/pl "Std TreeRecordSelection/pl"). |
| **Dodaj pola wyboru do zaznaczenia w drzewie dokumentu**. | Każdy element [Widok drzewa](/Tree_view/pl "Tree view/pl") otrzyma pole wyboru. Jest to przydatne na przykład do zaznaczania wielu elementów na ekranie dotykowym. |

### Pamięć podręczna

![](/images/Preferences_General_Page_Cache.png)

Te preferencje są związane z katalogiem pamięci podręcznej, w którym program FreeCAD przechowuje pliki tymczasowe.

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Lokalizacja *(tylko odczyt)*** | Pokazuje ścieżkę do katalogu pamięci podręcznej. Użyj przycisku  do przeglądania katalogu. |
| **Sprawdzaj rozmiar pamięci przy starcie programu** | Określa częstotliwość sprawdzania rozmiaru katalogu. Dostępne opcje to:  * **Zawsze**, * **Codziennie**, * **Tygodniowo**, * **Miesięcznie**, * **Rocznie**, * **Nigdy**. |
| **Limit rozmiaru pamięci podręcznej** | Określa maksymalny rozmiar katalogu. Zostaniesz powiadomiony, jeśli podczas sprawdzania rozmiar przekroczy tę wartość. Dostępne opcje to:  * **100 MB**, * **300 MB**, * **500 MB**, * **1 GB**, * **2 GB**, * **3 GB**. |
| **Aktualny rozmiar** | Pokazuje aktualny rozmiar katalogu, jeśli jest dostępny. Naciśnij przycisk Sprawdź teraz ..., aby zaktualizować wartość. |

### Obszar powiadomień

![](/images/Preferences_General_Page_Notification_Area.png)

Te ustawienia sterują *Obszarem powiadomień* i jego powiadomieniami.

Na tej stronie *([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"))* można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Włącz obszar powiadomień** | Jeśli opcja jest zaznaczona, obszar powiadomień będzie wyświetlany na pasku stanu. |
| **Włącz powiadomienia** | Jeśli opcja jest zaznaczona, powiadomienia nie wymagające potwierdzenia będą pojawiać się obok Obszaru powiadomień na pasku stanu. |
| **Błędy debugowania** | Jeśli opcja jest zaznaczona, błędy przeznaczone dla programistów będą wyświetlane w Obszarze powiadomień. |
| **Ostrzeżenia debugowania** | Jeśli opcja jest zaznaczona, ostrzeżenia przeznaczone dla programistów będą wyświetlane w Obszarze powiadomień. |
| **Najdłuższy czas trwania** | Maksymalny czas, przez jaki wyświetlane są powiadomienia *(o ile nie zostały kliknięte przyciski myszki)*. |
| **Najkrótszy czas trwania** | Minimalny czas trwania *(taki sam)*. |
| **Maksymalna liczba powiadomień** | Maksymalna liczba powiadomień wyświetlanych jednocześnie. |
| **Szerokość obszaru na powiadomienia:** | Szerokość obszaru powiadomień w pikselach. |
| **Ukryj po aktywacji innego okna** | Jeśli opcja jest zaznaczona, otwarte powiadomienia będą znikać po uruchomieniu innego okna. |
| **Nie pokazuj, gdy nieaktywne** | Jeśli opcja jest zaznaczona, powiadomienia nie będą się pojawiać, jeśli okno FreeCAD nie jest aktywnym oknem. |
| **Maksymalna ilość wiadomości (0 &#61 brak limitu)** | Maksymalna liczba wiadomości przechowywanych na liście. Ustaw na 0 dla braku limitu. |
| **Automatyczne usuwanie powiadomień użytkownika** | Jeżeli opcja jest zaznaczona, powiadomienia będą usuwane z listy wiadomości po upływie **Maksymalnego czasu trwania**. |

### Widok raportu

![](/images/Preferences_General_Page_Report_view.png)

Preferencje te mają wpływ na sposób działania okna [Widoku raportu](/Report_view/pl "Report view/pl"). Ten panel może być załaczony za pomocą menu **Widok → Panele → Widok raportu**.

Widok raportu używa tych samych ustawień czcionki co [Edytor makrodefinicji](#Edytor).

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Rejestruj zwykłe wiadomości** | Jeśli opcja zostanie zaznaczona, normalne wiadomości będą rejestrowane. Będą one wyświetlane w panelu [Widok raportu](/Report_view/pl "Report view/pl") w kolorze ustawionym dla **Zwykłych wiadomości**. |
| **Rejestruj wiadomości dziennika** | Jeśli to pole jest zaznaczone, zapisywane są również informacje z logów. Informacje te będą wyświetlane w panelu [Widok raportu](/Report_view/pl "Report view/pl") w kolorze ustawionym w opcji **Wiadomości dziennika**. Panel ten jest wyświetlany za pomocą menu **Widok → Panele → Widok raportu**. |
| **Rejestruj ostrzeżenia** | Jeśli to pole jest zaznaczone, zapisywane są komunikaty ostrzeżeń. Będą one wyświetlane w panelu [Widok raportu](/Report_view/pl "Report view/pl") w kolorze ustawionym dla **Ostrzeżenia**. |
| **Rejestruj komunikaty błędów** | Jeśli to pole jest zaznaczone, będą zapisywane komunikaty o błędach. Będą one wyświetlane w panelu [Widok raportu](/Report_view/pl "Report view/pl") w kolorze ustawionym dla **Błędów**. |
| **Pokaż okno Widok raportu po wystąpieniu błędu** | Jeśli to pole jest zaznaczone, panel [widoku raportu](/Report_view/pl "Report view/pl") pojawi się automatycznie, jak tylko zostanie zarejestrowany błąd. |
| **Pokaż okno Widok raportu po wystąpieniu ostrzeżenia** | Jeśli to pole jest zaznaczone, panel [widoku raportu](/Report_view/pl "Report view/pl") pojawi się automatycznie gdy zostanie zarejestrowane ostrzeżenie. |
| **Pokaż okno Widok raportu po wystąpieniu zwykłej wiadomości** | Jeśli to pole jest zaznaczone, panel [widoku raportu](/Report_view/pl "Report view/pl") pojawi się automatycznie gdy zostanie zarejestrowany zwykły komunikat. |
| **Pokaż okno Widok raportu z wiadomościami dziennika** | Jeśli to pole jest zaznaczone, panel [widoku raportu](/Report_view/pl "Report view/pl") będzie wyświetlany automatycznie po zarejestrowaniu komunikatu dziennika. |
| **Dołączaj znacznik czasu do każdej pozycji wpisu** | Jeśli to pole zostanie zaznaczone, każdy komunikat i ostrzeżenie będzie otrzymywać informacje z oznaczeniem czasu. |
| **Zwykłe wiadomości** | Określa kolor czcionki dla normalnych wiadomości w panelu [widok raportu](/Report_view/pl "Report view/pl"). |
| **Wiadomości dziennika** | Określa kolor czcionki dla komunikatów dziennika w panelu [widok raportu](/Report_view/pl "Report view/pl"). |
| **Ostrzeżenia** | Określa kolor czcionki dla komunikatów ostrzeżeń w panelu [widok raportu](/Report_view/pl "Report view/pl"). |
| **Błędy** | Określa kolor czcionki dla komunikatów błędów w panelu [widok raportu](/Report_view/pl "Report view/pl"). |
| **Przekieruj wiadomości wewnętrzne środowiska Python do Widoku raportu** | Jeśli to pole jest zaznaczone, wewnętrzne wyjście środowiska Python zostanie przekierowane z [konsoli Python](/Python_console/pl "Python console/pl") do panelu [Widoku raportu](/Report_view/pl "Report view/pl"). Konsola Pythona jest wyświetlana z poziomu menu **Widok → Panele → Konsola Python**. |
| **Przekieruj błędy wewnętrzne środowiska Python do Widoku raportu** | Jeśli to pole jest zaznaczone, wewnętrzne komunikaty o błędach Pythona zostaną przekierowane z [konsoli Python](/Python_console/pl "Python console/pl") do panelu [Widoku raportu](/Report_view/pl "Report view/pl"). |

### Pomoc

![](/images/Preferences_General_Page_Help.png)

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Źródła** | Określa źródło plików pomocy. Dostępne opcje to:  * **FreeCAD Wiki (online)**: * **Wersja Markdown (online)**: * **GitHub (online)**: Nie można wybrać. * **Lokalizacja niestandardowa**: Wprowadź ścieżkę, w której można znaleźć pobraną dokumentację FreeCAD. Aby pobrać dokumentację, wybierz dodatek *Dokumentacja offline* z listy Środowisk pracy w [Menedżerze dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl").   **Sufiks tłumaczenia**: Dla opcji Wiki i opcji Markdown można określić przyrostek języka [[1]](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). Użyj na przykład `pl` dla tłumaczenia w języku polskim. |
| **Wyświetlanie**. | Określa miejsce wyświetlania dokumentacji. Dostępne opcje to:  * **W domyślnej przeglądarce internetowej Twojego systemu**: Dokumentacja jest wyświetlana w domyślnej przeglądarce internetowej. * **W zakładce programu FreeCAD**: Dokumentacja jest wyświetlana na nowej karcie w [głównym obszarze widoku](/Main_view_area/pl "Main view area/pl"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Nie można już używać. * **W osobnym, możliwym do osadzenia oknie dialogowym**: Dokumentacja jest wyświetlana w osobnym oknie dialogowym. To okno dialogowe może być na przykład zadokowane na górze [Widoku połączonego](/Combo_view/pl "Combo view/pl"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Nie może być już używana. |
| **Własny arkusz stylów** | Określa opcjonalny niestandardowy arkusz stylów. Nieużywany w Wiki. |

## Wyświetlanie

Ta sekcja preferencji grupuje sześć standardowych zakładek: **Widok 3D** **Źródła światła**, **Interfejs użytkownika**, **Nawigacja**, **Kolory** i **Zawansowane**. Siódma strona, **Widok siatki**, jest dodawana, jeśli załadowano środowisko pracy [Projekt Siatki](/Mesh_Workbench/pl "Mesh Workbench/pl").

### Widok 3D

![](/images/Preferences_Display_Page_3D_View.png)

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Pokaż w narożniku symbol układu współrzędnych** | Jeśli to pole jest zaznaczone, zawsze będzie wyświetlany główny układ współrzędnych w prawym dolnym rogu okna [widoku 3D](/3D_view/pl "3D view/pl"). Opcja **Względna wielkość** definiuje rozmiar reprezentacji jako procent rozmiaru okna przeglądarki *(wartość minimalna wysokości i szerokości)*. Polecenie **Kolor litery** definiuje kolor liter osi. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl"): Opcje **Kolor osi X**, **Kolor osi Y** i **Kolor osi Z** definiują kolory osi. |
| **Domyślnie pokazuj krzyżyk osi modelu** | Jeśli to pole jest zaznaczone, przy otwieraniu lub tworzeniu pliku domyślnie wyświetlany będzie krzyż osi w oknie [widoku 3D](/3D_view/pl "3D view/pl"). |
| **Pokaż licznik klatek na sekundę** | Jeśli opcja jest zaznaczona, to czas potrzebny na wykonanie ostatniej operacji i wynikowa [liczba klatek na sekundę](https://en.wikipedia.org/wiki/Frame_rate) zawsze będzie wyświetlana w lewym dolnym rogu okna [widoku 3D](/3D_view/pl "3D view/pl"). |
| **Wyłącz sprzętowe wspomaganie renderowania** [dostępne w wersji 0.19](/Release_notes_0.19/pl "Release notes 0.19/pl") | Jeśli opcja jest zaznaczona, [OpenGL](https://en.wikipedia.org/wiki/OpenGL) program będzie używać CPU zamiast GPU. Opcja ta jest przydatna przy rozwiązywaniu problemów z kartą graficzną i sterownikami. Zmiana tej opcji wymaga ponownego uruchomienia aplikacji. |
| **Użyj OpenGL VBO *(Vertex Buffer Object)*** | Jeśli opcja jest zaznaczona, [Vertex Buffer Objects](https://en.wikipedia.org/wiki/Vertex_Buffer_Object) *(VBO)* będzie używany. VBO jest funkcją [OpenGL](https://en.wikipedia.org/wiki/OpenGL) która oferuje procedury przesyłania danych o wierzchołkach *(położenie, wektor normalny, kolor itp.)* od karty graficznej. VBO oferuje znaczny wzrost wydajności, ponieważ dane znajdują się w pamięci graficznej, a nie w pamięci systemowej i dlatego mogą być renderowane bezpośrednio przez GPU. Więcej informacji na temat tła można znaleźć na witrynie [Zrozumieć obiekty OpenGL](https://www.haroldserrano.com/blog/understanding-opengl-objects). |
| **Pamięć podręczna dla Renderowania** | **Render Cache** lub **Render Acceleration** jest wyjaśnione bardziej szczegółowo na stronie [FreeCAD assembly3 render-caching](https://github.com/realthunder/FreeCAD_assembly3/wiki/Link#render-caching). Istnieją trzy opcje:  * **Automatycznie** *(domyślnie)*, niech Coin3D zdecyduje, w której pamięci buforować. * **Rozproszone**, włącz pamięć podręczną dla wszystkich węzłów głównych źródła widoku. * **Scentralizowane**, wyłącz pamięć podręczną we wszystkich węzłach wszystkich źródeł widoków i buforuj tylko w węźle głównym wykresu sceny. Zapewnia to najszybszą wydajność renderowania, ale wolniejszą reakcję na wszelkie zmiany sceny. |
| **Wygładzanie** | Wybór, czy i jakiego rodzaju [multisample anti-aliasing](https://en.wikipedia.org/wiki/Multisample_anti-aliasing) będzie w użyciu. |
| **Przezroczystość obiektów** | Renderuj obiekty przezroczyste. Dostępne są następujące typy:  * **Jeden przebieg** *(domyślnie)*, renderowanie odbywa się w jednym przebiegu. Dla obiektów nie będących bryłami, takich jak powierzchnie lub siatki, może to prowadzić do powstania artefaktów. [Ten obraz](https://forum.freecadweb.org/download/file.php?id=109935) pokazuje taki artefakt *(czarny trójkąt)* i że typ **Przejście od tyłu** unika tego. * **Przebieg od tyłu**, ma wpływ tylko na obiekty nie będące obiektami stałymi. Są one następnie renderowane w dwóch przebiegach: Wielokąty zwrócone do tyłu są renderowane w pierwszym przejściu, a zwrócone do przodu w drugim przejściu. |
| **Rozmiar znacznika punktu** | Określa rozmiar [wierzchołków](/Glossary#Vertex "Glossary") *(punktów)* w środowisku pracy [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"). Obszar punktów, który można kliknąć, można dodatkowo powiększyć, zwiększając promień kliknięcia **Pick radius**. |
| **Odległość między oczami dla trybu stereo** | Określa odległość między oczami używaną dla projekcji stereoskopowych. Podana wartość jest współczynnikiem, który zostanie pomnożony przez rozmiar [ramki konturu](/Property_editor/pl#Widok "Property editor/pl") obiektu 3D, który jest aktualnie wyświetlany. |
| **Kolor podświetlenia** | Jeśli opcja jest zaznaczona, podświetlenie jest włączone przy użyciu zdefiniowanego koloru. Podświetlenie jest używane do renderowania tylnych boków ścian *(zazwyczaj nie widać ich w bryłach, chyba, że tniemy jedną z płaszczyzną przycięcia, lub jeśli ściany nie są poprawnie ustawione)*. Opcja jest używana tylko dla obiektów, których właściwość oświetlenia *(na zakładce Widok)* jest ustawiona na wartość **Jedna strona**. Jeśli jest wyłączona, tylna strona ścian tych obiektów będzie czarna. Powiązane ustawienie **Intensywności** określa intensywność podświetlenia. |
| **Typ projekcji** | Określa typ rzutowania ujęcia widoku. Dostępne są następujące opcje:  * **Renderowanie perspektywiczne**: Obiekty będą wyświetlane w [rzucie perspektywicznym](/Std_PerspectiveCamera/pl "Std PerspectiveCamera/pl"). * **Renderowanie ortogonalne**: Obiekty będą wyświetlane w [rzucie prostokątnym](/Std_OrthographicCamera/pl "Std OrthographicCamera/pl"). |

### Źródła światła

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

![](/images/Preferences_Display_Page_Light_Sources.png)

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Źródło światła** | Jeśli opcja ta jest zaznaczona, obiekty w [Widoku 3D](/3D_view "3D view") są oświetlane przez kierunkowe źródło światła i używany jest dla niego określony kolor. Bez tej opcji wszystkie obiekty będą wyświetlane jako jednolicie czarne. |
| **Intensywność** | Przesuń suwak, aby zmienić intensywność światła. |
| **Kierunek** | Podgląd pokazuje płaszczyznę XY i kulę, wskazującą źródło światła, połączoną linią ze stożkiem, wskazującym kierunek. Wszystkie elementy w podglądzie, kula, mały stożek bezpośrednio do niej przymocowany, linia i duży stożek, mogą być przeciągane w celu zmiany kierunku światła. Dla większej precyzji, można ustawić wektor kierunku podając wartości **x**, **y** i **z** lub wartości **q0** - **q3** [kwaternionów](https://pl.wikipedia.org/wiki/Kwaterniony). Możesz przybliżać i oddalać podgląd przy pomocy przycisków w lewym dolnym rogu. |

### UI

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

![](/images/Preferences_Display_Page_UI.png)

### Nawigacja

![](/images/Preferences_Display_Page_Navigation.png)

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Kostka nawigacyjna** | Jeśli opcja jest zaznaczona, [kostka nawigacyjna](/Navigation_Cube/pl "Navigation Cube/pl") jest wyświetlana w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Powiązany parametr **Ilość kroków na pełen obrót** określa, ile kroków *(skoków)* jest wymaganych podczas używania strzałek obrotu kostki nawigacyjnej.  Jeśli zaznaczono **Obróć do najbliższego**, Po kliknięciu ściany sześcianu widok 3D jest obracany do najbliższej najbardziej logicznej pozycji, w oparciu o bieżącą orientację sześcianu. W przeciwnym razie kliknięcie ściany zawsze spowoduje wykonanie obrotu o tę samą wartość. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")  **Rozmiar kostki nawigacyjnej** Definiuje rozmiar sześcianu. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")  **Kolor** ustawia kolor dla wszystkich elementów wokół kostki. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")  Powiązana opcja **Narożnik** określa miejsce wyświetlania kostki nawigacyjnej w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Dostępne opcje to:   * **Lewy górny** * **Prawy górny** * **Lewy dolny** * **Prawy dolny**   **Nazwa czcionki** określa czcionkę używaną w opisie kostki. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")  **Przezroczystość, gdy nieaktywne** Przezroczystość kostki nawigacji, gdy nie znajduje się pod kursorem myszki. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") |
| **Wskaźnik środka obrotu** [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") | Jeśli opcja ta jest zaznaczona, podczas przeciągania wyświetlany jest środek obrotu widoku. Można określić **Rozmiar sfery** i **Kolor i przezroczystość** wskaźnika. |
| **Styl nawigacji w przestrzeni 3D** | Określa styl [nawigacji myszką](/Mouse_navigation/pl "Mouse navigation/pl"). Aby wyświetlić szczegóły każdego stylu, zaznacz go, i naciśnij przycisk Myszka .... |
| **Technika orbitalna** | Określa styl orbity obrotu używany w trybie obrotu. Dostępne opcje to:  * **Turntable**: Przesunięcie myszy powoduje podział obrotu na kroki, obroty wokół poszczególnych osi wykonywane są sekwencyjnie. * **Trackball**: Poruszanie myszą w poziomie spowoduje obrót widoku wokół osi Y. * **Free Turntable**: Jak **Trackball**, ale jeśli to możliwe, oś obrotu jest utrzymywana we współliniowości z globalną osią widoku 3D. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl") |
| **Tryb obrotu** | Określa środek obrotu. Dostępne są następujące opcje:  * **Środek okna**, * **Przyciągnij do kursora**, * **Środek obiektu**. |
| **Domyślna orientacja ujęcia widoku** | Wybór orientacji ujęcia widoku dla nowych dokumentów. Tego ustawienia używa również polecenie [Std: Widok domyślny](/Std_ViewHome/pl "Std ViewHome/pl"). |
| **Przybliż ujęcie widoku** | Wpływa na początkowy poziom powiększenia ujęcia widoku dla nowych dokumentów. Ustawiona wartość to średnica kuli, która mieści się w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Domyślnie jest to 100 mm. Ustawia również początkowy rozmiar elementów początkowych *(płaszczyzn bazowych dla nowych [zawartości](/PartDesign_Body/pl "PartDesign Body/pl") środowiska Projekt Części i [części](/Std_Part/pl "Std Part/pl") środowiska Część)*. |
| **Powiększ przy kursorze** | Jeśli opcja jest zaznaczona, operacje powiększania będą wykonywane w położeniu kursora myszki. W przeciwnym razie operacje powiększania będą wykonywane na środku bieżącego widoku. **Krok powiększenia** określa, w jakim stopniu będzie wykonywane powiększenie. Krok powiększenia równy **1** oznacza współczynnik 7,5 dla każdego kroku powiększenia. |
| **Odwrócenie operacji przybliż / oddal** | Jeśli opcja jest zaznaczona, kierunek wykonywania operacji powiększania zostanie odwrócony. |
| **Wyłącz gest obrotu na ekranie dotykowym** | Jeśli ta opcja jest zaznaczona, a **Styl nawigacji w przestrzeni 3D** jest ustawiony na **Gesture**, gest odchylania będzie wyłączony w przypadku powiększania przez szczypanie *(powiększanie dwoma palcami)*. |
| **Włącz wsparcie dla starszych manipulatorów 3D** [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl") | Jeśli zaznaczone, starsze manipulatory 3D mogą być używane. Może to zostać przeniesione do wersji 1.0.1. |
| **Animacje** | Jeśli opcja jest zaznaczona, animowane są obroty i powiększenia widoku, z wyjątkiem tych wywoływanych przez akcje myszki. Można określić **Czas trwania animacji**. **Włącz animacje wirowania** jeśli opcja ta jest zaznaczona i jeśli **Nawigacja 3D** jest ustawiona na **CAD**, obroty wywoływane myszką mogą być również animowane. Jeśli kursor myszki zostanie przesunięty przy wciśniętym kółku przewijania i prawym przycisku myszki, widok zostanie obrócony. Jeśli kursor pozostanie w ruchu, a prawy przycisk myszki zostanie zwolniony, obrót będzie kontynuowany. Aby zakończyć tę animację, kliknij lewym przyciskiem myszki. |

### Kolory

![](/images/Preferences_Display_Page_Colors.png)

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Pojedynczy kolor**. | Jeśli opcja zostanie wybrana, tło [Widok 3D](/3D_view/pl "3D view/pl") będzie mieć określony kolor. |
| **Gradient liniowy** | Jeśli opcja zostanie zaznaczona, tło [Widok 3D](/3D_view/pl "3D view/pl") będzie mieć pionowy gradient kolorów zdefiniowany przez określone kolory **Góra** i **Dół**. Jeśli opcja jest włączona, można również określić kolor **Środek**. Naciśnij przycisk  ([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")), aby przełączyć górny i dolny kolor. |
| **Gradient radialny** [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl") | Jeśli opcja ta zostanie zaznaczona, tło [Widoku 3D](/3D_view/pl "3D view/pl") będzie miało radialny gradient kolorów zdefiniowany przez określone kolory **Środkowy** i **Końcowy**. jeśli opcja ta jest włączona, można również określić kolor **Środkowy**. Naciśnij przycisk , aby przełączyć kolor środkowy i końcowy. |
| **Edytowany obiekt** | Określa kolor tła dla aktualnie edytowanych obiektów w widoku drzewa. |
| **Aktywna zawartość** | Określa kolor tła dla aktywnych kontenerów w widoku drzewa. Na przykład [aktywna zawartość Projektu Części](/PartDesign_Body/pl#Active_Status "PartDesign Body/pl") otrzyma ten kolor. |
| **Kolor tekstu etykiety** | Kolor używany dla etykiet paska kolorów. Pasek kolorów jest używany w środowisku pracy [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") i [MES](/FEM_Workbench/pl "FEM Workbench/pl"). |
| **Rozmiar czcionki na etykiecie** | Rozmiar tych etykiet. |

### Zaawansowane

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

![](/images/Preferences_Display_Page_Advanced.png)

### Widok siatki

![](/images/Preferences_Display_Page_Mesh_view.png)

Ta strona jest dostępna tylko wtedy, gdy środowisko pracy [Projekt Siatki](/Mesh_Workbench/pl "Mesh Workbench/pl") zostało załadowane.

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Domyślny kolor siatki** | Wybór domyślnego koloru dla powierzchni nowo utworzonych siatek. |
| **Domyślny kolor linii** | Wybór domyślnego koloru linii dla nowo utworzonych siatek. |
| **Przeźroczystość siatki** | Określa domyślną przezroczystość siatki. |
| **Przeźroczystość linii** | Określa domyślną przezroczystość linii siatki. |
| **Rendering dwustronny** | Jeżeli opcja jest zaznaczona, domyślną wartością dla właściwości WIDOK**Oświetlenie** jest `Dwustronne` zamiast `Jednostronne`. Wartość `Dwustronne` oznacza, że kolor wewnętrznej strony powierzchni jest taki sam jak kolor strony zewnętrznej. `Jednostronne` oznacza, że ich kolorem jest albo [kolor podświetlenia](#Widok_3D) jeśli jest włączony, albo czarny. |
| **Pokaż ramkę otaczającą dla podświetlonych lub wybranych siatek** | Jeżeli opcja jest zaznaczona, domyślną wartością dla właściwości WIDOK**Styl wyboru** jest `Ramka otaczająca` zamiast `Kształt`. Wartość `Ramka otaczająca` oznacza, że jeśli siatki są podświetlone lub wybrane, wyświetlana jest podświetlona ramka otaczająca. Wartość `Kształt` oznacza, że sam kształt jest wtedy podświetlony. |
| **Zdefiniuj wektor normalny dla wierzchołka** | Jeżeli opcja jest zaznaczona, [Cieniowanie Phong](https://en.wikipedia.org/wiki/Phong_shading) jest używane, w przeciwnym razie stosuje się cieniowanie płaskie. Cieniowanie określa wygląd powierzchni. W przypadku cieniowania płaskiego nie określa się normalności powierzchni na punkt, co prowadzi do nierzeczywistego wyglądu zakrzywionych powierzchni, natomiast zastosowanie cieniowania Phong prowadzi do uzyskania gładszego wyglądu. |
| **Kąt załamania** | Kąt załamania to kąt progowy między dwiema powierzchniami. Można go ustawić tylko wtedy, gdy opcja **Zdefiniuj wektor normalny dla wierzchołka** jest używana. Jeśli kąt nachylenia powierzchni ≥ kąt załamania, stosuje się cieniowanie ścian.  Jeśli kąt nachylenia powierzchni < kąt załamania, stosuje się gładkie zacienienie. |

## Środowiska pracy

Ta grupa preferencji ma jedną stronę: Dostępne środowiska pracy.

### Dostępne środowiska pracy

![](/images/Preferences_Workbenches_Page_Available_Workbenches.png)

Preferencje te sterują ładowaniem środowisk pracy.

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Dostępne środowiska pracy** | Lista wyświetla wszystkie zainstalowane środowiska pracy. Lista może zostać uporządkowana metodą przeciągnij i upuść ([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")) oraz posortowana poprzez kliknięcie prawym przyciskiem myszy i wybranie **Sortuj alfabetycznie** *([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"))*. Kolejność listy określa również kolejność selektora [środowiska pracy](/Std_Workbench/pl "Std Workbench/pl").  * [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"): **Pierwsze pole wyboru w każdym rzędzie**: Jeśli zostanie zaznaczone, środowisko robocze będzie dostępne w selektorze środowiska pracy w następnej sesji FreeCAD. Startowe środowisko nie może być odznaczone. Niezaznaczone środowiska pracy są przesuwane na dół listy. * **Ładuj automatycznie**: Jeśli opcja jest zaznaczona, to środowisko pracy będzie automatycznie ładowane podczas uruchamiania programu FreeCAD. Ładowanie większej ilości środowisk powoduje, że start jest wolniejszy, ale przełączanie pomiędzy środowiskami, które zostały już załadowane jest szybsze. * Wczytaj teraz: Naciśnij ten przycisk, aby załadować środowisko w bieżącej sesji FreeCAD. |
| **Po uruchomieniu załaduj automatycznie środowisko pracy** | Środowisko pracy, które jest aktywowane po uruchomieniu programu FreeCAD. |
| **Typ okienka wyboru środowiska pracy:** [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") | Dostępne opcje to:  * **Rozwijana lista**: środowiska pracy mogą być wybierane z rozwijanej listy. * **Pasek zakładek**: Środowiska pracy można wybierać z paska zakładek. Wymaga to mniejszej liczby kliknięć niż poprzednia opcja, ale zajmuje więcej miejsca na ekranie. |
| **Styl pozycji wyboru środowiska pracy** [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") Dostępne opcje to:   * **Ikona i tekst** * **Ikona** * **Tekst** |
| **Pamiętaj aktywne środowisko pracy według zakładek** | Jeśli opcja ta zostanie zaznaczona, FreeCAD zapamięta i przywróci aktywne środowisko pracy dla każdej zakładki w [głównym obszarze roboczym](/Main_view_area/pl "Main view area/pl"). |

## Python

Ta grupa preferencji ([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")) ma trzy strony: Makrodefinicje, Ogólne i Edytor.

### Makropolecenia

![](/images/Preferences_Python_Page_Macro.png)

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Uruchom makro w środowisku lokalnym** | Jeśli pole jest zaznaczone, zmienne zdefiniowane przez makra są tworzone jako zmienne lokalne, w przeciwnym razie są to zmienne globalne Python. |
| **Ścieżka do plików makrodefinicji** | Określenie ścieżki do folderu plików makrodefinicji. |
| **Nagrywanie poleceń GUI** | Jeśli pole jest zaznaczone, [nagrana makrodefinicja](/Std_DlgMacroRecord/pl "Std DlgMacroRecord/pl") będzie również zawierać polecenia interfejsu użytkownika. |
| **Zarejestruj jako komentarz** | Jeśli pole jest zaznaczone, [nagrana makrodefinicja](/Std_DlgMacroRecord/pl "Std DlgMacroRecord/pl") będzie również zawierać polecenia interfejsu użytkownika, ale jako komentarze. Jest to przydatne, jeśli nie chcesz wykonywać widocznych akcji podczas uruchamiania makra, ale zobaczyć, co można zrobić w sposób widoczny. |
| **Pokaż polecenia skryptu w konsoli Python** | Jeśli pole jest zaznaczone, polecenia wykonywane przez skrypty makro są wyświetlane w konsoli Python. Konsola jest dostępna z poziomu menu **Widok → Panele → konsola Python**. |
| **Rozmiar listy ostatnio używanych makrodefinicji** | Kontroluje liczbę ostatnio wyświetlanych makrodefinicji w menu. |
| **Liczba skrótów** | Kontroluje liczbę ostatnich makrodefinicji, które otrzymują dynamicznie przypisane skróty. |
| **Klawiszy modyfikujące** | Kontroluje, które kombinacje klawiszy są używane dla skrótów, na przykład Ctrl + Shift + tworzy skróty w postaci Ctrl + Shift + 1, Ctrl + Shift + 2 itd. |

### Ogólne

![](/images/Preferences_Python_Page_General.png)

Ustawienia kolorów i czcionek są również używane przez [konsole Python](#Konsola_Python). Konsolę tę można otworzyć za pomocą opcji menu **Widok → Panele → Konsola Python**.

Należy pamiętać, że ustawienia kolorów i czcionek konsoli definiuje się na stronie [Edytor](#Edytor).

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Włącz zawijanie tekstu** | Jeśli opcja ta jest zaznaczona, słowa będą zawijane, jeśli przekroczą dostępny w konsoli rozmiar wiersza. |
| **Włącz duży kursor** | Jeśli opcja ta jest zaznaczona, kursor będzie miał kształt bloku. |
| **Zapisz dziennik działań** | Jeśli opcja ta jest zaznaczona, historia poleceń środowiska Python jest zapisywana przez wszystkie sesje. |
| **Interwał profilera Python (milisekundy)** [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") | The interval at which the profiler runs when there is Python code running (to keep the GUI responding). Set to 0 to disable. |
| **Ścieżka do zewnętrznego pliku wykonywalnego Python (opcjonalnie)** | Używany do instalacji pakietów za pomocą aplikacji pip i debugowania za pomocą debugpy. Automatycznie wykrywany, jeśli jest potrzebny i nie został określony. |

### Edytor

![](/images/Preferences_Python_Page_Editor.png)

Ustawienia edytora preferencji mają wpływ na zachowanie [edytora makrodefinicji](/Std_DlgMacroExecute#Edit "Std DlgMacroExecute"). Edytor ten można otworzyć za pomocą menu **Makro → Makra... → Edycja** lub **Utwórz**.

Ustawienia kolorów i czcionek są również używane przez [Konsolę Pythona](/Python_console/pl "Python console/pl"). Ustawienia czcionki są również używane przez okno [Widok raportu](/Report_view/pl "Report view/pl").

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Włacz numerowanie linii** | Jeśli opcja ta jest zaznaczona, to wiersze kodu będą numerowane.. |
| **Włącz duży kursor** | Jeśli opcja ta jest zaznaczona, kursor będzie miał kształt bloku. |
| **Rozmiar tabulacji** | Określa raster tabulatora ( liczbę spacji). Jeśli na przykład ustawiono go na **6**, naciśnięcie klawisza Tab spowoduje przeskok do znaku 7 lub 13 lub 19 itd. w zależności od bieżącej pozycji kursora. To ustawienie jest używane tylko wtedy, gdy wybrano opcję **Kontroluj tabulacje**. |
| **Rozmiar wcięcia** | Określa, ile spacji zostanie wstawionych po naciśnięciu klawisza Tab. To ustawienie jest używane tylko wtedy, gdy wybrano opcję **Wstaw spacje**. |
| **Kontroluj tabulacje** | Jeśli opcja jest zaznaczona, naciśnięcie klawisza Tab spowoduje wstawienie tabulatora z rastrem określonym przez opcję **Rozmiar tabulacji**. |
| **Wstaw spacje** | Jeśli opcja ta jest zaznaczona, naciśnięcie klawisza Tab spowoduje wstawienie spacji w ilości określonej przez opcję **Rozmiar wcięcia**. |
| **Wyświetl elementy** | Określa format kodu, do którego zostaną zastosowane ustawienia kolorów i czcionek. Wynik można sprawdzić w polu **Podgląd**. |
| **Czcionka** | Określa rodzinę czcionek, która powinna być używana dla wybranego typu kodu. |
| **Rozmiar** | Określa rozmiar czcionki, która powinna być używana dla wybranego typu kodu. |
| **Kolor** | Określa barwę, która ma być używana dla wybranego typu kodu. |

## Menadżer dodatków

Ta grupa preferencji ma jedną stronę: Opcje menedżera dodatków.

### Opcje Menadżera dodatków

![](/images/Preferences_Addon_Manager_Page_Addon_manager_options.png)

Te ustawienia kontrolują sposób działania [Menedżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl").

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Automatycznie sprawdzaj aktualizacje podczas uruchomienia *(wymaga Git)*** | Jeśli opcja ta jest zaznaczona, Menedżer dodatków będzie sprawdzał dostępność aktualizacji przy starcie. Aby to działało, muszą być zainstalowane środowiska Git. |
| **Pobierz metadane makrodefinicji *(około 10MB)*** | Jeśli to opcja jest zaznaczona, metadane dotyczące makrodefinicji są pobierane w celu wyświetlenia ich na głównej liście dodatków w menedżerze dodatków. Dane te są buforowane lokalnie. |
| **Częstotliwość aktualizacji pamięci podręcznej** | Kontroluje częstotliwość, z jaką aktualizowane są lokalnie buforowane dodatki i informacje o metadanych. Dostępne opcje to:  * **Ręcznie (bez aktualizacji automatycznych)** * **Codziennie** * **Tygodniowo** |
| **Ukryj dodatki bez zdefiniowanej licencji** [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") | Jeśli opcja ta jest zaznaczona, dodatki bez licencji nie są uwzględniane na liście. |
| **Ukryj dodatki bez licencji FSF Free/Libre** [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") | Jeśli opcja ta jest zaznaczona, dodatki z licencją Free/Libre nieopublikowane przez [Free Software Foundation](https://www.fsf.org/licensing) nie są uwzględniane na liście. |
| **Ukryj dodatki z licencją niezatwierdzoną przez OSI** [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") | Jeśli opcja ta jest zaznaczona, dodatki z licencją niezatwierdzoną przez [Open Source Initiative](https://opensource.org/licenses) nie są uwzględnione na liście. |
| **Ukryj dodatki wymagające środowiska Python 2** | Jeśli ta opcja jest zaznaczona, dodatki oznaczone jako " Wyłącznie Python 2" nie są uwzględniane w zestawieniu. Jest mało prawdopodobne, aby te dodatki działały w bieżącej wersji programu FreeCAD. |
| **Ukryj dodatki oznaczone jako przestarzałe** | Jeśli ta opcja jest zaznaczona, dodatki oznaczone jako "Nieaktualne" nie będą uwzględniane na liście. |
| **Ukryj dodatki które wymagają nowszej wersji programu FreeCAD** | Jeśli ta opcja jest zaznaczona, dodatki, które wymagają nowszej wersji programu FreeCAD, nie są uwzględniane w zestawieniu. |
| **Repozytoria użytkownika** | W tym miejscu można określić własne repozytoria. Aby dodać repozytorium naciśnij przycisk . Zarówno **Repository URL** jak i **Branch**, zwykle `master` lub `main`, muszą być określone w oknie dialogowym, które się otworzy. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")  Aby usunąć repozytorium wybierz je na liście i naciśnij przycisk . [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl") |
| **Serwer pośredniczący** | Menedżer dodatków zawiera eksperymentalną obsługę serwerów proxy wymagających uwierzytelnienia, ustawionych jako serwery proxy zdefiniowane przez użytkownika. |
| **Adres URL źródła wyniku** [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") | Adres URL dla danych punktacji dodatków. Zapoznaj się z informacjami na stronie [Menadżer dodatków](/Std_AddonMgr/pl#Sorting_by_score "Std AddonMgr/pl") dla szczegółów formatowania i hostingu. |
| **Ścieżka do pliku wykonywalnego Git (opcjonalnie)** [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl") | Menedżer dodatków próbuje określić plik wykonywalny Git. Aby zastąpić ten wybór, ścieżkę do pliku wykonywalnego można ustawić tutaj. |
| **Plik wykonywalny Python *(opcjonalnie)*** | Menedżer dodatków próbuje określić plik wykonywalny środowiska Python, który powinien zostać użyty do automatycznej instalacji zależności Pythona za pomocą skryptów. Aby zastąpić ten wybór, można ustawić tutaj ścieżkę do pliku wykonywalnego. |
| **Plik wykonywalny Git *(opcjonalnie)*** | Menedżer dodatków próbuje określić plik wykonywalny Git. Aby zastąpić ten wybór, można ustawić tutaj ścieżkę do pliku wykonywalnego. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl") |
| **Pokaż opcję zmiany gałęzi *(wymaga Git)*** | Jeśli opcja jest zaznaczona, menedżer dodatków udostępnia interfejs na ekranie szczegółów dodatku, który umożliwia przełączanie, która gałąź Git jest aktualnie przeszukiwana. Jest to przeznaczone tylko dla zaawansowanych użytkowników, ponieważ możliwe jest, że wersja dodatku bez gałęzi podstawowej może spowodować niestabilność i problemy z kompatybilnością. Git musi być zainstalowany, aby to działało. Używaj z rozwagą. |
| **Wyłącz Git (powróć do pobierania tylko w formacie ZIP)** [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl") | Jeśli opcja jest zaznaczona, pobieranie z Git jest wyłączone. |
| **Tryb dewelopera dodatków** [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl") | Jeśli opcja ta jest zaznaczona, aktywowane są opcje menedżera dodatków przeznaczone dla twórców dodatków. |

## Import Eksport

Ustawienia Import-Export wpływają na sposób importowania i eksportowania plików do i z FreeCAD. Są one opisane na stronie [Preferencje eksportu, importu](/Import_Export_Preferences/pl "Import Export Preferences/pl").

## Pomiary

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

Ta grupa preferencji ma jedną stronę: Wygląd.

### Wygląd

![](/images/Preferences_Measure_Page_Appearance.png)

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Rozmiar tekstu** | Określa rozmiar tekstu w pikselach. |
| **Kolor tekstu** | Określa kolor tekstu. |
| **Kolor linii** | Określa kolor linii łączącej etykietę tekstową z mierzonymi elementami. |
| **Kolor tła** | Określa kolor tła etykiety tekstowej. |

## Preferencje środowisk pracy

Preferencje dla wbudowanych środowisk pracy są wymienione poniżej. Odnośniki te są również wymienione w [Category:Preferences](/Category:Preferences "Category:Preferences"). Niektóre środowiska pracy nie mają ustawień.

* [konfiguracja środowiska Złożenie](/Assembly_Preferences/pl "Assembly Preferences/pl").
* [BIM: Ustawienia](/BIM_Preferences/pl "BIM Preferences/pl").
* [CAM: Ustawienia](/CAM_Preferences/pl "CAM Preferences/pl").
* [Rysunek Roboczy: Ustawienia](/Draft_Preferences/pl "Draft Preferences/pl").
* [MES: Ustawienia](/FEM_Preferences/pl "FEM Preferences/pl").
* Preferencje środowiska Inspekcja *(brak)*.
* [Materiał: Ustawienia](/Material_Preferences/pl "Material Preferences/pl").
* [Siatka: Ustawienia](/Mesh_Workbench/pl#Ustawienia "Mesh Workbench/pl").
* [OpenSCAD: Ustawienia](/OpenSCAD_Preferences/pl "OpenSCAD Preferences/pl").

.

* Preferencje środowiska Część: Środowisko pracy Część używa również ustawień środowiska [Projekt Części](/PartDesign_Preferences/pl "PartDesign Preferences/pl").
* [Projekt Części: Ustawienia](/PartDesign_Preferences/pl "PartDesign Preferences/pl")
* Preferencje środowiska Punkty *(brak)*.
* Preferencje środowiska Inżynierii wstecznej *(brak)*.
* Preferencje środowiska Robot *(brak)*.
* [Szkicownik: Ustawienia](/Sketcher_Preferences/pl "Sketcher Preferences/pl")
* [Arkusz Kalkulacyjny: Ustawienia](/Spreadsheet_Preferences/pl "Spreadsheet Preferences/pl")
* Preferencje środowiska Powierzchnia *(brak)*.
* [Rysunek Techniczny: Ustawienia](/TechDraw_Preferences/pl "TechDraw Preferences/pl")
* Preferencje środowiska Test Framework *(brak)*.

## Tworzenie skryptów

Zapoznaj się z informacjami na stronie [Edytor parametrów](/Std_DlgParameter/pl#Tworzenie_skryptów "Std DlgParameter/pl").

## Powiązane

* [Edytor parametrów](/Std_DlgParameter/pl "Std DlgParameter/pl")
* [Dostrajanie parametrów](/Fine-tuning/pl "Fine-tuning/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=Preferences_Editor/pl&oldid=1542582>"