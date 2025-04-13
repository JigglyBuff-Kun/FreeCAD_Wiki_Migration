---
title: Arkusz Blachy Utwórz ściankę
---

:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|                                                                     |
| ------------------------------------------------------------------- |
| Arkusz Blachy: Utwórz ściankę                                       |
| Lokalizacja w menu                                                  |
| SheetMetal → Utwórz ściankę                                         |
| Środowisko pracy                                                    |
| [Arkusz Blachy](/SheetMetal_Workbench/pl "SheetMetal Workbench/pl") |
| Domyślny skrót                                                      |
| W                                                                   |
| Wprowadzono w wersji                                                |
| -                                                                   |
| Zobacz także                                                        |
| _brak_                                                              |
|                                                                     |

## Opis

Polecenie ![](/images/SheetMetal_AddWall.svg) **Utwórz ścianę** tworzy obrzeża na wybranych krawędziach płyty bazowej. Poprzez zmianę właściwości DANE**kąt** obrzeża można je przekształcić w półokrągłości.

**Obrzeże** składa się z zagięcia walcowego 90° i płaskiej listwy _(ścianki)_.

![](/images/SheetMetal_AddWall-12.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddWall-13.png)

Dwie wybrane krawędzie → dwa obrzeża.

Zresetowanie właściwości DANE**kąt** do około 180° w drugim kroku spowoduje utworzenie _obszycia_.

![](/images/SheetMetal_AddWall-14.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddWall-15.png)

Dwie wybrane krawędzie → dwa obszycia.

## Użycie

1. Wybierz jedną lub więcej krawędzi elementu bazowego.
2. Jest kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/SheetMetal_AddWall.svg) **Utwórz ściankę**.
   - Wybierz opcję **Sheet Metal → ![](/images/SheetMetal_AddWall.svg) Utwórz ściankę** z menu.
   - Kliknij prawym przyciskiem myszy w [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **Sheet Metal → ![](/images/SheetMetal_AddWall.svg) Utwórz ścianę** z menu kontekstowego.
   - Użyj skrótu klawiszowego: W.
3. Utworzony zostanie obiekt **Bend** i otworzy się [panel zadań](/Task_panel/pl "Task panel/pl") **Flange properties** z wybraną zakładką **General**.

   : Obiekt **Bend** składa się z jednego nowego kołnierza na każdej wskazanej krawędzi.

4. Opcjonalnie wciśnij przycisk Wybierz aby dodać więcej krawędzi.
   - Opcjonalnie wciśnij przycisk Wyczyść wybór aby wyczyścić listę wybranych krawędzi (wprowadzone w wersji 0.7.11 ale nie działa poprawnie).
   - Wciśnij przycisk Podgląd aby zakończyć wybór i wyświetlić zmiany.
5. Opcjonalnie otwórz inną zakładkę i dostosuj więcej parametrów w panelu zadań.
6. Wciśnij przycisk OK aby zakończyć polecenie i zamknąć panel zadań.
7. Opcjonalnie dostosuj parametry w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

## Panel zadań

[Panel zadań](/Task_panel/pl "Task panel/pl") z 4 zakładkami został wprowadzony w wersji 0.6.00

Dwukrotnie kliknij na istniejącym obiekcie Bend w [Widoku drzewa](/Tree_view/pl "Tree view/pl") aby ponownie otworzyć panel zadań i edytować parametry.

#### Ogólne

![](/images/SheetMetal_AddWall-Task1.png)

- Select: Zmienia liczbę krawędzi we właściwości **base Object**.
- **Length**: Ustawia właściwość **length**.
- ![](/images/Invert_On.svg) Reverse the wall: Przełącza właściwość **invert**.
- **Length mode**: Ustawia właściwość **Length Spec**.
- **Bend radius**: Ustawia właściwość **radius**.
- **Bend angle**: Ustawia właściwość **angle**.
- ![](/images/FaceSelection_On.svg) Face reference: Przełącza właściwość **Angle Face Ref Mode**.

  : Jeśli aktywowane, przełącza opcję **Bend angle** na tryb tylko do odczytu i wyświetla dwie kolejne opcje:

  - **Reference**: Czeka na wybór ściany w widoku 3d i łączy ją z właściwością **Angle Face Reference**.
  - **Relative angle**: Ustawia właściwość **Relative Angle To Ref** i właściwość **angle**..

- **Unfold**: Przełącza właściwość **unfold**.

#### Odsunięcia

![](/images/SheetMetal_AddWall-Task2.png)

- **Gap A**: Ustawia właściwość **gap1**.
- **Gap B**: Ustawia właściwość **gap2**.
- **Extend A**: Ustawia właściwość **extend1**.
- **Extend B**: Przełącza właściwość **extend2**.
- Przyciski **Rectangle** i **Round**: Przełączają właściwość **Relief Type**.
- **Width**: Ustawia właściwość **reliefw**.
- **Depth**: Przełącza właściwość **reliefd**.

#### Zagięcie

![](/images/SheetMetal_AddWall-Task3.png)

- **Auto Miter**: Przełącza właściwość **Auto Miter**.

  : Jeśli zaznaczone:

  - **Minimum Gap**: Ustawia właściwość **minGap**.
  - **Max Extend Distance**: Ustawia właściwość **max Extend Dist**.

  : Jeśli odznaczone:

  - **Angle 1**: ustawia właściwość **miteralgle1**.
  - **Angle 2**: ustawia właściwość **miteralgle2**.

#### Perforacja

![](/images/SheetMetal_AddWall-Task4.png)

- **Perforate**: Przełącza właściwość **Perforate**.

  : Jeśli zaznaczone:

  - **Angle**: Ustawia właściwość **Perforation Angle**.
  - **Initial Cut Length**: Ustawia właściwość **Perforation Initial Length**.
  - **Max Cut Length**: Ustawia właściwość **Perforation Max Length**.
  - **Max Tab Length**: Ustawia właściwość **Nonperforation Max Length**.

## Uwagi

Do stworzenia płyty bazowej użyj zamkniętego konturu 2D - najlepiej użyj narzędzia ![](/images/Sketcher_NewSketch.svg) [Utwórz szikc](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl") - i kolejnie ![](/images/SheetMetal_AddBase.svg) [Utrzurz element bazowy](/SheetMetal_AddBase/pl "SheetMetal AddBase/pl").

Alternatywnie płytę bazową (pustą) można utworzyć za pomocą poleceń środowisk pracy ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl") lub ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").

Aby utworzyć półfabrykat za pomocą środowiska pracy [Część](/Part_Workbench/pl "Part Workbench/pl"):

1. Utwórz bryłę za pomocą:
   - ![](/images/Part_Box.svg) [Sześcian](/Part_Box/pl "Part Box/pl").
   - ![](/images/Part_Extrude.svg) [Wyciągnięcie ...](/Part_Extrude/pl "Part Extrude/pl") z:
     - ![](/images/Draft_Rectangle.svg) [Prostokąta](/Draft_Rectangle/pl "Draft Rectangle/pl") środowiska Rysunek Roboczy.
     - ![](/images/Draft_Wire.svg) [Polilinia](/Draft_Wire/pl "Draft Wire/pl") środowiska Rysunek Roboczy.
     - ![](/images/Sketcher_NewSketch.svg) [Utwórz szkic](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl") środowiska Szkicownik.
2. Upewnij się, że jeden z wymiarów pudełka lub odległość wytłaczania jest równa grubości blachy.

Aby utworzyć półfabrykat za pomocą środowiska [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"):

1. Utwórz bryłę używając
   - ![](/images/PartDesign_AdditiveBox.svg) [Addytywny prostopadłościan](/PartDesign_AdditiveBox "PartDesign AdditiveBox").
   - ![](/images/PartDesign_Pad.svg) [Wyciągnięcia](/PartDesign_Pad/pl "PartDesign Pad/pl") ze ![](/images/Sketcher_NewSketch.svg) [szkicu](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl").
2. Upewnij się, że jeden z wymiarów prostopadłościanu lub właściwości DANE**Długość** wyciągnięcia jest równy grubości blachy.

Jeśli zaczniesz od utworzenia ![](/images/PartDesign_Body.svg) [Zawartości](/PartDesign_Body/pl "PartDesign Body/pl"), możesz mieszać cechy środowiska Arkusz Blachy z cechami środowiska Projekt Części, takimi jak ![](/images/PartDesign_Pocket.svg) [kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl") lub ![](/images/PartDesign_Hole.svg) [otwór](/PartDesign_Hole/pl "PartDesign Hole/pl").

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Zagięcie środowiska Arkusz Blachy wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") lub, jeśli jest w obrębie [Zawartości środowiska Projekt Części](/PartDesign_Body/pl "PartDesign Body/pl"), z obiektu [Cechy tego środowiska](/PartDesign_Feature/pl "PartDesign Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Parametry

- DANE**Typ gięcia** (`Enumeration`): "Typ gięcia". `Materiał na zewnątrz` _(domyślnie)_, `Materiał do wewnątrz`, `Grubość na zewnątrz`, `Odsunięcie`.
- DANE**Specyfikacja długości** (`Enumeration`): "Specyfikacja typu długości". `Leg` _(domyślnie)_, `Zewnętrzny ostry`, `Wewnętrzny ostry`, `Styczny`.
- DANE**Kąt** (`Angle`): "Kąt gięcia". Domyślny kąt: `90,00°`.
- DANE**Obiekt bazowy** (`LinkSub`): "Obiekt bazowy". Łącze do płaskiej powierzchni, która ma zostać wygięta.
- DANE**extend1** (`Distance`): "Przedłużenie z lewej strony". Domyślnie: `0,00 mm`.
- DANE**extend2** (`Distance`): "Przedłużenie z prawej strony". Domyślnie: `0,00 mm`.
- DANE**Szczelina1** (`Distance`): "Szczelina z lewej strony". Wartość domyślna: `0,00 mm`.
- DANE**Szczelina2** (`Distance`): "Szczelina z prawej strony". Wartość domyślna: `0,00 mm`.
- DANE**odwróć** (`Bool`): "Odwrócony kierunek zagięcia". Wartość domyślna: `FAŁSZ`.
- DANE**Długość** (`Length`): "Długość ściany". Wartość domyślna: `10,00 mm`.
- DANE**Promień** (`Length`): "Promień zgięcia", domyślna wartość zależy od właściwości promienia cechy nadrzędnej:
  - Ta właściwość nie istnieje: Ta właściwość jest ustawiona na `1,00 mm`.
  - Ta właściwość zawiera wartość numeryczną: Wyrażenie wiążące tą właściwość jest wstawiane do ten właściwości.
  - Ta właściwość zawiera wyrażenie: Wyrażenie jest kopiowane do tej właściwości.

Parametry Ex

- DANE**Angle Face Ref Mode** (`Bool`): "Włącz odniesienie ściany dla kąta". Domyślnie: `PRAWDA`. wprowadzone w wersji 0.7.11
- DANE**Angle Face Referene** (`LinkSub`): "Odniesienie ściany dla kąta". Domyślnie: `PRAWDA`. wprowadzone w wersji 0.7.11
- DANE**Automatyczne ścięcie** (`Bool`): "Włącz automatyczne ukosowanie". Domyślnie: `PRAWDA`.
- DANE**Offset Face Ref Mode** (`Bool`): "Włącz odniesienie ściany dla odsunięcia". Domyślnie: `PRAWDA`. wprowadzone w wersji 0.7.11
- DANE**Offset Face Reference** (`LinkSub`): "Odniesienie ściany dla odsunięcia". Domyślnie: `PRAWDA`. wprowadzone w wersji 0.7.11
- DANE**Offset Type** (`Enumeration`): "Typ odsunięcia". wprowadzone w wersji 0.7.11

  : Wartości: `Material Outside`, `Material Inside` (default), `Thickness Outside`, `Offset`.

- DANE**Offset Type Offset** (`Distance`): "Działa gdy odniesienie ściany dla odsunięcia jest włączone. Odsuwa o odległość w kierunku normalnym od ściany odniesienia dla odsunięcia". Domyślnie: `0.00`. wprowadzone w wersji 0.7.11
- DANE**Relative Angle To Ref** (`Angle`): "Względny kąt do odniesienia ściany". Domyślnie: `0.00`. wprowadzone w wersji 0.7.11
- DANE**Suppl Angle Ref** (`Bool`): "Dodatkowe odniesienie kąta". Domyślnie: `PRAWDA`. wprowadzone w wersji 0.7.11
- DANE**Współczynnik K** (`FloatConstraint`): "Położenie linii neutralnej. Uwaga: Korzystanie ze standardów ANSI, nie DIN.".  
   Domyślnie: `0,50`. Współczynnik K _(znany również jako współczynnik neutralny)_ dla zgięcia. Używany do obliczania naddatku na zginanie podczas rozkładania.
- DANE**max Odległość wysuwu** (`Length`): "Maksymalny wysuw przy automatycznym ścinaniu". Domyślnie: `5,00 mm`.
- DANE**min Szczelina** (`Length`): "Minimalna szczelina przy automatycznym ścinaniu". Domyślnie: `0,20 mm`.
- DANE**min Szczelina podcięcia** (`Length`): "Minimalna szczelina do podcięcia". Domyślnie: `1,00 mm`.
- DANE**Odsunięcie** (`Distance`): "Odsunięcie zagięcie". Domyślnie: `0,00 mm`.
- DANE**Rozwiń** (`Bool`): "Pokazuje widok rozwinięcia bieżącego zagięcia". Domyślnie: `FAŁSZ`  
   wartość `PRAWDA` powoduje rozwinięcie zagięcia.

Parametry Ex2

- DANE**Szkic** (`Link`): "Obiekt Szkicu".
- DANE**ObróćSzkic** (`Bool`): "Odwróć kierunek szkicu". Wartość domyślna: `FAŁSZ`.
- DANE**OdwróćSzkic** (`Bool`): "Odwróć początek szkicu". Wartość domyślna: `FAŁSZ`.

Parametry Ex3

- DANE**Lista długości** (`FloatList`): "Lista długości ścian". Wartość domyślna: `[10.00]`.
- DANE**Lista A zgięć** (`FloatList`): "Lista kątów gięcia". Wartość domyślna: `[90.00]`.

Parametery kąta zagięcia

- DANE**Kąt zagięcia 1** (`Angle`): "Kąt zagięcia z lewej strony". Domyślny kąt: `0,00°`.
- DANE**Kąt zagięcia 2** (`Angle`): "Kąt zagięcia z prawej strony". Domyślny kąt: `0,00°`.

Parametry perforacji

- DANE**Nonperforation Max Length** (`Length`): "Maksymalna długość bez perforacji". Domyślnie: `5 mm`.
- DANE**Perforate** (`Bool`): "Włącz perforacje". Domyślnie: `FAŁSZ`.
- DANE**Perforation Angle** (`Angle`): "Kąt perforacji". Domyślnie: `0 °`.
- DANE**Perforation initial Length** (`Length`): "Początkowa długość perforacji". Domyślnie: `5 mm`.
- DANE**Perforation Max Length** (`Length`): "Maksymalna długość perforacji". Domyślnie: `5 mm`.

Parametry reliefu

- DANE**Współczynnik podcięcia** (`Float`): "Współczynnik podcięcia". Wartość domyślna: `0,70`.
- DANE**Zastosuj współczynnik poecięcia** (`Bool`): "Zastosuj współczynnik podcięcia". Wartość domyślna: `FAŁSZ`.
- DANE**Typ podcięcia** (`Enumeration`): "Typ podcięcia". `Prostokątne` _(domyślnie)_, `Zaokrąglone`. Włączone tylko wtedy, gdy ustawiona jest wartość szczeliny.
- DANE**PodcięcieD** (`Length`): "Głębokość podcięcia". Domyślnie: `1,00 mm`. Włączone tylko po ustawieniu wartości szczeliny.
- DANE**PodcięcieW** (`Length`): "Szerokość podcięcia". Wartość domyślna: `0,80 mm`. Włączone tylko po ustawieniu wartości szczeliny.

## Przykład

![](/images/SheetMetal_AddWall-01.png)

Zwykła taca

### Przygotowania

Ta taca jest wykonana z prostokątnego półfabrykatu ze ściankami dodanymi do jego krawędzi.
W związku z tym należy wcześniej przygotować jeden szkic konturu półfabrykatu.

![](/images/SheetMetal_AddWall-02.png)

Tylko prostokątny kontur

### Przepływ pracy

1. Utwórz pusty dokument.
   1. Wybierz szkic konturu.  
      ![](/images/SheetMetal_AddWall-03.png)
   2. Naciśnij przycisk ![](/images/SheetMetal_AddBase.svg) [Utwórz element bazowy](/SheetMetal_AddBase/pl "SheetMetal AddBase/pl").  
      lub użyj skrótu klawiaturowego: C + F.  
      ![](/images/SheetMetal_AddWall-04.png)  
      _(Materiał zostanie wyciągnięty w kierunku osi Z)_
2. Dodaj ściany do krawędzi konturu.
   1. Wybierz krawędzie obrysu półfabrykatu.  
      ![](/images/SheetMetal_AddWall-05.png).
   2. Naciśnij przycisk ![](/images/SheetMetal_AddWall.svg) Utwórz siankę,  
      lub użyj skrótu klawiaturowego: W.  
      ![](/images/SheetMetal_AddWall-06.png)
   3. Jeśli zagięcie jest o 90° w dół, ustaw wartość właściwości **Odwróć** na `Prawda`, aby odwrócić kierunek _(i **długość** na niższą wartość w przypadku mniejszych ścian)_.  
      ![](/images/SheetMetal_AddWall-01.png)
3. Dodaj więcej ścian.
   1. Wybierz **górne zewnętrzne krawędzie** tacy.  
      ![](/images/SheetMetal_AddWall-08.png)
   2. Naciśnij przycisk ![](/images/SheetMetal_AddWall.svg) Utwórz ściankę,  
      lub użyj skrótu klawiaturowego: W.  
      ![](/images/SheetMetal_AddWall-09.png)
   3. Ściany są trochę za długie _(ale ładnie przycięte)_, dlatego właściwość **długość** musi być ustawiona na niższą wartość.  
      ![](/images/SheetMetal_AddWall-10.png)
   4. Jeśli lubisz zagięcia odchylane na zewnątrz, ustaw wartość **Odwróć** na `Prawda`.  
      ![](/images/SheetMetal_AddWall-11.png)

Gotowe!

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddWall/pl&oldid=1546870>"
