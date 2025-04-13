---
title: Rysunek Techniczny Wstaw widok
---
|  |
| --- |
| Rysunek Techniczny: Wstaw widok |
| Lokalizacja w menu |
| Rysunek Techniczny → Widoki → Wstaw widok |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Wstaw grupę rzutów](/TechDraw_ProjectionGroup/pl "TechDraw ProjectionGroup/pl"), [Wstaw widok Arkusza kalkulacyjnego](/TechDraw_SpreadsheetView/pl "TechDraw SpreadsheetView/pl"), [Wstaw obiekt środowiska Architektura](/TechDraw_ArchView/pl "TechDraw ArchView/pl"), [Wstaw symbol SVG](/TechDraw_Symbol/pl "TechDraw Symbol/pl"), [Wstaw obraz bitmapy](/TechDraw_Image/pl "TechDraw Image/pl") |
|  |

## Opis

Narzędzie **Wstaw widok** dodaje reprezentację jednego lub więcej obiektów do strony Rysunku. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Może utworzyć [obiekt grupy rzutów (pojedynczy widok)](#Properties_Projection_Group_Item/pl), [grupę rzutów](/TechDraw_ProjectionGroup/pl "TechDraw ProjectionGroup/pl"), [widok Arkusza Kalkulacyjnego](/TechDraw_SpreadsheetView/pl "TechDraw SpreadsheetView/pl"), [obiekt środowiska Architektura](/TechDraw_ArchView/pl "TechDraw ArchView/pl"), [symbol SVG](/TechDraw_Symbol/pl "TechDraw Symbol/pl") lub [obraz bitmapy](/TechDraw_Image/pl "TechDraw Image/pl").

W wersja 0.21 i poniżej to narzędzie może tylko utworzyć [Widok części](#Properties_Part_View/pl), który jest bardzo zbliżony do obiektu grupy rzutów.

![](/images/TechDraw_View_example.png)

Widok bryły sześcianu z ukrytymi liniami

## Użycie - Obiekt grupy rzutów i Grupa rzutów

1. Opcjonalnie obróć [widok 3D](/3D_view/pl "3D view/pl"). Kierunek kamery w widoku 3D może zostać użyty do ustawienia kierunku rzutowania głównego widoku.
2. Wybierz jeden lub więcej obiektów z właściwością DANE**Shape** w widoku 3D lub [widoku drzewa](/Tree_view/pl "Tree view/pl"). Możesz również wybrać obiekty[Std: Część](/Std_Part/pl "Std Part/pl") lub [Std: Grupa](/Std_Group/pl "Std Group/pl") zawierające takie obiekty. Podczas zaznaczania w widoku 3D, pierwsza zaznaczona ściana może zostać użyta do ustawienia kierunku rzutowania głównego widoku. Nie wybieraj obiektów przez zaznaczenie ścian w widoku 3D, jeśli chcesz użyć bieżącego kierunku kamery.
3. Jeśli w dokumencie znajduje się wiele stron rysunku: opcjonalnie dodaj żądaną stronę do zaznaczenia, wybierając ją w [widoku drzewa](/Tree_view/pl "Tree view/pl").
4. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_View.svg) Wstaw widok.
   * Wybierz opcję **Rysunek Techniczny → Widoki → ![](/images/TechDraw_View.svg) Wstaw widok** z menu.
5. Jeśli w dokumencie znajduje się wiele stron rysunku i jeśli żadna strona nie jest wyświetlana w [obszarze widoku głównego](/Main_view_area/pl "Main view area/pl") i nie wybrałeś jeszcze strony, otworzy się okno dialogowe **Wybór strony**:
   1. Wybierz żądaną stronę.
   2. Naciśnij przycisk OK.
6. Otworzy się panel zadań **Widok części**. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
7. Opcjonalnie dostosuj parametry:
   * **Skala**: wybierz `Strona`, `Automatyczna` lub `Użytkownika`. Jeśli zostanie wybrana ostatnia opcja: wprowadź licznik i mianownik skali.
   * **Kierunek**: użyj dostępnych przycisków, aby dostosować kierunek rzutowania i obrót głównego widoku:
     + Przycisk [#.## #.## #.##] w środku pokazuje bieżący kierunek rzutowania. Wartość początkowa zależy od ustawienia [preferencji](/TechDraw_Preferences/pl#Ogólne "TechDraw Preferences/pl") **Użycie kierunku kamery 3D**. Naciśnij przycisk, aby ręcznie dostosować kierunek i obrót widoku.
     + Naciśnij przycisk ![](/images/Arrow-up.svg), ![](/images/Arrow-down.svg), ![](/images/Arrow-left.svg) lub ![](/images/Arrow-right.svg), aby obrócić kierunek rzutowania o 90° wokół osi poziomej lub pionowej widoku.
     + Naciśnij przycisk ![](/images/Arrow-cw.svg) lub ![](/images/Arrow-ccw.svg), aby obrócić widok o 90° wokół kierunku rzutowania.
     + Naciśnij przycisk ![](/images/TechDraw_ProjFront.svg), aby ustawić kierunek rzutowania głównego widoku na standardowy [widok z przodu](/Std_ViewFront/pl "Std ViewFront/pl").
     + Naciśnij przycisk ![](/images/TechDraw_CameraOrientation.svg), aby ustawić go na pierwszą zaznaczoną ścianę, jeśli jest dostępna, w przeciwnym razie na bieżący kierunek kamery.
   * **Dodatkowe projekcje**: opcjonalnie utwórz dodatkowe projekcje oprócz głównego widoku. Co najmniej jedna dodatkowa projekcja musi być określona, aby wszystkie ustawienia w tej sekcji były wyświetlane.
8. Po zmianie niektórych parametrów naciśnięcie przycisku Zastosuj może być wymagane do zaktualizowania widoku/widoków.
9. Naciśnij przycisk OK.
10. Zostanie wstawiony [obiekt grupy rzutów](#Properties_Projection_Group_Item/pl) lub, jeśli istnieje jedna lub więcej dodatkowych projekcji, [Grupa rzutów](/TechDraw_ProjectionGroup/pl "TechDraw ProjectionGroup/pl").

![](/images/TechDraw_View_Taskpanel.png)

[Panel zadań](/Task_panel/pl "Task panel/pl") Widok części

## Użycie - inne typy widoków

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

1. Opcjonalnie wybierz [arkusz kalkulacyjny](/Spreadsheet_CreateSheet/pl "Spreadsheet CreateSheet/pl") w [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [płaszczyznę przekroju środowiska Architektura](/Arch_SectionPlane/pl "Arch SectionPlane/pl") w [widoku 3D](/3D_view/pl "3D view/pl") lub widoku drzewa.
2. Postępuj zgodnie z krokami 3, 4 i 5 wyjaśnionymi [powyżej](#Użycie_-_Obiekt_grupy_rzutów_i_Grupa_rzutów).
3. Jeśli nie wybrałeś arkusza kalkulacyjnego ani płaszczyzny przekroju środowiska Architektura:
   1. Otwiera się okno dialogowe z ostrzeżeniem.
   2. Zaznacz pole wyboru **Nie pokazuj tego komunikatu ponownie**, aby uniknąć wyświetlania tego okna w przyszłości.
   3. Naciśnij przycisk OK.
   4. Otworzy się przeglądarka plików.
   5. Wybierz plik SVG lub plik z obrazem.
4. Zostanie wstawiony [Widok Arkusza kalkulacyjnego](/TechDraw_SpreadsheetView/pl "TechDraw SpreadsheetView/pl"), [obiekt środowiska Architektura](/TechDraw_ArchView/pl "TechDraw ArchView/pl"), [Symbol SVG](/TechDraw_Symbol/pl "TechDraw Symbol/pl") lub [obraz bitmapy](/TechDraw_Image/pl "TechDraw Image/pl").
5. W przypadku widoku arkusza kalkulacyjnego: dostosuj zakres komórek widoku, zmieniając jego właściwości DANE**Cell Start** i DANE**Cell End**.
6. W przypadku symbolu lub obrazu bitmapy: opcjonalnie zmień jego właściwość DANE**Scale**, aby dostosować jego rozmiar.

## Właściwości - Widok części

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Widok części, formalnie obiekt `TechDraw::DrawViewPart`, ma następujące właściwości:

### Dane

Podstawa

* DANE**Odległość X**: Położenie widoku w poziomie na stronie. *(1)*
* DANE**Odległość Y**: Położenie widoku w pionie na stronie. *(1)*
* DANE**Zablokuj pozycję**: Gdy wartość wynosi `Prawda`, zapobiega przeciąganiu widoków w oknie GUI. Widok nadal może być przesuwany poprzez zmianę właściwości współrzędnych X,Y. *(1)*
* DANE**Obrót**: Obrót widoku strony w kierunku przeciwnym do ruchu wskazówek zegara w stopniach. *(1)*
* DANE**Typ skali**: Typ skali. Opcje: *(1)*
  + `Strona`: Używa wartości z ustawień obiektu [Strony](/TechDraw_PageDefault/pl "TechDraw PageDefault/pl").
  + `Automatyczna`: Dopasuje widok do rozmiaru strony.
  + `Użytkownika`: Użyj skali zdefiniowanej przez wartość DANE**Skala**.
* DANE**Skala**: Widok zostanie wyrenderowany na stronie w stosunku Skala:1 w odniesieniu do źródła. *(1)*
* DANE**Podpis**: Opcjonalny krótki podpis. *(1)*

Kosmetyczne

* DANE (Ukryte)**Wierzchołek kosmetyczny** (`TechDraw::PropertyCosmeticVertexList`)
* DANE (Ukryte)**Krawędź kosmetyczna** (`TechDraw::PropertyCosmeticEdgeList`)
* DANE (Ukryte)**Linie środka** (`TechDraw::PropertyCenterLineList`)
* DANE (Ukryte)**Geom Formats** (`TechDraw::PropertyGeomFormatList`)

Parametry HLR

* DANE**Widok zgrubny** (`Bool`): Jeśli wartość ta wynosi `Prawda`, Rysunek Roboczy użyje przybliżenia wielokąta do obliczenia geometrii rysunku. Jeżeli jest to `Fałsz`, Rysunek Roboczy użyje algorytmu precyzyjnego. Widok zgrubny może być wyliczany znacznie szybciej dla złożonych modeli. Jakość rysunku jest obniżona, ponieważ każda krzywa jest aproksymowana jako seria krótkich odcinków linii. Wierzchołki nie są wyświetlane w trybie Widok zgrubny, ponieważ każdy krótki odcinek spowodowałby utworzenie dwóch nowych wierzchołków, co spowodowałoby bałagan na ekranie. Wymiary liniowe mogą zostać dodane do okna Widoku zgrubnego, ale ich użyteczność jest mało prawdopodobna.
* DANE**Wygładzanie widoczne** (`Bool`): Wyświetlanie wygładzonych linii włączone/wyłączone.
* DANE**Szew widoczny** (`Bool`): Wyświetlanie linii szwu włączone/wyłączone.
* DANE**Iso widoczne** (`Bool`): Wyświetlanie linii izometrycznych *(u,v)* włączone/wyłączone.
* DANE**Hard Hidden** (`Bool`): Wyświetlanie linii ukrytych włączone/wyłączone.
* DANE**Wygładzanie ukryte** (`Bool`): Ukrywanie wygładzonych linii włączone/wyłączone.
* DANE**Szew ukryty** (`Bool`): Ukrywanie linii szwu włączone/wyłączone.
* DANE**Iso ukryte** (`Bool`): Ukrywanie linii izometrycznych *(u,v)* włączone/wyłączone.
* DANE**Licznik Iso** (`Integer`): Liczba linii izometrycznych(u,v) do narysowania na każdej ścianie.
* DANE**Licznik przejść** (`Integer`): Ile razy FreeCAD powinien spróbować wyczyścić wynik algorytmu HLR. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

Rzutowanie

* DANE**Pochodzenie**: Powiązania z obiektami rysunkowymi, które mają być przedstawione.
* DANE**XPochodzenie**: Odnośniki do obiektów rysunkowych w pliku zewnętrznym.
* DANE**Kierunek**: Wektor ten kontroluje kierunek, z którego patrzysz na obiekt. +X to prawo, -X to lewo, +Y to tył, -Y to przód *(patrząc w ekran)*, +Z to góra, a -Z to dół. Zatem widok z przodu to *(0,-1,0)*, a widok izometryczny to *(1,-1,1)*.
* DANE**XKierunek**: ten wektor kontroluje obrót widoku, według wartości Kierunek.
* DANE**Perspektywa**: Przyjmuje wartość `Prawda` dla projekcji perspektywicznej, `Fałsz` dla projekcji ortogonalnej.
* DANE**Skupienie**: Odległość od kamery do płaszczyzny projekcji dla rzutów perspektywicznych. Musi być dostosowana do obiektu. Odległość zbyt duża powoduje utratę perspektywy, odległość zbyt mała powoduje zniekształcenie obiektu.

### Widok

Podstawa

* WIDOK**Utrzymaj etykietę** (`Bool`): Zawsze pokazuj etykietę widoku, jeśli parametr ma wartość `PRAWDA`. *(1)*
* WIDOK**Kolejność na stosie** (`Integer`): Nad lub pod w stosunku do innych widoków. *(1)* [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

Widok z przerwaniem

* WIDOK**Styl linii przerwania** (`Enumeration`): Ustaw styl linii przerwania jeśli ma to zastosowanie. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* WIDOK**Typ linii przerwania** (`Enumeration`): Dostosowuje typ przedstawienia linii przerwania na widokach z przerwaniem jeśli ma to zastosowanie: `Brak`, `Zygzak` lub `Proste`. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

Dekoracja

* WIDOK**Arc Center Marks** (`Bool`): Włączenie / wyłączenie znaczników środka łuku okręgu.
* WIDOK**Center Scale** (`Float`): Dostosowanie rozmiaru znacznika środka łuku okręgu, jeśli jest włączony.
* WIDOK**Horiz Center Line** (`Bool`): Pokaż poziomą oś symetrii w widoku.
* WIDOK**Show All Edges** (`Bool`): Tymczasowo pokaż niewidoczne linie.
* WIDOK**Vert Center Line** (`Bool`): Pokaż pionową oś symetrii w widoku.

Ściany

* WIDOK**Kolor ścian** (`Color`): Ustaw kolor ścian. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* WIDOK**Przezroczystość ścian** (`Percent`): Ustaw przezroczystość ścian. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

Podświetlenie

* WIDOK**Highlight Adjust** (`Float`): W razie potrzeby dostosuj obrót podświetlenia szczegółu.
* WIDOK**Highlight Line Color** (`Color`): W razie potrzeby ustaw kolor podświetlonej linii.
* WIDOK**Highlight Line Style** (`Enumeration`): Ustaw styl podświetlonej linii, jeśli ma to zastosowanie.

Linie

* WIDOK**Extra Width** (`Length`): Jeszcze nie wdrożone.
* WIDOK**Hidden Width** (`Length`): Grubość ukrytych linii, jeśli jest włączona.
* WIDOK**Iso Width** (`Length`): Grubość linii powierzchni izometrycznych *(u,v)* i linii wymiarowych.
* WIDOK**Line Width** (`Length`): Grubość widocznych linii. Zobacz informacje na stronie [Grupy linii](/TechDraw_LineGroup/pl "TechDraw LineGroup/pl").

Linia przekroju

* WIDOK**Uwzględnij linię cięcia** (`Bool`): Pokaż/ukryj linię cięcia przekroju, jeśli dotyczy. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* WIDOK**Kolor linii przekroju** (`Color`): Ustaw kolor linii przekroju, jeśli dotyczy.
* WIDOK**Znaczniki linii przekroju** (`Bool`): Pokaż/ukryj znaczniki przy zmianach kierunku dla przekroju złożonego, jeśli dotyczy. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
* WIDOK**Styl linii przekroju** (`Enumeration`): Ustaw styl linii przekroju, jeśli dotyczy.
* WIDOK**Pokaż linię przekroju** (`Bool`): Pokaż/ukryj linię przekroju, jeśli dotyczy.

*(1)* właściwości te są wspólne dla wszystkich typów widoku.

## Właściwości - Obiekt grupy rzutów

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt grupy rzutów, formalnie obiekt `TechDraw::DrawProjGroupItem`, wywodzi się z [Widoku części](#Właściwości_-_Widok_części), formalnie obiektu `TechDraw::DrawViewPart` i dziedziczy wszystkie jego właściwości. Ma również następujące dodatkowe właściwości:

### Dane

Podstawa

* DANE**Typ** (`Enumeration`): Typ widoku (`Z przodu`, `Z lewej`, itd.).
* DANE**Wektor obrotur** (`Vector`): Przestarzałe, użyj DANE**KierunekX** zamiast tego.

## Właściwości - Grupa rzutów

Zobacz stronę [Wstaw grupę rzutów](/TechDraw_ProjectionGroup/pl#Właściwości "TechDraw ProjectionGroup/pl").

## Właściwości - Widok Arkusza kalkulacyjnego

Zobacz stronę [Wstaw widok Arkusza kalkulacyjnego](/TechDraw_SpreadsheetView/pl#Właściwości "TechDraw SpreadsheetView/pl").

## Właściwości - Wstaw obiekt środowiska Architektura

Zobacz stronę [Wstaw obiekt środowiska Architektura](/TechDraw_ArchView/pl#Właściwości "TechDraw ArchView/pl").

## Właściwości - Symbol SVG

Zobacz stronę [Wstaw Symbol SVG](/TechDraw_Symbol/pl#Właściwości "TechDraw Symbol/pl").

## Właściwości - Wstaw obraz bitmapy

Zobacz stronę [Wstaw obraz bitmapy](/TechDraw_Image/pl#Właściwości "TechDraw Image/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Widok części można utworzyć za pomocą [makrodefinicji](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") przy użyciu następujących funkcji:

```
import FreeCAD as App

doc = App.ActiveDocument
box = doc.addObject("Part::Box", "Box")

page = doc.addObject("TechDraw::DrawPage", "Page")
template = doc.addObject("TechDraw::DrawSVGTemplate", "Template")
template.Template = App.getResourceDir() + "Mod/TechDraw/Templates/A4_LandscapeTD.svg"
page.Template = template

# Toggle the visibility of the page to ensure its width and height are updated (hack):
page.Visibility = False
page.Visibility = True

view = doc.addObject("TechDraw::DrawViewPart", "View")
page.addView(view)
view.Source = [box]
view.Direction = (0, 0, 1)

view.X = page.PageWidth / 2
view.Y = page.PageHeight / 2

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_View/pl&oldid=1490983>"