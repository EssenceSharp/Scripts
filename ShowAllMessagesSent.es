:classOrTrait |

	classOrTrait allSelectorsAndMethodsDo: [:selector :method | 
		| messagesSent |
		messagesSent := method messagesSent.
		messagesSent
			ifNotNil: 
				[Transcript
					cr;
					nextPutAll: method homeClass qualifiedName;
					nextPutAll: '>>';
					nextPutAll: selector;
					nextPutAll: ' sends: ';
					cr.
				messagesSent do: [:message |
					Transcript nextPut: CharacterConstants.TAB; nextPutAll: message
				]
		]
	]