| socket message sendBuffer receiveBuffer byteCount reply |
socket := CLR.System.Net.Sockets.Socket socketType: #Stream protocolType: #Tcp.
socket connectTo: 'yahoo.com' port: 80.
message := 'GET /'.
sendBuffer := ByteArray new: message size + 2.
1 to: message size do: [:index | sendBuffer at: index put: (message at: index) asInteger].
sendBuffer at: message size + 1 put: Character cr asInteger.
sendBuffer at: message size + 2 put: Character lf asInteger.
socket sendFrom: sendBuffer.
receiveBuffer := ByteArray new: 16384.
byteCount := socket receiveInto: receiveBuffer.
1 to: byteCount do: [:index | Transcript nextPut: (receiveBuffer at: index) asCharacter].





