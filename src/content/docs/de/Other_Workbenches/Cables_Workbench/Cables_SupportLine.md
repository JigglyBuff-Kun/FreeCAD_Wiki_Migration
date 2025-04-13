---
title: Cables BefestigungsLinie
---
|  |
| --- |
| Cables BefestigungsLinie |
| Menüeintrag |
| Leitungsbefestigung → Befestigungslinie erstellen |
| Arbeitsbereich |
| [Cables](/Cables_Workbench/de "Cables Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| [Cables Leitung](/Cables_Cable/de "Cables Cable/de"), [Cables Installationsdose](/Cables_CableBox/de "Cables CableBox/de"), [Cables Befestigungspunkt](/Cables_SupportPoint/de "Cables SupportPoint/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Cables_SupportLine.svg) BefestigungsLinie erzeugt eine einfache [Draft Linie](/Draft_Line/de "Draft Line/de") in heller Farbe und mit vergrößerten Knoten. Sie dient als Befestigung zur Erzeugung von [WireFlex](/Cables_WireFlex/de "Cables WireFlex/de"). Seine **Attachment**-Eigenschaft kann bspw. genutzt werden, um Leitungen um eine [Installationsdose](/Cables_CableBox/de "Cables CableBox/de") oder andere Objekte, zum Befestigen von Leitungen an Wänden oder Decken etc., hinzuzufügen.

![](/images/Cables_SupportLine_Example1.png)

BefestigungsLinie

## Anwendung

1. Wähle den Knoten, den Punkt auf der Fläche oder ein Objekt in der [3D-Ansicht](/3D_view/de "3D view/de") oder nichts.
2. Erstelle die Befestigungslinie mittels einer dieser Methoden:
   * Drücke den Knopf ![](/images/Cables_SupportLine.svg) Befestigungslinie.
   * Wähle den Befehl **Leitungsbefestigung → ![](/images/Cables_SupportLine.svg) Befestigungslinie** aus dem Menü.
   * Rechts-Klick in der [Baumansicht](/Tree_view/de "Tree view/de") oder der [3D-Ansicht](/3D_view "3D view") und wähle die Option  **Leitungsbefestigung → ![](/images/Cables_SupportLine.svg) Befestigungslinie** aus dem Kontext-Menü.

Einmal erzeugt, wird die BefestigungsLinie an der Position des ausgewählten Knotens, Punkts oder Objekts im 3D-Raum (oder am Punkt (0,0,0), wenn nichts ausgewählt wurde), platziert.

## Hinweise

Standardmäßig ist die **Subdivisions**-Eigenschaft 1. Sie kann erhöht werden, um mehr BefestigungsPunkte, z.B. für ein Bündel von parallelen Leitungen, zu erzeugen.

## Eigenschaften

Ein **BefestigungsLinien**-Objekt hat alle Eigenschaften eines [Draft Linie](/Draft_Line/de#Properties "Draft Line/de").

## Typischer Arbeitsablauf

Es sind zahlreiche Kombinationen von Befestigungen möglich, die zusammen mit WireFlex eine breite Palette von Möglichkeiten für die Verlegung von Objekten mit dazwischen gespannten Leitungen bieten.

Beispiel:

1. Erzeuge eine **Installationsdose** wie in [Cables Installationsdose Nutzung](/Cables_CableBox/de#Usage "Cables CableBox/de") beschrieben
2. Wähle die neu erzeugte **Installationsdose** in der [Baumansicht](/Tree_view/de "Tree view/de") und erzeuge 4 BefestigungsLinien wie in [Nutzung](#Usage/de) beschrieben
3. Für jede der vier BefestigungsLinien wähle **CableBox** in der **Attachment Support**-Eigenschaft
4. Für jede der vier BefestigungsLinien wähle **ObjectXY** in der **Map Mode**-Eigenschaft
5. Setzte verschiedene **Attachment Offset/Position** x-, y- und z-Werte für jede BefestigungsLinie:
   * für die erste BefestigungsLinie: x=0cm, y=11cm, z=-2cm
   * für die zweite BefestigungsLinie: x=-8cm, y=0cm, z=-2cm and **Attachment Offset/Angle** to 90deg
   * für die dritte BefestigungsLinie: x=8cm, y=0cm, z=-2cm and **Attachment Offset/Angle** to 90deg
   * für die vierte BefestigungsLinie: x=0cm, y=20cm, z=-2cm
6. Erzeuge als erstes die **WireFlex**-Leitung durch Auswahl des mittleren Knotens des oberen Kreuzes der **Installationsdose** und mittleren Knotens der BefestigungsLinien 1 und 4 und nachfolgenden [Leitungsverlauf Anwendung](/Cables_WireFlex#Usage "Cables WireFlex").
7. Erzeuge einen zweiten und dritten **Leitungsverlauf** in gleicher Weise.
8. Das Ergebnis sollte in etwa so aussehen wie in der folgenden Abbildung
9. Der nächste Schritt könnte die Erzeugung von Leitungen aus **WireFlex** Leitungen (siehe [Cable Nutzung](/Cables_Cable/de#Usage "Cables Cable/de"))
10. Befestigungslinien können beim Anlegen von Leitungen verdeckt werden.

![](/images/Cables_SupportLine_Example2.png)

Beispiel für die Nutzung der BefestigungsLinie:  
BefestigungsLinien werden an der Installationsdose befestigt und dienen als Basis für Leiter.

Auf diese Weise wurde die Installationsdose mit den befestigten Leitungen erzeugt. Es erlaubt die Bewegung des ganzen Satzes, wenn nur die Installationsdose versetzt wird. Die Knoten können jederzeit von den BefestigungsLinien entfernt werden (siehe [Anwendung KnotenBefestigungEntfernen](/Cables_RemoveVertexAttachment/de#Usage "Cables RemoveVertexAttachment/de")), um sicherzustellen, dass ihre Position sich nicht ändert, wenn die Installationsdose versetzt wird.

Ein weiteres animiertes Beispiel, welches BefestigungsLinien benutzt, wird [hier](/Cables_Example1_Simple_workflow "Cables Example1 Simple workflow") gezeigt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_SupportLine/de&oldid=1557642>"