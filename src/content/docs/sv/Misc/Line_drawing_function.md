---
title: Line drawing function
---
## Introduction

Denna sida visar hur lätt avancerad funktionalitet kan byggas i Python. I denna övning, så kommer vi att bygga ett nytt verktyg som ritar en linje. Detta verktyg kan sedan länkas till ett FreeCAD kommando, och det kommandot kan anropas av ett element i gränssnittet, som en menypunkt eller en knapp i en verktygslåda.

## Huvudskriptet

Först kommer vi att skriva ett skript som innehåller all vår funktionalitet. Sedan kommer vi att spara detta i en fil, och importera den i FreeCAD, så att alla klasser och funktioner som vi skriver kommer att vara tillgängliga för FreeCAD. Så, starta din favorit textredigerare, , och skriv följande rader:

First we will write a script containing all our functionality. Then we will save this in a file and import it in FreeCAD to make all its classes and functions available. Launch your favorite code editor and type the following lines:

```
import FreeCADGui, Part
from pivy.coin import *

class line:

    """This class will create a line after the user clicked 2 points on the screen"""

    def __init__(self):
        self.view = FreeCADGui.ActiveDocument.ActiveView
        self.stack = []
        self.callback = self.view.addEventCallbackPivy(SoMouseButtonEvent.getClassTypeId(), self.getpoint)

    def getpoint(self, event_cb):
        event = event_cb.getEvent()
        if event.getState() == SoMouseButtonEvent.DOWN:
            pos = event.getPosition()
            point = self.view.getPoint(pos[0], pos[1])
            self.stack.append(point)
            if len(self.stack) == 2:
                l = Part.LineSegment(self.stack[0], self.stack[1])
                shape = l.toShape()
                Part.show(shape)
                self.view.removeEventCallbackPivy(SoMouseButtonEvent.getClassTypeId(), self.callback)

```

[Top](#top)

## Detaljerad förklaring

```
import Part, FreeCADGui
from pivy.coin import *

```

När du vill använda funktioner från en annan modul I Python, så behöver du importera den. I vårt fall, så behöver vi funktioner från [Del Modulen](/Part_Workbench/sv "Part Workbench/sv"), för att skapa linjen, och från gränssnittsmodulen (FreeCADGui), för att komma åt 3D vyn. Vi behöver även innehållet i coin biblioteket, så vi kan använda alla coin objekt som SoMouseButtonEvent, etc...

```
class line:

```

Här definierar vi vår huvudklass. Varför använder vi en klass och inte en funktion? Skälet är att vårt verktyg behöver "stanna vid liv" medan vi väntar på att användaren ska klicka på skärmen. En funktion avslutas när dess uppgift är klar, men ett objekt (en klass definierar ett objekt) stannar vid liv ända tills den förstörs.

```
"""This class will create a line after the user clicked 2 points on the screen"""

```

I Python, så kan varje klass eller funktion ha en beskrivningssträng. Detta är speciellt användbart i FreeCAD, därför att när du anropar den klassen i tolken, så visas beskrivningssträngen som ett verktygstips.

```
def __init__(self):

```

Python klasser kan alltid innehålla en \_\_init\_\_ funktion, vilken utförs när klassen anropas för att skapa ett objekt. Så här lägger vi allt som vi vill ska hända när vårt linjeverktyg börjar.

```
self.view = FreeCADGui.ActiveDocument.ActiveView

```

I en klass, så vill du vanligtvis lägga till *self.* innan ett variabelnamn, så att den kan kommas åt lätt för alla funktioner inuti och utanför den klassen. Här kommer vi att använda self.view för att komma åt och manipulera den aktiva 3D vyn.

```
self.stack = []

```

Här skapar vi en tom lista som kommer att innehålla 3D punkterna som sänds av getpoint funktionen.

```
self.callback = self.view.addEventCallbackPivy(SoMouseButtonEvent.getClassTypeId(), self.getpoint)

```

Detta är den viktiga delen: Eftersom det egentligen är en [coin3D](http://www.coin3d.org/) scen, så använder FreeCAD coin's återanropsmekanism, som tillåter en funktion att anropas varje gång en viss scenhändelse inträffar. I vårt fall, så skapar vi ett återanrop för [SoMouseButtonEvent](http://doc.coin3d.org/Coin/group__events.html) händelser, och vi binder den till getpoint funktionen. Nu, varje gång som en musknapp trycks ned eller släpps, så kommer getpoint funktionen att utföras.

Notera att det finns ett alternativ till addEventCallbackPivy() kallat addEventCallback() vilket dispenserar bruket av pivy. Men eftersom pivy är en mycket effektiv och naturlig väg att komma åt en del av coin scenen, så är det mycket bättre att använda den så mycket du kan!

[Top](#top)

```
def getpoint(self, event_cb):

```

Nu definierar vi getpoint funktionen, som kommer utföras när en musknapp trycks ned i en 3D vy. Denna funktion kommer att ta emot ett argument, som vi kommer kalla event\_cb. Från denna händelses återanrop kan vi komma åt händelseobjektet, vilket innehåller flera informationsbitar (läge info [här](/Code_snippets#Observing_mouse_events_in_the_3D_viewer_via_Python/sv "Code snippets")).

```
if event.getState() == SoMouseButtonEvent.DOWN:

```

Getpoint funktionen kommer att anropas när en musknapp trycks ned eller släpps. Men vi vill bara välja en 3D punkt när den trycks ned (annars skulle vi få två 3D punkter mycket nära varann). Så vi måste kontrollera det här.

```
pos = event.getPosition()

```

Här får vi musmarkörens skärmkoordinater

```
point = self.view.getPoint(pos[0], pos[1])

```

Denna funktion ger oss en FreeCAD vektor (x,y,z) som innehåller den 3D punkt som ligger på fokalplanet, precis under vår musmarkör. om du är i kameravy, tänk dig en stråle som kommer från kameran, och passerar genom musmarkören, och träffar fokalplanet. Där är vår 3D punkt. On vi är i ortogonal vy, så är strålen parallell med vyriktningen.

```
self.stack.append(point)

```

Vi lägger till vår nya punkt till stacken

```
if len(self.stack) == 2:

```

Har vi tillräckligt med punkter? Om ja, låt oss då rita linjen!

```
l = Part.LineSegment(self.stack[0], self.stack[1])

```

Här använder vi funktionen Line() från [Del Modulen](/Part_Workbench/sv "Part Workbench/sv") som skapar en linje från två FreeCAD vektorer. Allt som vi skapar och ändrar inuti Del modulen, stannar i Del modulen. Så, tills nu, så har vi skapat en Linje Del. Den är inte bunden till något objekt i vårt aktiva dokument, så inget syns på skärmen.

```
shape = l.toShape()

```

FreeCAD dokumentet kan bara acceptera former från Del modulen. Former är Del modulens mest allmäna typ. Så vi behöver konvertera vår linje till en form innan vi lägger till den till dokumentet.

```
Part.show(shape)

```

Del modulen har en mycket smidig show() funktion som skapar ett nytt objekt i dokumentet och binder en form till den. Vi skulle också kunna ha skapat ett nytt objekt i dokumentet först, och sedan ha bundit formen till den manuellt.

```
self.view.removeEventCallbackPivy(SoMouseButtonEvent.getClassTypeId(), self.callback)

```

Eftersom vi är klara med vår linje, låt oss ta bort vår återanropsmekanism, som använder värdefulla CPU cykler.

[Top](#top)

## Testa & använda skriptet

Låt oss nu spara vårt skript på någon plats där FreeCAD's python tolk kommer att hitta den. När moduler importerass, så kommer tolken att leta på följande platser: python's installationssökväg, FreeCAD bin katalogen, och alla FreeCAD modulkataloger. Så, den bästa lösningen är att skapa en ny katalog i en av FreeCAD's [Mod kataloger](/Installing_more_workbenches/sv "Installing more workbenches/sv"), och spara vårt skript i den. Låt oss till exempel skapa en "MinaSkript" katalog, och spara vårt skript som "ovning.py".

Now let's save our script in a folder where the FreeCAD Python interpreter can find it. When importing modules, the interpreter will look in the following places: the Python installation paths, the FreeCAD bin folder, and all FreeCAD Mod (module) folders. So the best solution is to create a new folder in one of the Mod folders. Let's create a MyScripts folder there and save our script in it as exercise.py.

Nu är allt klart, låt oss starta FreeCAD, skapa ett nytt dokument, och i pythontolken skriva:

```
import exercise

```

Om inga felmeddelanden kommer fram, så innebär det att vårt övningsskript har laddats. Vi kan nu kontrollera dess innehåll med :

```
dir(exercise)

```

Kommandot dir() är ett inbyggt python kommando som listar modulens innehåll. Vi kan se att vår line() klass är där, som väntar på oss. Låt oss nu testa den:

```
'line' in dir(exercise)

```

Now let's test it:

```
exercise.line()

```

Klicka sedan på två olika ställen i 3D vyn, och bingo, där är vår linje! För att göra det igen, skriv bara ovning.line() igen, och igen, och igen... Känns det bra?

[Top](#top)

## Registrera skriptet i FreeCAD's gränssnitt

För att vårt nya linjeverktyg ska bli ännu häftigare, så borde det ha en knapp i gränssnittet, så vi inte behöver skriva allt det varje gång. Den lättaste vägen är att omvandla vår nya MinaSkript katalog till en full FreeCAD arbetsbänk. Det är lätt, allt som behövs är att lägga in en fil som kallas **InitGui.py** inuti din MinaSkript katalog. InitGui.py kommer att innehålla instruktioner för att skapa en ny arbetsbänk, och addera vårt nya verktyg till den. Förutom det så behöver vi ändra vår övningskod lite, så att line() verktyget igenkänns som ett officiellt FreeCAD kommando. Låt oss starta genom att göra en InitGui.py fil, och skriva följande kod i den:

For our new line tool to be really useful, and to avoid having to type all that stuff, it should have a button in the interface. One way to do this is to transform our new MyScripts folder into a full FreeCAD workbench. This is easy, all that is needed is to put a file called InitGui.py inside the MyScripts folder. InitGui.py will contain the instructions to create a new workbench, and add our new tool to it. Besides that we will also need to change our exercise code a bit, so the `line()` tool is recognized as an official FreeCAD command. Let's start by creating an InitGui.py file, and writing the following code in it:

```
class MyWorkbench (Workbench):

    MenuText = "MyScripts"

    def Initialize(self):
        import exercise
        commandslist = ["line"]
        self.appendToolbar("My Scripts", commandslist)

Gui.addWorkbench(MyWorkbench())

```

Jag tror att du redan nu förstår det ovanstående skriptet: Vi skapar en ny klass som vi kallar MinArbetsbänk, vi ger den en titel (MenuText), och vi definierar en Initialize() funktion som kommer att utföras när arbetsbänken laddas till FreeCAD. I den funktionen så laddar vi innehållet i vår övningsfil, och lägger till de FreeCAD kommandon som hittas i det i en kommandolista. Sedan gör vi en verktygslåda som kallas "Mina Skript" och vi tilldelar vår kommandolista till den. För närvarande har vi förstås endast ett verktyg, så vår kommandolista innehåller endast ett element. Sedan, när vår arbetsbänk är klar, så lägger vi till den till huvudgränssnittet.

Men det kommer fortfarande inte att fungera, därför att ett FreeCAD kommando måste formatteras på ett visst sätt för att fungera. så vi behöver ändra vårt line() verktyg lite. Vår nya ovning.py skript kommer nu att se ut så här:

```
import FreeCADGui, Part
from pivy.coin import *

class line:

    """This class will create a line after the user clicked 2 points on the screen"""

    def Activated(self):
        self.view = FreeCADGui.ActiveDocument.ActiveView
        self.stack = []
        self.callback = self.view.addEventCallbackPivy(SoMouseButtonEvent.getClassTypeId(), self.getpoint)

    def getpoint(self, event_cb):
        event = event_cb.getEvent()
        if event.getState() == SoMouseButtonEvent.DOWN:
            pos = event.getPosition()
            point = self.view.getPoint(pos[0], pos[1])
            self.stack.append(point)
            if len(self.stack) == 2:
                l = Part.LineSegment(self.stack[0], self.stack[1])
                shape = l.toShape()
                Part.show(shape)
                self.view.removeEventCallbackPivy(SoMouseButtonEvent.getClassTypeId(), self.callback)

    def GetResources(self):
        return {'Pixmap': 'path_to_an_icon/line_icon.png', 'MenuText': 'Line', 'ToolTip': 'Creates a line by clicking 2 points on the screen'}

FreeCADGui.addCommand('line', line())

```

Vad vi gjorde här var att omvandla vår \_\_init\_\_() funktion till en Activated() funktion, därför att när FreeCAD kommandon körs, så utför de automatiskt Activated() funktionen. Vi lade också till en GetResources() funktion, som informerar FreeCAD var den kan hitta en ikon för verktyget, och namnet och verktygstipset för vårt verktyg. en jpg, png eller svg bild kommer att fungera som en ikon, den kan vara av valfri storlek, men det är bäst att använda en storlek osm är nära den slutliga, som 16x16, 24x24 eller 32x32.

Sedan lägger vi till line() klassen som ett officiellt FreeCAD kommando med addCommand() metoden.

Klart, nu behöver vi bara starta om FreeCAD och vi kommer att ha en ny snygg arbetsbänk med vårt splitternya verktyg!

[Top](#top)

## Så du vill ha mer?

Om du gillade denna övningen, varför inte försöka förbättra detta lilla verktyg? Det finns många saker som kan göras, som till exempel:

* Lägga till feedback för användaren: nu är det ett mycket 'naket' verktyg, så användaren kan bli lite osäker när det används. Så vi skulle kunna lägga till lite feedback, tala om vad som ska göras. Du skulle till exempel kunna mata ur meddelanden till FreeCAD konsolen. Ta en titt i FreeCAD.Console modulen
* Lägga till en möjlighet att skriva in 3D punkterna manuellt. Titta på python input() funktionen, till exempel
* Lägga till möjligheten att lägga till mer än 2 punkter
* Lägga till händelser för andra saker: Nu kontrollerar vi endast musknappshändelser, men om vi också kunde göra något när musen förflyttas, som att visa koordinater?
* Ge ett namn till det skapade objektet

Tveka inte att skriva dina frågor eller ideer på [forum](http://forum.freecadweb.org/)!

Don't hesitate to ask questions or share ideas on the [forum](https://forum.freecadweb.org/)!

[Top](#top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Line_drawing_function/sv&oldid=1385055>"