---
title: Befehl
---
## Einleitung

Ein Befehl ist das, was ausgeführt wird, wenn eine Schaltfläche einer Symbolleiste gedrückt oder einen Tastenkürzel eingegeben wird. Es kann eine sehr einfache Handlung sein, wie das Ändern des Zoomfaktors der [3D-Ansicht](/3D_view/de "3D view/de") oder das Drehen des Blickwinkels oder ein komplexes System, das Dialogfenster öffnet und darauf wartet, dass der Benutzer bestimmte Aufgaben ausführt.

Jeder FreeCAD-Befehl hat einen eindeutigen Namen, der auf der Seite [:Category:Command Reference](/Category:Command_Reference "Category:Command Reference") gelistet wird (bzw. die Übersetzungen auf [:Category:Command Reference/de](/Category:Command_Reference/de "Category:Command Reference/de")). Befehle können über eine Schaltfläche in einer Symbollleiste, einen Menüeintrag oder ein [Python](/Python/de "Python/de")-Skript ausgeführt werden bzw. von der [Python-Konsole](/Python_console/de "Python console/de") aus mit:

```
FreeCADGui.runCommand("my_Command_Name")

```

## Hintergrund

FreeCAD-Befehle werden durch einen Arbeitsbereich festgelegt. Arbeitsbereiche fügen ihre Befehlsdefinitionen normalerweise zum FreeCAD-Startzeitpunkt hinzu, so dass ein Befehl existiert und zur Verfügung steht, sobald FreeCAD gestartet wird, unabhängig davon, ob der zugehörige Arbeitsbereich schon aktiviert wurde oder nicht. Allerdings könnte der Author eines Arbeitsbereichs in einigen Fällen entschieden haben, den FreeCAD-Startprozess nicht zu überlasten/belasten und deshalb die Befehlsdefinitionen erst bei der Initialisierung des Arbeitsbereichs zu laden. In diesen Fällen steht der Befehl erst nach der Aktivierung des Arbeitsbereichs zur Verfügung (wenn er wenigstens einmal mit dem Arbeitsbereichswähler dorthin gewechselt wurde).

Da die meisten von ihnen das Einwirken des Benutzers erfordern, stehen FreeCAD-Befehle nur im GUI-Modus zur Verfügung und nicht im Konsolen-Modus. Der Einfachheit halber gibt es für die meisten FreeCAD-Befehle eine entsprechende Python-Funktion (wie `Part.makeBox` oder `Draft.makeLine`) oder sie führen Code aus, der sehr einfach in einem Python-Skript und/oder [-Makro](/Macros/de "Macros/de") nachgebildet werden kann.

Befehle können entweder in C++ oder in Python festgelegt werden.

## In C++ definierte Befehle

Beispiel einer Befehlsdefinition in C++, üblicherweise der Struktur Mod/ModuleName/Gui/Command.cpp folgend festgelegt.

```
DEF_STD_CMD_A(StdCmdMyCommand);

StdCmdMyCommand::StdCmdMyCommand()
  : Command("Std_My_Command")
{
    sGroup        = QT_TR_NOOP("File");
    sMenuText     = QT_TR_NOOP("My Command");
    sToolTipText  = QT_TR_NOOP("Runs my command in the active document");
    sWhatsThis    = "Std_MyCommand";
    sStatusTip    = QT_TR_NOOP("Runs my command in the active document");
    sPixmap       = "MyCommand.svg";
    sAccel        = "Ctrl+A";
}

void StdCmdExport::activated(int iMsg)
{
    // place here the code to be executed when the command is ran
}

bool StdCmdMyCommand::isActive(void)
{
    // here you have a chance to return true or false depending if your command must be shown as active or inactive (greyed).
}

// the command must be "registered" in FreeCAD's command system
CommandManager &rcCmdMgr = Application::Instance->commandManager();
rcCmdMgr.addCommand(new StdCmdMyCommand());

```

## In Python definierte Befehle

Beispiel für eine Befehlsdefinition in Python; sie kann in einem Verzeichnis wie Mod/ModuleName/tools/commands.py abgelegt werden.

```
from PySide.QtCore import QT_TRANSLATE_NOOP

class MyCommand:
    """Explanation of the command."""

    def __init__(self):
        """Initialize variables for the command that must exist at all times."""
        pass

    def GetResources(self):
        """Return a dictionary with data that will be used by the button or menu item."""
        return {'Pixmap': 'MyCommand.svg',
                'Accel': "Ctrl+A",
                'MenuText': QT_TRANSLATE_NOOP("My_Command", "My Command"),
                'ToolTip': QT_TRANSLATE_NOOP("My_Command", "Runs my command in the active document")}

    def Activated(self):
        """Run the following code when the command is activated (button press)."""
        print("Activated")

    def IsActive(self):
        """Return True when the command should be active or False when it should be disabled (greyed)."""
        return True

# The command must be "registered" with a unique name by calling its class.
FreeCADGui.addCommand('My_Command', MyCommand())

```

## Beispiele

Siehe [Linienzeichnungsfunktion](/Line_drawing_function/de "Line drawing function/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Command/de&oldid=1481011>"