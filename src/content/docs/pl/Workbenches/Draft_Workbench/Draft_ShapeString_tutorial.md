---
title: Poradnik Rysunek Roboczy kształt z tekstu
---

|                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Ćwiczenie                                                                                                                                                    |
| Temat                                                                                                                                                        |
| Projekt produktu                                                                                                                                             |
| Poziom trudności                                                                                                                                             |
| początkujący                                                                                                                                                 |
| Czas wykonania                                                                                                                                               |
| 30 minut                                                                                                                                                     |
| Autorzy                                                                                                                                                      |
| r-frank oraz vocx                                                                                                                                            |
| Wersja FreeCAD                                                                                                                                               |
| 0.17 i nowszy                                                                                                                                                |
| Pliki z przykładami                                                                                                                                          |
| [Draft_Shapestring_Text](https://github.com/FreeCAD/Examples/blob/master/Draft_Shapestring_Tutorial_Examples/Draft_Shapestring_Tutorial_Text.FCStd?raw=true) |
| Zobacz również                                                                                                                                               |
| _-_                                                                                                                                                          |
|                                                                                                                                                              |

## Wprowadzenie

Ten poradnik został pierwotnie napisany przez Rolanda Franka _(†2017, r-frank)_, a następnie przepisany i zilustrowany przez vocx.

Ten samouczek opisuje metodę tworzenia tekstu 3D i używania go z obiektami bryłowymi w ![](/images/Workbench_Part.svg) środowiska [Część](/Part_Workbench/pl "Part Workbench/pl"). Omówimy jak

- wstawiać obrysowany tekst za pomocą narzędzia ![](/images/Draft_ShapeString.svg) [kształt z tekstu](/Draft_ShapeString/pl "Draft ShapeString/pl"),
- wyciągnięcie go do postaci bryły 3D za pomocą narzędzia ![](/images/Part_Extrude.svg) [Wyciągnij](/Part_Extrude/pl "Part Extrude/pl"),
- pozycjonować go w przestrzeni 3D za pomocą [umiejscowienia](/Placement "Placement"), oraz ![](/images/Draft_Move.svg) [przesunięcie](/Draft_Move/pl "Draft Move/pl") _(używa szkicu jako geometrii pomocniczej)_, oraz
- wygrawerować tekst poprzez zastosowanie funkcji logicznej ![](/images/Part_Cut.svg) [Wytnij](/Part_Cut/pl "Part Cut/pl").

Aby użyć funkcji Kształt z tekstu wewnątrz środowiska pracy ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"), proces jest zasadniczo taki sam jak w przypadku środowiska pracy Część, ale Kształt z tekstu jest umieszczany wewnątrz [Zawartości](/PartDesign_Body/pl "PartDesign Body/pl") środowiska Projekt Części w celu jego wyciągnięcia. Przejdź do końca tego samouczka, aby uzyskać więcej informacji.

![](/images/08_T04_Part_ShapesString_Extrude_final_cut.png)

Ostateczny model wygrawerowanego tekstu.

Środowisko pracy [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") jest krótko używane do narysowania linii pomocniczej. Więcej informacji o narzędziach tego środowiska pracy można znaleźć na stronach:

- [Podstawy dla środowiska pracy Szkicownik](/Basic_Sketcher_Tutorial/pl "Basic Sketcher Tutorial/pl")
- [Poradnik do szkicownika](/Sketcher_Lecture/pl "Sketcher Lecture/pl")

## Sposób postępowania

1. Otwórz FreeCAD, utwórz nowy pusty dokument za pomocą **Plik → ![](/images/Std_New.svg) [Nowy](/Std_New/pl "Std New/pl")** i przejdź do środowiska pracy [Część](/Part_Workbench/pl "Part Workbench/pl").

: 1.1. Naciśnij przycisk ![](/images/Std_ViewIsometric.svg) [Widok izometryczny](/Std_ViewIsometric/pl "Std ViewIsometric/pl") lub naciśnij 0 na klawiaturze numerycznej, aby zmienić widok na izometryczny w celu lepszej wizualizacji brył 3D.
: 1.2. Naciśnij przycisk ![](/images/Std_ViewFitAll.svg) [Dopasuj wszystko](/Std_ViewFitAll/pl "Std ViewFitAll/pl") za każdym razem, gdy dodajesz obiekty, aby przesuwać i powiększać [widok 3D](/3D_view/pl "3D view/pl") tak, aby wszystkie elementy były widoczne w widoku.
: 1.3. Przytrzymaj Ctrl podczas klikania, aby zaznaczyć wiele elementów. Jeśli wybrałeś coś źle lub chcesz usunąć zaznaczenie, kliknij na puste miejsce w oknie [widoku 3D](/3D_view/pl "3D view/pl").

## Utwórz kształt podstawowy

2. Wstaw prostopadłościan, klikając ![](/images/Part_Box.svg) [Sześcian](/Part_Box/pl "Part Box/pl").

: 2.1. Wybierz obiekt `Sześcian` w [widoku drzewa](/Tree_view/pl "Tree view/pl").
: 2.2. Zmień wymiary w zakładce **Dane** [edytora właściwości](/Property_editor/pl "Property editor/pl").
: 2.3. Zmień wartość **Szerokość** na `31 mm`.

3. Utwórz fazę.

: 3.1. Wybierz górną krawędź (`Edge6`) na przedniej powierzchni `sześcianu` w oknie [widoku 3D](/3D_view/pl "3D view/pl").
: 3.2. Naciśnij ![](/images/Part_Chamfer.svg) [Sfazowanie ...](/Part_Chamfer/pl "Part Chamfer/pl").
: 3.3. W [panelu zadań](/Task_panel/pl "Task panel/pl") **Fazowanie krawędzi** przejdź do **Zaznaczenie**, wybierz **Wybierz krawędzie**. Jako **Typ sfazowania** wybierz `Wymiary równe`, a następnie ustaw **Długość** na `5 mm`.
: 3.4. Naciśnij OK. Spowoduje to utworzenie obiektu `Chamfer`.
: 3.5. W [widoku drzewa](/Tree_view/pl "Tree view/pl") wybierz obiekt `Chamfer`, w zakładce **Widok** zmień wartość **Szerokość linii** na `2.0`.

![](/images/01_T04_Part_Cube_base_long.png)

Obiekt bazowy utworzony z sześcianu i operacji fazowania.

## Wstaw obiekt kształt z tekstu

4. Przełącz się do środowiska [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl").

: 4.1. Upewnij się, że nic nie jest zaznaczone w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl").
: 4.2. Ustal płaszczyznę roboczą na XY _(Góra)_ klikając na ![](/images/Draft_SelectPlane.svg) [Wyborze płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl") i naciskając ![](/images/View-top.svg) [Widok od góry (XY)](/Std_ViewTop/pl "Std ViewTop/pl").

5. Wstaw tekst "FreeCAD".

: 5.1. Kliknij ![](/images/Draft_ShapeString.svg) [Kształt z tekstu](/Draft_ShapeString/pl "Draft ShapeString/pl").
: 5.2. Zmień **X** na `0 mm`.
: 5.3. Zmień **Y** na `0 mm`.
: 5.4. Zmień **Z** na `0 mm`.
: 5.5. Lub naciśnij Zresetuj współrzędne punktu.
: 5.6. Zmień **Ciąg znaków** na `FreeCAD`. Zmień **Wysokość** na `5 mm`. Zmień **Śledzenie** na `0 mm`.
: 5.7. Upewnij się, że **Plik czcionki** wskazuje na prawidłową czcionkę (np. `/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf` lub `C:/Windows/Fonts/arial.ttf`). Naciśnij przycisk wielokropka …, aby otworzyć okno dialogowe systemu operacyjnego w celu znalezienia czcionki.

    :   *Uwaga:* Więcej szczegółów na temat pracy z czcionkami można znaleźć na stronie [Kształt z tekstu](/Draft_ShapeString/pl#Opcje "Draft ShapeString/pl").

: 5.8. Naciśnij OK. Spowoduje to utworzenie obiektu `Kształt z tekstu`.
: 5.9. Ponownie przelicz dokument, naciskając ![](/images/Std_Refresh.svg) [Odśwież](/Std_Refresh/pl "Std Refresh/pl").
: 5.10. W [widoku drzewa](/Tree_view/pl "Tree view/pl") wybierz obiekt `Kształt z tekstu`, w zakładce **Widok** zmień wartość **Szerokość linii** na `2.0`.
: 5.11. W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") wybierz obiekt `Chamfer`, w zakładce **Widok** zmień wartość **Widoczność** na `Fałsz` lub naciśnij Spacje na klawiaturze. Spowoduje to ukrycie obiektu, dzięki czemu będzie lepiej widoczny obiekt `Kształt z tekstu`.
: 5.12. Aby zobaczyć Kształt z tekstu z góry, zmień widok, naciskając ![](/images/View-top.svg) [Od góry (XY)](/Std_ViewTop/pl "Std ViewTop/pl"), lub 2 na klawiaturze.
: 5.13. Aby przywrócić widok izometryczny, naciśnij ![](/images/Std_ViewIsometric.svg) [Widok izometryczny](/Std_ViewIsometric/pl "Std ViewIsometric/pl") lub 0 na klawiaturze.

![](/images/02_T04_Part_ShapeString.png)

Tekst utworzony jako obiekt Kształt z tekstu, czyli jako zbiór krawędzi na płaszczyźnie.

## Utwórz bryłę tekstu 3D

6. Przełącz się z powrotem do środowiska [Część](/Part_Workbench/pl "Part Workbench/pl").

: 6.1. W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") wybierz obiekt `Kształt z tekstu`, a następnie naciśnij ![](/images/Part_Extrude.svg) [Wyciągnij ...](/Part_Extrude/pl "Part Extrude/pl").
: 6.2. W [Panelu zadań](/Task_panel/pl "Task panel/pl") **Wyciągnięcie** przejdź do sekcji **Kierunek**, wybierz **Wzdłuz wektora normalnej**. W sekcji **Długość** ustaw **Wzdłuż** na `1 mm`. Zaznacz też opcję **Utwórz bryłę**.
: 6.3. Naciśnij OK. Spowoduje to utworzenie obiektu `Wyciągnięcie`.
: 6.4. W [widok drzewa](/Tree_view/pl "Tree view/pl") wybierz `Wyciągnięcie`, w zakładce **Widok** zmień wartość **Szerokość linii** na `2.0`.

![](/images/03_T04_Part_ShapeString_Extrude.png)

Tekst utworzony jako Kształt z tekstu i przekształcony w bryłę przez wyciągnięcie.

## Wstaw szkic pomocniczy do pozycjonowania

Teraz narysujemy prosty szkic, który zostanie użyty jako geometria pomocnicza do pozycjonowania obiektu wytłoczenia kształtu z tekstu.

7. W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") wybierz obiekt `Wyciągnięcie` i naciśnij Spacje na klawiaturze, aby uczynić go niewidocznym.

8. Przejdź do środowiska pracy [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl").

9. W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") wybierz obiekt `Wyciągnięcie` i naciśnij Spacja na klawiaturze, aby go wyświetlić.

: 9.1. Wybierz nachyloną powierzchnię utworzoną przez operację fazowania (`Face3`).
: 9.2. Kliknij ![](/images/Sketcher_NewSketch.svg) [Utwórz szkic](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl"). W oknie dialogowym **Dołączenie szkicu** wybierz `Płaska powierzchnia` i naciśnij OK.
: 9.3. Widok powinien automatycznie dostosować się tak, aby ujęcie widoku było równoległe do wybranej ściany.
: 9.4. Narysuj poziomą linię w ogólnym położeniu na górze ściany. Długość nie jest ważna, interesuje nas tylko jej położenie.
: 9.5. Zwiąż lewy punkt końcowy tak, aby znajdował się `2.5 mm` od lokalnej osi X i od lokalnej osi Y, używając ![](/images/Sketcher_ConstrainDistanceX.svg) [Zwiąż w poziomie](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl") i ![](/images/Sketcher_ConstrainDistanceY.svg) [Zwiąż w pionie](/Sketcher_ConstrainDistanceY/pl "Sketcher ConstrainDistanceY/pl").
: 9.6. Ponieważ szkic jest tylko obiektem pomocniczym, nie musimy go w pełni wiązać. Możesz to zrobić, jeśli chcesz, przypisując stałą odległość, powiedzmy `20 mm`, ponownie za pomocą ![](/images/Sketcher_ConstrainDistanceX.svg) [Zwiąż w poziomie](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl").
: 9.7. Zamknij szkic.

![](/images/04_T04_Part_ShapeString_support_sketch.png)

Linia z wiązaniami tworzona za pomocą szkicownika.

![](/images/05_T04_Part_ShapeString_support_sketch_3D.png)

Linia szkicu utworzona na górnej powierzchni bryły, używana jako odniesienie do pozycjonowania wyciągniętego tekstu.

## Pozycjonowanie bryły tekstu w przestrzeni 3D

10. W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") wybierz obiekt `Wyciągnięcie` i naciśnij Spacje na klawiaturze, aby uczynić go niewidocznym.

11. Po zaznaczeniu obiektu `Wyciągnięcie`, w zakładce **Dane** [edytora właściwości](/Property_editor/pl "Property editor/pl"), kliknij na wartość **Umiejscowienie**, aby po prawej stronie pojawił się przycisk trzykropka … i kliknij na ten przycisk.

: 11.1. Zaznacz opcję **Zastosuj zmiany przyrostowe**.
: 11.2. Zmień **Obrót** na `Oś obrotu z zadanym kątem`; **Oś** na `Z` (ustawiając wartości `X`, `Y` i `Z` pól wprowadzania wartości dla osi odpowiednio na `0`, `0` i `1`, `Z` jest trzecim polem wprowadzania) i **Kąt** na `90°`, a następnie kliknij Zastosuj. Spowoduje to zastosowanie obrotu wokół osi Z i wyzerowanie pola **Kąt**.
: 11.3. Zmień **Obrót** na `Oś obrotu z zadanym kątem`; **Oś** na `Y` (ustawiając wartości `X`, `Y` i `Z` pól wprowadzania osi odpowiednio na `0`, `1` i `0`) oraz **Kąt** na `45°`, a następnie kliknij Zastosuj. Spowoduje to zastosowanie obrotu wokół osi Y i wyzerowanie pola **Kąt**.
: 11.4. Kliknij przycisk OK, aby zamknąć okno dialogowe.

12. Przełącz się ponownie do środowiska [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl").

: 12.1. Przełącz na styl rysowania "Szkieletowy" za pomocą pozycji z menu **Widok → [Styl kreślenia](/Std_DrawStyle/pl "Std DrawStyle/pl") → ![](/images/DrawStyleWireFrame.svg) Szkieletowy**, lub naciśnij przycisk ![](/images/DrawStyleWireFrame.svg) [Szkieletowy](/Std_DrawStyle/pl "Std DrawStyle/pl") na pasku narzędzi. Pozwoli to zobaczyć obiekty znajdujące się za innymi obiektami.
: 12.2. Upewnij się, że metoda [przyciągania](/Draft_Snap/pl "Draft Snap/pl") "Przyciągnij do punktu końcowego" jest aktywna. Można to zrobić z menu **Rysunek Roboczy → Przyciąganie → ![](/images/Draft_Snap_Lock.svg) [Przełącz przyciąganie](/Draft_Snap_Lock/pl "Draft Snap Lock/pl")**, a następnie **→ ![](/images/Draft_Snap_Endpoint.svg) [Przyciągnij do punktu końcowego](/Draft_Snap_Endpoint/pl "Draft Snap Endpoint/pl")**, lub naciskając przycisk ![](/images/Draft_Snap_Lock.svg) [Przełącz przyciąganie](/Draft_Snap_Lock/pl "Draft Snap Lock/pl") i ![](/images/Draft_Snap_Endpoint.svg) [Przyciągnij do punktu końcowego](/Draft_Snap_Endpoint/pl "Draft Snap Endpoint/pl") na pasku narzędzi przyciągania.

13. W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") wybierz `Wyciągnięcie`.

: 13.1. Kliknij ![](/images/Draft_Move.svg) [Przesuń](/Draft_Move/pl "Draft Move/pl").
: 13.2. W oknie [widoku 3D](/3D_view/pl "3D view/pl") kliknij w lewy górny róg obiektu `Wyciągnięcia` _(1)_, a następnie kliknij w skrajny lewy punkt linii narysowanej szkicownikiem _(2)_.
: 13.3. Jeśli opcja ![](/images/Draft_Snap_Endpoint.svg) [Przyciągnij do punktu końcowego](/Draft_Snap_Endpoint/pl "Draft Snap Endpoint/pl") jest aktywna, gdy tylko zbliżysz kursor do wierzchołka, powinieneś zobaczyć, że dokładnie do niego przylega.

_Uwaga:_ jeśli masz problemy z przyciąganiem do wierzchołków, upewnij się, że aktywne jest tylko narzędzie ![](/images/Draft_Snap_Endpoint.svg) [Przyciągnij do punktu końcowego](/Draft_Snap_Endpoint/pl "Draft Snap Endpoint/pl"). Posiadanie wielu metod przyciągania aktywnych w tym samym czasie może utrudnić wybór właściwej funkcji.

: 13.4. Wyciągnięty tekst powinien teraz znajdować się wewnątrz obiektu `Sfazowanie`.

![](/images/06_T04_Part_ShapeString_move.svg)

Wytłoczony kształt z tekstu powinien zostać przesunięty do pozycji naszkicowanej linii, która leży na powierzchni Zawartości podstawy.

![](/images/07_T04_Part_ShapesString_Extrude_in_place.png)

Wyciągnięty Kształt z tekstu umieszczony w obiekcie `Sfazowanie`.

## Tworzenie wygrawerowanego tekstu

14. Przełącz się z powrotem do środowiska pracy [Część](/Part_Workbench/pl "Part Workbench/pl").

: 14.1. Przełącz na styl rysowania "Domyślny" za pomocą **Widok → [Styl kreślenia](/Std_DrawStyle/pl "Std DrawStyle/pl") → ![](/images/DrawStyleAsIs.svg) Domyślny**, lub naciśnij przycisk ![](/images/DrawStyleAsIs.svg) [Domyślny](/Std_DrawStyle/pl "Std DrawStyle/pl") na pasku narzędzi widoku. Spowoduje to wyświetlenie wszystkich obiektów z normalnym cieniowaniem i kolorem.
: 14.2. W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") zaznacz `Szkic` i naciśnij klawisz Spacja na klawiaturze, aby uczynić go niewidocznym.

15. W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") wybierz najpierw obiekt `Sfazowanie`, a następnie `Wyciągnięcie`.

: 15.1. Następnie wciśnij ![](/images/Part_Cut.svg) [Wytnij](/Part_Cut/pl "Part Cut/pl"). Spowoduje to utworzenie obiektu `Wycięcie`. To jest ostateczny obiekt.

Kolejność zaznaczania obiektów jest ważna dla operacji cięcia. Obiekt bazowy jest zaznaczany jako pierwszy, a obiekt odejmowany na końcu.

: 15.2. W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") wybierz obiekt `Wycięcie`, w zakładce **Widok** zmień wartość **Szerokość Linii** na `2.0`.

![](/images/08_T04_Part_ShapesString_Extrude_final_cut.png)

Końcowy model zaokrąglonego sześcianu z wyrzeźbionym tekstem utworzonym z operacji Kształt z tekstu, Wyciągnięcie i Wycięcie funkcją logiczną.

## Grawerowanie tekstu 3D za pomocą środowiska Projekt Części

Podobny proces do opisanego powyżej można wykonać za pomocą środowiska pracy [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").

1. Najpierw utwórz obiekt ![](/images/Draft_ShapeString.svg) [Kształt z tekstu](/Draft_ShapeString/pl "Draft ShapeString/pl") jako pierwszy.
2. Utwórz ![](/images/PartDesign_Body_Tree.svg) [Zawartość](/PartDesign_Body/pl "PartDesign Body/pl") środowiska pracy Projekt Części, uaktywnij ją i dodaj bryłę bazową poprzez dodanie Bryły pierwotnej lub użycie Szkicu i wyciągnięcie go za pomocą narzędzia ![](/images/PartDesign_Pad.svg) [Wyciągnij](/PartDesign_Pad/pl "PartDesign Pad/pl") środowiska Projekt Części.
3. Przenieś obiekt `Kształt z tekstu` do aktywnej zawartości.
4. Dołącz obiekt `Kształt z tekstu` do jednej ze ścian bryły lub ![](/images/PartDesign_Plane.svg) [Płaszczyzny](/PartDesign_Plane/pl "PartDesign Plane/pl"), używając narzędzia ![](/images/Part_EditAttachment.svg) [Dołączenie](/Part_EditAttachment/pl "Part EditAttachment/pl").
5. Teraz utwórz ![](/images/PartDesign_Pad.svg) [Wyciągnięcie](/PartDesign_Pad/pl "PartDesign Pad/pl") lub ![](/images/PartDesign_Pocket.svg) [Kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl") z obiektu `Kształt z tekstu`, w celu wytworzenia odpowiednio dodającej lub odejmującej [cechy](/PartDesign_Feature/pl "PartDesign Feature/pl") podstawowej bryły.

Zobacz wątek na forum, [Jak używać obiektu Kształt z tekstu w środowisku Projekt Części](https://forum.freecadweb.org/viewtopic.php?f=3&t=36623).

## Uwagi

- Aby utworzyć zakrzywiony tekst można użyć makropolecenia ![](/images/FCCircularTextButtom.png) [FCCircularText](/Macro_FCCircularText/pl "Macro FCCircularText/pl").
- Aby zaimportować tekst z pliku SVG, zapoznaj się z poradnikiem [Import tekstu i geometrii z programu Inkscape](/Import_text_and_geometry_from_Inkscape/pl "Import text and geometry from Inkscape/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_ShapeString_tutorial/pl&oldid=1529383>"
