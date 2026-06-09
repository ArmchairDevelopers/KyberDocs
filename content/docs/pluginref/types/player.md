---
title: Player
---

## Summary

A server player.

### Properties

| Name | Type |
| ---- | ---- |
| [name](#name) | string |
| [team](#team) | integer |
| [battlepoints](#battlepoints) | integer |
| [playerId](#playerid) | integer |
| [isBot](#isbot) | boolean |
| [isSpawned](#isspawned) | boolean |

### Methods

| Method | Returns |
| ------ | ------- |
| **[SetTeam](#setteam)**(team: integer) | void |
| **[SetWeapon](#setweapon)**(filePath: string) | void |
| **[GetWeapon](#getweapon)**() | string |
| **[SetCustomizationAsset](#setcustomizationasset)**(filePath: string) | void |
| **[SetBattlepoints](#setbattlepoints)**(amount: integer) | void |
| **[GiveBattlepoints](#givebattlepoints)**(amount: integer) | void |
| **[SetUnlock](#setunlock)**(guid: string) | void |
| **[Kick](#kick)**(reason: any) | void |

## Properties

---

### name

> **string**

Player's username.

---

### team

> **integer**

Player's current team.

---

### battlepoints

> **integer**

Player's battlepoint count.

---

### playerId

> **integer**

Player's EA player id.

---

### isBot

> **boolean**

If player is a bot.

---

### isSpawned

> **boolean**

If player is spawned as a character or vehicle.

---
## Methods

### SetTeam

> **SetTeam**(team: integer): void

Sets the player's team.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| team | integer | The team id to set. |

### SetWeapon

> **SetWeapon**(filePath: string): void

Sets the player's primary weapon.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| filePath | string | File path of the requested weapon unlock. |

### GetWeapon

> **GetWeapon**(): string

Gets the player's primary weapon file path.

#### Returns

| Type | Description |
| ---- | ----------- |
| **string** |  |

### SetCustomizationAsset

> **SetCustomizationAsset**(filePath: string): void

DUMMY

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| filePath | string | DUMMY |

### SetBattlepoints

> **SetBattlepoints**(amount: integer): void

Sets player's battlepoints.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | integer | The amount desired. |

### GiveBattlepoints

> **GiveBattlepoints**(amount: integer): void

Give player battlepoints

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | integer | The amount desired. |

### SetUnlock

> **SetUnlock**(guid: string): void

Set an unlock's status.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| guid | string | The unlock's GUID. |

### Kick

> **Kick**(reason: any): void

Kick server player from the server.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reason | any |  |

