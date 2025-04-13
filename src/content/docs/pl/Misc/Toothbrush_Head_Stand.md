---
title: Stojak na wkłady do szczoteczki do zębów
---
|  |
| --- |
| Ćwiczenie |
| Temat |
| Modelowanie |
| Poziom trudności |
| Początkujący |
| Czas wykonania |
| 1 godzina |
| Autorzy |
| [EmmanuelG](/User:EmmanuelG "User:EmmanuelG") |
| Wersja FreeCAD |
| 0.16 lub nowszy |
| Pliki z przykładami |
| [Thingiverse 2403310](https://www.thingiverse.com/thing:2403310) |
| Zobacz również |
| *-* |
|  |

## Problem z życia codziennego

Elektryczne szczoteczki do zębów rzadko występują ze stojakiem na główkę, natomiast w rodzinie często można zobaczyć wiele główek używanych z jednym korpusem. Wiele osób borykających się ze wspólnym problemem prowadzi nas do różnych rozwiązań, co można zobaczyć na Thingiverse *(200-800 projektów jest związanych z tym tematem)*. Oto pierwsza odpowiedź i jak ją zaprojektować.

Ten poradnik przeprowadzi Cię przez proces wymodelowania części pokazanej na poniższym obrazku przy użyciu podstawowych narzędzi ze środowiska [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") *(wiele narzędzi i możliwości nie zostało omówionych)*.

![](/images/TBHS-model.png)

## Pierwszy pomysł: płyta

* Na stronie startowej wybierz ![](/images/Workbench_PartDesign.svg) *Projekt Części* lub utwórz nowy dokument i wybierz środowisko *Projekt Części*.

![](/images/TBHS-0.png)

![](/images/TBHS-0.png)

## Utwórz szkic

* Kliknij na ![](/images/Sketcher_NewSketch.svg) [**Nowy szkic**](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl"). Albo z menu podrzędnego w oknie zadania po lewej stronie, albo z paska narzędziowego powyżej, albo z menu Projekt Części na górze.

![](/images/TBHS-1.JPG)

W oknie dialogowym zostanie wyświetlony monit o wybranie orientacji szkicu i podanie odsunięcia.

* Wybierzemy Płaszczyznę XY jak na powyższym obrazku *(ta orientacja odpowiada wspólnej płycie konstrukcyjnej większości drukarek 3D)*, a następnie kliknij OK.

![](/images/TBHS-2.JPG)

Jesteś teraz zwrócony do płaszczyzny XY z góry i masz dostęp do narzędzi kreślarskich.

* Kliknij narzędzie ![](/images/Sketcher_CreateRectangle.svg) [**Utwórz prostokąt**](/Sketcher_CreateRectangle/pl "Sketcher CreateRectangle/pl")
* Kliknij, aby umieścić pierwszy punkt.
* Kliknij, aby umieścić przeciwległy narożnik.
* Naciśnij ESC lub kliknij prawym przyciskiem myszy, aby zakończyć korzystanie z narzędzia.

![](/images/TBHS-3.JPG)

Masz teraz pływający prostokąt o nieokreślonych wymiarach.

* Kliknij linię prostokąta, aby uzyskać dostęp do narzędzi wiązań po prawej stronie paska narzędzi *(w zależności od rozmiaru ekranu może być konieczne przeciągnięcie ich w lewo, aby zobaczyć je wszystkie)*.
* Kliknij na ![](/images/Sketcher_ConstrainDistance.png) [Wiązanie odległości](/Sketcher_ConstrainDistance/pl "Sketcher ConstrainDistance/pl")
* Pojawi się okno dialogowe z prośbą o ustawienie wymiaru. Wprowadź `80 mm` i kliknij OK.
* Powtórz czynność z drugim bokiem prostokąta, również wpisując `80 mm`.

![](/images/TBHS-4.JPG)

Masz teraz ruchomy kwadrat.

* Kliknij lewy dolny punkt kwadratu.
* Kliknij na początek płaszczyzny XY *(na przecięciu dwóch grubych linii)*.
* Kliknij na ![](/images/Constraint_PointOnPoint.svg) [Wiązanie zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl").

![](/images/TBHS-5.JPG)

Masz teraz całkowicie związany szkic, o czym informuje Cię solwer po lewej stronie i zmiana jego koloru. Dobrą praktyką jest posiadanie zawsze całkowicie zawężonego szkicu.

Niedostatecznie związany szkic może pozostawić miejsce na niechciane zmiany, jeśli zmodyfikujesz coś później.

Z drugiej strony, szkic z nadmiernymi więzami również nie jest dobry. W takim przypadku solwer ostrzega o nadmiarowych wiązaniach i należy usunąć niektóre z nich.

* Aby opuścić szkic, kliknij przycisk Zamknij po lewej stronie lub ikonę ![](/images/Sketcher_LeaveSketch.png) na pasku narzędzi lub naciśnij ESC.

![](/images/TBHS-6.JPG)

Teraz widzisz tylko kwadrat, a menu kontekstowe zadań po lewej stronie pokazuje więcej opcji niż wcześniej.

### Utwórz wyciągnięcie

* Kliknij na widok ![](/images/View-axometric.svg) **Aksonometryczny** wśród standardowych widoków, aby lepiej zobaczyć, co się stanie.
* Kliknij na ![](/images/PartDesign_Pad.svg) **Wyciągnięcie**.
* Wprowadź `4 mm` i kliknij OK.

![](/images/TBHS-7.JPG)

Twój szkic ma teraz objętość!

### Utwórz na nim szkic

* Wybierz górną powierzchnię

![](/images/TBHS-8.JPG)

Zmienia się kolor ściany i dostępnych jest więcej opcji w menu podręcznym.

* Kliknij na ![](/images/Sketcher_NewSketch.svg) **Utwórz szkic**. Ponieważ wybrano ścianę, nie zostanie wyświetlony monit o wybranie płaszczyzny.

![](/images/TBHS-9.JPG)

* Kliknij na ![](/images/Sketcher_Circle.svg) [**Utwórz okrąg**](/Sketcher_CreateCircle/pl "Sketcher CreateCircle/pl"), kliknij ponownie aby umieścić środek, przesuń wskaźnik i kliknij, aby zdefiniować promień.
* Narysuj 4 okręgi na podkładce *(o dowolnym rozmiarze)'.'*
* Naciśnij ESC lub kliknij prawym przyciskiem myszy, aby zakończyć korzystanie z narzędzia.

![](/images/TBHS-10.JPG)

* Wybierz okręgi
* Kliknij na ![](/images/Sketcher_ConstrainEqual.png) [**Wiązanie równości**](/Sketcher_ConstrainEqual/pl "Sketcher ConstrainEqual/pl").

![](/images/TBHS-11.JPG)

Teraz okręgi mają ten sam promień.

* Kliknij na ![](/images/Sketcher_External.svg) [Utwórz geometrię zewnętrzną](/Sketcher_External/pl "Sketcher External/pl").
* Kliknij na cztery boki kwadratu, doda to linie, kolor magenta.

![](/images/TBHS-12.JPG)

Linie te posłużą jako odniesienie do pozycjonowania okręgów.

* Kliknij na ![](/images/Sketcher_ConstrainDistance.png) [Równanie odległości](/Sketcher_ConstrainDistance/pl "Sketcher ConstrainDistance/pl").
* Kliknij na środek okręgu.
* Kliknij na linię w kolorze magenta.
* Ustaw odległość *(20 mm z każdej strony)*.

![](/images/TBHS-13.JPG)

* Kliknij na okrąg
* Kliknij na ![](/images/Sketcher_ConstrainRadius.svg) [Wiązanie promienia](/Sketcher_ConstrainRadius/pl "Sketcher ConstrainRadius/pl") i ustaw go na `1,5mm`.

![](/images/TBHS-14.JPG)

* Aby opuścić szkic, kliknij przycisk Zamknij po lewej stronie lub ikonę ![](/images/Sketcher_LeaveSketch.png) na pasku narzędzi lub naciśnij ESC.

![](/images/TBHS-15.JPG)

### Utwórz wyciągnięcie

* Kliknij na widok ![](/images/View-axometric.svg) **Aksonometryczny** wśród standardowych widoków, aby lepiej zobaczyć, co się stanie.
* Kliknij na ![](/images/PartDesign_Pad.svg) **Wyciągnij**.
* Wprowadź wartość `25 mm` i kliknij OK.

![](/images/TBHS-16.JPG)

Masz już podstawowy kształt, potrzebujesz tylko ostatecznych poprawek.

### Zaokrąglanie narożników

* Przytrzymując CTRL kliknij pionową krawędź w każdym rogu, aby wybrać cztery z nich.

Nie wahaj się pomóc, przełączając tryb wyświetlania (tuż po lewej stronie widoku aksonometrycznego) między ![](/images/DrawStyleWireFrame.svg) **Szkieletowy** a ![](/images/DrawStyleFlatLines.svg) **cieniowany z krawędziami**.

![](/images/TBHS-17.JPG)

* Kliknij na ![](/images/PartDesign_Fillet.svg) [**Zaokrąglenie**](/PartDesign_Fillet/pl "PartDesign Fillet/pl").
* Ustaw promień na `20 mm`.

![](/images/TBHS-18.JPG)

O wiele lepiej.

### Zwiększenie wytrzymałości

```
Musimy dodać materiał u podstawy cylindrów, aby były mniej podatne na pęknięcia. Ze względu na orientację drukowania te małe powierzchnie będą kruche na styku z podstawą.

```

* Wybierz okręgi u podstawy cylindrów.

![](/images/TBHS-19.JPG)

* Kliknij na ![](/images/PartDesign_Chamfer.svg) [Sfazowanie](/PartDesign_Chamfer/pl "PartDesign Chamfer/pl").
* Ustaw wartość `2 mm`.

![](/images/TBHS-20.JPG)

### Sfazowanie krawędzi

* Wybierz powierzchnię pod podstawą, dodaj ![](/images/PartDesign_Chamfer.svg) **Sfazowanie** o wartości `0,5 mm`.

Pierwsza warstwa plastiku jest często nieco zbyt mocno zgnieciona, co zrekompensuje to i zaoszczędzi czas na czyszczenie modelu. Jeśli pierwsza warstwa jest w porządku, poprawi tylko wygląd.

![](/images/TBHS-21.JPG)

* Wybierz krawędzie na granicy górnej powierzchni *(przytrzymując CTRL)*.

![](/images/TBHS-23.JPG)

* Dodaj ![](/images/PartDesign_Chamfer.svg) **Sfazowanie** `1 mm`. To jest tylko kwestia estetyczna.

![](/images/TBHS-22.JPG)

Gotowe !

## Eksport do pliku .STL

* W widoku Złożonym po lewej stronie, wybierz widok drzewa zamiast kontekstowego menu zadań, kliknij ostatnią cechę *(fazę)*.

![](/images/TBHS-24.JPG)

* Teraz możesz wybrać "Eksportuj..." z menu Plik w lewym górnym rogu i wybrać format pliku .STL.
* Wystarczy go wydrukować :-)

## Inspiracja

Powyższy model stanowi dobry punkt wyjścia do korzystania z FreeCAD, ale jako stojak na główkę szczoteczki do zębów ma swoje wady: ze względu na orientację wydruku i małą powierzchnię drążki są podatne na złamania.

Zainspirowani różnorodnością rozwiązań zaproponowanych przez inne osoby, stworzymy drugą wersję, która będzie znacznie lepsza.

![](/images/TBHS-v2.jpg)

Nie martw się, często trzeba przejść przez kilka poprawek dla danego pomysłu *(np.: po użyciu prototypu na obrazku dodaliśmy więcej miejsca między główkami, aby się nie stykały)*.

W tej drugiej części nauczysz się również korzystać z większej liczby narzędzi, takich jak potężne "powtórzenie liniowe".

## Drugi pomysł: pasmo

* Utwórz nowy dokument i wybierz środowisko pracy ![](/images/Workbench_PartDesign.svg) **Projekt Części**.

### Utwórz szkic

* Utwórz ![](/images/Sketcher_NewSketch.svg) **Nowy szkic** na płaszczyźnie XY.

![](/images/TBHS-1.JPG)

* Narysuj ![](/images/Sketcher_CreateSlot.svg) [Utwórz wpust](/Sketcher_CreateSlot/pl "Sketcher CreateSlot/pl"),
  + Kliknij, aby umieścić pierwszy środek,
  + Przesuń, aby zdefiniować długość i promień,
  + Kliknij, aby ustawić drugi środek.

![](/images/TBHS2-1.JPG)

Masz teraz pływający wpust o nieokreślonych wymiarach.

* Kliknij jedną z poziomych linii wpustu.
* Kliknij na ![](/images/Sketcher_ConstrainDistance.png) [Wiązanie odległości](/Sketcher_ConstrainDistance/pl "Sketcher ConstrainDistance/pl").
* Pojawi się okno dialogowe z prośbą o ustawienie wymiaru. Wpisz `75 mm` i kliknij OK.
  + Dotyczy to stojaka na 3 główki, policz 25 mm dla każdej, jeśli chcesz więcej

![](/images/TBHS2-2.JPG)

* Kliknij jeden punkt linii poziomej
* Kliknij na jeden punkt drugiej poziomej linii
* Kliknij na ![](/images/Sketcher_ConstrainDistance.png) [Wiązanie odległości](/Sketcher_ConstrainDistance/pl "Sketcher ConstrainDistance/pl").
* Pojawi się okno dialogowe z prośbą o ustawienie wymiaru. Wprowadź `29 mm` i kliknij OK.

![](/images/TBHS2-3.JPG)

* Narysuj ![](/images/Sketcher_CreateSlot.svg) [Utwórz wpust](/Sketcher_CreateSlot/pl "Sketcher CreateSlot/pl") wokół pierwszego wpustu.

![](/images/TBHS2-4.JPG)

* Spraw, aby środki drugiego wpustu pokrywały się ze środkami pierwszego wpustu za pomocą ![](/images/Constraint_PointOnPoint.svg) [wiązania zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl").

![](/images/TBHS2-5.JPG)

* Kliknij na jeden punkt poziomej linii pierwszego wpustu.
* Kliknij na jeden punkt najbliższej poziomej linii drugiego wpustu.
* Kliknij na ![](/images/Sketcher_ConstrainDistance.png) [Wiązanie odległości](/Sketcher_ConstrainDistance/pl "Sketcher ConstrainDistance/pl").
* Pojawi się okno dialogowe z prośbą o ustawienie wymiaru. Wprowadź `3 mm` i kliknij OK.

![](/images/TBHS2-6.JPG)

* Aby szkic był w pełni związany:
  + Kliknij lewy dolny punkt drugiego wpustu,
  + Kliknij na początek planu XY,
  + Kliknij na ![](/images/Constraint_PointOnPoint.svg) [wiązanie zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl").

![](/images/TBHS2-7.JPG)

* Aby opuścić szkic, kliknij przycisk Zamknij po lewej stronie lub ikonę ![](/images/Sketcher_LeaveSketch.png) na pasku narzędzi lub naciśnij ESC.

![](/images/TBHS2-8.JPG)

### Utwórz wyciągnięcie

* Kliknij na widok ![](/images/View-axometric.svg) **Aksonometryczny** wśród standardowych widoków, aby lepiej zobaczyć, co się stanie.
* Kliknij na ![](/images/PartDesign_Pad.svg) **Wyciągnij**.
* Wprowadź wartość `30 mm` i kliknij OK.

![](/images/TBHS2-9.JPG)

### Utwórz na nim szkic

* Wybierz górną powierzchnię

![](/images/TBHS2-10.JPG)

* Kliknij na ![](/images/Sketcher_NewSketch.svg) **Utwórz szkic**. Ponieważ wybrano ścianę, nie zostanie wyświetlony monit o wybranie płaszczyzny.

![](/images/TBHS2-11.JPG)

* Narysuj ![](/images/Sketcher_CreateHexagon.svg) [Sześciokąt](/Sketcher_CreateHexagon/pl "Sketcher CreateHexagon/pl").
  + Kliknij, aby umieścić środek,
  + Przesuń, aby zdefiniować promień,
  + Kliknij, aby ustawić.

![](/images/TBHS2-12.JPG)

* Kliknij na krawędź sześciokąta.
* Kliknij na ![](/images/Constraint_Horizontal.svg) [Zwiąż w poziomie](/Sketcher_ConstrainHorizontal/pl "Sketcher ConstrainHorizontal/pl")

![](/images/TBHS2-13.JPG)

* Kliknij na środek sześciokąta.
* Kliknij na poziomą linię płaszczyzny XY
* Kliknij na ![](/images/Sketcher_ConstrainDistance.png) [Wiązanie odległości](/Sketcher_ConstrainDistance/pl "Sketcher ConstrainDistance/pl").
* Pojawi się okno dialogowe z prośbą o ustawienie wymiaru. Wprowadź wartość `15 mm` i kliknij OK.

![](/images/TBHS2-14.JPG)

* Kliknij środek sześciokąta
* Kliknij pionową płaszczyznę XY
* Kliknij ![](/images/Sketcher_ConstrainDistance.png) [Wiązanie odległości](/Sketcher_ConstrainDistance/pl "Sketcher ConstrainDistance/pl").
* Pojawi się okno dialogowe z prośbą o ustawienie wymiaru. Wprowadź `10 mm` i kliknij OK.

![](/images/TBHS2-15.JPG)

Kliknij niebieski okrąg sześciokąta.

* Kliknij na ![](/images/Sketcher_ConstrainRadius.svg). [Wiązanie promienia](/Sketcher_ConstrainRadius/pl "Sketcher ConstrainRadius/pl")
* Okno dialogowe wyświetli monit o ustawienie wymiaru. Wprowadź `8 mm` i kliknij OK.

![](/images/TBHS2-16.JPG)

* Aby opuścić szkic, kliknij przycisk Zamknij po lewej stronie lub ikonę ![](/images/Sketcher_LeaveSketch.png) na pasku narzędzi lub naciśnij ESC.

![](/images/TBHS2-17.JPG)

### Utwórz otwór

* Kliknij na widok ![](/images/View-axometric.svg) **Aksonometryczny** wśród standardowych widoków, aby lepiej zobaczyć, co się stanie.
* Kliknij na [32px](/index.php?title=Plik:PartDesign_Pocket.svg&action=edit&redlink=1 "Plik:PartDesign Pocket.svg (page does not exist)") [Kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl").
* Wybierz *do pierwszego* z rozwijanego menu i kliknij OK.

![](/images/TBHS2-18.JPG)

### Powtarzanie liniowe

* W widoku złożonym po lewej stronie, wybierz widok drzewa zamiast kontekstowego menu zadań, kliknij cechę kieszeni.
* Kliknij na ![](/images/PartDesign_LinearPattern.svg) [Szyk liniowy](/PartDesign_LinearPattern/pl "PartDesign LinearPattern/pl").
* Ustaw długość na `55 mm` i liczbę wystąpień na `3`, a następnie kliknij OK.

![](/images/TBHS2-19.JPG)

### Utwórz na nim szkic

* Wybierz wewnętrzną ścianę

![](/images/TBHS2-20.JPG)

* Kliknij na ![](/images/Sketcher_NewSketch.svg) **Utwórz szkic**. Ponieważ wybrano ścianę, nie zostanie wyświetlony monit o wybranie płaszczyzny.

![](/images/TBHS2-21.JPG)

* Kliknij na ![](/images/Sketcher_Circle.svg) [Utwórz okrąg](/Sketcher_CreateCircle/pl "Sketcher CreateCircle/pl"), kliknij, aby umieścić środek, przesuń kursor i kliknij, aby zdefiniować promień.

![](/images/TBHS2-22.JPG)

* Kliknij na środek okręgu.
* Kliknij na poziomą linię płaszczyzny XY.
* Kliknij na ![](/images/Sketcher_ConstrainDistance.png) [Wiązanie odległości](/Sketcher_ConstrainDistance/pl "Sketcher ConstrainDistance/pl").
* Pojawi się okno dialogowe z prośbą o ustawienie wymiaru. Wprowadź wartość `15 mm` i kliknij OK.

![](/images/TBHS2-23.JPG)

* Kliknij środek okręgu.
* Kliknij pionową płaszczyznę XY.
* Kliknij ![](/images/Sketcher_ConstrainDistance.png) [Wiązanie odległości](/Sketcher_ConstrainDistance/pl "Sketcher ConstrainDistance/pl").
* Pojawi się okno dialogowe z prośbą o ustawienie wymiaru. Wprowadź `10 mm` i kliknij OK.

![](/images/TBHS2-24.JPG)

* Kliknij na okrąg.
* Kliknij na ![](/images/Sketcher_ConstrainRadius.svg) [Wiązanie promienia](/Sketcher_ConstrainRadius/pl "Sketcher ConstrainRadius/pl")
* Okno dialogowe wyświetli monit o ustawienie wymiaru. Wprowadź `3,5 mm` i kliknij OK.

![](/images/TBHS2-25.JPG)

* Aby opuścić szkic, kliknij przycisk Zamknij po lewej stronie lub ikonę ![](/images/Sketcher_LeaveSketch.png) na pasku narzędzi lub naciśnij ESC.

![](/images/TBHS2-26.JPG)

### Utwórz wyciągnięcie

* Kliknij na widok ![](/images/View-axometric.svg) **Aksonometryczny** wśród standardowych widoków, aby lepiej zobaczyć, co się stanie.
* Kliknij na ![](/images/PartDesign_Pad.svg) **Wyciągnięcie**.
* Wprowadź `4 mm` i kliknij OK.

![](/images/TBHS2-27.JPG)

### Powtarzanie liniowe

* W widoku złożonym po lewej stronie, wybierz widok drzewa zamiast kontekstowego menu zadań, kliknij cechę wyciągnięcia.
* Kliknij na ![](/images/PartDesign_LinearPattern.svg) [Szyk liniowy](/PartDesign_LinearPattern/pl "PartDesign LinearPattern/pl").
* Ustaw długość na `55 mm` i liczbę wystąpień na `3`, a następnie kliknij OK.

![](/images/TBHS2-28.JPG)

### Pochylenie ścian

* Wybierz krawędź każdego okrągłego wyciągnięcia.

![](/images/TBHS2-29.JPG)

* Kliknij na ![](/images/PartDesign_Draft.svg) [Pochylenie ścian](/PartDesign_Draft/pl "PartDesign Draft/pl").
* Ustaw kąt szkicu na `40°`.
* Kliknij "Płaszczyzna neutralna" i wybierz powierzchnię, na której rysowany jest szkic.
* Zaznacz opcję "Odwróć kierunek wyciągnięcia".

![](/images/TBHS2-30.JPG)

Mogliśmy użyć sfazowania, aby zrobić coś podobnego, ale w tym przypadku bardziej odpowiednie jest pochylenie.

Faza = lewa / Pochylenie = prawa

![](/images/TBHS2-30-chamfer.JPG)![](/images/TBHS2-30-draft.JPG)

### Wykończenia

* Przytrzymując klawisz CTRL wybierz dolną i górną powierzchnię.

![](/images/TBHS2-31-bottom.JPG)![](/images/TBHS2-31-top.JPG)

* + Dodaj ![](/images/PartDesign_Chamfer.svg) **Sfazowanie** `0,5 mm`.

![](/images/TBHS2-31.JPG)

Perfekcyjnie!

## Eksport do pliku .STL

* W widoku Combo po lewej stronie, wybierz widok drzewa zamiast kontekstowego menu zadań, kliknij ostatnią cechę *(fazę)*.

![](/images/TBHS2-32.JPG)

* Teraz możesz wybrać "Eksportuj..." z menu Plik w lewym górnym rogu i wybrać format pliku .STL.
* Wydrukuj go zamiast pierwszej wersji lub zastąp go, jeśli ostatecznie się zepsuł ;-)

Retrieved from "<http://wiki.freecad.org/index.php?title=Toothbrush_Head_Stand/pl&oldid=1327498>"