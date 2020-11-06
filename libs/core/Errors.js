export default class Errors{
  constructor(fields) {
    this.errors = this.setErrors(fields)
  }

  /*
   * Set the errors variable and initialise it to have the fields required
   * This is done because of Vue's reactivity issues when finding uninitialised data
   */
  setErrors (fields) {
    let errors = {}
    for (let field in fields) {
      errors[field] = ''
    }
    return errors
  }

  any () {
    for (let field in this.errors) {
      if (this.errors[field]) {
        return true
      }
    }
  }

  /*
   * Checks if the errors object has a certain field
   */
  has (field) {
    if (this.errors[field]) {
      return true
    }
    return false
  }

  /*
   * Return an errors property if it exists within the errors object
   */
  get (field) {
    return this.has(field) ? this.errors[field] : ""
  }

  /*
   * clear the field from errors
   */
  clear (field) {
    if (field) {
      this.errors[field] = ''
    } else {
      this.errors = {}
    }
  }

  /*
   * Record the errors into the errors object
   */
  record (errors) {
    // errors = errors.errors
    // for (let error in errors) {
    //   this.errors[error] = errors[error][0]
    // }
    for (let index in errors) {
      let error = errors[index]
      this.errors[error.field] = error.message;
    }
  }
}
