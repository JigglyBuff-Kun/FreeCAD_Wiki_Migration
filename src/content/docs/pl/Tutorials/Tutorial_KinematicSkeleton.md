---
title: Poradnik Szkielet kinematyczny
---

|                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ćwiczenie                                                                                                                                                                                               |
| Temat                                                                                                                                                                                                   |
| Złożenie 3, i Szkielet kinematyczny                                                                                                                                                                     |
| Poziom trudności                                                                                                                                                                                        |
| Podstawowa wiedza o środowisku Złożenie 3 i Szkicownik będzie pomocna                                                                                                                                   |
| Czas wykonania                                                                                                                                                                                          |
| 40 minut                                                                                                                                                                                                |
| Autorzy                                                                                                                                                                                                 |
| [FBXL5](/User:FBXL5 "User:FBXL5")                                                                                                                                                                       |
| Wersja FreeCAD                                                                                                                                                                                          |
| 0.20 lub nowsza                                                                                                                                                                                         |
| Pliki z przykładami                                                                                                                                                                                     |
| _Nie dołączono_                                                                                                                                                                                         |
| Zobacz również                                                                                                                                                                                          |
| [Poradnik Złożenie kinematyczne](/Tutorial_KinematicAssembly/pl "Tutorial KinematicAssembly/pl"), [Poradnik Sterownik kinematyczny](/Tutorial_KinematicController/pl "Tutorial KinematicController/pl") |
|                                                                                                                                                                                                         |

## Wprowadzenie

Ten poradnik prezentuje, jak zbudować prosty mechanizm 2D i dodać elementy przestrzenne, głównie przy użyciu narzędzi z zewnętrznego ![](/images/Assembly3_workbench_icon.svg) [środowiska Złożenie 3](/Assembly3_Workbench/pl "Assembly3 Workbench/pl").

Ten poradnik nie wykorzystuje zasady szkicu szkieletu _(patrz Złożenie 3 [Create-Skeleton-Sketch](https://github.com/realthunder/FreeCAD_assembly3/wiki/Create-Skeleton-Sketch) na GitHub)_.

Zamiast tego użyjemy ![](/images/PartDesign_Body.svg) [Zawartości](/PartDesign_Body/pl "PartDesign Body/pl") środowiska Projekt Części zawierającej tylko jeden ![](/images/Workbench_Sketcher.svg) [Szkic](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), aby zbudować mechanizm 2D, czyli **szkielet wielu szkiców**.

Wymiary, a także kolory, pochodzą z [poradnika SolveSpace](http://solvespace.com/linkage.pl), do którego odwołuje się strona Złożenie 3 z GitHub _(patrz wyżej)_.

## Szkielet wieloszkieletowy

Ten tzw. szkielet wieloszkicowy składa się z kilku indywidualnych ![](/images/PartDesign_Body.svg) [Zawartości](/PartDesign_Body/pl "PartDesign Body/pl") oraz kontenera ![](/images/Assembly_New_Assembly.svg) [Złożenia](/Assembly3_CreateAssembly/pl "Assembly3 CreateAssembly/pl"). Aby móc dołączyć kolejne obiekty, każda bryła jest umieszczana w osobnym kontenerze Złożenia.

## Obiekty Zawartości 2D

Zawartości, oraz ich szkice, które są wykorzystywane w tym montażu:

- Płyta podstawy _(zielona)_,
- Korba _(niebieska)_,
- Dwie ruchome płyty _(czerwona i szara)_,
- Cztery korbowody _(biały, żółty, fioletowy i brązowy)_.

![](/images/Assembly3_SketchSkeleton-01.png)

Wszystkie osiem szkiców indywidualnie pokolorowanych i ręcznie pozycjonowanych poprzez przesunięcie ich zawartości.

Kształt może odbiegać od kształtu rzeczywistej części, ale położenie złącza definiującego geometrię musi być dokładne.

### Montaż kontenerów

#### Złożenie nadrzędne

Aby ustalić lub kontrolować pozycje wszystkich Zawartości potrzebujemy ![](/images/Assembly_New_Assembly.svg) Obiektu Złożenia. Dodaje on gałąź złożenia do [Widoku drzewa](/Tree_view/pl "Tree view/pl")

- Naciśnij przycisk ![](/images/Assembly_New_Assembly.svg) [Utwórz złożenie](/Assembly3_CreateAssembly/pl "Assembly3 CreateAssembly/pl"), aby utworzyć gałąź złożenia w [Widoku drzewa](/Tree_view/pl "Tree view/pl").

#### Złożenia podrzędne

Powtórz powyższą czynność, aby utworzyć obiekt Złożenia dla każdej Zawartości i przeciągnij ją go jej kontenera Części. Następnie połącz Zawartość z jej Złożeniem:

1. Uaktywnij obiekt Złożenie _(podwójne kliknięcie)_.
2. Zaznacz okrąg / łuki należące do obiektu Zawartość.
3. Naciśnij przycisk ![](/images/Assembly_ConstraintLock.svg) [Wiązanie _zablokowania_](/Assembly3_ConstraintLock/pl "Assembly3 ConstraintLock/pl"), aby przytwierdzić Zawartość w jej złożeniu podrzędnym.

Na przykład Złożenie korbowe powinno wyglądać następująco:

![](/images/Assembly3_SketchSkeleton-25.png)

Gałąź złożenia korby w widoku drzewa oraz korba z zablokowanym elementem w oknie widoku 3D.

#### Drzewo złożenia

W widoku Drzewa przeciągnij wszystkie gałęzie złożeń podrzędnych do kontenera Części obiektu nadrzędnego Złożenia.

![](/images/Assembly3_SketchSkeleton-26.png)

Gałąź Złożenia w widoku Drzewa

Teraz są one gotowe do ułożenia.

#### Nieruchoma płyta podstawy

Najpierw potrzebujemy elementu nieruchomego. Aby całkowicie zamocować Bazę, zwykle wybralibyśmy ścianę, ale w tym przypadku równie dobrze sprawdzi się okrąg.

1. Wybierz okrąg w części bazowej.
2. Naciśnij przycisk ![](/images/Assembly_ConstraintLock.svg) [Wiązanie zablokowania](/Assembly3_ConstraintLock/pl "Assembly3 ConstraintLock/pl"), aby ustalić Bazę.

![](/images/Assembly3_SketchSkeleton-02.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-03.png)

Wybrany okrąg → Nieruchoma podstawa z utworzonym obiektem Element i wyświetlonym układem współrzędnych _(ECS)_ elementu _(kolor zielony)_.

### Połączenia

W przypadku przegubów wybieramy jeden okrąg z każdego szkicu i używamy funkcji ![](/images/Assembly_ConstraintCoincidence.svg) [Wiązanie zbieżności](/Assembly3_ConstraintCoincidence/pl "Assembly3 ConstraintCoincidence/pl"). Wiązanie to nie tylko ustawia płaszczyzny XY obu elementów współbieżnie, ale także ustawia ich osie Z współbieżnie.

1. Wybierz okrąg każdego obiektu, który chcesz połączyć.
2. Naciśnij przycisk ![](/images/Assembly_ConstraintCoincidence.svg) [Wiązanie zbieżności](/Assembly3_ConstraintCoincidence/pl "Assembly3 ConstraintCoincidence/pl").

#### Baza - Korba

![](/images/Assembly3_SketchSkeleton-04.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-05.png)

Zaznaczone okręgi na obiekcie bazowym i korbie → Ulokowana korba z zaznaczonymi utworzonymi obiektami Elementów i ECS _(kolor zielony)_.

#### Baza - Płyta górna

![](/images/Assembly3_SketchSkeleton-06.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-07.png)

Zaznaczone okręgi na podstawie i górnej płycie → Ulokowana płyta górna

Poprzednio utworzone przeguby można rozpoznać po ich reprezentacjach wiązań _(kolor czerwony)_.

#### Korba - Pręt 1

![](/images/Assembly3_SketchSkeleton-08.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-09.png)

Zaznaczone okręgi na Korbie i Pręcie 1 → Ulokowany Pręt 1 i przechylona Korba

#### Płyta górna - Pręt 1

Ostatnie ogniwo w tym łańcuchu kinematycznym łączy dwa Elementy, których kierunki Z są już zdefiniowane, a wiązanie ![](/images/Assembly_ConstraintPointOnLine.svg) [punkt na linii](/Assembly3_ConstraintPointOnLine/pl "Assembly3 ConstraintPointOnLine/pl") jest wszystkim, czego potrzebujemy.

1. Wybierz okrąg z każdego obiektu do połączenia.
2. Naciśnij przycisk wiązania ![](/images/Assembly_ConstraintPointOnLine.svg) [Punkt na linii](/Assembly3_ConstraintPointOnLine/pl "Assembly3 ConstraintPointOnLine/pl").

![](/images/Assembly3_SketchSkeleton-10.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-11.png)

Zaznaczone okręgi na Płycie górnej i Pręcie 1 → Ulokowany Pręt 1 i odchylona Korba i Płyta górna

Jeśli osie Z trzech elementów lub przegubów są równoległe i leżą na tej samej płaszczyźnie wirtualnej, solver może nie zmienić ich położenia w kolejnym kroku, ponieważ nie jest w stanie zdecydować, w którym kierunku należy obrócić środkowy przegub. Taka sytuacja może wystąpić dla elementu Pręt 1, przegubu Korba - Pręt 1 oraz przegubu Baza - Korba, który mamy tutaj. W takiej sytuacji musimy pomóc solverowi i obrócić jeden obiekt _(np. Korbę)_ ręcznie za pomocą narzędzia ![](/images/Assembly_AxialMove.svg) [Przesunięcie osiowe](/Assembly3_AxialMove/pl "Assembly3 AxialMove/pl").

#### Płyta górna - Pręt 2

Kolejny _(podrzędny)_ łańcuch kinematyczny zaczyna się od wiązania ![](/images/Assembly_ConstraintCoincidence.svg) [zbieżności](/Assembly3_ConstraintCoincidence/pl "Assembly3 ConstraintCoincidence/pl").

![](/images/Assembly3_SketchSkeleton-12.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-13.png)

Zaznaczone okręgi na Płycie górnej _(lub podstawie)_ i Pręcie 2 → Umiejscowiony Pręt 2

#### Pręt 2 - Płyta dolna

![](/images/Assembly3_SketchSkeleton-14.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-15.png)

Zaznaczone okręgi na Pręcie 2 i Płycie dolnej → Ulokowana Płyta dolna i przechylony Pręt 2

#### Płyta górna - Pręt 3

![](/images/Assembly3_SketchSkeleton-16.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-17.png)

Zaznaczone okręgi na Płycie górnej i Pręcie 3 → Ulokowany Pręt 3 i przeorganizowany górny podłańcuch kinematyczny

#### Płyta dolna - Pręt 3

Kolejny _(podrzędny)_ łańcuch kinematyczny kończy się na wiązaniu ![](/images/Assembly_ConstraintPointOnLine.svg) [Punkt na linii](/Assembly3_ConstraintPointOnLine/pl "Assembly3 ConstraintPointOnLine/pl").

![](/images/Assembly3_SketchSkeleton-18.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-19.png)

Zaznaczone okręgi na Płycie Dolnej i Pręcie 3 → Ulokowany Pręt 3 i przeorganizowane podłańcuchy ukinematyczne

.

Do połączenia obu podłańcuchów kinematycznych wykorzystujemy Pręt 4 z wiązaniem ![](/images/Assembly_ConstraintCoincidence.svg) [Zbieżności](/Assembly3_ConstraintCoincidence/pl "Assembly3 ConstraintCoincidence/pl") na jednym końcu oraz wiązaniem ![](/images/Assembly_ConstraintPointOnLine.svg) [Punkt na linii](/Assembly3_ConstraintPointOnLine/pl "Assembly3 ConstraintPointOnLine/pl") na drugim końcu.

#### Korba - Pręt 4

![](/images/Assembly3_SketchSkeleton-20.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-21.png)

Zaznaczone kręgi na Korbie i Pręcie 4 → Umiejscowiony Pręt 4

#### Płyta dolna - Pręt 1

![](/images/Assembly3_SketchSkeleton-22.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-23.png)

Zaznaczone okręgi na Płycie dolnej i Pręcie 4 → Ulokowany Pręt 4 i ostateczny widok układ zespołu kinematycznego.

### Siłownik

Ponieważ środowisko Złożenie 3 nie dostarcza żadnych środków do sterowania złożeniami kinematycznymi, potrzebujemy zewnętrznej pomocy, takiej jak w poradniku [Sterownik kinematyczny](/Tutorial_KinematicController/pl "Tutorial KinematicController/pl"). Aby użyć tego kontrolera, musimy oznaczyć etykietę jednego z wiązań przyrostkiem `"Driver"`, aby uczynić je wiązaniem napędzającym. Może on być oddzielony przez `"."` lub `"-"` dla jasności, ponieważ kontroler sprawdzi tylko czy etykieta kończy się na `"Driver"`.

Zmieniamy zatem etykietę złącza Baza-Korba na `Base-Crank.Driver`.

### Ukończony szkielet

Gotowy zespół kinematyczny z dezaktywowaną reprezentacją Elementów i Więzów powinien wyglądać następująco:

![](/images/Assembly3_SketchSkeleton-24.png)

Ukończone złożenie widok w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl") oraz w oknie [widoku 3D](/3D_view/pl "3D view/pl")

.

![](/images/Assembly3_SketchSkeleton-27.gif)

Animacja GIF wykonana na podstawie sekwencji obrazów z tematu [Poradnik: Sterownik kinematyczny](/Tutorial_KinematicController/pl "Tutorial KinematicController/pl").

## Dołączanie geometrii w przestrzeni 3D

Moje oczekiwania dotyczące dołączania nowego obiektu do obiektu bazowego należącego do zespołu kinematycznego były czymś w rodzaju:

- Umieść nowy obiekt w kontenerze Część obiektu bazowego.
- Ustaw nowy obiekt w stosunku do obiektu bazowego.
- Ustalenie względnego przesunięcia i orientacji za pomocą wiązania Mocowanie.

Ale to byłoby zbyt proste.

Narzędzie ![](/images/Assembly_ConstraintAttachment.svg) [Wiązanie umocowania](/Assembly3_ConstraintAttachment/pl "Assembly3 ConstraintAttachment/pl"), jak każde narzędzie wiązania w środowisku Złożenie 3, opiera się na wykorzystaniu obiektów Elementów i ich układów współrzędnych _(ECS)_ do zadań pozycjonowania.

I tak dołączanie obiektów jest po prostu innym sposobem dodawania obiektów do *(pod)*zespołu.

Dla przykładu dołączmy pręt 4-3D do pręta 4:

Obiekty mają inną orientację i obiekt 3D powinien być przesunięty względem obiektu 2D.

1. Umieść nowy obiekt w kontenerze Części obiektu bazowego.
2. Wybierz dwa odpowiadające sobie okręgi lub łuki.
3. Naciśnij przycisk ![](/images/Assembly_ConstraintAttachment.svg) [Wiązanie umocowania](/Assembly3_ConstraintAttachment/pl "Assembly3 ConstraintAttachment/pl").

: ![](/images/Assembly3_SketchSkeleton-28.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-29.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-30.png)

Pręt 4 (zablokowany) i pręt 4-3D → Zaznaczone łuki → Ulokowany pręt 4-3D _(oba układy ECS są w tym samym miejscu z identyczną orientacją)_.

Widać teraz wyraźnie, że narzędzie ![](/images/Assembly_ConstraintAttachment.svg) [Wiązanie umocowania](/Assembly3_ConstraintAttachment/pl "Assembly3 ConstraintAttachment/pl") ignoruje odsunięcie i orientację pomiędzy oboma obiektami.

Jednak pozycja jest już zdefiniowana tak, jak chcieliśmy, więc musimy tylko ręcznie dostosować kąt i zdefiniować pożądane odsunięcie:

- Ustaw DANE**Odsunięcie, Kąt** pierwszego elementu w kontenerze Dołączenie, aby dopasować orientację.
- Ustaw DANE**Odsunięcie, Pozycja, Z** tego samego Elementu, aby zastosować odsunięcie.

W przypadku, gdy ustawimy właściwości drugiego Elementu, ruch kąta i przesunięcia poszedłby w przeciwnym kierunku.

: ![](/images/Assembly3_SketchSkeleton-30.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-31.png) ![](/images/Button_right.svg) ![](/images/Assembly3_SketchSkeleton-32.png)

Umocowane → Kąt dostosowany → Przesunięcie zdefiniowane

Gdyby do każdego obiektu 2D był dołączony obiekt 3D, mogłoby to wyglądać następująco:

![](/images/Assembly3_SketchSkeleton-33.gif)

## Uwagi

Sekcja [Dołączanie geometrii w przestrzeni 3D](#Do.C5.82.C4.85czanie_geometrii_w_przestrzeni_3D) tylko pokazuje zarys możliwości rozbudowy podzespołu, a inne wiązania lub kombinacje wiązań mogą być bardziej odpowiednie niż wiązanie dołączania.

Ważne jest, aby przesuwać taki zespół kinematyczny w małych krokach, w przeciwnym razie solver podda się i zawiedzie. Prawie niemożliwe jest użycie funkcji ![](/images/Assembly_Move.svg) [Przenieś część](/Assembly3_MovePart/pl "Assembly3 MovePart/pl") lub ![](/images/Assembly_AxialMove.svg) [Przesunięcie osiowe](/Assembly3_AxialMove/pl "Assembly3 AxialMove/pl") dla tego zadania.

Funkcja ![](/images/Assembly_ConstraintCoincidence.svg) [Wiązanie zbieżności](/Assembly3_ConstraintCoincidence/pl "Assembly3 ConstraintCoincidence/pl") jest używana do sterowania zespołem kinematycznym, jego właściwość DANE**Kat** _(włączona przez właściwość DANE**Kąt blokady**)_ przyjmuje dodatnie lub ujemne liczby zmiennoprzecinkowe większe niż 360, więc może wykonać kilka pełnych obrotów.

Retrieved from "<http://wiki.freecad.org/index.php?title=Tutorial_KinematicSkeleton/pl&oldid=1172735>"
