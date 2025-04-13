---
title: Rysunek Techniczny Wstaw aktywny widok (widok 3D)
---
|  |
| --- |
| Rysunek Techniczny: Wstaw aktywny widok |
| Lokalizacja w menu |
| Rysunek Techniczny → Widoki innych środowisk → Wstaw aktywny widok (widok 3D) |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Wstaw obraz bitmapy](/TechDraw_Image/pl "TechDraw Image/pl") |
|  |

## Opis

Narzędzie **Wstaw aktywny widok** wstawia obraz w postaci bitmapy aktywnego widoku okna 3D, na stronie rysunku.

![](/images/TechDraw_ActiveView_example.png)

Podstawowy widok modelu przestrzennego.

## Użycie

1. Przejdź do właściwego okna [Widoku 3D](/3D_view/pl "3D view/pl").
2. Jeśli w dokumencie jest wiele stron z rysunkami: opcjonalnie wybierz odpowiednią stronę w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Istnieje kilka sposobów na wywołanie narzędzia:
   * Naciśnij przycisk![](/images/TechDraw_ActiveView.svg) Wstaw aktywny widok (widok 3D)
   * Wybierz opcję **Rysunek Techniczny → Widoki innych środowisk → ![](/images/TechDraw_ActiveView.svg) Wstaw widok aktywny (widok 3D)** z menu.
4. Jeśli w dokumencie jest wiele stron z rysunkami i nie została jeszcze wybrana żadna strona, zostanie otwarte okno dialogowe **Wybór strony**:
   1. Wybierz żądaną stronę.
   2. Naciśnij przycisk OK.
5. Zostanie otwarty panel zadań **Aktywny widok na stronę Rysunku Technicznego**. Aby uzyskać więcej informacji, zobacz [Opcje](#Opcje).
6. Naciśnij przycisk OK.

## Opcje

Można określić następujące parametry:

* **Przytnij**: Przytnij wygenerowaną bitmapę.
* **Szerokość**: Szerokość *(w mm)* do przycięcia wygenerowanego widoku.
* **Wysokość**: Wysokość *(w mm)* do przycięcia wygenerowanego widoku.
* **Bez tła**: Jeżeli opcja ta jest zaznaczona, to wygenerowana bitmapa będzie miała przezroczyste tło.
* **Jednolite tło**: Jeżeli opcja ta jest zaznaczona, to tworzony obiekt będzie miał tło w wybranym kolorze.
* **Użyj tła widoku 3D**: Jeżeli opcja ta jest zaznaczona, to wygenerowana bitmapa będzie wykorzystywać tło z okna widoku 3D.

## Uwagi

* Aktywny widok jest statyczny po wygenerowaniu, nigdy nie jest aktualizowany przy zmianach w modelu 3D.
* Aktywny widok z założenia jest [obrazem](/TechDraw_Image/pl "TechDraw Image/pl"). Dlatego jego DANE**Typ skali** jest zawsze inicjalizowany jako `Użytkownika`.
* W wersja 0.20 i poniżej funkcjonalność tą realizowało narzędzie [Symbol](/TechDraw_Symbol/pl "TechDraw Symbol/pl").

## Właściwości

Zobacz również stronę [Obraz](/TechDraw_Image/pl#W.C5.82a.C5.9Bciwo.C5.9Bci "TechDraw Image/pl") środowiska Rysunek Techniczny.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ActiveView/pl&oldid=1486471>"