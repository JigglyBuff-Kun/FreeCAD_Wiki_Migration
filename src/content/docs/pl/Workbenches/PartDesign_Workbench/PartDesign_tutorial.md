---
title: Poradnik dla środowiska pracy Projekt Części
---
|  |
| --- |
| Ćwiczenie |
| Temat |
| Szkicowanie |
| Poziom trudności |
| Początkujący |
| Czas wykonania |
| 15 minut |
| Autorzy |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) |
| Wersja FreeCAD |
| 0.16 lub nowszy |
| Pliki z przykładami |
| Nie dołączono |
| Zobacz również |
| *-* |
|  |

## Wprowadzenie

Ten poradnik ma na celu zapoznanie czytelnika z podstawowym przepływem pracy w środowisku pracy [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").
Czytelnik zobaczy jak tworzyć obiekty 3D na podstawie szkiców, wykonywać operacje odejmowania oraz jak powielać określone cechy we wzorze.

![](/images/Sketcher_tutorial_result.png)

### Wymagania

* FreeCAD w wersji v0.17 lub wyższej.
* Czytelnik ukończył poradnik [Podstawy dla środowiska pracy Szkicownik](/Basic_Sketcher_Tutorial/pl "Basic Sketcher Tutorial/pl")

### Procedura

#### Tworzenie geometrii 3D

Celem środowiska roboczego **Projekt Części** jest umożliwienie użytkownikowi tworzenia geometrii w przestrzeni 3D. W związku z tym jest ono wyposażone w narzędzia do wykorzystania szkiców i przekształcania ich w obiekty 3D.

Aby to osiągnąć, istnieją dwa narzędzia: ![](/images/PartDesign_Pad.svg) [Wyciągnij](/PartDesign_Pad/pl "PartDesign Pad/pl") oraz ![](/images/PartDesign_Revolution.svg) [Wyciągnij przez obrót](/PartDesign_Revolution/pl "PartDesign Revolution/pl"). Obok ich subtraktywnych odpowiedników *(![](/images/PartDesign_Pocket.svg) [kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl") i ![](/images/PartDesign_Groove.svg) [rowek](/PartDesign_Groove/pl "PartDesign Groove/pl"))* tworzą większość typowych akcji używanych przez to środowisko pracy.

1. Przełącz się do środowiska produkcyjnego Projekt Części.
2. Z zaznaczonym szkicem w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl"), naciśnij przycisk ![](/images/PartDesign_Body.svg) [Zawartość](/PartDesign_Body/pl "PartDesign Body/pl"), wybierz domyślną płaszczyznę XY i naciśnij przycisk OK. Szkic powinien pojawić się teraz wewnątrz zawartości.
3. Wybierz ![](/images/PartDesign_Pad.svg) [Wyciągnij wybrany szkic](/PartDesign_Pad/pl "PartDesign Pad/pl").
4. Ustaw odległość na 5 mm ![](/images/SpinBox.svg).
5. Naciśnij na przycisk OK.

Innym sposobem na tworzenie geometrii 3D jest narzędzie ![](/images/PartDesign_Revolution.svg) [Wyciągnij wybrany szkic przez obrót](/PartDesign_Revolution/pl "PartDesign Revolution/pl").

![](/images/PartDesign_revolution_exercise.png)

1. Utwórz nową zawartość narzędziem ![](/images/PartDesign_Body.svg) [Projekt Części Zawartość](/PartDesign_Body/pl "PartDesign Body/pl"), a następnie szkic na podstawie powyższego obrazka.
2. Szkic może znajdować się na dowolnej płaszczyźnie, ale powinien przylegać do osi poziomej.
3. Wybierz narzędzie ![](/images/PartDesign_Revolution.svg) [Wyciągnij wybrany szkic przez obrót](/PartDesign_Revolution/pl "PartDesign Revolution/pl").
4. Ustaw parametr **Oś** na wartość Pozioma oś szkicu ![](/images/ComboBox.svg).
5. Ustaw kąt na 360°.

#### Cechy odejmujące

Zaczniemy od utworzenia szkicu z kształtem, który chcemy odjąć.

1. Wybierz górną płaską powierzchnię "wyciągnięcia przez obrót".
2. Wybierz ![](/images/Sketcher_NewSketch.svg) [Utwórz nowy szkic](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl").
3. Wybierz narzędzie ![](/images/Sketcher_External.svg) [Geometria zewnętrzna](/Sketcher_External/pl "Sketcher External/pl").
4. Zbliż się do krawędzi wyciągnięcia. Łuk powinien być podświetlony.
5. Wybierz łuk. W szkicu powinien zostać on wyświetlony innym kolorze.
6. Utwórz sześciokąt o środku w tym samym punkcie co łuk i ustaw promień okręgu pomocniczego na 5mm.

**Geometria zewnętrzna**

Po utworzeniu elementu 3D możliwe jest utworzenie odniesień do niego w szkicu.

1. Wybierz narzędzie ![](/images/Sketcher_External.svg) [Geometria zewnętrzna](/Sketcher_External/pl "Sketcher External/pl").
2. Przybliż kursor myszki do elementu, do którego chcesz się odnieść, na przykład do krawędzi **wyciągnięcia**.
3. Kliknij na nim
4. Na szkicu w miejscu elementu, do którego chcesz się odnieść, powinny pojawić się nowe elementy w innym kolorze.

![](/images/PartDesign_pocket_exercise.png)

Następnie przejdziemy do zastosowania funkcji **Kieszeń**.

1. Wybierz szkic.
2. Wybierz narzędzie ![](/images/PartDesign_Pocket.svg). [Kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl").
3. Ustaw parametr **Typ** na wartość Przez wszystkie ![](/images/ComboBox.svg).

#### Cechy tworzone wzorami

Przypomnij sobie profil wyciągany, który został utworzony na początku tego poradnika.

1. Wybierz górną ścianę obiektu.
2. Utwórz nowy szkic.
3. Utwórz geometrię odniesienia powiązaną z górnym ramieniem figury.
4. Utwórz okrąg związany ze środkiem łuku pomocniczego.
5. Ustaw jego promień na 3mm.
6. Przesuń szkic przez cały detal.

Zamiast tworzyć okrąg dla każdego otworu w szkicu, wprowadzimy pojęcie **Cechy wzorca**. Narzędzia te działają na zasadzie powielania elementu, który został już utworzony i który chcemy odtworzyć w układzie liniowym lub kołowym.
Użyjemy kombinacji **liniowych** i **biegunowych'** cech wzoru symulacyjnie, aby uzyskać końcowy detal.

1. W [widoku drzewa](/Tree_view/pl "Tree view/pl") wybierz element **Kieszeń**, który właśnie utworzyliśmy.
2. Wybierz narzędzie ![](/images/PartDesign_MultiTransform.svg) [Utwórz cechę wielokrotnej transformacji](/PartDesign_MultiTransform/pl "PartDesign MultiTransform/pl")

W oknie [widoku połączonego](/Combo_view/pl "Combo view/pl") jesteśmy teraz proszeni o wprowadzenie obiektów do **Transformacji**, którą chcemy uzyskać. Zauważ, że w sekcji **Parametry Transformacji wielokrotnej** widzimy, że FreeCAD zidentyfikował Kieszeń jako **Cechę bazową**, a w drugiej części okienka proszeni jesteśmy o **Kliknięcie prawym przyciskiem myszy** w celu wprowadzenia cech wzoru.

1. Kliknij prawym przyciskiem myszy w pole.
2. Wybierz pozycję **Dodaj szyk liniowy**.
3. Ustaw opcję **Kierunek'** na wartość Pionowa Oś Szkicu ![](/images/ComboBox.svg).
4. Ustaw długość na wartość 10 mm ![](/images/SpinBox.svg).
5. Pozostaw liczbę wystąpień na 2 ![](/images/SpinBox.svg).
6. Kliknij na przycisk OK.
7. Kliknij prawym przyciskiem myszy ponownie w pole, aby dodać **Wzór biegunowy**. Zauważ, że w oknie widoku 3D został dodany wzór liniowy.
8. Ustaw liczbę wystąpień na 5 ![](/images/SpinBox.svg).
9. Kliknij dwukrotnie na przycisk OK.

Po wykonaniu tego zadania powinieneś mieć następujący wynik.

![](/images/PartDesign_multitransform_exercise.png)

Jeśli nie, edytuj ponownie operację Transformacja wielokrotna, klikając na niej dwukrotnie w widoku drzewa. Sprawdź obie cechy wzoru, aby wykryć konieczne modyfikacje, takie jak **Oś** oraz czy **Kierunek** musi zostać odwrócony.

Zakończyliśmy teraz prezentacje podstawowego przepływu pracy dla środowiska [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_tutorial/pl&oldid=950763>"