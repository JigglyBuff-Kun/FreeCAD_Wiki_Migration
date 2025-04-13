---
title: Projekt Części Transformacja wielokrotna
---
|  |
| --- |
| Projekt Części: Transformacja wielokrotna |
| Lokalizacja w menu |
| Projekt Części → Zastosuj przekształcenie → Utwórz transformację wielokrotną |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Odbicie lustrzane](/PartDesign_Mirrored/pl "PartDesign Mirrored/pl"), [Szyk liniowy](/PartDesign_LinearPattern/pl "PartDesign LinearPattern/pl"), [Szyk kołowy](/PartDesign_PolarPattern/pl "PartDesign PolarPattern/pl"), [Skaluj](/PartDesign_Scaled/pl "PartDesign Scaled/pl") |
|  |

## Opis

Narzędzie ![](/images/PartDesign_MultiTransform.svg) **Transformacja wielokrotna** tworzy szyk jednego lub więcej elementów. Szyk może zawierać wiele przekształceń, gdzie każde kolejne przekształcenie jest stosowane do wyniku poprzedniego przekształcenia.

Dostępne transformacje to: ![](/images/PartDesign_Mirrored.svg) [Odbicie lustrzane](/PartDesign_Mirrored/pl "PartDesign Mirrored/pl"), ![](/images/PartDesign_LinearPattern.svg) [Szyk liniowy](/PartDesign_LinearPattern/pl "PartDesign LinearPattern/pl"), ![](/images/PartDesign_PolarPattern.svg) [Szyk kołowy](/PartDesign_PolarPattern/pl "PartDesign PolarPattern/pl") i ![](/images/PartDesign_Scaled.svg). [Skaluj](/PartDesign_Scaled/pl "PartDesign Scaled/pl"). Pierwsze trzy są również dostępne jako osobne narzędzia.

![](/images/Multitransform_example.png)

Szyk otworów utworzony z pojedynczej cechy Otwór poprzez zastosowanie Szyku liniowego z 2 wystąpieniami, a następnie Szyku kołowego z 8 wystąpieniami.

## Użycie

### Tworzenie

1. Opcjonalnie [aktywuj](/PartDesign_Body/pl#Aktywny_status "PartDesign Body/pl") właściwą bryłę.
2. Opcjonalnie wybierz jedną lub więcej cech w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") lub w oknie [widoku 3D](/3D_view/pl "3D view/pl").
3. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/PartDesign_MultiTransform.svg) **Utwórz transformację wielokrotną**.
   * Wybierz z menu opcję **Projekt Części → Zastosuj przekształcenie → ![](/images/PartDesign_MultiTransform.svg). Utwórz transformację wielokrotną**.
4. Jeśli nie ma aktywnej Zawartości, a w dokumencie są dwie lub więcej Zawartości, otworzy się okno dialogowe **Wymagana jest aktywna zawartość** i poprosi o uaktywnienie jednej z nich. Jeśli istnieje jedna Zawartość, zostanie ona aktywowana automatycznie.
5. Jeśli nie wybrano żadnych cech, zostanie wyświetlone okno dialogowe **Wybierz cechę** otworzy się [panel zadań](/Task_panel/pl "Task panel/pl"): wybierz jedną lub więcej *(przytrzymaj klawisz Ctrl)* z listy i naciśnij przycisk OK.
6. Otworzy się [panel zadań](/Task_panel/pl "Task panel/pl") **Parametry Transformacji wielokrotnej**. Więcej informacji można znaleźć w sekcji [Opcje](#Opcje).
7. Naciśnij przycisk OK, aby zakończyć.

### Edycja

1. Wykonaj jedną z poniższych czynności:
   * Kliknij dwukrotnie obiekt Transformacja wielokrotna w oknie [Widok drzewa](/Tree_view/pl "Tree view/pl").
   * Kliknij obiekt Transformacja wielokrotna prawym przyciskiem myszy w oknie [Widok drzewa](/Tree_view/pl "Tree view/pl") i wybierz **Edycja funkcji transformacji wielokrotnej** z menu podręcznego.
2. Otworzy się panel [Panel zadań](/Task_panel/pl "Task panel/pl") **Parametry odbicia lustrzanego**. Więcej informacji można znaleźć w punkcie [Opcje](#Opcje).
3. Naciśnij przycisk OK, aby zakończyć.

### Łączenie istniejących transformacji

Możliwe jest utworzenie obiektu Transformacji wielokrotnej z istniejących przekształceń [Odbicia lustrzanego](/PartDesign_Mirrored/pl "PartDesign Mirrored/pl"), [Szyku linowego](/PartDesign_LinearPattern/pl "PartDesign LinearPattern/pl") i [Szyku kołowego](/PartDesign_PolarPattern/pl "PartDesign PolarPattern/pl").

1. Sprawdź właściwość DANE**Oryginały** istniejących przekształceń, aby upewnić się, że zostały one zastosowane do tych samych elementów.
2. Wybierz te cechy w [Widoku Drzewa](/Tree_view/pl "Tree view/pl").
3. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/PartDesign_MultiTransform.svg) Utwórz transformację wielokrotną.
   * Wybierz z menu opcję **Projekt Części → Zastosuj przekształcenie → ![](/images/PartDesign_MultiTransform.svg) Utwórz transformację wielokrotną**.
4. Otworzy się [panel zadań](/Task_panel/pl "Task panel/pl") **Parametry Transformacji wielokrotnej** .
5. Naciśnij przycisk OK u góry.
6. Edytuj właściwość DANE**Transformacje** utworzonego obiektu Transformacji wielokrotnej:
   1. Kliknij pole.
   2. Naciśnij przycisk …, który się pojawi.
   3. Otworzy się okno dialogowe **Łącze**.
   4. Przytrzymaj klawisz Ctrl i wybierz istniejące transformacje.
   5. Naciśnij przycisk OK.
7. Opcjonalnie [edytuj](#Edycja) obiekt Transformacji wielokrotnej, patrz wyżej.

## Opcje

* Wybierz tryb:
  + **Przekształć Zawartość**: Przekształca cały kształt cechy bazowej (domyślne). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
  + **Narzędzie przekształcania kształtów**: Przekształca pojedyncze kształty narzędzi wybranych cech.
    - Aby dodać cechy:
      1. Naciśnij przycisk Dodaj element.
      2. Wybierz element w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl") lub [Widoku 3D](/3D_view/pl "3D view/pl").
      3. Powtórz czynność, aby dodać więcej elementów.
    - Aby usunąć cechy:
      1. Naciśnij przycisk Usuń element.
      2. Wykonaj jedną z następujących czynności:
         * Wybierz element w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl") lub [Widoku 3D](/3D_view/pl "3D view/pl").
         * Zaznacz element na liście u góry i naciśnij klawisz Del.
         * Kliknij prawym przyciskiem myszy element na liście u góry i wybierz **Usuń** z menu podręcznego.
      3. Powtórz czynność, aby usunąć więcej funkcji.
    - Jeśli w szyku znajduje się kilka elementów, ich kolejność może być istotna. Zobacz stronę [Szyk kołowy](/PartDesign_PolarPattern/pl#Kolejność_cech "PartDesign PolarPattern/pl").
* Aby dodać transformacje:
  1. Jeśli już istnieją transformacje: wybierz jedną, po której ma zostać dodana nowa transformacja.
  2. Kliknij prawym przyciskiem myszy listę **Przekształcenia**.
  3. Wybierz jedną z następujących opcji z menu podręcznego:
     + **Dodaj transformację odbicia lustrzanego**. Zobacz stronę [Odbicie lustrzane](/PartDesign_Mirrored/pl "PartDesign Mirrored/pl").
     + **Dodaj transformację szyku liniowego**. Zobacz stronę [Szyk liniowy](/PartDesign_LinearPattern/pl "PartDesign LinearPattern/pl").
     + **Dodaj transformację szyku kołowego**. Zobacz stronę [Szyk kołowy](/PartDesign_PolarPattern/pl "PartDesign PolarPattern/pl").
     + **Dodaj transformację zmiany skali**. Zobacz stronę [Skaluj](/PartDesign_Scaled/pl "PartDesign Scaled/pl").
  4. Wybrana transformacja jest dodawana do listy, a ustawienia transformacji są wyświetlane poniżej listy.
  5. Dostosuj ustawienia do własnych potrzeb.
  6. Naciśnij przycisk OK na pasku u dołu.
  7. Powtórz czynność, aby dodać więcej operacji przekształceń.
* Aby edytować transformację:
  1. Kliknij prawym przyciskiem myszy transformację na liście **Transformacje**.
  2. Wybierz **Edytuj** z menu kontekstowego.
  3. Dostosuj ustawienia.
  4. Naciśnij OK na pasku u dołu.
* Aby zmienić kolejność transformacji:
  1. Kliknij prawym przyciskiem myszy transformację na liście **Transformacje**.
  2. Wybierz **Przenieś wyżej** lub **Przenieś w dółj** z menu podręcznego.
* Jeśli pole wyboru **Aktualizuj widok** jest zaznaczone, widok będzie aktualizowany w czasie rzeczywistym.

## Ograniczenia

Zobacz stronę o ograniczeniach [Szyku kołowego](/PartDesign_PolarPattern/pl#Ograniczenia "PartDesign PolarPattern/pl").

## Przykład

Za pomocą tego narzędzia można utworzyć ze szkicu w pełni parametryczną część, która jest symetryczna względem dwóch osi.

Może to być płyta montażowa o wymiarach 150x100x10 mm dla silnika z symetrycznymi otworami.

![](/images/PartDesign_MultiTransform_Example2.png)

1. Utwórz ![](/images/PartDesign_Body.svg) [Zawartość](/PartDesign_Body/pl "PartDesign Body/pl") i dodaj ![](/images/PartDesign_NewSketch.svg) [szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl") na jednej z jego płaszczyzn bazowych.
2. W szkicu utwórz geometrię dla jednej ćwiartki części *(tj. górnej prawej ćwiartki)*.
   * Zwróć uwagę, że wiązania muszą również obejmować tylko jedną czwartą części, np. zamiast pełnego wymiaru `150mm` wpisz `150/2mm` lub `75mm`.
   * Upewnij się, że szkic jest zamknięty, dodając linie wzdłuż osi pionowej i poziomej.
3. Wyciągnij część za pomocą fukcji ![](/images/PartDesign_Pad.svg) [Projekt Części: Wyciągnij](/PartDesign_Pad/pl "PartDesign Pad/pl").
4. Wybierz narzędzie ![](/images/PartDesign_MultiTransform.svg) **Utwórz transformacje wielokrotną**.
5. Zostanie otwarte okno dialogowe zadania.
6. Ostatnia cecha Zawartości jest już wybrana. Ponieważ chcemy wykonać odbicie lustrzane tego elementu, możemy zignorować przyciski Dodaj element i Usuń element.
7. Kliknij prawym przyciskiem myszki w polu **Transformacje** i wybierz **Dodaj transformację odbicia lustrzanego** z menu podręcznego.
8. Jako **Płaszczyznę** wybierz **Pionowa oś szkicu**.
9. Jeśli pole wyboru **Aktualizuj widok** jest zaznaczone, część powinna być teraz odbita symetrycznie względem jednej z osi.
10. Ponownie wybierz **Dodaj transformację odbicia lustrzanego** z menu podręcznego w polu **Transformacje**.
11. Teraz jako **Płaszczyznę** wybierz **Pozioma oś szkicu**.
12. Naciśnij przycisk OK, aby zakończyć operację.
13. Aby usunąć krawędzie wzdłuż osi symetrii w wyniku końcowym, ustaw właściwość DANE**Ulepsz** nowego elementu na `Prawda` w [edytorze właściwości](/Property_editor/pl "Property editor/pl").

Aby sprawdzić, czy część jest w pełni parametryczna, otwórz początkowy szkic z ćwiartką części i zmień jeden wymiar, na przykład średnicę otworu. Po zamknięciu szkicu trzy pozostałe otwory zostaną odpowiednio zmienione. Działa to również w przypadku wszystkich innych wymiarów. Szkic modelujący całą część z pojedynczym wyciągnięciem i bez odbicia lustrzanego byłby znacznie bardziej złożony, a wprowadzenie wszystkich późniejszych zmian byłoby bardziej skomplikowane.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_MultiTransform/pl&oldid=1485343>"