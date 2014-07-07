| ms |
ms := MessageSend 
	receiver: CLR.System.Console
	selector: #writeLine:.
	
ms value: 'Hello, world'.

ms := #reportToConsole asMessageSendWithReceiver: 'How''s the wife and kids?'.
ms value.

ms := (#() class compiledMethodAt: #copyFrom:to:) asMessageSendWithReceiver: #(1 2 3 4 5).
(ms value: 2 value: 4) showCr.

ms := #+ asMessageSendWithReceiver: 3.
ms value: 4