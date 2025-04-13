---
title: Krzywe Analiza pochylenia
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Krzywe: Analiza pochylenia |
| Lokalizacja w menu |
| Surfaces → Draft Analysis |
| Środowisko pracy |
| [Krzywe](/Curves_Workbench/pl "Curves Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Curves_DraftAnalysis.svg) **Curves DraftAnalysis** koloruje powierzchnię obiektu aby zwizualizować kąty pochylenia.

![](/images/Curves_DraftAnalysis01.png)

Kula z [linią odbicia](/Curves_ReflectLines/pl "Curves ReflectLines/pl") na jej równiku (po lewej) i powiązany obiekt DraftAnalysis (po prawej)

## Użycie

1. Wybierz jeden lub więcej kształtów.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Wciśnij przycisk ![](/images/Curves_DraftAnalysis.svg) Draft Analysis.
   * Wybierz opcję **Surfaces → ![](/images/Curves_DraftAnalysis.svg) Draft Analysis** z menu.
3. Dla każdego wybranego kształtu utworzony zostanie obiekt **DraftAnalysis**.

## Uwagi

* Za pomocą tego narzędzia można sprawdzić, czy dany obiekt nadaje się do odlewania ciśnieniowego oraz, w połączeniu z liniami odbicia, określić linię podziału formy odlewniczej, jak na powyższym rysunku. Kierunek narzędzia przebiega przez bieguny sfery, a jej równik stanowi linię podziału. W tym przypadku zestawy kolorów powyżej i poniżej linii podziału można traktować jako oddzielne analizy obu połówek.
* Jeśli narzędzie zostanie zastosowane do obiektu reprezentującego formę odlewniczą, jeden zestaw kolorów pokazuje, jak łatwo odlew można oddzielić od formy, podczas gdy drugi zestaw kolorów podkreśla obszary, które utrudniają jego wyrzucenie (podcięcia).
* Kąty powinny być dostosowane do procesu produkcyjnego i wybranego materiału. Na przykład:
  + WIDOK**Draft Angle1+2**: Minimalny wymagany kąt, który zapewni poprawne wykonanie części, jeśli inne ustawienia procesu produkcyjnego zostaną odpowiednio dostrojone i monitorowane.
  + WIDOK**Draft Tol1+2**: Dodawany do wymaganego kąta, określając minimalny zalecany kąt, który zapewni stabilność procesu produkcyjnego w każdych warunkach bez dodatkowych działań.
* Kolory:
  + WIDOK**Color In Draft1+2**: Oznacza obszary o kątach pochylenia większych niż zalecany kąt.
  + WIDOK**Color In Tolerance1+2**: Oznacza obszary o kątach pochylenia pomiędzy wymaganym a minimalnym zalecanym kątem.
  + WIDOK**Color Out Of Draft1+2**: Oznacza obszary o kątach pochylenia poniżej wymaganego kąta, które można interpretować jako całkowity brak pochylenia.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **DraftAnalysis** wywodzi się z obiektu [App: Właściwości Python](/App_FeaturePython/pl "App FeaturePython/pl") i dziedziczy wszystkie jego właściwości. Ma też następujące dodatkowe właściwości:

### Widok

Opcje analizy

* WIDOK**Direction** (`Vector`): Kierunek analizy
* WIDOK**Draft Angle1** (`FloatConstraint`): Dodatni kąt pochylenia
* WIDOK**Draft Angle2** (`FloatConstraint`): Ujemny kąt pochylenia
* WIDOK**Draft Tol1** (`FloatConstraint`): Dodatnia tolerancja pochylenia
* WIDOK**Draft Tol2** (`FloatConstraint`): Ujemna tolerancja pochylenia
* WIDOK**Shading** (`FloatConstraint`): Ilość cieniowania na powierzchni analizy

Colors1 Positive Draft

* WIDOK**Color In Draft1** (`Color`): Kolor obszaru dodatniego pochylenia
* WIDOK**Color In Tolerance1** (`Color`): Kolor obszaru dodatniej tolerancji
* WIDOK**Color Out Of Draft1** (`Color`): Kolor obszaru dodatniego poza pochyleniem

Colors2 Negative Draft

* WIDOK**Color In Draft2** (`Color`): Kolor obszaru ujemnego pochylenia
* WIDOK**Color In Tolerance2** (`Color`): Kolor obszaru ujemnej tolerancji
* WIDOK**Color Out Of Draft2** (`Color`): Kolor obszaru ujemnego poza pochyleniem

### Dane

Opcje analizy

* DANE**Source** (`Link`): Obiekt, na którym przeprowadzana jest analiza

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_DraftAnalysis/pl&oldid=1569928>"