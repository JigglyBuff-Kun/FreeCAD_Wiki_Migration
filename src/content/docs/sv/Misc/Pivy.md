---
title: Pivy
---
## Introduction

[Pivy](http://pivy.coin3d.org/) är ett python bindnings bibliotek för [Coin3d](http://www.coin3d.org), det 3D-renderingsbibliotek som används av FreeCAD. när det importeras i en körande python tolk, så kan du föra en direkt dialog med alla körande [scengrafer](/Scenegraph/sv "Scenegraph/sv"), som FreeCAD's 3D vyer, eller att även skapa nya. Pivy följer med i en standard FreeCAD installation.

When imported in a running Python interpreter, Pivy allows us to communicate directly with any running Coin [scenegraph](/Scenegraph "Scenegraph"), such as the [3D view](/3D_view "3D view"), or even to create new ones. Pivy is not required to compile FreeCAD, but it is required at runtime when running Python-based workbenches that create shapes on screen, like [Draft](/Draft_Workbench "Draft Workbench") and [BIM](/BIM_Workbench "BIM Workbench"). Because of this, Pivy is normally installed when installing a distribution of FreeCAD.

Coin biblioteket är uppdelat i flera delar, själva coin, för manipulation av scengrafer och bindningar för flera GUI system, som windows, eller som i vårt fall, qt. Dessa moduler är även tillgängliga för pivy, beroende på om de finns i systemet. Coin modulen finns alltid, och det är vad vi kommer att använda i alla fall, eftersom vi inte behöver bry oss om att förankra vårt 3D fönster i något gränssnitt, det görs redan av FreeCAD själv. Allt vi behöver göra är detta:

```
from pivy import coin

```

## Komma åt och ändra scengrafen

Vi såg i [Scengraf](/Scenegraph/sv "Scenegraph/sv") sidan hur en typisk Coin scen är organiserad. Allt som syns i en FreeCAD 3D vy är en coin scengraf, organiserad på samma sätt. Vi har en rotnod, och alla objekt på skärmen är dess barn.

FreeCAD har ett lätt sätt att komma åt 3D vy scengrafens rotnod:

```
sg = FreeCADGui.ActiveDocument.ActiveView.getSceneGraph()
print(sg)

```

Detta kommer att returnera rotnoden:

```
<pivy.coin.SoSelection; proxy of <Swig Object of type 'SoSelection *' at 0x360cb60> >

```

Vi kan inspektera vår scen's närmaste barn:

```
for node in sg.getChildren():
    print(node)

```

En del av dessa noder, som SoSeparators eller SoGroups, kan själva ha barn. Den kompletta listan på de tillgängliga coin objekten kan återfinnas på [official coin documentation](http://coin3d.bitbucket.org/Coin/classes.html).

Låt oss försöka lägga till något till vår scengraf nu. Vi lägger till en snygg röd kub:

```
col = coin.SoBaseColor()
col.rgb = (1, 0, 0)
cub = coin.SoCube()
myCustomNode = coin.SoSeparator()
myCustomNode.addChild(col)
myCustomNode.addChild(cub)
sg.addChild(myCustomNode)

```

och här är vår (snygga) röda kub. Låt os nu försöka detta:

```
col.rgb = (1, 1, 0)

```

Se? Allt är fortfarande åtkomligt och förändringsbart direkt. Inget behov av omberäkningar eller omritningar, coin tar hand om allt. Du kan lägga till saker till din scengraf, ändra egenskaper, gömma saker, visa temporära objekt, allting. Detta gäller förstås endast visningen i 3D vyn. Den visningen beräknas om av FreeCAD när filen öppnas, och när ett objekt behöver omberäknas. Så om du ändrar en aspekt på ett existerande FreeCAD objekt, så kommer dessa ändringar att förloras om objektet beräknas om eller när du öppnar filen igen.

En nyckel till arbete med scengrafer i dina skript är att kunna komma åt vissa egenskaper på de noder som du vid behov lägger till. Till exempel, om vi skulle vilja flytta vår kub, så skulle vil ha lagt till en SoTranslation nod till vår anpassade nod, och det skulle ha sett ut så här:

```
col = coin.SoBaseColor()
col.rgb = (1, 0, 0)
trans = coin.SoTranslation()
trans.translation.setValue([0, 0, 0])
cub = coin.SoCube()
myCustomNode = coin.SoSeparator()
myCustomNode.addChild(col)
myCustomNode.addChild(trans)
myCustomNode.addChild(cub)
sg.addChild(myCustomNode)

```

Kom ihåg att i en openInventor scengraf, så är ordningen viktig. en nod påverkar efterkommande saker, så du kan säga något som : färg röd, kub, färg gul, sfär, och du kommer att få en röd kub och en gul sfär. Om vi lade till förflyttning till vår existerande anpassade nod, så skulle den komma efter kuben, och inte påverka den. Om vi hade satt in den när vi skapade den, som här ovan, så skulle vi nu kunna göra:

```
trans.translation.setValue([2, 0, 0])

```

Och vår kub skulle hoppa 2 enheter åt höger.
Slutligen, att ta bort något görs med:

```
sg.removeChild(myCustomNode)

```

[Top](#top)

## Använda återanropsmekanismer

En [återanropsmekanism](http://en.wikipedia.org/wiki/Callback_%28computer_science%29) är ett system som tillåter ett bibliotek som du använder, som vårt coin bibliotek, att anropa tillbaka, vilket innebär att anropa en viss funktion från ditt för närvarande körande python objekt. Detta är väldigt användbart, därför att på det sättet så kan coin meddela python objektet om någon specifik händelse uppstår i scenen. Coin kan övervaka väldigt olika saker, som musposition, musklick, tangentbordsnedtryckningar, och många andra saker.

FreeCAD erbjuder ett lätt sätt att använda sådana återanrop:

```
from pivy import coin

class ButtonTest:
    def __init__(self):
        self.view = FreeCADGui.ActiveDocument.ActiveView
        self.callback = self.view.addEventCallbackPivy(coin.SoMouseButtonEvent.getClassTypeId(), self.getMouseClick) 

    def getMouseClick(self, event_cb):
        event = event_cb.getEvent()
        if event.getState() == coin.SoMouseButtonEvent.DOWN:
            print("Alert!!! A mouse button has been improperly clicked!!!")
            self.view.removeEventCallbackPivy(coin.SoMouseButtonEvent.getClassTypeId(), self.callback)

ButtonTest()

```

Återanropet måste initieras från ett objekt, därför så måste det objektet fortfarande köras när återanropet uppstår.

Se även [den kompletta listan](/Code_snippets#Observing_mouse_events_in_the_3D_viewer_via_Python/sv "Code snippets") för möjliga händelser och dess parametrar, eller [i den officiella coin dokumentationen](http://doc.coin3d.org/Coin/classes.html).

[Top](#top)

## Dokumentation

Olyckligtvis har pivy själv ingen ordentlig dokumentation, men eftersom det är en riktig översättning av coin, så kan du med säkerhet använda coin dokumentationen som referens, och använda python stil istället för c++ stil (till exempel SoFile::getClassTypeId() skulle i pivy bli SoFile.getClassId())

In C++:

```
SoFile::getClassTypeId()

```

In Pivy:

```
SoFile.getClassId()

```

* [Coin3D](https://github.com/coin3d) homepage.
* [Pivy](https://github.com/coin3d/pivy) homepage.
* [Coin3D wiki](https://github.com/coin3d/coin/wiki), at GitHub.
* [Coin3D wiki documentation](https://github.com/coin3d/coin/wiki/Documentation), at GitHub.
* [Coin3D Documentation](https://coin3d.github.io/Coin/html/), latest automatically generated Doxygen documentation.
* [(Open)Inventor Mentor](https://webdocs.cs.ualberta.ca/~graphics/books/mentor.pdf) - recommended.

### Older

These links provide reference documentation for Coin v3.x. The differences with v4.x are minimal, so they may still be useful.

* [Coin3D Documentation](https://coin3d.bitbucket.io/Coin/index.html), at BitBucket.
* [Coin3D Documentation](https://grey.colorado.edu/coin3d/index.html), at University of Colorado.
* [Open Inventor Reference Documentation](https://mevislabdownloads.mevis.de/docs/current/MeVis/ThirdParty/Documentation/Publish/OpenInventorReference/index.html), by MeVisLab.

[Top](#top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Pivy/sv&oldid=1457006>"