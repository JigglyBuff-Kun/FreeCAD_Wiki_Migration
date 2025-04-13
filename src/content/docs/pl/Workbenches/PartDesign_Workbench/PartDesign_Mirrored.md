---
title: Projekt Części Odbicie lustrzane
---

|                                                                                           |
| ----------------------------------------------------------------------------------------- |
| Projekt Części: Odbicie lustrzane                                                         |
| Lokalizacja w menu                                                                        |
| Projekt Części → Zastosuj przekształcenie → Odbicie lustrzane                             |
| Środowisko pracy                                                                          |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl")                      |
| Domyślny skrót                                                                            |
| _brak_                                                                                    |
| Wprowadzono w wersji                                                                      |
| -                                                                                         |
| Zobacz także                                                                              |
| [Transformacja wielokrotna](/PartDesign_MultiTransform/pl "PartDesign MultiTransform/pl") |
|                                                                                           |

## Opis

- ![](/images/PartDesign_Mirrored.svg) Narzędzie **Odbicie lustrzane** odzwierciedla jedną lub więcej cech.

![](/images/PartDesign_Mirrored_example.svg)

Element Kieszeń utworzony ze szkicu zawierającego okrąg _(A)_ jest używany do utworzenia elementu odbicia lustrzanego. Pionowa oś szkicu _(B)_ jest używana do zdefiniowania płaszczyzny lustrzanej. Wynik _(C)_ pokazany jest po prawej stronie.

## Użycie

### Tworzenie

1. Opcjonalnie [wybierz](/PartDesign_Body/pl#Aktywny_status "PartDesign Body/pl") odpowiednią Zawartość.
2. Opcjonalnie wybierz jedną lub więcej cech.
3. Istnieje kilka sposobów wywołania narzędzia:
   - Naciśnij przycisk ![](/images/PartDesign_Mirrored.svg) **Odbicie lustrzane**.
   - Wybierz opcję z menu **Projekt Części → Zastosuj przekształcenie → ![](/images/PartDesign_Mirrored.svg) Odbicie lustrzane**.
4. Jeśli nie wybrano aktywnej Zawartości, a w dokumencie istnieją dwie lub więcej Zawartości, otworzy się okno dialogowe **Wymagana jest aktywna zawartość** z monitem o wybranie jednej z nich. Jeśli istnieje jedna struktura, zostanie ona aktywowana automatycznie.
5. Jeśli nie wybrano żadnych cech, zostanie otworzony [panel zadań](/Task_panel/pl "Task panel/pl") **Wybierz cechę** : należy wybrać jedną lub więcej cech _(przytrzymując klawisz Ctrl)_ z listy i nacisnąć przycisk OK.
6. Otworzy się [Panel zadań](/Task_panel/pl "Task panel/pl") **Parametry odbicia lustrzanego**. Więcej informacji można znaleźć w sekcji [Opcje](#Opcje).
7. Naciśnij przycisk OK, aby zakończyć.

### Edycja

1. Wykonaj jedną z poniższych czynności:
   - Kliknij dwukrotnie obiekt Odbicie lustrzane w oknie [Widok drzewa](/Tree_view/pl "Tree view/pl").
   - Kliknij obiekt Odbicie lustrzane prawym przyciskiem myszy w oknie [Widok drzewa](/Tree_view/pl "Tree view/pl") i wybierz **Edycja funkcji odbicia lustrzanego** z menu podręcznego.
2. Otworzy się panel [Panel zadań](/Task_panel/pl "Task panel/pl") **Parametry odbicia lustrzanego**. Więcej informacji można znaleźć w punkcie [Opcje](#Opcje).
3. Naciśnij przycisk OK, aby zakończyć.

## Opcje

- Wybierz tryb:
  - **Przekształć Zawartość**: Przekształca cały kształt cechy bazowej (domyślne). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
  - **Narzędzie przekształcania kształtów**: Przekształca pojedyncze kształty narzędzi wybranych cech.
    - Aby dodać cechy:
      1. Naciśnij przycisk Dodaj element.
      2. Wybierz element w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl") lub [Widok 3D](/3D_view/pl "3D view/pl").
      3. Powtórz czynność, aby dodać więcej cech.
    - Aby usunąć funkcje:
      1. Naciśnij przycisk Usuń element.
      2. Wykonaj jedną z następujących czynności:
         - Wybierz element w [Widoku drzewa](/Tree_view/pl "Tree view/pl") lub [Widoku 3D](/3D_view/pl "3D view/pl").
         - Zaznacz element na liście i naciśnij klawisz Del.
         - Kliknij prawym przyciskiem myszki element na liście i wybierz **Usuń** z menu podręcznego.
      3. Powtórz czynność, aby usunąć więcej elementów.
    - Jeśli w szyku znajduje się kilka elementów, ich kolejność może być istotna. Zobacz stronę [Szyk kołowy](/PartDesign_PolarPattern/pl#Kolejność_cech "PartDesign PolarPattern/pl").
- Określ **płaszczyznę**:
  - **Pionowa oś szkicu**: Oś Y szkicu _(płaszczyzna przechodzi przez to odniesienie i oś Z szkicu, dostępne tylko dla elementów opartych na szkicu)_.
  - **Pozioma oś szkicu**: Oś X szkicu (analogicznie).
  - **Linia konstrukcyjna #**: Oddzielny wpis dla każdej linii konstrukcyjnej na szkicu (idem).
  - **Bazowa płaszczyzna XY**: Płaszczyzna XY Zawartości.
  - **Bazowa płaszczyzna YZ**: Płaszczyzna YZ Zawartości.
  - **Bazowa płaszczyzna XZ**: Płaszczyzna XZ Zawartości.
  - **Wybierz odniesienie ...**: Wybór płaskiej ściany w oknie [Widoku 3D](/3D_view "3D view").
- Jeśli pole wyboru **Aktualizuj widok** jest zaznaczone, widok będzie aktualizowany w czasie rzeczywistym.

## Ograniczenia

Zobacz stronę o ograniczeniach [Szyku kołowego](/PartDesign_PolarPattern/pl#Ograniczenia "PartDesign PolarPattern/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Mirrored/pl&oldid=1485327>"
