---
title: Part Skalieren
---

|                                                                                                       |
| ----------------------------------------------------------------------------------------------------- |
| Part Scale                                                                                            |
| Menüeintrag                                                                                           |
| Part → Skalieren...                                                                                   |
| Arbeitsbereich                                                                                        |
| [Part](/Part_Workbench/de "Part Workbench/de")                                                        |
| Standardtastenkürzel                                                                                  |
| _Keiner_                                                                                              |
| Eingeführt in Version                                                                                 |
| 1.0                                                                                                   |
| Siehe auch                                                                                            |
| [Draft Klonen](/Draft_Clone/de "Draft Clone/de"), [Draft Skalieren](/Draft_Scale/de "Draft Scale/de") |
|                                                                                                       |

## Beschreibung

**Part Skalieren** skaliert Formen entweder mit einem bestimmten Faktor einheitlich in alle Richtungen oder mit unterschiedlichen Faktoren für jede Hauptrichtung. Im Falle von unterschiedlichen Faktoren kann die Form verzerrt werden.

![](/images/Part_Scale_demo.png)

Beispiel für Skalieren

## Anwendung

1. Eine oder mehrere Formen in der [3D-Ansicht](/3D_view/de "3D view/de") oder in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/Part_Scale.svg) Skalieren... drücken.
   - Den Menüeintrag **Part → ![](/images/Part_Scale.svg) Skalieren...** auswählen.
3. Ein [Aufgaben-Dialog](#Task_panel/de) wird geöffnet.
4. **Einheitliche Skalierung** oder **Uneinheitliche Skalierung** auswählen.
5. Skalierungsfaktor(en) eingeben.
6. OK anklicken.

Alternativ kann die Auswahl auch nach dem Start des Befehls erfolgen, durch Auswahl einer oder mehrerer Formen aus der Liste im [Aufgaben-Dialog](/Task_panel/de "Task panel/de").

In der Baumansicht werden so viele Scale-Objekte aufgelistet, wie Formen ausgewählt wurden. Jede ausgewählte Form wird unterhalb ihres Scale-Objekts abgelegt.

## Aufgaben-Dialog

![](/images/Part_Scale_dialog.png)

- Die Schaltfläche OK erstellt das skalierte Objekt und schließt den Aufgaben-Dialog.
- Die Schaltfläche Schließen schließt den Aufgaben-Dialog, ohne etwas zu tun.
- Die Schaltfläche Anwenden erstellt das skalierte Objekt, aber schließt den Aufgaben-Dialog nicht. Jetzt können weitere Formen aus der Liste unten ausgewählt und weitere skalierte Objekte erstellt werden.
- **Shape**-Liste: hier können weitere Formen zum Skalieren ausgewählt werden. Werden mehrere Formen ausgewählt, werden auch entsprechend viele Scale-Objekte erstellt.

## Hinweise

- Uneinheitliche Skalierung wandelt alle Kanten in B-Spline-Kurven und alle Flächen in B-Spline-Oberflächen. Diese sind schwieriger zu berechnen.
- Punkte bzw. Knoten können nicht skaliert werden, da sie dimensionslos sind.
- [AppLink](/App_Link/de "App Link/de")-Objekte, die auf geeignete Objektarten verweisen, und [AppPart](/App_Part/de "App Part/de")-Container, die geeignete sichtbare Objekte enthalten, können auch skaliert werden.
- Der Aufgaben-Dialog enthält bisher keine Vorschaufunktion. Jeder Klick auf Anwenden erstellt ein neues Objekt, das als Vorschau dienen kann. Diese bleiben bestehen und ein weiteres skaliertes Objekt wird erstellt, sobald OK angeklickt wird. [Rückgängig](/Std_Undo/de "Std Undo/de") kann nützlich sein, um sie zu entfernen, bevor OK angeklickt wird.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Part-Scale-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Scale

- Daten-Eigenschaft**Base** (`Link`): Die Eingangsform (die Form, auf die Part Scale angewendet wurde).
- Daten-Eigenschaft**Uniform** (`Bool`): Steuert, ob einheitlich oder uneinheitlich skaliert wird.
- Daten-Eigenschaft**Uniform Scale** (`Float`): Skalierungsfaktor für einheitliches Skalieren.
- Daten-Eigenschaft**XScale** (`Float`): Der X-Skalierungsfaktor für uneinheitliches Skalieren.
- Daten-Eigenschaft**YScale** (`Float`): Der Y-Skalierungsfaktor für uneinheitliches Skalieren.
- Daten-Eigenschaft**ZScale** (`Float`): Der Z-Skalierungsfaktor für uneinheitliches Skalieren.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Scale/de&oldid=1404106>"
