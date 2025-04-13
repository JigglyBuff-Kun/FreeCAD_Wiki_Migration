---
title: Część Wycinek z przekroju
---
|  |
| --- |
| Part SectionCut |
| Menu location |
| Widok → Wycinek z przekroju |
| Workbenches |
| All |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.20 |
| See also |
| [Std\_ToggleClipPlane/pl](/Std_ToggleClipPlane/pl "Std ToggleClipPlane/pl") |
|  |

## Opis

Funkcja **Wycinek przekroju** jest dostępna dla wszystkich środowisk pracy, choć działa tylko dla obiektów Część i Projekt Części oraz ich złożeń. Tworzy ona trwałe przecięcie obiektów i złożeń. Ponieważ wynik cięcia jest normalnym obiektem ![](/images/Part_Cut.svg) [wycięcia](/Part_Cut/pl "Part Cut/pl") środowiska Część, może być dalej modyfikowany lub np. drukowany na drukarce 3D. Zobacz poniżej możliwe zastosowania.

![](/images/Part_SectionCut_example.png)

Przekrój złożenia. Niektóre przecięte powierzchnie zostały ręcznie pokolorowane. Żółta część nie jest cięta, ponieważ została celowo przesunięta o jeden mikron w głąb innej części.

## Użycie

![](/images/Part_SectionCut_Dialog.png)

Okno dialogowe Wycinek z przekroju.

Okno dialogowe **Wycinek przekroju** jest otwierane za pomocą menu **Widok → ![](/images/Part_SectionCut.svg) Trwałe przycięcie przekroju**. Jest ono niezależne od bieżącego obszaru roboczego i aktualnie otwartego dokumentu. Można je odłączyć od pozycji wyjściowej, naciskając przycisk w prawym górnym rogu okna dialogowego.

Funkcja **Wycinek przekroju** uwzględnia wszystkie aktualnie widoczne obiekty części w aktywnym dokumencie. Dzięki temu można kontrolować, co zostanie wycięte, poprzez uwidocznienie lub nie danej części. Zaznaczenie jednej z opcji **Cięcie** w oknie dialogowym powoduje uaktywnienie funkcji. Następnie można wprowadzić pozycję *(we współrzędnych dokumentu)* lub ustawić pozycję cięcia za pomocą suwaków. Możliwe jest także łączenie cięć, np. cięcie w kierunku X i Z. Przyciski Odwróć odwracają stronę, która ma zostać przecięta.

Gdy tylko w oknie dialogowym zostanie zaznaczona opcja **Cięcie'**, w oknie [widok drzewa](/Tree_view/pl "Tree view/pl") pojawi się obiekt cięcia. Jego nazwa to np. *SekcjaCięcieY*, gdy jest to cięcie w kierunku Y.

Opcja okna dialogowego **Cięcia będą widoczne tylko przy zamykaniu** ukrywa wszystko w widoku drzewa z wyjątkiem obiektu cięcia, gdy zostanie kliknięty przycisk Zamknij w celu zamknięcia okna dialogowego.

Aby usunąć wycięty obiekt, należy odznaczyć wszystkie opcje **Wycinania**.

Po usunięciu zaznaczenia wszystkich opcji **Wycinania** uaktywnia się przycisk Odśwież widok. Jego naciśnięcie powoduje wykonanie zrzutu ekranu z aktualnie widocznymi obiektami części. Zostanie on wykorzystany podczas kolejnego sprawdzania opcji **Wycinania**. Odświeżenie jest konieczne po przełączeniu dokumentu. Jest ono ponadto przydatne w przypadku złożeń, w których można ukryć niektóre części, a później dodać je do rozkroju. W takim przypadku odświeżanie przelicza wartości min/max suwaków i pozycji cięcia zgodnie z aktualnie widocznymi wymiarami obiektu.

Jeśli zaznaczona jest opcja **Auto** w sekcji powierzchni cięcia, dla powierzchni cięcia zostanie przyjęty kolor i przezroczystość wyciętych obiektów. Działa to tylko wtedy, gdy wszystkie wycięte obiekty mają taką samą wartość parametru barwy lub przezroczystości.

Opcja *Wytnij przecinające się obiekty* pozwala na wycięcie również obiektów, które przecinają się wzajemnie. Podczas montażu zdarza się, że obiekty, które zostały zaprojektowane tak, aby tylko się dotykały, przecinają się ze względu na problemy z precyzją numeryczną. Wadą tej opcji jest to, że wszystkie widoczne obiekty otrzymają ten sam kolor. Ten kolor może być określony podobnie jak w sekcji Ściany cięcia w oknie dialogowym.  
Jeżeli potrzebujesz cięcia np. dla fajnego obrazka z kilkoma kolorami ścian, możesz zmienić kolory ścian za pomocą narzędzia ![](/images/Part_ColorPerFace.svg) [Kolor powierzchnii](/Part_ColorPerFace/pl "Part ColorPerFace/pl").

**Uwaga:** W przypadku złożeń suwaki w oknie dialogowym są wyłączone *(z wyjątkiem suwaka przezroczystości)*. Powodem tego jest fakt, że przesunięcie suwaka powoduje wykonanie wielu operacji cięcia w krótkim czasie. W przypadku złożeń szybko zużywa to całą moc procesora, a ciągłe przesuwanie suwaka nie jest użyteczne.

Po wybraniu obiektu przekroju w widoku drzewa, a następnie otwarciu okna dialogowego Wycinek przekroju, pozycje przekroju zostaną wczytane do okna dialogowego.

## Zastosowanie

* Ważnym przypadkiem zastosowania jest to, że funkcja Wycinek przekroju tworzy wypełnione przekroje, a nie puste w środku, jak funkcja ![](/images/Std_ToggleClipPlane.svg) [Przełącz płaszczyznę tnącą](/Std_ToggleClipPlane/pl "Std ToggleClipPlane/pl").
* Funkcja Wycinek przekroju jest przydatna dla złożeń w celu wizualizacji, na przykład, zasady działania urządzenia. Można też pokolorować niektóre wycięte powierzchnie, używając narzędzia ![](/images/Part_ColorPerFace.svg) [Kolor powierzchni](/Part_ColorPerFace/pl "Part ColorPerFace/pl"). Aby użyć tego narzędzia, należy przejść do środowiska pracy Część lub Projekt Części, kliknąć prawym przyciskiem myszy na wycięty obiekt w widoku drzewa i wybrać z menu kontekstowego **Ustaw kolory**.
* Bez opcji **Przetnij obiekty zachodzące na siebie** tylko części, które nie przecinają innych zostaną wycięte. Można użyć jako testu kolizji.
* Funkcja Wycinek przekroju może być używana w rysunkach technicznych w celu wyróżnienia pewnych obszarów lub umożliwienia narysowania wymiarów. Poniższy obrazek pokazuje przykład, w którym użyto funkcji środowiska pracy [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") takich jak ![](/images/TechDraw_ActiveView.svg) [Aktywny widok](/TechDraw_ActiveView/pl "TechDraw ActiveView/pl") i ![](/images/TechDraw_View.svg) [Widok](/TechDraw_View/pl "TechDraw View/pl").

![](/images/Part_SectionCut_TD-example.png)

Rysunek techniczny, na którym zaprezentowano wynik działania funkcji. *(Kliknij obrazek, aby uzyskać pełny rozmiar)*.

## Specjalne pozycje cięcia

![](/images/Part_SectionCut_slant-cut.png)

Ukośne przecięcie złożenia.

* Na przykład na pierwszym rysunku na tej stronie wycięto tylko jedną czwartą złożenia. Zostało to wykonane przez utworzenie cięcia w kierunku X. Następnie w wynikowym obiekcie cięcia **SectionCutX** zmieniono [umiejscowienie](/Placement/pl "Placement/pl") obiektu podrzędnego **SectionCutBoxX'**.
* Aby uzyskać cięcie w dowolnym kierunku, możesz zrobić tak:

1. Utwórz nową zawartość [części](/Std_Part/pl "Std Part/pl").
2. W widoku drzewa zaznacz wszystkie obiekty, które chcesz przeciąć i przenieś je do zawartości.
3. Teraz ustaw położenie kontenera na wybrany przez siebie obrót. Na obrazku po lewej stronie kontener został obrócony o 45° wokół osi X i Z, a cięcie zostało wykonane w kierunku X.

## Ograniczenia

![](/images/Part_SectionCut_Color-artifact.png)

Złożenie, w którym dwie części krzyżują się ze sobą i dlatego nie są przecięte. Zwróć uwagę na artefakty kolorystyczne na powierzchni przecięcia.

* **Ważne:** Funkcja wycinania przekroju źle działa z [OpenCASCADE](/OpenCASCADE/pl "OpenCASCADE/pl") 7.4 i starszym z powodu błędów. Dlatego zalecane jest używanie OpenCASCADE 7.5 lub nowszego *(wszystkie wersje FreeCAD wersja 0.20 i powyżej to zapewniają)*.
* wersja 1.0 i powyżej: Opcja **Obcinaj obiekty przecinające się** spowoduje, że wszystkie widoczne części zostaną pokolorowane tak samo. Technicznie nie da się tego uniknąć. Jeśli jednak potrzebujemy trwałego cięcia np. do prezentacji, zobacz opisaną powyżej metodę jak ustawić kolor samodzielnie.
* wersja 0.20 i poniżej: Na złożeniach części, **które wzajemnie na siebie nachodzą**, nie są możliwe przecięcia. Zazwyczaj elementy wzajemnie na siebie nachodzące nie są cięte, podczas gdy pozostałe są cięte. Jednakże, czasami cięcie może dać dziwne rezultaty, co jest błędem w bibliotekach OpenCASCADE.  
   Aby uzyskać widok przekroju również dla przecinających się obiektów, można użyć makrodefinicji [Przekrój](/Macro_cross_section/pl "Macro cross section/pl").
* wersja 0.20 i poniżej: Szczególnie w przypadku korzystania ze środowiska pracy [A2plus](/A2plus_Workbench/pl "A2plus Workbench/pl") niektóre złożenia mogą nachodzić na siebie zaledwie o mikron z powodu wewnętrznych błędów zaokrąglania. Aby to naprawić, dodaj mikron jako odstęp w ustawieniach wiązań.
* W wyniku cięcia mogą pojawić się artefakty kolorystyczne. Czy i w jaki sposób zależą one od biblioteki OpenCASCADE, a także od położenia widoku. W wielu przypadkach artefakty kolorystyczne znikają po lekkim obróceniu widoku 3D.
* Jeśli przecięte obiekty mają różne kolory, nie jest możliwe automatyczne zastosowanie ich koloru do odpowiednich powierzchni cięcia. Wszystkie wycięte powierzchnie otrzymają ten sam kolor, który został wybrany w oknie dialogowym.
* W przypadku korzystania ze środowiska pracy [A2plus](/A2plus_Workbench/pl "A2plus Workbench/pl") nie można automatycznie zastosować koloru złożenia do odpowiadających im powierzchni przyciętych. Wszystkie przecięte powierzchnie otrzymają ten sam kolor, który został wybrany w oknie dialogowym. Powodem tego jest fakt, że A2plus nie wprowadza części [jako link](/App_Link/pl "App Link/pl"), lecz ładuje je jako plik.

## Informacje ogólne

Funkcja **Wycinek z przekroju** została zainspirowana makrodefinicją [Przekrój](/Macro_cross_section/pl "Macro cross section/pl") i działa technicznie w ten sposób:

Wszystkie widoczne obiekty umieszcza się w kontenerze ![](/images/Part_Compound.svg) [Złożenie](/Part_Compound/pl "Part Compound/pl").
Dla opcji **Przetnij obiekty zachodzące na siebie** obiekty umieszczane są w ![](/images/Part_BooleanFragments.svg) [fragmentach funkcji logicznej](/Part_BooleanFragments/pl "Part BooleanFragments/pl").
Złożenie rozcina się za pomocą obiektu ![](/images/Part_Box.svg) [prostopadłościanu](/Part_Box/pl "Part Box/pl"). Prostopadłościan musi być tak duży, aby objął całą objętość wszystkich widocznych obiektów. Aby to osiągnąć, pobierane jest ramka otaczającej obiektów. Podczas zmiany widoku przez dodanie / usunięcie obiektów lub zmianę dokumentu należy odświeżyć ramkę otaczającą. Odbywa się to po kliknięciu przycisku Odśwież widok.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_SectionCut/pl&oldid=1469811>"