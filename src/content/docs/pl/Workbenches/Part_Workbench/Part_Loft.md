---
title: Część Wyciągnięcie przez profile
---
|  |
| --- |
| Part: Wyciągnij po profilach |
| Lokalizacja w menu |
| Część → Wyciągnięcie po profilach... |
| Środowisko pracy |
| [środowisko pracy Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.13 |
| Zobacz także |
| [Wyciągnięcie po ścieżce](/Part_Sweep/pl "Part Sweep/pl") |
|  |

## Opis

Polecenie ![](/images/Part_Loft.svg) **Wyciągnięcie przez profile** tworzy ścianę, powłokę lub bryłę z dwóch lub więcej profili (przekrojów).

![](/images/Part_Loft_solid_ruled_from3profiles_example_FreeCAD_0_13.jpg)

Obiekt wyciągnięcia przez profile z trzech profili, które są dwoma [okręgami](/Part_Circle/pl "Part Circle/pl") i jedną [elipsą](/Part_Ellipse/pl "Part Ellipse/pl"). Parametry to: Utwórz bryłę "Zaznaczone" i Powierzchnia prostokreślna "Zaznaczone".

## Użycie

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Part_Loft.svg) Wyciągnięcie przez profile ....
   * Wybierz opcję z menu **Część → ![](/images/Part_Loft.svg) Wyciągnięcie przez profile ...**.
2. Otworzy się [Panel zadań](/Task_panel/pl "Task panel/pl") Wyciągnięcie przez profile.
3. Na liście *Dostępne profile* po lewej stronie wybierz pierwszy profil i kliknij strzałkę w prawo, aby umieścić go na liście *Wybrane profile* po prawej stronie.
4. Powtórz tę czynność dla drugiego profilu i kolejnych, jeśli wymagane są więcej niż dwa profile.
5. Opcjonalnie użyj strzałek w górę i w dół, aby zmienić kolejność wybranych profili.
6. Zdefiniuj opcje [Utwórz bryłę](#Dane), [Powierzchnia prostokreślna](#Dane) i [Zamknięty](#Dane).
7. Kliknij OK.

### Akceptowana geometria

* **Profile**: mogą być punktem *(wierzchołkiem)*, linią *(krawędzią)*, konturem lub ścianą. Krawędzie i kontury mogą być otwarte lub zamknięte. Istnieją różne [ograniczenia](#Ograniczenia), patrz poniżej.

* Obiekty typu [łącze](/App_Link/pl "App Link/pl") powiązane z odpowiednimi typami obiektów oraz kontenery typu [Część](/App_Part/pl "App Part/pl") z odpowiednimi widocznymi obiektami wewnątrz mogą być również używane jako profile. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

## Opcje

#### Utwórz bryłę

Jeśli opcja **Utwórz bryłę** ma wartość `Prawda`, FreeCAD utworzy bryłę pod warunkiem, że profile są zamknięte. Jeśli wartością jest `Fałsz`, FreeCAD utworzy ścianę lub powłokę dla profili otwartych lub zamkniętych.

#### Powierzchnia prostokreślna

Jeśli *Powierzchnia prostokreślna* ma wartość `Prawda`, FreeCAD tworzy powierzchnię, powłokę lub bryłę z [powierzchni prostokreślnych](http://en.wikipedia.org/wiki/Ruled_surface).

#### Zamknięty

Jeśli parametr "Zamknięty" ma wartość `Prawda`, FreeCAD próbuje połączyć ostatni profil z pierwszym profilem, aby utworzyć zamkniętą figurę.

Więcej informacji na temat sposobu łączenia profili można znaleźć na stronie [Szczegóły techniczne wyciągnięcia przez profile](/Part_Loft_Technical_Details/pl "Part Loft Technical Details/pl").

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Wyciągnięcia przez profile** wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Wyciągnięcie przez profile

* DANE**Profile** (`LinkList`): lista używanych profili.
* DANE**Bryła** (`Bool`): `Fałsz` *(domyślnie)*. Wartość `Prawda` określa utworzenie bryły.
* DANE**Powierzchnia prostokreślna** (`Bool`): `Fałsz` *(domyślnie)*. `Prawda` tworzy powierzchnię prostokreślną.
* DANE**Zamknięty** (`Bool`): `Fałsz` *(domyślnie)*. `Prawda` tworzy obiekt zamknięty poprzez połączenie profilu ostatniego z pierwszym.
* DANE**Maksymalnie stopni** (`IntegerConstraint`): ilość stopni maksymalnie.

## Ograniczenia

Funkcja Wyciągnięcie przez profile ma takie same ograniczenia jak [Przeciągnięcie wzdłuż ścieżki](/Part_Sweep/pl#Ograniczenia "Part Sweep/pl").

### Opcja Zamknięty

* Wyniki aktywnej opcji *Zamknięty* dla funkcji wyciągnięcia przez profile mogą generować nieoczekiwane rezultaty - wyciągnięcie może się skręcać lub załamywać. Wyciąganie jest bardzo wrażliwe na rozmieszczenie profili i złożoność krzywych wymaganych do połączenia odpowiednich wierzchołków we wszystkich profilach.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Loft/pl&oldid=1439160>"