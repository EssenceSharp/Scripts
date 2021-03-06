:pathname |

	| stream |
	
	stream := [FileStream write: pathname mode: #append check: false type: #text] 
			on: System.IO.IOException
			do: [:ex | Transcript show: 'File could not be opened: ', pathname. ^nil].
	
	[Transcript show: 'Writing out all root classes to ', pathname; cr.
	Class subclassesDo: [:rootMetaclass | 
		| rootClass |
		rootMetaclass isMetaclass 
			ifTrue:
				[rootClass := rootMetaclass soleInstance.
				stream 
					nextPutAll: rootClass qualifiedName;
					cr.
				Transcript 
					show: rootClass qualifiedName;
					cr]
	]] ensure: [stream close]