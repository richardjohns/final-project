exports.seed = function (knex, Promise) {
  return knex('videos').del()
    .then(() => {
      return knex('videos').insert([
        {id: 1, vid_url: 'gId6nrMDmUU', quote: 'I love lamp', startTime: 0, quoteStart: 14, quoteEnd: 15, pauseTime: 10, title: 'Anchorman'},
        {id: 2, vid_url: 'VWb1z6ZwUoY', quote: 'We came we saw we kicked it\'s ass', startTime: 42, quoteStart: 76, quoteEnd: 81, pauseTime: 10, title: 'Ghostbusters'},
        {id: 3, vid_url: 'Coemj2qdWMw', quote: 'Happy people just don\'t shoot their husbands', startTime: 65, quoteStart: 77, quoteEnd: 97, pauseTime: 10, title: 'Legally Blonde'},
        {id: 4, vid_url: 'pEOVNmSR7_c', quote: 'Yippee ki-yay mother f*****', startTime: 81, quoteStart: 107, quoteEnd: 112, pauseTime: 10, title: 'Die Hard'},
        {id: 5, vid_url: '1YGfrGKK9Mo', quote: 'I\'m flying Jack', startTime: 24, quoteStart: 39, quoteEnd: 43, pauseTime: 10, title: 'Titanic'},
        {id: 6, vid_url: 'TU7CDejp6Lw', quote: 'Get to the chopper', startTime: 99, quoteStart: 129, quoteEnd: 132, pauseTime: 10, title: 'Predator'},
        {id: 7, vid_url: 'pxPGzj2L3n0', quote: 'And my axe', startTime: 1, quoteStart: 9, quoteEnd: 13, pauseTime: 10, title: 'The Lord of The Rings'},
        {id: 8, vid_url: 'h6sj89xgnl4', quote: 'I am your father', startTime: 91, quoteStart: 103, quoteEnd: 107, pauseTime: 10, title: 'Starwars: the Empire Strikes Back'},
        {id: 9, vid_url: 'vUN7yu7zvz8', quote: 'you\'re a wizard harry', startTime: 14, quoteStart: 21, quoteEnd: 23, pauseTime: 10, title: 'Harry Potter and the Scorcerer\'s Stone'},
        {id: 10, vid_url: 'EemLsTG5fX8', quote: 'I wrote you everyday for a year', startTime: 76, quoteStart: 101, quoteEnd: 104, pauseTime: 10, title: 'The Notebook'},
        {id: 11, vid_url: 'NVPLqbWXdDA', quote: 'leelou dallas multipass', startTime: 50, quoteStart: 59, quoteEnd: 62, pauseTime: 10, title: 'The 5th Element'},
        {id: 12, vid_url: 'RKysEIVJfBs', quote: 'the names bond james bond', startTime: 67, quoteStart: 80, quoteEnd: 90, pauseTime: 10, title: 'Casino Royale'},
        {id: 13, vid_url: 'AyrP-pwDayE', quote: 'you had me at hello', startTime: 75, quoteStart: 91, quoteEnd: 94, pauseTime: 10, title: 'Jerry Maguire'},
        {id: 14, vid_url: 'vL-KQij0I8I', quote: 'from a pile of stuff', startTime: 84, quoteStart: 109, quoteEnd: 111, pauseTime: 10, title: 'The Devil Wears Prada'},
        {id: 15, vid_url: 'oKxsW8DKJQQ', quote: 'you\'re gonna need a bigger boat', startTime: 57, quoteStart: 74, quoteEnd: 77, pauseTime: 10, title: 'Jaws'},
        {id: 16, vid_url: '9FnO3igOkOk', quote: 'you can\'t handle the truth', startTime: 33, quoteStart: 43, quoteEnd: 47, pauseTime: 10, title: 'A Few Good Men'},
        {id: 17, vid_url: 'YbBiXPVKuTA', quote: 'are you not entertained', startTime: 70, quoteStart: 84, quoteEnd: 90, pauseTime: 10, title: 'Gladiator'},
        {id: 18, vid_url: 'luBk4VrMHNI', quote: 'become a pop star and they give you them for free', startTime: 12, quoteStart: 21, quoteEnd: 28, pauseTime: 10, title: 'Love Actually'}
      ])
    })
}
