---
title: Jak zacząć
---
## Przedmowa

FreeCAD jest aplikacją typu 3D [parametric modeling application](/About_FreeCAD/pl "About FreeCAD/pl"). Został stworzony przede wszystkim do projektowania mechanicznego. Może służyć również do wszystkich pokrewnych zastosowań, w których trzeba precyzyjnie modelować obiekty przestrzenne. Dodatkowo zapewnia kontrolę nad historią modelowania.

Freecad jest już rozwijany od 2002 roku i oferuje sporą listę [funkcjonalności](/Feature_list/pl "Feature list/pl"). Niektórych z nich wciąż brakuje, w porównaniu z komercyjnymi rozwiązaniami. Jednak w zupełności spełnia wymagania hobbystów i osób pracujących z mniejszymi projektami. Na [forum](http://forum.freecad.org/index.php) możesz znaleźć naszą szybko rozwijającą się społeczność zaangażowaną w rozwój programu FreeCAD. [Tutaj](https://forum.freecad.org/viewforum.php?f=24) możesz znaleźć wiele wartościowych przykładowych projektów we FreeCAD.

Jak wszystkie wolne projekty, projekt FreeCAD jest uzależniony od swojej społeczności, aby się rozwijać, zdobywać funkcje i stabilizować *(usuwać błędy)*. Więc nie zapominaj o tym podczas używania programu FreeCAD. Jeśli ci się to podoba, możesz dokonać [darowizny](/Donate/pl "Donate/pl") i [wspomóc FreeCAD](/Help_FreeCAD/pl "Help FreeCAD/pl") również na inne sposoby, takie jak tworzenie dokumentacji i tłumaczeń.

Zobacz również:

* [Migracja z Fusion360 do FreeCAD](/Migrating_to_FreeCAD_from_Fusion360/pl "Migrating to FreeCAD from Fusion360/pl")
* [Które środowisko pracy wybrać?](/Which_workbench_should_I_choose "Which workbench should I choose")
* [Poradniki](/Tutorials/pl "Tutorials/pl")
* [Wideo poradniki](/Video_tutorials/pl "Video tutorials/pl")

## Instalacja

Przede wszystkim pobierz i zainstaluj FreeCAD. Informacje na temat aktualnych wersji i aktualizacji oraz instrukcje instalacji dla danego systemu operacyjnego *([Linux](/Installing_on_Linux/pl "Installing on Linux/pl"), [Mac OS](/Installing_on_Mac/pl "Installing on Mac/pl") lub [Windows](/Installing_on_Windows/pl "Installing on Windows/pl"))*.FreeCAD jest dostępny w menedżerach pakietów wielu dystrybucji Linuksa. Ponieważ FreeCAD jest oprogramowaniem typu open-source, można również pobrać kod źródłowy i [skompilować](/Compiling/pl "Compiling/pl") go samodzielnie.

## Poznawaj interfejs użytkownika

![](/images/FreeCAD_interface_base_divisions.svg)

Standardowy interfejs FreeCAD.

*zobacz szczegółową prezentację [Interface](/Interface/pl "Interface/pl").*

:   1. Obszar widoku [głównego](/Main_view_area "Main view area"), który może zawierać różne okna z zakładkami, głównie [widok 3D](/3D_view "3D view").
:   2. [Widok 3D](/3D_view/pl "3D view/pl"), pokazujący obiekty geometryczne w dokumencie.
:   3. [Widok drzewa](/Tree_view/pl "Tree view/pl") jest *(częścią [widoku złożonego](/Combo_view/pl "Combo view/pl"))*, pokazuje hierarchię i historię budowy obiektów w dokumencie. Może również wyświetlać [panel zadań](/Task_panel/pl "Task panel/pl") dla aktywnych poleceń.
:   4. [Edytor właściwości](/Property_editor/pl "Property editor/pl") jest *(częścią [widoku złożonego](/Combo_view/pl "Combo view/pl")), który pozwala na przeglądanie i modyfikowanie właściwości wybranych obiektów.*
:   5. Widok [wyboru](/Selection_view/pl "Selection view/pl"), który wskazuje wybrane obiekty lub elementy składowe obiektów *(wierzchołki, krawędzie, powierzchnie)*.
:   6. Okno [widok raportu](/Report_view/pl "Report view/pl") *(lub okno wyjściowe)*, w którym wyświetlane są komunikaty, ostrzeżenia i błędy.
:   7. [Konsola Python](/Python_console/pl "Python console/pl"), gdzie są wyświetlane wszystkie wykonywane polecenia i gdzie można wprowadzić kod [Python](/Python/pl "Python/pl").
:   8. [Pasek statusu](/Status_bar "Status bar"), to szczególne miejsce gdzie pojawiają się niektóre komunikaty i podpowiedzi.
:   9. Obszar paska narzędzi, gdzie dokowane są paski narzędzi.
:   10. Okienko umożliwiające wybór [Środowisk pracy](/Std_Workbench/pl "Std Workbench/pl"), dla wykonania zamierzonych prac stosownych dla kązdego ze [Środowisk pracy](/Workbenches/pl "Workbenches/pl").
:   11. [Standardowe menu](/Standard_Menu/pl "Standard Menu/pl"), które zawiera zbiór podstawowych funkcji programu.

Główna koncepcja interfejsu FreeCAD opiera się na tym, że jest on podzielony na [środowiska pracy](/Workbenches/pl "Workbenches/pl"). Każde z nich jest zbiorem narzędzi dostosowanych do realizacji konkretnych zadań, takich jak praca z [siatkami](/Mesh_Workbench/pl "Mesh Workbench/pl"), lub rysowanie [obiektów 2D](/Draft_Workbench/pl "Draft Workbench/pl"), lub [związanymi szkicami](/Sketcher_Workbench/pl "Sketcher Workbench/pl"). Możesz przełączyć bieżące środowisko pracy za pomocą [okna wyboru](/Std_Workbench/pl "Std Workbench/pl"). Możesz [dostosowywać ustawienia](/Interface_Customization/pl "Interface Customization/pl") narzędzi zawartych w każdym środowisku pracy, dodawać narzędzia z innych środowisk. Możliwe jest również dodanie narzędzi utworzonych samodzielnie, które nazywamy [makrodefinicjami](/Macros/pl "Macros/pl") *(w skrócie makro)*. Najczęściej stosowanymi narzędziami bazowymi są środowiska [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") i [Część](/Part_Workbench/pl "Part Workbench/pl").

Kiedy uruchamiasz FreeCAD po raz pierwszy, zobaczysz stronę startową. Oto jak to wygląda dla wersji **0.19**:

![](/images/Start_center_0.19_screenshot.png)

Strona startowa pozwala na szybkie przejście do jednego z najchętniej używanych Środowisk pracy, otwarcie jednego z ostatnich plików lub zobaczenie najnowszych wiadomości ze świata FreeCAD. Możesz zmienić domyślne środowisko pracy w [Edytorze preferencji](/Preferences_Editor/pl "Preferences Editor/pl").

### Nawigacja w przestrzeni 3D

FreeCAD udostępnia kilka różnych [trybów nawigacji](/Mouse_navigation/pl "Mouse navigation/pl"), które zmieniają sposób używania myszy do interakcji z obiektami w widoku 3D i samego widoku. Jedna z nich została stworzona specjalnie dla [touchpad](/Mouse_navigation/pl#Touchpad "Mouse navigation/pl"), gdzie środkowy przycisk myszy nie jest używany. Domyślnym trybem nawigacji jest [CAD](/Mouse_navigation#CAD "Mouse navigation"). Możesz szybko zmienić aktualny tryb nawigacji za pomocą przycisku ![](/images/NavigationCAD_dark.svg) na [Pasku statusu](/Status_bar/pl "Status bar/pl") lub klikając prawym przyciskiem myszy pusty obszar okna [widoku 3D](/3D_view/pl "3D view/pl").

W menu Widok, na pasku narzędzi Widok oraz za pomocą skrótów klawiaturowych (1, 2 itp...) dostępnych jest również kilka ustawień widoku *(widok z góry, widok z przodu itp.)*. Klikając obiekt prawym przyciskiem myszki lub pusty obszar widoku 3D, masz szybki dostęp do niektórych typowych operacji, takich jak ustawianie konkretnego widoku lub wyszukiwanie obiektu w widoku drzewa.

## FreeCAD pierwsze kroki

FreeCAD został zaprojektowany do tworzenia precyzyjnych modeli 3D, ścisłą kontrolę nad tymi modelami *(możliwość cofnięcia się w historii modelowania i zmiany parametrów)*, a w końcu na budowanie tych modeli *(poprzez wydruk w technologii 3D i obróbkę numeryczną CNC lub nawet budowę obiektu budowlanego)*.   
W związku z tym bardzo różni się on od innych aplikacji 3D stworzonych do innych celów, takich jak film animowany czy gry. Jego nauka może być bardzo trudna, zwłaszcza jeśli jest to Twój pierwszy kontakt z modelowaniem 3D. Jeśli w którymś momencie staniesz się zaskoczony, nie zapominaj, że przyjazna społeczność użytkowników na forum [FreeCAD forum](http://forum.freecad.org/index.php) może być w stanie wyciągnąć cię z tarapatów w mgnieniu oka.

Środowisko pracy, z którego zaczniesz korzystać w FreeCAD, zależy od rodzaju pracy, którą musisz wykonać: Jeśli zamierzasz pracować na modelach mechanicznych lub ogólnie na małych obiektach, prawdopodobnie będziesz chciał wypróbować środowisko [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"). Jeśli pracujesz w trybie 2D, przejdź do środowiska [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") lub [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"), jeśli potrzebne Ci są określone wymagania. Jeśli chcesz pracować z modelami BIM, uruchom środowisko [BIM](/BIM_Workbench/pl "BIM Workbench/pl").
A jeśli pochodzisz ze świata OpenSCAD, wypróbuj Środowisko pracy [OpenSCAD](/OpenSCAD_Workbench/pl "OpenSCAD Workbench/pl"). Dostępnych jest również wiele [zewnętrznych środowisk](/External_workbenches/pl "External workbenches/pl") opracowanych przez społeczność.

Możesz przełączać Środowisko pracy w dowolnym momencie, a także [dostosować ustawienia](/Interface_Customization/pl "Interface Customization/pl"), aby dodać narzędzia z innych Środowisk pracy.

## Pracujemy w środowiskach Projekt Części i Szkicownik

Środowisko pracy [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") służy do budowania złożonych obiektów, począwszy od prostych kształtów i dodawania lub usuwania elementów *(zwanych " cechami")*, aż do osiągnięcia ostatecznego wyglądu projektowanego detalu. Wszystkie funkcje zastosowane w procesie modelowania są przechowywane w oddzielnym widoku zwanym [widokiem drzewa](/Document_structure/pl "Document structure/pl"), który zawiera również inne obiekty w dokumencie. Obiekt środowiska Projekt Części może być traktowany jako kolejna operacja, z których każda odnosi się do wyniku poprzedniej, tworząc jeden duży łańcuch. W widoku drzewa widzisz swój obiekt końcowy, ale możesz go rozwinąć i przeglądać wszystkie poprzednie stany oraz zmienić dowolny z ich parametrów, które automatycznie aktualizują obiekt końcowy.

Projekt Części mocno bazuje na innym środowisku pracy, [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl"). Szkicownik umożliwia rysowanie kształtów 2D, które są definiowane przez zastosowanie ograniczeń dla kształtu płaskiego. Na przykład, możesz narysować prostokąt i dodać wymiar boku, stosując ograniczenie długości jednego z boków. Nie można już zmieniać rozmiaru tego boku *(chyba że ograniczenie zostanie zmienione)*.

Te kształty 2D wykonane za pomocą szkicownika są często używane w środowisku pracy PartDesign, na przykład do tworzenia objętości 3D. Używane są też do rysowania obszarów na ścianach obiektów, które następnie zostaną wydrążone z ich głównej objętości. Jest to typowy schemat pracy PartDesign:

1. Stwórz nowy szkic.
2. Narysuj zamknięty kształt *(upewnij się, że wszystkie punkty wierzchołków są połączone)*.
3. Zakończ szkicowanie.
4. Rozszerz szkicu w bryłę 3D przy użyciu narzędzia wyciągnięcia *(pad)*.
5. Wybierz jedną ścianę bryły.
6. Utwórz drugi szkic *(tym razem zostanie on narysowany na wybranej powierzchni)*.
7. Narysuj zamknięty kształt.
8. Zamknij szkic.
9. Stwórz kieszeń z drugiego szkicu, na pierwszym obiekcie.

Oto przykład efektu tego ćwiczenia:

![](/images/Partdesign_example.jpg)

W każdej chwili możesz wybrać oryginalne szkice i zmodyfikować je lub zmienić parametry wytłaczania operacji pad lub pocket, co spowoduje że obiekt końcowy zostanie poddany aktualizacji.

## Praca z Draft i BIM

Środowiska pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") i [BIM](/BIM_Workbench/pl "BIM Workbench/pl") zachowują się nieco inaczej niż pozostałe omówione powyżej. Chociaż przestrzegają tych samych zasad, które są wspólne dla wszystkich we FreeCAD. Krótko mówiąc, podczas gdy Szkicownik i Projekt Części są stworzone przede wszystkim do projektowania pojedynczych elementów, Draft i BIM są stworzone, aby ułatwić pracę z kilkoma prostszymi obiektami.

Środowisko pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") oferuje narzędzia 2D nieco podobne do tych, które można znaleźć w tradycyjnych aplikacjach 2D CAD, takich jak [AutoCAD](https://en.wikipedia.org/wiki/AutoCAD). Jednakże, ponieważ szkic 2D jest daleki od celu twórców programu FreeCAD, nie oczekuj, że znajdziesz tam pełen wachlarz narzędzi, które oferują te dedykowane aplikacje. Większość narzędzi Draft działa nie tylko w płaszczyźnie 2D, ale także w pełnej przestrzeni 3D i korzysta ze specjalnych systemów pomocniczych, takich jak [płaszczyzny robocze](/Draft_SelectPlane/pl "Draft SelectPlane/pl") i [przyciąganie](/Draft_Snap/pl "Draft Snap/pl").

Środowisko pracy [BIM](/BIM_Workbench/pl "BIM Workbench/pl") dodaje narzędzia [BIM](http://en.wikipedia.org/wiki/Building_Information_Modeling) do FreeCAD, pozwalając na tworzenie modeli architektonicznych zawierających obiekty parametryczne. Środowisko pracy BIM opiera się w dużym stopniu na innych modułach, takich jak Rysunek Roboczy i Szkicownik. Wszystkie narzędzia do tworzenia szkiców są również obecne w środowisku pracy BIM, większość narzędzi BIM korzysta z systemów pomocniczych środowiska Rysunek Roboczy.

Typowy tok pracy z BIM i Draft może wyglądać następująco:

1. Narysuj kilka linijek przy pomocy narzędzia '*Linia* środowiska Rysunek Roboczy.
2. Wybierz każdą linię i naciśnij narzędzie do tworzenia ścian *(Ściana)* na każdej z nich.
3. Dołącz poszczególne linie do ściany wybierając je i naciskając narzędzie **BIM Add**.
4. Utwórz obiekt podłogi i w widoku drzewa przeciągnij ściany do obiektu podłogi.
5. Utwórz obiekt budynku i w widoku drzewa przeciągnij podłogę *(która teraz zawiera ściany)* do obiektu budynku.
6. Dodaj wymiary, najpierw ustawiając płaszczyznę roboczą jeśli to konieczne, a następnie użyj narzędzia **Draft Dimension**, aby zdefiniować głębokość osadzenia.

Przykład efektu tego ćwiczenia:

![](/images/Arch_workflow_example.jpg)

Więcej informacji znajdziesz na stronie [Poradniki](/Tutorials/pl "Tutorials/pl").

## Dodatki

Każdy użytkownik może opracować własne nowe funkcje dla FreeCAD i udostępnić je społeczności FreeCAD jako [Dodatki](/Addon/pl "Addon/pl").

Istnieją trzy rodzaje dodatków:

* [Makrodefinicje](/Macros/pl "Macros/pl"): krótki fragment kodu w [Pythonie](/Python/pl "Python/pl"), który dostarcza nowe narzędzie lub funkcjonalność w pojedynczym pliku z rozszerzeniem `.FCMacro`.
* [Zestawy narzędzi](/External_workbenches/pl "External workbenches/pl"): zbiory plików Pythona dostarczające powiązane [polecenia GUI](/Gui_Command/pl "Gui Command/pl") *(narzędzia)* skupione wokół określonego tematu.
* [Pakiety preferencji](/Preference_Packs/pl "Preference Packs/pl"): dystrybuowane zbiory preferencji użytkownika.

## Tworzenie skryptów

I na końcu, jedną z najpotężniejszych cech FreeCAD jest środowisko [skryptowe](/Power_users_hub/pl#Tworzenie_skryptów_dla_FreeCAD "Power users hub/pl"). Ze zintegrowanej konsoli Pythona *(lub dowolnego innego zewnętrznego skryptu Pythona)*, możesz uzyskać dostęp do prawie każdej części FreeCAD. Możesz tworzyć lub modyfikować geometrię, modyfikować reprezentację obiektów w scenie 3D lub dostęp i modyfikować interfejs FreeCAD. Skrypty Pythona mogą być również używane w [makrodefinicjach](/Macros/pl "Macros/pl"), które zapewniają łatwą metodę tworzenia własnych poleceń.

## Co nowego

* Szczegółową listę funkcji można znaleźć w [uwagach do wydania](/Feature_list/pl#Uwagach_do_wydania "Feature list/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Getting_started/pl&oldid=1480525>"