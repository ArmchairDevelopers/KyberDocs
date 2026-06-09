---
title: EntityManager
---

## Summary

EntityManager global table.

### Functions

| Method | Returns |
| ------ | ------- |
| **[Create](#create)**(dataContainer: [DataContainer](/g/pluginref/types/datacontainer)) | [Entity](/g/pluginref/types/entity) |
| **[GetList](#getlist)**(entityType: string, realm: integer) | [Entity](/g/pluginref/types/entity)[] |

## Functions

### Create

> **Create**(dataContainer: [DataContainer](/g/pluginref/types/datacontainer)): [Entity](/g/pluginref/types/entity)

Create an entity. Experimental!

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **dataContainer** | [DataContainer](/g/pluginref/types/datacontainer) | The entity data container. The desired entity is derived from this type. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Entity](/g/pluginref/types/entity)** |  |

### GetList

> **GetList**(entityType: string, realm: integer): [Entity](/g/pluginref/types/entity)[]

Get every entity of a type. Experimental & Very slow!

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **entityType** | string | The desired entity type name. |
| **realm** | integer | The realm you want to search in. Pass in a `Realm` type. Ex: `Realm.Realm_Server`. Anything other than `Realm.Realm_Server` may cause a crash! |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Entity](/g/pluginref/types/entity)[]** |  |

