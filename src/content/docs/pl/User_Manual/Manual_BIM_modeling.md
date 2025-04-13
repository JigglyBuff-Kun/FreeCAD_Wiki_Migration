---
title: Podręcznik Modelowanie BIM
---

[Modelowanie informacji o budynku](https://pl.wikipedia.org/wiki/Building_Information_Modeling) (BIM) to proces wykorzystywany w architekturze, inżynierii i budownictwie do tworzenia i zarządzania cyfrowymi reprezentacjami fizycznych obiektów. Integruje nie tylko geometrię 3D, ale także kluczowe dane, takie jak materiały, koszty i harmonogramy, co pozwala na zaawansowaną analizę i współpracę przez cały cykl życia projektu.

We FreeCAD funkcjonalność BIM znacznie się rozwinęła, szczególnie od wydania wersji 1.0, w której wcześniej oddzielne środowiska pracy Arch i BIM zostały połączone w zintegrowane środowisko pracy BIM. Ta konsolidacja usprawnia przepływ pracy, umożliwiając użytkownikom modelowanie, dokumentowanie i zarządzanie projektami budowlanymi bardziej efektywnie w jednym środowisku.

Jednym z kluczowych usprawnień wprowadzonych we FreeCAD w wersji 1.0 jest zastosowanie koncepcji Native IFC. Wcześniej, podobnie jak większość aplikacji BIM, FreeCAD tłumaczył dane pomiędzy wewnętrznym modelem danych a formatem plików IFC (Industry Foundation Classes), co mogło prowadzić do utraty danych podczas otwierania i zapisywania plików. Dzięki Native IFC użytkownicy FreeCAD mogą teraz bezpośrednio otwierać, edytować i zapisywać pliki IFC, gdzie sam plik IFC pełni funkcję struktury danych. Takie podejście eliminuje zbędne translacje danych i zapewnia, że modyfikacje są zapisywane bez potrzeby przepisania całego pliku, co czyni go kompatybilnym z systemami kontroli wersji, takimi jak Git, i zapewnia bardziej przejrzysty oraz precyzyjny przepływ pracy z plikami IFC.

W tym rozdziale zobaczymy, jak modelować ten mały budynek:

![](/images/FreeCAD_BIMHouse.png)

- Utwórz nowy dokument i przejdź do środowiska pracy [BIM](/BIM_Workbench/pl "BIM Workbench/pl").
- Otwórz menu **Edycja → Preferencje ... → Rysunek Roboczy → Siatka i przyciąganie** i ustaw:
  - **Główne linie co** `10`.
  - **Odstęp siatki** `1000mm` aby uzyskać siatkę opartą na metrze, co jest wygodne dla rozmiaru naszej budowli.
  - **Rozmiar siatki** `100 linii`.
- Na pasku narzędzi **przyciąganie** upewnij się, że przycisk ![](/images/Draft_Snap_Grid.svg) [Przyciągnij do siatki](/Draft_Snap_Grid/pl "Draft Snap Grid/pl") jest włączony, aby korzystać z siatki jak najczęściej.
- Jeśli nie widzisz osi, kliknij przycisk ![](/images/Draft_ToggleGrid.svg) [Przełącz widoczność siatki](/Draft_ToggleGrid/pl "Draft ToggleGrid/pl").
- Ustaw [płaszczyznę roboczą](/Draft_SelectPlane/pl "Draft SelectPlane/pl") na płaszczyznę **XY**.
- Narysuj cztery linie za pomocą narzędzia ![](/images/Draft_Line.svg) [linia](/Draft_Line/pl "Draft Line/pl"). Możesz wprowadzić współrzędne ręcznie lub po prostu wybrać punkty na siatce za pomocą myszy. Będziemy używać metrów do naszych wymiarów:
  - Od punktu (0,0) do punktu (0,3)
  - Od punktu (0,3) do punktu (4,3)
  - Od punktu (4,3) do punktu (4,0)
  - Od punktu (4,0) do punktu (0,0)

![](/images/Exercise_arch_03.jpg)

Zwróć uwagę, że linie były rysowane konsekwentnie w tym samym kierunku (zgodnie z ruchem wskazówek zegara). Choć nie jest to wymagane, pomaga to zapewnić spójną orientację lewych i prawych stron ścian, które stworzymy w następnym kroku. Możesz się zastanawiać, dlaczego nie narysowaliśmy po prostu prostokąta, co byłoby prostsze. Jednak użycie czterech oddzielnych linii pozwala nam zaprezentować dodatkowe funkcjonalności BIM, takie jak łączenie wielu obiektów w jeden, co jest kluczowym elementem przepływu pracy.

- Po utworzeniu linii sprawdź ich punkty początkowe i końcowe, i dostosuj je w razie potrzeby, aby były dokładnie poprawne.

![](/images/Manual-BIM_Modeling_-_Adjusting_Lines.png)

- Wybierz wszystkie cztery linie, a następnie naciśnij przycisk ![](/images/Arch_Wall.svg) [Ściana](/Arch_Wall/pl "Arch Wall/pl").
- Ustaw **Wysokość** ścian na 3m (domyślnie).
- Ustaw właściwość **Wyrównanie** na **lewo**. Ustawienie właściwości Wyrównanie na lewo zapewnia, że ściany, które utworzysz, będą ustawione po lewej stronie narysowanych linii. W środowisku pracy BIM we FreeCAD ściany są zazwyczaj generowane na podstawie linii odniesienia, a wyrównanie do lewej lub prawej strony decyduje o tym, po której stronie linii zostanie umieszczona ściana.

Jeśli nie rysowałeś linii w tej samej kolejności, jak opisano (przeciwnie do ruchu wskazówek zegara), orientacja niektórych ścian może zostać odwrócona, co oznacza, że mogą one znaleźć się po przeciwnej stronie linii (po prawej, zamiast po lewej). W takim przypadku będziesz musiał dostosować wyrównanie do prawej strony dla tych konkretnych ścian, aby zapewnić ich spójną orientację. Po poprawnym ustawieniu, będziesz mieć cztery ściany, które przecinają się w narożnikach, ustawione po wewnętrznej stronie linii bazowej, tworząc pożądany układ.

![](/images/Exercise_arch_04.jpg)

Po utworzeniu ścian, kolejnym krokiem jest ich połączenie, aby prawidłowo się przecinały. Jest to konieczne, gdy ściany nie łączą się płynnie w miejscach przecięcia. Aby to zrobić, wybierasz jedną ścianę jako "gospodarza" i dodajesz inne ściany jako "dodatki", łącząc ich geometrię z gospodarzem. Wszystkie obiekty w środowisku pracy BIM mogą mieć wiele dodatków (które dodają geometrię) lub subtrakcji (które usuwają geometrię). Te zależności można zarządzać w każdej chwili, klikając dwukrotnie obiekt w drzewie, co pozwala na elastyczne dostosowanie w celu zapewnienia płynnej integracji ścian i innych elementów architektonicznych.

- Wybierz cztery ściany, trzymając naciśnięty klawisz Ctrl, przy czym ostatnia wybrana będzie ścianą, którą wybierzesz jako bazę.
- Naciśnij przycisk ![](/images/Arch_Add.svg) [Dodaj](/Arch_Add/pl "Arch Add/pl"). Cztery ściany zostały teraz połączone w jedną:

![](/images/Exercise_arch_05.jpg)

Poszczególne ściany są jednak nadal dostępne poprzez rozwinięcie ściany w widoku drzewa.

- Teraz umieśćmy drzwi, naciskając przycisk ![](/images/BIM_Door.svg) [Drzwi](/BIM_Door/pl "BIM Door/pl").
- Zacznij od wybrania ściany. Choć ten krok nie jest wymagany, warto go wyrobić jako nawyk. Jeśli obiekt jest wybrany przed rozpoczęciem operacji, operacja zostanie domyślnie zastosowana do tego obiektu.
- Ustaw ![](/images/View-axonometric.svg) [Płaszczyznę roboczą](/Draft_SelectPlane/pl "Draft SelectPlane/pl") na **auto**, aby nie być ograniczonym do płaszczyzny podłoża.
- Naciśnij przycisk ![](/images/BIM_Door.svg) [Drzwi](/BIM_Door/pl "BIM Door/pl").
- W panelu tworzenia drzwi wybierz szablon **Drzwi szklane** i ustaw ich **Szerokość** na 1 m oraz **Wysokość** na 2,1 m. Zauważysz, że możesz wybrać spośród różnych typów drzwi i dostosować ich parametry według własnych potrzeb. We FreeCAD drzwi są tworzone przez operację [okno](/Arch_Window/pl "Arch Window/pl").
- Upewnij się, że włączona jest opcja ![](/images/Draft_Snap_Near.svg) [Przyciągnij do najbliższego](/Draft_Snap_Near/pl "Draft Snap Near/pl"), aby móc przyciągać do powierzchni.
- Umieść drzwi mniej więcej na środku przedniej powierzchni ściany.

![](/images/FreeCAD_BIMDoor.png)

- Teraz możemy ustawić precyzyjną lokalizację, rozwijając obiekty ściany i okna w widoku drzewa i zmieniając właściwość **Umiejscowienie** podstawowego szkicu drzwi. Ustaw jego pozycję na **x = 0,5 m, y = 0, z = 0**. Nasze drzwi są teraz dokładnie tam, gdzie chcemy.

![](/images/FreeCAD_BIMDoorPos.png)

- Umieśćmy okno przy naszych drzwiach. Wybierz ścianę, naciśnij przycisk ![](/images/Arch_Window.svg) [Okno](/Arch_Window/pl "Arch Window/pl"), wybierz ustawienie wstępne **Otwórz 2 szyby** i umieść okno o wymiarach **1 m x 1 m** w tej samej płaszczyźnie co drzwi. Ustaw położenie szkicu bazowego na pozycję **x = 0,6 m, y = 0, z = 1,1 m**, tak aby górna linia okna była wyrównana do górnej krawędzi drzwi.

![](/images/FreeCAD_BIMWindow.png)

Okna są zawsze oparte o szkice. Możesz łatwo tworzyć niestandardowe okna, najpierw rysując szkic na powierzchni, a następnie przekształcając go w okno poprzez wybranie go, a następnie naciśnięcie przycisku okna. Następnie można zdefiniować parametry okna, tj. które części szkicu powinny zostać wyciągnięte i w jakim stopniu, klikając dwukrotnie okno w widoku drzewa. Teraz przejdźmy to utworzenia płyty:

- Ustaw [Płaszczyznę roboczą](/Draft_SelectPlane/pl "Draft SelectPlane/pl") na płaszczyznę **XY**.
- Utwórz ![](/images/Draft_Rectangle.svg) [prostokąt](/Draft_Rectangle/pl "Draft Rectangle/pl") o **długości** 5m, wysokości **4m** i umieść go w pozycji x:-0.5m, y:-0.7m, z:0.
- Wybierz prostokąt
- Kliknij na ![](/images/BIM_Slab.svg) [Płyta](/BIM_Slab/pl "BIM Slab/pl"), aby utworzyć płytę z prostokąta.
- Zachowaj domyślne wartrości 0,2 m dla właściwości **wysokość** i ustaw kierunek **normalny** na (0,0,-1), aby wyciągnięcie było w dół. Moglibyśmy również po prostu przesunąć obiekt o 0,2 m w dół, ale dobrą praktyką jest utrzymywanie wyciągniętych obiektów wyrównanych z ich profilem bazowym dla zachowania konsekwencji i dokładności w modelu.
- Ustaw właściwość **Ifc Type** płyty na **płyta**. Nie jest to konieczne w programie FreeCAD, ale jest ważne dla eksportu IFC, ponieważ zapewni, że obiekt zostanie wyeksportowany z prawidłowym typem IFC.

![](/images/FreeCAD_BIMSlab.png)

- Teraz umieśćmy dach. Możemy to łatwo zrobić, używając narzędzia ![](/images/Arch_Roof.svg) [Dach](/Arch_Roof/pl "Arch Roof/pl").
- Naciśnij opcję ![](/images/Draft_Snap_WorkingPlane.svg) [Przyciąganie do płaszczyzny roboczej](/Draft_Snap_WorkingPlane/pl "Draft Snap WorkingPlane/pl"), aby włączyć rysowanie na wszystkich płaszczyznach.
- Wybierając jedną z górnych powierzchni naszego domu, naciśnij przycisk ![](/images/Draft_SelectPlane.svg) [Wybór płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl"). Płaszczyzna robocza jest teraz ustawiona na tę powierzchnię.
- Stwórz ![](/images/Draft_Rectangle.svg) [prostokąt](/Draft_Rectangle/pl "Draft Rectangle/pl"), przyciągając do dwóch przeciwnych punktów ścian.
- Na karcie **dane** dachu ustaw parametr **Runs** na 1600.
- Jeśli chcesz zmienić kolor dachu, możesz to zrobić na karcie widoku.

![](/images/FreeCAD_BIMHouseg.png)

Tym sposobem nasz model jest teraz kompletny. Kolejnym krokiem jest odpowiednia organizacja, aby zapewnić poprawny eksport do formatu IFC. Pliki IFC wymagają, aby wszystkie elementy budowlane były pogrupowane w obiekcie **budynek**, a opcjonalnie, w określonym **poziomie**. Dodatkowo, wszystkie budynki muszą być zlokalizowane na **terenie**. Jednakże, jeśli nie ma terenu, eksportujący IFC w FreeCAD automatycznie wygeneruje domyślny teren, więc nie musimy go dodawać ręcznie. Ważne jest, aby odpowiednio zorganizować model, aby był zgodny z normami IFC, co zapewni płynną współpracę i kompatybilność z innym oprogramowaniem BIM. Odpowiednia organizacja pomoże również uniknąć utraty danych lub błędów podczas procesu eksportu.

- Wybierz ściany, płytę i dach.
- Naciśnij przycisk ![](/images/Arch_Floor.svg) [piętro](/Arch_Floor/pl "Arch Floor/pl").
- Wybierz piętro, które właśnie utworzyliśmy.
- Naciśnij przycisk ![](/images/Arch_Building.svg) [budowla](/Arch_Building/pl "Arch Building/pl").

Nasz model jest teraz gotowy do eksportu:

![](/images/FreeCAD_BIMExport.png)

Format [IFC](https://en.wikipedia.org/wiki/Industry_Foundation_Classes) jest jednym z najcenniejszych zasobów w wolnym świecie BIM, ponieważ umożliwia wymianę danych między dowolną aplikacją i podmiotem ze świata budownictwa w sposób otwarty _(format jest otwarty, bezpłatny i utrzymywany przez niezależne konsorcjum)_. Eksportowanie modeli BIM jako IFC gwarantuje, że każdy może je zobaczyć i przeanalizować, bez względu na używaną aplikację.

- Wybierz najwyższy obiekt, który chcesz wyeksportować, czyli obiekt Budynek.
- Wybierz menu **Plik -> Eksportuj -> *I*ndustry *F*oundation *C*lasses** i zapisz plik.
- Wynikowy plik IFC można teraz otworzyć w szerokiej gamie aplikacji i przeglądarek _(poniższy obraz przedstawia plik otwarty w bezpłatnej przeglądarce [IfcPlusPlus](http://www.ifcquery.com/))_. Sprawdzenie wyeksportowanego pliku w takiej przeglądarce przed udostępnieniem go innym osobom jest ważne, aby sprawdzić, czy wszystkie dane zawarte w pliku są poprawne. FreeCAD może być również użyty do ponownego otwarcia wynikowego pliku IFC.

![](/images/FreeCAD_BIMIFC.png)

Możemy użyć ![](/images/Workbench_TechDraw.svg) [środowiska pracy Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl"), aby stworzyć rysunek naszego budynku. Proces jest podobny do tego, który został przedstawiony w poprzedniej sekcji, więc nie będziemy wchodzić w szczegóły. Po prostu stwórz nowy widok, korzystając z opcji ![](/images/TechDraw_PageDefault.svg) [Wstaw nową domyślną stronę rysunku](/TechDraw_PageDefault/pl "TechDraw PageDefault/pl"), a następnie wybierz widok, który chcesz wyświetlić na rysunku, i dodaj wymiary tam, gdzie to konieczne. Dzięki temu będziemy mogli stworzyć profesjonalną reprezentację 2D modelu 3D do celów dokumentacyjnych lub prezentacyjnych.

![](/images/FreeCAD_BIMHouseDrawing.png)

Nasza strona jest już gotowa i możemy ją wyeksportować do formatu SVG lub DXF, albo wydrukować. Format SVG umożliwia otwarcie pliku za pomocą aplikacji ilustracyjnych, takich jak [Inkscape](http://www.inkscape.org), za pomocą których można szybko ulepszyć rysunki techniczne i przekształcić je w znacznie ładniejsze rysunki prezentacyjne. Oferuje on znacznie więcej możliwości niż format DXF.

## Do pobrania

- Plik wygenerowany podczas tego ćwiczenia: <https://github.com/yorikvanhavre/FreeCAD-manual/blob/master/files/house.FCStd>
- Plik IFC wyeksportowany z powyższego pliku: <https://github.com/yorikvanhavre/FreeCAD-manual/blob/master/files/house.ifc>
- Plik SVG wyeksportowany z powyższego pliku: <https://github.com/yorikvanhavre/FreeCAD-manual/blob/master/files/house.svg>

## Powiązane

- Środowisko pracy [BIM](/BIM_Workbench/pl "BIM Workbench/pl")
- Środowisko pracy [Architektura](/Arch_Workbench/pl "Arch Workbench/pl")
- [Płaszczyzna robocza](/Draft_SelectPlane/pl "Draft SelectPlane/pl")
- [Przyciąganie](/Draft_Snap/pl "Draft Snap/pl")
- [Wyrażenia](/Expressions/pl "Expressions/pl")
- [format IFC](https://en.wikipedia.org/wiki/Industry_Foundation_Classes)
- [IfcOpenShell](http://ifcopenshell.org)
- [IfcPlusPlus](http://www.ifcquery.com)
- [Inkscape](http://www.inkscape.org)

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:BIM_modeling/pl&oldid=1522617>"
