---
title: Podręcznik Interfejs programu FreeCAD
---

FreeCAD jest oparty na [Qt](https://pl.wikipedia.org/wiki/Qt) i charakteryzuje się prostym i przejrzystym interfejsem. Bardziej doświadczeni użytkownicy CAD będą w stanie dostrzec podobieństwa z innymi programami, podczas gdy nowi użytkownicy znajdą nawigację intuicyjną i łatwą do odkrywania różnych opcji, jakie oferuje FreeCAD. Oto domyślny wygląd programu FreeCAD:

![](/images/FreeCAD_022_Start.png)

Strona Startowa pełni rolę ekranu powitalnego, zaprojektowanego w celu ułatwienia szybkiego i łatwego dostępu do głównych obszarów FreeCAD, które użytkownik może chcieć eksplorować. Dzięki niej użytkownicy mogą bez trudu tworzyć nowe części, otwierać niedawno używane pliki i rozpocząć rysowanie 2D. Dodatkowo zawiera skróty do pomocnych zasobów, takich jak samouczki i fora użytkowników, które są niezwykle cenne zarówno dla początkujących, jak i bardziej doświadczonych użytkowników szukających wskazówek lub porad. Użytkownicy mogą łatwo dostosować wygląd Strony Startowej zgodnie z własnymi preferencjami.

W miarę jak stajesz się bardziej biegły w korzystaniu z programu FreeCAD, możesz dostosować ustawienia w preferencjach. Dzięki temu FreeCAD może otworzyć się bezpośrednio w jednym z środowisk pracy z gotowym nowym dokumentem. Alternatywnie, możesz po prostu zamknąć kartę Strony Startowej i ręcznie utworzyć nowy dokument.

![](/images/FreeCAD_022_PartDesign.png)

### Środowiska pracy

FreeCAD wykorzystuje system zwany "środowiskami pracy", podobny do koncepcji używanych w zaawansowanym oprogramowaniu projektowym, takim jak Revit czy CATIA. Idea środowiska pracy jest analogiczna do wyspecjalizowanych stacji w laboratorium naukowym, gdzie różne stanowiska są wyposażone w odpowiednie narzędzia do różnych rodzajów eksperymentów. W laboratorium może być jedno stanowisko dedykowane chemii, drugie biologii, a trzecie fizyce, z odpowiednimi narzędziami potrzebnymi w tych dziedzinach.

W kontekście FreeCAD każde środowisko pracy jest dostosowane do określonego typu zadania, organizując wszystkie niezbędne narzędzia do danej aktywności w jednym interfejsie. Przełączając się między środowiskami pracy, zestaw narzędzi i kontrolki widoczne w interfejsie użytkownika zmieniają się, aby odpowiadać potrzebom wybranego zadania, chociaż faktyczna zawartość projektu lub "scena", nad którą pracujesz, nie ulega zmianie. Umożliwia to płynne przejścia w przepływie pracy, na przykład rozpoczynając projektowanie od podstawowych kształtów 2D w środowisku pracy Rysunek Roboczy, a następnie rozwijając te projekty za pomocą zaawansowanych narzędzi modelowania w środowisku pracy Część.

Określenia "środowisko pracy" i "moduł" są czasami używane zamiennie, ale mają różne znaczenia w FreeCAD. Moduł to każde rozszerzenie, które dodaje funkcjonalność do FreeCAD, podczas gdy środowisko pracy to specyficzny rodzaj modułu, który wyposażony jest w własne komponenty interfejsu użytkownika, takie jak paski narzędzi i menu, zaprojektowane w celu ułatwienia realizacji określonych typów zadań. W związku z tym każde środowisko pracy jest modułem, ale nie każdy moduł kwalifikuje się jako środowisko pracy.

Najważniejszym elementem sterującym interfejsu FreeCAD jest selektor środowiska pracy, który służy do przełączania się z jednego środowiska pracy na drugie:

![](/images/FreeCAD_WB.png)

- ![](/images/Workbench_Assembly.svg) The [Złożenie](/Assembly_Workbench/pl "Assembly Workbench/pl") do tworzenia i rozwiązywania mechanicznych złożeń. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/Workbench_BIM.svg) The [BIM](/BIM_Workbench/pl "BIM Workbench/pl") do pracy z elementami architektonicznymi i tworzenia modeli [BIM](https://en.wikipedia.org/wiki/Building_information_modeling). Łączy środowisko pracy Architektura i wcześniej zewnętrzne środowisko pracy BIM dostępne w wersja 0.21 i poniżej.

- ![](/images/Workbench_CAM.svg) [CAM](/CAM_Workbench/pl "CAM Workbench/pl") służy do tworzenia instrukcji G-Code. To środowisko pracy zostało nazwane "Path" w wersja 0.21 i poniżej.

- ![](/images/Workbench_Draft.svg) [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") zawiera narzędzia 2D oraz podstawowe operacje CAD 2D i 3D.

- ![](/images/Workbench_FEM.svg) [MES](/FEM_Workbench/pl "FEM Workbench/pl") zapewnia narzędzia do analiz metodą elementów skończonych _(MES)_.

- ![](/images/Workbench_Inspection.svg) [Inspekcja](/Inspection_Workbench/pl "Inspection Workbench/pl") ma na celu udostępnienie narzędzi do badania kształtów. Nadal jest we wczesnej fazie rozwoju.

- ![](/images/Workbench_Material.svg) [Materiał](/Material_Workbench "Material Workbench") obsługuje system materiałów we FreeCAD. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/Workbench_Mesh.svg) [Siatka](/Mesh_Workbench/pl "Mesh Workbench/pl") do pracy z siatkami o trójkątnych oczkach.

- ![](/images/Workbench_OpenSCAD.svg) [OpenSCAD](/OpenSCAD_Workbench/pl "OpenSCAD Workbench/pl") dla interoperacyjności z OpenSCAD i naprawiania historii modeli typu [konstrukcyjnej geometrii bryły](/Constructive_solid_geometry/pl "Constructive solid geometry/pl") _(CSG)_.

- ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl") do pracy z pierwotnymi obiektami geometrycznymi i operacjami logicznymi.

- ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") do budowy kształtów części ze szkiców.

- ![](/images/Workbench_Points.svg) [Punkty](/Points_Workbench/pl "Points Workbench/pl") do pracy z chmurami punktów.

- ![](/images/Workbench_Reverse_Engineering.svg) [Inżynieria Wsteczna](/Reverse_Engineering_Workbench/pl "Reverse Engineering Workbench/pl") ma na celu dostarczenie specyficznych narzędzi do konwersji kształtów/brył/siatek na parametryczne elementy kompatybilne z FreeCAD.

- ![](/images/Workbench_Robot.svg) [Robot](/Robot_Workbench/pl "Robot Workbench/pl") do badania ruchów robotów. Obecnie nie jest utrzymywany.

- ![](/images/Workbench_Sketcher.svg) [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") do pracy na szkicach z zachowaniem wiązań geometrii.

- ![](/images/Workbench_Spreadsheet.svg) [Arkusz Kalkulacyjny](/Spreadsheet_Workbench/pl "Spreadsheet Workbench/pl") do tworzenia i manipulowania danymi w arkuszu kalkulacyjnym.

- ![](/images/Workbench_Surface.svg) [Powierzchnia](/Surface_Workbench/pl "Surface Workbench/pl") dostarcza narzędzi do tworzenia i modyfikowania powierzchni. Jest on podobny do opcji Ściana z krawędzi narzędzia [Konstruktor kształtu](/Part_Builder/pl "Part Builder/pl").

- ![](/images/Workbench_TechDraw.svg) [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") do tworzenia rysunków technicznych dla modeli przestrzennych. Jest to następca środowiska [Kreślenie](/Drawing_Workbench/pl "Drawing Workbench/pl").

- ![](/images/Workbench_Test.svg) [Test Framework](/Testing/pl "Testing/pl") służy do debugowania programu FreeCAD.

Środowiska pracy często wprowadzają w błąd nowych użytkowników, ponieważ nie zawsze oczywiste jest to, w którym środowisku pracy szukać konkretnego narzędzia. Jednak po krótkim czasie stają się one intuicyjne, a użytkownicy szybko zdają sobie sprawę, że środowiska pracy to wygodny sposób na organizację licznych narzędzi, które oferuje FreeCAD. Dodatkowo, środowiska pracy są w pełni konfigurowalne.

### Interfejs użytkownika

Przyjrzyjmy się bliżej różnym częściom interfejsu:

![](/images/FreeCAD_022_Interface.png)

Główne okno aplikacji można podzielić mniej więcej na 11 sekcji:

1. [Główny obszar widoku](/Main_view_area/pl "Main view area/pl"), który może zawierać różne okna z zakładkami.
2. [Widok 3D](/3D_view/pl "3D view/pl"), zazwyczaj osadzony w [głównym obszarze widoku](/Main_view_area/pl "Main view area/pl"). Widok 3D jest centralnym elementem interfejsu, wyświetlającym i umożliwiającym manipulację obiektami, nad którymi pracujesz. Możliwe jest posiadanie wielu widoków tego samego dokumentu (lub obiektów) lub otwieranie kilku dokumentów jednocześnie. Dodatkowo, każdy widok można oddzielić od głównego okna.
3. Zakładka Model i [Panel zadań](/Task_panel/pl "Task panel/pl").
   1. Zakładka Model pokazuje zawartość i strukturę twojego dokumentu.
   2. Zakładka Zadania to miejsce, w którym FreeCAD poprosi cię o wartości specyficzne dla używanego warsztatu i narzędzia (na przykład wymiary obiektu).
4. [Edytor właściwości](/Property_editor/pl "Property editor/pl"), który pojawia się, gdy zakładka Model jest aktywna w interfejsie. Umożliwia zarządzanie publicznymi właściwościami obiektów w dokumencie. Składa się z sekcji Dane i Widok, pokazujących odpowiednio właściwości wizualizacji i parametryczne obiektów.
5. [Widok zaznaczenia](/Selection_view/pl "Selection view/pl"), który wskazuje wybrane obiekty lub podelementy obiektów (wierzchołki, krawędzie, powierzchnie).
6. [Widok raportu](/Report_view/pl "Report view/pl"), w którym wyświetlane są komunikaty, ostrzeżenia i błędy.
7. [Konsola Pythona](/Python_console/pl "Python console/pl"). Konsola Pythona, w której wyświetlane są wszystkie wykonane polecenia i gdzie można wprowadzać kod Pythona.
8. [Pasek statusu](/Status_bar/pl "Status bar/pl"), w którym pojawiają się niektóre komunikaty i podpowiedzi.
9. Obszar paska narzędzi, w którym są dokowane paski narzędzi.
10. [Wybór środowiska pracy](/Std_Workbench/pl "Std Workbench/pl"), w którym wybierasz aktywne [środowisko pracy](/Workbenches/pl "Workbenches/pl").
11. [Menu standardowe](/Standard_Menu/pl "Standard Menu/pl"), które zawiera podstawowe operacje programu.

Większość z powyższych paneli można ukryć lub wyświetlić za pomocą opcji **Widok → Panele** w menu.

### Dostosowanie interfejsu graficznego

Interfejs FreeCAD jest zaprojektowany z myślą o szerokiej personalizacji. Wszystkie paski narzędzi i panele można przenosić, układać w stosy, a nawet dokować w różnych konfiguracjach zgodnie z preferencjami użytkownika. Dodatkowo można je zamknąć, a następnie ponownie otworzyć w razie potrzeby. Poza tymi możliwościami, użytkownicy mają wiele innych opcji, w tym możliwość tworzenia własnych pasków narzędzi z narzędziami wybranymi z dowolnego dostępnego środowiska pracy oraz przypisywania lub modyfikowania skrótów klawiaturowych w celu usprawnienia pracy. Ta elastyczność zapewnia, że użytkownicy mogą dostosować środowisko do swoich specyficznych potrzeb i preferencji.

Te zaawansowane opcje dostosowywania są dostępne w menu **Przybory → Dostosuj ...**:

![](/images/FreeCAD_022_Customization.png)

**Więcej informacji:**

- [Jak zacząć](/Getting_started/pl "Getting started/pl")
- [Dostosowywanie interfejsu użytkownika do własnych potrzeb](/Interface_Customization/pl "Interface Customization/pl")
- [Środowiska pracy](/Workbenches/pl "Workbenches/pl")
- [More about Python](https://www.python.org)

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:The_FreeCAD_Interface/pl&oldid=1537392>"
