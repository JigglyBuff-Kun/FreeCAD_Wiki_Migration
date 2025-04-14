---
title: Std AnsichtAufnehmen
---

|                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Std AnsichtAufnehmen                                                                                                                                                                                                                                                                                               |
| Menüeintrag                                                                                                                                                                                                                                                                                                        |
| Werkzeuge → Bildinhalt speichern...                                                                                                                                                                                                                                                                                |
| Arbeitsbereich                                                                                                                                                                                                                                                                                                     |
| Alle                                                                                                                                                                                                                                                                                                               |
| Standardtastenkürzel                                                                                                                                                                                                                                                                                               |
| _Keiner_                                                                                                                                                                                                                                                                                                           |
| Eingeführt in Version                                                                                                                                                                                                                                                                                              |
| -                                                                                                                                                                                                                                                                                                                  |
| Siehe auch                                                                                                                                                                                                                                                                                                         |
| [Std Drucken](/Std_Print/de "Std Print/de"), [Std PDF exportieren](/Std_PrintPdf/de "Std PrintPdf/de"), [Makro Copy3DViewToClipboard](/Macro_Copy3DViewToClipboard "Macro Copy3DViewToClipboard"), [Makro Screen Wiki](/Macro_Screen_Wiki/de "Macro Screen Wiki/de"), [Makro Snip](/Macro_Snip/de "Macro Snip/de") |
|                                                                                                                                                                                                                                                                                                                    |

## Beschreibung

Der **Std AnsichtAufnehmen** Befehl öffnet ein Dialogfenster, um eine Bilddatei, ein Bildschirmfoto, von der aktiven [3D-Ansicht](/3D_view/de "3D view/de") zu erstellen.

![](/images/Save_picture.png)

Das Dialogfenster Bildinhalt speichern nach Drücken der Schaltfläche Erweitert

## Anwendung

1. Den Menüeintrag **Werkzeuge → ![](/images/Std_ViewScreenShot.svg) Bild speichern...** auswählen.
2. Das Dialogfenster **Bildinhalt speichern** wird geöffnet.
3. Wahlweise die Schaltfläche Erweitert drücken, um ein zusätzlichen Bereich im Dialogfenster einzublenden. Für weitere Informationen siehe [Optionen](#Optionen).
4. Wahlweise den richtigen Ordner suchen.
5. Einen Dateinamen eingeben und den Dateityp auswählen.
6. Die Schaltfläche Speichern drücken, um die Bilddatei zu erstellen und das Dialogfenster zu schließen.

## Optionen

#### Bildabmessungen

1. Wähle eine Standardgröße aus der Auswahlliste **Standardauflösungen**. Oder gib **Breite** und **Höhe** für eine benutzerdefinierte Größe an.
2. Klicke optional auf eine **Seitenverhältnis**-Schaltfläche , um das Verhältnis von Breite zu Höhe des Bildes festzulegen. Wenn das Eingabefeld **Breite** den Fokus hat, ändert sich die Höhe des Bildes und umgekehrt.

### Bildeigenschaften

1. - Wähle eine Option aus der **Hintergrund** Aufklappliste:
   - `Aktuell` Diese Option verwendet tWerthe Hintergrund der 3D Ansicht.
   - `Weiß`
   - `Schwarz`
   - `Durchsichtig` Nicht alle Bildformate unterstützen Transparenz.
2. Wähle eine Option aus der **Erstellungsmethode** Aufklappliste:
   - `Offscreen (Neu)` Dies ist die Standardmethode. Diese Methode unterstützt [anti-aliasing](https://en.wikipedia.org/wiki/Multisample_anti-aliasing). _Technische Informationen: Die wichtigsten Klassen für diese Methode sind Qt's QOffscreenSurface und QOpenGLFramebufferObject._
   - `Offscreen (Alt)` Diese Methode funktioniert auf vielen modernen Linux Systemen nicht, da sie sich auf den Grafiktreiber verlässt. Diese Methode unterstützt kein Anti-Aliasing. _Technische Informationen: Dies ist eine echte Offscreen Rendering Methode, die nur Funktionen aus der Coin3d Bibliothek verwendet._
   - `Bildpuffer (benutzerdefiniert)` Diese Methode unterstützt Anti-Aliasing. _Technische Informationen: Wenn Anti-Aliasing ausgeschaltet ist, liest diese Methode das Bild direkt aus dem Grafik Renderer, ansonsten rendert sie in einen Bildpuffer und holt sich das Bild von dort. Der Schlüsselteil dieser Methode ist Qt's QOpenGLFramebufferObject Klasse._
   - `Bildpuffer (wie bestehend)` Diese Methode verwendet die gleichen Techniken wie **Bildpuffer (benutzerdefiniert)**. Sie unterstützt auch Anti-Aliasing, hat aber einige Einschränkungen in Bezug auf benutzerdefinierte Größen und verwendet immer den aktuellen Hintergrund der 3D Ansicht.

### Kommentar zum Bild

1. Die Option **MIBA-Informationen einfügen** auswählen, um [MIBA](http://juergen-riegel.net/Miba/)-Informationen in die Datei einzufügen. Nicht alle Bildformate unterstützen dies.
2. Oder die Option **Kommentar einfügen** auswählen und einen Kommentar in das Textfeld eingeben, um einen Kommentar in die Datei einzubetten. Dies wird nicht von allen Bildformaten unterstützt.
3. Das Kontrollkästchen **Wasserzeichen einfügen** aktivieren, um ein Wasserzeichen hinzuzufügen. Das Wasserzeichen wird in der unteren linken Ecke des Bildes platziert und besteht aus dem FreeCAD-Logo und dem Namen über der FreeCAD-Haupt-URL: [www.freecad.org](http://www.freecad.org).

## Hinweise

- Die Anzahl der verfügbaren Bilddateiformate kann je nach Betriebssystem variieren.
- Einige OpenGL-Treiber lassen keine Renderings über einer bestimmten Maximalgröße zu.

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de").

- Der Hintergrund der 3D-Ansicht kann in den Voreinstellungen geändert werden: **Bearbeiten → Einstellungen... → Anzeige → Farben → Hintergrundfarbe**.
- Um das Anti-Aliasing der 3D-Ansicht zu ändern: **Bearbeiten → Einstellungen... → Anzeige → 3D-Viewer → Rendern → Kantenglättung**.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Es ist möglich, Bildschirmfotos mit Python-Code zu erstellen.

```
Gui.ActiveDocument.ActiveView.saveImage("D:/temp/test.png", 1656, 783, "Current")

```

Dieses Skript speichert eine Reihe von Bildschirmfotos in verschiedenen Größen und aus verschiedenen Richtungen. Der Kameratyp, orthografisch oder perspektivisch, wird ebenfalls geändert.

```
import FreeCADGui as Gui
import Part

out_dir = "D:/temp/"
name = "Blade"
view = Gui.ActiveDocument.ActiveView

# Create images with different Views, Cameras and sizes
for p in ["PerspectiveCamera", "OrthographicCamera"]:
    Gui.SendMsgToActiveView(p)
    for f in ["ViewAxo", "ViewFront", "ViewTop"]:
        Gui.SendMsgToActiveView(f)
        for x, y in [[500, 500], [1000, 3000], [3000, 1000], [3000, 3000], [8000, 8000]]:
            view.saveImage(out_dir + name + "_" + p + "_" + f + "_" + str(x) + "_" + str(y) + ".jpg", x, y, "White")
            view.saveImage(out_dir + name + "_" + p + "_" + f + "_" + str(x) + "_" + str(y) + ".png", x, y, "Transparent")

# Close active document
App.closeDocument(App.ActiveDocument.Name)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewScreenShot/de&oldid=1500152>"
