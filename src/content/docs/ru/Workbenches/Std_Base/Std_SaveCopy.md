---
title: Команда "Сохранить копию..."
---
|  |
| --- |
| Сохранить копию... |
| Расположение в меню |
| Файл → Сохранить копию... |
| Верстаки |
| Все |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [Сохранить](/Std_Save/ru "Std Save/ru"),  [Сохранить как...](/Std_SaveAs/ru "Std SaveAs/ru") |
|  |

## Описание

Команда **Сохранить копию...** сохраняет копию активного документа под новым названием.

## Применение

1. Выберите пункт главного меню **Файл → ![](/images/Std_SaveCopy.svg) Сохранить копию...**.
2. Введите имя файла в появившемся окне.
3. Нажмите кнопку Сохранить.

## Опции

* Нажмите Esc или кнопку Отмена, чтобы прервать выполнение команды.

## Программирование

*Смотрите так же:* [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

Для сохранения копии документа используйте метод `saveCopy` объекта document.

```
import FreeCAD
from pathlib import Path

# The folder and filename we will use:
fld = 'D:/testfiles/'
fnm = fld + 'testCopy.FCStd'

# Make sure fld exists:
Path(fld).mkdir(parents=True, exist_ok=True)

doc = FreeCAD.newDocument()
doc.saveCopy(fnm)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SaveCopy/ru&oldid=1448629>"