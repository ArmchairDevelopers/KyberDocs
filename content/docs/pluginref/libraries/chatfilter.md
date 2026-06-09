---
title: ChatFilter
---

## Summary

ChatFilter global table.

### Functions

| Method | Returns |
| ------ | ------- |
| **[Clear](#clear)**() | void |
| **[ClearBlockedPhrases](#clearblockedphrases)**() | void |
| **[ClearBlockedRegex](#clearblockedregex)**() | void |
| **[Enable](#enable)**() | void |
| **[Disable](#disable)**() | void |
| **[IsEnabled](#isenabled)**() | boolean |
| **[AddBlockedPhrase](#addblockedphrase)**(phrase: string) | boolean |
| **[AddBlockedRegex](#addblockedregex)**(phrase: string) | boolean |
| **[SetFilterCharacter](#setfiltercharacter)**(char: string) | void |
| **[GetFilterCharacter](#getfiltercharacter)**(char: any) | boolean |

## Functions

### Clear

> **Clear**(): void

Clears all blocked phrases & regex.

### ClearBlockedPhrases

> **ClearBlockedPhrases**(): void

Clears all blocked phrases.

### ClearBlockedRegex

> **ClearBlockedRegex**(): void

Clears all blocked regex.

### Enable

> **Enable**(): void

Enable chat filter filtering messages. Note: Even when disabled, you can still access these table functions.

### Disable

> **Disable**(): void

Disable chat filter filtering messages. Note: Even when disabled, you can still access these table functions.

### IsEnabled

> **IsEnabled**(): boolean

Returns if the chat filter is enabled.

#### Returns

| Type | Description |
| ---- | ----------- |
| **boolean** |  |

### AddBlockedPhrase

> **AddBlockedPhrase**(phrase: string): boolean

Add blocked phrase to chat filter. Filtering of this type is case insensitive. Returns whether the phrase was added to the list or already existed (false)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **phrase** | string | The phrase you want to add |

#### Returns

| Type | Description |
| ---- | ----------- |
| **boolean** |  |

### AddBlockedRegex

> **AddBlockedRegex**(phrase: string): boolean

Add blocked regex to chat filter. Returns whether the regex was added to the list or already existed (false)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **phrase** | string | The phrase you want to add |

#### Returns

| Type | Description |
| ---- | ----------- |
| **boolean** |  |

### SetFilterCharacter

> **SetFilterCharacter**(char: string): void

Sets the chat filter's replacement character. For example, if set to '#', "blah badword" -> "blah #######"

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **char** | string | The character you want to set |

### GetFilterCharacter

> **GetFilterCharacter**(char: any): boolean

Gets the chat filter's replacement character.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **char** | any |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **boolean** |  |

