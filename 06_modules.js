let filterFn = require('./module.js')
let dir = process.argv[2]
let filterStr = process.argv[3]

filterFn(dir, filterStr, function (error, list) {
  if (error)
    return console.log('There was an error:', error)

  list.forEach(function (file) {
    console.log(file)
  })
})