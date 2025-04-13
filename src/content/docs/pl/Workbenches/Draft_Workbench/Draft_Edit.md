---
title: Rysunek Roboczy Edycja
---
|  |
| --- |
| Rysunek Roboczy: Edytuj |
| Lokalizacja w menu |
| Modyfikacja → Edytuj |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") |
| Domyślny skrót |
| D E |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Edytuj](/Std_Edit/pl "Std Edit/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_Edit.svg) **Edycja** przełącza wybrane obiekty w tryb Edycji. W tym trybie właściwości obiektów mogą być edytowane graficznie. Zazwyczaj mogą być przesuwane węzły, a w niektórych przypadkach można wybrać opcje menu kontekstowego. Polecenie może obsługiwać większość obiektów środowiska Rysunek Roboczy, ale także niektóre inne obiekty. Zobacz sekcję [Obsługiwane obiekty](#Obsługiwane_obiekty). Obsługiwane obiekty szkicu można również umieścić w trybie edycji za pomocą polecenia [Std: Edycja](/Std_Edit/pl "Std Edit/pl").

![](/images/Draft_Edit_example.png)

Cztery obiekty w trybie edycji środowiska Rysunek Roboczy: polilinia *(czerwony)*, łuk *(czarny)*, krzywa złożona *(zielony)* i krzywa Bézier'a *(magenta)*.

## Użycie

Zobacz także strony: [Rysunek Roboczy: Przyciąganie](/Draft_Snap/pl "Draft Snap/pl") i [Rysunek Roboczy: Wiązania](/Draft_Constrain/pl "Draft Constrain/pl").

1. Opcjonalnie wybierz jeden lub więcej obiektów. Należy pamiętać, że chociaż wiele obiektów może znajdować się w trybie edycji wersji roboczej, obiekty mogą być edytowane tylko pojedynczo.
2. Polecenie można wywołać na kilka sposobów:
   * Jeśli obiekt nie został jeszcze wybrany: kliknij dwukrotnie obiekt w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl"). Działa to tylko w przypadku obsługiwanych obiektów Draft.
   * Naciśnij przycisk z menu ![](/images/Draft_Edit.svg) Edytuj.
   * Wybierz z menu opcję **Modyfikacja → ![](/images/Draft_Edit.svg) Edytuj**.
   * Użyj skrótu klawiaturowego: D, a następnie E.
   * Dla pojedynczego obiektu: wybierz opcję **Edytuj** z menu podręcznego [widoku drzewa](/Tree_view/pl "Tree view/pl"). Działa to tylko dla obsługiwanych obiektów środowiska Rysunek Roboczy. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
3. Jeśli obiekt nie został jeszcze wybrany: wybierz obiekt w oknie [widoku 3D](/3D_view/pl "3D view/pl").
4. Wybrane obiekty zostaną oznaczone tymczasowymi węzłami i otworzy się [Główny panel zadań](#Główny_panel_zadań). Więcej informacji znajduje się w sekcji [Opcje](#Opcje).
5. Opcjonalnie można użyć menu podręcznego węzła lub krawędzi. Te menu podręczne są dostępne tylko dla niektórych obiektów Draft. Więcej informacji znajduje się w sekcji [obsługiwane obiekty](#obsługiwane_obiekty).
   * Wykonaj jedną z następujących czynności:
     + Dotyczy wszystkich systemów operacyjnych: przytrzymaj E i kliknij węzeł lub krawędź. Aby użyć klawisza E może być konieczne jednokrotne kliknięcie w obszarze okna [widoku 3D](/3D_view "3D view"), aby upewnić się, że jest ono aktywne.
     + W systemie Windows: przytrzymaj Alt i kliknij węzeł lub krawędź.
     + W systemie Linux: przytrzymaj Shift+Alt, Ctrl+Alt lub Alt i kliknij węzeł lub krawędź.
     + Na macOS: przytrzymaj Option i kliknij węzeł lub krawędź.
   * Wybierz opcję z menu kontekstowego.
   * Jeśli wybrana opcja wymaga wprowadzenia punktu:
     + Otworzy się panel zadań [edycji węzła](#Panel_zadań_edycji_węzła). Więcej informacji znajduje się w sekcji [Opcje](#Opcje).
     + Wybierz punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.
6. Opcjonalnie przenieś węzeł:
   * Kliknij węzeł w oknie [widoku 3D](/3D_view/pl "3D view/pl").
   * Otworzy się panel zadań [edycji węzła](#Panel_zadań_edycji_węzła). Więcej informacji znajduje się w sekcji [Opcje](#Opcje).
   * Wybierz punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub wpisz współrzędne i naciśnij przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt.
   * Wynik zależy od obiektu i wybranego węzła.
7. Naciśnij Esc lub przycisk Zamknij (przycisk na górze panelu zadań, bez obrazka), aby zakończyć polecenie.

## Opcje

Skróty klawiaturowe jedno znakowe dostępne w panelu zadań można zmienić. Zobacz stronę [Preferencji](/Draft_Preferences/pl "Draft Preferences/pl"). Skróty wymienione tutaj są skrótami domyślnymi.

### Pierwszy panel zadań

* Naciśnij przycisk Esc lub przycisk Zamknij aby zakończyć wykonywanie polecenia.

### Panel zadań edycji węzła

* Aby ręcznie wprowadzić współrzędne, wprowadź element X, Y i Z i naciśnij Enter po każdym z nich. Możesz też nacisnąć przycisk ![](/images/Draft_AddPoint.svg) Wprowadź punkt, gdy uzyskasz żądane wartości. Zaleca się przesunięcie kursora poza obszar okna [widoku 3D](/3D_view/pl "3D view/pl") przed wprowadzeniem współrzędnych.
* Aby użyć współrzędnych biegunowych, wprowadź wartość dla **Długości** i wartość dla **Kąta**, a następnie naciśnij Enter po każdej z nich.
* Zaznacz pole wyboru **Kąt**, aby ograniczyć kursor do określonego kąta.
* Naciśnij R lub kliknij pole wyboru **Względnie**, aby przełączyć tryb względny. Jeśli tryb względny jest włączony, współrzędne wybranego punktu są względne do oryginalnego punktu, w przeciwnym razie są one odnoszone do początku układu współrzędnych. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* Naciśnij G lub kliknij pole wyboru **Globalnie**, aby przełączyć tryb globalny. Jeśli tryb globalny jest włączony, współrzędne odnoszą się do globalnego układu współrzędnych, w przeciwnym razie odnoszą się do układu współrzędnych [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl").
* Naciśnij S, aby włączyć lub wyłączyć [przyciąganie](/Draft_Snap/pl "Draft Snap/pl").

## Obsługiwane obiekty

### [Linia](/Draft_Line/pl "Draft Line/pl") oraz [Polilinia](/Draft_Wire/pl "Draft Wire/pl")

* Jeśli węzeł początkowy lub końcowy otwartej linii zostanie przesunięty tak, aby zbiegł się, linia zostanie zamknięta.
* Menu kontekstowe węzła: `Usuń punkt`. Muszą pozostać co najmniej dwa punkty.
* Menu kontekstowe krawędzi: `Dodaj punkt`, `Otwórz polilinię`/`Zamknij polilinię` *([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"))* i `Odwróć polilinię`.

### [Łuk](/Draft_Arc/pl "Draft Arc/pl") oraz [Łuk przez trzy punkty](/Draft_Arc_3Points/pl "Draft Arc 3Points/pl")

* Menu kontekstowe węzła środkowego: `Przesuń łuk`.
* Menu kontekstowe węzła początkowego: `Ustaw pierwszy kąt`.
* Menu kontekstowe węzła końcowego: `Ustaw ostatni kąt`.
* Menu kontekstowe węzła pośredniego: `Ustaw promień`.
* Menu kontekstowe krawędzi: `Odwróć łuk`.

### [Okrąg](/Draft_Circle/pl "Draft Circle/pl")

* Brak menu kontekstowego dla tego obiektu.

### [Elipsa](/Draft_Ellipse/pl "Draft Ellipse/pl")

* Brak menu kontekstowego dla tego obiektu.

### [Prostokąt](/Draft_Rectangle/pl "Draft Rectangle/pl")

* Brak menu kontekstowego dla tego obiektu.

### [Wielokąt](/Draft_Polygon/pl "Draft Polygon/pl")

* Brak menu kontekstowego dla tego obiektu.

### [Krzywa złożona](/Draft_BSpline/pl "Draft BSpline/pl")

* Jeśli węzeł początkowy lub końcowy otwartej krzywej zostanie przesunięty tak, aby się pokrywały, krzywizna zostanie zamknięta.
* Menu kontekstowe węzła: `Usuń punkt`. W przypadku otwartej krzywej muszą pozostać co najmniej dwa punkty. W przypadku zamkniętej minimalna liczba punktów wynosi trzy.
* Menu kontekstowe krawędzi: `Dodaj punkt`, `Otwórz polilinię`/`Zamknij polilinię` *([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"))* i `Odwróć krzywą złożoną` *([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"))*.

### [Sześcienna krzywa Béziera](/Draft_CubicBezCurve/pl "Draft CubicBezCurve/pl") oraz [Krzywa Bézier'a](/Draft_BezCurve/pl "Draft BezCurve/pl")

* Jeśli węzeł początkowy lub końcowy otwartej krzywej zostanie przesunięty tak, aby się pokrywały, krzywa zostanie zamknięta.
* Menu kontekstowe węzła: `Usuń punkt`, `Ustaw ostro`, `Ustaw stycznie` i `Ustaw symetrycznie`.
* Menu kontekstowe krawędzi: `Dodaj punkt`, `Otwórz polilinię`/`Zamknij polilinię` *([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"))* i `Odwróć krzywą` *([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"))*.

### [Wymiar](/Draft_Dimension/pl "Draft Dimension/pl")

* Nie można edytować wymiarów kątowych.
* Nie można przenosić węzłów początkowych i końcowych wymiarów parametrycznych.
* Brak menu kontekstowego dla tego obiektu.

### [Architektura: ściana](/Arch_Wall/pl "Arch Wall/pl")

* Pojedynczy węzeł kontrolujący wysokość ściany jest wyświetlany nad DANE**Umiejscowieniem** ściany.
* Brak menu kontekstowego dla tego obiektu.

### [Architektura: Konstrukcja](/Arch_Structure/pl "Arch Structure/pl")

* Brak menu kontekstowego dla tego obiektu.

### [Architektura: Okno](/Arch_Window/pl "Arch Window/pl")

* Brak menu kontekstowego dla tego obiektu.

### [Architektura: Przestrzeń](/Arch_Space/pl "Arch Space/pl")

* Brak menu kontekstowego dla tego obiektu.

### [Architektura: Panelizacja do cięcia](/Arch_Space/pl "Arch Space/pl")

* Brak menu kontekstowego dla tego obiektu.

### [Architektura: Arkusz panela](/Arch_Panel_Sheet/pl "Arch Panel Sheet/pl")

* Brak menu kontekstowego dla tego obiektu.

### [Część: Sześcian](/Part_Box/pl "Part Box/pl")

* Brak menu kontekstowego dla tego obiektu.

### [Część: Walec](/Part_Cylinder/pl "Part Cylinder/pl")

* Brak menu kontekstowego dla tego obiektu.

### [Część: Sfera](/Part_Sphere/pl "Part Sphere/pl")

* Brak menu kontekstowego dla tego obiektu.

### [Część: Stożek](/Part_Cone/pl "Part Cone/pl")

* Brak menu kontekstowego dla tego obiektu.

### [Część: Linia](/Part_Line/pl "Part Line/pl")

* Brak menu kontekstowego dla tego obiektu.

### [Szkicownik: Szkic](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl")

* Można edytować tylko szkice zawierające pojedynczą, nieograniczoną linię.
* Brak menu kontekstowego dla tego obiektu.

## Ustawienia

Zobacz także strony: [Edytor ustawień](/Preferences_Editor/pl "Preferences Editor/pl") oraz [Rysunek Roboczy: Ustawienia](/Draft_Preferences/pl "Draft Preferences/pl").

* Kolor tymczasowych węzłów jest taki sam jak kolor symboli przyciągania. Kolor ten można zmienić w preferencjach: **Edycja → Preferencje ... → Rysunek Roboczy → Siatka i przyciąganie → Kolor domyślny dla symboli przyciągania**. Należy pamiętać, że ten kolor nie jest używany dla tymczasowych węzłów wyświetlanych dla [Krzywa Bézier'a](/Draft_BezCurve/pl "Draft BezCurve/pl"). Te węzły używają zamiast tego właściwości WIDOK**Kolor linii** dla krzywej.
* Rozmiar węzłów zależy od opcji: **Edycja → Preferencje ... → Wyświetlanie → Widok 3D → Rozmiar znacznika**. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Nie ma metody Python do **Edycji** obiektów środowiska Rysunek Roboczy. Aby naśladować wyniki polecenia, należy zmodyfikować właściwości geometryczne obiektów.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Edit/pl&oldid=1513647>"