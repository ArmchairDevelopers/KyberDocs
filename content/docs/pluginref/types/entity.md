---
title: Entity
---

## Summary

A generic Entity container. An entity is what runs all of EBX logic, and is interactable with this API.

### Properties

| Name | Type |
| ---- | ---- |
| [data](#data) | [DataContainer](/g/pluginref/types/datacontainer) |
| [bus](#bus) | [EntityBus](/g/pluginref/types/entitybus) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Event](#event)**(event: [EntityEvent](/g/pluginref/types/entityevent)) | void |
| **[FireEvent](#fireevent)**(event: [EntityEvent](/g/pluginref/types/entityevent)) | void |
| **[Write](#write)**(fieldName: string, typeName: string, value: any) | void |
| **[Read](#read)**(fieldName: string, typeName: string) | any |

## Properties

---

### data

> **[DataContainer](/g/pluginref/types/datacontainer)**

The entity's exposed data.

---

### bus

> **[EntityBus](/g/pluginref/types/entitybus)**

The entity's bus.

---
## Methods

### Event

> **Event**(event: [EntityEvent](/g/pluginref/types/entityevent)): void

Queue an event to be executed into the context it is in.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| event | [EntityEvent](/g/pluginref/types/entityevent) | The event you want to execute. |

### FireEvent

> **FireEvent**(event: [EntityEvent](/g/pluginref/types/entityevent)): void

Immediately fire an event to be processed internally in the entity.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| event | [EntityEvent](/g/pluginref/types/entityevent) | The event you want to execute. |

### Write

> **Write**(fieldName: string, typeName: string, value: any): void

Execute a property write on the entity. These are the **IN** properties.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fieldName | string | The field name. Can either be a string or the field hash (like `0x236BA71D`) |
| typeName | string | The name of the type being written. |
| value | any | The value being written. |

### Read

> **Read**(fieldName: string, typeName: string): any

Read a property from the entity. These are the **OUT** properties.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| fieldName | string | The field name. Can either be a string or the field hash (like `0x236BA71D`) |
| typeName | string | The name of the type you want read. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **any** |  |

