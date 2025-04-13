---
title: Architektura Teren
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| Architektura: Teren |
| Lokalizacja w menu |
| 3D / BIM → Teren |
| Środowisko pracy |
| [Architektura](/Arch_Workbench/pl "Arch Workbench/pl") |
| Domyślny skrót |
| S I |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

**Teren** środowiska Architektura to specjalny obiekt łączący właściwości standardowego obiektu grupy FreeCAD i obiektów Architektury. Jest szczególnie odpowiedni do reprezentowania całego terenu projektowego lub terenu. W pracy architektonicznej opartej na formacie IFC jest głównie używany do organizacji modelu, zawierając w sobie [budynki](/Arch_Building/pl "Arch Building/pl"). Teren jest również wykorzystywany do zarządzania i wyświetlania fizycznego terenu oraz może obliczać objętości ziemi do dodania lub usunięcia.

## Użycie

1. Opcjonalnie wybierz jeden lub więcej obiektów, które mają być zawarte w nowym terenie.
2. Naciśnij przycisk ![](/images/Arch_Site.svg) **Teren** lub naciśnij klawisze S, a następnie I.

## Opcje

* Po utworzeniu terenu możesz dodać do niego obiekty, przeciągając je i upuszczając w widoku drzewa lub korzystając z przycisku ![](/images/Arch_Add.svg) [Połącz obiekty](/Arch_Add/pl "Arch Add/pl"). To określa jedynie, które obiekty są częścią danego terenu, i nie ma wpływu na teren właściwy.
* Możesz usunąć obiekty z terenu, przeciągając je i upuszczając poza niego w widoku drzewa lub korzystając z przycisku ![](/images/Arch_Remove.svg) [Usuń komponent](/Arch_Remove/pl "Arch Remove/pl").
* Możesz dodać obiekt terenu, edytując właściwość DANE**Ukształtowanie terenu** obiektu terenu. Teren może być otwartą powłoką lub bryłą *([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"))*.
* Możesz dodać objętości do dodania lub odjęcia od podstawowego terenu, dwukrotnie klikając w teren, a następnie dodając obiekty do grup Dodawania lub Odejmowania. Obiekty muszą być bryłami.
* Właściwość DANE**wektor wyciągnięcia** może być używana do rozwiązania problemów, które mogą pojawić się, gdy teren jest otwartą powłoką, a są dodawane i / lub odejmowane elementy składowe obiektu. Aby wykonać te dodatki / odejmowania, otwarta powłoka jest wyciągana w bryłę, która jest następnie odpowiednio modyfikowana. W zależności od topologii terenu, ta ekstruzja może nie powieść się przy domyślnym wektorze ekstruzji. W takim przypadku można spróbować rozwiązać problem, zmieniając ten wektor na inny. Ta właściwość jest ignorowana, jeśli teren jest bryłą.

## Właściwości

### Dane

Teren

* DANE**Objętość dodatkowa** (`Volume`): Objętość ziemi do dodania do tego terenu.
* DANE**Dodatki** (`LinkList`): Inne kształty dodane do tego obiektu.
* DANE**Adres** (`String`): Ulica i numer domu dla tej lokalizacji.
* DANE**Miasto** (`String`): Miasto tej lokalizacji.
* DANE**Kraj** (`String`): Kraj tej lokalizacji.
* DANE**Pochylenie** (`Angle`): Kąt między prawdziwą północą a kierunkiem północy w tym dokumencie, czyli osią Y. Oznacza to, że domyślnie północ wskazuje na oś Y, a wschód na oś X; kąt zwiększa się przeciwnie do ruchu wskazówek zegara. Wcześniej ta właściwość była znana jako DANE**Odchylenie od północy**.
* DANE**Plik EPW** (`FileIncluded`): Umożliwia dołączenie pliku EPW z [strony z danymi EPW Ladybug](https://www.ladybug.tools/epwmap/) do tej lokalizacji. Jest to potrzebne do wyświetlania diagramów róż wiatrów.
* DANE**Wzniesienie** (`Length`): Wysokość poziomu 0 dla tej lokalizacji.
* DANE**Wektor wyciągnięcia** (`Vector`): Wektor wyciągnięcia do wykorzystania podczas operacji logicznych.
* DANE**Szerokość geograficzna** (`Float`): Szerokość geograficzna tej lokalizacji.
* DANE**Długość geograficzna** (`Float`): Długość geograficzna tej lokalizacji.
* DANE**Odsunięcie początku** (`Vector`): Opcjonalne przesunięcie między punktem (0,0,0) modelu a punktem wskazanym przez współrzędne geograficzne.
* DANE**Obwód** (`Length`): Długość obwodu rzutowanego obszaru.
* DANE**Kod pocztowy** (`String`): Kod pocztowy tej lokalizacji.
* DANE**Powierzchnia rzutowana** (`Area`): Powierzchnia rzutowana tego obiektu na płaszczyznę XY.
* DANE**Region** (`String`): Region, prowincja lub hrabstwo tej lokalizacji.
* DANE**Usuń dzielnik** (`Bool`): Usuwa dzielniki z wynikowego kształtu.
* DANE**Objętość odejmowana** (`Volume`): Objętość ziemi do usunięcia z tego terenu.
* DANE**Odjęcia** (`LinkList`): Inne kształty odjęte od tego obiektu.
* DANE**Teren** (`Link`): Podstawowy teren tej lokalizacji.
* DANE**Strefa czasowa** (`Integer`): Reprezentuje strefę czasową lokalizacji. Ponieważ ta wartość jest liczbą całkowitą, dozwolone są tylko standardowe strefy czasowe. Jeśli właściwość WIDOK**Diagram słoneczny** jest ustawiona na `PRAWDA` i zainstalowany jest odpowiedni moduł, ta wartość będzie używana do generowania dokładniejszych [diagramów słonecznych i wiatrowych](#Diagramy_słoneczne_i_wiatrowe). Strefa czasowa powinna być przesunięciem między -12 a +14, gdzie 0 to Greenwich, Wielka Brytania (GMT+0). Dodatnie wartości są na wschód od Greenwich, a ujemne na zachód.
* DANE**Url** (`String`): URL pokazujący tę lokalizację na stronie mapowej.

### Widok

Kompas

* WIDOK**Kompas** (`Bool`): Domyślnie `False`. Pokazuje lub ukrywa kompas.
* WIDOK**Pozycja kompasu** (`Vector`): Pozycja kompasu względem umiejscowienia działki.
* WIDOK**Obrót kompasu** (`Angle`): Obrót kompasu względem działki.
* WIDOK**Aktualizuj deklinację** (`Bool`): Domyślnie `False`. Aktualizuje wartość deklinacji na podstawie obrotu kompasu.

Teren

* WIDOK**Orientacja** (`Enumeration`): Domyślnie `Project North`. Po ustawieniu na `True North` cała geometria zostanie obrócona, aby dopasować się do prawdziwej północy tej działki.
* WIDOK**Diagram słoneczny** (`Bool`): Domyślnie `False`. Pokazuje lub ukrywa diagram ścieżki słońca. Zobacz [Diagramy słoneczne i wiatrowe](#Diagramy_słoneczne_i_wiatrowe).
* WIDOK**Kolor diagramu słonecznego** (`Color`): Kolor diagramu ścieżki słońca.
* WIDOK**Pozycja diagramu słonecznego** (`Vector`): Pozycja diagramu ścieżki słońca.
* WIDOK**Skala diagramu słonecznego** (`Float`): Skala diagramu ścieżki słońca.
* WIDOK**Róża wiatrów** (`Bool`): Domyślnie `False`. Pokazuje lub ukrywa diagram róży wiatrów (wymaga wypełnionej właściwości danych **EPW File** oraz zainstalowanego modułu Python Ladybug. Zobacz [Diagramy słoneczne i wiatrowe](#Diagramy_słoneczne_i_wiatrowe)).

## Typowy przepływ pracy

Zacznij od stworzenia obiektu reprezentującego teren. Na przykład, można łatwo zaimportować dane siatki, które można przekształcić w kształt środowiska Część, korzystając z menu **Część → Utwórz kształt z siatki**. Następnie, utwórz obiekt typu Teren i ustaw jego właściwość DANE**Ukształtowanie terenu** w stosunku do obiektu Część, którą właśnie utworzyliśmy:

![](/images/Arch_site_example_01.jpg)

Utwórz objętości *(wymagane są bryły)* reprezentujące obszary, które mają zostać wykopane lub wypełnione. Kliknij dwukrotnie obiekt Teren w widoku drzewa i dodaj te objętości do grup Dodawanie lub Odejmowanie. Kliknij przycisk OK.

![](/images/Arch_site_example_02.jpg)

Geometria terenu zostanie ponownie obliczona, a właściwości obszarów, obwodów i objętości zostaną ponownie obliczone.

![](/images/Arch_site_example_03.jpg)

## Wykresy nasłonecznienia i wiatru

Jeśli [Ladybug](https://www.ladybug.tools/ladybug.html) jest zainstalowany na Twoim systemie, Obiekty typu teren mogą wyświetlać diagram ścieżki Słońca i / lub różę wiatrów. W tym celu, właściwości DANE**Longitude**, DANE**Latitude** i DANE**Declination** *(wcześniej DANE**North Deviation**)* muszą być poprawnie ustawione, a wartości własciwości WIDOK**Solar Diagram** lub WIDOK**Wind Rose** ustawione na `PRAWDA`.

### Uwagi

* Schemat może byś skalowany, orientowany i wyśrodkowany na określonym punkcie w modelu. Można go również włączać i wyłączać. W tym momencie jest to raczej wizualne a nie funkcjonalne narzędzie i zapewniane tylko dla celów wyświetlania.
* Jeśli nie masz dodatku Ladybug, [pysolar](http://pysolar.org/) (wersja 0.7 i wyższe) jest nadal obsługiwany do generowania diagramów ścieżki Słońca, ale nie róż wiatrów. Wymagany jest Pysolar 0.7 lub nowszy. Ladybug jest jednak znacznie potężniejszym narzędziem, które prawdopodobnie będzie częściej używane w przyszłości, więc zalecamy używanie go zamiast pysolar. Ladybug można zainstalować poprzez menadżer pakietów Pythona [pip](https://github.com/ladybug-tools/ladybug?tab=readme-ov-file#installation).

![](/images/Freecad-solar-diagram.jpg)

## Tworzenie skryptów

*Zobacz również:* [API: Architektura](/Arch_API/pl "Arch API/pl") i [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Teren** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
Site = makeSite(objectslist=None, baseobj=None, name="Site")

```

* Tworzy obiekt `Site` z `objectslist`, który jest listą obiektów, lub `baseobj`, który jest obiektem `Shape` lub `Terrain`.

Przykład:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
Wall = Arch.makeWall(baseline, length=None, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

Building = Arch.makeBuilding([Wall])
Site = Arch.makeSite([Building])

FreeCAD.ActiveDocument.recompute()
FreeCAD.Gui.ActiveDocument.ActiveView.viewIsometric()

```

### Wykres słoneczny

Tak długo jak moduł `pysolar` jest obecny, diagram ścieżki Słońca może być dodany do terenu. Ustaw odpowiednią długość i szerokość geograficzną oraz kąty deklinacji, a także skalę odpowiednią do rozmiaru modelu.

Obecnie diagram służy jedynie celom informacyjnym i ma charakter wizualny. Aby uzyskać diagram ścieżki Słońca umożliwiający wizualizację cieni oraz interaktywne zmienianie dat i godzin, najlepszym rozwiązaniem jest skorzystanie z zewnętrznej strony internetowej umożliwiającej przesyłanie modeli 3D. Niektóre z nich obsługują na przykład formaty .obj i .stl, które można eksportować z FreeCAD.

Należy pamiętać, że wymagany jest Pysolar 0.7 lub nowszy, a ta wersja działa tylko w środowisku Python 3.

```
Site.Longitude = -46.38
Site.Latitude = -23.33
Site.Declination = 30
# Uncomment if you want to show the compass
# Site.ViewObject.Compass = True

Site.ViewObject.SolarDiagram = True
Site.ViewObject.SolarDiagramScale = 10000
FreeCAD.ActiveDocument.recompute()

```

### Wykres słoneczny niezależny od terenu

Diagram ścieżki Słońca można utworzyć za pomocą poniższej funkcji, niezależnie od lokalizacji.

```
Node = makeSolarDiagram(longitude, latitude, scale=1, complete=False)

```

* Tworzy diagram ścieżki Słońca jako węzeł Pivy, używając parametrów `longitude` i `latitude`, z opcjonalną wartością `scale`.
* Jeśli własciwość `complete` jest ustawiona na `Prawda`, rysowanych jest 12 miesięcy, co pokazuje pełny układ słoneczny [analemma](https://en.wikipedia.org/wiki/Analemma).

```
import FreeCADGui, Arch

Node = Arch.makeSolarDiagram(-46.38, -23.33, scale=10000, complete=True)
FreeCAD.Gui.ActiveDocument.ActiveView.getSceneGraph().addChild(Node)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Site/pl&oldid=1561262>"