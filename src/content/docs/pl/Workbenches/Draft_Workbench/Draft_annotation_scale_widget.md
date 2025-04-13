---
title: Rysunek Roboczy Widżet skalowania adnotacji
---
## Opis

**Widżet skalowania adnotacji** może być użyty do określenia skali adnotacji wersji roboczej. Skala ta określa mnożnik WIDOK**Mnożnik skali** nowego obiektu [Adnotacja wieloliniowa](/Draft_Text/pl "Draft Text/pl"), [Wymiar](/Draft_Dimension/pl "Draft Dimension/pl") i [Etykieta](/Draft_Label/pl "Draft Label/pl"). Widżet jest dostępny tylko w środowiska ![](/images/Workbench_Draft.svg) [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"). Jest to [opcjonalny](##Ustawienia) element GUI, który znajduje się w [pasku statusu](/Status_bar/pl "Status bar/pl").

![](/images/Draft_annotation_scale_widget_button.png)

Widżet skali adnotacji środowiska Rysunek Roboczy.

## Użycie

1. Naciśnij przycisk x:x na [pasku statusu](/Status_bar/pl "Status bar/pl"). Przycisk wyświetla bieżącą skalę adnotacji.
2. Otworzy się menu skali.
3. Wykonaj jedną z następujących czynności:
   * Wybierz jedną ze standardowych skal.
   * Wybierz opcję **Użytkownika**:
     + W otwartym oknie dialogowym wprowadź skalę niestandardową, używając formatu `x:x` lub `x=x`.
     + Naciśnij Enter lub przycisk OK.

![](/images/Draft_annotation_scale_widget_menu.png)

Menu widżetu.

## Ustawienia

Zobacz także strony: [Edytor ustawień](/Preferences_Editor/pl "Preferences Editor/pl") oraz [Rysunek Roboczy: Ustawienia](/Draft_Preferences/pl "Draft Preferences/pl").

* Widżet skali adnotacji Rysunku Roboczego jest opcjonalny: **Edycja → Preferencje ... → Rysunek Roboczy → Interfejs → Pokaż widżet skali adnotacji środowiska Rysunek Roboczy**.
* Aby zmienić skalę adnotacji bez widżetu: **Przybory → Edycja parametrów ... → BaseApp → Preferencje → Mod → Draft → DraftAnnotationScale**. Skala jest definiowana przez pojedynczą liczbę. Dla skali `1:50` wpisz `0.02`.

## Uwagi

* Zobacz także: [Ustaw style](/Draft_SetStyle/pl "Draft SetStyle/pl") i [Zastosuj bieżący styl](/Draft_ApplyStyle/pl "Draft ApplyStyle/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_annotation_scale_widget/pl&oldid=1345828>"