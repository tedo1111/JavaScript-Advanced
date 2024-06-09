function createSortedList() {
    let collection = [];

    function add(element) {
        if (typeof element === 'number') {
            collection.push(element);
            collection.sort((a, b) => a - b);
            this.size = collection.length;
        }
    }

    function remove(index) {
        if (index >= 0 && index < collection.length) {
            collection.splice(index, 1);
            this.size = collection.length;
        }
    }

    function get(index) {
        if (index >= 0 && index < collection.length) {
            return collection[index];
        }
    }

    return {
        add,
        remove,
        get,
        size: 0
    };
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
