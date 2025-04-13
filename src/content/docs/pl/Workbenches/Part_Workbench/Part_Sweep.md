---
title: Część Wyciągnięcie po ścieżce
---
|  |
| --- |
| Część: Wyciągnięcie po ścieżce |
| Lokalizacja w menu |
| Część → Wyciągnięcie po ścieżce |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Wyciągnięcie przez profile](/Part_Loft/pl "Part Loft/pl") |
|  |

## Opis

Narzędzie ![](/images/Part_Sweep.svg) Wyciągnięcie po ścieżce jest używane do tworzenia powierzchni, powłoki lub bryły z jednego lub więcej profili *(przekrojów)* rozmieszczonych wzdłuż ścieżki.

Narzędzie **Wyciągnięcie po ścieżce** środowiska pracy Część jest podobne do narzędzia ![](/images/Part_Loft.svg) [Wyciągnięcie przez profile](/Part_Loft/pl "Part Loft/pl") z dodatkiem ścieżki do definiowania rzutu pomiędzy profilami.

![](/images/Part_Sweep_simple.png)

Bryła wygenerowana z pojedynczego profilu *(A)* rozmieszczonego wzdłuż linii grzbietu *(B)*.

## Użycie

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Part_Sweep.svg) **Wyciągnięcie po ścieżce ...**.
   * Wybierz opcję z menu **Część → ![](/images/Part_Sweep.svg) Wyciągnięcie po ścieżce ...**.
2. Otworzy się [panel zadań](/Task_panel/pl "Task panel/pl") Wyciągnięcie po ścieżce.
3. Na liście *Dostępne profile* po lewej stronie wybierz profil i kliknij strzałkę w prawo, aby umieścić go na liście *Wybrane profile* po prawej stronie.
4. Powtórz, jeśli wymagany jest więcej niż jeden profil.
5. Strzałki w górę i w dół zmieniają kolejność listy po prawej stronie. Nie ma to jednak wpływu na wynik. Położenie profili wzdłuż linii grzbietu określa kolejność ich użycia.
6. Kliknij przycisk Ścieżka wyciągnięcia, a następnie wybierz jeden z trybów wyboru:
   * *Wybór ścieżki*: wybierz jedną lub więcej sąsiadujących krawędzi w oknie [widoku 3D](/3D_view/pl "3D view/pl") *(naciśnij CTRL dla wielokrotnego wyboru)* i kliknij Gotowe. Przeciągnięcie zostanie wygenerowane tylko wzdłuż wybranych krawędzi.
   * *Pełny wybór ścieżki*: przełącz się do [Widoku drzewa](/Tree_view/pl "Tree view/pl"), wybierz obiekt, który ma być użyty jako grzbiet, przełącz się z powrotem do panelu zadań i kliknij Gotowe. Przeciągnięcie zostanie wygenerowane wzdłuż wszystkich ciągłych krawędzi znalezionych w obiekcie.
7. Zdefiniuj opcje [Utwórz bryłę](#Utwórz_bryłę) i [Wektor Freneta](#Wektor_Freneta).
8. Kliknij OK.

### Akceptowana geometria

* **Profile**: mogą być punktem *(wierzchołkiem)*, linią *(krawędzią)*, konturem lub ścianą. Krawędzie i kontury mogą być otwarte lub zamknięte. Istnieją różne [ograniczenia](#Ograniczenia), patrz poniżej. W niektórych przypadkach nie wystarczy prawidłowo zrównać profil ze ścieżką. Aby narzędzie zadziałało poprawnie, może być również konieczne [dołączenie](/Part_EditAttachment/pl "Part EditAttachment/pl") profilu do ścieżki. Jeśli szkic profilu jest dołączony do złego końca krawędzi ścieżki, zmień wartość właściwości DANE**Map Path Parameter** z 0 na 1.

* **Ścieżka**: może być linią *(krawędzią)* lub serią linii połączonych, linią złożoną lub różnymi elementami pierwotnymi środowiska Część, elementami środowiska Rysunek Roboczy, lub szkicem. Ścieżka może być otwarta lub zamknięta.

* Obiekty typu[odnośnik](/App_Link/pl "App Link/pl") powiązane z odpowiednimi typami obiektów oraz kontenery typu [część](/App_Part/pl "App Part/pl") z odpowiednimi widocznymi obiektami wewnątrz mogą być również używane jako profile i ścieżki. [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl")

## Opcje

#### Utwórz bryłę

Jeśli opcja **Utwórz bryłę** jest ustawiona na wartość `Prawda` *(wybrana)*, FreeCAD utworzy bryłę, pod warunkiem, że profile mają geometrię zamkniętą. Jeśli opcja jest ustawiona na wartość `Fałsz`, zostanie utworzona powierzchnia lub powłoka dla profili otwartych lub zamkniętych.

#### Wektor Freneta

![](/images/Sweep-frenet-comp.png)

![](/images/Sweep-frenet-comp.png)

Opcja **Wektor Freneta** kontroluje, w jaki sposób orientacja profilu zmienia się podczas podążania wzdłuż ścieżki przeciągania. Jeśli opcja ta ma wartość `Fałsz` *(nie została wybrana)*, orientacja profilu jest utrzymywana na stałym poziomie od punktu do punktu. Wynikowy kształt ma minimalne możliwe skręcenie. Nieintuicyjnie, gdy profil jest przemieszczany wzdłuż spirali, powoduje to powolne pełzanie *(obracanie)* orientacji profilu podczas przemieszczania się wzdłuż ścieżki. Ustawienie opcji **Wektor Freneta** na wartość `Prawda` zapobiega takiemu pełzaniu.

Jeśli opcja **Wektor Freneta** ma wartość `Prawda`, orientacja profilu jest obliczana na podstawie wektorów lokalnej krzywizny i styczności ścieżki. Utrzymuje to orientację profilu spójną podczas przeciągania wzdłuż spirali *(ponieważ wektor krzywizny prostej spirali jest zawsze skierowany do jej osi)*. Jednakże, gdy ścieżka nie jest spiralą, wynikowy kształt może czasami mieć dziwnie wyglądające skręcenia. Więcej informacji na ten temat można znaleźć na stronie [Formuły Freneta Serreta](http://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas).

#### Przejście

Opcja "Przejście" ustawia styl przejścia Przeciągnięcia na niestycznych połączeniach na ścieżce. Właściwość nie jest widoczna w panelu zadań i można ją znaleźć w [Edytorze własciwości](/Property_editor/pl "Property editor/pl") po utworzeniu przeciągnięcia.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Wyciągnięcia po ścieżce** wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Przeciągnięcie

* DANE**Profile** (`LinkList`): lista używanych profili.
* DANE**Kręgosłup** (`LinkSub`): kręgosłup *(ścieżka)*, wzdłuż którego ma przebiegać trasa.
* DANE**Bryła** (`Bool`): przyjmuje wartości `Prawda` lub `Fałsz` *(domyślnie)*. Wartość `Prawda` oznacza utworzenie bryły.
* DANE**Frenet** (`Bool`): przyjmuje wartości `Prawda` lub `Fałsz` *(domyślnie)*. Wartość `Prawda` oznacza użycie algorytmu Frenet.
* DANE**Przejście** (`Enumeration`): tryb przejścia. Dostępne opcje to ''*Przekształcenie*, *Ostry narożnik* lub *Zaokrąglony narożnik*.

## Ograniczenia

### Wierzchołek lub punkt

Wierzchołek lub punkt może być użyty tylko jako pierwszy i / lub ostatni profil.
Na przykład:

* Nie można wykonać przeciągnięcia od okręgu do punktu, do elipsy.
* Można jednak przejść od punktu do okręgu, przez elipsę do innego punktu.

### Profile

Podczas jednego cyklu przeciągania wszystkie profile *(linie, polilinie itp.)* muszą być otwarte lub zamknięte.
Przykładowo:

* Program FreeCAD nie może przeciągać między okręgiem środowiska Część a linią środowiska Część.

### Szkic

* Profil można utworzyć za pomocą szkicu. Jednak tylko prawidłowe szkice będą dostępne do wyboru w panelu zadań.
* Szkic musi zawierać tylko jedną otwartą lub zamkniętą polilinię lub linię *(może to być wiele linii, jeśli wszystkie te linie są połączone w taki sposób, że stanowią jedną polilinię)*.

### Obiekty środowiska Rysunek Roboczy

Profil może być obiektem środowiska pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl").  
Następujące obiekty mogą być poprawnymi profilami:

* punkt,
* Linia, Polilinia,
* krzywa złożona, krzywa Béziera,
* okrąg, elipsa,
* prostokąt, wielokąt.

### Obiekty środowiska Część

Profil może być obiektem środowiska pracy Część utworzonym za pomocą narzędzia [Utwórz geometrię pierwotną](/Part_Primitives/pl "Part Primitives/pl").  
Następujące obiekty mogą być prawidłowymi profilami:

* punkt *(wierzchołek)*,
* linia *(krawędź)*,
* spirala,
* okrąg, elipsa,
* wielokąt foremny,
* płaszczyzna.

## Odnośniki internetowe

* Ponieważ funkcja ta jest często używana do tworzenia gwintów dla śrub, powinieneś zobaczyć stronę [Przewodnik: Tworzenie gwintów](/Thread_for_Screw_Tutorial/pl "Thread for Screw Tutorial/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Sweep/pl&oldid=1494806>"