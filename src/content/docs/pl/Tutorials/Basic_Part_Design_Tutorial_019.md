---
title: Poradnik Podstawy dla środowiska pracy Projekt Części 019
---

|                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ćwiczenie                                                                                                                                                                                                                                                                                           |
| Temat                                                                                                                                                                                                                                                                                               |
| Modelowanie                                                                                                                                                                                                                                                                                         |
| Poziom trudności                                                                                                                                                                                                                                                                                    |
| Początkujący                                                                                                                                                                                                                                                                                        |
| Czas wykonania                                                                                                                                                                                                                                                                                      |
| 1 godzina                                                                                                                                                                                                                                                                                           |
| Autorzy                                                                                                                                                                                                                                                                                             |
| Carlo Dormeletti ([onekk](/User:Onekk "User:Onekk")) Ed Williams ([edwilliams16](/index.php?title=User:Edwilliams16&action=edit&redlink=1 "User:Edwilliams16 (page does not exist)")) Roy 043 ([Roy 043](/index.php?title=User:Roy_043&action=edit&redlink=1 "User:Roy 043 (page does not exist)")) |
| Wersja FreeCAD                                                                                                                                                                                                                                                                                      |
| 0.19 lub nowszy                                                                                                                                                                                                                                                                                     |
| Pliki z przykładami                                                                                                                                                                                                                                                                                 |
| _Nie dołączono_                                                                                                                                                                                                                                                                                     |
| Zobacz również                                                                                                                                                                                                                                                                                      |
| [Poradnik: Podstawy dla środowiska pracy Projekt Części](/Basic_Part_Design_Tutorial/pl "Basic Part Design Tutorial/pl")                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                     |

## Wprowadzenie

_Poradnik ten to jest uaktualniona wersja poradnika [Podstawy dla środowiska pracy Projekt Części](/Basic_Part_Design_Tutorial/pl "Basic Part Design Tutorial/pl")_.

![](/images/Pd_tut_final_solid.png)

Ten poradnik wprowadza użytkowników do środowiska pracy [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"). W tym poradniku stworzymy model przestrzennej bryły części pokazanej na powyższym obrazku. W [rysunku](/TechDraw_Workbench/pl "TechDraw Workbench/pl") na końcu tego akapitu podane są wszystkie niezbędne wymiary do wykonania zadania.

Rozpoczniemy od utworzenia podstawowego kształtu bryły ze szkicu bazowego, a następnie będziemy rozbudowywać ten kształt, dodając tzw. cechy. Cechy te będą dodawać materiał do bryły lub usuwać go z niej za pomocą dodatkowych szkiców i towarzyszących im operacji.

Zastosujemy niektóre z technik opisanych w artykule [Porady dotyczące tworzenia stabilnych modeli](/Feature_editing/pl#Porady_dotycz.C4.85ce_tworzenia_stabilnych_modeli "Feature editing/pl")

- Użyjemy **szkicu głównego**
- **Nazwane wiązania** posłużą do przechowywania wymiarów, do których będzie można się odwołać w dalszej części budowy modelu.  
  Na przykład, aby zmienić szerokość modelu z 53 mm, jak na rysunku technicznym, na 55mm wystarczy zmodyfikować wartość **Długość'** odpowiedniego **nazwanego wiązania** w **szkicu głównym**, a cały model odpowiednio się zmodyfikuje. Jest to projektowanie "parametryczne" w działaniu.
- **Geometrie zewnętrzne** są potencjalnie objęte [Problemom nazewnictwa topologicznego](/Topological_naming_problem/pl "Topological naming problem/pl"). Będziemy ich używać tylko wtedy, gdy będzie to absolutnie konieczne i będziemy starali się odwoływać do najbardziej **stabilnych** dostępnych elementów. Odwoływanie się do krawędzi i wierzchołków szkiców jest zwykle bardziej stabilne niż odwoływanie się do krawędzi i wierzchołków wygenerowanej geometrii bryłowej.

Ten poradnik nie będzie wykorzystywał wszystkich funkcji i narzędzi dostępnych w środowisku pracy Projekt Części, ale zapewni podstawy, na których użytkownicy mogą budować swoją wiedzę i umiejętności.

Zapraszamy do sygnalizowania wszelkich błędów i problemów w tym wątku na forum: [Nowy poradnik środowiska Projekt Części dla FC 019 i 020](https://forum.freecad.org/viewtopic.php?f=36&t=73235).

![](/images/Tutorial_Drawing_Sheet.png)

## Uwagi wstępne

- Ten poradnik zawiera szczegółowe instrukcje, gdy opisuje daną operację po raz pierwszy. Kolejne operacje będą miały bardziej zwięzły opis. W razie wątpliwości należy znaleźć operację, która zawiera bardziej szczegółowy opis. Na przykład podczas tworzenia szkicu po raz pierwszy proces wyboru płaszczyzny szkicu będzie szczegółowo wyjaśniony, dla kolejnych szkiców nie będzie.
- Wszystkie wymienione narzędzia są dostępne z pasków narzędziowych oraz z menu.
- Ten poradnik zakłada, że opcja ![](/images/CheckBoxTrue.svg) Wiązania automatyczne w oknie **Edycja kontrolek** Szkicownika jest zaznaczona. Dzięki temu niektóre wiązania zostaną zastosowane automatycznie. W przeciwnym razie trzeba będzie zastosować je samodzielnie.
- Jeśli solver szkicownika wykryje zbędne wiązanie, zmieni kolor szkicu na pomarańczowy. Przed dodaniem kolejnych wiązań należy usunąć nadmiarowe wiązania. Nadmiarowe wiązania są widoczne w panelu zadań, kliknij niebieskie odniesienie i naciśnij Usuń.
- Kolor wymieniony powyżej jest kolorem domyślnym, można go zmienić w preferencjach. To samo dotyczy innych kolorów wymienionych w tym poradniku.
- Z narzędzia do rysowania Szkicownik wychodzimy naciskając klawisz Esc lub klikając prawym przyciskiem myszy pusty obszar okna [widoku 3D](/3D_view/pl "3D view/pl"). Kursor myszki zmieni swój wygląd na standardowy kursor ze strzałką. Jeśli naciśniesz Esc jeszcze raz, wyjdziesz z trybu edycji szkicu. Aby powrócić do edytora, kliknij zakładkę Model, a następnie kliknij dwukrotnie element Szkic w [Widoku drzewa](/Tree_view/pl "Tree view/pl") lub kliknij go prawym przyciskiem myszki i wybierz **Edycja szkicu** z menu kontekstowego. Aby uniknąć opuszczania trybu edycji po zbyt częstym naciskaniu klawisza Esc, zmień preferencje **Klawisz Esc umożliwia wyjście z trybu edycji szkicu**, zobacz stronę [Ustawienia szkicownika](/Sketcher_Preferences/pl#Og.C3.B3lne "Sketcher Preferences/pl").
- Możliwe jest, że niektóre elementy w panelu zadań, na przykład przycisk OK, nie są widoczne, jeśli panel nie jest wystarczająco szeroki. Możesz go poszerzyć, przeciągając jego prawy brzeg. Umieść kursor myszki nad krawędzią, gdy kursor zmieni wygląd na dwukierunkową strzałkę, przytrzymaj lewy przycisk myszki i przeciągnij.
- Przycisk >> na pasku narzędzi wskazuje, że pasek narzędzi jest skrócony. Możesz użyć wspomnianego przycisku, aby rozwinąć, lub przenieść pasek narzędzi w miejsce, gdzie jest więcej miejsca. Aby przesunąć pasek narzędziowy umieść kursor myszki nad uchwytem przed pierwszą ikoną na pasku narzędziowym, przytrzymaj lewy przycisk myszki i przeciągnij.
- W trakcie cyklu rozwoju v0.21 wprowadzono nową ikonę dla narzędzia [Utwórz polilinię](/Sketcher_CreatePolyline/pl "Sketcher CreatePolyline/pl"): ![](/images/Sketcher_CreatePolyline.svg). Stara ikona wygląda tak: [![](/images/Sketcher_CreatePolyline_rel_0.20.svg)](/Sketcher_CreatePolyline/pl "Sketcher CreatePolyline/pl "). W tym poradniku będziemy używać nowej ikony.
- Zapoznaj się z informacjami na stronie [Koncepcje środowiska Projekt Części](/Part_and_PartDesign/pl#Koncepcje_.C5.9Brodowiska_Projekt_Cz.C4.99.C5.9Bci "Part and PartDesign/pl"), aby zapoznać się z pewnymi podstawami koncepcyjnymi.
- Zapoznaj się z informacjami na stronie [środowisko pracy Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), aby uzyskać bardziej szczegółowe wyjaśnienie niektórych terminów używanych tutaj.

## Rozpoczynamy

Najpierw upewnij się, że właśnie jesteś w środowisku pracy ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"). W razie potrzeby wybierz go z listy rozwijanej [Środowisk pracy](/Std_Workbench/pl "Std Workbench/pl"). Po uruchomieniu go należy utworzyć nowy dokument, jeśli jeszcze tego nie zrobiłeś. Dobrym nawykiem jest częste zapisywanie swojej pracy, dlatego najpierw zapisz nowy dokument, nadając mu dowolną nazwę.

Cała praca w ramach środowiska pracy Projekt Części zaczyna się od [Zawartości](/Glossary#Body "Glossary"). Kliknij ![](/images/PartDesign_Body.svg) [Utwórz zawartość](/PartDesign_Body/pl "PartDesign Body/pl"), aby ją utworzyć i aktywować. Zauważ, że możliwe jest również pominięcie tego kroku: podczas tworzenia szkicu za pomocą narzędzia środowiska Projekt Części ![](/images/PartDesign_NewSketch.svg) [Utwórz szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl"), jeśli nie zostanie znaleziona żadna istniejąca zawartość, nowa zostanie automatycznie utworzona i aktywowana.

## Szkic główny

Szkic główny zawiera prostokątny kształt podstawy modelu oraz dwa _nazwane wiązania_, które dostarczą prawidłowe wymiary do innych części modelu: **długość**, która będzie zawierać 53 mm _(wynik dodania wymiaru 39 mm do dwóch boków 7 mm)_, oraz **szerokość**, która będzie zawierać 26 mm. Aby móc wykorzystać symetrię modelu w dalszych krokach, górna krawędź prostokąta zostanie wyśrodkowana względem punktu odniesienie położenia za pomocą wiązania symetrycznego.

**Sketch**

![](/images/Pd_start_00.png)

Fig: MS1

![](/images/Pd_tut_sketch_start.png)

Fig: MS2

![](/images/Pd_tut_sel_points_h.png)

Fig: MS3

![](/images/Pd_tut_rect_h_dim_end.png)

Fig: MS4

![](/images/Pd_tut_rect04.png)

Fig: MS5

![](/images/Pd_tut_rect_v3.png)

Fig: MS6

**Krok A: Utwórz szkic**

1. Kliknij ![](/images/PartDesign_NewSketch.svg) [Utwórz szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl"). Spowoduje to utworzenie szkicu w obrębie właśnie utworzonej bryły. Będzie on nosił nazwę **Szkic**.
2. Otworzy się panel zadań podobny do tego z **Rys. MS1**, w którym należy wybrać, do której płaszczyzny zostanie dołączony szkic.
   1. Wybierz **XY_Plane** z listy lub wybierz tę płaszczyznę w oknie [widoku 3D](/3D_view/pl "3D view/pl").
   2. Kliknij OK.
3. FreeCAD automatycznie przełączy się na środowisko pracy ![](/images/Workbench_Sketcher.svg) [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl")
4. Szkic jest otwierany w trybie edycji: zobaczysz coś w rodzaju **Rys: MS2**. Wskazane są osie X _(linia czerwona)_ i Y _(linia zielona)_ szkicu oraz jego punkt odniesienia położenia _(czerwony punkt)_.

**Krok B: Dodaj geometrię**

1. Kliknij ![](/images/Sketcher_CreateRectangle.svg) [Utwórz prostokąt](/Sketcher_CreateRectangle/pl "Sketcher CreateRectangle/pl").
2. Podczas gdy narzędzie jest aktywne kursor ma następujący wygląd:  
   ![](/images/Pd_tut_rec_cursor.png)
3. Wybierz dwa punkty, aby utworzyć prostokąt z grubsza wyśrodkowany wokół **osi Y** podobnie jak na **Rys: MS3**. Uwaga:
   - Nie umieszczaj punktów na osi, ponieważ Solver automatycznie zastosuje wiązania, które później stworzą problemy.
   - Wymiary prostokąta są w tym momencie nieistotne. Zostaną one przypisane za pomocą więzów w późniejszym kroku.
4. Po zakończeniu naciśnij Esc lub kliknij prawym przyciskiem myszy, aby zakończyć pracę z narzędziem.

**Krok C: Przypisz wiązanie poziome**

1. Wybierz linię zdefiniowaną przez **P2** i **P3** w **Rys: MS3**. Etykiety takie jak P1, P2 itd. nie będą się pojawiały w szkicach, zostały dodane do odniesienia na rysunkach w tym poradniku.
2. Kliknij ![](/images/Sketcher_ConstrainDistanceX.svg) [Zwiąż odległość poziomą](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl"):
   1. Pomiędzy punktami końcowymi wybranej linii pojawi się wymiar. Ten wymiar to aktualna wartość długości.
   2. Dodatkowo pojawi się okno dialogowe:

![](/images/Pd_tut_rect03.png)

1. 1. Przypisz **Długość = 53 mm**
   2. Aby można było później odwołać się do tego wymiaru potrzebna jest jego nazwa. Możesz użyć dowolnej nazwy, musi być ona tylko unikalna w obrębie szkicu. Przypisz **Nazwę = długość**.
   3. Kliknij OK.
2. Wynik powinien być podobny do **Rys. MS4**

**Krok D: Przypisz wiązanie symetrii**

1. Wybierz punkty **P2** i **P3** prostokąta.
2. Wybierz **punkt odniesienia położenia** szkicu. Uwaga: kolejność wyboru punktów jest ważna.
3. Kliknij ![](/images/Sketcher_ConstrainSymmetric.svg) [Wiązanie symetrii](/Sketcher_ConstrainSymmetric/pl "Sketcher ConstrainSymmetric/pl").
4. W końcu otrzymasz coś, co wygląda jak **rysunek: MS5**.

'_Krok E: Przypisz wiązanie pionowe_

: Przypisz pionowe wiązanie odległości, stosując tę samą procedurę, która została użyta dla poprzednio zastosowanego poziomego wiązania odległości:

1. Wybierz linię zdefiniowaną przez **P3** i **P4** w **Rys: MS3**.
2. Kliknij ![](/images/Sketcher_ConstrainDistanceY.svg) [Zwiąż odległość pionową](/Sketcher_ConstrainDistanceY/pl "Sketcher ConstrainDistanceY/pl"):
   1. Przypisz **Długość = 26 mm**
   2. Przypisz **Nazwę = szerokość**.
   3. Kliknij OK.
3. Wynik powinien odpowiadać **rysunkowi: MS6**.
4. Szkic jest teraz w pełni związany:
   - Linie w szkicu są jasnozielone.
   - W sekcji **Komunikaty Solvera** w panelu zadań wyświetlany jest komunikat **W pełni związany**.
   - Jeśli wybierzesz dowolną linię lub wierzchołek szkicu i spróbujesz go przeciągnąć, pozostanie on nieruchomy.

**Krok F: Zamknij szkic**

: Kliknij Zamknij u góry panelu [Zadań](/Task_panel/pl "Task panel/pl"), aby wyjść z trybu edycji szkicu.

## Profil główny

Profil główny jest tworzony przez [wyciągnięcie](/PartDesign_Pad/pl "PartDesign Pad/pl") nowego szkicu.

**Sketch001**

![](/images/OffsetSketch001.png)

Fig. MP1

![](/images/Pd_tut_side_fc.png)

Fig: MP2

**Krok A: Utwórz szkic**

: Kliknij ![](/images/PartDesign_NewSketch.svg) [Utwórz szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl") i utwórz szkic dołączony do płaszcyzny **YZ_Plane**. FreeCAD przypisze nazwę **Szkic001**.

**Krok B: Dodaj geometrię**

1. Kliknij ![](/images/Sketcher_CreatePolyline.svg) [Utwórz polilinię](/Sketcher_CreatePolyline/pl "Sketcher CreatePolyline/pl") i utwórz kształt jak na **Rys: MP1**.
2. Dla ostatniego punktu końcowego odcinka upewnij się, że wybierasz pierwszy punkt kształtu. Punkt zmieni kolor i zobaczysz symbol ![](/images/Sketcher_ConstrainCoincident.svg) [wiązania zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl") w pobliżu kursora. Wiązania zbieżności muszą być jawne. Nie wystarczy, że dwa punkty pokrywają się wizualnie.
3. Naciśnij klawisz Esc lub kliknij prawym przyciskiem myszy, aby opuścić narzędzie.

**Krok C: Przypisz wiązania**

1. Trzy pionowe i poziome wiązania, które widzisz na obrazku, powinny zostać dodane automatycznie, o ile narysowałeś te linie w ten sposób. Jeśli tego nie zrobiłeś, musisz je dodać.
2. Wybierz punkt **P2** oraz oś **Y** szkicu i zastosuj ![](/images/Sketcher_ConstrainPointOnObject.svg) [wiązanie punktu na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl"). Ponieważ szkic jest dołączony do YZ_Plane, oś Y szkicu nie pokrywa się z osią Y obiektu Zawartości.
3. Wybierz _punkt odniesienia położenia_ i punkt _P1_ i zastosuj ![](/images/Sketcher_ConstrainHorizontal.svg) [wiązanie poziome](/Sketcher_ConstrainHorizontal/pl "Sketcher ConstrainHorizontal/pl"). Możesz zapytać dlaczego nie ![](/images/Sketcher_ConstrainCoincident.svg) [wiązanie zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl")?. Więc spróbuj _(i cofnij)_. Szkic zmieni kolor na pomarańczowy i pojawi się komunikat solvera **Wiązania nadmiarowe**. Ponieważ linia od P1 do P2 została już związana w pionie, jedynym pozostałym stopniem swobody jest współrzędna Y linii P1. Wiązanie zbieżności ustawia zarówno współrzędną X jak i Y na zero, ale współrzędna X jest już określona. Z kolei wiązanie poziome ustawia na zero tylko współrzędną Y, co jest wystarczające.
4. Wybierz linię zdefiniowaną przez punkty **P2** i **P3**, zastosuj ![](/images/Sketcher_ConstrainDistanceX.svg) [zwiąż odległość poziomą](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl"), i przypisz jej **Długość = 5 mm**.
5. Wybierz linię zdefiniowaną przez punkty **P1** i **P2**, zastosuj ![](/images/Sketcher_ConstrainDistanceY.svg) [zwiąż odległość pionową](/Sketcher_ConstrainDistanceY/pl "Sketcher ConstrainDistanceY/pl"), i przypisz jej **Długość = 26 mm**.
6. Wybierz linię zdefiniowaną przez punkty **P1** i **P4** i zastosuj ![](/images/Sketcher_ConstrainDistanceX.svg) [zwiąż odległość poziomą](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl"):
   1. Dla tej wartości użyjesz _wiązania z określeniem nazwy_ za pomocą [wyrażeń](/Expressions/pl "Expressions/pl").

Aby to zrobić, kliknij mały przycisk w polu tekstowym „Długość”: ![](/images/Bound-expression.svg).

1. 1. Zostanie wyświetlone nowe okno dialogowe o nazwie „Edytor formuł” zawierające pole wprowadzania i etykietę „Wynik:”, podobne do poniższego obrazka:  
      ![](/images/Pd_tut_expressions.png)  
      Kiedy zaczniesz pisać w polu wejściowym, zobaczysz kilka automatycznych uzupełnień.
   2. Wybierz etykietę szkicu. W naszym przypadku potrzebujemy **`<<Sketch>>.`**. Zwróć uwagę na kropkę po etykiecie.
   3. Aby wybrać **wiązanie z określeniem nazwy** "szerokość", należy najpierw wpisać **`Constraints.`** z kropką.

Tutaj działa automatyczne uzupełnianie.

1. 1. Aby dodać "szerokość", automatyczne upełnianie nie jest jeszcze dostępne, więc wypełnij komórkę, aby przeczytać **`<<Sketch>>.Constraints.szerokość`**. Jeśli wszystko poszło dobrze, czerwony komunikat o błędzie po **Wynik:** został zastąpiony poprawną wartością, jak na poniższym obrazku:  
      ![](/images/Pd_tut_expression_end.png)
   2. Kliknij OK, aby zamknąć okno dialogowe **Edytor formuł**.
   3. Kliknij OK, aby zamknąć okno dialogowe **Wstaw długość**.
2. Powinieneś mieć w pełni związany szkic podobny do tego na **Rys.: MP2**.
3. Zwróć uwagę na różne kolory używane dla wiązań odległości przypisywanych za pomocą wyrażeń oraz te przypisywane z podaniem długości.

**Krok D: Zamknij szkic**

: Kliknij Zamknij u góry panelu [Zadań](/Task_panel/pl "Task panel/pl"), aby wyjść z trybu edycji szkicu.

**Wyciągnięcie**

![](/images/Pd_tut_pad1.png)

Fig: MP3

1. Upewnij się, że wybrano **Sketch001**.
2. Kliknij ![](/images/PartDesign_Pad.svg) [Wyciągnij](/PartDesign_Pad/pl "PartDesign Pad/pl"):
   1. Otworzy się panel zadań **Parametry wyciągnięcia**.
   2. Aby określić **Typ** wybierz Wymiar ![](/images/ComboBox.svg).
   3. Dla okreśenia parametru **Długość** ponownie użyj wyrażenia, ale tym razem wpisz **`<<Sketch>>.Constraints.długość`**. To powinno dać wynik 53 mm.
   4. Zaznacz ![](/images/CheckBoxTrue.svg) Symetrcznie do płaszczyzny.
   5. Kliknij OK, aby zamknąć panel zadań.
3. Powinieneś teraz otrzymać bryłę jak pokazano na **Rys: MP3**.

## Wycięcia w narożnikach

W przypadku wycięć narożnych do modelu dodawane są dwa elementy. Do utworzenia pierwszego wycięcia użyto funkcji [kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl"), opartej na innym szkicu, a następnie cecha ta jest modyfikowana [odbiciem lustrzanym](/PartDesign_Mirrored/pl "PartDesign Mirrored/pl").

**Sketch002**

![](/images/Pd_tut_sk2_start.png)

Fig: CC1

![](/images/Pd_tut_sk2_eg01.png)

Fig: CC2

![](/images/Pd_tut_sk2_end.png)

Fig: CC3

**Krok A: Ukryj bryłę**

: Ukryj właśnie utworzoną bryłę: Wybierz obiekt **Pad** i kliknij klawisz Spacja.

**Krok B: Utwórz szkic**

: Kliknij ![](/images/PartDesign_NewSketch.svg) [Utwórz szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl") i utwórz szkic dołączony do płaszcyzny **XZ_Plane**. Szkic będzie nosił nazwę **Sketch002**.

**Krok C: Dodaj geometrię**

1. Wybierz ![](/images/Sketcher_CreateRectangle.svg) [Utwórz prostokąt](/Sketcher_CreateRectangle/pl "Sketcher CreateRectangle/pl"), i narysuj prostokąt. Nie twórz go zbyt blisko osi, aby uniknąć wygenerowania automatycznych więzów, które utrudniałyby późniejsze przesunięcie go do właściwej pozycji.
2. Zakończ pracę z narzędziem.

**Krok D: Przypisanie więzów wymiarowych**

1. Wybierz jedną z poziomych linii, zastosuj ![](/images/Sketcher_ConstrainDistanceX.svg) [zwiąż odległość poziomą](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl"), i przypisz wartość **11 mm**.
2. Wybierz jedną z pionowych linii, zastosuj ![](/images/Sketcher_ConstrainDistanceY.svg) [zwiąż odległość pionową](/Sketcher_ConstrainDistanceY/pl "Sketcher ConstrainDistanceY/pl"), i przypisz wartość **5 mm**.
3. Powinieneś otrzymać rozwiązanie podobne jak na **Rys: CC1**.

**Krok E: Zamknij szkic**

: Kliknij Zamknij. **Sketch002** na tym etapie nie jest w pełni związany.

**Krok F: Wyświetl poprzednie szkice**

: Aby skorzystać z narzędzia [geometria zewnętrzna](/Sketcher_External/pl "Sketcher External/pl"), szkice, do których elementów chcemy się odwołać, muszą być widoczne. Upewnij się, że **Sketch** i **Sketch001** są widoczne. Użyj klawisza Spacja do przełączania widoczności w razie potrzeby. Rozwiń węzeł _Pad_ w [Widoku drzewa](/Tree_view/pl "Tree view/pl"), aby uzyskać dostęp do obiektu*Sketch001*.

**Krok G: Dodaj geometrię zewnętrzną i w pełni zwiąż szkic**

1. Kliknij dwukrotnie **Sketch002**, aby wejść w tryb edycji.
2. Obróć widok tak, aby wyraźnie widzieć punkty, jak pokazano na **Rys: CC2**. Ułatwi to kolejne kroki. Zauważ, że początkowe położenie prostokąta może być inne w Twoim szkicu.
3. Kliknij narzędzie ![](/images/Sketcher_External.svg) [Geometria zewnętrzna](/Sketcher_External/pl "Sketcher External/pl").
4. Podczas gdy narzędzie jest aktywne kursor ma następujący wygląd:  
   ![](/images/Pd_tut_eg_cursor.png)
5. Wybierz punkt **P1** w **Rys: CC2**. Wybrany punkt zostaje dodany do szkicu jako geometria zewnętrzna. Będzie on wyświetlany w sekcji **Elementy** w panelu zadań z fioletową ikoną X lub, [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"), ikoną fioletowej kropki.
6. Mając wciąż aktywne narzędzie wybierz punkt **P2** na **Rys: CC2**. Ta zewnętrzna geometria powinna również pojawić się w sekcji **Elementy**.
7. Zakończ pracę z narzędziem.
8. Wybierz punkt **P1** i punkt **P3** i zastosuj ![](/images/Sketcher_ConstrainVertical.svg) [zwiąż odległość pionową](/Sketcher_ConstrainVertical/pl "Sketcher ConstrainVertical/pl"). Prostokąt zostanie wyrównany do pozycji X punktu **P1**.
9. Wybierz punkt **P2** i punkt **P3** i zastosuj ![](/images/Sketcher_ConstrainHorizontal.svg) [zwiąż odległość poziomą](/Sketcher_ConstrainHorizontal/pl "Sketcher ConstrainHorizontal/pl"). Prostokąt zostanie wyrównany do pozycji Y **P2**.
10. Twój szkic powinien być w pełni związany, tak jak na **Rys. CC3**.

**Krok H: Zamknij szkic**

: Kliknij Zamknij.

**Kieszeń**

![](/images/Pd_tut_pck01.png)

Fig: CC4

![](/images/Pd_tut_pck02-mir.png)

Fig: CC5

Do stworzenia wycięcia użyjemy narzędzia ![](/images/PartDesign_Pocket.svg) [Kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl"). Narzędzie to jest przeciwieństwem narzędzia Wyciągnij. Podczas gdy narzędzie Wyciągnij dodaje materiał, narzędzie Kieszeń usuwa materiał.

1. Wybierz **Sketch002**.
2. Kliknij ![](/images/PartDesign_Pocket.svg) [Kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl"):
   1. Otworzy się panel zadań **Parametry kieszeni**.
   2. Wybierz **Typ** Przez wszystkie ![](/images/ComboBox.svg).
   3. Zaznacz opcję ![](/images/CheckBoxTrue.svg) Zaznaczony
   4. Kliknij OK.
3. Powinieneś uzyskać efekt przypominający ten z **Rys: CC4**

**Odbicie lustrzane**

Zamiast tworzyć kolejny szkic i kieszeń, wykorzystujemy symetrię modelu względem płaszczyzny YZ i użyjemy narzędzia ![](/images/PartDesign_Mirrored.svg) [odbicie lustrzane](/PartDesign_Mirrored/pl "PartDesign Mirrored/pl") do stworzenia drugiego wycięcia.

1. Wybierz **Kieszeń** w [Widok drzewa](/Tree_view/pl "Tree view/pl").
2. Kliknij narzędzie ![](/images/PartDesign_Mirrored.svg) [odbicie lustrzane](/PartDesign_Mirrored/pl "PartDesign Mirrored/pl"):
   1. Otwiera się panel zadań **Parametry odbicia lustrzanego**.
   2. Z menu rozwijanego wybierz **Płaszczyznę** Pionowa oś szkicu ![](/images/ComboBox.svg). Płaszczyzna zostanie zdefiniowana przez tę oś _(oś Y)_, a także przez oś Z szkicu. Zauważ, że wybranie **Płaszczyzny bazowej YZ** dałoby ten sam efekt.
   3. Kliknij OK.
3. Powinieneś mieć teraz część, która wygląda jak ta na **Rys: CC5**.

## Boki

Boki tworzymy w podobny sposób, ale zamiast usuwać materiał będziemy dodawać materiał za pomocą funkcji [wyciągnij](/PartDesign_Pad/pl "PartDesign Pad/pl").

**Sketch003**

![](/images/Pd_tut_sk3_1.png)

Fig: SD1

![](/images/Pd_tut_pad001.png)

Fig: SD2

![](/images/Pd_tut_pad02-mir.png)

Fig: SD3

1. Upewnij się, że **Szkic** jest widoczny, a obiekt **Mirrored** jest ukryty.
2. Kliknij narzędzie ![](/images/PartDesign_NewSketch.svg) [utwórz szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl") i wygeneruj nowy szkic dołączony do płaszczyzny **XY_Plane**. Szkic będzie nosił nazwę **Sketch003**.
3. Kliknij ![](/images/Sketcher_CreateRectangle.svg) [utwórz prostokąt](/Sketcher_CreateRectangle/pl "Sketcher CreateRectangle/pl") i utwórz prostokąt podobny do mniejszego prostokąta na **Rys: SD1**. Ponieważ prostokąt jest przesunięty względem osi X, nie powinno to wywołać automatycznego ![](/images/Sketcher_ConstrainPointOnObject.svg) [dowiązania punktu na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl").
4. Zamknij narzędzie.
5. Kliknij narzędzie ![](/images/Sketcher_External.svg) [geometria zewnętrzna](/Sketcher_External/pl "Sketcher External/pl").
6. Wybierz punkt **P1** jak pokazano na **Rys: CC2** z obiektu **Szkic**.
7. Zamknij narzędzie.
8. Zastosuj następujące wiązania:
   1. Wybierz jedną z poziomych linii, zastosuj narzędzie ![](/images/Sketcher_ConstrainDistanceX.svg) [zwiąż odległość poziomą](/Sketcher_ConstrainDistanceX/pl "Sketcher ConstrainDistanceX/pl"), i przypisz wartość **7 mm**.
   2. Wybierz jedną z pionowych linii, zastosuj narzędzie ![](/images/Sketcher_ConstrainDistanceY.svg) [zwiąż odległość pionową](/Sketcher_ConstrainDistanceY/pl "Sketcher ConstrainDistanceY/pl") i przypisz to wyrażenie: **<kod><<Szkic >>.Constraints.szerokosc**.
   3. Wybierz punkt **lewy górny** utworzonego prostokąta _(oznaczony **TL** na **Rys.: SD1**)_ i nowo dodany **punkt geometrii zewnętrznej** i zastosuj narzędzie ![](/images/Sketcher_ConstrainCoincident.svg) [wiązanie zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl").
9. Szkic powinien być teraz w pełni związany.
10. Kliknij Zamknij.

**Pad001**

1. Wybierz **Sketch003'**.
2. Kliknij ![](/images/PartDesign_Pad.svg) [Pad](/PartDesign_Pad "PartDesign Pad"):
   1. Przypisz **Typ =** Wymiar ![](/images/ComboBox.svg).
   2. Przypisz **Długość = 16.7 mm**.
   3. Kliknij OK.
3. Powinieneś uzyskać wynik jak pokazano na **Rys: SD2**.

**Mirrored001**

1. Wybierz obiekt **Pad001**.
2. Kliknij narzędzie![](/images/PartDesign_Mirrored.svg) [odbicie lustrzane](/PartDesign_Mirrored/pl "PartDesign Mirrored/pl"):
   1. Upewnij się, że **Płaszczyzna** Pionowa oś szkicu ![](/images/ComboBox.svg) jest zaznaczona.
   2. Kliknij OK.
3. Powinieneś teraz mieć część, która wygląda jak na **Rys: SD3**.

**Uwaga**

Nasze dwie operacje odbicia lustrzanego mają wspólną płaszczyznę symetrii, więc moglibyśmy nieco uprościć nasz model łącząc je. W tym celu:

1. Pomiń pierwszą operację **odbicia lustrzanego**.
2. Wybierz zarówno **Pad001** jak i **Pocket** w kroku 1 powyższej operacji **Mirrored001**.

Podkreśla to ważną koncepcję, że odzwierciedlamy wybrane cechy _(operacje, które wykonaliśmy na bryle, w wybranej kolejności)_, a nie samą bryłę.

## Środkowy otwór

Teraz czas na najtrudniejszą część naszego modelowania, wyzwanie, które pojawia się, ponieważ niektóre wymiary otworu centralnego są zdefiniowane wzdłuż skośnej ściany. Jeśli użyjesz tej ściany, powstałej w wyniku wyciągnięcia obiektu **Sketch001**, jako odniesienia dla następnego szkicu, narazisz się na [problem nazewnictwa topologicznego](/Topological_naming_problem/pl "Topological naming problem/pl"). Lepszym rozwiązaniem jest odwołanie się do samego obiektu **Sketch001**.

**Sketch004**

![](/images/Pd_tut_cen01.png)

Fig: CH1

![](/images/Pd_tut_cen02.png)

Fig: CH2

1. Spraw, aby **Sketch001** był widoczny, a ukryj **Sketch** i **Mirrored001**.
2. Kliknij ![](/images/PartDesign_NewSketch.svg) [utwórz szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl") i utwórz nowy szkic dołączony do **YZ_Plane**. Szkic będzie nosił nazwę **Sketch004**.
3. Kliknij ![](/images/Sketcher_CreatePolyline.svg) [utwórz polilinie](/Sketcher_CreatePolyline/pl "Sketcher CreatePolyline/pl") i wyznacz polilinię taką, jaką wskazują punkty **P1**, **P2**, **P3** i **P4** na **Rys: CH1**.
4. Pamiętaj, aby zamknąć polilinię wybierając pierwszy punkt. Dzięki temu powstanie wymagane ![](/images/Sketcher_ConstrainCoincident.svg) [wiązanie zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl").
5. Zamknij narzędzie.
6. Sprawdź zastosowane wiązania:
   - Usuń zbędne ![](/images/Sketcher_ConstrainVertical.svg) [więzy pionowe](/Sketcher_ConstrainVertical/pl "Sketcher ConstrainVertical/pl") zastosowane do linii zdefiniowanej przez **P1** i **P2**.
   - Upewnij się, że ![](/images/Sketcher_ConstrainHorizontal.svg) [więz poziomy](/Sketcher_ConstrainHorizontal/pl "Sketcher ConstrainHorizontal/pl") został zastosowany do linii zdefiniowanych przez **P1** i **P4** oraz **P2** i **P3**.
   - Upewnij się, że wiązanie ![](/images/Sketcher_ConstrainPointOnObject.svg) [punktu na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl") zostało zastosowane do **P1** i **osi Y** oraz do **P2** i **osi Y**.
7. Kliknij narzędzie ![](/images/Sketcher_External.svg) [geometria zewnętrzna](/Sketcher_External/pl "Sketcher External/pl")
8. Wybierz linię zdefiniowaną przez **EGP1** i **EGP2** w **Sketch001**, wskazaną przez fioletowy kolor na **Rys: CH2**.
9. Zamknij narzędzie.
10. Zastosuj wiązanie ![](/images/Sketcher_ConstrainPointOnObject.svg) [punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl") do **P3** i **geometrii zewnętrznej**, a następnie powtórz tę operację dla **P4**. To sprawi, że linia zdefiniowana przez **P3** i **P4** będzie pokrywać się z linią zdefiniowaną przez **EGP1** i **EGP2**.
11. Wybierz linię **P3** do **P4**, zastosuj ![](/images/Sketcher_ConstrainDistance.svg) [wiązanie odległości](/Sketcher_ConstrainDistance/pl "Sketcher ConstrainDistance/pl"), i przypisz **Długość = 17 mm**
12. Wybierz punkty **EGP2** i **P4**, zastosuj ![](/images/Sketcher_ConstrainDistance.svg) [wiązanie odległości](/Sketcher_ConstrainDistance/pl "Sketcher ConstrainDistance/pl"), i przypisz **Długość = 7 mm**.
13. W ten sposób powstanie w pełni związany szkic, taki jak na **Rys: CH2**.
14. Kliknij Close.
15. Ukryj **Sketch001**.

**Pocket001**

1. Wybierz obiekt **Sketch004**.
2. Kliknij ![](/images/PartDesign_Pocket.svg) [kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl"):
   1. Wybierz **Typ** Dwa wymiary ![](/images/ComboBox.svg).
   2. Przypisz **8,5 mm** do **długości** i **drugiej długości**.
   3. Kliknij OK.
3. Wybierz nowo utworzony **Pocket001**.
4. W zakładce Dane [Edytora właściwości](/Property_editor/pl "Property editor/pl") zmień wartość właściwości **Ulepsz** na `Prawda`. Edytor właściwości znajduje się w zakładce Model w [Widoku złożonego](/Combo_view/pl "Combo view/pl").

**Uwagi**

1. Dla **Pocket001** mogliśmy alternatywnie użyć opcji **Typ** Wymiar ![](/images/ComboBox.svg), zaznaczyć **Symetrycznie do płaszczyzny** i wpisać wartość **17 mm** dla **Długości**.
2. **Udoskonal** spróbuje usunąć szwy pozostawione przez poprzednie operacje. Zaleca się, aby dopracować tylko bryłę ostateczną, ponieważ niektóre operacje mogą się nie powieść, jeśli poprzednia cecha została dopracowana. Jednakże są też przypadki, w których funkcja ulepsz może sprawić, że operacja się powiedzie. Dlatego w razie problemów należy sprawdzić tę właściwość i przetestować. Niestety nie ma jeszcze ogólnej zasady, którą należałoby się kierować.

## Wynik

Model jest kompletny. Powinien wyglądać jak na poniższym obrazku.

Na koniec wybieramy **Szkic** w [Widoku Drzewa](/Tree_view/pl "Tree view/pl") i na zakładce Dane w [Edytorze właściwości](/Property_editor/pl "Property editor/pl") szukamy **Szkic → Wiązania**. Rozwiń ten węzeł i zmień wiązania **długość** i **szerokość**. Model powinien ulec zmianie parametrycznej.

![](/images/Pd_tut_final_solid.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_Part_Design_Tutorial_019/pl&oldid=1520556>"
