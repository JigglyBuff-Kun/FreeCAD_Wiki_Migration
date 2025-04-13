---
title: Zbrojenie Zbrojenie stóp fundamentowych
---
|  |
| --- |
| Architektura: Zbrojenie stóp fundamentowych |
| Lokalizacja w menu |
| 3D / BIM → Narzędzia zbrojenia → Zbrojenie stóp fundamentowych |
| Środowisko pracy |
| [Zbrojenie](/Reinforcement_Workbench/pl "Reinforcement Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie **Zbrojenie stóp fundamentowych** pozwala użytkownikowi na tworzenie prętów zbrojeniowych wewnątrz obiektu [konstrukcji](/Arch_Structure/pl "Arch Structure/pl") stopy.

To polecenie jest częścią [zewnętrznego środowiska pracy](/External_workbenches/pl "External workbenches/pl") [Zbrojenie](/Reinforcement_Workbench/pl "Reinforcement Workbench/pl"), które można zainstalować za pomocą ![](/images/Std_AddonMgr.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl").

![](/images/Isometric_view_of_Columns_footing.png)

Przykład zbrojenia ławy fundamentowej w [konstrukcji](/Arch_Structure/pl "Arch Structure/pl") stopy.

![](/images/Front_View_of_Column_footing.png)

Widok z przodu przykładu zbrojenia stopy.

## Użycie

1. Wybierz pionową ścianę uprzednio utworzonej ![](/images/Arch_Structure.svg) [konstrukcji](/Arch_Structure "Arch Structure") stopy obiektu jak pokazano na poniższym obrazku.

:   ![](/images/Footing_Face_selected.png)
:   Wybrana ściana dla konstrukcji stopy

2. Następnie wybierz Zbrojenie stóp fundamentowych z narzędzi zbrojeniowych.

3. Na ekranie pojawi się okno dialogowe Zbrojenie ławy fundamentowej, jak pokazano poniżej.

:   ![](/images/Footing_Reinforcement_GUI_.png)
:   Okno dialogowe dla zbrojenia ławy fundamentowej

4. Wybierz żądany typ prętów oraz inne dane wejściowe dla prętów w kierunku równoległym do wybranej ściany w siatce zbrojenia ławy fundamentowej, jak pokazano na poniższym rysunku.

:   ![](/images/Input_Fields_for_Parallel_rebars_in_footing_GUI_Dialog_box.png)
:   Okno dialogowe dla zbrojenia stóp fundamentowych zbrojenie w kierunku równoległym do wybranej ściany

5. Teraz kliknij na przycisk Dalej lub wybierz Poprzeczne pręty zbrojeniowe z listy i wypełnij żądane dane wejściowe dla prętów zbrojeniowych w kierunku poprzecznym wybranej ściany w siatce zbrojenia ławy fundamentowej, jak pokazano na poniższym rysunku.

:   ![](/images/GUICrossRebarInputsFooting.png)
:   Okno dialogowe dla zbrojenia stóp fundamentowych zbrojenie w kierunku poprzecznym do wybranej ściany

6. Kliknij przycisk Dalej lub kliknij na Słupy w widoku listy i wpisz żądane dane dla słupów w zbrojeniu ławy fundamentowej. W tym miejscu można wybrać, czy w słupach mają być dodawane dodatkowe pręty zbrojeniowe, czy nie.

:   ![](/images/Columns_input_fields_for_column_footing.png)
:   Okno dialogowe dla pól wprowadzania danych w słupach zbrojenia ławy fundamentowej

7. Kliknij Dalej lub kliknij na Więzy w widoku listy i wpisz żądane dane dla Ściągów w słupach zbrojenia ławy fundamentowej.

:   ![](/images/Ties_input_fields_for_column_footing.png)
:   Okno dialogowe dla pól wprowadzania danych dla Ściągów w kolumnach Zbrojenie ławy fundamentowej.

8. Kliknij Dalej lub kliknij na Pręty zbrojeniowe główne w widoku listy i wpisz żądane dane dla prętów zbrojeniowych głównych w słupach zbrojenia ławy fundamentowej.

:   ![](/images/Main_Rebar_input_fields_for_column_footing.png)
:   Okno dialogowe dla pól wprowadzania danych dotyczących zbrojenia głównego w kolumnach zbrojenia ławy fundamentowej.

Uwaga: kroki 9 i 10 są wymagane tylko wtedy, gdy w kroku 6 włączona jest kontrola pomocniczych prętów zbrojeniowych.

9. Kliknij Dalej lub kliknij na XDir Pręty zbrojeniowe pomocnicze w widoku listy i wpisz żądane dane dla prętów zbrojeniowych pomocniczych w kierunku X w kolumnie w zbrojeniu ławy fundamentowej.

:   ![](/images/X_Direction_secondary_rebar_sinput_fields_for_column_footing_Reinforcement.png)
:   Okno dialogowe dla pól wprowadzania danych dotyczących prętów zbrojeniowych w kierunku X w słupach zbrojenia ławy fundamentowej.

10. Kliknij przycisk Dalej lub kliknij na YDir Pręty zbrojeniowe pomocnicze w widoku listy i wpisz żądane dane dla prętów zbrojeniowych pomocniczych w kierunku Y w kolumnie w zbrojeniu ławy fundamentowej.

:   ![](/images/Y_Direction_secondary_rebars_input_fields_for_Column_footing_reinforcement.png)
:   Okno dialogowe dla pól wprowadzania danych dla prętów zbrojeniowych w kierunku Y w kolumnach zbrojenia ławy fundamentowej.

11. Kliknij OK lub Zastosuj lub Zakończ, aby wygenerować wzmocnienie stopy.

12. Kliknij Anuluj, aby zamknąć okno dialogowe.

## Właściwości

### **Właściwości prętów zbrojeniowych w kierunku równoległym do wybranej ściany w zbrojeniu stopy fundamentowej:**

* DANE**Wzdłużne pokrycie siatką**: Reprezentuje wyrównanie siatki zbrojeniowej wzdłuż górnej i / lub dolnej powierzchni konstrukcji. Może mieć trzy wartości "Góra", "Dół" i "Obie".
* DANE**Typ zbrojenia**: Typ prętów zbrojeniowych dla równoległych prętów zbrojeniowych do zbrojenia stóp fundamentowych. Może mieć trzy wartości: "StraightRebar" *(pręt zbrojeniowy prosty)*, "LShapeRebar" *(pręt zbrojeniowy w kształcie litery L)* i "UShapeRebar" *(pręt zbrojeniowy w kształcie litery U)*.
* DANE**Pokrycie od przodu**: Odległość równoległego pręta zbrojeniowego od wybranej powierzchni.
* DANE**Pokrycie z lewej**: Odległość lewego końca równoległego pręta zbrojeniowego do lewego boku konstrukcji.
* DANE**Pokrycie z prawej**: Odległość prawego końca równoległego pręta zbrojeniowego do prawego boku konstrukcji.
* DANE**Pokrycie od dołu**: Odległość równoległych prętów zbrojeniowych od dolnej powierzchni konstrukcji.
* DANE**Pokrycie od góry**: Odległość równoległych prętów zbrojeniowych od górnej powierzchni konstrukcji.
* DANE**Pokrycie od tyłu**: Pokrycie zbrojeniem tyłu stopy fundamentowej z równolegle ułożonych prętów zbrojeniowych.
* DANE**Zaokrąglanie**: Wartość zaokrąglenia, którą należy zastosować do narożników prętów, wyrażona w krotności średnicy równoległych prętów zbrojeniowych.
* DANE**Średnica**: Średnica równoległych prętów zbrojeniowych.
* DANE**Ilość**: Zawiera liczbę równoległych prętów zbrojeniowych.
* DANE**Rozstawienie**: Zawiera odstępy między równoległymi prętami zbrojeniowymi.

### **Właściwości prętów zbrojeniowych w kierunku poprzecznym do wybranej ściany w zbrojeniu stopy fundamentowej:**

* DANE**Typ zbrojenia**: Typ prętów zbrojeniowych dla poprzecznych prętów zbrojeniowych do zbrojenia stóp fundamentowych. Może mieć trzy wartości: "StraightRebar" *(pręt zbrojeniowy prosty)*, "LShapeRebar" *(pręt zbrojeniowy w kształcie litery L)* i "UShapeRebar" *(pręt zbrojeniowy w kształcie litery U)*.
* DANE**Pokrycie od przodu**: Odległość poprzecznego pręta zbrojeniowego do powierzchni poprzecznej "cross\_face" *(powierzchnia prostopadła do wybranej powierzchni)*.
* DANE**Pokrycie z lewej**: Odległość lewego końca poprzecznego pręta zbrojeniowego do lewego boku konstrukcji.
* DANE**Pokrycie z prawej**: Odległość prawego końca poprzecznego pręta zbrojeniowego do prawego boku konstrukcji.
* DANE**Pokrycie od dołu**: Odległość poprzecznego prętów zbrojeniowych od dolnej powierzchni konstrukcji.
* DANE**Pokrycie od góry**: Odległość poprzecznego prętów zbrojeniowych od górnej powierzchni konstrukcji.
* DANE**Pokrycie od tyłu**: Pokrycie zbrojeniem tyłu stopy fundamentowej z poprzecznie ułożonych prętów zbrojeniowych.
* DANE**Zaokrąglanie**: Wartość zaokrąglenia, którą należy zastosować do narożników prętów, wyrażona w krotności średnicy równoległych prętów zbrojeniowych.
* DANE**Średnica**: Średnica równoległych prętów zbrojeniowych.
* DANE**Ilość**: Zawiera liczbę równoległych prętów zbrojeniowych.
* DANE**Rozstawienie**: Zawiera odstępy między równoległymi prętami zbrojeniowymi.

### **Właściwości zbrojenia słupów w stopie fundamentowej:**

* DANE**Pokrycie od przodu**: Odległość między wybraną ścianą a słupem.
* DANE**Pokrycie z lewej**: Odległość między lewą ścianą a słupem.
* DANE**Pokrycie od prawej**: Odległość między prawą stroną a słupem.
* DANE**Pokrycie od tyłu**: Odległość między tylną ścianą a słupem.
* DANE**Szerokość słupa**: Szerokość dla słupa.
* DANE**Długość słupa**: Długość słupa.
* DANE**Ilość słupów w kierunku X**: Zawiera liczbę słupów w kierunku X. Jeśli opcja Ilość w kierunku X jest włączona.
* DANE**Odstępy między słupami w kierunku X**: Zawiera odstępy między słupami w kierunku X. Jeśli opcja ta jest włączona.
* DANE**Ilość kolumn w kierunku Y**: Zawiera ilość słupów w kierunku Y. Jeśli opcja Ilość w kierunku Y jest włączona.
* DANE**Odstępy między słupami w kierunku Y**: Zawiera odstępy między słupami w kierunku Y. Jeśli opcja ta jest włączona.
* DANE**Dodaj pomocnicze pręty zbrojeniowe**: Jeżeli opcja jest zaznaczona, dodaje pomocnicze pręty zbrojeniowe w słupach w kierunku X i Y.

### **Właściwości zbrojenia prętami cienkimi słupów w stopach fundamentowych:**

* DANE**Pokrycie od góry**: Wierzchnie pokrycie prętami cienkimi na zewnątrz ławy fundamentowej od strony głównych prętów zbrojeniowych.
* DANE**Pokrycie od dołu**: Dolne pokrycie prętami cienkimi, od spodu głównych prętów zbrojeniowych w ławie fundamentowej w pobliżu siatki.
* DANE**Średnica**: Średnica prętów.
* DANE**Kąt gięcia**: Kąt wygięcia dla prętów.
* DANE**Współczynnik wydłużenia**: Współczynnik wydłużenia dla przedłużonej krawędzi pręta.
* DANE**Liczba prętów**: Zawiera liczbę prętów zbrojeniowych lub odstępy między prętami, jeśli opcja Ilość jest włączona.
* DANE**Rozstaw prętów**: Zawiera odstępy między prętami, jeśli opcja Odstępy jest włączona.

### **Właściwości zbrojenia prętami głównymi słupów w stopach fundamentowych:**

* DANE**Typ zbrojenia**: Typ prętów zbrojeniowych dla głównych prętów zbrojeniowych słupa. Pobiera on dwa typy danych wejściowych: "StraightRebar" *(pręt zbrojeniowy prosty)*, "LShapeRebar" *(pręt zbrojeniowy w kształcie litery L)*.
* DANE**Orientacja haka**: Orientacja haka głównych prętów zbrojeniowych w kolumnach, jeśli typem głównego pręta jest LShapeRebar. Przyjmuje osiem różnych określeń dla haków w kształcie litery L, tj. "Góra Wewnątrz", "Góra Na zewnątrz", "Dół Wewnątrz", "Dół Na zewnątrz", "Góra Lewo", "Góra Prawo", "Dól Lewo", "Dół Prawo".
* DANE**Przedłużenie haka wzdłuż**: Kierunek głównego haka pręta zbrojeniowego *(LShapeRebar)*. posiada dwie opcje "x-axis" i "y-axis".
* DANE**Przedłużenie haka**: Określa długość haka głównego pręta zbrojeniowego *(LShapeRebar)*.
* DANE**Zaokrąglanie prętów zbrojeniowych**: Wartość zaokrąglenia, która ma być zastosowana do narożników prętów, wyrażona w krotności średnicy głównego pręta zbrojeniowego.
* DANE**Przesunięcie w górę**: Górne odsunięcie głównych prętów zbrojeniowych w słupie poza górną powierzchnią stopy.
* DANE**Średnica**: Średnica głównych prętów zbrojeniowych w słupach.

### **Właściwości zbrojenia o kierunku X w słupach stóp fundamentowych:**

Pręty zbrojeniowe wzdłuż kierunku osi X z wyjątkiem głównych prętów zbrojeniowych

* DANE**Typ zbrojenia**: Typ prętów zbrojeniowych w kierunku X. Ma dwie wartości: "StraightRebar" *(pręt zbrojeniowy prosty)*, "LShapeRebar" *(pręt zbrojeniowy w kształcie litery L)*.
* DANE**Orientacja haka**: Orientacja haka głównych prętów zbrojeniowych w kolumnach, jeśli typem głównego pręta jest LShapeRebar. Przyjmuje osiem różnych określeń dla haków w kształcie litery L, tj. "Góra Wewnątrz", "Góra Na zewnątrz", "Dół Wewnątrz", "Dół Na zewnątrz", "Góra Lewo", "Góra Prawo", "Dól Lewo", "Dół Prawo".
* DANE**Przedłużenie haka**: Określa długość haka głównego pręta zbrojeniowego *(LShapeRebar)*.
* DANE**Zaokrąglanie**: Wartość zaokrąglenia, która ma być zastosowana do narożników prętów, wyrażona w krotności średnicy głównego pręta zbrojeniowego.
* DANE**Przesunięcie w górę**: Odległość pomiędzy prętami zbrojeniowymi od górnej powierzchni konstrukcji.
* DANE**Ilość#Średnica**: Liczba#Średnica zestawu prętów zbrojeniowych w kierunku X.

### **Właściwości zbrojenia o kierunku Y w słupach stóp fundamentowych:**

Pręty zbrojeniowe wzdłuż kierunku osi Y z wyjątkiem głównych prętów zbrojeniowych

* DANE**Typ zbrojenia**: Typ prętów zbrojeniowych w kierunku Y. Ma dwie wartości: "StraightRebar" *(pręt zbrojeniowy prosty)*, "LShapeRebar" *(pręt zbrojeniowy w kształcie litery L)*.
* DANE**Orientacja haka**: Orientacja haka głównych prętów zbrojeniowych w kolumnach, jeśli typem głównego pręta jest LShapeRebar. Przyjmuje osiem różnych określeń dla haków w kształcie litery L, tj. "Góra Wewnątrz", "Góra Na zewnątrz", "Dół Wewnątrz", "Dół Na zewnątrz", "Góra Lewo", "Góra Prawo", "Dól Lewo", "Dół Prawo".
* DANE**Przedłużenie haka**: Określa długość haka głównego pręta zbrojeniowego *(LShapeRebar)*.
* DANE**Zaokrąglanie**: Wartość zaokrąglenia, która ma być zastosowana do narożników prętów, wyrażona w krotności średnicy głównego pręta zbrojeniowego.
* DANE**Przesunięcie w górę**: Odległość pomiędzy prętami zbrojeniowymi od górnej powierzchni konstrukcji.
* DANE**Ilość#Średnica**: Liczba#Średnica zestawu prętów zbrojeniowych w kierunku Y.

## Tworzenie skryptów

*Zobacz również:* [Skrypty Architektury](/Arch_API/pl "Arch API/pl"), [Skrypty Zbrojenia](/Reinforcement_API/pl "Reinforcement API/pl") oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie zbrojenie stóp fundamentowych może być używane z konsoli środowiska [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

### Wykonanie zbrojenia stopy

```
from FootingReinforcement.FootingReinforcement import makeFootingReinforcement

footingReinforcementGroup = makeFootingReinforcement(
    parallel_rebar_type,
    parallel_front_cover,
    parallel_rear_cover,
    parallel_left_cover,
    parallel_right_cover,
    parallel_top_cover,
    parallel_bottom_cover,
    parallel_diameter,
    parallel_amount_spacing_check,
    parallel_amount_spacing_value,
    cross_rebar_type,
    cross_front_cover,
    cross_rear_cover,
    cross_left_cover,
    cross_right_cover,
    cross_top_cover,
    cross_bottom_cover,
    cross_diameter,
    cross_amount_spacing_check,
    column_front_cover,
    column_left_cover,
    column_right_cover,
    column_rear_cover,
    tie_top_cover,
    tie_bottom_cover,
    tie_bent_angle,
    tie_extension_factor,
    tie_diameter,
    tie_number_spacing_check,
    tie_number_spacing_value,
    column_main_rebar_diameter,
    column_main_rebars_t_offset,
    cross_amount_spacing_value,
    column_width,
    column_length,
    xdir_column_amount_spacing_check = True,
    xdir_column_amount_spacing_value = 1,
    ydir_column_amount_spacing_check = True,
    ydir_column_amount_spacing_value = 1,
    parallel_rounding = 2,
    parallel_l_shape_hook_orintation = "Alternate",
    cross_rounding = 2,
    cross_l_shape_hook_orintation = "Alternate",
    column_main_rebars_type = "StraightRebar",
    column_main_hook_orientation = "Bottom Outside",
    column_main_hook_extend_along = "x-axis",
    column_l_main_rebar_rounding = 2,
    column_main_hook_extension = 40,
    column_sec_rebar_check = False,
    column_sec_rebars_t_offset = (400, 400),
    column_sec_rebars_number_diameter = (
        "1#8mm+1#8mm+1#8mm",
        "1#8mm+1#8mm+1#8mm",
    ),
    column_sec_rebars_type = (
        "StraightRebar",
        "StraightRebar",
    ),
    column_sec_hook_orientation = (
        "Top Inside",
        "Top Inside",
    ),
    column_l_sec_rebar_rounding = (2, 2),
    column_sec_hook_extension = (40, 40),
    mesh_cover_along = "Bottom",
    structure = None,
    facename = None,
)

```

* Tworzy obiekt `footingReinforcementGroup` z podanej `struktury`, która jest stopą [konstrukcyjną architektury](/Arch_Structure/pl "Arch Structure/pl") i `nazwy ściany`, która jest ścianą tej konstrukcji.
  + Jeśli nie podano ani jako parametr `struktury` ani `nazwy ściany`, program przyjmie jako dane wejściowe ścianę wybraną przez użytkownika.

**Właściwości prętów zbrojeniowych w kierunku równoległym do wybranej ściany:**.

* `parallel_rebar_type`: Typ prętów zbrojeniowych dla równoległych prętów zbrojeniowych do zbrojenia stóp fundamentowych. Może mieć trzy wartości: "StraightRebar" *(pręt zbrojeniowy prosty)*, "LShapeRebar" *(pręt zbrojeniowy w kształcie litery L)* i "UShapeRebar" *(pręt zbrojeniowy w kształcie litery U)*.
* `parallel_front_cover`: Odległość równoległego pręta zbrojeniowego od wybranej powierzchni.
* `parallel_rear_cover`: Pokrycie zbrojeniem tyłu stopy fundamentowej z równolegle ułożonych prętów zbrojeniowych.
* `parallel_left_cover`: Odległość lewego końca równoległego pręta zbrojeniowego do lewego boku konstrukcji.
* `parallel_right_cover`: Odległość prawego końca równoległego pręta zbrojeniowego do prawego boku konstrukcji.
* `parallel_top_cover`: Odległość równoległych prętów zbrojeniowych od górnej powierzchni konstrukcji.
* `parallel_bottom_cover`: Odległość równoległych prętów zbrojeniowych od dolnej powierzchni konstrukcji.
* `parallel_diameter`: Średnica równoległych prętów zbrojeniowych.
* `parallel_amount_spacing_check`: Jeśli wartość jest ustawiona na `Prawda`, to parametr parallel\_amount\_spacing\_value jest używany jako liczba prętów zbrojeniowych, w przeciwnym razie wartość parallel\_amount\_spacing\_value jest używana jako odstęp między prętami równoległymi.
* `parallel_amount_spacing_value`: Zawiera liczbę prętów zbrojeniowych lub odstępy między równoległymi prętami zbrojeniowymi w oparciu o parametr amount\_spacing\_check.
* `parallel_rounding`: Wartość zaokrąglenia, którą należy zastosować do narożników prętów, wyrażona w krotności średnicy równoległych prętów zbrojeniowych.
* `parallel_l_shape_hook_orintation`: Przedstawia orientację haka równoległego pręta zbrojeniowego typu L-Shape, jeżeli parametr parallel\_rebar\_type to LShapeRebar. Może mieć trzy wartości "Lewy", "Prawy", "Alternatywny".

**Właściwości prętów zbrojeniowych w kierunku poprzecznym do wybranej ściany:**

* `parallel_rebar_type`: Typ prętów zbrojeniowych dla poprzecznych prętów zbrojeniowych do zbrojenia stóp fundamentowych. Może mieć trzy wartości: "StraightRebar" *(pręt zbrojeniowy prosty)*, "LShapeRebar" *(pręt zbrojeniowy w kształcie litery L)* i "UShapeRebar" *(pręt zbrojeniowy w kształcie litery U)*.
* `parallel_front_cover`: Odległość pomiędzy poprzecznym prętem zbrojeniowym a cross\_face *(ściana prostopadła do wybranej powierzchni)*.
* `parallel_rear_cover`: Pokrycie zbrojeniem tyłu stopy fundamentowej z prostopadle ułożonych prętów zbrojeniowych.
* `parallel_left_cover`: Odległość między lewym końcem poprzecznego pręta zbrojeniowego a lewą powierzchnią konstrukcji.
* `parallel_right_cover`: Odległość prawego końca pręta zbrojeniowego od prawego lica konstrukcji odniesiona do powierzchni cross\_face.
* `parallel_top_cover`: Odległość poprzecznych prętów zbrojeniowych od górnej powierzchni konstrukcji.
* `parallel_bottom_cover`: Odległość poprzecznych prętów zbrojeniowych od dolnej powierzchni konstrukcji.
* `parallel_diameter`: Średnica oprzecznych prętów zbrojeniowych.
* `parallel_amount_spacing_check`: Jeśli wartość jest ustawiona na `Prawda`, to parametr parallel\_amount\_spacing\_value jest używany jako liczba prętów zbrojeniowych, w przeciwnym razie wartość parallel\_amount\_spacing\_value jest używana jako odstęp między prętami równoległymi.
* `parallel_amount_spacing_value`: Zawiera liczbę prętów zbrojeniowych lub odstępy między równoległymi prętami zbrojeniowymi w oparciu o parametr amount\_spacing\_check.
* `parallel_rounding`: Wartość zaokrąglenia, którą należy zastosować do narożników prętów, wyrażona w krotności średnicy poprzecznych prętów zbrojeniowych.
* `parallel_l_shape_hook_orintation`: Przedstawia orientację haka poprzecznego pręta zbrojeniowego typu L-Shape, jeżeli parametr cross\_rebar\_type to LShapeRebar. Może mieć trzy wartości "Lewy", "Prawy", "Alternatywny".

**Właściwości zbrojenia słupów w stopie fundamentowej:**

* `column_front_cover`: Odległość między wybraną ścianą a słupem.
* `column_left_cover`: Odległość między wybraną ścianą a słupem.
* `column_right_cover`: Odległość między prawą ścianą przednią a słupem
* `column_rear_cover`: Odległość między tylną ścianą a tylnymi kolumnami.
* `column_width`: Szerokość dla słupa.
* `column_length`: Długość słupa.
* `xdir_column_amount_spacing_check`: Jeśli wartość jest ustawiona na `Prawda`, to parametr xdir\_column\_amount\_spacing\_value jest używany jako liczba kolumn, w przeciwnym razie wartość xdir\_column\_amount\_spacing\_value jest używana jako odstęp między kolumnami w kierunku X.
* `xdir_column_amount_spacing_value`: Zawiera liczbę kolumn lub rozstaw kolumn w kierunku X na podstawie wartości xdir\_column\_amount\_spacing\_check.
* `ydir_column_amount_spacing_check`: Jeśli wartość jest ustawiona na `Prawda`, to parametr ydir\_column\_amount\_spacing\_value jest używany jako liczba kolumn, w przeciwnym razie wartość ydir\_column\_amount\_spacing\_valuejest używana jako odstęp między kolumnami w kierunku Y.
* `ydir_column_amount_spacing_value`: Zawiera liczbę kolumn lub rozstaw kolumn w kierunku Y na podstawie wartości ydir\_column\_amount\_spacing\_check.
* `column_sec_rebar_check`: Jeśli wartość tego parametru to `Prawda`, dodaj dodatkowe pręty zbrojeniowe w kierunku X i Y w słupach.

**Właściwości zbrojenia prętami cienkimi słupów w stopach fundamentowych:**

* `tie_top_cover`: Wierzchnie pokrycie prętami cienkimi na zewnątrz ławy fundamentowej od strony głównych prętów zbrojeniowych.
* `tie_bottom_cover`: Dolne pokrycie prętami cienkimi od spodu prętów zbrojeniowych w ławie fundamentowej w pobliżu siatki.
* `tie_bent_angle`: Kąt wygięcia dla prętów.
* `tie_extension_factor`: Współczynnik wydłużenia dla przedłużonej krawędzi pręta.
* `tie_diameter`: Średnica prętów.
* `tie_number_spacing_check`: Jeśli wartość ta jest ustawiona na `Prawda`, to parametr tie\_number\_spacing\_value jest używany jako liczba cienkich prętów, w przeciwnym razie wartość tie\_number\_spacing\_value jest używana jako odstęp pomiędzy prętami.
* `tie_number_spacing_value`:Zawiera liczbę cienkich prętów lub odstępów między nimi na podstawie wartości tie\_number\_spacing\_check.

**Właściwości zbrojenia prętami głównymi słupów w stopach fundamentowych:**

* `column_main_rebar_diameter`: Średnica głównych prętów zbrojeniowych w słupach.
* `column_main_rebars_t_offset`: Górne odsunięcie głównych prętów zbrojeniowych w słupie poza górną powierzchnią stopy.
* `column_main_hook_extend_along`: Kierunek głównego haka pręta zbrojeniowego *(LShapeRebar)*. posiada dwie opcje "x-axis" i "y-axis".
* `column_l_main_rebar_rounding`: Wartość zaokrąglenia, która ma być zastosowana dla naroży prętów, wyrażona jako krotność średnicy column\_main\_rebar\_diameter.
* `column_main_hook_extension`: Określa długość haka głównego pręta zbrojeniowego *(LShapeRebar)*.
* `column_main_rebars_type`: Typ prętów zbrojeniowych dla głównych prętów zbrojeniowych słupa. Pobiera on dwa typy danych wejściowych: "StraightRebar" *(pręt zbrojeniowy prosty)*, "LShapeRebar" *(pręt zbrojeniowy w kształcie litery L)*. Wartość domyślna to StraightRebar.
* `column_main_hook_orientation`: Orientacja haka głównych prętów zbrojeniowych w kolumnach, jeśli typem głównego pręta jest LShapeRebar. Przyjmuje osiem różnych określeń dla haków w kształcie litery L, tj. "Góra Wewnątrz", "Góra Na zewnątrz", "Dół Wewnątrz", "Dół Na zewnątrz", "Góra Lewo", "Góra Prawo", "Dól Lewo", "Dół Prawo".

**Właściwości dla drugiego kierunku X i Y prętów zbrojeniowych słupów w stopie fundamentowej:**

* `column_sec_rebars_t_offset` oraz `sec_rebars_b_offset` to tuple *(xdir\_rebars\_t\_offset, ydir\_rebars\_t\_offset)* które określają odległości przesunięcia *(lub wysokość)* dla pomocniczych prętów zbrojeniowych w kierunku x i y odpowiednio w stosunku do górnych powierzchni konstrukcji.
* `column_sec_rebars_number_diameter` to tuple *(xdir\_rebars\_number\_diameter, ydir\_rebars\_number\_diameter)* określające odpowiednio zestaw ilości#średnic pomocniczych prętów zbrojeniowych w kierunku X i w kierunku Y.
* `column_sec_rebars_type` to tuple *(xdir\_rebars\_type, ydir\_rebars\_type)* określające typ pomocniczych prętów zbrojeniowych, odpowiednio w kierunku X i Y. Typem pręta zbrojeniowego może być `"StraightRebar"` lub `"LShapeRebar"`.
* `column_sec_hook_orientation` to tuple *(xdir\_hook\_orientation, ydir\_hook\_orientation)* określające orientację pomocniczego haka pręta typu LShaped w kierunku x i y. Może mieć wartość `"Góra Wewnątrz"`, `"Góra Zewnątrz"`, `"Dół Wewnątrz"`, `"Dół Zewnątrz"`, `"Góra Prawy"`, `"Góra Lewy"`, `"Dół Prawy"` lub `"Dół Lewy"` jako hook\_orientation.
* `column_l_sec_rebar_rounding` to tuple (l\_xdir\_rebar\_rounding, l\_ydir\_rebar\_rounding) określające promień gięcia pomocniczych prętów zbrojeniowych typu LShaped w kierunku X i w kierunku Y, wyrażony jako krotność średnicy odpowiednio prętów zbrojeniowych typu LShaped w kierunku X i w kierunku Y.
* `column_sec_hook_extension` to tuple *(xdir\_hook\_extension, ydir\_hook\_extension)* określające długość haka pomocniczych prętów zbrojeniowych typu LShaped w kierunku X i Y.

**Wspólne właściwości zbrojenia stóp fundamentowych:**

* `mesh_cover_along`: Może mieć trzy wartości " Góra", "Dół" i "Oba". Reprezentuje wyrównanie siatki zbrojeniowej wzdłuż górnej i/lub dolnej powierzchni konstrukcji.
* `structure`: Obiekt konstrukcji Architektury. Domyślnie przyjmuje wartość Brak.
* `facename`: wybrana ściana konstrukcji. Domyślnie przyjmuje wartość Brak.

### Edycja zbrojenia stopy

Właściwości zbrojenia stóp fundamentowych można zmienić za pomocą następującej funkcji:

```
from FootingReinforcement.FootingReinforcement import editFootingReinforcement

footingReinforcementGroup = editFootingReinforcement(
    footingReinforcementGroup,
    parallel_rebar_type,
    parallel_front_cover,
    parallel_rear_cover,
    parallel_left_cover,
    parallel_right_cover,
    parallel_top_cover,
    parallel_bottom_cover,
    parallel_diameter,
    parallel_amount_spacing_check,
    parallel_amount_spacing_value,
    cross_rebar_type,
    cross_front_cover,
    cross_rear_cover,
    cross_left_cover,
    cross_right_cover,
    cross_top_cover,
    cross_bottom_cover,
    cross_diameter,
    cross_amount_spacing_check,
    column_front_cover,
    column_left_cover,
    column_right_cover,
    column_rear_cover,
    tie_top_cover,
    tie_bottom_cover,
    tie_bent_angle,
    tie_extension_factor,
    tie_diameter,
    tie_number_spacing_check,
    tie_number_spacing_value,
    column_main_rebar_diameter,
    column_main_rebars_t_offset,
    cross_amount_spacing_value,
    column_width,
    column_length,
    xdir_column_amount_spacing_check = True,
    xdir_column_amount_spacing_value = 1,
    ydir_column_amount_spacing_check = True,
    ydir_column_amount_spacing_value = 1,
    parallel_rounding = 2,
    parallel_l_shape_hook_orintation = "Alternate",
    cross_rounding = 2,
    cross_l_shape_hook_orintation = "Alternate",
    column_main_rebars_type = "StraightRebar",
    column_main_hook_orientation = "Bottom Outside",
    column_main_hook_extend_along = "x-axis",
    column_l_main_rebar_rounding = 2,
    column_main_hook_extension = 40,
    column_sec_rebar_check = False,
    column_sec_rebars_t_offset = (400, 400),
    column_sec_rebars_number_diameter = (
        "1#8mm+1#8mm+1#8mm",
        "1#8mm+1#8mm+1#8mm",
    ),
    column_sec_rebars_type = (
        "StraightRebar",
        "StraightRebar",
    ),
    column_sec_hook_orientation = (
        "Top Inside",
        "Top Inside",
    ),
    column_l_sec_rebar_rounding = (2, 2),
    column_sec_hook_extension = (40, 40),
    mesh_cover_along = "Bottom",
    structure = None,
    facename = None,
)

```

* `footingReinforcementGroup` to wcześniej utworzony obiekt grupy `Footing Reinforcement`.
* Pozostałe parametry są takie same, jak wymagane przez funkcję `makeFootingReinforcement()`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_FootingRebars/pl&oldid=1441030>"