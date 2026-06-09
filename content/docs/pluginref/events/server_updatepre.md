---
title: Server:UpdatePre
---

> **Server:UpdatePre**(deltaTime: number)

event every tick. Ran before the tick logic is executed.


## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **deltaTime** | number |  |

## Example

```lua
EventManager.Listen("Server:UpdatePre", function(deltaTime)
    -- Do stuff here.
end)
```
