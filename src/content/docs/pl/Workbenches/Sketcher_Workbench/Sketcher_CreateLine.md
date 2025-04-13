---
title: Sketcher Utwórz linię
---

|                                                                              |
| ---------------------------------------------------------------------------- |
| Szkicownik: Utwórz linię                                                     |
| Lokalizacja w menu                                                           |
| Szkic → Elementy geometryczne szkicownika → Utwórz linię                     |
| Środowisko pracy                                                             |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl")                 |
| Domyślny skrót                                                               |
| G L                                                                          |
| Wprowadzono w wersji                                                         |
| -                                                                            |
| Zobacz także                                                                 |
| [Utwórz polilinię](/Sketcher_CreatePolyline/pl "Sketcher CreatePolyline/pl") |
|                                                                              |

## Opis

Narzędzie ![](/images/Sketcher_CreateLine.svg) **Utwórz linię** tworzy linię. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Jeśli [parametry wyświetlane w widoku](/Sketcher_Preferences/pl#Ogólne "Sketcher Preferences/pl") są włączone, narzędzie ma trzy tryby.

![](/images/Sketcher_LineExample1.png)

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

Pos-OVP = Pozycyjne [Parametry w widoku](/Sketcher_Preferences#Ogólne/pl "Sketcher Preferences"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")  
Dim-OVP = Wymiarowe parametry w widoku. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

1. Istnieje kilka sposobów wywołania narzędzia:
   - Naciśnij przycisk ![](/images/Sketcher_CreateLine.svg) **Utwórz linię**.
   - Wybierz z menu opcję **Szkic → Elementy geometryczne szkicownika → ![](/images/Sketcher_CreateLine.svg) Utwórz linię**.
   - Użyj skrótu klawiaturowego: G, a następnie L.
2. Kursor zmieni się w krzyżyk z ikoną bieżącego trybu narzędzia.
3. Jeśli [parametry wyświetlane w widoku](/Sketcher_Preferences/pl#Ogólne "Sketcher Preferences/pl") są włączone, sekcja **Parametry linii** ([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")) jest dodawana na górze [okna dialogowego](/Sketcher_Dialog/pl "Sketcher Dialog/pl").
4. Opcjonalnie naciśnij klawisz M lub wybierz z rozwijanej listy w sekcji parametrów, aby zmienić tryb narzędzia:
   - ![](/images/Sketcher_CreateLineAngleLength.svg) **Punkt, długość, kąt**: [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl").
     1. Wybierz punkt początkowy linii. Lub z Pos-OVP: wprowadź jego współrzędne X i / lub Y.
     2. Wybierz punkt końcowy linii. Lub z Dim-OVP: wprowadź długość i / lub kąt linii. Kąt odnosi się do osi X szkicu.
   - ![](/images/Sketcher_CreateLineLengthWidth.svg) **Punkt, szerokość, wysokość**: [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl").
     1. Wybierz punkt początkowy linii. Lub za pomocą Pos-OVP: wprowadź jego współrzędne X i / lub Y.
     2. Wybierz punkt końcowy linii. Lub za pomocą Dim-OVP: wprowadź jego odległość X i / lub Y od punktu początkowego.
   - ![](/images/Sketcher_CreateLine.svg) **Dwa punkty**:
     1. Wybierz punkt początkowy linii. Lub za pomocą Pos-OVP: wprowadź jego współrzędne X i / lub Y.
     2. Wybierz punkt końcowy linii. Lub za pomocą Pos-OVP: wprowadź jego współrzędną X i / lub Y.
5. Linia jest tworzona i dodawane są odpowiednie ograniczenia oparte na Pos-OVP i Dim-OVP.
6. Jeśli narzędzie działa w [trybie kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl"):
   1. Opcjonalnie kontynuuj tworzenie linii.
   2. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateLine/pl&oldid=1404723>"
