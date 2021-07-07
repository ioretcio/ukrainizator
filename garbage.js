var text = document.getElementById("fname");

var percent1 = document.getElementById("per1");
var percent2 = document.getElementById("per2");


var label = document.getElementById("labelname");
var label1 = document.getElementById("labelname1");
class pair {
    constructor(a,b) {
        this.a = a;
        this.b = b;
    }
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
let pairs = [];

pairs.push(new pair('i', 'і'));
pairs.push(new pair('r', 'г'));
pairs.push(new pair('o', 'о'));
pairs.push(new pair('p', 'р'));
pairs.push(new pair('m', 'м'));
pairs.push(new pair('n', 'п'));
pairs.push(new pair('h', 'н'));
pairs.push(new pair('b', 'в'));
pairs.push(new pair('t', 'т'));
pairs.push(new pair('a', 'а'));
pairs.push(new pair('c', 'с'));
pairs.push(new pair('e', 'е'));
pairs.push(new pair('k', 'к'));
pairs.push(new pair('x', 'х'));
pairs.push(new pair('y', 'у'));

pairs.push(new pair('H', 'Н'));
pairs.push(new pair('P', 'Р'));
pairs.push(new pair('A', 'А'));
pairs.push(new pair('B', 'В'));
pairs.push(new pair('C', 'С'));
pairs.push(new pair('E', 'Е'));
pairs.push(new pair('K', 'К'));
pairs.push(new pair('M', 'М'));
pairs.push(new pair('O', 'О'));
pairs.push(new pair('P', 'Р'));
pairs.push(new pair('T', 'Т'));
pairs.push(new pair('X', 'Х'));
pairs.push(new pair('Y', 'У'));

pairs.push(new pair('3', 'З'));
pairs.push(new pair('4', 'Ч'));



function refresh()
{
    var cent1 = percent1.value;
    var cent2 = percent2.value;

    var str = text.value;
    var str1 ="";
    for (var i = 0; i < str.length; i++)
    {
        str1 += str[i]
        if(Math.random()<cent2/100){
            str1 += '\u2060';
        }
    }
    for (var i = 0; i < str.length+1; i++) {
        for(var j = 0; j<pairs.length; j++)
        {
            if(str.charAt(i)==pairs[j].a)
            {
                
                if(Math.random()<cent1/100){
                    str = str.replaceAt(i,   pairs[j].b);
                }
                break;
            }
        }
      }
      label.innerHTML = str;
      label1.innerHTML = str1;
}



text.addEventListener('keyup', (event) => {
    refresh();
});

percent1.addEventListener('keyup', (event) => {
    refresh();
});

percent2.addEventListener('keyup', (event) => {
    refresh();
});