---
title: API w konsoli
---
:::caution
(Październik 2019)Nie edytuj tych stron. Informacje są niekompletne i nieaktualne. Najnowsze API można znaleźć wautomatycznie generowana dokumentacja API, lub wygenerować dokumentację samodzielnie, śledząc dokumentDokumentacja źródłowa.
:::

Ten moduł jest zawarty wewnątrz modułu FreeCAD i zawiera metody do wysyłania tekstu do konsoli wyjściowej i paska stanu programu FreeCAD. Wiadomości będą miały różny kolor, w zależności od tego czy będą to komunikaty, ostrzeżenia czy błędy.

Przykład:

```
import FreeCAD
FreeCAD.Console.PrintMessage("Hello World!\n")

```

![](/images/Method.png) **GetStatus(***"Log" lub "Msg" lub "Wrn" lub "Err"***)**

**Description**: Uzyskaj status Log, Msg, Wrn lub Error dla obserwatora

**Returns**: ciąg komunikatu stanu

![](/images/Method.png) **PrintError(***string***)**

**Description**: Wyświetla na wyjściu komunikat o błędzie

**Returns**:

![](/images/Method.png) **PrintLog(***string***)**

**Description**: Wyświetla na wyjściu komunikat dziennika

**Returns**:

![](/images/Method.png) **PrintMessage(***string***)**

**Description**: Wyświetla na wyjściu komunikat

**Returns**:

![](/images/Method.png) **PrintWarning(***string***)**

**Description**: Wyświetla na wyjściu ostrzeżenie

**Returns**:

![](/images/Method.png) **SetStatus(***string***)**

**Description**: Ustaw statystyki Log, Msg, Wrn lub Error dla obserwatora

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=Console_API/pl&oldid=926088>"