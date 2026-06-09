---
title: SocketManager
---

## Summary

SocketManager global table.

### Functions

| Method | Returns |
| ------ | ------- |
| **[Create](#create)**(port: integer) | [WinSocket](/g/pluginref/types/winsocket) |
| **[CreateSend](#createsend)**(uri: string, port: integer) | [WinSocket](/g/pluginref/types/winsocket) |

## Functions

### Create

> **Create**(port: integer): [WinSocket](/g/pluginref/types/winsocket)

Creates a non-blocking TCP listening socket bound to the given port on all interfaces.
The socket is set to non-blocking mode and begins listening immediately.
Raises an error if the socket cannot be created, bound, or set to listen.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **port** | integer | The local port number to bind and listen on. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[WinSocket](/g/pluginref/types/winsocket)** | socket The created listening socket. |

### CreateSend

> **CreateSend**(uri: string, port: integer): [WinSocket](/g/pluginref/types/winsocket)

Creates a non-blocking TCP socket and connects to it.
The URI must be `"127.0.0.1"`. connections to external addresses are not allowed.
Raises an error if the URI is not `"127.0.0.1"`, or if the socket cannot be created, bound, or connected.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **uri** | string | The target IP address. Must be `"127.0.0.1"`. |
| **port** | integer | The target port number to connect to. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[WinSocket](/g/pluginref/types/winsocket)** | socket The created and connected socket. |

