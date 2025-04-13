---
title: Команда "Ортогональная проекция"
---
|  |
| --- |
| Ортогональная проекция |
| Расположение в меню |
| Вид → Ортогональная проекция |
| Верстаки |
| Все |
| Быстрые клавиши |
| V O |
| Представлено в версии |
| - |
| См. также |
| [Перспективная проекция](/Std_PerspectiveCamera/ru "Std PerspectiveCamera/ru") |
|  |

## Описание

Команда **Std OrthographicCamera** переводит камеру в активном [трёхмерном виде](/3D_view/ru "3D view/ru") в режим ортогональной проекции. В этом режиме объекты, которые находятся дальше от камеры, выглядят не меньше, чем те, которые находятся ближе.

![](/images/Std_OrthographicCamera_example.svg)

Два куба с одинаковыми размерами в ортогональной проекции

## Применение

1. Есть несколько способов вызвать команду:
   * Выберите в меню опцию **Вид → ![](/images/Std_PerspectiveCamera.svg) Ортогональная проекция**.
   * Используйте клавиатурное сокращение: V, затем O.

## Настройки

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor").

* The camera type can be changed: **Edit → Preferences... → Display → 3D View → Camera type**. The selected type will be used for all 3D views of all opened documents and also for new documents.

## Программирование

*Смотрите так же:* [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

Чтобы изменить вид на ортографический, используйте метод `setCameraType` объекта ActiveView. Этот метод не доступен, когда FreeCAD в режиме консоли.

```
import FreeCADGui

view = FreeCADGui.ActiveDocument.ActiveView
view.setCameraType("Perspective")
view.setCameraType("Orthographic")
view.getCameraType()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_OrthographicCamera/ru&oldid=1449481>"