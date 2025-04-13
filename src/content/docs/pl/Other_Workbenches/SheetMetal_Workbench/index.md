---
title: Środowisko pracy Arkusz Blachy
---

:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::
![](/images/Sheetmetal_workbench_icon.svg)

Ikonka FreeCAD dla zewnętrznego środowiska pracy Arkusz blachy

## Wprowadzenie

Środowisko pracy ![](/images/Sheetmetal_workbench_icon.svg) Arkusz blachy jest [zewnętrznym środowiskiem pracy](/External_workbenches/pl "External workbenches/pl") i nie należy do standardowej instalacji programu FreeCAD. Zostało ono opracowane w celu dostarczenia narzędzi do tworzenia i rozwinięć obiektów blaszanych.

Cechami charakterystycznymi przedmiotów wykonanych z blachy są:

- Mają stałą grubość,
- Mogą być rozkładane, jeśli są wykonane tylko z płaskich ścian i połączeń cylindrycznych.

Narzędzie do rozkładania w obu wersjach nie jest ograniczone do części wykonanych narzędziami z tego środowiska pracy, ale może obsługiwać również obiekty należące do środowisk pracy [Część](/Part_Workbench/pl "Part Workbench/pl") i [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"), o ile spełniają one powyższe wymagania.

![](/images/SheetMetal_Example.png)

Z tyłu: model z blachy zbudowany za pomocą dodatku **Arkusz blachy**,  
Przed nim: rozwinięta bryła,  
Na pierwszym planie: szkic rozwinięcia z liniami gięcia do eksportu do formatu DXF.

Jeśli eksport do formatu DXF jest używany do sterowania maszynami _(na przykład cięcie laserowe)_, należy zmodyfikować DXF, aby usunąć linie pokazujące zagięcia, ponieważ linie te mogą być używane przez maszynę do cięcia.

## Instalacja

To środowisko pracy może być zainstalowane z ![](/images/Std_AddonMgr.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl"). Aby zainstalować je samodzielnie zobacz stronę [Instalacja zewnętrznych środowisk pracy](/Installing_more_workbenches/pl "Installing more workbenches/pl").

## Przybory

- ![](/images/SheetMetal_AddBase.svg) [Dodaj element bazowy](/SheetMetal_AddBase/pl "SheetMetal AddBase/pl"): Tworzy obiekt bazowy z blachy na podstawie szkicu, profilu lub płyty.

- ![](/images/SheetMetal_AddWall.svg) [Dodaj ścianę](/SheetMetal_AddWall/pl "SheetMetal AddWall/pl"): Dodaje kołnierz na każdej wybranej krawędzi płyty bazowej _(Kołnierz można przekształcić w obszycie, modyfikując jego kąt)_.

- ![](/images/SheetMetal_Extrude.svg) [Wyciągnij](/SheetMetal_Extrude/pl "SheetMetal Extrude/pl"): Rozciąga blachę na wybranej krawędzi wzdłuż jej wektora normalnego _(Po dodaniu szkicu konturu można go użyć do utworzenia geometrii blokującej)_.

- ![](/images/SheetMetal_AddFoldWall.svg) [Zagnij blachę](/SheetMetal_AddFoldWall/pl "SheetMetal AddFoldWall/pl"): Składa ścianę na wybranej linii z zadanym promieniem gięcia.

- ![](/images/SheetMetal_Unfold.svg) [Rozwiń](/SheetMetal_Unfold/pl "SheetMetal Unfold/pl"): Prostuje zgięty obiekt blaszany i generuje rozwiniętą bryłę oraz szkic konturowy z liniami gięcia _(udostępnia okno dialogowe do ustawiania parametrów)_.

- ![](/images/SheetMetal_UnattendedUnfold.svg) [Rozwiń bezobsługowo](/SheetMetal_UnattendedUnfold/pl "SheetMetal UnattendedUnfold/pl"): Prostuje zgięty obiekt blaszany i generuje rozwinięcie oraz szkic konturowy z liniami gięcia _(jeżeli parametry zostały już ustawione)_.

- ![](/images/SheetMetal_UnfoldUpdate.svg) [Aktualizacja rozwinięć](/SheetMetal_UnfoldUpdate/pl "SheetMetal UnfoldUpdate/pl"): Aktualizuje wszystkie obiekty rozwinięć.

- ![](/images/SheetMetal_AddCornerRelief.svg) [Dodaj podcięcie w narożniku](/SheetMetal_AddCornerRelief/pl "SheetMetal AddCornerRelief/pl"): Dodaje relief narożny do narożnika.

- ![](/images/SheetMetal_AddRelief.svg) [Dodaj podcięcie](/SheetMetal_AddRelief/pl "SheetMetal AddRelief/pl"): Pierwszy krok do przekształcenia obiektu powłoki w rozkładany obiekt z blachy, dodaje zagłębienie _(wycięcie)_ do narożnika.

- ![](/images/SheetMetal_AddJunction.svg) [Dodaj otwarte połączenie](/SheetMetal_AddJunction/pl "SheetMetal AddJunction/pl"): Drugi krok, aby przekształcić obiekt powłoki w obiekt z rozkładanej blachy, tworzy otwarte połączenie na krawędzi dwóch ścian.

- ![](/images/SheetMetal_AddBend.svg) [Dodaj zaokrąglone zgięcie](/SheetMetal_AddBend/pl "SheetMetal AddBend/pl"): Trzeci krok do przekształcenia obiektu powłoki w obiekt z rozkładanej blachy, zastępuje ostre krawędzie okrągłymi zagięciami.

- ![](/images/SheetMetal_SketchOnSheet.svg) [Szkic na arkuszu](/SheetMetal_SketchOnSheet/pl "SheetMetal SketchOnSheet/pl"): Na podstawie szkicu wycina wzór otworów wzdłuż zagiętych ścian obiektu z blachy.

- ![](/images/SheetMetal_AddCutout.svg) [Dodaj wycięcie](/SheetMetal_AddCutout/pl "SheetMetal AddCutout/pl"): Tworzy wycięcie poprzez wyciągnięcie szkicu.

- ![](/images/SheetMetal_Forming.svg) [Formowanie blach](/SheetMetal_Forming/pl "SheetMetal Forming/pl"): Wytłacza kształty z otworami lub bez otworów w arkuszu blachy.

- ![](/images/SheetMetal_BaseShape.svg) [Dodaj kształt bazowy](/SheetMetal_BaseShape "SheetMetal BaseShape"): Dodaje parametryczny obiekt bazowy konstrukcji blaszanej. _(wprowadzona w wersji 0.3.10)_

## Krótki opis

To środowisko pracy dostarcza narzędzi do dwóch głównych zadań:

- Tworzenie obiektów blaszanych,
- Rozkładanie obiektów z blachy.

Ta sekcja ma na celu dać ogólne pojęcie o tym, jak używać dostarczonych narzędzi. Bardziej szczegółowe informacje można znaleźć na stronie każdego narzędzia _(patrz wyżej)_ lub w połączonych z nim poradnikach _(patrz niżej)_.

### Utwórz obiekt z blachy

#### Rozpoczęcie od profilu

1. Utwórz otwartą polilinię _(najlepiej za pomocą [Szkicownika](/Sketcher_Workbench/pl "Sketcher Workbench/pl"))_,
2. Użyj polecenia ![](/images/SheetMetal_AddBase.svg) [Dodaj ścianę bazową](/SheetMetal_AddBase/pl "SheetMetal AddBase/pl"), aby utworzyć profil arkusza blachy.

#### Rozpoczęcie od pustego

1. Utwórz zamkniętą polilinię _(najlepiej za pomocą szkicownika)_,
2. Użyj polecenia ![](/images/SheetMetal_AddBase.svg) [Dodaj ścianę bazową](/SheetMetal_AddBase/pl "SheetMetal AddBase/pl"), aby utworzyć nowy arkusz blachy.

#### Rozpoczęcie na podstawie kształtu bazowego

1. Użyj narzędzia ![](/images/SheetMetal_BaseShape.svg) [Dodaj kształt bazowy](/SheetMetal_BaseShape/pl "SheetMetal BaseShape/pl"), aby dodać podstawowy obiekt blachy z parametrów _(wprowadzone w wersji 0.3.10)_.

#### Rozpoczęcie od wyciągnięcia w środowisku Projekt Części

1. Utwórz zamkniętą polilinię _(najlepiej za pomocą szkicownika)_,
2. Użyj polecenia ![](/images/PartDesign_Pad.svg) [PartDesign Pad](/PartDesign_Pad "PartDesign Pad") aby stworzyć bryłę prostopadłościanu,
3. Narzędzie ![](/images/PartDesign_Thickness.svg) [Grubość](/PartDesign_Thickness "PartDesign Thickness") środowiska Projekt Części sprawi, że będzie to obiekt o stałej grubości,
4. Aby można było go rozłożyć, potrzebne są przerwy lub połączenia między ścianami:
   1. Za pomocą narzędzia ![](/images/SheetMetal_AddRelief.svg) [Dodaj podcięcie](/SheetMetal_AddRelief/pl "SheetMetal AddRelief/pl") zetniemy wybrane narożniki,
   2. Polecenie ![](/images/SheetMetal_AddJunction.svg) [Dodaj otwarte połączenie](/SheetMetal_AddJunction/pl "SheetMetal AddJunction/pl") utworzy szczeliny między sąsiednimi ścianami, które trzeba rozdzielić,
   3. Polecenie ![](/images/SheetMetal_AddBend.svg) [Dodaj zaokrąglone zgięcie](/SheetMetal_AddBend/pl "SheetMetal AddBend/pl") utworzy cylindryczne połączenia dla pozostałych ścian, które muszą pozostać połączone.

Niektóre parametry będą dziedziczone z obiektu*(ów)* nadrzędnego, ale lepiej jest sprawdzić odpowiednie parametry na każdym etapie.

Należy teraz sprawdzić, czy powstały obiekt blaszany może zostać rozłożony _(zobacz rozdział [Rozłóż blaszany element](#Roz.C5.82.C3.B3.C5.BC_blaszany_element) poniżej)_.

#### Dodawanie kolejnych cech

Standardowe rozkładane blaszane elementy mogą być rozbudowywane:

1. Użyj polecenia ![](/images/SheetMetal_Extrude.svg) [Wyciągnij](/SheetMetal_Extrude/pl "SheetMetal Extrude/pl"), aby powiększyć ściany.
2. Polecenie ![](/images/SheetMetal_AddWall.svg) [Dodaj ścianę](/SheetMetal_AddWall/pl "SheetMetal AddWall/pl") doda nowe kołnierze lub obszycia w istniejącym obiekcie.
3. Użyj polecenia ![](/images/SheetMetal_AddCornerRelief.svg) [Dodaj podcięcie w narożniku](/SheetMetal_AddCornerRelief/pl "SheetMetal AddCornerRelief/pl"), aby dodać lub zmienić kształt podcięć narożnych.
4. Polecenie ![](/images/SheetMetal_AddFoldWall.svg) [Zagnij blachę](/SheetMetal_AddFoldWall/pl "SheetMetal AddFoldWall/pl") złoży ścianę na wybranej linii, tzn. przytnie ścianę na tej linii, przeniesie odciętą stronę i połączy je cylindrycznym połączeniem.
5. Użyj narzędzia ![](/images/SheetMetal_SketchOnSheet.svg) [Szkic na arkuszu](/SheetMetal_SketchOnSheet/pl "SheetMetal SketchOnSheet/pl") wytnij otwory w obiekcie zaczynając od wybranej ściany, a następnie podążając za sąsiednimi ścianami i połączeniami.
6. Polecenie ![](/images/SheetMetal_Forming.svg) [Formowanie blach](/SheetMetal_Forming/pl "SheetMetal Forming/pl") wytłoczy w płycie _(ścianie)_ kształt.

: : Po utworzeniu cechy _Formowanie blach_ obiekt _Arkusz blachy_ **już nie da się rozłożyć**!

Kilka narzędzi z innych środowisk pracy może być używanych do dodawania otworów lub zmiany kształtu krawędzi.

### Rozłóż blaszany element

Aby rozłożyć obiekt z blachy aktywuj narzędzie ![](/images/SheetMetal_Unfold.svg) [Rozłóż](/SheetMetal_Unfold/pl "SheetMetal Unfold/pl") lub ![](/images/SheetMetal_UnattendedUnfold.svg)[Rozłóż bezobsługowo](/SheetMetal_UnattendedUnfold/pl "SheetMetal UnattendedUnfold/pl").

Wynikiem będzie obiekt 3D z opcjonalnym szkicem konturowym zawierającym linie zgięcia.

### Przykłady

Dopóki strony poradników nie są dostępne na tej wiki, istnieje strona z [przykładami](/SheetMetal_Examples/pl "SheetMetal Examples/pl").

![](/images/SheetMetal_Example-01.png)
![](/images/SheetMetal_Example-02.png)
![](/images/SheetMetal_Example-03.png)
![](/images/SheetMetal_Example-04.png)
![](/images/SheetMetal_Example-05.png)

Zawiera również kilka wskazówek dotyczących [własności](/SheetMetal_Examples/pl#W.C5.82a.C5.9Bciwo.C5.9Bci_.C5.9Brodowiska_pracy_Arkusz_Blachy "SheetMetal Examples/pl").

## Ograniczenia

- Na środowisko robocze ma wpływ [problem nazewnictwa topologicznego](/Topological_naming_problem/pl "Topological naming problem/pl"), który jest nieodłączny dla FreeCAD. Jeśli edycja zagięcia wcześniej w historii części zmieni numerację powierzchni, wówczas kolejne zagięcia mogą zostać naruszone i zmienić powierzchnię. Jeżeli właściwości gięcia nie zostaną uszkodzone, możesz kliknąć na nim dwukrotnie, aby uzyskać okno dialogowe, w którym możesz wybrać odpowiednią powierzchnię w oknie [widoku 3D](/3D_view/pl "3D view/pl") i zaktualizować gięcie.
- Narzędzie Rozwiń ma pewne ograniczenia i może zawieść w pewnych skomplikowanych sytuacjach. Jeśli zawiedzie, spróbuj wybrać inną ścianę.
- Częsty przypadek awarii: należy podjąć wszelkie środki ostrożności, aby nie ciąć w zawiasach _(zagięciach)_ ani wzdłuż powierzchni ścian, ani w kątach, ani nie robić otworów lub nacięć w kątach.

## Poradniki

### Arkusz blachy poradnik według meme2704

Poniższy poradnik został zaczerpnięty z poradnika PDF wspomnianego w sekcji [Odnośniki internetowe](#Odno.C5.9Bniki_internetowe).

Następujący poradnik jest odtworzony z poradnika PDF wspomnianego w sekcji [Odnośniki_internetowe](#Links/pl).

#### Prezentacja środowiska pracy

Po pobraniu i zainstalowaniu rozszerzenia, uruchom je.

![](/images/Sm1.png)

#### Operacja pierwsza

- Wykonaj element początkowy: użyj środowisk pracy Część lub Rysunek Roboczy, wykonaj pierwszy szkic, który będzie zawierał wszystkie otwory i cięcia, następnie wytłocz ten element do grubości arkusza.
- Pamiętaj, że krawędzie będą zawsze w dodatku, tak samo jak promienie składania.

![](/images/Sm2.png)

#### Operacja druga

- Otwórz środowisko pracy Arkusz blachy.
- Wybierz 1 grubość krawędzi _(brzegu)_ płyty bazowej i kliknij na narzędzie "Dodaj zaokrąglone gięcie" 90° domyślny kąt gięcia może być zmieniany w zakresie od `0` do `90`°.
- Wysokość krawędzi wynosi domyślnie 10mm, można ją edytować w zakresie od `0.1` do `xxx` mm.
- Promień gięcia jest domyślnie równy grubości, można go edytować w zakresie od `0.1` do `xx` mm _(nigdy nie należy wstawiać wartości 0)_.
- Odstęp1, odstęp2 to odległość zagiętej krawędzi od rogu podstawy _(0 akceptwalne)_.
- Invert domyślnie: przyjmuje wartość `Fałsz` składa się do Z +, `Prawda` do ZReliefd przecina róg między fałdą a podstawą _(nieaktywne, jeśli szczelina ma wartość = 0)_.
- Reliefw dodaje 1 szczelina między zagięciem a krawędzią _(nieaktywne, jeśli reliefd ma wartość = 0)_.

![](/images/Sm3.png)

Powtórz tyle razy, ile jest boków do zgięcia.  
Składanie 1 powrót z wykorzystaniem wyciągnięcia.

![](/images/Sm4a.png)

Aby dodać 1 powrót powtórz tę samą operację wybierając grubość danej krawędzi.  
Aby zmniejszyć odstęp między 2 krawędziami użyj funkcji wyciągnięcia.  
Wybierz grubość i określ długość do dodania.  
Zwróć uwagę, że jeśli wyciągnięcie pierwszej krawędzi zostanie wykonane przed powrotem zagięcia, nie będzie brane pod uwagę, jeśli 1 identyczne zagięcie zostanie dodane do wyciągnięcia, będzie wyglądało poprawnie, ale rozkładanie nie zostanie wykonane.

Złożenie pierwsze drugiej krawędzi:  
Teraz musimy rozdzielić te 2 krawędzie, w przeciwnym razie połączą się i rozkładanie nie będzie możliwe.

- Metoda pierwsza: zrobić 1 wycofanie 1 krawędzi.
  - Podaj 1 wartość nieco większa niż szczelina1 _(lub szczelina2)_, przy zerze jest jeszcze połączenie.
- Metoda druga: zrobić 1 cięcie pod kątem 45 ° patrz dalej, użyj tego narzędzia.

![](/images/Sm5a.png)

#### Rozkładanie

Wybierz jedną ścianę odniesienia _(tutaj pomarańczowa)_ i kliknij przycisk na pasku narzędzi.  
Otrzymujemy niebieską część, której wystarczy zmodyfikować wartości X, Y lub Z, aby zobaczyć ją w całości.

![](/images/Sm6.png)

#### Przycięcie brzegów pod kątem 45°

Po złożeniu brzegów bez wycofania powstaje kształt.

![](/images/Sm7a.png)

Aby to zrobić należy dokonać podziału pod kątem 45° _(lub po dwusiecznej boki są nierównej szerokości)_.

- Utwórz jeden nowy skit związany z częściami wspólnymi dwóch brzegów.
- Utwórz jeden powiązany ogranicznik, wybierając zewnętrzną krawędź "zawiasu".
- Narysuj jeden trójkąt, którego wierzchołek jest związany na końcu, zorientowany na jeden bok pod kątem 45°, nadaj małemu bokowi minimalną szerokość _(wystarczy 0,1 mm)_ i wykonaj kieszeń.

Be careful not to scratch the "hinge" where the nakedness of bound the tip of the triangle at the edge of the fold line.

![](/images/Sm8a.png)

Rozkładanie

![](/images/Sm9.png)

#### Przebijanie krawędzi i brzegów

Wykonaj odpowiednie otwory i nacięcia po zakończeniu etapu gięcia, a przed rozłożeniem.  
Zawsze uważaj, aby nie "zarysować" linii zagięcia.

![](/images/Sm10.png)

#### Wykonanie brzegów załamanych

Wykonaj jedno zagięcie na krawędzi strony, pod kątem `45`° o długości `0,1` mm, a następnie jedno odwrotne pod kątem `45`° długości przylegającego boku skrzydła, wydłużając przeciwległą stronę, będzie przechodzić nad i nie będą one łączone.

![](/images/Sm11.png)

#### Szczególny przypadek tej samej krawędzi z przebiciami

W tym konkretnym przypadku, rozwijanie działa tylko poprzez wybranie żółtej ściany jako odniesienia.

![](/images/Sm12.png)

#### Szczególny przypadek otworu położonego w poprzek zagięcia

Wcześniej kilkakrotnie stwierdzono, że nie jest konieczne cięcie linii składania.  
Jak to zrobić?

![](/images/Sm13.png)

- Wykonaj podstawę z półokrągłym otworem i wykonaj dwie połówki boków i dwie połówki zagięcia oddzielnie.
- Następnie wykonaj przedłużenie na jednym z boków o szerokości otworu minus `0,1`mm, w ten sposób dwie krawędzie pozostaną rozdzielone.
- Następnie na tym przedłużeniu _(w kolorze zielonym)_ narysuj kontur cięcia i wykonaj kieszeń.
- W rezultacie otrzymujemy czerwony element powyżej, a rozkładanie działa, pozostaje linia, która wcześniej oddzielała dwie krawędzie.

![](/images/Sm14.png)

## Filmy

- [Eleganckie środowisko pracy obróbki blachy](https://www.youtube.com/watch?v=xidvQYkC4so) autorstwa Joko Engineering

## Odnośniki internetowe

- [Rozwinięcie blachy](/Macro_Sheet_Metal_Unfolder/pl "Macro Sheet Metal Unfolder/pl"), oryginalna makrodefinicja, na której bazuje narzędzie Rozkładanie.
- [Angielski i francuski poradnik w formacie PDF](https://forum.freecadweb.org/viewtopic.php?f=3&t=25002) na forum FreeCAD.
- Zgłaszanie błędów/żądanie funkcji: <https://github.com/shaise/FreeCAD_SheetMetal/issues>.

## Bibliografia

- Autor:
  - Narzędzia do składania: Copyright 2015-2018 by Shai Seger
  - Narzędzie do rozkładania: Copyright 2014 by Ulrich Brammer
- Licencja: [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)
- Kod źródłowy na githubie: <https://github.com/shaise/FreeCAD_SheetMetal>

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_Workbench/pl&oldid=1522818>"
