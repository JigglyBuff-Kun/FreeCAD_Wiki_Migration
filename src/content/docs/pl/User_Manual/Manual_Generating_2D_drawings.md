---
title: Podręcznik Generowanie rysunków 2D
---

Kiedy Twój model nie może być wydrukowany lub wyfrezowany bezpośrednio przez maszynę, na przykład _(budynek)_ jest za duży lub wymaga ręcznego montażu po przygotowaniu elementów, zazwyczaj będziesz musiał wyjaśnić innej osobie, jak to zrobić. W dziedzinach technicznych _(inżynieria, architektura, itp.)_, zazwyczaj wykonuje się to za pomocą rysunków. Rysunki są przekazywane osobie odpowiedzialnej za montaż produktu końcowego i precyzują, jak to wykonać.

Typowymi przykładami mogą być instrukcje z marketu Ikea, oraz [rysunki architektoniczne](https://en.wikipedia.org/wiki/Architectural_drawing), i [projekty](https://en.wikipedia.org/wiki/Blueprint). Rysunki te zazwyczaj zawierają nie tylko sam szkic, ale również wiele adnotacji, takich jak tekst, wymiary, liczby i symbole, które pomogą innym ludziom zrozumieć, co i jak należy wykonać.

W programie FreeCAD środowiskiem pracy odpowiedzialnym za tworzenie takich rysunków jest ![](/images/Workbench_TechDraw.svg) [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl").

Środowisko pracy TechDraw pozwala na tworzenie arkuszy, które mogą być puste lub korzystać z gotowych [szablonów](/TechDraw_Templates/pl "TechDraw Templates/pl"), aby mieć już szereg elementów na arkuszu, takich jak ramki i tytuł. Na tych arkuszach możesz umieścić widoki wcześniej modelowanych obiektów 3D i skonfigurować, sposób w jaki te widoki będą się pojawiać na arkuszu. Możesz również umieścić na arkuszu wszelkiego rodzaju adnotacje, takie jak wymiary, teksty i inne symbole powszechnie używane w rysunkach technicznych.

Arkusze rysunków, po ukończeniu, można wydrukować lub wyeksportować jako pliki w formacie [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics), PDF lub [DXF](https://en.wikipedia.org/wiki/AutoCAD_DXF).

W poniższym ćwiczeniu zobaczymy, jak stworzyć prosty rysunek modelu krzesła znajdującego się w bibliotece [FreeCAD](https://github.com/FreeCAD/FreeCAD-library) _(Industrial Design → Chairs → IkeaLikeChair)_. Biblioteka FreeCAD, może być łatwo dodana do Twojej instalacji programu _(patrz rozdział [instalacja](/Manual:Installing/pl "Manual:Installing/pl") tego podręcznika)_, lub możesz po prostu pobrać model ze strony internetowej biblioteki, lub za pośrednictwem bezpośredniego łącza podanyego na dole tego rozdziału.

![](/images/Exercise_TechDraw_01.png)

- Wczytaj plik IkeaLikeChair z biblioteki. Możesz wybrać wersję pliku [FCStd](/File_Format_FCStd "File Format FCStd"), która załaduje pełną historię modelowania, lub [step](/index.php?title=STEP&action=edit&redlink=1 "STEP (page does not exist)"), która utworzy tylko jeden obiekt, bez historii. Ponieważ nie będziemy już musieli dalej modelować, najlepiej wybrać wersję step, ponieważ będzie ona łatwiejsza do manipulowania.

![](/images/Parts_library.jpg)

- Przełącz się do środowiska pracy ![](/images/Workbench_TechDraw.svg) [Rysunek techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl")
- Naciśnij przycisk ![](/images/TechDraw_PageTemplate.svg) [Wstaw nową stronę przy użyciu szablonu](/TechDraw_PageTemplate/pl "TechDraw PageTemplate/pl")
- Wybierz szablon **A4_Portret_ISO7200TD**. W oknie FreeCAD zostanie otwarta kolejna zakładka, pokazująca nową stronę.
- W oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") _(lub w zakładce model)_, wybierz model krzesła. Najprawdopodobniej zostanie on nazwany czymś w rodzaju _"Otwórz importer CASCADE STEP"_.
- Naciśnij przycisk ![](/images/TechDraw_View.svg) [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl").
- Obiekt Widoku zostanie utworzony na naszej stronie. Wybierz obiekt widoku w widoku drzewa, a następnie nadaj widokowi następujące cechy [właściwości](/TechDraw_View/pl#Właściwosci "TechDraw View/pl") w zakładce danych widoku połączonego:
  - Pod kategorią Baza:
    - X: 70mm,
    - Y: 120mm,
    - Obrót: 0,
    - Skala: 0.1.
  - Pod kategorią Rzutowanie _(naciśnij strzałkę w dół, aby indywidualnie zmodyfikować składowe x, y i z, tych właściwości)_:
    - Kierunek: [0 0 1]
    - Kierunek X: [0 -1 0] _(Zmień najpierw pole y, potem pole x)_.
- Mamy teraz ładny widok z góry na nasze krzesło. Naciśnij przycisk ![](/images/TechDraw_ToggleFrame.svg) [Włącz / wyłącz wyświetlanie ramek](/TechDraw_ToggleFrame/pl "TechDraw ToggleFrame/pl") służy on do wyświetlania widoku ramek, etykiet i wierzchołków widoku.

![](/images/Exercise_drawing_02.jpg)

- Powtórzmy operację dwa razy, żeby stworzyć jeszcze dwa widoki. Ustawimy dla nich wartości X i Y, które wskazują położenie widoku na stronie, w celu pokazania ich niezależnie od widoku z góry, oraz ich kierunku, aby utworzyć różne orientacje widoków. Nadaj każdemu z nowych widoków następujące właściwości:
  - View001 _(widok z przodu)_: X: 70, Y: 220, Skala: 0.1, Obrót: 0, Kierunek: _(-1,0,0)_, XDirection: _(0,-1,0)_
  - View002 _(widok z boku)_: X: 150, Y: 220, Skala: 0.1, Obrót: 0, Kierunek: _(0,-1,0)_, Kierunek: XDirection: _(1,0,0)_
- Otrzymujemy następujący dokument:

![](/images/Exercise_TechDraw_04.png)

- Zwróć uwagę, że mogą być łatwiejsze sposoby na uzyskanie widoku, którego potrzebujesz. Możesz po prostu [obrócić](/Manual:Navigating_in_the_3D_view "Manual:Navigating in the 3D view") swój model w widoku 3D, a gdy już będziesz miał odpowiedni widok, wybierz model w widoku drzewa i naciśnij przycisk ![](/images/TechDraw_View.svg) Nowy widok. Spowoduje to automatyczne wstawienie widoku z żądanymi właściwościami obrotu i kierunku. Możesz również użyć narzędzia ![](/images/TechDraw_ProjectionGroup.svg) [Grupa rzutów](/TechDraw_ProjectionGroup/pl "TechDraw ProjectionGroup/pl")

- Możemy dopasować ustawienia naszych widoków jeśli chcemy, na przykład możemy zmienić ich właściwość **Szerokość linii** _(pod zakładką Widok w okienku widoku połączonego)_ na 0.5.

Teraz umieścimy wymiary i oznaczenia na naszym rysunku. Istnieją dwa sposoby dodawania wymiarów do modelu:  
pierwszy polega na umieszczeniu wymiarów w modelu 3D za pomocą narzędzia ![](/images/Draft_Dimension.svg) [Dimension](/Draft_Dimension/pl "Draft Dimension/pl") z Środowiska pracy [Draft](/Draft_Workbench/pl "Draft Workbench/pl"), a następnie umieszczenie widoku tych wymiarów na naszym arkuszu za pomocą narzędzia ![](/images/TechDraw_DraftView.svg) [Nowy rysunek roboczy](/TechDraw_DraftView/pl "TechDraw DraftView/pl").  
Drugi to wykonywanie czynności bezpośrednio na arkuszu Rysunku Technicznego. Użyjemy tej drugiej metody.

- Wciśnij przycisk ![](/images/TechDraw_ToggleFrame.svg) Przełącznik do włączania widoku wierzchołków.
- Użyj klawiszy Ctrl + Lewy klawisz myszki, by zaznaczyć dwa wierzchołki, między którymi chcesz zmierzyć odległość.
- Naciśnij przycisk ![](/images/TechDraw_LengthDimension.svg) [Wstaw wymiar długości](/TechDraw_LengthDimension/pl "TechDraw LengthDimension/pl").

![](/images/Exercise_TechDraw_05.png)

- Powtarzaj tą operację, aż wszystkie wymiary, które chcesz określić, zostaną umieszczone. Użyj narzędzia ![](/images/TechDraw_VerticalDimension.svg) [Wstaw wymiar pionowy](/TechDraw_VerticalDimension/pl "TechDraw VerticalDimension/pl") i ![](/images/TechDraw_HorizontalDimension.svg) [Wstaw wymiar poziomy](/TechDraw_HorizontalDimension "TechDraw HorizontalDimension") w razie potrzeby.
- Poświęć chwilę, aby spojrzeć na [właściwości](/TechDraw_LengthDimension/pl#Właściwości "TechDraw LengthDimension/pl") obiektu **Wymiar długości** w okienku widoku połączonego.
- Zwróć uwagę, że jeśli wymiarujesz widok [aksonometryczny](https://en.wikipedia.org/wiki/Axonometric_projection) _(np. izometryczny)_ zamiast [wieloekranowego](https://en.wikipedia.org/wiki/Multiview_projection) _(np. widok z przodu)_, tak jak zrobiliśmy to tutaj, będziesz musiał użyć ![](/images/TechDraw_LinkDimension.svg) [powiązania wymiaru](/TechDraw_LinkDimension/pl "TechDraw LinkDimension/pl"), aby uzyskać dokładny wymiar.

![](/images/Exercise_TechDraw_07.png)

- Umieścimy teraz dwa objaśnienia pokazane na rysunku powyżej korzystając z narzędzia ![](/images/TechDraw_Balloon.svg) [Wstaw adnotację w formie dymka](/TechDraw_Balloon/pl "TechDraw Balloon/pl").

![](/images/Exercise_TechDraw_06.png)

1. Patrząc na stronę w oknie [Widok 3D](/3D_view/pl "3D view/pl"), wybierz widok, do którego zostanie dołączony dymek, jak pokazano na powyższym obrazku.
2. Naciśnij przycisk dymka ![](/images/TechDraw_Balloon.svg).
3. Kursor jest teraz wyświetlany jako ikona dymka. Kliknij na stronie, aby umieścić początek dymka w żądanej pozycji.
4. Pęcherzyk dymka może być przeciągnięty w żądane miejsce.
5. Zmień właściwości dymka, klikając dwukrotnie etykietę dymka lub obiekt dymka w [widoku drzewa](/Tree_view/pl "Tree view/pl"). Spowoduje to otwarcie okna dialogowego **Zadanie dymka**. Ustaw pole **Wartość** na żądany tekst i zmień wybór z menu rozwijanego Symbol na **None**.
6. Naciśnij przycisk OK
7. Kontynuuj operację dla drugiego wywołania.

- Wypełnimy teraz blok tytułowy arkusza.
  - Upewnij się, że ramki, etykiety i wierzchołki Widoku są widoczne. Jeśli nie, kliknij na przycisk przełączania ![](/images/TechDraw_ToggleFrame.svg).
  - Edytuj tekst w każdej części bloku tytułowego arkusza, klikając na mały zielony kwadrat po lewej stronie tekstu.

Nasza strona może być teraz eksportowana do formatu SVG w celu dalszej pracy w aplikacjach graficznych, takich jak [Inkscape](http://www.inkscape.org) lub DXF. W [widoku drzewa](/Tree_view/pl "Tree view/pl") wybierz stronę, a następnie opcję z menu **Plik → Eksport**. Format DXF jest importowalny w prawie wszystkich istniejących aplikacjach 2D CAD. Strony TechDraw mogą być również bezpośrednio drukowane lub eksportowane do formatu PDF.

**Do pobrania**

- Plik utworzony podczas tego ćwiczenia: [[1]](https://github.com/JoshuaCall/FreeCAD-manual/blob/master/files/drawing.FCStd)
- Arkusz SVG sporządzony z tego pliku: [[2]](https://github.com/JoshuaCall/FreeCAD-manual/blob/master/files/drawing.svg)

**Więcej informacji:**

- [Środowisko pracy Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl")
- [Tech Draw: Jak wykonać nowy szablon ramki](/TechDraw_TemplateHowTo/pl "TechDraw TemplateHowTo/pl")
- [Poradnik: Podstawy dla środowiska pracy Rysunek Techniczny](/Basic_TechDraw_Tutorial/pl "Basic TechDraw Tutorial/pl")
- [Biblioteki FreeCAD](https://github.com/FreeCAD/FreeCAD-library)
- [Inkscape](http://www.inkscape.org)

**Obejrzyj poradniki**

- [Lista odtwarzania Sliptonic dla TechDraw](https://www.youtube.com/watch?v=7LbOmSGW9F0&list=PLEuOia-QxyFKQnmM1U9yVo7eNrK_Mcln8)
- [Symbole i widoki](https://www.youtube.com/watch?v=cggBR1Ghq7k)

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:Generating_2D_drawings/pl&oldid=1523092>"
