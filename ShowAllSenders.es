:selector |

	| senders collectSenders |
	
	collectSenders := 
		[:mSelector :method | 
			| messagesSent |
			messagesSent := method messagesSent.
			messagesSent
				ifNotNil: 
					[(messagesSent includes: selector)
						ifTrue: [senders add: method]
					]
		].
	
	senders := Set newForIdentity.
	self class objectSpace rootClassesDo: [:rootClass |
		rootClass selectorsAndMethodsDo: collectSenders.
		rootClass class selectorsAndMethodsDo: collectSenders.
		rootClass allSubclassesDo: [:class | 
			class selectorsAndMethodsDo: collectSenders.
			class class selectorsAndMethodsDo: collectSenders.
		].
	].
	
	senders do: [:method | 
		Transcript 
			cr;
			nextPutAll: method homeClass qualifiedName;
			nextPutAll: '>>';
			nextPutAll: method selector;
			nextPutAll: ' sends: ';
			nextPutAll: selector
	].
	
	(senders size printString, ' senders of #', selector) asHostSystemString
								