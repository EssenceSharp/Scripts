:selector :classOrTrait |

	classOrTrait allSelectorsAndMethodsDo: [:mSelector :method | 
		| messagesSent |
		messagesSent := method messagesSent.
		messagesSent
			ifNotNil: 
				[(messagesSent includes: selector)
					ifTrue: 
						[System.Console 
							writeLine: '';
							write: method homeClass pathname;
							write: '>>';
							write: mSelector;
							write: ' sends: ';
							writeLine: selector
						]
				]
	]