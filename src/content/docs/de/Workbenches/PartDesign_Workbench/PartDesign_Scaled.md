---
title: PartDesign SkalierteTransformation
---

|                                                                                                    |
| -------------------------------------------------------------------------------------------------- |
| PartDesign SkalierteTransformation                                                                 |
| Menüeintrag                                                                                        |
| Keine (Menüoption unter Part Design → Muster anwenden → Mehrfach-Transformation erstellen)         |
| Arbeitsbereich                                                                                     |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de")                                   |
| Standardtastenkürzel                                                                               |
| _Keiner_                                                                                           |
| Eingeführt in Version                                                                              |
| -                                                                                                  |
| Siehe auch                                                                                         |
| [PartDesign Mehrfach-Transformation](/PartDesign_MultiTransform/de "PartDesign MultiTransform/de") |
|                                                                                                    |

## Beschreibung

![](/images/PartDesign_Scaled.svg) **PartDesign SkalierteTransformation** ist eine der Transformationsoptionen von ![](/images/PartDesign_MultiTransform.svg) [MehrfachTransformation](/PartDesign_MultiTransform/de "PartDesign MultiTransform/de"). Im Gegensatz zu den anderen Optionen ist diese nicht als eigenständiges Werkzeug vorhanden. Es wandelt das Ergebnis einer Transformation in eine Abfolge skalierter Objekte mit gleichmäßig verteilten Skalierungsfaktoren. Am nicht skalierten Ausgangselement startend, wächst oder schrumpft der Skalierungsfaktor, bis er den gegebenen Wert am letzten Element erreicht.

![](/images/PartDesign_Scaled-01.png) ![](/images/Button_right.svg) ![](/images/PartDesign_Scaled-02.png)

Ein lineares Muster und ein polares Muster → Skaliertes lineares Muster mit 3 Schritten (Vorkommen) und polares Muster mit 12 Schritten

Wenn noch keine Transformation in der ![](/images/PartDesign_MultiTransform.svg) [MehrfachTransformation](/PartDesign_MultiTransform/de "PartDesign MultiTransform/de") vorhanden ist, werden skalierte Elemente an derselben Position eingefügt, an der das Ausgangselement liegt. Dies kann zu unerwarteten Ergebnissen führen, wenn das Ausgangselement nicht komplett vom skalierten Element umhüllt wird. Und daher ist es nicht ratsam, die **SkalierteTransformation** als erste Transformation einer MehrfachTransformation zu verwenden.

![](/images/PartDesign_Scaled-03.png) ![](/images/Button_right.svg)
![](/images/PartDesign_Scaled-04.png) ![](/images/Button_right.svg)
![](/images/PartDesign_Scaled-05.png)

Ein Ausgangselement mit einem Loch → Skaliertes Objekt mit 2 Vorkommen → Skaliertes Objekt mit 4 Vorkommen

## Anwendung

### Ein transformiertes Element skalieren

1. Man startet mit einer der folgenden Möglichkeiten:
   - Ein Doppelklick auf das MultiTransform-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de").
   - Rechtsklick auf das MultiTransform-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") und **MultiTransform bearbeiten** im Kontextmenü auswählen.
2. Der [Aufgabenbereich](/Task_panel/de "Task panel/de") **Parameter der Mehrfach-Transformation** wird geöffnet.
3. Rechtsklick in die Liste **Transformationen** und **Skalierte Transformation hinzufügen** im Kontextmenü auswählen.
4. Ein **Scaled**-Objekt wird zur Liste hinzugefügt und der Aufgabenbereich unten erweitert, um **Faktor** und **Vorkommen** zu bearbeiten. Siehe [Optionen](#Optionen) für weitere Informationen.
5. Untere OK-Leiste drücken, um die Optionen zu bestätigen.
6. Obere Schaltfläche OK drücken zum Fertigstellen.

### Ein einzelnes Element skalieren

1. Ein Formelement des aktiven Körpers in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen.
2. Eine der folgenden Möglichkeiten auswählen:
   - Die Schaltfläche ![](/images/PartDesign_MultiTransform.svg) [Mehrfach-Transformation erstellen](/PartDesign_MultiTransform/de "PartDesign MultiTransform/de") drücken.
   - Den Menüeintrag **Part Design → Muster anwenden → ![](/images/PartDesign_MultiTransform.svg) Mehrfach-Transformation erstellen** auswählen.
3. Der [Aufgabenbereich](/Task_panel/de "Task panel/de") **Parameter der Mehrfach-Transformation** wird geöffnet. Siehe oben.

## Optionen

- **Faktor**: Der Faktor bis zu dem das letzte Element skaliert wird.
- **Vorkommen**: Anzahl der Schritte von nicht skaliert (1) bis **Faktor** (einschließlich Ausgangs- und letztem Element).
  - Die Transformation Skaliert akzeptiert die Anzahl der Vorkommen der vorherigen Transformation als maximalen Wert oder jeden ganzzahligen Teiler dieser Anzahl, der ein ganzzahliges Ergebnis liefert. So sind `12`, `6`, `4`, `3`und `2` gültig für ein lineares oder polares Muster mit 12 Vorkommen.
  - Für ein einzelnes skaliertes Formelement wird jeder ganzzahlige Wert größer als 1 akzeptiert.

## Hinweise

- Das Zentrum der Skalierung ist der Schwerpunkt des Formelements und kann folgendes auslösen:
  - Ein wachsendes Element, das aus der Rückseite des übergeordneten Elements hervor tritt.
  - Ein schrumpfendes Element, das den Kontakt mit dem übergeordneten Element verliert und verschwindet.
  - Eine schrumpfende Tasche, die zu einem unsichtbaren Hohlraum im übergeordneten Element wird.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Scaled/de&oldid=1462765>"
