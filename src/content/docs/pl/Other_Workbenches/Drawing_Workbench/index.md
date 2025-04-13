---
title: Środowisko pracy Kreślenie
---

:::caution
Środowisko pracyKreślenienie jest już dołączone po wersji 0.20.Jego bardziej zaawansowanym zamiennikiem jestRysunek Techniczny.
:::
![](/images/Workbench_Drawing.svg)

Ikonka FreeCAD dla środowiska pracy Kreślenie

## Wprowadzenie

Środowisko pracy Drawing pozwala na umieszczenie na papierze modelu 3D. Oznacza to, że możesz umieścić widoki obiektu w oknie 2D i wstawić to okno do rysunku. Na przykład stronę z ramką, tytułem i logo, a następnie wydrukować tę stronę.

![](/images/Drawing_extraction.png)

## Przybory

Narzędzia do tworzenia, konfigurowania i eksportowania arkuszy rysunków 2D.

- ![](/images/Drawing_New.png) [Otwórz skalowalna grafike wektorową](/Drawing_Open_SVG "Drawing Open SVG"): Otwiera arkusz rysunku wcześniej zapisany jako plik SVG.

- ![](/images/Drawing_Landscape_A3.png) [Wstaw nowy rysunek](/Drawing_Landscape_A3 "Drawing Landscape A3"): Tworzy nowy arkusz rysunku z domyślnego szablonu A3 programu FreeCAD.

- ![](/images/Drawing_View.png) [Wstaw nowy widok ...](/Drawing_View "Drawing View"): Wstawia widok wybranego obiektu w aktywnym arkuszu rysunku.

- ![](/images/Drawing_Annotation.png) [Wstaw adnotację](/Drawing_Annotation "Drawing Annotation"): Dodaje adnotację do aktualnego arkusza rysunku.

- ![](/images/Drawing_Clip.png) [Spinacz](/Drawing_Clip "Drawing Clip"): Dodaje grupę elementów złączników do aktualnego arkusza rysunku.

- ![](/images/Drawing_Openbrowser.png) [Otwórz widok w przeglądarce](/Drawing_Openbrowser "Drawing Openbrowser"): Otwiera podgląd aktualnego arkusza w przeglądarce.

- ![](/images/Drawing_Orthoviews.png) [Wstaw widok ortogonalny](/Drawing_Orthoviews "Drawing Orthoviews"): Automatycznie tworzy widoki ortograficzne obiektu na aktualnym arkuszu rysunku.

- ![](/images/Drawing_Symbol.png) [Symbol](/Drawing_Symbol "Drawing Symbol"): Dodaje treść pliku SVG jako symbol na aktualnym arkuszu rysunku.

- ![](/images/Drawing_DraftView.png) [Widok szkicu](/Draft_Drawing "Draft Drawing"): Wstawia specjalny widok roboczy zaznaczonego obiektu w aktualnym arkuszu rysunku.

- ![](/images/Drawing_SpreadsheetView.png) [Widok arkusza kalkulacyjnego](/Drawing_SpreadsheetView "Drawing SpreadsheetView"): Wstawia widok wybranego arkusza kalkulacyjnego do bieżącego arkusza rysunku.

- ![](/images/Drawing_Save.png) [Zapisz stronę](/Drawing_Save "Drawing Save"): Zapisuje aktualny arkusz jako plik SVG.

* [Kształt projektu](/Drawing_ProjectShape "Drawing ProjectShape"): Tworzy widok wybranego obiektu (Źródło) w widoku 3D.

* _Uwaga:_ narzędzie [Drawing](/Draft_Drawing "Draft Drawing") jest używane z [Draft objects](/Draft_Workbench "Draft Workbench"). Ma pewne dodatkowe możliwości w stosunku do narzędzi Drawing i obsługuje określone obiekty, takie jak [wymiary](/Draft_Dimension "Draft Dimension").

## Organizacja pracy

Dokument zawiera obiekt kształtu 3D _(leg)_, z którego chcemy wykonać rysunek. Dlatego też tworzona jest nowa **strona**. Jest ona generowana z szablonu, na przykład szablonu **A3_Landscape**. Szablon jest dokumentem [SVG](/SVG/pl "SVG/pl"), który może pomieścić ramkę strony, logo i inne elementy.

Na tej stronie możemy wstawić jeden lub więcej widoków. Każdy widok posiada pozycję na stronie, współczynnik skali i dodatkowe właściwości. Za każdym razem, gdy zmienia się strona, widok lub obiekt, do którego się odwołuje, strona jest ponownie odtwarzana i wyświetlany jest zaktualizowany widok.

## Tworzenie skryptów

W chwili obecnej graficzny interfejs użytkownika jest bardzo ograniczony, więc interfejs API skryptów jest bardziej interesujący.

Opis funkcji używanych do tworzenia stron rysunku i widoków znajduje się na stronie [Przykład rysunku API](/Drawing_API_example "Drawing API example").

## Rozszerzanie Środowiska pracy Drawing

Niektóre uwagi dotyczące programowania Środowiska pracy Drawing zostaną dodane do strony [Dokumentacja rysunkowa](/Drawing_Documentation "Drawing Documentation"). Ma to pomóc w szybkim zrozumieniu sposobu działania Środowiska pracy Drawing, umożliwiając programistom sprawne rozpoczęcie programowania.

## Zewnętrzne odnośniki internetowe

- [Wprowadzenie do rysunku mechanicznego na Youtube - według Normal Universe](https://www.youtube.com/watch?v=1Hm5Zyjmjac)

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_Workbench/pl&oldid=1462061>"
