:classOrTrait |

	classOrTrait traitUsage usedTraitMethodConflictsDo: [:selector :method | 
		Transcript 
			nextPutAll: method homeClass pathname;
			nextPutAll: '>>';
			nextPutAll: selector;
			cr
	]