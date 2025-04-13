---
title: Std Utwórz łącze
---
|  |
| --- |
| Std: Utwórz łącze |
| Lokalizacja w menu |
| brak |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Część](/Std_Part/pl "Std Part/pl"), [Grupa](/Std_Group/pl "Std Group/pl"), [Zawartość](/PartDesign_Body/pl "PartDesign Body/pl") |
|  |

## Opis

Narzędzie ![](/images/Std_LinkMake.svg) **Utwórz łącze** tworzy obiekt [App: Łącze](/App_Link/pl "App Link/pl") *(klasa `App::Link`)*, typ obiektu, który odwołuje się lub łączy z innym obiektem, w tym samym dokumencie lub w innym dokumencie. Jest specjalnie zaprojektowany do wydajnego wielokrotnego powielania pojedynczego obiektu, co pomaga w tworzeniu skomplikowanych [złożeń](/Assembly/pl "Assembly/pl") z mniejszych złożeń podrzędnych i wielu komponentów wielokrotnego użytku, takich jak śruby, nakrętki i podobne elementy złączne.

Obiekt [App: Łącze](/App_Link/pl "App Link/pl") został nowo wprowadzony w wersji 0.19. W przeszłości proste duplikowanie obiektów można było osiągnąć za pomocą ![](/images/Draft_Clone.svg) [Klonu](/Draft_Clone/pl "Draft Clone/pl"), ale jest to mniej wydajne rozwiązanie ze względu na jego implementację, która zasadniczo tworzy kopię wewnętrznego [kształtu](/Part_TopoShape/pl "Part TopoShape/pl") obiektu źródłowego. Z drugiej strony, obiekt Łącze odwołuje się bezpośrednio do oryginalnego Kształtu, więc jest bardziej wydajny pamięciowo.

Sam obiekt [Łącze](/App_Link/pl "App Link/pl") może zachowywać się jak szyk, powielając swój obiekt bazowy wiele razy. Można to zrobić, ustawiając jego właściwość DANE**Ilość elementów** na wartość `1` lub większą. Ten obiekt "[Szyk łączy](#Link_Array/pl)" może być również tworzony za pomocą różnych narzędzi do tworzenia szyków w środowisku pracy ![](/images/Workbench_Draft.svg) [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), na przykład ![](/images/Draft_OrthoArray.svg) [Szyk ortogonalny](/Draft_OrthoArray/pl "Draft OrthoArray/pl"), ![](/images/Draft_PolarArray.svg) [Szyk biegunowy](/Draft_PolarArray/pl "Draft PolarArray/pl"), oraz ![](/images/Draft_CircularArray.svg) [Szyk kołowy](/Draft_CircularArray/pl "Draft CircularArray/pl").

W przypadku korzystania ze środowiska ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"), Łącza są przeznaczone do użycia z obiektem ![](/images/PartDesign_Body.svg) [Zawartości](/PartDesign_Body/pl "PartDesign Body/pl"), więc zaleca się ustawienie WIDOK**Tryb wyświetlania Zawartości** na wrtość `Czubek` w celu wybrania cech całej Zawartości, a nie indywidualnych cech. Aby utworzyć szyk wewnętrznych [cech](/PartDesign_Feature/pl "PartDesign Feature/pl"), użyj narzędzi ![](/images/PartDesign_LinearPattern.svg). [Szyk liniowy](/PartDesign_LinearPattern/pl "PartDesign LinearPattern/pl"), ![](/images/PartDesign_PolarPattern.svg) [Szyk kołowy](/PartDesign_PolarPattern/pl "PartDesign PolarPattern/pl"), oraz ![](/images/PartDesign_MultiTransform.svg) [Transformacja wielokrotna](/PartDesign_MultiTransform/pl "PartDesign MultiTransform/pl").

Narzędzie ![](/images/Std_LinkMake.svg) Utwórz łącze nie jest definiowane przez konkretne środowisko pracy, ale przez system bazowy, dlatego znajduje się na pasku narzędzi **Konstrukcja**, który jest dostępny we wszystkich [środowiskach pracy](/Workbenches/pl "Workbenches/pl"). Obiekt Łącze, używany w połączeniu z ![](/images/Std_Part.svg) [Częścią](/Std_Part/pl "Std Part/pl") do grupowania różnych obiektów, stanowi podstawę środowiska pracy ![](/images/Assembly3_workbench_icon.svg) [Złożenie 3](/Assembly3_Workbench/pl "Assembly3 Workbench/pl") i ![](/images/Assembly4_workbench_icon.svg) [Złożenie 4](/Assembly4_Workbench/pl "Assembly4 Workbench/pl").

## Użycie

Przy użyciu zaznaczenia:

1. Wybierz obiekt w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl"), dla którego chcesz utworzyć Łącze.
2. Naciśnij przycisk ![](/images/Std_LinkMake.svg) Utwórz Łącze. Utworzony obiekt ma taką samą ikonę jak oryginalny obiekt, ale posiada strzałkę wskazującą, że jest to Łącze.

Bez użycia zaznaczenia:

1. Jeśli żaden obiekt nie jest zaznaczony, naciśnij przycisk ![](/images/Std_LinkMake.svg) Utwórz łącze, aby utworzyć puste ![](/images/Link.svg) Łącze.
2. Przejdź do [edytora właściwości](/Property_editor/pl "Property editor/pl"), następnie kliknij na właściwość DANE**Powiązane obiekty**, aby otworzyć okienko dialogowe [Wybór obiektu](/Selection_methods/pl "Selection methods/pl") i wybrać obiekt, a następnie naciśnij OK.
3. Zamiast wybierać cały obiekt w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl"), można również wybrać elementy podrzędne *(wierzchołki, krawędzie lub ściany)* pojedynczego obiektu w oknie [widoku 3D](/3D_view/pl "3D view/pl"). W takim przypadku Łącze powieli tylko te elementy podrzędne, a ikonka strzałki będzie inna. Można to również zrobić za pomocą narzędzia ![](/images/Std_LinkMakeRelative.svg) [Utwórz łącze względne](/Std_LinkMakeRelative/pl "Std LinkMakeRelative/pl").

![](/images/Std_Link_tree_example.png) ![](/images/Std_Link_example.png)

*(1)* obiekt, *(2)* puste łącze, *(3)* pełne łącze do pierwszego obiektu *(z nadrzędnym materiałem)* i *(4)* łącze tylko do niektórych elementów podrzędnych obiektu. Puste łącze nie jest powiązane z rzeczywistym obiektem, więc nie jest wyświetlane w oknie [widoku 3D](/3D_view/pl "3D view/pl").

## Użycie: dokumenty zewnętrzne

1. Zacznij od dokumentu, który ma co najmniej jeden obiekt, który będzie źródłem łącza.
2. Otwórz nowy lub istniejący dokument. Dla łatwiejszej obsługi, użyj opcji ![](/images/Std_TreeMultiDocument.svg) [Wiele dokumentów](/Std_TreeMultiDocument/pl "Std TreeMultiDocument/pl"), aby wyświetlić oba dokumenty w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl"). Zanim przejdziesz dalej, [zapisz](/Std_Save/pl "Std Save/pl") oba dokumenty. Łącze nie będzie w stanie znaleźć swojego źródła i celu, jeśli oba dokumenty nie zostaną zapisane na dysku.
3. W pierwszym dokumencie wybierz obiekt, który chcesz powiązać. Następnie przełącz zakładki w [głównego obszaru widoku](/Main_view_area/pl "Main view area/pl"), aby przejść do drugiego dokumentu.
4. Naciśnij przycisk ![](/images/Std_LinkMake.svg) Utwórz link. Utworzony obiekt ma taką samą ikonę jak oryginalny obiekt, ale ma dodatkową nakładkę ze strzałką wskazującą, że jest to łącze pochodzące z zewnętrznego dokumentu.

*Uwaga:*

* Podczas zapisywania dokumentu z łączem, program poprosi również o [zapisanie](/Std_Save/pl "Std Save/pl") dokumentu źródłowego zawierającego oryginalny obiekt.
* Aby dołączyć oryginalny obiekt do dokumentu z łączem, należy użyć przycisku ![](/images/Std_LinkImport.svg) [Importuj łącza](/Std_LinkImport/pl "Std LinkImport/pl") lub ![](/images/Std_LinkImportAll.svg) [Importuj wszystkie łącza](/Std_LinkImportAll/pl "Std LinkImportAll/pl").
* Narzędzie ![](/images/Std_LinkMake.svg) Utwórz łącze może być użyte na istniejącym obiekcie łącza, w celu utworzenia łącza do łącza, które ostatecznie prowadzi do oryginalnego obiektu w dokumencie źródłowym. Można tego użyć z ![](/images/Std_LinkMakeRelative.svg) [Utwórz łącze względne](/Std_LinkMakeRelative/pl "Std LinkMakeRelative/pl"), aby wybrać tylko określone elementy podrzędne.

![](/images/Std_Link_tree_documents_example.png) ![](/images/Std_Link_documents_example.png)

*(1, 2)* dwa obiekty z dokumentu źródłowego połączone z dokumentem docelowym, *(3)* łącze do drugiego łącza *(z nadrzędnym materiałem)* oraz *(4)* łącze do elementów podrzędnych drugiego łącza.

## Przeciąganie i upuszczanie

Zamiast przełączać zakładki dokumentów, można tworzyć Łącza wykonując operację przeciągnij i upuść w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl"): wybierz obiekt źródłowy z pierwszego dokumentu, przeciągnij go, a następnie upuść na nazwę drugiego dokumentu przytrzymując klawisz Alt na klawiaturze.

Przeciąganie i upuszczanie powoduje różne działania w zależności od trzymanego klawisza modyfikatora.

* Bez klawisza modyfikatora po prostu przenosi obiekt z jednego dokumentu do drugiego. Na kursorze wyświetlana jest pochylona strzałka.
* Przytrzymanie klawisza Ctrl kopiuje obiekt. Na kursorze wyświetlany jest znak plus.
* Przytrzymanie klawisza Alt tworzy łącze. Na kursorze wyświetlana jest para ogniw łańcucha.

W przypadku modyfikatorów Ctrl i Alt, przeciąganie i upuszczanie może być również wykonywane w pojedynczym dokumencie. Oznacza to, że przeciągnięcie obiektu i upuszczenie go na nazwę tego samego dokumentu może być użyte do utworzenia wielu kopii lub wielu linków do niego.

## Grupy

![](/images/Std_LinkMake.svg) Utwórz łącze można użyć na obiekcie ![](/images/Std_Part.svg) [Część](/Std_Part/pl "Std Part/pl") w celu szybkiego duplikowania grup obiektów umieszczonych w przestrzeni, czyli [złożeniach](/Assembly/pl "Assembly/pl").

![](/images/Std_Link_tree_Std_Part_example.png)

Łącze utworzone z obiektu [Część](/Std_Part "Std Part"). Obiekty nie są duplikowane, ale są przedstawione pod oryginalną zawartością i pod zawartością Łącze.

Zwykła ![](/images/Std_Group.svg) [Grupa](/Std_Group/pl "Std Group/pl") nie posiada właściwości DANE**Umiejscowienie**, więc nie może kontrolować pozycji obiektów wewnątrz niego. Jednakże, gdy narzędzie ![](/images/Std_LinkMake.svg) Utwórz link zostanie użyte z ![](/images/Std_Group.svg) [Grupą](/Std_Group/pl "Std Group/pl"), wynikowe łącze zachowuje się zasadniczo jak obiekt ![](/images/Std_Part.svg) [Część](/Std_Part/pl "Std Part/pl"), a także może być przemieszczane w przestrzeni.

![](/images/Std_Link_tree_Std_Group_example.png) ![](/images/Std_Link_Std_Group_example.png)

Łącze utworzone z [Grupy](/Std_Group/pl "Std Group/pl"). Obiekty nie są duplikowane, ale są wymienione pod oryginalną zawartością i pod zawartością Łącza. Łącze *(z nadrzędnym materiałem)* może być przesuwane w przestrzeni, tak jak obiekt [Część](/Std_Part/pl "Std Part/pl").

Łącze do ![](/images/Std_Part.svg) [Części](/Std_Part/pl "Std Part/pl") utrzyma widoczność obiektów zsynchronizowaną z oryginalnym obiektem Część, więc jeśli ukryjesz jeden obiekt w Łączu, będzie on ukryty we wszystkich Łączach i w oryginalnym obiekcie. Z drugiej strony, łącze do ![](/images/Std_Group.svg) [Grupy](/Std_Group/pl "Std Group/pl") pozwoli na niezależną kontrolę widoczności.

![](/images/Std_Link_tree_Std_Part_visibility.png) ![](/images/Std_Link_tree_Std_Group_visibility.png)

Po lewej: [Część](/Std_Part/pl "Std Part/pl") z dwoma obiektami i dwoma linkami do Części, gdzie widoczność obiektów jest zsynchronizowana. Po prawej: [Grupa](/Std_Group/pl "Std Group/pl") z dwoma obiektami i dwoma linkami do Grupy, gdzie widoczność obiektów jest kontrolowana niezależnie w każdej grupie.

## Kontrola wyglądu

Gdy tworzone jest łącze, domyślnie właściwość WIDOK**Zastępuj materiał** ma wartość `FAŁSZ`, więc obiekt łącza będzie miał taki sam wygląd jak oryginalny DANE**Połączony obiekt**.

Gdy właściwość WIDOK**Zastępuj materiał** jest ustawione na `PRAWDA`, właściwość WIDOK**Materiał kształtu** będzie teraz kontrolować wygląd obiektu Łącza.

Niezależnie od stanu właściwości WIDOK**Zastępuj materiał**, możliwe jest indywidualne ustawienie wyglądu elementów podrzędnych (wierzchołków, krawędzi, ścian) dla obiektu Łącza.

1. Wybierz obiekt Łącza w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl"). Otwórz menu kontekstowe *(kliknij prawym przyciskiem myszy)* i wybierz **Zastąp kolory ...**.
2. Teraz wybierz w oknie [widoku 3D](/3D_view/pl "3D view/pl") poszczególne elementy podrzędne, których chcesz użyć, naciśnij Edycja i zmień właściwości, w tym przezroczystość.
3. Aby usunąć niestandardowe atrybuty, zaznacz elementy na liście i naciśnij Usuń.
4. Gdy wynik będzie zadowalający, naciśnij OK, aby zamknąć okno dialogowe.

*Uwaga:* od wersji 0.19 kolorowanie elementów podrzędnych podlega regułom [problemu nazewnictwa topologicznego](/Topological_naming_problem/pl "Topological naming problem/pl"), więc powinno być wykonywane jako ostatni krok modelowania, gdy model nie podlega już zmianom.

![](/images/Std_Link_override_color_example.png)

(1) Oryginalny obiekt, (2) obiekt Łącza z nadrzędnym materiałem i (3) drugi obiekt Łącza ze zmodyfikowanymi poszczególnymi elementami podrzędnymi.

## Szyk łączy

*Zobacz również:* [Szyk ortogonalny](/Draft_OrthoArray/pl "Draft OrthoArray/pl").

Gdy tworzone jest Łącze, domyślnie jego DANE**Liczba elementów** wynosi `0`, więc tylko pojedynczy obiekt Łącze będzie widoczny w [Widoku drzewa](/Tree_view/pl "Tree view/pl").

Biorąc pod uwagę, że wartość DANE**Wyświetl element** jest domyślnie ustawiona na `true`, gdy DANE**Liczba elementów** jest ustawiona na `1` lub więcej, automatycznie więcej obiektów Łącze zostanie utworzonych poniżej pierwszego. Każdy nowy obiekt Łącze może zostać umieszczony w żądanej pozycji poprzez zmianę jego własnej właściwości DANE**Umiejscowienie**.

W podobny sposób każdy element szyku może mieć zmieniony wygląd, albo przez właściwości WIDOK**Zastępuj materiał** i WIDOK**Materiał kształtu**, albo przez użycie menu **Zastąp kolory ...** na całym szyku, a następnie wybranie poszczególnych ścian. Zostało to opisane w akapicie [Kontrola wyglądu](#Kontrola_wyglądu).

![](/images/Std_Link_tree_array_example.png) ![](/images/Std_Link_array_example.png)

(1) Oryginalny obiekt i (2, 3, 4) szyk Łączy z trzema elementami, każdy w innej pozycji. Pierwszy obiekt Łącza ma nadpisany materiał i przezroczyste ściany, a dwa pozostałe mają niestandardowe kolory ścian.

Gdy jesteś zadowolony z rozmieszczenia i właściwości elementów Łącza w szyku, możesz zmienić wartość właściwości DANE**Wyświetl element** na `FAŁSZ`, aby ukryć poszczególne Łącza w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl"). Ma to tę zaletę, że system jest bardziej dynamiczny, zwłaszcza jeśli w dokumencie znajduje się wiele obiektów.

Tworząc tego typu szyk Łączy, musisz umieścić każdy z elementów samodzielnie. Jeśli jednak chcesz użyć określonych wzorców do umieszczenia kopii, możesz użyć narzędzi szyku w środowisku pracy ![](/images/Workbench_Draft.svg) [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), takich jak ![](/images/Draft_OrthoArray.svg) [Szyk ortogonalny](/Draft_OrthoArray/pl "Draft OrthoArray/pl"), ![](/images/Draft_PolarArray.svg) [Szyk biegunowy](/Draft_PolarArray/pl "Draft PolarArray/pl"), oraz ![](/images/Draft_CircularArray.svg) [Szyk kołowy](/Draft_CircularArray/pl "Draft CircularArray/pl"). Polecenia te mogą tworzyć normalne kopie lub kopie Łącz w zależności od opcji w czasie tworzenia.

## Widoczność

Gdy właściwość DANE**Wyświetl element** ma wartość `true`, a poszczególne elementy są wyświetlane w [Widoku drzewa](/Tree_view/pl "Tree view/pl") w [szyku łączy](#Szyk_łączy), każde Łącze można wyświetlić lub ukryć, naciskając klawisz Spacja na klawiaturze.

Innym sposobem na ukrycie poszczególnych elementów jest użycie menu **Zastąp kolory ...**.

1. Wybierz szyk, otwórz z menu podręcznego **Zastąp kolory ...** *(kliknij prawym przyciskiem myszy)*.
2. W oknie [widoku 3D](/3D_view/pl "3D view/pl") wybierz dowolny element podrzędny z dowolnego Łącza w szyku.
3. Naciśnij Ukryj. Powinna pojawić się ikona oka ![](/images/Invisible.svg) wskazująca, że ten element został ukryty w [widoku 3D](/3D_view/pl "3D view/pl"). Obiekt tymczasowo pokaże się, gdy kursor najedzie na ikonę ![](/images/Invisible.svg).
4. Możesz kliknąć OK, aby potwierdzić operację i zamknąć okno dialogowe. Łącze pozostanie ukryte, nawet jeśli jest wyświetlane jako widoczne w [widoku drzewa](/Tree_view/pl "Tree view/pl").

![](/images/Std_Link_array_visibility_example.png)

Okno dialogowe koloru elementu dostępne po otwarciu menu kontekstowego obiektu Łącze w Widoku drzewa.

Jeśli chcesz przywrócić widoczność tego elementu szyku, wejdź ponownie do okna dialogowego, wybierz ikonę oka, a następnie kliknij Usuń, aby usunąć status ukrycia, i kliknij OK, aby potwierdzić i zamknąć okno dialogowe. Element będzie ponownie widoczny w oknie [widoku 3D](/3D_view/pl "3D view/pl").

Gdy Łącze odnosi się do obiektu ![](/images/Std_Part.svg) [Część](/Std_Part/pl "Std Part/pl") lub ![](/images/Std_Group.svg) [Grupa](/Std_Part/pl "Std Part/pl"), narzędzie z menu **Zastąp kolory ...** działa podobnie jak w przypadku szyków. Pozwala kontrolować kolor ściany, kolor całego obiektu i widoczność obiektów w grupie.

![](/images/Std_Link_Std_Part_visibility_example.png) ![](/images/Std_Link_Std_Part_visibility_example_3D.png)

Obiekt [Część](/Std_Part "Std Part") zawierający trzy obiekty i Łącze do tej części. W Łączu (1) pierwszy obiekt jest niewidoczny, (2) drugi obiekt ma kilka elementów podrzędnych o różnych kolorach, (3) cały trzeci obiekt ma inny kolor i poziom przezroczystości.

## Właściwości

Obiekt [App: Łącze](/App_Link/pl "App Link/pl") *(klasa `App::Link`)* wywodzi się z podstawowej klasy [App: DocumentObject](/App_DocumentObject/pl "App DocumentObject/pl") *(`App::DocumentObject`)*, dlatego posiada podstawowe właściwości tej ostatniej, takie jak DANE**Etykieta** i DANE**Etykieta2**.

Są to właściwości dostępne w [edytorze właściwości](/Property_editor/pl "Property editor/pl"). Ukryte właściwości można wyświetlić za pomocą polecenia **Pokaż ukryte** w menu podręcznym [edytora właściwości](/Property_editor/pl "Property editor/pl").

### Dane

Łącze

* DANE (LockDynamic, Ukryte)**ColoredElements** (`LinkSubHidden`): lista elementów Łącza, których kolor został nadpisany.
* DANE (LockDynamic)**Element Count** (`IntegerConstraint`): Liczba elementów łącza. Domyślnie `0`. Jeśli ma wartość `1` lub większą, [App Link](/App_Link/pl "App Link/pl") będzie zachowywać się jak tablica i powieli ten sam DANE**Linked Object** wiele razy. Jeśli DANE**Show Elements** ma wartość `PRAWDA`, każdy element w tablicy będzie wyświetlany w [widoku drzewa](/Tree_view "Tree view"), a każdy z nich może mieć zmodyfikowane własne DANE**Umiejscowienie**. Każda kopia łącza będzie miała nazwę opartą na [Nazwie](/Object_name "Object name") łącza, powiększoną o `_iN`, gdzie `N` jest liczbą zaczynającą się od `0`. Na przykład, z pojedynczym `Link`, kopie będą miały nazwy `Link_i0`, `Link_i1`, `Link_i2`, itd.
* DANE (Immutable, Ukryte, LockDynamic)**ElementList** (`LinkList`): lista elementów Łącza.
* DANE (LockDynamic)**LinkClaimChild** (`Bool`): Uznanie połączonego obiektu za element podrzędny.
* DANE (LockDynamic)**LinkCopyOnChange** (`Enumeration`):
  + `Disabled`: wyłącza tworzenie kopii połączonego obiektu wywoływane zmianą którejkolwiek z jego właściwości ustawionych jako `CopyOnChange`.
  + `Enabled`: włącza głęboką kopię połączonego obiektu jeśli którakolwiek z jego właściwości oznaczonych jako `CopyOnChange` ulegnie zmianie. Po utworzeniu głębokiej kopii nie będzie żadnego połączenia między oryginalnym i skopiowanym obiektem. Zatem zmiany w oryginalnym obiekcie nie będą odzwierciedlone w kopiach. Uwaga: to jest stan przygotowawczy, właściwe kopiowanie nastąpi dopiero gdy właściwości `CopyOnChange` ulegną zmianie. Zobacz stan `Owned`.
  + `Owned`: oznacza, że połączony obiekt został skopiowany i kopia należy do Połączenia. Ten stan jest ustawiany automatycznie przez Połączenie, nie przez użytkownika. Podejście wygląda następująco: jeśli stan to `Enabled` i użytkownik zmodyfikuje jakiekolwiek właściwości wcześniej ustawione jako `CopyOnChange` to stan zmieni się na `Owned`. Jest to chwila, w której Połączenie przeprowadzi głęboką kopię łączonego obiektu. W tym stanie Połączenie nie będzie próbowało synchronizować żadnych zmian oryginalnego łączonego obiektu z powrotem do kopii.
  + `Tracking`: to samo co `Enabled`, ale dodatkowo kopia będzie automatycznie odświeżana jeśli oryginalny obiekt źródłowy ulegnie zmianie.
* DANE (Hidden, LockDynamic)**LinkCopyOnChangeGroup** (`Link`): Powiązany z wewnętrznym obiektem grupy do przechowywania kopii po zmianie.
* DANE (Hidden, LockDynamic)**LinkCopyOnChangeSource** (`XLink`): Obiekt źródła kopii po zmianie
* DANE (Hidden, LockDynamic)**LinkCopyOnChangeTouched** (`Bool`): Wskazuje, że kopia na zmienionym obiekcie źródłowym została zmieniona.
* DANE (LockDynamic)**LinkExecute** (`String`): nazwa funkcji execute, która zostanie uruchomiona dla tego konkretnego obiektu łącza. Domyślnie `'appLinkExecute'`. Ustaw ją na `'None'`, aby ją wyłączyć.
* DANE (Hidden, LockDynamic)**Link Placement** (`Placement`): jest to odsunięcie nałożone na DANE**Placement** obiektu DANE**Linked Object**. Ta właściwość jest normalnie ukryta, ale pojawia się, jeśli DANE**Link Transform** jest ustawiona na `true`; w tym przypadku właściwość DANE**Umiejscowienie** staje się teraz ukryta.
* DANE**Przekształcanie łączy** (`Bool`): domyślnie ustawiona na wartość `FAŁSZ`, w którym to przypadku Łącze zastąpi własne położenie DANE**Powiązaniem Obiektu**. Jeśli właściwość jest ustawiona na `PRAWDA`, Łącze zostanie umieszczone w tej samej pozycji co DANE**Powiązane Obiekty**, a jego położenie będzie względne w stosunku do położenia DANE**Powiązanych Obiektów**. Można to również osiągnąć za pomocą narzędzia ![](/images/Std_LinkMakeRelative.svg). [Utwórz łącze względne](/Std_LinkMakeRelative/pl "Std LinkMakeRelative/pl").
* DANE**Powiązane Obiekty** (`XLink`): wskazuje obiekt źródłowy [App: Łącze](/App_Link/pl "App Link/pl"). Może to być cały obiekt lub jego element *(wierzchołek, krawędź lub ściana)*.
* DANE**Umiejscowienie** (`Placement`): umiejscowienie odnośnika we współrzędnych bezwzględnych.
* DANE (LockDynamic)**PlacementList** (`PlacementList`): Umiejscowienie dla każdego elementu Łącza.
* DANE**Skala** (`Float`): domyślnie przyjmuje wartość `1.0`. Jest to współczynnik równomiernego skalowania w każdym kierunku `X`, `Y` i `Z`. Na przykład, sześcian o wymiarach `2 mm` x `2 mm` x `2 mm`, który jest skalowany przez `2.0`, da w wyniku kształt o wymiarach `4 mm` x `4 mm` x `4 mm`.
* DANE**Lista skali** (`VectorList`): współczynnik skali dla każdego elementu Łącza.
* DANE (Ukryte)**Wektor skali** (`Vector`): współczynnik skali dla każdego elementu `(X, Y, Z)` dla wszystkich elementów Łącza, gdy właściwość DANE**Liczba elementów** ma wartość `1` lub większą. Jeśli DANE**Skala** ma wartość inną niż `1.0`, ta sama wartość zostanie użyta w trzech komponentach.
* DANE**Wyświetl element** (`Bool`): właściwość domyślnie ustawiona na wartość `PRAWDA`, w którym to przypadku [widok drzewa](/Tree_view/pl "Tree view/pl") pokaże poszczególne kopie Łącza, tak długo jak właściwość DANE**Liczba elementów** jest równa `1` lub większa.
* DANE (NoPersist, ReadOnly, Ukryte)**\_ChildCache** (`LinkList`): Do zrobienia.
* DANE (Ukryte, Output)**\_LinkOwner** (`Integer`): Do zrobienia.
* DANE (NoPersist, Ukryte)**\_LinkTouched** (`Bool`): Do zrobienia.

Podstawa

* WIDOK (Ukryte)**Proxy** (`PythonObject`): klasa własna związana z tym obiektem. Istnieje wyłącznie dla wersji środowiska [Python](/Python/pl "Python/pl"). Zobacz sekcję [tworzenie skryptów](#Tworzenie_skrypt.C3.B3w).

Obiekt [App: Łącze](/App_Link/pl "App Link/pl") będzie dodatkowo pokazywał właściwości oryginalnego DANE**Powiązanego obiektu**, więc [edytor właściwości](/Property_editor/pl "Property editor/pl") może mieć grupy właściwości takie jak Dołączenie, Sześcian, Draft, itd.

### Widok

Łącze

* WIDOK**Styl kreślenia** (`Enumeration`): domyślnie `Brak`. Może przyjąć wartości `Pełna`, `Kreskowana`, `Kropkowana`, `Kreska Kropka`. Definiuje styl krawędzi w oknie [widoku 3D](/3D_view/pl "3D view/pl").
* WIDOK**Szerokość linii** (`FloatConstraint`): wartość zmiennoprzecinkowa określająca szerokość w pikselach krawędzi w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Domyślnie `2.0`.
* WIDOK**Zastępuj materiał** (`Bool`): wartość domyślna to `FAŁSZ`. Jeśli zostanie ustawiona na `PRAWDA`, zastąpi materiał DANE**Połączonego Obiektu** i wyświetli kolory zdefiniowane w właściwości WIDOK**Materiał kształtu**.
* WIDOK**Rozmiar punktu** (`FloatConstraint`): podobnie jak WIDOK**Szerokość linii**, definiuje rozmiar wierzchołków.
* WIDOK**Wybieralność** (`Bool`): jeśli przyjmie wartość `PRAWDA`, obiekt może zostać wybrany w oknie [widoku 3D](/3D_view/pl "3D view/pl") za pomocą kursora. W przeciwnym razie obiekt nie może zostać wybrany, dopóki wartość tej opcji nie zostanie ustawiona na `PRAWDA`.

* WIDOK**Materiał kształtu** (`Material`): Ta właściwość zawiera właściwości podrzędne, które opisują wygląd obiektu.
  + WIDOK**Barwa rozproszenia**, domyślnie `(0.4, 1.0, 1.0)`, co jest wyświetlane jako `[102, 255, 255]` na bazie 255,  light blue .
  + WIDOK**Barwa otoczenia**, wartość domyślna to `(0.2, 0.2, 0.2)`, co jest wyświetlane jako `[51, 51, 51]` na bazie 255,  dark gray .
  + WIDOK**Barwa odbicia**, wartość domyślna to `(0.0, 0.0, 0.0)`, co jest wyświetlane jako `[0, 0, 0]` ona bazie 255,  black .
  + WIDOK**Kolor emisji**, wartość domyślna to `(0.0, 0.0, 0.0)`, co jest wyświetlane jako `[0, 0, 0]` na bazie 255,  black .
  + WIDOK**Stopień połysku**, wartość domyślna to `0.2`
  + WIDOK**Przezroczystość**, wartość domyślna to `0.0`.

Podstawa

* WIDOK (Ukryte)**Child View Provider** (`PersistentObject`):
* WIDOK (Ukryte)**Material List** (`MaterialList`): *(tylko do odczytu)* jeśli poszczególne materiały zostały dodane, będą one wymienione tutaj.
* WIDOK (Ukryte)**Override Color List** (`ColorList`): *(tylko do odczytu)* jeśli poszczególne ściany lub krawędzie łącza zostały nadpisane, zostaną one wymienione tutaj.
* WIDOK (Ukryte)**Override Material List** (`BoolList`): *(tylko do odczytu)* jeśli poszczególne materiały Łącza zostały nadpisane, zostaną one wymienione tutaj.

Opcje wyświetlania

* WIDOK**Tryb wyświetlania** (`Enumeration`): przyjmuję wartości `'Link'` lub `'ChildView'`.
* WIDOK**Wyświetl w Drzewie** (`Bool`): zobacz informacje na stronie [Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl").
* WIDOK**Widoczność** (`Bool`): zobacz informacje na stronie [Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl").

Wybieranie

* WIDOK**Na wierzchu po zaznaczeniu** (`Enumeration`): zobacz informacje na stronie [Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl").
* WIDOK**Styl zaznaczenia** (`Enumeration`): zobacz informacje na stronie [Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl").

Dodatkowo wyświetli właściwości widoku oryginalnego DANE**Powiązanego obiektu**.

## Dziedziczenie

Obiekt [App: Łącze](/App_Link/pl "App Link/pl") jest formalnie instancją klasy `App::Link`, której rodzicem jest podstawowy [App: DocumentObject](/App_DocumentObject/pl "App DocumentObject/pl") *(klasa `App::DocumentObject`)*. Jest to obiekt bardzo niskiego poziomu, który może być używany z większością innych obiektów dokumentów.

![](/images/FreeCAD_core_objects.svg)

Uproszczony schemat zależności pomiędzy głównymi obiektami w programie. Obiekt `App::Link` jest głównym składnikiem systemu, nie zależy on od żadnego środowiska pracy, a może być użyty z większością obiektów stworzonych we wszystkich środowiskach pracy.

## Tworzenie skryptów

*Zobacz również:* [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl"), oraz [Obiekty skryptowe](/Scripted_objects/pl "Scripted objects/pl").

Zapoznaj się z artykułem [Część: Cecha](/Part_Feature/pl "Part Feature/pl"), aby uzyskać ogólne informacje.

Obiekt App Łącze jest tworzony za pomocą metody `addObject()` dokumentu. Może on zdefiniować swój DANE**Połączony obiekt** poprzez nadpisanie atrybutu `LinkedObject` lub poprzez użycie metody `setLink`.

```
import FreeCAD as App

doc = App.newDocument()
bod1 = App.ActiveDocument.addObject("Part::Box", "Box")
bod2 = App.ActiveDocument.addObject("Part::Cylinder", "Cylinder")
bod1.Placement.Base = App.Vector(10, 0, 0)
bod2.Placement.Base = App.Vector(0, 10, 0)

obj1 = App.ActiveDocument.addObject("App::Link", "Link")
obj2 = App.ActiveDocument.addObject("App::Link", "Link")

obj1.LinkedObject = bod1
obj2.setLink(bod2)
obj1.Placement.Base = App.Vector(-10, -10, 0)
obj2.Placement.Base = App.Vector(10, -10, 0)
obj1.ViewObject.OverrideMaterial = True
App.ActiveDocument.recompute()

```

Podstawowy `App::Link` nie ma obiektu Proxy, więc nie może być w pełni wykorzystany do tworzenia klas podrzędnych.

Dlatego też, dla klasy podrzędnej [Python](/Python/pl "Python/pl"), powinieneś stworzyć obiekt `App::LinkPython`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::LinkPython", "Link")
obj.Label = "Custom label"

```

## Dodatkowe informacje

Jeśli chcesz pominąć szczegóły dotyczące historii, przejdź do [wprowadzenia do łączy dla użytkowników](https://github.com/realthunder/FreeCAD_assembly3/wiki/Link).

Obiekt [App Łącze](/App_Link/pl "App Link/pl") został wprowadzony po 2 latach rozwoju i prototypowania. Komponent ten został wymyślony i opracowany niemal samodzielnie przez użytkownika *realthunder*. Motywacje i implementacje stojące za tym projektem zostały opisane na jego stronie GitHub, [Link](https://github.com/realthunder/FreeCAD_assembly3/wiki/Link). Aby wdrożyć tę funkcję, wprowadzono kilka podstawowych zmian w programie FreeCAD. Zostały one również obszernie udokumentowane w artykule [Core-Changes](https://github.com/realthunder/FreeCAD_assembly3/wiki/Core-Changes).

Projekt związany z App Łącze rozpoczął się po tym, jak przeprojektowanie środowiska pracy [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") zostało ukończone w wersji 0.17. Historię App Łącze można prześledzić w kilku istotnych wątkach na forum:

* [Dlaczego obiekt może znajdować się tylko w jednym App::Part?](https://forum.freecadweb.org/viewtopic.php?f=19&t=21505) *(marzec 2017)*
* [Wprowadzenie App::Link/XLink](https://forum.freecadweb.org/viewtopic.php?f=10&t=21586) *(marzec 2017)*
* [Linki](https://forum.freecadweb.org/viewtopic.php?f=20&t=22216) *(maj 2017)*
* [Implementacja Realthunder Link: Dyskusja o architekturze](https://forum.freecadweb.org/viewtopic.php?f=20&t=23015) *(czerwiec 2017)*
* [PR #876: Link, etap pierwszy, wybór świadomy kontekstu](https://forum.freecadweb.org/viewtopic.php?f=17&t=23419) *(lipiec 2017)*
* [Preview: Link, etap drugi, podstawy API](https://forum.freecadweb.org/viewtopic.php?f=17&t=23626) *(lipiec 2017)*
* [Podgląd Assembly3](https://forum.freecadweb.org/viewtopic.php?f=20&t=25712) *(grudzień 2017)*
* [Scalanie mojej gałęzi Link](https://forum.freecadweb.org/viewtopic.php?f=10&t=29542) *(czerwiec 2018)*

W końcu nastąpiło zgłoszenie pull request i scalenie:

* [App::Link: the big merge](https://forum.freecadweb.org/viewtopic.php?f=27&t=38621), stary wątek (lipiec 2019), [pull request #2350](https://github.com/FreeCAD/FreeCAD/pull/2350) (the BIG merge), [LinkMerge branch](https://github.com/realthunder/FreeCAD/tree/LinkMerge).
* [App::Link: the big merge](https://forum.freecadweb.org/viewtopic.php?f=8&t=37757), główny wątek (lipiec 2019)
* [Prosty opis ścieżki Link, 019, Link stage, Asm3, merge?](https://forum.freecadweb.org/viewtopic.php?p=329054#p329054) (sierpień 2019)
* [PR#2559: ujawnienie linków i akcji nawigacyjnych](https://forum.freecadweb.org/viewtopic.php?f=17&t=39672), wprowadzenie do funkcji Link w wersji 0.19 (wrzesień 2019).

Inne różne "odnośniki internetowe" dotyczące Łącza obejmują:

* [Obiekty łączone dynamicznie](/Dynamic_linked_object "Dynamic linked object") - Wzorzec z Łączem i złożeniami, który ma na celu zmniejszenie duplikacji logiki związanej ze złożeniem, takiej jak orientacja, pozycjonowanie lub liczba instancji.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkMake/pl&oldid=1560916>"