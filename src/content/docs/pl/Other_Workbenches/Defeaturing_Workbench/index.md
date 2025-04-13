---
title: Środowisko pracy Upraszczanie
---

![](/images/Defeaturing_workbench_icon.svg)

Ikonka FreeCAD dla środowiska pracy Upraszczanie

## Wprowadzenie

![](/images/Defeaturing_workbench_icon.svg) Środowisko pracy **Upraszczanie** jest dodatkowym środowiskiem pracy przeznaczonym do edycji modeli STEP, usuwając wybrane cechy z modelu. Jest to [zewnętrzne środowiskiem pracy](/External_workbenches/pl "External workbenches/pl") i dlatego nie jest częścią standardowej instalacji FreeCAD.

## Funkcjonalność

- Zawiera zestaw narzędzi do edycji kształtu lub modelu STEP, usuwania otworów, ścian, upraszczania modelu, zmiany tolerancji, stosowania rozmytych operacji logicznych itp.
- Istnieją również narzędzia do utworzenia brył z krawędzi, ścian lub powłok.
- Możliwe jest również użycie bezpośredniego modelowania modelu, gdy historia operacji jest niedostępna _(Dotyczy to modeli 3D STEP)_.
- Przydatne w sytuacjach wymagających szybkiego usunięcia zastrzeżonych szczegółów modelu przed jego udostępnieniem. Zobacz również stronę [Usuwanie cech](/Defeaturing/pl "Defeaturing/pl").

Uwaga: Bardziej zaawansowane narzędzia do upraszczania mogą być użyte, jeśli [OCC7.3](/OpenCASCADE/pl "OpenCASCADE/pl") jest dostępne.

## Instalacja

### Automatyczna _(zalecane)_

Używając ![](/images/AddonManager.svg) [Menedżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl") FreeCAD, dostępnego w wersja 0.17 i powyżej poprzez menu **Przybory → Menedżer dodatków**. Wyszukaj ![](/images/Defeaturing_workbench_icon.svg) ikonkę środowiska pracy Upraszczanie. Menedżer dodatków powiadamia również użytkownika, gdy dostępna jest nowa wersja tego dodatku.

### Samodzielna

Zobacz również stronę [Jak zainstalować dodatkowe środowiska pracy](/How_to_install_additional_workbenches/pl "How to install additional workbenches/pl")

### Zgodność

- FreeCAD v0.15 4671
- FreeCAD v0.16 >= 6712
- FreeCAD v0.17 >= 13522
- FreeCAD v0.18+

## Bibliografia

- Autor: GitHub: [@easyw](https://github.com/easyw) | FreeCAD forum: [[1]](https://forum.freecadweb.org/viewtopic.php?f=9&t=29506)
- Kod źródłowy na GitHub: <https://github.com/easyw/Defeaturing_WB>
- Wątek na forum FreeCAD: <https://forum.freecadweb.org/viewtopic.php?t=29506>

## Narzędzia

![Okno dialogowe Upraszczanie](/images/Defeaturing_WB.png)

Okno dialogowe Upraszczanie

![](/images/Defeaturing_Tools.svg) Narzędzia do rozbrajania znajdują się na osobnym panelu.

- ![](/images/DefeatWB_Tools_rmv_hole.png) [Usuń otwory](/index.php?title=DefeatWB_Tools_rmv_hole&action=edit&redlink=1 "DefeatWB Tools rmv hole (page does not exist)"): usuń dziurę ze ściany.
- ![](/images/DefeatWB_Tools_rmv_listed_Faces.png) [Usuń ściany na liście](/index.php?title=DefeatWB_Tools_rmv_listed_Faces&action=edit&redlink=1 "DefeatWB Tools rmv listed Faces (page does not exist)"): usuń ściany z listy elementów.
- ![](/images/DefeatWB_Tools_add_Faces_listed_Edges.png) [Dodaj ściany wymienione na liście krawędzi](/index.php?title=DefeatWB_Tools_add_Faces_listed_Edges&action=edit&redlink=1 "DefeatWB Tools add Faces listed Edges (page does not exist)"): dodawanie ścian z "listy" krawędzi.
- ![](/images/DefeatWB_Tools_select_Faces_Param_Defeat.png) [Wybierz ściany, które zostaną parametrycznie uproszczone](/index.php?title=DefeatWB_Tools_select_Faces_Param_Defeat&action=edit&redlink=1 "DefeatWB Tools select Faces Param Defeat (page does not exist)"): wybierz ściany do parametrycznego usunięcia.
- ![](/images/DefeatWB_Tools_create_copy_listed_edges.png) [Utwórz kopę krawędzi z listy](/index.php?title=DefeatWB_Tools_create_copy_listed_edges&action=edit&redlink=1 "DefeatWB Tools create copy listed edges (page does not exist)"): utwórz kopię krawędzi wymienionej na liście elementów.

- ![](/images/DefeatWB_Tools_copy_Faces_listed_faces.png) [Kopiuj ścianę z listy ścian](/index.php?title=DefeatWB_Tools_copy_Faces_listed_faces&action=edit&redlink=1 "DefeatWB Tools copy Faces listed faces (page does not exist)"): kopiowanie ścian wymienionych na liście ścian.
- ![](/images/DefeatWB_Tools_offset_face.png) [Odsunięcie ściany](/index.php?title=DefeatWB_Tools_offset_face&action=edit&redlink=1 "DefeatWB Tools offset face (page does not exist)"): przesunięcie ściany.
- ![](/images/DefeatWB_Tools_offset_edge.png) [Odsunięcie krawędzi](/index.php?title=DefeatWB_Tools_offset_edge&action=edit&redlink=1 "DefeatWB Tools offset edge (page does not exist)"): przesunięcie krawędzi.

- ![](/images/DefeatWB_Tools_make_solid_listed_faces.png) [Utwórz bryłę z listy ścian](/index.php?title=DefeatWB_Tools_make_solid_listed_faces&action=edit&redlink=1 "DefeatWB Tools make solid listed faces (page does not exist)"): tworzy bryłę z listy ścian.
- ![](/images/DefeatWB_Tools_make_solid_faces_selected_objects.png) [utwórz bryłę z ścian wybranych obiektów](/index.php?title=DefeatWB_Tools_make_solid_faces_selected_objects&action=edit&redlink=1 "DefeatWB Tools make solid faces selected objects (page does not exist)"): tworzy bryłę z ścian wybranych obiektów.
- ![](/images/DefeatWB_Tools_select_one_object_2_make_solid_step_proc.png) [Utwórz bryłę z listy ścian](/index.php?title=DefeatWB_Tools_select_one_object_2_make_solid_step_proc&action=edit&redlink=1 "DefeatWB Tools select one object 2 make solid step proc (page does not exist)"): wybierz JEDEN obiekt, aby spróbować utworzyć bryłę poprzez proces importu / eksportu STEP.
- ![](/images/DefeatWB_Tools_Connect.png) [Połącz](/index.php?title=DefeatWB_Tools_Connect&action=edit&redlink=1 "DefeatWB Tools Connect (page does not exist)"): łączy obiekty
- ![](/images/DefeatWB_Tools_clean_face_rmv_holes.png) [wyczyść ściany usuwając dziury i łącząc ze sobą linie zewnętrzne](/index.php?title=DefeatWB_Tools_clean_face_rmv_holes&action=edit&redlink=1 "DefeatWB Tools clean face rmv holes (page does not exist)"): czyści ściany usuwając dziury i łącząc ze sobą linie zewnętrzne.

- ![](/images/DefeatWB_Tools_show_listed_edges.png) [Pokaż krawędzie z listy](/index.php?title=DefeatWB_Tools_show_listed_edges&action=edit&redlink=1 "DefeatWB Tools show listed edges (page does not exist)"): zaznacza krawędzie z listy.
- ![](/images/DefeatWB_Tools_show_listed_faces.png) [Pokaż ściany z listy](/index.php?title=DefeatWB_Tools_show_listed_faces&action=edit&redlink=1 "DefeatWB Tools show listed faces (page does not exist)"): zaznacza ściany z listy.
- ![](/images/DefeatWB_Tools_refine.png) [Ulepsz](/index.php?title=DefeatWB_Tools_refine&action=edit&redlink=1 "DefeatWB Tools refine (page does not exist)"): dopracuj obiekt.
- ![](/images/DefeatWB_Tools_simple_copy.png) [Prosta kopia](/index.php?title=DefeatWB_Tools_simple_copy&action=edit&redlink=1 "DefeatWB Tools simple copy (page does not exist)"): tworzy prostą kopię obiektu.
- ![](/images/DefeatWB_Tools_parametric_refine.png) [Ulepszenie parametryczne](/index.php?title=DefeatWB_Tools_parametric_refine&action=edit&redlink=1 "DefeatWB Tools parametric refine (page does not exist)"): udoskonala obiekt w oparciu o podane parametry.

- ![](/images/DefeatWB_Tools_geometry_check.png) [Sprawdź geometrię](/index.php?title=DefeatWB_Tools_geometry_check&action=edit&redlink=1 "DefeatWB Tools geometry check (page does not exist)"): przeprowadza sprawdzenie geometrii.
- ![](/images/DefeatWB_Tools_get_Tolerance_value.png). [pobierz wartość tolerancji](/index.php?title=DefeatWB_Tools_get_Tolerance_value&action=edit&redlink=1 "DefeatWB Tools get Tolerance value (page does not exist)"): Pobiera wartość tolerancji.
- ![](/images/DefeatWB_Tools_set_Tolerance_value.png). [Ustaw wartość tolerancji](/index.php?title=DefeatWB_Tools_set_Tolerance_value&action=edit&redlink=1 "DefeatWB Tools set Tolerance value (page does not exist)"): ustawia wartość tolerancji

- ![](/images/DefeatWB_Tools_make_edges_selected_vertexes.png) [Utwórz krawędź z wybranych wierzchołków](/index.php?title=DefeatWB_Tools_make_edges_selected_vertexes&action=edit&redlink=1 "DefeatWB Tools make edges selected vertexes (page does not exist)"): tworzy krawędź pa podstawie zaznaczonych wierzchołków.
- ![](/images/DefeatWB_Tools_reset_placement.png) [Zresetuj umiejscowienie](/index.php?title=DefeatWB_Tools_reset_placement&action=edit&redlink=1 "DefeatWB Tools reset placement (page does not exist)"): resetuje współrzędne umiejscowienia.
- ![](/images/DefeatWB_Tools_show_hide_typeId_shape.png) [Pokaż / ukryj identyfikator typu kształtu](/index.php?title=DefeatWB_Tools_show_hide_typeId_shape&action=edit&redlink=1 "DefeatWB Tools show hide typeId shape (page does not exist)"): Wyświetla lub ukrywa identyfikator typu kształtu.
- ![](/images/DefeatWB_Tools_help.png) [Pomoc](/index.php?title=DefeatWB_Tools_help&action=edit&redlink=1 "DefeatWB Tools help (page does not exist)"): wyświetla pomoc.

- ![](/images/DefeatWB_Tools_Fuzzy_Cut.png) [Fuzzy Cut](/index.php?title=DefeatWB_Tools_Fuzzy_Cut&action=edit&redlink=1 "DefeatWB Tools Fuzzy Cut (page does not exist)"): Rozmyte cięcie.
- ![](/images/DefeatWB_Tools_Fuzzy_Union.png) [Fuzzy Union](/index.php?title=DefeatWB_Tools_Fuzzy_Union&action=edit&redlink=1 "DefeatWB Tools Fuzzy Union (page does not exist)"): Rozmyte połączenie.
- ![](/images/DefeatWB_Tools_Fuzzy_Common.png) [Fuzzy Common](/index.php?title=DefeatWB_Tools_Fuzzy_Common&action=edit&redlink=1 "DefeatWB Tools Fuzzy Common (page does not exist)"): Rozmyta część wspólna.

## Poradniki Wideo

### Upraszczanie

Usuwanie funkcji przy użyciu nowych narzędzi OCC7.3

[![](/images/Defeaturing-WB-%40Work_v3.png](https://raw.githubusercontent.com/easyw/FreeCAD-tutorials/master/testing-files/removing-holes.mp4)

Usunięcie cech - otworów

[![](/images/Defeaturing-WB-%40Work_v1.png)](https://youtu.be/yrTtWFakAyE)

Uproszczenie modelu

[![](/images/Defeaturing-WB-%40Work_v2.png)](https://youtu.be/vgQwGI6Fk6Q)

Wielokrotny wybór ścian do operacji upraszczania

[![](/images/Defeaturing-WB-%40Work_v4.png)](https://raw.githubusercontent.com/easyw/FreeCAD-tutorials/master/testing-files/removing-fillet-chamfer.mp4)

Usunięcie zaokrągleń i sfazowań

[![](/images/Defeaturing-WB-%40Work_v5.png)](https://peertube.mastodon.host/videos/watch/c6bc5abd-2eb7-48c7-af67-c4d8e6783872)

przegląd funkcji _(w języku niemieckim)_

[![](/images//Defeaturing-WB-%40Work_v6.png)](https://raw.githubusercontent.com/easyw/FreeCAD-tutorials/master/testing-files/parametric-defeaturing.mp4)

Upraszczanie parametryczne

### Naprawa

- Szycie kształtu.
- Usuwanie lub upraszczanie ścian.
- Usuwanie otworów lub kieszeni.
- Odczyt lub zmiana tolerancji.
- Wykonywanie rozmytych operacji logicznych.

## Zewnętrzne środowiska pracy

Środowiska pracy FreeCAD są łatwe do zaprogramowania w środowisku [Python](/Python/pl "Python/pl"). Dlatego też, wiele osób opracowuje dodatkowe "przestrzenie robocze" wykraczające poza główny obszar rozwoju programu FreeCAD.

Strona [Zewnętrzne środowiska pracy](/External_workbenches/pl "External workbenches/pl") zawiera informacje i poradniki na temat niektórych z nich, a projekt [Dodatki FreeCAD](https://github.com/FreeCAD/FreeCAD-addons) ma na celu zebranie ich i uczynienie łatwymi do zainstalowania z poziomu programu FreeCAD.

Nowe środowiska pracy są w czasie tworzenia, bądź cierpliwy!

Retrieved from "<http://wiki.freecad.org/index.php?title=Defeaturing_Workbench/pl&oldid=1307674>"
