---
title: CAM Rowek
---
:::caution
Jest to nieukończona funkcja eksperymentalna.Włącz funkcje eksperymentalne
:::

|  |
| --- |
| CAM: Rowek |
| Lokalizacja w menu |
| CAM → Rowek |
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

Narzędzie ![](/images/CAM_Slot.svg) Rowek tworzy prostą operację rowkowania korzystając z różnych metod wejściowych.

Wejścia obejmują:

* wskazanie jednej lub więcej ścian lub krawędzi.
* wskazanie dwóch wierzchołków.
* wprowadzenie dwóch niestandardowych punktów.

Obiekt CAM Slot jest dodawany jako część ![](/images/CAM_Job.svg) [Zadania CAM](/CAM_Job/pl "CAM Job/pl").

## Użycie

1. Wybierz geometrię odniesienia na modelu:
   * jedną lub więcej powierzchni lub krawędzi.
   * dwa wierzchołki.
   * ***nic***  aby użyć dwóch niestandardowych punktów wprowadzonych w Widoku właściwości zakładki Dane: Custom Point1 i Custom Point2.
2. Wywołaj polecenie Rowek na jeden z kilku sposobów:
   * Naciskając przycisk ![](/images/CAM_Slot.svg) Rowek na pasku narzędzi.
   * Używając opcji  CAM → ![](/images/CAM_Slot.svg) Rowek z górnego menu.
3. Dostosuj żądane właściwości. Opisy dostępnych właściwości znajdują się poniżej.

#### Uwagi dotyczące użycia

* Wszystkie rowki:
  + Zarówno początek, jak i koniec ścieżki rowka mogą być wydłużane lub skracane. Użyj właściwości `Extend Path Start` i `Extend Path End`.
  + Użyj właściwości `Layer Mode`, aby wyciąć rowek w trybie `Single-pass` na ostateczną głębokość lub w trybie `Multi-pass` z użyciem dostępnej właściwości `Step Down`.
  + Przełącz właściwość `Reverse Direction`, aby odwrócić kierunek ścieżki cięcia.

* Rowki liniowe:
  + Obecnie brak możliwości przesunięcia rowków liniowych bocznie (równolegle do ścieżki ruchu).  ***Przykład:***  Jeśli średnica narzędzia jest mniejsza niż szerokość obszaru rowka, który chcesz wyczyścić. Obecne działanie tej operacji polega na stworzeniu zestawu ścieżek w płaszczyźnie wzdłuż osi wyznaczonego rowka, co skutkuje niepełnym usunięciem objętości rowka. Niektórzy użytkownicy chcieliby, aby operacja tworzyła wiele ścieżek przesuniętych bocznie, aby oczyścić cały obszar rowka; obecnie nie jest to bezpośrednio możliwe, ale można to osiągnąć, używając "Custom Points", patrz "Frezowanie pionowych ścian" poniżej. Alternatywnie, użyj operacji Pocket do takiego czyszczenia.
  + Utwórz niestandardowy rowek liniowy, używając właściwości `Custom Point1` i `Custom Point2` bez wyboru geometrii.  ***Przykład:***  Zainicjuj operację Rowek w GUI i kliknij `OK`, aby zapisać. Teraz zlokalizuj i edytuj właściwości `Custom Point1` i `Custom Point2` w zakładce Dane nowo utworzonej operacji Rowek. Ponownie przelicz operację, aby zaktualizować ścieżkę.

* Frezowanie pionowych ścian:
  + Większość narzędzi CAM nie jest w stanie stworzyć ścieżki na pojedynczej pionowej płaszczyźnie, ponieważ rzutowanie na płaszczyznę poziomą ma zerową powierzchnię (wewnętrzne ograniczenie). Operacja Rowek umożliwia to, wybierając "Punkty niestandardowe", które definiują linię równoległą do pionowej płaszczyzny oraz odpowiednie parametry głębokości.

* Rowki łukowe/cylindryczne:
  + Tworzenie rowków łukowych/cylindrycznych:
    1. Należy wybrać jeden dolny łuk rowka. Spowoduje to utworzenie ścieżki bezpośrednio na krawędzi wybranego łuku.
    2. Następnie trzeba edytować właściwość `Extend Radius` w zakładce Dane operacji. Używając edytora wyrażeń, ustaw ją na wartość `OpToolDiameter / 2.0` lub jej wersję ujemną `OpToolDiameter / -2.0`, w zależności od tego, czy wybrano łuk wewnętrzny czy zewnętrzny rowka.
    3. Przelicz ponownie operację.
    4. Pamiętaj, że jeśli średnica narzędzia nie jest równa szerokości rowka, ścieżka ***nie'** będzie znajdować się w prawidłowej lokalizacji. W takim przypadku dostosuj wartość we właściwości `Extend Radius`, o której mowa powyżej.*
  + Obecnie użytkownicy nie mogą tworzyć niestandardowej ścieżki łukowej/cylindrycznej. Należy dodać trzecią właściwość `Custom Center` oraz dodatkowe modyfikacje w kodzie źródłowym.

## Właściwości

***Uwaga*** : Nie wszystkie z tych właściwości są dostępne w edytorze okna zadań. Niektóre są dostępne tylko na karcie Dane w panelu Widok właściwości dla tej operacji.

Podstawa

Uwaga: Zaleca się, aby nie edytować właściwości Umiejscowienie operacji ścieżki. W razie potrzeby należy raczej przesunąć lub obrócić model zadania CAM.

* DANE**Placement**: Ogólne umiejscowienie [pozycja i rotacja] obiektu względem początku (lub początku kontenera obiektów nadrzędnych)
  + DANE**Angle**: Kąt w stopniach zastosowany do rotacji obiektu wokół wartości właściwości Axis
  + DANE**Axis**: Oś (jedna lub więcej), wokół której należy obrócić obiekt, ustawiona w podwłaściwościach: X, Y, Z
    - DANE**X**: Wartość osi X
    - DANE**Y**: Wartość osi Y
    - DANE**Z**: Wartość osi Z
  + DANE**Position**: Pozycja obiektu, ustawiona w podwłaściwościach: X, Y, Z - względem początku (lub początku kontenera obiektów nadrzędnych)
    - DANE**X**: Wartość odległości osi X
    - DANE**Y**: Wartość odległości osi Y
    - DANE**Z**: Wartość odległości osi Z
* DANE**Label**: Nazwa obiektu nadana przez użytkownika (UTF-8)

Głębokość

* DANE**Clearance Height**: Wysokość potrzebna do usunięcia zacisków i przeszkód
* DANE**Final Depth**: Końcowa głębokość narzędzia - najniższa wartość w osi Z
* DANE**Finish Depth**: Maksymalna ilość materiału usuniętego podczas ostatniego przejścia. Wysokość (grubość) ostatniego poziomu cięcia - *ustawiana dla lepszego wykończenia*.
* DANE**Safe Height**: Wysokość, powyżej której dozwolone są ruchy szybkie. (Bezpieczna wysokość szybkiego ruchu między lokalizacjami)
* DANE**Start Depth**: Początkowa głębokość narzędzia - *pierwsza głębokość cięcia w osi Z*
* DANE**Step Down**: Przyrostowa głębokość cięcia narzędzia podczas operacji

![](/images/Path-DepthsAndHeights.gif)

Wizualne odniesienie do właściwości *(ustawień)* głębokości

Ścieżka

* DANE**Active**: Ustaw na False, aby zapobiec generowaniu kodu
* DANE**Base**: Geometria podstawowa dla tej operacji
* DANE**Comment**: Opcjonalny komentarz do tej operacji
* DANE**Coolant Mode**: Tryb chłodzenia dla tej operacji
* DANE**Cycle Time**: Szacowany czas cyklu dla tej operacji
* DANE**Tool Controller**: Definiuje kontroler narzędzia używany w operacji
* DANE**User Label**: Etykieta przypisana przez użytkownika

Rowek

* DANE**Custom Point1**: Wprowadź niestandardowy punkt startowy dla ścieżki rowka.
* DANE**Custom Point2**: Wprowadź niestandardowy punkt końcowy dla ścieżki rowka.
* DANE**Cut Pattern**: Ustaw wzór geometryczny czyszczenia do użycia w operacji.
* DANE**Extend Path End**: Dodatnia wartość wydłuża koniec ścieżki, ujemna skraca.
* DANE**Extend Path Start**: Dodatnia wartość wydłuża początek ścieżki, ujemna skraca.
* DANE**Extend Radius**: Dla łuków/kręgów, przesuwanie promienia dla ścieżki.
* DANE**Layer Mode**: Wykonaj operację w jednym przejściu na głębokości lub w wielu przejściach do końcowej głębokości.
* DANE**Path Orientation**: Wybierz orientację ścieżki względem wybranych cech.
* DANE**Reference1**: Wybierz punkt do użycia na pierwszej wybranej cechy.
* DANE**Reference2**: Wybierz punkt do użycia na drugiej wybranej cechy.
* DANE**Reverse Direction**: Włącz, aby odwrócić kierunek cięcia ścieżki rowka.

Punkt początkowy

* DANE**Start Point**: Niestandardowy punkt początkowy ścieżki tej operacji.
  + DANE**X**: Wartość odległości w osi X
  + DANE**Y**: Wartość odległości w osi Y
  + DANE**Z**: Wartość odległości w osi Z
* DANE**Use Start Point**: Ustaw na True, jeśli ręcznie określasz punkt początkowy. Ustaw punkt początkowy w polu danych właściwości Start Point.

## Układ edytora w oknie zadań

*Opisy ustawień znajdują się na powyższej liście właściwości*.

Ta sekcja jest po prostu mapą układu ustawień w edytorze okien dla operacji.

### Geometria podstawowa

* **Dodaj**: Dodaje wybrane elementy, które powinny być bazą dla ścieżek.
* **Usuń**: Usuwa wybrane elementy z listy Geometria podstawowa.
* **Wyczyść**: Czyści wszystkie elementy na liście Geometria podstawowa.

### Głębokości

* DANE**Start Depth**
* DANE**Final Depth**
* DANE**Step Down**

### Wysokości

* DANE**Safe Height**
* DANE**Clearance Height**

### Operacja

* DANE**Tool Controller**: Narzędzie i jego ustawienia używane w tej operacji.
* DANE**Coolant Mode**: Tryb chłodzenia dla tej operacji.
* DANE**Start Reference \*\***: Wybierz punkt do użycia na pierwszym wybranym elemencie.
* DANE**End Reference \*\***: Wybierz punkt do użycia na drugim wybranym elemencie.
* DANE**Extend Path End**: Dodatnia wartość wydłuża koniec ścieżki, ujemna skraca.
* DANE**Extend Path Start**: Dodatnia wartość wydłuża początek ścieżki, ujemna skraca.
* DANE**Layer Mode**: Zakończ operację w jednym przejściu na głębokości lub w wielu przejściach do ostatecznej głębokości.
* DANE**Path Orientation \*\***: Wybierz orientację ścieżki względem wybranych cech.
* DANE**Reverse Direction**: Włącz, aby odwrócić kierunek cięcia ścieżki rowka.

**\*\*** Widoczność zmienia się w zależności od wybranej geometrii podstawowej.

## Tworzenie skryptów

*Zobacz również:* [FreeCAD podstawy tworzenia skryptów](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Przykład:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Slot/pl&oldid=1482804>"