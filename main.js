const funStuff = [
    ['puppies', 'kittens', 'fish'],
    ['family', 'friends'],
    ['toys', 'crayons']
];
for (let sectionIndex = 0; sectionIndex < funStuff.length; sectionIndex += 1){

    const funStuffSection = 
    funStuff[sectionIndex];
    console.log('section' + sectionIndex);


        for (let itemIndex = 0; itemIndex < funStuffSection.length; itemIndex += 1) {

            const sectionIndex = funStuffSection
            [itemIndex];
            console.log (itemIndex + ':' + sectionIndex)
            }}
            
console.log('Children like to play with ' + funStuff [1][1] + ',');