---
title: Команда "Видимость"
---
|  |
| --- |
| Видимость |
| Расположение в меню |
| Вид → Видимость |
| Верстаки |
| Все |
| Быстрые клавиши |
| Space |
| Представлено в версии |
| - |
| См. также |
| [Показать выделенные](/Std_ShowSelection/ru "Std ShowSelection/ru"), [Скрыть выделенные](/Std_HideSelection/ru "Std HideSelection/ru"), [Инвертировать все видимости](/Std_ToggleObjects/ru "Std ToggleObjects/ru"), [Показать все объекты](/Std_ShowObjects/ru "Std ShowObjects/ru"), [Скрыть все объекты](/Std_HideObjects/ru "Std HideObjects/ru") |
|  |

## Описание

Команда **Видимость** переключает видимость выделенных объектов в окне [трёхмерного вида](/3D_view/ru "3D view/ru").

## Применение

1. Выберите один или более чем один объект.
   * Невидимые объекты могут быть выбраны в [древе проекта](/Tree_view/ru "Tree view/ru").
   * Будьте осторожны при использовании Ctrl+A для выделения всех объектов в древе проекта. Так как эта комбинация выделяет подэлементы [тел PartDesign](/PartDesign_Body/ru "PartDesign Body/ru") и объекты, используемые для [булевых операций в Part](/Part_Boolean/ru "Part Boolean/ru"). В большинстве случаев их надо оставлять невидимыми.
   * Объекты, используемые для [булевых операций в Part](/Part_Boolean/ru "Part Boolean/ru") так же выделяются при использовании Ctrl+A в окне трёхмерного вида.
2. Есть несколько способов вызвать команду:
   * Выбрать **Вид → ![](/images/Std_ToggleVisibility.svg) Видимость** из меню.
   * Выбрать **Вид → Видимость → ![](/images/Std_ToggleVisibility.svg) Видимость** из меню.
   * Выбрать **![](/images/Std_ToggleVisibility.svg) Видимость** из контекстного меню в древе проекта. Эта опция не доступна в [верстаке PartDesign](/PartDesign_Workbench/ru "PartDesign Workbench/ru").
   * Выбрать **![](/images/Std_ToggleVisibility.svg) Видимость** из контекстного меню окна трёхмерного вида.
   * Используя пробел на клавиатуре.

## Примечания

* Невидимые объекты отображаются с выделенной серым цветом меткой и выделенным серым цветом значком в [древовидном представлении](/Tree_view/ru "Tree view/ru").
* Объекты, вложенные в [деталь](/Std_Part/ru "Std Part/ru"), или [ссылку](/Std_LinkMake/ru "Std LinkMake/ru") на [группу](/Std_Group/ru "Std Group/ru"), или группу ссылок, а также [features](/PartDesign_Feature/ru "PartDesign Feature/ru") [тела PartDesign](/PartDesign_Body/ru "PartDesign Body/ru") будут видны на 3D-видах только в том случае, если их родитель также виден. Это означает, что в PartDesign теле, вложенный в деталь Std, будет виден в 3D-виде только в том случае, если сам объект, тело дизайна детали и деталь Std являются видимыми. И если Std\_Part, в свою очередь, вложена в другую часть Std\_Part, то этот последний объект также должен быть виден.
* Если видимость [группы](/Std_Group/ru "Std Group/ru") (или производного от нее объекта, такого как [часть здания](/Arch_BuildingPart/ru "Arch BuildingPart/ru")) будет изменена, видимость ее вложенных объектов изменится соответствующим образом. Но их видимость также может быть изменена независимо.
* Действие этих команд не может быть отменено через команду [Отменить](/Std_Undo/ru "Std Undo/ru").
* Видимость объекта может быть изменена через соответствующее свойство Данные**Visibility** в [редакторе свойств](/Property_editor/ru "Property editor/ru") или [combo панель](/Combo_view/ru "Combo view/ru").

## Программирование

*Смотрите так же:* [Основы составления скриптов в FreeCAD](/FreeCAD_Scripting_Basics/ru "FreeCAD Scripting Basics/ru").

Используйте методы `show` и `hide` объектов для изменения их видимости.

```
import FreeCADGui

obj = FreeCADGui.ActiveDocument.myObjectName

if obj.Visibility == True:
    obj.hide()
else:
    obj.show()

# Alternatively:
obj.Visibility = not obj.Visibility

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ToggleVisibility/ru&oldid=1451185>"