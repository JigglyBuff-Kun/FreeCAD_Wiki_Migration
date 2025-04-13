---
title: CAM Wiercenie
---
|  |
| --- |
| CAM: Wiercenie |
| Lokalizacja w menu |
| CAM → Wiercenie |
| Środowisko pracy |
| [CAM](/CAM_Workbench/pl "CAM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/CAM_Drilling.svg) Wiercenie generuje Operację wiercenia w Zadaniu.

![](/images/Path_Drilling_Sample.png)

Powyżej: Przykład operacji wiercenia

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/CAM_Drilling.svg) Wiercenie.
   * Wybierz opcję **CAM → ![](/images/CAM_Drilling.svg) Wiercenie** z menu.
2. W sekcji **Operacja**:
   * Wybierz **Kontroler narzędzi**.
   * Wybierz **Tryb chłodzenia**.
   * Opcjonalnie włącz i dostosuj następujące ustawienia:
     + **Zagłębienie** ustaw **Głębokość**.
     + **Postój** ustaw **Czas** w sekundach.
     + **Pogłębienie**.
3. W sekcji **Geometria podstawowa** upewnij się, że lista odpowiada otworom przeznaczonym do obróbki, i w razie potrzeby dodaj, włącz lub wyłącz otwory. Otwory można dodać, wybierając powierzchnie ścian otworów.
4. W sekcji **Głębokość** sprawdź i, jeśli to konieczne, dostosuj **Głębokość początkową** i **Głębokość końcową**.
5. W sekcji **Wysokości** sprawdź i, jeśli to konieczne, dostosuj **Wysokość bezpieczną** i **Odstęp bezpieczeństwa**.
6. Naciśnij przycisk OK, aby wygenerować ścieżkę wiercenia.

## Uwagi

* Podczas używania krawędzi jako Geometrii podstawowej, zawsze wybieraj dolną krawędź otworu.
* Zawsze sprawdzaj, czy wybrane narzędzie ma odpowiednią średnicę do wybranych otworów.
* **Zagłębienie wyłączone** generuje (cykle wiercenia G81). **Zagłębienie włączone** generuje (cykle wiercenia G83).
* **Postój włączony** jest obecnie nieobsługiwany, ale ma generować (cykle wiercenia G82).

## Właściwości

***Uwaga*** : Nie wszystkie z tych właściwości są dostępne w edytorze okna zadań. Niektóre są dostępne tylko na karcie Dane w panelu Widok właściwości dla tej operacji.

Podstawa

Uwaga: Zaleca się, aby nie edytować właściwości Umiejscowienie operacji ścieżki. W razie potrzeby należy raczej przesunąć lub obrócić model zadania CAM.

* DANE**Placement**: Ogólne umiejscowienie [pozycja i rotacja] obiektu względem początku układu współrzędnych (lub początku kontenera obiektu nadrzędnego)
  + DANE**Angle**: Kąt w stopniach zastosowany do obrotu obiektu wokół wartości właściwości Oś
  + DANE**Axis**: Oś (jedna lub wiele), wokół której obraca się obiekt, ustawiona w podwłaściwościach: X, Y, Z
    - DANE**X**: Wartość osi X
    - DANE**Y**: Wartość osi Y
    - DANE**Z**: Wartość osi Z
  + DANE**Position**: Pozycja obiektu, ustawiona w podwłaściwościach: X, Y, Z - względem początku układu współrzędnych (lub początku kontenera obiektu nadrzędnego)
    - DANE**X**: Wartość odległości X
    - DANE**Y**: Wartość odległości Y
    - DANE**Z**: Wartość odległości Z
* DANE**Label**: Nazwa obiektu nadana przez użytkownika (UTF-8)
* DANE**Disabled**: Lista wyłączonych funkcji

Głębokość

* DANE**Clearance Height**: Wysokość potrzebna do usunięcia zacisków i przeszkód
* DANE**Final Depth**: Ostateczna głębokość narzędzia - najniższa wartość w osi Z
* DANE**Safe Height**: Wysokość, powyżej której dozwolone są szybkie ruchy (szybka wysokość bezpieczeństwa między lokalizacjami)
* DANE**Start Depth**: Początkowa głębokość narzędzia - *pierwsza głębokość cięcia w osi Z*

Wiertło

* DANE**Add Tip Length**: Oblicz długość końcówki i odejmij od ostatecznej głębokości
* DANE**Dwell Enabled**: Włącz zatrzymanie
* DANE**Dwell Time**: Czas zatrzymania między cyklami skrawania
* DANE**Peck Depth**: Głębokość wiercenia przed cofnięciem w celu oczyszczenia wiórów
* DANE**Peck Enabled**: Włącz zagłębienie
* DANE**Retract Height**: Wysokość, na której zaczyna się posuw i wysokość cofania narzędzia po zakończeniu ścieżki
* DANE**Return Level**: Kontroluje sposób cofania narzędzia, Domyślnie=G98

Ścieżka

* DANE**Active**: Ustaw na False, aby zapobiec generowaniu kodu operacji
* DANE**Comment**: Opcjonalny komentarz do tej operacji
* DANE**User Label**: Etykieta przypisana przez użytkownika
* DANE**Tool Controller**: Definiuje kontroler narzędzia używanego w operacji

Obrót (*gdy dostępne*)

* DANE**Attempt Inverse Angle**: Automatycznie spróbuj odwrócić kąt, jeśli początkowy obrót jest niepoprawny.
* ~~DANE**B\_Axis Error Override**: Wizualnie dostosuj obroty B(y) do modelu (błąd renderowania we FreeCAD).~~
* DANE**Enable Rotation**: Włącz obroty, aby uzyskać dostęp do otworów nieprostopadłych do osi Z.
* DANE**Inverse Angle**: Odwróć kąt obrotu.  ***Przykład:** zmiana obrotu z -22,5 na 22,5 stopnia.*
* DANE**Reverse Direction**: Odwróć orientację operacji o 180 stopni.

## Układ edytora w oknie zadań

*Opisy ustawień znajdują się na powyższej liście właściwości*.

Ta sekcja jest po prostu mapą układu ustawień w edytorze okien dla operacji.

### Geometria podstawowa

* **Dodaj**: Dodaje wybrane elementy, które powinny być bazą dla ścieżek.
* **Usuń**: Usuwa wybrane elementy z listy Geometria podstawowa.
* **Wyczyść**: Czyści wszystkie elementy na liście Geometria podstawowa.

### Lokalizacja bazowa

* **Add**: Dodaj współrzędne (X,Y) do bieżącej operacji wiercenia.
* **Remove**: Usuń wybrane elementy z listy lokalizacji bazowej.
* **Edit**: Edytuj wybrany element lokalizacji.

### Głębokości

* **Start Depth**:
* **Final Depth**:

### Wysokości

* **Safe Height**:
* **Clearance Height**:

### Operacja

* **Tool Controller**:
* **Retract Height**:
* **Peck**:
* **Peck Depth**:
* **Dwell**:
* **Dwell Time**:
* **Use Tip Length**:

## Tworzenie skryptów

*Zobacz również:* [FreeCAD podstawy tworzenia skryptów](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Przykład:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Drilling/pl&oldid=1483465>"