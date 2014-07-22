	| semaphore t1 |
	
	semaphore := CLR.System.Threading.Semaphore new.
	t1 := [semaphore wait. System.Console writeLine: 'Thread one reporting'] fork.
	[System.Console writeLine: 'Thread two reporting'. semaphore signal] fork.