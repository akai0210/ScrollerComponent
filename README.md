# ScrollerComponent
## 索引

### 属性(properties)

Item cc.prefab 条目预制体。

ItemLength  Number 条目长度。

SpaceX Number   条目之间X的间隔。

SpaceY Number 条目之间Y的间隔。

Direction  X，Y轴的方向。MaxIndex Number 最大的条目数。

### 方法

getIndex 返回当前的索引

getItemList 返回条目数组

getCallBack 设置条目超过界限的回调

### Details

### 属性

### Item 

> 条目预制体

| meta | description |
| ---- | ----------- |
| 类型 | Number      |

### ItemLength

> 条目长度

 

| meta | description |
| ---- | ----------- |
| 类型 | Number      |

### SpaceX

> 条目之间X的间隔

| meta | description |
| ---- | ----------- |
| 类型 | Number      |

### SpaceY

> 条目之间Y的间隔

| meta | description |
| ---- | ----------- |
| 类型 | Number      |

### 方法

### getIndex

> 返回当前最大的索引

| meta | description |
| ---- | ----------- |
| 返回 | Number      |

### getItemList

> 返回当前条目数组

| meta | description    |
| ---- | -------------- |
| 返回 | Array<cc.Node> |

### setCallBack

> 设置条目超越的回调函数

