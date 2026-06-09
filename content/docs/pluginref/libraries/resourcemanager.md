---
title: ResourceManager
---

## Summary

ResourceManager global table.

### Functions

| Method | Returns |
| ------ | ------- |
| **[LookupDataContainer](#lookupdatacontainer)**(assetName: string) | [DataContainer](/g/pluginref/types/datacontainer) |

## Functions

### LookupDataContainer

> **LookupDataContainer**(assetName: string): [DataContainer](/g/pluginref/types/datacontainer)

Get the the Asset of the name provided in ANY loaded bundle. This function is **EXTREMELY SLOW** so if you do need to use it, make it sparingly.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **assetName** | string | The desired Asset name. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DataContainer](/g/pluginref/types/datacontainer)** |  |

