class LinkedListNode{
	constructor(data){
		this.data = data;
		this.next = null;
	}
}

class CircularLinkedList{
	constructor(){
		this.head = null;
	}

	Insert(data){
		if(this.head === null){
			this.head = new LinkedListNode(data);
			this.head.next = this.head;
		}
		else{
			let temp = new LinkedListNode(data);
			temp.next = this.head;
			let curr = this.head;
			do{
				curr=curr.next;
			} while(curr.next!==this.head)
			curr.next = temp;
			this.head = temp;
		}
	}

	Traversal(){
		if(this.head===null){
			console.log('No Node exist in the list.')
		}
		else{
		let curr = this.head;
		do{
			console.log(curr.data);
			curr=curr.next;
		} while(curr!==this.head)
	}
	}
}

module.exports = CircularLinkedList;
