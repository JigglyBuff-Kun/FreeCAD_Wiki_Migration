---
title: Console API/de
---
:::caution
(Oktober 2019) Bearbeite diese Seiten nicht. Die Informationen sind unvollständig und veraltet. Die neueste API findest Du in derautogenerierten API-Dokumentationoder generiere die Dokumentation selbst, sieheQuelldokumentation.
:::

Diese Modul ist im FreeCAD-Module integriert und enthält Methoden, um Text auf der FreeCAD-Ausgabe-Konsole und Statuszeile auszugeben. Die Ausgaben haben eine unterschiedliche Farbe, abhängig von Meldung, Warnung oder Fehler.

Beispiel:

```
import FreeCAD
FreeCAD.Console.PrintMessage("Hello World!\n")

```

![](/images/Method.png) **GetStatus(***"Log" or "Msg" or "Wrn" or "Err"***)**

**Description**: Get the status for either Log, Msg, Wrn or Error for an observer

**Returns**: a status string.

![](/images/Method.png) **PrintError(***string***)**

**Description**: Prints an error message to the output

**Returns**: nothing

![](/images/Method.png) **PrintLog(***string***)**

**Description**: Prints a log message to the output

**Returns**: nothing

![](/images/Method.png) **PrintMessage(***string***)**

**Description**: Prints a message to the output

**Returns**: nothing

![](/images/Method.png) **PrintWarning(***string***)**

**Description**: Prints a warning to the output

**Returns**: nothing

![](/images/Method.png) **SetStatus(***string***)**

**Description**: Set the stats for either Log, Msg, Wrn or Error for an observer

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=Console_API/de&oldid=953684>"