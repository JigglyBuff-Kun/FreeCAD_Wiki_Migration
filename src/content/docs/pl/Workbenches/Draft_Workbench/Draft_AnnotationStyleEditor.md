---
title: Rysunek Roboczy Edytor stylu opisu
---
|  |
| --- |
| Rysunek Roboczy: Edytor stylu opisu |
| Lokalizacja w menu |
| Opis → Edytor stylu opisu ... Zarządzaj → Edytor stylu opisu... |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench "BIM Workbench") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Tekst](/Draft_Text/pl "Draft Text/pl"), [Etykieta](/Draft_Label/pl "Draft Label/pl"), [Wymiar](/Draft_Dimension/pl "Draft Dimension/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_AnnotationStyleEditor.svg) **Edytor stylu opisu** umożliwia definiowanie stylów, które wpływają na właściwości wizualne obiektów podobnych do adnotacji, takich jak te tworzone za pomocą poleceń [Tekst](/Draft_Text/pl "Draft Text/pl"), [Wymiar](/Draft_Dimension/pl "Draft Dimension/pl") i [Etykieta](/Draft_Label/pl "Draft Label/pl").

![](/images/Draft_AnnotationStyleEditor_Dialog.png)

Okno dialogowe Edytor stylu opisu.

## Użycie

1. Polecenie można wywołać na kilka sposobów:
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Naciśnij przycisk ![](/images/Draft_AnnotationStyleEditor.svg) **Edytor stylu opisu**.
   * Rysunek Roboczy: Wybierz opcję z menu **Opisy → ![](/images/Draft_AnnotationStyleEditor.svg) Edytor stylu opisu ...**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Zarządzaj → ![](/images/Draft_AnnotationStyleEditor.svg) Edytor stylu opisu...** z menu.
2. Otworzy się okno dialogowe **Edytor stylów opisów**.
3. Wybierz styl z listy rozwijanej **Nazwa stylu** lub wybierz `Dodaj nowy ...`, aby zdefiniować nowy styl.
4. Opcjonalnie dostosuj właściwości stylu.
5. Opcjonalnie naciśnij przycisk ![](/images/Accessories-text-editor.svg) Zmień nazwę, aby zmienić nazwę stylu.
6. Opcjonalnie naciśnij przycisk ![](/images/Edit_Cancel.svg) Usuń, aby usunąć styl.
7. Opcjonalnie naciśnij przycisk ![](/images/Std_Import.svg), aby zaimportować wszystkie style z pliku .json. Spowoduje to nadpisanie istniejących stylów o tej samej nazwie.
8. Opcjonalnie naciśnij przycisk ![](/images/Std_Export.svg), aby wyeksportować wszystkie style do pliku .json.
9. Naciśnij przycisk OK, aby zamknąć okno dialogowe i zakończyć polecenie.

## Zastosuj

Aby zastosować styl opisu, zmień właściwość WIDOK**Annotation Style** obiektów opisu. Można ją znaleźć w zakładce **Widok** [Edytora właściwości](/Property_editor/pl "Property editor/pl").

![](/images/Draft_AnnotationStyleEditor_Apply.png)

Wybieranie stylu opisu

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Style adnotacji są zapisywane jako serializowane słowniki w atrybucie `Meta` dokumentu. Atrybut ten jest sprawdzany przez edytor stylów adnotacji po jego otwarciu.

```
>>> print(App.ActiveDocument.Meta["Draft_Style_Text red"])
{"ArrowSize": 2.0, "ArrowType": 0, "Decimals": 2, "DimOvershoot": 4.0, "ExtLines": 0.0, "ExtOvershoot": 4.0, "FontName": "DejaVu Sans", "FontSize": 10.0, "LineColor": 255, "LineSpacing": 1.0, "LineWidth": 2, "ScaleMultiplier": 1.0, "ShowLine": true, "ShowUnit": false, "TextColor": 4278190335, "TextSpacing": 3.0, "UnitOverride": ""}

```

Każdy styl pojawiający się w edytorze jest wewnętrznie zapisywany z nazwą stylu poprzedzoną `Draft_Style_`; zapobiegnie to kolizji nazw z innymi kluczami, które mogą być zapisane w `Meta`, który może przechowywać dowolne informacje.

Możesz zdefiniować dowolny nowy styl, dodając niezbędne informacje do klucza zaczynającego się od `Draft_Style_`. Odpowiednią wartością tego klucza musi być słownik serializowany przy użyciu `json`.

```
import json

meta = App.ActiveDocument.Meta
props = {"ArrowSize": 7.0, "LineWidth": 6}
meta["Draft_Style_Thick_lines"] = json.dumps(props)
App.ActiveDocument.Meta = meta

```

Niewprowadzone właściwości zostaną wypełnione automatycznie po wybraniu tego stylu w edytorze stylów i naciśnięciu przycisku OK.

W podobny sposób, każdy serializowany słownik może zostać rozpakowany do edycji.

```
import json

meta = App.ActiveDocument.Meta
new_dict = json.loads(meta["Draft_Style_Thick_lines"])

```

Właściwości muszą mieć następujące typy:

Ciąg znaków:

```
props = {
    "FontName": "DejaVu Sans",
    "UnitOverride": ""
}

```

Liczby zmiennoprzecinkowe *(muszą być podawane z kropką dziesiętną)*:

```
props = {
    "ArrowSize": 2.0,
    "DimOvershoot": 4.0,
    "ExtLines": 0.0,
    "ExtOvershoot": 4.0
    "FontSize": 10.0,
    "LineSpacing": 1.0,
    "ScaleMultiplier": 1.0,
    "TextSpacing": 3.0
}

```

Liczby całkowite:

```
props = {
    "ArrowType": 0,
    "Decimals": 2,
    "LineColor": 255,
    "LineWidth": 2,
    "TextColor": 4278190335
}

```

`KolorTekstu` i `KolorLinii` odpowiadają 32-bitowej liczbie całkowitej, z której można wyodrębnić poszczególne wartości RGBA. `TypStrzałki` jest typem listy.

Wartości logiczne:

```
props = {
    "ShowLine": true
    "ShowUnit": false,
}

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_AnnotationStyleEditor/pl&oldid=1473906>"