---
title: TechDraw VorlagenAnleitung
---

|                                                                            |
| -------------------------------------------------------------------------- |
| Tutorium                                                                   |
| Thema                                                                      |
| Zeichnungserstellung                                                       |
| Niveau                                                                     |
| Zwischenstufe                                                              |
| Zeit zum Abschluss                                                         |
| 60 Minuten                                                                 |
| Autoren                                                                    |
| [wandererfan](http://freecadweb.org/wiki/index.php?title=User:wandererfan) |
| FreeCAD-Version                                                            |
| 0.17                                                                       |
| Beispieldateien                                                            |
| _None_                                                                     |
| Siehe auch                                                                 |
| _None_                                                                     |
|                                                                            |

## Einleitung

Diese Anleitung zeigt die Erstellung einer [SVG](/SVG/de "SVG/de")-Datei, die als [Vorlage](/TechDraw_Templates/de "TechDraw Templates/de") im Hintergrund von Zeichnungsblättern des Arbeitsbereichs [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de") verwendet werden kann.

Dieses Tutorial setzt voraus, dass du einigermaßen vertraut bist mit [Inkscape](https://de.wikipedia.org/wiki/Inkscape) und [SVG](/SVG/de "SVG/de") sowie FreeCAD und dem Arbeitsbereich [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de").

Wir erstellen eine einfache Vorlage für ein Zeichnungsblatt in dem Format "US Letter" im Querformat.

Eine Kopie des Ergebnisses dieses Tutoriums findet man unter

```
$INSTALL_DIR/Mod/TechDraw/Templates/HowToExample.svg

```

Wobei `$INSTALL_DIR` das Verzeichnis ist, wo FreeCAD installiert wurde, z.B.

```
/usr/share/freecad/Mod/TechDraw/Templates/HowToExample.svg

```

## Basisdokument erzeugen

1. Ein neues Dokument in Inkscape öffnen

2. In den Dokumenteneigenschaften

- Das Format (Page Size) "US Letter" oder "A4" und die Ausrichtung (Orientation) "Querformat" (Landscape) auswählen.
- Die Vorgabe für die Maßeinheit (Unit) auf "mm" setzen und die Blattgröße auf die Werte "279,4" für die Breite (width) und "215,9" für die Höhe (height). Für DIN-A4 würde entsprechend "210" und "297" eingegeben.

![](/src/assets/images/InkDocProp.png)

Inkscape: Dokument mit Blattgröße und Ausrichtung

3. Mit dem XML-Editor dem `<svg>`-Element eine "freecad"-Namensraum-Angabe hinzufügen.

- 0.20 und davor: `xmlns:freecad="http://www.freecadweb.org/wiki/index.php?title=Svg_Namespace"`

: Dabei ist zu beachten, dass editierbare Texte _nicht_ funktionieren, wenn "https://..." verwendet wird, auch wenn das Wiki heutzutage über https erreicht wird.

- 0.21 und neuer: `xmlns:freecad="https://www.freecad.org/wiki/index.php?title=Svg_Namespace"`

Da SVG ein von Menschen lesbares Format ist, könnte die obige Zeile auch mit einem Texteditor in die Datei eingeben werden.

![](/src/assets/images/InkXMLNameSpace.png)

Inkscape: XML-Editor, der die "freecad"-Namensraum-Angabe zum Element <svg> hinzufügt

## Eine Zeichnungsvorlage erstellen

4. Umrisse, Feldindizes, Mittellinien und andere Geometrie zeichnen.

5. Kästen und Linien für das Schriftfeld zeichnen.

6. Einen statischen Text hinzufügen und positionieren.

7. Einen editierbaren Text hinzufügen und positionieren.

8. Nun ist das Kunstwerk fertig, und sollte in etwa so aussehen:

![](/src/assets/images/InkFinishedArt.png)

Inkscape: Vorläufiges Layout der Vorlage

## Editierbare Felder erstellen

9. Mit dem XML-Editor jedes Textelement `<text>` durch hinzufügen von `freecad:editable` als editierbar kennzeichnen.

- Für jeden editierbaren Text einen sinnvollen Namen vergeben.

![](/src/assets/images/InkXMLeditableTag.png)

Inkscape: XML-Editor beim Hinzufügen der "freecad:editable" Eigenschaft zum gewünschten <text>-Element

## SVG-Zeichnungsgröße anpassen

10. Mit dem XML-Editor das Attribut `viewBox` so anzupassen, dass es der Blattgröße in Millimetern entspricht.

- Das Format beinhaltet vier Werte `"0 0 width height"`

![](/src/assets/images/InkXMLviewBox.png)

Inkscape: XML-Editor beim Anpassen des Anzeigebereiches (viewBox) Passend zur Blattgröße in Millimetern

11. Die Vorlage wird nun viel größer als gewünscht erscheinen.

![](/src/assets/images/InkMuchTooBig.png)

Inkscape: Das vorläufige Layout der Vorlage überschreitet die Blattgröße

12. Sie muss verkleinert werden.

- **Bearbeiten → Alles auf allen Layern auswählen** oder mit Rechteckauswahl alles auswählen.
- Die Spinboxen W: und H: an die Größe des Kunstwerks in Millimetern anpassen.
- Sie werden auf die Seitengröße abzüglich vorgesehener Ränder eingestellt, z. B. W: 250 und H: 200.

13. "Ausrichten und Verteilen" oder die Spinboxen X: und Y: verwenden, um das Kunstwerk bei Bedarf innerhalb der Grenzen der Seite zu positionieren.

14. Die Vorlage sollte nun so wie die Abbildung oben aussehen.

## Transformationen aus dem SVG-Dokument entfernen

15. Mit Shift+Strg+g wird sichergestellt, dass alle editierbaren Textelemente nicht gruppiert sind.

16. Wähle alles auf Deiner Seite **Bearbeiten → Alles auswählen**, und dann **Bearbeiten → Kopieren** (Ctrl+c).

17. Lösche dann die aktuelle Schicht mit **Ebene → aktuelle schicht löschen**

: Hinweis: Wenn du die Ebene bereits gelöscht hast (in deinem Lagen Paneel ist keine Lage aufgeführt), ist dieser Schritt nicht erforderlich. In diesem Fall solltest du alle (Ctrl+a), die Auswahl ausschneiden (Ctrl+x) und mit dem Befehl im nächsten Schritt einfügen.

18. Füge dann ein **Bearbeiten → Einfügen an Ort und Stelle**.

: **Hinweis:** Dieser Befehl verhindert, dass die Textpositionen in Transformations Tags gespeichert werden. Es ist wichtig, dass du nicht den normalen Einfügebefehl verwendest!

19. Deine Vorlagen sollte nun korrekt aussehen und keine ungewünschten Transformationen enthalten.

20. Speichere Deine Vorlage. Wenn Du Inkscape benutzt, speichere sie vorzugsweise als **Plain SVG**, da FreeCAD nur mit Elementen der SVG-1.1-Spezifikation umgehen kann. **Plain SVG** entfernt alle inkscape-spezifischen XML-Anweisungen.

21. Probiere sie in FreeCAD und dem [TechDraw-Arbeitsbereich](/TechDraw_Workbench/de "TechDraw Workbench/de") mit [Seite mittels Vorlage einfügen](/TechDraw_PageTemplate/de "TechDraw PageTemplate/de") aus.

![](/src/assets/images/FCTemplateHow.png)

FreeCAD: fertige Vorlage mit änderbarem Textfeld während der Änderung

## Anmerkungen

Es sollten keine Layer in Inkscape verwendet werden, solange man die Erstellung ohne sie nicht beherrscht. Layer und Gruppen können automatisch unerwünschte Transformationen in die [SVG](/SVG/de "SVG/de")-Datei einfügen.

Stelle als letzten Schritt vor der Verwendung deiner neuen Vorlage sicher, daß alle Umwandlungsklauseln aus dem Svg Code entfernt werden. Umwandlungsklauseln **werden Probleme verursachen**.

Siehe eine Stackoverflow Debatte auf [Entfernen von Transformationsklauseln in SVG Dateien](https://stackoverflow.com/questions/13329125/removing-transforms-in-svg-files).

Wenn du die grünen Kästchen für deine bearbeitbaren Texte nicht siehst, ist möglicherweise etwas mit deinem Dokumentenmaßstab nicht in Ordnung. Öffne dein Datei erneut in Inkscape und bestätige, dass die Werte des AnsichtsKasten und die Größen übereinstimmen.

Wenn der Text in FreeCAD versetzt dargestellt wird, müssen eventuell die `xml:space="preserve"`-Attribute aus der SVG-Datei entfernt werden. Siehe: <https://www.forum.freecadweb.org/viewtopic.php?t=50897>.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_TemplateHowTo/de&oldid=1499042>"
