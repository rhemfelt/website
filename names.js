var names = ["Dustin","Robert","Taylor","Maddi","Andrea","Jen","Zac","Meranda","Maggi","Henry", "Lauren", "Devlin", "Kasey", "Allyn"];

if (names.length % 2 != 0) {
    alert("You must have an even number of names. You currently have " + names.length + " names.");
} else {
    var arr1 = names.slice(), // copy array
        arr2 = names.slice(); // copy array again

    arr1.sort(function() { return 0.5 - Math.random();}); // shuffle arrays
    arr2.sort(function() { return 0.5 - Math.random();});

    while (arr1.length) {
        var name1 = arr1.pop(), // get the last value of arr1
            name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
            //        ^^ if the first value is the same as name1,
            //           get the last value, otherwise get the first

        document.write(name1 + ' gets ' + name2 + '!<br>');
    }
}
