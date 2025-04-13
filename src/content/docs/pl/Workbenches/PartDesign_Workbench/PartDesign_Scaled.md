---
title: Projekt Części Skaluj
---

|                                                                                                             |
| ----------------------------------------------------------------------------------------------------------- |
| Projekt Części: Skaluj                                                                                      |
| Lokalizacja w menu                                                                                          |
| Brak _(Opcja dostępna w menu Projekt Części → Zastosuj przekształcenie → Utwórz Transformację wielokrotną)_ |
| Środowisko pracy                                                                                            |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl")                                        |
| Domyślny skrót                                                                                              |
| _brak_                                                                                                      |
| Wprowadzono w wersji                                                                                        |
| -                                                                                                           |
| Zobacz także                                                                                                |
| [Transformacja wielokrotna](/PartDesign_MultiTransform/pl "PartDesign MultiTransform/pl")                   |
|                                                                                                             |

## Opis

Funkcja ![](/images/PartDesign_Scaled.svg) **Skaluj** jest jedną z opcji transformacji narzędzia ![](/images/PartDesign_MultiTransform.svg). [Transformacji wielokrotnej](/PartDesign_MultiTransform/pl "PartDesign MultiTransform/pl"). W przeciwieństwie do innych opcji, nie jest ona dostępna jako osobne narzędzie. Przekształca ona wynik transformacji w sekwencję przeskalowanych obiektów o równomiernie rozłożonych współczynnikach skali. Zaczynając od obiektu bazowego z poprzedniej transformacji, współczynnik skali wzrasta lub maleje, aż do osiągnięcia podanej wartości na ostatnim elemencie.

![](/images/PartDesign_Scaled-01.png) ![](/images/Button_right.svg) ![](/images/PartDesign_Scaled-02.png)

Szyk liniowy i kołowy → Skalowanie szyku liniowego z 3 krokami _(wystąpieniami)_ i szyku kołowego z 12 krokami.

Jeśli w obrębie elementu nie było wcześniejszego przekształcenia ![](/images/PartDesign_MultiTransform.svg) ![](/images/PartDesign_MultiTransform.svg) [Transformacji wielokrotnej](/PartDesign_MultiTransform/pl "PartDesign MultiTransform/pl"), przeskalowane elementy zostaną umieszczone w tej samej pozycji co element bazowy. Może to skutkować nieoczekiwanymi kształtami, jeśli element bazowy nie jest całkowicie objęty skalowanym obiektem. Dlatego nie zaleca się używania **Skalowania** jako pierwszej transformacji dla funkcji Transformacji wielokrotnej.

![](/images/PartDesign_Scaled-03.png) ![](/images/Button_right.svg)
![](/images/PartDesign_Scaled-04.png) ![](/images/Button_right.svg)
![](/images/PartDesign_Scaled-05.png)

Cecha podstawowa z otworem → Obiekt skalowany z 2 wystąpieniami → Obiekt skalowany z 4 wystąpieniami.

## Użycie

### Zmiana skali przekształconej cechy

1. Wykonaj jedną z następujących czynności:
   - Kliknij dwukrotnie obiekt Transformacji wielokrotnej w oknie [Widoku Drzewa](/Tree_view/pl "Tree view/pl").
   - Kliknij prawym przyciskiem myszki obiekt Transformacji wielokrotnej w [Widoku Drzewa](/Tree_view/pl "Tree view/pl") i wybierz **Edycja funkcji Transformacji wielokrotnej** z menu podręcznego.
2. Otworzy się [Panel zadań](/Task_panel "Task panel") **Parametry Transformacji wielokrotnej**.
3. Kliknij prawym przyciskiem myszki na liście **Transformacje** i wybierz **Dodaj transformację zmiany skali** z menu podręcznego.
4. Pozycja **Zmiana skali** zostanie dodana do listy, a panel zadań zostanie rozszerzony u dołu, aby umożliwić ustawienie **Współczynnik** i **Wystąpienia**. Więcej informacji znajduje się w sekcji [Opcje](#Opcje).
5. Naciśnij OK na pasku u dołu.
6. Naciśnij przycisk OK u góry, aby zakończyć operację.

## Zmiana skali wybranej cechy=

1. Wybierz element bieżącej Zawartości w oknie [Widoku Drzewa](/Tree_view/pl "Tree view/pl").
2. Wykonaj jedną z następujących czynności:
   - Naciśnij przycisk ![](/images/PartDesign_MultiTransform.svg) [Utwórz transformację wielokrotną](/PartDesign_MultiTransform/pl "PartDesign MultiTransform/pl").
   - Wybierz z menu opcję **Projekt Części → Zastosuj przekształcenie → ![](/images/PartDesign_MultiTransform.svg) Utwórz wielokrotna transformację**.
3. Otworzy się [Panel zadań](/Task_panel/pl "Task panel/pl") **Parametry Transformacji wielokrotnej**. Zobacz powyżej.

## Opcje

- **Współczynnik**: Współczynnik, do którego skalowana jest ostatnia cecha.
- **Wystąpienia**: Liczba kroków od obiektu nieskalowanego _(1)_ do wartosci **Współczynnika** _(w tym element bazowy i ostatni)_.
  - Transformacja skalowana akceptuje liczbę wystąpień poprzedniej transformacji jako wartość maksymalną lub dowolny dzielnik tej liczby zwracający wynik całkowity. Tak więc `12`, `6`, `4`, `3` i `2` są prawidłowe dla wzoru liniowego lub biegunowego z 12 wystąpieniami.
  - Skalowana pojedyncza cecha akceptuje dowolną liczbę całkowitą większą niż 1.

## Uwagi

- Środek skalowania jest środkiem ciężkości elementu, co może sprawiać, że:
  - rosnący element będzie wystawał po przeciwnej stronie elementu nadrzędnego,
  - kurczący się element straci kontakt z elementem nadrzędnym i zniknie,
  - zmniejszająca się kieszeń stanie się niewidocznym zagłębieniem wewnątrz elementu nadrzędnego.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Scaled/pl&oldid=1485349>"
