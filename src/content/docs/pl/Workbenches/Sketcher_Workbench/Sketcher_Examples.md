---
title: Przykłady dla środowiska pracy Szkicownik
---

:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

## Wprowadzenie

Myślę, że środowisko pracy ![](/images/Workbench_Sketcher.svg) [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") potrzebuje kilku przykładów, które nie są szczegółowymi poradnikami czy filmikami ...

## Zawias zwijany

Zawias zwijany to niewielki kawałek zginanego tworzywa sztucznego, który łączy dwie strony przedmiotu formowanego wtryskowo, np. przepustu z pokrywą lub obu połówek obudowy wtyczki chroniącej przed kurzem.

Ten przykład wykorzystuje pewien rodzaj szkicu głównego, na którym umieszcza się kilka zależnych od niego szkiców. Pokazuje również jak dołączyć i animować prosty zacisk wykonany na funkcjach środowiska pracy ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") oraz ![](/images/Workbench_Sketcher.svg) [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") z wiązaniami. Zastosowanie ![](/images/Bound-expression.svg) [wyrażeń](/Expressions/pl "Expressions/pl") w sposób opisany poniżej wymaga programu FreeCAD w wersji **0.21** lub nowszego.

### Podstawowy szkic

Zwykle obiekt jest modelowany w stanie zamkniętym. Później ruchoma część musi zostać odwrócona o 180°, aby uformować ją w stanie otwartym.

Zginany pasek jest reprezentowany przez okrągły łuk dla stanu zamkniętego i linię prostą dla stanu otwartego, oba mające ten sam punkt początkowy.

Punkt środkowy linii łączącej oba punkty końcowe wskazuje położenie osi odwracania, która jest normalna do płaszczyzny szkicu. _(Jest umieszczony na początku szkicu, dzięki czemu globalna oś prostopadła do płaszczyzny szkicu może być użyta jako oś odwracania)_

(Niektóre ukryte dodatkowe wyjaśnienia i opis przepływu pracy można rozwinąć tutaj -->

![](/images/Sketcher_ExampleHinge-01.gif)

Szkic główny i animowany zawias zacisku widok końcowy. _(kliknij na obrazek, jeśli animacja zatrzymała się po kilku powtórzeniach)_

W przypadku półokręgu długość łuku to promień pomnożony przez Pi (_l = r \* Pi_). Promień nazywany jest Promieniem Neutralnym, a linia nazywana jest Długością rozwiniętą. Wyrażenie dla DevelopedLength odnosi się do obu wartości: `.Constraints.NeutralRadius * pi`

: W tym samym szkicu wyrażenie zaczyna się od `.`, po którym następuje ValueType.ValueName, aby odnieść się do innej wartości.

### Szkic pośredni

Łuk tego zwijanego zawiasu ma stałą długość i zmienny promień. Jednym z danych wejściowych jest Promień Neutralny szkicu podstawowego. Aby mieć go pod ręką w tym szkicu, jest on połączony jako ![](/images/Sketcher_External.svg) [geometria zewnętrzna](/Sketcher_External/pl "Sketcher External/pl") posiadający wymiar referencyjny o nazwie Promień Odniesienia

Segment kołowy geometrii konstrukcyjnej wyświetla zależność między łukiem a promieniem dla danego kąta.  
**InputLength = ReferenceRadius \* Pi**  
oraz  
**ArcLength = DynamicRadius \* Pi \* ArcAngle / 180°**  
przy stałej długości daje:  
**ReferenceRadius \* Pi = DynamicRadius \* Pi \* ArcAngle / 180°**  
Natomiast po wyeliminowaniu Pi otrzymujemy:  
**ReferenceRadius = DynamicRadius \* ArcAngle / 180°** lub **DynamicRadius = ReferenceRadius \* 180° / ArcAngle**

: Wyrażenie ![](/images/Bound-expression.svg) [expression](/Expressions "Expressions") dla wartości DynamicRadius: `.Constraints.ReferenceRadius * 180 ° / .Constraints.ArcAngle`

Zawias zwijany jest zwykle symetryczny, więc inny łuk o tym samym punkcie środkowym o nazwie HalfArc jest używany do wyjścia i reprezentuje jedną połowę łuku zawiasu.

: ![](/images/Bound-expression.svg) [Wyrażenie](/Expressions/pl "Expressions/pl") dla wartości HalfArc: `.Constraints.ArcAngle / 2`.

![](/images/Sketcher_ExampleHinge-02.png)

Szkic pośredni pokazujący Promień Dynamiczny łuku zawiasu 4 _(mm)_ przy danym kącie 45° _(i półłuku dla wyjścia)_

### Szkic zawiasu zwijanego

Szkic ten definiuje grubość i przylegającą geometrię zawiasu zwijanego. W związku z tym ładujemy połowę łuku szkicu pośredniego jako geometrię zewnętrzną, aby użyć jej jako podstawy dla części zwijanej _(w tym przypadku ułamek 180°)_.

Ten zawias zwijany ma za zadanie utrzymywać połączone części stykające się ze sobą po zamknięciu. Można to osiągnąć, obliczając okrągły łuk o wymaganej długości, a następnie tworząc pasek o stałej grubości i na koniec nakładając zaokrąglenia w miejscu, w którym pasek styka się z połówkami obiektu. Ostatni krok w pewien sposób skraca pętlę, ale w prawdziwym świecie nie jest to problemem, ponieważ łuk nigdy nie będzie okrągły, więc zaokrąglenia mają wpływ na krzywiznę łuku, ale nie na jego funkcjonalność.

![](/images/Sketcher_ExampleHinge-03.png)

Szkic zawiasu przedstawiający zarys zawiasu na podstawie geometrii zewnętrznej z półłuku szkicu pośredniego

![](/images/Sketcher_ExampleHinge-04.png)
![](/images/Sketcher_ExampleHinge-05.png)

Po lewej: ![](/images/PartDesign_Pad.svg) [Wyciągnięty](/PartDesign_Pad/pl "PartDesign Pad/pl") półzawias z widocznym szkicem. Po prawej: półzawias z dodatkiem ![](/images/PartDesign_Fillet.svg) [zaokrąglenia](/PartDesign_Fillet/pl "PartDesign Fillet/pl")

![](/images/Sketcher_ExampleHinge-06.png) ![](/images/Button_right.svg)
![](/images/Sketcher_ExampleHinge-07.png)

Półzawias z wybraną płaszczyzną lustrzaną → zawias zwijany ![](/images/PartDesign_Mirrored.svg) [w odbiciu lustrzanym](/PartDesign_Mirrored/pl "PartDesign Mirrored/pl")

Wskazówka: Narzędzie ![](/images/Part_Mirror.svg) [odbicie lustrzane](/Part_Mirror/pl "Part Mirror/pl") akceptuje tylko trzy podstawowe płaszczyzny, więc nie może zostać użyte w takim przypadku.

: _(Z perspektywy czasu mądrą decyzją było rozpoczęcie tego przykładu od połączenia środowisk Projekt Części i Szkicownik)_.

Wreszcie dwa parametry definiują rozmiar zawiasu zwijanego:

- Promień Neutralny szkicu podstawowego,
- wartość grubości szkicu zawiasu.

### Gięcie zawiasu zwijanego

Kąt zgięcia jest kontrolowany przez wiązanie Arc Angle szkicu pośredniego i może być zmieniany w jego edytorze właściwości.  
Jesteśmy jednak dobrymi projektantami i prawidłowo nazwaliśmy nasze wiązania i wymiary szkiców, więc możemy zająć się kontrolowaniem kąta za pomocą środowiska Pyton.

Kilka podstawowych linii kodu do osadzenia w kontekście GUI może wyglądać następująco:

```
doc=App.ActiveDocument
sketch=doc.getObjectsByLabel('IntermediateSketch')[0]
 ...
sketch.getDatum('ArcAngle')
 ...
sketch.setDatum('ArcAngle',App.Units.Quantity('50.000000 deg'))
doc.recompute(None,True,True)

```

Krótkie wyjaśnienie:

- `doc = App.ActiveDocument`: Aby zaadresować aktywny dokument przez alias o nazwie **doc**
- `sketch = doc.getObjectsByLabel('IntermediateSketch')[0]`: Aby zaadresować odpowiedni szkic przez alias **sketch**.

  : Metoda **getObjectsByLabel()'** zwraca listę obiektów i musimy dodać indeks `0`, aby wybrać pierwszy obiekt z listy. (Nie spodziewamy się żadnego innego obiektu o tej samej etykiecie, więc nie musimy dbać o inne pozycje na liście).

- `sketch.getDatum('ArcAngle')`: Zwraca bieżącą wartość wiązania wymiarowego **ArcAngle** (do widoku raportu).
- `sketch.setDatum('ArcAngle', App.Units.Quantity('50.0 deg'))`: Ustawia wartość **ArcAngle** na `50°`.
- `doc.recompute(None,True,True)`: Aktualizuje cały dokument, aby pokazać również zmiany zależnej geometrii.

### Geometria łącząca

Dwie połówki zacisku czekają na przymocowanie do zawiasu, jedna po stronie statycznej, druga po stronie ruchomej.

![](/images/Sketcher_ExampleHinge-08.png)

Dwie połówki prostego zacisku

Strona statyczna jest łatwa:

1. Aktywuj zawartość i dostosuj właściwości pozycji i orientacji w edytorze właściwości, aż będzie pasował do zawiasu zwijanego.
2. Aktywuj zawartość zawiasu.
3. Wybierz ![](/images/PartDesign_Boolean.svg) [Operacje logiczne](/PartDesign_Boolean/pl "PartDesign Boolean/pl") narzędzie z _(domyślną)_ opcją Scalenie.
4. W oknie dialogowym naciśnij przycisk Dodaj zawartość
5. wybierz **ciało** statycznej połowy klipu.
6. Naciśnij OK, aby zakończyć i zamknąć okno dialogowe.

![](/images/Sketcher_ExampleHinge-09.png) ![](/images/Button_right.svg)
![](/images/Sketcher_ExampleHinge-10.png)

Zawias zwijany i statyczna połówka w pozycji modelowania → zawias zwijany z przeniesioną i ![](/images/PartDesign_Boolean.svg) [scaloną](/PartDesign_Boolean/pl "PartDesign Boolean/pl") statyczną połówką

Ale ruchoma strona jest inna: powiązana połowa geometrii zacisku musi przesunąć się do właściwej pozycji, zanim rozpocznie się (ponowne) obliczanie operacji Scalenia.

W tym momencie brakuje mi funkcji "Umocowanie z odsunięciem", takiej jak w środowisku Złożenie 3, aby dołączyć geometrię zacisku do jednej z ruchomych ścian. Ale po odrobinie eksperymentów i poprawek znalazłem rozwiązanie:

- ![](/images/Std_Part.svg) [Część](/Std_Part/pl "Std Part/pl") i ![](/images/PartDesign_Body.svg) [Zawartość](/PartDesign_Body/pl "PartDesign Body/pl") środowiska Projekt Części nie są obsługiwane przez ![](/images/Part_EditAttachment.svg). [Dołączenie](/Part_EditAttachment/pl#Ograniczenia "Part EditAttachment/pl").

Chociaż możliwe jest użycie dołączenia do ich wyrównania, dołączenie nie będzie połączone parametrycznie.

- Dołączenie może być zastosowany do elementu środowiska Projekt Części. Ten element i elementy od niego zależne zostaną przesunięte zgodnie z geometrią bazową. Ale!
  - Niezależne elementy środowiska Projekt Części nie będą się przesuwać, co spowoduje zmianę wynikowego kształtu i jego złamanie.
  - Zaleca się zachowanie niezależności elementów, aby uniknąć wpływu [problemu nazewnictwa topologicznego](/Topological_naming_problem/pl "Topological naming problem/pl").
- ![](/images/PartDesign_Clone.svg) [Klon](/PartDesign_Clone/pl "PartDesign Clone/pl") tworzy bryłę z pojedynczą cechą, która może być użyta z dołączeniem.

Mając to na uwadze, przepływ pracy może wyglądać następująco:

1. Wybierz Zawartość ruchomej połowy.
2. Użyj polecenia ![](/images/PartDesign_Clone.svg) [Utwórz klon](/PartDesign_Clone/pl "PartDesign Clone/pl").
3. W nowej bryle wybierz obiekt Klon w widoku Drzewa.
4. Użyj polecenia ![](/images/Part_EditAttachment.svg) [Dołączenie](/Part_EditAttachment/pl "Part EditAttachment/pl"), aby dodać właściwości dołączenia do obiektu Clon.
5. Otworzy się okno dialogowe Dołączenie.
   - Wybierz wierzchołek dla punktu odniesienia położenia.
   - Wybierz krawędź dla pierwszego kierunku.
   - Wybierz krawędź dla drugiego kierunku.
   - Sprawdź tryby dołączenia, aby znaleźć najlepiej pasujący.
   - Zmieniaj wartości obrotu i współrzędnych, aż geometria ponownie znajdzie się w pozycji modelowania.
6. Naciśnij OK, aby zamknąć okno dialogowe.
7. Przy wciąż aktywnej Zawartości zawiasu wybierz narzędzie ![](/images/PartDesign_Boolean.svg) [Operacja logiczna](/PartDesign_Boolean/pl "PartDesign Boolean/pl").
8. W oknie dialogowym naciśnij przycisk Dodaj zawartość.
9. wybierz Zawartość ruchomej połówki.
10. Naciśnij przycisk OK, aby zakończyć i zamknąć okno dialogowe.

![](/images/Sketcher_ExampleHinge-14.png)

Ruchoma połowa będzie ![](/images/Part_EditAttachment.svg). [dołączona](/Part_EditAttachment/pl "Part EditAttachment/pl") do rogu ruchomej strony zawiasu _(tryb mapowania OXZ: wierzchołek, krawędź, krawędź)_.

Z perspektywy czasu rozsądniej byłoby dostarczyć geometrię mocowania wraz ze Szkicem pośrednim, aby uniknąć kolejnego źródła [problemu nazewnictwa topologicznego](/Topological_naming_problem/pl "Topological naming problem/pl").

![](/images/Sketcher_ExampleHinge-11.png) ![](/images/Button_right.svg)
![](/images/Sketcher_ExampleHinge-12.png)

Dotychczasowy zacisk i ruchoma połowa w pozycji modelowania → gotowy zacisk z ![](/images/Part_EditAttachment.svg) [dołączeniem](/Part_EditAttachment/pl "Part EditAttachment/pl") i ![](/images/PartDesign_Boolean.svg) [scaleniem](/PartDesign_Boolean/pl "PartDesign Boolean/pl") ruchomej połówki

Rezultatem powinien być pojedynczy klip, który można zamykać i otwierać, zmieniając kąt łuku zawiasu zwijanego. Dozwolone kąty: od 0,1° do 180°, sekcja zwijana nie może być prosta, a więcej niż zamknięta nie ma sensu. _(Przy 180° obiekt może zostać stopiony w obszarach stycznych lub nakładających się, ale niewielka dodatkowa przerwa może pomóc, jeśli jest to nie do zaakceptowania.)_

![](/images/Sketcher_ExampleHinge-13.png) ![](/images/Button_right.svg)
![](/images/Sketcher_ExampleHinge-15.png) ![](/images/Button_right.svg)
![](/images/Sketcher_ExampleHinge-16.png)

Zacisk prawie zamknięty → Zacisk w połowie zamknięty → Zacisk w stanie uformowanym

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Examples/pl&oldid=1278222>"
