---
title: Std Einheitenrechner
---

|                                 |
| ------------------------------- |
| Std Einheitenrechner            |
| Menüeintrag                     |
| Werkzeuge → Einheitenwandler... |
| Arbeitsbereich                  |
| Alle                            |
| Standardtastenkürzel            |
| _Keiner_                        |
| Eingeführt in Version           |
| -                               |
| Siehe auch                      |
| _Keiner_                        |
|                                 |

## Beschreibung

Der Befehl **Std Einheitenrechner** öffnet den Einheitenwandler. Der Einheitenwandler kann genutzt werden, um Werte von einem Einheitensystem in ein anderes umzuwandeln.

![](/images/Std_UnitsCalculator_Dialog.png)

Das Einheitenwandler-Dialogfenster

## Anwendung

1. Den Menüeintrag **Werkzeuge → ![](/images/Std_UnitsCalculator.svg) Einheitenwandler...** auswählen.
2. Das Dialogfenster **Einheitenwandler** wird geöffnet. Mehr Informationen finden sich unter [Optionen](#Optionen).
3. Das Dialogfenster ist nicht modal, d.h es kann während der Arbeit mit FreeCAD geöffnet bleiben.
4. Die Schaltfläche Schließen drücken, um das Dialogfenster zu schließen.

## Optionen

### Oberste Zeile

1. Gib einen Wert mit Einheit in das erste Eingabefeld ein, z.B. `10 mm`.
   - Einheiten mit Exponenten sollten in der `^`-Notation eingegeben werden, z.B. `1 m^2`.
   - Falls der Eingabewert nicht erkannt werden kann oder die Einheit unbekannt ist, wird im **=>**-Feld die Meldung 'syntax error' angezeigt.
2. Gib die Zieleinheit in das **als**-Eingabefeld ein, z.B. `in`.
   - Falls die Einheit unbekannt ist, wird im **=>**-Feld die Meldung 'unknown unit' angezeigt.
   - Falls die Einheit im ersten und zweiten Eingabefeld nicht in der gleichen Maßeinheitkategorie sind, wird im **=>**-Feld die Meldung 'unit mismatch' angezeigt. Im Beispiel sind die Einheiten in der gleichen Kategorie, weil 'mm' und 'in' beides Längeneinheiten sind.
3. Wenn es keine Eingabefehler gibt, wird im **=>**-Feld sofort das Ergebnis angezeigt. Für die Beispielwerte ist das Ergebnis `0,394 in`.
4. Wahlweise kannst du die Kopieren-Schaltfläche drücken, um den Inhalt des **=>**-Feldes in die Zwischenablage zu kopieren. Der Wert kann dann bspw. in ein FreeCAD-Aufgaben-Feld oder eine Dialogbox eingefügt werden.

### Textbereich

1. Die in der obersten Zeile durchgeführte Konvertierung kann durch Drücken von Enter im ersten oder zweiten Eingabefeld in den Textbereich kopiert werden.
2. Der Textbereich kann mehrere Konvertierungen enthalten und sein Inhalt kann ausgewählt und durch gleichzeitiges Betätigen von Strg+C in die Zwischenablage kopiert und in anderen Programmen benutzt werden.

### Anzahl

1. Eine Option in der Aufklappliste **Einheitensystem** auswähen. Dies wird das Zieleinheitensystem. **Preference system** auswählen, um das Einheitensystem zu verwenden, das in den [Einstellungen](/Preferences_Editor/de#Units "Preferences Editor/de") definiert ist.
2. Eine Option in der Aufklappliste **Maßeinheitenkategorie** auswählen.
3. Einen Wert mit Einheiten in das Eingabefeld **Anzahl** eingeben. Die Einheiten müssen zur Maßeinheitenkategorie passen.
4. In das Eingabefeld **Dezimalstellen** klicken und Enter drücken, um den Wert im Eingabefeld **Anzahl** zu konvertieren.

## Hinweise

- Siehe [Ausdrücke](/Expressions/de#Units "Expressions/de") für eine Liste aller bekannter Einheiten.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_UnitsCalculator/de&oldid=1463091>"
