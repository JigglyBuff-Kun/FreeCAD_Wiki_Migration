---
title: Projekt Części Zaokrąglenie
---
|  |
| --- |
| Projekt Części: Zaokrąglenie |
| Lokalizacja w menu |
| Projekt Części → Zastosuj funkcję ulepszenia → Zaokrąglenie |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Sfazowanie](/PartDesign_Chamfer/pl "PartDesign Chamfer/pl") |
|  |

## Opis

Narzędzie ![](/images/PartDesign_Fillet.svg) **Zaokrąglenie** tworzy zaokrąglenia na wybranych krawędziach obiektu. Dodaje on do dokumentu obiekt **Zaokrąglenie** wraz z jego reprezentacją w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl").

## Użycie

### Dodanie zaokrąglenia

1. Opcjonalnie [zaznacz](/PartDesign_Body/pl#Aktywny_status "PartDesign Body/pl") bryłę do zaokrąglenia.
2. Istnieje kilka sposobów wyboru krawędzi do zaokrąglenia:
   * Wybierz jedną lub więcej krawędzi bryły indywidualnie.
   * Wybierz jedną lub więcej ścian bryły, aby wybrać wszystkie ich krawędzie.
   * Wybierz element (zwykle ostatni) bryły, aby wybrać wszystkie jej krawędzie.
3. W przypadku łańcucha stycznie połączonych krawędzi należy wybrać tylko jedną krawędź, zaokrąglenie będzie rozchodzić się wzdłuż łańcucha.
4. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/PartDesign_Fillet.svg) **Zaokrąglenie**.
   * Wybierz z nemu opcję **Projekt Części → Zastosuj funkcję ulepszenia → ![](/images/PartDesign_Fillet.svg) Zaokrąglenie**.
5. Jeśli nie ma aktywnej Zawartości, a w dokumencie znajdują się dwie lub więcej, otworzy się okno dialogowe **Wymagana jest aktywna zawartość** z monitem o aktywację jednej z nich. Jeśli w dokumencie znajduje się tylko jedna Zawartość, zostanie ona aktywowana automatycznie.
6. Otworzy się [Panel zadań](/Task_panel/pl "Task panel/pl") **Parametry zaokrąglenia**. Więcej informacji można znaleźć w akapicie [Opcje](#Opcje).
7. Naciśnij przycisk OK, aby zakończyć.

### Edycja zaokrąglenia

1. Wykonaj jedną z poniższych czynności:
   * Kliknij dwukrotnie obiekt Szkic w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl").
   * Kliknij obiekt Szkic prawym przyciskiem myszy w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl") i wybierz **Edycja funkcji zaokrąglenia** z menu podręcznego.
2. Otworzy się [Panel zadań](/Task_panel/pl "Task panel/pl") **Parametry zaokrąglenia**. Więcej informacji można znaleźć w punkcie [Opcje](#Opcje).
3. Naciśnij przycisk OK, aby zakończyć.

## Opcje

* Aby dodać krawędzie, wykonaj jedną z poniższych czynności:
  + Naciśnij przycisk Dodaj, aby rozpocząć zaznaczanie krawędzi i / lub ścian w oknie [Widoku 3D](/3D_view/pl "3D view/pl").
  + Aby zaznaczyć wszystkie pozostałe krawędzie, wykonaj następujące czynności:
    1. W razie potrzeby naciśnij przycisk Dodaj.
    2. Użyj skrótu klawiaturowego Ctrl + Shift + A lub kliknij listę prawym przyciskiem myszy i wybierz **Dodaj wszystkie krawędzie** z menu podręcznego.
* Aby usunąć krawędzie, wykonaj jedną z następujących czynności:
  + Naciśnij przycisk Usuń, aby rozpocząć odznaczanie krawędzi i / lub ścian w oknie [Widoku 3D](/3D_view/pl "3D view/pl"). Wybrane elementy są podświetlone na fioletowo.
  + Zaznacz jeden lub więcej elementów na liście i naciśnij klawisz Del lub kliknij listę prawym przyciskiem myszki i wybierz **Usuń** z menu podręcznego.
* Wyznacz **Promień** zaokrąglenia.
* Zaznacz pole wyboru **Użyj wszystkich krawędzi**, aby wybrać wszystkie krawędzie poprzedniego elementu. Spowoduje to dezaktywację listy wyboru i powiązanych przycisków.

## Uwagi

* Zaokrąglenia środowiska pracy Projekt Części nie należy mylić z [Zaokrągleniem](/Part_Fillet/pl "Part Fillet/pl") środowiska Część. Jeśli nie wiesz, co robisz [Część: Zaokrąglenie](/Part_Fillet/pl "Part Fillet/pl") nie powinno być używane na Zawartości środowiska Projekt Części. Zobacz stronę [Część i Projekt Części](/Part_and_PartDesign/pl "Part and PartDesign/pl").
* Zaokrąglenia nie mogą całkowicie wchłonąć sąsiednich ścian.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Zaokrąglenie środowiska Projekt Części wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Podstawowe

* DANE**Baza** (`LinkSub`): Powiązanie z wybranymi krawędziami i ścianami elementu nadrzędnego. Może być linkiem tylko do elementu nadrzędnego, jeśli parametr DANE**Użyj wszystkich krawędzi** ma wartość `PRAWDA`.
* DANE**Wsparcie przekształcenia** (`Bool`): Jeśli wartość jest ustawiona na `PRAWDA` zostanie użyty zaokrąglony kształt addytywnego / subtraktywnego elementu nadrzędnego, gdy obiekt zaokrąglenia zostanie włączony do [szyku](/PartDesign_Workbench/pl#Narzędzia_do_przekształcania "PartDesign Workbench/pl"), w przeciwnym razie zostanie użyty tylko kształt samego zaokrąglenia. Domyślną wartością jest `FAŁSZ`.
* DANE (ukryty)**Dodaj kształt podrzędny** (`PartShape`).
* DANE (ukryty)**Cecha podstawowa** (`Link`): Odnośnik do elementu nadrzędnego.
* DANE (ukryty)**\_ Body** (`LinkHidden`): Link do elementu nadrzędnego.

Zaokrąglenie

* DANE**Promień** (`QuantityConstraint`): Promień zaokrąglenia. Domyślnie `1 mm`.
* DANE**Użyj wszystkich krawędzi** (`Bool`): Jeśli wartość to `PRAWDA` wszystkie krawędzie elementu są zaokrąglane, a krawędzie określone przez DANE**Bazę** są ignorowane. Domyślną wartością jest `FAŁSZ`.

Projekt Części

* DANE**Ulepsz** (`Bool`): Jeśli ma wartość `PRAWDA`, nadmiarowe krawędzie są usuwane z wyniku operacji. Wartość domyślna jest określona przez preferencję **Automatycznie udoskonal model po wykonaniu operacji opartej na szkicu**. Zobacz stronę [Projekt Części: Ustawienia](/PartDesign_Preferences/pl#Ogólne "PartDesign Preferences/pl").

## Znane problemy

Zaokrąglenia, fazowania i inne funkcje działające na bryłach zależą od jądra Technologii [OpenCASCADE](/OpenCASCADE/pl "OpenCASCADE/pl") *(OCCT)*, z której korzysta FreeCAD. Jądro OCCT czasami ma trudności z obsługą zbieżnych ostrych krawędzi, gdzie spotykają się dwie ściany. W takim przypadku FreeCAD może ulec awarii bez wyjaśnienia.

W przypadku uruchomienia z terminala, FreeCAD może wyświetlić taki dziennik po awarii:

```
#1  0x7fff63d660ba in BRep_Tool::Curve(TopoDS_Edge const&, TopLoc_Location&, double&, double&) from /usr/lib/x86_64-linux-gnu/libTKBRep.so.7+0x2a
#2  0x7fff63d69546 in BRep_Tool::Curve(TopoDS_Edge const&, double&, double&) from /usr/lib/x86_64-linux-gnu/libTKBRep.so.7+0x46
#3  0x7fff71f4fef5 in ChFi3d_Builder::PerformIntersectionAtEnd(int) from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0x3b05
#4  0x7fff71f58307 in ChFi3d_Builder::PerformOneCorner(int, bool) from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0x1097
#5  0x7fff71ef6218 in ChFi3d_Builder::PerformFilletOnVertex(int) from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0x4e8
#6  0x7fff71ef71d1 in ChFi3d_Builder::Compute() from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0xe31
#7  0x7fff720ad7c3 in BRepFilletAPI_MakeChamfer::Build() from /usr/lib/x86_64-linux-gnu/libTKFillet.so.7+0x33
#8  0x7fff723be48e in PartDesign::Chamfer::execute() from /usr/lib/freecad-daily/lib/_PartDesign.so+0x60e
...

```

Dane wyjściowe odwołują się do funkcji z bibliotek OCCT. Jeśli wystąpi tego typu awaria, problem może wymagać zgłoszenia i rozwiązania w OCCT, a nie w FreeCAD.

Więcej informacji można znaleźć w wątkach na forum:

* [Błąd Fazowanie większe niż 2 mm rozbija FreeCAD](https://forum.freecadweb.org/viewtopic.php?p=263818#p263818)
* [Błąd podczas korzystania z zaokrąglenia środowiska Projekt Części](https://forum.freecadweb.org/viewtopic.php?p=264827#p264827).

### Nazewnictwo topologiczne

Numery krawędzi nie są całkowicie stabilne, dlatego zaleca się zakończenie głównych prac projektowych bryły przed zastosowaniem funkcji takich jak zaokrąglenia i fazowania, w przeciwnym razie krawędzie mogą zmienić nazwy, a zaokrąglone krawędzie prawdopodobnie staną się nieprawidłowe. Gdy właściwość DANE**Użyj wszystkich krawędzi** ma wartość `PRAWDA`, istnieje pewna ochrona przed taką sytuacją. Ponieważ w takich przypadkach używane są wszystkie krawędzie obiektu bazowego i nie ma zależności od indywidualnych nazw krawędzi.

Przeczytaj więcej na stronie [problem nazewnictwa topologicznego](/Topological_naming_problem/pl "Topological naming problem/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Fillet/pl&oldid=1515658>"