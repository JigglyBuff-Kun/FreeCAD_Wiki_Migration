---
title: Profil nawigacji myszką
---
## Informacje ogólne

**Nawigacja myszką** w programie FreeCAD jest bardzo elastyczna i intuicyjna, z kilkoma wskazówkami możesz go używać po minucie praktyki.
FreeCAD obsługuje wiele stylów nawigacji myszki. Domyślny styl nawigacji jest określany jako [Nawigacja CAD](#CAD) i jest bardzo intuicyjny i praktyczny, ale FreeCAD udostępnia również kilka alternatywnych stylów nawigacji do wyboru. Wybrany styl jest używany we wszystkich środowiskach pracy.

Więcej informacji na temat zaznaczania obiektów znajdziesz na stronie [Metody zaznaczania](/Selection_methods/pl "Selection methods/pl").

Więcej informacji na temat manipulowania obiektami znajdziesz na stronie [Przemieszczenie](/Std_TransformManip/pl "Std TransformManip/pl").

## Wybór stylu nawigacji

1. Wykonaj jedną z następujących czynności:
   * Naciśnij przycisk ![](/images/NavigationCAD_dark.svg) na pasku [Statusu](/Status_bar/pl "Status bar/pl")
   * Kliknij prawym przyciskiem myszy pusty obszar w oknie [widoku 3D](/3D_view/pl "3D view/pl"), a następnie wybierz **Style nawigacji** z menu kontekstowego.
   * Użyj [Edytor preferencji](/Preferences_Editor/pl#Nawigacja "Preferences Editor/pl"). W menu wybierz **Edycja → Preferencje**, a następnie **Wyświetlanie → Nawigacja → Styl nawigacji w przestrzeni 3D**.
2. Wybierz styl z listy.
3. Opcjonalnie zmień styl **Techniki orbitalnej**: naciśnij przycisk ![](/images/NavigationCAD_dark.svg) w pasku [Statusu](/Status_bar/pl "Status bar/pl"), a następnie wybierz **Ustawienia → Technika orbitalna**. Zobacz [Edytor preferencji](/Preferences_Editor/pl#Nawigacja "Preferences Editor/pl").
4. Opcjonalnie zmień **Tryb obracania**. Zobacz [Edytor preferencji](/Preferences_Editor/pl "Preferences Editor/pl").
5. Jeśli wybrano styl nawigacji **CAD**: opcjonalnie zmień ustawienie **Włącz animację**. Zobacz [Edytor preferencji](/Preferences_Editor/pl#Nawigacja "Preferences Editor/pl").

## Dostępne style nawigacji

W przypadku wszystkich stylów nawigacji, o ile obiekty nie są wybierane ze szkicu w trybie edycji, należy przytrzymać klawisz Ctrl, aby wybrać wiele obiektów.

Następujące opcje klawiatury są dostępne dla wszystkich trybów:

* Ctrl + ![](/images/Ascii_043.svg) i Ctrl + ![](/images/Ascii_022.svg) lub PgUp i PgDn aby odpowiednio przybliżać i oddalać.
* Klawisze strzałek, ![](/images/Ascii_017.svg)![](/images/Ascii_016.svg)![](/images/Ascii_030.svg)![](/images/Ascii_031.svg), aby przesuwać widok w lewo/prawo i góra/dół.
* Shift + ![](/images/Ascii_017.svg) i Shift + ![](/images/Ascii_016.svg) aby obracać widok o 90 stopni.

### Blender

Styl nawigacji Blendera był wzorowany na [Blender](https://www.blender.org).

| Wybierz | Przybliż - oddal | Obracanie widoku | Przesuń | |
| --- | --- | --- | --- | --- |
|  |  |  |  | |
|  |  |  | Shift+ |  |
| Naciśnij lewy przycisk myszy nad obiektem, który chcesz wybrać. | Użyj kółka myszy do przybliżania i oddalania. | Przytrzymaj środkowy przycisk myszy a następnie przesuń kursor. | Przytrzymaj Shift i środkowy przycisk myszy a następnie przesuń kursor. Można również przytrzymać lewy i prawy przycisk myszy, a następnie przesunąć kursor. | |

### CAD

Jest to domyślny styl nawigacji. Pozwala on użytkownikowi na prostą kontrolę widoku i nie wymaga użycia klawiszy klawiatury poza dokonywaniem wielokrotnego wyboru.

| Wybierz | Przybliż - oddal | Obróć widok Metoda pierwsza | Obróć widok Metoda druga | Przesuń |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
| Naciśnij lewy przycisk myszki nad obiektem, który chcesz wybrać. | Użyj kółka myszy do powiększania i pomniejszania. Kliknięcie środkowego przycisku myszy wyśrodkowuje widok na położeniu kursora. | Przytrzymaj środkowy przycisk myszy a następnie wciśnij i przytrzymaj lewy przycisk myszy, po czym przesuń kursor. Jeśli przyciski zostaną zwolnione przed zatrzymaniem ruchu myszy, obracanie widoku jest kontynuowane, jeśli opcja ta jest włączona. | Przytrzymaj środkowy przycisk myszy, a następnie naciśnij i przytrzymaj prawy przycisk myszy, po czym przesuń kursor. W tej metodzie środkowy przycisk myszy może zostać puszczony po naciśnięciu prawego przycisku myszy.  Użytkownicy, którzy używają myszki prawą ręką, mogą uznać tę metodę za łatwiejszą od metody pierwszej. | Przytrzymaj środkowy przycisk myszy a następnie przesuń kursor. |
|  | Ctrl+Shift+ | Shift+ |  | Ctrl+ |
|  | Tryb przybliżania/oddalania: przytrzymaj klawisze Ctrl i Shift, wciśnij prawy przycisk myszy raz a następnie przesuń kursor. | Tryb obracania: Przytrzymaj klawisz Shift, naciśnij raz prawy przycisk myszy, a następnie przesuń kursor. |  | Tryb przesuwania: przytrzymaj klawisz Ctrl, wciśnij prawy przycisk myszy raz a następnie przesuń kursor. |

### Gesture

Ten styl został opracowany z myślą o obsłudze za pomocą ekranu dotykowego i pióra. Można go jednak używać także z myszą i jest zalecany do stosowania na komputerach Mac z gładzikiem.

| Wybierz | Przybliż - oddal | Obróć widok | Przesuń | | Widok pochylenia |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  | |  |
|  |  |  |  | |  |
| Naciśnij lewy przycisk myszy nad obiektem, który chcesz wybrać. | Użyj kółka myszy do przybliżania i oddalania. | Przytrzymaj lewy przycisk myszy a następnie przesuń kursor. W [Szkicowniku](/Sketcher_Workbench/pl "Sketcher Workbench/pl") i innych trybach edycji to zachowanie jest wyłączone. Przytrzymaj Alt podczas wciskania przycisku myszy aby wejść w tryb obrotu.  Aby ustawić punkt skupienia kamery do obrotu, kliknij punkt środkowym przyciskiem myszy. Opcjonalnie można wycelować kursor w punkt i nacisnąć klawisz H na klawiaturze. | Przytrzymaj prawy przycisk myszy a następnie przesuń kursor. | | Przytrzymaj lewy i prawy przycisk myszy a następnie przesuń kursor w bok. |
|  |  |  |  |  |  |
| Stuknij aby wybrać. | Przesuń dwoma palcami bliżej lub dalej od siebie. | Przesuń jednym palcem aby obrócić. Przytrzymaj klawisz Alt gdy pracujesz w [Szkicowniku](/Sketcher_Workbench/pl "Sketcher Workbench/pl"). | Przesuń dwoma palcami. Alternatywnie, dotknij i przytrzymaj, a następnie przeciągnij. W ten sposób symuluje się ruch obrotowy prawym przyciskiem myszy. | | Obróć wyobrażalną linię, którą tworzą dwa punkty dotknięcia. Metoda ta jest domyślnie wyłączona. Aby ją uaktywnić, przejdź do **Edycja → Preferencje ... → Wyświetlanie → Nawigacja** i odznacz pole wyboru "Wyłącz gest obrotu na ekranie dotykowym". |

### Maya-Gesture

W trybie nawigacji Maya-Gesture, przesuwanie, powiększanie i obracanie widoku wymaga użycia klawisza Alt i przycisku myszy, dlatego wymagana jest mysz z trzema przyciskami. Możliwe jest także używanie gestów, ponieważ ten tryb został rozwinięty w stosunku do trybu [Gesture](#Gesture).

| Wybór | Przybliż - oddal | | Obróć widok | Przesuń | Widok pochylenia |
| --- | --- | --- | --- | --- | --- |
|  |  | |  |  |  |
|  |  | Alt+ | Alt+ | Alt+ | Alt+ |
| Naciśnij lewy przycisk myszy nad obiektem, który chcesz wybrać. | Użyj kółka myszy do przybliżania i oddalania. Można również przytrzymać Alt i prawy przycisk myszy, a następnie przesunąć kursor. | | Przytrzymaj Alt i lewy przycisk myszy a następnie przesuń kursor. | Przytrzymaj Alt i środkowy przycisk myszy a następnie przesuń kursor. | Przytrzymaj Alt oraz lewy i prawy przycisk myszy a następnie przesuń kursor w bok. |

### OpenCascade

Styl nawigacji OpenCascade był wzorowany na [OpenCascade](https://www.opencascade.com/).

| Wybierz | Przybliż - oddal | | Obróć widok | | Przesuń | |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | |  | |  | |
|  |  | Ctrl+ |  | Ctrl+ |  | Ctrl+ |
| Naciśnij lewy przycisk myszy nad obiektem, który chcesz wybrać. | Użyj kółka myszy do przybliżania i oddalania. Można również przytrzymać Ctrl i lewy przycisk myszy, a następnie przesunąć kursor. | | Przytrzymaj środkowy przycisk myszy a następnie wciśnij i przytrzymaj prawy przycisk myszy, po czym przesuń kursor. Można również przytrzymać Ctrl i prawy przycisk myszy, a następnie przesunąć kursor. | | Przytrzymaj środkowy przycisk myszy a następnie przesuń kursor. Można przytrzymać Ctrl. | |

### OpenInventor

Nawigacja OpenInventor *(dawniej Inventor)* została wymodelowana na podstawie [Open Inventor](http://en.wikipedia.org/wiki/Open_Inventor). Aby móc wybrać obiekty kursorem myszki, należy dodatkowo przytrzymać klawisz Shift lub Ctrl.

Ten styl nie jest oparty na nawigacji Autodesk Inventor.

| Wybierz | Przybliż - oddal | | Obróć widok | Przesuń |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
| Shift+ |  |  |  |  |
| Przytrzymaj Shift, a następnie naciśnij lewy przycisk myszy nad obiektem, który chcesz wybrać. Przytrzymaj klawisz Ctrl, aby wybrać wiele obiektów. | Użyj kółka myszy do przybliżania i oddalania. Alternatywnie można przytrzymać środkowy przycisk myszy, a następnie nacisnąć i przytrzymać lewy przycisk myszy, po czym przesunąć kursor. | | Przytrzymaj lewy przycisk myszy, a następnie przesuń kursor. | Przytrzymaj środkowy przycisk myszy a następnie przesuń kursor. |

### OpenSCAD

Styl nawigacji w programie OpenSCAD był wzorowany na [OpenSCAD](https://openscad.org/).

| Wybierz | Przybliż - oddal | | | Obróć widok | | Przesuń |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | | |  | |  |
|  |  |  | Shift+ |  |  |  |
| Naciśnij lewy przycisk myszy nad obiektem, który chcesz zaznaczyć. wersja 0.21 i poniżej Przytrzymaj Ctrl i Shift podczas naciskania przycisku myszki, aby przeciągnąć obiekt na szkicu w trybie edycji. | Użyj kółka myszy do przybliżania i oddalania. Można również przytrzymać środkowy przycisk myszy, a następnie przesunąć kursor.  Lub przytrzymaj Shift i prawy przycisk myszy a następnie przesuń kursor. | | | Przytrzymaj lewy przycisk myszy, a następnie przesuń kursor. Alternatywnie, gdy szkic jest w trybie edycji, przytrzymaj środkowy przycisk myszy, a następnie naciśnij i przytrzymaj prawy przycisk myszy, po czym przesuń kursor. | | Przytrzymaj prawy przycisk myszy a następnie przesuń kursor. |

### Revit

Styl nawigacji Revit był wzorowany na stylu [Revit Autodesk](https://en.wikipedia.org/wiki/Autodesk_Revit).

| Wybierz | Przybliż - oddal | Obróć widok | | Przesuń | |
| --- | --- | --- | --- | --- | --- |
|  |  |  | |  | |
|  |  | Shift+ |  |  |  |
| Naciśnij lewy przycisk myszy nad obiektem, który chcesz wybrać. | Użyj kółka myszy do przybliżania i oddalania. | Przytrzymaj Shift i środkowy przycisk myszy a następnie przesuń kursor. Ewentualnie przytrzymaj środkowy przycisk myszy, a następnie naciśnij i przytrzymaj prawy przycisk myszy, po czym przesuń kursor. | | Przytrzymaj środkowy przycisk myszy a następnie przesuń kursor. Można również przytrzymać lewy i prawy przycisk myszy, a następnie przesunąć kursor. | |

### SolidWorks

[dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")

Styl nawigacji SolidWorks był wzorowany na stylu [SolidWorks](https://en.wikipedia.org/wiki/SolidWorks).

| Wybierz | Przybliż - oddal | | Obracanie widoku | Przesuń |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
|  |  | Shift+ |  | Ctrl+ |
| Naciśnij lewy przycisk myszy nad obiektem, który chcesz wybrać. | Użyj kółka myszy do przybliżania i oddalania. Można również przytrzymać Shift i środkowy przycisk myszy, a następnie przesunąć kursor.  Kliknięcie środkowego przycisku myszy wyśrodkowuje widok na położeniu kursora. | | Przytrzymaj środkowy przycisk myszy a następnie przesuń kursor. | Przytrzymaj Ctrl i środkowy przycisk myszy a następnie przesuń kursor. |

### TinkerCAD

Styl nawigacji TinkerCAD był wzorowany na stylu [TinkerCAD](https://en.wikipedia.org/wiki/Tinkercad).

| Wybierz | Przybliż - oddal | Obróć widok | Przesuń |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |
| Naciśnij lewy przycisk myszy nad obiektem, który chcesz wybrać. | Użyj kółka myszy do przybliżania i oddalania. | Przytrzymaj prawy przycisk myszy, a następnie przesuń kursor. | Przytrzymaj środkowy przycisk myszy a następnie przesuń kursor. |

### Touchpad

W przypadku nawigacji za pomocą panelu dotykowego przesuwanie, powiększanie i obracanie widoku wymaga użycia klawisza modyfikatora przy jednoczesnej obsłudze panelu dotykowego. This style can also be used with a mouse.

| Wybierz | Przybliż - oddal | Obróć widok | | Przesuń |
| --- | --- | --- | --- | --- |
|  |  |  | |  |
|  | Ctrl+Shift+ | Alt+ | Shift+ | Shift+ |
| Naciśnij lewy przycisk myszy nad obiektem, który chcesz wybrać. | Przytrzymaj Ctrl i Shift a następnie przesuń kursor. | Przytrzymaj Alt a następnie przesuń kursor. Można również przytrzymać Shift i lewy przycisk myszy, a następnie przesunąć kursor. | | Przytrzymaj Shift a następnie przesuń kursor. |

## Wspierany sprzęt

FreeCAD obsługuje również niektóre [urządzenia wejściowe 3D](/3D_input_devices/pl "3D input devices/pl").

## Polecana nawigacja dla macOS

W komputerach MacBook z gładzikiem nawigacja za pomocą gestów działa bardzo dobrze, ale gesty mają specjalne znaczenie:

* Powiększenie: przeciągnij dwoma palcami,
* Obrót: przeciągnij trzema palcami,
* Przesuwanie: Ctrl + trzy palce.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mouse_navigation/pl&oldid=1552196>"