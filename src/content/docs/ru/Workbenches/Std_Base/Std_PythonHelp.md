---
title: Команда "Автоматический сгенерированная документация Python"
---
|  |
| --- |
| Std PythonHelp |
| Расположение в меню |
| Help → Automatic python modules documentation |
| Верстаки |
| All |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Std FreeCADPowerUserHub](/Std_FreeCADPowerUserHub/ru "Std FreeCADPowerUserHub/ru") |
|  |

## Описание

The **Std PythonHelp** command starts a web server that communicates with the system's default Internet browser over a local socket. The web server displays information about the available [Python](/Python "Python") modules, classes and functions of FreeCAD. The required pages are generated automatically.

The web server is based on Python's [pydoc](https://docs.python.org/3.8/library/pydoc.html#module-pydoc) module, and thus extracts the docstrings of Python files (\*.py), and textual documentation defined in the Python wrappers (\*.xml) which expose the underlying C++ code.

## Применение

1. Select the **Help → ![](/images/Std_PythonHelp.svg) Automatic python modules documentation** option from the menu.
2. Click on any of the links to go to the documentation of a specific class or function.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_PythonHelp/ru&oldid=1454763>"