---
title: Szkicownik Ustawienia
---
## Wprowadzenie

Preferencje środowiska pracy ![](/images/Workbench_Sketcher.svg) [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") można znaleźć w [Edytorze Preferencji](/Preferences_Editor/pl "Preferences Editor/pl"). W menu wybierz **Edycja → Preferencje...** a następnie **![](/images/Workbench_Sketcher.svg) Szkicownik**. Ta grupa preferencji jest dostępna tylko gdy Szkicownik został załadowany podczas bieżącej sesji programu FreeCAD.

Znajdują się tam cztery zakładki: [Ogólne](#Ogólne), [Siatka](#Siatka)[Wyświetlanie](#Wyświetlanie), [Kolory](#Kolory) oraz [Wygląd zewnętrzny](#Wygląd_zewnętrzny).

Niektóre zaawansowane preferencje mogą być zmienione tylko w [Edytorze parametrów](/Std_DlgParameter/pl "Std DlgParameter/pl"). Zobacz stronę [Dostrajanie parametrów](/Fine-tuning/pl#środowisko_pracy_Szkicownik "Fine-tuning/pl").

Ta strona została zaktualizowana do wersji FreeCAD 1.0.

W wersja 0.21 i poniżej strona [Wygląd zewnętrzny](#Wygląd_zewnętrzny) jest nazwana "Kolory".

## Ogólne

![](/images/Preferences_Sketcher_Page_General.png)

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Pokaż sekcję Zaawansowane sterowanie solverem na pasku zadań** | Jeśli opcja ta jest zaznaczona, [okno dialogowe](/Sketcher_Dialog/pl "Sketcher Dialog/pl") szkicownika będzie zawierało dodatkową sekcję **Zaawansowana kontrola solvera**, umożliwiającą dostosowanie ustawień solvera. |
| **Popraw rozwiązywanie podczas przeciągania** | Jeżeli opcja ta jest zaznaczona, to przy przeciąganiu elementów szkicu będzie zastosowany specjalny algorytm rozwiązywania. Zapobiega to odwracaniu się szkicu podczas przeciągania. Jest to usprawnienie w większości przypadków, jednak w przypadku złożonych szkiców opcja ta może wydłużyć czas rozwiązywania szkicu. |
| **Usuń nadmiarowe automatycznie** | Jeżeli opcja ta jest zaznaczona, podczas rysowania szkicu wiązania nadmiarowe będą kasowane. |
| **Esc - umożliwia wyjście z trybu edycji szkicu** | Jeśli opcja ta jest zaznaczona, naciśnięcie klawisza Esc spowoduje wyjście z trybu edycji szkicu. Opcja wyłączenia tej funkcji może być przydatna dla użytkowników, którzy są przyzwyczajeni do naciskania klawisza Esc podczas pracy z innymi programami CAD, ale niekoniecznie chcieliby wychodzić z trybu edycji szkicu. |
| **Wyłącz cieniowanie w trybie edycji** [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") | Jeśli zaznaczone, widok cieniowany jest wyłączany przy wchodzeniu do trybu edycji szkicu. |
| **Powiadamiaj o automatycznych zamianach wiązań** | Jeżeli opcja ta jest zaznaczona, zostaniesz poinformowany przez okno dialogowe o zamianach wiązań. Na przykład, jeżeli punkty końcowe dwóch łuków są połączone za pomocą [wiązania zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl") i ponownie połączymy łuki za pomocą wiązania styczności, wiązanie zbieżności zostanie zastąpione przez [wiązanie styczności](/Sketcher_ConstrainTangent/pl "Sketcher ConstrainTangent/pl") i pojawi się okno dialogowe informujące o tym. |
| **Połącz wiązania zbieżności i punkt na obiekcie** [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") | Jeśli opcja ta jest zaznaczona, [Narzędzie wiązania zbieżności punktów](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl") i [Narzędzie wiązania punktu na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl") są scalane w [pojedyncze narzędzie](/Sketcher_ConstrainCoincidentUnified/pl "Sketcher ConstrainCoincidentUnified/pl"). *Po zmianie tych ustawień należy ponownie uruchomić program FreeCAD.* |
| **Automatyczne narzędzie poziomo / pionowo** [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") | Jeśli opcja ta jest zaznaczona, narzędzie [Wiązanie poziomo / pionowo](/Sketcher_ConstrainHorVer/pl "Sketcher ConstrainHorVer/pl") jest dodawane do paska narzędzi *(jest zawsze dostępne w menu i poprzez skrót)*, a narzędzia [Zwiąż w poziomie](/Sketcher_ConstrainHorizontal/pl "Sketcher ConstrainHorizontal/pl") i [Zwiąż w pionie](/Sketcher_ConstrainVertical/pl "Sketcher ConstrainVertical/pl") są zgrupowane pod nim w menu rozwijanym. *Po zmianie tych ustawień należy ponownie uruchomić program FreeCAD.* |
| **Always add external geometry as reference** [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl") | Jeśli zaznaczone, [geometria zewnętrzna](/Sketcher_External/pl "Sketcher External/pl") jest zawsze dodawana jako geometria odniesienia niezależnie od aktualnego [trybu konstrukcyjnego](/Sketcher_ToggleConstruction/pl "Sketcher ToggleConstruction/pl"). |
| **Wiązania wymiarów** [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") | Określa narzędzia wiązań wymiarowych dla paska narzędzi *(wszystkie narzędzia wymiarowe są zawsze dostępne w menu i za pośrednictwem ich skrótów)*. Dostępne opcje to:  * **Pojedyncze narzędzie**: Połączone [Narzędzie wymiarów](/Sketcher_Dimension/pl "Sketcher Dimension/pl") dla wszystkich więzów wymiarowych. Oddzielne narzędzia są zgrupowane poniżej w menu rozwijanym. * **Narzędzia oddzielnie**: Tylko oddzielne narzędzia. * **Oba**: Zarówno połączone narzędzie [Wymiarów](/Sketcher_Dimension/pl "Sketcher Dimension/pl"), jak i oddzielne narzędzia.   *Po zmianie tych ustawień należy ponownie uruchomić program FreeCAD.* |
| **Narzędzie wymiarowania w trybie średnicy / promienia** [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") | Określa sposób, w jaki połączone narzędzie [Wymiarów](/Sketcher_Dimension/pl "Sketcher Dimension/pl") obsługuje okręgi i łuki. Dostępne opcje to:  * **Automatycznie**: Najpierw zastosuj wymiar promienia do łuków i wymiar średnicy do okręgów. Przed wybraniem punktu, który będzie pozycjonował wymiar, możliwe jest przełączenie za pomocą klawisza M. * **Średnica**: Zawsze najpierw stosuj wymiar średnicy. Jak wyżej. * **Promień**: Zawsze jako pierwszy stosowany jest wymiar promienia. Jak wyżej. |
| **Parametry wyświetlane w widoku** [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") | Określa tryb widoczności dla Parametrów na widoku. Dostępne opcje to:  * **Brak**: Parametry widoku są całkowicie wyłączone. * **Tylko wymiarowe**: Zarówno pozycyjne, jak i wymiarowe parametry widoku są włączone. Są one najbardziej użyteczne. Na przykład promień okręgu. * **Położenie i wymiary**: Włączone są zarówno wymiarowe, jak i pozycyjne parametry widoku. Parametry położenia to pozycja kursora. Na przykład dla środka okręgu. |

## Siatka

![](/images/Preferences_Sketcher_Page_Grid.png)

Na tej stronie można określić następujące parametry:

| Name | Description |
| --- | --- |
| **Siatka** | Jeśli opcja jest zaznaczona, siatka będzie pokazywana, gdy szkic jest w trybie edycji. Używana dla nowych szkiców. Jest przechowywana we właściwości WIDOK**Wyświetl siatkę** szkiców. |
| **Odstęp linii siatki — automatycznie** | Jeśli opcja jest zaznaczona, odstępy między siatkami są automatycznie dostosowywane do wymiarów widoku. Używana dla nowych szkiców. Jest przechowywana we właściwości WIDOK**Siatka automatycznie** szkiców. |
| **Odstęp siatki** | Odległość pomiędzy dwoma kolejnymi liniami siatki. Używana jako wartość podstawowa, jeśli włączona jest opcja **Odstęp linii siatki — automatycznie**. Używana dla nowych szkiców. Jest zapisywana we właściwości WIDOK**Rozmiar siatki** szkiców. |
| **Próg rozmiaru piksela** | Próg odstępu między siatkami w pikselach. Używane tylko wtedy, gdy włączona jest opcja **Odstęp linii siatki — automatycznie**. Jeśli odstęp na ekranie jest mniejszy niż ta wartość, fizyczny odstęp siatki jest mnożony przez wartość **Co N linii będzie linia główna. Ustaw wartość na 1, aby wyłączyć linie główne.**. Jeśli odstęp na ekranie jest większy niż wartość progowa razy wartość **każdy**, fizyczny odstęp siatki jest dzielony przez wartość **każdy**. Jeśli wartość **każdy** jest ustawiona na 1, w tych obliczeniach używane jest 10. |
| **Mniejsze linie siatki** | Dla mniejszych linii siatki można określić:  * **Wzór linii** * **Szerokość linii** * **Kolor linii** |
| **Główne linie siatki** | Dla głównych linii siatki można określić:  * **Główne linie siatki co**: Liczba kwadratów pomiędzy głównymi liniami siatki. Ustawienie na 1 powoduje wyłączenie głównych linii siatki. * **Wzór linii** * **Szerokość linii** * **Kolor linii** |

## Wyświetlanie

![](/images/Preferences_Sketcher_Page_Display.png)

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Rozmiar czcionki** | Rozmiar czcionki używanej w etykietach i wiązaniach w szkicu. |
| **Wyświetl współczynnik skali** [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl") | Widok 3D jest skalowany w oparciu o ten współczynnik. |
| **Segmenty na geometrię** | Krzywe są aproksymowane przez segmenty wielokątów w celu wizualizacji. Segmenty na geometrię określają liczbę wielokątów do aproksymacji. Dolną granicą jest 50 segmentów. Wyższe wartości poprawiają wizualizację, ale mogą prowadzić do wydłużenia czasu obliczeń, szczególnie dla [B-splajn](/Sketcher_CreateBSpline/pl "Sketcher CreateBSpline/pl"). |
| **Spytaj o wartość po stworzeniu wiązania wymiaru** | Jeżeli pole zostanie zaznaczone, pojawi się okno dialogowe do wprowadzenia wartości dla nowych wiązań wymiarowych. |
| **Tworzenie geometrii "Tryb kontynuacji"** | Jeżeli to pole jest zaznaczone, bieżące narzędzie pozostanie aktywne po utworzeniu linii. Możesz opuścić narzędzie w każdej chwili klikając prawym przyciskiem myszki w oknie szkicu. |
| **Tworzenie wiązań "Tryb kontynuacji"** | Jeżeli to pole jest zaznaczone, aktualne narzędzie do tworzenia wiązań pozostanie aktywne po ukończeniu wiązań. Narzędzie można wyłączyć w dowolnym momencie, klikając prawym przyciskiem myszy w oknie szkicu. |
| **Ukryj jednostki długości podstawowej dla obsługiwanych systemów jednostek** | jednostka długości z wybranego [systemu jednostek](/Preferences_Editor/pl#Jednostki "Preferences Editor/pl") jest używana, ale nie jest wyświetlana w wiązaniach szkicu. Tylko dla obsługiwanych systemów jednostek. |
| **Pokaż współrzędne obok kursora myszki podczas edycji** [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl") | Jeśli opcja jest zaznaczona, podczas edycji szkicu obok kursora wyświetlane są jego współrzędne. |
| **Użyj ustawień systemowych dla wartości dziesiętnych dla współrzędnych kursora** [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl") | Jeżeli opcja jest zaznaczona, współrzędne kursora będą używać systemowego ustawienia miejsc dziesiętnych zamiast formy skróconej. |
| **Pokaż nazwę wiązania wymiaru w formacie** [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl") | Jeżeli opcja jest zaznaczona, to nazwy więzów wymiarowych (jeżeli są dostępne) są wyświetlane w podanym formacie:  * **%N**: Nazwa parametru. * **%V**: Wartość wymiaru. |
| **Ukryj wszystkie obiekty zależne od szkicu** | Jeśli to pole zostanie zaznaczone, wszystkie elementy zależne od szkicu zostaną ukryte po otwarciu szkicu. Zauważ, że efekt tej opcji może nie wystąpić w przypadku użycia opcji **Pokaż obiekty użyte w geometrii zewnętrznej** i/lub **Pokaż obiekty, do których szkic jest dołączony**. |
| **Pokaż obiekty użyte w geometrii zewnętrznej** | Jeśli to pole zostanie zaznaczone, zostaną uwidocznione wszystkie ukryte obiekty użyte dla geometrii zewnętrznej. |
| **Pokaż obiekty, do których szkic jest dołączony** | Jeżeli to pole zostanie zaznaczone, ukryte obiekty, do których jest dołączony szkic, będą wyświetlane po otwarciu szkicu. |
| **Przywróć położenie widoku po zakończeniu edycji** | Jeżeli to pole zostanie zaznaczone, wówczas ustawienie sceny zostanie cofnięte do miejsca, w którym znajdowało się przed otwarciem szkicu. |
| **Otwórz szkic w trybie widoku przekroju** [dostępne w wersji 0.20](/Release_notes_0.20/pl "Release notes 0.20/pl") | Jeśli opcja ta jest zaznaczona, podczas edycji szkicu będzie on domyślnie otwierany z aktywnym widokiem przekroju. |
| **Zastosuj do istniejących szkiców** | Jeśli zostanie naciśnięty, ustawienia **Automatyzacja widoczności wyświetlania** zostaną zastosowane również do istniejących szkiców. W przeciwnym razie będą one stosowane tylko do nowych szkiców. |

## Wygląd zewnętrzny

![](/images/Preferences_Sketcher_Page_Appearance.png)

O ile nie określono inaczej, preferencje te są używane tylko wtedy, gdy szkic jest w trybie edycji.

Na tej stronie można ustawić następujące opcje.

| Nzwa | Opis |
| --- | --- |
| **Tworzenie linii** | Kolor używany dla elementów szkicu podczas ich tworzenia. |
| **Tekst współrzędnych** | Kolor używany dla współrzędnych wyświetlanych podczas tworzenia elementów szkicu. |
| **Krzyżyk kursora** | Kolor używany dla krzyżyka kursora wyświetlanego podczas tworzenia elementów szkicu. |
| **Geometrie** | Kolory używane dla związanej i niezwiązanej geometrii normalnej. Można również określić wzór linii i szerokość linii. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") |
| **Geometria konstrukcyjna** | Kolory używane dla związanej i niezwiązanej [geometrii konstrukcji](/Sketcher_ToggleConstruction/pl "Sketcher ToggleConstruction/pl"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Można również określić wzór linii i szerokość linii. |
| **Wewnętrzna krawędź wyrównania** | Kolory używane dla związanych i niezwiązanych wewnętrznych krawędzi wyrównania. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Można również określić wzór linii i szerokość linii. |
| **Geometria zewnętrzna** | Kolor używany dla [geometrii zewnętrznej](/Sketcher_External/pl "Sketcher External/pl"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Można również określić wzór linii i szerokość linii. |
| **W pełni związany szkic** | Kolor używany dla w pełni związanego szkicu. |
| **Nieprawidłowy szkic** | Kolor używany dla nieprawidłowego szkicu. |
| **Symbole dla wiązań** | Kolor używany dla [wiązań kontrolujących geometrię](/Sketcher_ToggleDrivingConstraint/pl "Sketcher ToggleDrivingConstraint/pl"). |
| **Wiązania wymiaru** | Kolor używany dla [wiązań kontrolujących wymiary](/Sketcher_Dimension/pl "Sketcher Dimension/pl"). |
| **Wiązania odniesienia** | Kolor używany dla [wiązań odniesienia kontrolujących wymiary](/Sketcher_ToggleDrivingConstraint/pl "Sketcher ToggleDrivingConstraint/pl"). |
| **Wiązania zależne od wyrażeń** | Kolor używany dla wiązań wymiarowych zależnych od [Wyrażeń](/Expressions/pl "Expressions/pl"). |
| **Wyłączone wiązania** | Kolor używany dla [dezaktywowanych wiązań](/Sketcher_ToggleActiveConstraint/pl "Sketcher ToggleActiveConstraint/pl"). |
| **Kolory poza szkicem: wierzchołki** | Kolor używany dla [wierzchołków](/Glossary#Vertex "Glossary") *(punktów)*, gdy szkic nie jest w trybie edycji. |
| **Kolory poza szkicem: krawędzie** | Kolor używany dla [krawędzi](/Glossary#Edge "Glossary"), gdy nie jest w trybie edycji. |

Kolory zaznaczeń, gdy szkic jest w trybie edycji, są sterowane przez globalne ustawienia **Włącz wskazanie obiektu** i **Włacz wybór**, patrz [Edytor ustawień](/Preferences_Editor/pl#Zaznaczenie "Preferences Editor/pl").

Rozmiar wierzchołków w trybie edycji jest kontrolowany przez [ustawienie](/Preferences_Editor/pl#Widok_3D "Preferences Editor/pl") **Rozmiar znacznika punktu**.

## Uwagi

Jest jeszcze jedna preferencja, która ma wpływ na szkice. Jeżeli preferencja **Przezroczystość obiektów** na zakładce [Wyświetlanie → Widok 3D](/Preferences_Editor/pl#Widok_3D "Preferences Editor/pl") jest ustawiona na `Przebieg od tyłu`,
groty strzałek na jednym końcu wymiarów szkicu są w niektórych systemach ukryte. Przy oglądaniu od tyłu wartość wymiaru może być wtedy również ukryta. Problem dotyczy wersji od 0.19 do 0.21 *(z wyjątkiem gałęzi Link)*. W wersjach 0.19 i 0.20 efekt występuje tylko wtedy, gdy **Pokaż siatkę** jest wyłączone w sekcji [Edycja kontrolek](/Sketcher_Dialog/pl#Edycja_kontrolek "Sketcher Dialog/pl") w [Panelu zadań](/Task_panel/pl "Task panel/pl"), jak pokazano poniżej.

Zobacz ten [temat na forum](https://forum.freecad.org/viewtopic.php?t=70975&start=10).

![](/images/Sketcher-Preferences-Note-Arrowhead-01.png) ![](/images/Sketcher-Preferences-Note-Arrowhead-02.png)

Widok z przodu, włączona i wyłączona siatka

![](/images/Sketcher-Preferences-Note-Arrowhead-03.png) ![](/images/Sketcher-Preferences-Note-Arrowhead-04.png)

Widok z tyłu, siatka włączona i siatka wyłączona ukrywając groty strzałek na przeciwległym końcu, jak również wartość wymiaru.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Preferences/pl&oldid=1539879>"