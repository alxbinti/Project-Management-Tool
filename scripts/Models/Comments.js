class Comments {
    constructor(id,name) {
        this.id = id;
        this.name = name;
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