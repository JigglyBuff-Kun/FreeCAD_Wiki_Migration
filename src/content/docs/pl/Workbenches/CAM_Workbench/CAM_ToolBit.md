---
title: CAM Końcówki narzędzi
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

## Opis

Końcówki narzędzia są podstawą systemu [narzędzi](/CAM_Tools/pl "CAM Tools/pl") środowiska CAM. Reprezentują one konkretne narzędzie, które może być użyte w zadaniu CAM do wygenerowania ścieżki narzędzia. Każdy zestaw końcówek narzędzi jest przechowywany jako plik JSON. Struktura pliku JSON to uporządkowane dane, które mogą być łatwo przetwarzane przez makrodefinicje lub skrypty środowiska Python, ale pozostają czytelne dla człowieka. Opisywanie zestawów narzędzi za pomocą JSON pozwala na automatyczne tworzenie dużych zbiorów dokładnych zestawów narzędzi automatycznie lub za pomocą skryptu.

Przechowywanie narzędzia jako pliku JSON brzmi świetnie, ale eliminuje możliwość uzyskania dokładnej miniatury lub reprezentacji bryły. Z drugiej strony, gdyby każdy zestaw narzędzi był tworzony jako obiekt FreeCAD, uzyskanie bryły byłoby proste, ale wymagałoby ogromnej pamięci masowej w przypadku dużych kolekcji narzędzi. Również automatyczne tworzenie zestawów narzędzi jako obiektów FreeCAD byłoby trudne lub niemożliwe.

Zamiast tego narzędzia są mieszane. Plik JSON zawiera ścieżkę do pliku profilu narzędzia oraz wartości wszystkich parametrów wymaganych do utworzenia określonego zestawu narzędzi.

Gdy narzędzie jest uruchamiane w zadaniu, obiekt jest tworzony na podstawie szablonu, a ograniczenia są ustawiane zgodnie z wartościami z pliku JSON. Wszystkie dodatkowe parametry są tworzone jako właściwości obiektu. Dzięki temu uzyskuje się prawidłowy kształt i wymiary, które można wykorzystać do wygenerowania chmury punktów lub siatki na potrzeby zaawansowanych algorytmów *(i potencjalnie symulacji)*.

## Użycie

W interfejsie graficznym programu FreeCAD menedżer biblioteki narzędziowej CAM udostępnia mechanizm tworzenia nowego zestawu narzędzi. Pojedynczy zestaw narzędzi może znajdować się w wielu bibliotekach narzędzi.

1. Otwórz menedżera narzędzi CAM.
2. Wybierz bibliotekę.
3. Utwórz narzędzie.

## Struktura JSON

```
{
  "version": 2,
  "name": "T1",
  "shape": "endmill.fcstd",
  "attribute": {},
  "parameter": {
    "CuttingEdgeHeight": "30.000 mm",
    "Diameter": "1.000 mm",
    "Length": "50.000 mm",
    "ShankDiameter": "3.000 mm"
  }
}

```

## Opcje

## Powiązane

* [Narzędzia](/CAM_Tools/pl "CAM Tools/pl")
* [Otwarta biblioteka narzędzi](/CAM_ToolBitLibraryOpen/pl "CAM ToolBitLibraryOpen/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_ToolBit/pl&oldid=1387144>"