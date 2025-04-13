---
title: CAM Powierzchnia 3D
---
:::caution
Jest to nieukończona funkcja eksperymentalna.Włącz funkcje eksperymentalne
:::
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Path: Powierzchnia 3D |
| Lokalizacja w menu |
| CAM → Powierzchnia 3D |
| Środowisko pracy |
| [CAM](/CAM_Workbench/pl "CAM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie to tworzy nową operację ![](/images/CAM_Surface.svg) **Powierzchnia 3D** , która jest w stanie wygenerować ścieżki G-code dla całej górnej powierzchni modelu 3D (lub jest w stanie pracować z wybranymi ścianami) i pozwala na omijanie ścian. Operacja ta oferuje wiele wzorców skrawania: Line, Zygzak, Okrągły, Okrągły Zygzak, Przesunięcie i Spirala (podobny do wzorca adaptacyjnego). Od wersji 0.19 operacja ta oferuje wiele dostosowań umożliwiających zwiększenie wydajności.

Operacja ![](/images/CAM_Surface.svg) **Powierzchnia 3D** jest zdolna również do generowania podstawowych obrotowych ścieżek powierzchni 3D. Możliwości rotacyjne są ograniczone do całego modelu i nie pozwalają na izolowanie konkretnych ścian lub regionów. Ścieżki obrotowe są również ograniczone do wzorów skrawania liniowego.

Narzędzie powierzchni 3D jest połączone z OCL.pyd, zewnętrznym modułem Open Source o nazwie [OpenCamLib](/OpenCamLib/pl "OpenCamLib/pl"), który generuje ścieżki narzędzia z modelu 3D. Biblioteka OpenCamLib nie jest zintegrowana bezpośrednio z programem FreeCAD.

**Note:** Aby używać operacji Powierzchnia 3D, musisz:

1. Prawidłowo zainstalować [OpenCamLib](/OpenCamLib/pl "OpenCamLib/pl").
2. Włączyć [Funkcje eksperymentalne](/CAM_experimental/pl "CAM experimental/pl") dla środowiska pracy CAM.
3. Sprawdzić **Edycja → Preferencje... → CAM → Zaawansowane → Włącz funkcje zależne od OpenCamLib**.

## Użycie

Poniżej przedstawiono instrukcje użytkowania dla wielu wariantów operacji Powierzchnia 3D.

### Operacja podstawowa

1. Wciśnij ikonę ![](/images/CAM_Surface.svg) Powierzchnia 3D lub wybierz opcję **CAM → Powierzchnia 3D** z menu rozwijanego.
2. Wybierz kontroler narzędzia dla operacji z okna dialogowego kontrolera narzędzia, jeśli się pojawi.
3. W zakładce Geometria podstawowa wybierz konkretne powierzchnie, na których chcesz się skupić i/lub których chcesz uniknąć podczas operacji.
4. Dostosuj głębokości operacji w zakładce Głębokość: Głębokość początkowa, Głębokość końcowa, Krok w dół.
5. W razie potrzeby zmień ustawienia w zakładce Wysokości.
6. Skonfiguruj ustawienia w zakładce Operacja według potrzeb:
   * Wybierz tryb chłodziwa.
   * Wybierz Ramkę otaczającą: Półfabrykat lub Punkt bazowy obiektu Ramki otaczającej.
   * Ustaw Metodę skanowania dla operacji: Płaski lub Obrotowy.
   * Wybierz Tryb warstw dla operacji: Pojedyncze przejście lub Wielokrotne przejście.
     1. Pojedyncze przejście jest używane do przejścia wykończeniowego.
     2. Wielokrotne przejście może być używane do usuwania materiału w połączeniu z użyciem Głębokości przesunięcia, aby pozostawić cienką warstwę materiału do wykończenia.
   * Dodaj Dodatkowe odsunięcie X, Y obiektu Ramki otaczającej, jeśli to konieczne (*Tylko skanowanie obrotowe*).
   * Ustaw Kierunek spuszczania freza: X lub Y. Jest to liniowy kierunek, w którym narzędzie (wrzeciono) będzie się poruszać. (*Tylko skanowanie obrotowe*).
   * Dodaj wartość Głębokości przesunięcia, jeśli chcesz pozostawić określoną grubość materiału na powierzchni, na przykład do ostatniego przejazdu wykończeniowego.
   * Ustaw Ostęp między próbkami używany do skanowania OCL.
   * Ustaw wartość Szerokość skrawania jako procent średnicy narzędzia.
   * Zaznacz pole wyboru Użyj punktu początkowego, jeśli chcesz podać punkt startowy dla operacji w widoku właściwości zakładki danych dla operacji.
   * Ograniczenie dla brzegów jest włączone domyślnie. Wymusza to pozostanie narzędzia wewnątrz granic geometrii funkcji operacji, jak w operacji kieszeni. Wyłącz, aby pozwolić narzędziu na rozszerzenie poza granice geometrii funkcji. Właściwość Boundary Adjustment ma pierwszeństwo przed tą właściwością.
   * Optymalizacja ścieżek liniowych jest włączona domyślnie. Wyłączenie spowoduje dłuższy wynik kodu G-code i prawdopodobnie zwiększy czas cięcia.
7. Jeśli chcesz podglądnąć wynik przed zaakceptowaniem ustawień, kliknij Zastosuj.
8. Kliknij przycisk OK, aby potwierdzić i wygenerować ścieżki.

Aby uzyskać inne lub bardziej złożone efekty, dostosuj dodatkowe właściwości operacji w zakładce Dane widoku właściwości dla operacji.

#### Skanowanie obrotowe (czwarta oś)

1. Rozpocznij [Podstawową operację](#Basic_Operation/pl) zgodnie z opisem powyżej i ustaw **Metodę skanowania** na **Obrotowy**.
2. **Uwaga:** Wybór powierzchni jest niedostępny dla skanów obrotowych, więc zmiany w Geometrii podstawowej są ignorowane.
3. Znajdź zakładkę Dane i Widok właściwości dla nowej operacji Powierzchnia 3D. Powinna być dostępna sekcja **Rotation** z dodatkowymi właściwościami do dostosowania, wymienionymi poniżej.  
   Zaleca się ustawienie pożądanych właściwości obrotu jednocześnie przed przeliczeniem. Można to zrobić, naciskając klawisz ENTER bezpośrednio po zmianie ustawienia właściwości. Proces ten pozwala na zmianę i zapisanie wielu właściwości przed przeliczeniem operacji.
4. Dostosuj następujące ustawienia według potrzeb:
   * Ustaw DANE**Cutter Tilt** na indeks (kąt) odsunięcia [0-90]. (Używane dla narzędzi kulowych)
   * Zmień DANE**Drop Cutter Dir** na oś ruchu dla narzędzia (wrzeciona).
   * Zmień DANE**Drop Cutter Extra Offset** na rozszerzenie ramki otaczającej w kierunkach X i Y.
   * Ustaw DANE**Rotation Axis** na żądaną oś.
   * Dostosuj DANE**Start Index** na indeks startowy (kąt) [0-360].
   * Dostosuj DANE**Stop Index** na indeks końcowy (kąt) [0-360].
5. Kliknij ikonę ![](/images/View-refresh.svg) [Odśwież](/Std_Refresh "Std Refresh") na pasku narzędzi.
6. Poczekaj na wyniki...

##### Uwagi na temat skanów obrotowych

* **Skanowanie obrotowe** wymaga znacznie więcej czasu i przetwarzania niż **płaskie**. Czynniki wpływające na czas przetwarzania to: Odstęp między próbkami, Głębokość przesunięcia, średnica narzędzia i rozmiar modelu. Ponownie, skanowanie obrotowe może zająć dużo czasu. Niektóre skany tego typu mogą trwać 3, 5 lub 10 minut lub dłużej.
* Dla oszczędności czasu lepiej nie przeliczać skanowania obrotowego po każdej zmianie właściwości; zamiast tego rozważ jedno z poniższych rozwiązań:
  + użyj techniki ' *zmiana wszystkich ustawień za pomocą klawisza ENTER* ' wspomnianej w Kroku 2 powyżej, a następnie ![](/images/View-refresh.svg) [Odśwież](/Std_Refresh/pl "Std Refresh/pl") operację.
  + dezaktywuj operację za pomocą narzędzia ![](/images/CAM_OpActiveToggle.svg) [Aktywny](/CAM_OpActiveToggle/pl "CAM OpActiveToggle/pl"), wprowadź zmiany w właściwościach operacji, a następnie kliknij ikonę ![](/images/CAM_OpActiveToggle.svg) [Aktywny](/CAM_OpActiveToggle/pl "CAM OpActiveToggle/pl") ponownie, aby ponownie aktywować operację - co wywoła wewnętrzne przeliczenie.
* Operacja ![](/images/CAM_Surface.svg) Powierzchnia 3D jest nadal uznawana za *funkcję eksperymentalną* od 25.06.2019. Może zawierać kilka błędów, które nie zostały jeszcze jednoznacznie zidentyfikowane. Prosimy zgłaszać błędy i problemy na [forum FreeCAD Path/CAM](https://forum.freecadweb.org/viewforum.php?f=15).
* Wbudowany ![](/images/CAM_Simulator.svg) [Symulator CAM](/CAM_Simulator/pl "CAM Simulator/pl") NIE obsługuje symulacji 4-osiowej. Będziesz musiał użyć symulatora zewnętrznego, aby wizualnie sprawdzić lub zweryfikować ścieżki. Zobacz sekcję [Zasoby](#Zasoby) poniżej dla sugestii.
* Prawdopodobnie zobaczysz czerwone linie obrotowe wokół swojego modelu w widoku. To normalne we FreeCAD w tym momencie.

##### Uwagi na temat skanów złożonych modeli

Nadmiernie długie czasy przetwarzania (dłuższe niż 10 minut) mogą wystąpić przy przetwarzaniu dużych, złożonych modeli. Oprócz wcześniej wspomnianych czynników, poniższe kroki mogą pomóc w identyfikacji potencjalnych przyczyn i rozwiązań.

***Niska pamięć***  
Sprawdź, ile pamięci jest dostępne podczas uruchamiania skanowania, używając narzędzia takiego jak **Menedżer zadań systemu Windows, zakładka Pamięć**. Jeśli ponad 90% pamięci jest stale używane, to mała wartość parametru **Linear Deflection** może generować siatkę, która jest zbyt duża dla dostępnej pamięci.  
Aby to potwierdzić...

1. Utwórz nową operację ![](/images/CAM_Surface.svg) Powierzchnia 3D.
2. Przełącz się na zakładkę Model i zwiększ wartość DANE**Linear Deflection**. Na przykład zmień z 2,5 μm na 20 μm.
3. Przełącz się z powrotem na zakładkę Zadania, aby dokończyć konfigurację operacji.
4. Kliknij przycisk OK, aby potwierdzić i wygenerować ścieżki.

Aby ustawić tę wartość jako domyślną dla wszystkich nowych operacji ![](/images/CAM_Surface.svg) Powierzchnia 3D, zmień parametr **GeometryTolerance**.  
**Narzędzia → Edytuj parametry ... → Preferences → Mod → CAM → GeometryTolerance** .  
Uwaga: od wersji 0.19 domyślna wartość DANE**Linear Deflection** = GeometryTolerance / 4

***Nieprawidłowa geometria***  
Jeśli model zawiera nieprawidłową geometrię, czas skanowania może znacznie wzrosnąć. Model można sprawdzić, używając funkcji [Część: Sprawdź geometrię](/Part_CheckGeometry/pl "Part CheckGeometry/pl") w ![](/images/Workbench_Part.svg)**Środowisku pracy Część**.  
Aby uruchomić narzędzie:

1. Przełącz się na ![](/images/Workbench_Part.svg)**Środowisko pracy Część** i wybierz model do sprawdzenia.
2. Kliknij przycisk ![](/images/Part_CheckGeometry.svg) [Część: Sprawdź geometrię](/Part_CheckGeometry/pl "Part CheckGeometry/pl") dostępny na pasku narzędzi Środowiska pracy Części lub użyj opcji **Część → ![](/images/Part_CheckGeometry.svg) Sprawdź geometrię** z górnego menu.
3. Kliknij przycisk **Uruchom sprawdzanie** i obejrzyj wyniki.

Jeśli wyniki zawierają elementy takie jak *BOPAlgo SelfIntersect*, geometria jest nieprawidłowa i należy ją poprawić, dostosowując model.  
(Wskazówka: Operacje logiczne i polecenia wyciągnięcia po profilach mogą czasami wprowadzać *Self Intersections*)

#### Dostępne kształty narzędzi

Operacja Powierzchnia 3D aktualnie używa [OpenCamLib](/OpenCamLib/pl "OpenCamLib/pl") do wyciągania ścieżek z podstawy części. W związku z tym, wymagana jest translacja ustawień narzędzia między kontrolerem narzędzi FreeCAD a OCL, aby zakończyć skanowanie z wybranym kształtem narzędzia (frezu).

Te kształty narzędzi są wspierane i dostępne dla tej operacji Powierzchni 3D:

* Frez trzpieniowy
* Frez kulowy
* frez walcowo-czołowy
* Końcówka fazująca
* Grawer

Jeśli zdecydujesz się uruchomić symulator ścieżek w środowisku pracy CAM, używa on tylko standardowego frezu końcowego do symulacji ścieżek. W związku z tym, nie zobaczysz usuwania materiału specyficznego dla kształtu narzędzia. Usuwanie materiału będzie pokazywane za pomocą kształtu frezu końcowego.

UWAGA: Od maja 2019 roku tylko frez końcowy ma jakiekolwiek testy do określenia dokładności translacji ustawień narzędzia FreeCAD do OCL. Prosimy przesłać wszelkie uwagi dotyczące użycia innych narzędzi do sekcji [Path/CAM](https://forum.freecadweb.org/viewforum.php?f=15) na forum FreeCAD.

## Właściwości: wersja 0.19

***Uwaga*** : Nie wszystkie z tych właściwości są dostępne w edytorze okna zadań. Niektóre są dostępne tylko na karcie Dane w panelu Widok właściwości dla tej operacji.

Podstawa

Uwaga: Zaleca się, aby nie edytować właściwości Umiejscowienie operacji ścieżki. W razie potrzeby należy raczej przesunąć lub obrócić model zadania CAM.

* DANE**Placement**: Ogólne umiejscowienie [pozycja i rotacja] obiektu - względem początku (lub początku kontenera obiektów nadrzędnych)
  + DANE**Angle**: Kąt w stopniach zastosowany do rotacji obiektu wokół wartości Axis
  + DANE**Axis**: Oś (jedna lub wiele), wokół której obraca się obiekt, ustawiana w pod-właściwościach: X, Y, Z
    - DANE**X**: Wartość osi X
    - DANE**Y**: Wartość osi Y
    - DANE**Z**: Wartość osi Z
  + DANE**Position**: Pozycja obiektu, ustawiana w pod-właściwościach: X, Y, Z - względem początku (lub początku kontenera obiektów nadrzędnych)
    - DANE**X**: Wartość odległości X
    - DANE**Y**: Wartość odległości Y
    - DANE**Z**: Wartość odległości Z
* DANE**Label**: Nazwa obiektu podana przez użytkownika (UTF-8)

Opcje czyszczenia

* DANE**Bound Box**: Czy operacja powinna być ograniczona przez obiekt materiału czy przez ramkę otaczającą obiektu bazowego
* DANE**Cut Mode**: Kierunek, w jakim ścieżka narzędzia powinna obejść część: Climb (zgodnie z ruchem wskazówek zegara) lub Conventional (przeciwnie do ruchu wskazówek zegara)
* DANE**Cut Pattern**: Wzór usuwania
* DANE**Cut Pattern Reversed**: Odwróć kolejność cięcia ścieżek przejścia. Dla wzorów cięcia okrężnego, zacznij od zewnątrz i pracuj w kierunku środka
* DANE**Depth Offset**: Odsunięcie osi Z od powierzchni obiektu
* DANE**Layer Mode**: Tryb zakończenia operacji: pojedynczy lub wielokrotny
* DANE**Pattern Center At**: Wybierz lokalizację punktu centralnego dla rozpoczęcia wzoru cięcia
* DANE**Pattern Center Custom**: Ustaw punkt początkowy dla wzoru cięcia
* DANE**Profile Edges**: Profiluj krawędzie wyboru. Dostępne są następujące opcje (screeny można zobaczyć w tym poście na forum: <https://forum.freecad.org/viewtopic.php?p=676452#p676452>):
  + DANE**None**: Nie twórz profilu
  + DANE**Only**: Twórz tylko profil i brak ścieżek wewnętrznych
  + DANE**First**: Rozpocznij od profilu, a następnie wykonaj resztę
  + DANE**Last**: Rozpocznij od reszty, a następnie wykonaj profil
* DANE**Sample Interval**: Odstęp między próbkami. Małe wartości powodują długie czasy oczekiwania
* DANE**Step Over**: Procent przejścia ścieżki narzędzia

Głębokość

* DANE**Clearance Height**: Wysokość potrzebna do usunięcia zacisków i przeszkód
* DANE**Final Depth**: Ostateczna głębokość narzędzia – najniższa wartość w osi Z
* DANE**Safe Height**: Wysokość, powyżej której dozwolone są szybkie ruchy
* DANE**Start Depth**: Głębokość początkowa narzędzia – pierwsza głębokość cięcia w osi Z
* DANE**Step Down**: Stopniowe zagłębianie narzędzia

Mesh Conversion

* DANE**Angular Deflection**: Mniejsze wartości dają drobniejszą, dokładniejszą siatkę. Mniejsze wartości znacząco wydłużają czas przetwarzania
* DANE**Linear Deflection**: Mniejsze wartości dają drobniejszą, dokładniejszą siatkę. Mniejsze wartości nie wydłużają znacząco czasu przetwarzania, ale mogą zwiększać zużycie pamięci

Optymalizacja

* DANE**Circular Use G2 G3**: Konwertuj współpłaszczyznowe łuki na polecenia G2/G3 w kodzie G dla wzorców cięcia `Circular` i `CircularZigZag`
* DANE**Gap Sizes**: Informacja zwrotna: trzy najmniejsze przerwy zidentyfikowane w geometrii ścieżki
* DANE**Gap Threshold**: Współliniowe i współosiowe artefakty mniejsze niż ten próg są zamykane w ścieżce
* DANE**Optimize Linear Paths**: Włącz optymalizację ścieżek liniowych (współliniowych punktów). Usuwa niepotrzebne współliniowe punkty z wygenerowanego kodu G-code
* DANE**Optimize Step Over Transitions**: Włącz oddzielną optymalizację przejść pomiędzy i przerw w każdej ścieżce skoku

Ścieżka

* DANE**Active**: Ustaw na False, aby zapobiec generowaniu kodu przez operację
* DANE**Base**: Podstawowa geometria dla tej operacji
* DANE**Comment**: Opcjonalny komentarz do tej operacji
* DANE**Coolant Mode**: Tryb chłodziwa dla tej operacji
* DANE**Cycle Time**: Szacowany czas cyklu operacji
* DANE**Tool Controller**: Definiuje kontroler narzędzia używany w operacji
* DANE**User Label**: Etykieta nadana przez użytkownika

Obrót

* DANE**Cutter Tilt**: Ustaw kąt pochylenia wrzeciona (narzędzia).
* DANE**Drop Cutter Dir**: Kierunek, w którym tworzone są linie narzędzia dropcutter.
* DANE**Drop Cutter Extra Offset**: Dodatkowe odsunięcie do wybranej ramki otaczającej - użyj podwłaściwości, aby ustawić wartości.
  + DANE**X**: Wartość przesunięcia w osi X.
  + DANE**Y**: Wartość przesunięcia w osi Y.
  + DANE**Z**: Wartość przesunięcia w osi Z.
* DANE**Rotation Axis**: Ustaw oś dla rotacji modelu.
* DANE**Start Index**: Kąt początkowy rotacji (index).
* DANE**Stop Index**: Kąt końcowy rotacji (index).

Wybrane ustawienia geometrii

* DANE**Avoid Last X Faces**: Unikaj obróbki ostatnich 'N' powierzchni z listy wybranych powierzchni w geometrii podstawowej.
* DANE**Avoid Last X Internal Features**: Nie obrabiaj wewnętrznych cech na unikanych powierzchniach.
* DANE**Boundary Adjustment**: Dodatnie wartości przesuwają narzędzie w stronę lub poza granicę. Ujemne wartości cofają narzędzie od granicy.
* DANE**Boundary Enforcement**: Jeśli wartość to prawda, narzędzie pozostanie wewnątrz granic modelu lub wybranych powierzchni.
* DANE**Handle Multiple Features**: Wybierz sposób przetwarzania wielu cech geometrii bazowej.
* DANE**Internal Features Adjustment**: Dodatnie wartości przesuwają narzędzie w stronę lub do wnętrza cechy. Ujemne wartości cofają narzędzie od cechy.
* DANE**Internal Features Cut**: Obrabiaj obszary wewnętrznych cech w większej wybranej powierzchni.

Punkt startowy

* DANE**Start Point**: Własny punkt początkowy ścieżki dla tej operacji, ustawiony w podwłaściwościach: X, Y, Z.
  + DANE**X**: Wartość osi X.
  + DANE**Y**: Wartość osi Y.
  + DANE**Z**: Wartość osi Z.
* DANE**Use Start Point**: Ustaw na "True", jeśli określasz punkt początkowy.

Powierzchnia

* DANE**Scan Type**: Płaski: płaski skan powierzchni 3D. Obrotowy: obrotowy skan w czwartej osi.

Odpady

* DANE**Ignore Waste**: Ignoruj obszary, które przekraczają określoną głębokość.
* DANE**Ignore Waste Depth**: Głębokość używana do identyfikacji obszarów odpadów do zignorowania.
* DANE**Release From Waste**: Przetnij przez odpady do głębokości na krawędzi modelu, uwalniając model.

## Układ edytora w oknie zadań

*Opisy ustawień znajdują się na powyższej liście właściwości*.

Ta sekcja jest po prostu mapą układu ustawień w edytorze okien dla operacji.

### Lokalizacja podstawowa

* **Base Geometry import selection**: Użyj tej listy, aby wybrać geometrię podstawową do importu z wybranej, istniejącej operacji.
* **Import**: Importuje geometrię podstawową wybranej operacji do listy geometrii bazowej bieżącej operacji.
* **Base Geometry list for current operation**: Lista geometrii podstawowej dla bieżącej operacji, jeśli jakieś elementy zostały wybrane.
* **Add**: Dodaje wybrany(e) element(y), które mają stanowić bazę dla ścieżki/ścieżek.
* **Remove**: Usuwa wybrany(e) element(y) z listy lokalizacji bazy.
* **Clear**: Czyści wszystkie elementy z listy lokalizacji bazy.

### Głębokość

* DANE**Start Depth**
* DANE**Final Depth**
* DANE**Step Down**

### Wysokość

* DANE**Safe Height**
* DANE**Clearance Height**

### Operacja

* DANE**Tool Controller**
* DANE**Coolant Mode**

* DANE**BoundBox**
* DANE**Scan Type**
* DANE**Layer Mode**
* DANE**BoundBox extra offset X**
* DANE**BoundBox extra offset Y**
* DANE**Drop Cutter Direction**
* DANE**Depth Offset**
* DANE**Step Over**
* DANE**Sample Interval**
* DANE**Optimize Output Enabled**

* DANE**Use Start Point**
* DANE**Boundary Enforcement**
* DANE**Optimize Linear Paths**

## Źródła

* Symulator G-Code *(ścieżka)*: [NCViewer](https://ncviewer.com/)
* Symulator G-code *(ścieżka)*: [CAMotics](https://www.camotics.org/)

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Surface/pl&oldid=1483035>"