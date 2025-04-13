---
title: Projekt Części Grubość
---
|  |
| --- |
| Projekt Części: Grubość |
| Lokalizacja w menu |
| Projekt Części → Zastosuj funkcję ulepszenia → Grubość |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Część: Grubość](/Part_Thickness/pl "Part Thickness/pl") |
|  |

## Opis

Narzędzie ![](/images/PartDesign_Thickness.svg) **Grubość** przekształca bryłę w pusty obiekt z przynajmniej jedną otwartą ścianą, nadając każdej z pozostałych ścian jednolitą grubość. Dodaje do dokumentu obiekt **Grubość** wraz z jego odpowiednią reprezentacją w [widoku drzewa](/Tree_view/pl "Tree view/pl").

![](/images/PartDesign_Thickness_example.svg)

Bryła bazowa *(A)* → Bryła z wybraną ścianą do otwarcia *(B)* → Powstały pusty obiekt *(C)*.

## Użycie

### Dodanie funkcji grubość

1. Opcjonalnie [uaktywnij](/PartDesign_Body/pl#Aktywny_status "PartDesign Body/pl") bryłę, do której ma zostać zastosowana funkcja grubość.
2. Wybierz jedną lub więcej ścian bryły.
3. Istnieje kilka sposobów na wywołanie narzędzia:
   * Naciśnij przycisk ![](/images/PartDesign_Thickness.svg) Grubość.
   * Wybierz z menu opcję **Projekt Części → Zastosuj funkcję ulepszenia → ![](/images/PartDesign_Thickness.svg) Grubość**.
4. Jeśli nie ma aktywnej Bryły, a w dokumencie występuje dwie lub więcej Brył, otworzy się okno dialogowe **Wymagana jest aktywna zawartość** i poprosi o uaktywnienie jednej z nich. Jeśli istnieje jedna bryła, zostanie ona aktywowana automatycznie.
5. Otworzy się [panel zadań](/Task_panel/pl "Task panel/pl") **Parametry funkcji grubość**. Więcej informacji znajdziesz w sekcji [Opcje](#Opcje).
6. Naciśnij przycisk OK, aby zakończyć.

:   *Pamiętaj*:

    * Ponieważ dla danej cechy musi istnieć przynajmniej jedna ściana, ostatnia pozostała na liście ściana nie może zostać usunięta.

### Edycja funkcji grubość

1. Wykonaj jedną z poniższych czynności:
   * Kliknij dwukrotnie obiekt Grubość w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl").
   * Kliknij obiekt Grubość prawym przyciskiem myszy w oknie [Widok drzewa](/Tree_view/pl "Tree view/pl") i wybierz **Edytuj Grubość** z menu kontekstowego.
2. Otworzy się panel [Panel zadań](/Task_panel/pl "Task panel/pl") **Parametry funkcji Grubość**. Więcej informacji można znaleźć w punkcie [Opcje](#Opcje).
3. Naciśnij przycisk OK, aby zakończyć.

## Opcje

* **Dodaj ścianę**: Dodanie ścian do zaznaczenia poprzez naciśnięcie przycisku Dodaj ścianę i wybranie kolejnych ścian.
* **Usuń ścianę**: Wybierz sposób usuwania ścian z zaznaczenia:
  + Zaznacz jedną lub więcej ścian na liście i naciśnij klawisz Del lub kliknij prawym przyciskiem myszy listę i wybierz z menu kontekstowego opcję **Skasuj**.
  + Naciśnij przycisk Usuń ścianę. Wszystkie wcześniej wybrane ściany są podświetlone na fioletowo. Wybierz każdą ścianę, która ma zostać usunięta.
* **Grubość**: Ustaw grubość ścianki albo edytując wartość, albo klikając strzałki góra/dół.
* **Tryb**:
  + **Powłoka**: Można wybrać tylko tę opcję. Wybierz ją jeśli chcesz uzyskać obiekt taki jak waza, bez pokrywy, ale ze spodem.
  + **Rura**: Nie zaimplementowane. Zobacz [ten temat na forum](https://forum.freecadweb.org/viewtopic.php?p=484495#p484495)
  + **Obie strony**: Nie zaimplementowane. Zobacz [ten temat na forum](https://forum.freecadweb.org/viewtopic.php?p=484495#p484495).
* **Typ dołączenia**:
  + **Łuk**: Gdy przesunięte są powierzchnie styczne, nowe ściany, które się nie przecinają, są łączone za pomocą zaokrąglenia o promieniu równym zdefiniowanej grubości.
  + **Przecięcie**: Gdy niestyczne ściany są odsunięte, nowe ściany, które nie przecinają się, są przedłużane, aby spotkać się na ich wirtualnym przecięciu.
* **Przecięcie**: Gdy opcja jest zaznaczona, unikane są samoczynne przecięcia w niektórych modelach. Ta opcja nie jest zalecana, ponieważ opiera się na niekompletnej [metodzie OpenCASCADE](https://dev.opencascade.org/doc/refman/html/class_b_rep_offset_a_p_i___make_thick_solid.html#af78f35025a31e2ce8bd96c82fb33a981).
* **Stwórz grubość do wewnątrz**: Gdy opcja jest zaznaczona, ściany są przesunięte do wewnątrz.

## Uwagi

* Jeśli grubość idzie do wewnątrz, wartość musi być mniejsza niż najmniejsza wysokość bryły.
* Narzędzie może zawieść przy złożonych kształtach. [Wyciągnięcie po ścieżce](/PartDesign_AdditivePipe/pl "PartDesign AdditivePipe/pl") lub [Wyciągnięcie przez profile](/PartDesign_AdditiveLoft/pl "PartDesign AdditiveLoft/pl") mogą działać lepiej przy tworzeniu złożonych kształtów.
* Znane błędy:
  + BRep\_API: polecenie nie wykonane.
  + BRep\_Tool: brak parametru na krawędzi.
  + Cichy błąd.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Grubość wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Podstawowe

* DANE**Base** (`LinkSub`): Link podrzędny do listy wybranych krawędzi i ścian cechy nadrzędnej.
* DANE**Podparcie przemieszczenia** (`Bool`): Uwzględnia bazowy kształt addytywny / subtraktywny, gdy jest używany w funkcjach wzorca. Jeśli opcja jest wyłączona, tylko ubrana część kształtu jest używana do wzorowania. Wartość domyślna: `FAŁSZ`.
* DANE**Support Transform** (`Bool`): "Uwzględnij bazowy kształt addytywny/subtraktywny, gdy jest używany w cechach wzorcowych. Jeśli wyłączone, tylko ubrana część kształtu jest używana do wzorowania". Domyślnie: `false`.
* DANE (hidden)**Add Sub Shape** (`PartShape`)
* DANE (hidden)**Base Feature** (`Link`): Link do cechy nadrzędnej.
* DANE (hidden)**\_ Body** (`LinkHidden`): Link do bryły nadrzędnej.

Projekt Części

* DANE**Ulepsz** (`Bool`): "Ulepsz kształt *(usuń zbędne krawędzie)* po operacji dodawania/odejmowania". Wartość domyślna jest określana przez preferencję **Automatycznie udoskonal model po wykonaniu operacji opartej na szkicu**. Zobacz [Projekt Części: Ustawienia](/PartDesign_Preferences/pl#Og.C3.B3lne "PartDesign Preferences/pl").

Grubość

* DANE**Value** (`Długość`): Wartość grubości. Domyślnie: `1 mm`.
* DANE**Tryb** (`Enumeration`): Tryb. `Powłoka` *(domyślnie)*, `Rura` lub `Obie strony`. Tylko opcja `Powłoka` jest zaimplementowana.
* DANE**Dołącz** (`Enumeration`): Tryb dołączenia. `Łuk` *(domyślnie)* lub `Przecięcie`.
* DANE**Odwrócony** (`Bool`): Stwórz grubość do wewnątrz. Domyślnie: `FAŁSZ`.
* DANE**Przecięcie** (`Bool`): Włącz obsługę przecięć. Domyślnie: `FAŁSZ`.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Thickness/pl&oldid=1485238>"