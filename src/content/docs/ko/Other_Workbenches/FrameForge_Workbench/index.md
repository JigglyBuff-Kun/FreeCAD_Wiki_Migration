---
title: FrameForge 작업대
---
![](/images/FrameForge.svg)

FrameForge 작업대 아이콘

## 소개

FrameForge는 틀(frame)이나 보(beam)를 생성하고 이러한 틀에 마이터 절단, 트림 절단을 적용하여 틀 구조물을 만들어 내는 대장간(Forge)같은 작업대 입니다.

아래 자습서는 [GitHub](https://github.com/lukh/frameforge/blob/main/docs/tutorial.md)에서도 볼 수 있습니다.

## 자습서

### 뼈대 만들기

보(Beam)는 모서리(예를 들어 스케치에서)나 매개변수 제어 선(Parametric Line)에 부착됩니다. 우선, 간단한 틀을 만들어 보겠습니다.

1. 새 파일에서 FrameForge 작업대로 전환합니다.
2. 스케치를 만들고 XY 방향을 지정합니다.

   ![](/images/FrameForge_00-create-sketch.png)

   ![](/images/FrameForge_01-select-orientation.png)
3. 스케치에 간단한 사각형을 그립니다. 이것이 우리의 뼈대가 될 것입니다.

   ![](/images/FrameForge_02-create-frame-skeleton.png)
4. 스케치 편집을 마칩니다.

### 틀 만들기

1. 윤곽 생성 도구(Create Profile)를 엽니다

   ![](/images/FrameForge_10-profiles.png)

   ![](/images/FrameForge_10-profiles-task.png)

   ![](/images/FrameForge_10-profiles-task-2.png)
2. 목록(재료/제품군/크기)에서 만들고자 하는 윤곽의 특성을 선택하세요. 제품군(Family)에서 미리 정의된 단면 윤곽 중 하나를 선택할 수 있고 이후 선택한 윤곽의 두께(Main Thickness) 등의 치수를 사용자가 원하는 대로 수정할 수도 있습니다.

   ![](/images/FrameForge_11-profiles-family.png)
3. 3D 보기에서 단면 윤곽을 적용할 모서리를 선택합니다.

   ![](/images/FrameForge_13-edge-selection.png)
4. 작업판에서 확인을 누릅니다. 네 개의 모서리를 따라 첫 번째 틀이 만들어 졌습니다.

   ![](/images/FrameForge_14-profiles-done.png)

   ![](/images/FrameForge_14-zoom-on-profiles.png)

### 더 입체적으로

우리는 더 복잡한 모양을 만들 수 있으며, 이를 만드는 방법에는 여러 가지가 있습니다.

#### 더 많은 스케치 (1부)

우리는 프로젝트에 더 많은 스케치를 추가할 수 있습니다:

1. 새로운 스케치를 만듭니다.
2. 이전과 동일한 방향(XY)을 선택하세요.
3. 이전과 같은 크기와 위치로 정사각형을 그립니다.
4. 스케치의 위치를 ​​첫 번째 스케치보다 400mm 위로 변경합니다.

   ![](/images/FrameForge_20-sketch-base-placement.png)

   ![](/images/FrameForge_20-sketch-base-placement-2.png)
5. 이제 윤곽 생성 도구를 다시 사용하여 다른 정사각형 틀을 만들 수 있습니다.

   ![](/images/FrameForge_21-stacked-frames.png)

#### 매개변수 제어 선(Parametric Line)

두 개의 꼭지점을 연결하여 매개변수 제어선을 만들 수 있습니다.

1. 가려진 스케치를 보기 위해 스페이스바를 사용하여 앞서 생성한 사각형 틀을 일시적으로 숨깁니다.

   ![](/images/FrameForge_22-hide-profiles.png)
2. 두 개의 꼭지점을 선택합니다.

   ![](/images/FrameForge_23-select-vertexes.png)
3. 매개변수 제어 선을 만듭니다.

   ![](/images/FrameForge_24-create-parametric-line.png)

   ![](/images/FrameForge_25-parametric-line.png)
4. 틀의 나머지 3개 다리에 대해서도 반복합니다.
5. 다시 윤곽 생성 도구를 사용하여 4개 선에 단면 윤곽을 추가합니다.
   1. 윤곽 생성도구(Create Profile)를 엽니다.
   2. 원하는 단면 윤곽을 선택하세요.
   3. 4개의 매개변수 제어 선을 선택합니다
   4. 확인을 누르세요.

   ![](/images/FrameForge_26-cube-done.png)

#### 더 많은 스케치 (2부)

스케치를 추가하는 또 다른 방법이 있는데, 이를 통해 더 복잡한 작업을 할 수 있습니다.

때로는 특정 위치에 스케치를 추가하고 다른 스케치에 연결하고 싶을 때가 있습니다. 그러면 첫 번째 스케치를 수정하면 두 번째 스케치도 따라오게 됩니다.이는 위치/기준 배치, 즉 절대 위치에서는 가능하지 않으며, 두 번째 스케치를 첫 번째 스케치에 "투사(Map)"해야 합니다.

1. 새로운 스케치를 만들고 방향을 YZ로 설정합니다.
   참조용으로 스케치에 원을 추가해서 어디에 있는지 확인할 수 있도록 했습니다.

   ![](/images/FrameForge_30-mapmode-sketch.png)
2. Map Mode 속성을 클릭하세요:

   ![](/images/FrameForge_31-mapmode.png)

   ![](/images/FrameForge_32-mapmode-dialog.png)
3. Map Mode를 변경하여 면, 꼭지점, 모서리를 선택할 수 있습니다. 여기서는 원형 스케치가 재정렬되었습니다. 옵션이 많습니다.

   ![](/images/FrameForge_33-mapmode.png)
4. 그런 다음 스케치를 편집하여 더 많은 선과 틀을 만들 수 있습니다.

### 경사(Bevels)

보시다시피, 틀의 만나는 부분은 아직 모양이 좋지 않습니다. 단면 윤곽은 틀의 뼈대가 되는 모서리 선을 중심에 품고 뻗어 나가다 선의 끝점에서 멈춰 버렸습니다.

우리는 파이프가 잘 만나도록 끝부분에 경사를 만들 것입니다. 이를 위한 세 가지 방법이 있습니다.

#### 경사(Bevels) 속성 조정 방법

이 방법은 단순한 틀에 적용하기 적합한 방법입니다.

1. 첫 번째 틀을 제외한 나머지를 숨기겠습니다.

   ![](/images/FrameForge_40-show-first-frame.png)
2. 파이프 중 하나를 선택하고 속성 편집기에서 Bevel Start/End Cut1/Cut2를 찾습니다.

   ![](/images/FrameForge_41-bevels.png)
3. 4개의 항목(Start/End Cut1/Cut2)이 있습니다. 이를 통해 파이프의 시작 또는 끝에서 경사를 만들 수 있습니다. 음수 각도도 가능하며 방향을 보정하는 데 사용해야 합니다.
4. 여러 파이프의 속성을 동시에 변경할 수도 있습니다.

   ![](/images/FrameForge_42-batchs-bevels.png)

#### Create Miter Ends 를 이용한 방법

1. 이번엔 다른 틀을 보이게 합니다.

   ![](/images/FrameForge_50-base-config.png)
2. 먼저 파이프가 서로 완전히 교차하도록 기존 파이프에 오프셋을 더해야 합니다. 오프셋은 모서리의 치수에 더해집니다. 파이프를 한 번에 하나씩 변경하거나 한 번에 모두 변경할 수 있습니다

   ![](/images/FrameForge_51-add-offset.png)
3. 모든 선택을 해제한 다음 두 개의 교차하는 파이프를 선택합니다. 나무 보기에서 파이프 자체가 아닌 3D 보기에서 파이프의 면만을 선택해야 합니다.

   ![](/images/FrameForge_52-select-touching-profiles.png)
4. 두 개의 잘린 파이프를 만들려면 마이터 끝 생성(Create Miter Ends) 도구를 클릭하세요.

   ![](/images/FrameForge_53-create-miter-end.png)

   ![](/images/FrameForge_54-miter-end.png)
5. 다른 부분에도 반복합니다

#### 파이프 잘라내기를 통한 방법

1. 우리가 만든 금속 틀의 모든 부분을 다시 표시해 보면 수직 파이프가 제대로 잘리지 않은 것을 확인할 수 있습니다.

   ![](/images/FrameForge_60-startwith.png)

   ![](/images/FrameForge_61-bad-joint.png)
2. 잘라내기 도구(Trim Profile)를 엽니다.

   ![](/images/FrameForge_62-endtrim.png)

   ![](/images/FrameForge_62-endtrim-task.png)
3. 먼저 수직 파이프를 선택한 다음 ![](/images/List-add.svg) 버튼을 사용하여 잘라낼 대상체(Trimmed Object)로 추가합니다. 이 때 방금 선택한 파이프는 잠시 사라집니다.

   ![](/images/FrameForge_63-select-trimmed-body-1.png)

   ![](/images/FrameForge_63-select-trimmed-body-2.png)
4. 잘라내고 싶은 경계(Trimming Boundaries)를 선택하세요. (여기서는 두 개의 바닥면을 선택하기 위해 3D보기를 회전하였습니다.)

   ![](/images/FrameForge_64-select-trimming-boundaries-1.png)

   ![](/images/FrameForge_64-select-trimming-boundaries-2.png)
5. 선택한 경계면을 추가하면 사라졌던 파이프가 경계면에서 깨끗하게 잘린 모습으로 다시 나타납니다.
   절단 유형을 직선(Simple Cut) 또는 다른 파이프의 모양을 따라가기(Coped Cut)로 변경할 수 있습니다.

   ![](/images/FrameForge_64-select-cuttype-1.png)

   ![](/images/FrameForge_64-select-cuttype-2.png)
6. 파이프의 반대쪽도 같은 방식으로 잘라내려면 잘라내기 경계면(Trimming Boundaries)을 같은 방법으로 추가하면 됩니다.   
    원하는 형태로 수직 파이프가 잘라졌다면 확인 버튼을 누르세요.

### 대상체들 정리하기

지금까지 여러 단계의 작업을 진행하면서 나무 보기가 조금 많이 번잡해 졌습니다.

#### 부품 그릇(Part Container)

여기 저기 흩어진 파이프들,스케치 등을 하나의 부품(Part) 그릇에 담으면 훨씬 보기에도 깔끔하고 관리가 쉬워집니다.

![](/images/FrameForge_70-part-container.png)

![](/images/FrameForge_71-part-container.png)

You should drag only one profile at a time into the container. I don't know why, but FreeCAD is not happy about a group drag. Sometime parts and profiles then jump out of the Part container.

#### 융합

여러 파이프들을 하나로 융합할 수 있습니다.

![](/images/FrameForge_72-fusion.png)

![](/images/FrameForge_72-fusion-done.png)

### 부품설계 작업대로 옮겨 작업하기

1. 부품설계 작업대에서 지금까지 만든 파이프 구조틀을 사용하려면 먼저 파이프들을 하나로 융합한 뒤 몸통(Body)을 만들어야 합니다.

   ![](/images/FrameForge_80-body.png)
2. 융합(Fusion)체를 마우스로 잡아 끌어 몸통으로 안에 놓습니다.

   ![](/images/FrameForge_81-basefeature.png)
3. 이제 부품설계 작업대(PartDesign Workbench)에서 작업할 수 있는 몸통(Body)가 만들어졌고 구멍 만들기 등 원하는 작업을 할 수 있습니다.

   ![](/images/FrameForge_82-making-holes.png)

   ![](/images/FrameForge_83-holes-made.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=FrameForge_Workbench/ko&oldid=1570731>"