---
title: Środowisko pracy CAM
---

![](/images/Workbench_CAM.svg)

Ikonka FreeCAD dla środowiska pracy CAM

## Wprowadzenie

Środowisko pracy ![](/images/Workbench_CAM.svg) CAM jest używane do tworzenia instrukcji maszynowych dla [maszyn CNC](https://en.wikipedia.org/wiki/CNC_router) z modelu 3D FreeCAD. Instrukcje te wytwarzają rzeczywiste obiekty 3D na maszynach CNC, takich jak frezarki, tokarki, wycinarki laserowe i podobne. Zazwyczaj instrukcje są dialektem [G-code](https://en.wikipedia.org/wiki/G-code). Przedstawiono tu [ogólny przykład symulacji sekwencji ścieżki narzędzia tokarki CNC](https://www.ange-softs.com/SIMULCNCHTML/index.html).

![](/images/Pathwb.png)

Przepływ pracy środowiska FreeCAD CAM tworzy te instrukcje maszynowe w następujący sposób:

- Model 3D jest obiektem bazowym, zwykle tworzonym przy użyciu jednego lub więcej środowisk pracy ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"), ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl") lub ![](/images/Workbench_Draft.svg). [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl").
- W środowisku CAM tworzone jest [Zadanie](/CAM_Job/pl "CAM Job/pl"). Zawiera ono wszystkie informacje potrzebne do wygenerowania niezbędnego G-kodu do obróbki zadania na frezarce CNC: jest materiał magazynowy, frezarka ma określony [zestaw narzędzi](/CAM_ToolBitLibraryOpen/pl "CAM ToolBitLibraryOpen/pl") i wykonuje określone polecenia kontrolujące prędkość i ruchy _(zwykle G-kod)_.
- [Narzędzia](/CAM_Tools/pl "CAM Tools/pl") są wybierane zgodnie z wymaganiami zadania.
- Ścieżki frezowania są tworzone przy użyciu np. operacji [konturu](/CAM_Profile/pl "CAM Profile/pl") i [kieszeni](/CAM_Pocket_3D/pl "CAM Pocket 3D/pl"). Te obiekty CAM używają wewnętrznego dialektu G-code FreeCAD, niezależnego od maszyny CNC.
- Wyeksportuj zadanie z G-kodem, dopasowanym do Twojej maszyny. Ten krok nazywany jest _postprocesowaniem_. Dostępne są różne postprocesory.

## Koncepcje ogólne

Środowisko pracy CAM generuje G-kod definiujący ścieżki wymagane do frezowania projektu reprezentowanego przez model 3D na docelowej frezarce w [wewnętrznym formacie G-Code programu FreeCAD](/CAM_scripting/pl#Wewn.C4.99trzny_format_GCode_programu_FreeCAD "CAM scripting/pl"), który jest następnie tłumaczony na odpowiedni dialekt dla docelowego sterownika CNC poprzez wybór odpowiedniego postprocesora.

G-kod jest generowany na podstawie dyrektyw i operacji zawartych w zadaniu CAM. Obieg zadań zawiera ich listę w kolejności, w jakiej będą wykonywane. Listę tę tworzy się, dodając Operacje CAM, wykończenia CAM, Polecenia uzupełniające CAM i Modyfikacje CAM z menu CAM lub przycisków graficznego interfejsu użytkownika.

Środowisko pracy CAM udostępnia menedżera narzędzi _(bibliotekę, tabelę narzędzi)_, narzędzia do inspekcji G-kodu oraz symulacji. Łączy się z postprocesorem i umożliwia importowanie i eksportowanie szablonów zadań.

Środowisko CAM ma zewnętrzne zależności, w tym:

1. Jednostki modelu FreeCAD 3D są zdefiniowane w **Edycja → Preferencje ... → Ogólne → Domyślny układ jednostek**. Konfiguracja Postprocesora definiuje jednostki wynikowe G-kodu.
2. Ścieżka do pliku Makrodefinicji oraz tolerancje geometryczne są zdefiniowane w zakładce **Edycja → Preferencje ... → CAM → Ustawienia dla zadania**.
3. Kolory są definiowane w zakładce **Edycja → Preferencje ... → CAM → GUI**.
4. Parametry znaczników trzymania definiuje się w zakładce **Edycja → Preferencje ... → CAM → Wykończenia**.
5. To, że jakość modelu Base 3D jest zgodna z wymaganiami środowiska CAM, potwierdza sprawdzenie geometrii.

## Ograniczenia

Niektóre z obecnych ograniczeń, o których należy pamiętać, to:

- Większość narzędzi CAM nie jest prawdziwymi narzędziami 3D, a jedynie 2,5D. Oznacza to, że przyjmują one ustalony kształt 2D i mogą go przyciąć do określonej głębokości. Istnieją jednak dwa narzędzia, które tworzą prawdziwe ścieżki 3D: ![](/images/CAM_3DPocket.svg) [Kieszeń 3D](/CAM_Pocket_3D/pl "CAM Pocket 3D/pl") i ![](/images/CAM_Surface.svg) [Powierzchnia 3D](/CAM_Surface/pl "CAM Surface/pl") _(która jest wciąż [funkcją eksperymentalną](/CAM_experimental/pl "CAM experimental/pl") od listopada 2020 roku)_.
- Większość środowiska pracy CAM jest zaprojektowana dla standardowej, prostej, 3-osiowej _(xyz)_ frezarki / routera CNC, ale narzędzia tokarskie są w trakcie opracowywania w wersji 0.19_pre.
- Większość operacji w środowisku pracy CAM zwróci ścieżki oparte tylko na standardowym narzędziu / bicie, niezależnie od typu narzędzia / bita przypisanego w danym kontrolerze narzędzia, z wyjątkiem operacji ![](/images/CAM_Engrave.svg) [Grawer](/CAM_Engrave/pl "CAM Engrave/pl") i ![](/images/CAM_Surface.svg) [powierzchnia 3D](/CAM_Surface/pl "CAM Surface/pl").
- Operacje wykonywane w środowisku pracy CAM nie uwzględniają mechanizmów mocujących, które są używane do mocowania modelu na maszynie. W związku z tym przed wysłaniem kodu do maszyny należy przejrzeć i zasymulować generowane ścieżki. Jeśli to konieczne, wymodeluj mechanizmy mocujące w programie FreeCAD, aby lepiej sprawdzić wygenerowane ścieżki. Zwróć uwagę na ewentualne kolizje z zaciskami lub innymi przeszkodami na ścieżkach.

## Jednostki

Obsługa jednostek w środowisku CAM może być myląca. Należy zrozumieć kilka kwestii:

1. Jednostkami podstawowymi FreeCAD dla długości i czasu są odpowiednio "mm" i "s". Prędkość jest więc "mm / s". To jest to, co FreeCAD przechowuje wewnętrznie, niezależnie od wszystkiego innego.
2. Domyślny schemat jednostek używa jednostek domyślnych. Jeśli używasz domyślnego schematu i wprowadzasz prędkość posuwu bez łańcucha jednostek, zostanie ona wprowadzona jako "mm/s".
3. Większość maszyn CNC oczekuje prędkości posuwu w postaci "mm / min" lub "in / min". Większość postprocesorów automatycznie konwertuje jednostkę podczas generowania G-kodu.

Schematy:

1. Zmiana schematu w preferencjach zmienia domyślny ciąg jednostek dla pól wejściowych. Jeśli jesteś użytkownikiem CAM i wolisz projektować w jednostkach metrycznych, zalecane jest użycie schematu "Metryczny drobne części i CNC". Jeśli projektujesz w jednostkach amerykańskich, możesz użyć schematu Calowy dziesiętny lub Budowlany US.
2. Zmiana preferowanego schematu jednostek nie będzie miała wpływu na wynik, ale pomoże uniknąć błędów przy wprowadzaniu danych.

Wyjście:

1. Generowanie poprawnej jednostki na wyjściu jest zadaniem postprocesora i jest wykonywane tylko w tym czasie.
2. Jednostka wyjściowa maszyny jest całkowicie niezwiązana z wybranym przez użytkownika schematem jednostek.
3. Postprocesory generują dane wyjściowe w systemie metrycznym _(G21)_, imperialnym _(G20)_ lub są konfigurowalne.
4. Konfigurowalne postprocesory domyślnie produkują dane metryczne _(G21)_.
5. Jeśli chcesz, aby twój konfigurowalny postprocesor generował G-code imperialny _(G20)_, ustaw odpowiedni argument w konfiguracji wyjścia zadania _(np. --inches dla linuxcnc)_. Można to zapisać w szablonie zadania i ustawić jako szablon domyślny, aby działało to automatycznie dla wszystkich przyszłych zadań.

Inspekcja CAM:

1. Jeśli użyjesz narzędzia Inspekcja CAM do obejrzenia G-kodu, zobaczysz go w "mm / s", ponieważ nie jest on poddawany obróbce postprocesora.

## Wysokość i głębokość

Wiele poleceń ma zróżnicowaną wysokość i głębokość:

![](/images/Path-DepthsAndHeights.gif)

Wizualne odniesienie do właściwości głębokości _( ustawienia)_

## Polecenia

Niektóre polecenia są eksperymentalne i nie są domyślnie dostępne. Aby je włączyć, zobacz stronę [Funkcje eksperymentalne](/CAM_experimental/pl "CAM experimental/pl").

### Polecenia projektu

- ![](/images/CAM_Job.svg) [Zadanie](/CAM_Job/pl "CAM Job/pl"): Tworzy nowe zadanie obróbki CNC.

- ![](/images/CAM_Post.svg) [Post Process](/CAM_Post/pl "CAM Post/pl"): Eksportuje projekt do G-kodu.

- ![](/images/CAM_Sanity.svg) [Sprawdź, czy zadanie CAM nie zawiera typowych błędów](/CAM_Sanity/pl "CAM Sanity/pl"): Sprawdza, czy w wybranym zadaniu nie występują brakujące wartości.

- ![](/images/CAM_ExportTemplate.svg) [Eksport szablonu](/CAM_ExportTemplate/pl "CAM ExportTemplate/pl"): Eksportuj aktualne zadanie jako szablon.

### Polecenia narzędzi

- ![](/images/CAM_Inspect.svg) [Przeglądaj polecenia CAM](/CAM_Inspect/pl "CAM Inspect/pl"): Wyświetla G-kod do weryfikacji.

- ![](/images/CAM_Simulator.svg) [Symulator CAM](/CAM_Simulator/pl "CAM Simulator/pl"): Przedstawia operację frezowania w sposób, w jaki jest ona wykonywana na maszynie.

- ![](/images/CAM_SimulatorGL.svg) [CAM SymulatorGL](/CAM_SimulatorGL/pl "CAM SimulatorGL/pl"): Uruchamia nowy, ulepszony symulator CAM. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/CAM_SelectLoop.svg) [Zakończ zaznaczanie pętli](/CAM_SelectLoop/pl "CAM SelectLoop/pl"): Uzupełnia pętlę na podstawie dwóch wybranych krawędzi.

- ![](/images/CAM_OpActiveToggle.svg) [Przełącz aktywność operacji](/CAM_OpActiveToggle/pl "CAM OpActiveToggle/pl"): Aktywuje lub dezaktywuje operację na ścieżce.

- ![](/images/CAM_ToolBitLibraryOpen.svg) [Edytor biblioteki narzędzi](/CAM_ToolBitLibraryOpen/pl "CAM ToolBitLibraryOpen/pl"): Otwiera edytor do zarządzania bibliotekami końcówek narzędzi.

- ![](/images/CAM_ToolBitDock.svg) [Stacja dokująca narzędzi](/CAM_ToolBitDock/pl "CAM ToolBitDock/pl"): Przełącza stacja dokującą narzędzi.

### Operacje podstawowe

- ![](/images/CAM_Profile.svg) [Profil](/CAM_Profile/pl "CAM Profile/pl"): Tworzy operację profilowania całego modelu albo jednej lub kilku wybranych powierzchni lub krawędzi.

- ![](/images/CAM_Pocket_Shape.svg) [Kształt kieszeni](/CAM_Pocket_Shape/pl "CAM Pocket Shape/pl"): Tworzy operację kieszeni z jednej lub kilku wybranych kieszeni.

- ![](/images/CAM_Drilling.svg) [Owierty](/CAM_Drilling/pl "CAM Drilling/pl"): Przeprowadza cykl wiercenia.

- ![](/images/CAM_MillFace.svg) [Ściana](/CAM_MillFace/pl "CAM MillFace/pl"): Tworzy ścieżkę obróbki powierzchni.

- ![](/images/CAM_Helix.svg) [Helisa](/CAM_Helix/pl "CAM Helix/pl"): Tworzy ścieżkę o kształcie helisy.

- ![](/images/CAM_Adaptive.svg) [Algorytm adaptacyjny](/CAM_Adaptive/pl "CAM Adaptive/pl"): Tworzy operację dostosowania oczyszczania i profilowania.

- ![](/images/CAM_Slot.svg) [Rowek](/CAM_Slot/pl "CAM Slot/pl"): Tworzy operację szczelinowania na podstawie wybranych elementów lub punktów niestandardowych. [_funkcja eksperymentalna_](/CAM_experimental/pl "CAM experimental/pl").

- ![](/images/CAM_Engrave.svg) [Grawer](/CAM_Engrave/pl "CAM Engrave/pl"): Tworzy trasę grawerowania.

- ![](/images/CAM_Deburr.svg) [Usuwanie zadziorów](/CAM_Deburr/pl "CAM Deburr/pl"): Tworzy ścieżkę usuwania zadziorów.

- ![](/images/CAM_Vcarve.svg) [Wycięcie V](/CAM_Vcarve/pl "CAM Vcarve/pl"): Tworzy ścieżkę grawerowania przy użyciu kształtu narzędzia V.

### Operacje przestrzenne

- ![](/images/CAM_Pocket_3D.svg) [Kieszeń 3D](/CAM_Pocket_3D/pl "CAM Pocket 3D/pl"): Tworzy ścieżkę dla kieszeni 3D.

- ![](/images/CAM_Surface.svg) [Powierzchnia 3D](/CAM_Surface/pl "CAM Surface/pl"): Tworzy ścieżkę dla powierzchni 3D. [_funkcja eksperymentalna_](/CAM_experimental/pl "CAM experimental/pl").

- ![](/images/CAM_Waterline.svg) [Linia poziomu](/CAM_Waterline/pl "CAM Waterline/pl"): Tworzy ścieżkę linii poziomu dla powierzchni 3D. [_Experimental_](/CAM_experimental/pl "CAM experimental/pl").

### Wykończenia ścieżki

- ![](/images/CAM_DressupAxisMap.svg) [Odwzorowanie osi](/CAM_DressupAxisMap/pl "CAM DressupAxisMap/pl"): Odwzorowuje jedną oś na drugą.

- ![](/images/CAM_DressupPathBoundary.svg) [Kontur](/CAM_DressupPathBoundary/pl "CAM DressupPathBoundary/pl"): Dodaje ulepszenie obrysu krawędzi do wybranej ścieżki.

- ![](/images/CAM_DressupDogbone.svg) [Nadcięcie w narożnikach](/CAM_DressupDogbone/pl "CAM DressupDogbone/pl"): Dodaje modyfikację nadcięcia narożników do wybranej ścieżki.

- ![](/images/CAM_DressupDragKnife.svg) [Rylec](/CAM_DressupDragKnife/pl "CAM DressupDragKnife/pl"): Dodaje modyfikację dla noża do przeciągania do wybranej ścieżki.

- ![](/images/CAM_DressupLeadInOut.svg) [Wprowadzenie / wyprowadzenie](/CAM_DressupLeadInOut/pl "CAM DressupLeadInOut/pl"): Dodaje punkt wejścia i / lub wyjścia do wybranej ścieżki.

- ![](/images/CAM_DressupRampEntry.svg) [Parkowanie narzędzia](/CAM_DressupRampEntry/pl "CAM DressupRampEntry/pl"): Dodaje modyfikację wejścia na rampę do wybranej ścieżki.

- ![](/images/CAM_DressupTag.svg) [Pola mocujące](/CAM_DressupTag/pl "CAM DressupTag/pl"): Dodaje modyfikację mostka przytrzymującego do wybranej ścieżki.

- ![](/images/CAM_DressupZCorrect.svg) [Korekta głębokości Z](/CAM_DressupZCorrect/pl "CAM DressupZCorrect/pl"): Koryguje głębokość Z przy użyciu mapowania sondy.

### Polecenia uzupełniające

- ![](/images/CAM_Fixture.svg) [Mocowanie](/CAM_Fixture/pl "CAM Fixture/pl"): Zmienia położenie uchwytu.

- ![](/images/CAM_Comment.svg) [Komentarz](/CAM_Comment/pl "CAM Comment/pl"): Wstawia komentarz do G-kodu ścieżki.

- ![](/images/CAM_Stop.svg) [Stop](/CAM_Stop/pl "CAM Stop/pl"): Wstawia instrukcję pełnego zatrzymania maszyny.

- ![](/images/CAM_Custom.svg) [Wstawka Gcode](/CAM_Custom/pl "CAM Custom/pl"): Wstawia G-kod użytkownika.

- ![](/images/CAM_Probe.svg) [Sonda](/CAM_Probe/pl "CAM Probe/pl"): Tworzy siatkę pomiarową z zasobu zadania.

- ![](/images/CAM_Shape.svg) [G-kod z kształtu](/CAM_Shape/pl "CAM Shape/pl"): Tworzy obiekt ścieżki z wybranego obiektu części. [_funkcja eksperymentalna_](/CAM_experimental/pl "CAM experimental/pl").

### Modyfikacja ścieżki

- ![](/images/CAM_Copy.svg) [Kopia](/CAM_Copy/pl "CAM Copy/pl"): Tworzy parametryczną Kopię wybranego obiektu ścieżki.

- ![](/images/CAM_Array.svg) [Szyk](/CAM_Array/pl "CAM Array/pl"): Tworzy szyk przez powielanie wybranej ścieżki.

- ![](/images/CAM_SimpleCopy.svg) [Szybka kopia](/CAM_SimpleCopy/pl "CAM SimpleCopy/pl"): Tworzy nieparametryczną kopię wybranego obiektu ścieżki.

### Operacje specjalistyczne

- ![](/images/CAM_ThreadMilling.svg) [Frezowanie gwintów](/CAM_ThreadMilling/pl "CAM ThreadMilling/pl"): Tworzy operację CAM frezowania gwintów na podstawie cech obiektu bazowego. [_funkcja eksperymentalna_](/CAM_experimental/pl "CAM experimental/pl").

### Różności

- ![](/images/CAM_Area.svg) [Obszar](/CAM_Area/pl "CAM Area/pl"): Tworzy obszar charakterystyczny z wybranych obiektów. [_funkcja eksperymentalna_](/CAM_experimental/pl "CAM experimental/pl").

- ![](/images/CAM_Area_Workplane.svg) [Obszar płaszczyzny roboczej](/CAM_Area_Workplane/pl "CAM Area Workplane/pl"): Tworzy płaszczyznę roboczą obszaru cechy. [_funkcja eksperymentalna_](/CAM_experimental/pl "CAM experimental/pl").

## Noże tokarskie, architektura

Umożliwia zarządzanie narzędziami, nożami tokarskimi i biblioteką narzędzi. Oparte na architekturze noży tokarskich.

- [Narzędzia](/CAM_Tools/pl "CAM Tools/pl")
- [Profil narzędzia](/CAM_ToolShape/pl "CAM ToolShape/pl")
- [Noże tokarskie](/CAM_ToolBit/pl "CAM ToolBit/pl")
- [Biblioteka narzędzi](/CAM_ToolBit_Library/pl "CAM ToolBit Library/pl")
- [Kontroler narzędzi](/CAM_ToolController/pl "CAM ToolController/pl")

## Pozostałe

- [Często zadawane pytania](/CAM_FAQ/pl "CAM FAQ/pl"): Środowisko CAM ma wiele wspólnych koncepcji z innymi pakietami oprogramowania CAM, ale ma też swoje własne cechy szczególne. Jeśli coś wydaje się nie tak, to jest to dobre miejsce, aby zacząć.
- [Karta konfiguracji](/CAM_SetupSheet/pl "CAM SetupSheet/pl"): Można użyć arkusza ustawień, aby dostosować sposób obliczania różnych wartości właściwości dla operacji.
- [Dostosowywanie przetwarzania końcowego](/CAM_Postprocessor_Customization/pl "CAM Postprocessor Customization/pl"): Jeśli masz specjalną maszynę, która nie może używać jednego z dostępnych postprocesorów, może być konieczne napisanie własnego postprocesora.
- [Oś czwarta](/CAM_fourth_axis/pl "CAM fourth axis/pl"): Eksperymentalne frezowanie w czterech osiach.

## Ustawienia

- ![](/images/Preferences-cam.svg) [Ustawienia](/CAM_Preferences/pl "CAM Preferences/pl"): Preferencje dostępne dla środowiska pracy CAM.

## Tworzenie skryptów

Zobacz również: [skrypty dla środowiska Path](/CAM_scripting/pl "CAM scripting/pl")

## Poradniki

- [opis dla niecierpliwych](/CAM_Walkthrough_for_the_Impatient/pl "CAM Walkthrough for the Impatient/pl"): krótki samouczek pozwalający zapoznać się ze środowiskiem pracy CAM.

## Filmy

- [FreeCAD Path: Niestandardowe ścieżki z Pythonem - część 1 - 5](https://www.youtube.com/playlist?list=PLEuOia-QxyFKgzAeTyH62GKqWKVURiWJL): lista odtwarzania z serią 5 filmów w języku angielskim autorstwa Sliptonic. Seria ta pokazuje, jak pracować ze środowiskiem CAM.
- [FreeCAD CAM Path Workbench](https://www.youtube.com/playlist?list=PLUrr_kHPp4vhGdLlj6IemtF-OPUlRvSTC): lista odtwarzania z serią 7 filmów w języku angielskim przygotowana przez CAD CAM Lessons.
- [FreeCAD CAM CNC](https://www.youtube.com/playlist?list=PLUrr_kHPp4vh2n6DcIlegK4dEKIFjmISJ): lista odtwarzania z serią 8 filmów w języku angielskim przygotowana przez CAD CAM Lessons.
- Zobacz również sekcję [Wytwarzanie wspomagane komputerowo (CAM)](</Video_tutorials/pl#Wytwarzanie_wspomagane_komputerowo_(CAM)> "Video tutorials/pl") na stronie [Wideo poradniki](/Video_tutorials/pl "Video tutorials/pl").

## Plan rozwoju

- [CAM Development Roadmap](/CAM_Development_Roadmap "CAM Development Roadmap"): Przeczytaj ten artykuł, jeśli jesteś programistą i chcesz przyczynić się do rozwoju środowiska CAM.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Workbench/pl&oldid=1494645>"
