---
title: Arkusz Blachy Przykłady
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

## Wprowadzenie

Środowisko pracy ![](/images/Sheetmetal_workbench_icon.svg) [Arkusz Blachy](/SheetMetal_Workbench/pl "SheetMetal Workbench/pl") _(jest [zewnętrznym środowiskiem](/External_workbenches/pl "External workbenches/pl") dostępnym poprzez [Menadżer dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl"))_ stało się bardzo rozbudowane i wymaga odpowiedniej dokumentacji.

Aby uniknąć przepełnienia stron narzędziowych przykładami, dodano tę stronę w celu zebrania części pokazujących i wyjaśniających specjalne możliwości środowiska Arkusz Blachy.

Zaplanowane etapy tworzenia treści:

1. Zbieranie zdjęć
2. Dodawanie opisów przepływów pracy
3. Dodawanie bardziej szczegółowych samouczków

## Zawias

![](/images/SheetMetal_Example-01.png)

![](/images/SheetMetal_Example-01a.png)
![](/images/SheetMetal_Example-01b.png)
![](/images/SheetMetal_Example-01c.png)
![](/images/SheetMetal_Example-01d.png)

Przepływ pracy Zawias:
![](/images/SheetMetal_AddBase.svg) [Arkusz Blachy: Dodaj element bazowy](/SheetMetal_AddBase/pl "SheetMetal AddBase/pl"),
![](/images/PartDesign_Pocket.svg) [Projekt części: Kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl"),
![](/images/PartDesign_Hole.svg) [Projekt Części: Otwór](/PartDesign_Hole/pl "PartDesign Hole/pl"),
![](/images/SheetMetal_Unfold.svg) [Arkusz Blachy: Rozwiń](/SheetMetal_Unfold/pl "SheetMetal Unfold/pl").

### Zawias - krok po kroku

1. Utwórz profil _(linię i łuk styczny)_, najlepiej korzystając ze środowiska ![](/images/Workbench_Sketcher.svg) [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl").
2. Aktywuj funkcję ![](/images/SheetMetal_AddBase.svg) [Arkusz Blachy: Dodaj element bazowy](/SheetMetal_AddBase/pl "SheetMetal AddBase/pl"), aby utworzyć obiekt bazowy wyginania.
3. Edytuj parametry obiektu bazowego wyginania:
   - Ustaw wartość parametru DANE**Płaszczyzna środkowa** na `PRAWDA`, aby profil rozciągał się symetrycznie na obie strony płaszczyzny szkicu.
   - Ustaw parametry DANE**promień** i DANE**grubość** na wybrane wartości.
4. Utwórz kontur do wycięcia za pomocą środowiska ![](/images/Workbench_Sketcher.svg) [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl").
5. Użyj funkcji ![](/images/PartDesign_Pocket.svg) [Projekt Części: Kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl"), aby odciąć jedną połowę okrągłego kawałka.
6. Utwórz wzór otworu za pomocą środowiska ![](/images/Workbench_Sketcher.svg) [Szkicownik](/Sketcher_Workbench "Sketcher Workbench").
7. Użyj polecenia ![](/images/PartDesign_Hole.svg) [Projekt Części: Otwór](/PartDesign_Hole "PartDesign Hole"). Unikaj opcji pogłębiania i pogłębiania stożkowego, aby zachować możliwość rozłożenia korpusu.
8. Aktywuj polecenie ![](/images/SheetMetal_Unfold.svg) [Arkusz Blachy: Rozwiń](/SheetMetal_Unfold/pl "SheetMetal Unfold/pl"), aby uzyskać obiekt w rozwinięciu.
9. Gotowe!

## Klips do papieru

![](/images/SheetMetal_Example-02.png)

![](/images/SheetMetal_Example-02a.png)
![](/images/SheetMetal_Example-02b.png)
![](/images/SheetMetal_Example-02c.png)
![](/images/SheetMetal_Example-02d.png)

Przepływ pracy Klips do papieru:
![](/images/SheetMetal_AddBase.svg) [Arkusz Blachy: Dodaj element bazowy](/SheetMetal_AddBase/pl "SheetMetal AddBase/pl"),
![](/images/SheetMetal_SketchOnSheet.svg) [Arkusz Blachy: Szkic na arkuszu](/SheetMetal_SketchOnSheet/pl "SheetMetal SketchOnSheet/pl"),
klonowanie, odwracanie i łączenie,
![](/images/SheetMetal_Unfold.svg) [Arkusz Blachy: Rozwiń](/SheetMetal_Unfold/pl "SheetMetal Unfold/pl").

### Klips do papieru - krok po kroku

1. Utwórz profil na płaszczyźnie XZ, najlepiej używając środowiska ![](/images/Workbench_Sketcher.svg) [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl").  
   ![Szkic profilu](/images/SheetMetal_Example-02e.png)
2. Aktywuj funkcję: ![](/images/SheetMetal_AddBase.svg) [Dodaj element bazowy](/SheetMetal_AddBase/pl "SheetMetal AddBase/pl") , aby utworzyć obiekt bazowy wyginania.
3. Edytuj parametry obiektu bazowego wyginania w panelu ustawień:  
    ![Obiekt bazowy wyginania z podświetlonym szkicem.](/images/SheetMetal_Example-02f.png)
   - Ustaw wartość parametru DANE**Płaszczyzna środkowa** na `PRAWDA` aby profil rozciągał się symetrycznie na obie strony płaszczyzny szkicu.
   - Ustaw wartość parametru DANE**Długość** na `32 mm`.
   - Ustaw wartość parametru DANE**Promień** na `2 mm`.
   - Ustaw wartość parametru DANE**Grubość** na `0.3 mm`.
4. Wybierz powierzchnię pomiędzy okrągłymi sekcjami i aktywuj środowisko pracy ![](/images/Workbench_Sketcher.svg) [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl").  
   ![Płaszczyzna do umieszczenia szkicu.](/images/SheetMetal_Example-02g.png)
5. Aby ukryć zawiniętą część użyj funkcji ![](/images/Sketcher_ViewSection.svg) [Widok przekroju](/Sketcher_ViewSection/pl "Sketcher ViewSection/pl").
6. Utwórz kontur wycięcia.  
   ![Kontur wycięcia.](/images/SheetMetal_Example-02h.png) ![Wycięty kontur lekko dotykający wybranej powierzchni](/images/SheetMetal_Example-02i.png)
7. Zakończ rysowanie używając funkcji ![](/images/Sketcher_LeaveSketch.svg) [Opuść szkic](/Sketcher_LeaveSketch/pl "Sketcher LeaveSketch/pl").
8. Ponownie wybierz powierzchnię ściany i dodaj do zaznaczenia szkic wycięcia.  
   ![Powierzchnia z zaznaczonym szkicem.](/images/SheetMetal_Example-02j.png)
9. Użyj polecenia ![](/images/SheetMetal_SketchOnSheet.svg) [Szkic na arkuszu](/SheetMetal_SketchOnSheet/pl "SheetMetal SketchOnSheet/pl"), aby wykonać wycięcie wzdłuż zakręconego fragmentu.  
   ![Zakończona pierwsza połowa.](/images/SheetMetal_Example-02b.png)
10. Jedna strona jest skończona. Teraz musimy znaleźć sposób na lustrzane odbicie korpusu.

**Potencjalne opcje wykonania odbicia lustrzanego:**

- Polecenie ![](/images/PartDesign_Mirrored.svg) [Projekt Części: Odbicie lustrzane](/PartDesign_Mirrored/pl "PartDesign Mirrored/pl") polecenie kończy się niepowodzeniem, ponieważ z jakiegoś powodu nie może obsługiwać elementów środowiska Arkusz Blachy. Tak więc to nie działa.
- Polecenie ![](/images/Part_Mirror.svg) [Część: Odbicie lustrzane](/Part_Mirror/pl "Part Mirror/pl") polecenie tworzy część w odbiciu lustrzanym, ale nie jest ona już rozkładana. Więc to też nie działa.
- Jednym sposobem, który działa, jest użycie klonu. To nadal nie jest odbicie lustrzane, ale może używać symetrii osiowej _(obróć go o 180°)_.
- Innym sposobem, który działa, jest użycie obiektu odnośnika.

**Odbicie lustrzane z zastosowaniem klonu:**

1. Zaznacz Zawartość z widoku drzewa.
2. Skorzystaj z polecenia ![](/images/PartDesign_Clone.svg) [Projekt Części: Utwórz klon](/PartDesign_Clone/pl "PartDesign Clone/pl"). Doda nową Zawartość z obiektem klonu.

Aby zastosować obrót o 180°, ustaw parametr DANE**Kąt** we właściwości Umiejscowienie Zawartości lub klonu na wartość `180°`. _(Oś Z jest domyślna i powinna być odpowiednia, jeśli zacząłeś na płaszczyźnie XZ, jak zalecano na wstępie)_.  
![Klonowana połowa](/images/SheetMetal_Example-02b.png) ![](/images/Button_right.svg) ![Odwrócona sklonowana połowa](/images/SheetMetal_Example-02l.png)

1. Mając wciąż aktywną Zawartość, użyj polecenia ![link](/images/PartDesign_Boolean.svg) [Projekt Części: Funkcje logiczne](/PartDesign_Boolean/pl "PartDesign Boolean/pl") aby dodać Zawartość klonu i połączyć obie połówki.  
   ![Połączone połówki](/images/SheetMetal_Example-02c.png)
2. Uruchom funkcję ![](/images/SheetMetal_Unfold.svg) [Rozwiń](/SheetMetal_Unfold/pl "SheetMetal Unfold/pl") aby otrzymać obiekt rozwinięcia.  
   ![Obiekt wycięty i rozwinięty](/images/SheetMetal_Example-02m.png) ![Obiekt rozwinięty](/images/SheetMetal_Example-02d.png)
3. Gotowe!

**Odbicie lustrzane z zastosowaniem obiektu łącza:**

1. Wybierz Zawartość z widoku drzewa.
2. Użyj narzędzia ![](/images/Std_LinkMake.svg) [Utwórz łącze](/Std_LinkMake/pl "Std LinkMake/pl"). Stworzy to nowy obiekt łącza.
3. Powiel obiekt łącza, ustawiając wartość właściwości DANE**Liczba elementów** na `2`.
4. Aby zastosować obrót o 180° ustaw wartość właściwości DANE**Kąt** pod właściwością Umiejscowienia któregokolwiek z obiektów łącza podrzędnego na `180°`. _(Oś Z jest domyślna i powinna być odpowiednia, jeśli zacząłeś na płaszczyźnie XZ, jak zalecano na wstępie)_.

## Klamra Omega

![](/images/SheetMetal_Example-03.png)

![](/images/SheetMetal_Example-03a.png)
![](/images/SheetMetal_Example-03b.png)
![](/images/SheetMetal_Example-03.png)
![](/images/SheetMetal_Example-03c.png)

Przepływ pracy Klamra Omega:
![](/images/SheetMetal_AddBase.svg) [Arkusz Blachy: Dodaj element bazowy](/SheetMetal_AddBase/pl "SheetMetal AddBase/pl"),
![](/images/PartDesign_Hole.svg) [Projekt Części: Otwór](/PartDesign_Hole/pl "PartDesign Hole/pl"),
![](/images/PartDesign_Fillet.svg) [Projekt Części: Zaokrąglenie](/PartDesign_Fillet/pl "PartDesign Fillet/pl"),
![](/images/SheetMetal_Unfold.svg) [Arkusz Blachy: Rozwiń](/SheetMetal_Unfold/pl "SheetMetal Unfold/pl").

## Sześciokątna miska

![](/images/SheetMetal_Example-04.png)

![](/images/SheetMetal_Example-04a.png)
![](/images/SheetMetal_Example-04b.png)
![](/images/SheetMetal_Example-04.png)
![](/images/SheetMetal_Example-04c.png)

Przepływ pracy Sześciokątna misa:
![](/images/SheetMetal_AddBase.svg) [Arkusz Blachy: Dodaj element bazowy](/SheetMetal_AddBase/pl "SheetMetal AddBase/pl"),
![](/images/SheetMetal_AddWall.svg) [Arkusz Blachy: Dodaj ścianę](/SheetMetal_AddWall/pl "SheetMetal AddWall/pl"),
6x ![](/images/SheetMetal_AddCornerRelief.svg) [Arkusz Blachy: Dodaj podcięcie w narożniku](/SheetMetal_AddCornerRelief/pl "SheetMetal AddCornerRelief/pl"),
![](/images/SheetMetal_Unfold.svg) [Arkusz Blachy: Rozwiń](/SheetMetal_Unfold/pl "SheetMetal Unfold/pl").

![](/images/SheetMetal_Example-04d.png)

Po dodaniu podcięcia narożnego _(prawa strona)_ może być konieczne dostosowanie wartości właściwości **Rozmiar**.

## Klips do długopisu

![](/images/SheetMetal_Example-05.png)

![](/images/SheetMetal_Example-05a.png)
![](/images/SheetMetal_Example-05b.png)
![](/images/SheetMetal_Example-05c.png)
![](/images/SheetMetal_Example-05d.png)
![](/images/SheetMetal_Example-05.png)
![](/images/SheetMetal_Example-05e.png)

Przepływ pracy Klips do długopisu:
![](/images/SheetMetal_AddBase.svg) [Arkusz Blachy: Dodaj element bazowy](/SheetMetal_AddBase/pl "SheetMetal AddBase/pl"),
![](/images/PartDesign_Pocket.svg) [Projekt Części: Kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl"),
3x ![](/images/SheetMetal_AddWall.svg) [Arkusz Blachy: Dodaj ścianę](/SheetMetal_AddWall/pl "SheetMetal AddWall/pl"),
![](/images/SheetMetal_Unfold.svg) [Arkusz Blachy: Rozwiń](/SheetMetal_Unfold/pl "SheetMetal Unfold/pl").

## Przykład przedłużenia ściany

![](/images/SheetMetal_Example-06.png)

![](/images/SheetMetal_Example-06a.png)
![](/images/SheetMetal_Example-06b.png)
![](/images/SheetMetal_Example-06c.png)
![](/images/SheetMetal_Example-06.png)
![](/images/SheetMetal_Example-06d.png)

Przepływ pracy Przykład przedłużenia ściany:
![](/images/SheetMetal_AddBase.svg) [Arkusz Blachy: Dodaj element bazowy](/SheetMetal_AddBase/pl "SheetMetal AddBase/pl"),
![](/images/SheetMetal_AddWall.svg) [Arkusz Blachy: Dodaj ścianę](/SheetMetal_AddWall/pl "SheetMetal AddWall/pl"),
![](/images/SheetMetal_Extrude.svg) [Arkusz Blachy: Wyciągnij](/SheetMetal_Extrude/pl "SheetMetal Extrude/pl"),
![](/images/SheetMetal_Extrude.svg) [Arkusz Blachy: Wyciągnij](/SheetMetal_Extrude/pl "SheetMetal Extrude/pl"),
![](/images/SheetMetal_Unfold.svg) [Arkusz Blachy: Rozwiń](/SheetMetal_Unfold/pl "SheetMetal Unfold/pl").

Przy drugim użyciu **Wyciągnięcia ściany** do kształtu przedłużenia (przedłużeń) używany jest szkic z dwoma konturami, a przy wartości parametru "użyj odjęcia" ustawionej na wartość `Prawda` zapewnia on kształt dla wycięć, jak również

## Korpus złącza USB

![](/images/SheetMetal_Example-07.png)

![](/images/SheetMetal_Example-07a.png)
![](/images/SheetMetal_Example-07b.png)
![](/images/SheetMetal_Example-07c.png)
![](/images/SheetMetal_Example-07d.png)
![](/images/SheetMetal_Example-07.png)
![](/images/SheetMetal_Example-07e.png)

Przepływ pracy Korpus złącza USB:
![](/images/SheetMetal_AddBase.svg) [Arkusz Blachy: Dodaj element bazowy](/SheetMetal_AddBase/pl "SheetMetal AddBase/pl"),
![](/images/SheetMetal_Extrude.svg) [Arkusz Blachy: Wyciągnij](/SheetMetal_Extrude/pl "SheetMetal Extrude/pl"),
![](/images/PartDesign_Pocket.svg) [Projekt Części: Kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl"),
![](/images/SheetMetal_Extrude.svg) [Arkusz Blachy: Wyciągnij](/SheetMetal_Extrude/pl "SheetMetal Extrude/pl"),
![](/images/SheetMetal_AddWall.svg) [Arkusz Blachy: Dodaj ścianę](/SheetMetal_AddWall/pl "SheetMetal AddWall/pl"),
![](/images/SheetMetal_Unfold.svg) [Arkusz Blachy: Rozwiń](/SheetMetal_Unfold/pl "SheetMetal Unfold/pl").

_(Płaskorzeźba jest tylko artystycznym wyrazem tego, co może być ukryte wewnątrz prawdziwej wtyczki)_.

## Właściwości środowiska pracy Arkusz Blachy

W tym rozdziale staramy się wyjaśnić właściwości każdego obiektu środowiska Arkusz Blachy za pomocą prostych obrazków, jeśli to możliwe.

### Obiekt bazowy wyginania

![](/images/SheetMetal_Example-08a.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08b.png)

Wybrany szkic +
![](/images/SheetMetal_AddBase.svg) [Arkusz Blachy: Dodaj element bazowy](/SheetMetal_AddBase/pl "SheetMetal AddBase/pl")
→ Obiekt bazowy wyginania z domyślnymi nastawami

![](/images/SheetMetal_Example-08b.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08c.png)

Edycja DANE**Długość**: Długość domyślnie → Długość skrócona

![](/images/SheetMetal_Example-08d.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08h.png)

Przełącznik DANE**Płaszczyzna środkowa** z `Fałsz` na `PRAWDA`: Wyciągnięcie w jednym kierunku → Wyciągnięcie symetryczne

![](/images/SheetMetal_Example-08d.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08e.png)

Pezełącznik DANE**Odwrócony** z `Fałsz` na `PRAWDA`: Kierunek domyślny → Kierunek przeciwny

![](/images/SheetMetal_Example-08e.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08f.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08g.png)

Wybór DANE**Strona wygięcia**: `Na zewnątrz` _(domyślnie)_ → `Do wewnątrz` → `Pośrodku`

![](/images/SheetMetal_Example-08e.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08i.png)

Edycja DANE**Promień**: Promień domyślnie → Promień powiększony.  
Właściwość ta, to wewnętrzny promień zagięć tworzonych w wierzchołkach, w których dwie krawędzie w szkicu mają przejście nie styczne.

![](/images/SheetMetal_Example-08e.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-08j.png)

Edycja DANE**Grubość**: Grubość domyślnie → Grubość powiększona

### Obiekt wyginania

Obiekt Wyginania składa się z zestawów składających się z jednego cylindrycznego zgięcia i jednej płaskiej ścianki. Każda para rozciąga się od wybranej krawędzi półfabrykatu.

![](/images/SheetMetal_Example-09a.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09b.png)

Wybrane krawędzie +
![](/images/SheetMetal_AddWall.svg) [Dodaj ścianę](/SheetMetal_AddWall/pl "SheetMetal AddWall/pl")
→ Obiekt  
 wyginania z ustawieniami domyślnymi
_(Dwa obiekty wyginania w dwóch oddzielnych Zawartościach)_.

Edycja DANE**Promień** aby zmienić wewnętrzny promień wszystkich zagięć dostarczonych przez obiekt wyginania. _(Patrz obiekt bazowy wyginania powyżej.)_

Edycja DANE**Długość** aby zmienić długość wszystkich płaskich pasków wystających z zagięć obiektu wyginania.

: Nie mylić właściwości DANE**Długość** z długością kołnierza, która jest sumą tej długości, promienia i grubości _(tylko 90°)_.

![](/images/SheetMetal_Example-09b.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09c.png)

Przełcznik DANE**Odwrócony** z `FAŁSZ` na `PRAWDA`: Kołnierze domyślnie _(obiekty typu wygięcie)_ → Kołnierze odwrócone

![](/images/SheetMetal_Example-09c.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09d.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09e.png)

Edycja DANE**Kąt**: Kąt domyślnie _(90°)_ → Kąt powiększony → Kąt zmniejszony

Nie musimy się przejmować przycinaniem krawędzi, ponieważ opcja **Automatyczne ukosowanie** jest domyślnie włączona.  
Gdyby była wyłączona, wynik wyglądałby następująco:

![](/images/SheetMetal_Example-09m.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09f.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09g.png)

Przełącznik DANE**Automatyczne ukosowanie** z `PRAWDA` na `FAŁSZ`: Kąt domyślny _(90°)_ → Kąt powiększony → Kąt zmniejszony  
_(Właściwość Automatyczne ukosowanie nie ma wpływu na pojedyncze kołnierze)_

Aby ręcznie ściąć krawędź obrzeża stosuje się właściwość **KątŚcięcia1** i **KątŚcięcia2**:

![](/images/SheetMetal_Example-09m.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09n.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09o.png)

Edycja DANE**KątŚcięcia1** oraz DANE**KątŚcięcia2**: Brak ścięcia _(domyślnie)_ → Różnie ścięte krawędzie, kąt dodatni → Symetrycznie ścięte krawędzie, kąt ujemny

Ścinanie działa tylko na płaskie ścianki, a nie na zagięcia.

: _(Uwzględnia całą krawędź i dlatego nie może być stosowane do ukosowania krawędzi kołnierzy)_.

Aby pokazać różne możliwości wyboru **typu zagięcia** wprowadzamy pomocniczy prostopadłościan, który wycina się z tego samego obrysu co półfabrykat i ma taką samą wysokość jak obiekt Wygięcia _(jego długość kołnierza)_.

![](/images/SheetMetal_Example-09h.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09i.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09j.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09k.png)

Wybór DANE**Typ zagięcia**: `Materiał na zewnątrz` _(domyślnie)_ → `Materiał do wewnątrz` → `Grubość na zewnątrz` → `Odsunięcie`

- Materiał na zewnątrz: Wygięcie zaczyna się od wybranej krawędzi _(Cały obiekt Wygięcia leży poza prostopadłościanem)_.
- Materiał do wewnątrz: Zewnętrzna strona zgięcia kończy się na powierzchni prostopadłościanu _(Cały obiekt Wygięcia leży wewnątrz prostopadłościanu)_.
- Grubość na zewnątrz: Wewnętrzna strona zagięcia kończy się na powierzchni prostopadłościanu _(z powierzchni prostopadłościanu wystaje tylko pasek planarny)_.
- Odsunięcie: Zgodnie z wartością właściwości DANE**Odsunięcie** zgięcie jest przesuwane w kierunku zewnętrznym od jego domyślnej pozycji.

: Wstawiono rozszerzenie dla wartości dodatnich _(podświetlony pasek)_.
: Dla wartości ujemnych dopuszcza się przesunięcie zgięcia do wewnątrz.

Jeśli nie chcemy wykorzystywać całej długości krawędzi możemy użyć właściwości **Przerwa1** i **Przerwa2**.

![](/images/SheetMetal_Example-09c.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09l.png)

Edycja DANE**Przerwa1** and DANE**Przerwa1**: Kołnierze domyślnie → Kołnierze z różnymi wartościami dla właściwości Przerwa1 i Przerwa2

Jeśli długość przerwy osiągnie lub przekroczy wartość DANE**min podcięcia przerwy**, do przerwy zostanie dodane podcięcie.  
Podcięcia są kontrolowane przez właściwości DANE**Typ podcięcia**, DANE**PodcięcieD** _(głębokość podcięcia)_, oraz DANE**PodcięcieW** _(szerokość podcięcia)_, które są włączone tylko wtedy, gdy ustawiona jest wartość przerwy.

![](/images/SheetMetal_Example-09p.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09q.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09r.png)

Edycja DANE**PodcięcieD** oraz DANE**PodcięcieW**: Wartości domyślne → Powiększona głębokość podcięcia→ Powiększona głębokość i szerokość podcięcia

![](/images/SheetMetal_Example-09r.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-09s.png)

Przełącznik DANE**Typ podcięcia** z `Prostokątny` na `Zaokrąglony`: Domyślnie Podcięcie prostokątne → Podcięcie zaokrąglone

Opcja zaokrąglenia zostanie zastosowana tylko wtedy, gdy głębokość podcięcia jest większa niż jego szerokość.

Przełącz wartość właściwości DANE**Użyj współczynnika szczeliny** z `FAŁSZ` _(domyślnie)_ na `PRAWDA`, aby automatycznie ustawić wartości DANE**SzczelinaD** i DANE**SzczelinaW**. Obie są ustawione na grubość _(dziedziczoną)_ obiektu pomnożoną przez wartość DANE**Współczynnik szczeliny**.

: W tym przypadku opcja zaokrąglenia jest bezużyteczna, ponieważ głębokość szczeliny jest tak duża, jak jej szerokość. _(Patrz wyżej)_

Nowa właściwość DANE**DługośćSpec** [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl") umożliwia nam wybór sposobu pomiaru długości obiektu wygięcia:

![](/images/SheetMetal_Example-09t.png)

Widok z boku czterech kołnierzy 120° o domyślnej długości `10 mm` i różnych wartościach DANE**Length Spec**:  
 `Leg` _(domyślnie)_, `Outer Sharp`, `Inner Sharp`, `Tangential`

Przy wybranej opcji `Tangential` właściwość DANE**Długość** jest odpowiednikiem długości kołnierza.

Wartości `Outer Sharp` i `Tangential` są identyczne dla kątów 90°.

### Obiekt wydłużenia

Obiekt Wydłużenia rozciąga blachę na jednej lub kilku wybranych krańcach ściany lub krawędziach.

![](/images/SheetMetal_Example-10a.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10b.png)

Wybrane krańce ściany lub krawędzie +
![](/images/SheetMetal_Extrude.svg) [Wyciągnij](/SheetMetal_Extrude/pl "SheetMetal Extrude/pl")
→ Jeden wydłużony obiekt z domyślnymi ustawieniami

Pojawia się tu pierwszy problem: Mimo że wartość właściwości DANE**Ulepsz** jest ustawiona na `PRAWDA` dwa przedłużenia nadal pokazują swoje linie szwów. Tylko przedłużenie ostatniego wybranego elementu zostaje udoskonalone.

Aby ulepszyć wszystkie przedłużenia trzeba je utworzyć indywidualnie:

![](/images/SheetMetal_Example-10c.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10d.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10e.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10f.png)

W trzech krokach wybrane krańce ściany lub krawędzie +
![](/images/SheetMetal_Extrude.svg) [Wyciągnij](/SheetMetal_Extrude/pl "SheetMetal Extrude/pl")
→ Trzy wydłużone obiekty z domyślnymi ustawieniami.

Zmienione właściwości dotyczą wszystkich krawędzi wymienionych w powiązanym DANE**Obiekcie bazowym** obiektu Wydłużenia.

Edytuj DANE**długość** aby wyregulować długość przedłużenia.

![](/images/SheetMetal_Example-10h.png) ![](/images/SheetMetal_Example-10g.png)

Edytuj wartość parametru DANE**szcelina1** oraz DANE**szczelina2** aby zmniejszyć szerokość rozszerzenia.  
Po lewej: Obiekt rozszerzenia z 3 krawędziami. Po prawej: Jeden z obiektów rozszerzenia z jedną pojedynczą krawędzią.

Połącz szkic z właściwością DANE**Szkic**, aby nadać kształt przedłużeniu. Właściwości DANE**długość**, DANE**szczelina1** i DANE**szczelina2** będą ignorowane po powiązaniu szkicu. _(Wydaje się, że nie działa to w przypadku wciąż niezgiętych półfabrykatów)_.

![](/images/SheetMetal_Example-10i.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10j.png)

Wybrany szkic leżący na kołnierzu, który ma być poszerzony → Uzyskane poszerzenie.

Widać wyraźnie, że nie ma znaczenia, która krawędź została wybrana dla obiektu Rozszerzenie, kształt kołnierza jest zmieniany wszędzie tam, gdzie wystaje geometria szkicu, nowy kształt może nawet zawierać części, które są odłączone od oryginalnego kołnierza. Wielokrotne kontury nie stanowią problemu, ale kołnierz nie jest przycinany wgłąb.

Ten przykład pokazuje, że projektanci są odpowiedzialni za swoje konstrukcje i nie powinni polegać na wynikach swoich narzędzi, które w tym przypadku nie mają sensu. Szkic przymocowany do ściany kołnierza jest problematyczny również ze względu na problem związany z topologią nazw, ale dla tego przypadku rozwiązanie znajduje się w zasięgu wzroku.

Istnieją jednak lepsze przypadki użycia tego narzędzia obejmujące prawie zamknięte kształty, takie jak jeden z przykładów na stronie [Arkusz Blachy: Wyciągnij](/SheetMetal_Extrude/pl "SheetMetal Extrude/pl"):

![](/images/SheetMetal_Example-10k.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10l.png)

Prawie zamknięty profil → Dodana domyślna część jest połączona z przeciwległą stroną tworząc zamknięty profil _(rurę)_, który nie jest rozkładalny.

![](/images/SheetMetal_Example-10l.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10m.png)

Powiązanie prostokątnego szkicu z właściwością DANE**Szkic**: Profil zamknięty → Profil z przedłużeniem prostokątnym, jeszcze wtopiony.

![](/images/SheetMetal_Example-10m.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_Example-10n.png)

Przełącz parametr DANE**Użyj odejmowania** na wartość `Prawda`, aby zapewnić (mało widoczną) domyślną przerwę między obiektem Rozszerzenia a przeciwległą stroną, a następnie zwiększ DANE**Odsunięcie**, aby poszerzyć tę przerwę:  
Profil łączony → Profil z zazębiającym się przedłużeniem, ten efekt końcowy jest rozkładalny.

### Składanie obiektu

Składany obiekt jest wynikiem wygięcia blachy na danej linii.

Zmień właściwość DANE**Pozycja**, aby kontrolować położenie zagięcia względem linii zagięcia.

![](/images/SheetMetal_Example-10o.png)

Przekrój gięcia: Linia gięcia leży na górnej powierzchni półfabrykatu _(kolor czarny)_ z 10 mm odsunięciem od krawędzi, jej położenie zaznaczono pięciokątem. Określa ona również wirtualne przecięcie półfabrykatu i wygiętej ścianki.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_Examples/pl&oldid=1441546>"
