---
title: CAM Algorytm adaptacyjny
---
|  |
| --- |
| CAM: Adaptacyjnie |
| Lokalizacja w menu |
| CAM → Adaptacyjnie |
| Środowisko pracy |
| [CAM](/CAM_Workbench/pl "CAM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Algorytm operacji ![](/images/CAM_Adaptive.svg) Adaptacyjnie tworzy ścieżki do czyszczenia i profilowania. Operacja zmienia zaangażowanie narzędzia tak, aby usuwanie materiału nigdy nie przekraczało maksymalnej wartości.

## Użycie

Instrukcje używania operacji Adaptacyjnie są tu przedstawione.

#### Operacja podstawowe

1. Naciśnij ikonę ![](/images/CAM_Adaptive.svg) Adaptacyjnie, lub wybierz opcję CAM → ![](/images/CAM_Adaptive.svg) Adaptacyjnie z górnego menu.
2. Wybierz kontroler narzędzia dla operacji z okna dialogowego kontrolera narzędzi, jeśli zostaniesz o to poproszony.
3. Dostosuj głębokości operacji w zakładce Głębokość: Głębokość początkowa, Głębokość końcowa, Krok w dół.
4. W razie potrzeby dokonaj poprawek w zakładce Wysokości.
5. Skonfiguruj ustawienia w zakładce Operacja:
   1. (**Zobacz sekcję [Właściwości](#Właściwości) → Adaptacyjnie poniżej.**)
   2. Ustaw wartość Szerokość skrawania jako procent średnicy narzędzia.
6. Jeśli chcesz zobaczyć podgląd wyników przed zaakceptowaniem ustawień, kliknij Zastosuj.
7. Kliknij OK, aby potwierdzić i wygenerować ścieżki.

### Wstępne uwagi na temat czyszczenia adaptacyjnego

* W zależności od rozmiaru i złożoności obszaru operacji, może być lepiej nie przeliczać operacji po każdej zmianie właściwości; zamiast tego rozważ:
  + dezaktywowanie operacji za pomocą narzędzia ![](/images/CAM_OpActiveToggle.svg) [Aktywne](/CAM_OpActiveToggle/pl "CAM OpActiveToggle/pl"), wprowadzenie zmian we właściwościach operacji, a następnie ponowne kliknięcie ikony ![](/images/CAM_OpActiveToggle.svg) [Aktywne](/CAM_OpActiveToggle/pl "CAM OpActiveToggle/pl") w celu ponownego aktywowania operacji - co wywoła wewnętrzne przeliczenie.
* Operacja ![](/images/CAM_Adaptive.svg) Adaptacyjnie może zawierać kilka błędów, które nie zostały jeszcze jednoznacznie zidentyfikowane. Prosimy zgłaszać błędy i problemy na [Forum FreeCAD Path/CAM](https://forum.freecadweb.org/viewforum.php?f=15).
* Nie wszystkie kształty narzędzi mogą być uwzględniane w tej operacji. Sprawdź forum FreeCAD w celu uzyskania dalszych informacji.
* Jeśli zdecydujesz się uruchomić symulator ścieżek w środowisku pracy CAM, używa on tylko standardowego frezu końcowego do symulacji ścieżek. Dlatego nie zobaczysz usuwania materiału specyficznego dla kształtu narzędzia. Usuwanie materiału jest pokazane przy użyciu kształtu frezu końcowego.

## Właściwości

***Uwaga*** : Nazwy niektórych właściwości na tej liście różnią się nieco od tych samych ustawień używanych w edytorze okna dialogowego.

Adaptacyjnie

* DANE**Force Inside-Out**: Wymuś wchodzenie w materiał od środka i usuwanie w kierunku krawędzi
* DANE**Helix Angle**: Kąt rampy spiralnej (stopnie)
* DANE**Helix Cone Angle**: Kąt (stopnie) stożka spiralnego
* DANE**Helix Diameter Limit**: Ograniczenie średnicy wejścia spiralnego, jeśli limit jest większy niż średnica narzędzia lub 0, używana jest średnica narzędzia
* DANE**Keep Tool Down Ratio**: Maksymalna długość ścieżki trzymania narzędzia w dół w porównaniu do bezpośredniej odległości między punktami
* DANE**Lift Distance**: Odległość podnoszenia podczas szybkich ruchów
* DANE**Operation Type**: Rodzaj operacji adaptacyjnej: Usuwanie lub Profilowanie
* DANE**Side**: Strona wybranych powierzchni, którą narzędzie powinno ciąć: Wewnętrzna lub Zewnętrzna
* DANE**Step Over**: Procent średnicy narzędzia, który należy przesunąć na każdej ścieżce
* DANE**Stock to Leave**: Ile materiału pozostawić (np. na osobną operację wykończeniową)
* DANE**Tolerance**: Wpływa na dokładność i wydajność
* DANE**Use Helix Arcs**: Użyj łuków (G2) dla rampy spiralnej

Podstawa

Uwaga: Zaleca się, aby nie edytować właściwości Umiejscowienie operacji ścieżki. W razie potrzeby należy raczej przesunąć lub obrócić model zadania CAM.

* DANE**Placement**: Ogólne umiejscowienie [położenie i rotacja] obiektu - względem początku (lub początku kontenera obiektu nadrzędnego)
  + DANE**Angle**: Kąt w stopniach stosowany do obrotu obiektu wokół wartości właściwości Axis
  + DANE**Axis**: Oś (jedna lub wiele), wokół której obiekt ma być obracany, ustawiona w pod-właściwościach: X, Y, Z
    - DANE**X**: Wartość osi X
    - DANE**Y**: Wartość osi Y
    - DANE**Z**: Wartość osi Z
  + DANE**Position**: Położenie obiektu, ustawione w pod-właściwościach: X, Y, Z - względem początku (lub początku kontenera obiektu nadrzędnego)
    - DANE**X**: Wartość odległości w osi X
    - DANE**Y**: Wartość odległości w osi Y
    - DANE**Z**: Wartość odległości w osi Z
* DANE**Label**: Nazwa obiektu dostarczona przez użytkownika (UTF-8)

Głębokość

* DANE**Clearance Height**: Wysokość potrzebna do usunięcia zacisków i przeszkód
* DANE**Final Depth**: Ostateczna głębokość narzędzia - najniższa wartość w osi Z
* DANE**Finish Depth**: Maksymalna ilość materiału usuwanego podczas ostatniego przejazdu
* DANE**Safe Height**: Wysokość powyżej której dozwolone są szybkie ruchy
* DANE**Start Depth**: Początkowa głębokość narzędzia - pierwsza głębokość cięcia w osi Z
* DANE**Step Down**: Stopniowe zagłębianie narzędzia

Ścieżka

* DANE**Active**: Ustaw na False, aby zapobiec generowaniu kodu przez operację
* DANE**Comment**: Opcjonalny komentarz dla tej operacji
* DANE**Tool Controller**: Określa kontroler narzędzia używany w operacji
* DANE**User Label**: Etykieta przypisana przez użytkownika

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
* DANE**Finish Depth**
* DANE**Step Down**

### Heights

* DANE**Safe Height**
* DANE**Clearance Height**

### Operacja

* DANE**Tool Controller**
* DANE**Cut Region** (Side)
* DANE**Operation Type**
* DANE**Step Over Percent**
* DANE**Accuracy vs Performance** (Tolerance)
* DANE**Helix Ramp Angle**
* DANE**Helix Cone Angle**
* DANE**Helix Max Diameter** (Helix Diameter Limit)
* DANE**Lift Distance**
* DANE**Keep Tool Down Ratio**
* DANE**Stock to Leave**
* DANE**Force Clearing Inside-Out**
* DANE**Stop**

## Znane problemy

W przypadku gdy CAM: Adaptacyjnie tworzy niepożądane ścieżki, spróbuj ustawić DANE**Stock to Leave** na `0,001 mm` lub więcej. Możesz zmniejszyć średnicę narzędzia o dwukrotność tej wartości, aby utrzymać dokładność ścieżek.

Dostępne jest poniższe rozwiązanie (ale nikt go nie implementuje):

<https://github.com/FreeCAD/FreeCAD/pull/5276>

## Źródła

* Strona GitHub autora o oryginalnym projekcie: [kreso-t/FreeCAD\_Mod\_Adaptive\_Path](https://github.com/kreso-t/FreeCAD_Mod_Adaptive_Path)
* Temat na forum FreeCAD o operacji Adaptacyjnie: [Adaptive Path/CAM Operation](https://forum.freecadweb.org/viewtopic.php?f=15&t=30127)

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Adaptive/pl&oldid=1482921>"