---
title: Złożenie Utwórz symulację
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Złożenie: Utwórz symulację |
| Lokalizacja w menu |
| Złożenie → Utwórz symulację |
| Środowisko pracy |
| [Złożenie](/Assembly_Workbench/pl "Assembly Workbench/pl") |
| Domyślny skrót |
| S |
| Wprowadzono w wersji |
| 1.1 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Assembly_CreateSimulation.svg) Utwórz symulację tworzy symulację bieżącego złożenia.

## Użycie

1. Upewnij się, że złożenie jest aktywne.
2. Jest kilka sposobów na wywołanie tej komendy:
   * Wciśnij przycisk ![](/images/Assembly_CreateSimulation.svg) Utwórz symulację.
   * Wybierz opcję **Złożenie → ![](/images/Assembly_CreateSimulation.svg) Utwórz symulację** z menu.
   * Użyj skrótu klawiaturowego: S.
3. Jeśli nie ma jeszcze obiektu Simulations: kontener Simulations zostanie dodany do aktywnego złożenia.
4. Obiekt Simulation zostanie dodany do kontenera Simulations.
5. Otwarty zostanie [panel zadań](/Task_panel/pl "Task panel/pl") **Utwórz symulację**.
6. Dodaj obiekt Motion:
   * Wciśnij przycisk z zielonym plusem aby otworzyć okno dialogowe.
   * Wybierz jedno połączenie z listy.
   * Jeśli to konieczne, wybierz Typ Ruchu.
   * Opcjonalnie edytuj Równanie.
   * Wciśnij przycisk OK aby zamknąć okno dialogowe.
   * Nowy ruch zostanie dodany do listy.
   * Opcjonalnie potwórz aby utworzyć kolejny ruch.
7. Opcjonalnie dostosuj ustawienia Symulacji.
8. Wciśnij przycisk Generuj.
9. Sekcja **Odtwarzacz Animacji** zostanie dodana do panelu zadań.
   * Użyj widżetów odtwarzacza aby animować złożenie.
10. Wciśnij przycisk OK aby zakończyć działanie narzędzia i zamknąć panel zadań.

### Panel zadań

Gdy [panel zadań](/Task_panel/pl "Task panel/pl") **Utwórz symulację** jest otwarty pierwszy raz, lista **Motions** jest pusta a **Odtwarzacz Animacji** jest ukryty..

Dwukrotnie kliknij na istniejącym obiekcie Simulation w [Widoku drzewa](/Tree_view/pl "Tree view/pl") aby ponownie otworzyć panel zadań i edytować parametry.

![](/images/Assembly_CreateSimulation-Task.png)

* **Motions**: Lista zawartości właściwości **Group**, czyli obiektów Motion w kontenerze Simulations.
  + Przycisk ![](/images/List-add.svg): Otwiera okno dialogowe (bez nazwy) aby dodać obiekt Motion do właściwości **Group** i aktualizuje listę.
  + Pzycisk ![](/images/Edit-delete.svg): Usuwa obiekt Motion z właściwości **Group** i aktualizuje listę.
* **Simulation settings**: Ustawianie właściwości obiektu Simulation.
  + **Start**: Ustawia właściwość **a Time Start**.
  + **End**: Ustawia właściwość **b Time End**.
  + **Step**: Ustawia właściwość **c Time Step Output**.
  + **Tolerance**: Ustawia właściwość **f Global Error Tolerance**.
* Przycisk Generate: Oblicza ruchy z listy i dodaje sekcję **Odtwarzacz Animacji** do panelu zadań.
* **Odtwarzacz Animacji**: Kontroluje pozycje złożonych obiektów zgodnie z bieżącą klatką.
  + Suwak **Frame**: Ustawia bieżącą klatkę, nie ustawia żadnej właściwości.
  + **Frames Per Second**: Ustawia właściwość **j Frames Per Second**, czyli prędkość animacji.
  + Przyciski odtwarzacza: Kontrolują sposób zmiany bieżącej klatki, z lewej do prawej:

    :   Krok wstecz, Odtwórz wstecz, Stop, Odtwórz w przód, Krok w przód

### Okno dialogowe Motion

To okno dialogowe tworzy obiekt Motion, który działa jako napęd dla pojedynczego stopnia swobody danego połączenia i ustawia jego właściwości.

![](/images/Assembly_CreateSimulation-Motion.png)

Dodatkowy tekst z pomocą pojawia się jeśli przycisk Help jest wciśnięty.  
(Nie zwracaj uwagi na wygląd przycisku OK, jest aktywny i używalny)

* **Joint**: Wyświetla listę wszystkich połączeń w aktywnym Złożeniu aby ustawić właściwość **Joint**.
* **Motion Type**: Wyświetla listę dostępnych stopni swobody w wybranym połączeniu aby ustawić właściwość **Motion Type**.

  :   (Przykładowo, możemy wybierać między `Angular`, i `Linear` dla połączenia cylindrycznego)
* **Formula**: Ustawia właściwość **Formula**.
* Przyciski Help / Hide help: Przełączają widoczność tekstu pomocy dotyczącego równań.

## Uwagi

* Liczba klatek to różnica między wartościami **Start** i **Koniec** podzielona przez **Krok** (wszystkie wprowadzone w sekundach dając wartość bezwymiarową). Dla domyślnych wartości jest to: (1.0 s - 0.0 s) / 0.01 s = 100
* Aby uzyskać pełen obrót w ruchu kątowym możemy wykonać jedną z poniższych czynności:
  + Wprowadzić `2 * pi * time` w polu Równanie i ustawić czas trwania (Koniec - Start) o wartości 1 sekundy w ustawieniach symulacji w panelu zadań.
  + Wprowadzić `1 * time` w polu Równanie i ustawić czas trwania (Koniec - Start) o wartości (2 \* pi =) 6.283 sekund w ustawieniach symulacji w panelu zadań.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

### Symulacje

Kontener **Simulations** jest obiektem `Assembly::SimulationGroup`, który wywodzi się z obiektu [App DocumentObjectGroup](/App_DocumentObjectGroup/pl "App DocumentObjectGroup/pl") i dziedziczy wszystkie jego właściwości. Nie ma żadnych dodatkowych właściwości.

### Symulacja

Obiekt **Simulation** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

#### Dane

Podstawowe

* DANE**Group** (`LinkList`): Obiekty Ruchu obiektu.
* DANE (hidden)**\_ Group Touched** (`Bool`):

Symulacja

* DANE**a Czas początkowy** (`Czas`): Domyślnie `0,0 s`. Czas rozpoczęcia symulacji.
* DANE**b Czas końcowy** (`Czas`): Domyślnie `4,0 s`. Czas zakończenia symulacji.
* DANE**c Krok czasowy wyjściowy** (`Czas`): Domyślnie `0,01 s`. Krok czasowy symulacji dla wyjścia.
* DANE**f Globalna tolerancja błędu** (`Float`): Domyślnie `1e-06`. Globalna tolerancja błędu integracji.
* DANE**j Liczba klatek na sekundę** (`Integer`): Domyślnie `30`. Liczba klatek na sekundę.

### Widok

Space

* WIDOK**Decimals** (`Integer`): Domyślna wartość to `9`. Liczba miejsc dziesiętnych dla obliczanych tekstów.

### Ruch

Obiekt **Motion** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

#### Dane

Ruch

* DANE**Równanie** (`String`): Równanie ruchu. Na przykład `1.0*czas`.
* DANE**Połączenie** (`XLinkSubHidden`): Połączenie poruszane przez ruch.
* DANE**Typ Ruchu** (`Enumeration`): Typ ruchu. Opcje to: `Kątowy` i `Liniowy`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateSimulation/pl&oldid=1559736>"