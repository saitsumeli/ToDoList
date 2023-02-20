// ekleyeceğimiz itemler
var items = [];
// liste elemanlarını oluşturmak için

var list = document.querySelector('#myList');

// listenin düzenlenmesi
items.forEach(function(item) {

CreateITem(item);

})

// listeye click ekleme 

list.addEventListener('click' , function(item) {

if(item.target.tagName == 'LI') {
    item.target.classList.toggle('checked');
    ToogleDeleteButton();
}


});



// Add tıklayınca listenin sonuna eklenmesi

document.querySelector('#btnCreate').onclick = function() {

var item = document.querySelector('#txtItem').value;


if(item === '') {
    alert('lütfen değer giriniz')
}

CreateITem(item);

}

// hepsini aldığımız kısım  (tek tek almaktansa CreateItem oluşturuyoruz ve tüm Fonksiyonlara buradan çağırıyoruz)

function CreateITem(item) {
    var li = document.createElement('li');
var t = document.createTextNode(item);

li.className = 'list-group-item';
li.appendChild(t);
list.appendChild(li)

var span = document.createElement('span');
var text = document.createTextNode('x')
span.className = 'close'
span.appendChild(text)
li.appendChild(span)

// x basınca silmek

span.onclick = function() {
    var li = this.parentElement;
    li.style.display = 'none'
    // x bastığımızda artık itemın classı checked olmayacak
    li.classList.remove('checked')
}
}

// Tüm butonları silme -> ToogleDeleteButton 20 de verdik

// Burada item seçtiğimizde Delete All butonu geliyor
function ToogleDeleteButton() {

    var checkList = document.querySelectorAll('.list-group-item.checked')

    if(checkList.length>0) {
        document.querySelector('#deleteAll').classList.remove('d-none')
    } else {
        document.querySelector('#deleteAll').classList.add('d-none')

    }

}

// Burada seçtikten sonra siliyoruz 
document.querySelector('#deleteAll').onclick = function() {

    var elements = document.querySelectorAll('.checked')

    elements.forEach(function(item) {
        item.style.display = 'none';
    })
}
