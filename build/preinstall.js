let error = false

const majorNodeVersion = parseInt(/^(\d+)\./.exec(process.versions.node)[1])

if (majorNodeVersion < 14) {
  console.error('\033[1;31m*** Please use node >=14.\033[0;0m')
  error = true
}

if (error) {
  console.log('LHQ&JBN IS SB!')
  process.exit(1)
}
