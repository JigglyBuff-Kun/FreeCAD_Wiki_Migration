---
title: Projekt Części Utwórz zawartość
---
|  |
| --- |
| Projekt części: Zawartość |
| Lokalizacja w menu |
| Projekt Części → Stwórz zawartość |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Część](/Std_Part/pl "Std Part/pl"), [Edycja cech](/Feature_editing/pl "Feature editing/pl") |
|  |

## Opis

Obiekt zawartość jest podstawowym elementem do tworzenia brył w środowisku [Projekt części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"). Może on zawierać [szkice](/Sketch/pl "Sketch/pl"), [obiekty odniesienia](/Datum/pl "Datum/pl") i [cechy](/PartDesign_Feature/pl "PartDesign Feature/pl"), które pomagają w tworzeniu [pojedynczej, ciągłej bryły](#Pojedyncza_ci.C4.85g.C5.82a_bry.C5.82a).

Element Zawartość dostarcza obiekt **odniesienia położenia**, który zawiera zarówno lokalne osie X, Y i Z, jak i płaszczyzny standardowe. Te elementy mogą być użyte jako referencje do dołączenia [szkiców](/Sketch/pl "Sketch/pl") i [brył pierwotnych](/PartDesign_CompPrimitiveAdditive/pl "PartDesign CompPrimitiveAdditive/pl").

Nie pomyl obiektu ![](/images/PartDesign_Body.svg) zawartość środowiska pracy Projekt części z obiektem ![](/images/Std_Part.svg) [Std: Część](/Std_Part "Std Part"). Pierwszy z nich jest specyficznym obiektem używanym w środowisku ![](/images/Workbench_PartDesign.svg) [Projekt części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"), przeznaczonym do modelowania [pojedynczej ciągłej bryły](#Pojedyncza_ci.C4.85g.C5.82a_bry.C5.82a) za pomocą [cech](/PartDesign_Feature/pl "PartDesign Feature/pl") środowiska Projekt części. [Std: Część](/Std_Part/pl "Std Part/pl") jest obiektem grupującym przeznaczonym do tworzenia [złożeń](/Assembly/pl "Assembly/pl"), nie jest on używany do modelowania, tylko do rozmieszczania różnych obiektów w przestrzeni. Wiele ciał i innych [Std: Części](/Std_Part/pl "Std Part/pl"), może być umieszczonych wewnątrz pojedynczej [Std: Części](/Std_Part "Std Part"), aby stworzyć złożony zespół.

![](/images/PartDesign_Body_tree.png) ![](/images/PartDesign_Body_example.png)

Po lewej: widok drzewa przedstawiający cechy, które kolejno tworzą ostateczny kształt obiektu.   
Po prawej: zakończony obiekt prezentowany w oknie [widoku 3D](/3D_view/pl "3D view/pl").

## Użycie

Jeśli nie jest wybrana żadna istniejąca bryła:

1. Naciśnij przycisk ![](/images/PartDesign_Body.svg) [Body](/PartDesign_Body "PartDesign Body"). Zostanie utworzona pusta zawartość, która automatycznie stanie się  *[aktywna](#Aktywny_status)* .
2. Teraz możesz nacisnąć ![](/images/PartDesign_NewSketch.svg) [Nowy szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl"), aby utworzyć [szkic](/Sketch/pl "Sketch/pl") w zawartości, który może być użyty z ![](/images/PartDesign_Pad.svg) [wyciągnięciem](/PartDesign_Pad/pl "PartDesign Pad/pl").
3. Alternatywnie, dodaj prymitywną [własciwość](/PartDesign_Feature "PartDesign Feature"), na przykład, ![](/images/PartDesign_AdditiveBox.svg) [addtywny sześcian](/PartDesign_AdditiveBox/pl "PartDesign AdditiveBox/pl").

Jeśli wybrano obiekt bryły:

1. Naciśnij przycisk ![](/images/PartDesign_Body.svg) zawartość. Tworzone jest nowa zawartość z pojedynczym elementem **właściwości podstawowej**. Ten element Właściwości podstawowej jest prostym odwołaniem do innego obiektu utworzonego wcześniej lub zaimportowanego do dokumentu. Zobacz akapit [właściwość podstawowa](#W.C5.82a.C5.9Bciwo.C5.9B.C4.87_podstawowa), aby uzyskać więcej informacji. Istniejąca bryła lub [właściwość](/PartDesign_Feature/pl "PartDesign Feature/pl") nie może być wybrana po naciśnięciu przycisku ![](/images/PartDesign_Body.svg) zawartość.

### Uwagi

* Jeśli nie ma obecnie żadnej zawartości, gdy przycisk ![](/images/PartDesign_NewSketch.svg) [Nowy szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl") zostanie wciśnięty, automatycznie zostanie utworzona nowa zawartość. Jeśli zawartość już istnieje, musi zostać uaktywniona przed użyciem funkcji ![](/images/PartDesign_NewSketch.svg) [Nowy szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl").
* Kliknij dwukrotnie zawartość w widoku [widoku drzewa](/Tree_view/pl "Tree view/pl") lub otwórz menu kontekstowe *(kliknij prawym przyciskiem myszy)* i wybierz **Przełącz aktywną zawartość**, aby aktywować lub dezaktywować zawartość. Jeśli inna zawartość jest aktywna, zostanie ona wyłączona. Zobacz [stan aktywny](#Aktywny_status), aby uzyskać więcej informacji.

## Właściwości

Projekt części: zawartość *(klasa `PartDesign::Body`)* wywodzi się z [Część: Cecha](/Part_Feature/pl "Part Feature/pl") *(klasy `Part::Feature`)*, dlatego posiada wszystkie właściwości tej ostatniej.

Oprócz właściwości opisanych na stronie [Cecha części](/Part_Feature/pl "Part Feature/pl"), bryła pochodząca ze środowiska Projekt części posiada następujące właściwości w [edytorze właściwości](/Property_editor/pl "Property editor/pl").

### Dane

Podstawa

* DANE**Czubek** (`Link`): [Cecha](/PartDesign_Feature "PartDesign Feature") zdefiniowana jako "Końcówka", która jest zazwyczaj ostatnią cechą utworzoną w bryle. Końcówka wskazuje ostateczny kształt bryły, który jest wyświetlany w oknie [widoku 3D](/3D_view "3D view"), gdy WIDOK**Tryb wyświetlania zawartości** jest ustawiony na `Czubek`. Zobacz stronę [czubek](#Czubek), aby uzyskać więcej informacji.
* DANE**Cecha Podstawa** (`Link`): zewnętrzny kształt używany jako pierwsza [właściwość](/PartDesign_Feature/pl "PartDesign Feature/pl") w bryle. Zazwyczaj ustawia się go podczas przeciągania obiektu bryłowego do pustej bryły. Jeśli żadna bryła nie zostanie zaimportowana w ten sposób, ta właściwość będzie pusta. Zobacz stronę [Cecha Podstawa](/PartDesign_Feature/pl "PartDesign Feature/pl"), aby uzyskać więcej informacji.
* DANE**Umiejscowienie** (`Placement`): pozycja obiektu w oknie [3D view](/3D_view/pl "3D view/pl"). Położenie jest określone przez punkt `Bazowy` *(wektor)* i punkt `Obrotu` *(oś i kąt)*. Zobacz stronę [Umiejscowienie](/Placement/pl "Placement/pl")
* DANE**Grupa** (`LinkList`): lista [Cech projektu części](/PartDesign_Feature/pl "PartDesign Feature/pl") w treści.

#### Ukryte Dane właściwości

* DANE**Odniesienie położenia** (`Link`): obiekt [odniesienia położenia](/App_OriginGroupExtension/pl "App OriginGroupExtension/pl"), który jest pozycyjnym odniesieniem dla wszystkich elementów wymienionych w DANE**Grupie**.
* DANE**\_ Grupa Dotknięta** (`Bool`): czy grupa jest wzruszona czy nie.

Również ukryte właściwości opisane na stronie [Cecha części](/Part_Feature/pl "Part Feature/pl").

### Widok

Podstawa

* WIDOK**Tryb wyświetlania zawartości** (`Enumeration`): ustawia tryb wyświetlania specyficzny dla zawartości za pomocą jednego z dwóch typów.
  + `Na wskroś` *(domyślnie)* wyświetla wszystkie obiekty wewnątrz bryły, czyli [szkice](/Sketch/pl "Sketch/pl"), [cechy](/PartDesign_Feature/pl "PartDesign Feature/pl"), obiekty punktów odniesienia itp. Tryb ten pozwala na wizualizację częściowych operacji wykonywanych wewnątrz Bryły, dlatego jest zalecanym trybem podczas dodawania i edycji cech. Wybierz konkretny element, a następnie ustaw WIDOK**Widoczność** na `true` lub wciśnij klawisz Spacja na klawiaturze.
  + `Czubek` ujawnia tylko ostateczny kształt bryły, który jest zdefiniowany przez właściwość DANE**Czubek**. Cała reszta, w tym [szkice](/Sketch/pl "Sketch/pl"), [częściowe cechy](/PartDesign_Feature/pl "PartDesign Feature/pl"), punkty odniesienia itp. nie są wyświetlane, nawet jeśli są widoczne w [widoku drzewa](/Tree_view/pl "Tree view/pl"). Ten tryb jest zalecany, gdy bryła nie musi być dalej modyfikowana, więc wyświetlany jest ustalony kształt. Ten tryb jest również zalecany, gdy chcemy wybrać podelementy *(wierzchołki, krawędzie i ściany)* ostatecznego kształtu, aby użyć ich do pracy z w innymi narzędziami.

## Koncepcja zawartości

### Pojedyncza ciągła bryła

Zawartość Projektu części jest przeznaczona do modelowania pojedynczej, ciągłej bryły. Znaczenie słowa "ciągła" to element wykonany w jednym kawałku, bez części ruchomych lub brył rozłącznych. Przykłady brył ciągłych to takie, które są wytwarzane z jednego kawałka surowca w procesie odlewania, cięcia lub frezowania. Na przykład nakrętka, podkładka i śruba składają się z pojedynczego stałego kawałka stali bez ruchomych części, więc każda z nich może być modelowana przez Zawartość Projektu części. Obiekty, które są tworzone przez spawanie dwóch elementów, mogą być również modelowane przez pojedynczą Zawartość, o ile spoina nie jest przeznaczona do rozerwania.

Gdy te sąsiadujące bryły są umieszczone razem w jakimś układzie, wtedy stają się "złożeniem". W złożeniu, obiekty nie są połączone razem, ale są po prostu "ułożone w stos" lub umieszczone obok siebie, i pozostają indywidualnymi częściami.

![](/images/PartDesign_Body_contiguous_separate.png) ![](/images/PartDesign_Body_contiguous_assembly.png)

Po lewej: trzy pojedyncze, przylegające do siebie bryły, z których każda jest modelowana przez zawartość Projektu części.   
 Po prawej: poszczególne Zawartości połączone w złożenie.

### Edycja cech

Zawartość Projektu części jest przeznaczona do pracy poprzez tworzenie początkowej bryły, albo ze [szkicami](/Sketch/pl "Sketch/pl"), lub z [bryłami pierwotnymi](/PartDesign_CompPrimitiveAdditive "PartDesign CompPrimitiveAdditive"), a następnie modyfikowanie jej poprzez ["cechy"](/PartDesign_Feature/pl "PartDesign Feature/pl") aby dodać lub usunąć materiał z poprzedniego kształtu. Pełne wyjaśnienie znajdziesz na stronie [Edycja cech](/Feature_editing/pl "Feature editing/pl").

Zawartość Projektu części wykona automatyczne funkcją [suma](/Part_Fuse/pl "Part Fuse/pl") *(zjednoczenie)* elementów bryłowych wewnątrz niej. Oznacza to, że   
*(1)* częściowe bryły powinny się stykać podczas tworzenia i   
*(2)* rozłączone bryły nie są dozwolone.

![](/images/PartDesign_Body_two_intersection.png) ![](/images/PartDesign_Body_two_fusion.png)

Po lewej: dwie pojedyncze bryły, które przecinają się wzajemnie.   
Po prawej: pojedyncze złożenie projektu części z dwoma [cechami dodatkowymi](/PartDesign_Feature/pl "PartDesign Feature/pl"). Są one automatycznie łączone razem, więc zamiast przecinać się, tworzą jedną ciągłą bryłę.

![](/images/PartDesign_Body_non-contiguous.png)

Po lewej: dwie nieciągłe bryły. to nie jest prawidłowa zawartość Projektu części.   
 Po prawej: dwie przylegające do siebie bryły, co skutkuje poprawną bryłą Projektu części. Nowsza [cecha](/PartDesign_Feature/pl "PartDesign Feature/pl") powinna zawsze stykać się lub przecinać poprzednią, tak, że jest z nią zespolona i staje się jedną ciągłą bryłą.

*Uwaga:* Inne programy CAD, takie jak Catia pozwalają na tworzenie nieciągłych brył w tej samej "zawartości". Od wersji v0.19, FreeCAD nie pozwala na to. Na forum [FreeCAD](https://forum.freecadweb.org/index.php) toczyły się dyskusje na temat zniesienia tego ograniczenia, ale nie podjęto jeszcze żadnej konkretnej decyzji. Jeśli chciałbyś dowiedzieć się więcej lub przedstawić różne punkty widzenia, proszę dyskutuj na [forum](https://forum.freecadweb.org/index.php).

## Szczegółowe objaśnienie właściwości

### Aktywny status

Otwarty dokument może zawierać wiele Zawartości. Aby dodać nową cechę do określonej zawartości, należy nadać jej status *aktywna*. Aktywna zawartość będzie wyświetlana w [widoku drzewa](/Tree_view/pl "Tree view/pl") kolorem tła określonym przez wartość **Aktywna zawartość** w [Edytor ustawień](/Preferences_Editor/pl#Kolory "Preferences Editor/pl") *(domyślnie jasnoniebieski)*. Aktywna bryła będzie również wyświetlana w postaci pogrubionego tekstu.

Aby uaktywnić lub dezaktywować Zawartość:

* Kliknij dwukrotnie na jej pozycję w [widoku drzewa](/Tree_view/pl "Tree view/pl"), lub
* Otwórz menu kontekstowe *(klikając prawym przyciskiem myszki)* i wybierz **Przełącz aktywną zawartość**.

Aktywowanie Zawartości powoduje automatyczne przełączenie do środowiska [Projekt części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"). W tym samym czasie może być aktywna tylko jedna Zawartość.

![](/images/PartDesign_Body_active.png)

Dokument z dwiema Zawartościami Projektu części, wśród których aktywna jest druga.

### Odniesienie położenia

Odniesienie położenia obejmuje trzy standardowe osie *(X, Y, Z)* i trzy standardowe płaszczyzny *(XY, XZ i YZ)*. [Szkice](/Sketch/pl "Sketch/pl") i inne obiekty mogą być dołączane do tych elementów podczas ich tworzenia.

1. Tworzenie bryły.
2. Jeśli zawartość jest wybrana w [widoku drzewa](/Tree_view/pl "Tree view/pl"), naciśnij przycisk ![](/images/PartDesign_NewSketch.svg) [Utwórz nowy szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl"), otworzy się [panel zadań](/Task_panel/pl "Task panel/pl") umożliwiający wybranie jednej z płaszczyzn.
3. Jeśli zawartość nie jest wybrana, wybierz Odniesienie położenia i uczyń go widocznym w oknie widoku [widoku 3D](/3D_view "3D view") naciskając klawisz Spacja na klawiaturze. Rozwiń także obiekt Odniesienie położenia, aby zobaczyć osie i płaszczyzny.
4. Wybierz jedną z płaszczyzn, albo w [widoku drzewa](/Tree_view/pl "Tree view/pl") albo w oknie [widok 3D](/3D_view/pl "3D view/pl"), a następnie naciśnij ![](/images/PartDesign_NewSketch.svg) [Utwórz nowy szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl"). Szkic zostanie utworzony na wybranej płaszczyźnie.

Ten sam proces może być zastosowany przy tworzeniu pomocniczej geometrii układu odniesienia jak [Linia](/PartDesign_Line/pl "PartDesign Line/pl"), [Płaszczyzna](/PartDesign_Plane/pl "PartDesign Plane/pl") i [Układ współrzędnych](/PartDesign_CoordinateSystem/pl "PartDesign CoordinateSystem/pl").

*Uwaga:* Początek układu współrzędnych jest obiektem [App: Odniesienie położenia](/App_OriginGroupExtension "App OriginGroupExtension") *(klasa `App::Origin`)*, podczas gdy osie i płaszczyzny są obiektami odpowiednio typu `App::Line` oraz `App::Plane`. Każdy z tych elementów może być ukryty i nieujawniany indywidualnie przy użyciu klawisza spacja. Jest to przydatne przy tworzeniu innych obiektów, aby wybrać właściwe odniesienie.

*Uwaga 2:* Wszystkie elementy składowe Zawartości są powiązane z jej odniesieniem położenia, co oznacza, że Zawartość może być przesuwana i obracana w odniesieniu do globalnego układu współrzędnych, bez wpływu na rozmieszczenie jej elementów składowych.

![](/images/PartDesign_Body_Origin_tree.png) ![](/images/PartDesign_Body_Origin_view.png)

Z lewej: Odniesienie położenia Projekt części w [widoku drzewa](/Tree_view/pl "Tree view/pl").   
Z prawej: reprezentacja Odniesienia położenia w oknie [widoku 3D](/3D_view/pl "3D view/pl").

### Cecha podstawowa

Element cechy bazowej jest pierwszym elementem [cecha projektu części](/PartDesign_Feature/pl "PartDesign Feature/pl") w Zawartości, gdy Zawartość jest oparta na innym kształcie bryły. Bryła ta może być utworzona przez dowolne środowisko pracy lub zaimportowana z pliku zewnętrznego, na przykład z pliku STEP.

![](/images/PartDesign_Body_BaseFeature_tree.png)

Zawartość Projekt części, każda z nich z jedną cechą bazową, która jest pobierana z wcześniej utworzonych brył.

Aby utworzyć Cechę Bazową:

1. wybierz kształt bryły zewnętrzny w stosunku do dowolnej bryły, i
2. naciśnij ![](/images/PartDesign_Body.svg) Zawartość, spowoduje to utworzenie nowej bryły z pojedynczą cechą bazową.

*Uwaga:* nie możesz wybrać istniejącej zawartości ani żadnej z jej [cechy](/PartDesign_Feature/pl "PartDesign Feature/pl"), po naciśnięciu przycisku ![](/images/PartDesign_Body.svg) Zawartość.

Jeśli masz już zawartość, możesz utworzyć cechę bazową w ten sposób:

* w [widoku drzewa](/Tree_view/pl "Tree view/pl") wybierz obiekt, przeciągnij go i upuść wewnątrz zawartości, lub
* w [edytorze właściwości](/Property_editor/pl "Property editor/pl"), edytuj wartość DANE**cecha bazowa** naciskając ikonkę wielokropka ... i wybierając obiekt z listy. W tym przypadku możesz wybrać istniejącą zawartość jako cechę bazową.

*Uwaga:* Przeciąganie i upuszczanie działa tylko dla zawartości, które nie mają jeszcze cechy bazowej.

*Uwaga 2:* jeśli zawartość posiada już kilka cech, to po przeciągnięciu i upuszczeniu bryły zewnętrznej, Cecha bazowa zostanie utworzona na początku listy cech, czyli zostanie dodana na początku właściwości DANE**Grupy**.

Cecha Podstawa jest całkowicie opcjonalna; jest ona obecna tylko wtedy, gdy dołączamy obiekt spoza zawartości. Jeśli żadna zewnętrzna bryła nie jest dołączona, możesz nadal budować swój kształt używając [szkiców](/Sketch/pl "Sketch/pl"), [wyciągnięć](/PartDesign_Pad/pl "PartDesign Pad/pl"), [brył pierwotnych](/PartDesign_CompPrimitiveAdditive/pl "PartDesign CompPrimitiveAdditive/pl") i innych [Cech Projektu części](/PartDesign_Feature/pl "PartDesign Feature/pl"). W tym przypadku właściwość DANE**cechy podstawowej** pozostaje pusta.

![](/images/PartDesign_Body_BaseFeature_Tip.svg)

Po lewej: Zawartość Projektu części z cechą bazową, która jest pobierana z zewnętrznego obiektu bryły, i wiele kolejnych [Cechy Projektu części](/PartDesign_Feature/pl "PartDesign Feature/pl") na wierzchu..   
 Po prawej: Zawartość, która nie posiada określonej cechy bazowej.

*Note:* Jeżeli inna bryła środowiska Projekt Części jest wybrana jako Cecha bazowa, musi zawierać kształt. Jeśli jest pusta *(brak elementów, brak Cechy bazowej, ...)*, spowoduje to błąd.

### Czubek

Czubek jest [cechą Projektu części](/PartDesign_Feature/pl "PartDesign Feature/pl"), który jest wystawiony poza Zawartość. To znaczy, jeśli inne narzędzie z dowolnego środowiska pracy *(na przykład ![](/images/Part_SimpleCopy.svg) [Część: Szybka kopia](/Part_SimpleCopy/pl "Part SimpleCopy/pl") lub ![](/images/Part_Cut.svg) [Część: Wytnij](/Part_Cut/pl "Part Cut/pl"))* musi używać kształtu zawartości, użyje kształtu Czubka. Mówiąc inaczej, Czubek jest ostateczną reprezentacją bryły, tak jakby historia parametryczna nie istniała.

![](/images/PartDesign_Body_Tip_final.svg)

Po lewej: Zawartość Projektu części z pełną historią parametryczną włącznie z cechami pośrednimi.   
Po prawej: Czubek jest ostatecznym kształtem, który może być wyeksportowany z Zawartości, z pominięciem historii modelu.

Czubek jest automatycznie ustawiany na ostatnią cechę utworzoną w zawartości. Niemniej jednak, może być również ustawiony na dowolną cechę pośrednią poprzez otwarcie menu kontekstowego w [widoku drzewa](/Tree_view/pl "Tree view/pl") *(prawy przycisk myszy)* i wybranie opcji **![](/images/PartDesign_MoveTip.svg) [Ustaw czubek](/PartDesign_MoveTip "PartDesign MoveTip")**, lub zmieniając wartość zawartości DANE**Czubka** w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

Zmiana czubka w efekcie cofa jego historię, umożliwiając dodanie cech, które powinny być dodane wcześniej. Pozwala także na udostępnienie innego kształtu narzędziom zewnętrznym.

W [widoku drzewa](/Tree_view "Tree view"), Czubek Zawartości jest rozpoznawany przez [cechę Projektu części](/PartDesign_Feature/pl "PartDesign Feature/pl"), który ma ikonę składającą się z białej strzałki wewnątrz zielonego koła.

![](/images/PartDesign_Body_Tip_tree.png)

Dwie zawartości Projektu części, każda z nich posiada [Cechy Projektu części](/PartDesign_Feature/pl "PartDesign Feature/pl"). Czubek jest ostatnią cechą w nich, i jest oznaczony symbolem nakładki.

### Współpraca z innymi środowiskami pracy

Domyślnie, [cechy Projektu Części](/PartDesign_Feature/pl "PartDesign Feature/pl") wewnątrz bryły są zaznaczone, ponieważ jest to wymagane do edycji i dodawania kolejnych cech za pomocą narzędzi środowiska [Projekt części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"). Nie zaleca się jednak wybierania poszczególnych cech, aby używać ich z narzędziami z innych środowisk, takich jak [Część](/Part_Workbench/pl "Part Workbench/pl") i [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), ponieważ wyniki mogą być nieoczekiwane. Jeśli to zrobimy, w widoku [raportu](/Report_view/pl "Report view/pl") może pojawić się komunikat o błędzie, *Powiązania wykraczają poza dozwolony zakres*.

Dlatego też na potrzeby pracy z innymi środowiskami, w [widoku drzewa](/Tree_view/pl "Tree view/pl") należy wybrać tylko samą Zawartość. W przypadkach, gdy konieczne jest wybranie konkretnych elementów podrzędnych zawartości *(wierzchołków, krawędzi i powierzchni)*, właściwość WIDOK**Tryb wyświetlania zawartości** bryły powinna być przełączona na `Czubek`. Gdy ten tryb jest włączony, dostęp do obiektów pod zawartością *([cechy](/PartDesign_Feature/pl "PartDesign Feature/pl"), punkty bazowe, [szkice](/Sketch/pl "Sketch/pl"))* jest wyłączony, a wszystko poza [Czubkiem](/PartDesign_Body#Tip "PartDesign Body") w oknie [widoku 3D](/3D_view/pl "3D view/pl") będzie ukryte .

Po zastosowaniu elementów podrzędnych w innych środowiskach pracy, WIDOK**Tryb wyświetlania zawartości** może być ustawiony z powrotem na wartość `Na wskroś`.

![](/images/PartDesign_Body_Tip_Display_mode.svg)

Po lewej: gdy "Tryb wyświetlania zawartości" jest ustawiony na wartość `Na wskroś` możliwe jest wybranie i wykonanie operacji z poszczególnymi [cechami Projektu części](/PartDesign_Feature/pl "PartDesign Feature/pl"); generalnie nie jest to zalecane.   
 Po prawej: gdy "Tryb wyświetlania zawartości" jest ustawiony na `Czubek`, wszystkie zaznaczenia i operacje wykonywane na zawartości będą wykonywane w odniesieniu do Czubka, dzięki czemu widoczny będzie tylko ostateczny kształt bryły.

### Zarządzanie wyświetlaniem

Widoczność zawartości jest nadrzędna w stosunku do widoczności wszystkich obiektów, które zawiera. Jeśli zawartość jest ukryta, obiekty, które zawiera, również zostaną ukryte, nawet jeśli ich właściwości WIDOK**Widoczność** są ustawione na wartość `true`.

Wiele [Szkiców](/Sketch/pl "Sketch/pl") może być widocznych w tym samym czasie, ale tylko jedna [Cecha](/PartDesign_Feature/pl "PartDesign Feature/pl") *(wynik bryły)* może być widoczna w tym samym czasie. Wybranie ukrytej cechy i naciśnięcie klawisza Spacja na klawiaturze spowoduje, że stanie się ona widoczna i automatycznie ukryje wcześniej prezentowaną cechę.

![](/images/PartDesign_Body_Visibility.png)

Zawartość Projektu części: wiele [Szkiców](/Sketch/pl "Sketch/pl") może być widocznych jednocześnie, ale tylko jedna [cecha](/PartDesign_Feature/pl "PartDesign Feature/pl") bryły może być widoczna w tym samym czasie, niezależnie od tego, czy jest to Czubek, czy nie.

### Przyłączanie

[Cecha Projektu części](/PartDesign_Feature/pl "PartDesign Feature/pl"), tak jak [obiekty planarne](/Part_Part2DObject/pl "Part Part2DObject/pl"), mogą być dołączone do różnych płaszczyzn, zazwyczaj standardowych płaszczyzn zdefiniowanych przez [Odniesienie położenia](#Odniesienie_po.C5.82o.C5.BCenia), lub do niestandardowych [płaszczyzn Projektu części](/PartDesign_Plane/pl "PartDesign Plane/pl").

[Szkice](/Sketch/pl "Sketch/pl") są zazwyczaj dołączane do płaszczyzny podczas ich tworzenia. W podobny sposób mogą być dołączane [bryły pierwotne](/PartDesign_CompPrimitiveAdditive/pl "PartDesign CompPrimitiveAdditive/pl"). Przymocowanie tych obiektów do płaszczyzny pozwala na ich przemieszczanie w zawartości poprzez zmianę ich właściwości DANE**Przesunięcie umocowania**. Więcej informacji na temat trybów dołączania można znaleźć na stronie [Część: Edytuj mocowanie](/Part_EditAttachment/pl "Part EditAttachment/pl").

Element [cecha Projektu części](/PartDesign_Feature/pl "PartDesign Feature/pl"), który nie jest dołączony będzie pokazany z czerwonym symbolem nakładki obok jego ikony w [widoku drzewa](/Tree_view/pl "Tree view/pl").

![](/images/PartDesign_Body_Feature_attachment.png)

Zawartość Projektu części: [Cechy projektu części](/PartDesign_Feature/pl "PartDesign Feature/pl"), które nie są dołączone do płaszczyzny lub układu współrzędnych będą pokazane z symbolem nakładki obok ich ikony w [widok drzewa](/Tree_view/pl "Tree view/pl").

### Dziedziczenie

Zawartość Projektu części jest formalnie instancją klasy `PartDesign::Body`, której rodzicem jest [cecha części](/Part_Feature/pl "Part Feature/pl") *(klasa `Part::Feature`)* poprzez pośrednią klasę `Part::BodyBase`, i jest uzupełniona o rozszerzenie Odniesienie położenia.

![](/images/FreeCAD_core_objects.svg)

Uproszczony schemat zależności pomiędzy podstawowymi obiektami programu. Obiekt `PartDesign::Body` jest przeznaczony do budowania parametrycznych brył 3D, a więc wywodzi się z podstawowego obiektu `Part::Feature` i posiada Odniesienie położenia do kontroli rozmieszczenia cech użytych wewnątrz siebie.

## Tworzenie skryptów

*Zobacz również:* [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl"), oraz [Obiekty skryptowe](/Scripted_objects/pl "Scripted objects/pl").

Zobacz stronę [Cecha części](/Part_Feature/pl "Part Feature/pl"), aby uzyskać ogólne informacje na temat dodawania obiektów do dokumentu.

Zawartość środowiska Projekt części jest tworzona w dokumencie za pomocą metody `addObject()`. Gdy Zawartość już istnieje, [cecha Projekt części](/PartDesign_Feature/pl "PartDesign Feature/pl") może być do niego dodana za pomocą metod `addObject()` lub `addObjects()` tej zawartości.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj.Label = "Custom label"

feat1 = App.ActiveDocument.addObject("PartDesign::AdditiveBox", "Box")
feat2 = App.ActiveDocument.addObject("PartDesign::AdditiveCylinder", "Cylinder")

obj.addObjects([feat1, feat2])
App.ActiveDocument.recompute()

```

W dokumencie, który ma wiele obiektów Zawartości, można ustawić [aktywny obiekt](#Aktywny_status) za pomocą `setActiveObject` i metody `ActiveView`. Pierwszym argumentem jest stały ciąg znaków `"pdbody"`, a drugim argumentem jest obiekt Zawartość, który ma zostać uaktywniony.

```
import FreeCAD as App
import FreeCADGui as Gui

doc = App.newDocument()
obj1 = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj2 = App.ActiveDocument.addObject("PartDesign::Body", "Body")

Gui.ActiveDocument.ActiveView.setActiveObject("pdbody", obj1)
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Body/pl&oldid=1558859>"