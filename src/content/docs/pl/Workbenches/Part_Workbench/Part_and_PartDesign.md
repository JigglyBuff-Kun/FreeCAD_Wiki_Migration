---
title: Część i Projekt Części
---
## Informacje ogólne

Przez lata było wiele dyskusji o różnicach i konsekwencjach używania środowisk pracy ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl") i ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").

Dobrym pomysłem jest używanie jednego lub drugiego, dopóki użytkownik nie będzie czuł się komfortowo z jednym, a następnie nauczy się drugiego. Zazwyczaj zaleca się również, aby nowi użytkownicy nie mieszali ich ze sobą, dopóki nie zrozumieją konsekwencji takiego postępowania.

Porozmawiajmy o tych konsekwencjach.

## Koncepcje środowiska Część

Środowisko pracy Część jest zasadniczo [Konstrukcyjną geometrią bryły CSG](/Constructive_solid_geometry/pl "Constructive solid geometry/pl") . Operator łączy różne bryły pierwotne, aby w końcu otrzymać reprezentację pożądanego kształtu. *(W rzeczywistości, środowisko Część idzie o krok dalej niż tylko bryły pierwotne i pozwala operatorowi na użycie operacji szkic + wyciągnięcie (lub szkic + odwrócenie, pochylenie, omiatanie ...)*, aby utworzyć losowe kształty również)*.*
Kiedy każda bryła pierwotna lub kształt jest tworzony, nie ma żadnego związku z innymi utworzonymi obiektami *(z wyjątkiem szkiców i ich załączników)*, jest to pojedyncza bryła.

![](/images/Part_CSG_Prims.png)

Pojedyncze bryły

Ten stan utrzymuje się do momentu, gdy operator użyje jakiejś operacji do ich połączenia *(zazwyczaj jest to operacja typu logicznego)*.
Każda początkowa bryła pozostaje dostępna osobno, a operacja tworzy nowy obiekt.

Chodzi o pojedyncze elementy brył i ich łączenie.

## Koncepcje środowiska Projekt Części

W środowisku pracy Projekt Części obiekt Zawartość jest konstruowany bezpośrednio jako pojedyncza zwarta bryła.

Pierwszym krokiem w bryle musi być blok materiału, albo z addytywnej bryły pierwotnej, albo z wyciągnięcia ze szkicu, albo z importowanego kształtu *(zwanego wtedy Bryłą Bazową)*.

Ten początkowy blok materiału będzie sukcesywnie zmieniany aż do uzyskania pożądanego kształtu końcowego *(bryły)*.

Jest on kumulatywny w tym sensie, że każda operacja dodaje lub usuwa materiał.

Domyślnie "końcówka" bryły - o ile nie nastąpi dobrowolna zmiana wizualizacji danej cechy - jest ostatnią operacją wykonaną na bryle. Jest to aktualny i widoczny stan zawartości, gotowy do ponownej zmiany przez nową cechę.

Każda funkcja pod bryłą reprezentuje skumulowany kształt bryły od pierwszej cechy do rozpatrywanej cechy.

Zatem **aby mieć kompletną bryłę**, z jednej strony cecha Czubka musi być ostatnim etapem budowy tej bryły, a z drugiej strony **to bryła musi być wybrana**, a nie etap jej budowy.

Umożliwi to, w przypadku modyfikacji, **posiadanie zawsze reprezentowanej ostatniej wersji bryły**.

**Uwagi i uzupełnienia :**
W każdym momencie konstrukcji, ostatnią używaną funkcją jest "Czubek", który można zdefiniować również jako "aktywny etap w konstrukcji obiektu" lub "etap poprzedzający następną czynność w konstrukcji obiektu".
Kiedy rysunek obiektu jest kompletny, Czubek jest naturalnie ostatnim etapem lub cechą konstrukcji.
Ale jeśli jest to pożądane, w przypadku zapomnienia, dowolna cecha konstrukcji może być tymczasowo zadeklarowana jako Czubek: staje się ona wtedy etapem poprzedzającym następne działanie w konstrukcji obiektu, co oznacza, że nowa cecha (nowe cechy) może być wstawiona w dowolnym miejscu konstrukcji, **pod warunkiem, że nie tworzy żadnej niezgodności z zestawem**.

Kiedy wszystko jest skończone, musisz ponownie zadeklarować ostatnią cechę jako Czubek, która odpowiada gotowemu obiektowi.

![](/images/Part_Design_Cumulativ.png)

Skumulowana zawartość bryły

Ten obrazek przedstawia Zawartość. Jest to jednolita bryła, która składa się z warstwowego szkicu i bryły pierwotnej stożka. Jest to pojedyncza bryła.

Jeżeli czubek jest na **wyciągnięciu**, to wyciągnięcie może istnieć oddzielnie, ale jeżeli jest na **stożku**, stożek nie może istnieć oddzielnie *(wyciągnięcie na stożku = wyciągnięcie + stożek)*.

*(Inną rzeczą, o której często się wspomina jest to, że bryła* **musi** *być pojedynczą spójną bryłą. Oznacza to, że cała geometria utworzona przez element w Zawartości* musi *dotykać jego poprzednika)*.

## Następstwa

Chociaż nie jest to zalecane dla początkujących, możliwe jest połączenie narzędzi środowiska Część i Projekt Części, pod warunkiem, że wiesz co robisz. Na przykład:

Ludzie łapią się na tym, że próbują użyć jakiegoś elementu pod bryłą (a nie samej bryły) jako jednego wyboru operacji logicznej środowiska pracy Część. Jest to problem, ponieważ wybrana cecha nie reprezentuje **TEJ** kompletnej bryły.

W pewnym sensie, z punktu widzenia środowiska Część, Zawartość reprezentuje inna bryła pierwotna. Tak więc, użycie Zawartość *(pamiętaj, że jest to pośrednik dla czubka)* i obiektu środowiska Część do wykonania operacji logicznej jest poprawne. Ale wynikowy obiekt jest obiektem środowiska Część. I dlatego narzędzia środowiska Projekt Części nie mogą być już na nim użyte.

I, to może być jeszcze bardziej skomplikowane. Jeśli utworzysz nową bryłę i przeciągniesz do niej wynik z poprzedniego akapitu, powstanie obiekt bazowy *(BaseObject)*. I możesz użyć na nim narzędzi środowiska Projekt Części.

## Ograniczenia

Istnieje pewne zastrzeżenie dotyczące Czubka i jego reprezentacji pojedynczej bryły w Zawartości. *Jeżeli* czubek jest cechą odejmowania i jest używany w operacji ulepszenia, na przykład w Odbiciu lustrzanym, to działa na bazową cechę *(na przykład kieszeń)*. W ten sposób łączna bryła nie jest odbiciem lustrzanym, ale cecha odejmowania jest. W wyniku tego musi powstać pojedyncza bryła.

W tym przykładzie, lustrzane odbicie czubka *(który jest kieszenią)* wokół którejkolwiek z płaszczyzn bazowych lub nawet powierzchni bryły nie spowoduje powstania lustrzanej bryły całego modelu. *(W rzeczywistości, spowoduje to utworzenie elementu lustrzanego w drzewie, który jest w zasadzie pusty)*.

![](/images/PhantomMirror.png)

Jednolite bryły

W tym przykładzie, lustrzane odbicie czubka *(który jest kieszenią)* jest wykonywane wokół płaszczyzny odniesienia i tworzy lustrzaną szczelinę:

![](/images/MirroredSlot.png)

Jednolite bryły

Zobacz stronę wiki narzędzia ![](/images/PartDesign_Mirrored.svg) [Odbicie lustrzane](/PartDesign_Mirrored/pl "PartDesign Mirrored/pl"), aby uzyskać więcej informacji.

## Porównanie

Poniżej możesz zobaczyć ten sam przykład zbudowany przy użyciu każdego z dwóch środowisk pracy. Oczywiście, zawsze istnieje kilka możliwych przebiegów budowy dla każdego z tych środowisk pracy.

![](/images/PartWBvsPartDesignWBexample.jpg)

Porównanie konstrukcji z użyciem środowisk Część i Projekt Części

| środowisko Projekt Części | środowisko Część |
| --- | --- |
| 01-  Stwórz zawartość →  Utwórz nowy szkic na płaszczyźnie XZ | 01-  Szkicownik →  Utwórz nowy szkic na płaszczyźnie XZ |
|  |  |

|  |  |
| --- | --- |
| 02-  Wyciągnij przez obrót / Z | 02-  Wyciągnij przez obrót ... / Z |
|  |  |

|  |  |
| --- | --- |
| 03-  Utwórz nowy szkic na płaszczyźnie XY | 03-  Szkicownik →  twórz nowy szkic na płaszczyźnie XY |
|  |  |

|  |  |
| --- | --- |
| 04-  Utwórz kieszeń z wybranego szkicu | 04a-  Wyciągnij wybrany szkic |
|  |  |

|  |  |
| --- | --- |
|  | 04b-  Wytnij |
|  |  |

|  |  |
| --- | --- |
| 05-  Utwórz nowy szkic na płaszczyźnie XZ | 05-  Szkicownik →  Utwórz nowy szkic na płaszczyźnie XZ |
|  |  |

|  |  |
| --- | --- |
| 06-  Wyciągnij wybrany szkic symetryczne/XZ | 06a-  Wyciągnij wybrany szkic symetryczne/XZ |
|  |  |

|  |  |
| --- | --- |
|  | 06b-  Rysunek Roboczy  Szyk polarny |
|  |  |

|  |  |
| --- | --- |
|  | 06c-  Utwórz sumę kilku kształtów |
|  |  |

|  |  |
| --- | --- |
| 07-  Utwórz nowy szkic na płaskiej ścianie | 07-  Szkicownik →  Utwórz nowy szkic na płaszczyźnie XZ |
|  |  |

|  |  |
| --- | --- |
| 08-  Utwórz otwór - pogłębienie walcowe | 08a-  Wyciągnij przez obrót ... |
|  |  |

|  |  |
| --- | --- |
|  | 08b-  Rysunek Roboczy  szyk polarny |
|  |  |

|  |  |
| --- | --- |
| 09-  Utwórz cechę przez szyk kołowy dla otworu i wyciągniecia | 09-  Wytnij |
|  |  |

Porównaj drzewa konstrukcji w obu środowiskach pracy, jak również ich organizację i przeczytaj chronologię:

|  |  |
| --- | --- |
| 10- Drzewo konstrukcji w środowisku Projekt Części | 10- Drzewo konstrukcji w środowisku Część |
|  |  |

## Rozważania

Środowiska pracy Część i Projekt Części mogą być używane razem przy zachowaniu pewnej ostrożności, umożliwiając tworzenie dość złożonych modeli.

[Na początek strony](#Top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_and_PartDesign/pl&oldid=1460861>"