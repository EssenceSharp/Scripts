:pathname |

	| stream line |
	
	stream := [FileStream read: pathname] 
			on: System.IO.FileNotFoundException
			do: [:ex | Transcript show: 'File not found: ', pathname. ^nil].
	
	[[stream atEnd] 
		whileFalse: 
			[line := stream nextLine. 
			Transcript nextPutAll: line; cr]] 
				ensure: [stream close]
	