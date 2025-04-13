---
title: Szkicownik Utwórz zaokrąglenie
---

|                                                              |
| ------------------------------------------------------------ |
| Szkicownik: Utwórz zaokrąglenie                              |
| Lokalizacja w menu                                           |
| Szkic → Narzędzia szkicownika → Utwórz zaokrąglenie          |
| Środowisko pracy                                             |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót                                               |
| G F F                                                        |
| Wprowadzono w wersji                                         |
| -                                                            |
| Zobacz także                                                 |
| _brak_                                                       |
|                                                              |

## Opis

Narzędzie **Zaokrąglenie** tworzy zaokrąglenie między dwiema nierównoległymi krawędziami. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Narzędzie może również tworzyć fazę.

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Jeśli dwie proste krawędzie połączone [wiązaniem zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl") są zaokrąglone lub sfazowane, punkt narożny może opcjonalnie zostać zachowany poprzez dodanie [obiektu punktu](/Sketcher_CreatePoint/pl "Sketcher CreatePoint/pl"), który ma [wiązanie punkt na obiekcie](/Sketcher_ConstrainPointOnObject/pl "Sketcher ConstrainPointOnObject/pl") z obiema krawędziami. Wiązania związane z punktem narożnym są następnie przenoszone do nowego obiektu punktu.

![](/images/SketcherCreateFilletExample.png)

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

1. Istnieje kilka sposobów na uruchomienie narzędzia:
   - Naciśnij przycisk ![](/images/Sketcher_CreateFillet.svg) **Utwórz zaokrąglenie**.
   - Wybierz z menu opcję **Szkic → Narzędzia szkicownika → ![](/images/Sketcher_CreateFillet.svg) Utwórz zaokrąglenie**.
   - Kliknij prawym przyciskiem myszy w widoku 3D i z menu kontekstowego wybierz opcję **![](/images/Sketcher_CreateFillet.svg) Utwórz zaokrąglenie**.
   - Użyj skrótu klawiaturowego: G, F, a następnie F.
2. Jeśli istnieje poprzednie zaznaczenie, zostanie wyczyszczone. Narzędzie nie akceptuje wstępnego zaznaczenia.
3. Kursor zmienia się w krzyżyk z ikoną bieżącego trybu narzędzia.
4. Sekcja **Parametry zaokrąglenia / sfazowania** ([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")) zostaje dodana na górze [Okna dialogowego szkicu](/Sketcher_Dialog/pl "Sketcher Dialog/pl").
5. Opcjonalnie naciśnij klawisz U lub odznacz pole wyboru **Zachowaj narożnik**, aby wyłączyć tę opcję. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
6. Opcjonalnie naciśnij klawisz M lub wybierz z listy rozwijanej w sekcji parametrów, aby zmienić tryb narzędzia:
   - ![](/images/Sketcher_CreateFillet.svg) **Zaokrąglenie**
   - ![](/images/Sketcher_CreateChamfer.svg) **Sfazowanie**
7. Wykonaj jedną z następujących czynności:
   - Wybierz punkt z wiązaniem [zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl"), łączący dwa nie równoległe proste krawędzie.
   - Wybierz dwie nie równoległe krawędzie. Każda krawędź może być prostą [linią](/Sketcher_CreateLine/pl "Sketcher CreateLine/pl"), [łukiem](/Sketcher_CreateArc/pl "Sketcher CreateArc/pl"), [łukiem eliptycznym](/Sketcher_CreateArcOfEllipse/pl "Sketcher CreateArcOfEllipse/pl"), [łukiem hiperbolicznym](/Sketcher_CreateArcOfHyperbola/pl "Sketcher CreateArcOfHyperbola/pl") lub [łukiem parabolicznym](/Sketcher_CreateArcOfParabola/pl "Sketcher CreateArcOfParabola/pl"). [krzywe złożone](/Sketcher_Workbench#Sketcher_CompCreateBSpline "Sketcher Workbench") obecnie nie są obsługiwane.
8. Zaokrąglenie lub fazka zostanie utworzona, w tym Ścięcie lub rozwarcie obiekt punktu w przypadku zachowanego narożnika. Dla zaokrąglenia utworzony zostanie również konstrukcyjny łuk geometryczny.
9. Narzędzie to zawsze działa w trybie ciągłym: opcjonalnie kontynuuj wybieranie punktów i / lub krawędzi.
10. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

## Uwagi

- Łuk geometrii konstrukcyjnej fazy nie jest widoczny poza szkicem. Nie można go usunąć bez naruszenia geometrii fazy.
- Niektóre krzywe _([stożek](/Sketcher_Workbench/pl#Sketcher_CompCreateConic "Sketcher Workbench/pl"))_ mogą wymagać [przycięcia](/Sketcher_Trimming/pl "Sketcher Trimming/pl") przed ich zaokrągleniem.
- Promień zaokrąglenia zależy od metody wyboru. Jeśli wybrano [wiązanie zbieżności](/Sketcher_ConstrainCoincident/pl "Sketcher ConstrainCoincident/pl") łączące dwie proste krawędzie, promień zaokrąglenia jest wyprowadzany z długości najkrótszej krawędzi. Jeśli wybrane są dwie krawędzie, promień jest odległością od pierwszego klikniętego punktu do przecięcia krawędzi _(na przedłużeniu)_.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateFillet/pl&oldid=1414362>"
