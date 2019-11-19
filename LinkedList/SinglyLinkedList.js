class LinkedListNode{
	constructor(data,next=null){
		this.data = data;
		this.next = next;
	}
}

class LinkedList{
	constructor(){
		this.head = null;
	}

	Insert(data){
		if(this.head===null){
			this.head = new LinkedListNode(data);
		}
		else{
			let curr = new LinkedListNode(data);
			curr.next = this.head;
			this.head = curr;

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

module.exports = LinkedList;