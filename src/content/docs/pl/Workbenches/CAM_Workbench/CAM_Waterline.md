---
title: CAM Linia poziomu
---
:::caution
Jest to nieukończona funkcja eksperymentalna.Włącz funkcje eksperymentalne
:::
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| CAM: Linia poziomu |
| Lokalizacja w menu |
| CAM → Linia poziomu |
| Środowisko pracy |
| [CAM](/CAM_Workbench/pl "CAM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Path_Waterline.svg) **Linia poziomu** tworzy nową operację Linii poziomu. Od wersji 0.19\_pre operacja działa na całym modelu, generując G-code dla zadania. Obecnie w ustawieniach operacji nie ma funkcji wyboru określonych obszarów, powierzchni lub regionów modelu.

Operacja Linii poziomu ma dwa algorytmy: OCL Drop Cutter i Experimental.

* Algorytm OCL Drop Cutter łączy się z OCL.pyd, zewnętrznym modułem Open Source o nazwie [OpenCamLib](/OpenCamLib/pl "OpenCamLib/pl"), który generuje ścieżki narzędzia z modelu 3D. OpenCamLib nie jest zintegrowany bezpośrednio z FreeCAD.
* Eksperymentalny algorytm wykorzystuje wbudowaną klasę Path.Area().

***Uwaga*** : Aby skorzystać z operacji Linia poziomu powinieneś:

1. Prawidłowo zainstalować [OpenCamLib](/OpenCamLib/pl "OpenCamLib/pl").
2. Włączyć [funkcje eksperymentalne](/CAM_experimental/pl "CAM experimental/pl") dla środowiska pracy CAM.
3. Sprawdzić nastawy **Edycja → Preferencje ... → CAM → Zaawansowane → Włącz funkcje zależne od OpenCamLib**.

## Użycie

Poniżej przedstawiono instrukcje użytkowania dla wielu wariantów operacji **Linii poziomu**.

#### Operacje podstawowe

1. Naciśnij ![](/images/CAM_Waterline.svg) Linia poziomu lub wybierz narzędzie **Linia poziomu** z menu **CAM**.
2. Wybierz kontroler narzędzia dla operacji z okna dialogowego Kontroler narzędzia.
3. Dostosuj głębokość operacji zgodnie z potrzebami w zakładce Głębokość: Głębokość początkowa, Głębokość końcowa, Krok w dół.
4. W razie potrzeby dostosuj ustawienia w zakładce Wysokość.
5. Skonfiguruj ustawienia w zakładce Operacje w oparciu o wybrany algorytm:
   1. OCL Dropcutter
      1. Wybierz pole Ramka otaczająca: Przygotówka lub Punkt bazowy obiektu Ramki otaczającej.
      2. Ustaw tryb warstwy: Pojedyncze przejście lub Wielokrotne przejście.
      3. Ustaw interwał próbkowania używany do skanowania OCL.
   2. Eksperymentalne
      1. Wybierz Ramka otaczająca: Przygotówka lub Punkt bazowy obiektu Ramki otaczającej.
      2. Ustaw tryb warstwy: Pojedyncze przejście lub Wielokrotne przejście.
      3. Ustaw wzorzec cięcia, jeśli chcesz wyczyścić każdą warstwę.
      4. Ustaw dostosowanie granic *(naddatek materiału)*.
6. Jeśli chcesz wyświetlić podgląd wyniku przed zaakceptowaniem ustawień, kliknij przycisk Zastosuj.
7. Kliknij przycisk *OK*, aby potwierdzić i wygenerować ścieżki.

Aby uzyskać inne lub bardziej złożone efekty, należy dostosować dodatkowe właściwości operacji na karcie Dane w widoku Właściwości operacji.

##### Uwagi o algorytmie eksperymentalnym

* Nie obsługuje prawidłowo nawisów.
* Zwraca ścieżki tylko dla frezów typu End Mill *(bit narzędziowy)*.
* Może nie wychwytywać poprawnie wszystkich elementów wewnętrznych.
* Jest po prostu eksperymentalna i nie jest gotowa na integrację z głównym nurtem. Prosimy o sprawdzanie ścieżek za pomocą wbudowanego narzędzia ![](/images/CAM_Simulator.svg) [Symulator CAM](/CAM_Simulator/pl "CAM Simulator/pl") lub innych narzędzi do kontroli G-Code innych firm, przed rozpoczęciem procesu obróbki.

#### Dostępne kształty narzędzi (frezów)

W przypadku korzystania z algorytmu "OCL Dropcutter", operacja Waterline wykorzystuje OpenCamLib [OCL/pl|OCL] do wyodrębniania ścieżek z podstawy części. W związku z tym wymagana jest translacja narzędzia między kontrolerem narzędzi FreeCAD a OCL w celu zakończenia skanowania wybranym kształtem narzędzia *(frezu)*. Te kształty narzędzi są *(powinny być)* respektowane i dostępne dla OCL Dropcutter, o ile używane są wbudowane kształty narzędzi, zarówno narzędzia starszego typu, jak i narzędzia typu ToolBit:

* Frez trzpieniowy
* Frez kulowy
* frez walcowo-czołowy
* Końcówka fazująca
* Grawer

#### Uwagi dodatkowe

* Jeśli zdecydujesz się uruchomić symulator ![](/images/CAM_Simulator.svg) [CAM symulator](/CAM_Simulator/pl "CAM Simulator/pl"), w środowisku pracy CAM możesz nie zobaczyć usuwania materiału specyficznego dla kształtu narzędzia. Zachowaj ostrożność. Zaleca się wykonanie małego zadania próbnego przy użyciu pianki lub innego bardzo niegęstego materiału w celu sprawdzenia poprawności ścieżek z wybranym kontrolerem narzędzia.
* Od maja 2020 r. tylko frez walcowo-czołowy jest testowany w celu określenia dokładności translacji ustawień narzędzia z FreeCAD doOCL. Prosimy o przesyłanie wszelkich opinii dotyczących użycia frezów innych niż frezy walcowo-czołowe do sekcji [Path/CAM](https://forum.freecadweb.org/viewforum.php?f=15) na forum FreeCAD.

## Właściwości

***Uwaga*** : Nie wszystkie z tych właściwości są dostępne w edytorze okna zadań. Niektóre są dostępne tylko na karcie Dane w panelu Widok właściwości dla tej operacji.

Podstawa

Uwaga: Zaleca się, aby nie edytować właściwości Umiejscowienie operacji ścieżki. W razie potrzeby należy raczej przesunąć lub obrócić model zadania CAM.

* DANE**Umiejscowienie**: Ogólne położenie *(pozycja i obrót)* obiektu - w odniesieniu do punktu odniesienie położenia *(lub punktu odniesienie położenia kontenera obiektu nadrzędnego)*.
  + DANE**Kąt**: Kąt w stopniach zastosowany do obrotu obiektu wokół wartości właściwości Oś.
  + DANE**Oś**: Oś *(jedna lub wiele)*, wokół której ma zostać obrócony obiekt, ustawiona we właściwościach podrzędnych: X, Y, Z
    - DANE**X**: Wartość osi X.
    - DANE**Y**: Wartość osi Y.
    - DANE**Z**: Wartość osi Z.
  + DANE**Pozycja**: Pozycja obiektu, ustawiona we właściwościach podrzędnych: X, Y, Z - względem początku *(lub początku kontenera obiektu nadrzędnego)*.
    - DANE**X**: Wartość odległości X.
    - DANE**Y**: wartość odległości Y.
    - DANE**Z**: wartość odległości Z.
* DANE**Etykieta**: Nazwa obiektu podana przez użytkownika *(UTF-8)*.

Opcje czyszczenia

* DANE**Algorytm**: Biblioteka używana do generowania ścieżki.
* DANE**Ramka otaczająca**: Czy operacja powinna być ograniczona przez obiekt podstawowy, czy przez obwiednię obiektu podstawowego?
* DANE**Wyczyść ostatnią warstwę**: Ustawia czyszczenie ostatniej warstwy w operacji wieloprzebiegowej.
* DANE**Tryb obróbki**: Kierunek, w którym ścieżka narzędzia powinna przebiegać wokół części: Wspinanie *(zgodnie z ruchem wskazówek zegara)* lub Konwencjonalny *(przeciwnie do ruchu wskazówek zegara)*.
* DANE**Wzorzec obróbki**: Wzorzec czyszczenia do użycia.
* DANE**Odsunięcie głębokości**:
* DANE**Ignoruj zewnętrzne powyżej**:
* DANE**Tryb warstwy**: Tryb zakończenia operacji: jedno- lub wieloprzebiegowy.
* DANE**Krok powyżej**:

Głębokość

* DANE**Wysokość prześwitu**: Wysokość potrzebna do usunięcia zacisków i przeszkód.
* DANE**Głębokość końcowa**: Głębokość końcowa narzędzia - najniższa wartość w Z.
* DANE**Wysokość bezpieczna**: Wysokość, powyżej której dozwolone są szybkie ruchy.
* DANE**Głębokość początkowa**: Głębokość początkowa narzędzia - pierwsza głębokość cięcia w Z.
* DANE**Krok w dół**: Przyrostowy krok w dół narzędzia.

Ścieżka

* DANE**Aktywny**: Ustaw wartość `Fałsz`, aby zapobiec generowaniu kodu przez operację.
* DANE**Baza**: Geometria bazowa dla tej operacji.
* DANE**Komentarz**: Opcjonalny komentarz dla tej operacji.
* DANE**Tryb chłodzenia**:
* DANE**Czas cyklu**:
* DANE**Kontroler narzędzi**: Określa kontroler narzędzia używany w operacji.
* DANE**Etykieta użytkownika**: Etykieta przypisana przez użytkownika.

Punkt początkowy

* DANE**Punkt początkowy**: Niestandardowy punkt początkowy dla ścieżki tej operacji.
  + DANE**X**: wartość odległości X.
  + DANE**Y**: wartość odległości Y.
  + DANE**Z**: wartość odległości Z.
* DANE**Użyj punktu początkowego**: Ustaw wartość `Prawda`, jeśli określono punkt początkowy.

## Układ edytora w oknie zadań

*Opisy ustawień znajdują się na powyższej liście właściwości*.

Ta sekcja jest po prostu mapą układu ustawień w edytorze okien dla operacji.

### Lokalizacja bazowa

* **Dodaj**: Dodaje wybrane elementy, które powinny być bazą dla ścieżek.
* **Usuń**: Usuwa wybrane elementy z listy Lokalizacja bazowa.
* **Edytuj**: Czyści wszystkie elementy na liście Lokalizacja bazowa.

### Głębokości

* DANE**Głębokość początkowa**
* DANE**Głębokość końcowa**
* DANE**Krok w dół**

### Wysokości

* DANE**Wysokość bezpieczna**
* DANE**Wysokość prześwitu**

### Operacja

* DANE**Kontroler narzędzi**.
* DANE**Tryb chłodzenia**
* DANE**Algorytm**
* DANE**Ramka otaczająca**
* DANE**Tryb warstwy**
* DANE**Wzór obróbki**~.
* DANE**Regulacja granic**~.
* DANE**Odstęp między próbkami**~.

~Widoczność zmienia się wraz z innymi ustawieniami.

## Zasoby

* Symulator G-Code *(ścieżka)*: [NCViewer](https://ncviewer.com/)
* Symulator G-code *(ścieżka)*: [CAMotics](https://www.camotics.org/)

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Waterline/pl&oldid=1391764>"