---
title: Poradnik Rysunek Techniczny, Koło Podziałowe
---

|                     |
| ------------------- |
| Ćwiczenie           |
| Temat               |
| Rysunek Techniczny  |
| Poziom trudności    |
| Początkujący        |
| Czas wykonania      |
| 10 minut            |
| Autorzy             |
| Andergrin           |
| Wersja FreeCAD      |
| 0.19                |
| Pliki z przykładami |
| _Nie dołączono_     |
| Zobacz również      |
| _-_                 |
|                     |

## Wprowadzenie

Ten poradnik wyjaśnia jak dodać okrąg podziałowy do widoku ![](/images/Workbench_TechDraw.svg) [Rysunku Technicznego](/TechDraw_Workbench/pl "TechDraw Workbench/pl"). Zakłada on, że model jest obiektem środowiska ![](/images/PartDesign_Body.svg) [Projekt Części](/PartDesign_Body/pl "PartDesign Body/pl") z co najmniej trzema otworami w układzie kołowym. Dla okręgu zostanie utworzony osobny szkic. Podobna procedura może być użyta w innych sytuacjach oraz do dodawania innych elementów podobnych do adnotacji na widoku [Rysunku Technicznego](/TechDraw_Workbench/pl "TechDraw Workbench/pl").

W programie FreeCAD w wersji 0.20 i wyższej można utworzyć okrąg podziałowy za pomocą narzędzia [Rozszerzenie: Osie otworów w okręgu](/TechDraw_ExtensionHoleCircle/pl "TechDraw ExtensionHoleCircle/pl").

![](/images/Circle.png)
![](/images/Pitch_Circle.png)

## Tworzenie szkicu okręgu

1. Aktywuj ![](/images/PartDesign_Body.svg) [Zawartość](/PartDesign_Body/pl "PartDesign Body/pl").
2. Spowoduje to uruchomienie środowiska pracy ![](/images/Workbench_PartDesign.svg) [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"), jeśli będzie wymagane.
3. W oknie [widoku 3D](/3D_view/pl "3D view/pl") wybierz odpowiednią ścianę należącą do zawartości.
4. Utwórz nowy szkic za pomocą polecenia ![](/images/PartDesign_NewSketch.svg) [Utwórz szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl").
5. Szkic zostanie dołączony do wybranej ściany.
6. Wywołaj polecenie ![](/images/Sketcher_External.svg) [Geometria zewnętrzna](/Sketcher_External/pl "Sketcher External/pl").
7. Wybierz trzy okrągłe krawędzie _(otwory)_ z zawartości.
8. Użyj polecenia ![](/images/Sketcher_Create3PointCircle.svg)[Utwórz okrąg](/Sketcher_Create3PointCircle/pl "Sketcher Create3PointCircle/pl"), aby utworzyć okrąg związany do punktów środkowych geometrii zewnętrznej.
9. Szkic powinien być teraz w pełni związany.
10. Zamknij szkic.

## Tworzenie widoku Rysunku Technicznego

1. Przełącz się na środowisko pracy ![](/images/Workbench_TechDraw.svg) [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl").
2. Jeśli jeszcze nie masz: stwórz ![](/images/TechDraw_PageDefault.svg) [stronę](/TechDraw_PageDefault/pl "TechDraw PageDefault/pl").
3. Upewnij się, że okno [widoku 3D](/3D_view "3D view") jest prawidłowo wyrównane.
4. Przytrzymaj klawisz Ctrl i w [widoku drzewa](/Tree_view/pl "Tree view/pl") wybierz bryłę i szkic, który właśnie został utworzony.
5. Wstaw nowy widok wywołując polecenie ![](/images/TechDraw_View.svg) [Widok](/TechDraw_View/pl "TechDraw View/pl").
6. Przełącz się na stronę [Rysunku Technicznego](/TechDraw_Workbench/pl "TechDraw Workbench/pl")
7. Wybierz okrąg.
8. Wywołaj polecenie ![](/images/TechDraw_DecorateLine.svg) [Zmień wygląd linii](/TechDraw_DecorateLine/pl "TechDraw DecorateLine/pl")
9. Zmień **Styl** i **Wage** okręgu.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Pitch_Circle_Tutorial/pl&oldid=1140212>"
