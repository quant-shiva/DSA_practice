class BinaryTreeNode{
	constructor(data){
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree{
	constructor(data){
		if(data)
			this.root = new BinaryTreeNode(data);
		else
		this.root = null;
	}

	preOrderTraversal(root=this.root){
		if(root){
			console.log(root.data);
			this.preOrderTraversal(root.left);
			this.preOrderTraversal(root.right);
		}
	}

	inOrderTraversal(root=this.root){
		if(root){
			this.inOrderTraversal(root.left);
			console.log(root.data);
			this.inOrderTraversal(root.right);
		}
	}

	postOrderTraversal(root=this.root){
		if(root){
			this.postOrderTraversal(root.left);
			this.postOrderTraversal(root.right);
			console.log(root.data);
		}
	}

	levelOrderTraversal(){
		let Q = [];
		Q.push(this.root);

		while(Q.length){
			let curr = Q.shift();
			console.log(curr.data);
			if(curr.left)
			Q.push(curr.left);
		    if(curr.right)
			Q.push(curr.right);
		}
	}

	levelOrderInsert(key){
		if(!this.root){
			this.root = new BinaryTreeNode(key);
		}
		else{
			let Q = [];
			Q.push(this.root);

			while(Q.length){
				let curr = Q.shift();
				if(curr.left)
					Q.push(curr.left)
				else {
					curr.left = new BinaryTreeNode(key);
					break;
				}
				if(curr.right)
					Q.push(curr.right);
				else{
					curr.right = new BinaryTreeNode(key);
					break;
				}
			}
		}
	}
}


module.exports = BinaryTree;