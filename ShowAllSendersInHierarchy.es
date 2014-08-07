:selector :classOrTrait |

	classOrTrait allSelectorsAndMethodsDo: [:mSelector :method | 
		| messagesSent |
		messagesSent := method messagesSent.
		messagesSent
			ifNotNil: 
				[(messagesSent includes: selector)
					ifTrue: 
						[Transcript 
							cr;
							nextPutAll: method homeClass qualifiedName;
							nextPutAll: '>>';
							nextPutAll: mSelector;
							nextPutAll: ' sends: ';
							nextPutAll: selector
						]
				]
	]