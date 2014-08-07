:classOrTrait |

	classOrTrait allSelectorsAndMethodsDo: [:selector :method | 
		Transcript 
			nextPutAll: method homeClass qualifiedName;
			nextPutAll: '>>';
			nextPutAll: selector;
			cr
	]