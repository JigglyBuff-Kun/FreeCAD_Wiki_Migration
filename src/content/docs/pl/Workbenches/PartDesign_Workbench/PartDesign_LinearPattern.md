---
title: Projekt Części Szyk liniowy
---
|  |
| --- |
| Projekt Części: Szyk liniowy |
| Lokalizacja w menu |
| Projekt Części → Zastosuj szyk → Szyk liniowy |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Transformacja wielokrotna](/PartDesign_MultiTransform/pl "PartDesign MultiTransform/pl") |
|  |

## Opis

Narzędzie ![](/images/PartDesign_LinearPattern.svg) **Szyk liniowy** tworzy szyk liniowy jednej lub kilku cech.

![](/images/PartDesign_LinearPattern_example.svg)

Powyżej: wyciągnięcie w kształcie litery L *(B)* wykonane na bazie bryły *(A, zwanej również podstawą)* jest używane do tworzenia szyku liniowego. Wynik *(C)* jest pokazany po prawej stronie

.

## Użycie

### Tworzenie

1. Opcjonalnie [aktywuj](/PartDesign_Body/pl#Aktywny_status "PartDesign Body/pl") właściwą bryłę.
2. Opcjonalnie wybierz jedną lub więcej cech w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") lub w [widoku 3D](/3D_view/pl "3D view/pl").
3. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/PartDesign_LinearPattern.svg) Szyk liniowy.
   * Wybierz z menu **Projekt Części → Zastosuj przekształcenie → ![](/images/PartDesign_LinearPattern.svg) Szyk liniowy**.
4. Jeśli nie ma aktywnej Zawartości, a w dokumencie są dwie lub więcej Zawartości, otworzy się okno dialogowe **Wymagana jest aktywna Zawartość** i poprosi o uaktywnienie jednej z nich. Jeśli istnieje jedna struktura, zostanie ona aktywowana automatycznie.
5. Jeśli nie wybrano żadnych cech, zostanie wyświetlone okno dialogowe **Wybierz cechę** otworzy się [panel zadań](/Task_panel/pl "Task panel/pl"): wybierz jedną lub więcej *(przytrzymaj klawisz Ctrl)* z listy i naciśnij przycisk OK.
6. Otworzy się [panel zadań](/Task_panel/pl "Task panel/pl") **Parametry Szyku liniowego**. Więcej informacji na ten temat można znaleźć w sekcji [Opcje](#Opcje).
7. Naciśnij przycisk OK, aby zakończyć.

### Edycja

1. Wykonaj jedną z następujących czynności:
   * Kliknij dwukrotnie obiekt Szyk Liniowy w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl").
   * Kliknij prawym przyciskiem myszy obiekt Szyk Liniowy w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") i wybierz opcję **Edytuj Szyk Liniowy** z menu kontekstowego.
2. Otworzy się [panel zadań](/Task_panel/pl "Task panel/pl") **Parametry Szyku liniowego**. Więcej informacji można znaleźć w sekcji [Opcje](#Opcje).
3. Naciśnij przycisk OK, aby zakończyć.

## Opcje

* Wybierz tryb:
  + **Przekształć Zawartość**: Przekształca cały kształt cechy bazowej (domyślne). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
  + **Narzędzie przekształcania kształtów**: Przekształca pojedyncze kształty narzędzi wybranych cech.
    - Aby dodać cechy:
      1. Naciśnij przycisk Dodaj cechę.
      2. Wybierz cechę w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl") lub w oknie [Widoku 3D](/3D_view/pl "3D view/pl").
      3. Powtórz, aby dodać więcej cech.
    - Aby usunąć cechy:
      1. Naciśnij przycisk Usuń cechę.
      2. Wykonaj jedną z następujących czynności:
         * Wybierz cechę w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl") lub w oknie [Widoku 3D](/3D_view/pl "3D view/pl").
         * Zaznacz cechę na liście i naciśnij klawisz Del.
         * Kliknij prawym przyciskiem myszy cechę na liście i wybierz z menu podrzędnego opcję **Usuń**.
      3. Powtórz czynność, aby usunąć więcej cech.
    - Jeśli w szyku znajduje się kilka cech, ich kolejność może być ważna. Zobacz stronę [Projekt Części: Szyk kołowy](/PartDesign_PolarPattern/pl#Kolejność_cech "PartDesign PolarPattern/pl").
* Określenie **Kierunku** szyku:
  + **Normalna oś szkicu**: Oś Z szkicu *(dostępna tylko dla cech opartych na szkicu)*.
  + **Pionowa oś szkicu**: Oś Y szkicu *(analogicznie)*.
  + **Pozioma oś szkicu**: Oś X szkicu *(analogicznie)*.
  + **Linia konstrukcyjna #**: Osobny wpis dla każdej linii konstrukcyjnej w szkicu *(analogicznie)*.
  + **Podstawowa oś X**: Oś X Zawartości.
  + **Podstawowa oś Y**: Oś Y Zawartości.
  + **Podstawowa oś Z**: Oś Z Zawartości.
  + **Wybór odniesienia...**: Wybierz [Linię odniesienia](/PartDesign_Line/pl "PartDesign Line/pl") w oknie [Widok drzewa](/Tree_view/pl "Tree view/pl") lub [Linię odniesienia](/PartDesign_Line/pl "PartDesign Line/pl") lub krawędź w oknie [Widok 3D](/3D_view/pl "3D view/pl").
* Zaznacz pole wyboru **Odwróć kierunek**, aby odwrócić szyk.
* [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Określ kąt **Trybu**:
  + **Długość całkowita**: Wprowadź **Długość** od danego punktu przy pierwszym wystąpieniu do tego samego punktu przy ostatnim wystąpieniu.
  + [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): **Odsunięcie**: Wprowadź **Odsunięcie** od danego punktu na pierwszym wystąpieniu do tego samego punktu na następnym wystąpieniu. Dla n wystąpień: OverallLength=(n-1)\*Offset.
* Określ liczbę **Wystąpień** *(łącznie z cechą oryginalną)*.
* Jeśli zaznaczone jest pole wyboru **Aktualizuj widok**, widok będzie aktualizowany w czasie rzeczywistym.

## Ograniczenia

Zobacz stronę o ograniczeniach [Szyku kołowego](/PartDesign_PolarPattern/pl#Ograniczenia "PartDesign PolarPattern/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_LinearPattern/pl&oldid=1485341>"