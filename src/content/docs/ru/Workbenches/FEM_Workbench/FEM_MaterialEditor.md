---
title: FEM Редактор материалов
---
:::caution
THIS VERSION OF THE COMMAND IS OBSOLETEIt was changed in1.0 and aboveand accessesMaterial Edit.
:::

|  |
| --- |
| Редактор материалов |
| Расположение в меню |
| Модель → Материалы → Редактор материалов |
| Верстаки |
| [FEM](/FEM_Workbench/ru "FEM Workbench/ru"), [Arch](/Arch_Workbench/ru "Arch Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| 0.18 |
| См. также |
| [Material/ru](/index.php?title=Material/ru&action=edit&redlink=1 "Material/ru (page does not exist)"), [Arch SetMaterial](/Arch_SetMaterial/ru "Arch SetMaterial/ru"), [FEM tutorial](/FEM_tutorial/ru "FEM tutorial/ru") |
|  |

## Описание

Редактор материалов позволяет редактировать и сохранять информацию в объекте [материала FreeCAD](/index.php?title=Material/ru&action=edit&redlink=1 "Material/ru (page does not exist)"). Эти материалы доступны для применения в верстаках ![](/images/Workbench_FEM.svg) [FEM](/FEM_Workbench/ru "FEM Workbench/ru") и ![](/images/Workbench_Arch.svg) [Arch](/Arch_Workbench/ru "Arch Workbench/ru").

![](/images/Material_editor.png)

## Применение

На текущий момент редактор материалов может быть доступен:

1. ![](/images/Workbench_Arch.svg) В [верстаке Arch](/Arch_Workbench/ru "Arch Workbench/ru") через:
   * Кнопку ![](/images/Arch_SetMaterial.svg) [Set Material](/Arch_SetMaterial/ru "Arch SetMaterial/ru").
   * Меню **Arch → Material tools → ![](/images/Arch_SetMaterial.svg) Material**.
2. ![](/images/Workbench_FEM.svg) В [верстаке FEM](/FEM_Workbench/ru "FEM Workbench/ru") через:
   * Кнопку ![](/images/FEM_MaterialEditor.svg) Material editor.
   * Меню **Models → Materials → ![](/images/FEM_MaterialEditor.svg) Material editor**.

## Опции

* **Browser button**: Открывает содержимое ссылки на параметр в браузере
* **Material card**: Позволяет для заполнения полей выбрать предустановки
* Open: Открывает файл .FCMat
* Save as: Сохраняет содержимое редактора в новом файле .FCMat
* **Preview**: Ещё не работает
* **Properties editor**: Позволяет редактировать содержимое параметров материала
* Add property: Позволяет дать новый пользовательских параметр материала
* Delete property: Удаляет выбранный параметр. Может быть удалён лишь пользовательский параметр

## Notes

* Кнопки OK и Cancel имеют тот же эффект, если редактор материалов не используется для прямого редактирования параметров материала существующего объекта.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialEditor/ru&oldid=1540636>"