# Problem: A Simplistic TCP Finite State Machine
	Difficulty: 4
	Date Completed: 2025/05/22

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/54acc128329e634e9a000362)

## 🛠Function(s) Usage:
	Function: traverseTCPStates(eventList);

### Inputs:
	eventList will be an array of events. The initial state is CLOSED. Your job is to traverse the FSM as determined by the events, and return the proper final state as a string, all caps, as shown above.

### Returns or Examples:
	["APP_PASSIVE_OPEN", "APP_SEND", "RCV_SYN_ACK"] =>  "ESTABLISHED"
	["APP_ACTIVE_OPEN"] =>  "SYN_SENT"
	["APP_ACTIVE_OPEN", "RCV_SYN_ACK", "APP_CLOSE", "RCV_FIN_ACK", "RCV_ACK"] =>  "ERROR"
