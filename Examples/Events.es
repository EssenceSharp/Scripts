| metronome handler | 
metronome := Examples.Metronome new.
handler := [:metronome :eventArgs | CLR.System.Console writeLine: 'Tick!']. 
metronome onEvent: #tick do: handler. 
metronome announceTick. 
metronome onEvent: #tick doNotDo: handler. 
metronome announceTick