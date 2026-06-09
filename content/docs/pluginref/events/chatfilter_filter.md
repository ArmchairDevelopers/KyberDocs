---
title: ChatFilter:Filter
---

> **ChatFilter:Filter**(sender: [Player](/g/pluginref/types/player), message: string, filteredMessage: string)

ran every time a message is filtered.


## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **sender** | [Player](/g/pluginref/types/player) |  |
| **message** | string |  |
| **filteredMessage** | string |  |

## Example

```lua
EventManager.Listen("ChatFilter:Filter", function(sender, message, filteredMessage)
    -- Do stuff here.
end)
```
