---
title: Projekt Części Operacja logiczna
---
|  |
| --- |
| Projekt Części: Operacja logiczna |
| Lokalizacja w menu |
| Projekt Części → Operacja logiczna |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| *brak* |
|  |

## Opis

**Operacja logiczna** środowiska Projekt Części importuje jedną lub więcej [zawartości](/PartDesign_Body/pl "PartDesign Body/pl") lub [klonów](/PartDesign_Clone/pl "PartDesign Clone/pl") *(oznaczonych jako "zawartość narzędziowa")* do aktywnej bryły Projekt Części i stosuje operację logiczną *(połączenie, przecięcie lub część wspólna)*.

![](/images/PartDesign_Boolean_example.png)

Po lewej: aktywna zawartość *(A)* z bryłami narzędziowymi *(B)* i *(C)*. Po prawej: wynik po wykonaniu operacji przecięcia.

## Użycie

1. [Aktywuj zawartość](/PartDesign_Body/pl#Pojedyncza_ci.C4.85g.C5.82a_bry.C5.82a "PartDesign Body/pl"), która ma otrzymać cechę operacji logicznej.  ***Uwaga*: Ważne jest, aby ani aktywna zawartość, ani żadna z zawartych w niej cech nie były wybrane!**
2. Naciśnij przycisk ![](/images/PartDesign_Boolean.svg) Operacja logiczna.
3. W **Parametrach logicznych** kliknij przycisk Dodaj zawartość. Aktywna bryła tymczasowo znika z okna [widoku 3D](/3D_view/pl "3D view/pl"), co ułatwia wybór zawartości dla narzędzia.
4. W w oknie widoku 3D wybierz zawartość, którą chcesz wykorzystać w funkcji logicznej. Powtórz czynność, aby dodać więcej zawartości.
5. Wybierz typ operacji logicznej w menu rozwijanym *(Scal, Wytnij lub Część wspólna)*.
6. Kliknij przycisk OK.

Alternatywnie, obiekty można wybrać przed naciśnięciem przycisku operacji logicznej. Zostaną one dodane automatycznie. Podczas wstępnego wybierania nie jesteś ograniczony do Zawartości. Obiekty [Łącznik kształtu](/PartDesign_ShapeBinder/pl "PartDesign ShapeBinder/pl"), [Łącznik kształtu podrzędnego](/PartDesign_SubShapeBinder/pl "PartDesign SubShapeBinder/pl"), a nawet bryły utworzone za pomocą innych środowisk pracy mogą być również wybierane.

## Opcje

* **Scalenie:** łączy bryłę lub bryły narzędzia z bryłą aktywną.
* **Wytnij:** odejmuje bryłę lub bryły narzędzia od bryły aktywnej.
* **Część wspólna:** wycina obszar wspólny z wybranej zawartości, lub kilku zawartości z aktywną zawartością
* Naciśnij przycisk Usuń zawartość, aby usunąć zawartość, zaznaczając ją w oknie [widoku 3D](/3D_view/pl "3D view/pl").

## Właściwości

* DANE**Typ**: ustawia operację logiczną *(Scalenie, Wytnij, Część wspólna)*
* DANE**Etykieta**: nazwa nadana operacji, nazwę tę można dowolnie zmieniać.
* DANE**Grupa**: lista zawartości będących narzędziami.
* WIDOK**Wyświetlanie**: ustawia wyświetlanie pomiędzy dwoma trybami:
  + Wynik *(domyślnie)*: wyświetla wynik działania funkcji logicznej. W tym trybie Zawartości narzędzi nie mogą być wyświetlane w stanie oryginalnym, nawet jeśli ich widoczność jest włączona.
  + Narzędzia: wyświetla Zawartości narzędzi w ich oryginalnym stanie. Tryb ten jest przydatny, gdy Zawartości narzędzi muszą być edytowane lub używane w późniejszych operacjach.
* WIDOK**Wybieralne**: możliwe wartości `Prawda` lub `Fałsz`. Jeśli ustawiono wartość false, element nie może być wybrany w oknie widoku 3D.
* WIDOK**Widoczność**: możliwe wartości `Prawda` lub `Fałsz`. Przełącza widoczność elementu w oknie widoku 3D.

## Ograniczenia

* Aby narzędzie Część wspólna mogło pracować z więcej niż jedną Zawartością jako narzędzia, muszą one przecinać się nawzajem wraz z aktywnym korpusem.
* Zawartości wynikowe narzędzi przyjmują lokalne pochodzenie aktywnej zawartości. Jeśli aktywna zawartość nie znajduje się w punkcie *(0,0,0)* w globalnym układzie współrzędnych, umieszczenie zawartości narzędzi musi być względne w stosunku do aktywnej bryły. Łatwiejsze może być pozostawienie położenia aktywnej zawartości na początku przed zastosowaniem cechy logicznej niż zmiana jej położenia.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Boolean/pl&oldid=1425106>"