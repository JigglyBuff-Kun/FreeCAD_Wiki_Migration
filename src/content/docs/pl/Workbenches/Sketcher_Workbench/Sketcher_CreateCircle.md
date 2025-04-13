---
title: Szkicownik Utwórz okrąg
---

|                                                              |
| ------------------------------------------------------------ |
| Szkicownik: Utwórz okrąg                                     |
| Lokalizacja w menu                                           |
| Szkic → Elementy geometryczne szkicownika → Utwórz okrąg     |
| Środowisko pracy                                             |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót                                               |
| G C                                                          |
| Wprowadzono w wersji                                         |
| -                                                            |
| Zobacz także                                                 |
| [Utwórz Łuk](/Sketcher_CreateArc/pl "Sketcher CreateArc/pl") |
|                                                              |

## Opis

Narzędzie ![](/images/Sketcher_CreateCircle.svg) **Utwórz okrąg** tworzy okrąg przez jego środek i punkt wzdłuż okręgu. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Lub opcjonalnie przez trzy punkty wzdłuż okręgu.

![](/images/Sketcher_CircleExample1.png)

## Jak używać

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

Pos-OVP = Pozycyjne [Parametry w widoku](/Sketcher_Preferences#Ogólne/pl "Sketcher Preferences"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")  
Dim-OVP = Wymiarowe parametry w widoku. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

1. Istnieje kilka sposobów wywołania narzędzia:
   - Naciśnij przycisk ![](/images/Sketcher_CreateCircle.svg) **Utwórz okrąg**.
   - Wybierz z menu opcję **Szkic → Elementy geometryczne szkicownika → ![](/images/Sketcher_CreateCircle.svg) Utwórz okrąg** z menu.
   - Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **![](/images/Sketcher_CreateCircle.svg) Utwórz okrąg** z menu kontekstowego.
   - Użyj skrótu klawiaturowego: G, a następnie C.
2. Kursor zmieni się w krzyżyk z ikoną bieżącego trybu narzędzia.
3. Sekcja **Parametry okręgu** ([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")) jest dodawana na górze [okna dialogowego](/Sketcher_Dialog/pl "Sketcher Dialog/pl").
4. Opcjonalnie naciśnij klawisz M lub wybierz z rozwijanej listy w sekcji parametrów, aby zmienić tryb narzędzia:
   - ![](/images/Sketcher_CreateCircle.svg) **Środek**:
     1. Wybierz środek okręgu. Lub z Pos-OVP: wprowadź jego współrzędne X i/lub Y.
     2. Wybierz punkt, aby zdefiniować promień okręgu. Lub za pomocą Dim-OVP: wprowadź ten promień.
   - ![](/images/Sketcher_Create3PointCircle.svg) **trzy punkty na obwodzie**: [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl").
     1. Wybierz trzy punkty, aby zdefiniować okrąg. Lub za pomocą Pos-OVP: wprowadź ich współrzędne X i / lub Y. Dla tych punktów nie są tworzone żadne wiązania.
5. Okrąg jest tworzony i dodawane są odpowiednie wiązania oparte na Pos-OVP i Dim-OVP.
6. Jeśli narzędzie działa w [Trybie kontynuacji](/Sketcher_Workbench/pl#Tryb_kontynuacji "Sketcher Workbench/pl"):
   1. Opcjonalnie kontynuuj tworzenie okręgów.
   2. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateCircle/pl&oldid=1414302>"
