| list |
list := OrderedCollection new.
list
	add: 'one';
	add: 'deux';
	add: 'tres';
	add: 'chetyry';
	add: 'funf'.
(list select: [:each | each size > 4]) at: 1
