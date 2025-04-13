---
title: Std Przelicz
---
|  |
| --- |
| Std: Odśwież |
| Lokalizacja w menu |
| Edycja → Odśwież |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| F5 |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Polecenie **Std Odśwież** wykonuje ponowne przeliczenie aktywnego dokumentu. Ikonka polecenia jest nieaktywna, jeśli dokument nie wymaga ponownego obliczenia.

## Użycie

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Std_Refresh.svg) Odśwież.
   * Wybierz z menu opcję **Edycja → ![](/images/Std_Refresh.svg) Odśwież**.
   * Użyj skrótu klawiaturowego: F5.

## Opcje

* Aby wymusić przeliczenie zaznacz dokument lub jeden lub więcej obiektów w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl"), wybierz z menu kontekstowego opcję **![](/images/Std_MarkToRecompute.svg) Zaznacz do przeliczenia** i wywołaj polecenie.
* Dla obiektów, ale nie dla dokumentów, można również wybrać opcję **Przelicz obiekt** z tego samego menu kontekstowego.

## Uwagi

* Makro, które wymusza ponownie przeliczenie aktywnego dokumentu, można znaleźć na stronie: [Makrodefinicja: Wymuszaj ponowne obliczenia](/Macro_ForceRecompute/pl "Macro ForceRecompute/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby ponownie przeliczyć aktywny dokument, należy użyć metody `recompute` obiektu *document*.

```
import FreeCAD

doc = FreeCAD.newDocument()
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Refresh/pl&oldid=1462570>"