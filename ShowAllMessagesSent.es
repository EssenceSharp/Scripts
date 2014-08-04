:classOrTrait |

	classOrTrait allSelectorsAndMethodsDo: [:selector :method | 
		| messagesSent |
		messagesSent := method messagesSent.
		messagesSent
			ifNotNil: 
				[System.Console 
					writeLine: '';
					write: classOrTrait name;
					write: '>>';
					write: selector;
					writeLine: ' sends: '.
				messagesSent do: [:message |
					System.Console write: CharacterConstants.TAB; writeLine: message
				]
		]
	]