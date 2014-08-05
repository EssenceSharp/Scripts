:classOrTrait |

	classOrTrait traitUsage usedTraitMethodConflictsDo: [:selector :method | 
		System.Console 
			write: method homeClass pathname;
			write: '>>';
			writeLine: selector
	]