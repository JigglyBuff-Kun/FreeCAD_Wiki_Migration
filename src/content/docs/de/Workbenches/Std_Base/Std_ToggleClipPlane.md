---
title: Std Schnittebene
---

|                                                                 |
| --------------------------------------------------------------- |
| Std Schnittebene                                                |
| Menüeintrag                                                     |
| Ansicht → Schnittebene                                          |
| Arbeitsbereich                                                  |
| Alle                                                            |
| Standardtastenkürzel                                            |
| _Keiner_                                                        |
| Eingeführt in Version                                           |
| -                                                               |
| Siehe auch                                                      |
| [Part Schnittansicht](/Part_SectionCut/de "Part SectionCut/de") |
|                                                                 |

## Beschreibung

Der Befehl **Std Schnittebene** blendet Objekte und Teile von Objekten aus, die sich auf jeweils einer Seite von bis zu drei virtuellen Ebenen in der [3D-Ansicht](/3D_view/de "3D view/de") befinden.

![](/images/Std_ToggleClipPlane_example.png)

Ein beschnittenes, hohles Objekt

![](/images/Std_ToggleClipPlane_Dialog.png)

Der Dialogbereich Clipping

## Anwendung

1. Menüeintrag **Ansicht → ![](/images/Std_ToggleClipPlane.svg) Schnittebene** auswählen.
2. Das Dialogfenster **Abschneiden** wird geöffnet.
3. Eine der folgenden Möglichkeiten auswählen:
   - Eine oder mehrere der Checkboxen **Abschneiden in X** bis **Abschneiden in Z** aktivieren.
     - Bei Bedarf die Abstandswerte ändern.
     - Bei Bedarf die jeweilige Schaltfläche Flip drücken, um die Seite zu Wählen, auf der die Objekte ausgeblendet werden.
   - Checkbox **Abschneiden in benutzerdefinierterRichtung** aktivieren.
     - Bei Bedarf die Abstandswert ändern.
     - Nun hat man diese Möglichkeiten:
       - Schaltfläche Ansicht drücken, um die Richtung der aktuellen Ansicht zu verwenden.
       - Checkbox **An Blickrichtung anpassen** aktivieren, damit sich die Richtung dynamisch an Änderungen der Ansicht anpassen.
       - Angabe einer Richtung durch Eingabe der X-, Y- und Z-Koordinaten eines Normalenvektors.
4. Bei Bedarf ändert man die Ansicht zum Überprüfen des Modells.
5. Die Schaltfläche Schließen drücken, um den Aufgabenbereich zu schließen und den Befehl zu beenden.

## Hinweise

- Zur deutlichen Unterscheidung des Inneren der teilweise geschnittenen Objekte kann deren Ansicht-Eigenschaft**Lighting** auf `One side` geändert werden. Die Farbe der Innenseite ihrer Flächen hängt dann von den Backlight-Einstellungen ab: **Bearbeiten → Einstellungen... → Display → 3D View → Backlight color - Intensity**. Siehe [Voreinstellungseditor](/Preferences_Editor/de#3D-Ansicht "Preferences Editor/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ToggleClipPlane/de&oldid=1457917>"
