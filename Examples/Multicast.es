| tickBlock tockBlock block |
tickBlock := [System.Console writeLine: 'Tick'].
tockBlock := [System.Console writeLine: 'Tock'].
block := tickBlock.
block += tockBlock.
block value.
block -= tockBlock.
block value.