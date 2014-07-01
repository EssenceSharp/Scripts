| class color |
class := Class new.
class
	superclass: Object;
	name: #Color;
	instanceVariableNames: #(red green blue);
	environment: Smalltalk.
	
class
	addMethod: [## alpha ^alpha];
	addMethod: [## red ^red];
	addMethod: [## red: aPositiveNumber red := aPositiveNumber];
	addMethod: [## green ^green];
	addMethod: [## green: aPositiveNumber green := aPositiveNumber];
	addMethod: [## blue ^blue];
	addMethod: [## blue: aPositiveNumber blue := aPositiveNumber].

class withUndeclaredVariablesDo: [:selector :varName | System.Console write: 'Undeclared: '; writeLine: varName].

color := class new.
color
	red: 192;
	green: 144;
	blue: 92;
	yourself


