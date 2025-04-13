---
title: Projekt Części Przykłady
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

## Wprowadzenie

Czasami potrzebna jest wskazówka, jak potężne jest dane narzędzie, bez zbyt wielu wyjaśnień.

Jest to zbiór przykładów, które można osiągnąć za pomocą określonych narzędzi. Szczegółowe objaśnienia można znaleźć w opisach narzędzi oraz w Internecie, gdzie można znaleźć odpowiednie poradniki.

## Wyciągnięcie

![](/images/PartDesign_Pad.svg) [Wyciągnięcie](/PartDesign_Pad/pl "PartDesign Pad/pl") to narzędzie do tworzenia obiektów typu wyciągnięcie, które są obiektami o budowie graniastosłupa, takimi jak walce, stożki, sześciany, kliny ...

Każdy obiekt jest oparty na konturze *(żółtym)*, który określa kształt przekroju *(najlepiej wykonać go za pomocą środowiska pracy [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"))*.

Kontur jest przeciągany wzdłuż kierunku *(wyciskany)*, aby nadać obiektowi grubość lub długość.  
Domyślnie jest to normalny kierunek płaszczyzny zawierającej kontur *(płaszczyzny szkicu)*. Kierunek można opcjonalnie zmienić, edytując parametry w panelu właściwości lub wybierając osobną linię prostą *(białą)*.

**Galeria**

### Bryły pierwotne oparte o kształt wielokąta

|  |  |  |
| --- | --- | --- |
| **Walec** | Walec | * Kontur: **okrąg**. |
| **Sześcian** | Sześcian | * Kontur: **kwadrat**. * Długość wyciągnięcia: równa długości krawędzi kwadratu. |
| **Prostopadłościan** | Prostopadłościan | * Kontur: **prostokąt**. |
| **Graniastosłup foremny** | Graniastosłup foremny | * Kontur: **sześciokąt**. |
| **Klin** | Klin | * Kontur: **trójkąt**. |

### Profile oparte o kształt graniastosłupa

|  |  |  |
| --- | --- | --- |
| **profil L** | L-profile | * Kontur: kształt litery **L**. |
| **profil C** | C-profile | * Kontur: kształt litery **C**. |
| **profil Z** | Z-profile | * Kontur: kształt litery **Z**. |
| **profil T** | T-profile | * Kontur: kształt litery **T**. |
| **profil dwuteownik** | Double-T-profile | * Kontur: kształt litery **H**, z szerokością kołnierza < odsunięcia kołnierza. |
| **profil H** | H-profile | * Kontur: kształt litery *H*, gdzie szerokość = wysokość. |

## Wyciągnięcie po ścieżce

![](/images/PartDesign_AdditivePipe.svg) [Wyciągnięcie po ścieżce](/PartDesign_AdditivePipe/pl "PartDesign AdditivePipe/pl") to narzędzie do tworzenia obiektów wyciągnięcia po ścieżce, takich jak obiekty przeciągania, obiekty wytłaczania, obiekty obrotu, cylindry, stożki, sześciany, piramidy, kule ...

Każdy obiekt jest oparty na co najmniej dwóch liniach *(najlepiej wykonanych za pomocą środowiska pracy [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"))*:

* Jeden kontur *(żółty)*, do definiowania kształtu przekroju.
* Jedna ścieżka *(biała)*, po której można się poruszać.

Nietrudno się zorientować, że niektóre obiekty można tworzyć także za pomocą innych narzędzi, ale czy bez tych przykładów domyśliłbyś się, jak wszechstronne jest to narzędzie?

**Galeria**

### Obiekty koliste

Proste obiekty utworzone przeciąganiem przez obrót

|  |  |  |
| --- | --- | --- |
| **Sfera** | Sfera | * Kontur: **łuk o kącie 180°** oraz **linia** łącząca punkty końcowe. * Ścieżka: pełny **okrąg**. |
| **Segment sfery** | Segment sfery 240° | * Kontur: **łuk o kącie 180° *i*** *linia'* łącząca punkty końcowe. * Ścieżka: **łuk o kącie 240°**.   Funkcja ta może tworzyć odcinki o dowolnym kącie z wyjątkiem dokładnie 180°, ponieważ ma problem z płaszczyzną początkową i końcową będącą współpłaszczyzną. |
| **Połowa sfery** | Połowa sfery | * Kontur: **łuk o kącie 90°** i dwie prostopadłe **linie** łączące punkty końcowe. * Ścieżka: pełny **okrąg**. |
| **Torus** | Torus | * Kontur: pełny **okrąg**. * Ścieżka: pełny **okrąg**. |
| **Stożek** | Stożek | * Kontur: **trójkąt** z jedną krawędzią leżącą na linii środkowej. * Ścieżka: pełny **okrąg**. |
| **Walec** | Walec | * Kontur: **prostokąt** z jedną krawędzią leżącą na linii środkowej. * Ścieżka: pełny **okrąg**. |
| **Rura** wydrążony walec | Rura (wydrążony walec) | * Kontur: **prostokąt**. * Ścieżka: pełny **okrąg**. |

### Obiekty graniastosłupowe

Proste obiekty utworzone przeciąganiem

|  |  |  |
| --- | --- | --- |
| **Walec** | Walec | * Kontur: **koło**. * Ścieżka: prosta **linia**. |
| **Sześcian** | Sześcian | * Kontur: **kwadrat**. * Ścieżka: prosta **linia**, tej samej długości co krawędzie kwadratu. |
| **Prostopadłościan** | Prostopadłościan | * Kontur: **prostokąt**. * Ścieżka: prosta **linia**. |
| **Klin** | Klin | * Kontur: **trójkąt**. * Ścieżka: prosta **linia**. |
| Regularny **Graniastosłup** | Regularny Graniastosłup | * Kontur: regularny **sześciokąt**. * Ścieżka: prosta **linia**. |
| Graniastosłupy gwiaździste | Graniastosłupy gwiaździste | * Kontur: regularny **kształt gwiazdy**. * Ścieżka: prosta **linia**. |
| Belka dwuteowa | Belka dwuteowa | * Kontur: **profil belki** * Ścieżka: prosta **linia**. |

### Obiekty stożkowe

|  |  |  |
| --- | --- | --- |
| **Stożek** | Stożek | * Kontury: Podstawa: pełne **koło**, Góra: **punkt**. * Ścieżka: prosta **linia**.   *(Punkt wierzchołka jest punktem końcowym linii pomocniczej)*. |
| **Ostrosłup** | Ostrosłup | * Kontury: Podstawa: **kwadrat**, Góra: **punkt**. * Ścieżka: prosta **linia**   *(Punkt wierzchołka jest punktem końcowym linii pomocniczej)*. |
| Ostrosłup przechylony | Ostrosłup przechylony | * Kontury: Podstawa: **kwadrat**, Góra: **punkt**. * Ścieżka: prosta **linia**.   *(Punkt wierzchołka jest punktem końcowym ścieżki)*. |

### Obiekty zakrzywione

|  |  |  |
| --- | --- | --- |
| **Wąż** (Rura) | Wąż | * Kontury: dwa współśrodkowe **okręgi**. * Ścieżka: zakrzywiona **linia**. |
| Kwadratowa **rura** | Square Pipe | * Kontury: dwa współśrodkowe **kwadraty**. * Ścieżka: zakrzywiona **linia**. |
| **Polilinia** | Wire | * Kontur: **okrąg**. * Ścieżka: zakrzywiona **linia**. |
| Róg | Róg | * Kontury: Podstawa: **okrąg**, Góra: *(mniejszy)* **okrąg**. * Ścieżka: zakrzywiona **linia**. |
| Legendarny **Klucz sześciokątny** | Klucz sześciokątny | * Kontur: *sześciokąt*. * Ścieżka: zakrzywiona **linia**. |

### Obiekty spiralne i walcowate

|  |  |  |
| --- | --- | --- |
| Sprężyna spiralna | Sprężyna | * Kontur: **okrąg**. * Ścieżka:  [Helisa](/Part_Helix/pl "Part Helix/pl") środowiska Część. |
| Sprężyna włosowa Sprężyna balansowa | Sprężyna balansowa | * Kontur: **prostokąt**. * Ścieżka:  [Spirala](/Part_Spiral "Part Spiral") środowiska Część. |
| **Sprężyna spiralna**, Sprężyna stożkowa | Sprężyna spiralna | * Kontur: **prostokąt**. * Ścieżka:  [Helisa](/Part_Helix/pl "Part Helix/pl") środowiska Część z kątem nachylenia. |

### Obiekty przejściowe

|  |  |  |
| --- | --- | --- |
| Kwadrat w koło  za pośrednictwem ścieżki | Obiekt przejścia z krzywą | * Kontury: Początkowy: **kwadrat**, Końcowy: **koło**. * Ścieżka: zakrzywiona **linia**. |
| Kwadrat w koło  bezpośrednio | Obiekt przejścia prosty | * Kontury: Początkowy: **kwadrat**, Końcowy: **koło**. * Ścieżka: prosta **linia**. |
| Wielokąt w gwiazdę | Wielokąt do gwiazdy | * Kontury: Początkowy: **wielokąt**, Końcowy: **gwiazda**. * Ścieżka: prosta **linia**. |

### Opcje

#### Przejścia narożników

Polilinia może być użyta jako ścieżka, a właściwość **Przejście** wpływa na kształty narożników.

Transformowany wymaga szczególnej uwagi, ponieważ może wytwarzać płaskie obszary, dla których grubość wynosi 0.

| Parametr | Widok Iso | Widok z góry |
| --- | --- | --- |
| **Przekształcony** | Przekształcony widok Iso Wewnętrzne i zewnętrzne narożniki są krawędziami. | Przekształcony widok z góry Kształt podstawowy nie jest zgodny z orientacją linii. |
| **Prawy narożnik** | Widok Iso prawego rogu Wewnętrzne i zewnętrzne narożniki to krawędzie. | Widok z góry prawego narożnika Podstawowy kształt jest zgodny z orientacją linii. |
| **Zaokrąglony narożnik** | Widok Iso zaokrąglonego narożnika Narożniki leżące poza ścieżką są zaokrąglone. | Widok z góry zaokrąglonego narożnika Podstawowy kształt jest zgodny z orientacją linii. |

#### Tryb orientacji

| Parametr | Widok Iso | Widok z góry |
| --- | --- | --- |
| **Standardowy** | Standardowy widok Iso Położenie i orientacja podążają za ścieżką. | Standardowy widok od góry *(Jeśli obiekt jest skręcony w nieoczekiwany sposób, wypróbuj parametr "Frenet")* |
| **Ustalony** | Ustalony widok Iso Położenie podąża za ścieżką, a orientacja pozostaje taka sama jak kształt podstawowy. | Ustalony widok z góry Może to prowadzić do samoczynnych przecięć, które prowadzą do dalszych błędów: w tym przypadku do powstania ściany widmo. |
| **Frenet** | Widok Frenet iso Położenie i orientacja podążają za ścieżką, w oparciu o inny algorytm niż Standardowy. | Widok Frenet z góry Podstawowy kształt jest zgodny z orientacją linii. |
| **Pomocniczy** | [Widok pomocniczy Iso](/index.php?title=Special:Upload&wpDestFile=PartDesign_ExampleProperty-11._png "File:PartDesign ExampleProperty-11. png") Lokalizacja podąża ścieżką ze skrętem wokół ścieżki, która jest kontrolowana przez krzywą pomocniczą *(niebieską)*. | [Widok pomocniczy z góry](/index.php?title=Special:Upload&wpDestFile=PartDesign_ExampleProperty-12._png "File:PartDesign ExampleProperty-12. png") *(Trudno to rozpoznać, ale istnieje kąt między płaszczyznami krzywej pomocniczej i ścieżki, który jest odpowiedzialny za skręt)*. |
| **Binormalny** |  |  |

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Examples/pl&oldid=1340381>"