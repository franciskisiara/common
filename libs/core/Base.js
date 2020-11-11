export default class Base {
  constructor (fields) {
    this.setFields(fields)
  }

  /*
  * Polish the field values so that they are referenced using the this keyword
  */
  setFields (fields) {
    for (let field in fields) {
      this[field] = fields[field]
    }
  }

  /*
  * Get the data from the fields. This method accepts an entire class' scope and removes any unwanted values
  */
  getFields (items = []) {
    let data = Object.assign({}, this)
    delete data['form']
    delete data['search']
    delete data['meta']
    if (items.length > 0) {
      for (let field in data) {
        if (items.indexOf(field) === -1) {
          delete data[field]
        }
      }
    }
    return data
  }
}