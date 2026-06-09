---
title: WinSocket
---

## Summary

Represents a Windows TCP socket handle returned by SocketManager.
The socket is automatically closed when garbage collected.

### Methods

| Method | Returns |
| ------ | ------- |
| **[Accept](#accept)**() | [WinSocket](/g/pluginref/types/winsocket) |
| **[Recv](#recv)**(length: number) | string |
| **[Send](#send)**(data: string) | number |
| **[Close](#close)**() | void |

## Methods

### Accept

> **Accept**(): [WinSocket](/g/pluginref/types/winsocket)

Accepts an incoming client connection on a listening socket.
Returns `nil` if no client is ready (non-blocking, WSAEWOULDBLOCK).
Raises an error if the accept call fails for any other reason.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[WinSocket](/g/pluginref/types/winsocket)** | clientSocket The accepted client socket, or nil if no connection is pending. |

### Recv

> **Recv**(length: number): string

Receives data from the socket up to `length` bytes.
Returns an empty string if the connection was closed gracefully.
Raises an error if the recv call fails.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| length | number | The maximum number of bytes to receive. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **string** | data The received data. |

### Send

> **Send**(data: string): number

Sends a string of data over the socket.
Raises an error if the send call fails.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | string | The data to send. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **number** | bytesSent The number of bytes successfully sent. |

### Close

> **Close**(): void

Closes the socket connection and releases the handle.

