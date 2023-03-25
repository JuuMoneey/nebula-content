// 1.   Create an object for a celebrity and save it to a variable
const celeb = {
    stageName: 'Glorilla',
    profession: 'Female Rapper',
    songs: ['F.N.F', 'Tomorrow', 'Blessed', 'Internet Trolls'],
    age: 23,
    isLyricist: true,
}
console.log(celeb)


// 2.   Using dot-notation add 3 key-value pairs to the celebrity
celeb.realName = 'Gloria'
celeb.musicGenre = 'Hip-Hop/Rap'
celeb.nickName = 'Big Glo'
console.log(celeb)



// 3.   Using bracket-notation add 3 key-value pairs to the celebrity
celeb['hometown'] = 'Memphis'
celeb['label'] = 'CMG'
celeb['top10'] = '10 songs'
console.log(celeb)



// 4.   Write a function that allows us to add or update 3 properties
const addProperty = (obj, prop, val) => {
    obj[prop] = val
}
addProperty(celeb, 'middleName', 'Hallelujah')
addProperty(celeb, 'zodiac', 'Leo')
addProperty(celeb, 'birthday', '07/28/1999')



// 5.   Using a loop - log all the celebrities properties to the console
console.log(celeb)
for(let key in celeb){
    console.log(celeb[key])
}
