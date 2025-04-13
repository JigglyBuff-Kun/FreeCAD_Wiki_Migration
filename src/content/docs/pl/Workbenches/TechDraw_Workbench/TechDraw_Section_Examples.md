---
title: Rysunek Techniczny Przykłady przekrojów
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

## Wprowadzenie

Środowisko pracy ![](/images/Workbench_TechDraw.svg) [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") poczyniło duży krok naprzód w kwestii generowania **widoków przekrojów**. Aby nie przeciążać stron referencyjnych, intencją tej strony jest podanie przykładów i dostarczenie właściwego nazewnictwa dla wykonywanych zadań.

Robię, co mogę, aby znaleźć poprawne terminy, ale ponieważ nie jestem anglistą, to twoja kolej, aby naprawić moje błędy, jeśli je znajdziesz.

## Przekroje

Przekroje służą do zaglądania do wnętrza obiektu, aby pokazać szczegóły, które w innym przypadku są niewidoczne lub trudne do rozpoznania. Zazwyczaj na rysunku znajdują się widoki pokazujące obiekt z co najmniej dwóch kierunków. Jeśli jest podany przekrój, jego położenie i orientacja są wskazane linią przekroju w jednym z widoków.

W programie FreeCAD nie jest możliwe bezpośrednie rysowanie linii przekroju, FreeCAD opiera się na [panelu zadań](/Task_panel/pl "Task panel/pl") _(zobacz [Widok przekroju](/TechDraw_SectionView/pl#Użycie "TechDraw SectionView/pl") i [Przekrój złożony](/TechDraw_ComplexSection/pl#Użycie "TechDraw ComplexSection/pl"))_.

## Przykładowe obiekty

Ten obiekt nie ma żadnego zastosowania poza opisem różnych reprezentacji sekcji.

![](/images/TechDraw_ExampleSection-01.png)

Trzy widoki i obraz przestrzenny obiektu

## Przekrój podstawowy

Narzędzie ![](/images/TechDraw_SectionView.svg) [Widok przekroju](/TechDraw_SectionView/pl "TechDraw SectionView/pl") tworzy prosty przekrój, który wykorzystuje pojedynczą płaszczyznę do przecięcia obiektu.

Narzędzie wymaga widoku bazowego (właściwość DANE**Widok bazowy**) do pozycjonowania płaszczyzny przekroju. Oś pionowa płaszczyzny przekroju jest zawsze normalną widoku podstawowego, a oś pozioma płaszczyzny przekroju jest równoległa do linii przekroju. Zazwyczaj widok przekroju jest zorientowany tak, że jego oś pozioma jest również równoległa do linii przekroju. Kąt pomiędzy linią przekroju a osią poziomą widoku podstawowego jest kontrolowany przez widżety w obszarze **Ustaw kierunek widoku** panelu zadań narzędzia:

![](/images/TechDraw_ComplexSection_Taskview2.png)

Pole **Wyświetl kierunek jako kąt** pozwala na ustawienie dowolnego kąta. Do ustawienia predefiniowanych kątów można użyć czterech przycisków:

![](/images/Section-up.svg) 90° _(w górę)_,
![](/images/Section-down.svg) 270° _(w dół)_,
![](/images/Section-left.svg) 180° _(w lewo)_,
![](/images/Section-right.svg) 0° _(w prawo)_

### Przekrój poziomy

Przekrój A-A _(widok od dołu w górę)_

![](/images/TechDraw_ExampleSection-02.png) ![](/images/Button_right.svg)
![](/images/TechDraw_ExampleSection-03.png)

Widok podstawowy + ![](/images/Section-up.svg) → Widok podstawowy i przekroju A-A w swojej domyślnej pozycji

![](/images/TechDraw_ExampleSection-04.png)

Widok podstawowy i przekroju A-A we właściwym położeniu.

Przekrój B-B _(widok od góry w dół)_

![](/images/TechDraw_ExampleSection-02.png) ![](/images/Button_right.svg)
![](/images/TechDraw_ExampleSection-05.png)

Widok podstawowy + ![](/images/Section-down.svg) → Widok podstawowy i przekroju B-B w swojej domyślnej pozycji

![](/images/TechDraw_ExampleSection-06.png)

Widok podstawowy i przekroju B-B we właściwym położeniu

### Przekrój pionowy

Przekrój C-C _(widok od prawej w lewo)_

![](/images/TechDraw_ExampleSection-02.png) ![](/images/Button_right.svg)
![](/images/TechDraw_ExampleSection-07.png)

Widok podstawowy + ![](/images/Section-left.svg) → Widok podstawowy i przekroju C-C w swojej domyślnej pozycji

![](/images/TechDraw_ExampleSection-08.png)

Widok podstawowy i przekroju C-C we właściwym położeniu

Przekrój D-D _(widok od lewej w prawo)_

![](/images/TechDraw_ExampleSection-02.png) ![](/images/Button_right.svg)
![](/images/TechDraw_ExampleSection-09.png)

Widok podstawowy + ![](/images/Section-right.svg) → Widok podstawowy i przekroju D-D w swojej domyślnej pozycji

![](/images/TechDraw_ExampleSection-10.png)

Widok podstawowy i przekroju D-D we właściwym położeniu

### Przekrój dowolny

Przekrój E-E _(widok przekroju pod dowolnym kątem)_

![](/images/TechDraw_ExampleSection-02.png) ![](/images/Button_right.svg)
![](/images/TechDraw_ExampleSection-11.png)

Widok z podstawy + wartość "Wyświetl kierunek jako kąt" ustawiona na `30°` → widok podstawowy i przekrój E-E w pozycji domyślnej

![](/images/TechDraw_ExampleSection-12.png)

Widok podstawowy i przekroju E-e we właściwym położeniu

Domyślnie płaszczyzna przekroju przechodzi przez środek ramki ograniczającej widoku _(w tym przypadku pokrywający się ze środkiem ciężkości obiektu)_. Aby uzyskać przekrój przesunięty musimy zmienić wartości w obszarze **Lokalizacja płaszczyzny przekroju**.

![](/images/TechDraw_ExampleSection-16.png)

![](/images/TechDraw_ExampleSection-17.png)

Tutaj linia przekroju została przesunięta o 22 mm w kierunku X i 14 mm w kierunku Y _(bez dowodu, że linia przechodzi przez środki otworów)_. Automatycznie generowana wartość Z nie ma w tym przypadku żadnego znaczenia.

### Widok pomocniczy

W programie FreeCAD brakuje narzędzia do wyprowadzania widoków pomocniczych z widoku podstawowego, ale funkcja ![](/images/TechDraw_SectionView.svg) [Widok przekroju](/TechDraw_SectionView/pl "TechDraw SectionView/pl") również sobie z tym poradzi:

Używając przekroju E-E z góry i zmieniając wymienione wartości na X = `40 mm` i Y = `-23 mm` przekrój nie przecina już obiektu i staje się zamiast tego widokiem pomocniczym. Uwaga: zachowaj ostrożność podczas zmiany wartości, duże kroki mogą spowodować awarię programu FreeCAD!

![](/images/TechDraw_ExampleSection-12.png) ![](/images/Button_right.svg)
![](/images/TechDraw_ExampleSection-18.png)

Przekrój E-E jak w powyższym przykładzie + przesunięta linia / płaszczyzna przekroju → Widok E

Etykieta została wyedytowana. Linia przekroju i jedna strzałka muszą być ukryte w kolejnych krokach, ponieważ pojedyncza strzałka wystarczy, aby prawidłowo zdefiniować widok pomocniczy.

### Uwagi

- Zastosowane wersje:
  - Przykłady zostały utworzone przy użyciu wydania weekly build 0.21 - 31155 z wybranym pierwszym kątem i ISO.
  - C-C, D-D, i E-E: domyślne Pozycje zostały zaktualizowane, aby wyświetlić aktualne domyślne rozmieszczenie _(weekly build 0.21 - 31709) (aktualizacja 2023-02-03)_.
- Przy tej okazji zdałem sobie sprawę, że poziome i pionowe linie środkowe są zorientowane według strony, ale nie widoku i dlatego nie można ich użyć do wyrównania widoku podstawowego i widoku przekroju, czego bym oczekiwał.
- Zastosowanie przesunięcia do linii / płaszczyzny przekroju jest nieco skomplikowane, ponieważ można je przesuwać tylko wzdłuż osi globalnych, a nie według _(lokalnych)_ osi widoku.

## Przekroje podstawowe w praktyce

### Przekrój pojedynczy

Jeżeli na rysunku jest tylko jeden widok przekroju i widać wyraźnie, że obiekt jest przecięty wzdłuż linii środkowej, można pominąć linię przekroju, w tym strzałki, oraz tytuł widoku.

![](/images/TechDraw_ExampleSection-13.png) ![](/images/TechDraw_ExampleSection-14.png)

Oba rysunki są zgodne z normą

### Przekrój wewnętrzny

Widok przekroju może być zintegrowany z widokiem podstawowym. W tym przypadku również nie są wymagane strzałki i tytuł.

![](/images/TechDraw_ExampleSection-15.png)

## Przekrój złożony

Narzędzie ![](/images/TechDraw_ComplexSection.svg) [Wstaw przekrój złożony](/TechDraw_ComplexSection/pl "TechDraw ComplexSection/pl") tworzy złożony przekrój, taki jak przekrój wyrównany lub przesunięty, który używa więcej niż jednej płaszczyzny do przecięcia obiektu.

Narzędzie wymaga widoku bazowego _(właściwość DANE**Widok podstawowy**)_, aby umieścić kilka połączonych płaszczyzn przekroju do przecięcia obiektu, są one zdefiniowane przez polilinię 3D. _(To narzędzie może również obsługiwać krzywe, ale zakrzywione przekroje są raczej nietypowe)_.

Osie pionowe płaszczyzn przekroju są zawsze równoległe do normalnej widoku podstawowego. Ich osie poziome pochodzą od powiązanych segmentów polilinii 3D. Orientacja widoku Przekrój zależy od jednego z segmentów polilinii 3D, a wpływ na nią mają widżety znajdujące się w obszarze opcji **Ustaw kierunek widoku** panelu zadań narzędzia:

![](/images/TechDraw_ComplexSection_Taskview1.png)
![](/images/TechDraw_ComplexSection_Taskview2.png)

To narzędzie udostępnia 3 opcje w polu **Technika rzutowania** do obsługi segmentów linii przekroju:

- `Odsunięcie`: wyświetlane są tylko odcinki prostopadłe do kierunku widoku (domyślnie).
- `Wyrównane`: wszystkie odcinki są wyświetlane w rzeczywistej długości.
- `Nie równolegle`: wszystkie odcinki są wyświetlane wzdłuż tego samego kierunku patrzenia. W zależności od kąta pomiędzy segmentem a kierunkiem patrzenia, rzut może być krótszy niż obszar cięcia. Odcinki równoległe do kierunku patrzenia tworzą pojedynczą linię.

### Odsunięcie przekroju

Część odsunięta zaczyna się od widoku bazowego plus polilinia 3D, zobaczmy ![](/images/PartDesign_NewSketch.svg) [szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl") tego przypadku.

![](/images/TechDraw_ExampleSection-02.png) ![](/images/b/b7/Arch_Add.svg)
![](/images/TechDraw_ExampleSection-19.png) ![](/images/Button_right.svg)
![](/images/TechDraw_ExampleSection-20.png)

Widok podstawowy + szkic + "Technika rzutowania" ustawiona na `Odsunięcie` + "Wyświetl kierunek jako kąt" ustawione na `30°` → Widok podstawowy i przekrój G-G w pozycji domyślnej

Kąt kierunku widoku musi być ustawiony na odpowiednią wartość, aby uniknąć nieoczekiwanych rezultatów.

![](/images/TechDraw_ExampleSection-21.png)

Widok podstawy i przekrój G-G we właściwym położeniu

### Wyrównanie przekroju

Wyrównanie przekroju również rozpoczyna się od widoku podstawowego i polilinii 3D.

![](/images/TechDraw_ExampleSection-02.png) ![](/images/b/b7/Arch_Add.svg)
![](/images/TechDraw_ExampleSection-22.png) ![](/images/Button_right.svg)
![](/images/TechDraw_ExampleSection-23.png)

Widok podstawowy + szkic + "Technika rzutowania" ustawiona na `Wyrównanie` + ![](/images/Section-right.svg) _(lub "Wyświetl kierunek jako kąt" ustawione na `30°`)_ → Widok podstawowy i przekrój H-H w pozycji domyślnej

Kąt kierunku widoku można ustawić za pomocą ![](/images/Section-right.svg) i ![](/images/Section-left.svg) dla orientacji przybliżonej. Należy go odgadnąć i ustawić na najlepiej pasującą wartość albo wynik może być nieoczekiwany.

![](/images/TechDraw_ExampleSection-24.png)

Widok podstawy i przekrój H-H, jeśli parametr "Wyświetl kierunek jako kąt" jest ustawiony na wartość `30°`. (równolegle do dolnego odcinka linii przekroju). Odcinek został przesunięty do właściwej pozycji

Jeśli kąt kierunku widoku jest ustawiony nieprawidłowo, wynik może wyglądać następująco:

![](/images/TechDraw_ExampleSection-25.png)

Strzałki po obu stronach linii przekroju powodują dziwny rzut, parametr "Wyświetl kierunek jako kąt" jest ustawiony na wartość `90°`

### Widok pomocniczy

Narzędzie ![](/images/TechDraw_ComplexSection.svg) [Wstaw przekrój złożony](/TechDraw_ComplexSection/pl "TechDraw ComplexSection/pl") może, podobnie jak ![](/images/TechDraw_SectionView.svg) [Wstaw widok przekroju](/TechDraw_SectionView/pl "TechDraw SectionView/pl"), tworzyć widoki pomocnicze z widoków bazowych:

Widok pomocniczy rozpoczyna się od widoku podstawowego i pojedynczej linii 3D umieszczonej na zewnątrz obiektu.

![](/images/TechDraw_ExampleSection-02.png) ![](/images/b/b7/Arch_Add.svg)
![](/images/TechDraw_ExampleSection-26.png) ![](/images/Button_right.svg)
![](/images/TechDraw_ExampleSection-27.png)

Widok podstawowy + linia w 3D → Widok I

Wartość **Wyświetl kierunek jako kąt** musi być ręcznie wyodrębniona z linii 3D. Etykieta została wyedytowana. Linia przekroju i jedna strzałka muszą zostać ukryte w kolejnych krokach, ponieważ pojedyncza strzałka wystarczy, aby prawidłowo zdefiniować widok pomocniczy.

### Przekrój nie równoległy

Przekrój nie równoległy jest mieszanką przekrojów wyrównanych i przesuniętych.

![](/images/TechDraw_ExampleSection-02.png) ![](/images/b/b7/Arch_Add.svg)
![](/images/TechDraw_ExampleSection-30.png) ![](/images/Button_right.svg)
![](/images/TechDraw_ExampleSection-31.png)

Widok podstawowy + szkic → Widok podstawowy i przekrój K-K obrócony o -85° i przesunięty

Kierunek strzałki powinien być poziomy, ale narzędzie nie działało, gdy wartość **Wyświetl kierunek jako kąt** była ustawiona na `0°`. Tak więc szkic został obrócony o 5° i wartość wspomnianego kąta również została ustawiona na wartość `5°`.

### Porównanie przekroju nie równoległego z odsunięciem i wyrównaniem

![](/images/TechDraw_ExampleSection-32.png)

Widok podstawowy i przekrój K-K w 3 wersjach: "Odsunięcie": niebieskie zakreskowanie, "Nie równoległy": czarne zakreskowanie, "Wyrównany": czerwone zakreskowanie

Z jakiegoś powodu, jeśli wartość **Wyświetl kierunek jako kąt** wyrównanego przekroju jest ustawiona dokładnie na `5°`, wynik jest błędny. Dopiero po edycji przekroju i zaakceptowaniu dziwnej wartości `5.14°`, na którą w jakiś sposób ustawiony jest kąt, wyświetlany jest prawidłowy wynik.

![](/images/TechDraw_ExampleSection-33.png)

Tak jak powyżej z parametrem "Wyświetl kierunek jako kąt" ustawionym dokładnie na wartość `5°`: kierunek widoku drugiego segmentu od góry jest odwrócony _(widoczny jest wał)_

### Przekrój złożony w jednej linii

Długość _(szerokość)_ złożonego przekroju zależy od długości użytej linii w widoku 3D, ale wyniki różnią się od przekroju Odsuniętego do przekroju Nie równoległego:

![](/images/TechDraw_ExampleSection-34.png)
![](/images/TechDraw_ExampleSection-35.png)

Dwa przekroje oparte na tej samej linii w widoku 3D.  
Po lewej: Przekrój Odsunięty pokazuje segment między strzałkami jako przekrój, podczas gdy reszta obiektu pozostaje nieprzycięta.  
Po prawej: Przekrój Nie równoległy pokazuje tylko przekrój między strzałkami i pomija resztę obiektu.

## Przekroje złożone w praktyce

### Pół przekrój

Widok pokazujący symetryczny obiekt przecięty po jednej stronie linii środkowej i nieprzecięty po drugiej. Głębokość jest zwykle określona przez inną linię środkową.

![](/images/TechDraw_ExampleSection-28.png)
![](/images/TechDraw_ExampleSection-29.png)
![](/images/TechDraw_ExampleSection-36.png)

Z lewej i pośrodku: Widok odsunięcia przekroju z i bez strzałek, linii przekroju i tytułu, oba są zgodne ze standardem.  
Po prawej: Widok odsunięcia przekroju oparty na alternatywnej linii przekroju, patrz przekrój M-M powyżej.

### Uwagi

- Użyte wersje:
  - Przykłady zostały stworzone przy użyciu weekly build 0.21 - 31155 z wybranym pierwszym kątem i ISO.
  - Weekly build 0.21 - 31340 dla M-M.
- Kierunek widoku _(orientacja strzałek)_ musi być określony indywidualnie.
- Wszystkie przekroje złożone muszą być obracane samodzielnie.
- Wartość **Wyświetl kierunek jako kąt** równa dokładnie `0°` nie działa dla odcinków przesuniętych _(180° też?)_.
- Wartość **Wyświetl kierunek jako kąt** zostanie zresetowana do dziwnej wartości, gdy widok sekcji zostanie aktywowany do edycji.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Section_Examples/pl&oldid=1313294>"
