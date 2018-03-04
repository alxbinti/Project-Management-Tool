class Sprint {
    constructor(name) {
        this.id = Sprint.addId();
        this.name = name;
    }

        get Name() {
            return this.name;
        }
        
        get Id() {
        return this.id;
        }

        static addId() {
        if (!this.lastId) 
        this.lastId = 1;
        else this.lastId += 1;
        return this.lastId;
      }
}

  
