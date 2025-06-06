---
title: WikiRoboter
---
:::caution
Roboter sind von Natur aus gefährlich, da sie automatisch viel Schaden anrichten können. Verwende sie mit äußerster Vorsicht!
:::

## Übersicht

Wiederkehrende Aufgaben können mit Hilfe von Robotern bzw. Bots automatisiert werden, d.h. mit Softwareprogrammen, die das Wiki eigenständig arbeiten.

Die natürlichen und am häufigsten verwendeten Roboter für Wiki-Seiten werden von MediaWiki unter dem Paketnamen Pywikibot zur Verfügung gestellt. Siehe [Handbuch:Pywikibot](http://www.mediawiki.org/wiki/Manual:Pywikibot/de) für die vollständigen Informationen.

Kurz gesagt, Pywikibot ist eine Sammlung von Python-Skripten, die die native Wiki-API verwenden können, um auf Wiki-Seiten zu agieren. Um die API-Liste für das FreeCAD-Wiki zu sehen, besuche <http://www.freecadweb.org/wiki/api.php>

Um Pywikibot verwenden zu können, musst du dies tun:

1. Das Pywikibot-Paket installieren
2. Pywikibot so konfigurieren, dass er im FreeCAD-Wiki funktioniert
3. Die Skripte starten, die für die anstehende Aufgabe benötigt werden.

Es gibt eine Fülle von Informationen über die Installation, Konfiguration und Benutzung von Pywikibot. Bitte beachte jedoch, dass diese Informationen zwar nützlich, aber auch irreführend sein können, da sie Anweisungen vermischen, die sich auf zwei verschiedene Pywikibot-Codebasen und verschiedene Versionen der Pywikibot-Skriptsammlung beziehen.

Im Folgenden findest du die grundlegenden Anweisungen zum Einrichten und Verwenden von Pywikibot im FreeCAD-Wiki. Damit kannst du die gängigsten Aufgaben durchführen. Für fortgeschrittene Nutzung siehe [Handbuch:Pywikibot](http://www.mediawiki.org/wiki/Manual:Pywikibot) und den Python-Quellcode.

## Installation

Gehe zu <http://tools.wmflabs.org/pywikibot/> und lade package/pywikipedia/core.zip herunter (das Projekt steht auch unter github, gerrit, usw., aber dies ist ein einfacher Weg, um ein vollständig in sich geschlossenes Paket zu erhalten).

Entpacke den Inhalt in deinem bevorzugten Verzeichnis.

Wenn du die Bibliotheken nicht in deine Python-Bibliotheken installieren willst, bist du fertig (wenn du sie immer noch installieren willst, überprüfe die Datei INSTALL im Basisverzeichnis).

Pywikibot funktioniert mit Python 2.6 und 2.7 ohne Probleme. Python 3 ~~wurde bisher nicht mit FreeCAD-wiki getestet~~ funktioniert ebenfalls.

## Konfiguration

Du musst den folgenden Python-Code als Datei mit dem Namen user-config.py in dem Basisverzeichnis speichern, in das du entpackt hast package/pywikipedia/core.zip (zur Verdeutlichung: im gleichen Verzeichnis, in dem sich bereits eine Datei namens user-config.py.sample befindet).

```
# -*- coding: cp437  -*-
family = 'freecadwiki'
mylang = 'en'
usernames['freecadwiki']['en'] = u'<<yourWikiUserName>>'
#usernames['freecadwiki']['freecadwiki'] = u'<<yourWikiUserName>>'
console_encoding = 'cp437'

```

Im obigen Code:

* *<<yourWikiUserName>>* durch deinen Wiki-Benutzernamen ersetzen.
* *cp437* durch dein *console\_encoding* ersetzen. Um dein "console encoding" unter Windows bzw. Linux herauszufinden, starte den Python-Interpreter und gib import sys gefolgt von print sys.stdout.encoding ein. Python wird dein console\_encoding auf dem Bildschirm anzeigen.

Dann musst du den folgenden Python-Code in einer Datei unter dem Namen freecadwiki\_family.py im Unterverzeichnis /pywikibot/families (zusammen mit den anderen family\_xxx.py Dateien) speichern.

```
# -*- coding: utf-8  -*-

__version__ = '$Id: 7f3891c3bbbfbd69c0b005de953514803d783d92 $'

from pywikibot import family

# The MediaWiki family
# user-config.py: usernames['mediawiki']['mediawiki'] = 'User name'
class Family(family.WikimediaFamily):
    def __init__(self):
        super(Family, self).__init__()
        self.name = 'freecadwiki'

        self.langs = {
            'en': 'www.freecadweb.org',
        }

    def scriptpath(self, code):
        return 'wiki'

    def path(self, code):
        return '/index.php' #The path of index.php, look at your wiki address. 
	 
    def apipath(self, code):
        return '/api.php' #The path of api.php

    def version(self, code):
        # Replace with the actual version being run on your wiki
        return '1.20.3'

    def protocol(self, code):
        """
        Can be overridden to return 'https'. Other protocols are not supported.
        """
        return 'http'
        #return 'https' # My server uses https

```

## Anwendung

Du kannst nun die Pywikibot-Skripte ausführen. Die Skripte selbst sind im /scripts-Unterverzeichnis enthalten.

Um die Skripte auszuführen, öffne eine Shell und gehe zum Basisverzeichnis (der Installation, NICHT des /scipts-Unterverzeichnisses) und gib ein

python pwb.py <<scriptname>>.py -<<parameter>>

wo du natürlich "<<scriptname>>" durch den Namen des Skripts ersetzt, das du ausführen willst und "<<parameter>" durch den/die erforderlichen Parameter für das Skript.

Für eine Beschreibung von Anwendung und Parametern für ein beliebiges Skript benutze einfach den Parameter "-help". Um bspw. eine Beschreibung für das replace.py-Skript zu erhalten, tippe

python pwb.py replace.py -help

Es gibt einen weiteren sehr hilfreichen Parameter, der für alle diese Skripte gültig ist, genannt "-simulate", der es ermöglicht, Befehle auszuprobieren, ohne das Wiki zu verändern. Benutze ihn, bevor du 'live' gehst.

## Beispiele

Dieser Befehl loggt sich in das Wiki ein

pwb.py login.py

Dieser Befehl druckt eine Liste aller Seiten, die einen Verweis auf SourceForge enthalten

pwb.py listpages.py -weblink:sourceforge.net

Dieser Befehl ersetzt alle Verweise auf das alte SourceForge-Forum durch einen Verweis auf das neue, auf freecad.org bereitgestellte Forum

pwb.py replace.py -weblink:sourceforge.net/apps/phpbb/free-cad "sourceforge.net/apps/phpbb/free-cad" "forum.freecad.org"

Dieser Befehl druckt eine Liste aller Seiten, die das Wort "PartDesign" enthalten, beginnend mit der Seite "2d Drafting Module" und weiter alphabetisch geordnet

pwb.py listpages.py -start:"2d Drafting Module" -grep:PartDesign

Dieser Befehl ersetzt alle sicheren Verweise auf das alte SourceForge-Forum durch einen Verweis auf das neue, auf freecadweb.org bereitgestellte Forum auf den übersetzten Seiten.

pwb.py replace.py -start:Translations:! "<https://sourceforge.net/apps/phpbb/free-cad>" "<http://forum.freecad.org>"

## Befehle mit Bezug zum FreeCAD-Wiki

Zählt alle Seiten, in denen eine bestimmte Wiki-Vorlage verwendet wird

python3 pwb.py templatecount -count GuiCommand

Listet alle Seiten auf, in denen eine bestimmte Wiki-Vorlage verwendet wird

python3 pwb.py templatecount -list GuiCommand

Ersetzt eine Zeichenfolge auf allen Seiten, die in der Kategorie Arch aufgeführt sind

python3 pwb.py replace.py -cat:Arch

Retrieved from "<http://wiki.freecad.org/index.php?title=WikiRobots/de&oldid=1431294>"