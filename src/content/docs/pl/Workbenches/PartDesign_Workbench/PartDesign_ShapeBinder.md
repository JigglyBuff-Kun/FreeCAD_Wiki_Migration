---
title: Projekt Części Łącznik kształtu
---
|  |
| --- |
| Projekt części: Łącznik kształtu |
| Lokalizacja w menu |
| Part Design → Utwórz nowy łącznik kształtu |
| Środowisko pracy |
| [Projekt części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Projekt części: Podrzędny łącznik kształtu](/PartDesign_SubShapeBinder "PartDesign SubShapeBinder"), [Projekt części: Klon](/PartDesign_Clone "PartDesign Clone") |
|  |

## Opis

Narzędzie **Łącznik kształtu** tworzy łącznik kształtu odwołujący się do geometrii z jednego obiektu nadrzędnego. Łącznik kształtu jest używany wewnątrz [Zawartości](/PartDesign_Body/pl "PartDesign Body/pl") do odwoływania się do geometrii spoza obiektu Zawartości. Używanie zewnętrznej geometrii bezpośrednio w bryle jest niedozwolone i prowadzi do błędów wykraczania poza zakres.

Łącznik kształtu będzie śledził względne położenie geometrii, do której się odwołuje, co jest przydatne w kontekście tworzenia [złożeń](/Assembly "Assembly"), jeśli jego właściwość DANE**Wsparcie śledzenia** jest ustawiona na wartość `Prawda`. Zobacz [przykład](#Przykład) poniżej, aby zrozumieć, jak to działa.

Geometrią odniesienia może być pojedynczy obiekt *(na przykład [Prostopadłościan](/Part_Box/pl "Part Box/pl"), [Zawartość](/PartDesign_Body/pl "PartDesign Body/pl"), [szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl") lub [Cecha](/PartDesign_Feature/pl "PartDesign Feature/pl") wewnątrz bryły)* albo jeden lub więcej elementów podrzędnych (powierzchni, krawędzi lub wierzchołków) należących do tego samego obiektu nadrzędnego. To, jaka geometria powinna zostać wybrana, zależy od przeznaczenia Łącznika kształtu. W przypadku operacji typu logicznego należy wybrać bryłę. W przypadku operacji wstawiania można użyć powierzchni lub szkicu. W przypadku geometrii zewnętrznej w szkicu lub w celu dołączenia szkicu odpowiednia może być dowolna kombinacja elementów podrzędnych. Geometria, do której się odwołujemy, może również należeć do bryły, w której Łącznika kształtu jest zagnieżdżony.

![](/images/Shapebinder_flow.png)

Z dwóch wybranych powierzchni tworzony jest Łącznik kształtu w pustej jeszcze zawartości. Geometrii z Łącznika kształtu można następnie użyć jako geometrii zewnętrznej w szkicu w tej bryle zawartości.

## Użycie

1. [Aktywuj zawartość](/PartDesign_Body/pl#Pojedyncza_ci.C4.85g.C5.82a_bry.C5.82a "PartDesign Body/pl"), w którym Łącznik kształtu ma być zagnieżdżony.
2. Opcjonalnie wybierz pojedynczy obiekt lub jeden lub więcej elementów podrzędnych należących do tego samego obiektu nadrzędnego. Elementy podrzędne mogą być wybrane tylko w oknie [widoku 3D](/3D_view/pl "3D view/pl").
3. Wybierz opcję **Projekt Części → ![](/images/PartDesign_ShapeBinder.svg) Utwórz łącznik kształtu**.
4. Otwiera się panel zadań **Pozycja odniesienia parametrów kształtu**.
5. Opcjonalnie wybierz obiekt, nie jest to wymagane, jeśli chcesz wybrać elementy podrzędne:
   1. Naciśnij przycisk Obiekt.
   2. Wybierz obiekt w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl").
   3. Wszystkie poprzednio wybrane elementy podrzędne zostaną usunięte.
   4. Jeśli wybrano bryłę, wybranie elementów podrzędnych nie będzie możliwe, ponieważ należą one do innego obiektu, a mianowicie do [cechy czubka](/PartDesign_Body/pl#Czubek "PartDesign Body/pl") bryły.
6. Opcjonalnie można wybrać elementy podrzędne:
   1. Naciśnij przycisk Dodaj geometrię.
   2. Wybierz element podrzędny w oknie [widoku 3D](/3D_view/pl "3D view/pl").
   3. Przycisk Dodaj geometrię musi być wciśnięty dla każdego elementu podrzędnego, który chcesz dodać.
   4. Można wybrać tylko elementy podrzędne należące do tego samego obiektu nadrzędnego. W razie potrzeby użyj przycisku Obiekt, aby wybrać inny obiekt nadrzędny.
7. Opcjonalnie usuń elementy podrzędne:
   1. Naciśnij przycisk Usuń geometrię.
   2. Wybierz element podrzędny w oknie [widoku 3D](/3D_view/pl "3D view/pl").
   3. Przycisk Usuń geometrię musi być wciśnięty dla każdego elementu podrzędnego, który chcesz usunąć.
8. Naciśnij przycisk OK.

## Opcje

Aby edytować Łącznik kształtu, kliknij go dwukrotnie w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") lub kliknij go prawym przyciskiem myszki i wybierz **Edytuj łącznik kształtu** z menu kontekstowego [widoku drzewa](/Tree_view/pl "Tree view/pl").

## Uwagi

* Łącznik kształtu może być przeciągnięty z bryły, w której jest zagnieżdżony, i upuszczony na węzeł dokumentu ![](/images/Document.svg) w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl"). Taki niezagnieżdżony Łącznik kształtu może być użyty jako [właściwość podstawowa](/PartDesign_Body/pl#W.C5.82a.C5.9Bciwo.C5.9B.C4.87_podstawowa "PartDesign Body/pl") dla nowej bryły.
* Łącznik kształtu utworzony ze szkicu może mieć przeciwny "kierunek narzędzia". Na przykład [wyciągnięcie](/PartDesign_Pad/pl "PartDesign Pad/pl") utworzone ze szkicu może rozciągać się w kierunku +Y, podczas gdy [wyciągnięcie](/PartDesign_Pad/pl "PartDesign Pad/pl") o tych samych właściwościach utworzone z Łącznika kształtu rozciąga się w kierunku -Y. Przełączenie właściwości DANE**Odwrócony** *(lub pola wyboru)* rozwiąże ten problem.

## Łącznik kształtu obiektu podrzędnego kontra łącznik kształtu

Narzędzie Łącznik kształtów podrzędnych środowiska pracy Projekt Części i narzędzie Łącznik kształtu są dość podobne. Ich nazwy są nieco mylące, ponieważ oba mogą odwoływać się do całych obiektów i elementów podrzędnych.

Główne różnice to:

* Edycja Łącznika kształtów środowiska Projekt Części jest łatwiejsza. Dwukrotne kliknięcie obiektu w [Widoku drzewa](/Tree_view/pl "Tree view/pl") otworzy panel zadań.
* Łącznik kształtu środowiska Projekt Części może odwoływać się do pojedynczego całego obiektu lub elementy podrzędne należą do pojedynczego obiektu nadrzędnego. Łącznik kształtu podrzędnego środowiska Projekt Części nie ma tych ograniczeń.
* Tylko Łącznik kształtu podrzędnego środowiska Projekt Części może odwoływać się do geometrii z pliku zewnętrznego.
* Łącznik kształtu podrzędnego środowiska Projekt Części zawsze śledzi względne położenie geometrii, do której się odwołuje. W przypadku Łącznika kształtów środowiska Projekt Części to zachowanie jest opcjonalne poprzez jego właściwość DANE**Trace Support**.
* Tylko Łącznik kształtu podrzędnego środowiska Projekt Części obsługuje odsunięcie 2D.

Pamiętając, że każde z tych narzędzi ma swoje wady i zalety, a wybór może zależeć od przypadku użycia, można stwierdzić, że użycie Łącznika kształtów podrzędnych jest obecnie zalecane dla większości zastosowań ze względu na jego wszechstronność i zakres opcji. Więcej informacji na temat tych narzędzi można znaleźć w filmie MangoJelly [FreeCAD dla początkujących 34: Projekt Części, Łącznik kształtów kontra Łącznik kształtów podrzędnych](https://www.youtube.com/watch?v=ylAMGQ8HV0w%7C).

## Właściwości

* DANE**Wsparcie** (`LinkSubListGlobal`): wsparcie dla geometrii.
* DANE**Wsparcie śledzenia** (`Bool`):

Domyślnie przyjmuje wartość `Fałsz`. Przy ustawieniu tej opcji na wartość `Prawda`, Łącznik kształtów obserwuje względne rozmieszczenie części i zawartości *(poprzez manipulowanie wartościami ukrytej właściwości DANE**Umiejscowienie**)*.

## Przykład

W przykładzie wykorzystano funkcję Łącznik kształtów do wykonania otworu *(z gwintem lub bez)* przez więcej niż jedną bryłę. Normalnie funkcja Otwór w środowisku Projektowanie części jest ograniczona do jednej bryły. W przykładzie użyto dwóch sześcianów zwróconych do siebie, ale przesuniętych względem siebie w dowolny sposób. Otwory są tworzone za pomocą szkiców zawierających okrąg dla każdego otworu *(średnica jest ignorowana przez funkcję Otwór)*. Po skopiowaniu szkicu do drugiego sześcianu będzie on znajdował się w tej samej pozycji w lokalnym układzie współrzędnych sześcianu. Na rysunku widać to jako białe kółko na sześcianie znajdującym się z tyłu. Nie jest to zgodne z naszymi oczekiwaniami, ponieważ otwór w tym miejscu nie byłby wyrównany do otworu w pierwszym sześcianie.

![](/images/ShapeBinderThroughHole.png)

Przykładowa konfiguracja do pokazania jak wykonać otwory w różnych bryłach. Biały okrąg pokazuje, że kopiowanie szkiców nie jest wystarczające.

Oto jak użyć funkcji Łącznik kształtów, aby osiągnąć ten efekt:

1. Przygotuj scenę jak na powyższym obrazku. Jeśli używasz sześcianów ze środowiska [Part](/Part_Workbench/pl "Part Workbench/pl"), pamiętaj, że musisz je umieścić w kontenerze *zawartość*. Każdy z nich w oddzielnym kontenerze *zawartość*. W przeciwnym razie funkcje środowiska pracy [Projekt części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") nie działałyby. Jeśli budujesz je ze szkiców, system powinien domyślnie tworzyć kontenery typu *zawartość*.
2. W [edytorze właściwości](/Property_editor/pl "Property editor/pl") zmień położenie drugiego sześcianu tak, aby dotykał on pierwszego sześcianu z przemieszczeniem w bok.
3. Wybierz środowisko pracy Projekt części.
4. Utwórz szkic na powierzchni czołowej pierwszego sześcianu i umieść w dowolnym miejscu okrąg, a następnie zamknij szkic.
5. Zaznacz szkic w [widoku drzewa](/Tree_view/pl "Tree view/pl") i naciśnij przycisk ![](/images/PartDesign_Hole.svg) [Utwórz otwór ...](/PartDesign_Hole/pl "PartDesign Hole/pl"). Najpierw upewnij się, że pierwsza bryła jest [bryłą aktywną](/PartDesign_Body/pl#Aktywny_status "PartDesign Body/pl") *(podwójne kliknięcie)*.
6. Wybierz otwór w odpowiednim rozmiarze. Na powyższym rysunku wybrano również pogłębienie walcowe. Zamykamy funkcję [Utwórz otwór ...](/PartDesign_Hole/pl "PartDesign Hole/pl").

   :   Teraz obrazek powinien wyglądać jak powyżej. Po ukryciu pierwszego sześcianu *(zaznaczamy i wciskamy spację)* widać, że otwór nie sięga do drugiego sześcianu. Nie dosięgnie, nawet jeśli wybierzesz opcję *Przez wszystkie* lub jeśli podasz naprawdę dużą odległość w oknie dialogowym [Utwórz otwór ...](/PartDesign_Hole/pl "PartDesign Hole/pl"). Funkcja otworu jest zawsze ograniczona do jednej bryły.
   :   Tutaj z pomocą przychodzi nasz łącznik kształtu.
7. Najpierw wybierz tylną kostkę. To jest cel, do którego zostanie dodany łącznik kształtu. Musi on być [aktywny](/PartDesign_Body/pl#Aktywny_status "PartDesign Body/pl"), więc upewnij się, że został dwukrotnie kliknięty.
8. W drzewie wybierz szkic, którego użyliśmy do wykonania otworu. Ważne jest, aby nie aktywować pierwszej bryły.
9. Wybierz funkcję łączenia kształtów.

   :   Powinien otworzyć się panel zadań. W wierszu **Obiekt** powinna być widoczna nazwa naszego szkicu. Jeśli wybrałeś funkcję bez wybierania szkicu, możesz nacisnąć przycisk Obiekt i wybrać szkic z listy. Zalecane jest wybranie go najpierw, aby uzyskać właściwą nazwę, szczególnie jeśli mamy wiele szkiców z automatycznie generowanymi nazwami Sketch001, ... Funkcja **Dodaj geometrię** nie jest dla nas przydatna, ponieważ chcemy wybrać cały szkic. Opcja **Dodaj geometrię** jest używana, jeśli chcemy wybrać tylko części.
10. Naciśnij przycisk OK, aby zamknąć okno i sprawdzić, czy nowy element został dodany do drzewa drugiego sześcianu.

    :   Kiedy przełączasz widoczność segregatora kształtów, jest on wyświetlany na żółto w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Jest on jednak w złej pozycji, tak jak białe kółko na powyższym obrazku. Jest to spowodowane domyślnym ustawieniem parametru Śledzenia.
11. W widoku właściwości łącznika kształtu w zakładce **Dane** ustaw wartość parametru **Wsparcie śledzenia** na `Prawda`. Domyślnie ustawiona była wartość `Fałsz`.

    :   Jeśli parametr **Wsparcie śledzenia** ma wartość `Prawda`, na łącznik kształtu nie mają wpływu lokalne transformacje bryły docelowej, np. nasze translacje. Kształt pozostaje dokładnie tam, gdzie znajdował się oryginalny kształt obiektu przedniego. Spróbuj przesunąć przedni obiekt dookoła, a zobaczysz, że łącznik kształtu zawsze podąża do nowej pozycji.
12. Zaznacz Łącznik kształtu w drzewie i naciśnij przycisk ![](/images/PartDesign_Hole.svg) [Utwórz otwór ...](/PartDesign_Hole/pl "PartDesign Hole/pl")

Jeśli wprowadzisz te same wartości, co w przypadku otworu początkowego, zauważysz, że w drugim sześcianie nie zostanie utworzony żaden otwór. Dzieje się tak dlatego, że Łącznik kształtu w niektórych przypadkach ma przeciwny "kierunek narzędzia" w stosunku do szkicu odniesienia. Aby rozwiązać ten problem, zaznacz pole wyboru ![](/images/CheckBoxTrue.svg) Odwróć. Naciśnij przycisk OK, aby zakończyć.

1. Masz teraz połączone otwory w dwóch różnych bryłach. Jeśli zmienisz położenie okręgu w szkicu, oba otwory będą się dostosowywać. Możesz nawet dodać nowe okręgi w szkicu, aby utworzyć dodatkowe połączone otwory.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_ShapeBinder/pl&oldid=1460500>"