class User {
    constructor(name) {
        this.id = User.addId();
        this.name = name;
    }

    get Id() {
        return this.id;
      }
    get Name() {
        return this.name;
    }

    static addId() {
    if (!this.lastId)
    this.lastId = 1;
    else this.lastId += 1;
    return this.lastId;
    }
}