---
title: CAM Helisa
---
:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|  |
| --- |
| CAM: Helisa |
| Lokalizacja w menu |
| CAM → Helisa |
| Środowisko pracy |
| [CAM](/CAM_Workbench/pl "CAM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/CAM_Helix.svg) CAM: Helisa dodaje operację spiralnego czyszczenia do zadania. Spiralny ruch zgodnie z ruchem wskazówek zegara generuje komendy G-code (G2), natomiast przeciwny ruch generuje komendy (G3). Procent naddatku określa koncentryczne nadkładanie jako procent średnicy narzędzia. Zostaną utworzone jedne lub więcej ścieżek spiralnych o różnych średnicach, aby oczyścić otwór.

## Użycie

* Wybierz ![](/images/Workbench_CAM.svg) [środowisko pracy CAM](/CAM_Workbench/pl "CAM Workbench/pl").
* Wybierz ikonę ![](/images/CAM_Helix.svg) lub CAM → ![](/images/CAM_Helix.svg) Helisa z górnego menu. Otworzy się panel konfiguracji ![](/images/CAM_Helix.svg) Helisy.
* Wykoczy okno "Wybierz kontroler narzędzia", aby wybrać kontroler narzędzia. W starszych wersjach, w zakładce ![](/images/CAM_Helix.svg) Operacja, wybierz kontroler narzędzia i potwierdź, klikając Zastosuj.
* Otwórz zakładkę Geometria podstawowa. Wszystkie dostępne otwory zgodne z narzędziem Helisa w modelu zadania będą możliwe do wybrania do obróbki. W [widoku 3D](/3D_view/pl "3D view/pl") wybierz otwory po ich krawędzi lub ścianie i dodaj je przyciskiem Dodaj. Upewnij się, że pojawiają się na liście. Sprawdź, czy lista zgadza się z otworami przeznaczonymi do obróbki.
* Aby usunąć otwory, wybierz je na liście i naciśnij przycisk Usuń.
* Upewnij się, że parametry Głębokość początkowa, Głębokość końcowa oraz Krok w dół (skok helisy) są poprawne i dostosuj je, jeśli to konieczne.
* Upewnij się, że parametry Wysokość bezpieczna i Odstęp bezpieczeństwa są poprawne.
* W zakładce Operacja określ powierzchnię początkową helisy (zewnętrzna/wewnętrzna), kierunek cięcia (wspinanie/konwencjonalny) oraz procent nadkładania.
* Kliknij Zastosuj, aby utworzyć lub zaktualizować ścieżkę, OK, aby zastosować i zamknąć panel, lub Anuluj, aby przerwać i zamknąć panel.

## Opcje

**Dodatkowe Odsunięcie** dodaje margines materiału do pozostawienia bez obróbki. Zwykle ma to na celu umożliwienie lekkiego przejścia wykańczającego jako odrębnej operacji.

**Promień początkowy** nie jest dostępny w panelu zadań *Helisa*, ale może być edytowany bezpośrednio w [Edytorze właściwości](/Property_editor/pl "Property editor/pl").

Jest to promień materiału pozostałego w środku. Domyślnie jest zerowy, dając ścieżkę gdzie narzędzie tylko dotyka osi otworu. To tworzy centralną ścieżkę wycinającą otwór dwukrotnie większy od średnicy narzędzia.

Jeśli ten parametr jest ustawiony na ujemną wartość, może pozwalać na mniejszy promień helisy. Przykładowo, ujemny promień równy promieniowi narzędzi utworzy helisę o zerowym promieniu - cięcie wgłębne frezem jeśli narzędzie jest odpowiednie. To zadziała jako pierwsze cięcie w operacji z wieloma przejściami, ale próba utworzenia ścieżki helisy narzędziem o tym samym rozmiarze co otwór w modelu jest odrzucana.

## Komentarze

* Krok w dół nie jest przestrzegany dokładnie. Zawsze podlega zaokrągleniu aby uzyskać pełną liczbę obrotów od Głębokości początkowej do końcowej.
* Podobnie Naddatek nie jest przestrzegany dokładnie. Zawsze podlega zaokrągleniu aby uzyskać liczbę równych kroków.

Parametr prędkości posuwu jest stały dla wszystkich cięć i opiera się na położeniu osi narzędzia, co oznacza, że rzeczywista prędkość skrawania krawędzi narzędzia może się znacznie różnić pomiędzy wewnętrznym cięciem a powierzchnią zewnętrzną. Jeśli wymiary zadania generują średnicę ścieżki mniejszą niż średnica narzędzia, może to prowadzić do znacznie większych prędkości skrawania niż prędkość posuwu podana dla narzędzia w kontrolerze narzędzi. Może to wymagać uwzględnienia podczas dobierania „prędkości i posuwów” w [kontrolerze narzędzia](/CAM_ToolController/pl "CAM ToolController/pl") dla danego zadania.

Ponadto, obecna implementacja używa tylko prędkości poziomej narzędzia dla ścieżek helisy, nawet w przypadku gdy ciasna spirala może być prawie pionowym cięciem.

## Właściwości

### Dane

Pusto

### Widok

Pusto

## Tworzenie skryptów

*Zobacz również:* [FreeCAD podstawy tworzenia skryptów](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Przykład:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Helix/pl&oldid=1559378>"