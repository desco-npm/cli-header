const clone = require('clone')
const clear = require('clear')

module.exports = (_params = {}) => {
  clear()

  const params = clone(_params)

  params.title = params.title || 'App Name v0.0.0'
  params.size = params.size || '25%'
  params.align = params.align || 'center'
  params.line = params.line || '-'
  params.column = params.column || '|'
  params.leftTop = params.leftTop || '/'
  params.rightTop = params.rightTop || '\\'
  params.leftBottom = params.leftBottom || '\\'
  params.rightBottom = params.rightBottom || '/'

  const maxColumns = require ('term-size')().columns
  const columns = typeof params.size === 'string'
    ? Math.round(maxColumns * (parseInt(params.size) / 100)) 
    : params.size
  const pairColumns = columns % 2 === 0 ? columns : columns - 1
  const halfColumns = pairColumns / 2
  const pairMaxColumns = maxColumns % 2 === 0 ? maxColumns : maxColumns - 1
  const halfMaxColumns = pairMaxColumns / 2
  // const center = halfMaxColumns - (halfColumns) - 2

  let top = ''
  let bottom = ''
  let middle = ''

  for (let i = 0; i < columns - 2; i++) {
    top += params.line
    bottom += params.line
    middle += ' '
  }

  top = params.leftTop + top + params.rightTop
  bottom = params.leftBottom + bottom + params.rightBottom
  middle = params.column + ''.padStart(halfColumns - (params.title.length / 2), ' ')
  middle += params.title
  middle += ''.padStart(halfColumns - (params.title.length / 2), ' ') + params.column

  if (middle.length > columns) {
    middle = middle.slice(0, 1) + middle.slice(2)
  }

  switch (params.align) {
    case 'left': {}
      break
    case 'right': {
      top = ''.padStart(maxColumns - columns, ' ') + top
      bottom = ''.padStart(maxColumns - columns, ' ') + bottom
      middle = ''.padStart(maxColumns - columns, ' ') + middle
    }
      break
    case 'center':
    default: {
      top = ''.padStart(halfMaxColumns - halfColumns, ' ') + top
      bottom = ''.padStart(halfMaxColumns - halfColumns, ' ') + bottom
      middle = ''.padStart(halfMaxColumns - halfColumns, ' ') + middle
    }
  }

  console.log(top)
  console.log(middle)
  console.log(bottom)
  console.log()
}