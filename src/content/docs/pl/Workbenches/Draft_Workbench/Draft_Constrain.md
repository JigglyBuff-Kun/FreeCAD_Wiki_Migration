---
title: Rysunek Roboczy Ograniczanie
---
## Opis

Oprócz wprowadzania współrzędnych lub używania [przyciągania](/Draft_Snap/pl "Draft Snap/pl"), istnieje funkcja zwana ograniczaniem, która pomaga w dokładnym rysowaniu w środowiskach pracy ![](/images/Workbench_Draft.svg) [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") i ![](/images/Workbench_Arch.svg) [BIM](/BIM_Workbench/pl "BIM Workbench/pl"). Dla każdego kolejnego punktu możesz ograniczyć ruch kursora do kierunku X, Y, lub Z układu współrzędnych [płaszczyzny roboczej](/Draft_SelectPlane/pl "Draft SelectPlane/pl"). Można to wykorzystać na przykład do stworzenia idealnie pionowej linii.

Wiązania są dostępne z większością poleceń środowisk [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") i [BIM](/BIM_Workbench/pl "BIM Workbench/pl").

![](/images/Draft_Constrain_taskpanel_example.png)

Gdy kursor jest ograniczony, panel zadań blokuje wartości, które nie są modyfikowane.

## Używanie wiązań poziomych i pionowych

1. Wybierz środowisko pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") lub [BIM](/BIM_Workbench/pl "BIM Workbench/pl") do utworzenia geometrii.
2. Wybierz pierwszy punkt. Wymagany jest poprzedni punkt.
3. Wykonaj jedną z następujących czynności:
   * Dla ograniczenia poziomego: przesuń kursor w lewo lub w prawo od poprzedniego punktu.
   * W przypadku ograniczenia pionowego: przesuń kursor powyżej lub poniżej poprzedniego punktu.
4. Przytrzymaj wciśnięty klawisz Shift.
5. Kursor jest teraz związany.
6. Wybierz następny punkt.
7. Jeśli polecenie jest nadal aktywne: opcjonalnie zwolnij klawisz Shift, aby wyłączyć blokadę.
8. Zawsze zwalniaj klawisz Shift po zakończeniu wykonywania polecenia.

## Używanie wiązania X, Y, Z

1. Wybierz środowisko pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") lub [BIM](/BIM_Workbench/pl "BIM Workbench/pl") do utworzenia geometrii.
2. Wybierz pierwszy punkt. Wymagany jest poprzedni punkt.
3. Wciśnij klawisz X, Y lub Z by określić kierunek.
4. Kursor jest teraz ograniczony.
5. Wybierz następny punkt.
6. Jeśli polecenie jest nadal aktywne, opcjonalnie wykonaj jedną z poniższych czynności:
   * Naciśnij ten sam klawisz, aby wyłączyć ograniczenie.
   * Naciśnij jeden z dwóch pozostałych klawiszy, aby zmienić kierunek wiązania.
7. Wiązania X, Y i Z są automatycznie wyłączane po zakończeniu polecenia.

## Uwagi

* Ograniczanie może być połączone z [przyciąganiem](/Draft_Snap/pl "Draft Snap/pl").
* Polecenia [Odsunięcie](/Draft_Offset/pl "Draft Offset/pl") i [Przytnij](/Draft_Trimex/pl "Draft Trimex/pl") środowiska pracy Rysunek Roboczy, używają innego typu wiązania, mianowicie ograniczenia operacji do pewnego segmentu.

## Ustawienia

Zobacz także strony: [Edytor ustawień](/Preferences_Editor/pl "Preferences Editor/pl") oraz [Rysunek Roboczy: Ustawienia](/Draft_Preferences/pl "Draft Preferences/pl").

* Domyślny klawisz **modyfikujący**, Shift, można zmienić w menu: **Edycja → Preferencje → Rysunek Roboczy → Siatka i przyciąganie → Przyciąganie → Modyfikator ograniczania**.
* Skróty klawiszowe **X**, **Y** i **Z** można zmienić: **Edycja → Preferencje → Rysunek Roboczy → Ustawienia interfejsu użytkownika → Skróty poleceń**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Constrain/pl&oldid=1468918>"