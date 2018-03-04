class Issue {
    constructor(type, name, sprint, createdBy, description) {
        this.id = Issue.addId();
        this.type = type;
        this.name = name;
        this.sprint = sprint;
        this.createdBy = createdBy;
        this.description = description;

        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.status = statusNew;

        this.task = [];
        this.comments = [];
  
    }


    get Id() {
        return this.id;
    }
    get SprintId() {
        return this.sprint;
    }
    get Type() {
        return this.type;
    }
    get Name() {
        return this.name;
    }
    get Status() {
        return this.status;
    }
    get Description() {
        return this.description;
    }


    set SprintId(id) {
        this.updatedAt = new Date();
        this.SprintId = id;
    }
    set Type(newType) {
        this.updatedAt = new Date();
        this.type = newType;
    }
    
    set Name(newName) {
        this.updatedAt = new Date();
        this.name = newName;
    }
    set Description(newDescription) {
        this.updatedAt =new Date();
        this.description = newDescription;
      }


    static addId() {
        if (!this.lastId) this.lastId = 1;
        else this.lastId += 1;
        return this.lastId;
    }

}