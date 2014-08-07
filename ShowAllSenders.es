:selector |

	| senders |
	
	senders := Set new.
	self class objectSpace rootClassesDo: [:rootClass |
		rootClass allSubclassesDo: [:class | 
			class selectorsAndMethodsDo: [:mSelector :method | 
				| messagesSent |
				messagesSent := method messagesSent.
				messagesSent
					ifNotNil: 
						[(messagesSent includes: selector)
							ifTrue: [senders add: method]
						]
			].
			class class selectorsAndMethodsDo: [:mSelector :method | 
				| messagesSent |
				messagesSent := method messagesSent.
				messagesSent
					ifNotNil: 
						[(messagesSent includes: selector)
							ifTrue: [senders add: method]
						]
			]
		]
	].
	
	senders do: [:method | 
		Transcript 
			cr;
			nextPutAll: method homeClass qualifiedName;
			nextPutAll: '>>';
			nextPutAll: method selector;
			nextPutAll: ' sends: ';
			nextPutAll: selector
	]
								