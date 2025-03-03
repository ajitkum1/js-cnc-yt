const books =[

    {title:'book 1',genre:'friction',publish:1988,edition:2006},
    {title:'book 2',genre:'friction1',publish:1986,edition:2004},
    {title:'book 3',genre:'friction2',publish:1987,edition:2003},
    {title:'book 4',genre:'friction',publish:1989,edition:2005}
]

const userBooks = books.filter((bk) => bk.genre==='friction')
console.log(userBooks)

const userBooks1 = books.filter((bk) => {return bk.edition >= 2004})
console.log(userBooks1)