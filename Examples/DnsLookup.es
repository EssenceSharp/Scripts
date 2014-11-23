:domainNameOrIpAddress |

| hostEntry |
hostEntry := CLR.System.Net.Dns getHostEntry: domainNameOrIpAddress.
Transcript show: hostEntry hostName; cr; cr.
hostEntry addressList do: [:each | Transcript show: each; cr]