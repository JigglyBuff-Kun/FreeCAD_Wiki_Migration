---
title: Std Pomiary
---
|  |
| --- |
| Std: Pomiary |
| Lokalizacja w menu |
| Przybory → Pomiary |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 1.0 |
| Zobacz także |
| [Wymiarowanie](/Draft_Dimension/pl "Draft Dimension/pl") |
|  |

## Opis

Polecenie **Pomiary** daje dostęp do ujednoliconej funkcjonalności pomiarowej. Zastąpiło ono kilka dotychczasowych narzędzi tego typu, zapewniając wielofunkcyjne narzędzie pomiarowe.

## Użycie

1. Opcjonalnie, wskaż obiekty geometryczne do użycia w pomiarze.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Wciśnij przycisk ![](/images/Std_Measure.svg) Pomiary.
   * Wybierz opcję **Przybory → ![](/images/Std_Measure.svg) Pomiary** z menu.
3. Otwarty zostanie panel zadań **Measurement**. Zobacz [Opcje](#Options/pl) aby uzyskać więcej informacji.
4. Jeśli nie zostały wcześniej wskazane żadne obiekty geometryczne, wykonaj jedną z poniższych czynności:
   * Wskaż obiekty geometryczne zostawiając *Tryb* jako *Auto*, aby tryb został automatycznie określony na podstawie wskazania.
   * Wybierz *Tryb* inny niż *Auto* a następnie wskaż obiekty geometryczne (ponowne kliknięcie pozwala je odznaczyć):
     + *Distance* - najkrótsza odległość między wskazanymi obiektami, jeśli wskazane są okrągłe krawędzie to mierzona jest odległość między środkami okręgów,
     + *Distance Free* - odległość między dwoma punktami wskazanymi poprzez kliknięcia w dowolnych miejscach (ale należącymi do różnych obiektów geometrycznych - krawędzi, ścian),
     + *Angle* - kąt między wskazanymi obiektami,
     + *Length* - długość wskazanej krawędzi,
     + *Position* - współrzędne wskazanego wierzchołka,
     + *Area* - pole powierzchni wskazanej ściany,
     + *Radius* - promień wskazanej okrągłej krawędzi,
     + *Center of Mass* - środek masy wskazanej krawędzi, ściany lub bryły (tylko jeśli została wcześniej zaznaczona w drzewie).
5. Wynik pomiaru zostanie wyświetlony w polu *Wynik* i na etykiecie w [widoku 3D](/3D_view/pl "3D view/pl"). Ta etykieta będzie również zawierała ikonę wskazującą typ pomiaru. Etykiety można dostosować w [Preferencjach](/Preferences_Editor/pl "Preferences Editor/pl"). Mogą zostać przesunięte w widoku 3D poprzez przeciągnięcie ich kursorem myszy.
6. Wciśnij przycisk Zresetuj aby usunąć wymiar lub Zapisz aby go zachować. Zapisane wymiary są umieszczane w [grupie](/Std_Group/pl "Std Group/pl") Measurements w [widoku drzewa](/Tree_view/pl "Tree view/pl").
7. Wciśnij przycisk Esc lub Zamknij aby zakończyć polecenie.

## Opcje

* [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl") Wciśnij przycisk ![](/images/Preferences-system.svg) ![](/images/Toolbar_flyout_arrow.svg) aby zmienić ustawienia:
  + *Auto Save* - jeśli zaznaczone, ostatni pomiar jest zapisywany przy rozpoczynaniu nowego pomiaru (przytrzymanie klawisza Shift może tymczasowo wyłączyć to zachowanie),
  + *Additive Selection* - jeśli zaznaczone, klikanie na kolejnych obiektach geometrycznych dodaje je jako wskazania dla tego samego pomiaru, w innym wypadku trzeba używać klawisza Ctrl żeby to osiągnąć.
* Dla trybów *Distance* i *Distance Free* wyświetlane jest pole **Show Delta**. Jeśli jest ono zaznaczone, właściwość WIDOK**Show Delta** pomiaru jest ustawiona na `PRAWDA` i 3 dodatkowe rzutowane wymiary są wyświetlane w [widoku 3D](/3D_view/pl "3D view/pl").

## Właściwości

### Dane

Pomiar

* DANE**Element1** (`LinkSub`): Pierwszy element pomiaru.
* DANE**Element2** (`LinkSub`): Drugi element pomiaru.
* DANE**Distance** (`Distance`): Odległość między dwoma elementami.
* DANE**Distance X** (`Distance`): Odległość w kierunku X (tylko dla pomiarów w trybie *Distance* i *Distance Free*).
* DANE**Distance Y** (`Distance`): Odległość w kierunku Y (j.w.).
* DANE**Distance Z** (`Distance`): Odległość w kierunku Z (j.w.).
* DANE (Hidden)**Position1** (`Vector`): Położenie pierwszego mierzonego punktu (tylko do odczytu).
* DANE (Hidden)**Position2** (`Vector`): Położenie drugiego mierzonego punktu (tylko do odczytu).

### Widok

Wygląd

* WIDOK**Font Size** (`Integer`): Definiuje rozmiar czcionki dla etykiety zapisanego wymiaru.
* WIDOK**Line Color** (`Color`): Definiuje kolor linii wymiaru wyświetlanych w widoku 3D.
* WIDOK**Show Delta** (`Bool`): Jeśli `PRAWDA`, zrzutowane wymiary długości są wyświetlane w widoku 3D (tylko dla trybów *Distance* i *Distance Free*).
* WIDOK**Text Background Color** (`Color`): Definiuje kolor tła etykiety wymiaru.
* WIDOK**Text Color** (`Color`): Definiuje kolor tekstu i symbolu w etykiecie wymiaru.

## Uwagi

* To polecenie jest wynikiem [projektu GSoC 2023](/Unified_Measurement_Facility "Unified Measurement Facility").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Measure/pl&oldid=1530107>"