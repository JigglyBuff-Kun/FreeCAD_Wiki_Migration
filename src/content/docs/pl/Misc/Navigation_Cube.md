---
title: Kostka nawigacyjna 3D
---

## Wprowadzenie

**Kostka nawigacyjna** daje wizualną informację o orientacji ujęcia widoku kamery w bieżącym [widoku 3D](/3D_view/pl "3D view/pl") i może być użyta do jej zmiany. Domyślnie jest ona widoczna i znajduje się w prawym górnym rogu okna.

![](/images/Navigation_Cube_Example.png)

Kostka nawigacyjna składa się z kilku części:

- [Główny sześcian nawigacyjny](#G.C5.82.C3.B3wny_sze.C5.9Bcian_nawigacyjny).
- [Strzałki kierunkowe](#Strza.C5.82ki_kierunkowe).
- [Przycisk widoku do tyłu](#Przycisk_widoku_do_ty.C5.82u) _(u góry po prawej)_ [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")
- [Menu mini-kostki](#Menu_mini-kostki) _(na dole po prawej)_.
- Wskaźniki osi X, Y i Z

Wszystkie elementy, z wyjątkiem wskaźników osi, można klikać.

## Użycie

### Główny sześcian nawigacyjny

Główny sześcian posiada 26 ścian: 6 ścian głównych, 12 prostokątnych ścian brzegowych ([dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")) i 8 ścian narożnych. Kliknięcie dowolnej z nich spowoduje zmianę ujęcia widoku kamery tak, aby jej kierunek był prostopadły do wybranej ściany.

### Strzałki kierunkowe

Istnieje sześć strzałek kierunkowych: cztery trójkątne groty, jedna na górze, na dole, w lewo i w prawo; oraz dwie zakrzywione strzałki. Kliknięcie jednej z trójkątnych strzałek spowoduje obrót [widoku 3D](/3D_view/pl "3D view/pl") wokół linii prostopadłej do kierunku strzałki. Kliknięcie zakrzywionej strzałki spowoduje obrót [widoku 3D](/3D_view/pl "3D view/pl") wokół kierunku widoku.

### Przycisk widoku do tyłu

Kliknięcie okrągłego przycisku w prawym górnym rogu kostki nawigacyjnej spowoduje obrócenie [widoku 3D](/3D_view/pl "3D view/pl") o 180° wokół pionowej osi widoku.

### Menu mini-kostki

Kliknięcie małego sześcianu w prawym dolnym rogu Kostki nawigacji spowoduje wyświetlenie menu z następującymi opcjami:

- ![](/images/Std_OrthographicCamera.svg) **[Ortogonalny](/Std_OrthographicCamera/pl "Std OrthographicCamera/pl")**: przełącza na widok ortogonalny.
- ![](/images/Std_PerspectiveCamera.svg) **[Perspektywa](/Std_PerspectiveCamera/pl "Std PerspectiveCamera/pl")**: przełącza na widok perspektywiczny.
- ![](/images/Std_ViewIsometric.svg) **[Isometryczny](/Std_ViewIsometric/pl "Std ViewIsometric/pl")**: przełącza na widok izometryczny.
- ![](/images/Std_ViewFitAll.svg) **[Przybliż i dopasuj](/Std_ViewFitAll/pl "Std ViewFitAll/pl")**: powiększa i pochyla ujęcie widoku tak, aby wszystkie widoczne obiekty zmieściły się w aktualnym kadrze.

* **![](/images/Std_ViewFitSelection.svg) [Dopasuj do wyboru](/Std_ViewFitSelection/pl "Std ViewFitSelection/pl")**: przybliża i przesuwa kamerę tak, zby wszystkie wskazane obiekty mieściły się w widoku. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* **![](/images/Std_AlignToSelection.svg) [Wyrównaj do zaznaczenia](/Std_AlignToSelection/pl "Std AlignToSelection/pl")**: ustawia kamerę w widoku przeciwnym kierunku do kierunku normalnego płaskiej ściany lub w przeciwnym kierunku do prostej krawędzi. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* **Ruchoma kostka nawigacyjna**: jeśli to pole wyboru ([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")) jest zaznaczone, cała kostka nawigacji może zostać przesunięta poprzez przytrzymanie lewego przycisku myszy w dowolnym miejscu na głównej kostce i przeciągnięcie. Ma to na celu tymczasowe przesunięcie kostki z drogi. [Parametry zaawansowane](#Parametry_zaawansowane) OffsetX i OffsetY mogą być użyte do trwałej zmiany położenia kostki, patrz poniżej.

## Dostosowywanie

### Ustawienia

Sześcian nawigacyjny jest konfigurowalny, włącznie z dostosowaniem jego rozmiaru: **Edycja → Preferencje → Wyświetlanie → Nawigacja → Kostka nawigacyjna**. Zobacz [Edytor preferencji](/Preferences_Editor/pl#Nawigacja "Preferences Editor/pl").

### Parametry zaawansowane

Niektóre zaawansowane parametry kostki nawigacyjnej nie mogą być zmienione w [Edytorze ustawień](/Preferences_Editor/pl#Nawigacja "Preferences Editor/pl"). Parametry te można ustawić ręcznie w [Edytorze parametrów](/Std_DlgParameter/pl "Std DlgParameter/pl").

Aby samodzielnie ustawić kolory:

1. Uruchom ![](/images/Std_DlgParameter.svg) [Edytor parametrów](/Std_DlgParameter/pl "Std DlgParameter/pl").
2. W panelu po lewej stronie przejrzyj **BaseApp → Preferences → NaviCube**.
3. Kliknij prawym przyciskiem myszy na panelu po prawej stronie i wybierz z menu kontekstowego **Nowy element z liczbą całkowitą**.
4. Wpisz nazwę jednego z tych kolorów:
   - **BaseColor**: kolor bazowy wszystkich elementów, domyślnie jest to `3806916544`. (hex: `e2e8efc0`). Kolor ten można również ustawić w [Edytorze parametrów](/Preferences_Editor#Navigation "Preferences Editor"). [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
   - **EmphaseColor**: kolor tekstów i linii, domyślny zależy od **BaseColor**. Jest to albo czarny: `255` (hex: `000000ff`), lub biały: `4294967295` (hex: `ffffff`). [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
   - **HiliteColor**: kolor używany do podświetlania ścian i przycisków, domyślnie `2867003391`. (hex: `aae2ffff`).
5. Wartość koloru musi być wprowadzona jako 32-bitowa liczba całkowita bez znaku. W postaci szesnastkowej ta liczba całkowita ma postać `RRGGBBAA`. Gdzie `AA` oznacza kanał alfa (miarę przezroczystości), a pozostałe trzy pary cyfr oznaczają kolor czerwony, zielony i niebieski. Aby przekonwertować wartość szesnastkową na liczbę całkowitą bez znaku, można użyć [konsoli Python](/Python_console/pl "Python console/pl"), wpisując na przykład `int("323232ff", 16)`.
6. Opcjonalnie ustaw więcej parametrów.
7. Naciśnij przycisk Zamknij.

Poniższa tabela zawiera listę innych zaawansowanych parametrów Kostki nawigacyjnej, które można ustawić w podobny sposób. Użyj informacji z kolumny **Typ**, aby utworzyć prawidłowy nowy element w kroku 3.

| Nazwa                  | Opis                                                                                                                                                                                                                                                                                                                                                                                                                                  | Typ                       | Wartość domyślna |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ---------------- |
| Szerokość ramki        | Szerokość krawędzi sześcianu i obramowania wokół przycisków w pikselach.                                                                                                                                                                                                                                                                                                                                                              | Liczba zmiennoprzecinkowa | 1.1              |
| Rozmiar fazowania      | Rozmiar krawędzi i narożników jako współczynnik rozmiaru sześcianu. Wartości powinny mieścić się w zakresie 0,05 - 0,18. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")                                                                                                                                                                                                                                     | Liczba zmiennoprzecinkowa | 0.12             |
| Rozciągnięcie czcionki | Szerokość czcionki jako procent domyślnej szerokości. Użyj 0 lub 100 dla domyślnej szerokości czcionki.                                                                                                                                                                                                                                                                                                                               | Liczba całkowita          | 0                |
| Grubość czcionki       | Grubość czcionki. Wyższe wartości sprawiają, że czcionka jest bardziej pogrubiona. Efekt może zależeć od czcionki. Domyślna grubość czcionki to 0.                                                                                                                                                                                                                                                                                    | Liczba całkowita          | 0                |
| Powiększenie czcionki  | Rozmiar etykiet: _ `FontZoom = 1.0`: Spraw, aby etykiety były jak największe indywidualnie. _ `0.0 < FontZoom < 1.0`: Podobnie, ale ogranicz maksymalny rozmiar czcionki. _ `FontZoom = 0.0`: Tak samo, ale użyj tego samego rozmiaru czcionki dla wszystkich. _ `FontZoom < 0.0`: Użyj tego samego rozmiaru czcionki dla wszystkich, ale w mniejszej skali. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl") | Liczba zmiennoprzecinkowa | 0.3              |
| OffsetX                | Przesunięcie sześcianu w kierunku X względem położenia narożnika w pikselach.                                                                                                                                                                                                                                                                                                                                                         | Liczba całkowita          | 0                |
| OffsetY                | Przesunięcie sześcianu w kierunku Y względem położenia narożnika w pikselach.                                                                                                                                                                                                                                                                                                                                                         | Liczba całkowita          | 0                |
| ShowCS                 | Włącza wyświetlanie układu współrzędnych _(wskaźniki osi X, Y i Z)_.                                                                                                                                                                                                                                                                                                                                                                  | Wartość logiczna          | `true`           |
| Tekst na dole          | Tekst na dolnej ścianie kostki. Wartość domyślna powinna zostać przetłumaczona.                                                                                                                                                                                                                                                                                                                                                       | Ciąg znaków               | BOTTOM           |
| Tekst z przodu         | Tekst na przedniej ścianie kostki. Analogicznie.                                                                                                                                                                                                                                                                                                                                                                                      | Ciąg znaków               | FRONT            |
| Tekst po lewej         | Tekst na lewej ścianie kostki. Analogicznie.                                                                                                                                                                                                                                                                                                                                                                                          | Ciąg znaków               | LEFT             |
| Tekst z tyłu           | Tekst na tylnej ścianie kostki. Analogicznie.                                                                                                                                                                                                                                                                                                                                                                                         | Ciąg znaków               | REAR             |
| Tekst po prawej        | Tekst na prawej ścianie kostki. Analogicznie.                                                                                                                                                                                                                                                                                                                                                                                         | Ciąg znaków               | RIGHT            |
| Tekst na górze         | Tekst na górnej ścianie kostki. Analogicznie.                                                                                                                                                                                                                                                                                                                                                                                         | Ciąg znaków               | TOP              |

Retrieved from "<http://wiki.freecad.org/index.php?title=Navigation_Cube/pl&oldid=1493139>"
