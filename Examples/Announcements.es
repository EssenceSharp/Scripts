| announcer subscriber1 subscriber2 |

announcer := Announcer new.
subscriber1 := 'An announcement has been received using a MessageSend'.
announcer when: Announcement send: #showCr to: subscriber1.
subscriber2 := #BillyBob.
announcer 
	when: Announcement 
	do: [:subscriber :announcement :announcer | 
		System.Console
			writeLine: 'An announcement has been received using a Block:';
			write: '        subscriber = '; 
			writeLine: subscriber printString; 
			write: '        announcement = '; 
			writeLine: announcement printString; 
			write: '        announcer = '; 
			writeLine: announcer printString] 
	for: subscriber2.
announcer announce: Announcement.
