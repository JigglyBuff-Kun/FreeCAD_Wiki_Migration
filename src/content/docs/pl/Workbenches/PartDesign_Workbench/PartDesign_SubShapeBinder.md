---
title: Projekt Części Łącznik kształtów podrzędnych
---
|  |
| --- |
| Projekt Części: Łącznik kształtów obiektu podrzędnego |
| Lokalizacja w menu |
| Projekt Części → Łącznik kształtów obiektu podrzędnego |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Utwórz klona](/PartDesign_Clone/pl "PartDesign Clone/pl") |
|  |

## Opis

Narzędzie **Łącznik kształtów podrzędnych** tworzy łącznik kształtu odwołujący się do geometrii z jednego lub więcej obiektów nadrzędnych. Narzędzie Łącznik kształtów podrzędnych jest zazwyczaj używane wewnątrz [Zawartości](/PartDesign_Body/pl "PartDesign Body/pl") do odwoływania się do geometrii spoza Zawartości. Używanie zewnętrznej geometrii bezpośrednio w bryle jest niedozwolone i prowadzi do błędów wykraczania poza zakres. Jednak Łącznik kształtów podrzędnych może być również używany bez zagnieżdżania w Zawartości.

Łącznik kształtów podrzędnych śledzi względne rozmieszczenie geometrii, do której się odwołuje, co jest przydatne w kontekście tworzenia [złożeń](/Assembly/pl "Assembly/pl"), ale oprócz tego ma również własne umiejscowienie.

Geometria odniesienia może składać się z jednego lub wielu elementów. Każdy element może być pojedynczym obiektem *(na przykład [Zawartością](/PartDesign_Body/pl "PartDesign Body/pl"))*, obiektem podrzędnym *(na przykład [prostopadłościanem](/Part_Box/pl "Part Box/pl") wewnątrz obiektu [Części](/Std_Part/pl "Std Part/pl") lub [szkicem](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl") lub [cechą](/PartDesign_Feature/pl "PartDesign Feature/pl") wewnątrz bryły)* lub elementem podrzędnym *(ściana, krawędź lub wierzchołek)*. To, jaką geometrię należy wybrać, zależy od przeznaczenia Łącznika kształtów podrzędnych. W przypadku operacji typu logicznego należy wybrać bryłę. W przypadku operacji [wyciągnięcia](/PartDesign_Pad/pl "PartDesign Pad/pl") można użyć ściany, szkicu lub polilinii planarnej. W przypadku [geometrii zewnętrznej](/Sketcher_External/pl "Sketcher External/pl") w szkicu lub w celu dołączenia szkicu można użyć dowolnej kombinacji elementów podrzędnych. Elementy mogą należeć do różnych obiektów nadrzędnych, a nawet mogą należeć do bryły, w której zagnieżdżony jest Łącznik kształtów podrzędnych. Ponieważ Łącznik kształtów podrzędnych jest obiektem [bazującym na łączu](/Std_LinkMake/pl "Std LinkMake/pl"), geometria, do której się odwołuje, może również należeć do zewnętrznego dokumentu.

![](/images/PartDesign_SubShapeBinder_example_1.png) ![](/images/PartDesign_SubShapeBinder_example_2.png)

Z lewej strony dwie bryły utworzone w dwóch oddzielnych [Zawartościach](/PartDesign_Body/pl "PartDesign Body/pl").  
Z prawej strony dwie bryły Łącznika kształtów podrzędnych odwołujące się do geometrii z pierwszej bryły, zagnieżdżone w drugiej bryle i przesunięte w inne położenie.

![](/images/PartDesign_SubShapeBinder_example_3.png)

Dwa obiekty Łącznik kształtu podrzędnego są używane do utworzenia obiektu [przecięcia logicznego](/PartDesign_Boolean/pl "PartDesign Boolean/pl") i [wyciągnięcia](/PartDesign_Pad/pl "PartDesign Pad/pl") w drugim korpusie.

## Użycie

### W tym samym dokumencie

1. Jeśli w dokumencie jest wiele brył: opcjonalnie [aktywuj bryłę](/PartDesign_Body/pl#Pojedyncza_ci.C4.85g.C5.82a_bry.C5.82a "PartDesign Body/pl"), w której ma być zagnieżdżony Łącznik kształtów podrzędnych.
2. Wybierz wymaganą geometrię. Elementy podrzędne można wybierać tylko w oknie [widoku 3D](/3D_view/pl "3D view/pl").
3. Narzędzie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/PartDesign_SubShapeBinder.svg) Łącznik kształtów podrzędnych.

1. * Wybierz z menu opcję **Projekt Części → ![](/images/PartDesign_SubShapeBinder.svg) Utwórz łącznik kształtu obiektu podrzędnego**.
2. Zostanie utworzony Łącznik kształtów podrzędnych.
3. Jeśli w dokumencie jest tylko jeden obiekt Zawartość, obiekt Łącznik kształtów podrzędnych jest do niego automatycznie dodawany, a Zawartość zostaje automatycznie aktywowana. Jeśli tak jest, a Łącznik kształtów podrzędnych nie powinien być zagnieżdżony, można go przeciągnąć z Zawartości i upuścić na węzeł dokumentu ![](/images/Document.svg) w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl").

### W dokumencie zewnętrznym

1. W razie potrzeby otwórz dokument źródłowy *(dokument zewnętrzny)* i dokument docelowy. Oba dokumenty muszą być zapisane co najmniej raz.
2. Jeśli w dokumencie docelowym jest wiele brył: opcjonalnie aktywuj bryłę, w której ma być zagnieżdżony Łącznik kształtów podrzędnych.
3. Wybierz żądaną geometrię w dokumencie źródłowym. Elementy podrzędne można wybrać tylko w oknie [widoku 3D](/3D_view/pl "3D view/pl").
4. Przełącz się do dokumentu docelowego, klikając jego kartę w [Głównym obszarze widoku](/Main_view_area/pl "Main view area/pl").
5. Wywołaj narzędzie w sposób opisany powyżej.

### Zacznij od pustego Łącznika kształtów podrzędnych

1. Wykonaj instrukcje opisane w sekcji [W tym samym dokumencie](#W_tym_samym_dokumencie) powyżej, ale bez wybierania geometrii.
2. Zostanie utworzony pusty Łącznik kształtów podrzędnych.
3. Wybierz wymaganą geometrię. Elementy podrzędne można wybierać tylko w oknie [widoku 3D](/3D_view/pl "3D view/pl").
4. W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") przeciągnij i upuść zaznaczenie do segregatora Łącznika kształtów podrzędnych. Jeśli zaznaczyłeś elementy podrzędne, ich obiekty nadrzędne są podświetlone w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl"), wskazując obiekty, które należy przeciągnąć.
5. Opcjonalnie dodaj więcej geometrii w ten sam sposób.
6. Aby zastąpić już istniejącą geometrię, przytrzymaj klawisz Ctrl podczas operacji przeciągania i upuszczania.

## Uwagi

* Odsunięcie 2D jest obsługiwane dla niektórych typów kształtów, w tym powierzchni płaskich, krawędzi i polilinii. Ponieważ odsunięcie jest trudną operacją dla programu, nie zawsze się udaje.
* Łącznik kształtów podrzędnych, który nie jest zagnieżdżony w bryle, może zostać użyty jako [cecha podstawowa](/PartDesign_Body/pl#W.C5.82a.C5.9Bciwo.C5.9B.C4.87_podstawowa "PartDesign Body/pl") dla nowej Zawartości.
* Właściwość DANE**Podparcie** zawiera odnośniki do geometrii, do której się odwołujemy. Domyślnie właściwość ta jest tylko do odczytu, ale można ją zmodyfikować, postępując zgodnie z instrukcjami opisanymi w sekcji [Zacznij od pustego Łącznika kształtów podrzędnych](#Zacznij_od_pustego_.C5.81.C4.85cznika_kszta.C5.82t.C3.B3w_podrz.C4.99dnych).
* Łącznik kształtów podrzędnych utworzony ze szkicu może mieć przeciwny "kierunek narzędzia". Na przykład [wyciągnięcie](/PartDesign_Pad/pl "PartDesign Pad/pl") utworzone ze szkicu może rozciągać się w kierunku +Y, podczas gdy [wyciągnięcie](/PartDesign_Pad/pl "PartDesign Pad/pl") o tych samych właściwościach utworzone z Łącznika kształtów podrzędnych rozciąga się w kierunku -Y. Przełączenie właściwości DANE**Odwrócony** *(lub pola wyboru)* rozwiąże ten problem.

## Łącznik kształtów podrzędnych kontra łącznik kształtu

Zapoznaj się z akapitem: [Łącznik kształtu](/PartDesign_ShapeBinder/pl#.C5.81.C4.85cznik_kszta.C5.82tu_obiektu_podrz.C4.99dnego_kontra_.C5.82.C4.85cznik_kszta.C5.82tu "PartDesign ShapeBinder/pl").

## Właściwości

Obiekt Łącznik kształtów podrzędnych środowiska Projekt Części wywodzi się z obiektu [Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada również następujące dodatkowe właściwości:

### Dane

Podstawa

* DANE**Support** (`XLinkSubList`): podparcie geometrii.
* DANE**Fuse** (`Bool`): jeśli parametr ma wartość `PRAWDA`, to łączone kształty brył zostaną scalone.
* DANE**Make Face** (`Bool`): jeśli parametr ma wartość `PRAWDA`, to zostanie utworzona powierzchnia dla połączonych linii.
* DANE**Claim Children** (`PropertyBool`): jeśli parametr ten ma wartość `PRAWDA`, spowoduje, że połączone obiekty będą traktowane jako elementy podrzędne w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl").
* DANE**Relative** (`Bool`): jeśli parametr będzie miał wartość `PRAWDA`, to włączy względne łączenie elementów podrzędnych.
* DANE**Bind Mode** (`Enumeration`): tryb wiązania, `Synchronized`, `Frozen`, `Detached`.
* DANE**Partial Load** (`Bool`): jeśli parametr przyjmie wartość `PRAWDA`, umożliwi to częściowe ładowanie obiektów.
* DANE (hidden)**Context** (`XLink`): obiekt kontenerowy tego obiektu wiążącego.
* DANE**Bind Copy On Change** (`Enumeration`)
* DANE**Refine** (`Bool`): jeśli parametr przyjmie wartość `PRAWDA`, to nadmiarowe krawędzie zostaną usunięte *(na przykład po operacji logicznej)*.
* DANE (hidden)**\_ Version** (`Integer`): wersja obiektu tego typu.
* DANE (hidden)**\_ Copied Link** (`XLinkSub`)

Cache

* DANE (ukryte)**Body** (`Matrix`): macierz jednorodności (osobna właściwość dla każdego obiektu we właściwości DANE**Support**)..

Wyrównanie

* DANE**Offset**: Odsunięcie 2D, które ma być zastosowane. Jeśli wartość odsunięcia = 0, nie zostanie zastosowane żadne odsunięcie. Jeśli wartość odsunięcia < 0, wówczas odsunięcie jest stosowane do wewnątrz.
* DANE**Offset Join Type**: Metoda dołączania dotycząca odsunięcia połączeń niestycznych. Metodą może być `Arcs`, `Tangent` lub `Intersection`.
* DANE**Offset Fill** (`Bool`): Jeśli parametr ten zostanie ustawiony na wartość `true`, pomiędzy nową i oryginalną linią zostanie utworzona ściana. Zobacz także właściwość DANE**Make Face**.
* DANE**Offset Open Result** (`Bool`): Wpływa na sposób przetwarzania otwartych polilinii. Jeśli parametr zostanie ustawiony na wartość `false`, zostanie utworzona otwarta polilinia. Jeśli `PRAWDA`, powstanie zamknięta polilinia z dwustronnego odsunięcia, z zaokrągleniami wokół otwartych wierzchołków.
* DANE**Offset Intersection** (`Bool`): Wpływa na sposób przetwarzania złożeń. Jeśli parametr ten zostanie ustawiony na wartość `FAŁSZ`, wszystkie elementy potomne są przetwarzane niezależnie. Jeśli `PRAWDA`, a elementami potomnymi są krawędzie i polilinie, są one odsuwane w sposób zbiorczy.

### Widok

Base

* WIDOK**Use Binder Style** (`Bool`): Jeśli `PRAWDA`, kolory obiektu łącznika kształtu zależą od parametru [dostrajania](/Fine-tuning/pl#środowisko_pracy_Projekt_Części "Fine-tuning/pl") **DefaultDatumColor**. Jeśli `FAŁSZ`, stosowane są normalne kolory kształtu.

## Odnośniki internetowe

* [Nowa funkcja łącza kształtu podrzędnego](https://forum.freecadweb.org/viewtopic.php?t=41450), wyjaśnienie użycia z filmem.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubShapeBinder/pl&oldid=1515652>"