---
title: Rysunek Techniczny Wstaw nową domyślną stronę rysunku
---
|  |
| --- |
| TechDraw PageDefault |
| Menu location |
| Rysunek Techniczny → Strona → Wstaw nową domyślną stronę rysunku |
| Workbenches |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Wstaw nową stronę przy użyciu szablonu](/TechDraw_PageTemplate/pl "TechDraw PageTemplate/pl"), [Szablony](/TechDraw_Templates/pl "TechDraw Templates/pl") |
|  |

## Opis

Narzędzie **Wstaw nową domyślna stronę rysunku** tworzy nowy obiekt Strony używając pliku szablonu określonego w [Ustawieniach](/TechDraw_Preferences/pl "TechDraw Preferences/pl") dla środowiska pracy Rysunek Techniczny.

![](/images/A4_LandscapeTD.svg)

Domyślny szablon dołączony do środowiska pracy Rysunek Techniczny: Strona A4 w orientacji poziomej, A4\_LandscapeTD.svg

## Użycie

1. Wymagany jest aktywny dokument.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/TechDraw_PageDefault.svg) Wstaw nową domyślna stronę rysunku.
   * Wybierz opcję z menu **Rysunek Techniczny → Strona → ![](/images/TechDraw_PageDefault.svg) Wstaw nową domyślna stronę rysunku**.

## Uwagi

* Jeśli strona jest oznaczona jako "nie aktualizuj na bieżąco" za pomocą właściwości DANE**Aktualizuj na bieżąco**, opcji **Włącz / wyłącz automatyczną aktualizację** z menu kontekstowego okna lub ustawienia w Preferencjach, będzie ona ignorować zmiany w modelu 3D. Możesz zauważyć anomalie (brakująca geometria, brakujące wartości wymiarów itp.) w wyglądzie strony. Zostaną one skorygowane, gdy strona zostanie zaktualizowana za pomocą narzędzia [Przerysuj stronę](/TechDraw_RedrawPage/pl "TechDraw RedrawPage/pl"). Strona będzie miała tę ikonę ![](/images/TechDraw_Tree_Page_Unsync.svg) w [Widoku drzewa](/Tree_view/pl "Tree view/pl") podczas wstrzymania aktualizacji. To ustawienie wpływa również na proces uruchamiania. Jeśli strona jest oznaczona jako "nie aktualizuj", nie zostanie ona rysowana podczas uruchamiania programu.

* Jeśli domyślny szablon nie został określony w pliku konfiguracyjnym użytkownika `user.cfg`, narzędzie spróbuje:

:   ```
    $INSTALL_DIR/Mod/TechDraw/Templates/A4_LandscapeTD.svg

    ```

" Gdzie `$INSTALL_DIR` to katalog, w którym zainstalowano FreeCAD, na przykład:

:   ```
    /usr/share/freecad/Mod/TechDraw/Templates/A4_LandscapeTD.svg

    ```

## Właściwości

### Dane

Podstawa

* DANE**Typ projekcji**: Domyślny typ projekcji *(kąt pierwszy lub trzeci)* dla tej strony.

Strona

* DANE**Utrzymuj aktualizację**: Jeśli opcja przyjmuje wartość `Fałsz`, Strona nie jest aktualizowana o zmiany w modelu 3D. Przydatne dla skomplikowanych/wolnych rysunków. Zobacz uwagi.
* DANE**Szablon**: Link do obiektu [szablonu](/TechDraw_Templates/pl "TechDraw Templates/pl") tej Strony.
* DANE**Widoki**: Lista linków do Widoków na tej Stronie.
* DANE**Skala**: Domyślna skala dla Widoków na tej Stronie.
* DANE**Następny numer dymka**: Autonumeracja dla dymków.

### Widok

Siatka

* WIDOK**Pokaż siatkę**: Pokaż siatkę na Stronie.
* WIDOK**Rozstaw siatki**: Odległość między liniami siatki.

## Tworzenie skryptów

Zobacz informacje na stronie [Wstaw nową stronę przy użyciu szablonu](/TechDraw_PageTemplate/pl#Tworzenie_skryptów "TechDraw PageTemplate/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_PageDefault/pl&oldid=1486350>"