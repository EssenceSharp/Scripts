:classOrTrait |

	classOrTrait allSelectorsAndMethodsDo: [:selector :method | 
		System.Console 
			write: method homeClass pathname;
			write: '>>';
			writeLine: selector
	]