---
title: Projekt Części Ustawienia
---
## Wprowadzenie

Środowiska pracy ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl") oraz ![](/images/Workbench_PartDesign.svg) [Projekt części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") używają tych samych preferencji. Można je znaleźć w [Edytorze preferencji](/Preferences_Editor/pl "Preferences Editor/pl"). W menu wybierz **Edycja → Preferencje...** a następnie **![](/images/Preferences-part_design.svg) Część/Projekt Części**. Ta grupa jest widoczna tylko gdy jedno z tych środowisk pracy zostało załadowane w bieżącej sesji programu FreeCAD.

Niektóre zaawansowane preferencje mogą być zmienione tylko w [Edytorze parametrów](/Std_DlgParameter/pl "Std DlgParameter/pl"). Zobacz stronę [Dostrajanie parametrów](/Fine-tuning/pl#środowisko_pracy_Projekt_Części "Fine-tuning/pl").

Ta strona została zaktualizowana do wersji 1.0.

## Dostępne ustawienia

Dostępne są trzy strony: [Ogólne](#Ogólne), [Widok kształtu](#Widok_kształtu) i [Wygląd kształtu](#Wygląd_kształtu).

### Ogólne

![](/images/Preferences_PartDesign_Page_General.png)

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Automatycznie sprawdź model po zakończeniu operacji logicznej** | Jeśli opcja jest zaznaczona, [reprezentacja granicy](https://en.wikipedia.org/wiki/Boundary_representation) *(BRep)* modelu jest [weryfikowana](/Part_CheckGeometry/pl "Part CheckGeometry/pl") po [operacjach logicznych](/Part_Boolean/pl "Part Boolean/pl"). |
| **Automatycznie udoskonal model po wykonaniu operacji logicznej.** | Jeśli opcja jest zaznaczona, model zostanie [udoskonalony](/Part_RefineShape/pl "Part RefineShape/pl") po zakończeniu [operacji logicznej](/Part_Boolean/pl "Part Boolean/pl"). |
| **Automatycznie udoskonal model po wykonaniu operacji opartej na szkicu.** | Jeśli opcja jest zaznaczona, model zostanie [udoskonalony](/Part_RefineShape/pl "Part RefineShape/pl") po wprowadzeniu zmian do źródłowych szkiców obiektów. |
| **Zezwalaj domyślnie na wiele brył w środowisku Projekt Części (eksperymentalne)** | Jeśli zaznaczone, obiekty Zawartość mogą mieć wiele oddzielnych brył. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") |

### Widok kształtu

![](/images/Preferences_PartDesign_Page_Shape_view.png)

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Maksymalne dopuszczalne odchylenie w zależności od ramki otaczającej** | Maksymalne [odchylenie liniowe](https://www.opencascade.com/doc/occt-7.3.0/overview/html/occt_user_guides__modeling_algos.html#occt_modalg_11_2) [teselowanych](#Tesselacja) obiektów od ich powierzchni. |
| **Maksymalne odchylenie kątowe** | Maksymalne [odchylenie kątowe](https://www.opencascade.com/doc/occt-7.3.0/overview/html/occt_user_guides__modeling_algos.html#occt_modalg_11_2) od jednej sekcji [teselowanego](#Tesselacja) obiektu do następnej sekcji. |

### Wygląd kształtu

![](/images/Preferences_PartDesign_Page_Shape_appearance.png)

Wyjaśnienie kolorów można znaleźć [tutaj](/Part_ColorPerFace/pl#Użycie "Part ColorPerFace/pl").

Na tej stronie można określić następujące parametry:

| Nazwa | Opis |
| --- | --- |
| **Kolor kształtu** | Kolor rozproszony dla nowych kształtów. Jeśli ustawiona jest opcja **Losowo**, używany jest przypadkowy kolor zamiast tego. |
| **Kolor kształtu otoczenia** | Kolor otoczenia dla nowych kształtów. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") |
| **Kolor emisji kształtu** | Kolor emisji dla nowych kształtów. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") |
| **Kolor odbicia kształtu** | Kolor odbicia dla nowych kształtów. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") |
| **Przezroczystość kształtu** | Przezroczystość dla nowych kształtów [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"). |
| **Połysk kształtu** | Połysk dla nowych kształtów. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") |
| **Kolor linii** | Barwa linii dla nowych kształtów. |
| **Szerokość linii** | Grubość linii dla nowych kształtów. |
| **Kolor wierzchołka** | Barwa nadawana nowym [wierzchołkom](/Glossary/pl#V "Glossary/pl"). |
| **Rozmiar wierzchołka** | Rozmiar nadawany nowym [wierzchołkom](/Glossary/pl#V "Glossary/pl"). |
| **Kolor ramki otaczającej** | Barwa [ramki otaczającej](/Property_editor/pl#Widok "Property editor/pl") w oknie widoku 3D. |
| **Rozmiar czcionki ramki otaczającej** | Rozmiar czcionki [ramek otaczających](/Property_editor/pl#Widok "Property editor/pl") w widoku 3D. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl") |
| **Rendering dwustronny** | IJeśli opcja jest zaznaczona, barwa wewnętrznej strony powierzchni będzie taka sama jak zewnętrznej. Jeśli nie jest zaznaczona, będzie używany [kolor podświetlenia](/Preferences_Editor/pl#Widok_3D "Preferences Editor/pl"), jeśli jest włączony, lub będzie używany kolor czarny. |
| **Kolor tekstu** | Kolor tekstu dla nowych adnotacji w dokumentach. Obecnie te adnotacje można dodać tylko przy pomocy [konsoli Pythona](/Python_console/pl "Python console/pl"):  `obj = App.ActiveDocument.addObject("App::Annotation", "Label")` |

## Teselacja

W celu efektywnego wyświetlania obiektu jego powierzchnia jest [teselowana](https://pl.wikipedia.org/wiki/Teselacja), tzn. jest wyświetlana z pewnymi niewielkimi odchyleniami od jego rzeczywistej powierzchni. Dotyczy to nie tylko modeli środowiska Projekt Części, ale także innych obiektów w programie FreeCAD.

Dolna granica teselacji wynosi 0,01%. Jeśli naprawdę chcesz poświęcić dodatkowy czas, możesz jeszcze bardziej zmniejszyć dolną granicę, otwierając [Edytor parametrów](/Std_DlgParameter/pl "Std DlgParameter/pl").

W edytorze parametrów przejdź do **BaseApp → Preferences → Mod → Part**, kliknij prawym przyciskiem myszy na pozycji **Mesh deviation** i wybierz z menu kontekstowego **Zmień wartość elementu**. Ustaw wartość na wybraną minimalną teselację. Należy pamiętać, że wartość podawana jest w %, tzn. dla wartości 0,005% należy wpisać "0,00005". Najmniejsza możliwa wartość to 1e-7. Zauważ, że w [Edytorze preferencji](/Preferences_Editor/pl "Preferences Editor/pl") nadal będzie widoczna wartość 0,01%, nawet jeśli ustawiłeś niższą wartość.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Preferences/pl&oldid=1521336>"