class Node{
    constructor(data, next = null) {
        this.data = data
        this.nextSibling = next
    }
}

class LinkedList{
    constructor() {
        this.head = null
        this.size = 0
    }

    insertFirst(data){
        this.head = new Node(data, this.head)
        this.size++
    }

    insertLast(data){
        let node = new Node(data)
        let current

        if(!this.head) {
            this.head = node
        }else{
            current = this.head
        }
    }
}


