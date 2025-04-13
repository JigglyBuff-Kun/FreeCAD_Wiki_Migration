---
title: Złożenie Utwórz połączenie stałe
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Złożenie Utwórz połączenie stałe |
| Lokalizacja w menu |
| Złożenie → Utwórz połączenie stałe |
| Środowisko pracy |
| [Złożenie](/Assembly_Workbench/pl "Assembly Workbench/pl") |
| Domyślny skrót |
| F |
| Wprowadzono w wersji |
| 1.0 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Assembly_CreateJointFixed.svg) Utwórz połączenie stałe tworzy połączenie blokujące dwie części złożenia razem, zapobiegając jakimkolwiek przesunięciom i obrotom.

## Użycie

1. Opcjonalnie wybierz dwa obiekty geometryczne należące do dwóch różnych części. Inne wskazania będą odrzucane.
2. Jest kilka sposobów na wywołanie tej komendy:
   * Wciśnij przycisk ![](/images/Assembly_CreateJointFixed.svg) Utwórz połączenie stałe.
   * Wybierz opcję **Złożenie → ![](/images/Assembly_CreateJointFixed.svg) Utwórz połączenie stałe** z menu.
   * Użyj skrótu: F.
3. Wcześniej wybrane części zostaną przesunięte do zetknięcia się ich wskazanych obiektów geometrycznych.
4. Okno dialogowe **Utwórz połączenie** zostanie otwarte w [panelu zadań](/Task_panel/pl "Task panel/pl"), wymieniając wcześniej wskazane obiekty.
5. Opcjonalnie zmień typ połączenia na liście rozwijanej:
   * Wybierz **Stałe**.
     1. Jeśli lista wskazań jest pusta: wybierz dwa obiekty geometryczne.
     2. Części zostaną przesunięte do zetknięcia się ich wskazanych obiektów geometrycznych.
     3. Opcjonalnie wprowadź wartość *Odsunięcie*.
     4. Opcjonalnie wprowadź wartość *Obrót*.
     5. Opcjonalnie wciśnij przycisk ![](/images/Button_sort.svg) aby zmienić kierunek połączenia.
   * Wybierz **Obrotowe**.
     1. Jeśli lista wskazań jest pusta: wybierz dwa obiekty geometryczne.
     2. Części zostaną przesunięte do zetknięcia się ich wskazanych obiektów geometrycznych.
     3. Opcjonalnie wprowadź wartość *Odsunięcie*.
     4. Opcjonalnie wciśnij przycisk ![](/images/Button_sort.svg) aby zmienić kierunek połączenia.
     5. Opcjonalnie zaznacz opcję **Kąt minimalny** i wprowadź wartość.
     6. Opcjonalnie zaznacz opcję **Kąt maksymalny** i wprowadź wartość.
   * Wybierz **Cylindryczne**.
     1. Jeśli lista wskazań jest pusta: wybierz dwa obiekty geometryczne.
     2. Opcjonalnie wciśnij przycisk ![](/images/Button_sort.svg) aby zmienić kierunek połączenia.
     3. Opcjonalnie zaznacz opcję **Długość minimalnie** i wprowadź wartość.
     4. Opcjonalnie zaznacz opcję **Długość maksymalnie** i wprowadź wartość.
     5. Opcjonalnie zaznacz opcję **Kąt minimalny** i wprowadź wartość.
     6. Opcjonalnie zaznacz opcję **Kąt maksymalny** i wprowadź wartość.
   * Wybierz **Przesuwne**.
     1. Jeśli lista wskazań jest pusta: wybierz dwa obiekty geometryczne.
     2. Opcjonalnie wprowadź wartość *Obrót*.
     3. Opcjonalnie wciśnij przycisk ![](/images/Button_sort.svg) aby zmienić kierunek połączenia.
     4. Opcjonalnie zaznacz opcję **Długość minimalnie** i wprowadź wartość.
     5. Opcjonalnie zaznacz opcję **Długość maksymalnie** i wprowadź wartość.
   * Wybierz **Przegub kulowy**.
     1. Jeśli lista wskazań jest pusta: wybierz dwa obiekty geometryczne.
   * Wybierz **Odległość**.
     1. Jeśli lista wskazań jest pusta: wybierz dwa obiekty geometryczne.
     2. Opcjonalnie wprowadź wartość *Odległość*.
     3. Opcjonalnie wciśnij przycisk ![](/images/Button_sort.svg) aby zmienić kierunek połączenia.
   * Wybierz **Równoległe**.
     1. Jeśli lista wskazań jest pusta: wybierz dwa obiekty geometryczne.
     2. Opcjonalnie wciśnij przycisk ![](/images/Button_sort.svg) aby zmienić kierunek połączenia.
   * Wybierz **Prostopadłe**.
     1. If the selection list is empty: select two geometric entities.
   * Select **Angle**.
     1. Jeśli lista wskazań jest pusta: wybierz dwa obiekty geometryczne.
     2. Opcjonalnie wprowadź wartość *Kąt*.
   * Wybierz **Przekładnia zębata**.
     1. Jeśli lista wskazań jest pusta: wybierz dwa obiekty geometryczne należące do dwóch różnych części, które wcześniej zostały użyte do zdefiniowania połączeń typu Przesuwne i Obrotowe. *(kierunek i oś obrotu połączenia przesuwnego muszą być prostopadłe)*
     2. Opcjonalnie wprowadź wartość *Promień skoku*.
   * Wybierz **Śruba**.
     1. Jeśli lista wskazań jest pusta: wybierz dwa obiekty geometryczne należące do dwóch różnych części, które wcześniej zostały użyte do zdefiniowania połączeń typu Przesuwne i Obrotowe. *(kierunek i oś obrotu połączenia przesuwnego muszą być równoległe)*
     2. Opcjonalnie wprowadź wartość *Promień skoku*.
   * Wybierz **Koła zębate**.
     1. Jeśli lista wskazań jest pusta: wybierz dwa obiekty geometryczne należące do dwóch różnych części, które wcześniej zostały użyte do zdefiniowania dwóch różnych połączeń typu Obrotowe.
     2. Opcjonalnie wprowadź wartość *Promień 1*.
     3. Opcjonalnie wprowadź wartość *Promień 2*.
     4. Opcjonalnie zaznacz/odznacz opcję **Obroty w przeciwnym kierunku**. *(odznaczenie wybiera opcję **Pas**)* - nie działa w wersji 1.0 RC póki co
   * Wybierz **Pas**.
     1. Jeśli lista wskazań jest pusta: wybierz dwa obiekty geometryczne należące do dwóch różnych części, które wcześniej zostały użyte do zdefiniowania dwóch różnych połączeń typu Obrotowe.
     2. Opcjonalnie wprowadź wartość *Promień 1*.
     3. Opcjonalnie wprowadź wartość *Promień 2*.
     4. Opcjonalnie zaznacz/odznacz opcję **Obroty w przeciwnym kierunku**. *(zaznaczenie wybiera opcję **Koła zębate**)* - nie działa w wersji 1.0 RC póki co
6. Części zostaną przesunięte do zetknięcia się ich wskazanych obiektów geometrycznych.
7. Wciśnij przycisk OK aby zakończyć używanie narzędzia.

## Uwagi

* Połączenie stałe można wykorzystać jako siłownik do kontroli ruchu w symulacji kinematycznej. Użycie kółka myszy w panelu zadań natychmiast przestawia połączone części.
  + Odsunięcie działa wzdłuż jego lokalnej osi Z, ujemne wartości są akceptowane.
  + Obrót działa wokół jego lokalnej osi, kąty > 360° a nawet ujemne są akceptowane.

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Fixed** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

### Dane

Joint

* DANE**Activated** (`Bool`): Wskazuje czy połączenie jest aktywne.
* DANE**Distance** (`Float`): Przechowuje **Odległość** połączenia typu Odległość. Jest też używana przez połączenia Przekładnia zębate i Śruba do przechowywania **Promienia skoku** i przez połączenia Koła zębate oraz Pas do przechowywania **Promienia 1**.
* DANE**Distance2** (`Float`): Druga odległość połączenia. Używana tylko przez połączenia Koła zębate i Pas do przechowywania **Promienia 2**.
* DANE**Joint Type** (`Ennumeration`): Typ połączenia. (`Fixed`, `Revolute`, `Cylindrical`, `Slider`, `Ball`, `Distance`, `Parallel`, `Perpendicular`, `Angle`, `RackPinion`, `Screw`, `Gears`, `Belt`)

Usunięte właściwości (v.1.0.0-RC-38728) To były właściwości, których można było użyć do tworzenia animacji:

* DANE**Offset** (`Vector`): Wektor odsunięcia połączenia.
* DANE**Rotation** (`Float`): Obrót połączenia.

Joint Connector 1

* DANE**Detach1** (`Bool`): Zapobiega ponownemu przeliczaniu właściwości placement1, umożliwiając własne pozycjonowanie.
* DANE**Offset1** (`Placement`): To odsunięcie mocowania pierwszego łącznika połączenia. (dodane w v.1.0.0-RC-38728)
* DANE**Placement1** (`Placement`): To jest lokalny układ współrzędnych w obrębie obiektu reference1, który będzie używany dla połączenia.
* DANE**Reference1** (`XlinkSubHidden`): Pierwsze odniesienie połączenia.

Usunięte właściwości:

* DANE**Element1** (`String`): Wskazany element pierwszego obiektu.
* DANE**Object1** (`String`): Pierwszy obiekt połączenia.
* DANE**Part1** (`Link`): Pierwsza część w połączeniu.
* DANE**Vertex1** (`String`): Wskazany wierzchołek pierwszego obiektu.

Joint Connector 2

* DANE**Detach2** (`Bool`): Zapobiega ponownemu przeliczaniu właściwości placement2, umożliwiając własne pozycjonowanie.
* DANE**Offset2** (`Placement`): To odsunięcie mocowania drugiego łącznika połączenia. (dodane w v.1.0.0-RC-38728)
* DANE**Placement2** (`Placement`): To jest lokalny układ współrzędnych w obrębie obiektu reference2, który będzie używany do połączenia.
* DANE**Reference2** (`XlinkSubHidden`): Drugie odniesienie połączenia.

Usunięte właściwości:

* DANE**Element2** (`String`): Wskazany element drugiego obiektu.
* DANE**Object2** (`String`): Drugi obiekt połączenia.
* DANE**Part2** (`Link`): Druga część w połączeniu.
* DANE**Vertex2** (`String`): Wskazany wierzchołek drugiego obiektu.

Limits

* DANE**Angle Max** (`Float`): Maksymalny limit dla kąta pomiędzy układami współrzędnych (ich osiami X).
* DANE**Angle Min** (`Float`): Minimalny limit dla kąta pomiędzy układami współrzędnych (ich osiami X).
* DANE**Enable Angle Max** (`Bool`): Włącz ograniczenie maksymalnego kąta tego połączenia.
* DANE**Enable Angle Min** (`Bool`): Włącz ograniczenie minimalnego kąta tego połączenia.
* DANE**Enable Length Max** (`Bool`): Włącz ograniczenie maksymalnej długości tego połączenia.
* DANE**Enable Length Min** (`Bool`): Włącz ograniczenie minimalnej długości tego połączenia.
* DANE**Length Max** (`Float`): Maksymalny limit odległości między oboma układami współrzędnych *(wzdłuż ich osi Z)*.
* DANE**Length Min** (`Float`): Minimalny limit odległości między oboma układami współrzędnych *(wzdłuż ich osi Z)*.

Usunięta właściwość:

* DANE**Enable Limits** (`Bool`): Czy to połączenie korzysta z ograniczeń?

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateJointFixed/pl&oldid=1550239>"