class LinkedListNode{
	constructor(data){
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}

class doublyLinkedList{
	constructor(){
		this.head = null;
	}

	Insert(data){
		if(this.head === null){
			this.head = new LinkedListNode(data);
		}
		else{
			let temp = new LinkedListNode(data);
			temp.next = this.head;
			this.head.prev = temp;
			this.head = temp;
		}
	}

	Traversal(){
		if(this.head===null){
			console.log('No Node exist in the list.')
		}
		else{
		let curr = this.head;
		while(curr!==null){
			console.log(curr.data);
			curr = curr.next;
		}
	}
	}
}

module.exports = doublyLinkedList;
