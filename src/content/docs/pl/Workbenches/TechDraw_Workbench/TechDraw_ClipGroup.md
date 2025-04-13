---
title: Rysunek Techniczny Wstaw grupę wycinków
---
|  |
| --- |
| Rysunek Techniczny: Wstaw grupę wycinków |
| Lokalizacja w menu |
| Rysunek Techniczny → Rysunek Techniczny – Widoki → Wstaw grupę wycinków |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie **Wstaw grupę wycinków** tworzy okno wycinka, które może zawierać Widoki.

![](/images/TechDraw_Clipview.png)

Okno widoku rzutni obejmujące różne istniejące widoki

## Użycie

1. Jeśli w dokumencie znajduje się wiele stron rysunku: opcjonalnie aktywuj żądaną stronę, wybierając ją w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl").
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_ClipGroup.svg) **Wstaw grupę wycinków**, aby utworzyć nowy wycinek.
   * Wybierz opcję z menu **Rysunek Techniczny → Rysunek Techniczny – widoki → ![](/images/TechDraw_ClipGroup.svg) Wstaw grupę wycinków**.
3. Jeśli w dokumencie znajduje się wiele stron rysunku, a strona nie została jeszcze aktywowana, otworzy się okno dialogowe **Wybór strony**:
   1. Wybierz żądaną stronę.
   2. Naciśnij przycisk OK.
4. Widoki można przeciągać i upuszczać do i z grupy klipów w widoku drzewa. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Grupa wycinków, formalnie obiekt `TechDraw::DrawViewClip` ma [właściwości](/TechDraw_View/pl#Właściwości_-_Widok_części "TechDraw View/pl") wspólne dla wszystkich typów Widoków. Ma też następujące dodatkowe właściwości:

### Dane

Grupa wycinków

* DANE**Szerokość** (`Length`): Szerokość okna wycinka w jednostkach.
* DANE**Wysokość** (`Length`): Wysokość okna wycinka w jednostkach.
* DANE**WyświetlRamkę** (`Bool`): Gdy wartość jest ustawiona na `Prawda`, pokazuje ramkę wokół okna wycinka.
* DANE**Widoki** (`LinkList`): Widoki zawarte w oknie przycinania

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ClipGroup/pl&oldid=1490999>"