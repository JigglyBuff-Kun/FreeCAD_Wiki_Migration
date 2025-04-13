---
title: Dostosowanie pasków narzędzi
---
|  |
| --- |
| Ćwiczenie |
| Temat |
| Dostosuj paski narzędzi |
| Poziom trudności |
| początkujący |
| Czas wykonania |
| 5 minut |
| Autorzy |
| [Mario52](/User:Mario52 "User:Mario52") |
| Wersja FreeCAD |
| Wszystkie |
| Pliki z przykładami |
| *Nie dołączono* |
| Zobacz również |
| [Dostosowywanie interfejsu użytkownika do własnych potrzeb](/Interface_Customization/pl "Interface Customization/pl"). |
|  |

## Streszczenie

Ten poradnik pokazuje jak dodać przycisk dla [makra](/index.php?title=Macro/pl&action=edit&redlink=1 "Macro/pl (page does not exist)") do własnego paska narzędzi.

Więcej ogólnych informacji można znaleźć na stronie [Dostosowywanie interfejsu użytkownika do własnych potrzeb](/Interface_Customization/pl "Interface Customization/pl").

## Użycie

**1.** Znajdź menu Dostosuj

* Kliknij w **Menu główne → Narzędzia → Dostosuj**,

![Dostosuj](/images/CustomizeToolBar_01.png)

Dostosuj

* lub kliknij prawym przyciskiem myszki na dowolnym pasku narzędzi.

![Szybkie kliknięcie prawym przyciskiem myszki.](/images/CustomizeToolBar_02.png)

Szybkie kliknięcie prawym przyciskiem myszki.

* Pojawia się okienko modyfikacji.

![Pojawi się okno Dostosuj](/images/CustomizeToolBar_03.png)

Pojawi się okno Dostosuj

**2.** Zrób z makra narzędzie

* Wybierz zakładkę "Makrodefinicje".

* Aby dodać ikonę dla dostarczonej makrodefinicji kliknij przycisk Obrazek *(oznaczony ... )*.

![Wybór paska narzędzi](/images/CustomizeToolBar_04.png)

Wybór paska narzędzi

* Wybierz odpowiadająca Ci ikonę, spośród dostępnych ikon programu FreeCAD,

[lub dodaj swoją własną ikonkę klikając w przycisk Folder ikonek ...].                  *(rozwiń aby zobaczyć przykład)*

![Dodawanie ikonek](/images/CustomizeToolBar_05.png)

Dodawanie ikonek

     [Otrzymasz okno wyboru plików, wybierz swój własny plik obrazu *(format PNG, 64x64 piksele)*]

![Znajdź plik](/images/CustomizeToolBar_06.png)

Znajdź plik

* Wybierz swoją ikonę i kliknij w przycisk OK.

![Wybór ikonki](/images/CustomizeToolBar_07.png)

Wybór ikonki

* Wybrana ikonka jest teraz wyświetlana obok przycisku Obrazek oznaczonego ....

![Wyświetla się twoja ikonka](/images/CustomizeToolBar_08.png)

Wyświetla się twoja ikonka

* W wierszu **Makrodefinicje:** należy wybrać dostarczone makro i podać **Tekst menu**: *(który pojawi się jako etykieta w menu)*. Należy również wypełnić pole **Wskazówka dotycząca narzędzia:** *(tekst pojawi się, gdy kursor myszki znajdzie się nad przyciskiem na pasku narzędzi)*, kolejne wiersze są opcjonalne.

* Kliknij w przycisk Dodaj.

![Kliknij w przycisk](/images/CustomizeToolBar_09.png)

Kliknij w przycisk

* Przycisk narzędzia-makro został właśnie utworzony.

![Twój przycisk jest stworzony](/images/CustomizeToolBar_10.png)

Twój przycisk jest stworzony

**3.** Utwórz pasek narzędzi poza obszarem roboczym **Makrodefinicji**, który zawiera utworzone **Makro-narzędzie**.

* Wybierz zakładkę **Paski narzędzi *i wybierz Środowisko pracy* (dla którego przeznaczony jest pasek narzędzi) *w rozwijanej liście po prawej stronie* (**Part *w tym przykładzie)*.

     [Od wersji 0.15 istnieje pasek  ![](/images/Freecad.svg) dostępny wszędzie . W przypadku wybrania tej opcji, dostarczony pasek narzędzi będzie znajdował się w każdym Środowisku pracy.]

![Zakładka pasków narzędzi](/images/CustomizeToolBar_11.png)

Zakładka pasków narzędzi

* W rozwijanej liście po lewej stronie wybierz **Makropolecenie**.

![Makrodefinicje](/images/CustomizeToolBar_12.png)

Makrodefinicje

* Na liście pojawia się makro-narzędzie z jego ikoną.

![Twoja ikona jest na liście](/images/CustomizeToolBar_13.png)

Twoja ikona jest na liście

* Kliknij w przycisk Nowy ....

![Kliknij na "Nowy"](/images/CustomizeToolBar_14.png)

Kliknij na "Nowy"

* W oknie "Nowy pasek narzędzi" wprowadź nazwę dodatkowego paska narzędzi dla Środowiska pracy **Część** i kliknij w przycisk OK

![Wprowadź nazwę dla swojego paska narzędzi](/images/CustomizeToolBar_15.png)

Wprowadź nazwę dla swojego paska narzędzi

* Pasek narzędzi jest teraz stworzony.

* Aby dodać utworzone makro-narzędzie do tego paska narzędzi, zaznacz je w lewym oknie, a następnie kliknij przycisk → ze strzałką skierowaną w prawo.

![Wybór makropolecenia](/images/CustomizeToolBar_07.png)

Wybór makropolecenia

* Stworzyłeś teraz pasek narzędzi zwany "Camera" *(z Makro-narzędziem **Camera**)*

* Kliknij w przycisk Zamknij

![Zamknij](/images/CustomizeToolBar_17.png)

Zamknij

* Twój nowy pasek narzędzi znajduje się teraz w menu prawego przycisku myszy pasków narzędzi. Jego Ikonka *(w naszym przykładzie kamera)* jest widoczna, jeśli pasek narzędzi jest aktywny *(niebieski znacznik)*.

![Nowy pasek narzędzi](/images/CustomizeToolBar_18.png)

Nowy pasek narzędzi

Retrieved from "<http://wiki.freecad.org/index.php?title=Customize_Toolbars/pl&oldid=1468090>"