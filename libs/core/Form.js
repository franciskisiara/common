import Errors from './Errors'

export default class Form
{
  constructor (fields) {
    this.fields = fields
    this.errors = new Errors(fields)
    this.submitted = this.errorDetected  = false
  }

  /*
   * Save the data that has been passed to the form into the database
   */
  submit (request, url, record) {
    return new Promise((resolve, reject) => {
      let call = request === "get" || request === "delete"
        ? axios[request](url, visa())
        : axios[request](url, record, visa())
      call.then(({data}) => {
        resolve(data)
        this.submitted = true
      }).catch(({ response }) => {
        this.errors.record(response.data)
        reject(response.data)
        this.errorDetected = true
      })
    })
  }
}
