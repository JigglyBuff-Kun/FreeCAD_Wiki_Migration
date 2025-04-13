---
title: Projekt Części Sfazowanie
---
|  |
| --- |
| Projekt Części: Sfazowanie |
| Lokalizacja w menu |
| Projekt Części → Zastosuj funkcję ulepszenia → Sfazowanie |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Zaokrąglenie](/PartDesign_Fillet/pl "PartDesign Fillet/pl") |
|  |

## Opis

Narzędzie ![](/images/PartDesign_Chamfer.svg) **Sfazowanie** tworzy fazki na wybranych krawędziach obiektu. Dodaje ono obiekt **Sfazowanie** do dokumentu z odpowiadającą mu reprezentacją w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl").

## Użycie

### Dodanie fazki

1. Opcjonalnie [zaznacz](/PartDesign_Body/pl#Aktywny_status "PartDesign Body/pl") bryłę do fazowania.
2. Istnieje kilka sposobów wyboru krawędzi do fazowania:
   * Wybierz jedną lub więcej krawędzi bryły indywidualnie.
   * Wybierz jedną lub więcej ścian bryły, aby wybrać wszystkie ich krawędzie.
   * Wybierz element *(zwykle ostatni)* bryły, aby wybrać wszystkie jej krawędzie.
3. W przypadku łańcucha stycznie połączonych krawędzi należy wybrać tylko jedną krawędź, a fazowanie będzie propagowane wzdłuż łańcucha.
4. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/PartDesign_Chamfer.svg) Sfazowanie.
   * Wybierz z menu opcję **Projekt Części → Zastosuj funkcję ulepszenia → ![](/images/PartDesign_Chamfer.svg) Sfazowanie**.
5. Jeśli nie ma aktywnej Zawartości, a w dokumencie znajdują się dwie lub więcej, otworzy się okno dialogowe **Wymagana jest aktywna zawartość** z monitem o aktywację jednej z nich. Jeśli w dokumencie znajduje się tylko jedna Zawartość, zostanie ona aktywowana automatycznie.
6. Otworzy się [Panel zadań](/Task_panel/pl "Task panel/pl") **Parametry sfazowania**. Więcej informacji można znaleźć w akapicie [Opcje](#Opcje).
7. Naciśnij przycisk OK, aby zakończyć.

### Edycja sfazowania

1. Wykonaj jedną z poniższych czynności:
   * Kliknij dwukrotnie obiekt Sfazowania w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl").
   * Kliknij obiekt Sfazowania prawym przyciskiem myszy w oknie [Widok drzewa](/Tree_view/pl "Tree view/pl") i wybierz **Edycja funkcji sfazowania** z menu kontekstowego.
2. Otworzy się panel [Panel zadań](/Task_panel/pl "Task panel/pl") **Parametry sfazowania**. Więcej informacji można znaleźć w punkcie [Opcje](#Opcje).
3. Naciśnij przycisk OK, aby zakończyć.

## Opcje

* Aby dodać krawędzie, wykonaj jedną z poniższych czynności:
  + Naciśnij przycisk Dodaj, aby rozpocząć zaznaczanie krawędzi i / lub ścian w oknie [Widoku 3D](/3D_view/pl "3D view/pl").
  + Aby zaznaczyć wszystkie pozostałe krawędzie, wykonaj następujące czynności:
    1. W razie potrzeby naciśnij przycisk Dodaj.
    2. Użyj skrótu klawiaturowego Ctrl + Shift + A lub kliknij listę prawym przyciskiem myszy i wybierz **Dodaj wszystkie krawędzie** z menu podręcznego.
* Aby usunąć krawędzie, wykonaj jedną z następujących czynności:
  + Naciśnij przycisk Usuń, aby rozpocząć odznaczanie krawędzi i / lub ścian w oknie [Widoku 3D](/3D_view/pl "3D view/pl"). Wybrane elementy są podświetlone na fioletowo.
  + Zaznacz jeden lub więcej elementów na liście i naciśnij klawisz Del lub kliknij listę prawym przyciskiem myszki i wybierz **Usuń** z menu podręcznego.
* Określ **Typ** fazowania:
  + **Wymiary równe**: Jedna odległość jest używana do umieszczenia obu krawędzi fazowania.
  + **Dwa wymiary**: Do umieszczenia krawędzi fazowania używane są dwie odległości.
  + **Wymiar i kąt**: Do umieszczenia jednej krawędzi fazowania używana jest odległość, a umieszczenie drugiej krawędzi fazowania jest definiowane przez kąt sfazowania.
* Naciśnij przycisk ![](/images/PartDesign_Flip_Direction.svg) Odwróć kierunek, aby odwrócić kierunek fazowania *(nieaktywne dla **Wymiary równe**)*.
* Ustaw **Rozmiar** fazowania.
* Ustaw **Rozmiar 2** fazowania *(dostępne tylko po wybraniu opcji **Dwa wymiary**)*.
* Ustaw **Kąt** fazowania *(dostępne tylko po wybraniu opcji **Wymiar i kąt**)*.
* Wyznacz **Promień** zaokrąglenia.
* Zaznacz pole wyboru **Użyj wszystkich krawędzi**, aby wybrać wszystkie krawędzie poprzedniego elementu. Spowoduje to dezaktywację listy wyboru i powiązanych przycisków.

## Uwagi

* Sfazowanie środowiska pracy Projekt Części nie należy mylić z [Sfazowanie](/Part_Fillet/pl "Part Fillet/pl") środowiska Część. Jeśli nie wiesz, co robisz [Część: Sfazowanie](/Part_Chamfer/pl "Part Chamfer/pl") nie powinno być używane na Zawartości środowiska Projekt Części. Zobacz stronę [Część i Projekt Części](/Part_and_PartDesign/pl "Part and PartDesign/pl").
* Sfazowania nie mogą całkowicie wchłonąć sąsiednich ścian.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Sfazowanie środowiska Projekt Części wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Podstawowe

* DANE**Baza** (`LinkSub`): Powiązanie z wybranymi krawędziami i ścianami elementu nadrzędnego. Może być linkiem tylko do elementu nadrzędnego, jeśli parametr DANE**Użyj wszystkich krawędzi** ma wartość `PRAWDA`.
* DANE**Wsparcie przekształcenia** (`Bool`): Jeśli wartość jest ustawiona na `PRAWDA` zostanie użyty sfazowany kształt addytywnego / subtraktywnego elementu nadrzędnego, gdy sfazowany obiekt zostanie włączony do [szyku](/PartDesign_Workbench/pl#Narzędzia_do_przekształcania "PartDesign Workbench/pl"), w przeciwnym razie zostanie użyty tylko kształt samej fazy. Domyślną wartością jest `FAŁSZ`.
* DANE (ukryty)**Dodaj kształt podrzędny** (`PartShape`).
* DANE (ukryty)**Cecha podstawowa** (`Link`): Odnośnik do elementu nadrzędnego.
* DANE (ukryty)**\_ Body** (`LinkHidden`): Link do elementu nadrzędnego.

Sfazowanie

* DANE**Typ sfazowania** (`Enumeration`): Typ fazowania: `Wymiary równe` *(domyślnie)*, `Dwa wymiary` lub `Wymiar i kąt`.
* DANE**Rozmiar** (`QuantityConstraint`): Pierwsza odległość fazowania. Domyślnie `1 mm`.
* DANE**Rozmiar2** (`QuantityConstraint`): Druga odległość fazowania. Używane tylko jeśli DANE**Typ sfazowania** to `Dwa wymiary`. Wartość domyślna to `1 mm`.
* DANE**Kąt** (`Angle`): Kąt fazowania. Używany tylko jeśli DANE**Typ sfazowania** to `Wymiar i kąt`. Wartość domyślna to `45 °`.
* DANE**Odwróć kierunek** (`Bool`): Jeśli ustawiono wartość `PRAWDA`, kierunek fazowania zostanie odwrócony. Nie używane, jeśli DANE**Typ sfazowania** to `Wymiary równe`. Domyślnia wartość to `FAŁSZ`.
* DANE**Użyj wszystkich krawędzi** (`Bool`): Jeśli wartość to `PRAWDA` wszystkie krawędzie elementu są fazowane, a krawędzie określone przez DANE**Bazę** są ignorowane. Domyślną wartością jest `FAŁSZ`.

Projekt Części

* DANE**Ulepsz** (`Bool`): Jeśli ma wartość `PRAWDA`, nadmiarowe krawędzie są usuwane z wyniku operacji. Wartość domyślna jest określona przez preferencję **Automatycznie udoskonal model po wykonaniu operacji opartej na szkicu**. Zobacz stronę [Projekt Części: Ustawienia](/PartDesign_Preferences/pl#Ogólne "PartDesign Preferences/pl").

## Znane problemy

Zobacz stronę [Zaokrąglenie](/PartDesign_Fillet/pl#Znane_problemy "PartDesign Fillet/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Chamfer/pl&oldid=1515646>"