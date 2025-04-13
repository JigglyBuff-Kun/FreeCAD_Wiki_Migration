---
title: Rysunek Roboczy Wybór płaszczyzny roboczej
---
|  |
| --- |
| Rysunek Roboczy: Wybór płaszczyzny |
| Lokalizacja w menu |
| Kreślenie → Przybory → Wybierz płaszczyznę |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| Rysunek Roboczy: W P |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Ustaw pośrednią płaszczyznę roboczą](/Draft_SetWorkingPlaneProxy/pl "Draft SetWorkingPlaneProxy/pl"), [Pokaż / ukryj siatkę](/Draft_ToggleGrid/pl "Draft ToggleGrid/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_SelectPlane.svg) **Wybór płaszczyzny roboczej** definiuje bieżącą płaszczyznę roboczą. Jest to płaszczyzna zdefiniowana w [widoku 3D](/3D_view/pl "3D view/pl"), na której tworzone są nowe obiekty [Rysunku Roboczego](/Draft_Workbench/pl "Draft Workbench/pl"). Płaszczyzna robocza może być oparta na jednym z kilku [nastaw](#Użycie_z_ustawieniami_wstępnymi) lub na zaznaczeniu. Zaznaczenie może zostać utworzone przed *([wyborem wstępnym](#Użycie_ze_wstępnym_wyborem))* lub po *([uruchomieniu polecenia](#Użycie_z_wyborem_w_kolejnym_kroku))*.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Dla każdego widoku 3D zapisywana jest osobna płaszczyzna robocza.

Przycisk ![](/images/Draft_tray_button_plane.png) w [Tacka narzędziowa](/Draft_Tray/pl "Draft Tray/pl") zmienia swój wygląd w zależności od bieżącej płaszczyzny roboczej. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Jeśli płaszczyzna robocza nie jest ustawiona na **Automatyczną**, gwiazdka *(**\***)* jest dodawana do etykiety przycisku, jeśli punkt odniesienia położenia płaszczyzny roboczej nie pasuje do globalnego punktu odniesienia.

![](/images/WorkingPlane_example.png)

Kształty tworzone na różnych płaszczyznach roboczych.

## Użycie ze wstępnym wyborem

1. Wykonaj jedną z następujących czynności:
   * Wybierz pojedynczy obiekt. Obsługiwane są następujące obiekty:
     + [Pośrednia płaszczyzna robocza](/Draft_WorkingPlaneProxy/pl "Draft WorkingPlaneProxy/pl"): WIDOK**View Data** *(pozycja kamery)* i WIDOK**Visibility Map** *(zapisana widoczność obiektów)* pośredniej płaszczyzny roboczej są również przywracane.
     + [Architektura: Osie](/Arch_Axis/pl "Arch Axis/pl") *([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"))*
     + [Architektura: Układ osi](/Arch_AxisSystem/pl "Arch AxisSystem/pl") ([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"))
     + [Architektura: Część budowli - piętro](/Arch_BuildingPart/pl "Arch BuildingPart/pl")
     + [Architektura: Płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl")
     + [Std: Część](/Std_Part/pl "Std Part/pl"): aby uniknąć zaznaczania elementów podrzędnych, zaleca się zaznaczanie ich w [widoku drzewa](/Tree_view/pl "Tree view/pl").
     + Obiekty nie będące bryłami, które składają się z pojedynczej płaskiej powierzchni lub pojedynczej zakrzywionej krawędzi, lub *([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"))*, które mają trzy lub więcej wierzchołków.
     + Obiekty bryłowe lub obiekty bez kształtu, które mają właściwość DANE**Umiejscowienie**. *([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"))*
   * Wybierz jeden lub więcej elementów podrzędnych. Można wybrać:
     + Płaską powierzchnię.
     + Zakrzywioną krawędź.
     + Trzy wierzchołki.
     + Krawędź i wierzchołek lub dwie krawędzie. Połączone wierzchołki muszą definiować płaszczyznę. *([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"))*
2. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Draft_tray_button_plane.png) w [tacce narzędziowej](/Draft_Tray/pl "Draft Tray/pl").
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz opcję **Narzędzia → ![](/images/Draft_SelectPlane.svg) Wybierz płaszczyznę** z menu lub menu kontekstowego [widoku drzewa](/Tree_view/pl "Tree view/pl") bądź [widoku 3D](/3D_view/pl "3D view/pl").
   * Rysunek Roboczy: Użyj skrótu klawiaturowego: W, a następnie P.
3. Płaszczyzna robocza i ikona [tacki narzędziowej](/Draft_Tray/pl "Draft Tray/pl") zostaną zaktualizowane.

## Użycie z wyborem w kolejnym kroku

1. Wywołaj polecenie jak opisano wyżej.
2. Otworzy się panel zadań **Ustawienia płaszczyzny roboczej**. Więcej informacji można znaleźć w sekcji [Opcje](#Opcje).
3. Wykonaj jedną z następujących czynności:
   * Wybierz pojedynczy obiekt. Zobacz [poprzedni akapit](#Użycie_ze_wstępnym_wyborem).
   * Wybierz jeden lub więcej elementów podrzędnych. Zobacz [poprzedni akapit](#Użycie_ze_wstępnym_wyborem).
4. Kliknij gdziekolwiek w oknie [widoku 3D](/3D_view/pl "3D view/pl"), aby potwierdzić wybór i zakończyć polecenie.
5. Płaszczyzna robocza i ikona [tacki narzędziowej](/Draft_Tray/pl "Draft Tray/pl") zostaną zaktualizowane.

## Użycie z ustawieniami wstępnymi

1. Wywołaj polecenie jak opisano wyżej.
2. Otworzy się panel zadań **Ustawienia płaszczyzny roboczej**. Więcej informacji można znaleźć w sekcji [Opcje](#Opcje).
3. Naciśnij dowolny przycisk, aby zakończyć polecenie.
4. Płaszczyzna robocza i ikona [tacki narzędziowej](/Draft_Tray/pl "Draft Tray/pl") zostaną zaktualizowane.

## Opcje

* Naciśnij przycisk ![](/images/View-top.svg) Góra (XY), aby wyrównać płaszczyznę roboczą z płaszczyzną XY globalnego układu współrzędnych.
* Naciśnij przycisk ![](/images/View-front.svg) Przód (XZ), aby wyrównać płaszczyznę roboczą z płaszczyzną XZ globalnego układu współrzędnych.
* Naciśnij przycisk ![](/images/View-right.svg) Bok (YZ), aby wyrównać płaszczyznę roboczą z płaszczyzną YZ globalnego układu współrzędnych.
* Naciśnij przycisk ![](/images/View-isometric.svg) Wyrównaj do widoku, aby wyrównać płaszczyznę roboczą z bieżącym [widokiem 3D](/3D_view/pl "3D view/pl"). Jeśli pole wyboru **Wyśrodkuj płaszczyznę na widoku** nie jest zaznaczone, początek płaszczyzny roboczej będzie odpowiadał początkowi globalnego układu współrzędnych, w przeciwnym razie będzie odpowiadał środkowi bieżącego [widoku 3D](/3D_view/pl "3D view/pl").
* Naciśnij przycisk ![](/images/View-axonometric.svg) Automatycznie, aby ustawić płaszczyznę roboczą **Automatycznie**. Płaszczyzna robocza ustawiona na **Automatycznie**, automatycznie zostanie wyrównana do bieżącego [widoku 3D](/3D_view/pl "3D view/pl") za każdym razem, gdy uruchomione zostanie polecenie środowisko Rysunek Roboczy lub [BIM](/BIM_Workbench/pl "BIM Workbench/pl") wymagające wprowadzenia punktu. Jest to odpowiednik naciśnięcia przycisku ![](/images/View-isometric.svg) Wyrównaj do widoku przed użyciem polecenia. Dodatkowo płaszczyzna robocza zostanie wyrównana do płaskich powierzchni, które zostały wybrane przed uruchomieniem polecenia lub gdy punkty na płaskich powierzchniach zostaną wybrane podczas polecenia.
* Polecenie **Odsunięcie** definiuje prostopadłą odległość między obliczoną płaszczyzną a rzeczywistą płaszczyzną roboczą.
* Zaznacz pole wyboru **Wyśrodkuj płaszczyznę na widoku**, aby umieścić początek płaszczyzny roboczej w środku bieżącego [widoku 3D](/3D_view/pl "3D view/pl"). Opcja ta może być przydatna w połączeniu z przyciskiem ![](/images/View-isometric.svg) Wyrównaj do widoku.
* Wybierz wierzchołek w oknie [widoku 3D](/3D_view/pl "3D view/pl") i naciśnij przycisk ![](/images/Draft_Move.svg) Przesuń płaszczyznę roboczą, aby przesunąć płaszczyznę roboczą tak, aby jej punkt odniesienia położenia odpowiadał pozycji wybranego wierzchołka.
* Parametr **Grid color** pozwala na szybką zmianę koloru siatki. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* Parametr **Odstęp siatki** definiuje odległość między liniami siatki.
* Wartość **Główna linia co** określa miejsce rysowania głównych linii siatki. Główne linie siatki są nieco grubsze niż zwykłe linie siatki. Na przykład, jeśli odstęp między liniami siatki wynosi `0.5 m`, a główna linia występuje co `10 linii`, taka linia będzie występować co `5 m`.
* Wartość **Rozmiar siatki** określa liczbę linii siatki w kierunku X i Y siatki.
* **Promień przyciągania** to maksymalna odległość, w jakiej funkcja [Przyciągnij do siatki](/Draft_Snap_Grid/pl "Draft Snap Grid/pl") wykrywa przecięcia linii siatki.
* Naciśnij przycisk ![](/images/View-fullscreen.svg) Wyśrodkuj widok, aby wyrównać [widok 3D](/3D_view/pl "3D view/pl") z bieżącą płaszczyzną roboczą.
* Naciśnij przycisk ![](/images/Sel-back.svg) Poprzedni, aby zresetować płaszczyznę roboczą do poprzedniej pozycji.
* Naciśnij przycisk ![](/images/Sel-forward.svg) Następny, aby zresetować płaszczyznę roboczą do następnej pozycji. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* Naciśnij Esc lub przycisk Zamknij, aby przerwać wykonywanie polecenia.

## Uwagi

* Przydatne może być wyrównanie [widoku 3D](/3D_view/pl "3D view/pl") z wybraną płaszczyzną roboczą. Na przykład po przełączeniu płaszczyzny roboczej na Przód możesz chcieć przełączyć się również na widok [z przodu](/Std_ViewFront/pl "Std ViewFront/pl").
* Siatkę można przełączać za pomocą polecenia [Przełącz widoczność siatki](/Draft_ToggleGrid/pl "Draft ToggleGrid/pl").
* Klikając dwukrotnie narzędzie [Pośrednia płaszczyzna robocza](/Draft_WorkingPlaneProxy/pl "Draft WorkingPlaneProxy/pl") w [Widoku drzewa](/Tree_view/pl "Tree view/pl") można szybko przełączać się między płaszczyznami roboczymi.

## Ustawienia

Zobacz także strony: [Edytor ustawień](/Preferences_Editor/pl "Preferences Editor/pl") oraz [Rysunek Roboczy: Ustawienia](/Draft_Preferences/pl "Draft Preferences/pl").

* Ustawienia siatki w panelu zadań, a także kilka innych ustawień siatki są dostępne jako preferencje: **Edycja → Preferencje ... → Rysunek Roboczy → Siatka i przyciąganie**.
* Promień przyciągania można również zmienić w locie *(patrz [ustawienia przyciągania](/Draft_Snap/pl#Ustawienia "Draft Snap/pl"))* lub poprzez modyfikację parametru: **Narzędzia → Edytuj parametry ... → BaseApp → Preferencje → Mod → Draft → snapRange**.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"):

Moduł PłaszczyznaRobocza oferuje dwie klasy do tworzenia obiektów płaszczyzny roboczej: klasę `PlaneBase` i klasę `PlaneGui`. Druga klasa dziedziczy z pierwszej. Obiekty klasy `PlaneGui` współdziałają z GUI *(przycisk [Tacka narzędziowa](/Draft_Tray/pl "Draft Tray/pl"))*, [widok 3D](/3D_view/pl "3D view/pl") i [siatka](/Draft_Snap_Grid/pl "Draft Snap Grid/pl"). Obiekty `PlaneBase` nie.

Użyj metody `get_working_plane()` modułu PłaszczyznaRobocza, aby uzyskać instancję klasy `PlaneGui` powiązaną z bieżącym widokiem 3D. Metoda zwraca istniejącą płaszczyznę roboczą powiązaną z widokiem lub tworzy nową płaszczyznę roboczą, jeśli jest to wymagane.

```
import FreeCAD as App
import WorkingPlane

wp = WorkingPlane.get_working_plane()

origin = App.Vector(0, 0, 0)
normal = App.Vector(1, 1, 1).normalize()
offset = 17
wp.align_to_point_and_axis(origin, normal, offset)

point = App.Vector(10, 15, 2)
projection = wp.project_point(point)
print(projection)

```

Klasa `PlaneBase` może być używana do tworzenia płaszczyzn roboczych niezależnie od GUI:

```
import WorkingPlane

wp = WorkingPlane.PlaneBase()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_SelectPlane/pl&oldid=1513661>"