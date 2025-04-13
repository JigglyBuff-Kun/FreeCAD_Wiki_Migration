---
title: Cables Leitungsverlauf
---
|  |
| --- |
| Cables Leitungsverlauf |
| Menüeintrag |
| Leitungsverlauf → Neuer Leitungsverlauf |
| Arbeitsbereich |
| [Cables](/Cables_Workbench/de "Cables Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| [Cables KnotenHinzufügen](/Cables_AddVertex/de "Cables AddVertex/de"), [Cables KnotenLöschen](/Cables_DelVertex/de "Cables DelVertex/de"),  [Cables KnotenVerknüpfen](/Cables_AttachVertex/de "Cables AttachVertex/de"),  [Cables KnotenBefestigungEntfernen](/Cables_RemoveVertexAttachment/de "Cables RemoveVertexAttachment/de") |
|  |

## Beschreibung

Das ![](/images/Cables_WireFlex.svg) Leitungsverlauf-Objekt ist vom ![](/images/Draft_Wire.svg) [Draft Linienzeug](/Draft_Wire/de "Draft Wire/de")-Objekt abgeleitet und erbt alle seine Eigenschaften. Der Hauptunterschied besteht darin, dass der Leitungsverlauf jede seiner Knoten an externe Knoten oder Objekte (Anfügen an ein Objekt wird als Anfügen an sein Placement.Base verstanden). Nicht jeder Knoten muss angefügt werden, einige von ihnen können je nach aktuellem Bedarf frei beweglich bleiben.

Alle Leitungsverlauf-Knoten die nicht mit externen Knoten/Objekten verbunden sind können wie **Draft Linienzug**-Knoten mit dem [Draft Bearbeiten](/Draft_Edit/de "Draft Edit/de")-Befehl geändert werden (doppelklicke einfach auf den Leitungsverlauf in der [Baumansicht](/Tree_view/de "Tree view/de")). Siehe [Hinweise](#Notes).

Einige vom **Draft Linienzug** geerbte Eigenschaften des Leitungsverlaufs sind standardmäßig versteckt, besonders die **Fillet Radius** Eigenschaft, die von den Leitungs-Eigenschaften gesteuert werden kann, wenn der Leitungsverlauf Bestandteil einer [Leitung](/Cables_Cable/de "Cables Cable/de") ist. Es wird dringend empfohlen, die Eigenschaft Fillet Radius als den letzten Schritt der Erzeugung des Leitungsverlaufs zu nutzen. Diese Einstellung während der Bearbeitung des Leitungsverlaufs kann Fehler verursachen: "*Es ist nicht möglich, den Leitungsverlauf zu modifizieren, da Fase, Verrundung oder Unterteilung nicht null sind.*".

![](/images/Cables_WireFlex_Structure.png)

Beispielstruktur eines Leitungsverlaufs

## Anwendung

1. Wähle zunächst einen existierenden externen Knoten in der [3D-Ansicht](/3D_view/de "3D view/de").
2. Wähle zusätzliche Knoten (einen oder mehrere) in der [3D-Ansicht](/3D_view/de "3D view/de") mit gedrückter STRG-Taste.
3. Erzeuge einen **Leitungsverlauf** mit einer dieser Methoden:
   * Drücke den Knopf ![](/images/Cables_WireFlex.svg) Leitungsverlauf.
   * Wähle den Befehl **Leitungsverlauf → ![](/images/Cables_WireFlex.svg) Leitungsverlauf** aus dem Menü.
   * Ein Rechtsklick in die [Baumansicht](/Tree_view/de "Tree view/de") oder die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Leitungsverlauf → ![](/images/Cables_WireFlex.svg) Leitungsverlauf** im Kontextmenü auswählen.

Hinweis: die Auswahl von anderen Elementen als der Knoten führt zur Auswahl des gesamten Objekts.

Nach der Leitungserzeugung wird der erste in der 3D-Ansicht ausgewählte Knoten bzw. das erste Objekt automatisch zum Attachment Support eines Leitungsverlaufs hinzugefügt und die Map Mode-Eigenschaft wird auf Ursprung verschieben gesetzt (eine allgemeine Beschreibung der Teilanordnung finden Sie hier: [Part Befestigen](/Part_EditAttachment/de "Part EditAttachment/de")). Zusätzlich wird derselbe Knoten zu der Eigenschaft Vrtx\_start, der letzte ausgewählte Knoten zu der Eigenschaft Vrtx\_end und die ausgewählten mittleren Knoten zu den Eigenschaften Vrtxs\_mid und Vrtxs\_mid\_idx hinzugefügt.

Jeder Leitungsverlauf-Knoten kann jederzeit abgetrennt oder wieder an ein anderes Objekt gebunden werden, indem man den Befehl ![](/images/Cables_AttachVertex.svg) [Knoten befestigen](/Cables_AttachVertex/de "Cables AttachVertex/de") oder ![](/images/Cables_RemoveVertexAttachment.svg) [Knotenbefestigung entfernen](/Cables_RemoveVertexAttachment/de "Cables RemoveVertexAttachment/de") aufruft.

Es ist ratsam, zu experimentieren und sich mit den verschiedenen Optionen für das mögliche Bewegen von Objekten, die an einer Leitung befestigt sind, vertraut zu machen und das Verhalten der Leitung zu beobachten, je nachdem, wie viele und welche Knoten an externen Objekten befestigt sind und ob die Eigenschaft Map Mode für die gesamten Leitung aktiviert oder deaktiviert ist. Noch interessantere Möglichkeiten ergeben sich durch die Verwendung von z.B. ![](/images/Cables_SupportLine.svg) [BefestigungsLinie](/Cables_SupportLine/de "Cables SupportLine/de") or ![](/images/Cables_SupportPoint.svg) [BefestigungsPunkt](/Cables_SupportPoint/de "Cables SupportPoint/de").

![](/images/Cables_WireFlex_Example1_static.png)

Beispiel 1  
Bewegung des ersten Würfels, der am Start-Knoten des Leitungsverlaufs befestigt ist, wenn der Attachment Map Mode (Befestigungsmodus) des Leitungsverlaufs auf Translate origin (Ursprung versetzen) gesetzt wird.

![](/images/Cables_WireFlex_Example2_static.png)

Beispiel 2  
Bewegung des ersten Würfels, der am Start-Knoten des Leitungsverlaufs befestigt ist, wenn der Attachment Map Mode (Befestigungsmodus) des Leitungsverlaufs deaktiviert ist.

Die animierte Version der obigen Bilder ist [hier](/Cables_Example2_WireFlex "Cables Example2 WireFlex") zu finden

## Hinweise

* Ein **Leitungsverlauf** kann mit dem Befehl [Draft Bearbeiten](/Draft_Edit/de "Draft Edit/de") (durch Doppelklick auf den Leitungsverlauf in der [Baumansicht](/Tree_view/de "Tree view/de")) bearbeitet werden.

Beim Modus **Draft Bearbeiten** DARF NICHT "Punkt hinzufügen" und "Punkt löschen" aus dem Kontextmenü benutzt werde. Dies kann zu einer falschen Zuweisung von Punkt-Befestigungen führen. Um Punkte zum **Leitungsverlauf** hinzuzufügen oder aus ihm zu entfernen, nutze ausschließlich die Funktionen ![](/images/Cables_AddVertex.svg) [Knoten hinzufügen](/Cables_AddVertex/de "Cables AddVertex/de") oder ![](/images/Cables_DelVertex.svg) [Knoten löschen](/Cables_DelVertex/de "Cables DelVertex/de") ausserhalb des des **Draft Bearbeiten**-Modus.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein **Leitungsverlaufs**-Objekt ist von einem [Draft Linienzug](/Draft_Wire/de "Draft Wire/de") abgeleitet und erbt all seine Eigenschaften. Einige der geerbten Eigenschaften sind versteckt. (Siehe [Beschreibung](#Description)). Ein Leitungsverlauf hat zusätzlich die folgenden Eigenschaften:

### Daten

Wire Flex

* Daten**Vrtx\_start** (`LinkSub`): bestimmt die Eigenschaft Attachment Support des ersten Knotens (Punkt) des Leiters.
* Daten**Vrtx\_end** (`LinkSub`): bestimmt die Eigenschaft Attachment Support des letzten Knotens (Punkt) des Leiters.
* Daten**Vrtxs\_mid** (`LinkSubList`): bestimmt die Liste der Eigenschaft Attachment Support für die mittleren Knoten (Punkte) des Leiters. Mittlere Knoten: alle Knoten außer dem ersten und dem letzten Knoten.
* Daten**Vrtxs\_mid\_idx** (`IntegerList`): bestimmt die Liste der Indizes der Vrtxs\_mid Eigenschaft Attachment Support des Leiters. Die niedrigste mid idx Zahl hat den Wert 2, die höchste einen Wert von n-1, wobei n die Anzahl der Knoten (Punkte) des Leiters ist.

Es wird empfohlen, die oben genannten Eigenschaften nicht manuell anzupassen, sondern die ![](/images/Cables_AttachVertex.svg) [Knoten befestigen](/Cables_AttachVertex/de "Cables AttachVertex/de") oder ![](/images/Cables_RemoveVertexAttachment.svg) [Knotenbefestigung entfernen](/Cables_RemoveVertexAttachment/de "Cables RemoveVertexAttachment/de")-Werkzeuge zu nutzen, die dafür ausgelegt sind.

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_WireFlex/de&oldid=1557626>"