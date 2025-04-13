---
title: Wybór Api
---

:::caution
(Październik 2019)Nie edytuj tych stron. Informacje są niekompletne i nieaktualne. Najnowsze API można znaleźć wautomatycznie generowana dokumentacja API, lub wygenerować dokumentację samodzielnie, śledząc dokumentDokumentacja źródłowa.
:::

Moduł podrzędny wyboru jest częścią modułu FreeCADGui. Przykład:

```
import FreeCADGui
sel = FreeCADGui.Selection.getSelection()

```

![](/images/Method.png) **addSelection(\***FreeCAD.Object**\*)**

**Description**: Dodaje obiekt do zaznaczenia

**Returns**:

![](/images/Method.png) **clearSelection(\***[string]**\*)**

**Description**: Czyści wybór podanej nazwy dokumentu. Jeżeli nie podano żadnego dokumentu, to czyszczony jest cały wybór.

**Returns**:

![](/images/Method.png) **getSelection(\***[string]**\*)**

**Description**: Zwraca listę wybranych obiektów dokumentu dla podanej nazwy dokumentu. Jeśli nie podano żadnego dokumentu, zwracana jest pełna lista wybranych obiektów.

**Returns**: a list of document objects in the order they were selected.

![](/images/Method.png) **getSelectionEx(\***[string]**\*)**

**Description**: Zwraca listę wybranych obiektów dla podanej nazwy dokumentu. Jeśli nie zostanie podany żaden dokument, zwrócony zostanie kompletny wybór. Używane do wyboru obiektów podrzędnych _(np. niektóre krawędzie ściany)_.

**Returns**: a list of SelectionObjects in the order they were selected

![](/images/Method.png) **isSelected(\***FreeCAD.Object**\*)**

**Description**: Sprawdza, czy dany obiekt jest zaznaczony

**Returns**:

![](/images/Method.png) **removeSelection(\***FreeCAD.Object**\*)**

**Description**: Usuwa obiekt z zaznaczenia

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=Selection_API/pl&oldid=902193>"
