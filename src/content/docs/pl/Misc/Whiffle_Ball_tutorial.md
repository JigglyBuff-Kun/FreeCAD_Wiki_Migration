---
title: Poradnik Kula Whiffle
---

|                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Ćwiczenie                                                                                                                                                          |
| Temat                                                                                                                                                              |
| Projekt produktu                                                                                                                                                   |
| Poziom trudności                                                                                                                                                   |
| początkujący                                                                                                                                                       |
| Czas wykonania                                                                                                                                                     |
| 30 minut                                                                                                                                                           |
| Autorzy                                                                                                                                                            |
| r-frank oraz vocx                                                                                                                                                  |
| Wersja FreeCAD                                                                                                                                                     |
| 0.17 inowszy                                                                                                                                                       |
| Pliki z przykładami                                                                                                                                                |
| [WhiffleBall_Tutorial_FCWiki.FCStd](https://github.com/FreeCAD/Examples/blob/master/Whiffle_Ball_Tutorial_ExampleFiles/WhiffleBall_Tutorial_FCWiki.FCStd?raw=true) |
| Zobacz również                                                                                                                                                     |
| _-_                                                                                                                                                                |
|                                                                                                                                                                    |

## Wprowadzenie

Ten poradnik został pierwotnie napisany przez Rolanda Franka _(†2017, r-frank)_, a następnie przepisany i zilustrowany przez vocx.

W tym poradniku dowiesz się, jak korzystać ze środowiska [Część](/Part_Workbench/pl "Part Workbench/pl").

Środowisko pracy Część było pierwszym opracowanym środowiskiem pracy. Zapewnia ono podstawowe elementy geometryczne, które mogą być używane jako bloki konstrukcyjne dla innych środowisk pracy. Środowisko pracy Część jest przeznaczone do stosowania w tradycyjnym przepływie pracy [konstrukcyjna geometria bryłowa](/Constructive_solid_geometry/pl "Constructive solid geometry/pl") _(CSG)_. Aby uzyskać bardziej nowoczesny przepływ pracy z wykorzystaniem szkiców, wyciągnięć i cech, należy użyć środowiska pracy [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").

Będziesz ćwiczyć:

- wstawianie elementów pierwotnych,
- zmienianie parametrów tych obiektów pierwotnych,
- modyfikowanie ich [umiejscowienia](/Placement "Placement"),
- wykonywanie operacji logicznych.

![](/images/10_T03_Part_ball_fillet.png)

Ostateczny model kuli wiffle.

## Konfiguracja

1. Uruchom FreeCAD, utwórz nowy pusty dokument za pomocą **Plik → ![](/images/Std_New.svg) [Nowy](/Std_New/pl "Std New/pl")** i przełącz się na środowisko [Part Workbench](/Part_Workbench/pl "Part Workbench/pl").

: 1.1. Naciśnij przycisk ![](/images/Std_ViewIsometric.svg) [Widok izometryczny](/Std_ViewIsometric/pl "Std ViewIsometric/pl") lub naciśnij 0 na klawiaturze numerycznej, aby zmienić widok na izometryczny w celu lepszej wizualizacji brył w widoku 3D.
: 1.2. Naciśnij przycisk ![](/images/Std_ViewFitAll.svg) [Przybliż i dopasuj wszystko](/Std_ViewFitAll/pl "Std ViewFitAll/pl") za każdym razem, gdy dodajesz obiekty, aby przesuwać i powiększać [widok 3D](/3D_view/pl "3D view/pl") tak, aby wszystkie elementy były widoczne w widoku.
: 1.3. Przytrzymaj Ctrl podczas klikania, aby zaznaczyć wiele elementów. Jeśli wybrałeś coś źle lub chcesz usunąć zaznaczenie, kliknij na puste miejsce w [widok 3D](/3D_view/pl "3D view/pl").

## Wstaw sześcian pierwotny

2. Wstaw sześcian pierwotny, klikając w ![](/images/Part_Box.svg) [Sześcian](/Part_Box/pl "Part Box/pl").

: 2.1. Wybierz `Sześcian` w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl").
: 2.2. Zmień wymiary w zakładce **Dane** [edytora właściwości](/Property_editor/pl "Property editor/pl").
: 2.3. Zmień **Długość** na `90 mm`.
: 2.4. Zmień **Szerokość** na `90 mm`.
: 2.5. Zmień **Wysokość** na `90 mm`.

3. W zakładce **Dane** w [edytorze właściwości](/Property_editor/pl "Property editor/pl") kliknij na wartość **Umiejscowienie**, aby po prawej stronie pojawił się przycisk wielokropka ….

: 3.1. Naciśnij wielokropek, aby uruchomić okno dialogowe [Umiejscowienie](/Std_Placement/pl "Std Placement/pl").
: 3.2. Zmień wartości **Przesunięcie**.
: 3.3. Zmień **X** na `-45 mm`.
: 3.4. Zmień **Y** na `-45 mm`.
: 3.5. Zmień **Z** na `-45 mm`.
: 3.6. Naciśnij przycisk OK, aby zamknąć okno dialogowe.

4. Powtórz proces, wstawiając drugą, mniejszą kostkę, klikając ![](/images/Part_Box.svg) [Sześcian](/Part_Box/pl "Part Box/pl").

: 4.1. Drugi sześcian zostanie utworzony z tą samą nazwą, ale z dodatkowym numerem, aby rozróżnić obiekt.
: 4.2. W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") wybierz `Cube001`, a następnie zmień jego wymiary i położenie, tak jak w przypadku poprzedniego obiektu.
: 4.3. Zmień **Długość** na `80 mm`.
: 4.4. Zmień **Szerokość** na `80 mm`.
: 4.5. Zmień **Wysokość** na `80 mm`.
: 4.6. Otwórz okno dialogowe [Umiejscowienie](/Std_Placement/pl "Std Placement/pl").
: 4.7. Zmień **X** na `-40 mm`.
: 4.8. Zmień **Y** na `-40 mm`.
: 4.9. Zmień **Z** na `-40 mm`.
: 4.10. Naciśnij przycisk OK, aby zamknąć okno dialogowe.

## Zmiana właściwości wyglądu

5. Poprzednie operacje utworzyły mniejszy sześcian wewnątrz większego sześcianu. Aby to zwizualizować, możemy zmodyfikować właściwość **Widok** w [edytorze właściwości](/Property_editor/pl "Property editor/pl").

: 5.1. Wybierz `Cube001`, mniejszą kostkę, w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") i zmień jej kolor. W zakładce **Widok** kliknij wartość **Kolor kształtu**, aby otworzyć okno dialogowe **Wybierz kolor**, a następnie wybierz kolor zielony, zmień także wartość **Szerokość linii** na `2.0`.
: 5.2. Wybierz obiekt `Sześcian`, większy sześcian, w oknie [widok drzewa](/Tree_view/pl "Tree view/pl"). W zakładce **Widok** zmień wartość **Przezroczystość** na `70`.5. Poprzednie operacje utworzyły mniejszy sześcian wewnątrz większego sześcianu. Aby to zwizualizować, możemy zmodyfikować właściwości **Widoku** w [edytorze właściwości](/Property_editor/pl "Property editor/pl").

![](/images/01_T03_Part_cubes_visibility.png)

Bryła sześcianu wewnątrz innej bryły sześcianu.

## Wstaw walec pierwotny

6. Wstaw cylinder pierwotny klikając na ![](/images/Part_Cylinder.svg) [Walec](/Part_Cylinder/pl "Part Cylinder/pl").

: 6.1. Wybierz `Walec` w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl").
: 6.2. Zmień wymiary w zakładce **Dane** [edytora właściwości](/Property_editor/pl "Property editor/pl").
: 6.3. Zmień **Promień** na `27.5 mm`.
: 6.4. Zmień **Wysokość** na `120 mm`.
: 6.5. Otwórz okno dialogowe [Umiejscowienie](/Std_Placement/pl "Std Placement/pl").
: 6.6. Zmień **Z** na `-60 mm`.
: 6.7. Naciśnij przycisk OK, aby zamknąć okno dialogowe.

7. Powtórz proces, wstawiając drugi cylinder, klikając ![](/images/Part_Cylinder.svg) [Walec](/Part_Cylinder/pl "Part Cylinder/pl").

: 7.1. Drugi cylinder zostanie utworzony z tą samą nazwą, ale z dodatkowym numerem, aby rozróżnić obiekt.
: 7.2. Wybierz obiekt `Walec001` w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl"), a następnie zmień jego wymiary i położenie, tak jak w przypadku poprzedniego obiektu.
: 7.3. Zmień **Promień** na `27.5 mm`.
: 7.4. Zmień **Wysokość** na `120 mm`.
: 7.5. Otwórz okno dialogowe [Umiejscowienie](/Std_Placement "Std Placement").
: 7.6. Zmień **Y** na `60 mm`.
: 7.7. Zmień właściwość **Obrót** na `ROś obrotu z zadanym kątem`; **Oś** na `X` _(ustawiając wartości `X`, `Y` i `Z` pól wprowadzania osi odpowiednio na `1`, `0` i `0`)_ oraz **Kąt** na `90°`.
: 7.8. Naciśnij przycisk OK, aby zamknąć okno dialogowe.

8. Wstaw kolejny walec. Tym razem utwórz duplikat, aby nie trzeba było zmieniać promienia i wysokości, a jedynie jego położenie.

: 8.1. Zaznacz `Cylinder001` w oknie [widok drzewa](/Tree_view/pl "Tree view/pl") i przejdź do menu **Edycja → [Duplicate selection](/Std_DuplicateSelection/pl "Std DuplicateSelection/pl")**. Spowoduje to utworzenie obiektu `Cylinder002`.
: 8.2. Otwórz okno dialogowe [Umiejscowienie](/Std_Placement/pl "Std Placement/pl").
: 8.3. Zmień **X** na `-60 mm` i zmień **Y** z powrotem na `0 mm`.
: 8.4. Zmień **Obrót** na `Oś obrotu z zadanym kątem`; **Oś** na `Y` i **Kąt** na `90°`.
: 8.5. Naciśnij przycisk OK, aby zamknąć okno dialogowe.

## Zmiana właściwości wyglądu

9. Poprzednie operacje tworzą trzy cylindry, które przecinają się ze sobą, a także przecinają sześciany. Aby lepiej to zobrazować, możemy zmodyfikować właściwości **Widok** w [edytorze właściwości](/Property_editor "Property editor").

: 9.1. Wybierz `Sześcian001`, mniejszą kostkę, w [widoku drzewa](/Tree_view "Tree view") i zmień przezroczystość. W zakładce **Widok** zmień wartość **Przezroczystość** na `70`.
: 9.2. Wybierz obiekt `Walec`, w zakładce **Widok** kliknij wartość **Kolor kształtu**, aby otworzyć okno dialogowe **Wybór koloru**, a następnie wybierz kolor czerwony.
: 9.3. Wybierz obiekt `Walec001`, w zakładce **Widok** kliknij wartość **Kolor kształtu**, aby otworzyć okno dialogowe **Wybór koloru**, a następnie wybierz kolor niebieski.
: 9.4. Wybierz `Walec002`, w zakładce **Widok** kliknij wartość **Kolor kształtu**, aby otworzyć okno dialogowe **Wybór koloru**, a następnie wybierz kolor różowy.
: 9.5. Zaznacz trzy cylindry, w zakładce **Widok** zmień także wartość **Szerokość linii** na `2.0`.

![](/images/02_T03_Part_cylinders_visibility.png)

Przecinające się bryły walców i bryły sześcianów.

## Połączenie i wycięcie

10. W oknie [widok drzewa](/Tree_view "Tree view") wybierz obiekt `Sześcian001` (wewnętrzny, mniejszy sześcian) i drzewo walców, a następnie naciśnij ![](/images/Part_Fuse.svg) [Połączenie](/Part_Fuse/pl "Part Fuse/pl"). Spowoduje to utworzenie obiektu `Scalenie`.

1. Następnie wykonaj cięcie logiczne obiektu `Sześcian` _(większego sześcianu)_ i nowego obiektu `Scalenie`.

: 11.1. W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") wybierz najpierw `Sześcian`, a następnie `Scalenie`.
: 11.2. Następnie wciśnij ![](/images/Part_Cut.svg) [Wytnij](/Part_Cut/pl "Part Cut/pl"). Spowoduje to utworzenie obiektu `Wycięcie`.

Kolejność zaznaczania obiektów jest ważna dla operacji cięcia. Obiekt bazowy jest zaznaczany jako pierwszy, a obiekt odejmowany na końcu.

: 11.3. Jeśli kolory wyglądają dziwnie, wybierz nowy obiekt `Wycięcie`, przejdź do zakładki **Widok**, kliknij wartość **Kolor kształtu**, aby otworzyć okno dialogowe **Wybór koloru**, a następnie wybierz kolor szary; zmień także wartość **Szerokość linii** na `2.0`.

![](/images/03_T03_Part_cube_cut.png)

Wydrążony kształt powstały z wycięcia sześcianu i trzech walców z większego sześcianu.

## Wstaw kostki pierwotne, aby wyciąć narożniki częściowej bryły

Teraz utworzymy więcej kostek, które będą używane jako narzędzia tnące do przycinania narożników wcześniej uzyskanego obiektu `Wycięcie`.

12. Kliknij ![](/images/Part_Box.svg) [Sześcian](/Part_Box/pl "Part Box/pl").

: 12.1. Wybierz `Sześcian002` w oknie [widok drzewa](/Tree_view/pl "Tree view/pl"), a następnie zmień jego wymiary i położenie.
: 12.2. Zmień **Długość** na `140 mm`.
: 12.3. Zmień **Szerokość** na `112 mm`.
: 12.4. Zmień **Wysokość** na `112 mm`.
: 12.5. Otwórz okno dialogowe [Umiejscowienie](/Std_Placement/pl "Std Placement/pl").
: 12.6. Zmień **X** na `-70 mm`.
: 12.7. Zmień **Y** na `-56 mm`.
: 12.8. Zmień **Z** na `-56 mm`.
: 12.9. Naciśnij OK.

13. Kliknij ![](/images/Part_Box.svg) [Sześcian](/Part_Box/pl "Part Box/pl").

: 13.1. Wybierz `Sześcian003` w [widok drzewa](/Tree_view/pl "Tree view/pl") i zmień wymiary i położenie.
: 13.2. Zmień **Długość** na `180 mm`.
: 13.3. Zmień **Szerokość** na `180 mm`.
: 13.4. Zmień **Wysokość** na `180 mm`.
: 13.5. Otwórz okno dialogowe [Umiejscowienie](/Std_Placement/pl "Std Placement/pl").
: 13.6. Zmień **X** na `-90 mm`.
: 13.7. Zmień **Y** na `-90 mm`.
: 13.8. Zmień **Z** na `-90 mm`.
: 13.9. Naciśnij OK.

Powielimy ponownie dwa poprzednie obiekty, aby użyć ich ponownie jako obiektów tnących.

14. Wybierz tylko `Sześcian002` w oknie [widok drzewa](/Tree_view/pl "Tree view/pl") i przejdź do **Edycja → [Powiel zaznaczone](/Std_DuplicateSelection/pl "Std DuplicateSelection/pl")**. Spowoduje to utworzenie obiektu `Sześcian004`.

15. Wybierz tylko `Sześcian003` w oknie [widok drzewa](/Tree_view/pl "Tree view/pl") i przejdź do **Edycja → [Powiel zaznaczone](/Std_DuplicateSelection/pl "Std DuplicateSelection/pl")**. Spowoduje to utworzenie obiektu `Sześcian005`.

16. Aby lepiej to zobrazować, możemy zmodyfikować właściwości **Widok** w oknie [edytora właściwości](/Property_editor/pl "Property editor/pl").

: 16.1. Zaznacz obiekt `Wycięcie`, w zakładce **Widok** kliknij na wartość **Kolor kształtu**, aby otworzyć okno dialogowe **Wybór koloru**, a następnie wybierz kolor niebieski.
: 16.2. Zaznacz wszystkie nowe sześciany `Sześcian002`, `Sześcian003`, `Sześcian004` i `Sześcian005`, w zakładce **Widok** zmień wartość **Przeźroczystość** na `80`.

![](/images/04_T03_Part_cube_additional.png)

Dodatkowe kostki zewnętrzne, które będą używane jako obiekty tnące dla bryły wewnętrznej.

## Ścinanie narożników 1

17. W oknie [widok drzewa](/Tree_view/pl "Tree view/pl") wybierz `Sześcian002` i `Sześcian003`.

: 17.1. Otwórz okno dialogowe [Umiejscowienie](/Std_Placement/pl "Std Placement/pl").
: 17.2. Zaznacz opcję **Zastosuj zmiany przyrostowe**; zauważ, że wszystkie wartości **Przesunięcia** są wyzerowane.
: 17.3. Zmień **Obrót** na `Oś obrotu z zadanym kątem`; **Oś** na `X` i **Kat** na `45°`, a następnie kliknij Zaqstosuj. Spowoduje to zastosowanie obrotu wokół osi X i wyzerowanie pola **Kat**.
: 17.4. Zmień **Obrót** ponownie, teraz **Oś** na `Z` i **Kat** na `45°`, a następnie kliknij Zastosuj. Spowoduje to zastosowanie obrotu wokół lokalnej osi Z i wyzerowanie pola **Kąt**.
: 17.5. Kliknij OK, aby zamknąć okno dialogowe.

18. W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") usuń zaznaczenie obiektów; następnie wybierz `Sześcian003`, większy sześcian, a następnie `Sześcian002`, mniejszy sześcian.

: 18.1. Następnie naciśnij ![](/images/Part_Cut.svg) [Wytnij](/Part_Cut/pl "Part Cut/pl"). Spowoduje to utworzenie obiektu `Wycięcie001`. Jest to wydrążona bryła, która przecina początkowy obiekt `Wytcięcie` tylko w niektórych rogach.

19. Aby lepiej to zobrazować, możemy zmodyfikować właściwości **Widok** w [edytorze właściwości](/Property_editor/pl "Property editor/pl").

: 19.1. Zaznacz `Sześcian004` i `Sześcian005`, w zakładce **Widok**, a następnie zmień wartość **Widoczność** na `Fałsz`, lub naciśnij klawisz Spacja na klawiaturze.
: 19.2. Wybierz `Wycięcie001`, kliknij wartość **Kolor kształtu**, aby otworzyć okno dialogowe **Wybór koloru**, a następnie wybierz kolor czerwony; zmień także wartość **Przezroczystość** na `90`.

![](/images/05_T03_Part_cube_additional_cut_1.png)

Obrócona, wydrążona bryła, która będzie używana jako obiekt tnący dla niektórych narożników bryły wewnętrznej.

## Ścinanie narożników 2

20. W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") wybierz obiekt `Wycięcie001`, w zakładce **Widok** zmień wartość **Widoczność** na `Fałsz` lub naciśnij klawisz Spacja na klawiaturze.

21. W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") wybierz `Sześcian004` i `Sześcian005`, w zakładce **Widok** zmień wartość **Widoczność** na `true` lub naciśnij klawisz Spacja na klawiaturze.

: 21.1. Otwórz okno dialogowe [Umiejscowienie](/Std_Placement "Std Placement").
: 21.2. Zaznacz opcję **Zastosuj zmiany przyrostowe**; zauważ, że wszystkie wartości **Przesunięcie** są wyzerowane.
: 21.3. Zmień **Obrót** na `Oś obrotu z zadanym kątem`; **Oś** na `X` i **Kąt** na `45°`, a następnie kliknij Zastosuj. Spowoduje to zastosowanie obrotu wokół osi X i wyzerowanie pola `Kąt`.
: 21.4. Zmień **Obrót** ponownie, teraz **Oś** na `Z` i **Kąt** na `-45°`, a następnie kliknij Zastosuj. Spowoduje to zastosowanie obrotu wokół lokalnej osi Z i wyzerowanie pola **Kąt**.
: 21.5. Kliknij OK, aby zamknąć okno dialogowe.

22. W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") usuń zaznaczenie obiektów, następnie wybierz `Sześcian005`, większy sześcian, a następnie `Sześcian004`, mniejszy sześcian.

: 22.1. Następnie naciśnij ![](/images/Part_Cut.svg) [Wytnij](/Part_Cut/pl "Part Cut/pl"). Spowoduje to utworzenie obiektu `Wycięcie002`. Jest to wydrążona bryła, która przecina początkowy obiekt `Wytcięcie` tylko w niektórych rogach.

23. Aby lepiej to zobrazować, możemy zmodyfikować właściwości **Widok** w [edytorze właściwości](/Property_editor/pl "Property editor/pl").

: 23.1. Wybierz `Wycięcie002`, kliknij na wartość **Kolor kształtu**, aby otworzyć okno dialogowe **Wybór koloru**, a następnie wybierz różowy kolor. Zmień także wartość **Przezroczystość** na `90`.

![](/images/06_T03_Part_cube_additional_cut_2.png)

Obrócona, wydrążona bryła, która będzie używana jako obiekt tnący dla niektórych narożników bryły wewnętrznej.

## Wykończenie modelu

24. Upewnij się że wszystkie obiekty są widoczne. W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") zaznacz wszystkie obiekty, w zakładce **Widok** zmień wartość **Widoczność** na `Prawda` lub naciśnij klawisz Spacja na klawiaturze.

![](/images/07_T03_Part_ball_additional_both.png)

Wewnętrznie wydrążona bryła wraz z zewnętrznymi przedmiotami, które zostaną użyte do jej przecięcia.

25. W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") usuń zaznaczenie obiektów, a następnie wybierz najpierw obiekt `Wycięcie`, a następnie `Wycięcie001`.

: 25.1. Następnie naciśnij ![](/images/Part_Cut.svg) [Wytnij](/Part_Cut/pl "Part Cut/pl"). Spowoduje to utworzenie obiektu `Wycięcie003`.

![](/images/08_T03_Part_ball_cut_1.png)

Wewnętrznie wydrążona bryła, wycięta przez obiekt `Wycięcie001`.

26. W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") usuń zaznaczenie, a następnie wybierz najpierw obiektów `Wycięcie003`, a następnie `Wycięcie002`.

: 26.1. Następnie naciśnij ![](/images/Part_Cut.svg) [Wytnijt](/Part_Cut/pl "Part Cut/pl"). Spowoduje to utworzenie `Wycięcie004`. To jest ostateczny obiekt.
: 26.2. Wybierz `Wycięcie004`, kliknij wartość **Kolor kształtu**, aby otworzyć okno dialogowe **Wybór koloru**, a następnie wybierz kolor zielony. Zmień także wartość **Szerokość linii** na `2.0`.

![](/images/09_T03_Part_ball_cut_2.png)

Wewnętrznie wydrążona bryła, wycięta przez obiekt `Wycięcie001` i `Wycięcie002`. Model końcowy.

27. Rzeczywiste obiekty nie mają idealnie ostrych krawędzi lub narożników, więc zastosowanie zaokrąglenia na krawędziach może być wykonane w celu udoskonalenia modelu.

: 27.1. W widoku drzewa wybierz obiekt `Wycięcie004`, a następnie naciśnij przycisk ![](/images/Part_Fillet.svg) [Zaokrąglenie](/Part_Fillet/pl "Part Fillet/pl").
: 27.2. W oknie **Zaokrąglenie krawędzi** [panelu zadań](/Task_panel/pl "Task panel/pl") przejdź do sekcji **Wybór**, wybierz **Wybór krawędzi**, a następnie wciśnij Wszystkie. Jako **Typ zaokrąglenia** wybierz `Promień stały`, a następnie ustaw **Promień** na `1 mm`.
: 24.3. Naciśnij OK. Spowoduje to utworzenie obiektu `Zaokrąglenie`.
: 27.4. W zakładce **Widok** zmień wartość **Szerokość linii** na `2.0`.

![](/images/10_T03_Part_ball_fillet.png)

Końcowy model kuli Whiffle z zaokrągleniami na krawędziach.

Retrieved from "<http://wiki.freecad.org/index.php?title=Whiffle_Ball_tutorial/pl&oldid=1356794>"
