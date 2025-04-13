---
title: Arkusz Blachy Wykonaj formowanie w ściance
---

:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|                                                                     |
| ------------------------------------------------------------------- |
| Arkusz Blachy: Wykonaj formowanie w ściance                         |
| Lokalizacja w menu                                                  |
| SheetMetal → Wykonaj formowanie w ściance                           |
| Środowisko pracy                                                    |
| [Arkusz Blachy](/SheetMetal_Workbench/pl "SheetMetal Workbench/pl") |
| Domyślny skrót                                                      |
| M F                                                                 |
| Wprowadzono w wersji                                                |
| -                                                                   |
| Zobacz także                                                        |
| _brak_                                                              |
|                                                                     |

## Opis

Narzędzie ![](/images/SheetMetal_Forming.svg) **Wykonaj formowanie w ściance** tworzy wytłoczenie w powierzchni blachy przy użyciu oddzielnego obiektu bryły.

Tylna ściana bryły definiującej kształt oraz ściana, która ma zostać wytłoczona, są używane do pozycjonowania i orientowania bryły, tzn. ich lokalne układy współrzędnych będą miały domyślnie ten sam początek i tę samą orientację. Kąt wokół osi Z oraz przesunięcia w kierunku X, Y i Z można zmienić, zmieniając ich wartości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

Można dodać szkic, aby zwielokrotnić i rozłożyć wytłoczony kształt w regularne lub nieregularne wzory _(używając punktów środkowych okręgów lub łuków)_.

Mały prezentacja mozliwości, które mogą być tworzone:

![](/images/SheetMetal_Forming-08.png)
![](/images/SheetMetal_Forming-09.png)  
![](/images/SheetMetal_Forming-10.png)
![](/images/SheetMetal_Forming-11.png)

Wgłębienia, żaluzje, rysowane wycięcia, mostki

## Użycie

Upewnij się, że bryła zawierająca obiekt, który ma zostać wytłoczony, jest aktywną bryłą. W razie potrzeby kliknij na nią dwukrotnie w [Widoku drzewa](/Tree_view/pl "Tree view/pl").

### Wgłębienia

1. Wybierz powierzchnię obiektu Arkusz blachy, która ma zostać wytłoczona.
2. Przytrzymaj wciśnięty klawisz Ctrl _(lub Command w systemie macOS)_.
3. Dodaj do zaznaczenia "dolną powierzchnię" _(tylną stronę)_ bryły definiującej kształt.
4. Zwolnij klawisz Ctrl _(lub przycisk polecenia)_.
5. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/SheetMetal_Forming.svg) Formowanie blach.
   - Wybierz opcję **SheetMetal → ![](/images/SheetMetal_Forming.svg) Wykonaj formowanie w ścianie** z menu.
   - Kliknij prawym przyciskiem myszy w [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **SheetMetal → ![](/images/SheetMetal_Forming.svg) Wykonaj formowanie w ścianie** z menu kontekstowego.
   - Użyj skrótu klawiaturowego: M a następnie F.
6. Otwarty zostanie [panel zadań](/Task_panel/pl "Task panel/pl") **Parametry narzędzi do formowania** (wprowadzony w wersji 0.5.00).
7. Opcjonalnie wybierz nowe ściany/krawędzie.
   - Wciśnij przycisk Aktualizuj aby zakończyć wybór i wyświetlić zmiany.
8. Wciśnij przycisk OK aby zakończyć polecenie i zamknąć panel zadań.
9. Na środku wskazanej ściany do wytłoczenia zostanie utworzony obiekt **WallForming**.
10. Opcjonalnie dostosuj parametry w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

### Żaluzje

1. Wybierz powierzchnię obiektu Arkusz blachy, która ma zostać wytłoczona.
2. Przytrzymaj wciśnięty klawisz Ctrl _(lub Command w systemie macOS)_.
3. Dodaj do zaznaczenia "dolną powierzchnię" _(tylną stronę)_ bryły definiującej kształt.
4. Dodaj do zaznaczenia "boczną ścianę" przylegającą do dolnej ściany, aby wskazać miejsce cięcia.
5. Zwolnij klawisz Ctrl _(lub klawisz Command)_.
6. Wywołaj polecenie i postępuj zgodnie z krokami opisanymi powyżej.

### Mostki

1. Wybierz powierzchnię obiektu Arkusz blachy, który ma zostać wytłoczony.
2. Przytrzymaj wciśnięty klawisz Ctrl _(lub Command w systemie macOS)_.
3. Dodaj do zaznaczenia "dolną powierzchnię" _(tylną stronę)_ bryły definiującej kształt.
4. Dodaj do zaznaczenia "boczną ścianę" przylegającą do dolnej ściany, aby wskazać miejsce pierwszego cięcia.
5. Dodaj do zaznaczenia "przeciwległą ścianę boczną" przylegającą do dolnej ściany, aby wskazać miejsce drugiego cięcia.
6. Zwolnij klawisz Ctrl _(lub klawisz Command)_.
7. Wywołaj polecenie i postępuj zgodnie z krokami opisanymi powyżej.

### Rysowane wycięcia

1. Wybierz powierzchnię obiektu Arkusz blachy, który ma zostać wytłoczony.
2. Przytrzymaj wciśnięty klawisz Ctrl _(lub Command w systemie macOS)_.
3. Dodaj do zaznaczenia "dolną powierzchnię" (tylną) bryły definiującej kształt.
4. Dodaj do zaznaczenia "górną ścianę" naprzeciwko dolnej, aby zaznaczyć obszar, który ma zostać wycięty.
5. Zwolnij klawisz Ctrl _(lub klawisz Command)_.
6. Wywołaj polecenie i postępuj zgodnie z krokami opisanymi powyżej.

### Powielanie i tworzenie wzoru

Aby powielić i nadać wzór wytłoczonemu elementowi, można dodać **szkic** zawierający okręgi i łuki do właściwości obiektu **Formowanie Ściany** DANE**Szkic**. Szkic wzoru musi być _współpłaszczyznowy_ z powierzchnią, która ma podlegać wytłoczeniu.

Punkty środkowe okręgów lub łuków są używane do zapewnienia pozycji do umieszczenia wystąpień wytłoczonego elementu, nie mają one wpływu na orientację wystąpień.

Orientacja nadal zależy od orientacji pierwszej wybranej ściany.

### Dodawanie zaokrągleń

1. Przełącz się na środowisko pracy ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"),
2. Wybierz krawędź na górnej stronie obiektu Arkusza blachy, aby otrzymać zaokrąglenie
3. Aktywuj funkcję ![](/images/PartDesign_Fillet.svg) [Zaokrąglenie](/PartDesign_Fillet/pl "PartDesign Fillet/pl") za pomocą jednej z poniższych metod:
   - Przycisk na pasku narzędzi ![](/images/PartDesign_Fillet.svg) [Zaokrąglenie](/PartDesign_Fillet/pl "PartDesign Fillet/pl").
   - Opcja menu **Projekt Części → Zastosuj funkcje ulepszenia → ![](/images/PartDesign_Fillet.svg) Zaokrąglenie**.
4. Ustaw właściwość DANE**Dopracuj** obiektu Zaokrąglenie na `PRAWDA`. Jest to ważne dla następnego zaokrąglenia.
5. Wybierz krawędź w dolnej części obiektu Arkusz blachy, która ma zostać zaokrąglona.
6. Aktywuj ![](/images/PartDesign_Fillet.svg) [Zaokrąglenie](/PartDesign_Fillet/pl "PartDesign Fillet/pl") _(patrz wyżej)_.

## Uwagi

Geometria wytłoczona nie ogranicza się do ścian planarnych i połączeń cylindrycznych, dlatego po zastosowaniu takiej geometrii na obiekcie typu Arkusz blachy **obiekt nie będzie już rozkładalny**.

Formowanie można wyłączyć _(ustawiając właściwość DANE**Pomiń cechę** na wartość `true`)_ w celu rozłożenia obiektu, ale zaokrąglenia tracą swoje definiujące krawędzie i wyświetlają błąd, gdy formowanie jest ponownie włączone.

Formowanie i zaokrąglenia powinny być ostatnimi krokami przy tworzeniu obiektu typu arkusz blachy.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Formowanie blach wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") lub, jeśli jest w obrębie [Zawartości środowiska Projekt Części](/PartDesign_Body/pl "PartDesign Body/pl"), z obiektu [Cechy tego środowiska](/PartDesign_Feature/pl "PartDesign Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Parametry

- DANE**Pomiń cechę** (`Bool`): " Wyklucz cechę formowania". Domyślna wartość to `FAŁSZ`.
- DANE**kąt** (`Angle`): " Kąt położenia narzędzia". Domyślny kąt: `0,00°`.
- DANE**obiekt Bazowy** (`LinkSub`): "Obiekt bazowy". Link do powierzchni planarnej, która ma zostać wytłoczona.
- DANE**offset** (`VectorDistance`): " Odsunięcie od środka ściany". Domyślnie: `[0,00 mm, 0,00 mm, 0,00 mm]`.
- DANE**grubość** (`Distance`): " Grubość arkusza blachy". Grubość DANE (hidden)**Cecha bazowa**.
- DANE**Obiekt narzędzia** (`LinkSub`): "Obiekt narzędzia formującego". Link do powierzchni planarnej używanej do pozycjonowania narzędzia do formowania.

Parametry1

- DANE**Szkic** (`Link`): "Szkic punktu na blasze". Link do szkicu zawierającego informacje jak zwielokrotnić i rozmieścić wystąpienia narzędzia formującego. _(Punkty środkowe okręgów i łuków są używane do tworzenia i pozycjonowania tych wystąpień)_.

## Przykład

![](/images/SheetMetal_Forming-01.png) ![](/images/SheetMetal_Forming-02.png)

Sześciokątna miska z wytłoczonym środkiem

### Przygotowanie

Ta miska jest wykonana ze złożenia przedmiotu z blachy z kształtem do wytłoczenia, oba muszą być wcześniej przygotowane.

Tutaj nie ma potrzeby pracy z szkicami współplanarnymi.

![](/images/SheetMetal_Forming-03.png)

Arkusz blachy metalowej miski i obiekt do wytłaczania

### Przepływ pracy

1. Wybierz ściankę obiektu arkusza blachy, który ma zostać wytłoczony
2. Wybierz **tylną stronę** bryły definiującej kształt  
    _(Pamiętaj, że zarówno obiekt, który ma być wytłoczony **jak i** bryła definiująca kształt muszą być zaznaczone. Aktywuj metodę wielokrotnego wyboru odpowiednią dla Twojego systemu operacyjnego: Control / Command)_.  
   ![](/images/SheetMetal_Forming-04.png)
3. Naciśnij przycisk ![](/images/SheetMetal_Forming.svg). Wykonaj formowanie w ścianie przycisk  
   lub użyj skrótu klawiaturowego: M a następnie F.  
   ![](/images/SheetMetal_Forming-05.png)
4. Zaokrąglij ostre krawędzie:
   - Odwróć miskę i wybierz jedną lub więcej krawędzi dla mniejszych promieni wewnętrznych
   - Naciśnij przycisk ![](/images/PartDesign_Fillet.svg) [Zaokrąglenie](/PartDesign_Fillet/pl "PartDesign Fillet/pl") w środowisku pracy Projekt Części  
     ![](/images/SheetMetal_Forming-12.png) \*_-->_- ![](/images/SheetMetal_Forming-02.png)
   - Odwróć ponownie miskę i wybierz jedną lub więcej krawędzi dla większych promieni zewnętrznych
   - Naciśnij przycisk ![](/images/PartDesign_Fillet.svg) [Zaokrąglenie](/PartDesign_Fillet/pl "PartDesign Fillet/pl") w środowisku pracy Projekt Części  
     ![](/images/SheetMetal_Forming-13.png) \*_-->_- ![](/images/SheetMetal_Forming-01.png)
     Gotowe!
5. Zmiana orientacji i położenia _(należy to zrobić przed rozpoczęciem zaokrąglania)_
   - Aktywuj obiekt ![](/images/SheetMetal_Forming.svg) WallForming w [Widoku drzewa](/Tree_view/pl "Tree view/pl")
   - Ustawić wartość właściwości DANE**kąt** na np. 45°  
      ![](/images/SheetMetal_Forming-14.png)
   - Ustaw wartość właściwości DANE**odsunięcie, x** na np. większą niż 0  
      ![](/images/SheetMetal_Forming-06.png)  
      Tutaj widać wyraźnie, że nie ma sensu przesuwać wytłoczonej geometrii poza wybraną ścianę.
   - Ustawienie wartości właściwości DANE**odsunięcie, z** na np. większą niż 0 nie jest wcale lepsze:  
      ![](/images/SheetMetal_Forming-07.png)  
      Przynajmniej FreeCAD nie zawiesza się, gdy część ma dwie bryły...
6. Kilka wskazówek
   1. Wysokość bryły definiującej określa głębokość wytłoczonego kształtu. </Oznacza to, że zmiana parametru **odsunięcie, z** w celu zmiany głębokości nie przyniesie oczekiwanych rezultatów.
   2. Wytłoczona geometria jest wykonana z obiektu typu powłoka, tzn. ma stałą grubość. </Dlatego bryła definiująca musi być odsunięta, w przeciwnym razie narzędzie nie utworzy wytłoczenia.
   3. Jeśli zewnętrzne krawędzie zostaną najpierw zaokrąglone, może to spowodować rozerwanie obiektu na kilka kawałków, jeśli promienie będą miały zbyt duże wartości.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_Forming/pl&oldid=1546076>"
