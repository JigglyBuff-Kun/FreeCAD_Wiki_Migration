---
title: Poradnik Złożenie kinematyczne
---

|                                                                          |
| ------------------------------------------------------------------------ |
| Ćwiczenie                                                                |
| Temat                                                                    |
| Złożenie 3, prosty mechanizm                                             |
| Poziom trudności                                                         |
| Przydatna jest podstawowa znajomość narzędzi środowiska pracy Złożenie 3 |
| Czas wykonania                                                           |
| 30 minut                                                                 |
| Autorzy                                                                  |
| [FBXL5](/User:FBXL5 "User:FBXL5")                                        |
| Wersja FreeCAD                                                           |
| 0.20 i następne                                                          |
| Pliki z przykładami                                                      |
| _Nie dołączono_                                                          |
| Zobacz również                                                           |
| _-_                                                                      |
|                                                                          |

## Wprowadzenie

Ten poradnik jest o tym, jak zbudować prosty mechanizm, głównie przy użyciu narzędzi z zewnętrznego ![](/images/Assembly3_workbench_icon.svg) [środowiska Złożenie 3](/Assembly3_Workbench/pl "Assembly3 Workbench/pl").

Złożenie kinematyczne, które stworzymy, będzie zbudowane z czterech części: Podstawy, Suwaka, Korby i Korbowodu. Są one połączone z wykorzystaniem czterech węzłów.

![](/images/Assembly3_KinematicExample-01.png)

Złożone części: Podstawa _(bursztynowy)_, Suwak _(jasnoniebieski)_, Korba _(czerwony)_, Korbowód _(zielony)_

## Złożenie

### Części

**Podstawa** to obiekt składający się z dwóch głównych elementów geometrycznych: otworu i sworznia. Oba są walcowe. Reszta kształtu nie jest istotna w tym poradniku, chyba że powoduje kolizje. To samo dotyczy innych części.

![](/images/Assembly3_KinematicExample-02.png)

**Suwak** składa się z wałka z sworzniem na jednym z końców. Oba są walcowe.

![](/images/Assembly3_KinematicExample-03.png)

**Korba** ma otwór i sworzeń. Znów, oba są walcowe.

![](/images/Assembly3_KinematicExample-04.png)

**Korbowód** ma dwa walcowe otwory.

![](/images/Assembly3_KinematicExample-05.png)

### Węzły

#### Zablokowana Podstawa

Aby utrzymać zespół w zadanym położeniu, należy zablokować podstawę.

: _(Jeśli polecenie ![](/images/Assembly_LockMover.svg) [Zablokuj przesunięcie](/Assembly3_LockMover/pl "Assembly3 LockMover/pl") jest aktywne, narzędzia ruchu są wyłączone, tak długo jak wybrana jest zablokowana część)_.

1. Wybierz jedną ścianę Podstawy.
2. Wciśnij przycisk ![](/images/Assembly_ConstraintLock.svg) [Utwórz "Wiązanie zablokowania"](/Assembly3_ConstraintLock/pl "Assembly3 ConstraintLock/pl"), aby Podstawa pozostawało na swoim miejscu na stałe.

![](/images/Assembly3_KinematicExample-08.png)
![](/images/Button_right.svg)
![](/images/Assembly3_KinematicExample-09.png)

Zaznaczona ściana → Powstały Element

Następnie wszystkie cztery części zostaną połączone czterema węzłami. Łańcuch kinematyczny zaczyna się od podstawy.

#### Węzeł Postawa-Suwak

Węzeł Podstawa-Suwak jest **węzłem walcowym** Umożliwia on Suwakowi ślizgać się wzdłuż i obracać dookoła osi Z otworu Podstawy, jednocześnie utrzymując osie Z obu elementów wyrównane _(współosiowe)_.

Pasującym wiązaniem jest wiązanie "Wiązanie osi". Działa ono z elementami, które reprezentują geometrię walcową, takimi jak powierzchnie walcowe, powierzchnie kołowe i krawędzie kołowe.

1. Wybierz powierzchnie walcowe otworu Podstawy i wałka Suwaka.
2. Wciśnij przycisk ![](/images/Assembly_ConstraintAxial.svg) [Utwórz "Wiązanie osi"](/Assembly3_ConstraintAxial/pl "Assembly3 ConstraintAxial/pl").
3. Opcjonalnie zmień etykietę utworzonych elementów (edytuj ich właściwość DANE**Label**).

![](/images/Assembly3_KinematicExample-10.png)
![](/images/Button_right.svg)
![](/images/Assembly3_KinematicExample-11.png)

Wybrane ściany → Wyrównane obiekty

#### Węzeł Podstawa-Korba

Węzeł Postawa-Korba jest **węzłem typu zawias**. Pozwala on obracać się Korbie wokół osi Z sworznia Podstawy, jednocześnie utrzymując wyrównanie _(współosiowość)_ osi Z obu elementów oraz stałą odległość między płaszczyznami XY.

Pasującym wiązaniem jest wiązanie _Zbieżność płaszczyzn_. Działa ono na elementach będących geometrią planarną jak okrągłe powierzchnie i okrągłe krawędzie _(w tym przypadku)_.

1. Wybierz okrągłą powierzchnię lub zewnętrzną okrągłą krawędź sworznia Podstawy oraz zewnętrzną okrągłą krawędź otworu Korby.
2. Wciśnij przycisk ![](/images/Assembly_ConstraintCoincidence.svg) [Utwórz wiązanie "Zbieżność płaszczyzn"](/Assembly3_ConstraintCoincidence/pl "Assembly3 ConstraintCoincidence/pl").
3. Opcjonalnie zmień etykiety utworzonych elementów.

![](/images/Assembly3_KinematicExample-12.png)
![](/images/Button_right.svg)
![](/images/Assembly3_KinematicExample-13.png)

Zaznaczona ściana i krawędź → Wyrównane obiekty

#### Węzeł Suwak-Korbowód

Węzeł Suwak-Korba jest **węzłem typu zawias**. Pozwala on obracać się Korbowodowi wokół osi Z sworznia Suwaka, jednocześnie utrzymując wyrównanie _(współosiowość)_ osi Z obu elementów oraz stałą odległość między płaszczyznami XY.

Pasującym wiązaniem jest wiązanie _Zbieżność płaszczyzn_ _(zobacz wyżej)_.

1. Wybierz okrągłą powierzchnię lub zewnętrzną okrągłą krawędź sworznia Suwaka oraz zewnętrzną okrągłą krawędź otworu Korbowodu.
2. Wciśnij przycisk ![](/images/Assembly_ConstraintCoincidence.svg) [Utwórz wiązanie "Zbieżność płaszczyzn"](/Assembly3_ConstraintCoincidence/pl "Assembly3 ConstraintCoincidence/pl").
3. Opcjonalnie zmień etykiety utworzonych elementów.

![](/images/Assembly3_KinematicExample-14.png)
![](/images/Button_right.svg)
![](/images/Assembly3_KinematicExample-15.png)

Zaznaczona ściana i krawędź → Wyrównane obiekty

#### Węzeł Korba-Korbowód

Węzeł Korba-Korbowód jest **węzłem walcowym** Umożliwia on Korbowodowi obracać się dookoła i ślizgać się wzdłuż osi Z sworznia Korby, jednocześnie utrzymując osie Z obu elementów wyrównane _(współosiowe)_. Jednak możliwe jest tylko obracanie, ponieważ ruch ślizgowy jest ograniczony przez kombinację węzła Podstawa-Korba oraz węzła Suwak-Korbowód.

Pasującym wiązaniem jest "Wiązanie osi" _(zobacz wyżej)_.

1. Wybierz powierzchnie walcowe sworznia Korby i otworu Korbowodu.
2. Wciśnij przycisk ![](/images/Assembly_ConstraintAxial.svg) [Utwórz "Wiązanie osi"](/Assembly3_ConstraintAxial/pl "Assembly3 ConstraintAxial/pl").
3. Opcjonalnie zmień etykietę utworzonych elementów.

![](/images/Assembly3_KinematicExample-16.png)
![](/images/Button_right.svg)
![](/images/Assembly3_KinematicExample-01.png)

Wybrane ściany → Wyrównane obiekty

#### Nadmiarowe Wiązania

Gdy Podstawa jest zamocowana i wszystkie cztery przeguby są związane, w oknie [Widoku raportu](/Report_view/pl "Report view/pl") pojawiają się dwa komunikaty:

- Ostrzeżenie _(pomarańczowy)_: "...wiązania nadmiarowe".
- Zwykły komunikat _(czarny)_: "...pozostało stopni swobody: 0".

Taka kombinacja komunikatów występuje, gdy części zespołu są nadmiernie związane, ale solwer nadal jest w stanie znaleźć poprawne rozwiązanie. Ale co jest przyczyną nadmiarowości?

Jest to kierunek Z sworzni. Jeśli przyjrzymy się na przykład sworzniowi Suwaka, zauważymy, że oś Z jego obiektu elementu jest związana równolegle do osi Z sworznia Podstawy poprzez łańcuch złożeń Podstawa-Korba-Korbowód-Suwak. Oznacza to, że sworzeń Suwaka nie może obracać się wokół swoich osi X i Y.

![](/images/Assembly3_KinematicExample-06.png)

Z drugiej strony obrót wokół osi X _(kolor czerwony)_ jest już uniemożliwiony przez węzeł Podstawa-Korba, a zatem odpowiedni stopień swobody _(dof)_ jest związany dwukrotnie _(= nadmiarowy)_ i powoduje wyświetlenie ostrzeżenia.

: Aby uniknąć tej nadmiarowości, można by wstawić obiekt pomocniczy i odpowiednie wiązania, ale to temat na inny poradnik.
: Aby uniknąć podwójnego wiązania odsunięcia między Podstawą a Korbowodem, użyto różnych wiązań, z których tylko jedno blokuje ruch wzdłuż osi Z.

### Siłownik

Teraz jest to nadal złożenie statyczne. Aby przekształcić je w złożenie kinematyczne, należy użyć jednego z wiązań jako nastawnika. Aby użyć wiązania "Zbieżność płaszczyzn" w węźle Podstawa-Korba jako nastawnika, musimy kontrolować kąt między sworzniem Podstawy a Korbą. Można to zrobić, ustawiając właściwość DANE**Zablokuj kąt** na wartość `PRAWDA`. W celu późniejszego wykorzystania etykieta jest oznaczana przyrostkiem **.Driver**.

WłaściwosćDANE**Kąt** może zostać teraz użyta do obracania Korbą.

![](/images/Assembly3_KinematicExample-07.gif)

## Sterownik

Dobrze byłoby mieć okno dialogowe do zmiany wartości właściwości bez wpisywania i z automatycznym przeliczaniem.

Spójrz na poradnik [Sterownik Kinematyczny](/Tutorial_KinematicController/pl "Tutorial KinematicController/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Tutorial_KinematicAssembly/pl&oldid=1149559>"
