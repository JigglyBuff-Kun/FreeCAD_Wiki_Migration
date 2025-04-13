---
title: Metody wyboru
---
## Informacje ogólne

**Metody wyboru** w programie FreeCAD pozwalają na wybieranie obiektów w [interfejsie FreeCAD](/Interface/pl "Interface/pl"): są to [Widok 3D](/3D_view/pl "3D view/pl"), [Widok drzewa](/Tree_view/pl "Tree view/pl"), [Widok wyboru](/Selection_view/pl "Selection view/pl") i inne okna dialogowe. Niektóre metody wyboru są specyficzne dla konkretnego środowiska pracy i są udokumentowane we dokumentacji tego środowiska.

### Widok 3D

W oknie [Widoku 3D](/3D_view/pl "3D view/pl") istnieją różne sposoby wybierania obiektów.

### Zwykłe zaznaczenie

Prosty wybór za pomocą myszy *(domyślnie kliknięcie lewym przyciskiem myszy)* i wybór wstępny *(najechanie kursorem)* zostały opisane na stronie [Profil nawigacji myszką](/Mouse_navigation/pl "Mouse navigation/pl").

### Wielokrotne kliknięcia

Pierwsze kliknięcie wybiera element podrzędny *(wierzchołek, krawędź lub ścianę)* obiektu znajdującego się pod kursorem myszki. Drugie kliknięcie zaznacza cały obiekt.

Trzecie kliknięcie rozszerza wybór na obiekt kontenera *([Zawartość](/PartDesign_Body/pl "PartDesign Body/pl"), [Część](/Std_Part/pl "Std Part/pl") i innych)*. Kolejne kliknięcia rozszerzają zaznaczenie w górę łańcucha kontenerów.

### Polecenia wyboru

* Aby wybrać wszystkie obiekty: [Zaznacz wszystko](/Std_SelectAll/pl "Std SelectAll/pl")
* Aby zaznaczyć wiele głównych obiektów: [Zaznacz obszar](/Std_BoxSelection/pl "Std BoxSelection/pl").
* Aby zaznaczyć wiele ścian: [Wybór elementów ramką zaznaczenia](/Std_BoxElementSelection/pl "Std BoxElementSelection/pl") lub [Zaznacz obszarem](/Part_BoxSelection/pl "Part BoxSelection/pl").

## Widok zaznaczenia

Widok [wyboru](/Selection_view/pl "Selection view/pl") pokazuje nazwy wybranych obiektów, w tym ich pełne nazwy w obrębie obiektu, na przykład `Unnamed#Body.Box001.Face17`.

Pozwala również na wykonywanie niektórych akcji, takich jak [dopasowanie widoku do zaznaczenia](/Std_ViewFitSelection/pl "Std ViewFitSelection/pl"), i wysyłanie obiektu do [konsoli Python](/Python_console/pl "Python console/pl").

### Eksport obiektu

*To powinno znajdować się na stronie [Widok wyboru](/Selection_view/pl "Selection view/pl").*

Wybierz dowolny złożony obiekt, na przykład [Zawartość](/PartDesign_Body/pl "PartDesign Body/pl") środowiska Projekt Części lub [Część](/Std_Part/pl "Std Part/pl") środowiska Część, a następnie w [widoku wyboru](/Selection_view/pl "Selection view/pl") wybierz ponownie obiekt i naciśnij Ctrl + C na klawiaturze, aby otworzyć okno dialogowe **Wybór obiektu**. Umożliwia to skopiowanie wybranego obiektu wraz ze wszystkimi lub tylko niektórymi obiektami zależnymi od tego obiektu. Na przykład dla obiektu [Część](/Std_Part/pl "Std Part/pl") możliwe obiekty do wybrania obejmują samą [części](/Std_Part/pl "Std Part/pl"), ale także jej Odniesienie położenia, jej trzy osie bazowe *(XYZ)* i jej trzy płaszczyzny bazowe *(XY, YZ, XZ)*.

Po naciśnięciu przycisku OK wybrane obiekty są kopiowane do pamięci, a następnie mogą zostać wklejone do dokumentu w celu powielenia tylko tych obiektów.

![](/images/ObjectSelection.png)

Okno dialogowe wyboru obiektu uruchamiane z [Widok wyboru](/Selection_view/pl "Selection view/pl").

## Widok drzewa

W oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl") elementy można zaznaczać lub odznaczać pojedynczo, przytrzymując klawisz Ctrl i klikając myszką.

Zakres elementów można wybrać, klikając pierwszy element, przytrzymując Shift i klikając ostatni element.

Wybranie pojedynczego elementu spowoduje również wyświetlenie jego właściwości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

Podwójne kliknięcie spowoduje otwarcie powiązanego okna [panelu zadań](/Task_panel/pl "Task panel/pl") zawierającego akcje. Pamiętaj, aby zamknąć ten panel zadań przed wykonaniem innego polecenia lub przejściem do innego środowiska pracy.

Więcej metod jest dostępnych po otwarciu menu kontekstowego *(prawym przyciskiem myszy)*, w zależności od wybranego obiektu lub aktywnego środowiska pracy. Zobacz informacje na stronie [Widok drzewa](/Tree_view/pl "Tree view/pl").

## Tworzenie skryptów

Wybieranie obiektów jest z natury zadaniem graficznym i dlatego jest dostępne tylko wtedy, gdy załadowany jest graficzny interfejs użytkownika.

Metody te mogą być używane w [makrodefinicjach](/Macros/pl "Macros/pl") lub z [konsoli Python](/Python_console/pl "Python console/pl"):

```
import FreeCADGui as Gui

Gui.Selection.addSelection
Gui.Selection.addSelectionGate
Gui.Selection.Filter

```

Metoda `addSelectionGate` zapobiega wybieraniu przez użytkownika obiektów nieokreślonych w ciągu wyboru. Symbol ![](/images/Button_invalid.svg) pojawia się, gdy wskaźnik znajduje się nad elementem spoza określonej grupy.

```
Gui.Selection.addSelectionGate("SELECT Part::Feature SUBELEMENT Edge")

#### or
Gui.Selection.addSelectionGate("SELECT Part::Feature SUBELEMENT Face")

#### or
Gui.Selection.addSelectionGate("SELECT Part::Feature SUBELEMENT Vertex")

```

Aby usunąć `SelectionGate()`:

```
Gui.Selection.removeSelectionGate()

```

Zobacz strony [Dokumentacja dla źródeł](/Source_documentation/pl "Source documentation/pl") i [Pomoc dla środowiska Python](/Std_PythonHelp/pl "Std PythonHelp/pl"), aby uzyskać więcej informacji na temat korzystania z tych narzędzi.

Retrieved from "<http://wiki.freecad.org/index.php?title=Selection_methods/pl&oldid=1314322>"