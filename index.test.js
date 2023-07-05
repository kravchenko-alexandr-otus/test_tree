const {picture, main_tree} = require('./index')
const mod_path = require('path')
const argv = require('minimist')(process.argv.slice(2))

test('Test top/max depth value', ()=>{
    expect(main_tree('./node_modules', 1000001))
    .toEqual("TOO MANY FOLDERS I DON'T WANT TO DO IT...")
})

test('Test min/botom depth value', ()=>{
    expect(main_tree('./node_modules', -1))
    .toEqual("DEPTH SHOULD BE POSITIVE")
})

test('Test ability to output', ()=> {
    expect(main_tree('./node_modules', 0))
    .toEqual("node_modules")
})

test('Test ability to picture filesystem tree', ()=>{
    expect(main_tree('./folder', 1))
    .toEqual(
`folder
|---child_folder
|___file.text`)
})

test('Test ability to picture more deep tree', ()=>{
    expect(main_tree('./folder', 2))
    .toEqual(
`folder
|---child_folder
|    |___child_file.txt
|___file.text`)
})