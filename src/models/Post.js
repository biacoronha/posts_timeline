export default class Post {

    content;
    creationDate;
    editDate

    constructor(content, creationDate) {
        this.content = content;
        this.creationDate = creationDate;
    }

    setContent(content) {
        this.content = content
    }

    setEditDate(editDate) {
        this.editDate = editDate
    }

}