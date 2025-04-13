---
title: Analiza MES w stanie przejściowym
---

:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|                         |
| ----------------------- |
| Ćwiczenie               |
| Temat                   |
| Przejściowa analiza MES |
| Poziom trudności        |
|                         |
| Czas wykonania          |
|                         |
| Autorzy                 |
|                         |
| Wersja FreeCAD          |
|                         |
| Pliki z przykładami     |
|                         |
| Zobacz również          |
| _-_                     |
|                         |

## Kontekst

## Tworzenie modelu

1. Zaczynając od pustego projektu FreeCAD, budujemy naszą listwę bimetaliczną w środowisku pracy ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl")
2. Narysuj ![](/images/Part_Box.svg) [Sześcian](/Part_Box/pl "Part Box/pl") i zmień jego nazwę na `aluminium`.
3. Nadaj temu elementowi wymiary 100 x 10 x 2 mm _(długość x szerokość x wysokość)_.
4. Utwórz drugą bryłę [sześcianu](/Part_Box/pl "Part Box/pl") **stal** o takich samych wymiarach
5. Przesuń tę część o 2 mm wzdłuż osi Z _(za pomocą **Edycja ... → Umiejscowienie → Pozycja → Z**)_.
6. Zaznacz obie bryły _(używając klawisza Shift + kliknięcie myszą)_ i utwórz z nich obiekt funkcją ![](/images/Part_BooleanFragments.svg) [Fragmentacja](/Part_BooleanFragments/pl "Part BooleanFragments/pl").
7. Zmień nazwę obiektu Boolean Fragments na `listwa bimetaliczna`.
8. W [Edytorze właściwości](/Property_editor/pl "Property editor/pl") zmieniamy tryb z WIDOK**Standard** na WIDOK**CompSolid**. _(Powinno też zadziałać użycie polecenia [Utwórz kształt złożony](/Part_Compound/pl "Part Compound/pl") zamiast ![](/images/Part_BooleanFragments.svg) [Fragmentacji funkcją logiczną](/Part_BooleanFragments/pl "Part BooleanFragments/pl"), jednak w przypadku bardziej złożonych przecinających się kształtów mogą wystąpić problemy z późniejszą analizą MES. Lepiej więc przyzwyczaić się do używania w pierwszej kolejności Fragmentacji funkcją logiczną)_. Wynik powinien wyglądać następująco:

[![](/images/Transient_FEM_Bimetal_%281%29.JPG)

## Przygotowanie i uruchomienie analizy MES

### Przydzielanie materiałów

W środowisku pracy MES tworzymy nową analizę ![](/images/FEM_Analysis.svg) i dodajemy do niej nowy materiał ![](/images/FEM_MaterialSolid.svg). W następnym oknie zadania wybieramy jeden z predefiniowanych stopów aluminium. W sekcji "Wybór odniesienia dla geometrii" przypisujemy materiał do niższej części naszego modelu, ustawiając tryb wyboru na _Bryła_. W środowisku pracy MES tworzymy nową analizę ![](/images/FEM_Analysis.svg) i dodajemy do niej nowy materiał ![](/images/FEM_MaterialSolid.svg). W następnym oknie zadania wybieramy jeden z predefiniowanych stopów aluminium. W sekcji "Wybór odniesienia dla geometrii" przypisujemy materiał do niższej części naszego modelu, ustawiając tryb wyboru na _Bryła_, klikając Dodaj i wybierając powierzchnię lub krawędź dolnego paska. W widoku listy powinna pojawić się pozycja "BooleanFragments:Solid1".

![](/images/Transient_FEM_Bimetal_%282%29.JPG)

Zamykamy okno zadań i powtarzamy kroki, aby utworzyć drugi materiał "Stal" _(karta materiału "CalculiX-Steel")_ i przypisać go do górnego paska _("BooleanFragments:Solid2")_.

### Tworzenie siatki

Ponieważ analiza elementów skończonych wymaga oczywiście elementów do pracy, musimy podzielić nasz model na tak zwaną siatkę. Środowisko pracy MES oferuje dwa narzędzia do tworzenia siatek: Netgen i GMSH. W tym przypadku wybierzemy Netgen: Po wybraniu obiektów Boolean Fragments "listwa bimetaliczna", klikamy na ikonę ![](/images/FEM_MeshNetgenFromShape.svg). Netgen w oknie roboczym MES. W następnym oknie zadań musimy dokonać różnych wyborów, zaczynając od góry:

- Maksymalny rozmiar to maksymalny rozmiar _(w milimetrach)_ elementu. Im mniejszy maksymalny rozmiar elementu, tym więcej elementów otrzymamy - zwykle wynik będzie bardziej precyzyjny, ale z dramatycznym wzrostem czasu obliczeń. Ustawiliśmy go na `10`.
- Drugi rząd oznacza, że w każdym elemencie zostaną utworzone dodatkowe węzły. Zwiększa to czas obliczeń, ale zwykle jest dobrym wyborem, jeśli chodzi o zginanie, jak w naszej analizie. Pozostawiamy to pole zaznaczone.
- Stopień rozdrobnienia: Wybierz, jak drobno model powinien zostać pocięty na elementy. W przypadku bardziej złożonych modeli z krzywiznami i przecięciami możemy zwiększyć liczbę elementów w tych regionach, aby uzyskać lepsze wyniki _(oczywiście kosztem dłuższego czasu obliczeń)_. Eksperci mogą również ustawić opcję Zdefiniowane przez użytkownika i ustawić następujące parametry. W przypadku naszego prostego modelu prostokątnego wybór stopnia rozdrobnienia nie ma większego wpływu, dlatego utrzymujemy go na **umiarkowanym** poziomie.
- Optymalizuj: Jakiś rodzaj przetwarzania końcowego po generowaniu siatki. Pozostawiamy to pole zaznaczone.

Kliknięcie Zastosuj uruchamia generator siatki i - w czasie zależnym od komputera - na naszym modelu pojawia się szkielet siatki. Siatka powinna utworzyć około 4000 węzłów.

![](/images/Transient_FEM_Bimetal_%283%29.JPG)

### Przypisywanie warunków brzegowych

Analiza MES nic by teraz nie dała, ponieważ w naszym modelu nic się jeszcze nie dzieje. Dodajmy więc trochę temperatury: Użyj ![](/images/FEM_ConstraintInitialTemperature.svg) temperatury początkowej ze środowiska pracy MES i ustaw temperaturę na 300 K. Tutaj nie można wybrać żadnych części modelu, ponieważ ta nastawa dotyczy całego modelu.

Następnie używamy ![](/images/FEM_ConstraintTemperature.svg) temperatury działającej na powierzchnię. Zaznaczamy dwie powierzchnie na jednym końcu paska _(Ctrl + lewy klawisz myszy)_ i klikamy Dodaj w oknie zadań. Dwie powierzchnie obiektu Fragmentacji funkcją logiczną, powinny pojawić się na liście, a na modelu powinny pojawić się małe ikony temperatury. Ustawiamy temperaturę na 400 K i zamykamy okno zadań. Na początku analizy wybrane powierzchnie otrzymają natychmiastowy wzrost temperatury z 300 do 400 K. Ciepło będzie przewodzone wzdłuż metalowych pasków i spowoduje ich odgięcie.

![](/images/Transient_FEM_Bimetal_%284%29.JPG)

Przed uruchomieniem analizy należy ustawić dodatkowy warunek brzegowy: Analiza może zostać uruchomiona tylko wtedy, gdy nasz model jest zamocowany gdzieś w przestrzeni. Za pomocą ![](/images/FEM_ConstraintFixed.svg) wybieramy te same dwie ściany, co dla 400 K powyżej i dodajemy je do listy. Na modelu pojawią się czerwone paski, wizualizujące, że te powierzchnie są zamocowane w przestrzeni i nie mogą się poruszać podczas analizy.

![](/images/Transient_FEM_Bimetal_%285%29.JPG)

### Uruchomienie analizy

Analiza powinna już zawierać obiekt solwera **[CalculiXccx](/FEM_SolverCalculixCxxtools/pl "FEM SolverCalculixCxxtools/pl")**. Jeśli nie, dodajemy go za pomocą ikony solvera ![](/images/FEM_SolverCalculixCxxtools.svg) z paska narzędzi. _(Istnieją dwie identyczne ikony, solwer eksperymentalny powinien również działać)_. Obiekt solwera ma listę właściwości poniżej w lewej części okna. Tutaj wybieramy następujące opcje _(te niewymienione pozostawiamy bez zmian)_:

- Typ analizy: Chcemy przeprowadzić analizę termomechaniczną. Inne opcje to tylko statyczna _(bez wpływu temperatury)_, częstotliwościowa _(oscylacje)_ lub tylko w celu sprawdzenia poprawności modelu.
- Termomechaniczny stan ustalony: Stan ustalony oznacza, że solwer zwróci jeden wynik, w którym fizyka osiągnie równowagę. NIE chcemy tego robić, chcemy uzyskać wiele wyników w czasie _(analiza przejściowa)_. Należy więc ustawić wartość `Fałsz`.
- Czas zakończenia: Chcemy, aby nasza analiza zatrzymała się po 60 sekundach _(tj. w czasie symulacji, a nie w czasie rzeczywistym)_.

![](/images/Transient_FEM_Bimetal_%286%29.JPG)

Po dwukrotnym kliknięciu obiektu solwera sprawdzamy, czy wybrana jest opcja "termomechaniczna" i uruchamiamy Zapisz plik .inp. Zwykle zajmuje to kilka sekund _(lub znacznie więcej w przypadku większych modeli)_ i zwraca komunikat "zapis zakończony" w polu poniżej. Teraz rozpoczynamy obliczenia za pomocą Uruchom CalculiX. Po pewnym czasie powinny pojawić się ostatnie komunikaty "Bezbłędnie wykonane obliczenia CalculiX!" i "Ładowanie zestawów wyników...". Gdy licznik czasu na dole zatrzyma się, zamykamy okno zadań. _(Przy większych modelach i / lub wolniejszych komputerach FreeCAD może się zawiesić i nie zobaczymy działającego timera. Ale bądź cierpliwy, w większości przypadków CalculiX nadal działa w tle i ostatecznie wygeneruje wyniki)_.

Powinniśmy teraz mieć wiele ![](/images/FEM_ResultShow.svg) obiektów wynikowych MES na liście. Klikając dwukrotnie, możemy otworzyć każdy z nich i zwizualizować obliczone temperatury, przemieszczenia i naprężenia. Możemy wizualizować zginanie, wybierając opcję "Pokaż" w sekcji "Przemieszczenie". Ponieważ bezwzględne przemieszczenia są małe, używamy "Współczynnika", aby wyolbrzymić wartości.

![](/images/Transient_FEM_Bimetal_%287%29.JPG)

W programie FreeCAD możemy użyć ![](/images/FEM_PostPipelineFromResult.svg) [Prezentacji graficznej wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl"), aby wykonać post-processing wyników. Alternatywnie, możemy wyeksportować wyniki w formacie VTK i zaimportować je do dedykowanych postprocesorów, takich jak ParaView. Do eksportu wielu wyników _(jak w przypadku tej analizy)_ dostępna jest [makrodefinicja](/Macro_export_transient_FEM_results/pl "Macro export transient FEM results/pl").

## Do pobrania

- [Przykładowy plik bez wyników _(200 kB)_](https://drive.google.com/file/d/1m3RiJ-JM7QSJ6YDhZnafHIbyL92V6sYU/view?usp=sharing).

- [Przykładowy plik z wynikami _(10 MB)_](https://drive.google.com/file/d/157aIdVpIyfpVW9WxL-ReGz0FIsQebH_q/view?usp=sharing).

## Inny przykład

- [Analityczny przykład bimetalu](https://forum.freecadweb.org/viewtopic.php?f=18&t=43040&start=10#p366664). Przykład analityczny przedstawiony na forum jest zawarty w przykładach FreeCAD FEM. Można go uruchomić w Pythonie za pomocą:

```
from femexamples.thermomech_bimetall import setup
setup()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Transient_FEM_analysis/pl&oldid=1367015>"
