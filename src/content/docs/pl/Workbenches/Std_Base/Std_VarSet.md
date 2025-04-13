---
title: Std Utwórz zestaw zmiennych
---
|  |
| --- |
| Std: Utwórz zestaw zmiennych |
| Lokalizacja w menu |
| *brak* |
| Środowisko pracy |
| Wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 1.0 |
| Zobacz także |
| [środowisko pracy Arkusz Kalkulacyjny](/Spreadsheet_Workbench/pl "Spreadsheet Workbench/pl"), [środowisko pracy DynamicData](/DynamicData_Workbench/pl "DynamicData Workbench/pl") |
|  |

## Opis

Polecenie **Std: Utwórz zestaw zmiennych** tworzy obiekt VarSet. Jest to zestaw właściwości, które mogą być użyte jako zmienne w [wyrażeniach](/Expressions/pl "Expressions/pl").

![](/images/Std_VarSet_Dialog.png)

Okno dialogowe dodawania zestawu zmiennych

## Użycie

1. Wykonaj jedną z poniższych czynności:
   * Aby utworzyć nowy zestaw zmiennych: wciśnij przycisk ![](/images/Std_VarSet.svg) Utwórz zestaw zmiennych.
   * Aby edytować istniejący zestaw zmiennych: kliknij na nim dwukrotnie w [widoku drzewa](/Tree_view/pl "Tree view/pl").
2. Otwarte zostanie okno dialogowe **Dodaj właściwość**.
3. Wprowadź parametr **Nazwa** dla właściwości.
   * Nazwa musi być unikatowa dla zestawu zmiennych.
   * Dozwolone są tylko znaki alfanumeryczne i podkreślinik (`A` do `Z`, `a` do `z`, `0` do `9` oraz `_`).
   * Pierwszy znak nie może być cyfrą.
   * FreeCAD używa konwencji [UpperCamelCase](https://pl.wikipedia.org/wiki/CamelCase) dla nazw swoich właściwości, więc każde słowo zaczyna się wielką literą i nie ma spacji ani podkreślników. Gdy [Edytor właściwości](/Property_editor/pl "Property editor/pl") wyświetla taką nazwę, spacje są wstawiane między słowa, ułatwiając czytanie nazwy. Zalecane jest stosowanie się do tej konwencji.
4. Wprowadź nazwę **Grupa** dla właściwości lub wybierz grupę z listy. Nazwy grup mają takie same ograniczenia jak nazwy właściwości.
5. Wybierz **Typ** właściwości z listy. Zobacz poniżej  [najbardziej popularne typy](#Popularne_typy_właściwości).
6. Wprowadź **Wartość** dla właściwości. To pole akceptuje jednostki dla właściwości, które je posiadają.
7. Opcjonalnie, zaznacz pole **Dodaj kolejne** jeśli chcesz dodać więcej właściwości.
8. Opcjonalnie, wprowadź **Podpowiedź** dla właściwości.
9. Wciśnij przycisk OK.
10. Jeśli pole **Dodaj kolejne** zostało zaznaczone, okno dialogowe otworzy się ponownie i będzie możliwe dodanie nowej właściwości.
11. Wciśnij przycisk Anuluj aby zakończyć.

## Popularne typy właściwości

FreeCAD wspiera wiele typów właściwości. Tabela poniżej wymienia niektóre z najbardziej popularnych typów. Zobacz stronę [Właściwości niestandardowe funkcji Python](/FeaturePython_Custom_Properties/pl "FeaturePython Custom Properties/pl") aby uzyskać więcej informacji.

| Typ właściwości | Domyślna jednostka (jeśli jakakolwiek) | Uwagi |
| --- | --- | --- |
| `App::PropertyAngle` | ° (lub deg) |  |
| `App::PropertyBool` |  | `PRAWDA` lub `FAŁSZ`, może być użyty w [wyrażeniach warunkowych](/Expressions/pl#Wyrażenia_warunkowe "Expressions/pl") |
| `App::PropertyDistance` | mm |  |
| `App::PropertyFloat` |  | Liczba dziesiętna |
| `App::PropertyInteger` |  | Liczba całkowita |
| `App::PropertyLength` | mm | Podobny do `App::PropertyDistance`, ale nie może być ujemny |
| `App::PropertyString` |  | Ciąg tekstu |

## Uwagi

* Właściwości można również dodawać do istniejących zestawów w [Edytorze wyrażeń](/Expressions/pl "Expressions/pl") poprzez zaznaczenie pola **Pokaż zestawy zmiennych**.
* Właściwość może zostać usunięta z zestawu poprzez [menu kontekstowe](/Property_editor/pl#Menu_kontekstowe "Property editor/pl") [Edytora właściwości](/Property_editor/pl "Property editor/pl").
* Nazwę grupy można zmienić w tym samym menu.
* To polecenie obecnie nie może ustawić listy dozwolonych obiektów właściwości `App::PropertyEnumeration`. Można to zrobić za pomocą [kodu Pythona](/FeaturePython_Custom_Properties/pl#App::PropertyEnumeration "FeaturePython Custom Properties/pl") lub w Edytorze właściwości. Kroki do tego drugiego sposobu to:
  1. Wybierz **Pokaż ukryte** w menu kontekstowym Edytora właściwości.
  2. Rozwiń węzeł właściwości.
  3. Kliknij w polu **Enum**.
  4. Wciśnij przycisk ..., który się pojawi.
  5. Wprowadź wartości w oknie dialogowym **List**, które się otworzy.
  6. Wciśnij przycisk OK.

## Tworzenie skryptów

```
import FreeCAD as App

doc = App.ActiveDocument

var_set = doc.addObject("App::VarSet", "VarSetName")
var_set.addProperty("App::PropertyInteger", "MyNumber")  # Property is added to the Base group.
var_set.MyNumber = 123
var_set.addProperty("App::PropertyString", "MyText", group="SomeGroup", doc="Some tooltip information")
var_set.MyText = "Abc"

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_VarSet/pl&oldid=1527716>"