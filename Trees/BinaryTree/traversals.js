var BinaryTree = require('./binaryTree');

function PreOrderNonRec(root){
	if(!root){
		console.log('Empty Tree!!!');
		return;
	}

	let curr = root;
	let stack = [];

	while(curr!==null || stack.length!==0){
		while(curr!==null){
			stack.push(curr);
			curr = curr.left;
		}

		curr = stack.pop();
		console.log(curr.data);
		curr = curr.right;
	}
}

function InOrderNonRec(root){
	if(!root){
		console.log('Empty Tree!!!');
		return;
	}

	let curr = root;
	let stack = [];
	stack.push(curr);

	do{
		if(curr.left === null){
			console.log(curr.data);
			curr = stack.pop();
		}
		else{
			stack.push(curr);
		}
	}
}

let tree = new BinaryTree();

tree.levelOrderInsert(1);
tree.levelOrderInsert(2);
tree.levelOrderInsert(3);
tree.levelOrderInsert(4);
tree.levelOrderInsert(5);
tree.levelOrderInsert(6);
tree.levelOrderInsert(7);

PreOrderNonRec(tree.root);
tree.preOrderTraversal();