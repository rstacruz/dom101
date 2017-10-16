/**
 * Normalizes a string by excluding
 */

function normalizeSpaces (string) {
  var klass = string.replace(/ {2,}/g, ' ').trim().split(' ')
  klass = uniq(klass)
  return klass.join(' ')
}

/*
 * Removes duplicates from an array
 */

function uniq (arr) {
  var obj = {}
  var list = []

  for (var i = 0, len = arr.length; i < len; i++) {
    var item = arr[i]
    if (obj[item]) continue
    obj[item] = true
    list.push(item)
  }

  return list
}

function createDiv () {
  return document.createElement('div')
}

module.exports = { normalizeSpaces, uniq, createDiv }
