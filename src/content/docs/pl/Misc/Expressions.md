---
title: Wyrażenia
---
## Informacje ogólne

Możliwe jest definiowanie właściwości za pomocą wyrażeń matematycznych. W GUI, pola wyboru lub pola wejściowe, które są powiązane z właściwościami pokazują niebieską ikonę ![](/images/Bound-expression.svg), gdy są aktywowane. Kliknięcie ikony lub wpisanie znaku równości = otwiera edytor wyrażeń dla danej właściwości. Jeśli pole wejściowe pokazuje przycisk ... zamiast ikony, edytor wyrażeń można otworzyć, klikając właściwość prawym przyciskiem myszy i wybierając **Wyrażenie ...** z menu podręcznego.

Wyrażenie FreeCAD jest wyrażeniem matematycznym zgodnym z notacją dla standardowych [operatorów](#Obsługiwane_operatory) matematycznych, [funkcji](#Obsługiwane_funkcje) oraz [predefiniowanych stałych](#Obsługiwane_stałe) opisanych poniżej. Dodatkowo, wyrażenie może odwoływać się do innych [wyrażeń warunkowych](#Wyrażenia_warunkowe), a także używać warunków. Liczby w wyrażeniu mogą mieć opcjonalnie dołączoną [jednostkę](#Jednostki).

W liczbach można używać przecinka `,` lub kropki dziesiętnej `.` oddzielającej całe cyfry od części dziesiętnych.
Gdy używany jest przecinek, po nim **musi** następować co najmniej jedna cyfra.
Zatem wyrażenia `1.+2.` i `1,+2,` są nieprawidłowe, ale `1.0 + 2.0` i `1,0 + 2,0` są już poprawne.

Operatory i funkcje są świadome jednostek i wymagają poprawnych kombinacji jednostek, jeśli zostały podane. Na przykład, `2mm + 4mm` jest poprawnym wyrażeniem, podczas gdy `2mm + 4`. Dotyczy to również odwołań do właściwości obiektu, które mają jednostki, takie jak właściwości Długości. Tak więc `Pad001.Length + 1` jest wyrażeniem nieprawidłowym, ponieważ dodaje czystą liczbę do właściwości z jednostkami długości, konieczne jest użycie `Pad001.Length + 1mm`.

Niektóre błędy związane z jednostkami mogą wydawać się nieintuicyjne, z wyrażeniami albo są odrzucane, albo dają wyniki, które nie pasują do jednostek ustawianej właściwości. Oto kilka przykładów:

`1/2mm` nie jest interpretowany jako pół milimetra, ale jako `1/(2mm)`, co daje: `0,5 mm^-1`.

`sqrt(2)mm` nie jest prawidłowe, ponieważ wywołanie funkcji nie jest liczbą. Należy to wprowadzić jako `sqrt(2) * 1mm`.

### Argumenty funkcji

Wiele argumentów funkcji może być oddzielonych średnikiem `;` albo przecinkiem, *po którym następuje spacja* `,` . W tym drugim przypadku, po wprowadzeniu przecinek jest konwertowany na średnik. Gdy używany jest średnik, spacja nie jest wymagana.

Argumenty mogą zawierać odwołania do komórek w arkuszu kalkulacyjnym. Odwołanie do komórki składa się z wielkiej litery wiersza, po której następuje numer kolumny, na przykład `A1`. Można też odwołać się do komórki, używając jej aliasu, na przykład `Arkusz_kalkulacyjny.DługośćCzęści`.

### Odwołania do obiektów

Jak pokazano powyżej, można odwoływać się do obiektu poprzez jego DANE**Nazwa**. Ale można również użyć jego DANE**Etykiety**. W przypadku właściwości DANE**Etykieta**, musi ona być zamknięta w podwójnych symbolach `<<` i `>>`, na przykład `<<Etykieta>>`.

Można odwołać się do dowolnej właściwości obiektu. Na przykład, aby odwołać się do wysokości bryły walca, możesz użyć właściwości `Cylinder.Height` lub `<<Etykieta_walca>>.Height`.

Możliwe jest dodanie [właściwości użytkownika](/Property_editor/pl#Menu_kontekstowe "Property editor/pl") do obiektów i użycie ich w wyrażeniach. Aby odnosić się do wiązań w szkicach, zaleca się [nazywanie](/Sketcher_Workbench/pl#Edycja_wiązań "Sketcher Workbench/pl") ich.

Więcej informacji na temat odwoływania się do obiektów znajdziesz w akapicie [Odwołanie do danych CAD](#Odwo.C5.82anie_do_danych_CAD).

[Przewiń na górę strony](#top)

## Obsługiwane stałe

Obsługiwane są następujące stałe:

| Nazwa stałej | Opis |
| --- | --- |
| **e** | [Liczba Eulera](https://pl.wikipedia.org/wiki/Sta%C5%82a_Eulera) |
| **pi** | [Pi](https://pl.wikipedia.org/wiki/Pi) |

[Przewiń na górę strony](#top)

## Obsługiwane operatory

Obsługiwane są następujące operatory:

| Operator | Opis |
| --- | --- |
| **+** | [Dodawanie](https://pl.wikipedia.org/wiki/Dodawanie) |
| **-** | [Odejmowanie](https://pl.wikipedia.org/wiki/Odejmowanie) |
| **\*** | [Mnożenie](https://pl.wikipedia.org/wiki/Mno%C5%BCenie) |
| **/** | [Dzielenie](https://pl.wikipedia.org/wiki/Dzielenie) zmiennoprzecinkowe |
| **%** | [Modulo](https://pl.wikipedia.org/wiki/Modulo) |
| **^** | [Potęgowanie](https://pl.wikipedia.org/wiki/Pot%C4%99gowanie) |

[Przewiń na górę strony](#top)

## Obsługiwane funkcje

### Ogólne funkcje matematyczne

Obsługiwane są następujące funkcje matematyczne:

#### Funkcje trygonometryczne

[Funkcje trygonometryczne](https://pl.wikipedia.org/wiki/Funkcje_trygonometryczne) używają stopnia jako domyślnej jednostki. W przypadku miary radianowej, dodaj nazwę jednostki `rad` za *pierwszą* wartością w wyrażeniu. Tak więc np. `cos(45)` jest tym samym co `cos(pi rad / 4)`. W wyrażeniach w stopniach można używać albo nazwę jednostki `deg` albo symbol jednostki `°`, np. `360deg - atan2(3; 4)` lub `360° - atan2(3; 4)`. Jeśli wyrażenie nie ma jednostek i musi być przeliczone na stopnie lub radiany dla zgodności, pomnóż je przez `1deg`, `1°` lub `1rad`, odpowiednio, np. `(360 - X) * 1deg`; `(360 - X) * 1°`; `(0,5 + pi / 2) * 1rad`.

| Funkcja | Opis | Zakres wprowadzanych wartości |
| --- | --- | --- |
| `acos(x)` | [Arc cosine](https://pl.wikipedia.org/wiki/Funkcje_cyklometryczne#Basic_properties) | -1 <= x <= 1 |
| `asin(x)` | [Arc sine](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions#Basic_properties) | -1 <= x <= 1 |
| `atan(x)` | [Arc tangent](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions#Basic_properties), zwraca wartość w zakresie > -90° do < 90° | cały |
| `atan2(y; x)` | [Arc tangent](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions#Basic_properties) z "y/x" z uwzględnieniem kwadrantu, zwraca wartość w zakresie > -180° do <= 180° | cały, nieprawidłowe dane wejściowe x = y = 0, zwracają 0 |
| `cos(x)` | [Cosine](https://en.wikipedia.org/wiki/Trigonometric_functions#Right-angled_triangle_definitions) | cały |
| `cosh(x)` | [Hyperbolic cosine](https://en.wikipedia.org/wiki/Hyperbolic_function#Trigonometric_definitions) | cały |
| `sin(x)` | [Sine](https://en.wikipedia.org/wiki/Trigonometric_functions#Right-angled_triangle_definitions) | cały |
| `sinh(x)` | [Hyperbolic sine](https://en.wikipedia.org/wiki/Hyperbolic_function#Trigonometric_definitions) | cały |
| `tan(x)` | [Tangent](https://en.wikipedia.org/wiki/Trigonometric_functions#Right-angled_triangle_definitions) | cały, z wyjątkiem x = n\*90 przy n = nieparzysta liczba całkowita |
| `tanh(x)` | [Hyperbolic tangent](https://en.wikipedia.org/wiki/Hyperbolic_function#Trigonometric_definitions) | cały |
| `hypot(x; y)` | [dodatek Pitagorejski](https://en.wikipedia.org/wiki/Pythagorean_addition) *(**hypot**enuse)*. Np. hypot(4; 3) = 5. | x oraz y >= 0 |
| `cath(x; y)` | Biorąc pod uwagę przeciwprostokątną i jeden bok, zwraca drugi bok trójkąta. Np. cath(5; 3) = 4. | x oraz x >= y >= 0 |

#### Funkcje wykładnicze i logarytmiczne

| Funkcja | Opis | Zakres wprowadzanych wartości |
| --- | --- | --- |
| `exp(x)` | [Funkcja wykładnicza](https://pl.wikipedia.org/wiki/Funkcja_wyk%C5%82adnicza) | cały |
| `log(x)` | [Logarytm naturalny](https://pl.wikipedia.org/wiki/Logarytm_naturalny) | x > 0 |
| `log10(x)` | [Logarytm dziesiętny](https://pl.wikipedia.org/wiki/Logarytm_dziesi%C4%99tny) | x > 0 |
| `pow(x; y)` | [Potęgowanie](https://pl.wikipedia.org/wiki/Pot%C4%99gowanie) | cały |
| `sqrt(x)` | [Pierwiastek kwadratowy](https://pl.wikipedia.org/wiki/Pierwiastek_kwadratowy) | x >= 0 |
| `cbrt(x)` [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl") | [Pierwiastek sześcienny](https://pl.wikipedia.org/wiki/Pierwiastek_sze%C5%9Bcienny) | cały |

#### Funkcje zaokrąglania, obcinania i reszty

| Funkcja | Opis | Zakres wprowadzanych wartości |
| --- | --- | --- |
| `abs(x)` | [Wartość bezwzględna](https://pl.wikipedia.org/wiki/Warto%C5%9B%C4%87_bezwzgl%C4%99dna) | cały |
| `ceil(x)` | [Funkcja sufitu](https://pl.wikipedia.org/wiki/Pod%C5%82oga_i_sufit), najmniejsza wartość całkowita większa lub równa x | cały |
| `floor(x)` | [Funkcja podłogi](https://pl.wikipedia.org/wiki/Pod%C5%82oga_i_sufit), największa wartość całkowita mniejsza lub równa x | cały |
| `mod(x; y)` | [Reszta](https://pl.wikipedia.org/wiki/Reszta) po podzieleniu "'x'" przez "'y', znak wyniku to znak dywidendy. | cały, z wyjątkiem y = 0 |
| `round(x)` | [Zaokrąglanie](https://pl.wikipedia.org/wiki/Zaokr%C4%85glanie) do najbliższej liczby całkowitej | cały |
| `trunc(x)` | [Obcinanie](https://pl.wikipedia.org/wiki/Obcinanie) do najbliższej liczby całkowitej w kierunku zera | cały |

[Przewiń na górę strony](#top)

### Funkcje statystyczne / agregujące

[Funkcje agregujące](https://en.wikipedia.org/wiki/Aggregate_function) przyjmują jeden lub więcej argumentów.

Poszczególne argumenty funkcji agregujących mogą składać się z zakresów komórek. Zakres komórek jest wyrażony jako dwa odwołania do komórek oddzielone dwukropkiem `:`, na przykład `average(B1:B8)` lub `sum(A1:A4; B1:B4)`.
Odwołania do komórek mogą również wykorzystywać aliasy komórek, na przykład `average(StartTemp:KoniecTemp)`.

Obsługiwane są następujące funkcje agregacji:

| Funkcja | Opis | Zakres wprowadzanych wartości |
| --- | --- | --- |
| `average(a; b; c; ...)` | [Średnia](https://pl.wikipedia.org/wiki/%C5%9Arednia_arytmetyczna) wartość argumentów, tak samo jak sum(a; b; c; ...) / count(a; b; c; ...) | cały |
| `count(a; b; c; ...)` | [Zlicz](https://en.wikipedia.org/wiki/Counting) wartość argumentów, zwykle używane dla zakresów komórek | cały |
| `max(a; b; c; ...)` | [Maksimum](https://pl.wikipedia.org/wiki/Funkcje_minimum_i_maksimum) wartość argumentów | cały |
| `min(a; b; c; ...)` | [Minimum](https://pl.wikipedia.org/wiki/Funkcje_minimum_i_maksimum) wartość argumentów | cały |
| `stddev(a; b; c; ...)` | [Odchylenie standardowe](https://pl.wikipedia.org/wiki/Odchylenie_standardowe) wartości argumentów | cały |
| `sum(a; b; c; ...)` | [Suma](https://pl.wikipedia.org/wiki/Sumowanie) wartości argumentów, typowo stosowane dla zakresów komórek | cały |

[Przewiń na górę strony](#top)

### Operacje na ciągach znaków

#### Rozpoznawanie łańcucha znaków

Łańcuchy są identyfikowane w wyrażeniach przez otoczenie ich podwójnymi daszkami otwierającymi/zamykającymi *(podobnie jak etykiety)*.

W poniższym przykładzie "TEXT" jest rozpoznawany jako ciąg znaków : `<<TEXT>>`.

#### Łączenie łańcuchów znaków

Łańcuchy mogą być sumowane przy użyciu znaku +.

Na przykład `<<Mój>> + <<TEKST>>` będzie złączone do "MójTEKST".

#### konwersja łańcuchów znaków

Wartości numeryczne można konwertować na ciągi za pomocą funkcji `str`:

`str(Box.Length.Value)`

#### Formatowanie łańcucha znaków

Formatowanie ciągów jest obsługiwane za pomocą *(starego)* sposobu środowiska Python w %-styl.

Wszystkie specyfikatory % są zdefiniowane w [dokumentacji](https://docs.python.org/3/library/stdtypes.html#printf-style-string-formatting) środowiska Python.

Na przykład, zakładając, że masz sześcian o domyślnej długości boków 10mm o nazwie "Sześcian" *(domyślne nazewnictwo FreeCAD)*, następujące wyrażenie `<<Długość sześcianu: %s>> % Box.Length` zostanie rozwinięte do "Długość sześcianu: 10.0mm".

Dla więcej niż jednego specyfikatora **%** należy użyć następującej składni: `<<długość sześcianu to %s, a szerokość to %s>> % tuple(Box.Length; Box.Width)`. Można też użyć operacji łączenia: `<<Długość sześcianu wynosi %s>> % Box.Length + << a szerokość wynosi %s>> % Box.Width` zostanie rozwinięte do "Długość sześcianu wynosi 10.0 mm a szerokość 10.0 mm".

```
Na forum dostępny jest przykładowy plik FreeCAD wykorzystujący formatowanie ciągów znaków.

```

[Przewiń na górę strony](#top)

### Funkcje tworzenia obiektów

W wyrażeniach można tworzyć następujące obiekty za pomocą następujących funkcji:

| Typ | Funkcja | Opis |
| --- | --- | --- |
| `Tuple` | `tuple(a; b; ...)` | Przykład: `tuple(2; 1; 2)` |
| `List` | `list(a; b; ...)` | Przykład: `list(2; 1; 2)` |
| [`Vector`](/Vector_API "Vector API") | `vector(x; y; z)` | Utwórz wektor używając trzech wartości jednostkowych bez jednostek lub `Długości`. Przykład: `vector(2; 1; 3)` |
| `create(<<vector>>; x; y; z)` |
| [`Matrix`](/Matrix_API "Matrix API") | ``` matrix(   a11; a12; a13; a14;   a21; a22; a23; a24;   a31; a32; a33; a34;   a41; a42; a43; a44 )  ``` | Create a 4x4 matrix in [row-major order](https://en.wikipedia.org/wiki/Row-_and_column-major_order): [     a  11   a  12   a  13   a  14    a  21   a  22   a  23   a  24    a  31   a  32   a  33   a  34    a  41   a  42   a  43   a  44 ] {\displaystyle {\begin{bmatrix}a\_{11}&a\_{12}&a\_{13}&a\_{14}\\a\_{21}&a\_{22}&a\_{23}&a\_{24}\\a\_{31}&a\_{32}&a\_{33}&a\_{34}\\a\_{41}&a\_{42}&a\_{43}&a\_{44}\\\end{bmatrix}}} {\displaystyle {\begin{bmatrix}a_{11}&a_{12}&a_{13}&a_{14}\\a_{21}&a_{22}&a_{23}&a_{24}\\a_{31}&a_{32}&a_{33}&a_{34}\\a_{41}&a_{42}&a_{43}&a_{44}\\\end{bmatrix}}}  Można podać minimum 1 argument, np. `matrix(1)`, który tworzy macierz tożsamości.  Przykład: `matrix(1; 2; 3; 4; 5; 6; 7; 8; 9; 10; 11; 12; 13; 14; 15; 16)` |
| `create(<<matrix>>; a11; a12; ...; a44)` |
| `Rotation` | `rotation(axis; angle)` | Utwórz `Rotation` określając jego `axis`. (`Vector`) i `angle` (`Angle` jednostkowy lub bezjednostkowy), lub trzy kąty Eulera. `α`, `β`, `γ`. Przykład:   * `rotation(vector(0; 1; 0); 45)` * `create(<<rotation>>; 30; 30; 30)` |
| `rotation(α; β; γ)` |
| `create(<<rotation>>; axis; angle)` |
| `create(<<rotation>>; α; β; γ)` |
| [`Placement`](/Placement_API "Placement API") | `placement(base; rotation)` | Utwórz `Placement` z różnymi parametrami, w tym:  * `base`: położenie podstawowe (`Vector`) * `center`: położenie środka (`Vector`) * `rotation`: `Rotation` * `axis`: oś obrotu (`Vector`) * `angle`: kąt obrotu (unit-less or `Angle` unit value) * `matrix`: `Matrix`   Przykład:   * `placement(vector(2; 1; 3); rotation(vector(0; 0; 1); 45))` * `create(<<placement>>; create(<<vector>>; 2; 1; 2); create(<<rotation>>; create(<<vector>>; 0; 1; 0); 45))` |
| `placement(base; rotation; center)` |
| `placement(base; axis; angle)` |
| `placement(matrix)` |
| `create(<<placement>>; ...)` |

[Przewiń na górę strony](#top)

### Funkcje wektorów

Funkcje: [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl").

| Funkcja / Operator | Opis |
| --- | --- |
| `v1 + v2` | Dodaj dwa wektory. |
| `v1 - v2` | Odejmowanie dwóch wektorów. |
| `v * s` | Jednolite skalowanie wektora przez `s`. |
| `vangle(v1; v2)` | Kąt między dwoma wektorami w stopniach. |
| `vcross(v1; v2)` | Iloczyn krzyżowy dwóch wektorów      v  1 ×  v  2 {\displaystyle v\_{1}\times v\_{2}} {\displaystyle v_{1}\times v_{2}}. |
| `v1 * v2` | Iloczyn kropkowy dwóch wektorów      v  1 ⋅  v  2 {\displaystyle v\_{1}\cdot v\_{2}} {\displaystyle v_{1}\cdot v_{2}}. |
| `vdot(v1; v2)` |
| `vlinedist(v1, v2, v3)` | Odległość między wektorem `v1` a linią przechodzącą przez `v2` w kierunku `v3`. |
| `vlinesegdist(v1; v2; v3)` | Odległość między wektorem `v1` a najbliższym punktem na odcinku linii od `v2` do `v3`. |
| `vlineproj(v1; v2; v3)` | Rzutuj wektor `v1` na linię przechodzącą przez `v2` w kierunku `v3`. |
| `vnormalize(v)` | Normalizuje wektor do wektora jednostkowego. |
| `vplanedist(v1)` | Odległość między wektorem `v1` a płaszczyzną zdefiniowaną przez punkt `v2` i normalną `v3`. |
| `vplaneproj(v1)` | Rzutuje wektor `v1` na płaszczyznę zdefiniowaną przez punkt `v2` i normalną `v3`. |
| `vscale(v; sx; sy; sz)` | Niejednolite skalowanie wektora przez `sx` w kierunku X, `sy` w kierunku Y i `sz` w kierunku Z. |
| `vscalex(v; sx)` |
| `vscaley(v; sy)` |
| `vscalez(v; sz)` |

[Przewiń na górę strony](#top)

### Funkcje macierzy

`Rotation` oraz `Placement` może być reprezentowana przez `Matrix`. Poniższe funkcje przyjmują `Matrix`, `Rotation` lub `Placement` jako pierwszy parametr, oznaczony w poniższej tabeli przez `m`. Typ zwracanego obiektu jest taki sam jak obiekt podany w pierwszym argumencie, z wyjątkiem użycia `mtranslate` na `Rotation`, w którym to przypadku zwrócony zostanie `Placement`.

| Funkcja | Opis |
| --- | --- |
| `minvert(m)` | Oblicz [Inverse matrix](https://en.wikipedia.org/wiki/Invertible_matrix). |
| `mrotate(m; rotation)` | [Rotate](https://en.wikipedia.org/wiki/Transformation_matrix#Rotation_2) przez:  * `Rotation` * oś (`Vector`) i kąt (`Angle` jednostkowy lub bezjednostkowy) * trzy kąty Eulera `α`, `β`, `γ` |
| `mrotate(m; axis; angle)` |
| `mrotate(m; α; β; γ)` |
| `mrotatex(m; angle)` | [Rotate](https://en.wikipedia.org/wiki/Transformation_matrix#Rotation_2) wokół osi X. |
| `mrotatey(m; angle)` | [Rotate](https://en.wikipedia.org/wiki/Transformation_matrix#Rotation_2) wokół osi Y. |
| `mrotatez(m; angle)` | [Rotate](https://en.wikipedia.org/wiki/Transformation_matrix#Rotation_2) wokół osi Z. |
| `mtranslate(m; vector)` | [Przekształć](https://en.wikipedia.org/wiki/Translation_(geometry)#Matrix_representation) za pomocą `vector` (`Vector`) lub wartości X, Y, Z. Jeśli przekształcenie dotyczy `Rotation`, zwróconym obiektem jest `Placement`. |
| `mtranslate(m; x; y; z)` |
| `mscale(m; vector)` | [Skaluj](https://en.wikipedia.org/wiki/Scaling_(geometry)#Matrix_representation) za pomocą `vector` (`Vector`) lub wartości X, Y, Z. |
| `mscale(m; x; y; z)` |

[Przewiń na górę strony](#top)

## Wyrażenia warunkowe

Wyrażenia warunkowe mają postać `condition ? resultTrue : resultFalse`. Warunek jest zdefiniowany jako wyrażenie, które oblicza się jako `0` (`Fałsz`) lub niezerowe (`Prawda`).

Zauważ, że aby użyć boolowskiej właściwości jako warunku, należy użyć następującej składni: `VarSet.MyBool == 1 ? 10 mm : 15 mm`.

Zdefiniowane są następujące [operatory relacyjne](https://en.wikipedia.org/wiki/Relational_operator#Standard_relational_operators):

| Operator | Opis |
| --- | --- |
| **==** | jest równy |
| **!=** | nie jest równy |
| **>** | większy niż |
| **<** | mniejszy niż |
| **>=** | większy lub równy |
| **<=** | mniejszy lub równy |

[Przewiń na górę strony](#top)

## Jednostki

Jednostki mogą być używane bezpośrednio w wyrażeniach. Parser łączy je z poprzedzającą wartością. Tak więc wartość `2mm` lub `2 mm` jest zapisana poprawne, podczas gdy `mm` jest niepoprawna, ponieważ nie ma poprzedzającego określenia wielkości / ilości.

Wszystkie wartości muszą mieć swoją jednostkę. Dlatego musisz generalnie używać jednostki dla wartości w arkuszach kalkulacyjnych.  
W niektórych przypadkach działa to nawet bez jednostki, na przykład jeśli masz np. w komórce B1 arkusza kalkulacyjnego tylko liczbę `1.5` i odnosisz się do niej jako do wysokości wyciągnięcia. Działa to tylko dlatego, że wysokość wyciągnięcia określa wstępnie jednostkę `mm`, która jest używana, jeśli nie podano jednostki. Nie powiedzie się jednak, jeśli jako wysokości wyciągnięcia użyjesz np. `Szkic1.Constraints.Width - Arkusz_kalkulacyjny.B1`, ponieważ `Szkic1.Constraints.Width` ma określoną jednostkę, a `Arkusz_kalkulacyjny.B1` nie.

Jednostki z wykładnikami mogą być wprowadzane bezpośrednio. Tak więc np. `mm^3` zostanie rozpoznane jako **mm³**, a `m^3` jako **m³**.

Jeśli masz zmienną, której nazwa jest jednostką, musisz umieścić ją pomiędzy `<< >>`, aby zapobiec rozpoznaniu jej jako jednostki. Na przykład, jeśli masz wymiar `Szkic.Constraints.A` to zostałby on rozpoznany jako jednostka ampera. Dlatego musisz zapisać go w wyrażeniu jako `Szkic.Constraints.<<A>>`.

Parser wyrażeń rozpoznaje następujące jednostki:

### Ilość materii

| Jednostka | Opis |
| --- | --- |
| mmol | Milli[Masa molowa](https://pl.wikipedia.org/wiki/Masa_molowa) |
| mol | [Mol](https://pl.wikipedia.org/wiki/Mol) |

### Kąt

| Jednostka | Opis |
| --- | --- |
| ° | [Stopień](https://pl.wikipedia.org/wiki/Stopie%C5%84_(k%C4%85t)); alternatywa dla jednostki deg |
| deg | [Stopień](https://pl.wikipedia.org/wiki/Stopie%C5%84_(k%C4%85t)); alternatywa dla jednostki ° |
| rad | [Radian](https://pl.wikipedia.org/wiki/Radian) |
| gon | [Gradian](https://en.wikipedia.org/wiki/Gon_(unit)) |
| M | [Minuta kątowa](https://pl.wikipedia.org/wiki/Minuta_k%C4%85towa), alternatywa dla jednostki ' |
| ′ | [Minuta kątowa](https://pl.wikipedia.org/wiki/Minuta_k%C4%85towa); alternatywa dla jednostki M |
| S | [Second of arc](https://en.wikipedia.org/wiki/Minute_and_second_of_arc); **NIE DZIAŁA**; alternatywa dla jednostki ″ |
| ″ | [Second of arc](https://en.wikipedia.org/wiki/Minute_and_second_of_arc); to jest podwójny znak prim (U+2033); alternatywa dla jednostki S |

### Prąd

| Jednostka | Opis |
| --- | --- |
| mA | Milli[amper](https://pl.wikipedia.org/wiki/Amper) |
| A | [Amper](https://pl.wikipedia.org/wiki/Amper) |
| kA | Kilo[amper](https://pl.wikipedia.org/wiki/Amper) |
| MA | Mega[amper](https://pl.wikipedia.org/wiki/Amper) |

### Pojemność elektryczna

Pojemność elektryczna:

| Jednostka | Opis |
| --- | --- |
| pF | Piko[farad](https://pl.wikipedia.org/wiki/Farad), |
| nF | Nano[farad](https://pl.wikipedia.org/wiki/Farad), |
| uF | Mikro[farad](https://pl.wikipedia.org/wiki/Farad); alternatywa dla jednostki *µF*, |
| µF | Mikro[farad](https://pl.wikipedia.org/wiki/Farad); alternatywa dla jednostki *uF*, |
| mF | Milli[farad](https://pl.wikipedia.org/wiki/Farad), |
| F | [Farad](https://pl.wikipedia.org/wiki/Farad); 1 F = 1 s^4·A^2/m^2/kg, |

### Ładunek elektryczny

Ładunek elektryczny:

| Jednostka | Opis |
| --- | --- |
| C | [Kolumb](https://pl.wikipedia.org/wiki/Kulomb); 1 C = 1 A·s |

### Przewodnictwo elektryczne

| Jednostka | Opis |
| --- | --- |
| uS | Micro[siemens](https://en.wikipedia.org/wiki/Siemens_(unit)); alternatywa dla jednostki µS |
| µS | Micro[siemens](https://en.wikipedia.org/wiki/Siemens_(unit)); alternatywa dla jednostki uS |
| mS | Milli[siemens](https://en.wikipedia.org/wiki/Siemens_(unit)) |
| S | [Siemens](https://en.wikipedia.org/wiki/Siemens_(unit)); 1 S = 1 s^3·A^2/kg/m^2 |
| kS | Kilo[Siemens](https://en.wikipedia.org/wiki/Siemens_(unit)) |
| MS | Mega[Siemens](https://en.wikipedia.org/wiki/Siemens_(unit)) |

### Indukcyjność elektryczna

Indukcyjność elektryczna:

| Jednostka | Opis |
| --- | --- |
| nH | Nano[henr](https://pl.wikipedia.org/wiki/Henr), |
| uH | Mikro[henr](https://pl.wikipedia.org/wiki/Henr); alternatywa dla jednostki *µH*, |
| µH | Mikro[henr](https://pl.wikipedia.org/wiki/Henr); alternatywa dla jednostki *uH*, |
| mH | Milli[henr](https://pl.wikipedia.org/wiki/Henr), | H | [v Henry]; 1 H = 1 kg·m^2/s^2/A^2, |

### Potencjał elektryczny

Potencjał elektryczny:

| Jednostka | Opis |
| --- | --- |
| mV | Milli[wolt](https://pl.wikipedia.org/wiki/Wolt) |
| V | [Wolt](https://pl.wikipedia.org/wiki/Wolt) |
| kV | Kilo[wolt](https://pl.wikipedia.org/wiki/Wolt) |

### Opór elektryczny

Rezystancja elektryczna:

| Jednostka | Opis |
| --- | --- |
| Ohm | [Om](https://pl.wikipedia.org/wiki/Om_(jednostka)); 1 Ohm = 1 kg·m^2/s^3/A^2, |
| kOhm | Kilo[om](https://pl.wikipedia.org/wiki/Om_(jednostka)), |
| MOhm | Mega[om](https://pl.wikipedia.org/wiki/Om_(jednostka)), |

### Energia / praca

| Jednostka | Opis |
| --- | --- |
| mJ | Milli[Dżul](https://pl.wikipedia.org/wiki/D%C5%BCul) |
| J | [Dżul](https://pl.wikipedia.org/wiki/D%C5%BCul) |
| kJ | Kilo[Dżul](https://pl.wikipedia.org/wiki/D%C5%BCul) |
| eV | [Elektronowolt](https://pl.wikipedia.org/wiki/Elektronowolt), 1 eV = 1.602176634e-19 J |
| keV | Kilo[Elektronowolt](https://pl.wikipedia.org/wiki/Elektronowolt) |
| MeV | Mega[Elektronowolt](https://pl.wikipedia.org/wiki/Elektronowolt) |
| kWh | [Kilowatogodzina](https://pl.wikipedia.org/wiki/Kilowatogodzina), 1 kWh = 3.6e6 J |
| Ws | [Watosekunda](https://pl.wikipedia.org/wiki/D%C5%BCul), alternatywa dla jednostki Dżul |
| VAs | [Woltoamperosekunda](https://pl.wikipedia.org/wiki/D%C5%BCul), alternatywa dla jednostki Dżul |
| CV | [Kulomb-wolt](https://pl.wikipedia.org/wiki/D%C5%BCul), alternatywa dla jednostki Dżul |
| cal | [Kaloria](https://pl.wikipedia.org/wiki/Kaloria), 1 cal = 4.184 J |
| kcal | Kilo[Kaloria](https://pl.wikipedia.org/wiki/Kaloria) |

### Siła

| Jednostka | Opis |
| --- | --- |
| mN | Milli[niuton](https://pl.wikipedia.org/wiki/Niuton) |
| N | [Niuton](https://pl.wikipedia.org/wiki/Niuton) |
| kN | Kilo[niuton](https://pl.wikipedia.org/wiki/Niuton) |
| MN | Mega[niuton](https://pl.wikipedia.org/wiki/Niuton) |
| lbf | [Funt-siła](https://pl.wikipedia.org/wiki/Funt-si%C5%82a) |

### Długość

| Jednostka | Opis |
| --- | --- |
| nm | Nano[metr](https://pl.wikipedia.org/wiki/Metr) |
| mu | Micro[metr](https://pl.wikipedia.org/wiki/Metr), alternatywa dla jednostki µm |
| µm | Micro[metr](https://pl.wikipedia.org/wiki/Metr), alternatywa dla jednostki mu |
| mm | Milli[metr](https://pl.wikipedia.org/wiki/Metr) |
| cm | Centi[metr](https://pl.wikipedia.org/wiki/Metr) |
| dm | Deci[metr](https://pl.wikipedia.org/wiki/Metr) |
| m | [Metr](https://pl.wikipedia.org/wiki/Metr) |
| km | Kilo[metr](https://pl.wikipedia.org/wiki/Metr) |
| mil | [Tysięczne części cala](https://en.wikipedia.org/wiki/Thousandth_of_an_inch), alternatywa dla jednostki thou |
| thou | [Tysięczne części cala](https://en.wikipedia.org/wiki/Thousandth_of_an_inch), alternatywa dla jednostki mil |
| in | [Cal](https://pl.wikipedia.org/wiki/Cal), alternatywa dla jednostki " |
| " | [Cal](https://en.wikipedia.org/wiki/Inch), alternatywa dla jednostki in |
| ft | [Stopa](https://pl.wikipedia.org/wiki/Stopa_(miara)), alternatywa dla jednostki ' |
| ' | [Stopa](https://pl.wikipedia.org/wiki/Stopa_(miara)), alternatywa dla jednostki ft |
| yd | [Jard](https://pl.wikipedia.org/wiki/Jard) |
| mi | [Mila](https://pl.wikipedia.org/wiki/Mila_(jednostka_d%C5%82ugo%C5%9Bci)) |

### Natężenie światła

| Jednostka | Opis |
| --- | --- |
| cd | [Kandela](https://pl.wikipedia.org/wiki/Kandela) |

### Strumień magnetyczny

Strumień magnetyczny:

| Jednostka | Opis |
| --- | --- |
| Wb | [Weber](https://pl.wikipedia.org/wiki/Weber_(jednostka)); 1 Wb = 1 kg\*m^2/s^2/A, |

### Gęstość strumienia magnetycznego

Gęstość strumienia magnetycznego:

| Jednostka | Opis |
| --- | --- |
| G | [Gaus](https://pl.wikipedia.org/wiki/Gaus); 1 G = 1 e-4 T, |
| T | [Tesla](https://pl.wikipedia.org/wiki/Tesla_(jednostka)); 1 T = 1 kg/s^2/A, |

### Masa

| Jednostka | Opis |
| --- | --- |
| ug | Micro[gram](https://pl.wikipedia.org/wiki/Gram), alternatywa dla jednostki µg |
| µg | Micro[gram](https://pl.wikipedia.org/wiki/Gram), alternatywa dla jednostki ug |
| mg | Milli[gram](https://pl.wikipedia.org/wiki/Gram) |
| g | [Gram](https://pl.wikipedia.org/wiki/Gram) |
| kg | Kilo[gram](https://pl.wikipedia.org/wiki/Gram) |
| t | [Tona](https://pl.wikipedia.org/wiki/Tona) |
| oz | [Uncja](https://pl.wikipedia.org/wiki/Uncja) |
| lb | [Funt](https://pl.wikipedia.org/wiki/Funt_(masa)), alternatywa dla jednostki lbm |
| lbm | [Funt](https://pl.wikipedia.org/wiki/Funt_(masa)), alternatywa dla jednostki lb |
| st | [Kamień](https://pl.wikipedia.org/wiki/Kamie%C5%84_(miara)) |
| cwt | [Waga stu-kilowa *(kwintał)*](https://pl.wikipedia.org/wiki/Kwintal) |

### Siła

| Jednostka | Opis |
| --- | --- |
| W | [Wat](https://pl.wikipedia.org/wiki/Wat) |
| kW | Kilo[Wat](https://pl.wikipedia.org/wiki/Wat) |

### Ciśnienie

| Jednostka | Opis |
| --- | --- |
| Pa | [Paskal](https://pl.wikipedia.org/wiki/Paskal) |
| kPa | Kilo[paskal](https://pl.wikipedia.org/wiki/Paskal) |
| MPa | Mega[paskal](https://pl.wikipedia.org/wiki/Paskal) |
| GPa | Giga[paskal](https://pl.wikipedia.org/wiki/Paskal) |
| uTorr | Micro[tor](https://pl.wikipedia.org/wiki/Tor_(jednostka)), alternatywa dla jednostki µTorr |
| µTorr | Micro[tor](https://pl.wikipedia.org/wiki/Tor_(jednostka)), alternatywa dla jednostki uTorr |
| mTorr | Milli[tor](https://pl.wikipedia.org/wiki/Tor_(jednostka)) |
| Torr | [Tor](https://pl.wikipedia.org/wiki/Tor_(jednostka)); 1 Torr = 133.32 Pa |
| psi | [Funt na cal kwadratowy](https://pl.wikipedia.org/wiki/Psi_(jednostka)); 1 psi = 6.895 kPa |
| kpsi | Kilo[Funt na cal kwadratowy](https://pl.wikipedia.org/wiki/Psi_(jednostka)) |

### Temperatura

| Jednostka | Opis |
| --- | --- |
| uK | Micro[kelwin](https://pl.wikipedia.org/wiki/Kelwin), alternatywa dla jednostki µK |
| µK | Micro[kelwin](https://pl.wikipedia.org/wiki/Kelwin), alternatywa dla jednostki uK |
| mK | Milli[kelwin](https://pl.wikipedia.org/wiki/Kelwin) |
| K | [Kelwin](https://pl.wikipedia.org/wiki/Kelwin) |

### Czas

| Jednostka | Opis |
| --- | --- |
| s | [Second](https://pl.wikipedia.org/wiki/Sekunda) |
| min | [Minuta](https://pl.wikipedia.org/wiki/Minuta) |
| h | [Godzina](https://pl.wikipedia.org/wiki/Godzina) |
| Hz (1/s) | [Herc](https://pl.wikipedia.org/wiki/Herc) |
| kHz | Kilo[Herc](https://en.wikipedia.org/wiki/Hertz), |
| MHz | Mega[Herc](https://pl.wikipedia.org/wiki/Herc) |
| GHz | Giga[Herc](https://pl.wikipedia.org/wiki/Herc) |
| THz | Tera[Herc](https://pl.wikipedia.org/wiki/Herc) |

### Objętość

| Jednostka | Opis |
| --- | --- |
| ml | Milli[Litr](https://pl.wikipedia.org/wiki/Litr) |
| l | [Litr](https://pl.wikipedia.org/wiki/Litr) |
| cft | [Stopa](https://en.wikipedia.org/wiki/Foot_(unit)) sześcienna |

### Specjalne jednostki brytyjskie

| Jednostka | Opis |
| --- | --- |
| mph | [Mila na godzinę](https://pl.wikipedia.org/wiki/Mila_na_godzin%C4%99) |
| sqft | [Stopa kwadratowa](https://pl.wikipedia.org/wiki/Stopa_angielska) |

### Jednostki nieobsługiwane

Poniższe powszechnie używane jednostki nie są jeszcze obsługiwane, dla niektórych podano alternatywę:

| Jednostka | Opis | Zamiennik |
| --- | --- | --- |
| °C | [Celsjusz](https://pl.wikipedia.org/wiki/Skala_Celsjusza) | [°C] + 273.15 K |
| °F | [Fahrenheit](https://pl.wikipedia.org/wiki/Skala_Fahrenheita); | ([°F] + 459.67) × ​5/9 |
| u | [Jednostka masy atomowej](https://pl.wikipedia.org/wiki/Jednostka_masy_atomowej), alternatywa dla jednostki Da | 1.66053906660e-27 kg |
| Da | [Dalton](https://pl.wikipedia.org/wiki/Jednostka_masy_atomowej), alternatywa dla jednostki u | 1.66053906660e-27 kg |
| sr | [Steradian](https://pl.wikipedia.org/wiki/Steradian) | nie bezpośrednio |
| lm | [Lumen](https://pl.wikipedia.org/wiki/Lumen) | nie bezpośrednio |
| lx | [Luks](https://pl.wikipedia.org/wiki/Luks_(fotometria)) | nie bezpośrednio |
| px | [Piksel](https://pl.wikipedia.org/wiki/Piksel) | nie bezpośrednio |

[Przewiń na górę strony](#top)

## Nieprawidłowe znaki i nazwy

Funkcja wyrażeń jest bardzo potężna, ale aby osiągnąć tę moc, ma pewne ograniczenia dotyczące niektórych znaków. Aby temu zaradzić, FreeCAD oferuje możliwość używania etykiet i odwoływania się do nich zamiast do nazw obiektów. W etykietach można używać prawie wszystkich znaków specjalnych.

W przypadkach, w których nie można użyć etykiety, takich jak nazwa wiązań szkicu, należy być świadomym, których znaków nie wolno używać.

### Etykiety

Dla [etykiet](/Object_name/pl#Etykieta "Object name/pl") nie ma nieprawidłowych znaków, jednak niektóre znaki muszą być wyprowadzone:

| Znak | Opis |
| --- | --- |
| `'`, `\`, `"` | Wymaga wyprowadzenia poprzez dodanie znaku poprzedzającego `\`. |

Na przykład etykieta `Sketch\002` musi być określona jako `<<Sketch\\002>>`.

### Nazwy

[Nazwy](/Object_name#Name "Object name") obiektów takich jak wymiary, szkice itp. nie mogą posiadać znaków lub sekwencji znaków wymienionych poniżej, w przeciwnym razie nazwa jest niepoprawna:

| Znak / Ciąg znaków | Opis |
| --- | --- |
| **+**, **-**, **\***, **/**, **^**, **\_**, **<**, **>**, **(**, **)**, **{**, **}**, **[**, **]**, **.**, **,**, **=** | Znaki, które są operatorami matematycznymi lub częścią konstrukcji matematycznych |
| **A**, **kA**, **mA**, **MA**, **J**, **K**,  **'** ,  **ft** , **°**, i wiele więcej! | Znaki i ich ciągi, które są [jednostkami](#Jednostki), *(patrz akapit [Jednostki](#Jednostki))* |
| **#**, **!**, **?**, **§**, **$**, **%**, **&**, **:**, **;**, **\**, **|**, **~**, **∆**, **¿**, i wiele więcej! | Znaki używane jako symbol listy lub wyzwalają specjalne operacje |
| **pi**, **e** | Stałe matematyczne |
| **´**, **`**,  **'** , **"** | Znaki używane do akcentowania |
| spacja | Spacja określa koniec nazwy i dlatego nie może być użyta |

Na przykład, prawidłowa jest następująca nazwa: `<<Sketch>>.Constraints.T2üßµ@`. Natomiast następujące nazwy są niepoprawne: `<<Sketch>>.Constraints.test\result_2` *(\r oznacza "powrót karetki")* lub `<<Sketch>>.Constraints.mol` *(mol to jednostka)*.

Ponieważ krótsze nazwy *(zwłaszcza jeśli mają tylko jeden lub dwa znaki)* mogą łatwo doprowadzić do nieprawidłowych nazw, rozważ użycie dłuższych nazw i / lub ustalenie odpowiedniej konwencji nazewnictwa.

### Przypisania do komórek

Zobacz stronę [Definiuj alias](/Spreadsheet_SetAlias/pl#U.C5.BCycie "Spreadsheet SetAlias/pl").

[Przewiń na górę strony](#top)

## Odwołanie do danych CAD

Możliwe jest użycie danych z samego modelu w wyrażeniu. Aby odwołać się do właściwości użyj `object_name.property` lub `<<object_label>>.property`, etykiety muszą być zawarte w `<<` i `>>`. Jeśli chcesz używać etykiet, muszą one być unikalne.

Wszystkie następne przykłady odwołują się do obiektu poprzez jego nazwę, ale we wszystkich przypadkach można również użyć etykiety obiektu.

Jeśli właściwość jest złożeniem pól, dostęp do poszczególnych pól można uzyskać jako `object_name.property.field`.

Aby odwołać się do obiektów listy, użyj właściwości `<<Etykieta_obiektu>>.lista[index_listy]` lub `Nazwa_obiektu.lista[index_listy]`. Jeśli chcesz na przykład odwołać się do wiązania w szkicu, użyj właściwości `<<Nazwa_szkicu>>.Wiązanie[16]`. Jeśli znajdujesz się w tym samym szkicu, możesz pominąć jego nazwę i po prostu użyć właściwości `Wiązanie[16]`.
**Uwaga:** Numeracja indeksów zaczyna się od **0**, dlatego *Wiązanie17* ma indeks `Wiązanie[16]`.

Aby odwołać się do samego obiektu, należy użyć pseudo-właściwości `_self`: `object_name._self`.

Poniższa tabela przedstawia kilka przykładów:

| dane CAD | Odwołanie do wyrażenia | Wynik |
| --- | --- | --- |
| Parametr długości sześcianu środowiska pracy Część | `Cube.Length` | Długość w mm |
| Objętość sześcianu | `Cube.Shape.Volume` | Objętość w mm³ bez jednostek |
| Typ kształtu sześcianu | `Cube.Shape.ShapeType` | String: Bryła |
| Etykieta sześcianu | `Cube.Label` | String: Etykieta |
| Współrzędna x środka masy sześcianu | `Cube.Shape.CenterOfMass.x` | Współrzędna x w mm, bez jednostek |
| Składowa X osi obrotu umiejscowienia Sześcianu | `Box.Placement.Rotation.Axis.x` |
| Kąt obrotu dla umiejscowienia Sześcianu | `Box.Placement.Rotation.Angle` | Kąt obrotu w jednostkach (deg) |
| Pełny obiekt Sześcianu | `Box._self` | Obiekt typu <Part::PartFeature>. |
| Wartość wiązania w szkicu | `Constraints.Width` | Wartość numeryczna nazwanego wiązania `Width` w szkicu, jeśli wyrażenie jest używane w samym szkicu. |
| Wartość wiązania w szkicu | `MySketch.Constraints.Width` | Wartość numeryczna nazwanego wiązania `Width` w szkicu, jeśli wyrażenie jest używane poza szkicem. |
| Wartość aliasu arkusza kalkulacyjnego | `Spreadsheet.Depth` | Wartość aliasu `Depth` w arkuszu kalkulacyjnym `Spreadsheet` |
| Wartość lokalnej właściwości | `Length` | Wartość właściwości DANE**Length** np. w obiekcie Pad, jeżeli wyrażenie jest użyte np. w DANE**Length2** w tym samym obiekcie. |

### Zależności cykliczne

FreeCAD sprawdza zależności na podstawie relacji między obiektami dokumentu, a nie właściwościami. Oznacza to, że nie można dostarczyć danych do obiektu i zapytać tego samego obiektu o wyniki. Na przykład, nawet jeśli nie ma cyklicznych zależności, gdy brane są pod uwagę same właściwości, nie można mieć obiektu, który pobiera swoje wymiary z arkusza kalkulacyjnego, a następnie wyświetla objętość tego obiektu w tym samym arkuszu kalkulacyjnym. Musisz użyć dwóch arkuszy kalkulacyjnych, jednego do obsługi modelu, a drugiego do raportowania.

Jako obejście można wyświetlić zakres komórek z drugiego arkusza kalkulacyjnego w pierwszym *(lub odwrotnie)*, tworząc [komórki powiązane](/Spreadsheet_Workbench/pl#Powiązanie_komórek "Spreadsheet Workbench/pl") opcją **Ukryj zależność powiązań**.

Innym sposobem na obejście zależności cyklicznych jest ukrycie odniesienia za pomocą funkcji `href` lub `hiddenref` dla poszczególnych wyrażeń, na przykład: `href(Box.Length)`.

Należy pamiętać, że oba wspomniane obejścia powinny być stosowane z ostrożnością i że nie działają, jeśli raportowane właściwości zależą od wymiarów, które są sterowane z tego samego arkusza kalkulacyjnego.

[Przewiń na górę strony](#top)

## Zmienne globalne w obrębie dokumentu

W tej chwili w programie FreeCAD nie ma koncepcji zmiennych globalnych. Zamiast tego zmienne mogą być definiowane jako komórki w arkuszu kalkulacyjnym za pomocą środowiska roboczego [Arkusz kalkulacyjny](/Spreadsheet_Workbench/pl "Spreadsheet Workbench/pl"), a następnie można im nadać nazwę za pomocą właściwości aliasu dla komórki *(kliknij prawym przyciskiem myszy na komórkę)*. Następnie można się do nich odwoływać z dowolnego wyrażenia, tak jak do innych właściwości obiektu.

[Przewiń na górę strony](#top)

## Powiązania między dokumentami

Możliwe jest *(z ograniczeniami)* zdefiniowanie właściwości obiektu w bieżącym dokumencie *(plik ".FCstd")* za pomocą Wyrażenia odwołującego się do właściwości obiektu znajdującego się w innym dokumencie *(plik ".FCstd")*. Na przykład, komórka w arkuszu kalkulacyjnym lub właściwość DANE**Długość** sześcianu środowiska Część itp. w jednym dokumencie mogą być zdefiniowane przez Wyrażenie, które odwołuje się do wartości X Umiejscowienia lub innej właściwości obiektu znajdującego się w innym dokumencie.

Nazwa dokumentu jest używana do odwoływania się do jego zawartości z innych dokumentów. Przy pierwszym zapisie dokumentu wybieramy nazwę pliku, która zazwyczaj różni się od początkowej domyślnej nazwy "Nienazwany1". Aby uniknąć utraty linków w przypadku zmiany nazwy dokumentu głównego przy zapisie, zaleca się najpierw utworzenie dokumentu głównego, utworzenie w nim arkusza kalkulacyjnego i zapisanie go. Następnie można nadal wprowadzać zmiany w pliku i jego arkuszu kalkulacyjnym, ale nie należy modyfikować jego nazwy.

Po utworzeniu i zapisaniu *(nazwaniu)* dokumentu głównego z arkuszem kalkulacyjnym można bezpiecznie tworzyć dokumenty zależne. Na przykład, zakładając, że nazwiesz dokument główny `master`, arkusz kalkulacyjny `modelConstants` i nadasz komórce alias nazwy `Length`, możesz następnie uzyskać dostęp do wartości jako:

`master#modelConstants.Length`

Należy pamiętać, że dokument źródłowy musi być wczytany, aby wartości z dokumentu źródłowego były dostępne dla dokumentu powiązanego.

Oczywiście, to do Ciebie zależy, czy wczytasz odpowiednie dokumenty później, gdy będziesz chciał coś zmienić.

[Przewiń na górę strony](#top)

## Znane problemy / niezrealizowane zadania

* FreeCAD nie ma jeszcze wbudowanego menedżera wyrażeń, w którym wszystkie wyrażenia w dokumencie są wymienione i mogą być tworzone, usuwane, odpytywane itp. Dostępny jest jednak dodatek: [fcxref expression manager](https://github.com/gbroques/fcxref).
* Otwarte zgłoszenia błędów dla wyrażeń można znaleźć na stronie [GitHub](https://github.com/FreeCAD/FreeCAD/labels/Topic%3A%20Expressions).

[Przewiń na górę strony](#top)

## Tworzenie skryptów

```
import FreeCAD as App

doc = App.ActiveDocument
box = doc.addObject("Part::Box", "Box")
cyl = doc.addObject("Part::Cylinder", "Cylinder")
cyl_name = cyl.Name

box.setExpression("Height", f"{cyl_name}.Height / 2")
box.setExpression("Length", f"{cyl_name}.Radius * 2")
box.setExpression("Width", "Length")

doc.recompute()

# Expressions are stored in the ExpressionEngine property:
for prop, exp in box.ExpressionEngine:
    val = getattr(box, prop)
    print(f"Property: '{prop}' -- Expression: '{exp}' -- Current value: {val}")

```

[Przewiń na górę strony](#top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Expressions/pl&oldid=1549475>"