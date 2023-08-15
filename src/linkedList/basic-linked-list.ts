/**
 * Basic implementation of a linked list with minimum features
 * 
 * Does not allow for a list length < 1
 *
*/
class LinkedList {
    #head: LinkedListNode;
    #tail: LinkedListNode;
    #length: number;

    constructor(value: number){
        const initialNode = new LinkedListNode(value);

        this.#head = initialNode;
        this.#tail = initialNode;
        this.#length = 1;
    }

    /**
     * Append method for basic linked list
     * 
     * - Create new linked list node
     * - Set tail.next to newly created node
     * - Set tail to newly created node
     * 
     * @returns void
    */
    public append(value: number) {
        const newNode = new LinkedListNode(value);
        
        this.#tail.setNext(newNode);
        this.#tail = newNode;

        this.#length++;
    }

    /**
     * Delete head method for basic linked list
     * 
     * - Must have a length of at leat 2 to delete
     * - Set head to second node
     * - At this point, there should be no references to the previous head allowing the previous head to be garbage collected
     * 
     * @returns boolean `true: delete successful | false: delete failed` Reason logged to console
    */
    public deleteHead() {
        if(this.#length <= 1) {
            console.log("Delete failed. Current length of list is <= 1");
            return false;
        }

        const nextHead = this.#head.getNext()
        if(!nextHead) {
            console.log("Head cannot be deleted. No value for new head node.");
            return false;
        }

        this.#head = nextHead;
        this.#length--;
        if(this.#length < 1) {
            throw new Error(`Linked list length property set to unexpected value: ${this.#length}`)
        }

        return true
    }

    /**
     * Search method for basic linked list
     * 
     * - Iterate through linked list
     * - Check if value of current node is equal to search value
     * - Return true on match, else continue iteration
     * - Return false if no match found throughout iteration
     * 
     * @param value number to search for
     * @returns boolean `true: match found | false: no match found`
    */
    public search(value: number) {
        let currentNode = this.#head;
        let nextNode = currentNode.getNext();

        while(nextNode) {
            if(currentNode.getValue() === value) {
                return true;
            }
            currentNode = nextNode;
            nextNode = nextNode.getNext();
        }

        return false;
    }

    /**
     * Length method for basic linked list
     * 
     * @returns number of nodes in linked list
    */   
    public length() {
        return this.#length;
    }

}

/**
 * Node for basic linked list implementation
 * 
*/   
class LinkedListNode {
    #value: number;
    #next: LinkedListNode | null;

    constructor(value: number){
        this.#value = value;
        this.#next = null;
    }

    public getValue() {
        return this.#value;
    }

    public setValue(value: number) {
        this.#value = value;
    }

    public getNext() {
        return this.#next;
    }

    public setNext(next: LinkedListNode) {
        this.#next = next;
    }
}