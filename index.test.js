const {picture, main_tree} = require('./index')
const mod_path = require('path')
const mock = require('mock-fs')

beforeEach(()=> {
    mock({
        '/some/path/to/file':{
            'content.txt': 'some text',
            'empty_dir':{}
        },
    })
})


afterEach(() => {
    mock.restore()
})

test('Test top/max depth value', ()=>{
    expect(main_tree('/some', 1000001))
    .toEqual("TOO MANY FOLDERS I DON'T WANT TO DO IT...")
})

test('Test min/botom depth value', ()=>{
    expect(main_tree('/some', -1))
    .toEqual("DEPTH SHOULD BE POSITIVE")
})

test('Test ability to output', ()=> {
    expect(main_tree('/some', 0))
    .toEqual("some")
})

test('Test ability to picture filesystem tree', ()=>{
    expect(main_tree('/some', 1))
    .toEqual(
`some
|___path`)
})

test('Test ability to picture more deep tree', ()=>{
    expect(main_tree('/some', 4))
    .toEqual(
`some
|___path
    |___to
        |___file
            |---content.txt
            |___empty_dir`)
})