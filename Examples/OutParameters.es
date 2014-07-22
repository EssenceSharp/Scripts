| openGenericDictTypeDefinition closedGenericType dict value |
openGenericDictTypeDefinition := 'System.Collections.Generic.Dictionary`2' asHostSystemType.
closedGenericType := openGenericDictTypeDefinition asClass instanceTypeWith: Type string with: Type string.
dict := closedGenericType new.
dict at: #foo 
	ifPresent: [:value | System.Console write: 'The value at #foo is '; writeLine: value] 
	ifAbsent: [System.Console writeLine: '#foo is not present'].
dict at: #foo put: #bar.
dict at: #foo 
	ifPresent: [:value | System.Console write: 'The value at #foo is '; writeLine: value] 
	ifAbsent: [System.Console writeLine: '#foo is not present']