---
title: 표준 사본 저장(Std SaveCopy)
---
|  |
| --- |
| 표준 사본 저장 |
| 메뉴 위치 |
| 파일 → 사본 저장... |
| 작업대 |
| 모두 |
| 기본 단축키 |
| *없음* |
| 도입 버전 |
| - |
| 참조 |
| [표준 다른 이름으로 저장](/Std_SaveAs/ko "Std SaveAs/ko"), [표준 저장](/Std_Save/ko "Std Save/ko") |
|  |

## 설명

**표준 사본 저장(Std SaveAs)** 명령은 활성 문서의 사본을 새 파일 이름으로 저장합니다.

## 용법

1. 메뉴에서 **파일 → ![](/images/Std_SaveCopy.svg) 사본 저장...** 옵션을 선택합니다.
2. 대화 상자에서 파일 이름을 입력합니다.
3. 저장 버튼을 클릭합니다.

## 선택 사항

* 명령을 중지하려면 Esc 키나 취소 버튼을 누릅니다.

## 스크립트

*참조:* [FreeCAD 스크립트 기초](/FreeCAD_Scripting_Basics/ko "FreeCAD Scripting Basics/ko").

문서의 사본을 저장하려면 문서 객체의 `saveCopy` 메소드를 사용하십시오.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SaveCopy/ko&oldid=1448624>"