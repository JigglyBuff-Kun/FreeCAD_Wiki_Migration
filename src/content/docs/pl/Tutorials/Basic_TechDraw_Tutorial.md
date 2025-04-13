---
title: Poradnik Podstawy dla środowiska pracy Rysunek Techniczny
---

|                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ćwiczenie                                                                                                                                                                                                                                                                                                                                       |
| Temat                                                                                                                                                                                                                                                                                                                                           |
| Modelowanie                                                                                                                                                                                                                                                                                                                                     |
| Poziom trudności                                                                                                                                                                                                                                                                                                                                |
| początkujący                                                                                                                                                                                                                                                                                                                                    |
| Czas wykonania                                                                                                                                                                                                                                                                                                                                  |
| Mniej niż godzinę                                                                                                                                                                                                                                                                                                                               |
| Autorzy                                                                                                                                                                                                                                                                                                                                         |
| [WandererFan](/index.php?title=User:WandererFan&action=edit&redlink=1 "User:WandererFan (page does not exist)")                                                                                                                                                                                                                                 |
| Wersja FreeCAD                                                                                                                                                                                                                                                                                                                                  |
| 0.17 lub nowszy                                                                                                                                                                                                                                                                                                                                 |
| Pliki z przykładami                                                                                                                                                                                                                                                                                                                             |
| [Basic Part Design for v0.17 Sample](https://github.com/FreeCAD/Examples/blob/master/Basic_Part_Design_Tutorial_Example_017_Files/Basic_Part_Design_Tutorial_017.fcstd?raw=true) [Basic TechDraw Tutorial Sample](https://github.com/FreeCAD/Examples/blob/master/Basic_TechDraw_Tutorial_Example_Files/Basic_TechDraw_Tutorial.fcstd?raw=true) |
| Zobacz również                                                                                                                                                                                                                                                                                                                                  |
| _-_                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                 |

## Wprowadzenie

Ten poradnik ma za zadanie zapoznać nowego użytkownika z wybranymi narzędziami i technikami używanymi w środowisku pracy ![](/images/Workbench_TechDraw.svg) [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl"). Ten poradnik nie jest kompletnym i wyczerpującym przewodnikiem po środowisku pracy Rysunek Techniczny i nie obejmuje wielu narzędzi i możliwości. Poradnik przeprowadzi użytkownika przez kroki niezbędne do wykonania rysunków technicznych części na przykładzie [Poradnika projektowania części - podstawy](/Basic_Part_Design_Tutorial/pl "Basic Part Design Tutorial/pl").

## Nim zaczniesz

Pobierz przykładowy [plik projektu](https://github.com/FreeCAD/Examples/blob/master/Basic_Part_Design_Tutorial_Example_017_Files/Basic_Part_Design_Tutorial_017.fcstd?raw=true) z poradnika dotyczącego projektowania części _(środowisko pracy Part)_.

## Zadanie

W tym poradniku będziesz używał Środowiska pracy ![](/images/Workbench_TechDraw.svg) [Rysunek techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") do tworzenia rysunków 2D dla modelu 3D. Stworzymy wiele widoków detalu i dodamy kluczowe wymiary. Ten poradnik nie będzie wykorzystywał każdej funkcji i narzędzia dostępnego w ramach Środowiska pracy ![](/images/Workbench_TechDraw.svg) [Rysunek techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl"), ale powinien dostarczyć użytkownikowi niezbędnych podstaw do zbudowania jego wiedzy i umiejętności.

## Model detalu

![](/images/Tut17_final_refined.png)

## Tworzenie rysunku

### Rozpoczynamy

- Możesz chcieć dostosować ustawienia [konfiguracji](/TechDraw_Preferences/pl "TechDraw Preferences/pl") przed rozpoczęciem pracy. Patrz uwaga 1.
- Otwórz najpierw plik zawierający nasz detal w 3D. Następnie upewnij się, że znajdujesz się w Środowisku pracy TechDraw.
- W oknie rysunku i/lub panelu widoku połączonego będziesz wybierał elementy. Zaznaczenie w Środowisku TechDraw działa tak samo jak w oknie widoku 3D. Elementy zmieniają kolor na żółty, gdy kursor znajduje się w pozycji umożliwiającej ich wybranie, i zmieniają kolor na zielony, gdy są wybrane. Aby wybrać wiele elementów, przytrzymaj klawisz klawiatury Ctrl podczas klikania.

### Widoki i wymiarowanie

Wszystkie prace w środowisku Rysunek Techniczny rozpoczynają się od utworzenia strony. Strony są oparte na Szablonach i zawierają widoki.

Teraz mamy widok na stronę patrząc w dół na górę bryły. Jest on jednak trochę mały.

![](/images/TDTut_TopView1to1.png)

1. Wybierz utworzona stronę w [widoku połączonym](/Combo_view/pl "Combo view/pl") i przewiń do właściwości **Skala** na karcie **Dane**.
2. Zmień Skalę z 1 na **2** i naciśnij Enter. Widok zostanie powiększony.
3. Odsuń utworzony obraz od bloku dokumentacji, znajdującego się w prawym dolnym rogu strony.

![](/images/TDTut_TopView2to1.png)

Wygląda lepiej, jednak widok wciąż pozostaje trochę nudny. Dodajmy więc kilka wymiarów.

1. Wybierz górny lewy wierzchołek _(mały punkt)_ za pomocą LMB _(Lewy Przycisk Myszki)_, następnie zaznacz _(Ctrl+LMB)_ również dolny lewy wierzchołek.
2. Kliknij na ![](/images/TechDraw_VerticalDimension.svg) [Wstaw wymiar pionowy](/TechDraw_VerticalDimension/pl "TechDraw VerticalDimension/pl"). Przeciągnij tekst wymiaru z dala od korpusu.
3. Spróbuj jeszcze raz z lewym górnym i prawym górnym wierzchołkiem i ![](/images/TechDraw_HorizontalDimension.svg) [Wstaw wymiar poziomy](/TechDraw_HorizontalDimension/pl "TechDraw HorizontalDimension/pl").

![](/images/TDTut_TopView2Dims.png)

### Pola tekstowe bloku dokumentacji

Powinniśmy dodać trochę informacji do naszego rysunku.

1. Kliknij na mały zielony kwadrat obok tytułu w bloku dokumentacji. Pojawi się wyskakujące okienko, w którym można zmienić tytuł na coś bardziej sensownego.
2. Aby poćwiczyć wystarczy, że umieścisz swoje imię w polu **Designed by Name** w analogiczny sposób.

![](/images/TDTut_DocBlock.png)

Robi się coraz lepiej. Dodajmy trochę tekstu do strony.

1. Kliknij na narzędzie ![](/images/TechDraw_Annotation.svg) [Nowa Adnotacja](/TechDraw_Annotation/pl "TechDraw Annotation/pl"). Na środku strony pojawi się blok tekstowy.
2. Przeciągnij blok tekstowy z głównego widoku.
3. W drzewie dokumentu kliknij na pozycję **Annotation**, widok połączony przewiń do właściwości **Text** na zakładce **Dane**.
4. Kliknij w obszarze danych, a następnie kliknij na trzykropek po prawej stronie pola. Pojawi się wyskakujące okienko, w którym możesz zmienić tekst na coś bardziej użytecznego.

![](/images/TDTut_Annotation.png)

Zanim opuścimy tę stronę, zobaczmy, jak będzie wyglądać, gdy ją wydrukujemy.

1. Kliknij na narzędzie ![](/images/TechDraw_ToggleFrame.svg) [Przełacz widoczność ramek](/TechDraw_ToggleFrame "TechDraw ToggleFrame"). Ramki **Annotation** i **View** znikną. Możesz je odzyskać, klikając ponownie przycisk narzędzia.

![](/images/TDTut_Toggle.png)

### Wiele widoków detalu

Stwórzmy rysunek wielu widoków używając innego szablonu jako punktu startowego. Będziemy używać konwencji **Kąta pierwszego**, ale możesz też przejść na **Kąt trzeci**, jeśli jest to twoja właściwa metoda.

1. Kliknij na narzędzie ![](/images/TechDraw_PageTemplate.svg) [Wstaw nową stronę przy uzyciu szablonu](/TechDraw_PageTemplate "TechDraw PageTemplate") Pojawi się okno dialogowe wyboru plików. Wybierz plik szablonu. Będziemy używać **ANSIB.SVG**. Zostanie utworzona nowa zakładka w dokumencie projektu.
2. Wybierz **Bryłę** i **Page001** _(jeśli masz więcej niż jedną stronę w swoim dokumencie, musisz powiedzieć TechDraw, której z nich użyć)_.
3. Kliknij na przycisk ![](/images/TechDraw_ProjectionGroup.svg) [Wstaw wiele połączonych widoków](/TechDraw_ProjectionGroup/pl "TechDraw ProjectionGroup/pl"). Pojawi się dobrze znany mały widok na środku strony, a w panelu zadań pojawi się okno dialogowe.
4. Kliknij wybrane pola w sekcji Secondary Views w oknie dialogowym.
5. Przeciągnij widok oznaczony jako "Front". Wszystkie inne widoki przesuną się razem z nim.
6. Zmień skalę ze "Strona" na "Niestandardowa" i zmień wartość "Skala niestandardowa" na 2:1. Naciśnij przycisk OK.

![](/images/TDTut_ProjGroup21.png)

1. W widoku oznaczonym jako **TopLeftFront**, wybierz dwa wierzchołki na skrajnych końcach przedniej krawędzi elementu.
2. Kliknij na narzędzie ![](/images/TechDraw_LengthDimension.svg) [Wstaw nowy wymiar długości](/TechDraw_LengthDimension/pl "TechDraw LengthDimension/pl"). Przeciągnij tekst wymiarowy z dala od bryły.

### Powiązanie wymiarów z modelem 3D

Czy widzisz problem z wymiarem, który właśnie powstał?

![](/images/TDTut_NewLengthDim.png)

Od pierwszej części tego poradnika wiemy, że przedmiot posiada szerokość **53mm**, ale nasze nowe wymiary to **43,27**. Dzieje się tak dlatego, że model w widoku **TopLeftFront** jest w [projekcji izometrycznej](https://en.wikipedia.org/wiki/Isometric_projection), a naszym rysunkiem podstawowym był model w [projekcji ortogonalnej _(wielowidokowej)_](https://en.wikipedia.org/wiki/Orthographic_projection). Aby uzyskać właściwą wartość, musimy powiązać nasz wymiar bezpośrednio z modelem 3D.

1. Zwróć uwagę na nazwę naszego wadliwego wymiaru w panelu widoku połączonego. Będziemy go potrzebować za chwilę.
2. Przejdź do zakładki widoku 3D modelu i wybierz wierzchołki na końcach przedniej krawędzi elementu. Wybierz również zakładkę **Page001**.
3. Kliknij na narzędzie ![](/images/TechDraw_LinkDimension.svg) [Połącz wymiar z geometrią](/TechDraw_LinkDimension/pl "TechDraw LinkDimension/pl"). W panelu zadań zostanie otwarte okno dialogowe.
4. W oknie dialogowym, przenieś nasz wymiar z dostępnej kolumny do wybranej kolumny. Naciśnij przycisk OK.
5. Wróć na stronę001. Nasz wymiar powinien teraz odczytać prawidłową wartość 53. _(Jeśli nadal widzisz 43.27, może być konieczne wciśnięcie przycisku Przelicz lub trochę przesuń wartość wymiaru na rysunku, aż się zmieni)_.

## Dalsze postępowanie

W tym samouczku nauczyłeś się wystarczająco dużo o Środowisku pracy ![](/images/Workbench_TechDraw.svg) [TechDraw](/TechDraw_Workbench/pl "TechDraw Workbench/pl"), aby stworzyć taki rysunek _(autor: [NormandC](/User:Normandc "User:Normandc"))_. Uwaga 2.

![](/images/TDTut_FC018_TechDraw_Dim_Iso_View_01_NC.png)

![](/images/Workbench_TechDraw.svg) [TechDraw](/TechDraw_Workbench/pl "TechDraw Workbench/pl") oferuje o wiele więcej funkcjonalności - widoki przekrojów, widoki szczegółów, symbole Svg, obrazy, kreskowanie powierzchni.

## Uwagi

1. W tym [wpisie na forum](https://www.forum.freecadweb.org/viewtopic.php?f=3&t=30083#p248189) znajduje się doskonały zestaw sugerowanych preferencji.
2. Ten rysunek został wykonany w wersji **0.18**. Pokazuje wymiary w odpowiednim formacie dla widoku izometrycznego. W wersji **0.17** linie pomocnicze będą prostopadłe do krawędzi, a nie wyrównane z osiami.

## Dodatkowe zasoby

- Plik FreeCAD tego ćwiczenia do porównania _(wykonany w wersji programu 0.17)_ [Pobierz](https://github.com/FreeCAD/Examples/blob/master/Basic_TechDraw_Tutorial_Example_Files/Basic_TechDraw_Tutorial.fcstd?raw=true)

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_TechDraw_Tutorial/pl&oldid=1252085>"
