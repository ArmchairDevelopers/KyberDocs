---
title: Console
---

## Summary

Console global table.

### Functions

| Method | Returns |
| ------ | ------- |
| **[GetSettings](#getsettings)**(category: string) | void |
| **[Execute](#execute)**(command: string) | void |
| **[Register](#register)**(group: string, name: string, description: string, inst: table, callback: function) | void |

## Functions

### GetSettings

> **GetSettings**(category: string): void

Gets the settings for a specific category.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **category** | string | The category to get the settings for. |

### Execute

> **Execute**(command: string): void

Execute a console command.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **command** | string | The command to be executed. |

### Register

> **Register**(group: string, name: string, description: string, inst: table, callback: function): void

Register a new command.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **group** | string | The category to get the settings for. |
| **name** | string | The name for the command. |
| **description** | string | The description for the command. |
| **inst** | table | The instance you want to have the callback be the instance function of. Like: `inst:callback(args)` |
| **callback** | function | A callback in the form `function(args: string)`. |

