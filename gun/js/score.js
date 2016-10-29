var score = {
    dom: document.getElementById('bgScore'),
    total: 0,
    level: [0, 0, 0],
    index: 0,
    add: function(value) {
        this.total += value;
        this.level[this.index] += value;
    
        this.dom.innerHTML = this.total;
    },
    next: function() {
        this.index++;
    }
};