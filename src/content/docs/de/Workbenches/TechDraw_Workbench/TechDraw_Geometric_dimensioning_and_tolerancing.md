---
title: TechDraw Form- und Lagetolerierung
---

## Konzept

Der Hauptzweck einer technischen Zeichnung besteht darin, dass andere verstehen, was der Konstrukteur mit welchen Toleranzen entworfen hat UND wie der Entwurf zu fertigen ist. Da die meisten Teile zu Baugruppen passen müssen, sind auch die geometrischen Beziehungen zu anderen Teilen wichtig. Um dies zu erreichen, wurde das System der [Form- und Lagetoleranz](https://de.wikipedia.org/wiki/Form-_und_Lagetoleranz) (GD&T engl. Geometric Dimensioning and Tolerancing) entwickelt.

Nimm zum Beispiel dieses Teil:

![](/images/TechDraw_Hole-Position-Example.png)

In der Anwendung soll eine Achse durch die zwei Löcher des Bauteils gelegt werden. Das heißt, dass wir die folgenden Dinge festlegen müssen:

- Den Durchmesser der Löcher und ihre Lage.
- Dass die Löcher entlang einer bestimmten Achse verlaufen, die nicht senkrecht auf der XZ-Basisebene steht.
- Dass das Achsenbauteil eine bestimmte Geradheit aufweisen muss.

Die Geradheit ist wichtig, da eine gebogene Achse nicht durch die Löcher passen würde. Die Ausrichtung des Lochs ist wichtig, da das Bohren der Löcher an der vorgesehenen Stelle ohne Berücksichtigung der Achse zu Bohrungen führen würde, durch die die Achse nicht passt. Es reicht also nicht nur den Durchmesser und die Position festzulegen. Der erste Punkt entspricht der "klassischen" Bemaßung, während es sich bei den beiden anderen um geometrische Informationen handelt; damit kommt die Form- und Lagetolerierung ins Spiel. Das Beispiel zeigt auch deutlich, dass Form- und Lagetoleranzen entscheidend dazu beitragen, dass sich Einzelteile gut zu Baugruppen zusammenfügen lassen.

If you are not familiar with the concept of GD&T, we highly recommend to learn about it now. For example a quick introduction is given in [this video](https://www.youtube.com/watch?v=P5GT9ZSRYl0). For more like the concept of the "maximum material condition", have a look at [this video](https://www.youtube.com/watch?v=UXZjTb3ZUQI). For details to all sorts of GD&T features, look around in the Internet. For example [this YouTube channel](https://www.youtube.com/c/Gdandtbasics/videos) provides some good explanations.

Form- und Lagetolerierung wird in den Normen [ISO 1101](http://geo-dim-tol.ir/files/iso1101.pdf) und [ASME Y14.5](http://www.sharifcadcam.ir/uploaded/2e22f9ef-dfc5-47bc-a126-cc51e9686c4f.pdf) festgelegt.

TechDraws Möglichkeiten zur Einhaltung der gängigen Normen zur Form- und Lagetolerierung sind begrenzt (soweit es FreeCAD 0.20 betrifft), aber es lässt sich schon viel erreichen. Diese Wiki-Seite erklärt, was implementiert ist und welche Tricks für nicht implementierte Funktionen angewendet werden können. **Hinweis:** Diese Wiki-Seite dient nicht zur Erklärung der Form- und Lagetolerierung!

## Bemaßung

TechDraw enthält mehrere Werkzeuge zum Erstellen unterschiedlicher Maße. Bitte bei den [unterschiedlichen Maßen](/TechDraw_Workbench/de#Maße "TechDraw Workbench/de") nachsehen, wie sie erstellt und bearbeitet werden.

### Formatierung

Die Standardschrift für neue Maßeinträge wird in den [Einstellungen](/TechDraw_Preferences/de#Beschriftungen "TechDraw Preferences/de") unter **Anmerkungsschriftart** festgelegt. Die Standardschrifthöhe wird in den [Einstellungen](/TechDraw_Preferences/de#Maßeinträge "TechDraw Preferences/de") unter **Anmerkungsschrifthöhe** festgelegt.  
**Hinweis:** Es wird empfohlen eine Schriftart zu verwenden, die ein Minus-Zeichen enthält, das genau so breit ist, wie das Plus-Zeichen, da so sichergestellt wird, dass Toleranzen, wie in den Normen für Form- und Lagetolerierung vorgegeben, dargestellt werden. So eine Schrift, die Bestandteil aller FreeCAD-Installationen ist, ist z.B. _osifont_.

Das Standardformat für neue Maßzahlen hängt von den [Einstellungen](/TechDraw_Preferences/de#Maßeinträge "TechDraw Preferences/de") unter **Globale Dezimalstellen verwenden** und **Dezimalstellen ändern** ab. Dies legt die Anzahl von Nachkommastellen fest; die Maßzahl bleibt in jedem Falle eine Fließkommazahl. Soll sie z.B. auf zwei Nachkommastellen festgelegt werden, heißt die Formatangabe "%.2f" (Fließkommazahl mit 2 Nachkommastellen).

Das Zahlenformat kann angepasst werden:

1. Auf das Maß in der Zeichnung oder auf das Dimension-Objekt in der Baumansicht doppelklicken.
2. Der Dialog Maßeintrag wird geöffnet und enthält im Feld **Formatspezifikation** die Formatangabe, die nach Bedarf angepasst werden kann.

Die Syntax der Formatangabe wird [hier erklärt](https://www.cplusplus.com/reference/cstdio/printf/) (engl.). Man kann auch [dieses Online-Tool](https://onlinetexttools.com/printf-text) verwenden, um zu sehen, welche Formatangabe Zahlen formatiert.

**Examples:**

- You use 2 decimals but for an angle you want to have only one decimal use the format specifier _%.1f_.
- You use 2 decimals but don't like that trailing zeroes are printed (you prefer _4_ instead of _4.00_). Then use this format specifier: _%g_. The 'g' will use the shortest possible output and thus it omits trailing zeroes. Moreover it will automatically switch to [scientific notation](https://en.wikipedia.org/wiki/Scientific_notation#E_notation) if necessary.

With the property Daten**Inverted** you can make length dimensions negative and flip angles from the range 0 - 180° to the the reflex range 180° - 360°.

Wird die Option **Theoretisch genau** im Dialog Maßeintrag aktiviert, wird das Maß mit einem rechteckigen Rahmen umgeben, um es als theoretisch genau zu kennzeichnen.

You can use your own text instead of a formatted number by setting the option **Arbitrary Text** in the dimension dialog. Then the content of the field **Format Specifier** will be printed as dimension.

With the properties Daten**X** and Daten**Y** you can change the horizontal and vertical position of the dimension text relative to the view. Alternatively you can change the position by dragging the dimension number or text.

### Toleranzen

#### Erstellen

1. Ein [Maß](/TechDraw_Workbench/de#Maße "TechDraw Workbench/de") in der Zeichnung eintragen.
2. Entweder das Maß in der Zeichnung oder das Dimension-Objekt in der Baumansicht doppelklicken.
3. In dem geöffneten Dialog Maßeintrag wird unter Oberes Abmaß der Wert angegeben, um den eine Abmessung das (Nenn-) Maß überschreiten darf.  
   Dies ergibt eine symmetrische Toleranz, wie diese: ![](/images/TechDraw_equal-tolerance.png)
4. Für unterschiedliche Abmaße wird unter Unteres Abmaß der Wert angegeben, um den eine Abmessung das (Nenn-) Maß unterschreiten darf und die Option "Symmetrische Toleranz" wird deaktiviert.  
   Dies ergibt eine Toleranz mit unterschiedlichen Abmaßen, wie diese: ![](/images/TechDraw_Non-equal-tolerance.png)

#### Entfernen

Um eine Toleranzangabe zu entfernen, werden sowohl "Oberes Abmaß" als auch "Unteres Abmaß" auf Null gesetzt

### Formatierung

The default font for new tolerances is the same than for dimensions. The default font size is specified by the [preferences](/TechDraw_Preferences#Dimensions_2 "TechDraw Preferences") setting **Tolerance Text Scale**. This scale is a factor of the font size used for the dimension.

The default number format for new tolerances is by default the same format than for the dimension. It can be changed in the dimension dialog.

You can also use your own text instead of a formatted number by checking the option **Arbitrary Tolerance Text** in the dimension dialog. Then the content of **Tolerance Format Specifier** will be used as tolerance text.

## Geometrische Tolerierung

Geometrische Toleranzen werden mit der Funktion [Hinweisfeld einfügen](/TechDraw_Balloon/de "TechDraw Balloon/de") von TechDraw erstellt. Da die meisten Einträge einen Rahmen erfordern, ist es hilfreich, in den [TechDraw-Einstellungen](/TechDraw_Preferences/de#Anmerkung "TechDraw Preferences/de") die **Form des Hinweisfeldes** auf **Rechteck** zu ändern.

### Toleranzrahmen

![](/images/TechDraw_GD%26T-Toleranced-rod.png)

Beispiel einer tolerierten Stange. (Der Gesamtlauf beinhaltet schon die Geradheit; sie ist hier nur als Beispiel hinzugefügt.)

Als Indikator für Form- und Lagetoleranzen wird der Toleranzrahmen verwendet, der mit dem Befehl [Hinweisfeld einfügen](/TechDraw_Balloon/de "TechDraw Balloon/de") von TechDraw erstellt wird:

- Wurde ein Hinweisfeld hinzugefügt, dessen Form kein Rechteck ist, kann mit einem Doppelklick in der Baumansicht der Dialog Hinweiskreis geöffnet und darin unter **Rahmenform** der Eintrag **Rechteck** ausgewählt werden.
- Das zugehörige Unicode-Zeichen für das zu beschreibende Merkmal im Eingabefeld **Text** hinzufügen. (Es kann aus der unter [Symbolreferenz](#Symbolreferenz) befindlichen Tabelle kopiert werden oder man verwendet [TechDraw ErgänzungFormatierungAnpassen](/TechDraw_ExtensionCustomizeFormat/de "TechDraw ExtensionCustomizeFormat/de").)
- Wird das Zeichen '|' im Eingabefeld **Text** eingegeben, wird ein neues Feld im Toleranzrahmen begonnen.

Es gibt keine Regel, die festlegt, ob oder wie ein Toleranzrahmen mit einer Hinweislinie verbunden wird; dafür kann man:

- die Eigenschaft **Hinweislinie sichtbar** im Dialog Hinweisfeld auf **Falsch** setzen.
- das **Endsymbol** auf **Gefüllte Pfeilspitze** oder **Punkt** setzen.

The example at the right side shows the two possible tolerance indicator layouts.

### Bezüge

Datums in the GD&T sense of the meaning are surfaces your tolerance is relative to. They are created as Balloon:

- after adding a Balloon, set **End Symbol** to **Filled Triangle** in the balloon dialog.
- if the bubble shape is not already a frame, set **Bubble Shape** to **Rectangle**.
- drag the bubble with the mouse so that the triangle points away from the datum surface.
- since it is common to have a straight line for datums unless the datum surface is not perpendicular to X or Y, assure that either the properties Daten**X** and Daten**Origin X** or Daten**Y** and Daten**Origin Y** are equal to get a straight Balloon line.

![](/images/TechDraw_GD%26T-Datum.png)

Beispiel eines Bezuges auf der Zeichnung

### Symbolreferenz

Zum Einzetzen von Form- und Lagesymbolen enthält TechDraw das Werkzeug [Formatierung anpassen](/TechDraw_ExtensionCustomizeFormat/de "TechDraw ExtensionCustomizeFormat/de").

As reference, here are lists of characters to be used for geometric tolerancing:

Referenzkarte zur Form- und Lagetolerierung (entsprechend Tabelle 2 der [ISO 1101-2017](http://geo-dim-tol.ir/files/iso1101.pdf))

| Art des Merkmals                                                                      | Geometrische Eigenschaft       | Symbol | [Unicode](https://en.wikipedia.org/wiki/Unicode)-Zeichen | Bezug erforderlich | Hinweise                                                                                                                                                              |
| ------------------------------------------------------------------------------------- | ------------------------------ | ------ | -------------------------------------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Form                                                                                  | Geradheit                      |        | ⏤ U+23E4                                                 | nein               |                                                                                                                                                                       |
| Form                                                                                  | Ebenheit                       |        | ⏥ U+23E5                                                 | nein               |                                                                                                                                                                       |
| Form                                                                                  | Rundheit                       |        | ○ U+25CB                                                 | nein               |                                                                                                                                                                       |
| Form                                                                                  | Zylinderform                   |        | ⌭ U+232D                                                 | nein               |                                                                                                                                                                       |
| Form / Richtung / Ort                                                                 | Profil einer beliebigen Linie  |        | ⌒ U+2312                                                 | ja                 | Kein Bezug nötig bei ausschließlicher Formtolerierung                                                                                                                 |
| Form / Richtung / Ort                                                                 | Profil einer beliebigen Fläche |        | ⌓ U+2313                                                 | Ja                 | Kein Bezug nötig bei ausschließlicher Formtolerierung                                                                                                                 |
| Richtung                                                                              | Parallelität                   |        | ∥ U+2225                                                 | ja                 |                                                                                                                                                                       |
| Richtung                                                                              | Rechtwinkligkeit               |        | ⟂ U+27C2                                                 | ja                 |                                                                                                                                                                       |
| Richtung                                                                              | Neigung                        |        | ∠ U+2220                                                 | ja                 |                                                                                                                                                                       |
| Ort                                                                                   | Position                       |        | ⌖ U+2316                                                 | ja                 | Kein Bezug nötig bei Tolerierung nach Norm ISO 5458.                                                                                                                  |
| Ort                                                                                   | Konzentrizität / Koaxialität   |        | ◎ U+25CE                                                 | ja                 | Heißt Konzentrizität im Zusammenhang mit Mittelpunkten und Koaxialität im Zusammenhang mit Mittlellinien. In der Norm ASME Y14.5 seit der Ausgabe von 2018 entfallen. |
| Ort                                                                                   | Symmetrie                      |        | ⌯ U+232F                                                 | ja                 | In der Norm ASME Y14.5 seit der Ausgabe von 2018 entfallen.                                                                                                           |
| [Lauf](<https://de.wikipedia.org/wiki/Toleranz_(Technik)#Spezifische_Lagetoleranzen>) | Rundlauf / Planlauf            |        | ↗ U+2197                                                 | ja                 |                                                                                                                                                                       |
| [Lauf](<https://de.wikipedia.org/wiki/Toleranz_(Technik)#Spezifische_Lagetoleranzen>) | Gesamtlauf                     |        | ⌰ U+2330                                                 | ja                 |                                                                                                                                                                       |

Symbols used in the feature control frame to specify a feature's description, tolerance, modifier and datum references

| Symbol | [Unicode](https://en.wikipedia.org/wiki/Unicode) character | Modifier                         | Notes                                                                                                                                                                 |
| ------ | ---------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|        | Ⓕ U+24BB                                                   | Free state                       | Applies only when part is otherwise restrained                                                                                                                        |
|        | Ⓛ U+24C1                                                   | Least material condition (LMC)   | Useful to maintain minimum wall thickness                                                                                                                             |
|        | Ⓜ U+24C2                                                   | Maximum material condition (MMC) | Provides bonus tolerance only for a feature of size                                                                                                                   |
|        | Ⓟ U+24C5                                                   | Projected tolerance zone         | Useful on threaded holes for long studs                                                                                                                               |
|        | Ⓢ U+24C8                                                   | Regardless of feature size (RFS) | Not part of the 1994 version. See para. A5, bullet 3. Also para. D3. Also, Figure 3-8.                                                                                |
|        | Ⓣ U+24C9                                                   | Tangent plane                    | Useful for interfaces where form is not required                                                                                                                      |
|        | —                                                          | Continuous feature               | Identifies a group of features that should be treated geometrically as a single feature                                                                               |
|        | —                                                          | Statistical tolerance            | Appears in the 1994 version of the standard, assumes appropriate statistical process control.                                                                         |
|        | Ⓤ U+24CA                                                   | Unequal bilateral                | Added in the 2009 version of the standard, and refers to unequal profile distribution. Number after this symbol indicates tolerance in the "plus material" direction. |

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Geometric_dimensioning_and_tolerancing/de&oldid=1311871>"
