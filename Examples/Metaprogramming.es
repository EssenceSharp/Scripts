| behavior array |

behavior := Behavior new.
behavior 
	superclass: #() class;
	uses: Examples.Debutant;
	addMethod: 
		[## whatAreYou 
			
			self class superclass name showCr
		].
	
array := #(5 8 13).
array changeClassToThatOf: behavior new.
array introduceYourself; whatAreYou.

array detect: [:each | each \\ 2 = 0]