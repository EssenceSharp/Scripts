| behavior array |

behavior := Behavior new.
behavior 
	superclass: #() class;
	uses: Examples.TDebutant;
	addMethod: 
		[## whatAreYou 
			
			self class superclass name showCr
		].
		
behavior activate.
	
array := #(5 8 13).
array changeClassToThatOf: behavior new.
array introduceYourself; whatAreYou.

array detect: [:each | each \\ 2 = 0]